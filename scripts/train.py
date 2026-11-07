"""
P1 -- Train, evaluate and export everything the website needs (PLAN.md section 5, steps 3-10).

Models (Model B+ is intentionally NOT included):
  1. Logistic regression    FEAT_A   baseline                  -> metrics.json "baseline_logreg"
  2. Decision tree depth 2  FEAT_A   readable rules            -> metrics.json "tree_rules"
  3. Model A  LightGBM      FEAT_A   Act 1 (rediscovers NASA)  -> "A", pA, web/src/model/model_A.js
  4. Model B  LightGBM      FEAT_B   Act 2 (no MOID)           -> "B", pB, web/src/model/model_B.js
  5. Albedo model LightGBM  SIZE_FEATS Act 4 (hidden hazards)  -> "size", "hidden_hazards", D_* / hidden
     (median + 5%/95% quantile regressors on log10 albedo, trained on every measured asteroid; size then comes
      from the physics formula. Predicting diameter directly failed: trees can't extrapolate to faint H.)

Changes from the PLAN.md snippets (agreed fixes):
  * Model B keeps H and drops only MOID, so Act 2 tests "can it work out Earth-crossing geometry
    from orbit shape?" instead of failing because it can't tell a 30 m rock from a 300 m one.
  * pA / pB are RISK SCORES, not probabilities (class_weight="balanced" inflates them).
    Field names stay pA/pB so Contract 1 doesn't change; say "risk score" on the site.
  * pA / pB on the website come from a model that never saw that asteroid:
    training rows -> 5-fold out-of-fold score (the same CV used to pick thresholds),
    test rows     -> final model trained on the training set.
  * asteroids.json is built from scratch (no rename), so 'name'/'pha' can't be duplicated.
  * worst_misses uses the key "class" (Contract 2), not "cls".
  * reality_check is a confirmation on real flyby records, not independent proof (see metrics note).

Run from the repo root:
    python scripts/train.py
    python scripts/train.py --sbdb data/raw/sbdb.csv --cad data/raw/cad.csv
"""
import argparse
import json
import os
import sys
import time

import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (average_precision_score, confusion_matrix, f1_score,
                             precision_recall_curve, precision_score, recall_score,
                             roc_auc_score, roc_curve)
from sklearn.model_selection import StratifiedKFold, train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier, export_text

try:
    import lightgbm as lgb
    HAVE_LGBM = True
except ImportError:
    from sklearn.ensemble import HistGradientBoostingClassifier
    HAVE_LGBM = False

SEED = 42
FEAT_A = ["a", "e", "i", "om", "w", "q", "ad", "H", "moid"]
FEAT_B = ["a", "e", "i", "om", "w", "q", "ad", "H"]       # MOID removed, H kept
TARGET_RECALL = 0.95                                        # PLAN step 6
LGB_PARAMS = dict(n_estimators=200, num_leaves=15, learning_rate=0.05,
                  class_weight="balanced", random_state=SEED, verbose=-1)


def make_gbm():
    if HAVE_LGBM:
        return lgb.LGBMClassifier(**LGB_PARAMS)
    return HistGradientBoostingClassifier(max_iter=200, max_leaf_nodes=15, learning_rate=0.05,
                                          class_weight="balanced", random_state=SEED)


# ------------------------------------------------------------------ step 2: load + clean
def load(path):
    df = pd.read_csv(path, dtype={"pdes": str, "name": str, "spkid": str}, low_memory=False)
    print(f"  all rows in file: {len(df):,}")
    df = df[df["neo"] == "Y"].copy()
    neo_rows = len(df)
    num = ["a", "e", "i", "om", "w", "q", "ad", "ma", "H", "moid"]
    df[num] = df[num].apply(pd.to_numeric, errors="coerce")
    df = df.dropna(subset=num + ["pha"])
    df = df[df["e"] < 1]                                     # bound orbits only
    df["label"] = (df["pha"] == "Y").astype(int)
    df["pdes"] = df["pdes"].str.strip()
    df["full_name"] = df["full_name"].str.strip()
    rule = ((df["moid"] <= 0.05) & (df["H"] <= 22.0)).astype(int)
    info = dict(neo_rows=int(neo_rows), dropped=int(neo_rows - len(df)), used=int(len(df)),
                pha=int(df["label"].sum()), labels_disagreeing_with_nasa_rule=int((rule != df["label"]).sum()))
    return df.reset_index(drop=True), info


# ------------------------------------------------------------------ helpers
def oof_scores(X, y, k=5):
    """5-fold out-of-fold risk scores on the training set (the 'extra fits' for thresholds)."""
    oof = np.zeros(len(y))
    for tr, va in StratifiedKFold(k, shuffle=True, random_state=SEED).split(X, y):
        oof[va] = make_gbm().fit(X.iloc[tr], y.iloc[tr]).predict_proba(X.iloc[va])[:, 1]
    return oof


def pick_threshold(y, oof, target_recall=TARGET_RECALL):
    prec, rec, thr = precision_recall_curve(y, oof)
    ok = np.where(rec[:-1] >= target_recall)[0]
    return float(thr[ok[-1]]) if len(ok) else 0.5


def thin(a, n=200):
    step = max(1, len(a) // n)
    return [round(float(v), 4) for v in a[::step]]


def importance(model, feats):
    if not HAVE_LGBM:
        return {}
    gain = model.booster_.feature_importance("gain")
    return dict(sorted(zip(feats, [round(float(g), 1) for g in gain]), key=lambda kv: -kv[1]))


def report(y, p, thr, model, feats):
    pred = (p >= thr).astype(int)
    fpr, tpr, _ = roc_curve(y, p)
    pr, rc, _ = precision_recall_curve(y, p)
    return dict(precision=round(precision_score(y, pred, zero_division=0), 4),
                recall=round(recall_score(y, pred), 4), f1=round(f1_score(y, pred), 4),
                roc_auc=round(roc_auc_score(y, p), 4), pr_auc=round(average_precision_score(y, p), 4),
                threshold=round(thr, 4), confusion=confusion_matrix(y, pred, labels=[0, 1]).tolist(),
                roc=dict(fpr=thin(fpr), tpr=thin(tpr)), pr=dict(precision=thin(pr), recall=thin(rc)),
                importance=importance(model, feats), features=feats)


def explain_miss(r):
    """Auto-written first draft for worst_misses 'why' -- edit by hand before the demo."""
    reasons = []
    if r["H"] > 21.5:
        reasons.append(f"size is borderline (H {r['H']:.2f}, cutoff 22)")
    if r["i"] > 20:
        reasons.append(f"high inclination ({r['i']:.0f} deg)")
    if r["moid"] > 0.04:
        reasons.append(f"MOID {r['moid']:.3f} AU sits just inside the 0.05 cutoff")
    if r["q"] > 1.0:
        reasons.append(f"perihelion q {r['q']:.2f} AU is outside Earth's orbit")
    return "; ".join(reasons) or "orbit shape looks like many safe NEOs"


# ------------------------------------------------------------------ step 10b: Act 4 size model
SIZE_FEATS = ["H", "a", "e", "i", "q", "ad", "moid_jup", "t_jup", "cls"]   # no albedo: unknown for unmeasured rocks
SIZE_COLS = ["D_pred", "D_lo", "D_hi", "D_meas", "hidden"]
BASE_ALBEDO = 0.14                                          # the assumption behind NASA's H <= 22 ~ 140 m


def diameter_m(albedo, H):
    """Standard brightness -> size formula, in meters."""
    return 1329e3 / np.sqrt(albedo) * 10 ** (-H / 5)


def act4_hidden_hazards(sbdb_path, metrics):
    """Learn albedo from measured asteroids, flag NEOs that are probably >= 140 m but fail NASA's H <= 22 cutoff.

    Returns a frame indexed by spkid with SIZE_COLS (meters). Fills metrics["size"] and metrics["hidden_hazards"].
    """
    # spkid as str, same as load(), or the join back onto `out` silently matches nothing
    full = pd.read_csv(sbdb_path, dtype={"pdes": str, "spkid": str}, low_memory=False)
    numc = ["H", "a", "e", "i", "q", "ad", "moid", "moid_jup", "t_jup", "diameter", "albedo"]
    full[numc] = full[numc].apply(pd.to_numeric, errors="coerce")
    full = full.dropna(subset=["H", "a", "e", "i", "q", "ad"])
    full["cls"] = full["class"].astype("category")            # same categories everywhere

    meas = full[(full["diameter"] > 0) & (full["albedo"] > 0)].copy()
    meas["logp"] = np.log10(meas["albedo"])                    # learn darkness; the formula handles brightness
    s_test = meas[meas["neo"] == "Y"].sample(frac=0.3, random_state=SEED)   # test on measured NEOs only
    s_train = meas.drop(s_test.index)
    print(f"  measured sizes: {len(meas):,} ({(meas['neo'] == 'Y').sum():,} NEOs) | "
          f"train {len(s_train):,} | test {len(s_test):,} NEOs")

    sp = dict(n_estimators=400, learning_rate=0.05, num_leaves=31, random_state=SEED, verbose=-1)
    med = lgb.LGBMRegressor(**sp).fit(s_train[SIZE_FEATS], s_train["logp"])
    p_lo = lgb.LGBMRegressor(objective="quantile", alpha=0.05, **sp).fit(s_train[SIZE_FEATS], s_train["logp"])
    p_hi = lgb.LGBMRegressor(objective="quantile", alpha=0.95, **sp).fit(s_train[SIZE_FEATS], s_train["logp"])
    sizes = lambda X: (diameter_m(10 ** med.predict(X[SIZE_FEATS]), X["H"]),
                       diameter_m(10 ** p_hi.predict(X[SIZE_FEATS]), X["H"]),     # brighter surface -> smaller
                       diameter_m(10 ** p_lo.predict(X[SIZE_FEATS]), X["H"]))     # darker surface -> bigger

    true_d = s_test["diameter"] * 1000                         # km -> m
    pred_d, lo_d, hi_d = sizes(s_test)
    base_d = diameter_m(BASE_ALBEDO, s_test["H"])
    err = lambda p: round(float(np.median(abs(p - true_d) / true_d)), 3)

    # validation: measured NEOs that ARE >= 140 m but faint (H > 22) -- real hidden hazards. Does the model see them?
    truly_hidden = (true_d >= 140) & (s_test["H"] > 22)
    val = dict(true_hidden_in_test=int(truly_hidden.sum()),
               caught=int((truly_hidden & (pred_d >= 140)).sum()),
               caught_by_formula=int((truly_hidden & (base_d >= 140)).sum()))
    metrics["size"] = dict(n_test=int(len(s_test)), median_err_model=err(pred_d), median_err_baseline=err(base_d),
                           interval_coverage=round(float(((true_d >= lo_d) & (true_d <= hi_d)).mean()), 3),
                           interval="from the 5%-95% albedo quantiles",
                           baseline=f"D = 1329 km / sqrt({BASE_ALBEDO}) * 10^(-H/5)")
    s = metrics["size"]
    print(f"  size error (median): model {s['median_err_model']:.1%} vs formula {s['median_err_baseline']:.1%} | "
          f"range coverage {s['interval_coverage']:.1%}")
    print(f"  validation: {val['caught']}/{val['true_hidden_in_test']} real big-but-faint NEOs caught "
          f"(formula: {val['caught_by_formula']})")

    neos = full[(full["neo"] == "Y") & (full["e"] < 1)].copy()
    d, d_lo, d_hi = sizes(neos)
    neos["D_pred"], neos["D_lo"], neos["D_hi"] = d.round(), d_lo.round(), d_hi.round()
    neos["D_meas"] = (neos["diameter"] * 1000).round()
    best = neos["D_meas"].fillna(neos["D_pred"])               # a real measurement beats our estimate
    neos["hidden"] = (neos["moid"] <= 0.05) & (neos["pha"] == "N") & (best >= 140)
    strong = neos["hidden"] & (neos["D_meas"].notna() | (neos["D_lo"] >= 140))

    neos["strong"] = strong
    top = neos[neos["hidden"]].sort_values(["strong", "D_lo"], ascending=False).head(10)
    metrics["hidden_hazards"] = dict(
        count=int(neos["hidden"].sum()), strong=int(strong.sum()), validation=val,
        top=[dict(name=r["full_name"].strip(), H=float(r["H"]), moid=float(r["moid"]),
                  D_pred=float(r["D_pred"]), D_lo=float(r["D_lo"]), D_hi=float(r["D_hi"]),
                  D_meas=None if pd.isna(r["D_meas"]) else float(r["D_meas"]), strong=bool(r["strong"]))
             for _, r in top.iterrows()],
        measured=int((neos["hidden"] & neos["D_meas"].notna()).sum()),
        note=("Candidates for follow-up observation, not confirmed threats. 'measured' = already measured at "
              ">= 140 m by NEOWISE yet not labeled hazardous, because H > 22."))
    print(f"  hidden hazards: {metrics['hidden_hazards']['count']} ({metrics['hidden_hazards']['strong']} strong)")
    for r in metrics["hidden_hazards"]["top"][:5]:
        print(f"    {r['name']}: H {r['H']:.2f} | ~{r['D_pred']:.0f} m ({r['D_lo']:.0f}-{r['D_hi']:.0f})")
    return neos.drop_duplicates("spkid").set_index("spkid")[SIZE_COLS]


# ------------------------------------------------------------------ main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sbdb", default="data/raw/sbdb.csv")
    ap.add_argument("--cad", default="data/raw/cad.csv")
    ap.add_argument("--data-out", default="web/public/data")
    ap.add_argument("--model-out", default="web/src/model")
    args = ap.parse_args()
    for p in (args.sbdb, args.cad):
        if not os.path.exists(p):
            sys.exit(f"Can't find {p}. Run this from the repo root, or pass --sbdb / --cad with the right paths.")
    os.makedirs(args.data_out, exist_ok=True)
    os.makedirs(args.model_out, exist_ok=True)
    if not HAVE_LGBM:
        print("  [warn] lightgbm is not installed -> using sklearn HistGradientBoosting and skipping the JS export."
              "\n         Fix: pip install lightgbm m2cgen")
    t0 = time.time()

    print("1. Load + clean")
    df, info = load(args.sbdb)
    print(f"  NEOs used: {info['used']:,} ({info['dropped']} dropped) | PHAs: {info['pha']:,} "
          f"({info['pha'] / info['used']:.1%}) | labels disagreeing with NASA's rule: "
          f"{info['labels_disagreeing_with_nasa_rule']}")
    assert not df["full_name"].str.contains("Ceres").any()

    train, test = train_test_split(df, test_size=0.2, stratify=df["label"], random_state=SEED)
    ytr, yte = train["label"], test["label"]
    print(f"  train {len(train):,} | test {len(test):,} ({int(yte.sum())} PHAs)")

    print("2. Baseline + readable rules")
    logreg = make_pipeline(StandardScaler(), LogisticRegression(class_weight="balanced", max_iter=2000))
    logreg.fit(train[FEAT_A], ytr)
    pL = logreg.predict_proba(test[FEAT_A])[:, 1]
    tree = DecisionTreeClassifier(max_depth=2, class_weight="balanced", random_state=SEED).fit(train[FEAT_A], ytr)
    rules = export_text(tree, feature_names=FEAT_A, decimals=3)
    print("\n".join("    " + line for line in rules.splitlines()))

    print("3. Models A and B (5-fold CV threshold for recall >= 0.95, then final fit)")
    fitted, oof, p_test, thr = {}, {}, {}, {}
    for key, feats in (("A", FEAT_A), ("B", FEAT_B)):
        oof[key] = oof_scores(train[feats], ytr)
        thr[key] = pick_threshold(ytr, oof[key])
        fitted[key] = make_gbm().fit(train[feats], ytr)
        p_test[key] = fitted[key].predict_proba(test[feats])[:, 1]
        pred = p_test[key] >= thr[key]
        print(f"  Model {key}: ROC-AUC {roc_auc_score(yte, p_test[key]):.4f} | PR-AUC "
              f"{average_precision_score(yte, p_test[key]):.4f} | cutoff {thr[key]:.3f} | recall "
              f"{recall_score(yte, pred):.3f} | precision {precision_score(yte, pred, zero_division=0):.3f}")
    print(f"  LogReg (baseline): ROC-AUC {roc_auc_score(yte, pL):.4f} | PR-AUC {average_precision_score(yte, pL):.4f}")

    metrics = {
        "A": report(yte, p_test["A"], thr["A"], fitted["A"], FEAT_A),
        "B": report(yte, p_test["B"], thr["B"], fitted["B"], FEAT_B),
        "baseline_logreg": dict(precision=round(precision_score(yte, pL >= .5), 4),
                                recall=round(recall_score(yte, pL >= .5), 4),
                                roc_auc=round(roc_auc_score(yte, pL), 4),
                                pr_auc=round(average_precision_score(yte, pL), 4)),
        "tree_rules": rules,
        "counts": dict(train=int(len(train)), test=int(len(test)), pha_rate=round(float(ytr.mean()), 4),
                       neos_used=info["used"], dropped=info["dropped"],
                       labels_disagreeing_with_nasa_rule=info["labels_disagreeing_with_nasa_rule"]),
        "score_note": "pA/pB are risk scores, not probabilities (class_weight='balanced' inflates them).",
    }

    print("4. Act 3 reality check (cad)")
    cad = pd.read_csv(args.cad, dtype={"des": str})
    cad["des"] = cad["des"].str.strip()
    cad["dist"] = pd.to_numeric(cad["dist"], errors="coerce")
    closest = cad.groupby("des")["dist"].min()
    cad_max = float(cad["dist"].max())
    t = test.assign(pA=p_test["A"], pB=p_test["B"], closeApproach=test["pdes"].map(closest))
    joined = float(t["closeApproach"].notna().mean())
    flag, near = t["pB"] >= thr["B"], t["closeApproach"] < 0.05
    metrics["reality_check"] = dict(
        flagged_with_approach_lt_005=round(float(near[flag].mean()), 4),
        not_flagged_with_approach_lt_005=round(float(near[~flag].mean()), 4),
        test_rows_with_any_approach=round(joined, 4),
        cad_max_dist_au=round(cad_max, 4),
        median_closest_au_pha=round(float(t.loc[t["label"] == 1, "closeApproach"].median()), 5),
        median_closest_au_not_pha=round(float(t.loc[t["label"] == 0, "closeApproach"].median()), 5),
        note=(f"Confirmation on real flyby records, not independent proof: nothing can pass closer than its "
              f"MOID, and PHAs are defined by MOID. cad.csv only lists passes within {cad_max:.2f} AU."))
    rc = metrics["reality_check"]
    print(f"  join rate {joined:.1%} | approach < 0.05 AU: flagged {rc['flagged_with_approach_lt_005']:.1%} "
          f"vs not flagged {rc['not_flagged_with_approach_lt_005']:.1%} | cad max dist {cad_max:.3f} AU")
    if joined < 0.05:
        print("  [warn] almost no test rows matched cad.csv -- check that pdes and des look the same")

    cad["date"] = pd.to_datetime(cad["cd"], format="%Y-%b-%d %H:%M", errors="coerce")
    today = pd.Timestamp.today().normalize()
    up = cad[(cad["date"] >= today) & (cad["date"] <= today + pd.DateOffset(years=10))].sort_values("date")
    names = df.set_index("pdes")["full_name"]
    approaches = pd.DataFrame({
        "pdes": up["des"],
        "name": (up["fullname"].str.strip() if "fullname" in up else up["des"].map(names)),
        "date": up["cd"], "dist": up["dist"].round(5),
        "v_rel": pd.to_numeric(up["v_rel"], errors="coerce").round(2)})
    approaches.to_json(os.path.join(args.data_out, "approaches.json"), orient="records")
    print(f"  approaches.json: {len(approaches):,} flybys in the next 10 years")

    print("5. Worst misses (Model B, test set)")
    miss = t[(t["label"] == 1) & (t["pB"] < thr["B"])].sort_values("pB").head(5)
    metrics["worst_misses"] = [dict(name=r["full_name"], pA=round(float(r["pA"]), 3), pB=round(float(r["pB"]), 3),
                                    **{"class": r["class"]}, why=explain_miss(r)) for _, r in miss.iterrows()]
    for m in metrics["worst_misses"]:
        print(f"  {m['name']}: pB {m['pB']} -- {m['why']}")

    sz = None
    if HAVE_LGBM:
        print("5b. Act 4: size model + hidden hazards")
        sz = act4_hidden_hazards(args.sbdb, metrics)
    else:
        print("5b. [skip] Act 4 needs lightgbm (quantile regression). Fix: pip install lightgbm")

    print("6. Export")
    if HAVE_LGBM:
        try:
            import m2cgen
            sys.setrecursionlimit(100000)
            for key, feats in (("A", FEAT_A), ("B", FEAT_B)):
                js = m2cgen.export_to_javascript(fitted[key])
                path = os.path.join(args.model_out, f"model_{key}.js")
                with open(path, "w") as f:
                    f.write(f"// feature order: {feats}\n// returns [p_safe, p_hazard] (a risk score)\nexport {js}")
                print(f"  {path}: {os.path.getsize(path) / 1e6:.2f} MB")
        except ImportError:
            print("  [warn] m2cgen not installed -> model_A.js / model_B.js not written. Fix: pip install m2cgen")

    full = {}
    for key in ("A", "B"):
        s = pd.Series(np.nan, index=df.index)
        s.loc[train.index] = oof[key]
        s.loc[test.index] = p_test[key]
        full[key] = s
    out = pd.DataFrame({
        "name": df["full_name"], "pdes": df["pdes"], "class": df["class"],
        "a": df["a"].round(4), "e": df["e"].round(4), "i": df["i"].round(2),
        "om": df["om"].round(2), "w": df["w"].round(2), "ma": df["ma"].round(1),
        "q": df["q"].round(4), "ad": df["ad"].round(3), "H": df["H"].round(2), "moid": df["moid"].round(5),
        "pha": df["label"].astype(int), "pA": full["A"].round(3), "pB": full["B"].round(3),
        "test": df.index.isin(test.index), "closeApproach": df["pdes"].map(closest).round(5),
    })
    if sz is not None:
        for c in SIZE_COLS:
            out[c] = df["spkid"].map(sz[c]).values
        out["hidden"] = out["hidden"].fillna(False).astype(bool)
        print(f"  size fields joined for {out['D_pred'].notna().mean():.1%} of asteroids")
    assert out.columns.is_unique
    path = os.path.join(args.data_out, "asteroids.json")
    out.to_json(path, orient="records")
    mb = os.path.getsize(path) / 1e6
    print(f"  {path}: {len(out):,} asteroids, {mb:.1f} MB" + ("  [over 10 MB!]" if mb > 10 else ""))
    with open(os.path.join(args.data_out, "metrics.json"), "w") as f:
        json.dump(metrics, f, indent=1)
    print(f"  {os.path.join(args.data_out, 'metrics.json')} written | done in {time.time() - t0:.0f}s")


if __name__ == "__main__":
    main()

# Is It Coming For Us? — Teaching a Machine to Spot Hazardous Asteroids

**Problem 2: Teach a Machine to See Space** · Deadline: **12:00 PM (noon) tomorrow** · Team of 3

> We train a model to predict which near-Earth asteroids are *Potentially Hazardous* from their orbits alone,
> test it on asteroids it has never seen, check it against real close approaches to Earth, and show every
> prediction — including its mistakes — as real orbits in a live 3D solar system.

> **⚠️ Stack change (Nov 7):** the website is now **React + Vite** (source in `web/`, `npm run build` → `docs/`).
> Path mapping for the steps below: `docs/data/*.json` → `web/public/data/`, `docs/audio/` → `web/public/audio/`,
> `docs/model/*.js` → `web/src/model/`, `main.js`+`kepler.js` → `web/src/three/SolarSystem.jsx`+`kepler.js`,
> `ui.js`/`charts.js` → React components in `web/src/components/`. The window events of Contract 4 become shared
> state in `web/src/App.jsx`. The JSON contracts are unchanged. Run with `cd web && npm run dev`. See README.md.

**How to use this doc:** everyone reads sections 1–4 (10 min). Then each person goes to **their own section**
(5, 6 or 7) and works through it **in order**. Every step ends with a ✅ **Check**. Don't move on until it passes.
Section 8 (Mission Control Live, the ElevenLabs commentary) is shared and happens **tomorrow morning**. Section 9 is the two-day schedule.

---

## 1. The pitch (what judges should remember)

1. **Act 1: the model rediscovers NASA's rule.** Given all features, the model learns
   *MOID ≤ 0.05 AU and H ≤ 22*, which is NASA's official definition of a hazardous asteroid. Nobody told it.
2. **Act 2: take away the answer key.** Remove MOID and H. Model B gets only the raw orbit shape
   (a, e, i, Ω, ω, …) and has to work out Earth-crossing geometry for itself.
3. **Act 3: reality check.** We check Model B's warnings against NASA's record of real close approaches
   to Earth, data the model never saw.
4. **⭐ Act 4: hidden hazards (THE HEADLINE).** NASA uses brightness (H ≤ 22) as a stand-in for "140 m or bigger,"
   because most asteroids have never had their size measured. But a **dark** asteroid can be big and still look faint.
   We train a size model on asteroids whose diameter *was* measured, apply it to the ones that weren't, and flag
   near-Earth asteroids that are **probably big enough to be hazardous but slip past the brightness cutoff**.
   That's a new, specific list that no formula gives you, and it's our answer to *"why machine learning?"*
5. **See it.** Every asteroid in 3D, colored by predicted risk, with mistakes highlighted and live predictions
   for any orbit you type in.
6. **Hear it.** An ElevenLabs "mission control" voice narrates the four acts and reads out the model's verdict
   on the asteroids you click.

---

## 2. Our data (already downloaded)

| File (put in `data/raw/`) | What it is | Used for |
|---|---|---|
| `sbdb.csv` (dataset 1: `spkid, full_name, pdes, name, neo, pha, class, H, diameter, albedo, e, a, q, ad, i, om, w, ma, per_y, moid, moid_jup, t_jup, …`) | JPL Small-Body Database, every known asteroid | **Training and testing** (Acts 1–2) + **size model** (Act 4, uses the measured `diameter`) |
| `cad.csv` (dataset 2: `des, orbit_id, jd, cd, dist, dist_min, dist_max, v_rel, v_inf, t_sigma_f, h, diameter, fullname`) | JPL close approaches to Earth since 1900 | **Act 3 reality check** + **3D flybys**. **Never a training feature** (it's basically MOID again) |

⚠️ **Rules for the data:**
- Rename the two files exactly `sbdb.csv` and `cad.csv`.
- **Never open-and-save them in Excel.** Excel changes designations and dates. Read only, or use pandas.
- The `#######` cells are just Excel columns too narrow to show dates. The data is fine.
- **Filter to `neo == 'Y'`.** Main-belt asteroids (Ceres, etc.) are never hazardous and would make the model look falsely perfect.
- Read `pdes` and `des` as **text** (`dtype=str`). Numbered asteroids (`170903`) and provisional ones (`2018 BM3`) have to match as strings.

### Features
| Feature | Meaning | Model A | Model B |
|---|---|:-:|:-:|
| `a` | semi-major axis (AU) | ✅ | ✅ |
| `e` | eccentricity | ✅ | ✅ |
| `i` | inclination (deg) | ✅ | ✅ |
| `om` | longitude of ascending node Ω (deg) | ✅ | ✅ |
| `w` | argument of perihelion ω (deg) | ✅ | ✅ |
| `q`, `ad` | perihelion / aphelion distance (AU) | ✅ | ✅ |
| `H` | absolute magnitude (smaller H = bigger rock) | ✅ | ❌ |
| `moid` | min. distance between its orbit and Earth's (AU) | ✅ | ❌ |
| `pha` | **label** Y/N | target | target |

---

## 3. The stack

| Layer | Tool | Version |
|---|---|---|
| Language (ML) | Python | 3.10+ |
| Data | `pandas`, `numpy` | latest |
| Models | `scikit-learn`, `lightgbm` | latest |
| Explainability | `shap`, `sklearn.tree.export_text` | latest |
| Model → browser | `m2cgen` (turns a trained model into a JS function) | latest |
| Notebook | `jupyter` + `matplotlib` | latest |
| 3D | **Three.js** via CDN import map, vanilla JS, **no build step** | `three@0.160.0` |
| UI controls | `lil-gui` | `0.19.2` |
| Charts | `Chart.js` | `4.4.1` |
| Voice narration | **ElevenLabs** text-to-speech (`elevenlabs` Python SDK). Audio is **made ahead of time** as MP3s, so the API key never reaches the website | latest |
| Local server | `python -m http.server` (opening the HTML file directly won't work, because browsers block loading the JSON) | — |
| Hosting | **GitHub Pages** from the `/docs` folder | — |
| Version control | Git + GitHub, everyone on `main`, **each person edits only their own files** | — |

### Repo layout
```
asteroid-hazard/
├── PLAN.md
├── README.md                     # submission write-up              (P1 results, P3 intro)
├── requirements.txt              #                                   (P1)
├── data/raw/sbdb.csv             # dataset 1 (gitignored if >100MB)  (P1)
├── data/raw/cad.csv              # dataset 2                         (P1)
├── scripts/
│   ├── prepare_data.py           # clean + filter + split            (P1)
│   ├── train.py                  # train, evaluate, export to docs/  (P1)
│   └── narrate.py                # ElevenLabs → docs/audio/*.mp3     (P1)
├── narration/lines.json          # what the voice says               (P3 writes)
├── .env                          # ELEVENLABS_API_KEY=…  (gitignored, NEVER commit)
├── notebooks/train.ipynb         # same thing with plots for judges  (P1)
└── docs/                         # ← the website (GitHub Pages serves this folder)
    ├── index.html                # page layout                       (P3)
    ├── style.css                 #                                   (P3)
    ├── charts.js                 # metrics + learned panels          (P3)
    ├── ui.js                     # info panel, sliders, presets      (P3)
    ├── main.js                   # Three.js scene                    (P2)
    ├── kepler.js                 # orbit math                        (P2)
    ├── narration.js              # plays the MP3s                    (P3)
    ├── audio/                    # generated MP3s + manifest.json    (P1)
    ├── model/model_A.js          # m2cgen export                     (P1)
    ├── model/model_B.js          #                                   (P1)
    └── data/
        ├── asteroids.json        #                                   (P3 mock → P1 real)
        ├── metrics.json          #                                   (P3 mock → P1 real)
        └── approaches.json       # upcoming flybys                   (P1)
```

---

## 4. Kickoff — all three together (first 15 minutes)

1. **One person** creates a GitHub repo `asteroid-hazard` (public) and adds the other two as collaborators
   (Settings → Collaborators).
2. **Everyone** clones it:
   ```bash
   git clone https://github.com/<owner>/asteroid-hazard.git
   ```
3. Read the **contracts** below out loud and agree on them. These are the only things that connect your three pieces of work.
4. **Git routine for everyone, every time you push:**
   ```bash
   git pull --rebase
   git add <your files only>
   git commit -m "what you did"
   git push
   ```
5. Set timers for the check-ins: **+1:30**, **+3:00**, **+4:15**, **+4:45**.

✅ **Check:** all three can push to the repo. Everyone knows which files are theirs (see the layout above).

### Contract 1 — `docs/data/asteroids.json` (array, one object per NEO)
```json
{ "name": "99942 Apophis (2004 MN4)", "pdes": "99942", "class": "ATE",
  "a": 0.9224, "e": 0.1911, "i": 3.34, "om": 203.96, "w": 126.60, "ma": 142.0,
  "q": 0.746, "ad": 1.099, "H": 19.09, "moid": 0.0003,
  "pha": 1, "pA": 0.99, "pB": 0.87, "test": true, "closeApproach": 0.0002,
  "D_pred": 370, "D_lo": 290, "D_hi": 460, "D_meas": 340, "hidden": false }
```
`pA`/`pB` = hazard probability from Model A/B. `test` = asteroid was in the unseen test set.
`closeApproach` = closest recorded approach to Earth in AU from `cad.csv` (or `null`).
`D_pred` / `D_lo` / `D_hi` = Act 4 size estimate in meters with an 80% range. `D_meas` = measured diameter in meters (or `null`).
`hidden` = Act 4 hidden hazard (orbit close to Earth's, officially not hazardous, but probably ≥ 140 m).
These five fields arrive with **handoff #2** (Person 1, step 10b). Until then the site must work without them.

### Contract 2 — `docs/data/metrics.json`
```json
{
  "A": { "precision": 0, "recall": 0, "f1": 0, "roc_auc": 0, "pr_auc": 0, "threshold": 0.5,
         "confusion": [[0, 0], [0, 0]],
         "roc": { "fpr": [], "tpr": [] }, "pr": { "precision": [], "recall": [] },
         "importance": { "moid": 0, "H": 0 } },
  "B": { "same shape as A": true },
  "baseline_logreg": { "precision": 0, "recall": 0, "roc_auc": 0, "pr_auc": 0 },
  "tree_rules": "|--- moid <= 0.05\n|   |--- H <= 22.0 -> PHA ...",
  "reality_check": { "flagged_with_approach_lt_005": 0.0, "not_flagged_with_approach_lt_005": 0.0 },
  "worst_misses": [ { "name": "", "pA": 0, "pB": 0, "class": "", "why": "" } ],
  "size": { "n_test": 0, "median_err_model": 0.0, "median_err_baseline": 0.0, "interval_coverage": 0.0 },
  "hidden_hazards": { "count": 0, "strong": 0,
                      "validation": { "true_hidden_in_test": 0, "caught": 0 },
                      "top": [ { "name": "", "H": 0, "moid": 0, "D_pred": 0, "D_lo": 0, "D_hi": 0 } ] },
  "counts": { "train": 0, "test": 0, "pha_rate": 0 }
}
```
`confusion` = `[[TN, FP], [FN, TP]]`.

### Contract 3 — `docs/data/approaches.json` (upcoming flybys, sorted by date)
```json
{ "pdes": "99942", "name": "99942 Apophis (2004 MN4)", "date": "2029-Apr-13 21:46", "dist": 0.00025, "v_rel": 7.42 }
```

### Contract 4 — browser events (how P2 and P3 talk without editing each other's files)
| Event | Fired by | Listened to by | `detail` |
|---|---|---|---|
| `asteroid-selected` | P2 (click in 3D) | P3 (info panel) | an asteroid object (Contract 1) |
| `view-changed` | P3 (toggles) | P2 | `{ model: "A"\|"B", testOnly: bool, showMistakes: bool, showHidden: bool }` |
| `custom-asteroid` | P3 (sliders) | P2 | `{ a, e, i, om, w, H, moid }` |
| `custom-scored` | P2 | P3 | `{ pA, pB }` |

```js
// fire
window.dispatchEvent(new CustomEvent('asteroid-selected', { detail: asteroid }));
// listen
window.addEventListener('asteroid-selected', (ev) => showInfo(ev.detail));
```

---

## 5. 🧠 Person 1 — ML Lead

**Owns:** `scripts/`, `notebooks/`, `requirements.txt`, `docs/model/*`, real `docs/data/*.json`, README results section.
**Your one non-negotiable:** real exports pushed by **+1:30**.

### Step 1 — Environment (5 min)
```bash
python -m venv .venv
.venv\Scripts\activate            # Windows  (macOS/Linux: source .venv/bin/activate)
pip install pandas numpy scikit-learn lightgbm shap m2cgen matplotlib jupyter
pip freeze > requirements.txt
```
Copy the two CSVs into `data/raw/` as `sbdb.csv` and `cad.csv`. If `sbdb.csv` is over 100 MB, add
`data/raw/sbdb.csv` to `.gitignore` and share it over Drive instead.

✅ **Check:** `python -c "import lightgbm, m2cgen, shap"` prints nothing (no errors).

### Step 2 — Load and clean → `scripts/prepare_data.py` (15 min)
```python
import pandas as pd
from sklearn.model_selection import train_test_split

df = pd.read_csv("data/raw/sbdb.csv", dtype={"pdes": str, "name": str}, low_memory=False)
print("all asteroids:", len(df))

df = df[df["neo"] == "Y"]                                   # near-Earth only
num = ["a", "e", "i", "om", "w", "q", "ad", "ma", "H", "moid", "moid_jup", "t_jup"]
df[num] = df[num].apply(pd.to_numeric, errors="coerce")
df = df.dropna(subset=["a", "e", "i", "om", "w", "q", "ad", "ma", "H", "moid", "pha"])
df = df[df["e"] < 1]                                        # bound orbits only
df["label"] = (df["pha"] == "Y").astype(int)
df["pdes"] = df["pdes"].str.strip()

train, test = train_test_split(df, test_size=0.2, stratify=df["label"], random_state=42)
train.to_csv("data/train.csv", index=False)
test.to_csv("data/test.csv", index=False)
print("NEOs:", len(df), "| PHA rate:", round(df["label"].mean(), 3),
      "| train:", len(train), "| test:", len(test))
```

✅ **Check:** roughly 20k–35k NEOs and a PHA rate of about 5–10%. `"Ceres" in df.full_name.values` should be False.
`df[df.full_name.str.contains("Apophis")]` should be one row with label 1.

### Step 3 — Baselines and readable rules → start `scripts/train.py` (15 min)
```python
import json, numpy as np, pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.metrics import (precision_score, recall_score, f1_score, roc_auc_score,
                             average_precision_score, confusion_matrix, roc_curve, precision_recall_curve)

train, test = pd.read_csv("data/train.csv", dtype={"pdes": str}), pd.read_csv("data/test.csv", dtype={"pdes": str})
FEAT_A = ["a", "e", "i", "om", "w", "q", "ad", "H", "moid"]
FEAT_B = ["a", "e", "i", "om", "w", "q", "ad"]
ytr, yte = train["label"], test["label"]

logreg = make_pipeline(StandardScaler(), LogisticRegression(class_weight="balanced", max_iter=2000))
logreg.fit(train[FEAT_A], ytr)

tree = DecisionTreeClassifier(max_depth=2, class_weight="balanced", random_state=42)
tree.fit(train[FEAT_A], ytr)
rules = export_text(tree, feature_names=FEAT_A)
print(rules)
```

✅ **Check:** the printed tree splits on **`moid`** (around 0.05) and **`H`** (around 22). That's NASA's rule, found
by the model. **Screenshot this** for the README and the demo.

### Step 4 — Model A, the "rediscovers NASA" model (10 min)
```python
import lightgbm as lgb
params = dict(n_estimators=200, num_leaves=15, learning_rate=0.05,
              class_weight="balanced", random_state=42, verbose=-1)
model_a = lgb.LGBMClassifier(**params).fit(train[FEAT_A], ytr)
pA_test = model_a.predict_proba(test[FEAT_A])[:, 1]
print("A ROC-AUC:", roc_auc_score(yte, pA_test), "PR-AUC:", average_precision_score(yte, pA_test))
```
✅ **Check:** ROC-AUC above 0.99. (That's expected, since MOID and H define the label. Act 1 is meant to look easy.)

### Step 5 — Model B, orbit shape only (15 min)
```python
model_b = lgb.LGBMClassifier(**params).fit(train[FEAT_B], ytr)
pB_test = model_b.predict_proba(test[FEAT_B])[:, 1]
print("B ROC-AUC:", roc_auc_score(yte, pB_test), "PR-AUC:", average_precision_score(yte, pB_test))
```
✅ **Check:** Model B's scores are **lower** than A's. Write the gap down, because that's the headline number of Act 2.

**Stretch (only if ahead, after +1:30):** add a physics feature called *node distance*. An orbit can only come close to
Earth if it crosses the ecliptic near 1 AU:
```python
for d in (train, test):
    p = d["a"] * (1 - d["e"]**2)
    w = np.radians(d["w"])
    d["node_gap"] = np.minimum(abs(p / (1 + d["e"]*np.cos(w)) - 1), abs(p / (1 - d["e"]*np.cos(w)) - 1))
```
Train a "Model B+" with `FEAT_B + ["node_gap"]` and report it **only in the README/metrics** (the site keeps Model B).
If B+ gets close to A, the story is: *"the model needed this geometry, and once we gave it the geometry it caught up."*

### Step 6 — Choose thresholds for high recall (10 min)
Missing a hazardous asteroid is worse than a false alarm. Choose the threshold on **training data with
cross-validation** (never the test set):
```python
from sklearn.model_selection import cross_val_predict
def pick_threshold(feats, target_recall=0.95):
    oof = cross_val_predict(lgb.LGBMClassifier(**params), train[feats], ytr, cv=5, method="predict_proba")[:, 1]
    prec, rec, thr = precision_recall_curve(ytr, oof)
    ok = np.where(rec[:-1] >= target_recall)[0]
    return float(thr[ok[-1]]) if len(ok) else 0.5
thrA, thrB = pick_threshold(FEAT_A), pick_threshold(FEAT_B)
```
✅ **Check:** both thresholds are between 0 and 1. Recall on the test set at that threshold is about 0.9 or more for A.

### Step 7 — Metrics → `docs/data/metrics.json` (10 min)
```python
def report(y, p, thr, model, feats):
    pred = (p >= thr).astype(int)
    fpr, tpr, _ = roc_curve(y, p); pr, rc, _ = precision_recall_curve(y, p)
    step = max(1, len(fpr) // 200)                     # thin curves so the JSON stays small
    imp = dict(zip(feats, model.booster_.feature_importance("gain").round(1).tolist()))
    return dict(precision=precision_score(y, pred), recall=recall_score(y, pred), f1=f1_score(y, pred),
                roc_auc=roc_auc_score(y, p), pr_auc=average_precision_score(y, p), threshold=thr,
                confusion=confusion_matrix(y, pred).tolist(),
                roc=dict(fpr=fpr[::step].tolist(), tpr=tpr[::step].tolist()),
                pr=dict(precision=pr[::step].tolist(), recall=rc[::step].tolist()),
                importance=imp)

pL = logreg.predict_proba(test[FEAT_A])[:, 1]
metrics = {
    "A": report(yte, pA_test, thrA, model_a, FEAT_A),
    "B": report(yte, pB_test, thrB, model_b, FEAT_B),
    "baseline_logreg": dict(precision=precision_score(yte, pL >= .5), recall=recall_score(yte, pL >= .5),
                            roc_auc=roc_auc_score(yte, pL), pr_auc=average_precision_score(yte, pL)),
    "tree_rules": rules,
    "counts": dict(train=len(train), test=len(test), pha_rate=float(train["label"].mean())),
}
```
(`reality_check` and `worst_misses` are added in steps 8–9, then the file is written in step 10.)

### Step 8 — Act 3 reality check with `cad.csv` (15 min)
```python
cad = pd.read_csv("data/raw/cad.csv", dtype={"des": str})
cad["des"] = cad["des"].str.strip()
cad["dist"] = pd.to_numeric(cad["dist"], errors="coerce")
closest = cad.groupby("des")["dist"].min()                        # closest recorded approach per asteroid

test = test.assign(pB=pB_test, closeApproach=test["pdes"].map(closest))
flag = test["pB"] >= thrB
near = test["closeApproach"] < 0.05
metrics["reality_check"] = dict(
    flagged_with_approach_lt_005=float(near[flag].mean()),
    not_flagged_with_approach_lt_005=float(near[~flag].mean()))
print(metrics["reality_check"])
```
✅ **Check:** `test["closeApproach"].notna().mean()` is well above 0 (if it's about 0, the join failed, so check that `pdes` and
`des` look the same: print five of each). The "flagged" rate should be **clearly higher** than "not flagged."
That's your Act 3 slide: *"asteroids the model warned about really did fly closer to Earth."*

Then export upcoming flybys for Person 2:
```python
cad["date"] = pd.to_datetime(cad["cd"], format="%Y-%b-%d %H:%M", errors="coerce")
up = cad[(cad["date"] >= pd.Timestamp.today()) & (cad["date"] <= pd.Timestamp.today() + pd.DateOffset(years=10))]
up = up.sort_values("date")[["des", "fullname", "cd", "dist", "v_rel"]]
up.columns = ["pdes", "name", "date", "dist", "v_rel"]
up.to_json("docs/data/approaches.json", orient="records")
```

### Step 9 — Worst misses (10 min)
```python
test = test.assign(pA=pA_test)
miss = test[(test["label"] == 1) & (test["pB"] < thrB)].sort_values("pB").head(5)
metrics["worst_misses"] = [dict(name=r.full_name.strip(), pA=float(r.pA), pB=float(r.pB), cls=r["class"], why="")
                           for _, r in miss.iterrows()]
```
Fill in `why` by hand (look at each one's `i`, `q`, `ad`: often high inclination, or the closest point of its orbit sits just inside 1.3 AU).

### Step 10 — Export everything to `docs/` (15 min) → **push = handoff #1 (+1:30)**
```python
import m2cgen
for name, model, feats in [("A", model_a, FEAT_A), ("B", model_b, FEAT_B)]:
    js = m2cgen.export_to_javascript(model)
    with open(f"docs/model/model_{name}.js", "w") as f:
        f.write(f"// feature order: {feats}\n// returns [p_safe, p_hazard]\nexport {js}")

df_all = pd.concat([train, test.drop(columns=["pA", "pB", "closeApproach"])], ignore_index=True)
df_all["test"] = df_all["spkid"].isin(test["spkid"])
df_all["pA"] = model_a.predict_proba(df_all[FEAT_A])[:, 1]
df_all["pB"] = model_b.predict_proba(df_all[FEAT_B])[:, 1]
df_all["closeApproach"] = df_all["pdes"].map(closest)
out = df_all.rename(columns={"full_name": "name", "label": "pha"})[
    ["name", "pdes", "class", "a", "e", "i", "om", "w", "ma", "q", "ad", "H", "moid", "pha", "pA", "pB", "test", "closeApproach"]]
out["name"] = out["name"].str.strip()
out.round(4).to_json("docs/data/asteroids.json", orient="records")
json.dump(metrics, open("docs/data/metrics.json", "w"), indent=1, default=float)
```
✅ **Check:**
- `docs/model/model_A.js` starts with `// feature order` and contains `export function score`. If it's over about 5 MB,
  lower `n_estimators` to 100.
- In the browser console: `(await import('./model/model_A.js')).score([0.92,0.19,3.3,204,126,0.75,1.1,19.1,0.0003])`
  should return about `[0.01, 0.99]` (Apophis).
- `asteroids.json` is under about 10 MB.

Push, then **tell P2 and P3 in the group chat: "real data is in."**

### Step 10b — ⭐ Act 4: estimate size, find hidden hazards (+1:30 → +3:00) → **push = handoff #2**
**This is the headline result. Do it before the notebook or B+.**

**The idea in one line:** brightness depends on size *and* how dark the surface is. NASA's H ≤ 22 cutoff assumes an
average darkness. We learn size properly from asteroids that were actually measured, then look for big, dark near-Earth
asteroids that the cutoff misses.

**Important:** albedo (darkness) is only known for the *measured* asteroids, so it **can't be an input**. The model has to infer it
from brightness, orbit and orbit class, which is exactly the part with no formula.

**Where it goes in our `scripts/train.py`:** add the function below, call it in `main()` right **before** the `"6. Export"` block,
and add its columns to `out` before `asteroids.json` is written:
```python
# in main(), before print("6. Export"):
sz = act4_hidden_hazards("data/raw/sbdb.csv", metrics)          # indexed by spkid
# after `out = pd.DataFrame({...})`:
for c in ["D_pred", "D_lo", "D_hi", "D_meas", "hidden"]:
    out[c] = df["spkid"].map(sz[c]).values
```
The function:
```python
SIZE_FEATS = ["H", "a", "e", "i", "q", "ad", "moid_jup", "t_jup", "cls"]

def act4_hidden_hazards(sbdb_path, metrics):
    # spkid as str, same as load() in train.py, or the join back onto `out` silently matches nothing
    full = pd.read_csv(sbdb_path, dtype={"pdes": str, "spkid": str}, low_memory=False)
    numc = ["H", "a", "e", "i", "q", "ad", "moid", "moid_jup", "t_jup", "diameter"]
    full[numc] = full[numc].apply(pd.to_numeric, errors="coerce")
    full = full.dropna(subset=["H", "a", "e", "i", "q", "ad"])
    full["cls"] = full["class"].astype("category")            # same categories everywhere

    meas = full[full["diameter"] > 0].copy()                   # asteroids with a measured size
    meas["logD"] = np.log10(meas["diameter"] * 1000)          # km -> m, then log (sizes span 1000x)
    s_test = meas[meas["neo"] == "Y"].sample(frac=0.3, random_state=42)   # test on measured NEOs: who we apply it to
    s_train = meas.drop(s_test.index)

    sp = dict(n_estimators=400, learning_rate=0.05, num_leaves=31, random_state=42, verbose=-1)
    med = lgb.LGBMRegressor(**sp).fit(s_train[SIZE_FEATS], s_train["logD"])
    lo  = lgb.LGBMRegressor(objective="quantile", alpha=0.1, **sp).fit(s_train[SIZE_FEATS], s_train["logD"])
    hi  = lgb.LGBMRegressor(objective="quantile", alpha=0.9, **sp).fit(s_train[SIZE_FEATS], s_train["logD"])

    true_D = 10 ** s_test["logD"]
    pred_D = 10 ** med.predict(s_test[SIZE_FEATS])
    base_D = 1329e3 / np.sqrt(0.14) * 10 ** (-s_test["H"] / 5)   # the standard formula, assuming average albedo 0.14
    lo_D, hi_D = 10 ** lo.predict(s_test[SIZE_FEATS]), 10 ** hi.predict(s_test[SIZE_FEATS])
    err = lambda p: round(float(np.median(abs(p - true_D) / true_D)), 3)

    # validation: measured NEOs that ARE >=140 m but faint (H > 22), i.e. real hidden hazards. Does the model catch them?
    truly_hidden = (true_D >= 140) & (s_test["H"] > 22)
    metrics["size"] = dict(n_test=len(s_test), median_err_model=err(pred_D), median_err_baseline=err(base_D),
                           interval_coverage=round(float(((true_D >= lo_D) & (true_D <= hi_D)).mean()), 3))
    val = dict(true_hidden_in_test=int(truly_hidden.sum()), caught=int((truly_hidden & (pred_D >= 140)).sum()))
    print("  size:", metrics["size"], "| validation:", val)

    # apply to every NEO
    neos = full[full["neo"] == "Y"].copy()
    neos["D_pred"] = (10 ** med.predict(neos[SIZE_FEATS])).round()
    neos["D_lo"]   = (10 ** lo.predict(neos[SIZE_FEATS])).round()
    neos["D_hi"]   = (10 ** hi.predict(neos[SIZE_FEATS])).round()
    neos["D_meas"] = (neos["diameter"] * 1000).round()
    best = neos["D_meas"].fillna(neos["D_pred"])               # trust a real measurement over our estimate
    neos["hidden"] = (neos["moid"] <= 0.05) & (neos["pha"] == "N") & (best >= 140)
    strong = neos["hidden"] & (neos["D_meas"].notna() | (neos["D_lo"] >= 140))

    top = neos[neos["hidden"]].sort_values("D_lo", ascending=False).head(10)
    metrics["hidden_hazards"] = dict(count=int(neos["hidden"].sum()), strong=int(strong.sum()), validation=val,
        top=[dict(name=r.full_name.strip(), H=float(r.H), moid=float(r.moid),
                  D_pred=float(r.D_pred), D_lo=float(r.D_lo), D_hi=float(r.D_hi)) for _, r in top.iterrows()])
    print(f"  hidden hazards: {metrics['hidden_hazards']['count']} ({metrics['hidden_hazards']['strong']} strong)")
    return neos.set_index("spkid")[["D_pred", "D_lo", "D_hi", "D_meas", "hidden"]]
```

✅ **Checks:**
- **The model beats the formula:** `median_err_model` < `median_err_baseline`. This is the "why machine learning" number.
  If the model *doesn't* win, try adding `per_y` and `moid` to `SIZE_FEATS`. If it still doesn't win, say so honestly: that's a result too.
- **The ranges are honest:** `interval_coverage` is about 0.8 (80% of real sizes fall inside our 80% range).
- **Validation:** `caught / true_hidden_in_test` is how many *real* big-but-faint NEOs the model spots. Report it even if the numbers are small.
- **Hidden hazard count** is a believable number (tens to a few hundred), not thousands. If it's huge, check the km → m conversion.
- **Spot check:** Apophis's `D_pred` (or `D_meas`) is about 340 m. The top hidden hazards mostly have **H between 22 and 23.5** (just past the cutoff).
- `asteroids.json` has the five new fields and is still under about 10 MB.

Rerun `train.py`, push, then tell the team **"Act 4 data is in."**

**Caveats to state in the README and the demo:** the training data is mostly main-belt asteroids, so the size model may be less accurate for
NEOs (that's why the test set is NEOs only). A "hidden hazard" is a **candidate for follow-up**, not a confirmed threat.

### Step 11 — Notebook (+1:30 → +2:30)
Copy `train.py` into `notebooks/train.ipynb` cell by cell and add plots: class balance bar, ROC/PR curves A vs B,
the tree diagram (`sklearn.tree.plot_tree`), feature importance, and a SHAP summary
(`shap.TreeExplainer(model_b).shap_values(test[FEAT_B])` → `shap.summary_plot`). Save the PNGs to `docs/img/` for the README.

### Step 12 — README results section (+3:15 → +4:15)
Write: data source and filtering, the train/test method (stratified 80/20, threshold picked by CV, test set never touched),
a metrics table (LogReg / A / B / B+), **what the model learned** (the tree rules vs NASA's rule, the importances,
the Act 3 reality check, the worst misses, and **Act 4 as the headline**: size error vs the standard formula, interval coverage,
the validation catch rate, the number of hidden hazards and the top-10 table with size ranges), and **limitations** (the label is defined by MOID/H, PHAs are rare,
orbits change over time).

### Step 13 — QA (+4:15 → +5:00)
Open the live site and check that every number on the page matches the notebook.

---

## 6. 🌌 Person 2 — 3D Lead

**Owns:** `docs/main.js`, `docs/kepler.js`. You only touch `<canvas id="scene">` in `index.html` (P3 owns the rest).
**Run locally:** in the repo folder, `python -m http.server 8000 -d docs`, then open `http://localhost:8000`.
Until +1:30 you work on P3's **mock** JSON. After that, the real JSON loads with no code changes.

### Step 1 — Bare scene (30 min)
If P3's `index.html` isn't pushed yet, make a temporary one containing:
```html
<canvas id="scene"></canvas>
<script type="importmap">
{ "imports": {
  "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
} }
</script>
<script type="module" src="main.js"></script>
```
`main.js`:
```js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { AU, orbitPoints } from './kepler.js';

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(devicePixelRatio);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05060a);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5000);
camera.position.set(0, 25, 35);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.4), new THREE.MeshBasicMaterial({ color: 0xffcc55 }))); // Sun

function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
```
Make sure the canvas has a size (`#scene { width: 100vw; height: 100vh; display: block; }`).

✅ **Check:** a yellow dot on black that you can rotate and zoom with the mouse.

### Step 2 — Orbit math → `kepler.js` (30 min)
Scale: **1 AU = 10 scene units**. JPL's coordinates have the ecliptic as the x–y plane. Three.js treats y as "up,"
so we map (x, y, z) → (x, z, −y).
```js
import * as THREE from 'three';
export const AU = 10;
const DEG = Math.PI / 180;

// Kepler's equation  M = E − e·sin(E), solved for E with Newton's method
export function solveKepler(M, e) {
  let E = e < 0.8 ? M : Math.PI;
  for (let k = 0; k < 12; k++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  return E;
}

// position in the orbit's own plane → rotate by ω, i, Ω → scene coordinates
function toScene(xp, yp, el) {
  const w = el.w * DEG, O = el.om * DEG, i = el.i * DEG;
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), ci = Math.cos(i), si = Math.sin(i);
  const x = (cO * cw - sO * sw * ci) * xp + (-cO * sw - sO * cw * ci) * yp;
  const y = (sO * cw + cO * sw * ci) * xp + (-sO * sw + cO * cw * ci) * yp;
  const z = (sw * si) * xp + (cw * si) * yp;
  return new THREE.Vector3(x * AU, z * AU, -y * AU);
}

function planeXY(el, E) {
  return [el.a * (Math.cos(E) - el.e), el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E)];
}

// where the body is, given its mean anomaly `ma` in degrees
export function positionAt(el, maDeg = el.ma) {
  const [xp, yp] = planeXY(el, solveKepler(maDeg * DEG, el.e));
  return toScene(xp, yp, el);
}

// the full ellipse, as points for a THREE.Line
export function orbitPoints(el, n = 180) {
  const pts = [];
  for (let k = 0; k <= n; k++) { const [xp, yp] = planeXY(el, (2 * Math.PI * k) / n); pts.push(toScene(xp, yp, el)); }
  return pts;
}

export function orbitLine(el, color = 0x4466aa, opacity = 0.6) {
  const g = new THREE.BufferGeometry().setFromPoints(orbitPoints(el));
  return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
}
```
Add planets to `main.js` for scale:
```js
import { orbitLine } from './kepler.js';
const PLANETS = [
  { name: 'Mercury', a: 0.387, e: 0.206, i: 7.0, om: 48.3, w: 29.1 },
  { name: 'Venus',   a: 0.723, e: 0.007, i: 3.4, om: 76.7, w: 54.9 },
  { name: 'Earth',   a: 1.000, e: 0.017, i: 0.0, om: 0.0,  w: 102.9 },
  { name: 'Mars',    a: 1.524, e: 0.093, i: 1.8, om: 49.6, w: 286.5 },
];
PLANETS.forEach(p => scene.add(orbitLine(p, p.name === 'Earth' ? 0x33ff99 : 0x666666, 0.9)));
```
✅ **Check:** Earth's orbit is an almost perfect circle of radius 10. Mars's orbit is visibly off-center. Mock Apophis's
orbit (`orbitLine(apophis, 0xff0000)`) **crosses** Earth's ring. If an orbit looks like a vertical hoop, you've
mixed up degrees and radians, or the y/z swap.

### Step 3 — All asteroids as colored points (45 min)
```js
const asteroids = await (await fetch('data/asteroids.json')).json();
const metrics   = await (await fetch('data/metrics.json')).json();
const cold = new THREE.Color(0x3a7bff), hot = new THREE.Color(0xff3030);

let points, shown = [];
function buildPoints(list, colorFn) {
  if (points) { scene.remove(points); points.geometry.dispose(); }
  shown = list;
  const pos = new Float32Array(list.length * 3), col = new Float32Array(list.length * 3);
  list.forEach((a, k) => {
    positionAt(a).toArray(pos, k * 3);
    colorFn(a).toArray(col, k * 3);
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  points = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.12, vertexColors: true }));
  scene.add(points);
}
const byProb = key => a => cold.clone().lerp(hot, a[key]);
buildPoints(asteroids, byProb('pA'));
```
(Add `positionAt` to the import from `./kepler.js`.)

✅ **Check:** a cloud of mostly blue dots around Earth's orbit, with red dots mostly near Earth's ring. The page stays
smooth (FPS fine) with the real ~30k points.

### Step 4 — Toggles: model, test set, mistakes (45 min)
P3's toggle bar fires `view-changed`. You redraw:
```js
const MAGENTA = new THREE.Color(0xff00ff), YELLOW = new THREE.Color(0xffd400), DIM = new THREE.Color(0x1a2233);
const LIME = new THREE.Color(0x7dff3a);
let view = { model: 'A', testOnly: false, showMistakes: false, showHidden: false };

function redraw() {
  const key = view.model === 'A' ? 'pA' : 'pB';
  const thr = metrics[view.model].threshold;
  const list = view.testOnly ? asteroids.filter(a => a.test) : asteroids;
  if (view.showHidden) return buildPoints(list, a => a.hidden ? LIME : DIM);   // Act 4: hidden hazards glow lime
  const colorFn = !view.showMistakes ? byProb(key) : a => {
    const pred = a[key] >= thr;
    if (a.pha === 1 && !pred) return MAGENTA;   // missed a real hazard
    if (a.pha === 0 && pred)  return YELLOW;    // false alarm
    return DIM;                                 // correct → fade out
  };
  buildPoints(list, colorFn);
}
addEventListener('view-changed', ev => { view = { ...view, ...ev.detail }; redraw(); });
```
Pulsing for misses (optional): `points.material.size = 0.12 + 0.05 * Math.sin(performance.now() / 200)` in the animation loop while `showMistakes` is on.

**Act 4 (React: `web/src/three/SolarSystem.jsx`, `showHidden` comes from the shared state in `App.jsx`):** while
`showHidden` is on, also draw a second small `THREE.Points` with only the `hidden` asteroids at `size: 0.3`, so they stand out
against the dimmed cloud.

✅ **Check:** with mistakes on and Model B selected, you can see magenta dots (misses) and yellow dots (false alarms).
With `showHidden` on (after handoff #2), a small number of lime dots, all sitting near Earth's orbit.
Fire the event by hand in the console to test before P3's UI exists:
`dispatchEvent(new CustomEvent('view-changed', { detail: { model: 'B', showMistakes: true } }))`.

### Step 5 — Click to inspect (30 min)
```js
const raycaster = new THREE.Raycaster(); raycaster.params.Points.threshold = 0.25;
const mouse = new THREE.Vector2(); let selectedLine;
canvas.addEventListener('click', ev => {
  const r = canvas.getBoundingClientRect();
  mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(mouse, camera);
  const hit = raycaster.intersectObject(points)[0];
  if (!hit) return;
  const a = shown[hit.index];
  if (selectedLine) scene.remove(selectedLine);
  selectedLine = orbitLine(a, 0xffffff, 1); scene.add(selectedLine);
  dispatchEvent(new CustomEvent('asteroid-selected', { detail: a }));
});
```
✅ **Check:** clicking a dot draws its white orbit, and the console shows the event
(`addEventListener('asteroid-selected', e => console.log(e.detail))`).

### Step 6 — "Design your own asteroid" (45 min)
```js
import { score as scoreA } from './model/model_A.js';
import { score as scoreB } from './model/model_B.js';
let customLine;
addEventListener('custom-asteroid', ev => {
  const el = ev.detail;                                   // { a, e, i, om, w, H, moid }
  el.q = el.a * (1 - el.e); el.ad = el.a * (1 + el.e);
  if (customLine) scene.remove(customLine);
  customLine = orbitLine(el, 0x00ffff, 1); scene.add(customLine);
  // MUST match the feature order in the comment at the top of each model file
  const pA = scoreA([el.a, el.e, el.i, el.om, el.w, el.q, el.ad, el.H, el.moid])[1];
  const pB = scoreB([el.a, el.e, el.i, el.om, el.w, el.q, el.ad])[1];
  dispatchEvent(new CustomEvent('custom-scored', { detail: { pA, pB } }));
});
```
(Until P1's real model files exist, put in a stub `export function score(x){ return [0.5, 0.5]; }`.)

✅ **Check:** moving a slider reshapes the cyan orbit live. Apophis's values give a high pA.

### Step 7 — Stretch: flyby timeline (if time)
Load `data/approaches.json`. For the next flyby, highlight that asteroid (look it up in `asteroids` by `pdes`), draw
its orbit in orange, and add a label "Closest approach: <date>, <dist in lunar distances> LD" (1 AU ≈ 389 LD).
P3 can add a "Next flybys" list that fires `asteroid-selected`.

### Step 8 — Polish and performance (+4:15 → +5:00)
Check FPS on a laptop. If it's slow, lower `setPixelRatio` to `Math.min(devicePixelRatio, 1.5)`.
Nice touch: animate the camera to the selected asteroid. Help P3 record the demo.

---

## 7. 📊 Person 3 — Story / UI Lead

**Owns:** `docs/index.html`, `docs/style.css`, `docs/charts.js`, `docs/ui.js`, mock JSON, deploy, demo video, submission,
README intro.
**Run locally:** `python -m http.server 8000 -d docs` → `http://localhost:8000`.

### Step 1 — Mock data, FIRST (push within 20 min)
Create `docs/data/asteroids.json` with about 20 objects that follow **Contract 1** exactly. Include real Apophis, Bennu and
Didymos rows (copy their numbers from `sbdb.csv`) and make up the rest. Mix `pha` 0/1 and `test` true/false.
Create `docs/data/metrics.json` following **Contract 2**, with believable fake numbers and 5–10 points in each curve.
Push, then tell P2.

✅ **Check:** both files open in the browser at `http://localhost:8000/data/asteroids.json` and are valid JSON
(paste into jsonlint.com if unsure).

### Step 2 — Page layout (45 min)
`docs/index.html`:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Is It Coming For Us?</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script type="importmap">
  { "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/",
    "lil-gui": "https://cdn.jsdelivr.net/npm/lil-gui@0.19.2/dist/lil-gui.esm.min.js"
  } }
  </script>
</head>
<body>
  <canvas id="scene"></canvas>

  <header id="topbar">
    <h1>Is It Coming For Us?</h1>
    <div id="toggles">
      <button data-model="A" class="on">Model A · all features</button>
      <button data-model="B">Model B · orbit only</button>
      <label><input type="checkbox" id="testOnly"> Unseen test set only</label>
      <label><input type="checkbox" id="showMistakes"> Show mistakes</label>
      <label><input type="checkbox" id="showHidden"> 🕵️ Hidden hazards</label>
    </div>
  </header>

  <aside id="panel">
    <section id="info"><h2>Click an asteroid</h2></section>
    <section id="results"><h2>How well does it do?</h2>
      <div id="scores"></div><div id="confusion"></div>
      <canvas id="rocChart"></canvas><canvas id="impChart"></canvas>
    </section>
    <section id="learned"><h2>What did it learn?</h2></section>
  </aside>

  <div id="legend">🔵 safe → 🔴 hazardous · <span class="mag">■</span> missed hazard · <span class="yel">■</span> false alarm · <span class="lime">■</span> hidden hazard</div>
  <div id="intro"> <!-- title card, step 7 --> </div>

  <script type="module" src="main.js"></script>
  <script type="module" src="charts.js"></script>
  <script type="module" src="ui.js"></script>
</body>
</html>
```
`style.css` essentials: `body{margin:0;background:#05060a;color:#dde;font-family:system-ui}`,
`#scene{position:fixed;inset:0;width:100vw;height:100vh;display:block}`, a top bar and a right-hand panel
(`position:fixed; right:0; top:60px; width:360px; max-height:calc(100vh - 70px); overflow:auto;
background:rgba(10,14,25,.85); backdrop-filter:blur(6px)`). On narrow screens, move the panel to the bottom.

✅ **Check:** P2's 3D scene shows behind your panels, and the panels scroll.

### Step 3 — Toggles fire events (15 min) → `ui.js`
```js
const state = { model: 'A', testOnly: false, showMistakes: false };
const send = () => dispatchEvent(new CustomEvent('view-changed', { detail: { ...state } }));
document.querySelectorAll('[data-model]').forEach(b => b.onclick = () => {
  document.querySelectorAll('[data-model]').forEach(x => x.classList.toggle('on', x === b));
  state.model = b.dataset.model; send(); window.renderResults?.(state.model);
});
testOnly.onchange = e => { state.testOnly = e.target.checked; send(); };
showMistakes.onchange = e => { state.showMistakes = e.target.checked; send(); };
showHidden.onchange = e => { state.showHidden = e.target.checked; send(); };
```
(React: add `showHidden` to the view state in `App.jsx` and a "🕵️ Hidden hazards" toggle in `TopBar.jsx`. Add the lime swatch to `Legend.jsx`.)
✅ **Check:** clicking a toggle changes P2's view. Before that's wired, `addEventListener('view-changed', e => console.log(e.detail))` should log it.

### Step 4 — Results charts (45 min) → `charts.js`
```js
const m = await (await fetch('data/metrics.json')).json();
const pct = x => (x * 100).toFixed(1) + '%';
let roc, imp;

window.renderResults = (key = 'A') => {
  const r = m[key];
  document.getElementById('scores').innerHTML = `
    <table><tr><th></th><th>Model ${key}</th><th>Baseline</th></tr>
    <tr><td>Recall (hazards caught)</td><td>${pct(r.recall)}</td><td>${pct(m.baseline_logreg.recall)}</td></tr>
    <tr><td>Precision</td><td>${pct(r.precision)}</td><td>${pct(m.baseline_logreg.precision)}</td></tr>
    <tr><td>ROC-AUC</td><td>${r.roc_auc.toFixed(3)}</td><td>${m.baseline_logreg.roc_auc.toFixed(3)}</td></tr>
    <tr><td>PR-AUC</td><td>${r.pr_auc.toFixed(3)}</td><td>${m.baseline_logreg.pr_auc.toFixed(3)}</td></tr></table>
    <small>Tested on ${m.counts.test.toLocaleString()} asteroids the model never saw.</small>`;
  const [[tn, fp], [fn, tp]] = r.confusion;
  document.getElementById('confusion').innerHTML = `
    <div class="cm"><div></div><div>pred safe</div><div>pred hazard</div>
    <div>real safe</div><div>${tn}</div><div class="yel">${fp}</div>
    <div>real hazard</div><div class="mag">${fn}</div><div>${tp}</div></div>`;
  roc?.destroy(); imp?.destroy();
  roc = new Chart(rocChart, { type: 'line', data: { datasets: [
      { label: 'Model A', data: m.A.roc.fpr.map((x, k) => ({ x, y: m.A.roc.tpr[k] })), pointRadius: 0 },
      { label: 'Model B', data: m.B.roc.fpr.map((x, k) => ({ x, y: m.B.roc.tpr[k] })), pointRadius: 0 }] },
    options: { parsing: false, scales: { x: { type: 'linear', min: 0, max: 1, title: { display: true, text: 'False alarm rate' } },
                                         y: { min: 0, max: 1, title: { display: true, text: 'Hazards caught' } } } } });
  const entries = Object.entries(r.importance).sort((a, b) => b[1] - a[1]);
  imp = new Chart(impChart, { type: 'bar', data: { labels: entries.map(e => e[0]),
      datasets: [{ label: 'Feature importance', data: entries.map(e => e[1]) }] }, options: { indexAxis: 'y' } });
};
renderResults('A');
```
Style `.cm` as a 3×3 CSS grid.

✅ **Check:** the numbers and charts appear with mock data, and switching A/B updates the table and confusion matrix.

### Step 5 — "What did it learn?" panel (30 min) → also `charts.js`
Show, in this order (this panel is what the brief means by "tell us what the model learned"):
1. **Act 1:** `m.tree_rules` in a `<pre>` next to a box reading *"NASA's definition: MOID ≤ 0.05 AU and H ≤ 22.0"*,
   captioned *"The model found NASA's rule on its own."*
2. **Act 2:** A vs B ROC-AUC side by side, captioned *"Without MOID and H, it has to infer the geometry from the orbit shape."*
3. **Act 3:** `m.reality_check` as two bars: "% of flagged asteroids that really came within 0.05 AU" vs "% of unflagged."
4. **Worst misses:** a list of `m.worst_misses` (name, pB, why). Clicking one fires `asteroid-selected` with the matching
   object from `asteroids.json`.

5. **⭐ Act 4: hidden hazards (make this the biggest, last section; React: `SidePanel.jsx`):**
   - Headline: *"Our model found **{m.hidden_hazards.count}** near-Earth asteroids that are probably big enough to be hazardous
     but slip past NASA's brightness cutoff."* ({m.hidden_hazards.strong} are strong candidates: even our low estimate is ≥ 140 m.)
   - Proof it's better than the standard approach: size error, model `m.size.median_err_model` vs formula `m.size.median_err_baseline`,
     as two bars. Plus *"80% ranges contained the true size {m.size.interval_coverage} of the time"* and the validation catch rate.
   - Top-10 table: name, H, size range (`D_lo`–`D_hi` m). Clicking a row selects that asteroid.
   - The caveat line: *"Candidates for follow-up observation, not confirmed threats."*
   - If `m.hidden_hazards` is missing (before handoff #2), show "Act 4 loading…" instead of crashing.

✅ **Check:** someone who's never seen the project can read this panel and explain the result in one sentence.

### Step 6 — Info panel + sliders + presets (30 min) → `ui.js`
```js
import GUI from 'lil-gui';
const info = document.getElementById('info');
addEventListener('asteroid-selected', ({ detail: a }) => {
  info.innerHTML = `<h2>${a.name}</h2>
    <p>Class ${a.class} · ${a.pha ? '⚠️ NASA: hazardous' : 'NASA: not hazardous'} · ${a.test ? 'unseen test asteroid' : 'training asteroid'}</p>
    <p>Model A: <b>${(a.pA * 100).toFixed(0)}%</b> · Model B: <b>${(a.pB * 100).toFixed(0)}%</b></p>
    <p>a ${a.a} AU · e ${a.e} · i ${a.i}° · MOID ${a.moid} AU · H ${a.H}</p>
    ${a.D_pred != null ? `<p>Size: ${a.D_meas != null ? `${a.D_meas} m (measured)` : `~${a.D_pred} m (model: ${a.D_lo}–${a.D_hi} m)`}</p>` : ''}
    ${a.hidden ? `<p class="lime">🕵️ Hidden hazard: officially not hazardous, but probably big enough to be.</p>` : ''}
    ${a.closeApproach != null ? `<p>Closest recorded approach: ${(a.closeApproach * 389).toFixed(1)} lunar distances</p>` : ''}`;
});

const custom = { a: 1.2, e: 0.3, i: 5, om: 100, w: 120, H: 20, moid: 0.03 };
const gui = new GUI({ title: 'Design your own asteroid' });
const fire = () => dispatchEvent(new CustomEvent('custom-asteroid', { detail: { ...custom } }));
gui.add(custom, 'a', 0.5, 4, 0.01).onChange(fire);
gui.add(custom, 'e', 0, 0.95, 0.01).onChange(fire);
gui.add(custom, 'i', 0, 60, 0.1).onChange(fire);
gui.add(custom, 'om', 0, 360, 1).onChange(fire);
gui.add(custom, 'w', 0, 360, 1).onChange(fire);
gui.add(custom, 'H', 12, 30, 0.1).onChange(fire);
gui.add(custom, 'moid', 0, 0.5, 0.001).onChange(fire);
const verdict = document.createElement('div'); gui.domElement.appendChild(verdict);
addEventListener('custom-scored', ({ detail }) =>
  verdict.innerHTML = `Model A: ${(detail.pA * 100).toFixed(0)}% · Model B: ${(detail.pB * 100).toFixed(0)}%`);

// presets come from the real data, so the numbers are always right
const all = await (await fetch('data/asteroids.json')).json();
for (const name of ['Apophis', 'Bennu', 'Didymos']) {
  gui.add({ [name]: () => {
    const a = all.find(x => x.name.includes(name)); if (!a) return;
    Object.keys(custom).forEach(k => custom[k] = a[k]); gui.controllersRecursive().forEach(c => c.updateDisplay()); fire();
  } }, name);
}
```
✅ **Check:** clicking a dot in 3D fills the info panel. Moving a slider updates the verdict. The Apophis preset gives a high Model A score.

### Step 7 — Deploy EARLY (+3:00, 15 min)
1. Push everything.
2. GitHub repo → **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder: `/docs` → Save**.
3. Wait 1–2 minutes. The site is live at `https://<owner>.github.io/asteroid-hazard/`.

✅ **Check:** the live link works on someone else's phone/laptop. (If the JSON gives 404s, check that the paths have no leading `/`.)

### Step 8 — Intro overlay + polish (+3:30 → +4:15)
Title card over the scene: *"35,000 rocks cross near Earth's orbit. Which ones should we worry about? We taught a machine
to decide, from their orbits alone."* + an **Explore** button that hides it. Check the colors, the legend, and the layout on mobile.

### Step 9 — Demo video (tomorrow morning, after narration is in)
Record the screen with **Win + Alt + R** (Xbox Game Bar) or OBS. Turn narration on, and the site's own
ElevenLabs voice becomes the voiceover. 90-second script:
1. (10s) Title card → Explore. *"Every dot is a real near-Earth asteroid."*
2. (20s) Model A + the "what it learned" panel. *"It rediscovered NASA's rule."*
3. (25s) Switch to Model B and turn on **Show mistakes**. Click a magenta miss. *"Without the answer key, here's where it fails, and why."*
4. (15s) Act 3 bars. *"Its warnings match real close approaches it never saw."*
4b. (25s) ⭐ Turn on **🕵️ Hidden hazards**. Lime dots light up. Click one and play its voice report.
   *"And here's what no formula could tell us: N asteroids that are probably big enough to be dangerous, hiding because they're dark."*
   (This makes the video about 2 minutes. Trim step 5 if you need to.)
5. (20s) Apophis preset, then drag the sliders. *"Try your own asteroid."*

Take 3 screenshots: the main view, mistakes mode, the learned panel.

### Step 10 — README intro + SUBMIT (tomorrow, by 11:30 AM)
README top: the one-line pitch, live link, video link, screenshots, team names. P1's results section goes below.
Then submit (section 11 checklist).

---

## 8. 🎙️ Mission Control Live — ElevenLabs commentary (P3 writes, P1 generates, P3 plays)

**The concept:** two ElevenLabs voices commentate the end of the world like sports commentators, reacting to what the
**models actually found**:
- 🎙️ **CAPCOM**: calm and deadpan, reads the data.
- 😱 **INTERN**: panics at everything and gets corrected.

> **CAPCOM:** "Asteroid Apophis. Risk score 99." **INTERN:** "Oh no. Oh no no no."
> **CAPCOM:** "Mostly because it swings in to exactly where Earth lives." **INTERN:** "So we're screwed?"
> **CAPCOM:** "Hazardous means worth watching. Not incoming." **INTERN:** "So we're a *little* screwed."

**Why two voices:** the joke is the conversation, and CAPCOM's correction delivers the honest science *inside* the
joke. Our models do **not** detect or predict impacts, and the commentary never claims they do.

### ✅ Already built (Nov 7)
| Piece | File | What it does |
|---|---|---|
| Commentary data | `scripts/train.py` | Adds `why` (Model B's biggest orbit reason, from LightGBM's built-in SHAP values), `v_imp` (hypothetical impact speed) and `E_mt` (hypothetical impact energy, megatons) to `asteroids.json` |
| The script | `narration/lines.json` | Every line both voices say: the act dialogues, reactions, report templates, 14 "why" phrases, what-if template, sound-effect prompts |
| Generator | `scripts/narrate.py` | Builds each asteroid's dialogues, generates one MP3 per line (CAPCOM and INTERN voices) + 4 sound effects, writes `web/public/audio/manifest.json`. `--dry-run` prints everything with no API calls |
| Player | `web/src/lib/narration.js` | **Hybrid:** recorded clip if there is one, else **live voice**, else subtitles only. Newer dialogues cancel older ones |
| Live voice | `web/api/say.js`, `web/api/health.js`, `web/src/lib/dialogue.js` | Serverless function holding the key: rebuilds the line from validated numbers, calls ElevenLabs Flash, returns MP3. Rate-limited, CDN-cached |
| Button + subtitles | `web/src/components/MissionControl.jsx` | "🔊 Mission Control Live" mute button (bottom-left, **on by default**) + live captions so it works with sound off |
| Triggers | `web/src/App.jsx` | **Every click on an asteroid** gets commentary (also re-clicks). Switching to Model B, mistakes, or hidden hazards plays that act |

### 🔴 Live writing + live voice — how it works
```
click an asteroid ─► live writing available? (api/health "script") ──yes──► api/script: Claude writes a NEW exchange
                                  │ no / failed / >8 s                       from the asteroid's real numbers,
                                  │                                          each line signed → api/say voices it
                                  ▼
                     recorded clip in manifest? ──yes──► play the MP3 (instant, offline)
                                  │ no
                                  ▼
                     live voice available? ──yes──► template dialogue, GET api/say?…&i=n per line → ElevenLabs Flash
                                  │ no (GitHub Pages / offline / quota)
                                  ▼
                     subtitles only (the dialogue still "plays" on screen)
```
**Live writing** (`web/api/script.js`) is what stops the repetition: every click gets a different exchange.
- Claude (`claude-haiku-5-5` at `low` effort, about 2.5-7 s per script; Opus 5.5 wrote slightly better jokes but took 4.5-8.5 s.
  Override with `LIVE_SCRIPT_MODEL` / `LIVE_SCRIPT_EFFORT`) gets the asteroid's
  facts (name, risk score, NASA label, the model's reason, size, what-if energy) plus the characters and the
  **honesty rules** in its system prompt: "risk score", never "probability"; hazardous = worth watching, not incoming;
  what-ifs are hypothetical; no invented facts; admit the model's mistakes. A random comedic angle (game show, nature documentary…)
  is added each time for variety.
- Output is constrained JSON (`{lines: [{who, text}]}`), checked again on the server (3–8 lines, plain text, at most 220 chars).
- Each line is **HMAC-signed** (`web/api/_sign.js`). `api/say` voices only signed lines or template lines, so the voices can't
  be made to say arbitrary text.
- Server-side refusal fallback (`fallbacks: "default"`) turns on automatically for Opus/Sonnet/Fable (Haiku has none). Rate limit: 12 scripts/minute per visitor (`LIVE_SCRIPTS_PER_MIN`).
- Needs `ANTHROPIC_API_KEY` (repo-root `.env` in dev, Vercel env vars in prod). Without it, everything else still works.
- While Claude writes (~2.5-7 s, waits up to 15 s), the subtitle shows "📡 Mission Control is reading the data…" with the radio crackle.
- **All 42,704 asteroids** get commentary with their own name, risk score, reason, size and what-if numbers. The 71 featured ones
  use the recordings.
- **The key never reaches the browser.** It lives in Vercel's environment variables (prod) or the repo-root `.env` (dev).
  `api/say` rebuilds each line itself from **validated numbers** (`dialogue.js` → `sanitize`), so nobody can make the voices say anything else.
- **Cost control:** 40 lines/minute per visitor, 20,000 characters/hour per server instance (`LIVE_LINES_PER_MIN`,
  `LIVE_CHARS_PER_HOUR` env vars), and identical lines are cached by the CDN and the browser, so repeat clicks are free.
- **Speed:** about 0.2–0.5 s per line. Line *n+1* is fetched while line *n* plays.
- `dialogue.js` is the JS twin of the builders in `narrate.py`. Change both if you change the dialogue structure.
  `web/src/lib/lines.js` is **generated** from `narration/lines.json` by `narrate.py`: edit the JSON, then rerun
  `python scripts/narrate.py` (it costs nothing when no lines changed).

**Run it locally:** `npm run dev` serves `api/*` too (see `vite.config.js`), reading the key from the repo-root `.env`.
On a machine with **Norton** (it re-signs HTTPS), point Node at Norton's root first (PowerShell, from `web/`):
```powershell
$env:NODE_EXTRA_CA_CERTS = "$PWD\..\.certs\norton-root.pem"; npm run dev
```

**Deploy (live voice needs Vercel; GitHub Pages can't run the function):**
1. vercel.com → sign in with GitHub → **Add New → Project** → import the repo.
2. **Root Directory: `web`**. Framework: Vite (auto-detected; `web/vercel.json` sets the build output to `dist`).
3. **Settings → Environment Variables:** `ELEVENLABS_API_KEY`, `CAPCOM_VOICE_ID` (`onwK4e9ZLuTAKqWW03F9`, Daniel),
   `INTERN_VOICE_ID` (`TX3LPaxmHKxFdv7VOQHJ`, Liam), `ANTHROPIC_API_KEY` (live writing). Then **Redeploy**.
4. Open `https://<project>.vercel.app/api/health` → `{"live":true,"script":true}`. Click any dot and hear a fresh exchange.
5. GitHub Pages (`docs/`) still works as a backup: recordings + subtitles, no live voice.
Submit the **Vercel URL**. Watch your ElevenLabs usage on its dashboard during judging.

### The five moments (all driven by real model output)
| # | Trigger | Based on | Status |
|---|---|---|---|
| 1 | **Click an asteroid** | Model B risk score + its `why` + NASA's label (*"Plot twist: NASA disagrees"* for the model's mistakes) | ✅ wired |
| 2 | **🕵️ Hidden hazards toggle**, then click a lime dot | Act 4 size model: *"NASA judged it by brightness. Our model says it's 250 meters of dark rock."* | ✅ player ready. P2/P3 need the `showHidden` toggle |
| 3 | **💥 "What if it hit?" button** in the info panel | Act 4 size + real flyby speed → ½mv² → megatons + Hiroshimas, with an impact boom. Always ends *"It is not going to hit. This is a what-if."* | ⬜ P3: add the button (step N4) |
| 4 | **Near miss during fast-forward** | Simulated position inside a labeled danger zone: *"Oh no no wait wait…"* then *"It missed. By millions of kilometers."* | ⬜ P2: trigger (step N5) |
| 5 | **Design your own asteroid** | Live in-browser model: a reaction per risk tier, plus *"You built a planet-killer"* if it's aimed at Earth | ⬜ P3: call `playCustomTier()` (step N4) |

**The what-if physics** (in `train.py`, shown on screen too so it works with sound off):
```
mass   = 2000 kg/m³ × (π/6) × D³          # D = measured size, else the Act 4 estimate
v_imp  = √(v_inf² + 11.2²) km/s           # v_inf = median flyby speed from cad.csv; 11.2 = Earth's escape speed
energy = ½ × mass × v_imp²  → megatons     # 1 Mt = 4.184e15 J; Hiroshima ≈ 0.015 Mt
```
Example: Apophis ≈ 780 Mt ≈ 52 thousand Hiroshimas (hypothetical).

### Step N1 — Account, key, voices (P1, 15 min)
1. elevenlabs.io → profile → **API Keys** → create a key.
2. Copy `.env.example` to `.env` (gitignored) and fill in `ELEVENLABS_API_KEY`, `CAPCOM_VOICE_ID`, `INTERN_VOICE_ID`.
3. Voice Library: pick **two clearly different voices** as a team. CAPCOM: calm, low, newsreader. INTERN: younger,
   expressive. Copy each **voice ID**.
4. **Quota:** a full run is about **15,000 characters** (about 380 lines for 71 asteroids + acts + reactions) plus 4 sound effects.
   The free tier is smaller than that, so check your plan. On a small plan, run `--limit 20` first.

✅ **Check:** `git status` does **not** show `.env`.

### Step N2 — Punch up the script (P3, 30–45 min) → `narration/lines.json`
Everything either voice says is in this one file: `acts`, `reactions`, the `report` template and joke pools, `hidden`,
`whatif`, the 14 `why` phrases (e.g. `"q+"` = "its closest point to the Sun sits right around Earth's distance"), and `sfx` prompts.
- Rewrite any line to be funnier. Keep it **under about 12 seconds** out loud.
- **Keep every honesty line**: CAPCOM's *"Hazardous means worth watching. Not incoming."* and *"It is not going to hit. This is a what-if."*
- Say **"risk score"**, never "probability" (pA/pB are inflated risk scores).
- `{name}`, `{risk}`, `{why}`, `{size}`, `{speed}`, `{energy}`, `{hiroshimas}`, `{hidden_count}` are filled in automatically.
- Editing one line only regenerates that one clip, so iterating costs almost nothing.

Then preview everything for free:
```bash
python scripts/narrate.py --dry-run
```
✅ **Check:** read three dialogues out loud as a team. If nobody laughs, rewrite.

### Step N3 — Generate (P1, 15 min + generation time)
**Run after the final `train.py`.** The risk scores and sizes are spoken, so retraining afterwards means regenerating.
```bash
python scripts/narrate.py --limit 5     # cheap test: listen before spending the quota
python scripts/narrate.py               # everything
```
**Voice tuning:** settings per voice are in `lines.json` → `voices`. A lower `stability` (INTERN 0.3) makes the delivery more
dramatic, a higher one (CAPCOM 0.65) keeps it deadpan. `...` in a line adds a pause.

✅ **Check:** `web/public/audio/` has the MP3s, 4 `sfx_*.mp3` and `manifest.json`. `npm run dev`, turn on
🔊 Mission Control Live, and the intro plays with subtitles. Click Apophis to hear the alarm and its report.

### Step N4 — Buttons that trigger commentary (P3, 45 min)
`web/src/lib/narration.js` exports everything you need:
```js
import { playAsteroid, hasClip, playCustomTier, playReaction, sfx } from '../lib/narration.js';
```
1. **💥 "What if it hit?"** in `SidePanel.jsx`, under the selected asteroid's info:
   - Always show the numbers (works with sound off): *"Hypothetical impact: {E_mt} Mt ≈ {E_mt / 0.015} Hiroshimas at {v_imp} km/s.
     Not a prediction."*
   - On click: `playAsteroid(selected.pdes, 'whatif')` (plays the dialogue with the impact boom at the scream).
   - `hasClip(pdes, 'whatif')` is false for asteroids without audio. The numbers still show.
2. **Custom asteroid verdict:** whenever the slider score changes tier, call `playCustomTier(score)`.
   If the custom orbit crosses Earth's, call `playReaction('custom_hit')`.
3. **Hidden hazards:** add `showHidden` to the view state + toggle (Act 4 steps). `App.jsx` already plays `act4` when it turns
   on, and the hidden-hazard dialogue when a lime dot is clicked.

### Step N5 — Near-miss commentary (P2, 30 min, needs fast-forward)
In the animation loop, measure the distance from each **hazardous or hidden** asteroid to Earth's simulated position.
When one enters a clearly labeled danger zone (e.g. 0.05 AU) **while time is running**:
```js
playReaction('near_miss_start'); sfx('whoosh');
// ...when it leaves the zone:
playReaction(Math.random() < 0.5 ? 'near_miss_end_1' : 'near_miss_end_2');
```
Rate-limit it (at most one every ~20 s) or it'll talk nonstop. Label the zone "simulated danger zone": positions are approximate.

### Rules
- **Never put the key in browser code.** Live voice goes through `web/api/say.js` only. No `VITE_`-prefixed key, ever.
- Narration **starts on** (clicks are user gestures, so sound is allowed), with a mute button. Subtitles cover the silent case.
- Never say an asteroid *will* hit. The what-if is always labeled hypothetical, and CAPCOM always says so out loud.

---

## 9. Schedule (deadline: 12:00 PM tomorrow)

The hour-by-hour build is the same as before. There's just more breathing room, and the old "stretch" items are now in scope.

### Tonight — build the working site (about 5 hours)
| Time | 🧠 P1 ML | 🌌 P2 3D | 📊 P3 UI/Story |
|---|---|---|---|
| 0:00–0:15 | **Kickoff (all)** | **Kickoff (all)** | **Kickoff (all)** |
| 0:15–0:35 | S1–S2 env + clean data | S1 bare scene | S1 **mock JSON** ⇢ push |
| 0:35–1:15 | S3–S6 models + thresholds | S2 kepler.js + planets | S2 layout |
| 1:15–1:30 | S7–S10 metrics, reality check, **export ⇢ push** | S3 points (mock) | S3 toggles |
| **1:30** | **🔁 Handoff #1: real data in** | swap to real | swap to real |
| 1:30–2:30 | ⭐ **S10b Act 4 size model** | S3–S4 points + toggles | S4 charts |
| 2:30–3:00 | S10b checks + **export ⇢ push** + N1 ElevenLabs key | S4 mistakes + hidden toggle | S5 learned panel |
| **3:00** | **🔁 Handoff #2 (Act 4 data in) + integration check + deploy (P3 S7)** | | |
| 3:00–3:30 | S11 notebook | S5 click to inspect | S5 Act 4 section + S6 info + sliders |
| 3:30–4:30 | S12 README draft, S5 B+ if time | S6 custom asteroid | S8 intro + polish, **N2 write lines** |
| **4:30** | **🧊 Freeze the models.** No retraining after tonight (the narration reads these numbers) | | |
| 4:30–5:00 | **N3 generate audio** | S7 flyby timeline | review the live site together |

✅ **Goal for tonight:** a deployed site that works end to end, final model numbers, a README draft. **Go to sleep.**

### Tomorrow morning — polish, voice, ship
| Time | 🧠 P1 | 🌌 P2 | 📊 P3 |
|---|---|---|---|
| 8:00–9:00 | S13 QA: page numbers vs notebook | S7 flybys finish + S8 perf | **N4 narration on the site** |
| 9:00–10:00 | README final (results, learned, limits) | bug fixes from QA, camera fly-to | intro + mobile polish |
| **10:00** | **🧊 Feature freeze** | | |
| 10:00–10:45 | proofread README | help record | **S9 demo video** (narration on) |
| 10:45–11:30 | final checks | final checks | **S10 SUBMIT** |
| 11:30–12:00 | **Buffer. Do not plan anything here.** | | |

**If you fall behind, cut in this order:** Model B+ → flyby timeline → asteroid narration clips (keep the 7 act clips) →
custom-asteroid sliders → notebook plots.
**Never cut:** Act 4 (hidden hazards), the test-set metrics, the "what did it learn" panel, the deployed link.

---

## 10. Risks & fixes

| Problem | Fix |
|---|---|
| Act 1 looks "too easy" (99%+) | That's the point. Say so up front: the label is defined by MOID/H, so Act 2 removes them |
| `cad.csv` join matches almost nothing | Print 5 `pdes` and 5 `des` values. Strip spaces and make sure both are strings (not `170903.0`) |
| `model_A.js` too big or slow | `n_estimators=100, num_leaves=7` |
| 30k points are slow | Lower the pixel ratio, set `size` smaller. If it's still slow, show only test-set + PHA points by default |
| JSON 404 on GitHub Pages | Relative paths only (`data/x.json`, not `/data/x.json`). The folder must be `docs/` |
| Merge conflicts | Only edit your own files. Always `git pull --rebase` before pushing |
| Someone gets stuck >15 min | Say so in the group chat right away and swap help. P1 is usually free after +2:30 |
| ElevenLabs key committed by accident | Revoke it on elevenlabs.io **immediately**, make a new one. `.env` goes in `.gitignore` before the first commit |
| ElevenLabs quota runs out | `narrate.py` skips clips that already exist, so reruns cost nothing. Cut asteroid clips to the top 20 |
| Narration numbers don't match the site | Models were retrained after the audio was made. Delete `docs/audio/ast_*.mp3` and rerun `narrate.py` |
| Audio doesn't play | Browsers block sound before a click. That's why narration starts behind the toggle button |
| Size model doesn't beat the formula | Try adding `per_y` and `moid` as features. If it still doesn't win, report it honestly and lean on the hidden-hazard list + validation |
| `diameter` mostly empty for NEOs | Expected (only a small share of NEOs have measured sizes). Training uses all measured asteroids, testing uses measured NEOs only |
| Thousands of "hidden hazards" | Probably a units bug: SBDB `diameter` is in **km**, the code converts to meters. Check Apophis ≈ 340 m |
| A judge asks "is it really hazardous?" | "It's a candidate for follow-up observation, and here's its size range." Never claim a confirmed threat |

---

## 11. Submission checklist

- [ ] Live site URL (GitHub Pages) opens on a phone
- [ ] Public GitHub repo
- [ ] README: problem, data (both datasets), method, **metrics on unseen test data**, **what the model learned**, limitations
- [ ] ⭐ Act 4 in README and on the site: size error vs formula, coverage, validation, hidden-hazard count + top 10
- [ ] Narration toggle works on the live site, and `.env` is **not** in the repo
- [ ] 90-second demo video with ElevenLabs voiceover (link in README)
- [ ] 3 screenshots
- [ ] Team names

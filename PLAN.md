# Is It Coming For Us? — Teaching a Machine to Spot Hazardous Asteroids

**Problem 2: Teach a Machine to See Space** · Deadline: **12:00 PM (noon) tomorrow** · Team of 3

> We train a model to predict which near-Earth asteroids are *Potentially Hazardous* from their orbits alone,
> test it on asteroids it has never seen, check it against real close approaches to Earth, and show every
> prediction — including its mistakes — as real orbits in a live 3D solar system.

**How to use this doc:** everyone reads sections 1–4 (10 min). Then each person goes to **their own section**
(5, 6 or 7) and works through it **in order**. Every step ends with a ✅ **Check**. Don't move on until it passes.
Section 8 (ElevenLabs narration) is shared and happens **tomorrow morning**. Section 9 is the two-day schedule.

---

## 1. The pitch (what judges should remember)

1. **Act 1: the model rediscovers NASA's rule.** Given all features, the model learns
   *MOID ≤ 0.05 AU and H ≤ 22*, which is NASA's official definition of a hazardous asteroid. Nobody told it.
2. **Act 2: take away the answer key.** Remove MOID and H. Model B gets only the raw orbit shape
   (a, e, i, Ω, ω, …) and has to work out Earth-crossing geometry for itself.
3. **Act 3: reality check.** We check Model B's warnings against NASA's record of real close approaches
   to Earth, data the model never saw.
4. **See it.** Every asteroid in 3D, colored by predicted risk, with mistakes highlighted and live predictions
   for any orbit you type in.
5. **Hear it.** An ElevenLabs "mission control" voice narrates the three acts and reads out the model's verdict
   on the asteroids you click.

---

## 2. Our data (already downloaded)

| File (put in `data/raw/`) | What it is | Used for |
|---|---|---|
| `sbdb.csv` (dataset 1: `spkid, full_name, pdes, name, neo, pha, class, H, diameter, albedo, e, a, q, ad, i, om, w, ma, per_y, moid, moid_jup, t_jup, …`) | JPL Small-Body Database, every known asteroid | **Training and testing** |
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
  "pha": 1, "pA": 0.99, "pB": 0.87, "test": true, "closeApproach": 0.0002 }
```
`pA`/`pB` = hazard probability from Model A/B. `test` = asteroid was in the unseen test set.
`closeApproach` = closest recorded approach to Earth in AU from `cad.csv` (or `null`).

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
| `view-changed` | P3 (toggles) | P2 | `{ model: "A"\|"B", testOnly: bool, showMistakes: bool }` |
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

### Step 11 — Notebook (+1:30 → +2:30)
Copy `train.py` into `notebooks/train.ipynb` cell by cell and add plots: class balance bar, ROC/PR curves A vs B,
the tree diagram (`sklearn.tree.plot_tree`), feature importance, and a SHAP summary
(`shap.TreeExplainer(model_b).shap_values(test[FEAT_B])` → `shap.summary_plot`). Save the PNGs to `docs/img/` for the README.

### Step 12 — README results section (+3:15 → +4:15)
Write: data source and filtering, the train/test method (stratified 80/20, threshold picked by CV, test set never touched),
a metrics table (LogReg / A / B / B+), **what the model learned** (the tree rules vs NASA's rule, the importances,
the Act 3 reality check, the worst misses), and **limitations** (the label is defined by MOID/H, PHAs are rare,
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
let view = { model: 'A', testOnly: false, showMistakes: false };

function redraw() {
  const key = view.model === 'A' ? 'pA' : 'pB';
  const thr = metrics[view.model].threshold;
  const list = view.testOnly ? asteroids.filter(a => a.test) : asteroids;
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

✅ **Check:** with mistakes on and Model B selected, you can see magenta dots (misses) and yellow dots (false alarms).
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

  <div id="legend">🔵 safe → 🔴 hazardous · <span class="mag">■</span> missed hazard · <span class="yel">■</span> false alarm</div>
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
```
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
5. (20s) Apophis preset, then drag the sliders. *"Try your own asteroid."*

Take 3 screenshots: the main view, mistakes mode, the learned panel.

### Step 10 — README intro + SUBMIT (tomorrow, by 11:30 AM)
README top: the one-line pitch, live link, video link, screenshots, team names. P1's results section goes below.
Then submit (section 11 checklist).

---

## 8. 🎙️ ElevenLabs narration (shared: P3 writes, P1 generates, P3 plays)

**Idea:** every asteroid gets a **funny voiced report**. A deadpan "mission control" voice reads the model's verdict,
and the joke gets darker as the hazard probability goes up:

| Risk tier (Model B `pB`) | Tone | Example |
|---|---|---|
| **Chill** (< 0.2) | bored, relieved | *"Asteroid 2018 BM3. Hazard probability: 4 percent. Go back to your sandwich."* |
| **Sus** (0.2–0.6) | nervous | *"Asteroid 2020 BN7. 41 percent. Not great, not terrible. Maybe don't plan anything big."* |
| **Screwed** (> 0.6) | doom, comic timing | *"Asteroid Apophis. 87 percent hazard. I'm not saying you're screwed… but you're screwed. Statistically speaking."* |

**Keep it honest (judges will check):** "potentially hazardous" means *it passes close enough to be worth watching*,
not *it will hit Earth*. Every "screwed" clip ends with a short tag like *"Relax, hazardous means 'worth watching,'
not 'on its way.' Probably."*, and the "What did it learn?" panel spells this out. The joke works better when the science is right.

**Key rule: never call ElevenLabs from the website.** GitHub Pages is public, so any API key in `docs/` gets stolen.
Instead we **generate MP3s ahead of time** with a Python script and commit just the audio files.
For "click any asteroid," we pre-generate clips for the ~60 most interesting asteroids, not all 30k.

### Step N1 — Account + key (P1, 10 min, can be tonight)
1. Sign in at elevenlabs.io → profile → **API Keys** → create a key.
2. In the repo root, create `.env` containing `ELEVENLABS_API_KEY=sk_...`, and add `.env` to `.gitignore` **before** your next commit.
3. Check your **character quota** on the account page. The free tier is small, so keep every line short.
   Rough budget: about 40 words per clip × about 70 clips ≈ 15k characters. If the quota is lower, cut the asteroid clips to the top 20.
4. In the Voice Library, pick one voice as a team (calm and clear, e.g. a "narrator" or "news" style) and copy its **voice ID**.

### Step N2 — Write the lines (P3, 30 min) → `narration/lines.json`
```json
{
  "intro":  "Thirty-five thousand rocks cross near Earth's orbit. Which ones should we worry about? We taught a machine to decide.",
  "act1":   "First, we gave the model everything. On its own, it rediscovered NASA's exact rule for hazardous asteroids.",
  "act2":   "Then we took away the answer key. With only the shape of each orbit, it has to work out the geometry for itself.",
  "act3":   "Finally, a reality check. Asteroids the model warned about really did pass closer to Earth.",
  "mistakes": "Magenta dots are real hazards the model missed. Yellow dots are false alarms.",
  "custom": "Design your own asteroid, and the model will judge it live.",

  "tier_chill_1":   "Hazard level: snooze. Go back to your sandwich.",
  "tier_chill_2":   "This one's harmless. Honestly, it's more scared of you.",
  "tier_chill_3":   "Nothing to see here. Cancel the bunker.",
  "tier_sus_1":     "Not great, not terrible. Maybe don't plan anything big.",
  "tier_sus_2":     "Hmm. I'd keep one eye on the sky. The other eye can do whatever.",
  "tier_sus_3":     "It's giving… mild concern.",
  "tier_screwed_1": "I'm not saying you're screwed. But you're screwed. Statistically. Relax, hazardous means worth watching, not on its way. Probably.",
  "tier_screwed_2": "Congratulations, you've built a planet-killer. Your insurance does not cover this.",
  "tier_screwed_3": "Bad news: you're screwed. Good news: it's not this week. Hazardous means worth watching, not incoming."
}
```
Write **3 lines per tier** (the `tier_*` keys). They're played for **custom asteroids** from the sliders, because we can't pre-record every
possible slider value. The site picks a random line from the matching tier. **The asteroid reports for real asteroids** are built
automatically by `narrate.py` (see N3), which puts in the name and percentage and then adds one of P3's jokes from the `JOKES` lists.
Read each line out loud: if it takes more than ~12 seconds, shorten it. Funny > long.
Test the jokes on someone outside the team. If they don't laugh, cut it.

### Step N3 — Generate the audio (P1, 30 min) → `scripts/narrate.py`
```bash
pip install elevenlabs python-dotenv
```
```python
import json, os, pandas as pd
from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs

load_dotenv()
client = ElevenLabs(api_key=os.environ["ELEVENLABS_API_KEY"])
VOICE_ID = "PASTE_VOICE_ID"
MODEL_ID = "eleven_multilingual_v2"
os.makedirs("docs/audio", exist_ok=True)

def speak(key, text):
    path = f"docs/audio/{key}.mp3"
    if os.path.exists(path):          # never pay twice for the same clip
        return
    audio = client.text_to_speech.convert(voice_id=VOICE_ID, model_id=MODEL_ID,
                                          text=text, output_format="mp3_44100_128")
    with open(path, "wb") as f:
        for chunk in audio:
            f.write(chunk)
    print("✓", key)

lines = json.load(open("narration/lines.json"))
for key, text in lines.items():
    speak(key, text)

# asteroid clips: presets + worst misses + top test-set PHAs
ast = pd.DataFrame(json.load(open("docs/data/asteroids.json")))
metrics = json.load(open("docs/data/metrics.json"))
picks = ast[ast["name"].str.contains("Apophis|Bennu|Didymos")]
picks = pd.concat([picks, ast[ast["name"].isin([m["name"] for m in metrics["worst_misses"]])],
                   ast[(ast["test"]) & (ast["pha"] == 1)].nlargest(50, "pB")]).drop_duplicates("pdes")

import random
random.seed(42)
JOKES = {   # P3 writes these. Short, punchy, one sentence each
    "chill":   ["Go back to your sandwich.", "Cancel the bunker.", "It's more scared of you than you are of it."],
    "sus":     ["Not great, not terrible.", "Maybe don't plan anything big.", "I'd keep one eye on the sky."],
    "screwed": ["I'm not saying you're screwed. But you're screwed. Statistically.",
                "Your insurance does not cover this.", "Bad news: you're screwed. Good news: not this week."],
}
TAG = " Relax, hazardous means worth watching, not on its way. Probably."
def tier(p): return "chill" if p < 0.2 else "sus" if p < 0.6 else "screwed"

manifest = {}
for _, a in picks.iterrows():
    t = tier(a.pB)
    name = a["name"].split("(")[0].strip()
    nasa = "NASA agrees." if (a.pha == 1) == (t == "screwed") else "Plot twist: NASA disagrees."
    text = f"Asteroid {name}. Hazard probability: {round(a.pB * 100)} percent. {random.choice(JOKES[t])} {nasa}"
    if t == "screwed":
        text += TAG
    key = "ast_" + str(a.pdes).replace(" ", "_")
    speak(key, text)
    manifest[a.pdes] = {"src": f"audio/{key}.mp3", "tier": t}
json.dump(manifest, open("docs/audio/manifest.json", "w"), indent=1)
```
The "Plot twist: NASA disagrees" line is for the model's **mistakes**. It turns the worst misses into a joke
*and* shows the judges you know where your model is wrong.

**Voice settings for comic timing:** choose a deadpan narrator voice. In ElevenLabs, lower **Stability** (about 0.35) makes the
delivery more expressive, and `...` in the text adds a dramatic pause (*"you're... screwed"*). Generate `tier_screwed_1` first,
listen, and tweak before making the rest. That saves quota.
Run it **after** the final model export (otherwise the percentages it reads out will be wrong). If you retrain, delete
`docs/audio/ast_*.mp3` and run it again.

✅ **Check:** `docs/audio/` has `intro.mp3` … `custom.mp3`, the `ast_*.mp3` clips and `manifest.json`.
Play `ast_99942.mp3` and it says Apophis's real number. `git status` must **not** show `.env`.

### Step N4 — Play it on the site (P3, 30 min) → `docs/narration.js`
```js
const manifest = await (await fetch('audio/manifest.json')).json().catch(() => ({}));
let on = false, current;
export function say(src) {
  if (!on || !src) return;
  current?.pause();
  current = new Audio(src); current.play().catch(() => {});
}
const btn = document.createElement('button');
btn.id = 'voiceToggle'; btn.textContent = '🔇 Narration off';
btn.onclick = () => { on = !on; btn.textContent = on ? '🔊 Narration on' : '🔇 Narration off'; if (on) say('audio/intro.mp3'); };
document.getElementById('topbar').appendChild(btn);

addEventListener('asteroid-selected', ({ detail: a }) => say(manifest[a.pdes]?.src));

// custom asteroids: random pre-recorded joke from the matching risk tier
const tierOf = p => p < 0.2 ? 'chill' : p < 0.6 ? 'sus' : 'screwed';
let lastTier;
addEventListener('custom-scored', ({ detail }) => {
  const t = tierOf(detail.pB);
  if (t === lastTier) return;                 // only speak when the tier changes, not on every slider tick
  lastTier = t;
  say(`audio/tier_${t}_${1 + Math.floor(Math.random() * 3)}.mp3`);
});
addEventListener('view-changed', ({ detail: v }) => {
  if (v.showMistakes) say('audio/mistakes.mp3');
  else if (v.model === 'B') say('audio/act2.mp3');
});
```
Add `<script type="module" src="narration.js"></script>` to `index.html`. Play `act1`/`act3` when those panels scroll into view
(an `IntersectionObserver` on `#learned`) and `custom` when the sliders are first touched.
Narration **starts off**: browsers block sound until the user clicks something, and judges may be in a quiet room.

Also show the tier as a badge in the info panel and slider verdict (😎 Chill / 😬 Sus / 💀 Screwed) so the joke lands even with sound off.

✅ **Check:** turn narration on and the intro plays. Click Apophis and its "screwed" report plays. Dragging the sliders from a safe
orbit to an Earth-crossing one changes the badge and plays a new joke at each tier change. Click an asteroid with no clip and nothing breaks.
Works on the deployed site, not just localhost.

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
| 1:30–2:30 | S5 B+ stretch, S11 notebook | S3–S4 points + toggles | S4 charts |
| 2:30–3:00 | S11 cont. + **N1 ElevenLabs key** | S4 mistakes | S5 learned panel |
| **3:00** | **🔁 Integration check + deploy (P3 S7)** | | |
| 3:00–3:30 | S12 README draft | S5 click to inspect | S6 info + sliders |
| 3:30–4:30 | S12 cont. | S6 custom asteroid | S8 intro + polish, **N2 write lines** |
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

**If you fall behind, cut in this order:** flyby timeline → asteroid narration clips (keep the 6 act clips) →
custom-asteroid sliders → notebook plots.
**Never cut:** the test-set metrics, the "what did it learn" panel, the deployed link.

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

---

## 11. Submission checklist

- [ ] Live site URL (GitHub Pages) opens on a phone
- [ ] Public GitHub repo
- [ ] README: problem, data (both datasets), method, **metrics on unseen test data**, **what the model learned**, limitations
- [ ] Narration toggle works on the live site, and `.env` is **not** in the repo
- [ ] 90-second demo video with ElevenLabs voiceover (link in README)
- [ ] 3 screenshots
- [ ] Team names

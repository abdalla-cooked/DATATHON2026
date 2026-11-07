# Is It Coming For Us? — Teaching a Machine to Spot Hazardous Asteroids

DATATHON 2026 · Problem 2: Teach a Machine to See Space. The full build plan is in [PLAN.md](PLAN.md).

> _Pitch, live link, video, screenshots and team names go here (P3, PLAN.md §7 step 10)._

## Repo layout

```
├── PLAN.md                    # the build plan, read this first
├── requirements.txt           # Python deps (P1)
├── .env.example               # copy to .env, add ELEVENLABS_API_KEY (never commit .env)
├── data/raw/                  # gitignored — share over Drive
│   ├── sbdb.csv               #   JPL Small-Body Database (training)
│   ├── cad.csv                #   close approaches 1900–2200 (Act 3 + flybys)
│   └── extras/                #   gaia_stars, exoplanets, solar_wind, fireballs (optional)
├── scripts/                   # prepare_data.py, train.py, narrate.py (P1)
├── notebooks/                 # train.ipynb with plots (P1)
├── narration/lines.json       # what the voice says (P3)
├── web/                       # ← the website SOURCE (React + Vite + Three.js)
│   ├── index.html
│   ├── public/
│   │   ├── data/              #   asteroids.json, metrics.json, approaches.json (mock → P1 real)
│   │   └── audio/             #   ElevenLabs MP3s + manifest.json (P1)
│   └── src/
│       ├── App.jsx            #   shared state (replaces the window events of Contract 4)
│       ├── styles.css         #   (P3)
│       ├── components/        #   TopBar, SidePanel, Legend, … (P3)
│       ├── three/             #   SolarSystem.jsx, kepler.js (P2)
│       ├── model/             #   model_A.js, model_B.js — m2cgen exports (P1, stubs for now)
│       └── lib/useData.js     #   loads the JSON contracts
└── docs/                      # ← BUILD OUTPUT of `npm run build`. GitHub Pages serves this. Don't edit by hand.
```

## Run it

**Website (dev, hot reload):**
```bash
cd web
npm install        # first time only
npm run dev        # open the URL it prints (http://localhost:5173)
```

**Publish:** `cd web && npm run build` writes the site into `docs/`. Commit `docs/` and push;
GitHub Pages (Settings → Pages → `main` / `docs`) serves it.

**Python / ML** (P1):
```bash
python -m venv .venv
.venv\Scripts\activate          # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
```
If pip fails with `CERTIFICATE_VERIFY_FAILED`, add `--use-feature=truststore`.

## Results

> _P1 fills this in (PLAN.md §5 step 12)._

# What to say about the models

Talking points for the pitch and for judge questions. Every number here comes from `docs/data/metrics.json` and `docs/data/asteroids.json`, which `scripts/train.py` produces.

---

## 1. The 30-second version

> "NASA labels an asteroid *potentially hazardous* with a fixed rule: its orbit comes within 0.05 AU of Earth's orbit (that distance is called MOID) **and** it's bright enough to be at least ~140 m wide (H ≤ 22).
>
> We trained a model on 42,704 near-Earth asteroids. **Model A** sees everything, including MOID, and relearns NASA's rule almost exactly. That's our proof the machine learned real physics.
>
> **Model B** never sees MOID. It has to work out from the *shape* of the orbit whether it crosses ours, and it still catches 95% of hazardous asteroids.
>
> That matters because for a newly discovered asteroid, MOID is only a rough estimate. Our ending dramatizes it: same asteroid, two models, two outcomes."

---

## 1b. "What was the purpose of Model B, and how did it save the world?"

**Purpose of Model B:**
> "NASA's hazardous label depends on one number, MOID: the closest gap between an asteroid's orbit and Earth's. Model A was given that number, and it simply relearned NASA's rule. That proved the machine learned real physics, but it was close to being handed the answer.
>
> So we built Model B to answer a harder question: **can a machine tell whether an asteroid is dangerous without being told MOID?** Instead of the distance, it reads the *shape* of the orbit: does it reach Earth's distance from the Sun, is it pointed the right way, is it tilted too steeply? It still catches **95%** of hazardous asteroids. It learned what a near-miss orbit looks like on its own."

**Why that matters:**
> "A model that trusts one number is only as good as that number. For a newly discovered asteroid, MOID starts out as a rough estimate. Model B is a second opinion that doesn't depend on it. And we saw it work: near NASA's cutoffs, Model B caught **21 real hazardous asteroids** that the MOID-based model missed. For one of them, (2011 CX46), Model A gave a risk score of 31 and Model B gave 78."

**How it saved the world (the dramatization):**
> "Our ending is a simulated scenario based on that result. A fictional asteroid is found three nights ago. Its rough MOID estimate is slightly wrong and lands just outside the danger line.
>
> - With **Model A**, that one bad number makes it say *safe*. Mission Control stands down, and the asteroid hits.
> - With **Model B**, the orbit's shape still looks dangerous, so it raises the alarm. Telescopes are pointed at it, the refined orbit confirms a collision course, and a DART-style spacecraft nudges it off course in time.
>
> The lesson: **a model that relies on one number breaks when that number is wrong. A model that looks at the whole picture doesn't.**"

**If a judge pushes back:**
> "To be clear, Model B isn't better than NASA. It was trained on NASA's labels, and NASA runs separate impact-monitoring systems (Scout for brand-new objects, Sentry for known ones). Model B isn't better than Model A overall either: A is more precise. B's value is being a second opinion that doesn't depend on MOID, which matters most when MOID is uncertain."

**Motivation, in one honest line:** say *"a model that trusts only MOID would have missed this,"* **not** *"NASA would have missed this."*

---

## 2. Key terms (say these simply)

| Term | Plain-English version |
|---|---|
| **NEO** | Near-Earth object: an asteroid or comet whose orbit brings it near Earth's. |
| **PHA (potentially hazardous asteroid)** | NASA's label: MOID ≤ 0.05 AU **and** H ≤ 22. Means "could become a risk over decades or centuries," **not** "about to hit." |
| **MOID** | Minimum Orbit Intersection Distance. Picture both orbits as loops drawn in space: MOID is the smallest gap between the two loops. It's the distance between the *roads*, not between the cars. |
| **0.05 AU** | About 7.5 million km, roughly 20× the Earth–Moon distance. |
| **H (absolute magnitude)** | Brightness, used as a stand-in for size. Lower H = brighter = probably bigger. H ≤ 22 ≈ at least 140 m, *if* the asteroid reflects light like an average one. |
| **q (perihelion)** | The orbit's closest point to the Sun. If q is near 1 AU, the orbit reaches Earth's distance. |
| **ω, i** | ω = which direction the orbit's close point faces; i = how tilted the orbit is relative to Earth's. Together they decide whether the asteroid is *at Earth's distance while passing through Earth's plane*. |
| **Risk score** | The model's output from 0–100. **Not** an impact probability. It means "how much this looks like the hazardous ones." (Training weighted the rare hazardous class more heavily, which inflates the scores.) |

---

## 3. The four models

| Model | Sees | Job in the story | Result on 8,541 test asteroids |
|---|---|---|---|
| **Decision tree (depth 2)** | Everything | Shows *what* was learned | Its two splits are **H ≤ 22.0** and **MOID ≤ 0.05**: NASA's rule, rediscovered from raw data. |
| **Logistic regression** | Everything | Simple baseline | 97% recall, 55% precision. Shows the gradient-boosted model is worth it. |
| **Model A (LightGBM)** | Orbit + **MOID** + H | Emulates NASA's calculation | **100% precision, 93.5% recall.** 0 false alarms, 33 missed. |
| **Model B (LightGBM)** | Orbit shape + H, **no MOID** | A different approach | **95.1% recall, 59% precision.** 25 missed, 336 false alarms. |

Plus **Act 4, the size model**, which estimates how reflective each asteroid is to get its *true* size (Section 7).

### What each model relies on (feature importance)
- **Model A:** H 298,261 · **MOID 181,830** · every other orbit feature only 350–1,240. **A puts almost all its trust in one number, MOID.**
- **Model B:** H 281,408 · **q 87,100** · ω 32,720 · i 9,905 · a 8,259. **B reads the whole orbit shape:** does it reach Earth's distance (q), in the right direction (ω), at a low enough tilt (i)?

**How to say it:** *"Model B learned the geometry of a near-miss without ever being told the distance."*

---

## 4. Model A vs Model B, honestly

**Model A emulates NASA's calculation.** MOID is half of NASA's definition, so giving it to the model is close to giving it the answer. Data scientists call this *label leakage*. That's why A scores almost perfectly, and also why A on its own isn't a discovery.

**Model B takes a different approach.** No MOID, so it can't read the answer off it. It's the **real test** of whether a machine can learn what makes an orbit dangerous. It catches 95%.

### Where B beats A: the edges of NASA's rule (measured)

Out of the **510 real hazardous asteroids** in the test set:

| | Count |
|---|---|
| Both models catch it | 464 |
| **Only Model B catches it** | **21** |
| Only Model A catches it | 13 |
| Both miss it | 12 |

- The cases **only B** catches cluster right at NASA's cutoffs: H 21.8–22.0 (barely under the size line), and several with MOID 0.042–0.050 (barely under the distance line).
- Of the 85 real hazards with MOID between 0.04 and 0.05, **B catches 79 and A catches 76.**
- **Why:** A learned a cliff edge at MOID 0.05 and gets unsure near it. B spreads its judgment over the orbit's shape, so it stays confident.

**Best real examples:**

| Asteroid | Model A risk | Model B risk | Note |
|---|---|---|---|
| **(2011 CX46)** | **31** | **78** | Clearest split. MOID 0.031, q 0.66 AU, tilt 7.8° |
| **(2010 KB61)** | 67 | 87 | MOID 0.0500, exactly on NASA's line, tilted 45° |
| **(2014 WL6)** | 89 | 92 | MOID 0.0499, a hair inside the line |

**Be fair about it:**
- Many of the 21 are narrow misses for A (scores of 98–99 against a very strict alert line of 99.86), not blunders.
- **B is not better overall.** It misses 13 that A catches and raises 336 false alarms against A's 0.
- The claim is **"B is more robust at the edges of the rule,"** not "B beats A."

---

## 5. Why a model without MOID matters: new asteroids

- **MOID doesn't need a full orbit observed.** Astronomers fit an orbit from a few nights of positions and compute MOID **within days**, but at first it carries **large error bars**.
- As observations build up, the orbit is refined, and **MOID, H and the hazardous label can change**. NASA's label is always right about its own definition. It isn't always right *about reality* on day one.
  - Example from our data: **50 asteroids carry a label that doesn't match NASA's rule** applied to today's H and MOID. (2011 CX46) has H 22.02, technically over the line, yet it's labeled hazardous: most likely left over from an older measurement.
- **Model A** depends on that one early number. If the early MOID reads 0.07 when the truth is 0.03, A falls off its cliff and says safe.
- **Model B** never sees MOID, so one bad number can't flip its answer.

**Safe one-liner:**
> "With an accurate MOID, nothing beats it. But near the cutoffs, our shape-based model caught 21 hazards the MOID-based model missed. And when MOID is just a rough early estimate, orbit shape could be the safer bet."

**Not yet proven:** B's inputs (q, ω, i) come from the same rough early orbit, so they're uncertain too. Whether B actually beats A on *noisy early orbits* needs the noise test (Section 9). Until it's run, say **"could"** and **"hypothetically."**

---

## 6. The ending: how Model B saved Earth (dramatization)

**Show on screen:** *"Simulated scenario: fictional, newly discovered asteroid."*

**Setup:** asteroid "2026 VX" was found three nights ago. It's about 300 m wide, with an orbit shaped like (2011 CX46)'s. True MOID **0.03 AU** (hazardous), but the rough three-night estimate reads **0.07 AU**, just outside NASA's 0.05 line.

### Branch 1: Model A selected
1. **CAPCOM:** "Asteroid 2026 VX. Risk score [A's score]. Three nights of data, MOID estimate 0.07: outside the line. Model A says no threat."
2. CAPCOM stands down. The asteroid keeps coming. **Impact.**
3. **INTERN** (panic band): screaming. **CAPCOM**, steady: "Model A bet everything on one number. That number was wrong by a hair."

### Branch 2: Rewind, Model B selected
1. **CAPCOM:** "Asteroid 2026 VX. Risk score [B's score]. Model B doesn't use MOID. It says the orbit itself looks like trouble: perihelion near Earth's distance, low tilt."
2. **CAPCOM:** "Get every telescope on it." *(This is what a hazard flag really triggers: urgent follow-up.)*
3. Refined orbit: **collision course confirmed.**
4. **Launch a kinetic impactor**, like NASA's DART mission, which hit asteroid Dimorphos in 2022 and changed its orbit. It **deflects** the asteroid rather than blowing it up; an explosion could turn one impact into many fragments.
5. The asteroid **swerves and misses.** INTERN: relieved, then glad. CAPCOM explains what B noticed (the SHAP "why").

### Why this story is fair
- Model A really does rely almost entirely on MOID (importance 181,830 against ≤ 1,240 for any other orbit feature).
- Model B really does catch real hazards that A misses near the cutoffs (21 cases; (2011 CX46) scored 31 by A and 78 by B).
- Early MOID estimates really are uncertain, and labels really do get revised.
- **The fictional part:** the specific asteroid, and assuming B's orbit-shape inputs survive early uncertainty better than MOID does.

**Build note:** score the scene's inputs with the **real in-browser models** so both scores on screen are actual model output. Choose values where A truly comes out low and B truly comes out high.

---

## 7. Act 4: where the project measurably beats NASA's *method*

- NASA's rule judges size by brightness, **assuming every asteroid reflects ~14% of light**. A **dark** asteroid looks faint, gets H > 22, and is called "too small", even when it's big.
- Our size model **predicts reflectivity (albedo)**, then calculates the real size.
  - Typical size error: **35%**, against 38% for NASA's fixed formula.
  - The 5–95% range contains the true size **79.5%** of the time.
- It finds **462 "hidden hazards"**: asteroids that pass close to Earth's orbit, look too faint to count, but are probably ≥ 140 m. **34 have already been measured** at ≥ 140 m by NEOWISE yet still aren't labeled hazardous.
- On held-out data it caught **4 of 9** true hidden hazards. NASA's formula caught **1**.
- **Real example: (2016 LF2).** MOID 0.021 AU, H 22.42 → "not hazardous" by the rule. Our model: about 300 m. NEOWISE measured it at **204 m**.

**Wording:** "candidates for follow-up observation," **not** "NASA is wrong."

---

## 8. Judge questions and answers

**"Does your model predict which asteroids will hit Earth?"**
> No. It predicts NASA's hazardous label: which asteroids deserve close watching. Actual impact prediction is done by NASA's Sentry system, which simulates orbits forward. Our risk score is a ranking, not an impact probability.

**"Isn't Model A just copying NASA?"**
> Yes, deliberately. That's how we prove it learned the real rule (the tree rediscovers H 22 and MOID 0.05). Model B is the real test because it doesn't get MOID.

**"Is Model B better than NASA?"**
> No. B was trained on NASA's labels, so NASA is its answer key. It's a second opinion that doesn't depend on MOID, most useful when MOID is uncertain or an asteroid sits near the cutoffs.

**"Model B has 336 false alarms. Isn't that bad?"**
> For screening it's the right trade-off: missing a real hazard is far worse than double-checking a safe one. And those 336 are orbits that *look* hazardous while NASA's numbers say safe, which makes them a reasonable watchlist.

**"How do you know it didn't just memorize?"**
> Stratified 80/20 split. Every number here is on 8,541 asteroids the model never saw. The alert threshold was chosen by cross-validation on training data only.

**"Why can't the AI predict a future orbit?"**
> It doesn't need to. Orbits follow gravity, which physics already solves. What ML adds is pattern-finding: recognizing hazardous orbit shapes without MOID, and estimating true size from incomplete data.

**"Is the ending real?"**
> It's a dramatization based on a real pattern in our results: Model B catches hazards near NASA's cutoffs that the MOID-based model misses, like (2011 CX46). The asteroid in the scene is fictional.

---

## 9. Do say / don't say

| ✅ Say | ❌ Don't say |
|---|---|
| "Model A emulates NASA's calculation" | "Model A is how NASA detects hazards" (NASA uses a fixed rule, not ML) |
| "B is more robust near NASA's cutoffs" | "B is better than A" or "B beats NASA" |
| "B **could** catch errors in early, uncertain estimates" | "B **does** catch NASA's mistakes" |
| "Risk score" / "how much it looks like the hazardous ones" | "90% chance of hitting Earth" |
| "Hazardous = worth watching closely" | "Hazardous = going to hit us" |
| "Deflect, like DART" | "Blow it up" |
| "Hidden hazards are candidates for follow-up" | "NASA got these wrong" |
| "MOID is uncertain for new asteroids" | "New asteroids can't get a MOID" or "MOID needs a full orbit" |

**Leave out:** the Act 3 "reality check" numbers. They point the wrong way (flagged asteroids made close passes 42% of the time, unflagged ones 47%). Drop that slide or reword it; don't present it as confirmation.

**Optional, to strengthen Section 5:** run a **noisy-orbit test**. Add early-discovery-sized errors to the test orbits, recompute MOID, and compare how much A's and B's recall drop. If B holds up better, "could" becomes "measured."

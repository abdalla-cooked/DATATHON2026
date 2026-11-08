// Builds api/_capcom-facts.js: the compact, verified data summary that Ask CAPCOM (api/chat.js) answers from.
// The raw exports are ~14 MB, far too big to send to Claude, so this keeps the model results plus a handful of
// notable asteroids. Re-run after the data in public/data changes:   node scripts/capcom-facts.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import L from '../src/lib/lines.js';

const read = (f) => JSON.parse(readFileSync(new URL(`../public/data/${f}`, import.meta.url), 'utf8'));
const m = read('metrics.json');
const rocks = read('asteroids.json');
const passes = read('approaches.json');

const LD = 0.00257;                                      // one Earth-Moon distance in AU
const pct = (x) => `${Math.round(x * 1000) / 10}%`;
const score = (x) => Math.round(x * 100);
const size = (r) => (r.D_meas ? `${Math.round(r.D_meas)} m measured` : `about ${Math.round(r.D_pred)} m estimated`);
const sig2 = (x) => Number(x.toPrecision(2)).toLocaleString('en-US', { maximumFractionDigits: 4 });
const au = (d) => (d === 0 ? 'under 0.00001 AU (rounds to zero: the orbits all but touch)'
  : `${d} AU (about ${sig2(d * 149.6e6)} km, ${sig2(d / LD)} times the Moon's distance)`);
const energy = (mt) => (mt >= 1000 ? `${Math.round(mt).toLocaleString('en-US')} megatons` : `${mt} megatons`);

const FEATURE = {
  H: 'H, absolute magnitude (brightness, a stand-in for size)', moid: 'MOID, closest distance between its orbit and Earth\'s',
  q: 'q, closest distance to the Sun', ad: 'aphelion, farthest distance from the Sun', a: 'a, orbit size',
  e: 'e, how stretched the orbit is', i: 'i, orbit tilt', om: 'node angle (how the orbit is turned)', w: 'argument of perihelion',
};
const topFeatures = (imp) => {
  const total = Object.values(imp).reduce((s, v) => s + v, 0);
  return Object.entries(imp).sort((x, y) => y[1] - x[1]).slice(0, 4)
    .map(([k, v]) => `${FEATURE[k] || k} ${pct(v / total)}`).join('; ');
};
const model = (k, x) => `Model ${k}: ROC-AUC ${x.roc_auc}, PR-AUC ${x.pr_auc}, precision ${x.precision}, recall ${x.recall}, `
  + `confusion on the test set [[true negatives ${x.confusion[0][0]}, false alarms ${x.confusion[0][1]}], `
  + `[misses ${x.confusion[1][0]}, caught ${x.confusion[1][1]}]], flag threshold ${x.threshold}.`;

const describe = (r) => [
  r.name, `class ${r.class}`, size(r), `NASA label: ${r.pha ? 'potentially hazardous' : 'not hazardous'}`,
  `risk score Model A ${score(r.pA)}, Model B ${score(r.pB)}`, `MOID ${au(r.moid)}`,
  r.closeApproach != null && `closest pass in JPL's close-approach list ${au(r.closeApproach)}`,
  r.hidden && 'flagged by our size model as a hidden-hazard candidate',
  r.why && `Model B's biggest reason: ${L.why[r.why]?.[0]}`,
  `hypothetical impact what-if: ${energy(r.E_mt)} at ${r.v_imp} km/s`,
].filter(Boolean).join(', ');

const by = (key, dir = -1, filter = () => true) => rocks.filter((r) => r[key] != null && filter(r))
  .sort((x, y) => dir * (x[key] - y[key]))[0];
const named = (n) => rocks.find((r) => r.name.includes(n));

const notable = [
  ['Most famous: Apophis', named('Apophis')],
  ['Bennu (visited by OSIRIS-REx)', named('Bennu')],
  ['Didymos (target of the DART impact test)', named('Didymos')],
  ['Biggest in the dataset', by('D_pred')],
  ['Biggest that NASA labels potentially hazardous', by('D_pred', -1, (r) => r.pha)],
  ['Closest orbit to Earth\'s (smallest MOID)', by('moid', 1)],
  ['Closest recorded pass', by('closeApproach', 1)],
  ['Fastest hypothetical impact speed', by('v_imp')],
  ['Highest Model B score that NASA does not flag (a false alarm)', by('pB', -1, (r) => !r.pha)],
  ['Strongest hidden-hazard candidate', rocks.find((r) => r.name === m.hidden_hazards.top[0]?.name)],
].filter(([, r]) => r);

const soon = passes.slice().sort((x, y) => x.dist - y.dist).slice(0, 3)
  .map((p) => `${p.name} on ${p.date} at ${au(p.dist)}, ${p.v_rel} km/s`);
const rc = m.reality_check;
const hh = m.hidden_hazards;

const facts = `DATASET
- ${m.counts.neos_used.toLocaleString('en-US')} near-Earth asteroids from NASA JPL (train ${m.counts.train}, test ${m.counts.test}); ${pct(m.counts.pha_rate)} are labeled potentially hazardous (PHA).
- NASA's PHA rule: MOID at most 0.05 AU and H at most 22.0 (roughly 140 m or bigger).
- H runs backwards: a HIGHER H means fainter, so smaller. H 22.57 is just past the 22.0 cutoff on the small side (too faint to qualify); H 21.5 is on the big side.
- ${m.score_note}

WHAT THE MODELS LEARNED
- Act 1: a two-level decision tree trained on the raw data rediscovered NASA's rule on its own: split on H at 22.035, then MOID at 0.050.
- ${model('A', m.A)} Uses all features. Top features: ${topFeatures(m.A.importance)}.
- ${model('B', m.B)} Act 2: MOID taken away (the "answer key"), so it has to infer from orbit shape whether the orbit crosses Earth's. Top features: ${topFeatures(m.B.importance)}.
- Baseline logistic regression: ROC-AUC ${m.baseline_logreg.roc_auc}, precision ${m.baseline_logreg.precision}, recall ${m.baseline_logreg.recall}.
- Act 3, reality check on real flyby records the model never saw: ${pct(rc.flagged_with_approach_lt_005)} of test asteroids flagged by Model B had a recorded pass within 0.05 AU, vs ${pct(rc.not_flagged_with_approach_lt_005)} of those not flagged. ${rc.note}
- Biggest mistakes of Model B: ${m.worst_misses.map((w) => `${w.name} (${w.why})`).join('; ')}.
- Size model: predicts diameter from brightness and orbit; median error ${pct(m.size.median_err_model)} vs ${pct(m.size.median_err_baseline)} for NASA's standard formula; its 5-95% range held the true size ${pct(m.size.interval_coverage)} of the time.
- Hidden hazards (Act 4): ${hh.count} asteroids NASA does not flag because they look faint (H over 22), but our size model thinks they could be 140 m or more; ${hh.strong} strong candidates, ${hh.measured} already measured at 140 m or more by NEOWISE. ${hh.note} Top ones: ${hh.top.slice(0, 3).map((t) => `${t.name} (about ${t.D_pred} m, MOID ${t.moid} AU)`).join('; ')}.
- Impact what-ifs assume density ${m.impact.density_kg_m3} kg/m3. ${m.impact.note}

NOTABLE ASTEROIDS
${notable.map(([label, r]) => `- ${label}: ${describe(r)}.`).join('\n')}

CLOSEST UPCOMING PASSES (next 10 years, from JPL's close-approach list)
${soon.map((s) => `- ${s}`).join('\n')}
`;

writeFileSync(new URL('../api/_capcom-facts.js', import.meta.url),
  `// GENERATED by scripts/capcom-facts.mjs from public/data -- re-run that script, don't edit this file.\n`
  + `export default ${JSON.stringify(facts)};\n`);
console.log(facts);
console.log(`${facts.length} chars`);

// P3. "Design your own asteroid" (PLAN.md section 7 step 6). Scores live in the browser with the m2cgen models.
import { useEffect, useMemo, useState } from 'react';
import { approxMoid } from '../lib/moid.js';
import { scoreBoth } from '../lib/features.js';
import { score100 } from '../lib/tier.js';
import { narration } from '../lib/narration.js';
import { Badge } from './InfoPanel.jsx';

const SLIDERS = [
  ['a', 'Orbit size (a, AU)', 0.5, 4, 0.01], ['e', 'Stretch (e)', 0, 0.95, 0.01], ['i', 'Tilt (i, deg)', 0, 60, 0.1],
  ['om', 'Node (deg)', 0, 360, 1], ['w', 'Perihelion angle (deg)', 0, 360, 1], ['H', 'H (lower = bigger)', 12, 30, 0.1],
];
const KEYS = SLIDERS.map((s) => s[0]);

export default function CustomPanel({ asteroids, onCustom }) {
  const [el, setEl] = useState({ a: 1.2, e: 0.3, i: 5, om: 100, w: 120, H: 20 });

  const full = useMemo(() => {
    const f = { ...el, q: el.a * (1 - el.e), ad: el.a * (1 + el.e) };
    f.moid = approxMoid(f);
    return { ...f, ...scoreBoth(f) };
  }, [el]);

  useEffect(() => { onCustom(full); narration.custom({ pB: full.pB }); }, [full]);
  useEffect(() => () => onCustom(null), []); // hide the cyan orbit when leaving the tab

  const load = (name) => {
    const a = asteroids?.find((x) => x.name.includes(name));
    if (a) setEl(Object.fromEntries(KEYS.map((k) => [k, a[k]])));
  };

  return (
    <>
      <h2>Design your own asteroid</h2>
      <p className="muted small">Drag the sliders. The cyan orbit updates and both models score it live, in your browser.</p>
      {SLIDERS.map(([k, label, min, max, step]) => (
        <div className="slider" key={k}>
          <span title={label}>{label.split(' (')[0]}</span>
          <input type="range" min={min} max={max} step={step} value={el[k]}
            onChange={(e) => setEl((v) => ({ ...v, [k]: +e.target.value }))} />
          <output>{el[k]}</output>
        </div>
      ))}
      <div className="presets">
        {['Apophis', 'Bennu', 'Didymos'].map((n) => <button key={n} onClick={() => load(n)}>Load {n}</button>)}
      </div>
      <div className="verdict">
        <div className="kv">
          <span>Closest gap to Earth's orbit</span>
          <span>{full.moid.toFixed(3)} AU ({(full.moid * 389).toFixed(0)} lunar distances)</span>
        </div>
        <div className="scores2">
          <div>Model A<div className="big">{score100(full.pA)}</div></div>
          <div>Model B<div className="big">{score100(full.pB)}</div><Badge p={full.pB} /></div>
        </div>
      </div>
    </>
  );
}

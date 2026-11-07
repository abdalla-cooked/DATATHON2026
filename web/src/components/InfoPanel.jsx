// P3. What the selected asteroid is and what both models think of it.
import { tierOf, TIER_LABEL, score100 } from '../lib/tier.js';

export const Badge = ({ p }) => <span className={`badge ${tierOf(p)}`}>{TIER_LABEL[tierOf(p)]}</span>;
const PRESETS = ['Apophis', 'Bennu', 'Didymos'];

export default function InfoPanel({ selected: a, onPick }) {
  const presets = (
    <div className="presets">
      {PRESETS.map((n) => <button key={n} onClick={() => onPick(n)}>{n}</button>)}
    </div>
  );
  if (!a) {
    return (
      <>
        <h2>Click any dot</h2>
        <p className="muted">Every dot is a near-Earth asteroid at its real position in its orbit. Click one to see its orbit
          and what the model thinks of it. Or start with a famous one:</p>
        {presets}
      </>
    );
  }
  const flyby = a.closeApproach != null ? `${(a.closeApproach * 389).toFixed(1)} lunar distances` : 'none on record';
  return (
    <>
      <h2>{a.name}</h2>
      <p>
        {a.pha ? <b className="hot">NASA: potentially hazardous</b> : 'NASA: not hazardous'}
        {' · '}class {a.class} · {a.test ? 'unseen test asteroid' : 'training asteroid'}
      </p>
      {a.hidden && a.D_meas >= 140 && (
        <p className="lime">
          🕵️ Hidden hazard: measured {Math.round(a.D_meas)} m wide, passes {a.moid} AU from Earth's orbit,
          but its brightness (H {a.H}) is past NASA's H ≤ 22 cutoff, so it isn't listed as hazardous.
        </p>
      )}
      <div className="scores2">
        <div>Model A risk score<div className="big">{score100(a.pA)}</div></div>
        <div>Model B risk score<div className="big">{score100(a.pB)}</div><Badge p={a.pB} /></div>
      </div>
      <div className="kv">
        <span>Semi-major axis</span><span>{a.a} AU</span>
        <span>Eccentricity</span><span>{a.e}</span>
        <span>Inclination</span><span>{a.i}°</span>
        <span>Closest orbit gap (MOID)</span><span>{a.moid} AU</span>
        <span>Size (H, lower = bigger)</span><span>{a.H}</span>
        <span>Closest recorded flyby</span><span>{flyby}</span>
      </div>
      <p className="muted small">Risk score is the model's 0 to 100 rating, not a chance of impact.</p>
      {presets}
    </>
  );
}

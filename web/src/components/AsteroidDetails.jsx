// Floating details card for the selected asteroid (opens when you click a dot; the camera zooms in on it).
// Everything comes from asteroids.json; sizes prefer the NEOWISE measurement, then the Act 4 estimate.
import L from '../lib/lines.js';
import { tierOf, TIER_LABEL, score100 } from '../lib/tier.js';
import './AsteroidDetails.css';

const AU_KM = 149.6e6;
const LUNAR_AU = 0.00257;   // one Earth-Moon distance in AU

const fmtKm = (au) => {
  const km = au * AU_KM;
  return km >= 1e6 ? `${(km / 1e6).toFixed(1)} million km` : `${Math.round(km / 1000).toLocaleString('en-US')} thousand km`;
};
const lunar = (au) => `${(au / LUNAR_AU).toFixed(1)} × the Moon's distance`;
const fmtMt = (mt) => (mt >= 1 ? `${Number(mt.toPrecision(2)).toLocaleString('en-US')} megatons` : `${Math.round(mt * 1000)} kilotons`);

function sizeOf(a) {
  if (a.D_meas) return { m: a.D_meas, how: 'measured by NASA NEOWISE' };
  if (a.D_pred) return { m: a.D_pred, how: 'our estimate' };
  return { m: 1329e3 / Math.sqrt(0.14) * 10 ** (-a.H / 5), how: 'estimated from brightness' };
}

// model: 'A' or 'B', whichever is selected in the top bar. Only that model's score is shown.
// onSimulate: when set, a "Simulate impact" button plays the impact shot for this asteroid (bound orbits only).
export default function AsteroidDetails({ asteroid: a, model = 'A', onClose, onSimulate }) {
  if (!a) return null;
  const size = sizeOf(a);
  const p = (model === 'B' ? a.pB : a.pA) ?? 0;
  const tier = tierOf(p);
  const why = model === 'B' ? L.why?.[a.why]?.[0] : null; // the explanations come from Model B
  return (
    <aside className="asteroid-details" role="dialog" aria-label={`Details for ${a.name}`}>
      <button type="button" className="ad-close" onClick={onClose} aria-label="Close details and zoom out">×</button>
      <div className="ad-eyebrow">Class {a.class} · {a.test ? 'unseen test asteroid' : 'training asteroid'}</div>
      <h2>{a.name}</h2>
      <p className={a.pha ? 'ad-label hot' : 'ad-label'}>
        {a.pha ? 'NASA: potentially hazardous' : 'NASA: not on the hazard list'}
      </p>

      {a.hidden && a.D_meas >= 140 && (
        <p className="ad-hidden">
          🕵️ <b>Hidden hazard.</b> Measured at {Math.round(a.D_meas)} m, bigger than NASA's 140 m threshold, and its orbit
          passes within 0.05 AU of Earth's. It's dark, so it looks faint (H {a.H}) and the brightness rule misses it.
        </p>
      )}

      <div className="ad-scores">
        <div><span>Model {model} risk</span><b>{score100(p)}</b><em className={`badge ${tier}`}>{TIER_LABEL[tier]}</em></div>
      </div>
      {why && <p className="ad-why">Model B's main reason: {why}.</p>}

      <dl className="ad-facts">
        <dt>Size</dt><dd>~{Math.round(size.m).toLocaleString('en-US')} m <small>({size.how})</small></dd>
        <dt>Closest its orbit gets to Earth's</dt><dd>{fmtKm(a.moid)} <small>({lunar(a.moid)})</small></dd>
        <dt>Closest recorded flyby</dt><dd>{a.closeApproach != null ? <>{fmtKm(a.closeApproach)} <small>({lunar(a.closeApproach)})</small></> : 'none on record'}</dd>
        <dt>Orbit</dt><dd>{a.a} AU wide · tilt {a.i}° · stretch {a.e}</dd>
        {a.E_mt > 0 && <><dt>If it ever hit (what-if)</dt><dd>~{fmtMt(a.E_mt)} of TNT</dd></>}
      </dl>
      {onSimulate && (
        <button type="button" className="impact-btn" onClick={onSimulate}
          title="Play a hypothetical collision with Earth for this asteroid">
          ☄️ Simulate impact
        </button>
      )}
      <p className="ad-note">Risk scores are the model's 0–100 rating, not a chance of impact. Drag to look around; it stays centered.</p>
    </aside>
  );
}

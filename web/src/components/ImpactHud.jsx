// Impact shot HUD: Skip while the shot plays, then the results card with Back.
// The shot itself (camera, flash, rings, title, countdown) lives in three/impactShot.js; this file only adds the
// React controls and holds all the impact CSS (ImpactHud.css), including the classes impactShot.js creates.
//
// state: null | { phase: 'running', a } | { phase: 'results', a, effects } (from SolarSystem's onImpact)
import { useEffect, useRef } from 'react';
import './ImpactHud.css';

const RING_COLORS = { fireball: '#fff1c8', blast: '#ff8a2a', burns: '#ff3b30' };

export default function ImpactHud({ state, onSkip, onBack }) {
  const backRef = useRef(null);
  const phase = state?.phase;

  // Escape skips the shot, or closes the results card.
  useEffect(() => {
    if (!phase) return undefined;
    const onKey = (ev) => {
      if (ev.key !== 'Escape') return;
      ev.preventDefault();
      (phase === 'results' ? onBack : onSkip)();
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [phase, onSkip, onBack]);

  useEffect(() => { if (phase === 'results') backRef.current?.focus({ preventScroll: true }); }, [phase]);

  if (!state) return null;
  if (phase === 'running') {
    return <button type="button" className="impact-skip" onClick={onSkip}>Skip ⏭</button>;
  }

  const { a, effects: fx } = state;
  return (
    <section className="shot-card" role="dialog" aria-labelledby="shot-card-title">
      <p className="ic-kicker">Hypothetical impact</p>
      <h2 id="shot-card-title">If {shortName(a)} hit Earth</h2>
      <p className="ic-energy">
        <b>{fmtEnergy(fx.energyMt)}</b>
        <span>of TNT · about {fmtInt(fx.hiroshimas)} Hiroshima bombs</span>
      </p>
      <dl className="ic-stats">
        <div><dt>Crater</dt><dd>{fmtKm(fx.craterKm)}</dd></div>
        <div><dt>Impact speed</dt><dd>{fx.speedKms.toFixed(1)} km/s</dd></div>
        <div><dt>Size</dt><dd>{fmtInt(fx.diameterM)} m</dd></div>
        <div><dt>vs Tunguska (1908)</dt><dd>{ratio(fx.vsTunguska)}</dd></div>
        <div><dt>vs Chicxulub (dinosaurs)</dt><dd>{ratio(fx.vsChicxulub)}</dd></div>
      </dl>
      <ul className="ic-rings">
        {fx.rings.map((r) => (
          <li key={r.key}><i style={{ background: RING_COLORS[r.key] }} />{r.label}<span>{fmtKm(r.km)}</span></li>
        ))}
      </ul>
      {fx.placeholder && (
        <p className="ic-note">
          Placeholder numbers: energy and speed come from the dataset, but the crater and ring sizes are rough
          scalings until the full impact model lands. The orbit was bent on purpose; this is not a prediction.
        </p>
      )}
      <button type="button" ref={backRef} className="ic-back" onClick={onBack}>← Back to the solar system</button>
    </section>
  );
}

function shortName(a) {
  const m = /^\d+\s+(.+?)(\s+\(.*\))?$/.exec(a.name);
  return m ? m[1] : a.name.replace(/^\((.*)\)$/, '$1');
}

const fmtInt = (x) => Math.round(x).toLocaleString('en-US');

function fmtEnergy(mt) {
  if (mt >= 1) return `${mt >= 100 ? fmtInt(mt) : mt.toFixed(1)} megatons`;
  const kt = mt * 1000;
  return `${kt >= 10 ? fmtInt(kt) : kt.toFixed(1)} kilotons`;
}

function fmtKm(km) {
  if (km >= 100) return `${fmtInt(km)} km`;
  if (km >= 10) return `${km.toFixed(0)} km`;
  if (km >= 1) return `${km.toFixed(1)} km`;
  return `${fmtInt(km * 1000)} m`;
}

// 65 → "65× bigger", 0.004 → "1/250 of it"
function ratio(x) {
  if (!(x > 0)) return '—';
  if (x >= 1) return `${x >= 10 ? fmtInt(x) : x.toFixed(1)}× bigger`;
  const inv = 1 / x;
  return `1/${inv >= 10 ? fmtInt(Number(inv.toPrecision(2))) : inv.toFixed(1)} of it`;
}

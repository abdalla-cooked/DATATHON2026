import { useEffect, useMemo, useRef, useState } from 'react';
import { replay, revealOf, seenBy } from '../lib/replay.js';

// Live counters for the "Watch the AI learn" replay. Counted from the real data with the same
// reveal order the dots use (lib/replay.js), so the numbers match what is on screen:
//   seen   = revealOf(pdes) < seenBy(progress)
//   caught = seen AND in the unseen test set AND truly hazardous AND Model A score >= its threshold
// The end values are metrics.counts.neos_used and Model A's test recall.
// Updated from a rAF loop through refs, so React never re-renders per frame.

// Number of sorted values below x.
function countBelow(sorted, x) {
  let lo = 0, hi = sorted.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < x) lo = mid + 1; else hi = mid; }
  return lo;
}

const fmt = (n) => n.toLocaleString('en-US');

export default function ReplayHud({ asteroids, metrics }) {
  const seenRef = useRef(null), caughtRef = useRef(null), recallRef = useRef(null), barRef = useRef(null);
  const [state, setState] = useState(replay.mode === 'off' ? 'gone' : 'on'); // on | done | gone

  const data = useMemo(() => {
    if (!asteroids || !metrics?.A) return null;
    const thr = metrics.A.threshold;
    const all = new Float64Array(asteroids.length);
    const caught = [];
    asteroids.forEach((a, k) => {
      const r = revealOf(a.pdes);
      all[k] = r;
      if (a.test && a.pha === 1 && (a.pA ?? 0) >= thr) caught.push(r);
    });
    all.sort();
    const conf = metrics.A.confusion;
    return {
      all, caught: Float64Array.from(caught).sort(),
      total: metrics.counts?.neos_used ?? asteroids.length,
      hazards: conf[1][0] + conf[1][1],
    };
  }, [asteroids, metrics]);

  useEffect(() => replay.onDone(() => setState('done')), []);
  useEffect(() => {
    if (state !== 'done') return undefined;
    const t = setTimeout(() => setState('gone'), 2100);
    return () => clearTimeout(t);
  }, [state]);

  useEffect(() => {
    if (!data || state === 'gone') return undefined;
    let raf = 0, last = -1;
    const draw = () => {
      const p = replay.progress();
      if (p !== last) {
        last = p;
        const x = seenBy(p);
        const seen = p >= 1 ? data.total : Math.min(countBelow(data.all, x), data.total);
        const caught = p >= 1 ? data.caught.length : countBelow(data.caught, x);
        if (seenRef.current) seenRef.current.textContent = fmt(seen);
        if (caughtRef.current) caughtRef.current.textContent = fmt(caught);
        if (recallRef.current) recallRef.current.textContent = (100 * caught / data.hazards).toFixed(1) + '%';
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      }
      if (replay.mode !== 'off') raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [data, state]);

  if (!data || state === 'gone') return null;
  return (
    <div id="replayHud" className={state === 'done' ? 'done' : ''} role="status" aria-live="off">
      <p className="rh-title">Watching the AI learn</p>
      <dl>
        <div><dt>Asteroids seen</dt><dd><b ref={seenRef}>0</b> / {fmt(data.total)}</dd></div>
        <div><dt>Hazards caught <small>(unseen test set)</small></dt><dd><b ref={caughtRef}>0</b> / {fmt(data.hazards)}</dd></div>
        <div><dt>Recall</dt><dd><b ref={recallRef}>0.0%</b></dd></div>
      </dl>
      <div className="rh-bar"><i ref={barRef} /></div>
    </div>
  );
}

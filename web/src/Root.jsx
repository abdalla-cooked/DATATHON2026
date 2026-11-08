import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { preloadAll } from './lib/dataCache.js';
import { replay } from './lib/replay.js';
import ScrollIntro from './intro/ScrollIntro.jsx';
import { music } from './lib/music.js';

// Page shell: the scroll intro, then the live app.
//   intro      only the intro is mounted
//   launching  "Watch the AI learn" was clicked: the app mounts beneath the intro with the replay armed
//              (every dot grey). Once the app has drawn its first frame AND the intro camera has settled
//              on the app's start view, the intro fades out, unmounts and the replay starts.
//   app        only the app is mounted
// Skip intro remembers itself in localStorage; Replay intro (TopBar) clears that and fades the intro back in.

const loadApp = () => import('./App.jsx');
const App = lazy(loadApp);

export const SKIP_KEY = 'datathon2026.skipIntro';
const LAUNCH_FADE = 1000, SKIP_FADE = 600, REPLAY_FADE = 600;

function readSkip() {
  try { return window.localStorage.getItem(SKIP_KEY) === '1'; } catch { return false; }
}
function writeSkip(on) {
  try { if (on) window.localStorage.setItem(SKIP_KEY, '1'); else window.localStorage.removeItem(SKIP_KEY); } catch { /* storage blocked */ }
}

export default function Root() {
  const [phase, setPhase] = useState(() => (readSkip() ? 'app' : 'intro'));
  const [introFade, setIntroFade] = useState('in'); // in | out | entering (fading back in)
  const [appReplay, setAppReplay] = useState(false);
  const [appKey, setAppKey] = useState(0);
  const [soundGate, setSoundGate] = useState(false); // "Begin" screen when the browser blocks autoplay
  const gate = useRef({ ready: false, settled: false, done: false });
  const timers = useRef([]);
  const later = (f, ms) => { timers.current.push(setTimeout(f, ms)); };

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    loadApp();
    preloadAll();
    if (phase === 'app') replay.off();
    // Ambient music from the very first frame: try to autostart; if the browser blocks it, the Begin gate
    // collects the click it needs. Any other first gesture anywhere also starts it.
    if (phase !== 'app') music.tryAutostart().then((ok) => { if (!ok) setSoundGate(true); });
    const startMusic = () => { music.start(); setSoundGate(false); };
    const gestures = ['pointerdown', 'keydown', 'touchstart'];
    gestures.forEach((g) => window.addEventListener(g, startMusic, { once: true, capture: true }));
    return () => {
      timers.current.forEach(clearTimeout);
      gestures.forEach((g) => window.removeEventListener(g, startMusic, { capture: true }));
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Both conditions met: fade the intro out, drop it, start the replay.
  const tryHandoff = useCallback(() => {
    const g = gate.current;
    if (g.done || !g.ready || !g.settled) return;
    g.done = true;
    setIntroFade('out');
    later(() => { setPhase('app'); replay.start(); }, LAUNCH_FADE);
  }, []);

  const onLaunch = useCallback(() => {
    gate.current = { ready: false, settled: false, done: false };
    replay.arm();
    setAppReplay(true);
    setAppKey((k) => k + 1);
    setPhase('launching');
  }, []);
  const onSettled = useCallback(() => { gate.current.settled = true; tryHandoff(); }, [tryHandoff]);
  const onAppReady = useCallback(() => { gate.current.ready = true; tryHandoff(); }, [tryHandoff]);

  const onSkip = useCallback(() => {
    writeSkip(true);
    replay.off();
    gate.current.done = true;
    setAppReplay(false);
    setAppKey((k) => k + 1);
    setPhase('launching');
    setIntroFade('out');
    later(() => setPhase('app'), SKIP_FADE);
  }, []);

  const onReplayIntro = useCallback(() => {
    writeSkip(false);
    replay.off();
    window.scrollTo(0, 0);
    setIntroFade('entering');
    setPhase('returning');
    // Mount at opacity 0, then fade in on the next frame; drop the app once the intro covers it.
    requestAnimationFrame(() => requestAnimationFrame(() => setIntroFade('in')));
    later(() => setPhase('intro'), REPLAY_FADE + 50);
  }, []);

  const showIntro = phase !== 'app';
  const showApp = phase !== 'intro';
  const fadeMs = phase === 'returning' ? REPLAY_FADE : appReplay ? LAUNCH_FADE : SKIP_FADE;

  return (
    <>
      {showApp && (
        <Suspense fallback={null}>
          <App key={appKey} replay={appReplay} onReady={onAppReady} onReplayIntro={onReplayIntro} />
        </Suspense>
      )}
      <MusicToggle inApp={phase === 'app'} />
      {soundGate && <SoundGate onBegin={() => { music.start(); setSoundGate(false); }} />}
      {showIntro && (
        <div className={'intro-layer' + (introFade === 'in' ? '' : ' faded')}
          style={{ transitionDuration: fadeMs + 'ms' }} aria-hidden={introFade === 'out'}>
          <ScrollIntro onLaunch={onLaunch} onSettled={onSettled} onSkip={onSkip} />
        </div>
      )}
    </>
  );
}

// Ambient music on/off, on every screen (intro and app).
function MusicToggle({ inApp }) {
  const [on, setOn] = useState(music.isOn());
  useEffect(() => music.onChange(setOn), []);
  return (
    <button type="button" className={'music-toggle' + (on ? ' on' : '') + (inApp ? ' in-app' : '')} aria-pressed={on}
      onClick={() => music.setOn(!on)} title={on ? 'Turn the ambient music off' : 'Turn the ambient music on'}>
      {on ? '♫ Music on' : '♫ Music off'}
    </button>
  );
}

// Shown over the opening only when the browser blocks autoplay: one click starts the intro with its music.
function SoundGate({ onBegin }) {
  const ref = useRef(null);
  useEffect(() => {
    // keep the intro from scrolling underneath while the gate is up
    const el = ref.current;
    const block = (e) => { e.preventDefault(); e.stopPropagation(); };
    el.addEventListener('wheel', block, { passive: false });
    el.addEventListener('touchmove', block, { passive: false });
    return () => { el.removeEventListener('wheel', block); el.removeEventListener('touchmove', block); };
  }, []);
  return (
    <div ref={ref} className="sound-gate" onClick={onBegin} role="dialog" aria-label="Begin">
      <button type="button" autoFocus onClick={(e) => { e.stopPropagation(); onBegin(); }}>▶ Begin</button>
      <p>🎧 Best with sound on</p>
    </div>
  );
}

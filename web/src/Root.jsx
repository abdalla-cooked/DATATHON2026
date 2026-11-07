import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { preloadAll } from './lib/dataCache.js';
import { replay } from './lib/replay.js';
import ScrollIntro from './intro/ScrollIntro.jsx';

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
  const gate = useRef({ ready: false, settled: false, done: false });
  const timers = useRef([]);
  const later = (f, ms) => { timers.current.push(setTimeout(f, ms)); };

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    loadApp();
    preloadAll();
    if (phase === 'app') replay.off();
    return () => timers.current.forEach(clearTimeout);
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
      {showIntro && (
        <div className={'intro-layer' + (introFade === 'in' ? '' : ' faded')}
          style={{ transitionDuration: fadeMs + 'ms' }} aria-hidden={introFade === 'out'}>
          <ScrollIntro onLaunch={onLaunch} onSettled={onSettled} onSkip={onSkip} />
        </div>
      )}
    </>
  );
}

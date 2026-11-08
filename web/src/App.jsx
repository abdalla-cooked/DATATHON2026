import { useCallback, useEffect, useRef, useState } from 'react';
import { useData } from './lib/useData.js';
import { playAct, playAsteroid } from './lib/narration.js';
import { replay as replayStore } from './lib/replay.js';
import MissionControl from './components/MissionControl.jsx';
import SolarSystem from './three/SolarSystem.jsx';
import TopBar from './components/TopBar.jsx';
import ReplayHud from './components/ReplayHud.jsx';
import ImpactHud from './components/ImpactHud.jsx';

// Shared state replaces the window CustomEvents from PLAN.md Contract 4:
//   view       <- 'view-changed'       (TopBar sets it, SolarSystem reads it)
// The right-hand side panel (components/SidePanel.jsx: Asteroid / Results / What it learned / Try one) is not
// mounted; clicking an asteroid still draws its orbit and plays the Mission Control commentary.
//
// Props from Root:
//   replay         true when the app opens on the "Watch the AI learn" replay. The UI stays out of
//                  the way until the replay store reports it is done, then slides in.
//   onReady        fired once SolarSystem has drawn its first frame with the asteroid cloud.
//   onReplayIntro  sends the viewer back to the scroll intro (TopBar link).
export default function App({ replay = false, onReady, onReplayIntro }) {
  const { asteroids, metrics, error } = useData();
  const [view, setView] = useState({ model: 'A', testOnly: false, showMistakes: false, showHidden: false });
  const [uiIn, setUiIn] = useState(!replay);

  useEffect(() => {
    if (!replay) { setUiIn(true); return undefined; }
    if (replayStore.mode === 'off') { setUiIn(true); return undefined; }
    setUiIn(false);
    return replayStore.onDone(() => setUiIn(true));
  }, [replay]);

  // "Watch the AI learn": CAPCOM welcomes the intern as the dots start lighting up.
  useEffect(() => (replay ? replayStore.onStart(() => playAct('welcome')) : undefined), [replay]);

  // Mission Control Live: the commentators react to every click, straight from the click handler
  // (so clicking the same asteroid again comments again, and the browser counts it as a user gesture).
  const viewRef = useRef(view);
  viewRef.current = view;
  const [selected, setSelected] = useState(null);
  const onSelect = useCallback((a) => {
    setSelected(a);
    const part = viewRef.current.showHidden && a.hidden ? 'hidden' : 'report';
    playAsteroid(a, part, metrics?.B?.threshold);
  }, [metrics]);

  // Impact shot (three/impactShot.js): "Simulate impact" bends the selected orbit onto Earth and plays the shot.
  // impact = the latest command for SolarSystem; impactState = what the shot reports back (null = not running).
  const [impact, setImpact] = useState(null);
  const [impactState, setImpactState] = useState(null);
  const impactCmd = useCallback((cmd, a) => setImpact((prev) => ({ cmd, a, n: (prev?.n ?? 0) + 1 })), []);
  const simulateImpact = () => {
    if (!selected) return;
    playAsteroid(selected, 'whatif', metrics?.B?.threshold);
    impactCmd('start', selected);
  };

  const prevView = useRef(view);
  useEffect(() => {
    const was = prevView.current;
    prevView.current = view;
    if (view.showHidden && !was.showHidden) playAct('act4');
    else if (view.showMistakes && !was.showMistakes) playAct('mistakes');
    else if (view.model !== was.model) playAct(view.model === 'B' ? 'act2' : 'act1');
    else if (view.testOnly && !was.testOnly) playAct('test_only');
  }, [view]);

  return (
    <div className={'app' + (uiIn ? '' : ' ui-out') + (impactState ? ' impact-on' : '')}>
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={onSelect}
        onReady={onReady} impact={impact} onImpact={setImpactState} />
      <TopBar view={view} setView={setView} onReplayIntro={onReplayIntro} />
      <MissionControl />
      {replay && <ReplayHud asteroids={asteroids} metrics={metrics} />}
      {uiIn && selected && selected.e < 1 && !impactState && (
        <button type="button" className="impact-btn" onClick={simulateImpact}
          title="Play a hypothetical collision with Earth for this asteroid">
          ☄️ Simulate impact
        </button>
      )}
      <ImpactHud state={impactState} onSkip={() => impactCmd('skip')} onBack={() => impactCmd('back')} />
      {metrics?._mock && <div id="mockBanner">Mock data. Real model results load when ML pushes the exports.</div>}
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </div>
  );
}

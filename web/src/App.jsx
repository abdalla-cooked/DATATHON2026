import { useCallback, useEffect, useRef, useState } from 'react';
import { useData } from './lib/useData.js';
import { playAct, playAsteroid } from './lib/narration.js';
import { replay as replayStore } from './lib/replay.js';
import MissionControl from './components/MissionControl.jsx';
import SolarSystem from './three/SolarSystem.jsx';
import TopBar from './components/TopBar.jsx';
import ReplayHud from './components/ReplayHud.jsx';
import AsteroidDetails from './components/AsteroidDetails.jsx';
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
  const [selected, setSelected] = useState(null); // asteroid shown in the details card (camera zooms in on it)
  const sceneApi = useRef(null);                  // SolarSystem's deselect() (card's close button) and startImpact()
  // The impact event starts on its own once the viewer has inspected two different asteroids (once per visit to
  // the app; "Back to the start" remounts it). Model A ends in extinction, Model B saves Earth.
  const inspected = useRef(new Set());
  const impactQueued = useRef(false);
  const impactWaiting = useRef(false);            // the event was due while the impact shot was on: start it after

  // Impact shot (three/impactShot.js): "Simulate impact" in the details card bends the selected orbit onto Earth
  // and plays a hypothetical collision. impact = the latest command for SolarSystem; impactState = what the
  // shot reports back (null = not running).
  const [impact, setImpact] = useState(null);
  const [impactState, setImpactState] = useState(null);
  const impactCmd = useCallback((cmd, a) => setImpact((prev) => ({ cmd, a, n: (prev?.n ?? 0) + 1 })), []);

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
  const onSelect = useCallback((a) => {
    setSelected(a);
    if (!a) return;                               // deselected (card closed): no commentary
    const part = viewRef.current.showHidden && a.hidden ? 'hidden' : 'report';
    const talking = playAsteroid(a, part, metrics?.B?.threshold);
    if (impactQueued.current) return;
    inspected.current.add(a.pdes);
    if (inspected.current.size < 2) return;
    impactQueued.current = true;
    // let CAPCOM finish the second asteroid's commentary, then something new shows up on the radar
    Promise.resolve(talking).then(() => setTimeout(startImpactEvent, 1500));
  }, [metrics]);

  // The impact event refuses to start while the impact shot is on; then it waits until the shot is closed.
  const startImpactEvent = () => {
    if (sceneApi.current?.startImpact(viewRef.current.model) === false) impactWaiting.current = true;
  };
  useEffect(() => {
    if (impactState || !impactWaiting.current) return undefined;
    impactWaiting.current = false;
    const t = setTimeout(startImpactEvent, 1500);
    return () => clearTimeout(t);
  }, [impactState]);

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
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={onSelect} onReplayIntro={onReplayIntro}
        onReady={onReady} apiRef={sceneApi} impact={impact} onImpact={setImpactState} />
      <AsteroidDetails asteroid={impactState ? null : selected} model={view.model} onClose={() => sceneApi.current?.deselect()}
        onSimulate={selected && selected.e < 1 ? simulateImpact : null} />
      <ImpactHud state={impactState} onSkip={() => impactCmd('skip')} onBack={() => impactCmd('back')} />
      <TopBar view={view} setView={setView} onReplayIntro={onReplayIntro} />
      <MissionControl />
      {replay && <ReplayHud asteroids={asteroids} metrics={metrics} />}
      {metrics?._mock && <div id="mockBanner">Mock data. Real model results load when ML pushes the exports.</div>}
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </div>
  );
}

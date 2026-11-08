import { useCallback, useEffect, useRef, useState } from 'react';
import { useData } from './lib/useData.js';
import { playAct, playAsteroid } from './lib/narration.js';
import { replay as replayStore } from './lib/replay.js';
import MissionControl from './components/MissionControl.jsx';
import SolarSystem from './three/SolarSystem.jsx';
import TopBar from './components/TopBar.jsx';
import SidePanel from './components/SidePanel.jsx';
import Legend from './components/Legend.jsx';
import ReplayHud from './components/ReplayHud.jsx';

// Shared state replaces the window CustomEvents from PLAN.md Contract 4:
//   view       <- 'view-changed'       (TopBar sets it, SolarSystem reads it)
//   selected   <- 'asteroid-selected'  (SolarSystem sets it, SidePanel reads it)
//   pickRequest: name or pdes the UI wants selected (presets, worst-miss list). SolarSystem resolves it.
//   custom     <- 'custom-asteroid'    (CustomPanel sets it, SolarSystem draws the cyan orbit)
//
// Props from Root:
//   replay         true when the app opens on the "Watch the AI learn" replay. The UI stays out of
//                  the way until the replay store reports it is done, then slides in.
//   onReady        fired once SolarSystem has drawn its first frame with the asteroid cloud.
//   onReplayIntro  sends the viewer back to the scroll intro (TopBar link).
export default function App({ replay = false, onReady, onReplayIntro }) {
  const { asteroids, metrics, error } = useData();
  const [view, setView] = useState({ model: 'A', testOnly: false, showMistakes: false, showHidden: false });
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState('info');
  const [pickRequest, setPickRequest] = useState(null);
  const [custom, setCustom] = useState(null);
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
  const onSelect = useCallback((a) => {
    setSelected(a);
    setTab('info');
    const part = viewRef.current.showHidden && a.hidden ? 'hidden' : 'report';
    playAsteroid(a, part, metrics?.B?.threshold);
  }, [metrics]);
  const onPick = useCallback((q) => setPickRequest({ q, t: Date.now() }), []);

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
    <div className={'app' + (uiIn ? '' : ' ui-out')}>
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={onSelect}
        pickRequest={pickRequest} custom={custom} onReady={onReady} />
      <TopBar view={view} setView={setView} onReplayIntro={onReplayIntro} />
      <SidePanel tab={tab} setTab={setTab} selected={selected} asteroids={asteroids} metrics={metrics} view={view}
        onPick={onPick} onCustom={setCustom} />
      <Legend />
      <MissionControl />
      {replay && <ReplayHud asteroids={asteroids} metrics={metrics} />}
      {metrics?._mock && <div id="mockBanner">Mock data. Real model results load when ML pushes the exports.</div>}
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </div>
  );
}

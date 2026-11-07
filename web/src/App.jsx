import { useCallback, useEffect, useState } from 'react';
import { useData } from './lib/useData.js';
import { narration } from './lib/narration.js';
import { replay as replayStore } from './lib/replay.js';
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
  const [view, setView] = useState({ model: 'A', testOnly: false, showMistakes: false });
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

  const onSelect = useCallback((a) => { setSelected(a); setTab('info'); narration.asteroid(a); }, []);
  const onPick = useCallback((q) => setPickRequest({ q, t: Date.now() }), []);

  return (
    <div className={'app' + (uiIn ? '' : ' ui-out')}>
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={onSelect}
        pickRequest={pickRequest} custom={custom} onReady={onReady} />
      <TopBar view={view} setView={setView} onReplayIntro={onReplayIntro} />
      <SidePanel tab={tab} setTab={setTab} selected={selected} asteroids={asteroids} metrics={metrics} view={view}
        onPick={onPick} onCustom={setCustom} />
      <Legend />
      {replay && <ReplayHud asteroids={asteroids} metrics={metrics} />}
      {metrics?._mock && <div id="mockBanner">Mock data. Real model results load when ML pushes the exports.</div>}
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </div>
  );
}

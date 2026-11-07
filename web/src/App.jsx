import { useCallback, useState } from 'react';
import { useData } from './lib/useData.js';
import { narration } from './lib/narration.js';
import SolarSystem from './three/SolarSystem.jsx';
import TopBar from './components/TopBar.jsx';
import SidePanel from './components/SidePanel.jsx';
import Legend from './components/Legend.jsx';
import Intro from './components/Intro.jsx';

// Shared state replaces the window CustomEvents from PLAN.md Contract 4:
//   view       <- 'view-changed'       (TopBar sets it, SolarSystem reads it)
//   selected   <- 'asteroid-selected'  (SolarSystem sets it, SidePanel reads it)
//   pickRequest: name or pdes the UI wants selected (presets, worst-miss list). SolarSystem resolves it.
//   custom     <- 'custom-asteroid'    (CustomPanel sets it, SolarSystem draws the cyan orbit)
export default function App() {
  const { asteroids, metrics, error } = useData();
  const [view, setView] = useState({ model: 'A', testOnly: false, showMistakes: false });
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState('info');
  const [intro, setIntro] = useState(true);
  const [pickRequest, setPickRequest] = useState(null);
  const [custom, setCustom] = useState(null);

  const onSelect = useCallback((a) => { setSelected(a); setTab('info'); narration.asteroid(a); }, []);
  const onPick = useCallback((q) => setPickRequest({ q, t: Date.now() }), []);

  return (
    <>
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={onSelect}
        pickRequest={pickRequest} custom={custom} />
      <TopBar view={view} setView={setView} />
      <SidePanel tab={tab} setTab={setTab} selected={selected} asteroids={asteroids} metrics={metrics} view={view}
        onPick={onPick} onCustom={setCustom} />
      <Legend />
      {metrics?._mock && <div id="mockBanner">Mock data. Real model results load when ML pushes the exports.</div>}
      {intro && <Intro count={metrics?._mock ? null : asteroids?.length} onClose={() => setIntro(false)} />}
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </>
  );
}

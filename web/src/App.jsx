import { useCallback, useEffect, useRef, useState } from 'react';
import { useData } from './lib/useData.js';
import { playAct, playAsteroid } from './lib/narration.js';
import MissionControl from './components/MissionControl.jsx';
import SolarSystem from './three/SolarSystem.jsx';
import TopBar from './components/TopBar.jsx';
import SidePanel from './components/SidePanel.jsx';
import Legend from './components/Legend.jsx';

// Shared state replaces the window CustomEvents from PLAN.md Contract 4:
//   view      ← 'view-changed'        (TopBar sets it, SolarSystem reads it)
//   selected  ← 'asteroid-selected'   (SolarSystem sets it, SidePanel reads it)
//   custom / customScore ← 'custom-asteroid' / 'custom-scored' (added in later steps)
export default function App() {
  const { asteroids, metrics, error } = useData();
  const [view, setView] = useState({ model: 'A', testOnly: false, showMistakes: false, showHidden: false });
  const [selected, setSelected] = useState(null);

  // Mission Control Live: the commentators react to every click, straight from the click handler
  // (so clicking the same asteroid again comments again, and the browser counts it as a user gesture).
  const viewRef = useRef(view);
  viewRef.current = view;
  const onSelect = useCallback((a) => {
    setSelected(a);
    const part = viewRef.current.showHidden && a.hidden ? 'hidden' : 'report';
    playAsteroid(a, part, metrics?.B?.threshold);
  }, [metrics]);
  const prevView = useRef(view);
  useEffect(() => {
    const was = prevView.current;
    prevView.current = view;
    if (view.showHidden && !was.showHidden) playAct('act4');
    else if (view.showMistakes && !was.showMistakes) playAct('mistakes');
    else if (view.model !== was.model) playAct(view.model === 'B' ? 'act2' : 'act1');
  }, [view]);

  return (
    <>
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={onSelect} />
      <TopBar view={view} setView={setView} />
      <SidePanel selected={selected} metrics={metrics} view={view} />
      <Legend />
      <MissionControl />
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </>
  );
}

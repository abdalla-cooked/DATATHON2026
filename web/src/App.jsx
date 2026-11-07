import { useState } from 'react';
import { useData } from './lib/useData.js';
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
  const [view, setView] = useState({ model: 'A', testOnly: false, showMistakes: false });
  const [selected, setSelected] = useState(null);

  return (
    <>
      <SolarSystem asteroids={asteroids} metrics={metrics} view={view} onSelect={setSelected} />
      <TopBar view={view} setView={setView} />
      <SidePanel selected={selected} metrics={metrics} view={view} />
      <Legend />
      {error && <div className="error">Couldn't load data: {String(error.message)}</div>}
    </>
  );
}

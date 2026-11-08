// P3 owns this file. Model / test-set / mistakes / hidden-hazards toggles (PLAN.md section 7 step 3).
// Narration on/off lives in MissionControl.jsx; App.jsx plays the commentary when the view changes.
export default function TopBar({ view, setView, onReplayIntro }) {
  const set = (patch) => setView((v) => ({ ...v, ...patch }));
  return (
    <header id="topbar">
      <h1>Is It Coming For Us?</h1>
      <div id="toggles">
        <div className="seg">
          <button className={view.model === 'A' ? 'on' : ''} onClick={() => set({ model: 'A' })}
            title="Uses every feature, including MOID and size">Model A · all features</button>
          <button className={view.model === 'B' ? 'on' : ''} onClick={() => set({ model: 'B' })}
            title="MOID removed, size kept. Has to infer Earth-crossing geometry from the orbit shape">Model B · no MOID</button>
        </div>
        <label><input type="checkbox" checked={view.testOnly} onChange={(e) => set({ testOnly: e.target.checked })} /> Unseen test set only</label>
        <label><input type="checkbox" checked={view.showMistakes} onChange={(e) => set({ showMistakes: e.target.checked })} /> Show mistakes</label>
        <label className="lime"><input type="checkbox" id="showHidden" checked={!!view.showHidden} onChange={(e) => set({ showHidden: e.target.checked })} /> Hidden hazards</label>
      </div>
      {onReplayIntro && <button type="button" className="replay-intro" onClick={onReplayIntro}>Replay intro</button>}
    </header>
  );
}

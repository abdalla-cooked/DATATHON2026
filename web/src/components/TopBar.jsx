// P3 owns this file. Model / test-set / mistakes toggles (PLAN.md §7 step 3).
export default function TopBar({ view, setView }) {
  const set = (patch) => setView((v) => ({ ...v, ...patch }));
  return (
    <header id="topbar">
      <h1>Is It Coming For Us?</h1>
      <div id="toggles">
        <button className={view.model === 'A' ? 'on' : ''} onClick={() => set({ model: 'A' })}>Model A · all features</button>
        <button className={view.model === 'B' ? 'on' : ''} onClick={() => set({ model: 'B' })}>Model B · orbit only</button>
        <label><input type="checkbox" checked={view.testOnly} onChange={(e) => set({ testOnly: e.target.checked })} /> Unseen test set only</label>
        <label><input type="checkbox" checked={view.showMistakes} onChange={(e) => set({ showMistakes: e.target.checked })} /> Show mistakes</label>
      </div>
    </header>
  );
}

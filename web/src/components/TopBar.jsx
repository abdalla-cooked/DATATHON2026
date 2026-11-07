// P3 owns this file. Model / test-set / mistakes toggles (PLAN.md section 7 step 3) + narration toggle.
import { useState } from 'react';
import { narration } from '../lib/narration.js';

export default function TopBar({ view, setView, onReplayIntro }) {
  const [voice, setVoice] = useState(false);
  const set = (patch) => setView((v) => { const n = { ...v, ...patch }; narration.view(n); return n; });
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
        <button className={'voice' + (voice ? ' on' : '')} onClick={() => { setVoice(!voice); narration.setOn(!voice); }}>
          Narration: {voice ? 'on' : 'off'}
        </button>
      </div>
      {onReplayIntro && <button type="button" className="replay-intro" onClick={onReplayIntro}>Replay intro</button>}
    </header>
  );
}

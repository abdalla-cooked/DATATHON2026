// P3 owns this file. Tabbed side panel: Asteroid / Results / What it learned / Try one (PLAN.md section 7 steps 4 to 6).
import InfoPanel from './InfoPanel.jsx';
import ResultsPanel from './ResultsPanel.jsx';
import LearnedPanel from './LearnedPanel.jsx';
import CustomPanel from './CustomPanel.jsx';
import { narration } from '../lib/narration.js';

const TABS = [['info', 'Asteroid'], ['results', 'Results'], ['learned', 'What it learned'], ['custom', 'Try one']];

export default function SidePanel({ tab, setTab, selected, asteroids, metrics, view, onPick, onCustom }) {
  const go = (t) => { setTab(t); narration.tab(t); };
  return (
    <aside id="panel">
      <nav id="tabs">
        {TABS.map(([id, label]) => (
          <button key={id} className={tab === id ? 'on' : ''} onClick={() => go(id)}>{label}</button>
        ))}
      </nav>
      <div className="tab">
        {tab === 'info' && <InfoPanel selected={selected} onPick={onPick} />}
        {tab === 'results' && metrics && <ResultsPanel metrics={metrics} model={view.model} />}
        {tab === 'learned' && metrics && <LearnedPanel metrics={metrics} onPick={onPick} />}
        {tab === 'custom' && <CustomPanel asteroids={asteroids} onCustom={onCustom} />}
      </div>
    </aside>
  );
}

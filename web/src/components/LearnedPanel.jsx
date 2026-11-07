// P3. "What did it learn?" The three acts + worst misses (PLAN.md section 7 step 5).
import { Bar } from 'react-chartjs-2';
import './ResultsPanel.jsx'; // registers Chart.js pieces

export default function LearnedPanel({ metrics: m, onPick }) {
  const rc = m.reality_check;
  return (
    <>
      <h2>What did it learn?</h2>

      <div className="act">
        <span className="actnum">Act 1</span>
        <h3>It found NASA's rule on its own</h3>
        <div className="rulepair">
          <pre>{m.tree_rules}</pre>
          <div className="nasa">NASA's definition<br /><b>MOID ≤ 0.05 AU<br />and H ≤ 22.0</b></div>
        </div>
        <p className="muted small">A two-level decision tree trained on the raw data picks the same two cut-offs NASA uses.</p>
      </div>

      <div className="act">
        <span className="actnum">Act 2</span>
        <h3>Take away the answer key</h3>
        <div className="ab">
          <div>Model A<b>{m.A.roc_auc.toFixed(3)}</b><span className="muted small">ROC-AUC, all features</span></div>
          <div>Model B<b>{m.B.roc_auc.toFixed(3)}</b><span className="muted small">ROC-AUC, orbit only</span></div>
        </div>
        <p className="muted small">Without MOID, Model B has to work out from the orbit's shape whether it crosses Earth's path.</p>
      </div>

      {rc && (
        <div className="act">
          <span className="actnum">Act 3</span>
          <h3>Reality check against real flybys</h3>
          <div className="chartbox">
            <Bar data={{
              labels: ['Flagged by Model B', 'Not flagged'],
              datasets: [{ data: [rc.flagged_with_approach_lt_005 * 100, rc.not_flagged_with_approach_lt_005 * 100], backgroundColor: ['#ff3030', '#3a7bff'] }],
            }} options={{
              maintainAspectRatio: false, animation: false, plugins: { legend: { display: false } },
              scales: { y: { min: 0, max: 100, title: { display: true, text: '% with a pass within 0.05 AU' } } },
            }} />
          </div>
          <p className="muted small">Share of test asteroids with a recorded pass within 0.05 AU of Earth. The model never saw this data.</p>
        </div>
      )}

      {m.worst_misses?.length > 0 && (
        <div className="act">
          <span className="actnum">Mistakes</span>
          <h3>Where Model B gets it wrong</h3>
          <ul className="misses">
            {m.worst_misses.map((w) => (
              <li key={w.name} onClick={() => onPick(w.name)}>
                <b>{w.name}</b>: Model B score {(w.pB * 100).toFixed(0)}, Model A {(w.pA * 100).toFixed(0)}
                {w.why && <><br /><span className="muted">{w.why}</span></>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="note">"Potentially hazardous" means an asteroid passes close enough to be worth watching. It does not mean it will hit Earth.</p>
    </>
  );
}

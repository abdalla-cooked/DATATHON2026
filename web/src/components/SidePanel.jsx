// P3 owns this file. Info / results / "what did it learn" sections (PLAN.md §7 steps 4–6).
// Split into InfoPanel.jsx, ResultsPanel.jsx, LearnedPanel.jsx as they grow.
export default function SidePanel({ selected, metrics, view }) {
  return (
    <aside id="panel">
      <section id="info">
        <h2>{selected ? selected.name : 'Click an asteroid'}</h2>
        {selected?.hidden && selected.D_meas >= 140 && (
          <p className="lime">
            🕵️ Hidden hazard: measured {Math.round(selected.D_meas)} m wide, passes {selected.moid} AU from Earth's orbit,
            but its brightness (H {selected.H}) is past NASA's H ≤ 22 cutoff, so it isn't listed as hazardous.
          </p>
        )}
      </section>
      <section id="results">
        <h2>How well does it do?</h2>
        {metrics && (
          <small>
            Model {view.model}: recall {(metrics[view.model].recall * 100).toFixed(1)}% · ROC-AUC{' '}
            {metrics[view.model].roc_auc.toFixed(3)} · tested on {metrics.counts.test.toLocaleString()} unseen asteroids
            {metrics._mock && ' (mock data)'}
          </small>
        )}
      </section>
      <section id="learned">
        <h2>What did it learn?</h2>
      </section>
    </aside>
  );
}

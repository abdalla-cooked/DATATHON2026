// P3. Test-set metrics, confusion matrix, ROC A vs B, feature importance (PLAN.md section 7 step 4).
import { Chart as ChartJS, LinearScale, CategoryScale, PointElement, LineElement, BarElement, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { pct } from '../lib/tier.js';

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, BarElement, Tooltip, Legend);
ChartJS.defaults.color = '#8b96ad';
ChartJS.defaults.borderColor = '#23304a';
export const BLUE = '#5aa2ff', ORANGE = '#ff9f43';

export default function ResultsPanel({ metrics: m, model }) {
  const r = m[model], b = m.baseline_logreg;
  const [[tn, fp], [fn, tp]] = r.confusion;
  const line = (k, color) => ({
    label: `Model ${k}`, data: m[k].roc.fpr.map((x, j) => ({ x, y: m[k].roc.tpr[j] })),
    borderColor: color, backgroundColor: color, pointRadius: 0, borderWidth: k === model ? 3 : 1.5,
  });
  const imp = Object.entries(r.importance).sort((x, y) => y[1] - x[1]);
  return (
    <>
      <h2>How well does it do?</h2>
      <table>
        <thead><tr><th /><th>Model {model}</th><th>Baseline</th></tr></thead>
        <tbody>
          <tr><td>Hazards caught (recall)</td><td>{pct(r.recall)}</td><td>{pct(b.recall)}</td></tr>
          <tr><td>Warnings that were right (precision)</td><td>{pct(r.precision)}</td><td>{pct(b.precision)}</td></tr>
          <tr><td>ROC-AUC</td><td>{r.roc_auc.toFixed(3)}</td><td>{b.roc_auc.toFixed(3)}</td></tr>
          <tr><td>PR-AUC</td><td>{r.pr_auc.toFixed(3)}</td><td>{b.pr_auc.toFixed(3)}</td></tr>
        </tbody>
      </table>
      <p className="muted small">Tested on {m.counts.test.toLocaleString()} asteroids the model never saw. Baseline is logistic regression.</p>

      <h3>Confusion matrix</h3>
      <div className="cm">
        <div className="h" /><div className="h">predicted safe</div><div className="h">predicted hazard</div>
        <div className="h">really safe</div><div>{tn.toLocaleString()}</div><div className="yel">{fp.toLocaleString()}</div>
        <div className="h">really hazardous</div><div className="mag">{fn.toLocaleString()}</div><div>{tp.toLocaleString()}</div>
      </div>

      <h3>ROC curve: Model A vs Model B</h3>
      <div className="chartbox">
        <Line data={{ datasets: [line('A', BLUE), line('B', ORANGE)] }} options={{
          maintainAspectRatio: false, parsing: false, animation: false,
          scales: {
            x: { type: 'linear', min: 0, max: 1, title: { display: true, text: 'False alarm rate' } },
            y: { min: 0, max: 1, title: { display: true, text: 'Hazards caught' } },
          },
        }} />
      </div>

      <h3>What the model leans on</h3>
      <div className="chartbox tall">
        <Bar data={{ labels: imp.map((e) => e[0]), datasets: [{ data: imp.map((e) => e[1]), backgroundColor: model === 'A' ? BLUE : ORANGE }] }}
          options={{ maintainAspectRatio: false, indexAxis: 'y', animation: false, plugins: { legend: { display: false } } }} />
      </div>
    </>
  );
}

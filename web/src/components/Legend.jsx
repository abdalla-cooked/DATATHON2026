// P3 owns this file.
const ITEMS = [
  ['#3a7bff', 'low risk'], ['#ff3030', 'high risk'], ['#ff00ff', 'missed hazard'],
  ['#ffd400', 'false alarm'], ['#33ff99', "Earth's orbit"],
];
export default function Legend() {
  return (
    <div id="legend">
      {ITEMS.map(([c, t]) => <span key={t}><i style={{ background: c }} />{t}</span>)}
    </div>
  );
}

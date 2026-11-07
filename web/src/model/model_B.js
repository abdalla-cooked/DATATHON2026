// STUB — P1 overwrites this (web/src/model/) with the m2cgen export (PLAN.md §5 step 10).
// Until then it scores by how close the orbit's nodes sit to 1 AU, so the sliders give sensible numbers.
// feature order: ['a', 'e', 'i', 'om', 'w', 'q', 'ad']
// returns [p_safe, p_hazard]
const sig = (x) => 1 / (1 + Math.exp(-x));
export function score(x) {
  const [a, e, , , w] = x;
  const p = a * (1 - e * e), cw = Math.cos((w * Math.PI) / 180);
  const nodeGap = Math.min(Math.abs(p / (1 + e * cw) - 1), Math.abs(p / (1 - e * cw) - 1));
  const r = 0.8 * sig((0.08 - nodeGap) * 60);
  return [1 - r, r];
}

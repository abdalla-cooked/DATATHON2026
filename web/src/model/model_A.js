// STUB — P1 overwrites this (web/src/model/) with the m2cgen export (PLAN.md §5 step 10).
// Until then it applies NASA's rule smoothly, so the "Try one" sliders give sensible numbers.
// feature order: ['a', 'e', 'i', 'om', 'w', 'q', 'ad', 'H', 'moid']
// returns [p_safe, p_hazard]
const sig = (x) => 1 / (1 + Math.exp(-x));
export function score(x) {
  const H = x[7], moid = x[8];
  const p = sig((0.05 - moid) * 300) * sig((22 - H) * 6);
  return [1 - p, p];
}

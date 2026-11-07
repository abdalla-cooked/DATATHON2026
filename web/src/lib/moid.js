// Approximate MOID: closest distance (AU) between an orbit and a circular 1 AU Earth orbit.
// Accurate to about 0.01 AU, enough for the "design your own asteroid" sliders.
// Computing it from the orbit means the slider MOID always matches the orbit you see.
const DEG = Math.PI / 180;
export function approxMoid(el, n = 1440) {
  const w = el.w * DEG, O = el.om * DEG, i = el.i * DEG;
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), ci = Math.cos(i), si = Math.sin(i);
  let best = Infinity;
  for (let k = 0; k < n; k++) {
    const E = (2 * Math.PI * k) / n;
    const xp = el.a * (Math.cos(E) - el.e), yp = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E);
    const x = (cO * cw - sO * sw * ci) * xp + (-cO * sw - sO * cw * ci) * yp;
    const y = (sO * cw + cO * sw * ci) * xp + (-sO * sw + cO * cw * ci) * yp;
    const z = (sw * si) * xp + (cw * si) * yp;
    const d = Math.hypot(Math.hypot(x, y) - 1, z);
    if (d < best) best = d;
  }
  return best;
}

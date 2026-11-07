// P2 owns this file. Orbit math (PLAN.md §6 step 2).
// Scale: 1 AU = 10 scene units. JPL ecliptic (x, y, z) → Three.js (x, z, −y) so y is "up".
import * as THREE from 'three';

export const AU = 10;
const DEG = Math.PI / 180;

// Kepler's equation  M = E − e·sin(E), solved for E with Newton's method
export function solveKepler(M, e) {
  let E = e < 0.8 ? M : Math.PI;
  for (let k = 0; k < 12; k++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  return E;
}

// position in the orbit's own plane → rotate by ω, i, Ω → scene coordinates
function toScene(xp, yp, el) {
  const w = el.w * DEG, O = el.om * DEG, i = el.i * DEG;
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), ci = Math.cos(i), si = Math.sin(i);
  const x = (cO * cw - sO * sw * ci) * xp + (-cO * sw - sO * cw * ci) * yp;
  const y = (sO * cw + cO * sw * ci) * xp + (-sO * sw + cO * cw * ci) * yp;
  const z = (sw * si) * xp + (cw * si) * yp;
  return new THREE.Vector3(x * AU, z * AU, -y * AU);
}

function planeXY(el, E) {
  return [el.a * (Math.cos(E) - el.e), el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E)];
}

// where the body is, given its mean anomaly `ma` in degrees
export function positionAt(el, maDeg = el.ma) {
  const [xp, yp] = planeXY(el, solveKepler(maDeg * DEG, el.e));
  return toScene(xp, yp, el);
}

// the full ellipse, as points for a THREE.Line
export function orbitPoints(el, n = 180) {
  const pts = [];
  for (let k = 0; k <= n; k++) { const [xp, yp] = planeXY(el, (2 * Math.PI * k) / n); pts.push(toScene(xp, yp, el)); }
  return pts;
}

export function orbitLine(el, color = 0x4466aa, opacity = 0.6) {
  const g = new THREE.BufferGeometry().setFromPoints(orbitPoints(el));
  return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
}

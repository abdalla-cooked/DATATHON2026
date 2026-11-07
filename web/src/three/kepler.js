// P2 owns this file. Orbit math (PLAN.md §6 step 2).
// Scale: 1 AU = 10 scene units. JPL ecliptic (x, y, z) → Three.js (x, z, −y) so y is "up".
import * as THREE from 'three';
import { ASTEROID_EPOCH_JD, meanMotionDeg } from './time.js';

export const AU = 10;
const DEG = Math.PI / 180;
const TWO_PI = 2 * Math.PI;

// Kepler's equation  M = E − e·sin(E), solved for E with Newton's method
export function solveKepler(M, e) {
  M = ((M % TWO_PI) + TWO_PI) % TWO_PI;
  let E = e < 0.8 ? M : Math.PI;
  for (let k = 0; k < 15; k++) {
    const d = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= d;
    if (Math.abs(d) < 1e-9) break;
  }
  return E;
}

// position in the orbit's own plane → rotate by ω, i, Ω → scene coordinates
function toScene(xp, yp, el, target) {
  const w = el.w * DEG, O = el.om * DEG, i = el.i * DEG;
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), ci = Math.cos(i), si = Math.sin(i);
  const x = (cO * cw - sO * sw * ci) * xp + (-cO * sw - sO * cw * ci) * yp;
  const y = (sO * cw + cO * sw * ci) * xp + (-sO * sw + cO * cw * ci) * yp;
  const z = (sw * si) * xp + (cw * si) * yp;
  return target.set(x * AU, z * AU, -y * AU);
}

function planeXY(el, E) {
  return [el.a * (Math.cos(E) - el.e), el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E)];
}

// where the body is, given its mean anomaly in degrees (defaults to `ma`, i.e. at its epoch)
export function positionAt(el, maDeg = el.ma, target = new THREE.Vector3()) {
  const [xp, yp] = planeXY(el, solveKepler(maDeg * DEG, el.e));
  return toScene(xp, yp, el, target);
}

// the full ellipse, as points for a THREE.Line
export function orbitPoints(el, n = 180) {
  const pts = [];
  for (let k = 0; k <= n; k++) {
    const [xp, yp] = planeXY(el, (2 * Math.PI * k) / n);
    pts.push(toScene(xp, yp, el, new THREE.Vector3()));
  }
  return pts;
}

export function orbitLine(el, color = 0x4466aa, opacity = 0.6) {
  const g = new THREE.BufferGeometry().setFromPoints(orbitPoints(el));
  return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }));
  // depthWrite off: lines are still hidden behind the Sun/planets, but don't punch holes in the asteroid dots
}

// Fast positions for many bodies at once (the ~30k asteroid cloud).
// Everything that doesn't change with time (orbit orientation, shape, mean motion) is computed once here;
// update(jd, out) then only solves Kepler's equation per body and writes scene x,y,z into `out`.
const STRIDE = 11; // Px Py Pz Qx Qy Qz a e b M0 n
export function makeOrbitCloud(list) {
  const c = new Float64Array(list.length * STRIDE);
  list.forEach((el, k) => {
    const w = el.w * DEG, O = el.om * DEG, i = el.i * DEG;
    const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), ci = Math.cos(i), si = Math.sin(i);
    const o = k * STRIDE;
    // P = direction of perihelion, Q = 90° ahead in the orbit plane (ecliptic coords)
    c[o] = cO * cw - sO * sw * ci;  c[o + 1] = sO * cw + cO * sw * ci;  c[o + 2] = sw * si;
    c[o + 3] = -cO * sw - sO * cw * ci; c[o + 4] = -sO * sw + cO * cw * ci; c[o + 5] = cw * si;
    c[o + 6] = el.a; c[o + 7] = el.e; c[o + 8] = el.a * Math.sqrt(1 - el.e * el.e);
    // mean anomaly at JD 0 (rad), so M(jd) = M0 + n·jd
    const n = meanMotionDeg(el.a) * DEG;
    c[o + 10] = n;
    c[o + 9] = el.ma * DEG - n * (el.epoch ?? ASTEROID_EPOCH_JD);
  });
  return function update(jd, out) {
    for (let k = 0, o = 0; k < list.length; k++, o += STRIDE) {
      const a = c[o + 6], e = c[o + 7];
      const E = solveKepler(c[o + 9] + c[o + 10] * jd, e);
      const xp = a * (Math.cos(E) - e), yp = c[o + 8] * Math.sin(E);
      const x = c[o] * xp + c[o + 3] * yp, y = c[o + 1] * xp + c[o + 4] * yp, z = c[o + 2] * xp + c[o + 5] * yp;
      out[k * 3] = x * AU; out[k * 3 + 1] = z * AU; out[k * 3 + 2] = -y * AU;
    }
  };
}

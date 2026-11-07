// P2 owns this file. Dates ↔ Julian Dates and moving bodies along their orbits.

// Epoch of the orbital elements in sbdb.csv (the date `ma` refers to). The CSV has no epoch column, so this
// was inferred: propagating 11 asteroids from their real close approaches in cad.csv all point to
// JD 2461200.5 = 2026-Jun-09, a JPL standard epoch. Rows may override it with their own `epoch` (JD) field.
export const ASTEROID_EPOCH_JD = 2461200.5;

// Slider range. Planet elements (planets.js) are valid 1800–2050.
export const MIN_JD = jdFromDate(new Date(Date.UTC(2000, 0, 1)));
export const MAX_JD = jdFromDate(new Date(Date.UTC(2050, 11, 31)));

export function jdFromDate(d) { return d.getTime() / 86400000 + 2440587.5; }
export function dateFromJd(jd) { return new Date((jd - 2440587.5) * 86400000); }

// Mean motion (deg/day) from Kepler's third law, for a body orbiting the Sun with semi-major axis a (AU).
export function meanMotionDeg(a) { return 0.9856076686 / Math.pow(a, 1.5); }

// Mean anomaly (deg) of an asteroid on Julian Date `jd`.
export function meanAnomalyAt(el, jd) {
  const M = el.ma + meanMotionDeg(el.a) * (jd - (el.epoch ?? ASTEROID_EPOCH_JD));
  return ((M % 360) + 360) % 360;
}

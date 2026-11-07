// P2 owns this file. Planet orbits + where each planet is on a given date.
// Elements: JPL "Approximate Positions of the Planets" (E. M. Standish), J2000 epoch, valid 1800–2050.
// https://ssd.jpl.nasa.gov/planets/approx_pos.html
//   a (AU), e, i (deg), L = mean longitude (deg), lp = longitude of perihelion ϖ (deg), om = Ω (deg)
//   dL = mean-longitude rate (deg per Julian century). Slower element drifts are ignored (tiny over decades).
// Converted to kepler.js's shape: w = ϖ − Ω, ma = L − ϖ.

export const PLANETS = [
  { name: 'Mercury', a: 0.38709927, e: 0.20563593, i: 7.00497902, L: 252.25032350, lp: 77.45779628,  om: 48.33076593,  dL: 149472.67411175, radius: 0.15, color: 0x9a9a9a },
  { name: 'Venus',   a: 0.72333566, e: 0.00677672, i: 3.39467605, L: 181.97909950, lp: 131.60246718, om: 76.67984255,  dL: 58517.81538729,  radius: 0.25, color: 0xe8d7a8 },
  { name: 'Earth',   a: 1.00000261, e: 0.01671123, i: 0.0,        L: 100.46457166, lp: 102.93768193, om: 0.0,          dL: 35999.37244981,  radius: 0.27, color: 0x3b82f6 },
  { name: 'Mars',    a: 1.52371034, e: 0.09339410, i: 1.84969142, L: -4.55343205,  lp: -23.94362959, om: 49.55953891,  dL: 19140.30268499,  radius: 0.20, color: 0xd9643a },
  { name: 'Jupiter', a: 5.20288700, e: 0.04838624, i: 1.30439695, L: 34.39644051,  lp: 14.72847983,  om: 100.47390909, dL: 3034.74612775,   radius: 0.60, color: 0xd8b98a },
];

const wrap360 = (x) => ((x % 360) + 360) % 360;

// Orbital elements (kepler.js shape: a, e, i, om, w, ma) for `planet` on `date`.
export function planetElementsAt(planet, date = new Date()) {
  const jd = date.getTime() / 86400000 + 2440587.5; // Unix ms → Julian Date
  const T = (jd - 2451545.0) / 36525;               // Julian centuries since J2000
  const L = planet.L + planet.dL * T;
  return {
    a: planet.a, e: planet.e, i: planet.i, om: planet.om,
    w: wrap360(planet.lp - planet.om),
    ma: wrap360(L - planet.lp),
  };
}

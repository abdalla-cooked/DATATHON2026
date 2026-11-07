// P2 owns this file. Planets + dwarf planets: their orbits and where each one is on a given date.
import { meanAnomalyAt } from './time.js';

// Planets. Elements: JPL "Approximate Positions of the Planets" (E. M. Standish), J2000 epoch, valid 1800–2050.
// https://ssd.jpl.nasa.gov/planets/approx_pos.html
//   a (AU), e, i (deg), L = mean longitude (deg), lp = longitude of perihelion ϖ (deg), om = Ω (deg)
//   dL = mean-longitude rate (deg per Julian century). Slower element drifts are ignored (tiny over decades).
// Converted to kepler.js's shape: w = ϖ − Ω, ma = L − ϖ.
export const PLANETS = [
  { name: 'Mercury', a: 0.38709927,  e: 0.20563593, i: 7.00497902, L: 252.25032350, lp: 77.45779628,  om: 48.33076593,  dL: 149472.67411175, radius: 0.15, color: 0x9a9a9a, texture: '2k_mercury.jpg', tilt: 0.03 },
  { name: 'Venus',   a: 0.72333566,  e: 0.00677672, i: 3.39467605, L: 181.97909950, lp: 131.60246718, om: 76.67984255,  dL: 58517.81538729,  radius: 0.25, color: 0xe8d7a8, texture: '2k_venus_atmosphere.jpg', tilt: 177.4 },
  { name: 'Earth',   a: 1.00000261,  e: 0.01671123, i: 0.0,        L: 100.46457166, lp: 102.93768193, om: 0.0,          dL: 35999.37244981,  radius: 0.27, color: 0x3b82f6, texture: '2k_earth_daymap.jpg', tilt: 23.4 },
  { name: 'Mars',    a: 1.52371034,  e: 0.09339410, i: 1.84969142, L: -4.55343205,  lp: -23.94362959, om: 49.55953891,  dL: 19140.30268499,  radius: 0.20, color: 0xd9643a, texture: '2k_mars.jpg', tilt: 25.2 },
  { name: 'Jupiter', a: 5.20288700,  e: 0.04838624, i: 1.30439695, L: 34.39644051,  lp: 14.72847983,  om: 100.47390909, dL: 3034.74612775,   radius: 0.60, color: 0xd8b98a, texture: '2k_jupiter.jpg', tilt: 3.1 },
  { name: 'Saturn',  a: 9.53667594,  e: 0.05386179, i: 2.48599187, L: 49.95424423,  lp: 92.59887831,  om: 113.66242448, dL: 1222.49362201,   radius: 0.52, color: 0xe3cf9b, ring: true, texture: '2k_saturn.jpg', tilt: 26.7 },
  { name: 'Uranus',  a: 19.18916464, e: 0.04725744, i: 0.77263783, L: 313.23810451, lp: 170.95427630, om: 74.01692503,  dL: 428.48202785,    radius: 0.40, color: 0x9fd8e0, texture: '2k_uranus.jpg', tilt: 97.8 },
  { name: 'Neptune', a: 30.06992276, e: 0.00859048, i: 1.77004347, L: -55.12002969, lp: 44.96476227,  om: 131.78422574, dL: 218.45945325,    radius: 0.40, color: 0x4f6fd8, texture: '2k_neptune.jpg', tilt: 28.3 },
];

// Dwarf planets. `faint` = far-out bodies drawn quieter so they don't crowd the view.
// Pluto uses the same JPL planet table as above: its sbdb.csv row is an old solution (last observed 2016,
// not at the 2026 epoch) and put it ~17° off. Checked: this table gives 32.9 AU on 2015-07-14 (New Horizons flyby).
// The others come straight from sbdb.csv (observed in 2026, same epoch as the asteroids, see time.js).
export const DWARFS = [
  { name: 'Ceres',    dwarf: true, a: 2.766, e: 0.0797, i: 10.59, om: 80.25,  w: 73.29,  ma: 274.42, radius: 0.12, color: 0xb8b0a4, texture: '1k_ceres.jpg' },
  { name: 'Pluto',    dwarf: true, a: 39.48211675, e: 0.24882730, i: 17.14001206, L: 238.92903833, lp: 224.06891629, om: 110.30393684, dL: 145.20780515, radius: 0.14, color: 0xd9c3a5, texture: '1k_ceres.jpg', tilt: 122.5 },
  { name: 'Eris',     dwarf: true, a: 67.93, e: 0.4382, i: 43.93, om: 36.0,   w: 150.79, ma: 211.77, radius: 0.14, color: 0xdddddd, faint: true, texture: '1k_eris.jpg' },
  { name: 'Haumea',   dwarf: true, a: 43.06, e: 0.1944, i: 28.21, om: 121.79, w: 240.69, ma: 223.21, radius: 0.12, color: 0xcccccc, faint: true, texture: '1k_haumea.jpg' },
  { name: 'Makemake', dwarf: true, a: 45.57, e: 0.1589, i: 29.03, om: 79.29,  w: 297.09, ma: 169.94, radius: 0.12, color: 0xd8a98a, faint: true, texture: '1k_makemake.jpg' },
];

// texture: file in public/textures (Solar System Scope, CC BY 4.0; dwarf maps are artist impressions,
// Pluto borrows Ceres' map tinted by its color). tilt: axial tilt in degrees.
export const BODIES = [...PLANETS, ...DWARFS];

const wrap360 = (x) => ((x % 360) + 360) % 360;

// Orbital elements (kepler.js shape: a, e, i, om, w, ma) for any body on Julian Date `jd`.
export function planetElementsAt(body, jd) {
  if (body.L == null) return { ...body, ma: meanAnomalyAt(body, jd) }; // sbdb-style elements (a, e, i, om, w, ma)
  const T = (jd - 2451545.0) / 36525; // Julian centuries since J2000
  const L = body.L + body.dL * T;
  return {
    a: body.a, e: body.e, i: body.i, om: body.om,
    w: wrap360(body.lp - body.om),
    ma: wrap360(L - body.lp),
  };
}

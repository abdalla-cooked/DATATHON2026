// Which asteroids the live app draws by default. Shared with the intro, so the intro's last frame
// shows exactly the same dots the app opens with.
//
// Thinning the cloud: 1 in SAMPLE_EVERY of ALL asteroids, so high- and low-risk dots are thinned at the same ratio.
// Exceptions: the UI presets (ALWAYS_SHOW), and in SolarSystem.jsx the dots a mode is about (mistakes, hidden hazards).
export const SAMPLE_EVERY = 5;
export const ALWAYS_SHOW = new Set(['99942', '101955', '65803']); // Apophis, Bennu, Didymos (the UI presets)

// Stable pseudo-random pick per asteroid (FNV-1a hash of its designation), so the same dots stay
// put across model toggles, mistakes mode and the time slider.
export function sampled(pdes) {
  let h = 0x811c9dc5;
  for (let k = 0; k < pdes.length; k++) { h ^= pdes.charCodeAt(k); h = Math.imul(h, 0x01000193); }
  return (h >>> 0) % SAMPLE_EVERY === 0;
}

// The app's default list: bound orbits, thinned. Sorted the way the app sorts Model A (most hazardous last).
export function defaultCloud(asteroids, metrics) {
  return asteroids
    .filter((a) => a.e < 1)
    .filter((a) => ALWAYS_SHOW.has(String(a.pdes)) || sampled(String(a.pdes)))
    .sort((x, y) => (x.pA ?? 0) - (y.pA ?? 0));
}

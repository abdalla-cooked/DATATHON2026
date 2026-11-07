// Which asteroids the live app draws by default. Shared with the intro, so the intro's last frame
// shows exactly the same dots the app opens with.
//
// Thinning the cloud: everything that matters to the story is always drawn; only "boring" asteroids
// (not hazardous AND below both models' thresholds) are sampled, 1 in SAMPLE_EVERY.
export const SAMPLE_EVERY = 5;
export const ALWAYS_SHOW = new Set(['99942', '101955', '65803']); // Apophis, Bennu, Didymos (the UI presets)

// Stable pseudo-random pick per asteroid (FNV-1a hash of its designation), so the same dots stay
// put across model toggles, mistakes mode and the time slider.
export function sampled(pdes) {
  let h = 0x811c9dc5;
  for (let k = 0; k < pdes.length; k++) { h ^= pdes.charCodeAt(k); h = Math.imul(h, 0x01000193); }
  return (h >>> 0) % SAMPLE_EVERY === 0;
}

export function mattersToStory(a, metrics) {
  const thrA = metrics?.A?.threshold ?? 0.5, thrB = metrics?.B?.threshold ?? 0.5;
  return a.pha === 1 || (a.pA ?? 0) >= thrA || (a.pB ?? 0) >= thrB || ALWAYS_SHOW.has(String(a.pdes));
}

// The app's default list: bound orbits, thinned. Sorted the way the app sorts Model A (most hazardous last).
export function defaultCloud(asteroids, metrics) {
  return asteroids
    .filter((a) => a.e < 1)
    .filter((a) => mattersToStory(a, metrics) || sampled(String(a.pdes)))
    .sort((x, y) => (x.pA ?? 0) - (y.pA ?? 0));
}

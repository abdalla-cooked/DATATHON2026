// "Watch the AI learn": the replay the live app opens with after the intro.
// Every dot starts grey and takes on its Model A color in a stable random order over DURATION ms.
// Shared mutable store (like the time slider's ref), so the render loop never waits on React.

export const REPLAY_GREY = 0x5c6577; // dots before the model has "seen" them (the intro ends on this color)
export const SAFE_PX = 3;            // app dot size in drawing-buffer pixels for a score of 0 (SolarSystem SIZE.safe)
export const DURATION = 8000;
export const SPREAD = 0.06;          // each dot fades in over this share of the replay

// The app's renderer pixel ratio. Dot sizes are in drawing-buffer pixels, so the intro needs this
// to draw its dots at the same on-screen size as the app.
export const appPixelRatio = () => Math.min(window.devicePixelRatio || 1, 2);

const state = { mode: 'off', t0: 0, listeners: new Set() }; // mode: off | armed | running

export const replay = {
  arm() { state.mode = 'armed'; },
  start() { state.mode = 'running'; state.t0 = performance.now(); },
  off() { state.mode = 'off'; },
  get mode() { return state.mode; },
  // 0..1 (1 = every dot colored). Eased so it starts gently and settles.
  progress(now = performance.now()) {
    if (state.mode === 'off') return 1;
    if (state.mode === 'armed') return 0;
    const t = Math.min((now - state.t0) / DURATION, 1);
    if (t >= 1) { state.mode = 'off'; state.listeners.forEach((f) => f()); }
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  },
  onDone(f) { state.listeners.add(f); return () => state.listeners.delete(f); },
};

// Stable 0..1 value per asteroid: when the replay reveals it. Its own hash (FNV-1a + a murmur
// finalizer), so the reveal order is independent of the 1-in-5 sampling in cloudFilter.js.
export function revealOf(pdes) {
  let h = 0x9747b28c;
  const s = String(pdes);
  for (let k = 0; k < s.length; k++) { h ^= s.charCodeAt(k); h = Math.imul(h, 0x01000193); }
  h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

// A dot counts as "seen" once its fade is half done.
export const seenBy = (p) => p * (1 + SPREAD) - SPREAD / 2;

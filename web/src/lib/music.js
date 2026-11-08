// Deep ambient space music, generated live with the Web Audio API (no audio files, never loops audibly).
// Styled after long-form "deep space journey" ambient: almost no melody, just vast, slowly evolving drones.
//   pads   warm, string-like chords (detuned sawtooth pairs under a dark, breathing low-pass + a soft sine core),
//          swelling in over 16 s and crossfading every 40 s
//   sub    a sine drone an octave under the chord root
//   air    now and then a high tone from the chord swells in and out far back in the reverb (no plucks or bells)
//   wind   filtered noise drifting across the stereo field
//   swell  every 30-60 s a deep whoosh rises and falls, like drifting past something enormous
// Everything runs through one 11-second synthetic reverb, mostly wet. Browsers only allow sound after a user
// gesture, so start() is called on the first click / key / touch anywhere on the page (Root.jsx).
//
// duck(true) lowers it while CAPCOM and the intern talk (narration.js), cut() silences it at the asteroid
// impact, uncut() brings it back. The on/off choice is remembered per browser.

const KEY = 'datathon2026.music';
const LEVEL = 0.45;         // master volume when on
const DUCKED = 0.4;         // share of LEVEL left while someone is talking
const CHORD_SEC = 40;       // seconds per chord
const ATTACK = 16, RELEASE = 22;

const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
// D minor, barely moving: Dm(add9) · Bbmaj7 · Fmaj7/C · Dm(add9) · Gm(add9) · Am7. Low, open voicings (roots + fifths).
const CHORDS = [
  [26, 38, 45, 52, 53],   // D1 D2 A2 E3 F3
  [22, 34, 41, 45, 50],   // Bb0 Bb1 F2 A2 D3
  [24, 36, 43, 48, 52],   // C1 C2 G2 C3 E3 (Fmaj7 feel over C)
  [26, 38, 45, 52, 53],   // back home
  [19, 31, 38, 45, 46],   // G0 G1 D2 A2 Bb2
  [21, 33, 40, 48, 55],   // A0 A1 E2 C3 G3
];

let on = (() => { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } })();
let ac = null, master = null, duckGain = null, padBus = null, verb = null, noiseBuf = null;
let chordIx = 0, voices = [], sub = null, current = CHORDS[0];
let ducked = false, isCut = false;
const listeners = new Set();

function impulse(seconds = 11, decay = 3) {
  const len = Math.floor(ac.sampleRate * seconds);
  const buf = ac.createBuffer(2, len, ac.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = buf.getChannelData(c);
    // a slow build at the start, so the tail blooms instead of slapping back
    for (let i = 0; i < len; i++) {
      const t = i / len;
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * Math.min(1, t * 40);
    }
  }
  return buf;
}

const panner = (value) => {
  if (!ac.createStereoPanner) return null;
  const p = ac.createStereoPanner(); p.pan.value = value; return p;
};

function build() {
  ac = new (window.AudioContext || window.webkitAudioContext)();
  master = ac.createGain(); master.gain.value = 0;
  duckGain = ac.createGain();
  // gentle glue so the swells never jump out
  const comp = ac.createDynamicsCompressor();
  comp.threshold.value = -24; comp.ratio.value = 3; comp.attack.value = 0.5; comp.release.value = 2;
  master.connect(comp).connect(duckGain).connect(ac.destination);

  verb = ac.createConvolver(); verb.buffer = impulse();
  const wet = ac.createGain(); wet.gain.value = 0.95;
  verb.connect(wet).connect(master);

  // pads: one dark low-pass that breathes very slowly (a full cycle about every 50 s)
  padBus = ac.createBiquadFilter(); padBus.type = 'lowpass'; padBus.frequency.value = 950; padBus.Q.value = 0.8;
  const lfo = ac.createOscillator(); lfo.frequency.value = 0.02;
  const lfoAmt = ac.createGain(); lfoAmt.gain.value = 450;
  lfo.connect(lfoAmt).connect(padBus.frequency); lfo.start();
  const dry = ac.createGain(); dry.gain.value = 0.4;
  padBus.connect(dry).connect(master);
  padBus.connect(verb);

  // noise, shared by the wind and the swells
  noiseBuf = ac.createBuffer(2, ac.sampleRate * 6, ac.sampleRate);
  for (let c = 0; c < 2; c++) { const d = noiseBuf.getChannelData(c); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }

  // cosmic wind: a slowly wandering band of noise, panning side to side
  const wind = ac.createBufferSource(); wind.buffer = noiseBuf; wind.loop = true;
  const band = ac.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 300; band.Q.value = 6;
  const sweep = ac.createOscillator(); sweep.frequency.value = 0.013;
  const sweepAmt = ac.createGain(); sweepAmt.gain.value = 180;
  sweep.connect(sweepAmt).connect(band.frequency); sweep.start();
  const windGain = ac.createGain(); windGain.gain.value = 0.035;
  const windPan = panner(0);
  if (windPan) {
    const drift = ac.createOscillator(); drift.frequency.value = 0.008;
    const driftAmt = ac.createGain(); driftAmt.gain.value = 0.7;
    drift.connect(driftAmt).connect(windPan.pan); drift.start();
  }
  wind.connect(band).connect(windGain);
  (windPan ? windGain.connect(windPan) : windGain).connect(verb);
  wind.start();

  // sub drone (glides to each new root)
  sub = ac.createOscillator(); sub.type = 'sine';
  const subGain = ac.createGain(); subGain.gain.value = 0.07; // weight, not the main event (laptop speakers can't play it)
  sub.connect(subGain).connect(master);
  sub.frequency.value = midi(CHORDS[0][1] - 12);
  sub.start();

  playChord();
  setInterval(playChord, CHORD_SEC * 1000);
  loop(airTone, 14, 28);
  loop(swell, 30, 60);
}

const loop = (fn, minS, maxS) => setTimeout(() => { if (ac) fn(); loop(fn, minS, maxS); }, (minS + Math.random() * (maxS - minS)) * 1000);

function playChord() {
  const now = ac.currentTime, notes = CHORDS[chordIx % CHORDS.length];
  current = notes;
  chordIx++;
  for (const v of voices) {             // the old chord fades out slowly under the new one
    v.gain.gain.cancelScheduledValues(now);
    v.gain.gain.setValueAtTime(v.gain.gain.value, now);
    v.gain.gain.linearRampToValueAtTime(0, now + RELEASE);
    v.oscs.forEach((o) => o.stop(now + RELEASE + 0.5));
  }
  voices = notes.map((n, k) => {
    const gain = ac.createGain(); gain.gain.value = 0;
    const peak = k === 0 ? 0.015 : 0.09;   // the very low root is felt more than heard; the pads carry it
    gain.gain.linearRampToValueAtTime(peak, now + ATTACK);
    // string-like: two sawtooths detuned apart for slow chorus, plus a sine for a soft core
    const oscs = [[-11, 'sawtooth', 0.45], [9, 'sawtooth', 0.45], [0, 'sine', 0.7]].map(([cents, type, level]) => {
      const o = ac.createOscillator(); o.type = type;
      o.frequency.value = midi(n);
      o.detune.value = cents + (Math.random() - 0.5) * 4;
      const g = ac.createGain(); g.gain.value = level;
      o.connect(g).connect(gain);
      o.start(now);
      return o;
    });
    const pan = panner((k / (notes.length - 1) - 0.5) * 0.9);
    (pan ? gain.connect(pan) : gain).connect(padBus);
    return { gain, oscs };
  });
  sub.frequency.setTargetAtTime(midi(notes[1] - 12), now, 6);
}

// a high note from the current chord, two octaves up, breathing in and out far away in the reverb
function airTone() {
  const now = ac.currentTime;
  const n = current[2 + Math.floor(Math.random() * (current.length - 2))] + 24;
  const g = ac.createGain(); g.gain.value = 0;
  g.gain.linearRampToValueAtTime(0.035, now + 6);
  g.gain.linearRampToValueAtTime(0, now + 18);
  const hp = ac.createBiquadFilter(); hp.type = 'lowpass'; hp.frequency.value = 2400;
  const oscs = [-6, 6].map((cents) => {
    const o = ac.createOscillator(); o.type = 'triangle';
    o.frequency.value = midi(n); o.detune.value = cents;
    o.connect(g); o.start(now); o.stop(now + 18.5);
    return o;
  });
  const pan = panner(Math.random() * 1.4 - 0.7);
  g.connect(hp);
  (pan ? hp.connect(pan) : hp).connect(verb);
  return oscs;
}

// a deep whoosh: low noise whose filter opens and closes over ~14 s
function swell() {
  const now = ac.currentTime, dur = 14;
  const src = ac.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 2;
  lp.frequency.setValueAtTime(80, now);
  lp.frequency.exponentialRampToValueAtTime(700, now + dur * 0.5);
  lp.frequency.exponentialRampToValueAtTime(80, now + dur);
  const g = ac.createGain(); g.gain.value = 0;
  g.gain.linearRampToValueAtTime(0.14, now + dur * 0.5);
  g.gain.linearRampToValueAtTime(0, now + dur);
  src.connect(lp).connect(g);
  g.connect(verb); g.connect(master);
  src.start(now); src.stop(now + dur + 0.2);
}

function applyLevel(seconds) {
  if (!ac) return;
  const target = on && !isCut ? LEVEL : 0;
  const now = ac.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(target, now + seconds);
}

export const music = {
  // first user gesture anywhere: build the synth (if on) and fade in
  start() {
    if (!on) return;
    if (!ac) build();
    if (ac.state === 'suspended') ac.resume();
    applyLevel(8);
  },
  // On page load: try to start without a gesture. Resolves true if the browser let it play (some do, e.g. Chrome
  // on a site you've used before); false means it's waiting for a click (Root.jsx then shows the Begin gate).
  async tryAutostart() {
    if (!on) return true;
    if (!ac) build();
    applyLevel(8);
    try { await Promise.race([ac.resume(), new Promise((r) => setTimeout(r, 300))]); } catch { /* blocked */ }
    return ac.state === 'running';
  },
  isOn: () => on,
  setOn(value) {
    on = value;
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch { /* storage blocked */ }
    if (on) music.start();
    else {
      applyLevel(1.5);
      setTimeout(() => { if (!on && ac) ac.suspend(); }, 1700); // no CPU while it's off
    }
    listeners.forEach((f) => f(on));
  },
  onChange(f) { listeners.add(f); return () => listeners.delete(f); },
  // lower under the voices, back up when they stop
  duck(value) {
    if (!ac || value === ducked) return;
    ducked = value;
    const now = ac.currentTime;
    duckGain.gain.cancelScheduledValues(now);
    duckGain.gain.setValueAtTime(duckGain.gain.value, now);
    duckGain.gain.linearRampToValueAtTime(value ? DUCKED : 1, now + (value ? 0.4 : 2.5));
  },
  // the impact: instant silence; uncut() fades it back in
  cut() { isCut = true; applyLevel(0.08); },
  uncut() { if (!isCut) return; isCut = false; applyLevel(5); },
};

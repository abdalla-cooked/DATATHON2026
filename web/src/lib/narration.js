// Mission Control Live player (PLAN.md §8). Hybrid:
//   1. pre-recorded clips from public/audio/manifest.json (scripts/narrate.py): instant, work offline
//   2. live ElevenLabs voice from api/say (web/api/say.js) for any asteroid without a recording
//   3. subtitles only, if neither is available (GitHub Pages, offline, quota used up)
// No API key ever reaches the browser. Subtitles always show, so it also works with the sound off.
import L from './lines.js';
import { buildLines, paramsFor, toQuery } from './dialogue.js';

let manifest = null;
let live = false;
let on = true;                       // clicking an asteroid is a user gesture, so sound is allowed
let current = null;
let token = 0;                       // bumps on every new dialogue, so a newer one cancels an older one
const listeners = new Set();         // subtitle listeners: ({ who, text } | null) => void

const getJSON = (url) => fetch(url).then((r) => (r.ok ? r.json() : null)).catch(() => null);
const ready = Promise.all([
  getJSON('audio/manifest.json').then((m) => { manifest = m; }),
  getJSON('api/health').then((h) => { live = Boolean(h?.live); }),
]);

const caption = (c) => listeners.forEach((fn) => fn(c));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const readingTime = (text) => Math.max(1200, text.length * 65);

// Starts loading a clip right away (so the next line is ready when this one ends).
function load(src) {
  if (!src) return null;
  const a = new Audio(src);
  a.preload = 'auto';
  return a;
}

// Plays one clip; resolves when it ends. A clip that fails (missing, 429, offline) falls back to subtitle timing.
function playClip(audio, text, mine) {
  return new Promise((resolve) => {
    if (!audio) return wait(readingTime(text)).then(resolve);
    current = audio;
    const fallback = () => { if (mine === token) wait(readingTime(text)).then(resolve); else resolve(); };
    audio.onended = () => resolve();
    audio.onerror = fallback;
    audio.play().catch(fallback);
  });
}

// lines = [{ who, text, src }]. sfx = { before?: key, at?: [index, key] }
async function playDialogue(lines, sfx = {}) {
  if (!on || !lines?.length) return;
  stop();
  const mine = ++token;
  const sfxSrc = (k) => (k && manifest?.sfx?.[k]) || null;
  if (sfxSrc(sfx.before)) await playClip(load(sfxSrc(sfx.before)), '', mine);
  let next = load(lines[0].src);
  for (let n = 0; n < lines.length; n++) {
    if (mine !== token) return;
    const audio = next;
    next = n + 1 < lines.length ? load(lines[n + 1].src) : null;
    if (sfx.at?.[0] === n && sfxSrc(sfx.at[1])) await playClip(load(sfxSrc(sfx.at[1])), '', mine);
    if (mine !== token) return;
    caption(lines[n]);
    await playClip(audio, lines[n].text, mine);
    await wait(120);                                  // a breath between speakers
  }
  if (mine === token) caption(null);
}

// Live (or subtitle-only) version of a dialogue built from numbers.
function liveDialogue(P) {
  const q = toQuery(P);
  return buildLines(P, L).map(([who, text], i) => ({ who, text, src: live ? `api/say?${q}&i=${i}` : null }));
}

const screamAt = (lines) => lines.findIndex((l) => l.who === 'INTERN' && /^A{3,}/.test(l.text));

export function stop() {
  token++;
  current?.pause();
  current = null;
  caption(null);
}

export function setOn(value) {
  on = value;
  if (!on) stop();
}

export const isOn = () => on;
export const isLive = () => live;

export function onCaption(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export async function playAct(key) {
  await ready;
  return playDialogue(manifest?.acts?.[key], { before: 'radio' });
}

export async function playReaction(key) {
  await ready;
  return playDialogue(manifest?.reactions?.[key]);
}

// Commentary on a clicked asteroid (an object from asteroids.json).
// part: 'report' (default), 'hidden' (Act 4) or 'whatif' (hypothetical impact energy).
// thr = Model B's cutoff (metrics.B.threshold), used for the tier when there's no recording.
export async function playAsteroid(a, part = 'report', thr) {
  await ready;
  if (!a) return;
  const kind = part === 'hidden' && !a.hidden ? 'report' : part;
  const recorded = manifest?.asteroids?.[a.pdes];
  const lines = recorded?.[kind] || liveDialogue(paramsFor(a, kind, thr ?? manifest?.tiers?.screwed ?? 0.75));
  const tier = recorded?.tier || paramsFor(a, kind, thr ?? manifest?.tiers?.screwed ?? 0.75).t;
  if (kind === 'whatif') return playDialogue(lines, { at: [screamAt(lines), 'impact'] });
  return playDialogue(lines, { before: kind === 'report' && tier === 'screwed' ? 'alarm' : 'radio' });
}

// Your own asteroid from the sliders. risk01 = the in-browser model's score, sizeM / speedKms for the what-if.
export async function playCustom({ risk01, thr, sizeM = 0, speedKms = 20, energyMt = 0 }) {
  await ready;
  const t = risk01 < 0.2 ? 'chill' : risk01 < thr ? 'sus' : 'screwed';
  if (!live) return playReaction(`custom_${t}_${1 + Math.floor(Math.random() * 2)}`);
  const P = { k: 'custom', n: 'your asteroid', r: Math.round(risk01 * 100), t, y: '', p: 0,
              s: Math.round(sizeM), v: speedKms, e: energyMt };
  const lines = liveDialogue(P);
  return playDialogue(lines, { at: [screamAt(lines), 'impact'] });
}

export async function sfx(key) {
  await ready;
  if (on && manifest?.sfx?.[key]) return playClip(load(manifest.sfx[key]), '', token);
}

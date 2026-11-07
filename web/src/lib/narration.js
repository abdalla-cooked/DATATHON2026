// Plays the pre-generated ElevenLabs MP3s from public/audio/ (P1 makes them with scripts/narrate.py).
// No API key ever reaches the website. Missing files fail silently, so this is safe before the audio exists.
import { tierOf } from './tier.js';

let on = false, current = null, manifest = {}, lastTier = null;
fetch('audio/manifest.json').then((r) => (r.ok ? r.json() : {})).then((m) => { manifest = m; }).catch(() => {});

function say(src) {
  if (!on || !src) return;
  current?.pause();
  current = new Audio(src);
  current.play().catch(() => {});
}

export const narration = {
  setOn(v) { on = v; if (v) say('audio/intro.mp3'); },
  asteroid(a) { say(manifest[a?.pdes]?.src); },
  custom(pB) {
    const t = tierOf(pB);
    if (t === lastTier) return; // speak when the tier changes, not on every slider tick
    lastTier = t;
    say(`audio/tier_${t}_${1 + Math.floor(Math.random() * 3)}.mp3`);
  },
  view(v) { if (v.showMistakes) say('audio/mistakes.mp3'); else if (v.model === 'B') say('audio/act2.mp3'); },
  tab(t) { if (t === 'learned') say('audio/act1.mp3'); if (t === 'custom') say('audio/custom.mp3'); },
};

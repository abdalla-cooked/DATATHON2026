// Mission Control Live: builds a dialogue from the script (lines.js) and a few numbers.
// Shared by the player (subtitles) and web/api/say.js (live speech), so both always agree on the words.
// JS twin of the builders in scripts/narrate.py -- keep them in step when you change one.
//
// A dialogue is described by compact, URL-safe params:
//   k = kind: 'report' | 'hidden' | 'whatif' | 'custom'
//   n = display name, r = risk score 0-100, t = tier, y = why code (e.g. 'q+'), p = NASA hazardous 0/1,
//   s = size in meters, v = impact speed km/s, e = energy in megatons

export const KINDS = ['report', 'hidden', 'whatif', 'custom'];
export const TIERS = ['chill', 'sus', 'screwed'];
const HIROSHIMA_MT = 0.015;

export const tierOf = (risk01, thr) => (risk01 < 0.2 ? 'chill' : risk01 < thr ? 'sus' : 'screwed');
// Over 90 the rookie stops being nervous and properly panics (and the alarm plays instead of the radio).
export const PANIC_OVER = 90;
export const isPanic = (riskScore) => riskScore > PANIC_OVER;   // riskScore is 0-100
// Over 95 the rookie sometimes (DOOM_CHANCE of asteroids, seeded so it's stable per asteroid) screams one of these.
export const DOOM_OVER = 95;
export const DOOM_CHANCE = 0.35;
export const DOOM_LINES = [
  "[screaming] We're all gonna die!",
  "[screaming] We're all gonna DIE!",
  "[panicking] This is it. We're all dead. We're so dead!",
  "[screaming] Oh no no no, we're all gonna die!",
  "[hyperventilating] Tell my mom I love her! We're all doomed!",
  "[screaming] It's over! It's all over! We're gonna die!",
];

// [delivery tags] like "[panicking]" are acted by ElevenLabs v4, never spoken; subtitles hide them.
export const stripTags = (text) => text.replace(/\[[^\]]*\]\s*/g, '').trim();
// Which intern_tones setting fits a line, from its tag (template lines; Claude-written lines get the risk band's tone).
export function toneOf(who, text) {
  if (who !== 'INTERN') return '';
  const tag = (text.match(/^\[([^\]]*)\]/)?.[1] || '').toLowerCase();
  if (/panick|scream|hyperventil|whimper|horrified|crying/.test(tag)) return 'panic';
  if (/relie|sigh|exhale/.test(tag)) return 'relieved';
  if (/nervous|anxious|uneasy|shak|voice crack/.test(tag)) return 'worried';
  return '';
}

// '99942 Apophis (2004 MN4)' -> 'Apophis', '(2019 UQ7)' -> '2019 UQ7', '411165 (2010 DF1)' -> '2010 DF1'
export function shortName(full) {
  const head = full.split('(')[0].trim();
  const paren = full.includes('(') ? full.slice(full.indexOf('(') + 1, full.lastIndexOf(')')).trim() : '';
  const [first, ...rest] = head.split(' ');
  if (rest.length && /^\d+$/.test(first)) return rest.join(' ');
  if (/^\d+$/.test(head) && paren) return paren;
  return head || paren || full;
}

const roundSig = (x, sig = 2) => Number(x.toPrecision(sig));
export function sayBig(n) {
  for (const [size, word] of [[1e9, 'billion'], [1e6, 'million'], [1e3, 'thousand']]) {
    if (n >= size) return `${roundSig(n / size)} ${word}`;
  }
  return `${roundSig(n)}`;
}
export const sayEnergy = (mt) => (mt < 1 ? `${sayBig(mt * 1000)} kilotons` : `${sayBig(mt)} megatons`);

// small seeded RNG, so the same asteroid always gets the same jokes
function rngFor(seed) {
  let h = 1779033703;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 3432918353), (h = (h << 13) | (h >>> 19));
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const fill = (tpl, vals) => tpl.replace(/\{(\w+)\}/g, (_, k) => vals[k] ?? '');

// Params for one asteroid from asteroids.json (thr = Model B's cutoff from metrics.json).
export function paramsFor(a, kind, thr) {
  const size = a.D_meas ?? a.D_pred;
  return {
    k: kind, n: shortName(a.name), r: Math.round((a.pB ?? 0) * 100), t: tierOf(a.pB ?? 0, thr),
    y: a.why ?? '', p: a.pha ? 1 : 0, s: size ? Math.round(size) : 0, v: a.v_imp ?? 0, e: a.E_mt ?? 0,
  };
}

// Closing exchange: over 90 the full panic-and-calm-down scene, flagged = the "keep watching" scene, else one line.
const doomFor = (P, pick) => (P.r > DOOM_OVER && pick() < DOOM_CHANCE ? [['INTERN', DOOM_LINES[Math.floor(pick() * DOOM_LINES.length)]]] : []);

const closeFor = (P, R, choose) => (isPanic(P.r) ? R.close.panic : P.t === 'screwed' ? R.close.screwed : [choose(R.close[P.t])]);

// [[who, text], ...] for the given params, or [] if the params can't make that dialogue.
export function buildLines(P, L) {
  const pick = rngFor(`${P.k}|${P.n}`);
  const choose = (arr) => arr[Math.floor(pick() * arr.length)];
  const R = L.report;
  const whatif = (name) => L.whatif.map(([who, x]) => [who, fill(x, {
    name, speed: Math.round(P.v), energy: sayEnergy(P.e), hiroshimas: sayBig(P.e / HIROSHIMA_MT),
  })]);

  if (P.k === 'report') {
    const lines = [
      ['CAPCOM', fill(R.open, { name: P.n, risk: P.r })],
      ['INTERN', choose(R.react[isPanic(P.r) ? 'panic' : P.t])],
      ...doomFor(P, pick),
    ];
    if (L.why[P.y]) lines.push(['CAPCOM', fill(R.because, { why: choose(L.why[P.y]) })]);
    lines.push(...closeFor(P, R, choose));
    if ((P.t === 'screwed') !== (P.p === 1)) lines.push(...R.nasa_disagrees);
    return lines;
  }
  if (P.k === 'hidden') {
    return L.hidden.map(([who, x]) => [who, fill(x, { name: P.n, size: Math.round(P.s / 10) * 10 })]);
  }
  if (P.k === 'whatif') return P.e > 0 ? whatif(P.n) : [];
  if (P.k === 'custom') {
    // your own asteroid from the sliders: verdict, then the hypothetical impact
    const lines = [['CAPCOM', `Your asteroid. Risk score ${P.r}.`], ['INTERN', choose(R.react[isPanic(P.r) ? 'panic' : P.t])], ...doomFor(P, pick)];
    lines.push(...closeFor(P, R, choose));
    return P.e > 0 ? [...lines, ...whatif('your asteroid')] : lines;
  }
  return [];
}

// Server-side check: only numbers in sane ranges and a short plain name get through,
// so nobody can make the voices say arbitrary text.
export function sanitize(q, L) {
  const num = (x, lo, hi) => { const v = Number(x); return Number.isFinite(v) && v >= lo && v <= hi ? v : null; };
  const P = {
    k: KINDS.includes(q.k) ? q.k : null,
    n: typeof q.n === 'string' && /^[\p{L}\p{N} ()'.\-]{1,40}$/u.test(q.n) ? q.n : null,
    r: num(q.r, 0, 100), t: TIERS.includes(q.t) ? q.t : null,
    y: L.why[q.y] ? q.y : '', p: q.p === '1' || q.p === 1 ? 1 : 0,
    s: num(q.s ?? 0, 0, 1e6), v: num(q.v ?? 0, 0, 100), e: num(q.e ?? 0, 0, 1e12),
  };
  return Object.values(P).some((v) => v === null) ? null : P;
}

export const toQuery = (P) => new URLSearchParams(Object.entries(P).map(([k, v]) => [k, String(v)])).toString();

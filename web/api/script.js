// Mission Control Live, live writing (PLAN.md §8): Claude writes a fresh CAPCOM/INTERN exchange for each click.
//   GET /api/script?k=report&n=2019 UQ7&r=8&t=chill&y=w-&p=0&s=250&v=22.5&e=987
//   -> { lines: [{ who, text, sig }] }   (sig lets api/say.js voice exactly these lines and nothing else)
// Every exchange opens with CAPCOM's fixed line "Asteroid <name>. Risk score <n>." (set here, not by Claude);
// Claude writes the rest, in character (boss CAPCOM, panicky rookie INTERN; emotion set by the risk score). Variety comes
// from a random focus, quirk, ending and length per click, plus a
// memory of recent lines that Claude is told not to reuse.
// The asteroid facts are validated numbers (dialogue.js sanitize); the honesty rules live in the system prompt.
import Anthropic from '@anthropic-ai/sdk';
import L from '../src/lib/lines.js';
import { sanitize, sayBig, sayEnergy } from '../src/lib/dialogue.js';
import { sign } from './_sign.js';

const MODEL = process.env.LIVE_SCRIPT_MODEL || 'claude-haiku-5-5';   // fast enough for a click; Opus 5.5 took 4.5-8.5 s
// Server-side refusal fallback exists for Opus / Sonnet / Fable, not Haiku.
const FALLBACK = /^claude-(opus|sonnet|fable)/.test(MODEL);
const EFFORT = process.env.LIVE_SCRIPT_EFFORT || 'low';            // short comedy lines: low effort keeps it fast
const PER_IP_PER_MIN = Number(process.env.LIVE_SCRIPTS_PER_MIN || 12);
const RECENT_MAX = 24;                                              // lines remembered so Claude doesn't repeat itself
const hits = new Map();
const recentLines = [];                                             // best effort, per server instance

const SYSTEM = `You write live radio banter for "Mission Control Live", the commentary on a website where people click near-Earth asteroids in a 3D solar system and a machine-learning model judges each one. ElevenLabs voices every line, so you also direct the acting.

Two characters, and their relationship is the joke:
- CAPCOM: the INTERN's boss. A seasoned, professional flight controller: calm, dry, precise, never rattled. Reads the
  data, teaches the INTERN the real science in plain words, and is visibly running out of patience with him. Now and then
  CAPCOM roasts the INTERN with a deadpan one-liner insult. The insults must be FUNNY and playful, about the INTERN being
  a hopeless rookie (his panicking, his snacks, hiding under the desk, his flashcards, the time he unplugged something),
  never cruel, never about looks, identity or intelligence in a hurtful way. At most one insult per exchange.
  CAPCOM always has the last word on the science.
- INTERN: a rookie on his first week. Unprofessional, easily rattled, asks dumb questions, gets terms wrong, says what
  everyone is thinking. He is the dumb one; CAPCOM is trying to teach him. His emotion is driven ENTIRELY by the risk
  score, and the user message says exactly how he feels this time. Play that emotion fully and believably:
  - PANIC (score over 90): a real, uncontrolled panic. Short broken fragments, repeated words, interrupting himself,
    shouting a word or two in CAPITALS, a scream written out like "AAAH!" or "NO NO NO". Not a polite "oh dear".
  - RELIEF (low score): a big, audible relief. A long exhale, a giddy laugh, overselling how fine he always was.

Acting tags (important): start EVERY INTERN line with one short delivery tag in square brackets that ElevenLabs will act
out, e.g. [panicking], [screaming], [hyperventilating], [voice cracking], [nervous laugh], [whimpering], [gasps],
[long sigh of relief], [relieved laugh], [exhales], [confused]. CAPCOM lines may start with one of: [dry], [deadpan],
[sighs], [firm], [calm], or no tag. Tags are never read aloud and are not counted as words.
Punctuation drives the delivery too: ellipses for hesitation, "?!" and CAPITALS for panic, short sentences for breathing.

CAPCOM has ALREADY said the opening line, "Asteroid <name>. Risk score <number>." You write what comes right after it.
Do not repeat the asteroid's name or its risk score number; the listener just heard both.

Honesty rules (never break these):
- The number is a "risk score", never a probability or a chance.
- "Potentially hazardous" means the orbit passes close enough to keep an eye on; it never means it will hit Earth. Nobody here predicts impacts.
- If the verdict is "flagged as hazardous", CAPCOM must make clear, in fresh words, that this means keep watching it, not that it is coming.
- Only mention an impact what-if if the facts include one. A what-if is hypothetical, and CAPCOM must say it won't hit.
- Use only the facts given. Do not invent dates, distances, odds, or numbers.
- Only if the facts say "MODEL MISTAKE", admit the model got this one wrong.

Stay on topic: every line is about THIS asteroid and the facts given, seen through the boss/rookie dynamic. No skits,
no characters other than these two, no pretending to be a different kind of show.
Variety still matters: do not reuse any joke, insult, phrasing, opening or ending from the "recently used lines" in the
user message.

Style: spoken radio, no stage directions outside the [tag], no emojis, no sound effects in the text. Each line at most
22 words. Say numbers the way a person says them out loud. Be genuinely funny.`;

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// The INTERN's emotion follows the risk score; `tone` also picks Harry's voice settings (lines.json intern_tones).
const BANDS = [
  { min: 91, tone: 'panic', intern: 'FULL PANIC (score over 90). Genuinely losing it: screaming, hyperventilating, broken'
      + ' fragments, repeated words, at least one written-out scream ("AAAH!", "NO NO NO"), a word or two in CAPITALS.',
    capcom: 'cuts through the panic like a boss: firm and calm, orders him to breathe and look at the data, explains what'
      + ' flagged really means, and lands one deadpan insult about his panicking.' },
  { min: 65, tone: 'edge', intern: 'VERY NERVOUS. Jittery, nervous laughter, voice cracking, double-checking everything.',
    capcom: 'steady, keeps him focused, mildly exasperated.' },
  { min: 35, tone: 'worried', intern: 'WORRIED. Anxious beginner questions, fretting, but holding it together.',
    capcom: 'patient teacher, explains clearly, maybe a dry jab.' },
  { min: 0, tone: 'relieved', intern: 'RELIEVED. A huge exhale, giddy relieved laughter, pretending he was never scared.',
    capcom: 'confirms the good news, and teases him for having been scared at all.' },
];
const bandFor = (risk) => BANDS.find((b) => risk >= b.min);

const INTERN_QUIRKS = ['nervously taking notes', 'mixing up space words', 'trying to sound professional and failing',
  'asking a very basic question', 'starstruck by his first real asteroid', 'reading the manual out loud',
  'giving the asteroid a nickname', 'misreading the screen at first', 'over-prepared with flashcards',
  'texting his mom about it', 'eating snacks at the console', 'hiding under the desk'];
const FOCUS = {
  report: ["the model's reason (the orbit)", 'the size', "NASA's label versus the model", 'what the risk score actually means',
    'one oddly specific comparison for the size', 'the orbit, explained with an everyday metaphor'],
  hidden: ['NASA judging size by brightness', 'the rock being dark', 'our size model catching something the rule misses',
    'what "candidate for a second look" means'],
  whatif: ['the energy in a vivid everyday comparison', 'the Hiroshima number', 'the speed', 'CAPCOM staying unbothered'],
  custom: ['the user who built it', 'the risk score verdict', 'the size', 'the hypothetical energy'],
};
const ENDINGS = ['CAPCOM closes with a calm, professional sign-off', 'the INTERN repeats back what he learned, slightly calmer',
  'the INTERN asks one more beginner question and CAPCOM answers it in a few precise words',
  'CAPCOM gives a short, reassuring status call', 'end on a callback to the INTERN\'s first panic, now resolved'];

const SCHEMA = {
  type: 'object',
  properties: {
    lines: {
      type: 'array',
      items: {
        type: 'object',
        properties: { who: { type: 'string', enum: ['CAPCOM', 'INTERN'] }, text: { type: 'string' } },
        required: ['who', 'text'],
        additionalProperties: false,
      },
    },
  },
  required: ['lines'],
  additionalProperties: false,
};

const opener = (P) => (P.k === 'custom' ? `Your asteroid. Risk score ${P.r}.` : `Asteroid ${P.n}. Risk score ${P.r}.`);

function factsFor(P) {
  const why = L.why[P.y]?.[0];
  const verdict = { chill: 'safe-looking', sus: 'borderline', screwed: 'flagged as hazardous' }[P.t];
  const facts = P.k === 'custom'
    ? ['Asteroid: one the user just designed with sliders ("your asteroid")', `Verdict: ${verdict}`]
    : [`Asteroid: ${P.n}`, `Verdict from the risk model: ${verdict}`,
       `NASA's official label: ${P.p ? 'potentially hazardous' : 'not hazardous'}`];
  if (P.k !== 'custom' && P.k !== 'hidden' && (P.t === 'screwed') !== (P.p === 1)) {
    facts.push(`MODEL MISTAKE: the risk model ${P.t === 'screwed' ? 'flagged it, but NASA does not' : 'missed it, but NASA flags it'}.`);
  }
  if (why && P.k !== 'custom') facts.push(`The model's biggest reason: ${why}`);
  if (P.s) facts.push(`Size: about ${Math.round(P.s / 10) * 10} meters across`);
  if (P.k === 'hidden') {
    facts.push('THE STORY: a hidden-hazard find. NASA lists it as not hazardous only because it looks faint (NASA judges size'
      + ' by brightness). Our separate size model thinks it is a dark rock big enough (140 m or more) to count. This is our'
      + ' model finding something the official rule misses, not a mistake. A candidate for a second look, not a confirmed threat.');
  }
  if (P.k === 'whatif' || (P.k === 'custom' && P.e > 0)) {
    facts.push(`Hypothetical what-if: if it hit at ${Math.round(P.v)} kilometers per second, about ${sayEnergy(P.e)},`
      + ` roughly ${sayBig(P.e / 0.015)} Hiroshima bombs. The INTERN screams once ([screaming] AAAAH!).`);
  }
  return facts.join('\n');
}

function promptFor(P, band) {
  const lineCount = 3 + Math.floor(Math.random() * 3);         // 3-5 lines after the opener
  const recent = recentLines.slice(-RECENT_MAX);
  const twist = P.k === 'hidden' ? ' Then the hidden-hazard twist makes him panic for real.' : '';
  return [
    'FACTS',
    factsFor(P),
    '',
    `HOW THEY FEEL (risk score ${P.r})`,
    `- INTERN: ${band.intern}${twist}`,
    `- CAPCOM: ${band.capcom}`,
    '',
    'THIS TAKE',
    `- ${Math.random() < 0.5 ? 'CAPCOM gets one funny insult in at the INTERN' : 'no insult this time; CAPCOM just teaches, dryly'}`,
    `- INTERN quirk: ${pick(INTERN_QUIRKS)}`,
    `- Focus on: ${pick(FOCUS[P.k] || FOCUS.report)}`,
    `- Ending: ${pick(ENDINGS)}`,
    `- Write exactly ${lineCount} lines after CAPCOM's opener, starting with the ${Math.random() < 0.75 ? 'INTERN' : 'CAPCOM'}.`,
    '',
    recent.length ? `RECENTLY USED LINES (do not reuse their jokes, phrasings, openings or endings):\n${recent.map((t) => `- ${t}`).join('\n')}` : '',
  ].join('\n');
}

// Keep only well-formed, short, plain lines; anything off means we fall back to the template dialogue.
function clean(raw) {
  const lines = Array.isArray(raw?.lines) ? raw.lines : [];
  const ok = lines
    .filter((l) => (l.who === 'CAPCOM' || l.who === 'INTERN') && typeof l.text === 'string')
    .map((l) => ({ who: l.who, text: l.text.replace(/\s+/g, ' ').trim() }))
    .filter((l) => l.text.length > 0 && l.text.length <= 260);   // a little room for the [delivery tag]
  return ok.length >= 2 && ok.length <= 7 ? ok : null;
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');                 // a new script every click is the point
  res.end(JSON.stringify(body));
}

function fail(res, status, error) {
  console.warn(`[api/script] ${status} ${error}`);
  send(res, status, { error });
}

export default async function handler(req, res) {
  const q = Object.fromEntries(new URL(req.url, 'http://local').searchParams);
  const P = sanitize(q, L);
  if (!P) return fail(res, 400, 'bad request');
  if (!process.env.ANTHROPIC_API_KEY) return fail(res, 503, 'live writing not configured');

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '?').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  if (recent.length >= PER_IP_PER_MIN) return fail(res, 429, 'too many requests, slow down');
  hits.set(ip, [...recent, now]);

  const client = new Anthropic();
  const band = bandFor(P.r);
  try {
    const request = {
      model: MODEL,
      max_tokens: 8000,                                          // thinking counts too; 2000 sometimes cut the script off
      output_config: { effort: EFFORT, format: { type: 'json_schema', schema: SCHEMA } },
      system: SYSTEM,
      messages: [{ role: 'user', content: promptFor(P, band) }],
    };
    const response = FALLBACK
      ? await client.beta.messages.create({ ...request, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' })
      : await client.messages.create(request);
    if (response.stop_reason === 'refusal') return fail(res, 502, 'refused');
    const text = response.content.find((b) => b.type === 'text')?.text;
    const raw = text ? JSON.parse(text) : null;
    const written = clean(raw);
    if (!written) {
      const got = Array.isArray(raw?.lines) ? raw.lines : [];
      return fail(res, 502, `unusable script (${got.length} lines, longest `
        + `${Math.max(0, ...got.map((l) => l.text?.length || 0))} chars, stop ${response.stop_reason})`);
    }
    recentLines.push(...written.map((l) => l.text));
    recentLines.splice(0, Math.max(0, recentLines.length - RECENT_MAX));
    const lines = [{ who: 'CAPCOM', text: opener(P) }, ...written]
      .map((l) => ({ ...l, tone: l.who === 'INTERN' ? band.tone : '' }));
    send(res, 200, { lines: lines.map((l) => ({ ...l, sig: sign(l.who, l.text, l.tone) })), tone: band.tone });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) return fail(res, 429, 'claude rate limited');
    if (err instanceof Anthropic.AuthenticationError) return fail(res, 503, 'bad ANTHROPIC_API_KEY');
    if (err instanceof Anthropic.APIError) return fail(res, 502, `claude ${err.status}`);
    if (err instanceof SyntaxError) return fail(res, 502, 'unusable script');
    fail(res, 502, `claude unreachable: ${err.cause?.code || err.message}`);
  }
}

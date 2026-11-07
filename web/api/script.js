// Mission Control Live, live writing (PLAN.md §8): Claude writes a fresh CAPCOM/INTERN exchange for each click.
//   GET /api/script?k=report&n=2019 UQ7&r=8&t=chill&y=w-&p=0&s=250&v=22.5&e=987
//   -> { lines: [{ who, text, sig }] }   (sig lets api/say.js voice exactly these lines and nothing else)
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
const hits = new Map();

const SYSTEM = `You write live radio banter for "Mission Control Live", the commentary on a website where people click near-Earth asteroids in a 3D solar system and a machine-learning model judges each one.

Two characters:
- CAPCOM: calm, deadpan, dry wit. Reads the data and always has the last word on the science.
- INTERN: young, panics at everything, funny overreactions, gets corrected by CAPCOM.

Write one short exchange (4 to 6 lines) about the asteroid in the user message.

Honesty rules (never break these, they are part of the joke):
- The model gives a "risk score" from 0 to 100. Never call it a probability or a chance.
- "Potentially hazardous" means the orbit passes close enough to be worth watching. It never means it will hit Earth. Nobody here predicts impacts.
- When the risk is high, CAPCOM must say plainly, in their own words, that hazardous means worth watching, not incoming.
- Only talk about an impact what-if if the facts include one. A what-if is hypothetical: CAPCOM must say it is not going to hit.
- Use only the facts given. Do not invent dates, distances, or impact odds.
- Only if the facts say "MODEL MISTAKE", admit it: NASA disagrees with the risk model, this is one of its mistakes.

Style: spoken radio, no stage directions, no emojis, no sound effects in the text. Each line at most 25 words. Say numbers the way a person would say them out loud. Make it genuinely funny and different every time: vary the jokes, the openings and the INTERN's panic.`;

const ANGLES = ['sports commentary', 'nature documentary', 'airline safety briefing', 'cooking show', 'weather report',
  'courtroom drama', 'dating show', 'heist movie', 'true-crime podcast', 'game show', 'spa meditation', 'tech product launch'];

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

function factsFor(P) {
  const why = L.why[P.y]?.[0];
  const verdict = { chill: 'safe-looking', sus: 'borderline', screwed: 'flagged as hazardous' }[P.t];
  const facts = P.k === 'custom'
    ? [`Asteroid: one the user just designed with sliders ("your asteroid")`, `Model risk score: ${P.r} (${verdict})`]
    : [`Asteroid: ${P.n}`, `Model risk score: ${P.r} out of 100 (${verdict})`,
       `NASA's official label: ${P.p ? 'potentially hazardous' : 'not hazardous'}`];
  if (P.k !== 'custom' && P.k !== 'hidden' && (P.t === 'screwed') !== (P.p === 1)) {
    facts.push(`MODEL MISTAKE: the risk model ${P.t === 'screwed' ? 'flagged it, but NASA does not' : 'missed it, but NASA flags it'}.`);
  }
  if (why && P.k !== 'custom') facts.push(`The model's biggest reason: ${why}`);
  if (P.s) facts.push(`Size: about ${Math.round(P.s / 10) * 10} meters across`);
  if (P.k === 'hidden') {
    facts.push('THE STORY: a hidden-hazard find. NASA lists it as not hazardous only because it looks faint (NASA judges size'
      + ' by brightness). Our separate size model thinks it is a dark rock big enough (140 m or more) to count. This is our'
      + ' model finding something the official rule misses, not a mistake. Call it a candidate for a second look, not a'
      + ' confirmed threat. The risk score is a different model and matters less here.');
  }
  if (P.k === 'whatif' || (P.k === 'custom' && P.e > 0)) {
    facts.push(`Hypothetical what-if: if it hit at ${Math.round(P.v)} kilometers per second, about ${sayEnergy(P.e)},`
      + ` roughly ${sayBig(P.e / 0.015)} Hiroshima bombs. The INTERN should scream once. Make this the focus.`);
  }
  return facts.join('\n');
}

// Keep only well-formed, short, plain lines; anything off means we fall back to the template dialogue.
function clean(raw) {
  const lines = Array.isArray(raw?.lines) ? raw.lines : [];
  const ok = lines
    .filter((l) => (l.who === 'CAPCOM' || l.who === 'INTERN') && typeof l.text === 'string')
    .map((l) => ({ who: l.who, text: l.text.replace(/\s+/g, ' ').trim() }))
    .filter((l) => l.text.length > 0 && l.text.length <= 220);
  return ok.length >= 3 && ok.length <= 8 ? ok : null;
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');                 // a new script every click is the point
  res.end(JSON.stringify(body));
}

export default async function handler(req, res) {
  const q = Object.fromEntries(new URL(req.url, 'http://local').searchParams);
  const P = sanitize(q, L);
  if (!P) return send(res, 400, { error: 'bad request' });
  if (!process.env.ANTHROPIC_API_KEY) return send(res, 503, { error: 'live writing not configured' });

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '?').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  if (recent.length >= PER_IP_PER_MIN) return send(res, 429, { error: 'too many requests, slow down' });
  hits.set(ip, [...recent, now]);

  const angle = ANGLES[Math.floor(Math.random() * ANGLES.length)];
  const client = new Anthropic();
  try {
    const request = {
      model: MODEL,
      max_tokens: 2000,
      output_config: { effort: EFFORT, format: { type: 'json_schema', schema: SCHEMA } },
      system: SYSTEM,
      messages: [{ role: 'user', content: `${factsFor(P)}\n\nThis time, flavor the INTERN's panic like a ${angle}.` }],
    };
    const response = FALLBACK
      ? await client.beta.messages.create({ ...request, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' })
      : await client.messages.create(request);
    if (response.stop_reason === 'refusal') return send(res, 502, { error: 'refused' });
    const text = response.content.find((b) => b.type === 'text')?.text;
    const lines = clean(text ? JSON.parse(text) : null);
    if (!lines) return send(res, 502, { error: 'unusable script' });
    send(res, 200, { lines: lines.map((l) => ({ ...l, sig: sign(l.who, l.text) })), angle });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) return send(res, 429, { error: 'claude rate limited' });
    if (err instanceof Anthropic.AuthenticationError) return send(res, 503, { error: 'bad ANTHROPIC_API_KEY' });
    if (err instanceof Anthropic.APIError) return send(res, 502, { error: `claude ${err.status}` });
    if (err instanceof SyntaxError) return send(res, 502, { error: 'unusable script' });
    send(res, 502, { error: `claude unreachable: ${err.cause?.code || err.message}` });
  }
}

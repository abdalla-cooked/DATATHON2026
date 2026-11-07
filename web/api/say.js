// Mission Control Live, live voice (PLAN.md §8). Vercel serverless function, also mounted by vite.config.js in dev.
//   GET /api/say?k=report&n=2019 UQ7&r=8&t=chill&y=w-&p=0&s=250&v=22.5&e=987&i=2  -> audio/mpeg of line i
// The API key lives only here (Vercel env vars / repo-root .env in dev), never in the browser.
// The text is rebuilt server-side from validated numbers (dialogue.js), so callers can't make it say anything else.
import L from '../src/lib/lines.js';
import { buildLines, sanitize } from '../src/lib/dialogue.js';

const MODEL_ID = 'eleven_flash_v2_5';                       // lowest-latency ElevenLabs model
const PER_IP_PER_MIN = Number(process.env.LIVE_LINES_PER_MIN || 40);
const CHARS_PER_HOUR = Number(process.env.LIVE_CHARS_PER_HOUR || 20000);  // protects the quota per instance
const hits = new Map();                                       // ip -> timestamps (best effort, per instance)
let budget = { hour: 0, chars: 0 };

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(body);
}

function limited(ip, chars) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  if (recent.length >= PER_IP_PER_MIN) return 'too many requests, slow down';
  const hour = Math.floor(now / 3_600_000);
  if (budget.hour !== hour) budget = { hour, chars: 0 };
  if (budget.chars + chars > CHARS_PER_HOUR) return 'live voice budget used up for this hour';
  recent.push(now);
  hits.set(ip, recent);
  budget.chars += chars;
  return null;
}

export default async function handler(req, res) {
  const q = Object.fromEntries(new URL(req.url, 'http://local').searchParams);
  const P = sanitize(q, L);
  const i = Number(q.i);
  const line = P && Number.isInteger(i) ? buildLines(P, L)[i] : null;
  if (!line) return send(res, 400, 'bad request');

  const [who, text] = line;
  const key = process.env.ELEVENLABS_API_KEY;
  const voice = process.env[`${who}_VOICE_ID`];
  if (!key || !voice) return send(res, 503, 'live voice not configured');

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '?').split(',')[0].trim();
  const why = limited(ip, text.length);
  if (why) return send(res, 429, why);

  try {
    const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
      body: JSON.stringify({ text, model_id: MODEL_ID, voice_settings: L.voices[who] }),
    });
    if (!r.ok) return send(res, 502, `elevenlabs ${r.status}`);
    const audio = Buffer.from(await r.arrayBuffer());
    res.statusCode = 200;
    res.setHeader('Content-Type', 'audio/mpeg');
    // same URL = same words: let the CDN and browser reuse it, so repeat clicks cost nothing
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=31536000, immutable');
    res.end(audio);
  } catch (err) {
    send(res, 502, `elevenlabs unreachable: ${err.cause?.code || err.message}`);
  }
}

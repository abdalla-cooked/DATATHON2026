// Signs lines written by api/script.js, so api/say.js only ever voices text our own server produced.
// (Files starting with _ are helpers, not routes, on Vercel.)
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

const secret = () => process.env.LIVE_SIGNING_SECRET
  || createHash('sha256').update(`mission-control-live|${process.env.ELEVENLABS_API_KEY || ''}`).digest('hex');

export const sign = (who, text) => createHmac('sha256', secret()).update(`${who}\n${text}`).digest('base64url');

export function verify(who, text, sig) {
  if (typeof sig !== 'string') return false;
  const a = Buffer.from(sign(who, text));
  const b = Buffer.from(sig);
  return a.length === b.length && timingSafeEqual(a, b);
}

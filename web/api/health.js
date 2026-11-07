// Tells the player whether live voice is available here (true on Vercel / dev with keys set, 404 on GitHub Pages).
export default function handler(req, res) {
  const live = Boolean(process.env.ELEVENLABS_API_KEY && process.env.CAPCOM_VOICE_ID && process.env.INTERN_VOICE_ID);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify({ live }));
}

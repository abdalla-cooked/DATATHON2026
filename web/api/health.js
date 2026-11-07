// Tells the player what's available here (404 on GitHub Pages, so everything falls back to recordings + subtitles):
//   live   = ElevenLabs voice (api/say)
//   script = Claude writes a fresh dialogue per click (api/script)
export default function handler(req, res) {
  const live = Boolean(process.env.ELEVENLABS_API_KEY && process.env.CAPCOM_VOICE_ID && process.env.INTERN_VOICE_ID);
  const script = live && Boolean(process.env.ANTHROPIC_API_KEY);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify({ live, script }));
}

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// `npm run build` writes the static site to ../docs, which GitHub Pages serves.
// base './' keeps every path relative so it works at https://<owner>.github.io/<repo>/
//
// In `npm run dev`, the Mission Control Live functions in api/ are mounted at /api/*, reading the ElevenLabs key
// from the repo-root .env. Server side only: nothing without a VITE_ prefix is ever bundled into the page.
const liveVoiceInDev = (mode) => ({
  name: 'mission-control-live-dev-api',
  configureServer(server) {
    const env = loadEnv(mode, fileURLToPath(new URL('..', import.meta.url)), '');
    for (const k of ['ELEVENLABS_API_KEY', 'CAPCOM_VOICE_ID', 'INTERN_VOICE_ID']) {
      if (env[k] && !process.env[k]) process.env[k] = env[k];
    }
    for (const name of ['say', 'health']) {
      server.middlewares.use(`/api/${name}`, async (req, res) => {
        const mod = await server.ssrLoadModule(`/api/${name}.js`);
        await mod.default(req, res);
      });
    }
  },
});

export default defineConfig(({ mode }) => ({
  plugins: [react(), liveVoiceInDev(mode)],
  base: './',
  build: { outDir: process.env.VERCEL ? 'dist' : '../docs', emptyOutDir: true },
}));

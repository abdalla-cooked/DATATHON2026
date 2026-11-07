import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `npm run build` writes the static site to ../docs, which GitHub Pages serves.
// base './' keeps every path relative so it works at https://<owner>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: '../docs', emptyOutDir: true },
});

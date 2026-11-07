// `npm run dev` launcher. Starts Vite, and if ../.certs/norton-root.pem exists (Norton Antivirus re-signs HTTPS on
// that machine), hands it to Node so the Mission Control Live calls to Claude and ElevenLabs aren't rejected.
// On machines without that file this is just `vite`. Restart it after editing the repo-root .env.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const env = { ...process.env };
const cert = fileURLToPath(new URL('../.certs/norton-root.pem', import.meta.url));
if (!env.NODE_EXTRA_CA_CERTS && existsSync(cert)) {
  env.NODE_EXTRA_CA_CERTS = cert;
  console.log('[dev] using .certs/norton-root.pem for HTTPS (Norton)');
}

// vite's package "exports" hide bin/, so locate it next to vite's package.json
const vitePkg = createRequire(import.meta.url).resolve('vite/package.json');
const vite = join(dirname(vitePkg), 'bin', 'vite.js');
spawn(process.execPath, [vite, ...process.argv.slice(2)], { stdio: 'inherit', env })
  .on('exit', (code) => process.exit(code ?? 0));

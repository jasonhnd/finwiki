#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');

function run(command, args, options = {}) {
  const cwd = options.cwd ?? ROOT;
  const label = [command, ...args].join(' ');
  console.log(`\n$ ${label}`);
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      env: {
        ...process.env,
        PYTHONUTF8: '1',
      },
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${label} failed with exit code ${code}`));
      }
    });
  });
}

async function findPython() {
  const candidates = [
    process.env.PYTHON,
    process.platform === 'win32' ? 'python' : 'python3',
    'python3',
    'python',
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      await run(candidate, ['--version']);
      return candidate;
    } catch {
      // Try the next executable name.
    }
  }
  throw new Error('Python 3 is required for FinWiki release checks.');
}

async function main() {
  const python = await findPython();

  await run(python, ['tools/wiki_link_audit.py', '--fail-on-issues']);
  await run(python, ['tools/release.py', '--check', '--strict']);
  await run('bun', ['scripts/sync-corpus.ts'], { cwd: SITE });
  await run('bun', ['run', 'build'], { cwd: SITE });
  await run(python, ['tools/check_duplicate_html_ids.py', 'site/dist']);
  await run('bun', ['run', 'index:search'], { cwd: SITE });
  await run('node', ['tools/assemble_static_publish.mjs', '--out', '_vercel_public']);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
});

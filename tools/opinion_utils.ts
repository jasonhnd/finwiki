import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const JST_OFFSET_MINUTES = 9 * 60;
export const SKIP_DIRS = new Set([
  '.git',
  '.cache',
  '.templates',
  '.opinions',
  'releases',
  'tools',
  'api',
  'site',
  'app',
  '.vercel',
  '_site',
  '_vercel_public',
]);

export type ExtractedBlock = {
  label: string;
  content: string;
};

export type RepoContext = {
  root: string;
  opinionsDir: string;
};

export function findRepoRoot(startDir: string): string {
  let current = path.resolve(startDir);
  for (;;) {
    const hasSignals =
      existsSync(path.join(current, 'AGENTS.md')) && existsSync(path.join(current, 'package.json'));
    if (hasSignals) {
      return current;
    }
    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error(`Could not locate repo root from ${startDir}`);
    }
    current = parent;
  }
}

export function getRepoContext(fromDir: string): RepoContext {
  const root = findRepoRoot(fromDir);
  return {
    root,
    opinionsDir: path.join(root, '.opinions'),
  };
}

export async function* iterEntries(root: string): AsyncGenerator<string> {
  yield* walkMarkdown(root, root);
}

async function* walkMarkdown(root: string, dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name, 'en'));
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    const rel = path.relative(root, abs);
    const parts = rel.split(path.sep);
    if (parts.some((part) => SKIP_DIRS.has(part))) {
      continue;
    }
    if (entry.isDirectory()) {
      yield* walkMarkdown(root, abs);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith('.md')) {
      continue;
    }
    if (path.dirname(abs) === root) {
      continue;
    }
    yield abs;
  }
}

export async function readUtf8(filePath: string): Promise<string> {
  return readFile(filePath, 'utf8');
}

export async function writeUtf8(filePath: string, text: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, text, 'utf8');
}

export function toPosixRel(root: string, absPath: string): string {
  return path.relative(root, absPath).split(path.sep).join('/');
}

export function splitFrontmatter(text: string): [string, string] {
  if (text.startsWith('---')) {
    const match = text.match(/^(---\r?\n.*?\r?\n---\r?\n)(.*)$/s);
    if (match) {
      return [match[1], match[2]];
    }
  }
  return ['', text];
}

export function todayJst(): string {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000;
  const jst = new Date(utc + JST_OFFSET_MINUTES * 60_000);
  const year = jst.getUTCFullYear();
  const month = `${jst.getUTCMonth() + 1}`.padStart(2, '0');
  const day = `${jst.getUTCDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function extractTitle(text: string, fallback: string): string {
  const match = text.match(/^title:\s*(.+)$/m);
  return match ? match[1].trim().replace(/^"(.*)"$/, '$1') : fallback;
}

export async function ensureParent(filePath: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
}

export async function exists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

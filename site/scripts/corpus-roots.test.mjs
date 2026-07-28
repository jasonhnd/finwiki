import { afterEach, expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { REPO, walkEntries } from './corpus-roots.mjs';

const temporaryRoots = [];

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

async function collectEntries(rootDir = REPO) {
  const entries = [];
  for await (const rel of walkEntries(rootDir)) entries.push(rel);
  return entries;
}

test('translation discovery matches the i18n status denominator', async () => {
  const entries = await collectEntries();
  const result = Bun.spawnSync({
    cmd: [process.execPath, 'tools/i18n_status.ts', '--json'],
    cwd: REPO,
    stdout: 'pipe',
    stderr: 'pipe',
  });

  expect(result.exitCode).toBe(0);
  const report = JSON.parse(result.stdout.toString());
  expect(new Set(entries).size).toBe(entries.length);
  expect(entries.length).toBe(report.source_entries);
  for (const locale of report.locales) {
    expect(locale.missing).toBe(0);
    expect(locale.orphaned).toBe(0);
  }
});

test('a new domain is discovered without editing a directory list', async () => {
  const root = mkdtempSync(join(tmpdir(), 'finwiki-corpus-roots-'));
  temporaryRoots.push(root);
  for (const dir of ['future-domain', 'releases', 'docs', '.hidden']) {
    mkdirSync(join(root, dir), { recursive: true });
  }
  writeFileSync(join(root, 'future-domain', 'new-entry.md'), '# New entry\n');
  writeFileSync(join(root, 'future-domain', 'INDEX.md'), '# Domain index\n');
  writeFileSync(join(root, 'releases', 'v1.md'), '# Release\n');
  writeFileSync(join(root, 'docs', 'internal.md'), '# Internal\n');
  writeFileSync(join(root, '.hidden', 'private.md'), '# Private\n');
  writeFileSync(join(root, 'README.md'), '# Root control document\n');

  expect(await collectEntries(root)).toEqual(['future-domain/new-entry.md']);
});

test('translation preparation dry-run covers the canonical set without writing jobs', async () => {
  const entries = await collectEntries();
  const result = Bun.spawnSync({
    cmd: [process.execPath, 'site/scripts/prep-translate.mjs', '--force', '--dry-run'],
    cwd: REPO,
    stdout: 'pipe',
    stderr: 'pipe',
  });

  expect(result.exitCode).toBe(0);
  expect(result.stdout.toString()).toContain(
    `prepared ${entries.length} jobs (dry run; no files written)`,
  );
});

test('smoke targets remain inside the canonical translation corpus', async () => {
  const entries = new Set(await collectEntries());
  expect(entries.has('trust-banks/custody-bank.md')).toBe(true);
  expect(entries.has('regional-banks/yucho.md')).toBe(true);
});

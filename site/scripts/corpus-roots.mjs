import { join, relative, sep } from 'node:path';
import { isPublicPage, iterMarkdownFiles } from '../../lib/markdown_helpers.ts';

export const HERE = import.meta.dir;
export const REPO = join(HERE, '..', '..');
export const I18N = join(HERE, '..', 'src', 'content', 'i18n');

const toPosix = (value) => value.split(sep).join('/');

export function isTranslatableSourcePath(relPath) {
  const normalized = toPosix(relPath).replace(/^\/+/, '');
  return (
    isPublicPage(normalized) &&
    normalized.includes('/') &&
    !normalized.startsWith('releases/') &&
    !normalized.startsWith('.templates/') &&
    normalized.endsWith('.md') &&
    !normalized.endsWith('/INDEX.md')
  );
}

// Use the same canonical public-corpus walker and eligibility contract as
// tools/i18n_status.ts. New public domains are discovered automatically.
export async function* walkEntries(rootDir = REPO) {
  for (const absPath of await iterMarkdownFiles(rootDir)) {
    const relPath = toPosix(relative(rootDir, absPath));
    if (isTranslatableSourcePath(relPath)) {
      yield relPath;
    }
  }
}

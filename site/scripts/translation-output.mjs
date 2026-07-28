import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { unmask, verify } from './protect.mjs';

export const DEFAULT_I18N_ROOT = join(import.meta.dir, '..', 'src', 'content', 'i18n');
export const DEFAULT_REVIEW_ROOT = join(import.meta.dir, '..', '.cache', 'translation-review');

function safeRelativePath(rel) {
  const normalized = String(rel).replace(/\\/g, '/').replace(/^\.\/+/, '');
  if (
    !normalized ||
    normalized.startsWith('/') ||
    normalized.split('/').some((part) => part === '..')
  ) {
    throw new Error(`unsafe translation path: ${rel}`);
  }
  return normalized.endsWith('.md') ? normalized : `${normalized}.md`;
}

function safeSegment(value, label) {
  const normalized = String(value).trim().toLowerCase();
  if (!/^[a-z][a-z0-9_-]*$/.test(normalized)) {
    throw new Error(`unsafe ${label}: ${value}`);
  }
  return normalized;
}

function reviewPaths(reviewRoot, lang, rel, stage) {
  const safeLang = safeSegment(lang, 'language');
  const safeStage = safeSegment(stage, 'review stage');
  const safeRel = safeRelativePath(rel);
  const stem = safeRel.replace(/\.md$/i, '');
  const base = join(reviewRoot, safeLang, `${stem}.${safeStage}`);
  return {
    candidatePath: `${base}.candidate.md`,
    maskedPath: `${base}.masked.md`,
    metadataPath: `${base}.json`,
  };
}

export function writeTranslationReview({
  reviewRoot = DEFAULT_REVIEW_ROOT,
  lang,
  rel,
  stage = 'body',
  hash,
  masked,
  masks,
  translatedMasked,
  verification,
  model = '',
  reason = 'translation verification failed',
  reviewedAt = new Date().toISOString(),
}) {
  const paths = reviewPaths(reviewRoot, lang, rel, stage);
  mkdirSync(dirname(paths.candidatePath), { recursive: true });
  writeFileSync(paths.maskedPath, String(masked), 'utf8');
  writeFileSync(paths.candidatePath, String(translatedMasked), 'utf8');
  writeFileSync(
    paths.metadataPath,
    `${JSON.stringify(
      {
        rel: safeRelativePath(rel),
        lang: safeSegment(lang, 'language'),
        stage: safeSegment(stage, 'review stage'),
        source_hash: hash,
        model,
        reason,
        reviewed_at: reviewedAt,
        verification,
        masks,
      },
      null,
      2,
    )}\n`,
    'utf8',
  );
  return paths;
}

export function clearTranslationReview({
  reviewRoot = DEFAULT_REVIEW_ROOT,
  lang,
  rel,
  stage = 'body',
}) {
  const paths = reviewPaths(reviewRoot, lang, rel, stage);
  for (const path of Object.values(paths)) rmSync(path, { force: true });
}

function titleOf(body) {
  const match = String(body).match(/^#\s+(.+?)\s*$/m);
  return match ? match[1].trim() : '';
}

export function commitMaskedTranslation({
  i18nRoot = DEFAULT_I18N_ROOT,
  reviewRoot = DEFAULT_REVIEW_ROOT,
  lang,
  rel,
  hash,
  masked,
  masks,
  translatedMasked,
  model = '',
  translatedAt = new Date().toISOString(),
}) {
  const verification = verify(masked, translatedMasked);
  if (!verification.ok) {
    const review = writeTranslationReview({
      reviewRoot,
      lang,
      rel,
      hash,
      masked,
      masks,
      translatedMasked,
      verification,
      model,
    });
    return { committed: false, verification, review };
  }

  const safeRel = safeRelativePath(rel);
  const safeLang = safeSegment(lang, 'language');
  const body = unmask(translatedMasked, masks);
  const modelLine = model ? `model: ${model}\n` : '';
  const head =
    `---\n` +
    `source: ${safeRel.replace(/\.md$/, '')}\n` +
    `source_hash: ${hash}\n` +
    `lang: ${safeLang}\n` +
    modelLine +
    `status: machine\n` +
    `fidelity: ok\n` +
    `title: ${JSON.stringify(titleOf(body))}\n` +
    `translated_at: ${translatedAt}\n` +
    `---\n`;
  const outPath = join(i18nRoot, safeLang, safeRel);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, head + body.replace(/\n*$/, '') + '\n', 'utf8');
  clearTranslationReview({ reviewRoot, lang: safeLang, rel: safeRel });
  return { committed: true, verification, outPath };
}

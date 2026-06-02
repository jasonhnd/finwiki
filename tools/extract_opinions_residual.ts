#!/usr/bin/env bun

import path from 'node:path';
import {
  ensureParent,
  exists,
  extractTitle,
  getRepoContext,
  iterEntries,
  readUtf8,
  splitFrontmatter,
  toPosixRel,
  todayJst,
  writeUtf8,
} from './opinion_utils';

const INFERRED = '^[inferred]';
const HEADING = /^(#{2,4})\s+(.*\S)\s*$/;
const ANY_HEADING = /^(#{2,4})\s/;
const SUBJECTIVE_KW = /^(Counterpoints?|Open\s+questions?|蜿崎ｫ翻謇ｹ蛻､|蜿崎ｮｺ|譛ｪ隗｣豎ｺ|隲也せ|繧ｪ繝ｼ繝励Φ)/i;
const PROTECTED_KW = /^(Related|Sources|蜃ｺ蜈ｸ|蜿りポReferences|Wiki route)/i;
const PHASE15_NOTE =
  '螳｢隕ｳ wiki 譛ｬ譁・°繧牙・髮｢縺励◆荳ｻ隕ｳ逧・・螳ｹ・域耳螳壹そ繧ｯ繧ｷ繝ｧ繝ｳ / 謗ｨ隲・/ 蜿崎ｫ厄ｼ峨ょ・髢矩擇繝ｻ逶｣譟ｻ繝ｻ險域焚縺九ｉ髯､螟悶・';
const PHASE15_COMMENT_LABEL = 'Phase 1.5 霑ｽ蜉謚ｽ蜃ｺ';
const PHASE1_DOC_TITLE = '荳ｻ隕ｳ蜀・ｮｹ縺ｮ髫秘屬';
const PHASE1_SOURCE_LABEL = '蜃ｺ蜈ｸ繧ｨ繝ｳ繝医Μ繝ｼ';

function transformDocument(text: string): {
  newText: string;
  blocks: string[];
  subtrees: number;
  strayLines: number;
} {
  const [frontmatter, body] = splitFrontmatter(text);
  const lines = body.split('\n');
  const kept: string[] = [];
  const blocks: string[] = [];
  let subtrees = 0;
  let strayLines = 0;

  for (let i = 0; i < lines.length; ) {
    const line = lines[i];
    const headingMatch = line.match(HEADING);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      const protectedHeading = PROTECTED_KW.test(headingText.trim());
      const subjectiveHeading =
        headingText.includes(INFERRED) || SUBJECTIVE_KW.test(headingText.trim());
      if (subjectiveHeading && !protectedHeading) {
        let j = i + 1;
        while (j < lines.length) {
          const nextMatch = lines[j].match(ANY_HEADING);
          if (nextMatch && nextMatch[1].length <= level) {
            break;
          }
          j += 1;
        }
        blocks.push(lines.slice(i, j).join('\n').trim());
        subtrees += 1;
        i = j;
        continue;
      }
    }
    if (line.includes(INFERRED)) {
      blocks.push(line.trim());
      strayLines += 1;
      i += 1;
      continue;
    }
    kept.push(line);
    i += 1;
  }

  const newBody = `${kept.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;
  return { newText: frontmatter + newBody, blocks, subtrees, strayLines };
}

async function appendOpinions(opinionsFile: string, relPosix: string, title: string, blocks: string[]) {
  const today = todayJst();
  const body = `<!-- ${PHASE15_COMMENT_LABEL} (${today}) -->\n\n${blocks.join('\n\n')}\n`;
  if (await exists(opinionsFile)) {
    const prev = (await readUtf8(opinionsFile)).replace(/\n+$/u, '');
    await writeUtf8(opinionsFile, `${prev}\n\n${body}`);
    return;
  }
  await ensureParent(opinionsFile);
  const head =
    '---\n' +
    `title: "[opinion] ${title}"\n` +
    `source_entry: ${relPosix}\n` +
    'type: opinion-quarantine\n' +
    `moved: ${today}\n` +
    `note: ${PHASE15_NOTE}\n` +
    '---\n\n' +
    `# ${PHASE1_DOC_TITLE} ・${title}\n\n` +
    `> ${PHASE1_SOURCE_LABEL}: \`${relPosix}\`\n\n`;
  await writeUtf8(opinionsFile, `${head}${body}`);
}

async function main(): Promise<number> {
  const apply = Bun.argv.includes('--apply');
  const { root, opinionsDir } = getRepoContext(import.meta.dir);
  let files = 0;
  let subtrees = 0;
  let strayLines = 0;
  const changed: string[] = [];

  for await (const entryPath of iterEntries(root)) {
    const text = await readUtf8(entryPath);
    const candidate =
      text.includes(INFERRED) ||
      text
        .split('\n')
        .filter((line) => HEADING.test(line))
        .some((line) => {
          const match = line.match(HEADING);
          return !!match && SUBJECTIVE_KW.test(match[2].trim());
        });
    if (!candidate) {
      continue;
    }

    const { newText, blocks, subtrees: movedSubtrees, strayLines: movedStrays } =
      transformDocument(text);
    if (blocks.length === 0 || newText === text) {
      continue;
    }
    files += 1;
    subtrees += movedSubtrees;
    strayLines += movedStrays;
    const rel = toPosixRel(root, entryPath);
    changed.push(`  ${rel}  (subtrees=${movedSubtrees}, stray=${movedStrays})`);

    if (apply) {
      const title = extractTitle(text, rel);
      const opinionsFile = path.join(opinionsDir, path.relative(root, entryPath));
      await appendOpinions(opinionsFile, rel, title, blocks);
      await writeUtf8(entryPath, newText);
    }
  }

  const mode = apply ? 'APPLIED' : 'DRY-RUN';
  console.log(`=== extract_opinions_residual (${mode}) ===`);
  console.log(`entries affected: ${files}`);
  console.log(`inferred/subjective subtrees moved: ${subtrees}`);
  console.log(`stray inferred lines moved: ${strayLines}`);
  for (const line of changed.slice(0, 30)) {
    console.log(line);
  }
  if (changed.length > 30) {
    console.log(`  ... and ${changed.length - 30} more`);
  }
  return 0;
}

process.exit(await main());

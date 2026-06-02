#!/usr/bin/env bun

import path from 'node:path';
import {
  extractTitle,
  getRepoContext,
  iterEntries,
  readUtf8,
  splitFrontmatter,
  toPosixRel,
  todayJst,
  writeUtf8,
  type ExtractedBlock,
} from './opinion_utils';

const INFERRED_TAG = '^[inferred]';
const HEADING = /^#{2,4}\s/;
const SUBJECTIVE_HEADING =
  /^(#{2,4})\s*(Counterpoints?|Open\s+questions?|蜿崎ｫ翻謇ｹ蛻､|蜿崎ｮｺ|譛ｪ隗｣豎ｺ(?:縺ｮ蝠上＞)?|隲也せ|繧ｪ繝ｼ繝励Φ繧ｯ繧ｨ繧ｹ繝√Ι繝ｳ|譛ｪ隗｣蜀ｳ髣ｮ鬚・譛ｪ隗｣蜀ｳ)\s*$/i;
const PROTECTED_HEADING = /^#{2,4}\s*(Related|Sources|蜃ｺ蜈ｸ|蜿り・)\s*$/i;
const PHASE1_NOTE =
  '螳｢隕ｳ wiki 譛ｬ譁・°繧牙・髮｢縺励◆荳ｻ隕ｳ逧・・螳ｹ・域耳隲・/ Counterpoints / Open questions・峨ゆｺ句ｮ溘〒縺ｯ縺ｪ縺・◆繧∝・髢矩擇繝ｻ逶｣譟ｻ繝ｻ險域焚縺九ｉ髯､螟悶ょｰ・擂縺ｮ蛻・梵譚ｿ蝮礼畑縺ｫ菫晉蕗縲・';
const PHASE1_SECTION_LABEL_PREFIX = '謗ｨ隲・';
const PHASE1_DOC_TITLE = '荳ｻ隕ｳ蜀・ｮｹ縺ｮ髫秘屬';
const PHASE1_SOURCE_LABEL = '蜃ｺ蜈ｸ繧ｨ繝ｳ繝医Μ繝ｼ';

type Section = {
  heading: string;
  content: string[];
};

function splitSections(body: string): { preamble: string; sections: Section[] } {
  const lines = body.split('\n');
  const preamble: string[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;
  for (const line of lines) {
    if (HEADING.test(line)) {
      if (current) {
        sections.push(current);
      }
      current = { heading: line, content: [] };
      continue;
    }
    if (!current) {
      preamble.push(line);
    } else {
      current.content.push(line);
    }
  }
  if (current) {
    sections.push(current);
  }
  return { preamble: preamble.join('\n'), sections };
}

function transformDocument(text: string): {
  newText: string;
  extracted: ExtractedBlock[];
  inferredLines: number;
  subjectiveSections: number;
} {
  const [frontmatter, body] = splitFrontmatter(text);
  const { preamble, sections } = splitSections(body);
  const kept: string[] = [];
  const extracted: ExtractedBlock[] = [];
  let inferredLines = 0;
  let subjectiveSections = 0;

  for (const section of sections) {
    if (SUBJECTIVE_HEADING.test(section.heading)) {
      extracted.push({
        label: section.heading.replace(/^#+\s*/, '').trim(),
        content: section.content.join('\n').trim(),
      });
      subjectiveSections += 1;
      continue;
    }
    if (PROTECTED_HEADING.test(section.heading)) {
      kept.push([section.heading, ...section.content].join('\n'));
      continue;
    }
    const keptLines: string[] = [];
    const inferredHere: string[] = [];
    for (const line of section.content) {
      if (line.includes(INFERRED_TAG)) {
        inferredHere.push(line);
        inferredLines += 1;
      } else {
        keptLines.push(line);
      }
    }
    if (inferredHere.length > 0) {
      const label = section.heading.replace(/^#+\s*/, '').trim();
      extracted.push({
        label: `${PHASE1_SECTION_LABEL_PREFIX}(from ${label})`,
        content: inferredHere.join('\n').trim(),
      });
    }
    if (keptLines.join('').trim()) {
      kept.push([section.heading, ...keptLines].join('\n'));
    }
  }

  let newBody = `${preamble.replace(/\n+$/u, '')}\n\n${kept.map((part) => part.trim()).join('\n\n')}\n`;
  newBody = newBody.replace(/\n{3,}/g, '\n\n');
  return { newText: frontmatter + newBody, extracted, inferredLines, subjectiveSections };
}

function opinionsDoc(relPosix: string, title: string, blocks: ExtractedBlock[]): string {
  const today = todayJst();
  const head =
    '---\n' +
    `title: "[opinion] ${title}"\n` +
    `source_entry: ${relPosix}\n` +
    'type: opinion-quarantine\n' +
    `moved: ${today}\n` +
    `note: ${PHASE1_NOTE}\n` +
    '---\n\n' +
    `# ${PHASE1_DOC_TITLE} ・${title}\n\n` +
    `> ${PHASE1_SOURCE_LABEL}: \`${relPosix}\`\n\n`;
  const parts = blocks.map((block) => `## ${block.label}\n\n${block.content}`);
  return `${head}${parts.join('\n\n')}\n`;
}

async function main(): Promise<number> {
  const apply = Bun.argv.includes('--apply');
  const { root, opinionsDir } = getRepoContext(import.meta.dir);
  let totalFiles = 0;
  let totalInferred = 0;
  let totalSections = 0;
  const changed: string[] = [];

  for await (const entryPath of iterEntries(root)) {
    const text = await readUtf8(entryPath);
    const lines = text.split('\n');
    if (!text.includes(INFERRED_TAG) && !lines.some((line) => SUBJECTIVE_HEADING.test(line))) {
      continue;
    }
    const { newText, extracted, inferredLines, subjectiveSections } = transformDocument(text);
    if (extracted.length === 0 || newText === text) {
      continue;
    }
    totalFiles += 1;
    totalInferred += inferredLines;
    totalSections += subjectiveSections;
    const rel = toPosixRel(root, entryPath);
    changed.push(`  ${rel}  (inferred=${inferredLines}, sections=${subjectiveSections})`);
    if (apply) {
      const title = extractTitle(text, rel);
      const outPath = path.join(opinionsDir, path.relative(root, entryPath));
      await writeUtf8(outPath, opinionsDoc(rel, title, extracted));
      await writeUtf8(entryPath, newText);
    }
  }

  const mode = apply ? 'APPLIED' : 'DRY-RUN';
  console.log(`=== extract_opinions (${mode}) ===`);
  console.log(`entries affected: ${totalFiles}`);
  console.log(`inferred lines moved: ${totalInferred}`);
  console.log(`subjective sections moved: ${totalSections}`);
  for (const line of changed.slice(0, 25)) {
    console.log(line);
  }
  if (changed.length > 25) {
    console.log(`  ... and ${changed.length - 25} more`);
  }
  return 0;
}

process.exit(await main());

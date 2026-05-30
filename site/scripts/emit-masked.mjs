// 端到端护栏验证用: 数篇の先頭セグメントを mask し、masked テキストと masks を .cache へ。
// subagent(=LLM 役) が masked を翻訳 → verify-tr.mjs で占位符整合 + unmask の事実復元を確認。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { mask } from './protect.mjs';

const HERE = import.meta.dir;
const repo = join(HERE, '..', '..');
const cache = join(HERE, '..', '.cache');
const stripFm = (t) => t.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

mkdirSync(join(cache, 'masked'), { recursive: true });
mkdirSync(join(cache, 'masks'), { recursive: true });

const targets = [
  ['custody', 'JapanFG/custody-bank.md'],
  ['yucho', 'JapanFG/yucho.md'],
];
for (const [slug, file] of targets) {
  const body = stripFm(readFileSync(join(repo, file), 'utf8'));
  const seg = body.split('\n').slice(0, 45).join('\n'); // 先頭 45 行(TL;DR + 表)に絞る
  const { masked, masks } = mask(seg);
  writeFileSync(join(cache, 'masked', `${slug}.txt`), masked);
  writeFileSync(join(cache, 'masks', `${slug}.json`), JSON.stringify(masks));
  console.log(`${slug}: ${masks.length} masks, masked ${masked.length} chars → .cache/masked/${slug}.txt`);
}

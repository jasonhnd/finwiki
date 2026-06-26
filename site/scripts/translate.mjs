// FinWiki 翻訳管线（mask 护栏 + LLM + verify + 增量）。
// 流れ: corpus(src/content/entries) を走査 → 各篇 × {en,zh}:
//   source_hash 增量 → mask(数字/日付/[[link]]/^[marker]) → LLM 翻訳(占位符保持)
//   → verify(占位符整合 + ジャンク) → 必要なら 1 回 retry → unmask → i18n/{lang}/{path}.md へ。
// 数字・リンク・標記は mask で LLM に渡らないため破壊され得ない(spike の量级错/捏造链接を構造封じ)。
//
// 使い方:
//   ANTHROPIC_API_KEY=... bun scripts/translate.mjs                # 全量(en,zh)增量
//   ANTHROPIC_API_KEY=... bun scripts/translate.mjs --domain money-market   # 1 域だけ
//   ... --lang zh --limit 5 --force
//   ... --lang ja --paths payment-firms/paypay.md --force
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { mask, unmask, verify } from './protect.mjs';
import { I18N, REPO, walkEntries } from './corpus-roots.mjs';
import { buildTitleByRoute, localizeJapaneseBusinessTerms } from './ja-business-term-localizer.mjs';

const MODEL = process.env.FINWIKI_TRANSLATE_MODEL || 'claude-haiku-4-5-20251001';
const TARGET = { ja: '自然な日本語', en: 'English', zh: '简体中文 (Simplified Chinese)' };

const args = process.argv.slice(2);
const opt = (name, def = null) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const LANGS = (opt('lang', 'en,zh')).split(',');
const ONLY_DOMAIN = opt('domain');
const ONLY_PATHS = opt('paths')
  ?.split(',')
  .map((s) => s.trim().toLowerCase().replace(/\\/g, '/'))
  .filter(Boolean)
  .map((s) => (s.endsWith('.md') ? s : `${s}.md`));
const LIMIT = Number(opt('limit', '0')) || Infinity;
const FORCE = args.includes('--force');

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);

function splitFm(text) {
  const m = text.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/);
  return m ? [m[1], m[2]] : ['', text];
}
function fmTitle(fm) {
  const m = fm.match(/^title:\s*(.+)\s*$/m);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
}
function fmHash(fm) {
  const m = fm.match(/^source_hash:\s*(.+)\s*$/m);
  return m ? m[1].trim() : '';
}

function* walk(dir, rel = '') {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) yield* walk(join(dir, e.name), r);
    else if (e.name.endsWith('.md') && e.name !== 'INDEX.md') yield r;
  }
}

async function callLLM(maskedText, lang) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY 未设定');
  const jaRules =
    lang === 'ja'
      ? `\nJA-SPECIFIC RULES:\n` +
        `- The output is the Japanese-primary /ja mirror. It must read as natural Japanese for Japanese readers.\n` +
        `- Localize avoidable English business and finance terms into standard Japanese: wallet→ウォレット, operator→事業者／運営会社, ecosystem→経済圏, merchant→加盟店, issuer→発行会社, acquirer→アクワイアラ, settlement→決済／清算, custody→カストディ, prepaid→前払式, stored value→バリュー残高, brokerage→証券仲介, funds-transfer→資金移動, code-payment→コード決済, business model→事業モデル, retail investor→個人投資家, net operating revenue→純営業収益, underwriting→引受, solvency→ソルベンシー（支払余力）.\n` +
        `- Keep English only for international acronyms commonly used by Japanese finance readers (FSA, IPO, NISA, EPI, MDR, GMV, TPV, BNPL, PSP, MAU), foreign company / brand / product names (Visa, Mastercard, PayPay, SoftBank), and Latin registration numbers or codes.\n` +
        `- In wikilinks of the form [[❰ab❱|label]], the placeholder is the protected route target and MUST remain unchanged; translate only the human label when it contains generic business terms. Route-only wikilinks such as ❰ab❱ must remain unchanged.\n` +
        `- Copy the ## Sources section entries and URLs exactly; do not translate, reorder, or rewrite source citations.\n`
      : '';
  const system =
    `You translate a Japanese financial-wiki markdown document into ${TARGET[lang]}.\n` +
    `CRITICAL RULES:\n` +
    `1. Tokens like ❰ab❱ are PROTECTED placeholders (numbers / dates / links / markers). ` +
    `Copy every one of them EXACTLY as-is — never translate, alter, reorder, merge, or drop them.\n` +
    `2. Translate the surrounding prose literally and faithfully. Do NOT add, omit, soften, or embellish. ` +
    `Do NOT insert any translator note, comment, or self-correction.\n` +
    `3. Keep markdown structure identical (headings, table pipes, list markers, blockquotes).\n` +
    `4. Proper names (institutions, people): keep the original kanji, or use the established standard name; never invent or swap.\n` +
    `5. Output ONLY the translated markdown — no preamble, no fences.` +
    jaRules;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8192,
      temperature: 0,
      system,
      messages: [{ role: 'user', content: maskedText }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return (data.content?.[0]?.text ?? '').trim();
}

async function translateProtected(text, lang, titleByRoute) {
  const { masked, masks } = mask(text);
  let out = await callLLM(masked, lang);
  let v = verify(masked, out);
  if (!v.ok) {
    out = await callLLM(masked, lang); // 1 回 retry
    v = verify(masked, out);
  }
  const restored = unmask(out, masks);
  return {
    text:
      lang === 'ja'
        ? localizeJapaneseBusinessTerms(restored, { titleByRoute })
        : restored,
    fidelity: v.ok ? 'ok' : 'needs_review',
    v,
  };
}

async function main() {
  let done = 0;
  let reviews = 0;
  const titleByRoute = buildTitleByRoute(REPO, join(I18N, 'ja'));
  const processed = new Set();
  const writeLocalJaFromExisting = (rel, h, title, outPath) => {
    const [existingFm, existingBody] = splitFm(readFileSync(outPath, 'utf8'));
    const existingTitle = fmTitle(existingFm);
    const localizedTitle = existingTitle
      ? localizeJapaneseBusinessTerms(existingTitle, { titleByRoute })
      : title;
    const localizedBody = localizeJapaneseBusinessTerms(existingBody, { titleByRoute });
    const head =
      `---\n` +
      `source: ${rel.replace(/\.md$/, '').toLowerCase()}\n` +
      `source_hash: ${h}\n` +
      `lang: ja\n` +
      `model: local-ja-business-term-glossary\n` +
      `status: machine\n` +
      `fidelity: ok\n` +
      `title: ${JSON.stringify(localizedTitle || title)}\n` +
      `translated_at: ${new Date().toISOString()}\n` +
      `---\n`;
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, head + localizedBody.replace(/\n*$/, '') + '\n', { encoding: 'utf8' });
  };
  for (const rel of walkEntries(walk)) {
    if (done >= LIMIT) break;
    if (ONLY_DOMAIN && !rel.toLowerCase().startsWith(ONLY_DOMAIN.toLowerCase() + '/')) continue;
    if (ONLY_PATHS && !ONLY_PATHS.includes(rel.toLowerCase())) continue;
    const [fm, body] = splitFm(readFileSync(join(REPO, rel), 'utf8'));
    const title = fmTitle(fm);
    const h = sha(body);
    for (const lang of LANGS) {
      processed.add(`${lang}:${rel.toLowerCase()}`);
      const outPath = join(I18N, lang, rel.toLowerCase());
      if (!FORCE && existsSync(outPath) && readFileSync(outPath, 'utf8').includes(`source_hash: ${h}`)) {
        continue; // 增量: source 未変更
      }
      try {
        if (lang === 'ja' && !process.env.ANTHROPIC_API_KEY && existsSync(outPath)) {
          writeLocalJaFromExisting(rel, h, title, outPath);
          console.log(`ok  ${lang}  ${rel}  (local glossary)`);
          continue;
        }
        const tt = title ? await translateProtected(title, lang, titleByRoute) : { text: '', fidelity: 'ok' };
        const bt = await translateProtected(body, lang, titleByRoute);
        const fidelity = tt.fidelity === 'needs_review' || bt.fidelity === 'needs_review' ? 'needs_review' : 'ok';
        if (fidelity === 'needs_review') reviews++;
        const head =
          `---\n` +
          `source: ${rel.replace(/\.md$/, '').toLowerCase()}\n` +
          `source_hash: ${h}\n` +
          `lang: ${lang}\n` +
          `model: ${MODEL}\n` +
          `status: machine\n` +
          `fidelity: ${fidelity}\n` +
          `title: ${JSON.stringify(tt.text || title)}\n` +
          `translated_at: ${new Date().toISOString()}\n` +
          `---\n`;
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, head + bt.text + '\n', { encoding: 'utf8' });
        console.log(`${fidelity === 'ok' ? 'ok ' : 'REV'} ${lang}  ${rel}`);
      } catch (err) {
        console.error(`ERR ${lang}  ${rel}: ${err.message}`);
      }
    }
    done++;
  }
  if (ONLY_PATHS) {
    for (const rel of ONLY_PATHS) {
      for (const lang of LANGS) {
        const key = `${lang}:${rel.toLowerCase()}`;
        if (processed.has(key)) continue;
        if (lang !== 'ja') continue;
        const outPath = join(I18N, lang, rel.toLowerCase());
        if (!existsSync(outPath)) continue;
        let h = '';
        let title = '';
        const sourcePath = join(REPO, rel);
        if (existsSync(sourcePath)) {
          const [fm, body] = splitFm(readFileSync(sourcePath, 'utf8'));
          h = sha(body);
          title = fmTitle(fm);
        } else {
          const [existingFm] = splitFm(readFileSync(outPath, 'utf8'));
          h = fmHash(existingFm) || 'unknown';
          title = fmTitle(existingFm);
        }
        writeLocalJaFromExisting(rel, h, title, outPath);
        processed.add(key);
        console.log(`ok  ${lang}  ${rel}  (local glossary, path-only)`);
      }
    }
  }
  console.log(`\n完了: ${done} entries, needs_review=${reviews}`);
}

await main();

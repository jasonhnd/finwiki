# FinWiki

公開情報だけで、金融機関と制度を読むフィールドガイド。
A public-source field guide for reading financial institutions and regimes.

**[日本語で読む](https://finwiki.zksc.io/ja/)** · **[Read in English](https://finwiki.zksc.io/en/)** · **[GitHub](https://github.com/jasonhnd/finwiki)**

## 日本語

### これは何か

FinWiki は、日本と世界の金融機関・制度・市場構造を、出典付きで読むための公開ナレッジベースです。本文はインターネット公開情報、公的資料、公開開示、またはそれらに基づく分析だけを残します。

人間向けサイトは **日本語が source、英語が mirror** です。中国語の読面はありません。

### 入口

| | 行き先 | 役割 |
|---|---|---|
| 🏠 | [finwiki.zksc.io](https://finwiki.zksc.io/) | 公開ホームページ |
| 🗾 | [/ja/](https://finwiki.zksc.io/ja/) | 日本語の一次読面。まず読む → 領域 → 条目 |
| 🌐 | [/en/](https://finwiki.zksc.io/en/) | 英語ミラー。同じ読む順番 |
| 🗺️ | [INDEX.md](INDEX.md) | 領域地図と制御文書 |
| 🤖 | [llms.txt](llms.txt) · [llms-full.txt](llms-full.txt) · [ai-index.json](ai-index.json) | AI / crawler 用の機械入口 |

### いまの収録

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1617 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | 約1090万字 | Markdown 全体の空白除外 UTF-8 文字数（約 10,900,829） |
| Word-like tokens | 約175万 | English / CJK mixed corpus の近似 token count |

### 読み方

1. **ホーム** — 一文と検索、編集した「まず読む」。
2. **領域** — メガバンクなら MUFG / SMFG / みずほ FG から。
3. **条目** — 題名と要約が先。出典は各項目に残る。

カタログ（全領域、全項目、機械可読リンク）は読む導線の後ろです。

### 公開の約束

- 公開情報だけを書く。個人情報、非公開会話、顧客情報、内部案件は置かない。
- 人間向けサイトは `ja` / `en` のみ。README・CHANGELOG・release note も日英だけ。
- 公開フローは work → `pre` → 承認後に `main`。`main` へ直接 push しない。
- 詳細な運用契約は [AGENTS.md](AGENTS.md) と [docs/](docs/) にある。

### 検証

```bash
bun --version   # .bun-version と一致させる
bun run verify
```

Release title は日本語のみ。body は日本語の次に英語で、公開範囲・主要変更・検証結果・既知の注意点・次の作業を書く。

## English

### What this is

FinWiki is a public knowledge base for reading financial institutions, regimes, and market structure with sources attached. Body text is limited to public internet information, official material, public disclosures, or analysis based on those sources.

The human site is **Japanese source, English mirror**. There is no Chinese reading surface.

### Entrances

| | Where | Role |
|---|---|---|
| 🏠 | [finwiki.zksc.io](https://finwiki.zksc.io/) | Public homepage |
| 🗾 | [/ja/](https://finwiki.zksc.io/ja/) | Japanese primary reading surface: start-here → domain → entry |
| 🌐 | [/en/](https://finwiki.zksc.io/en/) | English mirror, same reading order |
| 🗺️ | [INDEX.md](INDEX.md) | Domain map and control docs |
| 🤖 | [llms.txt](llms.txt) · [llms-full.txt](llms-full.txt) · [ai-index.json](ai-index.json) | Machine-readable AI / crawler entry points |

### Coverage now

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1617 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | ~10.90M chars | ~10,900,829 non-space UTF-8 characters across Markdown |
| Word-like tokens | ~1.75M | Approximate English / CJK mixed-corpus token count |

### How to read

1. **Home** — one sentence, search, and an edited start-here list.
2. **Domain** — megabanks begin with MUFG / SMFG / Mizuho FG.
3. **Entry** — title and summary lead; sources stay on the page.

The catalog (all domains, all entries, machine files) sits behind that reading path.

### Publishing rules

- Public sources only. No personal data, private conversations, customer files, or internal case detail.
- The human site is `ja` / `en` only. README, CHANGELOG, and release notes are Japanese then English.
- Publish work → `pre` → approved `main`. Do not push `main` directly.
- The full operating contract lives in [AGENTS.md](AGENTS.md) and [docs/](docs/).

### Validation

```bash
bun --version   # must match .bun-version
bun run verify
```

Release titles are Japanese only. Release bodies put Japanese first, English second, and each language states scope, major changes, validation, known notes, and next steps.

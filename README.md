# FinWiki

<p align="center">
  <strong>公開情報だけで、金融機関と制度を読むフィールドガイド。</strong><br>
  <em>A public-source field guide for reading financial institutions and regimes.</em>
</p>

<p align="center">
  <a href="https://finwiki.zksc.io/ja/"><strong>日本語で読む</strong></a>
  &nbsp;·&nbsp;
  <a href="https://finwiki.zksc.io/en/"><strong>Read in English</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/jasonhnd/finwiki">GitHub</a>
</p>

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
| 🧭 | [HOW-TO-NAVIGATE.md](HOW-TO-NAVIGATE.md) | 初めて読む人の順路 |
| 🤖 | [llms.txt](llms.txt) · [llms-full.txt](llms-full.txt) · [ai-index.json](ai-index.json) | AI / crawler 用の機械入口 |

### まず読む

サイトと同じ短い順路です。メガバンクから制度の地図へ。

1. [三菱UFJ FG](https://finwiki.zksc.io/ja/domains/megabanks/mufg/)
2. [三井住友 FG](https://finwiki.zksc.io/ja/domains/megabanks/smfg/)
3. [みずほ FG](https://finwiki.zksc.io/ja/domains/megabanks/mizuho-fg/)
4. [金融庁](https://finwiki.zksc.io/ja/domains/financial-regulators/fsa/)
5. [日本銀行](https://finwiki.zksc.io/ja/domains/financial-regulators/boj/)
6. [銀行免許の比較](https://finwiki.zksc.io/ja/domains/banking/japan-banking-license-tier-comparison-matrix/)
7. [決済・清算インフラ](https://finwiki.zksc.io/ja/domains/payments/japan-payment-clearing-and-settlement-infrastructure/)
8. [証券市場の地図](https://finwiki.zksc.io/ja/domains/securities/japan-market-infrastructure-map/)

### 領域

40 領域の全表は [INDEX.md](INDEX.md) にあります。入口だけ先に。

| | グループ | 入口 |
|---|---|---|
| 🏦 | 日本の金融機関 | [メガバンク](megabanks/INDEX.md) · [地域銀行](regional-banks/INDEX.md) · [信金・信組](cooperative-banks/INDEX.md) · [信託](trust-banks/INDEX.md) · [生保](life-insurers/INDEX.md) · [損保](non-life-insurers/INDEX.md) · [証券会社](securities-firms/INDEX.md) · [運用](asset-managers/INDEX.md) |
| 💳 | 決済と与信 | [決済事業者](payment-firms/INDEX.md) · [カード](card-issuers/INDEX.md) · [リース](leasing-firms/INDEX.md) · [消費者金融](consumer-finance/INDEX.md) · [決済インフラ](payments/INDEX.md) |
| ⚖️ | 制度と市場 | [規制当局](financial-regulators/INDEX.md) · [免許](financial-licenses/INDEX.md) · [銀行業](banking/INDEX.md) · [証券市場](securities/INDEX.md) · [取引所](exchanges/INDEX.md) · [政策金融](policy-finance/INDEX.md) |
| 🪙 | テーマ | [フィンテック](fintech/INDEX.md) · [システム](systems/INDEX.md) · [エージェント経済](agent-economy/INDEX.md) · [保険制度](insurance/INDEX.md) · [デリバティブ](derivatives/INDEX.md) · [ストラクチャード](structured-finance/INDEX.md) |

### いまの収録

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1617 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | 約1091万字 | Markdown 全体の空白除外 UTF-8 文字数（約 10,905,148） |
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
| 🧭 | [HOW-TO-NAVIGATE.md](HOW-TO-NAVIGATE.md) | Reading order for first-time readers |
| 🤖 | [llms.txt](llms.txt) · [llms-full.txt](llms-full.txt) · [ai-index.json](ai-index.json) | Machine-readable AI / crawler entry points |

### Start here

The same short path as the site. Megabanks first, then the regime map.

1. [MUFG](https://finwiki.zksc.io/en/domains/megabanks/mufg/)
2. [SMFG](https://finwiki.zksc.io/en/domains/megabanks/smfg/)
3. [Mizuho FG](https://finwiki.zksc.io/en/domains/megabanks/mizuho-fg/)
4. [FSA](https://finwiki.zksc.io/en/domains/financial-regulators/fsa/)
5. [BOJ](https://finwiki.zksc.io/en/domains/financial-regulators/boj/)
6. [Bank-license comparison](https://finwiki.zksc.io/en/domains/banking/japan-banking-license-tier-comparison-matrix/)
7. [Payment infrastructure](https://finwiki.zksc.io/en/domains/payments/japan-payment-clearing-and-settlement-infrastructure/)
8. [Market map](https://finwiki.zksc.io/en/domains/securities/japan-market-infrastructure-map/)

### Domains

The full 40-domain table lives in [INDEX.md](INDEX.md). These are the doors.

| | Group | Doors |
|---|---|---|
| 🏦 | Japanese institutions | [Megabanks](megabanks/INDEX.md) · [Regional banks](regional-banks/INDEX.md) · [Cooperatives](cooperative-banks/INDEX.md) · [Trust banks](trust-banks/INDEX.md) · [Life](life-insurers/INDEX.md) · [Non-life](non-life-insurers/INDEX.md) · [Securities firms](securities-firms/INDEX.md) · [Asset managers](asset-managers/INDEX.md) |
| 💳 | Payments and credit | [Payment firms](payment-firms/INDEX.md) · [Card issuers](card-issuers/INDEX.md) · [Leasing](leasing-firms/INDEX.md) · [Consumer finance](consumer-finance/INDEX.md) · [Payment rails](payments/INDEX.md) |
| ⚖️ | Regime and markets | [Regulators](financial-regulators/INDEX.md) · [Licenses](financial-licenses/INDEX.md) · [Banking](banking/INDEX.md) · [Securities](securities/INDEX.md) · [Exchanges](exchanges/INDEX.md) · [Policy finance](policy-finance/INDEX.md) |
| 🪙 | Themes | [Fintech](fintech/INDEX.md) · [Systems](systems/INDEX.md) · [Agent economy](agent-economy/INDEX.md) · [Insurance](insurance/INDEX.md) · [Derivatives](derivatives/INDEX.md) · [Structured finance](structured-finance/INDEX.md) |

### Coverage now

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1617 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | ~10.91M chars | ~10,905,148 non-space UTF-8 characters across Markdown |
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

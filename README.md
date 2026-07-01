# FinWiki

## 日本語

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、公開企業・公開人物の戦略ケースを扱う公開 Markdown ナレッジベースです。本文は公開情報、公的資料、公開開示、または公開情報にもとづく分析だけで構成します。

### 数字で見る FinWiki

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1565 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1483 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | 約1047万字 | Markdown 全体の空白除外 UTF-8 文字数（約 10,469,782） |
| Word-like tokens | 約168万 | English / CJK mixed corpus の近似 token count |

### 入口

| Entry | Purpose |
|---|---|
| [finwiki.zksc.io](https://finwiki.zksc.io/) | Public homepage and repository content map |
| [/ja/](https://finwiki.zksc.io/ja/) | Japanese primary reading surface |
| [/en/](https://finwiki.zksc.io/en/) | English mirror reading surface |
| [INDEX.md](INDEX.md) | Domain map and control-document index |
| [llms.txt](llms.txt) | Compact AI / crawler guide |
| [llms-full.txt](llms-full.txt) | Full page manifest |
| [ai-index.json](ai-index.json) | Machine-readable retrieval index |

### 運用ルール

1. `README.md` と `CHANGELOG.md` は日本語と英語を同時に維持します。
2. 日本語を先に置き、英語を後に置きます。
3. サイトの公開 i18n は `ja` / `en` のみです。日本語は source、英語は mirror です。
4. `site/src/content/i18n/ja/**` と `site/src/content/i18n/en/**` は、明示された翻訳作業以外では変更しません。
5. 新しい公開言語を追加する場合は、事前に architecture decision が必要です。
6. 内容、構造、索引、公開 snapshot、運用ルールを変更した場合は、同じ作業内で `CHANGELOG.md` を更新します。
7. wiki 内容、索引、領域数、公開 snapshot を更新した場合は、`bun run ai:discovery` と `bun run release:write` を実行し、生成 surface を確認します。

### 検証

```bash
bun tools/release.ts --check --strict
bun run i18n:status
bun run docs:audit
bun run wiki:audit:ci
cd site && bun install && bun run build
cd .. && bun run html:check
git diff --check
```

### GitHub Releases

Release title は日本語のみです。Release body は日本語を先に置き、英語を後に置きます。公開範囲、主要変更、検証結果、既知の注意点、次の作業を明記します。

## English

FinWiki is a public Markdown knowledge base covering finance, payments, stablecoins, crypto assets, capital markets, Japanese financial institutions, policy finance, and strategy cases involving public companies and public figures. Body content is limited to public internet information, official material, public disclosures, or analysis based on public sources.

### FinWiki by the Numbers

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1565 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1483 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | ~10.47M chars | ~10,469,782 non-space UTF-8 characters across Markdown |
| Word-like tokens | ~1.68M | Approximate English / CJK mixed-corpus token count |

### Entrances

| Entry | Purpose |
|---|---|
| [finwiki.zksc.io](https://finwiki.zksc.io/) | Public homepage and repository content map |
| [/ja/](https://finwiki.zksc.io/ja/) | Japanese primary reading surface |
| [/en/](https://finwiki.zksc.io/en/) | English mirror reading surface |
| [INDEX.md](INDEX.md) | Domain map and control-document index |
| [llms.txt](llms.txt) | Compact AI / crawler guide |
| [llms-full.txt](llms-full.txt) | Full page manifest |
| [ai-index.json](ai-index.json) | Machine-readable retrieval index |

### Operating Rules

1. Maintain `README.md` and `CHANGELOG.md` in Japanese and English together.
2. Keep Japanese first and English second.
3. The public site i18n model supports only `ja` and `en`. Japanese is the source; English is the mirror.
4. Do not touch `site/src/content/i18n/ja/**` or `site/src/content/i18n/en/**` unless the task explicitly requires translation work.
5. Any future public language expansion requires a new architecture decision first.
6. When changing content, structure, indexes, public snapshots, or operating rules, update `CHANGELOG.md` in the same work session.
7. When wiki content, indexes, domain counts, or public snapshots change, run `bun run ai:discovery` and `bun run release:write`, then inspect generated surfaces.

### Validation

```bash
bun tools/release.ts --check --strict
bun run i18n:status
bun run docs:audit
bun run wiki:audit:ci
cd site && bun install && bun run build
cd .. && bun run html:check
git diff --check
```

### GitHub Releases

Release titles are Japanese only. Release bodies put Japanese first and English second, and must state release scope, major changes, validation results, known notes, and next steps.

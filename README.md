# FinWiki

## 日本語

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、公開企業・公開人物の戦略ケースを扱う公開 Markdown ナレッジベースです。本文は公開情報、公的資料、公開開示、または公開情報にもとづく分析だけで構成します。

### 数字で見る FinWiki

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1578 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | 約1061万字 | Markdown 全体の空白除外 UTF-8 文字数（約 10,613,259） |
| Word-like tokens | 約170万 | English / CJK mixed corpus の近似 token count |

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

1. `README.md`、`CHANGELOG.md`、release note、GitHub Release body は日本語、英語、中国語を同時に維持します。
2. 日本語を先に置き、次に英語、その後に中国語を置きます。
3. サイトの公開 i18n は `ja` / `en` のみです。日本語は source、英語は mirror です。
4. `site/src/content/i18n/ja/**` と `site/src/content/i18n/en/**` は、明示された翻訳作業以外では変更しません。
5. 新しい公開言語を追加する場合は、事前に architecture decision が必要です。
6. 内容、構造、索引、公開 snapshot、運用ルールを変更した場合は、同じ作業内で `CHANGELOG.md` を更新します。
7. wiki 内容、索引、領域数、公開 snapshot を更新した場合は、`bun run ai:discovery` と `bun run release:write` を実行し、生成 surface を確認します。
8. 静的な公開物は Astro の build output と、生成 manifest が選択した明示的な raw wiki / AI allowlist だけで構成します。開発文書、tooling、設定、hidden / ignored source file、未知の root file は公開しません。
9. local pre-push、pull request、GitHub Pages、Vercel は `.bun-version` の Bun と同じ canonical verification runner を使用します。local command は `bun run verify` で、個別 gate の成功を全体検証の代わりにしません。
10. truthfulness audit の成果物は既定で repository 外へ出力します。明示的な local output は ignored `audit-artifacts/` の下だけを許可し、corpus、discovery、API、site、publish artifact には含めません。
11. AI discovery surface は日本語 HTML canonical `/ja/{route}/`、英語 alternate `/en/{route}/`、公開 raw Markdown の明示的な `.md` URL、または static artifact 対象外 source の GitHub fallback という実 deploy contract に従います。API `external_links` は absolute HTTP(S) に正規化し、最終 assembled output の全 declared internal route URL を監査して wrong-origin も fail closed とします。exact drift gate は committed surface と固定 timestamp による一回の clean regeneration を `last_modified` まで byte 単位で比較します。更新日は full git history を第一 source、shallow / history-less builder では committed discovery date を fallback、mtime を最終 fallback とします。
12. GitHub Issues を live scope / state / dependency / ordering の唯一の真相源とします。active developer docs は番号付きの現在キューや生成済み corpus metrics を複製せず、`ai-index.json` と canonical audits を参照します。

### 検証

```bash
bun --version  # .bun-version と一致させる
bun run verify
```

### GitHub Releases

Release title は日本語のみです。Release body は日本語、英語、中国語の順に置き、各言語で公開範囲、主要変更、検証結果、既知の注意点、次の作業を明記します。

## English

FinWiki is a public Markdown knowledge base covering finance, payments, stablecoins, crypto assets, capital markets, Japanese financial institutions, policy finance, and strategy cases involving public companies and public figures. Body content is limited to public internet information, official material, public disclosures, or analysis based on public sources.

### FinWiki by the Numbers

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1578 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | ~10.61M chars | ~10,613,259 non-space UTF-8 characters across Markdown |
| Word-like tokens | ~1.70M | Approximate English / CJK mixed-corpus token count |

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

1. Maintain `README.md`, `CHANGELOG.md`, release notes, and GitHub Release bodies in Japanese, English, and Chinese together.
2. Keep Japanese first, English second, and Chinese third.
3. The public site i18n model supports only `ja` and `en`. Japanese is the source; English is the mirror.
4. Do not touch `site/src/content/i18n/ja/**` or `site/src/content/i18n/en/**` unless the task explicitly requires translation work.
5. Any future public language expansion requires a new architecture decision first.
6. When changing content, structure, indexes, public snapshots, or operating rules, update `CHANGELOG.md` in the same work session.
7. When wiki content, indexes, domain counts, or public snapshots change, run `bun run ai:discovery` and `bun run release:write`, then inspect generated surfaces.
8. Static deployment consists only of the Astro build output and an explicit raw wiki / AI allowlist selected by generated manifests. Developer docs, tooling, configuration, hidden / ignored source files, and unknown root files are not published.
9. Local pre-push, pull requests, GitHub Pages, and Vercel use the same canonical verification runner with the Bun version in `.bun-version`. The local command is `bun run verify`; a passing individual gate does not replace the full verification.
10. Truthfulness-audit artifacts default outside the repository. Explicit local output is allowed only under ignored `audit-artifacts/`, which is excluded from the corpus, discovery, API, site, and publish artifacts.
11. AI discovery surfaces follow the deployed contract: Japanese HTML canonicals at `/ja/{route}/`, English alternates at `/en/{route}/`, explicit `.md` URLs for published raw Markdown, and GitHub fallback for sources excluded from the static artifact. Normalize API `external_links` to absolute HTTP(S), audit every declared internal route URL against the final assembled output, and fail closed on a wrong origin. The exact-drift gate compares committed surfaces with one clean fixed-timestamp regeneration byte-for-byte, including `last_modified`. Full Git history remains the primary date source; shallow/history-less builders fall back to committed discovery dates, with mtime last.
12. GitHub Issues are the sole live source for scope, state, dependencies, and ordering. Active developer docs must not copy numbered current queues or generated corpus metrics; they point to `ai-index.json` and the canonical audits.

### Validation

```bash
bun --version  # must match .bun-version
bun run verify
```

### GitHub Releases

Release titles are Japanese only. Release bodies put Japanese first, English second, and Chinese third, and each language must state release scope, major changes, validation results, known notes, and next steps.

## 中文

FinWiki 是一个公开 Markdown 知识库，覆盖金融、支付、稳定币、加密资产、资本市场、日本金融机构、政策金融，以及与公开企业和公众人物有关的战略案例。正文只使用互联网公开信息、官方资料、公开披露或基于公开来源的分析。

### FinWiki 数据概览

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1578 | 公开 corpus、控制文档、模板与 release notes |
| Topical domains | 40 | [INDEX.md](INDEX.md) 中列出的领域目录 |
| Link-audited entries | 1489 | 经 `tools/wiki_link_audit.ts` 检查的条目 |
| Unresolved link issues | 0 | 发布前必须保持为零 |
| Text volume | 约1061万字 | 全库 Markdown 空白除外 UTF-8 字符数（约 10,613,259） |
| Word-like tokens | 约170万 | English / CJK mixed corpus 的近似 token count |

### 入口

| Entry | Purpose |
|---|---|
| [finwiki.zksc.io](https://finwiki.zksc.io/) | 公开首页与仓库内容地图 |
| [/ja/](https://finwiki.zksc.io/ja/) | 日文主要阅读入口 |
| [/en/](https://finwiki.zksc.io/en/) | 英文镜像阅读入口 |
| [INDEX.md](INDEX.md) | 领域地图与控制文档索引 |
| [llms.txt](llms.txt) | 精简 AI / crawler 指南 |
| [llms-full.txt](llms-full.txt) | 完整页面清单 |
| [ai-index.json](ai-index.json) | 机器可读检索索引 |

### 维护规则

1. `README.md`、`CHANGELOG.md`、release note 与 GitHub Release body 必须同时维护日文、英文和中文。
2. 顺序必须是日文在前、英文在中、中文在后。
3. 公开站点 i18n 只支持 `ja` / `en`；日文是 source，英文是 mirror。
4. 除非任务明确要求翻译工作，不修改 `site/src/content/i18n/ja/**` 或 `site/src/content/i18n/en/**`。
5. 未来若新增公开站点语言，必须先作出新的架构决策。
6. 修改内容、结构、索引、公开快照或维护规则时，必须在同一轮工作中更新 `CHANGELOG.md`。
7. 修改 wiki 内容、索引、领域数量或公开快照时，执行 `bun run ai:discovery` 与 `bun run release:write`，并检查生成 surface。
8. 静态发布物只由 Astro build output 与生成 manifest 选出的显式 raw wiki / AI allowlist 构成；开发文档、tooling、配置、hidden / ignored source file 和未知 root file 不得发布。
9. local pre-push、pull request、GitHub Pages 与 Vercel 使用 `.bun-version` 中的 Bun 和同一个 canonical verification runner；local command 是 `bun run verify`，单个 gate 通过不能替代完整验证。
10. truthfulness audit 产物默认输出到仓库外；显式 local output 只允许放在已 ignored 的 `audit-artifacts/` 下，并从 corpus、discovery、API、site 与 publish artifact 全部排除。
11. AI discovery surface 遵循实际部署契约：日文 HTML canonical 使用 `/ja/{route}/`，英文 alternate 使用 `/en/{route}/`，已发布 raw Markdown 使用显式 `.md` URL，static artifact 排除的 source fallback 到 GitHub。全部 declared internal route URL 都针对最终 assembled output 审计，API `external_links` 统一为 absolute HTTP(S)，wrong-origin 必须 fail closed。exact drift gate 将 committed surface 与一次 fixed-timestamp clean regeneration 按 byte 比较，包括 `last_modified`。更新日期仍以 full git history 为第一来源；shallow / history-less builder fallback 到 committed discovery date，mtime 只作为最后 fallback。
12. GitHub Issues 是 live scope、state、dependency 与 ordering 的唯一真相源。active developer docs 不再复制带编号的当前队列或已生成的 corpus metrics，而是引用 `ai-index.json` 与 canonical audits。

### 验证

```bash
bun --version  # 必须与 .bun-version 一致
bun run verify
```

### GitHub Releases

Release title 只使用日文。Release body 按日文、英文、中文排序，并在每种语言中写清楚发布范围、主要变更、验证结果、已知注意事项和下一步。

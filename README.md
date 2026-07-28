# FinWiki

## 日本語

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、政策金融、公開企業・公開人物の戦略ケースを扱う公開 Markdown ナレッジベースです。本文は公開情報、公的資料、公開開示、または公開情報にもとづく分析だけで構成します。

### 数字で見る FinWiki

| Metric | Current snapshot | Notes |
|---|---:|---|
| Markdown files | 1596 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | 約1086万字 | Markdown 全体の空白除外 UTF-8 文字数（約 10,855,944） |
| Word-like tokens | 約175万 | English / CJK mixed corpus の近似 token count |

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
10. truthfulness audit の成果物は既定で repository 外へ出力します。明示的な local output は ignored `audit-artifacts/` の下だけを許可し、corpus、discovery、API、site、publish artifact には含めません。scheduled audit は read-only Actions access で直前 2 回の成功 artifact を読み、summary には日付、件数、bounded trend だけを残し、machine-local path は残しません。
11. AI discovery surface は日本語 HTML canonical `/ja/{route}/`、英語 alternate `/en/{route}/`、公開 raw Markdown の明示的な `.md` URL、または static artifact 対象外 source の GitHub fallback という実 deploy contract に従います。API `external_links` は absolute HTTP(S) に正規化し、最終 assembled output の全 declared internal route URL を監査して wrong-origin も fail closed とします。exact drift gate は committed surface と固定 timestamp による一回の clean regeneration を `last_modified` まで byte 単位で比較します。更新日は full git history を第一 source、shallow / history-less builder では committed discovery date を fallback、mtime を最終 fallback とします。
12. GitHub Issues を live scope / state / dependency / ordering の唯一の真相源とします。active developer docs は番号付きの現在キューや生成済み corpus metrics を複製せず、`ai-index.json` と canonical audits を参照します。
13. canonical verification は最終 assembled artifact 内の全 HTML `href` を、各 HTML file の公開 URL を基準に解決して監査します。同一 origin の相対 / absolute URL は query と fragment を除いて、exact-case・non-empty・non-symlink regular file として存在しなければ release を阻断します。
14. 各 wiki entry の HTML head は同一 route の self-canonical、`ja` / `en` / `x-default` hreflang、per-entry JSON API と raw Markdown alternate、schema.org `Article` JSON-LD、frontmatter 由来の `finwiki:*` meta を出力します。canonical verification は build 後の全 entry language page を監査し、homepage へ退行した hreflang、欠落 metadata、JSON-LD / meta の不整合を fail closed とします。
15. 翻訳の source discovery は `i18n:status` と同じ canonical public-corpus walker を使用します。翻訳 script に領域 directory list を重複保持せず、新しい公開 domain は自動検出し、parity test と write-free prep dry-run で denominator の一致を検証します。
16. `canonical_anchor` は真の mirror page にのみ必須で、canonical anchor と通常の related page は省略します。宣言した target は解決可能で、mirror の core body からリンクされ、declared drift は release を阻断します。ページが mirror かどうかの意味的判断と reverse link は editorial review で確認します。
17. 公開フローは work branch → verified PR to `pre` → human-approved promotion PR from `pre` to `main` → production deploy → 同じ main merge commit への tag / GitHub Release です。`main` への direct push は行わず、release state は [releases/README.md](releases/README.md) で明示します。
18. article-end discovery は entry の static-path generation で一度だけ route graph を構築し、各 page へ完成済み lane を渡します。graph fingerprint は中間 entry の route、title、tag、curated `related` link の変更を検出し、`EntryLayout` は page ごとに全 collection を再取得しません。
19. fact-freshness の 45 日 `event` class は route / title に明示された lifecycle-state cue だけで推論します。本文での言及、topical tag、transaction topic、case study は単独では active event とせず、必要に応じて 90 日 `high` class に留めます。
20. factual-consistency の current-parent 抽出は、明示的な parent / shareholder label、`subsidiary of` / `owned by`、日本語の `の子会社` という方向付き文脈だけを使用します。self / peer / child / historical link を最初の link という理由で parent にせず、同じ行に複数の金額がある場合は metric label に最も近い値だけを結び付けます。
21. `candidate` entry を `active` へ変更する際は、live な公式 product / documentation / specification / production evidence で lifecycle を再確認し、`last_updated`、`last_tended`、`review_by`、`confidence` と ja / en mirror を同じ作業で同期します。公開 entry point が存在することと、個別機能の GA、adoption、market share は別の主張として扱います。
22. provenance table audit は、各行の marker / direct public link と、同一 section 内の明示的な table lead / caption / footer / source block を区別します。generic な近接 marker や遠い `## Sources` は table 全体を cover せず、完全に未出典の table は 1 件の table-level warning、source が混在する table は未 cover 行だけを warning とします。
23. `low_marker_density` の content review では、warning を消すためだけに marker を挿入せず、主張を official primary source で再確認します。registry count、membership、license、法人・親会社、取引条件、推定値を区別し、一次資料が開示しない数字・因果は確定事実として保持しません。
24. 翻訳保護では `^[...]` provenance marker 全体を URL・日付・数字より先に原子的に mask します。marker 内 URL を二重 placeholder 化せず、single-pass `unmask` の完全 round trip を single / multiple URL fixtures で固定します。

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
| Markdown files | 1596 | Public corpus, control docs, templates, and release notes |
| Topical domains | 40 | Domain directories listed in [INDEX.md](INDEX.md) |
| Link-audited entries | 1489 | Entries checked by `tools/wiki_link_audit.ts` |
| Unresolved link issues | 0 | Must stay at zero before release |
| Text volume | ~10.86M chars | ~10,855,944 non-space UTF-8 characters across Markdown |
| Word-like tokens | ~1.75M | Approximate English / CJK mixed-corpus token count |

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
10. Truthfulness-audit artifacts default outside the repository. Explicit local output is allowed only under ignored `audit-artifacts/`, which is excluded from the corpus, discovery, API, site, and publish artifacts. Scheduled audits use read-only Actions access to read the two prior successful artifacts; summaries retain only dates, counts, and a bounded trend, never machine-local paths.
11. AI discovery surfaces follow the deployed contract: Japanese HTML canonicals at `/ja/{route}/`, English alternates at `/en/{route}/`, explicit `.md` URLs for published raw Markdown, and GitHub fallback for sources excluded from the static artifact. Normalize API `external_links` to absolute HTTP(S), audit every declared internal route URL against the final assembled output, and fail closed on a wrong origin. The exact-drift gate compares committed surfaces with one clean fixed-timestamp regeneration byte-for-byte, including `last_modified`. Full Git history remains the primary date source; shallow/history-less builders fall back to committed discovery dates, with mtime last.
12. GitHub Issues are the sole live source for scope, state, dependencies, and ordering. Active developer docs must not copy numbered current queues or generated corpus metrics; they point to `ai-index.json` and the canonical audits.
13. Canonical verification resolves every HTML `href` in the final assembled artifact from that HTML file's public URL. Same-origin relative and absolute URLs must resolve, after removing query strings and fragments, to exact-case, non-empty, non-symlink regular files or the release is blocked.
14. Every wiki-entry HTML head emits a same-route self-canonical, route-equivalent `ja` / `en` / `x-default` hreflang links, per-entry JSON API and raw Markdown alternates, schema.org `Article` JSON-LD, and frontmatter-backed `finwiki:*` metadata. Canonical verification audits every built entry-language page and fails closed on homepage hreflang regressions, missing metadata, or JSON-LD/meta inconsistency.
15. Translation source discovery uses the same canonical public-corpus walker as `i18n:status`. Translation scripts do not maintain a second domain-directory list; new public domains are discovered automatically, while a parity test and write-free preparation dry-run verify the shared denominator.
16. `canonical_anchor` is required only on a true mirror page; the canonical anchor and ordinary related pages omit it. A declared target must resolve, be linked from the mirror's core body, and any declared drift blocks release. Semantic mirror classification and the reverse link remain editorial-review responsibilities.
17. The publication flow is work branch → verified PR into `pre` → human-approved promotion PR from `pre` to `main` → production deploy → tag and GitHub Release on the same main merge commit. Do not push directly to `main`; record intentional release state in [releases/README.md](releases/README.md).
18. Article-end discovery builds its route graph once during entry static-path generation and passes completed lanes to each page. The graph fingerprint detects intermediate-entry route, title, tag, and curated `related`-link changes; `EntryLayout` does not reload the full collection per page.
19. Fact freshness infers the 45-day `event` class only from explicit lifecycle-state cues in the route or title. Body mentions, topical tags, transaction topics, and case studies do not alone make a page an active event; where appropriate they remain in the 90-day `high` class.
20. Factual-consistency current-parent extraction uses only directional context: explicit parent/shareholder labels, `subsidiary of` / `owned by`, or Japanese `の子会社`. A self, peer, child, or historical link is never treated as the parent merely because it appears first, and a line with multiple amounts binds only the value nearest the metric label.
21. Before moving a `candidate` entry to `active`, recheck its lifecycle against live official product, documentation, specification, or production evidence, then synchronize `last_updated`, `last_tended`, `review_by`, `confidence`, and the ja/en mirrors in the same work unit. A public entry point does not by itself prove that every feature is GA or establish adoption or market share.
22. The provenance table audit distinguishes row-level markers / direct public links from explicit table leads, captions, footers, and source blocks in the same section. A generic nearby marker or distant `## Sources` does not cover a table; a wholly unsupported table emits one table-level warning, while a mixed-source table warns only on uncovered rows.
23. A `low_marker_density` content review does not insert a marker merely to silence a warning; it rechecks the claim against official primary sources. Distinguish registry counts, membership, licences, legal entities and parents, transaction terms, and estimates, and do not retain figures or causal claims that primary sources do not disclose as established facts.
24. Translation protection atomically masks the complete `^[...]` provenance marker before URLs, dates, and numbers. Single- and multi-URL fixtures prove a lossless one-pass `unmask` without nested placeholders inside a marker.

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
| Markdown files | 1596 | 公开 corpus、控制文档、模板与 release notes |
| Topical domains | 40 | [INDEX.md](INDEX.md) 中列出的领域目录 |
| Link-audited entries | 1489 | 经 `tools/wiki_link_audit.ts` 检查的条目 |
| Unresolved link issues | 0 | 发布前必须保持为零 |
| Text volume | 约1086万字 | 全库 Markdown 空白除外 UTF-8 字符数（约 10,855,944） |
| Word-like tokens | 约175万 | English / CJK mixed corpus 的近似 token count |

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
10. truthfulness audit 产物默认输出到仓库外；显式 local output 只允许放在已 ignored 的 `audit-artifacts/` 下，并从 corpus、discovery、API、site 与 publish artifact 全部排除。scheduled audit 使用 read-only Actions access 读取前两次成功 artifact；summary 只保留日期、数量与 bounded trend，不保留 machine-local path。
11. AI discovery surface 遵循实际部署契约：日文 HTML canonical 使用 `/ja/{route}/`，英文 alternate 使用 `/en/{route}/`，已发布 raw Markdown 使用显式 `.md` URL，static artifact 排除的 source fallback 到 GitHub。全部 declared internal route URL 都针对最终 assembled output 审计，API `external_links` 统一为 absolute HTTP(S)，wrong-origin 必须 fail closed。exact drift gate 将 committed surface 与一次 fixed-timestamp clean regeneration 按 byte 比较，包括 `last_modified`。更新日期仍以 full git history 为第一来源；shallow / history-less builder fallback 到 committed discovery date，mtime 只作为最后 fallback。
12. GitHub Issues 是 live scope、state、dependency 与 ordering 的唯一真相源。active developer docs 不再复制带编号的当前队列或已生成的 corpus metrics，而是引用 `ai-index.json` 与 canonical audits。
13. canonical verification 会以每个 HTML file 的公开 URL 为基准，解析最终 assembled artifact 中的全部 HTML `href`。同一 origin 的相对 / absolute URL 去除 query 与 fragment 后，必须对应 exact-case、non-empty、non-symlink regular file，否则阻断发布。
14. 每个 wiki entry 的 HTML head 都输出同一路由的 self-canonical、保持路由一致的 `ja` / `en` / `x-default` hreflang、per-entry JSON API 与 raw Markdown alternate、schema.org `Article` JSON-LD，以及来自 frontmatter 的 `finwiki:*` meta。canonical verification 会审计构建后的全部 entry language page；一旦 hreflang 退回语言首页、metadata 缺失或 JSON-LD / meta 不一致，就 fail closed。
15. 翻译 source discovery 与 `i18n:status` 使用同一个 canonical public-corpus walker。翻译脚本不再维护第二份领域目录列表；新增公开 domain 会被自动发现，并由 parity test 与不写文件的 prep dry-run 验证共同 denominator。
16. `canonical_anchor` 只在真正的 mirror page 上必填；canonical anchor 与普通 related page 必须省略。声明的 target 必须可解析、必须由 mirror 的 core body 链接，任何 declared drift 都会阻断 release。页面是否属于 mirror 的语义判断和 reverse link 仍由 editorial review 负责。
17. 公开流程是 work branch → verified PR 到 `pre` → 经人工批准的 `pre` 到 `main` promotion PR → production deploy → 在同一个 main merge commit 上建立 tag 与 GitHub Release。不得 direct push 到 `main`；有意的 release state 记录在 [releases/README.md](releases/README.md)。
18. article-end discovery 在 entry static-path generation 阶段只构建一次 route graph，并把已完成的 lane 传给每个页面。graph fingerprint 会检测中间 entry 的 route、title、tag 与 curated `related` link 变化；`EntryLayout` 不再为每个页面重新载入完整 collection。
19. fact freshness 只根据 route / title 中明确的 lifecycle-state cue 推断 45 天 `event` class。正文中的顺带提及、topical tag、transaction topic 与 case study 不会单独把页面判定为 active event；适用时只提升到 90 天 `high` class。
20. factual-consistency 的 current-parent 抽取只使用有方向的上下文：明确的 parent / shareholder label、`subsidiary of` / `owned by`，或日文 `の子会社`。self、peer、child、historical link 不会仅因排在首位就被当作 parent；同一行含多个金额时，只绑定离 metric label 最近的值。
21. 将 `candidate` entry 调整为 `active` 前，必须用仍可访问的官方 product、documentation、specification 或 production evidence 重新核实 lifecycle，并在同一工作单元同步 `last_updated`、`last_tended`、`review_by`、`confidence` 与 ja / en mirrors。公开入口仍然存在，并不等于所有功能都已 GA，也不能单独证明 adoption 或 market share。
22. provenance table audit 会区分逐行 marker / direct public link 与同一 section 内明确的 table lead、caption、footer 和 source block。generic 的相邻 marker 或远处 `## Sources` 不能覆盖整张表；完全无局部来源的表只输出 1 条 table-level warning，来源混合的表只警告未覆盖行。
23. `low_marker_density` content review 不能只为消除 warning 而插入 marker，必须用官方一手资料重新核对主张。要区分 registry count、membership、license、法人及母公司、交易条件与推计值；一手资料未披露的数字或因果关系，不得保留为确定事实。
24. 翻译保护会在 URL、日期与数字之前，原子化 mask 完整的 `^[...]` provenance marker。single / multiple URL fixtures 必须证明 marker 内不会产生 nested placeholders，并能用 single-pass `unmask` 完整还原。

### 验证

```bash
bun --version  # 必须与 .bun-version 一致
bun run verify
```

### GitHub Releases

Release title 只使用日文。Release body 按日文、英文、中文排序，并在每种语言中写清楚发布范围、主要变更、验证结果、已知注意事项和下一步。

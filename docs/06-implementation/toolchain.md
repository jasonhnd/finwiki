# 工具链 / Toolchain

运行时是 **Bun**（非 Node），exact version 记录在 root `.bun-version`。所有工具是 `tools/*.ts`，共享 `lib/markdown_helpers.ts`。

## tools/verify.ts（统一必需门禁）

`tools/verify.ts` 是 local pre-push、pull request、GitHub Pages 与 Vercel 共同使用的 canonical runner；local command 是 `bun run verify`。它先拒绝 `.bun-version`、`packageManager`、Vercel pin 或 runtime mismatch，以 frozen lockfile 安装 `site/` dependencies，再依次执行 release / docs / generated-surface exact regeneration / strict i18n / index / wiki / dependency / typecheck / tests / Astro / duplicate-ID / Pagefind / assembly / required-route / final-HTML-href / generated-route / diff gates。任何一步 non-zero 都立即阻断。

- default output：`_vercel_public`
- Pages parity：`bun run verify --out _site`
- focused route check：`bun tools/required_publish_routes.ts --out _site`
- final HTML href check：`bun run html:routes --out _site`（必须在 build、Pagefind、assembly 后运行）
- generated route check：`bun run ai:audit --out _site`（必须在 assembly 后运行）
- required-route smoke、full internal HTML href crawl、generated-route audit 是互补 gate，不能互相替代

## lib/markdown_helpers.ts（共享层）

不直接运行，被各工具 import。关键导出：
- `iterMarkdownFiles(root)` — 递归扫描 `.md`，跳过 `EXCLUDED_WALK_DIRS`。**所有 corpus 计数 / 发现面生成的唯一扫描入口。**
- `buildEntry()` / `entryTypeFor()` / `domainFor()` — 解析单文件成 `Entry`、分类、归属领域。
- `extractMarkdownLinks()` — 抽取 Markdown links，但过滤指向 `docs/` 的相对链接，避免内部开发文档作为 AI traversal link 输出。
- `parseDomainMap()` — 解析 `INDEX.md` 领域表。
- 常量：`CONTROL_DOCS`、`EXCLUDED_WALK_DIRS`、`AUDIT_ARTIFACT_DIR_NAME`、`SITE_URL`、`GITHUB_BLOB`、各正则。
- `publicUrlFor()` / `localizedHtmlUrlFor()` / `publishedMarkdownUrlFor()` — 统一生成日文 HTML canonical、英文 alternate 与显式 `.md` raw URL。
- `resolveWikilinkRoutes()` — 只对真实 public route set 解析 body wikilink；无法解析的 target 不输出猜测 URL。
- `lastModifiedFor()` — full-history checkout 优先读取 source path 最新 Git commit date；Git subprocess 会清除继承的 `GIT_DIR` / `GIT_WORK_TREE` / `GIT_INDEX_FILE` 等 repository-addressing context，确保 hook 内仍按传入 path 定位 repository；shallow/history-less 环境先采用 generator 从现有 `ai-index.json` 传入的合法 committed date，再尝试 shallow Git date，fs mtime 只是最终 fallback。

## tools/release.ts（总编排 + 门禁）

| 命令 | 作用 | 是否改文件 |
|---|---|---|
| `bun tools/release.ts --check` | 只读校验：先跑三语 release-document audit，再跑 link audit、算 canonical counts、查 counts 是否 in sync、verify JSON/LF/duplicate-id | 否 |
| `bun tools/release.ts --check --strict` | 同上，但 count drift 时 `EXIT=2`（**发布门禁，必须 EXIT=0**） | 否 |
| `bun tools/release.ts --write` | 三语文档 gate 通过后，跑 `generate_ai_discovery.ts` + `update_footer_timestamp.ts` + 同步 README/index.html 的 counts | **是**（会重写发现面；history 不完整时优先复用 committed discovery date，mtime 仅是最终 fallback，见 gotchas） |
| `bun tools/release.ts --write --release-note "<日本語タイトル>"` | 写入前先审计现有文档与内存中的 draft；通过后创建当天首个可用版本号的三语 release-note scaffold，再执行普通 `--write` | **是** |

`--check` 输出标记行：`[0]` release documentation、`[1]` link audit、`[2]` canonical counts（md/domains/entries/issues/chars/tokens）、`[3]` counts in sync、`[5]` verify。（`[4]` 仅 `--changelog` 时出现。）

## tools/release_documentation_audit.ts（三语发布文档门禁）

- `bun run release:docs` 可独立执行只读审计；`release.ts --check/--write` 也会在其他检查或写入前调用同一逻辑。
- `README.md` 顶层语言必须精确为 `日本語 -> English -> 中文`。
- `CHANGELOG.md` 的 Maintenance Principles 与每个日期条目必须使用同样顺序。
- 2026-07-27 及之后的 `releases/v*.md` 必须有仅日文 H1、三语 section，以及每种语言的 scope / changes / validation / known notes / next steps。更早 release note 作为历史 grandfather，不做批量改写。
- focused test 覆盖正例、语言缺失 / 错序、非日文或混合 title、必填 subsection 缺失。
- `--write --release-note "<日本語タイトル>"` 生成的 draft 本身也通过同一 audit 后才落盘；落盘后必须把 placeholder 替换为真实 release narrative。

## tools/wiki_link_audit.ts（死链审计）

- 自己 walk（用 `IGNORED_DIRS`，**不是** `EXCLUDED_WALK_DIRS`）。
- 解析每个 entry 的 `[[wikilink]]`，经 `buildAliasMap`（frontmatter `aliases`）解析，报告 `dead_wikilink_references` / `dead_wikilink_targets`。
- `--fail-on-issues` → issues>0 时 `EXIT≠0`。
- 含 `auditCanonicalAnchors()`：校验 `canonical_anchor` 是否 resolve + core-body cross-link，输出 `canonical_anchor_checked` / `canonical_anchor_drift`。不带 `--fail-on-canonical-drift` 时为 report-only；`release.ts` 始终带 `--fail-on-canonical-drift`，因此发布门禁会在 drift>0 时失败。
- 有一份**硬编码的 per-domain suggested-link map**（约 line 118-136），改领域名时要手动同步。

## tools/generate_ai_discovery.ts（发现面生成）

- 用 `iterMarkdownFiles`，生成 `robots.txt` / `sitemap.xml` / `llms.txt` / `llms-full.txt` / `ai-index.json` / `api/`。
- rendered entry 的 `url` / `html_url` 是 `/ja/<route>/`，alternate 是 `/en/<route>/`，raw source 保留 `.md`；domain index 使用 `/ja|en/domains/<domain>/`。
- 写 `api/entries/` 前会清空旧目录，再写当前 entry set，避免 domain move 后残留旧 slug JSON。
- `ai-index.json` 的 `markdown_links` 在既有 docs filter、去重与数量上限后仍保留 source-target 形式，不宣称是 deploy route；per-entry API 的 `body_links.external_links` 只保留 absolute HTTP(S)。
- `sitemap.xml` 与 per-entry API 的 `last_modified` 在 full history 中来自 Git；shallow/history-less builder 先复用现有 `ai-index.json` 的合法 source-path date，再尝试 shallow Git，最后才用 fs mtime。
- `--generated-at` / `--api-index-generated-at` 供 exact-regeneration gate 固定时间戳。
- 由 `release.ts --write` 调用，一般不单独跑（除非只想刷发现面）。

## 发现面阻断审计

- `bun run surface:drift`：在 temporary directory 用已提交的两个 `generated_at` 精确重生成；`compare_ai_discovery_outputs.ts` byte-compare 六个固定 target、完整 API JSON file set 与每个 per-entry JSON 内容（含 `metrics.last_modified`）。PASS signal：`fixed-timestamp regeneration is byte-identical (including last_modified)`。
- `bun test tools/discovery_routes.test.ts`：覆盖 URL helper contract、assembled-route positive/negative fixture、absolute-HTTP external-link filter、same-host wrong-origin、hook-like inherited `GIT_*` context 下的 shallow committed-date fallback、per-entry `last_modified` mismatch。
- `bun run ai:audit --out _site`：只读取 assembled copies；检查 route-bearing fields 与 API `external_links` 中的 same-host URL。hostname 相同但 scheme/port 不同会因 exact origin mismatch 失败；`ai-index.json` source-preserving `markdown_links` 与 external origins 不做 deploy availability claim。PASS signal：`Generated route audit passed: ... resolve in the assembled artifact.`。
- `bun run html:routes --out _site`：扫描 final assembled tree 的全部 HTML `[href]`，以 source page public URL 解析相对链接；same-origin target 去除 query / fragment 后必须是 exact-case、non-empty、non-symlink regular file。failure 会报告 source file、tag、原始 href、resolved URL 与 reason。PASS signal：`final HTML route audit: PASS`。
- `bun run verify --out _site`：先跑 exact regeneration，后 build/assemble，再跑 route audit；最终 PASS signal 是 `FinWiki required verification: PASS`。

## tools/audit_runner.ts（advisory truthfulness audit）

- `bun run audit:all --as-of YYYY-MM-DD` 默认写到 OS temporary directory。
- `--history-dir <DIR>` 会递归读取 prior `summary.json`，只把 `as_of` 与 freshness actionable count 带入 bounded three-cycle trend；连续两个 cycle 增长时 advisory threshold 才会 trip。
- repository 内显式 output 只允许 `audit-artifacts/` 或其子目录；real path 若落入其他 repository 位置会 fail。
- summary 只写 audit counts / thresholds / never-actions，不记录 repository root 或 artifact absolute path。
- `audit-artifacts/` 同时进入 gitignore、shared Markdown exclusion 与 wiki-link exclusion；CI 用 read-only Actions permission 下载前两个成功 scheduled artifacts，并在 `$RUNNER_TEMP` 中读写；publish assembler 对同名 Astro output 直接 fail。

## tools/update_footer_timestamp.ts

刷 `index.html` 等的页脚时间戳。由 `release.ts --write` 调用。

## 常用命令速查

```bash
# 发布前唯一完整门禁（必须 EXIT=0）
bun run verify

# 改了 wiki 内容后，重生成发现面 + 同步 counts
bun tools/release.ts --write

# 单独审计死链
bun tools/wiki_link_audit.ts --fail-on-issues

# 发布等价的 wikilink + canonical drift 审计
bun tools/wiki_link_audit.ts --fail-on-issues --fail-on-canonical-drift

# 只刷发现面（少用）
bun tools/generate_ai_discovery.ts
```

> ⚠️ canonical GitHub workflows 以 `fetch-depth: 0` 取得 full history。工作树中已编辑的 tracked 文件在 commit 前仍显示旧 commit date；source commit 后必须再生成并 amend 或追加 release-sync commit。shallow/history-less builder 先复用合法 committed `ai-index.json` date，mtime 不是 immediate fallback；见 [gotchas.md](../07-quality/gotchas.md)。

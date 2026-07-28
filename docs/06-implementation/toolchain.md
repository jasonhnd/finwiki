# 工具链 / Toolchain

运行时是 **Bun**（非 Node），exact version 记录在 root `.bun-version`。所有工具是 `tools/*.ts`，共享 `lib/markdown_helpers.ts`。

## tools/verify.ts（统一必需门禁）

`tools/verify.ts` 是 local pre-push、pull request、GitHub Pages 与 Vercel 共同使用的 canonical runner；local command 是 `bun run verify`。它先拒绝 `.bun-version`、`packageManager`、Vercel pin 或 runtime mismatch，以 frozen lockfile 安装 `site/` dependencies，再依次执行 release / docs / surface / AI / strict i18n / index / wiki / dependency / typecheck / tests / Astro / duplicate-ID / Pagefind / assembly / required-route / diff gates。任何一步 non-zero 都立即阻断。

- default output：`_vercel_public`
- Pages parity：`bun run verify --out _site`
- focused route check：`bun tools/required_publish_routes.ts --out _site`
- full internal HTML href crawl：Issue #183，不能用 required-route smoke check 替代

## lib/markdown_helpers.ts（共享层）

不直接运行，被各工具 import。关键导出：
- `iterMarkdownFiles(root)` — 递归扫描 `.md`，跳过 `EXCLUDED_WALK_DIRS`。**所有 corpus 计数 / 发现面生成的唯一扫描入口。**
- `buildEntry()` / `entryTypeFor()` / `domainFor()` — 解析单文件成 `Entry`、分类、归属领域。
- `extractMarkdownLinks()` — 抽取 Markdown links，但过滤指向 `docs/` 的相对链接，避免内部开发文档作为 AI traversal link 输出。
- `parseDomainMap()` — 解析 `INDEX.md` 领域表。
- 常量：`CONTROL_DOCS`、`EXCLUDED_WALK_DIRS`、`AUDIT_ARTIFACT_DIR_NAME`、`SITE_URL`、`GITHUB_BLOB`、各正则。
- `lastModifiedFor()` — 从 **fs mtime** 取 last_modified（→ 见 [gotchas.md](../07-quality/gotchas.md) 的 clone-mtime 污染）。

## tools/release.ts（总编排 + 门禁）

| 命令 | 作用 | 是否改文件 |
|---|---|---|
| `bun tools/release.ts --check` | 只读校验：先跑三语 release-document audit，再跑 link audit、算 canonical counts、查 counts 是否 in sync、verify JSON/LF/duplicate-id | 否 |
| `bun tools/release.ts --check --strict` | 同上，但 count drift 时 `EXIT=2`（**发布门禁，必须 EXIT=0**） | 否 |
| `bun tools/release.ts --write` | 三语文档 gate 通过后，跑 `generate_ai_discovery.ts` + `update_footer_timestamp.ts` + 同步 README/index.html 的 counts | **是**（会重写发现面，且依赖 mtime → clone 后慎用，见 gotchas） |
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
- 写 `api/entries/` 前会清空旧目录，再写当前 entry set，避免 domain move 后残留旧 slug JSON。
- `sitemap.xml` 的 `<lastmod>` 来自 fs mtime → clone 后会被污染（见 gotchas）。
- 由 `release.ts --write` 调用，一般不单独跑（除非只想刷发现面）。

## tools/audit_runner.ts（advisory truthfulness audit）

- `bun run audit:all --as-of YYYY-MM-DD` 默认写到 OS temporary directory。
- repository 内显式 output 只允许 `audit-artifacts/` 或其子目录；real path 若落入其他 repository 位置会 fail。
- summary 只写 audit counts / thresholds / never-actions，不记录 repository root 或 artifact absolute path。
- `audit-artifacts/` 同时进入 gitignore、shared Markdown exclusion 与 wiki-link exclusion；CI 使用 `$RUNNER_TEMP`，publish assembler 对同名 Astro output 直接 fail。

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

> ⚠️ `--write` 在 fresh clone 上直接跑会污染所有 `lastmod`。clone 后第一次发布要先恢复 mtime，见 [gotchas.md](../07-quality/gotchas.md)。

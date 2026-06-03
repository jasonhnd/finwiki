# 工具链 / Toolchain

运行时是 **Bun**（非 Node）。所有工具是 `tools/*.ts`，共享 `lib/markdown_helpers.ts`。

## lib/markdown_helpers.ts（共享层）

不直接运行，被各工具 import。关键导出：
- `iterMarkdownFiles(root)` — 递归扫描 `.md`，跳过 `EXCLUDED_WALK_DIRS`。**所有 corpus 计数 / 发现面生成的唯一扫描入口。**
- `buildEntry()` / `entryTypeFor()` / `domainFor()` — 解析单文件成 `Entry`、分类、归属领域。
- `parseDomainMap()` — 解析 `INDEX.md` 领域表。
- 常量：`CONTROL_DOCS`、`EXCLUDED_WALK_DIRS`、`SITE_URL`、`GITHUB_BLOB`、各正则。
- `lastModifiedFor()` — 从 **fs mtime** 取 last_modified（→ 见 [gotchas.md](gotchas.md) 的 clone-mtime 污染）。

## tools/release.ts（总编排 + 门禁）

| 命令 | 作用 | 是否改文件 |
|---|---|---|
| `bun tools/release.ts --check` | 只读校验：跑 link audit、算 canonical counts、查 counts 是否 in sync、verify JSON/LF/duplicate-id | 否 |
| `bun tools/release.ts --check --strict` | 同上，但 count drift 时 `EXIT=2`（**发布门禁，必须 EXIT=0**） | 否 |
| `bun tools/release.ts --write` | 跑 `generate_ai_discovery.ts` + `update_footer_timestamp.ts` + 同步 README/index.html 的 counts | **是**（会重写发现面，且依赖 mtime → clone 后慎用，见 gotchas） |

`--check` 输出标记行：`[1]` link audit、`[2]` canonical counts（md/domains/entries/issues/chars/tokens）、`[3]` counts in sync、`[5]` verify。（`[4]` 仅 `--changelog` 时出现。）

## tools/wiki_link_audit.ts（死链审计）

- 自己 walk（用 `IGNORED_DIRS`，**不是** `EXCLUDED_WALK_DIRS`）。
- 解析每个 entry 的 `[[wikilink]]`，经 `buildAliasMap`（frontmatter `aliases`）解析，报告 `dead_wikilink_references` / `dead_wikilink_targets`。
- `--fail-on-issues` → issues>0 时 `EXIT≠0`。
- 含 **report-only** 的 `auditCanonicalAnchors()`：校验 `canonical_anchor` 是否 resolve + core-body cross-link，输出 `canonical_anchor_checked` / `canonical_anchor_drift`，**不影响 issues / exit code**。
- 有一份**硬编码的 per-domain suggested-link map**（约 line 118-136），改领域名时要手动同步。

## tools/generate_ai_discovery.ts（发现面生成）

- 用 `iterMarkdownFiles`，生成 `robots.txt` / `sitemap.xml` / `llms.txt` / `llms-full.txt` / `ai-index.json` / `api/`。
- `sitemap.xml` 的 `<lastmod>` 来自 fs mtime → clone 后会被污染（见 gotchas）。
- 由 `release.ts --write` 调用，一般不单独跑（除非只想刷发现面）。

## tools/update_footer_timestamp.ts

刷 `index.html` 等的页脚时间戳。由 `release.ts --write` 调用。

## 常用命令速查

```bash
# 发布前门禁（必须 EXIT=0）
bun tools/release.ts --check --strict

# 改了 wiki 内容后，重生成发现面 + 同步 counts
bun tools/release.ts --write

# 单独审计死链
bun tools/wiki_link_audit.ts --fail-on-issues

# 只刷发现面（少用）
bun tools/generate_ai_discovery.ts
```

> ⚠️ `--write` 在 fresh clone 上直接跑会污染所有 `lastmod`。clone 后第一次发布要先恢复 mtime，见 [gotchas.md](gotchas.md)。

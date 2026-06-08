# 架构 / Architecture

## 仓库顶层结构

```
finwiki/
├── <domain>/                 # 40 个领域目录，每个含 INDEX.md + 若干 entry .md
│   └── INDEX.md              # 领域索引（domain_index）
├── JapanFG/                  # 日本金融机构 umbrella hub；实体已拆到 17 个机构类型域
├── site/                     # Astro 站点（独立 node_modules，本地通常不装）
│   └── src/
│       ├── content.config.ts # ENTRY_DOMAIN_DIRS allowlist（决定 Astro 拾取哪些领域）
│       ├── content/i18n/{ja,zh,en}/  # 机器翻译产物
│       ├── lib/siteIndex.mjs # ENTRY_DOMAIN_DIRS + 三语 DOMAIN_TITLES
│       └── i18n/groups.ts    # super-group（领域分组导航）
├── tools/*.ts                # Bun 工具链（见 toolchain.md）
├── lib/markdown_helpers.ts   # 工具共享的解析 / 扫描 / 常量
├── releases/vX.md            # 每次发布的三语 release notes（计入 corpus，但 entry_type=release_note）
├── api/                      # generate_ai_discovery 产出的 JSON API；每次写入前清理旧 entry JSON
├── docs/                     # ← 本目录：内部开发文档，已排除出 corpus
├── README.md / CHANGELOG.md / AGENTS.md / SCHEMA.md / INDEX.md  # 控制文档
├── index.html / sitemap.xml / llms.txt / llms-full.txt / ai-index.json / robots.txt  # 发现面
└── HOW-TO-NAVIGATE.md 等约定文档
```

## corpus 数据模型

`iterMarkdownFiles()`（`lib/markdown_helpers.ts`）递归扫描所有 `.md`，跳过 `EXCLUDED_WALK_DIRS`。每个文件经 `buildEntry()` 解析成 `Entry`（source_path / url / title / domain / **entry_type** / summary / headings / wikilinks / nonspace_chars / word_like_tokens / last_modified）。

`entryTypeFor(relPath)` 四分类：
| 判定 | entry_type |
|---|---|
| 在 `CONTROL_DOCS` 集合（README/CHANGELOG/AGENTS/SCHEMA/INDEX/OBSIDIAN-SETUP/wiki-link-improvement-plan） | `control_doc` |
| `releases/` 开头 | `release_note` |
| `*/INDEX.md` | `domain_index` |
| 其余 | `wiki_entry` ← 即"知识库正文条目" |

**`entries` 计数 = entry_type 为 `wiki_entry` 的文件数**（当前 1485 条由 link audit 检查的 public wiki entries）。`md` 计数 = 全部 corpus `.md`（当前 1566，含 control/release/index）。`domains` = `INDEX.md` 表里的领域行数（40）。

## domain 体系

- 领域 = 顶层目录名。`INDEX.md` 的 markdown 表（`parseDomainMap()` 解析）是**领域的唯一真相源**：每行 `| domain | count | [[domain/INDEX]] | scope |`。
- `JapanFG/INDEX` 现在是 umbrella hub；具体机构实体应写入 17 个机构类型域（megabanks / regional-banks / cooperative-banks / trust-banks / life-insurers / non-life-insurers / securities-firms / asset-managers / payment-firms / card-issuers / leasing-firms / consumer-finance / trading-company-finance / financial-conglomerates / foreign-financial-institutions / financial-regulators / financial-licenses）。
- 新增/改名领域要同步：目录本身、`INDEX.md` 表、`site/` 三处 allowlist（content.config.ts / siteIndex.mjs / groups.ts）、`tools/wiki_link_audit.ts` 的 per-domain suggested-link map。详见 [gotchas.md](../07-quality/gotchas.md) 与 CHANGELOG 中 v2026.06.03-9（governance→non-profit、manufacturing→manufacturer-finance 物理改名）。

## i18n

`site/src/content/i18n/{ja,zh,en}/<domain>/<slug>.md` 是机器翻译产物。改名领域时这三套目录要一起 `git mv`。站点按 `/{lang}/{domain}/{slug}` 路由。

## site/（Astro）

- `content.config.ts` 的 `ENTRY_DOMAIN_DIRS` 是**显式 allowlist**——只有列出的领域目录会被 glob 成 content collection。新目录（如 `docs/`）不在其中即自动不被站点拾取。
- `site/` 有独立 `node_modules`，本地通常不安装 → **无法本地验证 Astro build**，改 site 配置是盲推，靠 GitHub Actions「Deploy FinWiki」验证。

## ★ 双排除机制（最易混淆）

两套**独立**的目录排除列表，作用不同，改一个不影响另一个：

| 列表 | 位置 | 谁在用 | 作用 |
|---|---|---|---|
| `EXCLUDED_WALK_DIRS` | `lib/markdown_helpers.ts` | `iterMarkdownFiles()`（→ `release.ts` 计数、`generate_ai_discovery.ts` 发现面） | 目录**完全不进 corpus**：不计数、不进 sitemap/llms/ai-index/api |
| `IGNORED_DIRS` | `tools/wiki_link_audit.ts` | 该脚本自己的 walk | 目录**不被死链审计** |

例：`releases/` 在 `IGNORED_DIRS`（不审计死链）但**不在** `EXCLUDED_WALK_DIRS`（仍计数、仍进 sitemap，所以加一个 release note 会让 `md` +1）。`docs/`（本目录）**两个都加了** → 既不计数也不审计，完全内部。

`README.md` / `CHANGELOG.md` / release notes 可以公开说明 `docs/` 变更，但 `lib/markdown_helpers.ts` 会过滤指向 `docs/` 的 Markdown links，避免 `ai-index.json` 把内部开发文档当作 AI traversal link 暴露。

## 如何新增一个 wiki entry

1. 在对应 `<domain>/` 下建 `<slug>.md`，按 `SCHEMA.md` 写 frontmatter（title/domain/aliases/related/... ；可选 `canonical_anchor`）。
2. 正文用 `[[domain/slug]]` 写 wikilink（`buildAliasMap` 会用 frontmatter `aliases` 解析别名）。
3. 在该领域 `INDEX.md` 加一行；如果领域计数变了，`INDEX.md` 根表的 count 由 `release.ts` 不自动改——需手动核对（领域 count 来自 INDEX 表文本）。
4. 走 [release-process.md](../08-operations/release-process.md)。

# FinWiki 开发文档 / Developer Docs

> **内部开发文档，不对外发布。** 本目录 `docs/` 已注册进 `lib/markdown_helpers.ts` 的 `EXCLUDED_WALK_DIRS` 与 `tools/wiki_link_audit.ts` 的 `IGNORED_DIRS`，因此**不计入 wiki corpus（md/entries 计数）、不进 `sitemap.xml`/`llms.txt`/`ai-index.json`/`api/`、不被 Astro 站点拾取、不被死链审计**。这里写的是「如何维护这个 repo」，与公开知识库正文（domain entries）完全分离。

面向**维护者 / agent**，不面向站点访客。可以放本地路径示例、内部流程、工具细节——但仍**不要放任何密钥、个人隐私、非公开会话内容**（这是公共 GitHub repo）。

## 目录

### 参考型（系统怎么运作）

| 文档 | 内容 |
|---|---|
| [architecture.md](architecture.md) | 仓库结构、corpus 数据模型、domain / i18n / site 分层、**双排除机制**、如何新增 entry/domain |
| [toolchain.md](toolchain.md) | `tools/` 与 `lib/` 各脚本职责、命令速查表 |
| [release-process.md](release-process.md) | 发布 SOP：三语文档 → `release.ts` → commit/push/tag/`gh release` → GitHub Actions 验证 |
| [gotchas.md](gotchas.md) | 维护陷阱集（clone-mtime 污染、self-ref count、`site/` 盲推、假死链、字面 `[[ ]]` 等） |

### 进度 / 规划型（接下来做什么、做到哪了、为什么）

| 文档 | 内容 |
|---|---|
| [roadmap.md](roadmap.md) | 路线图：已完成里程碑（v5→v10）+ 近期重点（P1 canonical_anchor Phase 2 / P2 JapanFG / P3 内容扩充）+ 中长期 |
| [backlog.md](backlog.md) | 待办清单：从历史 CHANGELOG 沉淀的 open-items，带状态 / 优先级 |
| [decisions.md](decisions.md) | 架构决策记录（ADR）：物理改名 / canonical_anchor 分期 / docs 双排除 / JapanFG sub-INDEX / Astro allowlist |
| [domains.md](domains.md) | 23 领域现状表：entry 数 / 体量 / 扩充优先级 + 领域边界备忘 |

## 一句话速记

- **任何** wiki 内容 / 索引 / 领域数 / 公开快照变更 → 必须**同一 session 内**更新三语 `README.md` + `CHANGELOG.md`，跑 `bun tools/generate_ai_discovery.ts`（或 `release.ts --write` 包含它），写新的 `releases/vX.md`，push `origin/main`，更新 GitHub Release（硬性规则见根目录 `AGENTS.md`）。
- **发布门禁**：`bun tools/release.ts --check --strict` 必须 `EXIT=0`（link audit `issues=0` + counts in sync + JSON/LF/duplicate-id verify OK）。
- **`README.md` / `CHANGELOG.md` 永远三语**（日→英→中）；**GitHub Release 标题只用日文**，body 日→英→中。
- 公开正文只放公开信息；个人信息 / 本地路径 / 非公开内容禁止进 wiki 正文（`docs/` 例外，但密钥永远禁止）。

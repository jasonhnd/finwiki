# PRD - Product Requirements

## Product Summary

FinWiki 是一个公开金融知识 wiki，提供 Markdown corpus、Astro 人类站、三语 i18n、wikilink 图谱、AI discovery surface 和严格发布门禁。

## Product Capabilities

| ID | Capability | Requirement |
|---|---|---|
| PRD-001 | Domain navigation | 读者可以从 root `INDEX.md`、站点首页、domain pages 进入每个领域。 |
| PRD-002 | Entry reading | 每个 entry 应展示标题、正文、来源、wikilink、相关项和语言切换。 |
| PRD-003 | Wikilink graph | Obsidian wikilink 应解析到存在的 entry 或 domain index，死链必须被 audit 捕捉。 |
| PRD-004 | Trilingual access | `ja`、`en`、`zh` 路由应可访问；缺失 mirror 时按站点策略 fallback。 |
| PRD-005 | AI discovery | AI/crawler 可通过 `llms.txt`、`llms-full.txt`、`ai-index.json`、sitemap、API 发现条目。 |
| PRD-006 | Maintainer workflow | 维护者可以按文档完成新增、翻译、验证、发布。 |
| PRD-007 | Release transparency | 每次发布有三语 README/CHANGELOG/release note，并记录范围、验证和后续。 |
| PRD-008 | Model-agent workflow | 高推理规格模型负责需求/规格/验收，快速代码实现模型只按限定任务包写代码。 |
| PRD-009 | Human-site UI/UX | 人类站应服务日语金融读者的快速查阅，保持低噪音、可扫描、三语一致、来源和翻译状态可见。 |

## User Journeys

- Reader journey: 进入公开站点 -> 选择语言 -> 浏览 domain -> 阅读 entry -> 通过 wikilink 跳转。
- Maintainer journey: 读 docs -> 修改 corpus 或工具 -> 跑 release gate -> 更新三语发布文档 -> 提交推送。
- Spec agent journey: 读用户目标 -> 更新 BRD/PRD/ARD/FSD/NFR/RTM -> 写 acceptance -> 输出代码任务包。
- Code agent journey: 接收 task packet -> 读 source-of-truth docs -> 只改 allowed files -> 跑指定命令 -> 汇报 diff 和风险。
- AI journey: 读取 `llms.txt` -> 进入 `llms-full.txt` 或 `ai-index.json` -> 拉取 URL/API。

详见 [User Journeys](user-journeys.md)。

## Acceptance

- `bun tools/release.ts --check --strict` 通过。
- `bun tools/wiki_link_audit.ts --fail-on-issues` 通过。
- 新文档或新功能能在 [RTM](../03-requirements/rtm.md) 中追踪。
- 公开 surface 不包含 `docs/` entry。
- 代码 agent 输出能用 [Model-Agent Workflow](../06-implementation/model-agent-workflow.md) 的 review checklist 验收。
- UI/CSS/theme/layout 改动应满足 [UI/UX Principles](ui-ux-principles.md)、[UI/UX Functional Spec](../05-functional-specs/ui-ux.md) 和 [Visual QA Checklist](../07-quality/visual-qa-checklist.md)。

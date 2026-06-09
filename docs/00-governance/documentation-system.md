# Documentation System

## Purpose

FinWiki 的开发文档体系用于把维护决策从聊天记录转成可追踪、可验证、可交接的工程文档。文档结构按「治理 -> 战略 -> 产品 -> 需求 -> 架构 -> 功能规格 -> 实施 -> 质量 -> 运维」排列。

## Layers

| 层级 | 目录 | 主要问题 |
|---|---|---|
| Governance | `00-governance/` | 文档如何维护，哪些信息允许进入 repo。 |
| Strategy | `01-strategy/` | 为什么做，成功如何衡量。 |
| Product | `02-product/` | 给谁用，产品能力是什么。 |
| Requirements | `03-requirements/` | 需求、非功能要求、追踪矩阵。 |
| Architecture | `04-architecture/` | 系统边界、数据流、关键设计与 ADR。 |
| Functional Specs | `05-functional-specs/` | 各功能的行为规格与验收口径。 |
| Implementation | `06-implementation/` | 实际写作、工具、并行开发流程。 |
| Quality | `07-quality/` | 测试、QA、验收、已知陷阱。 |
| Operations | `08-operations/` | 发布、部署、维护、事故处理。 |
| Archive | `99-archive/` | 历史计划或已被新体系取代的文档。 |

## Naming

- 主干需求文档使用标准缩写：`brd.md`、`prd.md`、`nfr.md`、`rtm.md`、`ard.md`、`fsd.md`。
- 子规格使用功能名：`search.md`、`wikilink-resolution.md`、`i18n-pipeline.md`、`ui-ux.md`。
- 横切 UI/UX 主题不单独开顶级目录：产品原则放 `02-product/ui-ux-principles.md`，CSS/theme 架构放 `04-architecture/theme-system.md`，功能规格入口放 `05-functional-specs/ui-ux.md`，视觉验收放 `07-quality/visual-qa-checklist.md`。
- 归档文档保留历史标题，但只从当前入口链接到归档位置。

## Link Rules

- `docs/README.md` 必须是唯一开发文档入口。
- 新文档必须从 `docs/README.md` 链接。
- 移动文档时同步修正 `README.md`、`CHANGELOG.md`、release note、内部相对链接。
- 不保留旧路径作为跳转文件；旧路径若需解释，只能在历史记录中说明。
- 活跃文档必须使用当前代码/内容事实；旧事实只能出现在 dated release history、ADR history 或 `99-archive/`。
- 公开 control docs 可以讨论 `docs/` 变更，但生成器不得把 `docs/` 相对链接暴露为 AI surface 的可遍历 markdown links。

## Docs-First Development Model

FinWiki 的默认开发顺序是先规格、后代码：

1. 高推理规格模型负责把用户目标整理成 BRD/PRD/ARD/FSD/NFR/RTM、验收标准和代码任务包。
2. 快速代码实现模型只接收限定文件、限定命令、限定交付物的任务包。
3. 主会话或高推理 reviewer 用 RTM、acceptance criteria 和 release gate 验收代码输出。
4. 任何改变需求、架构、规格、验收或运维规则的任务，必须先更新对应文档，再让代码 agent 实施。

具体分工、任务包模板和并行上限见 [Model-Agent Workflow](../06-implementation/model-agent-workflow.md)。

GitHub Issues 是开发的驱动单位：每个非琐碎变更先以带 scope / 验收标准 / 验证 / 关闭证据的 issue 起票，并在关联实现提交与通过的验证后关闭。运营模型见 [Model-Agent Workflow](../06-implementation/model-agent-workflow.md) 的 GitHub-Issue Operating Model。


## Update Triggers

| 触发 | 必须更新 |
|---|---|
| 新增或移动开发文档 | `docs/README.md`, `CHANGELOG.md`, release note |
| 变更产品/需求/规格 | 对应主干文档, `rtm.md`, `CHANGELOG.md` |
| 变更架构/门禁/运行规则 | `ard.md` 或 `adr.md`, 相关规格, `AGENTS.md` 如适用 |
| 变更 UI/CSS/theme/layout/localization chrome | `ui-ux-principles.md`, `theme-system.md`, `ui-ux.md`, `visual-qa-checklist.md`, `rtm.md` |
| 变更模型分工、agent 并发或交接流程 | `model-agent-workflow.md`, `parallel-development.md`, `qa-checklist.md`, `AGENTS.md` 如适用 |
| 发现代码/文档/生成面事实漂移 | `documentation-drift-audit.md`, `code-doc-alignment-audit.md`, `next-development-plan.md` 如适用 |
| 变更 wiki 内容或公开 surface | 根 `README.md`, `CHANGELOG.md`, release note, discovery surface |

## Non Goals

- `docs/` 不承担公开 wiki 正文功能。
- `docs/` 不进入 sitemap、llms、ai-index、API entry 或 Astro content collection。
- `docs/` 不保存私密知识、凭据、客户背景、个人信息。

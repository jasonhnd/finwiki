# FinWiki Developer Documentation

> 本目录是内部开发文档入口，不是公开 wiki 正文。`docs/` 已排除出 corpus、Astro 站点、AI discovery surface、API manifest 与 wikilink audit；但仓库本身是公开 GitHub repo，因此这里也不得存放密钥、个人信息、客户信息、非公开对话或内部案件细节。

## How To Use This Tree

| 需求 | 先读 | 再读 |
|---|---|---|
| 判断为什么做 | [BRD](01-strategy/brd.md) | [Next Development Plan](01-strategy/next-development-plan.md), [Roadmap](01-strategy/roadmap.md), [Backlog](01-strategy/backlog.md) |
| 判断要做什么 | [PRD](02-product/prd.md) | [Information Architecture](02-product/information-architecture.md), [User Journeys](02-product/user-journeys.md), [UI/UX Principles](02-product/ui-ux-principles.md) |
| 判断约束与验收 | [NFR](03-requirements/nfr.md), [RTM](03-requirements/rtm.md) | [Documentation Drift Audit](07-quality/documentation-drift-audit.md), [Code/Docs Alignment Audit](07-quality/code-doc-alignment-audit.md), [Acceptance Criteria](07-quality/acceptance-criteria.md) |
| 判断系统怎么组织 | [ARD](04-architecture/ard.md) | [System Architecture](04-architecture/system-architecture.md), [Astro Site Architecture](04-architecture/astro-site-architecture.md), [Theme System](04-architecture/theme-system.md) |
| 判断功能怎么实现 | [FSD](05-functional-specs/fsd.md) | [UI/UX](05-functional-specs/ui-ux.md), [Search](05-functional-specs/search.md), [Wikilink Resolution](05-functional-specs/wikilink-resolution.md), [i18n Pipeline](05-functional-specs/i18n-pipeline.md) |
| 分配模型与代码任务 | [Model-Agent Workflow](06-implementation/model-agent-workflow.md) | [Parallel Development](06-implementation/parallel-development.md), [QA Checklist](07-quality/qa-checklist.md) |
| 写 entry 或并行开发 | [Entry Authoring](06-implementation/entry-authoring.md) | [Parallel Development](06-implementation/parallel-development.md), [Toolchain](06-implementation/toolchain.md) |
| 发布与故障处理 | [Release Process](08-operations/release-process.md) | [Deployment Runbook](08-operations/deployment-runbook.md), [Incident Runbook](08-operations/incident-runbook.md) |

## Documentation Map

### 00 Governance

| 文档 | 用途 |
|---|---|
| [Documentation System](00-governance/documentation-system.md) | 文档分层、命名、维护节奏、链接规则。 |
| [Glossary](00-governance/glossary.md) | FinWiki 术语、缩写、工程对象定义。 |
| [Public Information Policy](00-governance/public-information-policy.md) | 公开知识库边界、可写/不可写信息、docs 安全规则。 |
| [Risk Register](00-governance/risk-register.md) | 当前工程、内容、发布、协作风险与缓解措施。 |

### 01 Strategy

| 文档 | 用途 |
|---|---|
| [BRD](01-strategy/brd.md) | 业务目标、目标用户、价值主张、成功指标、范围边界。 |
| [Next Development Plan](01-strategy/next-development-plan.md) | 下一阶段开发顺序、任务包方向、验收标准。 |
| [Roadmap](01-strategy/roadmap.md) | 已完成里程碑、近期重点、中长期方向。 |
| [Backlog](01-strategy/backlog.md) | 待办事项、优先级、状态、验收出口。 |

### 02 Product

| 文档 | 用途 |
|---|---|
| [PRD](02-product/prd.md) | 产品能力、用户旅程、功能需求、验收口径。 |
| [Information Architecture](02-product/information-architecture.md) | corpus、domain、控制文档、站点入口的关系。 |
| [User Journeys](02-product/user-journeys.md) | 读者、维护者、agent、AI consumer 的关键路径。 |
| [UI/UX Principles](02-product/ui-ux-principles.md) | 人类站体验原则、日语用户优先、视觉语气与产品边界。 |
| [Domains](02-product/domains.md) | 领域现状、边界、扩充优先级。 |

### 03 Requirements

| 文档 | 用途 |
|---|---|
| [NFR](03-requirements/nfr.md) | 性能、可维护性、公开信息安全、可追溯性、发布门禁。 |
| [RTM](03-requirements/rtm.md) | `BRD-*` / `PRD-*` / `NFR-*` / `FSD-*` 到实现与验证的追踪矩阵。 |

### 04 Architecture

| 文档 | 用途 |
|---|---|
| [ARD](04-architecture/ard.md) | 架构原则、系统边界、数据流、关键约束、与 ADR 的关系。 |
| [System Architecture](04-architecture/system-architecture.md) | repo、corpus、domain、release、discovery 的系统结构。 |
| [Astro Site Architecture](04-architecture/astro-site-architecture.md) | `site/` 的 Astro 渲染结构与构建边界。 |
| [Theme System](04-architecture/theme-system.md) | CSS token、light/dark theme、视觉方向与组件样式边界。 |
| [Content Model](04-architecture/content-model.md) | entry、domain index、control doc、release note 的数据模型。 |
| [i18n Architecture](04-architecture/i18n-architecture.md) | 机器翻译层、source hash、fallback 与 mirror 规则。 |
| [AI Discovery Architecture](04-architecture/ai-discovery-architecture.md) | `llms*`、`ai-index.json`、API、sitemap 的生成关系。 |
| [Canonical Anchor](04-architecture/canonical-anchor.md) | mirror page 与 canonical identity 的设计规则。 |
| [ADR](04-architecture/adr.md) | 架构决策记录汇总。 |
| [JapanFG Split Design](04-architecture/japanfg-split-design.md) | JapanFG 物理拆分设计与执行记录。 |

### 05 Functional Specs

| 文档 | 用途 |
|---|---|
| [FSD](05-functional-specs/fsd.md) | 功能规格总览与子规格索引。 |
| [UI/UX](05-functional-specs/ui-ux.md) | 人类站页面、组件、交互、状态、响应式与日语 UI chrome 规格。 |
| [Site Rendering](05-functional-specs/site-rendering.md) | 语言路由、entry 页面、domain 页面、home 页面渲染规格。 |
| [Search](05-functional-specs/search.md) | 静态搜索索引、公开字段、验收规则。 |
| [Wikilink Resolution](05-functional-specs/wikilink-resolution.md) | Obsidian wikilink 解析、别名、死链、canonical drift。 |
| [i18n Pipeline](05-functional-specs/i18n-pipeline.md) | prep、mask、verify、commit translate 的功能行为。 |
| [Release Gate](05-functional-specs/release-gate.md) | `release.ts` 写入、检查、严格门禁规格。 |
| [AI Discovery Surface](05-functional-specs/ai-discovery-surface.md) | AI/crawler 可发现面输出规格。 |

### 06 Implementation

| 文档 | 用途 |
|---|---|
| [Toolchain](06-implementation/toolchain.md) | `tools/` 与 `lib/` 脚本职责和命令速查。 |
| [Entry Authoring](06-implementation/entry-authoring.md) | entry 写作规范、frontmatter、wikilink、公开信息要求。 |
| [Model-Agent Workflow](06-implementation/model-agent-workflow.md) | 高推理规格模型写规格，快速代码实现模型按任务包写代码的分工、交接包和验收规则。 |
| [Parallel Development](06-implementation/parallel-development.md) | 并行 agent file-scope、批次、收尾、风险控制。 |

### 07 Quality

| 文档 | 用途 |
|---|---|
| [Test Plan](07-quality/test-plan.md) | 常规验证命令、何时扩大测试面。 |
| [Code/Docs Alignment Audit](07-quality/code-doc-alignment-audit.md) | 当前代码、生成面与开发文档的切合度审计。 |
| [Documentation Drift Audit](07-quality/documentation-drift-audit.md) | 活跃文档、根入口、生成面与代码事实的全量漂移审计基线。 |
| [Acceptance Criteria](07-quality/acceptance-criteria.md) | 内容、结构、发布、文档变更验收标准。 |
| [QA Checklist](07-quality/qa-checklist.md) | 提交前人工检查清单。 |
| [Visual QA Checklist](07-quality/visual-qa-checklist.md) | UI/CSS/theme/layout/localization 改动的视觉验收清单。 |
| [Gotchas](07-quality/gotchas.md) | 历史踩坑与规避方法。 |

### 08 Operations

| 文档 | 用途 |
|---|---|
| [Release Process](08-operations/release-process.md) | 发布 SOP 与本地/远端验证。 |
| [Deployment Runbook](08-operations/deployment-runbook.md) | GitHub Actions / GitHub Pages 部署检查。 |
| [Maintenance Runbook](08-operations/maintenance-runbook.md) | 常态维护、计数校准、文档同步。 |
| [Incident Runbook](08-operations/incident-runbook.md) | 发布失败、死链、计数漂移、敏感信息风险的处理。 |

### 99 Archive

| 文档 | 用途 |
|---|---|
| [Site Development Plan](99-archive/site-development-plan.md) | 旧 `site/` 开发计划归档，不再作为当前计划入口。 |

## Operating Rules

- `docs/README.md` 是唯一开发文档入口；新增开发文档必须在这里挂载。
- 需求类文档使用稳定 ID：`BRD-*`、`PRD-*`、`NFR-*`、`FSD-*`。
- 能影响需求、规格、架构或运维规则的变更，必须同步更新 [RTM](03-requirements/rtm.md)。
- 能改变当前事实基线、生成面边界或下一步开发计划的变更，必须同步更新 [Documentation Drift Audit](07-quality/documentation-drift-audit.md) 或明确说明为什么不需要。
- 代码任务默认先由高推理模型维护需求/规格/验收，再把限定文件的任务包交给代码模型执行；规则见 [Model-Agent Workflow](06-implementation/model-agent-workflow.md)。
- wiki 正文、公开索引、站点行为、发布规则变更时，必须按根目录 `AGENTS.md` 同步更新 `README.md`、`CHANGELOG.md`、release note 与 discovery surface。
- 本目录保留工程事实和公开来源边界，不保存密钥、token、私有客户信息、个人隐私、非公开对话。

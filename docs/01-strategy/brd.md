# BRD - Business Requirements

## Business Context

FinWiki 以公开资料为基础，维护一个多语言、可链接、可被人类和 AI 同时发现的金融知识库。它覆盖日本金融机构、支付、资本市场、数字资产、系统基础设施、政策金融和公开企业案例。

## Business Goals

| ID | Requirement | Success Signal |
|---|---|---|
| BRD-001 | 提供可公开访问、可搜索、可追踪来源的金融知识库。 | 公开站点、sitemap、llms、ai-index 均能发现现有 corpus。 |
| BRD-002 | 降低维护者和 agent 扩充条目的认知成本。 | 新 agent 可从 `docs/README.md` 找到写作、验证、发布流程。 |
| BRD-003 | 保持双语阅读入口和机器发现入口同步。 | `README.md`、`CHANGELOG.md`、release note、generated surface 同步通过 strict gate。 |
| BRD-004 | 保持公开信息安全边界。 | 没有密钥、隐私、非公开信息进入 corpus 或开发文档。 |
| BRD-005 | 让大规模内容扩充可分批、可审计。 | 并行开发有 file-scope 约束，release gate 能发现死链和计数漂移。 |
| BRD-006 | 让模型分工可执行：高推理模型写规格，快速代码模型按任务包实现。 | 新代码任务有来源文档、允许文件、禁止文件、验证命令和 reviewer。 |

## Target Users

- 人类读者：需要理解金融机构、制度、市场结构、技术系统之间关系。
- 维护者：需要新增、修订、迁移、翻译和发布内容。
- Documentation/spec agent：需要把用户目标转成需求、规格、架构、验收和代码任务包。
- Code implementation agent：需要在明确规则下修改授权代码文件、修复、验证。
- AI / crawler：需要通过机器可读入口发现全站结构和条目关系。

## Value Proposition

- 对读者：按 domain 和 wikilink 组织公开金融知识，减少孤立页面。
- 对维护者：通过 SCHEMA、release gate、docs 体系降低回归和漂移。
- 对开发 agent：通过任务包、RTM 和验收门禁减少越界修改和反向改规格。
- 对 AI：提供 `llms.txt`、`llms-full.txt`、`ai-index.json` 与 sitemap。

## Scope Boundaries

In scope:

- 公开金融知识条目、domain index、双语 mirror、公开站点和 discovery surface。
- 开发文档、发布流程、质量门禁、并行 agent 流程。
- 模型角色分工、任务包、代码 agent 验收和并行上限。

Out of scope:

- 非公开研究、客户项目、个人资料、内部商业秘密。
- 交易建议、投资推荐、实时行情服务。
- 需要登录或私有 API 才能验证的内容。

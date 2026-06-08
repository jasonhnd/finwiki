# Risk Register

| ID | Risk | Impact | Mitigation | Owner |
|---|---|---|---|---|
| RISK-001 | 开发文档路径漂移，旧入口继续被引用。 | 新 agent 走错流程，发布时漏更新。 | `docs/README.md` 单入口；移动后跑旧路径 `rg`；RTM 记录主干文档。 | Maintainer |
| RISK-002 | `docs/` 被误纳入 corpus 或 discovery surface。 | 内部开发文档被公开站点/AI surface 当成知识条目。 | 保持 `EXCLUDED_WALK_DIRS` + `IGNORED_DIRS` 双排除；release gate 后抽查 surface。 | Maintainer |
| RISK-003 | 发布记录不足，下一轮无法判断变更边界。 | 回归定位困难，GitHub Release 不可审计。 | `CHANGELOG.md` 和 `releases/v*.md` 必须写背景、范围、步骤、验证、后续。 | Maintainer |
| RISK-004 | 公开信息边界被破坏。 | 泄露隐私或非公开信息。 | 公开信息政策、QA checklist、敏感信息 grep、人工审阅。 | Maintainer |
| RISK-005 | release write 污染 lastmod。 | sitemap/API lastmod 大面积漂移。 | fresh clone 后恢复 mtime；参考 `gotchas.md`；用 diff 审核。 | Maintainer |
| RISK-006 | i18n mirror stale 或 hash 误用。 | 多语言站点内容不一致。 | source hash 保持语义；翻译变更走 i18n pipeline；发布时抽查。 | Maintainer |
| RISK-007 | 并行 agent 越界改文件。 | unrelated diff 和冲突扩大。 | file-scope prompt、批次隔离、`git status` 对账。 | Maintainer |
| RISK-008 | 需求、架构、规格未建立追踪。 | 文档多但无法验收。 | RTM 用 ID 映射需求、实现文件、验证命令和 release note。 | Maintainer |
| RISK-009 | 代码 agent 在没有规格约束时直接修改实现或顺手改需求文档。 | 代码与产品/架构意图脱节，验收口径被实现反向污染。 | 高推理规格模型先写规格和任务包；代码实现模型只改授权文件；review 用 RTM + acceptance gate。 | Maintainer |
| RISK-010 | release-generated API 残留已迁移旧 slug。 | 旧 JSON 仍可被访问，误导 AI/API consumer。 | `generate_ai_discovery.ts` 写 API 前清空 `api/entries/`；release 后 grep 旧域/旧 slug。 | Maintainer |
| RISK-011 | README/CHANGELOG/release note 的 docs 链接进入 `ai-index.json` markdown_links。 | 内部开发文档被 AI surface 当成可遍历参考。 | `extractMarkdownLinks()` 过滤指向 `docs/` 的相对链接；surface grep 验证。 | Maintainer |

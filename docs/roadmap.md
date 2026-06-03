# 路线图 / Roadmap

> 指导「接下来做什么」。配套：[backlog.md](backlog.md)（具体待办）、[domains.md](domains.md)（领域现状）、[decisions.md](decisions.md)（决策依据）。每完成一个里程碑，在「已完成」追加一行并同步 CHANGELOG。

## 已完成里程碑（2026-06-03）

| 版本 | 里程碑 | 一句话 |
|---|---|---|
| v2026.06.03-5 | AI 任务入口死链修复 | `llms-tasks.txt` 10 处死链重映射 + 快照同步 |
| v2026.06.03-6 | 全域 INDEX 同步 + meta 整理 | 8 领域 INDEX 同步实际 entry、Lawson TOB 价格统一、Bun 迁移残留修正 |
| v2026.06.03-7 | 领域再定位 + JapanFG sub-INDEX + canonical_anchor Phase 0 | 2 领域加 disambiguation、JapanFG 9 个 tag 驱动 sub-INDEX、canonical_anchor SCHEMA 字段 + 2 pilot |
| v2026.06.03-8 | canonical_anchor 全量 back-fill + Phase 1 audit | 6 mirror pair 设 anchor（共 8）、report-only 整合性检查 |
| v2026.06.03-9 | **C-A 物理改名** | `governance`→`non-profit`、`manufacturing`→`manufacturer-finance`（含 site config + i18n + ~460 wikilink） |
| v2026.06.03-10 | **docs 开发文档系统** | `docs/` 5 文件 + 双排除 + AGENTS 规则 |

## 近期重点（P1 → P3，三方向并行推进）

### P1. canonical_anchor Phase 2

把 entity 单一真相 anchor 从「report-only 元数据」升级为「贯穿 discovery 的图边」。
- discovery 输出（`ai-index.json` / `llms-full.txt`）加 entity edge（mirror → anchor 的机器可读关系）。
- 剩余 mirror pair 全量 back-fill；修复 Saison drift（`insurance/saison-automobile-fire` 只在 Related footer 引用 anchor）。
- 评估把 `canonical_anchor` 从 optional 变 hard requirement（mirror page 必填）。
- 依据见 [decisions.md](decisions.md) ADR-002。

### P2. JapanFG 深化（631 entity）

已用 9 个机构类型 sub-INDEX 分类（megabanks-and-fg / regional-banks / cooperative-finance / trust / insurance / securities-and-asset-management / payments-cards-leasing-finance / foreign-institutions / regulators-sro-policy）。下一步：
- 各类型内的 entity 内容深化（业务模式、监管定位、集团关系）。
- 处理 9 个未分类 entity（sogo-shosha 母公司等非金融机构）。
- 不移文件（Option A，见 ADR-004），深化在原 entity 页 + sub-INDEX 内进行。

### P3. 各领域内容扩充

优先补**最薄**的领域（公开信息的金融知识条目）：
- `non-profit`(4) / `trade`(4) / `security`(6) / `corporate-strategy`(6) / `manufacturer-finance`(8) / `retail`(8)。
- `security` 先建 INDEX 标注的 4 个 planned 未建页。
- 缺口明细见 [domains.md](domains.md)。

## 中长期 / 候选

- `.txt` 系入口（`llms-tasks.txt`）的 link target 纳入 release gate（目前只审计 `.md`）。
- docs 自身扩充：CI / Vercel 部署细节、i18n 机器翻译流程、Obsidian 运用。
- HOW-TO-NAVIGATE 与各领域 INDEX 的常态化 count 校准。

## 不在范围（明确不做）

- 把个人信息 / 本地路径 / 非公开内容放进 wiki 正文（公开知识库原则，见 `AGENTS.md`）。
- 大规模 Markdown 格式重排（同步类提交保持原文形态，见 `AGENTS.md`）。

# 路线图 / Roadmap

> 指导「接下来做什么」。配套：[backlog.md](backlog.md)（具体待办）、[domains.md](domains.md)（领域现状）、[decisions.md](decisions.md)（决策依据）。每完成一个里程碑，在「已完成」追加一行并同步 CHANGELOG。

## 已完成里程碑（2026-06-04）

| 版本 | 里程碑 | 一句话 |
|---|---|---|
| v2026.06.03-5 | AI 任务入口死链修复 | `llms-tasks.txt` 10 处死链重映射 + 快照同步 |
| v2026.06.03-6 | 全域 INDEX 同步 + meta 整理 | 8 领域 INDEX 同步实际 entry、Lawson TOB 价格统一、Bun 迁移残留修正 |
| v2026.06.03-7 | 领域再定位 + JapanFG sub-INDEX + canonical_anchor Phase 0 | 2 领域加 disambiguation、JapanFG 9 个 tag 驱动 sub-INDEX、canonical_anchor SCHEMA 字段 + 2 pilot |
| v2026.06.03-8 | canonical_anchor 全量 back-fill + Phase 1 audit | 6 mirror pair 设 anchor（共 8）、report-only 整合性检查 |
| v2026.06.03-9 | **C-A 物理改名** | `governance`→`non-profit`、`manufacturing`→`manufacturer-finance`（含 site config + i18n + ~460 wikilink） |
| v2026.06.03-10 | **docs 开发文档系统** | `docs/` 5 文件 + 双排除 + AGENTS 规则 |
| v2026.06.03-11 | docs 进度/规划文档 + canonical_anchor Phase 2 起步 | docs 升为开发支柱（roadmap/backlog/domains 等）+ 修 Saison drift（第一手）|
| v2026.06.03-12 | **并行 10 领域开发（+46 entry）** | 并行 subagent 给 10 领域加 46 个公开信息 entry，entries 1420→1466；root INDEX 10 行 count 同步 disk |
| v2026.06.03-13 | canonical_anchor Phase 2 back-fill | 4 个 mirror anchor 补齐（au-jibun-bank / kampo-life / sony-life / ja-kyosairen），canonical_anchor_checked 8→12、drift=0 |
| v2026.06.04-1 | 开发文档专业化整理 | docs/ 11 文档·3 分类（参考型/规范方法型/进度规划型）+ 新增 entry-authoring / parallel-development |
| v2026.06.04-2 | **canonical_anchor Phase 2 entity edge** | discovery 输出落地机器可读 entity edge：ai-index.json `entities[]`（12 edge）+ entries[].canonical_anchor + llms-full.txt 每页 anchor 行 + llms.txt snapshot/规则；entity_anchors=12 / drift=0 |
| v2026.06.04-3 | **canonical_anchor Phase 2 hard requirement（P1 完成）** | drift 升硬门禁（`wiki_link_audit.ts --fail-on-canonical-drift`，`release.ts` 始终带）+ SCHEMA/entry-authoring 标 mirror 必填；ADR-007（slug 启发式 recall≈33% 故 gate 声明有效性而非检测 mirror） |

## 近期重点（P1 → P3，三方向并行推进）

### P1. canonical_anchor Phase 2 ✅ 全部完成（v2026.06.04-3）

把 entity 单一真相 anchor 从「report-only 元数据」升级为「贯穿 discovery 的图边」。
- ✅ 修复 Saison drift（`insurance/saison-automobile-fire` 只在 Related footer 引用 anchor）—— **v12 已完成**。
- ✅ 剩余 mirror pair 全量 back-fill —— **v13 已完成**（补 4 个 mirror anchor，现共 12 个，drift=0）。
- ✅ discovery 输出加 entity edge —— **v2026.06.04-2 已完成**。`ai-index.json` 新增 `entities[]`（12 条 edge：anchor / anchor_url / anchor_resolves / member_count / mirror_count / members[relation]）+ 每个 entry 的 `canonical_anchor` + counts `entity_anchors`=12 / `entity_mirror_pages`=12；`llms-full.txt` 每个 mirror page 加 `Canonical anchor: X -> URL` 行；`llms.txt` snapshot + AI 读解规则。全 `anchor_resolves=true`、drift=0。per-entry API（`api/entries/*.json`）是 curated subset 故刻意未含（见 backlog 未来选项）。
- ✅ canonical_anchor hard requirement + audit 升 gate —— **v2026.06.04-3 已完成**。`wiki_link_audit.ts` 加 `--fail-on-canonical-drift`，`release.ts` 始终带此 flag → 每次 `--check` / `--write` 都 gate `canonical_anchor_drift=0`（drift = 声明的 anchor 不 resolve 或正文未链回）。「mirror page 必填」写进 [SCHEMA](../SCHEMA.md) + [entry-authoring](entry-authoring.md)：mirror 与否是语义判断、无法机检（实测 slug 启发式 recall≈33%），故 gate 声明有效性 + review 兜底，依据见 [decisions.md](decisions.md) ADR-007。
- 依据见 [decisions.md](decisions.md) ADR-002 / ADR-007。

### P2. JapanFG 深化（634 entity）

已用 9 个机构类型 sub-INDEX 分类（megabanks-and-fg / regional-banks / cooperative-finance / trust / insurance / securities-and-asset-management / payments-cards-leasing-finance / foreign-institutions / regulators-sro-policy）。下一步：
- 各类型内的 entity 内容深化（业务模式、监管定位、集团关系）。
- 处理 9 个未分类 entity（sogo-shosha 母公司等非金融机构）。
- 不移文件（Option A，见 ADR-004），深化在原 entity 页 + sub-INDEX 内进行。

### P3. 各领域内容扩充

v12 已用并行 subagent 给 10 领域加 46 个公开信息 entry，多数原「薄领域」已扩充（security 6→9、corporate-strategy 6→11、manufacturer-finance 8→13、retail 8→10、money-market 12→17、loyalty 12→17、business 19→24，含 `security` 原 4 个 planned 页）。
- 现仍**最薄**且为 P3 重点：`non-profit`(6) / `trade`(6)。
- 缺口明细见 [domains.md](domains.md)。

### P4. v12 新增 46 entry 的 i18n 翻译

v12 并行新增的 46 个 entry 由 agent 生成，尚无 ja/zh/en mirror（i18n 机器翻译未生成）。补齐三语 mirror 以符合公开知识库的三语同步原则。详见 [backlog.md](backlog.md)。

## 中长期 / 候选

- `.txt` 系入口（`llms-tasks.txt`）的 link target 纳入 release gate（目前只审计 `.md`）。
- docs 自身扩充：CI / Vercel 部署细节、i18n 机器翻译流程、Obsidian 运用。
- HOW-TO-NAVIGATE 与各领域 INDEX 的常态化 count 校准。

## 不在范围（明确不做）

- 把个人信息 / 本地路径 / 非公开内容放进 wiki 正文（公开知识库原则，见 `AGENTS.md`）。
- 大规模 Markdown 格式重排（同步类提交保持原文形态，见 `AGENTS.md`）。

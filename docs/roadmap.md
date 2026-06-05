# 路线图 / Roadmap

> 指导「接下来做什么」。配套：[backlog.md](backlog.md)（具体待办）、[domains.md](domains.md)（领域现状）、[decisions.md](decisions.md)（决策依据）。每完成一个里程碑，在「已完成」追加一行并同步 CHANGELOG。

## 已完成里程碑（2026-06-05）

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
| v2026.06.04-4 | **JapanFG 17 域物理拆分** | 628 entity/license 迁出 `JapanFG/`、约 53.6k wikilink 重写、领域数 23→40、ADR-008 |
| v2026.06.04-5 | JapanFG split follow-up | 17 新域 localized `DOMAIN_TITLES` + audit route map 扩充 |
| v2026.06.05-1 | P3 最薄领域扩充 | `non-profit` 6→12、`trade` 6→12（+12 public-info entry） |
| v2026.06.05-2 | P4 i18n mirrors | 55 entry × ja/zh/en = 165 mirror，link/数字 byte 一致 |
| v2026.06.05-3 | P2 深化第 1 批 | JapanFG 拆分域 58 个 thin stubs 深化（regional-banks 48 + cooperative-banks 10） |
| v2026.06.05-4 | INDEX count 校准 | root `INDEX.md` 13 个 thematic domain count 从 +1 drift 校正到 disk 实数 |

## 近期重点（P1 → P3，三方向并行推进）

### P1. canonical_anchor Phase 2 ✅ 全部完成（v2026.06.04-3）

把 entity 单一真相 anchor 从「report-only 元数据」升级为「贯穿 discovery 的图边」。
- ✅ 修复 Saison drift（`insurance/saison-automobile-fire` 只在 Related footer 引用 anchor）—— **v12 已完成**。
- ✅ 剩余 mirror pair 全量 back-fill —— **v13 已完成**（补 4 个 mirror anchor，现共 12 个，drift=0）。
- ✅ discovery 输出加 entity edge —— **v2026.06.04-2 已完成**。`ai-index.json` 新增 `entities[]`（12 条 edge：anchor / anchor_url / anchor_resolves / member_count / mirror_count / members[relation]）+ 每个 entry 的 `canonical_anchor` + counts `entity_anchors`=12 / `entity_mirror_pages`=12；`llms-full.txt` 每个 mirror page 加 `Canonical anchor: X -> URL` 行；`llms.txt` snapshot + AI 读解规则。全 `anchor_resolves=true`、drift=0。per-entry API（`api/entries/*.json`）是 curated subset 故刻意未含（见 backlog 未来选项）。
- ✅ canonical_anchor hard requirement + audit 升 gate —— **v2026.06.04-3 已完成**。`wiki_link_audit.ts` 加 `--fail-on-canonical-drift`，`release.ts` 始终带此 flag → 每次 `--check` / `--write` 都 gate `canonical_anchor_drift=0`（drift = 声明的 anchor 不 resolve 或正文未链回）。「mirror page 必填」写进 [SCHEMA](../SCHEMA.md) + [entry-authoring](entry-authoring.md)：mirror 与否是语义判断、无法机检（实测 slug 启发式 recall≈33%），故 gate 声明有效性 + review 兜底，依据见 [decisions.md](decisions.md) ADR-007。
- 依据见 [decisions.md](decisions.md) ADR-002 / ADR-007。

### P2. JapanFG 拆分（✅ v04-4）+ 实体内容深化（进行中）

JapanFG 已**物理拆分为 17 个机构类型顶级域**（v2026.06.04-4，见 [japanfg-split-design.md](japanfg-split-design.md) / [decisions.md](decisions.md) ADR-008）。9 个未分类 entity（sogo-shosha 母公司）已在拆分映射裁定归入 `financial-conglomerates`。下一步 = 各域里 **entity 页内容深化**（业务模式 / 监管定位 / 集团关系），针对 ~110 个 <250 词的「登记簿存根」：
- ✅ **v2026.06.05-3**：`regional-banks` 48 + `cooperative-banks` 10 = **58 个存根深化**（web 核实具体事实、严守无捏造、顺手修复 split 遗留的 `[[JapanFG/INDEX]]` 旧路由）。
- 🔴 剩余 ~51 个 thin 存根：`life-insurers`(8) / `securities-firms`(8) / `asset-managers`(7) / `payment-firms`(7) / `trust-banks`(6) / `megabanks`(5) / `card-issuers`(5) + 小域（non-life / leasing / consumer-finance / regulators 各 1）。同样可并行 agent。
- 🔴 **split 旧路由批量修**：很多**非 thin** 实体页的开头 Wiki-route 仍指向 `[[JapanFG/INDEX]]`（非死链——umbrella 还在——但应指向各自新域 INDEX）。独立的导航质量清理，可脚本批量做。

### P3. 各领域内容扩充

v12 已用并行 subagent 给 10 领域加 46 个公开信息 entry，多数原「薄领域」已扩充（security 6→9、corporate-strategy 6→11、manufacturer-finance 8→13、retail 8→10、money-market 12→17、loyalty 12→17、business 19→24，含 `security` 原 4 个 planned 页）。
- ✅ 最薄 2 域扩充 —— **v2026.06.05-1 完成**：`non-profit` 6→12（社会福祉/学校/医療/宗教法人・公益法人会計基準・助成財団）、`trade` 6→12（NEXI貿易保険・通関・FTA/EPA/RCEP・電子提単・フォーフェイティング・SCF），并行 2 agent +12 entry。现无「最薄」域。
- ✅ root INDEX count 校准 —— **v2026.06.05-4 完成**：13 个 thematic domain 的 Entries 显示各 +1，已按 non-INDEX `.md` disk 实数校正；后续内容增删仍需在 Phase 2 手动对账。
- 🔴 后续 P3 = v12 双批去重（loyalty / money-market 等）。
- 缺口明细见 [domains.md](domains.md)。

### P4. v12/P3 新增 entry 的 i18n 翻译 ✅ 完成（v2026.06.05-2）

v12 并行新增 entry（43）+ v05-1 P3 entry（12）共 55 个 content entry 已生成 ja/zh/en mirror **165 file**。mirror 采用 pipeline-compatible frontmatter（`source_hash=sha256(body).slice(0,16)`、`status: machine`、`fidelity: ok`），全局检查 `checked=165 link_mismatches=0`。17 个新域 `INDEX.md` 不需要 mirror（domain landing 由 site config 生成）。

## 中长期 / 候选

- `.txt` 系入口（`llms-tasks.txt`）的 link target 纳入 release gate（目前只审计 `.md`）。
- docs 自身扩充：CI / Vercel 部署细节、i18n 机器翻译流程、Obsidian 运用。
- HOW-TO-NAVIGATE 与各领域 INDEX 的常态化 count 校准（v2026.06.05-4 已修一轮 root `INDEX.md` thematic count drift）。

## 不在范围（明确不做）

- 把个人信息 / 本地路径 / 非公开内容放进 wiki 正文（公开知识库原则，见 `AGENTS.md`）。
- 大规模 Markdown 格式重排（同步类提交保持原文形态，见 `AGENTS.md`）。

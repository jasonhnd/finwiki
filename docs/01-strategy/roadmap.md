# 路线图 / Roadmap

> 指导「接下来做什么」。配套：[backlog.md](backlog.md)（具体待办）、[domains.md](../02-product/domains.md)（领域现状）、[adr.md](../04-architecture/adr.md)（决策依据）。每完成一个里程碑，在「已完成」追加一行并同步 CHANGELOG。

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
| v2026.06.05-5 | **P2 深化第 2 批（完）** | JapanFG 拆分域剩余 50 个 thin stub 深化（11 域），**P2 thin 存根深化完成**（累计 108）|
| v2026.06.06-1 | **JapanFG split 旧路由批量修复** | 非 thin entity 页的旧 `[[JapanFG/INDEX]]` route → 各域 INDEX：575 source + 2069 i18n mirror（含 mirror `source:` 指针订正 1887）|
| 2026-06-08~09（#1–#7） | **Phase A–D tooling/ops 门禁** | `.txt` route audit (#1) / docs link checker (#2) / active-doc stale scan (#3) / generated-surface drift scan (#4) / read-only i18n status (#5) / 部署 runbook + 事故 playbook (#6/#7)。新增 5 个可重用命令（`ai:audit` / `docs:audit` / `docs:stale` / `surface:drift` / `i18n:status`）+ 修复 `llms-full.txt` 125 条坏链（生成器 `resolved_wikilinks` 解析）。 |
| 2026-06-09（#10–#12） | **GitHub-Issue 运营模型** | #10 现行 UI/UX 保留为 baseline 并关闭；#11 5 类 issue 模板 + config；#12 issue 驱动运营模型写进 `AGENTS.md` + `model-agent-workflow.md`（含 `.github` dual-exclusion）。 |
| 2026-06-09（#13 / #18） | UI baseline 文档化 + index.html 计数同步 | #13 现行 UI/UX baseline 文档（`needs-review`）；#18 index.html og/正文三语计数纳入 `release.ts` 同步、清除拆分前残留计数。 |

## 前向 Roadmap（价值阶段 · 2026-06-20 起）

### 北极星 / Thesis
**FinWiki = 日本金融的权威、公开来源、三语参考。** 一套严格溯源的语料 + 实体图，为人类读者（站点）与 AI agent（发现面）两扇门**同等一流**地渲染。**受控单人开发，不收外部贡献。** 押注：**一个可信内核，两扇同样好的门**——内核每进一分，两扇门同时受益。

### 阶段转折
**控制阶段已收官**（#1–#21：`.txt` / docs / i18n / 部署 工具门禁 + GitHub-Issue 运营模型 + UI baseline；**i18n stale 已清零** ja/zh/en=0，2026-06-19；明细见上方「已完成里程碑」与 [CHANGELOG](../../CHANGELOG.md)）。下一阶段从「控制」转向「**内核价值**」：让事实更真、结构更强、深度更够。开发由受控 agent 管线按 GitHub issue 执行（[Model-Agent Workflow](../06-implementation/model-agent-workflow.md)；规划入口 [next-development-plan.md](next-development-plan.md)）。

### 支柱（issue 挂在支柱下；规划 issue 出 packet → 解锁执行 issue）

| 支柱 | 目标 | Issue |
|---|---|---|
| **P0 内核·真实性** | 事实"还为真" + 跨页自洽 | 事实新鲜度 **#28**(设计·p1) → 实现；跨页一致性 **#30**(设计·p2) → 实现 |
| **P1 内核·结构** | 实体图 12 anchor → 数百、关系成类型化边——把散文 wiki 升级为**可查询实体知识图谱** | 实体图建全 **#29**(分阶段设计·p1) → 实现 |
| **P2 内核·深度与覆盖** | 实体页深化 + 覆盖按缺口驱动 | 深化 **#22**(packet 已出) → **#26**(Wave A-D 本地完成)；覆盖 gap-map **#32**(设计完成)；小域扩充 **#25**(已决定：无触发不扩) |
| **门面**（次要：同一内核的两种渲染） | 人类站可读性 / AI 可消费性 | 人类站 **#23**(spec + implementation 本地完成)；AI surface **#33**(设计完成)；entity-edge 深化（later） |
| **维护门禁** | 结构性新鲜度持续绿 | 域 INDEX 计数 **#24**；现有 release / i18n / link 门禁常绿 |

### 时区
- **now（agent-ready，可立即派）**：**#28 / #29 / #30** 各自的后续实现 issue（设计 unlock 后）· **#24** 域 INDEX 计数 · #23/#26/#32/#33/#34 的 publish / closeout evidence
- **next**：coverage gap-map 后续内容批次 · provenance audit / AI surface 的 build issue
- **later**：**#25** 小域扩充（已决定：无公开来源触发不扩）· AI 门面 API / entity-edge 深化

### 价值信号（在结构性门禁之外补）
- **实体图覆盖率**：`entity_anchors` / 主要实体数（现 **12** / 数百，逐批拉升；#29 定义）
- **事实新鲜度**：语料在 fact-freshness SLA 内的占比 %（#28 定义）
- **跨页一致性**：consistency audit issues = **0**（#30 定义）

### 非目标（明确不做）
**不收外部贡献**（受控单人开发；外部 PR 会打乱开发计划）· 日本核心之外的地理扩张 · 投资/交易建议或实时行情 · 需登录/私有 API 才能验证的内容 · 不服务内核的门面打磨。（另见文末「不在范围」。）

2026-06-20 planning update: Issue #22 now has a read-only execution packet, [entity-deepening-shortlist-2026-06-20.md](entity-deepening-shortlist-2026-06-20.md), with 22 candidate entity pages batched for the downstream #26 content issue.

2026-06-20 planning update: Issue #25 re-scope is documented in [small-domain-expansion-round-2-2026-06-20.md](small-domain-expansion-round-2-2026-06-20.md); decision is no further small-domain expansion until a concrete public-source trigger appears.

2026-06-20 planning update: Issue #29 canonical-entity graph design is documented in [canonical-entity-graph-design.md](../04-architecture/canonical-entity-graph-design.md). The design keeps `canonical_anchor` for mirror identity, adds a future explicit `entity_node` / `entity_edges` layer, and defines infrastructure / anchor-backfill / typed-edge build packets.

2026-06-21 planning update: Issue #30 cross-page factual-consistency audit design is documented in [cross-page-factual-consistency-audit.md](../07-quality/cross-page-factual-consistency-audit.md). The design separates consistency from freshness, uses deterministic-first entity/metric scoping, and defines a read-only audit task packet.

2026-06-21 planning update: Issue #32 Japanese-finance coverage gap-map is documented in [japanese-finance-coverage-gap-map.md](../02-product/japanese-finance-coverage-gap-map.md). The map compares should-cover vs current coverage by sub-sector, entity type and regulatory regime, then records prioritized gaps and explicit do-not-cover boundaries.

2026-06-21 planning update: Issue #33 AI surface consumability design is documented in [ai-surface-consumability-design.md](../05-functional-specs/ai-surface-consumability-design.md). The design recommends static-first per-entry API enrichment, coordinated entity-edge exposure after #29, light `llms.txt` navigability improvements and MCP deferral.

2026-06-21 planning update: Issue #34 provenance / source-completeness audit design is documented in [provenance-source-completeness-audit.md](../07-quality/provenance-source-completeness-audit.md). The design defines source-required claim categories, marker-proximity heuristics, report shape, false-positive controls and a provenance coverage value signal.

2026-06-21 UI/UX implementation update: Issue #23 reading-experience spec is documented in [human-site-reading-experience-pass.md](../05-functional-specs/human-site-reading-experience-pass.md) and implemented in `site/src/layouts/EntryLayout.astro`, `site/src/layouts/Base.astro`, and `site/src/styles/global.css`. The scoped pass preserves the approved UI baseline while improving entry-page metadata hierarchy, prose rhythm, table containment, TOC readability and mobile overflow behavior.

## 历史近期重点（P1 → P4）

### P1. canonical_anchor Phase 2 ✅ 全部完成（v2026.06.04-3）

把 entity 单一真相 anchor 从「report-only 元数据」升级为「贯穿 discovery 的图边」。
- ✅ 修复 Saison drift（`insurance/saison-automobile-fire` 只在 Related footer 引用 anchor）—— **v12 已完成**。
- ✅ 剩余 mirror pair 全量 back-fill —— **v13 已完成**（补 4 个 mirror anchor，现共 12 个，drift=0）。
- ✅ discovery 输出加 entity edge —— **v2026.06.04-2 已完成**。`ai-index.json` 新增 `entities[]`（12 条 edge：anchor / anchor_url / anchor_resolves / member_count / mirror_count / members[relation]）+ 每个 entry 的 `canonical_anchor` + counts `entity_anchors`=12 / `entity_mirror_pages`=12；`llms-full.txt` 每个 mirror page 加 `Canonical anchor: X -> URL` 行；`llms.txt` snapshot + AI 读解规则。全 `anchor_resolves=true`、drift=0。per-entry API（`api/entries/*.json`）是 curated subset 故刻意未含（见 backlog 未来选项）。
- ✅ canonical_anchor hard requirement + audit 升 gate —— **v2026.06.04-3 已完成**。`wiki_link_audit.ts` 加 `--fail-on-canonical-drift`，`release.ts` 始终带此 flag → 每次 `--check` / `--write` 都 gate `canonical_anchor_drift=0`（drift = 声明的 anchor 不 resolve 或正文未链回）。「mirror page 必填」写进 [SCHEMA](../../SCHEMA.md) + [entry-authoring](../06-implementation/entry-authoring.md)：mirror 与否是语义判断、无法机检（实测 slug 启发式 recall≈33%），故 gate 声明有效性 + review 兜底，依据见 [adr.md](../04-architecture/adr.md) ADR-007。
- 依据见 [adr.md](../04-architecture/adr.md) ADR-002 / ADR-007。

### P2. JapanFG 拆分（✅ v04-4）+ 实体内容深化（✅ 完成）

JapanFG 已**物理拆分为 17 个机构类型顶级域**（v2026.06.04-4，见 [japanfg-split-design.md](../04-architecture/japanfg-split-design.md) / [adr.md](../04-architecture/adr.md) ADR-008）。9 个未分类 entity（sogo-shosha 母公司）已在拆分映射裁定归入 `financial-conglomerates`。下一步 = 各域里 **entity 页内容深化**（业务模式 / 监管定位 / 集团关系），针对 ~110 个 <250 词的「登记簿存根」：
- ✅ **v2026.06.05-3**：`regional-banks` 48 + `cooperative-banks` 10 = **58 个存根深化**（web 核实具体事实、严守无捏造、顺手修复 split 遗留的 `[[JapanFG/INDEX]]` 旧路由）。
- ✅ **v2026.06.05-5**：剩余 **50 个 thin 存根深化完成**（`life-insurers`8 / `securities-firms`8 / `asset-managers`7 / `payment-firms`7 / `trust-banks`6 / `megabanks`5 / `card-issuers`5 + 小域 4）。8 个并行 subagent·2 batch，无捏造 web 核实并订正多处既有 stub 错误（paypay 母公司、mufg-esmart、rakuten-edy 牌照、orix-bank 牌照、nikko-am/smd-am 股东）。**至此 P2 thin 存根深化全部完成（108 个）**。
- ✅ **split 旧路由批量修** —— **v2026.06.06-1 完成**。非 thin 实体页（及其 i18n mirror）的旧 `[[JapanFG/INDEX]]` route → 各域 INDEX：575 source + 2069 mirror = 2644 file，确定性脚本一次性转换（link target source/mirror byte 一致、mirror `source:` 指针订正 1887、`source_hash` 刻意不变以保留 self-healing）。domain INDEX 的 umbrella nav 与 releases 史实保留。

### P3. 各领域内容扩充

v12 已用并行 subagent 给 10 领域加 46 个公开信息 entry，多数原「薄领域」已扩充（security 6→9、corporate-strategy 6→11、manufacturer-finance 8→13、retail 8→10、money-market 12→17、loyalty 12→17、business 19→24，含 `security` 原 4 个 planned 页）。
- ✅ 最薄 2 域扩充 —— **v2026.06.05-1 完成**：`non-profit` 6→12（社会福祉/学校/医療/宗教法人・公益法人会計基準・助成財団）、`trade` 6→12（NEXI貿易保険・通関・FTA/EPA/RCEP・電子提単・フォーフェイティング・SCF），并行 2 agent +12 entry。现无「最薄」域。
- ✅ root INDEX count 校准 —— **v2026.06.05-4 完成**：13 个 thematic domain 的 Entries 显示各 +1，已按 non-INDEX `.md` disk 实数校正；后续内容增删仍需在 Phase 2 手动对账。
- 🟡 后续 P3 = v12 双批去重（loyalty / money-market 等）—— **GitHub #8（内容）/ #15（规划任务包）**。
- 缺口明细见 [domains.md](../02-product/domains.md)。

### P4. v12/P3 新增 entry 的 i18n 翻译 ✅ 完成（v2026.06.05-2）

v12 并行新增 entry（43）+ v05-1 P3 entry（12）共 55 个 content entry 已生成 ja/zh/en mirror **165 file**。mirror 采用 pipeline-compatible frontmatter（`source_hash=sha256(body).slice(0,16)`、`status: machine`、`fidelity: ok`），全局检查 `checked=165 link_mismatches=0`。17 个新域 `INDEX.md` 不需要 mirror（domain landing 由 site config 生成）。

## 中长期 / 候选

- ✅ `.txt` 系入口的 link target 审计 —— **GitHub #1 完成**（`ai:audit` / `tools/txt_route_audit.ts`，可后续接入 release gate）。
- ✅ docs 自身工具化（docs link checker / active-doc stale scan / generated-surface drift scan / read-only i18n status）—— **GitHub #2–#5 完成**；部署 runbook + 事故 playbook 见 #6/#7。
- HOW-TO-NAVIGATE 与各领域 INDEX 的常态化 count 校准（v2026.06.05-4 已修一轮 root `INDEX.md` thematic count drift）。

## 不在范围（明确不做）

- 把个人信息 / 本地路径 / 非公开内容放进 wiki 正文（公开知识库原则，见 `AGENTS.md`）。
- 大规模 Markdown 格式重排（同步类提交保持原文形态，见 `AGENTS.md`）。

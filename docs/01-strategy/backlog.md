# 待办清单 / Backlog

> 一站式 open-items，沉淀自历史 CHANGELOG 的「次の作業 / 既知の注意点」。状态：🔴 未开始 / 🟡 进行中 / 🟢 近期完成可移除。完成后移到 [roadmap.md](roadmap.md) 的「已完成」并从此处删。

## 当前优先级（GitHub Issues 驱动）

> 2026-06-09 起，开发由 GitHub Issues 驱动（见 [Model-Agent Workflow](../06-implementation/model-agent-workflow.md) 的 GitHub-Issue Operating Model）。**GitHub issue 状态是真相源**（`gh issue list`）。**当前 open：#22–#26 / #28–#30（8 项，见下）**；#27 已撤（受控开发、不收外部贡献）；#1–#21 全部关闭。前向支柱与时区见 [roadmap.md](roadmap.md) 的「前向 Roadmap（价值阶段）」。下表含当前 open 项 + 最近一轮完结快照。

| 状态 | GitHub | 项目 | 备注 |
|---|---|---|---|
| 🟡 next·p1 | #29 | 实体图建全 设计（P1 结构, planning, agent-ready） | Design drafted: [canonical-entity-graph-design.md](../04-architecture/canonical-entity-graph-design.md)。`canonical_anchor` 保持 mirror identity；新增 future `entity_node` / `entity_edges` 层和 3 个 build packet；publish / issue close pending。 |
| 🔴 next·p1 | #28 | fact freshness / source recheck 设计（P0 真实性, planning） | 设计 corpus 事实衰减信号、review cadence、read-only report command 与 build task packet；不实现工具。 |
| 🔴 next | #30 | 跨页事实一致性审计 设计（P0 真实性, planning） | 同实体/数字/日期跨页是否自洽；现门禁不查；出设计 + packet。 |
| 🟡 next | #22 | 实体深化批次规划（P2 深度, planning） | Task packet drafted: [entity-deepening-shortlist-2026-06-20.md](entity-deepening-shortlist-2026-06-20.md)。22 个候选页分 4 波；publish / issue close pending。 |
| 🔴 next | #24 | 域 INDEX entry 计数校验（维护门禁, tooling） | per-domain INDEX count 漂移 CI 现抓不到；加校验 + 可选 `--write` 同步。 |
| 🔴 later | #26 | 内容深化执行（content, **blocked** by #22） | 以 [#22 shortlist](entity-deepening-shortlist-2026-06-20.md) 为执行包；先做 Wave A 或由 maintainer 拆小批。 |
| 🔴 later | #23 | 人类版 UI 阅读体验（uiux, **needs-spec**） | 编辑型金融参考方向；实现前先补规格。 |
| 🟡 later | #25 | 小域扩充 round 2（planning） | Decision drafted: [small-domain-expansion-round-2-2026-06-20.md](small-domain-expansion-round-2-2026-06-20.md)。结论：当前不再新增小域页面。 |
| 🟢 | #1–#7 | Phase A–D tooling/ops 门禁 | `.txt` route audit / docs link checker / active-doc stale scan / generated-surface drift scan / read-only i18n status / 部署 runbook + 事故 playbook。命令见 `package.json`（`ai:audit` / `docs:audit` / `docs:stale` / `surface:drift` / `i18n:status`）。 |
| 🟢 | #10–#13 / #18 | UI baseline + 运营模型 + 模板 + 计数同步 | #10 现行 UI/UX baseline；#11/#12 GitHub-Issue 运营模型 + issue 模板；#13 UI/UX baseline 文档；#18 index.html og/正文三语计数纳入 `release.ts` 同步。 |
| 🟢 | #14–#17 | 规划 / 对账任务包 | #14 backlog/roadmap 对账；#15 v12 双批去重任务包；#16 小域扩充候选清单；#17 i18n 刷新批次规划。 |
| 🟢 | #8 / #9 | Phase E 内容 | #8 v12 双批去重（3 合并、退役 3 页）；#9 日本信托业 license stack 页。 |
| 🟢 | #19 / #20 / #21 | i18n 批次 | #19 financial-licenses 镜像迁移；#20 cooperative-banks 缺译 + 清 en needs_review；#21 stale 分类 + 刷新（C-1 re-sync / C-2a remap / C-2b 重译）。 |
| 🟢 | — | **i18n stale 清零（2026-06-19）** | #21 后残余 + 两波 benign-drift + 9 个 pre-rename `source:` pointer 全部 opus 重译。`i18n:status` **stale ja/zh/en = 0/0/0**（current=1436、fidelity ok、orphaned/missing/drift 全 0）。详见 [CHANGELOG](../../CHANGELOG.md)。 |

## historical canonical_anchor（P1）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | Saison drift 修复 | **v12 完成**。`insurance/saison-automobile-fire` core body 已引用 anchor，`canonical_anchor_drift=0`。 |
| 🟢 | 剩余 mirror pair 全量 back-fill | **v13 完成**。补 4 个 mirror anchor（au-jibun-bank / kampo-life / sony-life / ja-kyosairen），现共 12 个，`canonical_anchor_checked=8→12`、drift=0。 |
| 🟢 | discovery 输出 entity edge | **v2026.06.04-2 完成**。`ai-index.json` 新增 `entities[]`（12 edge: anchor/anchor_url/anchor_resolves/member_count/mirror_count/members[relation]）+ 每个 entry 的 `canonical_anchor` + counts `entity_anchors`/`entity_mirror_pages`；`llms-full.txt` 每页 anchor 行；`llms.txt` snapshot + AI 规则。全 anchor_resolves=true、drift=0。 |
| 🟢 | 评估 hard requirement | **v2026.06.04-3 完成（P1 收官）**。结论：mirror 必填写进 SCHEMA + entry-authoring，靠 review 兜底（mirror 与否是语义判断、无法机检，slug 启发式实测 recall≈33%）；audit 加 `--fail-on-canonical-drift`，`release.ts` 始终带 → 每次发布 gate `canonical_anchor_drift=0`。drift=0 现状启用零风险。依据 ADR-007。 |
| 🔵 | （可选）per-entry API 加 canonical_anchor | v04-2 刻意未给 `api/entries/*.json` frontmatter block 加 `canonical_anchor`（已是 curated subset，不含 related/note/type；edge 已在 ai-index.json + llms-full.txt 完整暴露；避免 1459 file 机械 diff）。若未来 per-entry consumer 需就地拿到 anchor，可加一行 `canonical_anchor: fm.canonical_anchor ?? null`。 |

## historical 内容扩充（P3）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | `security` 4 个 planned 页 | **v12 完成**（+4，security 6→9）。 |
| 🟢 | 薄领域补内容 | **v12 + v2026.06.05-1 完成**。v12 +46 entry；v05-1 并行 2 agent 把最薄的 `non-profit` 6→12、`trade` 6→12（+12）。现无「最薄」域。 |
| 🟢 | i18n 翻译（v12 的 43 + v05-1 的 12）| **v2026.06.05-2 完成**。55 个 content entry × ja/zh/en = 165 个镜像，由 8 个并行 subagent 直接翻译（**不需要密钥**——`translate.mjs` 需密钥只因它是独立程序调另一个 Haiku；subagent 自己就能译）。镜像复刻流水线格式（`source_hash=sha256(body).slice(0,16)`、`.passthrough()` schema）。全局 link-integrity 检查 `checked=165 link_mismatches=0`。17 个新域 INDEX 不需镜像（landing 由 config 生成）。教训：i18n 不在 link audit 内，须自行验证 `[[link]]`/数字 byte 一致（已记入做法）。 |
| 🟢 | 各领域 INDEX count 常态校准 | **v2026.06.05-4 完成一轮**。root `INDEX.md` 中 13 个 thematic domain Entries 值各 +1，已按 non-INDEX `.md` disk 实数校正。今后内容增删仍需 Phase 2 手动对账（见维护提醒）。 |
| 🔵 | 评估/合并 v12 双批近重复主题 | **GitHub #8（内容）/ #15（规划任务包）**。v12 中 5 领域（loyalty / money-market 等）因 rate-limit + 重试得到双量（6）entry，主题互补但 loyalty & money-market 出现多个 benchmark / point-economics 类页，人工核对是否近重复并按需合并。 |

## historical JapanFG（P2）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | 9 个未分类 entity | **拆分时解决**（v04-4）。sogo-shosha 母公司经映射裁定归入 `financial-conglomerates` 域（见 ADR-008 / jfg_map RESOLVE）。 |
| 🟢 | 各机构类型内容深化 | **完成**。~110 个 <250 词存根全部深化（业务模式 / 监管定位 / 集团关系）。**v05-3 完成 58 个**（regional-banks 48 + cooperative-banks 10）+ **v05-5 完成剩余 50 个**（life-insurers 8/securities-firms 8/asset-managers 7/payment-firms 7/trust-banks 6/megabanks 5/card-issuers 5+ 小域 4）。8 并行 subagent·2 batch，无捏造 web 核实并订正多处既有 stub 错误。累计 108 个。 |
| 🟢 | split 旧路由批量修 | **v2026.06.06-1 完成**。非 thin 实体页（route/footer/正文）+ 其 ja/zh/en i18n mirror 的 `[[JapanFG/INDEX]]` → 各域 INDEX，共 575 source + 2069 mirror = 2644 file。link target source/mirror byte 一致、footer 去重、mirror `source: japanfg/` 指针订正 1887；`source_hash` 刻意不变（mirror 已 stale，改写会伪证 fresh 翻译并冻结 stale，保留自愈信号）。domain INDEX 的 umbrella nav（`[[JapanFG/INDEX|JapanFG]]`）与 releases 史实保留。audit issues=0。 |

## historical 工具 / 基础设施

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | docs 主干/UIUX/漂移审计 | BRD/PRD/ARD/FSD/NFR/RTM、UI/UX 横切文档、deployment/incident/maintenance runbook、documentation drift audit 已建立。工具化检查已全部完成（**GitHub #1–#7**：`ai:audit` / `docs:audit` / `docs:stale` / `surface:drift` / `i18n:status`）。 |

## 维护提醒（非待办，长期注意）

- clone 后首次发布前要恢复 mtime（见 [gotchas.md](../07-quality/gotchas.md) #1）。
- 改领域名要同步 4 处（site 三配置 + wiki_link_audit map + INDEX 表），见 [gotchas.md](../07-quality/gotchas.md) #5 / [adr.md](../04-architecture/adr.md) ADR-001。
- README / CHANGELOG 散文里别写字面 `[[domain/...]]`（见 gotchas #6）。
- 内容增删后 root / domain INDEX 表 count 易滞后；`release.ts` 不自动改领域 count，需按 disk 实数手动对账（v2026.06.05-4 修过一轮）。

# 待办清单 / Backlog

> 一站式 open-items，沉淀自历史 CHANGELOG 的「次の作業 / 既知の注意点」。状态：🔴 未开始 / 🟡 进行中 / 🟢 近期完成可移除。完成后移到 [roadmap.md](roadmap.md) 的「已完成」并从此处删。

## canonical_anchor（P1）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | Saison drift 修复 | **v12 完成**。`insurance/saison-automobile-fire` core body 已引用 anchor，`canonical_anchor_drift=0`。 |
| 🟢 | 剩余 mirror pair 全量 back-fill | **v13 完成**。补 4 个 mirror anchor（au-jibun-bank / kampo-life / sony-life / ja-kyosairen），现共 12 个，`canonical_anchor_checked=8→12`、drift=0。 |
| 🟢 | discovery 输出 entity edge | **v2026.06.04-2 完成**。`ai-index.json` 新增 `entities[]`（12 edge: anchor/anchor_url/anchor_resolves/member_count/mirror_count/members[relation]）+ 每个 entry 的 `canonical_anchor` + counts `entity_anchors`/`entity_mirror_pages`；`llms-full.txt` 每页 anchor 行；`llms.txt` snapshot + AI 规则。全 anchor_resolves=true、drift=0。 |
| 🟢 | 评估 hard requirement | **v2026.06.04-3 完成（P1 收官）**。结论：mirror 必填写进 SCHEMA + entry-authoring，靠 review 兜底（mirror 与否是语义判断、无法机检，slug 启发式实测 recall≈33%）；audit 加 `--fail-on-canonical-drift`，`release.ts` 始终带 → 每次发布 gate `canonical_anchor_drift=0`。drift=0 现状启用零风险。依据 ADR-007。 |
| 🔵 | （可选）per-entry API 加 canonical_anchor | v04-2 刻意未给 `api/entries/*.json` frontmatter block 加 `canonical_anchor`（已是 curated subset，不含 related/note/type；edge 已在 ai-index.json + llms-full.txt 完整暴露；避免 1459 file 机械 diff）。若未来 per-entry consumer 需就地拿到 anchor，可加一行 `canonical_anchor: fm.canonical_anchor ?? null`。 |

## 内容扩充（P3）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | `security` 4 个 planned 页 | **v12 完成**（+4，security 6→9）。 |
| 🟢 | 薄领域补内容 | **v12 + v2026.06.05-1 完成**。v12 +46 entry；v05-1 并行 2 agent 把最薄的 `non-profit` 6→12、`trade` 6→12（+12）。现无「最薄」域。 |
| 🟢 | i18n 翻译（v12 的 43 + v05-1 的 12）| **v2026.06.05-2 完成**。55 个 content entry × ja/zh/en = 165 个镜像，由 8 个并行 subagent 直接翻译（**不需要密钥**——`translate.mjs` 需密钥只因它是独立程序调另一个 Haiku；subagent 自己就能译）。镜像复刻流水线格式（`source_hash=sha256(body).slice(0,16)`、`.passthrough()` schema）。全局 link-integrity 检查 `checked=165 link_mismatches=0`。17 个新域 INDEX 不需镜像（landing 由 config 生成）。教训：i18n 不在 link audit 内，须自行验证 `[[link]]`/数字 byte 一致（已记入做法）。 |
| 🟢 | 各领域 INDEX count 常态校准 | **v2026.06.05-4 完成一轮**。root `INDEX.md` 中 13 个 thematic domain Entries 值各 +1，已按 non-INDEX `.md` disk 实数校正。今后内容增删仍需 Phase 2 手动对账（见维护提醒）。 |
| 🔴 | 评估/合并 v12 双批近重复主题 | v12 中 5 领域（loyalty / money-market 等）因 rate-limit + 重试得到双量（6）entry，主题互补但 loyalty & money-market 出现多个 benchmark / point-economics 类页，人工核对是否近重复并按需合并。 |

## JapanFG（P2）

| 状态 | 项目 | 备注 |
|---|---|---|
| 🟢 | 9 个未分类 entity | **拆分时解决**（v04-4）。sogo-shosha 母公司经映射裁定归入 `financial-conglomerates` 域（见 ADR-008 / jfg_map RESOLVE）。 |
| 🟡 | 各机构类型内容深化 | **进行中**。~110 个 <250 词存根需深化（业务模式 / 监管定位 / 集团关系）。**v05-3 完成 58 个**（regional-banks 48 + cooperative-banks 10，web 核实、无捏造）。🔴 剩 ~51：life-insurers(8)/securities-firms(8)/asset-managers(7)/payment-firms(7)/trust-banks(6)/megabanks(5)/card-issuers(5)+ 小域。并行 agent 续做。 |
| 🔴 | split 旧路由批量修 | 拆分后很多**非 thin** 实体页开头 Wiki-route 仍指 `[[JapanFG/INDEX]]`（非死链，audit 不报，但应指各自新域 INDEX）。脚本批量改 `[[JapanFG/INDEX` → `[[<domain>/INDEX`。 |

## 工具 / 基础设施

| 状态 | 项目 | 备注 |
|---|---|---|
| 🔴 | `.txt` 入口纳入 audit | `llms-tasks.txt` 等 `.txt` 不在 `wiki_link_audit`（只审 `.md`）→ entry 改名时 `.txt` link 易留死链。把 `.txt` link target 实在性纳入 release gate。 |
| 🔴 | docs 扩充 | CI / Vercel 部署细节、i18n 翻译流程、Obsidian 运用（见 roadmap 中长期）。 |

## 维护提醒（非待办，长期注意）

- clone 后首次发布前要恢复 mtime（见 [gotchas.md](gotchas.md) #1）。
- 改领域名要同步 4 处（site 三配置 + wiki_link_audit map + INDEX 表），见 [gotchas.md](gotchas.md) #5 / [decisions.md](decisions.md) ADR-001。
- README / CHANGELOG 散文里别写字面 `[[domain/...]]`（见 gotchas #6）。
- 内容增删后 root / domain INDEX 表 count 易滞后；`release.ts` 不自动改领域 count，需按 disk 实数手动对账（v2026.06.05-4 修过一轮）。

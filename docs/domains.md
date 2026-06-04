# 领域现状 / Domains

> 数据源是 `INDEX.md` 的 Domain Map（`parseDomainMap()` 解析的官方表）。内容增删后 `INDEX.md` 的 count 需手动校准——本表随之更新。扩充优先级配合 [roadmap.md](roadmap.md) P3 与 [backlog.md](backlog.md)。

## 23 领域（按 entry 数降序）

> v12 并行给 10 领域加 46 entry，多数原「薄领域」已扩充，下表为 v13 后 disk 实数。

| 领域 | entries | 体量 | 扩充优先级 |
|---|---:|---|---|
| `JapanFG` | 634 | 巨型 | 深化（P2，已分 9 sub-INDEX，不移文件） |
| `exchanges` | 147 | 大 | 维护 |
| `fintech` | 144 | 大 | 维护 |
| `systems` | 62 | 中 | 维护 |
| `payments` | 41 | 中 | 维护 |
| `agent-economy` | 41 | 中 | 维护 |
| `banking` | 40 | 中 | 维护 |
| `policy-finance` | 35 | 中 | 维护 |
| `insurance` | 33 | 中 | 维护 |
| `securities` | 33 | 中 | 维护 |
| `derivatives` | 33 | 中 | 维护 |
| `structured-finance` | 30 | 中 | 维护（manufacturing ABS 归此） |
| `real-estate-finance` | 28 | 中 | 维护 |
| `finance` | 27 | 中 | 维护 |
| `business` | 24 | 中 | 维护（v12 +5：19→24） |
| `money-market` | 17 | 小中 | 维护（v12 +5：12→17，注意 benchmark 类近重复待核） |
| `loyalty` | 17 | 小中 | 维护（v12 +5：12→17，注意 point-economics 类近重复待核） |
| `manufacturer-finance` | 13 | 小中 | 选扩（v12 +5：8→13；captive/vendor/export finance；entity 归 JapanFG） |
| `corporate-strategy` | 11 | 小 | 选扩（v12 +5：6→11） |
| `retail` | 10 | 小 | 选扩（v12 +2：8→10） |
| `security` | 9 | 小 | 维护（v12 +3：6→9，4 个 planned 页已建） |
| `non-profit` | 6 | **最薄** | **P3 扩充**（v12 +2：4→6；公益法人结构 / 研究助成） |
| `trade` | 6 | **最薄** | **P3 扩充**（v12 +2：4→6；目前仅 JETRO / 贸易渠道） |

合计 domain 表 ≈ 1450；link-audited wiki entries = 1466（含 root INDEX 等）。domains = 23。

## 领域边界备忘（避免误放）

- **entity 页**（具体金融机构）→ 一律 `JapanFG/`，不散落到 `banking`/`insurance`/`securities` 等主题领域。
- **manufacturing ABS** → `structured-finance`；**厂商金融臂** → `manufacturer-finance`；**母公司 entity** → `JapanFG`。
- **公司/上市公司治理** → `finance`/`securities`/`exchanges`；**非营利/公益法人治理** → `non-profit`。
- 详细路由规则见各领域 `INDEX.md` 顶部的 scope/disambiguation 段。

## 扩充时的注意

- 新增 entry 走 [architecture.md](architecture.md#如何新增一个-wiki-entry) 的步骤；frontmatter 按 `SCHEMA.md`。
- 只放公开信息（`AGENTS.md` 公开知识库原则）。
- 增删后更新该领域 `INDEX.md` 行 + 根 `INDEX.md` 的 count，再跑 `release.ts --check --strict`。

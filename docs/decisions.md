# 架构决策记录 / ADR

> 记录「为什么这么做」，指导未来类似决策。每条：背景 / 决定 / 理由 / 影响。新决策追加在末尾，不改历史条目（与 CHANGELOG 同理）。

## ADR-001：mislabel 领域用物理改名（C-A）而非永久 Option A

- **背景**：`governance` 实体是非营利/公益法人、`manufacturing` 实体是 manufacturer-finance，目录名与内容 mislabel。
- **选项**：Option A = 不移文件、只在 INDEX 加 disambiguation（保 URL）；C-A = 物理改名目录（改 URL）。
- **决定**：v7 先用 Option A 暂处，v9 最终 C-A 物理改名。
- **理由**：目录名是公开 URL 的一部分，长期 mislabel 比一次性 URL 变更成本更高；趁领域小（4 / 8 entry）改代价低。
- **影响**：公开 URL 不可逆变更（旧 URL 消失非 301）；确立了「改领域名要同步 4 处」的流程（site 三配置 + `wiki_link_audit` map + INDEX 表）。

## ADR-002：canonical_anchor 分 Phase 落地

- **背景**：mirror page（如 net bank）需要指向其 entity 单一真相 anchor，但全量改造风险高。
- **决定**：Phase 0（SCHEMA 字段 + 2 pilot）→ Phase 1（report-only audit，不影响 gate）→ Phase 2（entity edge / 全量 / hard requirement）。
- **理由**：report-only 让 audit 先观测 drift 而不阻塞发布，避免一次性强约束打断现有 1400+ entry 的发布节奏。
- **影响**：`wiki_link_audit` 有 `canonical_anchor_checked` / `canonical_anchor_drift` 计数但不进 exit code；Phase 2 才考虑升为 gate。见 [backlog.md](backlog.md) P1。

## ADR-003：docs/ 用双排除而非单一机制

- **背景**：内部开发文档要完全不进公开知识库。
- **决定**：同时注册 `EXCLUDED_WALK_DIRS`（`lib/markdown_helpers.ts`，控计数/发现面）和 `IGNORED_DIRS`（`tools/wiki_link_audit.ts`，控死链审计）。
- **理由**：这俩是**独立**扫描路径——只加一个会漏（例：`releases/` 只在 IGNORED_DIRS，所以仍计数、仍进 sitemap）。要「完全内部」必须两个都加。
- **影响**：`docs/` 不进 corpus / sitemap / llms / ai-index / api / 审计；`site/` 的 allowlist 顺带保证不被 Astro 拾取。验证：v10 发布 `md` 不因 docs 5 文件变化。

## ADR-004：JapanFG 用 sub-INDEX 细分而非移文件

- **背景**：JapanFG 631 entity 扁平，难导航。
- **决定**：用 frontmatter `tags` 驱动建 9 个机构类型 sub-INDEX（bare wikilink 分类），**不移动任何文件**（Option A）。
- **理由**：移文件会改 53,615+ inbound link / URL / sitemap，代价极大且不可逆；sub-INDEX 提供导航而零破坏。
- **影响**：entity 页留在 `JapanFG/`，深化在原页 + sub-INDEX 内进行（见 roadmap P2）；sub-INDEX 有 Placement Rule 注明 entity 不外迁。

## ADR-005：site/ 用显式 ENTRY_DOMAIN_DIRS allowlist

- **背景**：Astro 要决定拾取哪些目录当 content collection。
- **决定**：维护显式领域 allowlist（`content.config.ts` / `siteIndex.mjs` / `groups.ts`），而非自动扫描所有目录。
- **理由**：allowlist 让新增非内容目录（如 `docs/`）自动被站点忽略，无需额外配置；但代价是**新增/改名领域必须手动更新这三处**。
- **影响**：改领域名的「同步 4 处」里有 3 处来自这个决定；好处是 `docs/` 等内部目录零配置即排除。

## ADR-006：内容批量开发用直接 Agent 并行 + 文件域隔离

- **背景**：大批量内容扩充（v12 的 10 领域 46 entry、v13 的 canonical_anchor 盘点）单线程太慢，需要并行。
- **选项**：Workflow（schema / StructuredOutput 编排）vs 直接 `Agent` 工具（一个 message 多 tool call 并行）。
- **决定**：用**直接 Agent**，每个 agent 严格限定一个领域目录（文件域隔离），主会话在 Phase 2 统一同步 root INDEX + 发布。Workflow schema 模式实测**全失败**（v12，10 个 agent 0 token / 没调 StructuredOutput）。
- **理由**：文件域隔离让 N 个 agent 并行写主仓不同文件零冲突；直接 Agent 返回文本可靠、可重试（绕过 rate-limit / 故障）；并发 ≤5-6 避免 API rate-limit。
- **影响**：确立并行开发标准流程（见 [parallel-development.md](parallel-development.md)）。内容由 agent 生成 → 结构 / 链接可 audit，但**事实精度需人工抽查**。rate-limit + 重试可能产生双批 entry（v12 的 5 领域各得 6 个互补 entry），Phase 2 收尾必须按 **disk 实数**对账 root INDEX。

## ADR-007：canonical_anchor hard requirement 用 drift-gate + 写作规范，而非 mirror 自动检测

- **背景**：Phase 2（entity edge，v2026.06.04-2）落地后，roadmap P1 仅剩「把 `canonical_anchor` 从 optional 变 hard requirement（mirror page 必填）+ audit 升 gate」。
- **选项**：(A) 机检「每个 mirror 必须设 `canonical_anchor`」并 gate；(B) 只 gate「已声明的 anchor 必须有效（resolve + core-body 链回）」+ 用写作规范要求 mirror 必填。
- **决定**：选 **B**。`tools/wiki_link_audit.ts` 加 `--fail-on-canonical-drift`（drift>0 → EXIT=1），`tools/release.ts` 的 `runWikiLinkAudit` 始终带此 flag → 每次 `--check` / `--write` 都 gate `canonical_anchor_drift=0`。「mirror 必填」写进 [`SCHEMA.md`](../SCHEMA.md) + [entry-authoring.md](entry-authoring.md)，靠 review 兜底。
- **理由**：mirror 与否是**语义 / 编辑判断**，无法机械枚举。实测 12 个已声明 mirror 里只有 4 个与其 anchor **同 slug**（sony-bank / au-jibun-bank / daiwa-next-bank / ui-bank），其余 8 个是编辑选定的异 slug（如 `toyota-financial-services→toyota-financial`、`kampo-japan-post-insurance→kampo-life`、`sony-group-finance-arm→sony-fg`）；而同 slug 跨域对又**全部 4/4 已声明**。即 slug 启发式 recall≈33% 且当前 0 violation——做不了可靠的「找出未声明 mirror」gate。能机检且有价值的是**声明有效性**（drift），它防止 12 条 entity edge 因 anchor 改名 / 移除而 rot。
- **影响**：drift 从 report-only（[ADR-002](#adr-002canonical_anchor-分-phase-落地)）升为硬门禁，但**仅在 `--fail-on-canonical-drift` 下**（不带 flag 时仍 report-only，保持 ADR-002 的隔离 + 默认行为）。canonical_anchor 计数仍不进 `entries_with_issues`。drift=0 现状下启用零风险，只在未来回归时 bite。**P1（canonical_anchor Phase 2）至此全部完成**。

## ADR-008：JapanFG 物理分割为 17 机关类型域（知情推翻 ADR-004）

- **背景**：`JapanFG/`（约 620 entity）平坦、太笼统。[ADR-004](#adr-004japanfg-用-sub-index-细分而非移文件) 曾因「移动会改 ~58k 入链 / URL，代价极大且不可逆」而选择 sub-INDEX 导航、**不移文件**。v2026.06.04-4 用户判断改为**物理分割**。
- **选项**：(A) 逻辑分割（不移文件，只升级 discovery/导航）；(B) 物理拆成新顶级域；(C) 物理拆成 JapanFG 子目录。**用户选 B**（承知 ~620 URL 变更 + ~53.6k 链接重写的不可逆成本）。
- **决定**：拆为 **17 个角色复数名顶级域**（megabanks / regional-banks / cooperative-banks / trust-banks / life-insurers / non-life-insurers / securities-firms / asset-managers / payment-firms / card-issuers / leasing-firms / consumer-finance / trading-company-finance / financial-conglomerates / foreign-financial-institutions / financial-regulators / financial-licenses）。映射用 9 sub-INDEX membership 为主信号 + frontmatter tag 拆 3 大类。
- **理由**：(1) 角色复数名避开与现有主题域（securities/insurance/payments）冲突，并标明「机构」。(2) **数据驱动加 3 域**：实测 payments-cards-leasing-finance(115) 是杂类——除 payments/cards/leasing 外还有 consumer-finance / 商社金融 / 商社母公司，三类不入前三，故加 `consumer-finance` / `trading-company-finance` / `financial-conglomerates`（628 中 617 按 tag 自动、11 手动裁定）。(3) **保留 `JapanFG/INDEX` umbrella**：数千 `[[JapanFG/INDEX]]` 链接保持有效，且给「日本金融机构」一个导航 hub，避免重写这些 INDEX 引用。
- **执行/安全**：单一原子 migration（branch + 脚本：移动 root + i18n×3、重写 53.6k 链接、改 frontmatter domain/alias），用 `wiki_link_audit` 作 oracle（dead=0 / drift=0 验证），10 并行 agent file-scope 隔离写 17 INDEX + 修 35 missing_peer。`coreBody` 在 `## Source\b` 截断会误匹配 `## Source-of-Truth Stack`——peer 链接须放在该标题之前的 core body（已踩坑）。
- **影响**：**公开 URL 不可逆变更**（旧 JapanFG/<entity> 404、非 301，与 [ADR-001](#adr-001mislabel-领域用物理改名c-a而非永久-option-a) 同理）。领域数 23→40。确立「巨型域物理分割」的标准流程（设计文档 `japanfg-split-design.md` → mapping → 原子脚本 → audit oracle → 并行 agent INDEX → 站点配置同步）。DOMAIN_TITLES 的 17 域本地化名留作后续。

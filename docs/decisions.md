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

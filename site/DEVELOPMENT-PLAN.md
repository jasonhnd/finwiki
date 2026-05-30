# FinWiki 三版本 开发计划

> 单一 MD 事实源 → 「人类网站（全量渲染 + 全量翻译）」+「AI 版（MD + 现有 surface）」
> 北极星：现 ~1000 页能跑，未来 ~1 万页能 scale 且**不返工**。

---

## 0. 架构原则（已确认）

1. **单源派生，不分叉内容** —— MD corpus 是唯一手写真相；人类网站、AI surface 全部从它派生。
2. **人类网站 = 全量自动渲染 + 全量 LLM 翻译** —— 每一页都走同一条管线：MD → 自动渲染成可读页 → LLM 翻成 `ja/en/zh`。**没有精选层、不分质量层，一视同仁。** LLM 翻译让"全量三语"本就可行，不靠人工。
3. **翻译事实保真**（FinWiki 事实记录性质的硬要求）：数字、专名、机构名、日期、单位、`[[wikilink]]`、`^[extracted]/^[inferred]` 标记**原样保留**；术语表保证一致；每页可**一键对照原文**。译文**增量**（内容 hash，只翻新增/改动）。
4. **AI 版 = MD 内容 + 现有发现 surface**（`sitemap` / `llms.txt` / `ai-index.json` / 分层 `INDEX`，皆自动生成，万页时分片）。**不做检索系统、不做第二份内容**——通用 AI 靠搜索引擎 + 分层导航即可发现页。
5. **build 演进**：现全量 SSG → 逼近万页切 ISR/按需渲染；Astro 内容逻辑 SSG/SSR 通用，只改 `output`+adapter，**页面/插件/内容不重写**。
6. **一切增量化**：build / 翻译 / 审计 / surface 生成都只跑改动部分 + 定期全量。

```
MD corpus (手写, 1000→10000)              ← 唯一事实源
  ├─[全量自动渲染 + 全量 LLM 翻译]──→ 人类网站（每页, ja/en/zh, 保真）
  ├─[直接喂]────────────────────→ AI 内容 = MD 本身
  └─[现有生成器, 万页分片]──────────→ AI 发现 surface（sitemap/llms/ai-index/INDEX）
```

---

## 1. 阶段计划

### Phase 1 — 全量自动渲染地基 ⭐ 先做（地基）

**目标**：任意 MD → 自动渲染成可读人类页；全量 SSG build ~1000 页跑通，拿到 build 耗时基线。

- content collection 指向**整个 corpus**（glob `../<domain>/**/*.md`，排除 `.opinions/`、`INDEX.md`、根控制文档）
- `remark-wikilink` 插件：`[[domain/slug|label]]` → 站内链接 + 构建期收集**反向链接**
- `remark-provenance` 插件：`^[extracted]/^[inferred]` → 置信度 UI（裸标记不外露）
- frontmatter schema（zod，宽容：未知字段不报错，兼容 1380 篇现存差异）
- `EntryLayout.astro` + 动态路由 `/[lang]/[...slug]`
- 全量 SSG build，抽查渲染效果 + **记录 build 时间基线**

**验收**：1000 页全部自动渲染、可读、wikilink 可跳转、build 通过；build 耗时记录在案。

### Phase 2 — 人类版呈现完善

**目标**：全量页可读、可导航、可搜索、matrix 好看。

- `MatrixTable`（响应式 / 可排序，自动识别 matrix 类条目表格）
- `ConfidenceBadge` / `Backlinks` / `SourceList` / 关系侧栏 / **「対照原文」入口**
- 导航：首页内容地图、各 domain 索引页、reader-profile guide（复用 `HOW-TO-NAVIGATE`）
- 站内搜索：**Pagefind**（构建期静态全文，零后端）
- 视觉 / 排版打磨（金融知识库气质，避免模板感）

**验收**：从首页可走到任意页；搜索可用；matrix 渲染清晰；反向链接成网。

### Phase 3 — 全量翻译（无精选层，保真 + 增量）

**目标**：每一页三语可切换，统一质量，事实保真。

- **全量 LLM 翻译管线**：每页检测原文语言 → 翻成另外两语（多数 ja → en/zh）
- **保真约束**（核心）：数字 / 专名 / 机构名 / 日期 / 单位 / `[[wikilink]]` / `^[..]` 标记**原样不动**；金融术语表保证跨页一致；保留章节结构
- **增量**：按内容 hash 缓存，只翻新增 / 改动页
- 语言切换 + **每页「対照原文」**（译文随时可回看 MD 原文，保可溯源）
- 译文存储锚定源 MD `<slug>`，永不脱离事实源

**验收**：任意页可切三语；**抽查数字 / 专名 / 日期零误译**；切换无空白页；增量翻译可用。

### Phase 4 — 部署 + 增量工具链（含 AI surface 分片）

**目标**：统一站点上线；改一页 → 增量再生 → 部署。

- 统一站点：`/[lang]/…` 人类版 + `/ai-index*.json` `/llms*.txt` 等 AI surface
- **AI surface 分片**：改 `generate_ai_discovery.py`，`llms-full` / `ai-index` 按 domain 分片，分层 `INDEX` 保持足够深（防万页单文件爆炸）
- **把 `site/` 加入 corpus 工具 SKIP_DIRS**（`wiki_link_audit` / `generate_ai_discovery` / `extract_opinions`），防站点文件污染 corpus 计数
- 接入 `release.py`：corpus 改 → `bun build` + 翻译增量 + surface 再生 → 部署
- 部署：现阶段 GitHub Pages（全量 SSG）或迁 Cloudflare Pages
- 增量化：build 分片、翻译按 hash、审计只查改动

**验收**：一次 push → 全链路自动 → 站点更新；人类 / AI surface 同步。

### Phase 5 — 万页 scale 切换（未来，触发式）

**触发条件**：全量 SSG build 时间超阈值（如 >10 min）或页数 > ~5000。

- 切 Astro **hybrid/SSR + adapter**（Cloudflare Workers / Vercel）
- 精选 + 热页 SSG 预渲染，长尾 **on-demand ISR + 缓存**
- 过渡方案：按 domain 分片并行 build
- 翻译 / surface 分片增量

**验收**：万页规模下 build / 部署在可接受时间内；首访延迟可接受。
**说明**：Astro 内容逻辑 SSG/SSR 通用，本阶段只改 `output` + adapter + 部署，**不重写页面 / 插件 / 内容 / 翻译**。

---

## 2. 里程碑

| 里程碑 | 对应 | 内容 |
|---|---|---|
| **M1** | Phase 1 | 全量自动渲染跑通（1000 页 SSG）— 地基 |
| **M2** | Phase 2 | 人类版完善（导航 / 搜索 / matrix） |
| **M3** | Phase 3 | 全量翻译（统一 · 保真 · 增量） |
| **M4** | Phase 4 | 部署 + 增量上线（含 AI surface 分片） |
| **M5** | Phase 5 | 万页 ready（触发式） |

---

## 3. 风险与对策

| 风险 | 对策 |
|---|---|
| build 随规模恶化 | Phase 5 ISR 演进（架构已预留，不返工） |
| **翻译保真**（事实误译） | 强约束 prompt + 术语表 + 数字/专名/日期保护 + 每页对照原文 + 抽查 |
| 内容漂移 | 单源派生；译文 / surface 皆锚定源 MD，绝不手维护第二份内容 |
| 工具链全量瓶颈 | 全面增量化（hash / 分片 / 只查改动） |
| 站点文件污染 corpus 计数 | `site/` 加入 SKIP_DIRS 隔离 |

---

## 4. 与现有衔接

- MD corpus、`tools/`、`release.py`、质量门：不破坏，扩展。
- 现 `index.html`：被新人类版首页取代（或过渡并存）。
- 现 `ai-index.json` / `llms*.txt`：保留，**升级为分片**（不新增检索系统）。

---

## 5. 当前任务映射

| Task | 归属 |
|---|---|
| #22 content collection（全量 corpus） | **Phase 1** |
| #18 wikilink/provenance 插件 | **Phase 1** |
| #19 EntryLayout + 组件 | **Phase 1（EntryLayout）+ Phase 2（Matrix/Backlink 等）** |
| #20 → **AI surface 分片 + site SKIP_DIRS** | **Phase 4**（已去掉向量/MCP 检索系统） |
| #21 部署 + release 接入 | **Phase 4** |
| 新增 | **Phase 3 全量翻译**、Phase 5 scale 切换 |

---

## 6. 即刻下一步（Phase 1 第一刀）

1. content collection 指向全量 corpus + frontmatter 宽容 schema。
2. `remark-wikilink` + `remark-provenance` 两个插件。
3. `EntryLayout` + `/[lang]/[...slug]` 动态路由。
4. 先渲染 100–200 页验证转换正确，再全量 SSG 测 build 时间。

完成即达 **M1**，证明"全量自动渲染"地基成立——之后扩到万页就是"同逻辑 + 换 build 模式 + 增量翻译"。

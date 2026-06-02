# FinWiki 人类网站 — 技术架构与实现方案

> 配套 `DEVELOPMENT-PLAN.md`（阶段/里程碑）。本文是**技术实现框架**：模块设计、数据流、关键插件、接口契约、构建管线、技术决策与待验证假设(spike)。
> 适用范围：人类网站（全量渲染 + 全量翻译）。AI 版仅涉及"现有 surface 分片"，归 `tools/` 侧。

---

## 0. 当前有效静态架构（2026-06-02 Phase 1）

本节是当前实现事实。下方旧草案中的 `site/src/content/entries` mirror、`postbuild-search.ts`、Python AI surface 切分、以及 4140 / 4147 pages 估算均按历史设计记录理解；当前构建以这里为准。

### 0.1 数据源

- canonical corpus 是 repository root 下的 23 个 domain 目录，例如 `banking/`、`exchanges/`、`security/`、`systems/`。
- Astro `entries` collection 通过 `glob({ base: '../' })` 直接读取 root domain corpus，并排除 `INDEX.md`。
- `site/src/content/entries/` 只保留为 deprecated generated mirror；它不再是 build input，也不再需要 build-time sync。
- 翻译仍在 `site/src/content/i18n/{zh,en}/<domain>/<slug>.md`，缺译时页面 fallback 到日文原文。

### 0.2 路由契约

- 所有 entry URL 由 `site/src/lib/routes.ts` 统一生成：`entryRoute()`、`entryDomain()`、`i18nEntryId()`。
- 这样可以避免 frontmatter `slug` 被 Astro collection 当作 flat `id` 后造成错误路径。
- 规范 entry URL 是 `/{lang}/{domain}/{slug}/`，domain landing URL 是 `/{lang}/domains/{domain}/`。
- root cover page 是 `/`，三语首页是 `/ja/`、`/en/`、`/zh/`，全量浏览页是 `/{lang}/browse/`。

### 0.3 Wikilink 与索引

- `site/src/lib/siteIndex.mjs` 从 root corpus 构建 alias / path / stem resolver，`remark-wikilink` 在渲染时直接输出静态 `href`。
- `site/src/plugins/localize-wikilinks.mjs` 在 `astro:build:done` 阶段把 en / zh HTML 中的 wikilink href 本地化到当前语言，避免浏览器端二次改写。
- `Pagefind` 仍是静态全文检索。build 后索引 `site/dist`，不引入数据库、SSR 或外部 search API。

### 0.4 构建与发布管线

当前 root build gate 是：

```bash
bun tools/vercel_build.ts
```

它串联执行 wikilink audit、release strict check、Astro build、duplicate HTML id check、Pagefind index、以及 `_vercel_public` 静态发布组装。GitHub Pages 与 Vercel 使用同一套 Bun pipeline。

当前验证基线：

- Astro rendered pages: 4219
- Domain landing pages: ja / en / zh 各 23 个
- Duplicate HTML ids: 0
- Wikilink audit: entries_checked=1411 / entries_with_issues=0 / dead_wikilink_references=0 / dead_wikilink_targets=0
- Pagefind: 4219 pages / 3 languages / 132788 words
- Static publish assembly: astro_files=8846 / root_surface_files=2838

---

## 1. 技术栈

| 层 | 选型 | 理由 |
|---|---|---|
| 站点框架 | **Astro 5**（content layer / islands / SSG→hybrid） | 内容优先、SSG 现用且可平滑切 SSR/ISR、MD 管线可插自定义 remark/rehype |
| 运行时 / 包管理 | **Bun** | 快；与 Astro 兼容 |
| 内容 schema | **zod**（Astro `content.config.ts`） | 宽容校验 1380 篇 frontmatter 差异 |
| Markdown 管线 | **remark / rehype**（unified，Astro 内置） | 自定义插件解析 wikilink / provenance |
| 站内搜索 | **Pagefind** | 构建期静态全文、多语言、零后端 |
| 翻译 | **LLM API（离线 CLI）** | 全量机翻、增量、保真校验；模型待定（倾向 Claude API） |
| 代码高亮 | **Shiki**（Astro 内置） | 部分 systems/agent-economy 条目含代码块 |

---

## 2. 系统架构(数据流)

```
                    ┌──────────────────────────────┐
                    │   MD corpus  ../<domain>/**   │  事实源（site/ 之外）
                    └───────┬───────────┬──────────┘
          ┌─────────────────┘           └──────────────────┐
          ▼                             ▼                   ▼
 ┌──────────────────┐      ┌────────────────────┐   ┌──────────────────┐
 │ translate CLI    │      │ buildIndex()       │   │ Astro glob loader│
 │ 离线·增量(hash)  │      │ aliasMap+backlinks │   │ base: '../'      │
 │ → i18n/**译文    │      │ → .cache/*.json    │   │ → entries 集合   │
 └────────┬─────────┘      └─────────┬──────────┘   └────────┬─────────┘
          └──────────────────┬───────┴─────────────────────┘
                             ▼
                 ┌───────────────────────────────┐
                 │ Astro build (SSG)             │
                 │  remark-wikilink              │
                 │  remark-provenance            │
                 │  EntryLayout + components      │
                 │  /[lang]/[...slug]            │
                 └──────────────┬────────────────┘
                                ▼
                          ┌───────────┐  postbuild
                          │  dist/    │ ───────────→ Pagefind 索引
                          └─────┬─────┘
                                │ + AI surface(Python 分片) → dist/
                                ▼
                          部署 (GitHub Pages / Cloudflare)
```

**三条独立可增量的输入流** 汇入 Astro build：① 译文（离线生成）② link graph（构建期扫描）③ corpus（loader 直读）。三者都不改源 MD。

---

## 3. 模块设计

### 3.1 内容加载层(glob loader)

源 MD 在 `site/` 之外（repo root 的各 domain 目录），用 Astro 5 content layer 的 `glob` loader 指定 `base`：

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const entries = defineCollection({
  loader: glob({
    base: '../',                        // ⚠️ spike#1: 指向 repo root（site 之外）
    pattern: [
      '**/*.md',
      '!.opinions/**', '!site/**', '!tools/**', '!api/**',
      '!releases/**', '!.templates/**', '!.github/**',
      '!**/INDEX.md', '!*.md',          // 排除各域 INDEX 与根控制文档
    ],
  }),
  schema: entrySchema,
});

const i18n = defineCollection({
  loader: glob({ base: './src/content/i18n', pattern: '**/*.md' }),
  schema: translationSchema,
});
export const collections = { entries, i18n };
```

- entry `id` = 相对路径，如 `JapanFG/mufg`。
- i18n 译文集合独立加载，按 `{lang}/{path}` 对应。

### 3.2 frontmatter schema(宽容)

1380 篇 frontmatter 有差异，schema 取**最小必填 + 其余 optional + passthrough**：

```ts
const entrySchema = z.object({
  title: z.string(),
  aliases: z.array(z.string()).default([]),
  domain: z.string().optional(),
  confidence: z.string().optional(),     // enum 不强约束，兼容历史值
  tags: z.array(z.string()).default([]),
  status: z.string().optional(),
  sources: z.array(z.string()).default([]),
  last_updated: z.coerce.date().optional(),
  last_tended: z.coerce.date().optional(),
  review_by: z.coerce.date().optional(),
}).passthrough();                         // 未知字段保留不报错
```

### 3.3 link graph(alias 解析 + 反向链接)

Obsidian wikilink 允许省略 domain、用 alias，所以需要**全局解析表**。逐页渲染拿不到全局视图 → 构建期先扫一遍。

```ts
// src/lib/buildIndex.ts  —— 在 astro:config:setup / build:start 跑一次，缓存 .cache/
interface SiteIndex {
  resolve(target: string, fromDomain?: string): string | null; // wikilink→path
  backlinksOf(path: string): Backlink[];
  exists(path: string): boolean;
}
type Backlink = { from: string; label: string };
```

- 构建：读全 corpus 的 `{id, frontmatter.aliases}` → `aliasMap: Map<alias|slug|path, canonicalPath>`；扫全 body 的 `[[..]]` → `backlinks: Map<path, Backlink[]>`。
- 缓存为 `.cache/index.json`，增量（按 corpus mtime/hash）。

### 3.4 渲染管线 — 自定义插件

**`remark-wikilink`**(操作 mdast)
- 正则 `/\[\[([^\]|]+)(\|([^\]]+))?\]\]/` 匹配 text node。
- `SiteIndex.resolve(target)` → 站内 URL `/{lang}/{path}`；保留 `label`。
- 解析失败 → `<span class="wikilink broken">` + 提示（不静默丢）。
- 当前语言注入：插件需知道当前 `lang`（通过 vfile.data 传入）。

**`remark-provenance`**(操作 mdast)
- 正则 `/\^\[(extracted|inferred|ambiguous)\]/` → `<sup class="prov" data-kind="…">`。
- 人类版默认渲染成小徽章 / hover 提示，裸标记不外露。

**matrix 渲染**(rehype + 组件)
- 识别：`tags` 含 `matrix` 或 slug 含 `-matrix`/`comparison`。
- rehype 给 `<table>` 加 `data-matrix`；前端 `MatrixTable` island 增强（sticky header / 排序 / 横向滚动）。

### 3.5 翻译子系统(离线 CLI，不在 build 内)

```
scripts/translate.ts (bun)
 for each corpus page:
   srcHash = sha256(body)
   prev = read i18n/{lang}/{path}.md frontmatter.source_hash
   if srcHash !== prev:  → LLM 翻译 → 写 i18n/{lang}/{path}.md
```

译文 frontmatter：
```yaml
source: JapanFG/mufg
source_hash: <sha256 of source body>
lang: en
model: <model-id>
status: machine            # machine | human-reviewed
translated_at: <iso>
fidelity: ok | needs_review
```

**保真**（事实记录硬要求）：
- 翻译 prompt 强约束：数字 / 专名 / 机构名 / 日期 / 单位 / `[[wikilink]]` / `^[..]` / 表格结构**原样保留**；术语表统一。
- **后处理校验**：分别从原文与译文抽取 `{数字集合, wikilink 集合, marker 集合}`，不一致 → `fidelity: needs_review`，UI 标注、可人工复核。

### 3.6 路由 / i18n

```ts
// src/pages/[lang]/[...slug].astro
export async function getStaticPaths() {
  const entries = await getCollection('entries');
  return langCodes.flatMap((lang) =>
    entries.map((e) => ({ params: { lang, slug: e.id }, props: { entry: e, lang } })),
  );
}
```
- 渲染时：按 `lang` 取 i18n 译文，缺失 → fallback 原文 + 「該页暂为原文/机翻」提示。
- 规模：1380 × 3 = **4140 页**（现在）。

### 3.7 搜索(Pagefind)

- `postbuild`: `pagefind --site dist`，按 `html[lang]` 分语言索引。
- 搜索框 island 调 Pagefind JS API；结果按当前语言过滤。

### 3.8 AI surface 分片(Python 侧, tools/)

- 改 `generate_ai_discovery.py`：超阈值时 `llms-{domain}.txt` / `ai-index-{domain}.json` + 顶层 manifest 指向分片；分层 `INDEX` 保持足够深。
- 输出并入 `dist/`，统一站点同源 serve。

---

## 4. 目录结构(site/)

```
site/
├── package.json · astro.config.mjs · tsconfig.json · .gitignore
├── scripts/
│   ├── translate.ts            离线增量翻译
│   └── postbuild-search.ts     Pagefind 触发
├── .cache/                     link graph / 翻译 hash 缓存（gitignore）
├── src/
│   ├── content.config.ts       entries + i18n 两个集合
│   ├── content/i18n/{ja,en,zh}/<path>.md   译文（机/人）
│   ├── i18n/ui.ts              UI 文案 + 语言工具
│   ├── lib/  buildIndex.ts · markdown.ts · i18n.ts
│   ├── plugins/  remark-wikilink.mjs · remark-provenance.mjs
│   ├── components/  LangSwitcher · MatrixTable · ConfidenceBadge · Backlinks · SourceList · SearchBox
│   ├── layouts/  Base.astro · EntryLayout.astro
│   └── pages/
│       ├── index.astro                  → /ja/
│       └── [lang]/
│           ├── index.astro              内容地图首页
│           ├── guide.astro              reader-profile 导航
│           ├── [domain]/index.astro     域索引
│           └── [...slug].astro          条目页（核心）
└── public/                              robots / favicon 等
```

---

## 5. 数据结构 / 接口契约

```ts
type Lang = 'ja' | 'en' | 'zh';
interface EntryData { id: string; domain: string; slug: string; frontmatter: Frontmatter; body: string; }
interface Translation { source: string; source_hash: string; lang: Lang; status: 'machine'|'human-reviewed'; fidelity: 'ok'|'needs_review'; body: string; }
interface SiteIndex { resolve(t: string, fromDomain?: string): string|null; backlinksOf(p: string): Backlink[]; exists(p: string): boolean; }
```

---

## 6. 端到端构建管线(含增量)

```
1. bun scripts/translate.ts [--changed|--all]   # 增量翻译 → src/content/i18n/**
2. bun run build                                 # buildIndex + remark/rehype + 渲染 → dist/
3. bun scripts/postbuild-search.ts               # Pagefind → dist/pagefind/
4. python ../tools/generate_ai_discovery.py --shard   # AI surface 分片 → dist/
5. deploy dist/                                  # Pages / Cloudflare
```
增量点：translate 按 `source_hash`；buildIndex 按 corpus mtime；audit 只查改动；build 现全量（Phase 5 切 ISR）。

---

## 7. 技术决策与风险(含 spike)

| 决策 | 选择 | 风险 / 待验证 |
|---|---|---|
| loader 读 site 外 corpus | `glob({ base: '../' })` | ⭐**spike#1**：Astro 5 glob base 指向 repo root 是否真能读到——**整个方案地基** |
| 反向链接 | 构建期 `buildIndex` 扫全量 | 万页扫描性能 → 缓存 + 增量 |
| 翻译 | 离线 LLM CLI + hash 增量 | API 访问/成本/保真校验 |
| 搜索 | Pagefind 静态 | 万页索引体积 → 分语言/分片 |
| build 模式 | 现 SSG / 未来 hybrid | Phase 5 触发切换，逻辑不重写 |

---

## 8. 动手前必须先做的 spike(验证假设)

1. ⭐ **glob loader base `../` 读到 corpus** —— 不成立则整个"site 与 corpus 分离"前提要换方案（备选：build 前把 corpus 软链/同步进 site/，或 symlink）。
2. remark 自定义插件在 Astro MD 管线注入 + 通过 `vfile.data` 拿到当前 `lang` 与 `SiteIndex`。
3. 4140 页 SSG build 时间实测（Phase 1 基线）。
4. 翻译 LLM API 的接入方式（key / 模型 / 速率）。

---

## 9. 开放问题(需你定)

1. **翻译模型 / API**：用哪个 LLM、API key 从哪来（Claude API？）、成本上限？
2. **部署平台**：先 GitHub Pages（全量 SSG）够用，还是直接上 Cloudflare Pages 留 hybrid 余地？
3. **matrix 识别规则**：靠 `tags` 标注、还是 slug 模式、还是自动探测大表格？
4. **机翻标注**：译文是否在页面**显式标「机器翻译」**，还是只在 frontmatter 记录、UI 不强调？
5. **原 `index.html`**：新站上线后取代，还是过渡期并存？

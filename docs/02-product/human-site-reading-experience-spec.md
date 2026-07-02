# Human Site Reading Experience Deepening Specification

Status: draft for implementation planning

Issue: #134

Deepens: #23

Baseline: #98 editorial system, documented in [Human Site Editorial Design](human-site-editorial-design.md)

Date: 2026-07-02 JST

Scope: human-facing Astro site reading-experience planning only. This document does not authorize code, token, layout, component, generated-surface, or corpus changes by itself.

## Goal

Define the next H3 reading-experience pass for the FinWiki Astro human site after the editorial Drafts A-D baseline. The current site already has an editorial shell, bilingual Japanese / English surfaces, domain briefings, evidence strips, and Pagefind. This spec deepens the article-reading layer itself: financial tables, matrix pages, wikilink density, article-end discovery, and browse/search scanning.

The implementation should stay static, fast, and bilingual. Japanese remains the first-class source reading surface; English remains an intentionally designed mirror. The work must preserve light mode as the default, keep dark mode intentional, retain the existing font discipline, and avoid turning entries into a generic documentation template.

## Current-State Audit

The current implementation is a solid editorial baseline, but several high-frequency reading patterns still behave like raw rendered Markdown or inventory lists.

| Surface | Current implementation | Current reader friction | Preserve |
|---|---|---|---|
| Markdown render pipeline | `site/astro.config.mjs` runs remark only: strip-title, wikilink, provenance. The resulting content lands inside `.prose`. | There is no post-Markdown HTML enhancement layer for table wrappers, per-cell labels, semantic timeline markup, or link preview metadata. | Static rendering, low JavaScript, existing wikilink/provenance semantics, and generated localized routes. |
| Financial tables and matrices | `site/src/styles/global.css` sets `.prose table { display: block; overflow-x: auto; }`, nowrap table headers, borders, and zebra rows. | Wide matrices are safe from page overflow but require horizontal scrolling. Header context is lost during long scrolls, first-column row labels disappear, and mobile readers see dense spreadsheet blocks. | No page-level horizontal overflow, compact financial density, accessible table semantics, and readable light/dark colors. |
| Timeline / chronology blocks | Timeline-like content is treated as normal Markdown or raw `<pre>` when authored as aligned year/event text. | Chronologies do not expose semantic order, date labels, or scan-friendly spacing. A code-block look implies machine text rather than editorial history. | Source text fidelity and low-maintenance authoring conventions. |
| Wikilinks | `remark-wikilink.mjs` emits `<a class="wl" ... data-wl="...">` for all resolved targets. `global.css` gives every `.wl` the same teal color and soft underline; broken links are muted dotted spans. | Dense entries become a sea of equal-weight links. Readers cannot distinguish same-domain peers, route/navigation links, or system/regulatory anchors before opening them. There is no title/lead preview. | Functional links, broken-link visibility, route localization, keyboard focus, and provenance compatibility. |
| Strong emphasis | `.prose strong` has no product rule beyond browser bold. | Bolded financial claims can feel accidental: stronger than surrounding text but not part of the editorial language. | Markdown authoring semantics and contrast. |
| Entry end | `EntryLayout.astro` renders left domain rail, article, right TOC, evidence strip, tags, and prose. It does not render related entries, read-next, reverse links, or an article-end discovery panel. | Once a reader finishes a page, the only next steps are manual TOC/domain rail navigation or inline links encountered earlier. Pages do not expose "what links here" or nearby sibling context. | Article-led layout, current-group rail, evidence strip, inline sources section, and static page generation. |
| Frontmatter data | Entries expose `title`, `domain`, `slug`, `sources[]`, `tags[]`, `confidence`, `last_updated`, `review_by`, and sometimes `related`. | There is enough data for lightweight discovery, but no reverse-link index is built for the human site. Related behavior must not require new entity curation. | Existing frontmatter contract; no mass corpus edits. |
| Browse | `site/src/pages/[lang]/browse/index.astro` groups all entries by domain, sorts domains by count, uses a sticky substring filter, and renders a multi-column title list. | It is fast, but it has no sort controls, no lead excerpts, and no reader context beyond title/domain grouping. | Full-corpus scan, sticky filter, domain jump links, localized empty state, and small page-local script. |
| Domain detail | `site/src/pages/[lang]/domains/[domain]/index.astro` has lexical read-first scoring based on terms such as overview, map, matrix, comparison, system, landscape, and framework. | The scoring is useful but narrow, and does not help browse/search surfaces expose why an entry matters. | Domain opener, domain brief, route visibility, and optional filter. |
| Search | Pagefind modal is wired in `Base.astro` and home hero triggers. Results rely on Pagefind's current extracted index and visual defaults. | Results feel title-led; readers need excerpts to judge relevance before opening. Browse and Pagefind do not share a common lead/excerpt contract. | Pagefind as search layer, current-language search, `Ctrl/Cmd+K`, and static index generation. |

## Design Principles

1. Make dense financial structure readable without reducing density.
   Tables, matrices, and chronologies are a product feature, not an overflow problem to hide.

2. Links should guide, not shout.
   Wikilinks must remain obvious and usable, but dense paragraphs need hierarchy: route links, peer links, and system/regulatory anchors should carry different weight.

3. Discovery comes from existing data.
   H3 may derive siblings, shared tags, and reverse links at build time. It must not create new hand-curated entity maps or move into the H2 / #26 entity-graph scope.

4. Browse should answer "what should I open?"
   Title-only lists are useful for maintainers. Reader-facing browse/search should add excerpts and sort choices before adding heavier facets.

5. Bilingual means same affordance, tuned language.
   Japanese and English pages should expose the same controls and reading behaviors. Text density, line-height, labels, truncation, and excerpts must be checked in both languages.

## Reader Experience Targets

| Target | Requirement |
|---|---|
| Light default | Light mode remains the primary reading surface: warm, print-adjacent, and calm. |
| Intentional dark | Dark mode remains a deliberate market-desk reading mode with AA contrast and subdued link states. |
| Astro static performance | No client framework. Build-time indexes and minimal page-local enhancement are preferred. |
| Core Web Vitals | Avoid layout shift from previews, table transforms, font changes, and result cards. Keep interaction scripts small and defer non-critical enhancement. |
| Font discipline | Preserve the existing two-family self-hosted budget and Japanese system-font fallback strategy. Do not add remote font providers. |
| WCAG 2.2 | Keyboard focus, non-color-only state, contrast, reduced motion, target size, and table semantics must pass in light and dark. |
| Anti-template | Avoid generic docs patterns such as oversized cards, marketing hero blocks, or heavy decorative panels on entry pages. |

## Slice 1: Tables, Matrices, And Timelines

### Current Vs Desired

| Current | Desired |
|---|---|
| `.prose table` is a block-level horizontal scroll container. | Tables render in an explicit `.prose-table-scroll` wrapper with sticky headers and a sticky first column on wide screens. |
| Header cells are nowrap and zebra rows help scanning. | Header and row-label context remains visible while scrolling long financial matrices. |
| Mobile readers scroll wide tables horizontally. | Wide matrices collapse into stacked labeled row cards when the table is too wide for useful reading. |
| Timeline-like year/event blocks may render as `<pre>`. | Timeline content renders as an ordered semantic `.timeline` with visible date rails and event bodies. |

### Concrete Treatment

Desktop and tablet table behavior:

- Wrap enhanced tables in `.prose-table-scroll` and keep `<table>` semantics intact.
- Use `.prose-table--sticky` for tables that have a clear header row and first-column row labels.
- Apply `position: sticky` to `.prose-table--sticky thead th` with `top: 0`.
- Apply `position: sticky` to the first header/cell column through `.prose-table--sticky th:first-child, .prose-table--sticky td:first-child`.
- Keep sticky cells visually separated by `box-shadow` hairlines, not heavy borders.
- Do not make every table sticky if the first column is not a row label. The build-time enhancer should opt out when header/first-column labels are empty or too short to be meaningful.

Mobile matrix behavior:

- Use `.prose-table--cards` below the agreed mobile threshold when a table has at least three columns and a header row.
- Convert each body row into card-like rows using generated `data-label` attributes on cells.
- Card header should use the first column value as `.matrix-card__title`; remaining cells render as `.matrix-card__field` pairs.
- Do not collapse small two-column key/value tables; those should remain normal tables.
- Preserve source/provenance markers and wikilinks inside cells.

Timeline behavior:

- Add a build-time transform for chronology-like blocks only when every nonblank line follows a conservative date-label pattern such as `YYYY`, `YYYY-MM`, `YYYY-MM-DD`, or Japanese era-free year labels followed by a separator.
- Emit `<ol class="timeline">` with each item containing `.timeline__date` and `.timeline__event`.
- Keep the original line order. Do not infer missing dates or merge events.
- Use the same prose width and source/provenance affordances as body content.

### Named Tokens And Classes

| Name | Role |
|---|---|
| `--table-sticky-bg` | Sticky header / first-column background in light and dark. |
| `--table-sticky-shadow` | Hairline shadow that separates sticky cells from scrolled content. |
| `--table-card-bg` | Mobile matrix row-card background. |
| `--table-card-label` | Muted label text for generated cell labels. |
| `--timeline-rail` | Timeline vertical rule color. |
| `--timeline-date` | Timeline date label color. |
| `.prose-table-scroll` | Explicit scroll wrapper around enhanced tables. |
| `.prose-table--sticky` | Table mode with sticky `<thead>` and sticky first column. |
| `.prose-table--cards` | Table mode that collapses wide matrices into labeled row cards on mobile. |
| `.matrix-card__title` | First-column row label in mobile card mode. |
| `.matrix-card__field` | Labeled value pair in mobile card mode. |
| `.timeline`, `.timeline__item`, `.timeline__date`, `.timeline__event` | Semantic chronology component. |

### Future Allowed Files

- `site/astro.config.mjs`
- `site/src/plugins/remark-responsive-tables.mjs` or a narrowly scoped table/timeline transform plugin
- `site/src/styles/global.css`
- `site/src/i18n/ui.ts` only if visible fallback labels are needed
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

No corpus edits are required for the first pass. If a later issue introduces an explicit authoring convention for timelines, that issue must name the allowed corpus files separately.

## Slice 2: Prose, Wikilinks, Hover Preview, And Strong Emphasis

### Current Vs Desired

| Current | Desired |
|---|---|
| All resolved wikilinks share `.wl` and the same restrained teal underline. | Links remain functional but receive type-differentiated, restrained styling based on resolved target kind. |
| Broken wikilinks are muted dotted spans. | Broken links remain visibly distinct and do not receive previews. |
| Links accent on hover through border/background. | Links are calmer at rest: underline is low-chroma by default and accents only on hover/focus. |
| No hover preview exists. | Hover/focus preview shows target title and lead as progressive enhancement. |
| `.prose strong` is browser-default bold. | Strong emphasis becomes an editorial emphasis style that is visible without looking like a warning or highlight. |

### Target Kind Contract

`remark-wikilink.mjs` should continue resolving the target route, then classify the resolved target using existing route/domain information:

| Kind | Rule | Class / attribute |
|---|---|---|
| Route | Generic resolved entry outside the current domain group. | `class="wl wl--route" data-wl-kind="route"` |
| Peer | Resolved entry in the same domain or same domain group as the current entry. | `class="wl wl--peer" data-wl-kind="peer"` |
| System | Resolved entry in regulatory, license, policy, infrastructure, or rules-oriented domains. | `class="wl wl--system" data-wl-kind="system"` |

If a route matches multiple kinds, prefer `peer` for same-domain orientation, then `system`, then `route`. This keeps reader-local context stronger than global taxonomy.

### Concrete Treatment

Wikilink styling:

- Keep `.wl` as the base contract so existing tests and styles remain meaningful.
- Add `.wl--route`, `.wl--peer`, and `.wl--system` as additive classes.
- At rest, use text color close to body ink and a subtle underline or bottom border.
- On hover/focus, change underline color, not layout metrics.
- Use non-color cues for kinds where practical:
  - `peer`: slightly heavier underline.
  - `system`: small-caps or mono-adjacent tone only when it does not harm Japanese readability.
  - `route`: default calm link.
- Keep `.wl-broken` dotted and muted with no preview.

Hover/focus preview:

- Progressive enhancement only. A page remains complete without JavaScript.
- Generate a per-page preview map from links present in the article, not the whole site.
- Preview data contains:
  - localized `title`
  - localized `lead`, derived from existing entry summary / first paragraph extraction
  - `domain`
  - target route
- Use one floating `.wl-preview` element or a lightweight popover pattern. Do not create one preview DOM subtree per link.
- Open on pointer hover and keyboard focus after a short delay; close on blur, Escape, pointer leave, or scroll.
- On coarse pointers, do not open hover previews. The link should simply navigate.
- Preview content must be ignored by Pagefind and must not add layout shift.

Strong emphasis:

- Define `.prose strong` with a slightly stronger weight and ink color.
- Optionally add a very subtle underline-offset or background linear accent for claim emphasis, but avoid warning-yellow highlight or badge-like treatment.
- Keep nested links and provenance markers readable inside `strong`.

### Named Tokens And Classes

| Name | Role |
|---|---|
| `--link-route` | Base route wikilink text color. |
| `--link-peer` | Peer wikilink hover/focus accent. |
| `--link-system` | System/regulatory wikilink accent. |
| `--link-underline-rest` | Low-chroma default underline. |
| `--link-underline-hover` | Hover/focus underline. |
| `--preview-bg` | Hover preview surface. |
| `--preview-border` | Hover preview border. |
| `--strong-ink` | Editorial strong-emphasis text color. |
| `.wl`, `.wl--route`, `.wl--peer`, `.wl--system`, `.wl-broken` | Wikilink states. |
| `.wl-preview`, `.wl-preview__title`, `.wl-preview__lead`, `.wl-preview__meta` | Shared preview UI. |
| `.prose strong` | Editorial emphasis. |

### Future Allowed Files

- `site/src/plugins/remark-wikilink.mjs`
- `site/src/lib/routes.ts`
- `site/src/lib/siteIndex.mjs`
- Optional new `site/src/lib/entryPreviewIndex.mjs`
- `site/src/layouts/Base.astro` only if a shared preview script/container is used
- `site/src/styles/global.css`
- `site/src/i18n/ui.ts` only for localized preview labels
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

## Slice 3: Cross-Entry Discovery At Article End

### Current Vs Desired

| Current | Desired |
|---|---|
| Entry pages end after rendered prose. | Entry pages end with an article-end discovery panel. |
| Related movement depends on inline wikilinks, domain rail, TOC, or manual browse. | The panel exposes related, read-next, and "what links here" entries from existing data only. |
| There is no human-site reverse-link index. | A build-time reverse-link index records which entries link to the current route. |
| Optional `related` frontmatter may exist but is not the main entry-end behavior. | Optional `related` can contribute, but the first H3 pass must work without new curation. |

### Concrete Treatment

Article-end panel:

- Add a `.entry-discovery` section after `.prose`.
- Use three compact lanes:
  - `.entry-discovery__lane--related`: same-domain siblings and shared-tag matches.
  - `.entry-discovery__lane--next`: deterministic read-next candidate from the same domain, using route order and canonical/read-first scoring as a tiebreaker.
  - `.entry-discovery__lane--backlinks`: entries that link to the current route.
- Cap each lane to a small number such as 3 to 5 items to avoid creating a second browse page inside an article.
- Show title, domain, one-line lead, and route for each item.
- De-duplicate across lanes in priority order: explicit frontmatter `related`, backlinks, shared tags, same-domain siblings.
- If a lane has no entries, omit the lane rather than showing an empty state.
- Keep the panel below the article body, not in the right TOC rail, so the reading path remains title -> evidence -> prose -> next reading.

Reverse-link index:

- Build at static generation time from resolved wikilinks, not raw string matching.
- Store route-to-route links after localization-independent route normalization.
- Exclude self-links and broken links.
- Keep output internal to the site build unless a later issue explicitly adds a public machine surface.
- Use the same localized title and lead resolver as search/browse previews.

Scope boundary:

- Do not add new entity curation.
- Do not require corpus-wide frontmatter edits.
- Do not move or rewrite the body `Sources` section.
- Do not add a sources sidebar in H3; source visibility remains in the evidence strip and body source section.
- H2 / #26 can later replace or augment this panel with a richer entity graph.

### Named Tokens And Classes

| Name | Role |
|---|---|
| `--discovery-border` | Article-end panel separators. |
| `--discovery-kicker` | Lane kicker / label color. |
| `--discovery-route` | Route text color. |
| `.entry-discovery` | Article-end discovery wrapper. |
| `.entry-discovery__lane` | Lane wrapper. |
| `.entry-discovery__lane--related` | Existing-data related lane. |
| `.entry-discovery__lane--next` | Read-next lane. |
| `.entry-discovery__lane--backlinks` | Reverse-link lane. |
| `.entry-card`, `.entry-card__title`, `.entry-card__lead`, `.entry-card__meta`, `.entry-card__route` | Compact article-end cards. |

### Future Allowed Files

- `site/src/layouts/EntryLayout.astro`
- `site/src/lib/routes.ts`
- `site/src/lib/siteIndex.mjs`
- Optional new `site/src/lib/entryDiscovery.mjs`
- Optional new `site/src/lib/reverseLinks.mjs`
- `site/src/i18n/ui.ts`
- `site/src/styles/global.css`
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

## Slice 4: Search And Browse Scanning

### Current Vs Desired

| Current | Desired |
|---|---|
| Browse groups all entries by domain and filters by title/route substring. | Browse defaults to a reader-scannable list with sort controls and lead excerpts. |
| Domain jump chips are available; facets are absent. | Keep domain jumps; add sort/excerpt first. Treat facets as a later follow-up. |
| Results are title-only in browse. | Each browse item shows title, domain, route, last-updated when available, and a short lead. |
| Pagefind modal is wired and language-scoped. | Pagefind results expose useful excerpts and keep result styling aligned with the editorial surface. |

### Concrete Treatment

Browse:

- Keep the sticky filter and full corpus coverage.
- Add a `.browse__sort` control with these first-pass options:
  - `recommended`: current domain/read-first scoring plus freshness tiebreaker.
  - `recent`: `last_updated` descending when available.
  - `title`: localized title ascending.
  - `domain`: grouped domain order for maintainers.
- Default to `recommended` for reader usefulness.
- Render entries as `.browse-result` items with:
  - title
  - localized domain
  - route
  - optional `last_updated`
  - lead excerpt
- Keep the domain jump list as a secondary navigation aid. When sort is not `domain`, jumps can scroll to filtered domain clusters only if clusters are still rendered; otherwise they should be hidden or replaced by a simple domain count summary.
- Do not add facets in C4. Facets require a separate information-architecture decision.

Lead excerpt contract:

- Use the same excerpt resolver for browse, Pagefind preview tuning, wikilink previews, and discovery cards.
- Prefer localized summary / first paragraph text. Fall back to source summary, then title.
- Strip Markdown, provenance markers, raw wikilink syntax, and source footnote markers from excerpts.
- Keep excerpts to 140-220 characters depending on language and surface.

Pagefind:

- Preserve `data-pagefind-body` on main content and `data-pagefind-ignore` for rails/chrome.
- Ensure entry pages provide enough body text and metadata for Pagefind excerpts to be meaningful.
- Style Pagefind result titles, excerpts, tags, and focus states using existing Pagefind CSS variables plus FinWiki tokens.
- Do not replace Pagefind with a custom search engine in H3.

### Named Tokens And Classes

| Name | Role |
|---|---|
| `--browse-result-border` | Result separators. |
| `--browse-excerpt` | Excerpt text color. |
| `--browse-route` | Route metadata color. |
| `--search-excerpt` | Pagefind excerpt text color. |
| `.browse__sort`, `.browse__sort-label`, `.browse__sort-control` | Browse sort controls. |
| `.browse-result`, `.browse-result__title`, `.browse-result__lead`, `.browse-result__meta`, `.browse-result__route` | Browse result cards/rows. |
| `.pagefind-ui__result-excerpt` | Pagefind excerpt styling hook, using Pagefind's generated class. |

### Future Allowed Files

- `site/src/pages/[lang]/browse/index.astro`
- `site/src/layouts/Base.astro` only if Pagefind modal configuration changes
- `site/src/lib/siteIndex.mjs`
- Optional new `site/src/lib/entryExcerpt.mjs`
- `site/src/i18n/ui.ts`
- `site/src/styles/global.css`
- `docs/05-functional-specs/search.md`
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

## Proposed Batched Execution Issues

Each batch should be one issue, one branch, and one PR. Batches may share small helper code only when the issue's Allowed Files explicitly permits it.

### C1: Tables, Matrices, And Timelines

Scope:

- Add build-time table enhancement for sticky headers / sticky first column.
- Add mobile wide-matrix card collapse using generated cell labels.
- Add semantic timeline transform for conservative year/event blocks.
- Add visual QA cases for sticky table, card-collapse table, and timeline rendering.

Allowed Files:

- `site/astro.config.mjs`
- `site/src/plugins/remark-responsive-tables.mjs` or equivalent narrow plugin
- `site/src/styles/global.css`
- `site/src/i18n/ui.ts` only if localized fallback labels are needed
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

Validation:

- `bun run release:check`
- `bun run i18n:status`
- `bun run wiki:audit:ci`
- `bun run html:check`
- `bun run docs:audit`
- `git diff --check`
- Visual QA: Japanese and English table-heavy entry, long matrix entry, and one chronology entry at 375 / 768 / 1440 in light and dark.

### C2: Prose, Wikilink Hierarchy, Preview, And Strong Emphasis

Scope:

- Extend wikilink rendering with target-kind classification.
- Add calm type-differentiated link styling.
- Add progressive hover/focus preview with localized title and lead.
- Add editorial `.prose strong` rule.

Allowed Files:

- `site/src/plugins/remark-wikilink.mjs`
- `site/src/lib/routes.ts`
- `site/src/lib/siteIndex.mjs`
- Optional new `site/src/lib/entryPreviewIndex.mjs`
- `site/src/layouts/Base.astro`
- `site/src/styles/global.css`
- `site/src/i18n/ui.ts`
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

Validation:

- `bun run release:check`
- `bun run i18n:status`
- `bun run wiki:audit:ci`
- `bun run html:check`
- `bun run docs:audit`
- `git diff --check`
- Visual QA: dense wikilink paragraph, broken wikilink state, keyboard focus preview, reduced-motion behavior, and coarse-pointer behavior in Japanese and English.

### C3: Article-End Discovery

Scope:

- Add build-time reverse-link index from resolved wikilinks.
- Add article-end related / read-next / backlinks panel using existing data only.
- Reuse localized title and excerpt resolver.
- Keep sources in body/evidence strip; do not add a sources sidebar.

Allowed Files:

- `site/src/layouts/EntryLayout.astro`
- `site/src/lib/routes.ts`
- `site/src/lib/siteIndex.mjs`
- Optional new `site/src/lib/entryDiscovery.mjs`
- Optional new `site/src/lib/reverseLinks.mjs`
- `site/src/i18n/ui.ts`
- `site/src/styles/global.css`
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

Validation:

- `bun run release:check`
- `bun run i18n:status`
- `bun run wiki:audit:ci`
- `bun run html:check`
- `bun run docs:audit`
- `git diff --check`
- Visual QA: entry with many same-domain siblings, entry with shared tags, entry with incoming wikilinks, and entry with no available discovery lanes.

### C4: Search And Browse Excerpts

Scope:

- Add browse sort controls.
- Add lead excerpts and metadata to browse results.
- Tune Pagefind result excerpts and styling.
- Keep facets as a documented follow-up, not part of C4.

Allowed Files:

- `site/src/pages/[lang]/browse/index.astro`
- `site/src/layouts/Base.astro` only if Pagefind modal configuration changes
- `site/src/lib/siteIndex.mjs`
- Optional new `site/src/lib/entryExcerpt.mjs`
- `site/src/i18n/ui.ts`
- `site/src/styles/global.css`
- `docs/05-functional-specs/search.md`
- `docs/05-functional-specs/ui-ux.md`
- `docs/07-quality/visual-qa-checklist.md`

Validation:

- `bun run release:check`
- `bun run i18n:status`
- `bun run wiki:audit:ci`
- `bun run html:check`
- `bun run docs:audit`
- `git diff --check`
- Visual QA: `/ja/browse/`, `/en/browse/`, Pagefind modal from header and home hero, sort changes, empty filter state, and mobile overflow at 375.

## Cross-Slice Shared Contracts

| Contract | Requirement |
|---|---|
| Excerpt resolver | If more than one C-batch needs excerpts, create one shared resolver rather than duplicating extraction rules in page code. |
| Localization | Every visible label added by C1-C4 goes through `site/src/i18n/ui.ts` for Japanese and English. |
| Static data | Build-time maps are allowed; runtime network fetches are not. |
| JavaScript | Use page-local or shared progressive enhancement only. No framework island for these slices. |
| Focus | Hover-only affordances must also work on keyboard focus or be omitted from keyboard flow. |
| Reduced motion | Preview transitions and table/card reveal behavior must respect `prefers-reduced-motion`. |
| Pagefind | Keep Pagefind as the search layer. Do not hide body content from indexing while adding previews/discovery panels. |
| Corpus safety | Do not edit body corpus to make UI work unless a future issue explicitly names those files. |

## Non-Goals

- No implementation in this issue.
- No changes to `site/src/**`, design tokens, generated surfaces, or corpus files in this issue.
- No new entity curation, ownership graph, relation graph, or manual related-entry campaign.
- No replacement of Pagefind.
- No heavy client-side table library.
- No generic marketing landing page or decorative UI layer.
- No default-dark redesign.
- No visual changes that rely on color alone.

## Acceptance For This Planning Issue

- This document exists at `docs/02-product/human-site-reading-experience-spec.md`.
- It uses the current #98 editorial system as the baseline and deepens #23 into four future implementation slices.
- It documents current-vs-desired behavior for tables/matrices/timelines, prose/wikilinks, cross-entry discovery, and search/browse.
- It names CSS tokens/classes, data contracts, Allowed Files, and validation for C1-C4.
- It preserves Japanese / English constraints, WCAG 2.2, Astro static performance, Core Web Vitals, font discipline, light default, intentional dark mode, and anti-template direction.
- It does not modify `site/src/**`, design tokens, corpus files, generated surfaces, `README.md`, `CHANGELOG.md`, or release notes.

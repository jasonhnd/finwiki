# UI/UX Functional Specification

## Scope

This is the FSD entry point for human-site UI/UX. Product rationale is in [UI/UX Principles](../02-product/ui-ux-principles.md). The editorial redesign baseline is in [Human Site Editorial Design](../02-product/human-site-editorial-design.md). Theme architecture is in [Theme System](../04-architecture/theme-system.md). Visual validation is in [Visual QA Checklist](../07-quality/visual-qa-checklist.md).

This spec covers:

- Shell: masthead header, navigation, search trigger, theme toggle, language switcher, footer.
- Root, localized home, domain list, domain detail, browse, and entry pages.
- Entry metadata, source/provenance affordances, TOC, wikilinks, article-end discovery, and translation badges.
- Responsive behavior, Japanese UI chrome, and editorial performance guardrails.

It does not cover wiki body authoring rules, which live in [Entry Authoring](../06-implementation/entry-authoring.md), or machine discovery surfaces, which live in [AI Discovery Surface](ai-discovery-surface.md).

## Current Implementation Baseline

The current site implementation is the baseline to preserve. A UI/CSS issue should start from this table, then state the exact delta it wants.

| Area | Current Implementation | Must Preserve |
|---|---|---|
| Theme and typography | `global.css` defines editorial light tokens in `:root`, market-desk dark overrides in `[data-theme="dark"]`, self-hosted Latin `Source Serif 4` / `Inter`, and system CJK stacks. | Warm paper light mode, dark mode contrast, serif-led hierarchy, language-aware body stacks, token-first color changes, no downloaded CJK fonts. |
| Header shell | `Base.astro` renders `.site-header`, editorial `.brand` masthead with localized subtitle, `.site-nav`, `.header-tools`, Pagefind trigger, `ThemeToggle`, `LangSwitcher`, and footer. | Sticky compact header, skip link, Home / Domains / Browse / AI navigation with `aria-current="page"` and underline active state, Pagefind modal wiring, no overlap at narrow widths. |
| Root entry | `site/src/pages/index.astro` renders `.root-masthead`, `.root-entry-paths`, `.start-lanes`, `.root-proof`, and `.root-ai`. | FinWiki masthead leads; bilingual language entries are first-class; Start-with lanes are reader-oriented; corpus stats and AI links are supporting surfaces. |
| Localized home | `[lang]/index.astro` renders `.home-hero`, `.home-search`, `.home-proof`, `.review-strip`, `.canonical-strip`, `.taxonomy-grid`, and `.ai-band`. | Search remains in the first viewport; Latest-reviewed and Canonical-routes strips have distinct kicker/title treatment; guided taxonomy uses descriptions, not only counts; AI links stay technical. |
| Domains | `domains/index.astro` uses `.domains__head`, `.domain-section`, `.domain-card`; `domains/[domain]/index.astro` uses `.domain-opener`, `.domain-brief`, optional search filter, and route-visible lists. | Grouped taxonomy, localized names/descriptions, muted counts, domain briefings, canonical read-first links, route visibility for maintainers, filter only when useful. |
| Browse | `browse/index.astro` uses sticky `.browse__bar`, `.browse__sort`, reader-facing `.browse-result` rows with lead excerpts, optional update metadata, route slugs, and client-side filter/sort. Domain jump chips remain available as a secondary aid in domain sort. | Full-corpus scan, recommended default sorting, localized sort/filter labels, shared lead excerpts, localized empty state, route visibility, no facets in C4, and no page-level overflow. |
| Entry | `EntryLayout.astro` uses `.doc` grid, `.drail--left`, `.doc-article`, `.entry-head`, `.evidence-strip`, `.toc--rail`, `.toc-inline`, and `.prose`. | Desktop rails, central reading width, quiet provenance/freshness evidence, machine-translation badge, current-group domain orientation, inline TOC fallback. |
| Entry-end discovery | `EntryLayout.astro`, `entryDiscovery.mjs`, `reverseLinks.mjs`, and `global.css` render `.entry-discovery` after `.prose`. | Discovery uses existing frontmatter, same-domain siblings, shared tags, deterministic read-next ordering, and resolved-wikilink backlinks only; empty lanes are omitted and sources remain in the body/evidence strip. |
| Prose | `global.css` `.prose` covers paragraph rhythm, headings, lists, blockquotes, code, pre, images, tables, editorial `strong`, provenance links, target-kind wikilinks, and the shared wikilink preview surface. | Long Japanese text readability, table horizontal scrolling inside the content area, no page-level overflow, wikilink and source affordances, keyboard-accessible previews, broken-link visibility, and non-warning strong emphasis. |
| Tables, matrices, and timelines | `remark-responsive-tables.mjs` wraps meaningful Markdown tables in `.prose-table-scroll`, adds sticky/table-card classes and generated `data-label` attributes, and converts only conservative dated blocks to `.timeline`. | Real table semantics, wikilinks/provenance inside cells, no two-column key/value card collapse, original chronology order, and no inferred timeline events. |

## Editorial Behavior Contracts

Drafts A+B+C established these contracts. Future changes must preserve them unless the issue explicitly changes the contract and updates this spec plus the visual QA checklist.

| ID | Contract | Implementation Surface | Requirement |
|---|---|---|---|
| ED-001 | Editorial masthead and active nav | `site/src/layouts/Base.astro`, `global.css` | `FinWiki` uses display-serif masthead treatment; wide layouts show a localized subtitle; Home / Domains / Browse / AI links set `aria-current="page"` on the active item and show an underline or equivalent non-color-only active cue. |
| ED-002 | Root Start-with lanes | `site/src/pages/index.astro` | `/` must lead with `.root-masthead` and bilingual entry paths, then `.start-lanes` organized by reader intent. Counts and machine-readable links remain secondary proof, not the hero message. |
| ED-003 | Localized Latest-reviewed strip | `site/src/pages/[lang]/index.astro` | `/{lang}/` must show a `.review-strip` after the hero/search proof area. Cards must expose domain, title, and last-updated metadata using localized labels. |
| ED-004 | Localized Canonical-routes strip | `site/src/pages/[lang]/index.astro` | `/{lang}/` must show `.canonical-strip` with a distinct kicker from `home.canonicalRoutesKicker` and a title from `home.canonicalRoutes`. If the full canonical route set is unavailable, omit the strip instead of rendering a partial broken guide. |
| ED-005 | Guided domain taxonomy | `site/src/pages/[lang]/index.astro`, `domains/index.astro`, `site/src/i18n/groups.ts`, `site/src/i18n/domains.ts` | Home and domain-list taxonomy must use localized group/domain descriptions. Counts are secondary badges, not the primary reading hierarchy. |
| ED-006 | Domain briefings | `site/src/pages/[lang]/domains/[domain]/index.astro` | Domain detail pages must lead with `.domain-opener` and `.domain-brief`, including what the domain covers, read-first entries, canonical anchors, and then the route list. |
| ED-007 | Evidence strip | `site/src/layouts/EntryLayout.astro` | Entry pages must surface confidence, last updated, review-by when present, source count, machine-translation badge, and original-language link through `.evidence-strip`. Evidence is visible but quieter than H1 and lead content. |
| ED-008 | De-databased entry rail | `site/src/layouts/EntryLayout.astro` | Desktop left rail shows the current domain group plus an All domains link. It must not expose every domain count on every entry. It hides below the existing `820px` threshold. |
| ED-009 | Entry-end discovery | `site/src/layouts/EntryLayout.astro`, `site/src/lib/entryDiscovery.mjs`, `site/src/lib/reverseLinks.mjs`, `global.css` | Entry pages may render `.entry-discovery` below `.prose`, never in the TOC rail. Lanes are related, read-next, and backlinks; each item shows localized title, domain, one-line lead, and route using `.entry-card__*`; empty lanes are omitted. Reverse links come from resolved wikilinks, not raw route-string matching, and exclude broken/self links. |
| ED-010 | Bilingual chrome | `site/src/i18n/ui.ts`, `domains.ts`, `groups.ts` | Japanese and English UI chrome must be localized for nav, search, metadata, empty states, badges, home sections, domain descriptions, entry discovery, and filters. Japanese pages may show English only for allowed artifacts and proper nouns. |
| ED-011 | Editorial performance | `global.css`, `Base.astro`, page-local scripts | Preserve static Astro rendering, Pagefind search, small page-local filters/TOC behavior, build-time discovery indexes, at most two webfont families, one font preload, `font-display: swap`, `size-adjust` overrides, and no page-level horizontal overflow. |

## Functional Requirement

| ID | Function | Implementation Surface | Requirement |
|---|---|---|---|
| FSD-008-001 | Site shell | `site/src/layouts/Base.astro` | Render compact editorial masthead, skip link, Home / Domains / Browse / AI navigation, language routes, Pagefind modal, footer, and `data-pagefind-*` boundaries. |
| FSD-008-002 | Theme switching | `ThemeToggle.astro`, `global.css` | Toggle light/dark without flash, persist `finwiki-theme`, and keep both token sets readable at WCAG AA contrast targets. |
| FSD-008-003 | Language switching | `LangSwitcher.astro`, `site/src/i18n/ui.ts` | Preserve current route context across `ja/en`; show active language clearly. |
| FSD-008-004 | Search | Pagefind trigger/modal and [Search](search.md) | Header and home search must open Pagefind and search within the current language. `Ctrl/Cmd+K` opens the same modal. Result excerpts, tags, and focus states must use Pagefind's generated classes plus FinWiki tokens rather than replacing Pagefind. |
| FSD-008-005 | Root entry | `site/src/pages/index.astro` | Provide bilingual reader entry paths, Start-with lanes, corpus proof, and AI/crawler links without becoming a marketing-only landing page. |
| FSD-008-006 | Localized home | `site/src/pages/[lang]/index.astro` | First screen exposes editorial headline/deck, search, and corpus proof; below it expose Latest-reviewed, Canonical-routes, guided taxonomy, and AI metadata. |
| FSD-008-007 | Domain list | `site/src/pages/[lang]/domains/index.astro` | Group domains by product taxonomy and show localized descriptions plus secondary counts in compact cards. |
| FSD-008-008 | Domain detail | `site/src/pages/[lang]/domains/[domain]/index.astro` | Show breadcrumbs, domain opener, coverage briefing, read-first/canonical anchors, counts, optional filter, route slugs, and translated markers. |
| FSD-008-009 | Browse page | `site/src/pages/[lang]/browse/index.astro` | Provide full corpus scan with default `recommended` sorting, plus `recent`, `title`, and `domain` sort controls. Each `.browse-result` must show localized title, localized domain, route, optional `last_updated`, and shared lead excerpt. Keep the sticky filter and localized no-match state; keep domain jumps as a secondary aid for domain grouping; do not add facets in C4. |
| FSD-008-010 | Entry page | `EntryLayout.astro` | Show breadcrumb, title, confidence/review/source evidence strip, machine translation badge, tags, current-group left domain rail with All domains link, right TOC or mobile inline TOC, and prose. |
| FSD-008-011 | Prose | `global.css` `.prose` rules | Markdown headings, links, tables, code, blockquotes, provenance links, and wikilinks must remain readable in long financial reference pages. |
| FSD-008-012 | Financial tables and timelines | `site/src/plugins/remark-responsive-tables.mjs`, `global.css` | Build-time rendering must wrap enhanceable tables in `.prose-table-scroll`; apply `.prose-table--sticky` only when the header row and first-column labels are meaningful; apply `.prose-table--cards` only to three-column-or-wider matrices with generated cell `data-label`s; and transform only conservative dated blocks into ordered `.timeline` markup. |
| FSD-008-013 | Wikilink hierarchy, preview, and strong emphasis | `site/src/plugins/remark-wikilink.mjs`, `site/src/lib/siteIndex.mjs`, `site/src/lib/entryPreviewIndex.mjs`, `Base.astro`, `global.css` | Resolved wikilinks must keep `.wl` and add `.wl--route`, `.wl--peer`, or `.wl--system` with `data-wl-kind`; broken links remain muted dotted spans with no preview data. Entry pages progressively enhance current-page wikilinks with one Pagefind-ignored `.wl-preview` surface that opens after a short hover/focus delay, uses localized title/lead/domain/route data, closes on blur, Escape, pointer leave, scroll, or resize, and stays disabled on coarse pointers. `.prose strong` must read as editorial emphasis, not a warning badge or highlight. |
| FSD-008-014 | Article-end discovery | `site/src/layouts/EntryLayout.astro`, `site/src/lib/entryDiscovery.mjs`, `site/src/lib/reverseLinks.mjs`, `global.css` | Build a reverse-link index from resolved wikilinks at static generation time; render `.entry-discovery` after `.prose` with related, read-next, and backlinks lanes capped to compact lists. Candidate de-duplication prioritizes explicit frontmatter `related`, backlinks, shared tags, and same-domain siblings, while read-next stays deterministic within the same domain. |

## CSS Class Contract

These classes are treated as part of the current UI template. Renaming or removing them is a UI behavior change because docs, QA, and future issues refer to them.

| Class / Pattern | Owner | Role |
|---|---|---|
| `.container`, `.container--wide`, `.site-main` | `global.css` | Width and page layout primitives. |
| `.site-header`, `.site-header__inner`, `.site-nav`, `.header-tools` | `global.css`, `Base.astro` | Sticky shell and navigation. |
| `.brand`, `.brand small`, `.search-trigger` / `.pf-trigger`, `.icon-btn`, `.lang-switch` | `global.css`, components | Editorial masthead brand, localized subtitle, search, theme, and language controls. |
| `.root-masthead`, `.root-entry-paths`, `.root-entry`, `.start-lanes`, `.start-lane`, `.root-proof`, `.root-ai` | `index.astro` | Root bilingual entrance, Start-with lanes, corpus proof, and technical links. |
| `.home-hero`, `.home-search`, `.pf-hero`, `.home-proof`, `.home-block`, `.review-strip`, `.review-card`, `.canonical-strip`, `.canonical-route`, `.taxonomy-grid`, `.taxonomy-group`, `.ai-band` | `[lang]/index.astro` | Localized editorial home, search, latest-reviewed, canonical routes, guided taxonomy, and AI metadata. |
| `.domains__head`, `.domains__groups`, `.domain-section`, `.domain-card` | `[lang]/domains/index.astro` | Domain list editorial taxonomy and count-bearing cards. |
| `.domain-opener`, `.domain-brief`, `.domain-anchors`, `.domain__bar`, `.domain__filter`, `.domain__list`, `.domain__route` | `[lang]/domains/[domain]/index.astro` | Domain briefing, read-first links, canonical anchors, and filterable route inventory. |
| `.browse__bar`, `.browse__filter`, `.browse__sort`, `.browse__sort-label`, `.browse__sort-control`, `.browse__jump`, `.browse__results`, `.browse-result`, `.browse-result__title`, `.browse-result__lead`, `.browse-result__meta`, `.browse-result__route` | `[lang]/browse/index.astro`, `global.css` tokens | Browse filter, sorting, full-corpus result scan, lead excerpts, route metadata, and secondary domain jumps. |
| `.chip`, `.chip--accent`, `.chip--warn`, `.dot` | `global.css`, `EntryLayout.astro` | Metadata, provenance, status, and translation badges. |
| `.card`, `.card__kicker`, `.card__title`, `.card__meta` | `global.css`, page components | Compact repeated entry/domain surfaces where still used. |
| `.wl`, `.wl--route`, `.wl--peer`, `.wl--system`, `.wl-broken`, `.wl-preview`, `.wl-preview__title`, `.wl-preview__lead`, `.wl-preview__meta`, `.prov-*` | `global.css`, Markdown rendering, `Base.astro` | Target-kind wikilink affordances, shared hover/focus preview UI, broken-link state, and provenance affordances. |
| `.entry-discovery`, `.entry-discovery__head`, `.entry-discovery__kicker`, `.entry-discovery__lanes`, `.entry-discovery__lane`, `.entry-discovery__lane--related`, `.entry-discovery__lane--next`, `.entry-discovery__lane--backlinks`, `.entry-discovery__list`, `.entry-card`, `.entry-card__title`, `.entry-card__lead`, `.entry-card__meta`, `.entry-card__route` | `EntryLayout.astro`, `global.css` | Article-end related/read-next/backlink discovery panel and compact cards. |
| `.prose` and nested Markdown rules | `global.css` | Entry body typography and financial tables. |
| `.prose-table-scroll`, `.prose-table--sticky`, `.prose-table--cards` | `remark-responsive-tables.mjs`, `global.css` | Enhanced table scroll container, desktop/tablet sticky header and row-label column, and mobile matrix card-collapse mode. |
| `.matrix-card__title`, `.matrix-card__field` | `remark-responsive-tables.mjs`, `global.css` | Mobile matrix row-card title cell and generated label/value fields. |
| `.timeline`, `.timeline__item`, `.timeline__date`, `.timeline__event` | `remark-responsive-tables.mjs`, `global.css` | Semantic chronology rendering for conservative dated event blocks. |
| `.doc`, `.drail`, `.drail--left`, `.drail--right`, `.doc-article`, `.entry-head`, `.evidence-strip`, `.evidence-item`, `.evidence-badge`, `.tagrow`, `.toc`, `.toc-inline` | `EntryLayout.astro` | Entry page editorial reference layout, evidence metadata, tags, and responsive rails. |

## Breakpoint Contract

- Visual QA screenshots must cover `375`, `768`, and `1440` widths.
- Header search label becomes visible from the existing `720px` threshold in `global.css`.
- Header layout tightens below `1040px`; header tools can wrap below `720px`.
- Localized home strips and taxonomy reduce below `940px` and again below `620px`; AI links reduce below `460px`.
- Root Start-with lanes and technical links reduce below `720px`; root stats reduce below `560px`.
- Entry right TOC is hidden below `1080px`; inline TOC is shown instead.
- Entry left domain rail is hidden below `820px`.
- Domain detail columns reduce below `900px`. Browse filter/sort controls stack around `560px`, while result rows remain single-column at every breakpoint.
- Future breakpoints should be introduced only when a concrete page or text-overflow problem requires them.

## Page-Level Behavior

| Page | Required UX |
|---|---|
| `/` | Editorial bilingual entrance. Masthead, language paths, Start-with lanes, corpus proof, and AI/crawler links must be visible in that hierarchy. |
| `/{lang}/` | Actual reader entry, not a marketing landing page. Search and corpus proof must be available in the first viewport, followed by Latest-reviewed, Canonical-routes, guided taxonomy, and AI metadata. |
| `/{lang}/domains/` | Domain groups are scannable; descriptions explain reader value; counts use muted tabular numeric treatment where practical. |
| `/{lang}/domains/{domain}/` | Domain opener and briefing lead; long lists use filter when needed; routes are visible enough for maintainers without overpowering reader titles. |
| `/{lang}/browse/` | Filter and sort should be fast, sticky, and usable with Japanese/English titles, localized domains, lead excerpts, update dates, and slugs. Recommended sort is the reader default; domain sort is the maintainer grouping mode. |
| `/{lang}/{domain}/{slug}/` | Entry metadata and provenance appear before the body; rails help orientation on desktop and collapse cleanly on mobile. |

## Responsive Rules

- Header navigation and tools must not overlap at narrow widths; if future content length grows, prefer wrapping or hiding labels before shrinking text below usable size.
- Root entry cards, Start-with lanes, home strips, taxonomy groups, domain cards, evidence strips, and route rows must wrap without clipping text.
- Entry right TOC is hidden below the existing `1080px` layout threshold and replaced by inline TOC when enough headings exist.
- Entry left domain rail is hidden below the existing `820px` threshold.
- Browse result rows remain single-column and wrap long titles, excerpts, dates, domains, and route slugs below `560px`; the filter and sort controls stack instead of shrinking text.
- Wide tables must scroll horizontally inside `.prose table`; page-level horizontal overflow is not acceptable.

## Japanese UI Chrome

- Japanese pages must use Japanese UI labels for navigation, search, metadata, empty states, home sections, domain labels, filters, and badges.
- Keep English visible only for proper nouns, route slugs, acronyms, protocol names, source titles, and machine artifact names such as `llms.txt`.
- When a Japanese page visibly falls back to English UI chrome, treat it as a functional defect even if the page renders.

## Performance And Font Contract

- Keep Astro static rendering and Pagefind as the search layer.
- Do not add a client framework for layout, taxonomy, rails, or editorial home behavior.
- Keep the webfont family budget at `2` families maximum: `Source Serif 4` and `Inter`.
- Keep the font preload budget at `1` preload in `Base.astro`.
- All webfont rules must use `font-display: swap`, unicode ranges, `size-adjust`, ascent/descent overrides, and `line-gap-override`.
- CJK body and display fallback must stay on system CJK fonts; do not add downloaded CJK webfonts.
- Target CLS is `< 0.1`; font swap must not visibly move mastheads, entry titles, headers, or table layouts.

## States

| State | Requirement |
|---|---|
| Active navigation | Use `aria-current="page"` plus a visible non-color-only active cue. |
| Focus | `:focus-visible` must be visible on links, buttons, search inputs, language controls, filters, Pagefind modal controls, TOC links, and source links. |
| Hover | Hover should clarify affordance without layout shift. |
| Empty filter result | Browse/domain filters must show localized empty text. |
| Machine translation | Badge must remain visible on translated entry pages with `status: machine`. |
| Missing translation fallback | User must still reach content; original-language route link should be available where configured. |
| Reduced motion | `prefers-reduced-motion: reduce` must disable non-essential transitions and animations. |

## Acceptance

- [Visual QA Checklist](../07-quality/visual-qa-checklist.md) passes for any UI/CSS/layout change.
- `bun tools/release.ts --check --strict` passes for rendered-site changes.
- Astro build and duplicate-id check pass when site rendering changes.
- `bun run docs:audit` passes for documentation-only UI/UX changes.
- No English UI chrome leakage on Japanese pages except allowed proper nouns/artifacts.
- No mobile horizontal overflow on header, entry title, evidence strip, entry discovery, domain lists, browse list, prose tables, or source sections.

# Human Site Editorial Design Specification

Status: draft for implementation planning  
Issue: #98  
Date: 2026-06-25 JST  
Scope: human-facing Astro site only. This document does not authorize corpus, token, layout, or component changes by itself.

## Goal

Move the human site from a competent reference template toward a deliberate financial editorial product: closer to a compact FT / Economist / Nikkei Asia reading system than a database index. The site should still expose search, provenance, freshness, and route structure, but those mechanics should support reading rather than dominate the first impression.

The implementation should stay fast, static, and bilingual (ja/en). Japanese remains the primary first-class reading surface; English should feel intentionally designed, not like translated chrome placed inside a Japanese-only template.

## Current-State Audit

The current implementation is usable and internally consistent, but the visible design reads as "reference database with cards" in several places.

| Surface | Current implementation | Why it feels generic or database-like | Keep |
|---|---|---|---|
| `site/src/layouts/Base.astro` | Sticky header with brand, nav, Pagefind trigger, theme toggle, language switcher, footer. | The shell is efficient, but the chrome has the neutrality of a docs template. The brand mark is mostly text, nav labels are utility-first, and there is no editorial masthead or section voice. | Skip link, localized nav, Pagefind modal wiring, theme and language controls, footer links. |
| `site/src/layouts/EntryLayout.astro` | Three-column reference grid: left domain rail, central article, right TOC, factbar chips, tag row. | The left rail exposes every domain group with counts, so article pages feel like a database console. The factbar is useful but chip-heavy. The article title competes with metadata rather than leading a reading experience. | Central reading width, provenance/freshness visibility, desktop TOC, mobile inline TOC, domain orientation. |
| `site/src/pages/index.astro` | Root hero, language entrance cards, counts, top domains by entry count, AI links. | Strongly statistical. The first screen says "knowledge graph" and count metrics before it tells a reader what kind of publication this is. | Bilingual (ja/en) entrances, corpus stats, AI/crawler entry points. |
| `site/src/pages/[lang]/index.astro` | Search-first hero, recent cards, grouped domain pills, AI links. | Recent-entry cards and domain groups are useful, but the page reads like a portal dashboard. There is no curated editorial hierarchy, no "start here" path by reader intent, and no featured guide. | Search in first viewport, recent updates, domain access, AI links. |
| `site/src/pages/[lang]/domains/index.astro` | Grouped domain card grids with counts. | Counts are visually equal to domain names; this is appropriate for maintainers but feels like inventory for readers. | Taxonomy grouping, localized names, counts. |
| `site/src/pages/[lang]/domains/[domain]/index.astro` | Filterable route list with slugs and translated dots. | Route visibility and grid list are maintainable, but the page gives no editorial summary of the domain or canonical entry path. It looks like a file browser. | Filter for long domains, route visibility, translated markers. |
| `site/src/styles/global.css` | Token-first cool-neutral system, serif display, sans body, cards, chips, prose, rails. | Tokens are clean, but the palette leans generic SaaS/reference. Cards and chips repeat across every surface, flattening hierarchy. Dark mode is legible but not a distinct editorial mode. | Token-first styling, readable prose, table handling, no layout overflow, reduced-motion handling. |

## Design Principles

1. Editorial hierarchy before inventory.
   The first impression should be "a serious financial field guide" rather than "a list of files." Inventory remains reachable but becomes secondary.

2. Evidence remains visible but quieter.
   Confidence, sources, review dates, machine translation badges, and route context are core product value. They should be composed as editorial metadata, not only utility chips.

3. Light mode is the default product.
   The default should be bright, print-adjacent, and calm. Dark mode should be a deliberate market-terminal reading mode, not the same palette inverted.

4. Both languages are designed, not merely translated.
   Japanese and English need language-specific typography stacks, line-height tuning, heading behavior, and line-length targets.

5. Static performance is non-negotiable.
   The design must preserve Astro static rendering, Pagefind, low JavaScript, fast first render, and stable Core Web Vitals.

## Reference Systems

Use these as directional references, not as assets to copy.

| Reference | Public URL | Useful lesson for FinWiki |
|---|---|---|
| Financial Times | https://www.ft.com/ | Warm editorial surface, section hierarchy, compact financial scanning, strong but restrained navigation. |
| The Economist | https://www.economist.com/ | Confident editorial voice, disciplined typographic scale, dense but clear issue-like hierarchy. |
| Nikkei Asia | https://asia.nikkei.com/ | Asia finance context, article-list density, section identity without heavy decoration. |
| Bloomberg | https://www.bloomberg.com/ | Market-information density, ticker-like metadata, strong contrast between live utility and long-form reading. |
| Stripe Press | https://press.stripe.com/ | Long-form readability, bookish spacing, restrained serif-led editorial feel. |

Do not borrow trademarks, proprietary layouts, exact color identities, or paywalled assets. Translate the lessons into FinWiki-owned tokens and layout contracts.

## Editorial Design System

### Typography

Use a serif-led hierarchy with a highly readable sans body. Avoid viewport-scaled type beyond bounded `clamp()` steps already used in the codebase.

| Token | Proposed value | Mapping |
|---|---|---|
| `--font-editorial-display` | `"Source Serif 4", "Iowan Old Style", "Palatino Linotype", "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif JP", serif` | Masthead, article H1, section openers, domain essays. |
| `--font-editorial-body-ja` | `"Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", system-ui, sans-serif` | Japanese body and UI. |
| `--font-editorial-body-en` | `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` | English body and UI. |
| `--font-editorial-mono` | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` | Routes, counts, source IDs, code. |

Language tuning:

| Language | Body size | Line-height | Reading measure | Notes |
|---|---:|---:|---:|---|
| Japanese | `1rem` to `1.0625rem` | `1.78` | `38rem` to `44rem` | Prefer slightly wider tracking only in labels, not body. Keep `palt`. |
| English | `1rem` to `1.0625rem` | `1.65` | `42rem` to `48rem` | Avoid compressed columns for long entity pages. |

Type scale:

| Token | Value | Use |
|---|---|---|
| `--fs-editorial-kicker` | `0.76rem` | Section labels, source labels, domain slugs. |
| `--fs-editorial-meta` | `0.86rem` | Dates, freshness, confidence, translated state. |
| `--fs-editorial-body` | `clamp(1rem, 0.98rem + 0.12vw, 1.0625rem)` | Article body. |
| `--fs-editorial-lead` | `clamp(1.12rem, 1.06rem + 0.28vw, 1.26rem)` | Home/entry leads. |
| `--fs-editorial-h2` | `clamp(1.42rem, 1.28rem + 0.58vw, 1.86rem)` | Prose H2, domain section names. |
| `--fs-editorial-h1` | `clamp(2.2rem, 1.72rem + 1.85vw, 3.35rem)` | Entry H1 and landing primary headline. |
| `--fs-editorial-masthead` | `clamp(2.8rem, 2.05rem + 3vw, 5rem)` | Root index masthead only. |

### Color

#### Palette Revision (2026-07-02): cool editorial + ink-blue

Retire the warm cream paper and terracotta/rust accent direction because it read as too close to Claude/Anthropic's warm brand. Move FinWiki to cool gray paper and ink-blue accents so the site feels like a distinct, serious financial reference. Light mode stays the default; dark mode becomes a cool market-desk reading mode.

Light mode should feel like cool financial paper and reference print, not a neutral SaaS dashboard. The approved accent system is ink-blue for masthead, H2 rules, and route links; cool teal for data/peer links; steel for regulatory/system anchors; cool green for source/provenance; and restrained amber only for machine-translation or overdue caution states.

| Token | Light value | Dark value | Mapping |
|---|---|---|---|
| `--paper-editorial` | `#eef1f5` | `#0e131a` | Page background. |
| `--surface-editorial` | `#f9fbfc` | `#151c25` | Article and cards. |
| `--surface-editorial-2` | `#e3e9f0` | `#1e2833` | Muted bands, inline TOC, table header. |
| `--ink-editorial` | `#131a22` | `#e6edf3` | Primary text. |
| `--ink-editorial-2` | `#41505d` | `#aeb9c4` | Secondary text. |
| `--muted-editorial` | `#6a7885` | `#8492a0` | Metadata and quiet route labels. |
| `--line-editorial` | `#cbd5df` | `#2b3742` | Hairlines and separators. |
| `--accent-editorial` | `#15486e` | `#5aa7d8` | Deep ink-blue for masthead, H2 rules, route links, active accents. |
| `--accent-editorial-2` | `#0f6d82` | `#4fb8c9` | Cool teal for data states and peer wikilinks. |
| `--link-system` | `#42586b` | `#8ea4b6` | Steel system/regulatory anchors; no standalone base system token exists today. |
| `--source-editorial` | `#2e6b52` | `#7fc59b` | Provenance/source success. |
| `--warn-editorial` | `#8f6a2a` | `#d6b25e` | Machine-translation and overdue caution only. |

Dark mode should lean toward "market desk at night": dark blue-gray paper, clear cool text, ink-blue/teal accents, steel regulatory anchors, and lower-chroma surfaces. Do not make dark the default.

Wikilink tiers should follow the approved H3 reading architecture: route = ink-blue underline, peer = teal with heavier underline, and system = small-caps plus dotted steel. This revises color only; the H3 structure, preview behavior, table/timeline architecture, and reading layout stay unchanged.

#### Token change checklist

The follow-up CODE issue must retune the current `global.css` color tokens in both `:root` and `[data-theme="dark"]` without changing `site/src/**` in this docs-only issue.

| Token(s) | Follow-up action |
|---|---|
| `--paper-editorial` | Needs explicit cool values: light `#eef1f5`, dark `#0e131a`. |
| `--surface-editorial` | Needs explicit cool values: light `#f9fbfc`, dark `#151c25`. |
| `--surface-editorial-2` | Needs explicit cool values: light `#e3e9f0`, dark `#1e2833`. |
| `--ink-editorial` | Needs explicit cool values: light `#131a22`, dark `#e6edf3`. |
| `--ink-editorial-2` | Needs explicit cool values: light `#41505d`, dark `#aeb9c4`. |
| `--muted-editorial` | Needs explicit cool values: light `#6a7885`, dark `#8492a0`. |
| `--line-editorial` | Needs explicit cool values: light `#cbd5df`, dark `#2b3742`. |
| `--accent-editorial` | Needs explicit ink-blue values: light `#15486e`, dark `#5aa7d8`. |
| `--accent-editorial-2` | Needs explicit cool teal values: light `#0f6d82`, dark `#4fb8c9`. |
| `--source-editorial` | Needs explicit cool green values: light `#2e6b52`, dark `#7fc59b`. |
| `--warn-editorial` | Needs explicit restrained amber values: light `#8f6a2a`, dark `#d6b25e`; reserve for machine-translation and overdue states. |
| `--paper`, `--surface`, `--surface-2`, `--ink`, `--ink-2`, `--muted`, `--line`, `--accent`, `--accent-2`, `--ok`, `--warn`, `--gold` | Should continue to inherit from the base editorial tokens; verify no warm literal remains. |
| `--surface-3`, `--line-2`, `--accent-soft`, `--gold-soft`, `--on-accent` | Likely stay derived from base tokens; verify mixes remain cool and meet contrast in light and dark. |
| `--table-sticky-bg`, `--table-card-bg`, `--preview-bg` | Likely inherit through surface mixes; verify financial tables, mobile matrix cards, and previews do not read warm or muddy. |
| `--table-sticky-shadow` | Likely inherit from `--ink-editorial`; verify shadow opacity against cool paper in both themes. |
| `--table-card-label`, `--timeline-date`, `--browse-excerpt`, `--browse-route`, `--search-excerpt` | Should inherit from `--muted-editorial`, `--accent-editorial-2`, or `--ink-editorial-2` as appropriate; verify readable contrast. |
| `--timeline-rail` | Likely stays a `--line-editorial` plus `--accent-editorial-2` mix; verify the rail stays cool and quiet. |
| `--link-route` | Needs explicit ink-blue behavior using `--accent-editorial` or an approved ink-blue mix; route links must no longer drift toward warm or generic text color. |
| `--link-peer` | Should resolve to teal via `--accent-editorial-2`; verify heavier underline treatment remains distinct from route links. |
| `--link-system` | Needs explicit steel system value: light `#42586b`, dark `#8ea4b6`; current source-green inheritance is not the approved system tier. |
| `--link-underline-rest`, `--link-underline-hover` | Need cool underline mixes aligned to ink-blue route, teal peer, and dotted steel system states. |
| `--preview-border`, `--discovery-border`, `--browse-result-border` | Likely inherit through `--line-editorial` mixes; verify borders remain visible without warm cast. |
| `--strong-ink` | Needs cool editorial emphasis; likely a mix of `--ink-editorial` and `--accent-editorial`, not amber or warning color. |
| `--discovery-kicker` | Should inherit from `--accent-editorial` ink-blue. |
| `--discovery-route` | Should inherit from `--muted-editorial` unless route labels need explicit ink-blue affordance in QA. |

### Rhythm And Layout

| Token | Proposed value | Mapping |
|---|---|---|
| `--measure-entry` | `46rem` | Entry prose max width. |
| `--measure-lead` | `54rem` | Landing and domain introductions. |
| `--rail-left` | `12.5rem` | Domain rail after redesign. |
| `--rail-right` | `12rem` | TOC rail after redesign. |
| `--chrome-height` | `64px` | Header height. |
| `--section-gap-editorial` | `clamp(3.5rem, 2.2rem + 4.5vw, 6.5rem)` | Landing and domain sections. |
| `--card-radius-editorial` | `6px` | Repeated cards only. |
| `--hairline` | `1px solid var(--line-editorial)` | Editorial separators. |

Do not put cards inside cards. Keep page sections unframed. Cards are only for repeated items, compact entry promos, or explicit tool surfaces.

### Navigation Chrome

Header:

- Keep sticky behavior, skip link, Pagefind, language switcher, and theme toggle.
- Make the brand feel like a masthead: `FinWiki` in display serif, with a small localized subtitle in the current language on wide screens.
- Primary nav should be quiet: Home, Domains, Browse, AI. Use active state with an underline plus `aria-current`, not color alone.

Entry chrome:

- The left domain rail should collapse into a compact "Sections" drawer or top band below desktop. On desktop, show only current group plus a "All domains" link by default; avoid exposing every domain count on every entry.
- The right TOC should remain sticky but use editorial section markers and active state with a fine rule.
- The factbar should become an "evidence strip": confidence, last updated, review-by, source count. Keep machine translation badge visible but reduce chip noise.
- Tags should move below lead or after evidence strip with smaller mono treatment.

## Landing And Index Redesign

The landing pages should stop leading with raw corpus inventory.

Root `/`:

1. Masthead first: FinWiki as a financial field guide, with bilingual (ja/en) entry choices.
2. A concise editorial deck explaining the corpus in one paragraph per language.
3. "Start with" lanes: Japan core institutions, payments and cards, exchanges and securities, policy and regulation, global comparison matrices.
4. Corpus stats as supporting proof, not primary headline.
5. AI/crawler links in a technical footer band.

Localized `/{lang}/`:

1. Search remains in the first viewport, but after an editorial headline and deck.
2. Replace flat "recent cards" with a curated "Latest reviewed" strip plus "Canonical routes" strip.
3. Domain map becomes a guided taxonomy with short reader-oriented descriptions, not only counts.
4. Keep "AI-readable" section but style it as technical metadata.

Domain list `/{lang}/domains/`:

1. Group names should read like editorial sections.
2. Counts should be secondary badges.
3. Add one-line domain group descriptions where translation copy exists.

Domain detail `/{lang}/domains/{domain}/`:

1. Add a domain opener: what this domain covers, what to read first, and which entries are canonical anchors.
2. Keep filter for long lists.
3. Route slugs stay visible but subdued.

Entry page:

1. H1 and a short summary lead should dominate before rails.
2. Evidence strip should be visible but quieter than the title.
3. Domain rail should orient without becoming a site-wide database map.
4. Tables remain highly readable and horizontally safe.

## Current Vs Desired By Surface

| Surface | Current | Desired |
|---|---|---|
| Root index | Bilingual (ja/en) portal with counts and top domains. | Editorial masthead, bilingual entry paths, curated start lanes, stats as support. |
| Localized home | Search, recent entries, domain groups, AI links. | Publication-like home with search, latest reviewed, canonical guides, domain narratives. |
| Domain index | Grouped cards with counts. | Sectioned taxonomy with brief descriptions and muted count badges. |
| Domain detail | File-list style grid with route slugs. | Domain briefing page plus filterable entry list. |
| Entry | Three-column reference layout with many chips and counts. | Article-led financial reference page with quiet evidence strip and restrained rails. |
| Header | Utility docs shell. | Compact editorial masthead with accessible utility controls. |
| Footer | Links and language note. | Publication footer: coverage, methods, AI surfaces, languages, source policy. |
| Dark mode | Legible dark token override. | Intentional night-reading / market-desk palette with preserved contrast. |

## Accessibility And Performance Requirements

WCAG 2.2:

- Text contrast: body and metadata meet AA in both light and dark.
- Focus: every link, button, search input, language control, and theme control has visible `:focus-visible`.
- Active navigation does not rely only on color.
- Language switcher preserves route context and exposes current language.
- Target size: header controls and chip links meet practical touch targets on mobile.
- Motion: preserve `prefers-reduced-motion` behavior.

Astro and CWV:

- Keep static rendering.
- Do not add client frameworks for layout.
- If web fonts are introduced, use a small subset strategy: `font-display: swap`, preconnect only when needed, and no layout shift from late font loads.
- Keep Pagefind as the search layer.
- Avoid heavy image hero assets unless they have fixed dimensions, responsive sizes, and clear value.
- Preserve no page-level horizontal overflow, especially for tables, route slugs, factbars, and source lists.

Bilingual behavior:

- `lang="ja"` and `lang="en"` surfaces must tune line-height and measure separately.
- English UI should not leak into Japanese chrome except proper nouns, route slugs, acronyms, protocols, and machine artifact names.

## Implementation Issue Drafts

These are proposed follow-up issues. Each should be one branch and one PR.

### Draft A: Editorial Tokens And Typography

Scope:

- Add editorial token aliases in `global.css`.
- Retune light/dark palettes.
- Add language-aware typography variables and prose measures.

Allowed Files:

- `site/src/styles/global.css`
- `docs/05-functional-specs/ui-ux.md` if the class/token contract changes

Validation:

- `bun run docs:audit`
- `bun tools/release.ts --check --strict`
- Visual QA for `/`, `/ja/`, `/en/`, one long entry, one table-heavy entry
- Mobile overflow check

### Draft B: Editorial Shell And Entry Layout

Scope:

- Refine `Base.astro` masthead/header/footer.
- Convert `EntryLayout.astro` factbar into evidence strip.
- Reduce database feel of left domain rail while preserving orientation.

Allowed Files:

- `site/src/layouts/Base.astro`
- `site/src/layouts/EntryLayout.astro`
- `site/src/styles/global.css`
- `site/src/i18n/ui.ts` only if labels change
- `docs/05-functional-specs/ui-ux.md` if behavior contracts change

Validation:

- `bun tools/release.ts --check --strict`
- `bun run docs:audit`
- `bun run i18n:status`
- `bun tools/wiki_link_audit.ts --fail-on-issues`
- Visual QA across desktop and mobile

### Draft C: Home And Domain Editorial Surfaces

Scope:

- Redesign `/`, `/{lang}/`, `/{lang}/domains/`, and `/{lang}/domains/{domain}/` into editorial entry points.
- Add curated start lanes and reader-oriented domain descriptions from existing metadata or explicit UI copy.

Allowed Files:

- `site/src/pages/index.astro`
- `site/src/pages/[lang]/index.astro`
- `site/src/pages/[lang]/domains/index.astro`
- `site/src/pages/[lang]/domains/[domain]/index.astro`
- `site/src/styles/global.css`
- `site/src/i18n/ui.ts`
- `site/src/i18n/domains.ts`
- `site/src/i18n/groups.ts`
- `docs/05-functional-specs/ui-ux.md` if behavior contracts change

Validation:

- `bun tools/release.ts --check --strict`
- `bun run docs:audit`
- `bun run i18n:status`
- Pagefind/search smoke check
- Visual QA for ja/en landing and domain pages

### Draft D: Editorial QA And Performance Guardrails

Scope:

- Add or update visual QA documentation for editorial site checks.
- Define screenshot matrix, contrast checks, mobile overflow checks, and font loading guardrails.

Allowed Files:

- `docs/07-quality/visual-qa-checklist.md`
- `docs/05-functional-specs/ui-ux.md`
- Optional read-only QA scripts under `tools/` if a separate issue explicitly allows code

Validation:

- `bun run docs:audit`
- `git diff --check`

## Non-Goals

- Do not change wiki corpus content.
- Do not change source/provenance semantics.
- Do not remove Pagefind, AI discovery surfaces, or route visibility.
- Do not add a marketing-only landing page.
- Do not default to dark mode.
- Do not copy exact visual assets, trademarked styling, or proprietary layouts from reference publications.

## Acceptance For This Planning Issue

- This document exists at `docs/02-product/human-site-editorial-design.md`.
- It audits current implementation surfaces using actual file names.
- It specifies typography, color, rhythm, navigation chrome, landing redesign, current-vs-desired states, real references, bilingual constraints, WCAG 2.2, Astro performance, and follow-up issue drafts with Allowed Files.
- It does not modify `site/src/**`, design tokens, corpus pages, generated surfaces, or `CONTRIBUTING.md`.

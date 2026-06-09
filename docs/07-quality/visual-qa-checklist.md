# Visual QA Checklist

## When To Use

Use this checklist for any change to:

- `site/src/styles/global.css`
- `site/src/layouts/*.astro`
- `site/src/components/*.astro`
- `site/src/pages/**`
- `site/src/i18n/ui.ts`, `domains.ts`, or `groups.ts`
- Any docs that change UI/UX, theme, accessibility, localization, or page-rendering expectations

Related specs: [UI/UX Principles](../02-product/ui-ux-principles.md), [Theme System](../04-architecture/theme-system.md), [UI/UX Functional Spec](../05-functional-specs/ui-ux.md), [Site Rendering](../05-functional-specs/site-rendering.md), [Search](../05-functional-specs/search.md).

## Baseline To Preserve

The current UI/UX is accepted. Visual QA should first confirm that a change preserves the existing reference-site behavior unless the issue explicitly requests a scoped visual change.

Baseline traits to preserve:

- Cool neutral page/surface palette with teal-blue primary action and low-saturation support colors.
- Compact sticky header with visible navigation, search, theme toggle and language switcher.
- Home page as reader entry: search, corpus stats, recent entries, domain map and AI/crawler links visible early.
- Entry page as financial reference layout: domain rail, article column, TOC, provenance/freshness chips, machine-translation badge and readable prose.
- Browse/domain pages as dense scan surfaces with counts, route visibility and localized filters.
- Japanese UI chrome as the primary quality signal for `/ja/`.
- No marketing-landing redesign, decorative gradients, purple/purple-blue brand drift or card-heavy visual noise.

## Required Viewports

| Viewport | Purpose |
|---|---|
| 1440 x 1000 | Desktop rails, TOC, domain grids, search modal, table density. |
| 900 x 1000 | Tablet transition for browse columns and entry rail behavior. |
| 390 x 844 | Mobile Japanese reading, header/tool wrapping, inline TOC, table overflow. |

## Pages To Spot Check

| Page Type | Example |
|---|---|
| Home | `/ja/`, `/en/`, `/zh/` |
| Domain list | `/ja/domains/` |
| Domain detail | One large domain such as `/ja/domains/exchanges/` or `/ja/domains/regional-banks/` |
| Browse | `/ja/browse/` |
| Entry | One long Japanese entry with tables and several headings |
| Translated entry | One `en` or `zh` entry showing translation behavior |
| Machine surfaces | Confirm UI changes did not affect `llms.txt`, `ai-index.json`, sitemap, or API output expectations |

## Checklist

### Theme

- [ ] Light theme uses cool neutral surfaces and teal-blue action color.
- [ ] Dark theme preserves contrast for text, links, chips, tables, and code.
- [ ] `:root` and `[data-theme="dark"]` token values in `global.css` still match the approved theme direction unless a scoped issue changed them.
- [ ] No dominant purple/purple-blue, warm ochre, beige, brown/orange, or single-hue palette drift.
- [ ] No decorative gradients, blobs, or marketing-style atmospheric backgrounds.
- [ ] Focus rings remain visible in both themes.

### Header And Shell

- [ ] Header stays compact and sticky.
- [ ] Brand, domain nav, browse nav, AI link, search, theme toggle, and language switcher do not overlap.
- [ ] Header search still opens the Pagefind modal through the shared shell, not a separate search UI.
- [ ] Skip link works and is visible on focus.
- [ ] Footer links remain readable and do not dominate the page.

### Search

- [ ] Header search trigger opens Pagefind modal.
- [ ] `Ctrl/Cmd+K` opens search.
- [ ] Home search trigger opens the same modal.
- [ ] Search results are scoped to the current language.
- [ ] Search modal is usable in light and dark themes.

### Japanese UI Chrome

- [ ] `/ja/` header, search placeholder, home copy, domain labels, metadata labels, badges, empty states, and footer are Japanese.
- [ ] English remains only for allowed artifacts or proper nouns such as `FinWiki`, `llms.txt`, brand names, protocols, tickers, or source titles.
- [ ] Japanese titles and long institution names do not overflow controls.

### Entry Page

- [ ] Breadcrumbs show domain context.
- [ ] Factbar chips wrap cleanly and preserve confidence, updated date, review date, source count, machine translation badge, and original-language link when present.
- [ ] Left domain rail is visible on desktop and hidden on mobile.
- [ ] Right TOC is visible on desktop and replaced by inline TOC on smaller screens.
- [ ] Central article measure remains close to the current reading width; long Japanese titles do not force rails or chips out of view.
- [ ] `.prose` headings, body text, wikilinks, blockquotes, code, and tables are readable.
- [ ] Wide tables scroll horizontally inside the table area, not the whole page.

### Domain And Browse Pages

- [ ] Domain groups and counts are scannable.
- [ ] Domain detail filter appears only when useful and has localized placeholder/empty state.
- [ ] Browse filter is sticky, fast, and does not hide content under the header.
- [ ] Domain jump links wrap without overlap.

### Accessibility And Stability

- [ ] Keyboard navigation reaches search, theme toggle, language switcher, nav links, filters, and article links.
- [ ] Hover/focus states do not shift layout.
- [ ] Text is not clipped inside buttons, chips, cards, rails, or filters.
- [ ] No page-level horizontal overflow at the required mobile viewport.
- [ ] `prefers-reduced-motion` behavior is respected by CSS transitions/animations.

## Validation Commands

```bash
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

If rendered site behavior changed, also run the Astro build and duplicate-id check before publishing.

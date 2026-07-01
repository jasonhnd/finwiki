# Visual QA Checklist

## When To Use

Use this checklist for any change to:

- `site/src/styles/global.css`
- `site/src/layouts/*.astro`
- `site/src/components/*.astro`
- `site/src/pages/**`
- `site/src/i18n/ui.ts`, `domains.ts`, or `groups.ts`
- Any docs that change UI/UX, theme, accessibility, localization, performance, or page-rendering expectations

Related specs: [UI/UX Principles](../02-product/ui-ux-principles.md), [Human Site Editorial Design](../02-product/human-site-editorial-design.md), [Theme System](../04-architecture/theme-system.md), [UI/UX Functional Spec](../05-functional-specs/ui-ux.md), [Site Rendering](../05-functional-specs/site-rendering.md), [Search](../05-functional-specs/search.md).

## Editorial Baseline To Preserve

The current human site is an editorial financial-reference surface, not a neutral database UI. Visual QA should confirm that a change preserves the Draft A+B+C editorial behavior unless the issue explicitly scopes a visual change.

Baseline traits to preserve:

- Warm editorial paper in light mode and market-desk dark mode, with AA-readable text and muted financial-reference metadata.
- Compact masthead shell in `site/src/layouts/Base.astro`: skip link, display-serif `FinWiki` brand, localized subtitle, Home / Domains / Browse / AI navigation, Pagefind trigger, theme toggle, language switcher, and footer.
- Active shell navigation uses `aria-current="page"` plus a visible underline; active state must not rely on color alone.
- Root `/` opens with `.root-masthead`, trilingual `.root-entry-paths`, `.start-lanes`, supporting `.root-proof`, and technical `.root-ai` links.
- Localized `/{lang}/` pages open with `.home-hero`, `.home-search`, and `.home-proof`, then `.review-strip`, `.canonical-strip`, `.taxonomy-grid`, and `.ai-band`.
- Domain list pages use reader-oriented `.domain-section` groups and `.domain-card` descriptions with counts as secondary metadata.
- Domain detail pages use `.domain-opener` and `.domain-brief` before the route list, with canonical read-first links and route slugs still visible for maintainers.
- Entry pages use article-led `.entry-head`, `.evidence-strip`, restrained `.drail--left` current-group rail, `.toc--rail` / `.toc-inline`, and `.prose` content.
- Japanese, English, and Chinese chrome are all first-class. Japanese pages must not visibly fall back to English UI except allowed artifacts such as `FinWiki`, route slugs, protocols, source titles, and machine files.
- No page-level horizontal overflow, especially around header tools, evidence strips, domain cards, route slugs, source rows, and financial tables.

## Required Breakpoints

Capture every matrix route at these viewport widths. Height may vary by tool, but keep it stable within a QA run.

| Breakpoint | Suggested viewport | Purpose |
|---|---:|---|
| Mobile | `375 x 812` | Small-phone header wrapping, language text, route slugs, table scrolling, no horizontal overflow. |
| Tablet | `768 x 1024` | Rail collapse transitions, domain grids, review/canonical strips, Pagefind and filter controls. |
| Desktop | `1440 x 1000` | Full masthead, desktop entry rails, sticky TOC, domain taxonomy density, large-table behavior. |

## Editorial Screenshot Matrix

For every row, capture light and dark theme screenshots at `375`, `768`, and `1440` widths. Expand `{lang}` to `ja`, `en`, and `zh` unless the route is explicitly root-only.

| Surface | Language coverage | Required routes / examples | What to verify |
|---|---|---|---|
| Root trilingual entrance | `ja`, `en`, `zh` on the same page | `/` | `.root-masthead` leads; language entry cards are visible and non-overlapping; `.start-lanes` are reader-oriented; corpus stats are supporting proof; `.root-ai` is a technical band, not the primary message. |
| Localized home | `ja`, `en`, `zh` | `/ja/`, `/en/`, `/zh/` | `.home-hero` and `.home-search` are in the first viewport; `.home-proof` does not dominate; `.review-strip` and `.canonical-strip` have distinct kicker and title text; `.taxonomy-grid` descriptions and counts wrap cleanly. |
| Domain list | `ja`, `en`, `zh` | `/{lang}/domains/` | `.domains__head` explains coverage; `.domain-section` names read like editorial sections; `.domain-card__description` is visible; `.domain-card__count` is secondary and tabular-feeling. |
| Domain detail | `ja`, `en`, `zh` | `/{lang}/domains/banking/` and one high-count domain such as `/{lang}/domains/regional-banks/` | `.domain-opener` and `.domain-brief` appear before the route inventory; read-first links and canonical anchors are understandable; filter appears only when useful; route slugs remain visible without overpowering titles. |
| Long entry | `ja`, `en`, `zh` | `/{lang}/banking/japan-regional-bank-m-a-consolidation-family-tree-matrix/` | H1, lead, `.evidence-strip`, tags, current-group `.drail--left`, `.toc--rail`, `.toc-inline`, headings, source rows, and long proper nouns remain readable. |
| Table-heavy entry | `ja`, `en`, `zh` | `/{lang}/banking/japan-banking-license-tier-comparison-matrix/` | `.prose table` scrolls inside its own area; table headers, wikilinks, provenance links, code, and route-like strings remain legible in both themes. |
| Browse scan surface | `ja`, `en`, `zh` | `/{lang}/browse/` | `.browse__bar`, `.browse__filter`, `.browse__jump`, and `.browse__section` remain usable with localized labels and long slugs; sticky filter does not hide content below the masthead. |
| Search modal | `ja`, `en`, `zh` | Header Pagefind trigger on `/{lang}/`; home `.pf-hero` trigger on `/{lang}/` | Header and home triggers open the same modal; `Ctrl/Cmd+K` works; results are scoped to the current language; modal contrast and focus are usable in both themes. |

## Contrast Checks

Run contrast checks in light and dark themes for all matrix surfaces.

- Body text, metadata, nav labels, buttons, cards, source rows, table text, and placeholder text must meet WCAG AA normal-text contrast: `>= 4.5:1`.
- Large text at `24px` regular or `18.66px` bold and above must meet `>= 3:1`.
- Non-text UI that communicates state, including focus rings, active nav underlines, input borders, evidence tones, badges, and icon buttons, must meet `>= 3:1` against adjacent colors.
- Links must remain identifiable without color alone through underline, border, shape, label, or surrounding structure.
- Active navigation must expose both visual state and `aria-current="page"`.
- Evidence states in `.evidence-item--high`, `.evidence-item--medium`, `.evidence-item--low`, `.evidence-item--source`, `.evidence-badge--warn`, and `.evidence-badge--link` must remain distinguishable in both themes.

## Mobile Overflow Checks

At `375 x 812`, every matrix route must pass the following checks:

- `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.
- Header brand, nav, Pagefind trigger, theme toggle, and language switcher do not overlap or create horizontal scroll.
- `.root-entry`, `.start-lane`, `.review-card`, `.canonical-route`, `.taxonomy-group`, `.domain-card`, `.domain__item`, and `.evidence-strip` wrap without clipping text.
- Long Japanese, English, and Chinese institution names wrap in cards, rails, filters, tags, evidence items, and source rows.
- `.prose table`, `.prose pre`, route slugs, source URLs, and code-like strings scroll inside their own containers if needed; they must not widen the page.
- No hover, focus, filter, or Pagefind-open state causes layout shift that introduces page-level overflow.

## Keyboard, Focus, And Motion Checks

- Tab order starts with the skip link, then masthead controls, then page-local controls, then content links.
- The skip link moves focus to `#main` and is visible while focused.
- Header nav links, Pagefind triggers, theme toggle, language switcher, domain filters, browse filters, cards, TOC links, tags, source links, and footer links all show visible `:focus-visible`.
- Focus states do not shift layout or clip inside compact controls.
- Pagefind modal can be opened with `Ctrl/Cmd+K`, navigated by keyboard, and dismissed without trapping focus incorrectly.
- Domain and browse filters are keyboard operable and expose localized no-match text.
- With `prefers-reduced-motion: reduce`, transitions and animations are effectively disabled; no essential information depends on motion.
- TOC active-section highlighting may update on scroll, but the page must remain usable if `IntersectionObserver` is unavailable.

## Webfont And Performance Guardrails

The editorial font setup is performance-sensitive. Treat these as hard guardrails for future UI changes:

- Webfont families: maximum `2` self-hosted families, currently `Source Serif 4` and `Inter`.
- Preloads: maximum `1` font preload in `site/src/layouts/Base.astro`, currently `/fonts/source-serif-4/source-serif-4-latin-600.woff2`.
- Initial preloaded font bytes: maximum `30 KB` compressed.
- Total self-hosted WOFF2 bytes for the editorial families: maximum `200 KB` compressed unless a new issue explicitly changes the budget.
- All `@font-face` rules must use `font-display: swap`.
- All webfont subsets must declare `unicode-range`, `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override` to reduce layout shift.
- CJK text must stay on system CJK fonts through `--font-editorial-body-ja`, `--font-editorial-body-zh`, and CJK fallbacks in `--font-editorial-display`; do not add downloaded CJK webfonts.
- No remote font providers, blocking stylesheet imports, or extra preconnects for fonts.
- CLS target for editorial pages is `< 0.1`; visual QA should reject visible header, masthead, entry title, or table shifts after webfonts swap.
- Static rendering, Pagefind search, and small page-local scripts remain the performance model. Do not introduce a client framework for layout behavior.

## Validation Commands

```bash
bun run docs:audit
git diff --check
```

If rendered site behavior changed in the same issue, also run the release check, Astro build, duplicate-id check, and a browser screenshot pass before publishing. Issue #121 is documentation-only, so the required validation is limited to the two commands above.

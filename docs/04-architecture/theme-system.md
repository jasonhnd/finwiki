# Theme System

## Purpose

This document defines the architecture boundary for FinWiki visual styling. The site uses one global CSS system with light and dark token sets. Product intent is defined in [UI/UX Principles](../02-product/ui-ux-principles.md); component behavior is specified in [UI/UX Functional Spec](../05-functional-specs/ui-ux.md).

## Source Of Truth

| Layer | File | Role |
|---|---|---|
| Global tokens and shared classes | `site/src/styles/global.css` | The reusable theme template. `:root` defines light tokens; `[data-theme="dark"]` defines dark overrides. |
| Shell and Pagefind wiring | `site/src/layouts/Base.astro` | Imports global CSS, initializes theme before paint, renders header/footer/search modal. |
| Entry layout | `site/src/layouts/EntryLayout.astro` | Owns entry rails, breadcrumb, factbar, tags, TOC, and prose slot. |
| Theme toggle | `site/src/components/ThemeToggle.astro` | Switches `document.documentElement.dataset.theme` and persists `finwiki-theme`. |
| Language switcher | `site/src/components/LangSwitcher.astro` | Preserves route context across `ja/en/zh`. |
| UI labels | `site/src/i18n/ui.ts` | Localized visible chrome. |

## Token Groups

| Token Family | Examples | Requirement |
|---|---|---|
| Surfaces | `--paper`, `--surface`, `--surface-2`, `--surface-3` | Keep page surfaces cool-neutral and readable in light/dark mode. |
| Text | `--ink`, `--ink-2`, `--muted` | Preserve strong hierarchy without low-contrast metadata. |
| Lines | `--line`, `--line-2` | Use hairline structure for financial-reference density. |
| Action color | `--accent`, `--accent-2`, `--accent-soft`, `--on-accent` | Primary action and active states. Current direction is teal-blue, not purple. |
| Support color | `--gold`, `--gold-soft`, `--ok`, `--warn`, `--bad` | Only for semantic or secondary emphasis. |
| Type | `--font-display`, `--font-body`, `--font-mono`, `--fs-*`, `--lh-*` | Serif display, sans body, mono paths/counts. |
| Layout | `--w-reading`, `--w-content`, `--w-wide`, `--header-h`, spacing tokens | Keep reading measure and rails predictable. |
| Radius/shadow | `--r-sm`, `--r`, `--r-lg`, `--sh-*` | Restrained structure; avoid highly rounded marketing-card styling. |

## Color Direction

The current palette is intentionally not brand-purple:

| Role | Light | Dark | Notes |
|---|---|---|---|
| Page paper | `#f6f8fb` | `#111417` | Cool neutral base. |
| Main surface | `#ffffff` | `#191d21` | Reading and controls. |
| Accent | `#006b83` | `#67d2cf` | Teal-blue primary action. |
| Secondary accent | `#596b1f` | `#c5d66a` | Low-saturation support, not dominant. |

Do not shift the theme toward:

- Dominant purple, violet, or purple-blue gradients.
- Warm beige, cream, ochre, espresso, or brown/orange editorial palettes.
- Decorative blobs, gradient orbs, or atmospheric backgrounds.
- Single-hue monochrome treatment where most UI states are just one color family.

## Typography

- Display headings use `--font-display`, with Japanese serif fallbacks included.
- Body text uses `--font-body`, with Japanese and Chinese sans fallbacks included.
- Routes, tags, code, and technical identifiers use `--font-mono`.
- Do not use negative letter spacing.
- Do not scale type directly with viewport width outside existing `clamp()` token patterns.

## Component Architecture

| Component / Surface | Styling Ownership | Notes |
|---|---|---|
| Header, footer, brand, nav, theme toggle, language switcher | `global.css` plus `Base.astro` local style for Pagefind trigger details | Header must stay compact and sticky. |
| Search modal | Pagefind component CSS variables in `global.css` | Use Pagefind variables; do not fork Pagefind markup unless necessary. |
| Home page | `site/src/pages/[lang]/index.astro` local styles plus global tokens | First screen must expose search and corpus stats. |
| Domain list/detail/browse pages | Page local styles plus global tokens | Dense grouped lists are preferred. |
| Entry page | `EntryLayout.astro` local styles plus `.prose` global styles | Rails collapse at breakpoints; metadata chips remain visible. |
| Markdown prose | `.prose` rules in `global.css` | Tables must scroll horizontally instead of breaking layout. |

## Change Rules

- Add new colors as tokens first, then use tokens in components.
- Any theme change must be checked in both light and dark mode.
- Any UI chrome text change must update `site/src/i18n/ui.ts` for `ja/en/zh`.
- Any layout change that affects entry pages must check long Japanese titles, wide financial tables, source blocks, wikilinks, and machine-translation chips.
- Any CSS change that changes the visual direction must update [UI/UX Principles](../02-product/ui-ux-principles.md), [UI/UX Functional Spec](../05-functional-specs/ui-ux.md), and [Visual QA Checklist](../07-quality/visual-qa-checklist.md) if the acceptance surface changes.

## Validation

- `bun tools/release.ts --check --strict`
- Astro build when site UI or CSS changes.
- Duplicate id check when rendered HTML changes.
- [Visual QA Checklist](../07-quality/visual-qa-checklist.md) across light/dark and desktop/mobile.

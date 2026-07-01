# UI/UX Principles

## Purpose

This document defines the product-level experience principles for the FinWiki human site. It explains why the interface should feel like a quiet financial reference desk rather than a marketing site.

Implementation details live in [UI/UX Functional Spec](../05-functional-specs/ui-ux.md). Theme and CSS token rules live in [Theme System](../04-architecture/theme-system.md). Visual acceptance lives in [Visual QA Checklist](../07-quality/visual-qa-checklist.md).

## Current Approved Baseline

The current human-site UI is the approved baseline. Future UI/CSS work should preserve the current experience unless a new issue explicitly asks for a scoped change.

Current baseline characteristics:

| Surface | Current Product Intent | Code Owner |
|---|---|---|
| Global visual system | Cool ledger-neutral surfaces, teal-blue action color, restrained support colors, serif display type, sans body type, compact radii and hairline structure. | `site/src/styles/global.css` |
| Site shell | Compact sticky header with brand, domain navigation, browse navigation, AI surface link, Pagefind trigger, theme toggle, language switcher, skip link and footer. | `site/src/layouts/Base.astro` |
| Home page | Reader entry page, not a marketing landing page: first screen shows site identity, tagline, search, corpus stats, recent entries, domain map and AI/crawler links. | `site/src/pages/[lang]/index.astro` |
| Domain navigation | Grouped domain maps and compact count-bearing domain cards/pills prioritize scanning over visual decoration. | `site/src/pages/[lang]/domains/**`, `site/src/i18n/domains.ts`, `site/src/i18n/groups.ts` |
| Browse | Sticky filter, domain jump chips and multi-column scan lists support fast corpus inspection. | `site/src/pages/[lang]/browse/index.astro` |
| Entry page | Three-column desktop reference layout: left domain rail, central article, right TOC; mobile collapses rails into a single reading column with inline TOC. | `site/src/layouts/EntryLayout.astro` |
| Prose | Financial-reference Markdown supports headings, wikilinks, provenance marks, callouts/blockquotes, code and horizontally scrolling tables. | `.prose` rules in `site/src/styles/global.css` |
| Localization chrome | Visible UI labels are centralized in `site/src/i18n/ui.ts` and should remain natural in Japanese and English. | `site/src/i18n/ui.ts` |

Do not treat UI/UX documentation as a request to redesign the site. It is a contract that records the current satisfactory design and constrains future changes.

## Audience

| Audience | Primary Need | UI Consequence |
|---|---|---|
| Japanese financial reader | Quickly understand institutions, licenses, systems, and adjacent entities. | Japanese labels first, dense navigation, low visual noise. |
| English reader | Read translated mirrors with the same structural affordances. | Language switcher must preserve context; fallback must be honest. |
| Maintainer | Inspect content coverage, routing, and i18n state. | Counts, badges, paths, and sources must stay visible and stable. |
| AI / crawler user | Discover full corpus through machine surfaces. | Human UI must not conflict with `llms*`, `ai-index`, sitemap, or API surfaces. |

## Experience Principles

| ID | Principle | Requirement |
|---|---|---|
| UXP-001 | Reference before decoration | The first screen should expose search, domain navigation, and current corpus shape. It must not become a brand hero or marketing funnel. |
| UXP-002 | Japanese readability first | Japanese routes and labels must be natural Japanese unless the visible term is a brand, ticker, protocol, law acronym, product name, or source title. |
| UXP-003 | Dense but calm | Financial readers need scan efficiency. Prefer compact tables, rails, chips, breadcrumbs, and grouped lists over large cards or narrative marketing blocks. |
| UXP-004 | Provenance is visible | Source counts, confidence, review dates, machine-translation badges, and original-language links are product features, not footnotes to hide. |
| UXP-005 | Navigation never traps | Search, browse, domain pages, breadcrumbs, table of contents, wikilinks, language switcher, and AI entry points should provide multiple routes out of any page. |
| UXP-006 | Two languages share structure | Japanese and English pages should keep the same layout and controls. Only text and route prefix change. |
| UXP-007 | Visual identity is restrained | Use cool ledger neutrals, teal-blue primary action, and low-saturation support colors. Avoid purple/purple-blue brand-like palettes, large gradients, decorative blobs, and warm ochre paper themes. |
| UXP-008 | Mobile is a reading surface | Mobile should preserve search, language switching, title, source/provenance chips, body text, tables, and inline TOC without horizontal text overflow. |
| UXP-009 | Public knowledge boundary stays clear | UI copy must not encourage private-data entry, customer-specific research, or non-public case handling. |

## Japanese UX Rules

- Header labels, home copy, domain names, entry metadata labels, search placeholder, badges, and empty states must be localized in `site/src/i18n/ui.ts`, `domains.ts`, or `groups.ts`.
- English may remain visible for proper nouns, official product names, acronyms, protocols, source titles, route slugs, and machine-readable artifacts such as `llms.txt`.
- If a Japanese user can see English UI chrome that is not a proper noun or artifact name, treat it as a localization bug.
- Entry body translation quality is handled by the [i18n Pipeline](../05-functional-specs/i18n-pipeline.md), but UI labels and layout chrome are owned by this UI/UX spec.

## Product Boundaries

FinWiki should not introduce:

- A landing-page-only first screen.
- Decorative hero illustrations, gradient orbs, or brand-like purple/purple-blue treatments.
- Card-heavy marketing compositions that bury the actual corpus.
- A UI that hides machine-translation status, source count, review dates, or route context.
- A separate UI pattern per language.

## Acceptance

- [UI/UX Functional Spec](../05-functional-specs/ui-ux.md) covers each visible page and control.
- [Theme System](../04-architecture/theme-system.md) names the CSS token source of truth.
- [Visual QA Checklist](../07-quality/visual-qa-checklist.md) is used for any site UI, CSS, theme, layout, or localization-chrome change.
- [RTM](../03-requirements/rtm.md) maps UI/UX requirements to implementation and validation.

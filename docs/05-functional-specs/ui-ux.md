# UI/UX Functional Specification

## Scope

This is the FSD entry point for human-site UI/UX. Product rationale is in [UI/UX Principles](../02-product/ui-ux-principles.md). Theme architecture is in [Theme System](../04-architecture/theme-system.md). Visual validation is in [Visual QA Checklist](../07-quality/visual-qa-checklist.md).

This spec covers:

- Shell: header, navigation, search trigger, theme toggle, language switcher, footer.
- Home, domain list, domain detail, browse, and entry pages.
- Entry metadata, source/provenance affordances, TOC, wikilinks, and translation badges.
- Responsive behavior and Japanese UI chrome.

It does not cover wiki body authoring rules, which live in [Entry Authoring](../06-implementation/entry-authoring.md), or machine discovery surfaces, which live in [AI Discovery Surface](ai-discovery-surface.md).

## Functional Requirement

| ID | Function | Implementation Surface | Requirement |
|---|---|---|---|
| FSD-008-001 | Site shell | `site/src/layouts/Base.astro` | Render compact sticky header, skip link, language routes, Pagefind modal, footer, and `data-pagefind-*` boundaries. |
| FSD-008-002 | Theme switching | `ThemeToggle.astro`, `global.css` | Toggle light/dark without flash, persist `finwiki-theme`, and keep both token sets readable. |
| FSD-008-003 | Language switching | `LangSwitcher.astro`, `site/src/i18n/ui.ts` | Preserve current route context across `ja/en/zh`; show active language clearly. |
| FSD-008-004 | Search | Pagefind trigger/modal and [Search](search.md) | Header and home search must open Pagefind and search within the current language. |
| FSD-008-005 | Home page | `site/src/pages/[lang]/index.astro` | First screen exposes search, corpus stats, recent entries, domain map, and AI entry points. |
| FSD-008-006 | Domain list | `site/src/pages/[lang]/domains/index.astro` | Group domains by product taxonomy and show counts in a compact grid. |
| FSD-008-007 | Domain detail | `site/src/pages/[lang]/domains/[domain]/index.astro` | Show breadcrumbs, domain name, counts, optional filter, route slugs, and translated markers. |
| FSD-008-008 | Browse page | `site/src/pages/[lang]/browse/index.astro` | Provide full corpus scan, domain jump links, sticky filter, and no-match state. |
| FSD-008-009 | Entry page | `EntryLayout.astro` | Show breadcrumb, title, confidence/review/source chips, machine translation badge, tags, left domain rail, right TOC or mobile inline TOC, and prose. |
| FSD-008-010 | Prose | `global.css` `.prose` rules | Markdown headings, links, tables, code, blockquotes, and wikilinks must remain readable in long financial reference pages. |

## Page-Level Behavior

| Page | Required UX |
|---|---|
| `/` and `/{lang}/` | Actual reader entry, not a marketing landing page. Search and corpus navigation must be available in the first viewport. |
| `/{lang}/domains/` | Domain groups are scannable; counts use tabular numeric feel where practical. |
| `/{lang}/domains/{domain}/` | Long lists use filter when needed; routes are visible enough for maintainers without overpowering reader titles. |
| `/{lang}/browse/` | Filter should be fast, sticky, and usable with Japanese/English/Chinese titles and slugs. |
| `/{lang}/{domain}/{slug}/` | Entry metadata and provenance appear before the body; rails help orientation on desktop and collapse cleanly on mobile. |

## Responsive Rules

- Entry right TOC is hidden below the existing `1080px` layout threshold and replaced by inline TOC when enough headings exist.
- Entry left domain rail is hidden below the existing `820px` threshold.
- Browse columns reduce from 3 to 2 below `900px`, and to 1 below `560px`.
- Header navigation and tools must not overlap at narrow widths; if future content length grows, prefer hiding labels before shrinking text below usable size.
- Wide tables must scroll horizontally inside `.prose table`; page-level horizontal overflow is not acceptable.

## Japanese UI Chrome

- Japanese pages must use Japanese UI labels for navigation, search, metadata, empty states, and badges.
- Keep English visible only for proper nouns, route slugs, acronyms, protocol names, source titles, and machine artifact names such as `llms.txt`.
- When a Japanese page visibly falls back to English UI chrome, treat it as a functional defect even if the page renders.

## States

| State | Requirement |
|---|---|
| Active navigation | Use clear active state without relying only on color where possible. |
| Focus | `:focus-visible` must be visible on links, buttons, search inputs, and language controls. |
| Hover | Hover should clarify affordance without layout shift. |
| Empty filter result | Browse/domain filters must show localized empty text. |
| Machine translation | Badge must remain visible on translated entry pages with `status: machine`. |
| Missing translation fallback | User must still reach content; original-language route link should be available where configured. |

## Acceptance

- [Visual QA Checklist](../07-quality/visual-qa-checklist.md) passes for any UI/CSS/layout change.
- `bun tools/release.ts --check --strict` passes.
- Astro build and duplicate-id check pass when site rendering changes.
- No English UI chrome leakage on Japanese pages except allowed proper nouns/artifacts.
- No mobile horizontal overflow on header, entry title, factbar, domain lists, browse list, prose tables, or source sections.

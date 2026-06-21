# Human-Site Reading Experience Pass

> Issue #23 spec. This document fills the `needs-spec` gap before implementation. It scopes a conservative reading-experience improvement for the Astro human site; it does not change corpus content, AI discovery data, API data, or routing.

## Goal

Make entry pages feel more like an editorial financial reference: calm, source-forward, and easy to scan, without turning the site into a marketing page or a generic database index.

## Current Versus Desired

| Route / surface | Current | Desired delta |
|---|---|---|
| `/{lang}/{domain}/{slug}/` entry pages | Three-column reference layout with left domain rail, central article, right TOC, chips, tags, and `.prose`. | Keep the structure, but improve article measure, heading rhythm, metadata hierarchy, source/provenance visibility, table containment, and mobile spacing. |
| `/{lang}/` home pages | Reader entry with search, corpus stats, recent entries, domain map, and AI links. | No layout change in this issue. Confirm the entry-page CSS does not regress home shell behavior. |
| `/{lang}/domains/` and domain detail pages | Dense domain lists and count-bearing cards. | No layout change in this issue. Confirm global token/prose changes do not alter cards or filters. |
| `/{lang}/browse/` | Sticky filter and multi-column corpus scan. | No layout change in this issue. Confirm header and shared chips remain stable. |
| Light / dark theme | Cool-neutral / teal-blue token system. | Preserve palette direction; only add token-compatible detail where needed. |
| `ja/en/zh` chrome | Same layout with localized UI labels. | Preserve structure and avoid language-specific CSS forks. |

## Design Decision

Use a conservative reading-layer pass:

1. Keep `EntryLayout.astro` as the only entry-page layout owner.
2. Keep the existing left rail / article / right TOC desktop pattern and the current `1080px` / `820px` collapse points.
3. Tighten the article column and metadata hierarchy through CSS only where possible.
4. Move reusable Markdown reading improvements into `.prose` rules in `global.css`.
5. Avoid new visible UI strings unless a functional affordance requires localization.

Rejected approaches:

- A full visual redesign, because #23 asks for a reading-experience pass and the existing UI baseline is approved.
- A card-heavy article frame, because page sections and article bodies should remain reference surfaces, not marketing cards.
- A new route or search interface, because #23 is not an information-architecture issue.

## Affected Layout And Tokens

| Area | File | Allowed change |
|---|---|---|
| Entry layout shell | `site/src/layouts/EntryLayout.astro` | Article max width, grid gap, title wrapping, factbar grouping, TOC density, mobile spacing. |
| Global prose | `site/src/styles/global.css` | Paragraph rhythm, heading anchors, table wrappers, blockquotes, wikilinks, source sections, code/table overflow. |
| Theme tokens | `site/src/styles/global.css` | Reuse existing tokens. Add no new color family unless a contrast defect is found. |
| UI labels | `site/src/i18n/ui.ts` | No planned change. If a label is added, update `ja/en/zh` together. |

## Component Behavior

### Article Header

- Keep breadcrumbs above the title.
- Make long titles wrap naturally without squeezing rails or chips.
- Keep confidence, update date, review date, source count, machine badge, and original-language link visible before the body.
- Let chips wrap cleanly on mobile and avoid horizontal overflow.

### Reading Column

- Keep central measure near the current reference width, with slightly more deliberate line rhythm.
- Make headings easier to scan by using stronger spacing and stable scroll offsets.
- Keep body text dense enough for financial-reference reading.

### Table And Code Handling

- Tables must scroll inside their own area.
- Table headers should remain visually distinct in both light and dark mode.
- Long code, URLs, slugs, and source titles must not create page-level horizontal overflow.

### TOC And Rails

- Preserve the left domain rail on desktop and hide it below `820px`.
- Preserve the right TOC on desktop and inline TOC below `1080px`.
- Make TOC links readable without turning the rail into a competing navigation panel.

## Error And Edge Cases

| Case | Required behavior |
|---|---|
| Long Japanese institution name | Title and chips wrap without overlapping rails. |
| Wide financial table | Table scrolls horizontally inside `.prose`; page width remains stable. |
| Many tags or metadata chips | Factbar wraps and preserves all values. |
| Translated machine mirror | Machine badge and original-language link stay visible. |
| Dark theme | Text, links, chips, table borders, and source markers remain readable. |
| Mobile 390px | Header, article title, factbar, inline TOC, and tables do not overflow. |

## Acceptance Criteria

- Observable reading-experience improvement on representative entry pages.
- Entry pages still preserve domain rail, right TOC, inline TOC, breadcrumbs, metadata chips, tags, provenance markers, wikilinks, and tables.
- Light and dark themes remain intentional.
- `ja/en/zh` layout remains shared.
- No corpus content, route, AI surface, or API data changes are made by #23.

## Validation

Required:

```bash
cd site
bun run build
cd ..
bun run html:check
bun tools/release.ts --check --strict
bun run docs:audit
git diff --check
```

Visual QA spot checks:

- Desktop `1440x1000`: `/ja/`, `/ja/domains/`, one long entry with tables.
- Tablet `900x1000`: one entry and `/ja/browse/`.
- Mobile `390x844`: one Japanese entry, one translated entry, and header tools.
- Light and dark theme for entry page, table, TOC, chips, and Pagefind trigger.

## Implementation Task Packet

```text
ROLE:
Code implementation agent for FinWiki.

GOAL:
Implement the #23 human-site reading-experience pass with conservative entry-page CSS/layout changes.

SOURCE OF TRUTH:
- docs/05-functional-specs/human-site-reading-experience-pass.md
- docs/02-product/ui-ux-principles.md
- docs/04-architecture/theme-system.md
- docs/05-functional-specs/ui-ux.md
- docs/07-quality/visual-qa-checklist.md

ALLOWED FILES:
- site/src/layouts/EntryLayout.astro
- site/src/styles/global.css
- docs/05-functional-specs/ui-ux.md, docs/04-architecture/theme-system.md, docs/07-quality/visual-qa-checklist.md only if contract text needs clarification
- README.md, CHANGELOG.md, releases/*.md because #23 changes public site behavior

FORBIDDEN FILES:
- No corpus entry edits.
- No i18n mirror content edits.
- No generated AI/API surface edits unless release tooling unexpectedly requires them.
- No new route, backend, search index behavior, or AI surface behavior.

IMPLEMENTATION RULES:
- Preserve cool-neutral / teal-blue palette.
- Preserve current breakpoints unless a measured overflow defect requires a scoped adjustment.
- Do not add marketing hero, decorative background, large cards, or language-specific layout forks.
- Prefer CSS improvements over component data changes.

VALIDATION:
- Site build.
- Duplicate HTML id check.
- Release check.
- Docs link audit.
- `git diff --check`.
- Visual QA at desktop, tablet, and mobile widths.
```

## Closeout For Issue #23

Issue #23 is complete when the spec is committed, `needs-spec` is removed, the implementation passes the validation bundle above, and the closeout evidence links the implementing commit(s).

## 2026-06-21 Implementation Note

The implementation keeps the approved reference layout and changes only the human-site presentation layer:

- `site/src/layouts/EntryLayout.astro`: central reading measure, title wrapping, factbar wrapping, inline TOC readability, and mobile entry spacing.
- `site/src/layouts/Base.astro`: narrow-header behavior so small viewports keep the brand, primary navigation, and theme button inside the viewport.
- `site/src/styles/global.css`: prose rhythm, table containment, long-link/code wrapping, source-section readability, and narrow-screen control sizing.

No corpus entry, i18n mirror body, API schema, AI discovery contract, route, or search behavior is changed by this implementation.

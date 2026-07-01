# Site Rendering Specification

## Routes

| Route | Function |
|---|---|
| `/` | Cover home and language/domain entry points. |
| `/{lang}/` | Language home. |
| `/{lang}/browse/` | Browse all entries. |
| `/{lang}/domains/` | Domain list. |
| `/{lang}/domains/{domain}/` | Domain landing page. |
| `/{lang}/{domain}/{slug}/` | Entry page. |

## Requirements

- Language switcher preserves entry context where possible.
- Entry page renders Markdown body, headings, wikilinks, related items and source information.
- Domain pages use current domain metadata and counts.
- Visible page behavior and responsive layout must follow [UI/UX](ui-ux.md).
- Theme and CSS token changes must follow [Theme System](../04-architecture/theme-system.md).
- `docs/` must never become a site content route.

## Validation

- `bun tools/release.ts --check --strict`.
- Astro build when site behavior changed.
- [Visual QA Checklist](../07-quality/visual-qa-checklist.md) when UI, CSS, theme, layout, or localization chrome changed.
- Spot-check `/ja/` and `/en/` after deployment when publishing.

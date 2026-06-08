# ARD - Architecture Requirements

## Architecture Principles

| ID | Principle | Consequence |
|---|---|---|
| ARD-001 | Corpus and developer docs are separate systems. | `docs/` stays out of corpus, site, discovery, API, and link audit. |
| ARD-002 | Public source paths are stable unless a domain-level decision accepts URL churn. | Domain moves require ADR/release record and broad wikilink rewrite. |
| ARD-003 | Release gate is the source of truth for publish readiness. | Manual confidence is not enough; strict check must pass. |
| ARD-004 | Generated discovery surfaces derive from corpus, not hand-edited fragments. | Use `release.ts --write` for synchronized outputs; stale generated API files must be removed during generation. |
| ARD-005 | i18n mirrors are derivative artifacts with traceable source. | Preserve source pointers, hashes, link target integrity, and fallback behavior. |
| ARD-006 | Specifications precede code when work is delegated to model agents. | High-reasoning models own requirements/specs; code models implement bounded packets only. |
| ARD-007 | Human-site visual styling is token-driven. | `site/src/styles/global.css` tokens and [Theme System](theme-system.md) govern light/dark colors, typography, layout widths, and shared visual direction. |

## System Boundaries

- Source corpus: root domain directories and control/release docs selected by `lib/markdown_helpers.ts`.
- Developer docs: `docs/`, excluded by design.
- Human site: `site/`, Astro build, language routes, static search index.
- Theme system: `site/src/styles/global.css`, `Base.astro`, `EntryLayout.astro`, UI i18n labels, and the component surfaces named in [Theme System](theme-system.md).
- Machine surface: root generated files and `api/`.
- Operations: release tools, GitHub Actions, GitHub Pages deployment.

## Data Flow

1. Markdown corpus is scanned by `lib/markdown_helpers.ts`.
2. Release tooling builds entries, counts, sitemap, llms files, ai-index and API outputs.
3. Astro site reads source content and i18n mirrors through explicit allowlists.
4. Validation runs link audit, count sync, JSON/LF/duplicate checks.
5. Push to `origin/main` triggers GitHub Actions deployment.

## Constraints

- `docs/` must remain excluded.
- AI discovery output must not expose `docs/` as crawlable markdown links.
- New domain directories require explicit site and audit allowlist updates.
- Release note additions change corpus `md` count.
- `source_hash` must not be casually rewritten to hide stale translations.
- `README.md` and `CHANGELOG.md` must remain trilingual.
- Code implementation agents must not edit requirement, architecture, functional-spec, release or governance documents unless explicitly assigned.

## Relationship To ADR

This ARD defines standing architecture requirements. [ADR](adr.md) records decisions that change or clarify those requirements, including tradeoffs such as physical domain renames, canonical anchor gates, and docs exclusion.

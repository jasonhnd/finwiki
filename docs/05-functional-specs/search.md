# Search Specification

## Purpose

Search should expose public FinWiki entries for quick lookup without indexing internal developer documentation.

## Indexed Content

Expected searchable fields include title, URL, domain, summary/headings and relevant public body text as supported by the current static search implementation.

## Search Result Presentation

- Pagefind remains the search layer for the human Astro site. Do not replace it with a custom client-side search engine for the H3 C4 browse/search pass.
- `site/src/layouts/Base.astro` preserves the language-scoped Pagefind modal, header trigger, home hero trigger, `Ctrl/Cmd+K` shortcut, `data-pagefind-body` on the main content, and `data-pagefind-ignore` on shell / rails / preview chrome.
- Result titles, excerpts, tags, buttons, and focus states are styled through Pagefind's generated classes and the site tokens in `site/src/styles/global.css`.
- Result excerpts must remain readable enough to judge relevance before opening an entry. The shared lead-excerpt behavior used by browse, wikilink preview, and discovery is the target contract for any future Pagefind metadata tuning.

## Lead Excerpt Contract

- Prefer localized entry body text, using the first meaningful paragraph when no curated summary field is available.
- Strip Markdown link syntax, raw wikilinks, provenance/source markers, inline code markers, HTML tags, and footnote-like source markers before display.
- Keep excerpts short enough for scan surfaces: roughly 140-220 characters depending on language and surface.
- Fall back to the localized title when no body excerpt can be resolved.

## Follow-Up Boundary

Faceted search or browse filters are not part of H3 C4. A later information-architecture issue must decide facet taxonomy, labels, and interaction behavior before implementation.

## Exclusions

- `docs/`.
- Build artifacts not intended as public content.
- Private data, secrets, non-public notes.

## Acceptance

- Search index build succeeds as part of site/release workflow.
- Search results do not route to `docs/`.
- New domain names appear after site metadata and discovery outputs are regenerated.
- Header and home Pagefind triggers open the same language-scoped modal, and result excerpts are visibly aligned with the editorial surface.

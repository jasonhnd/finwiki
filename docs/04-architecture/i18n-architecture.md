# i18n Architecture

## Purpose

The i18n layer provides bilingual Japanese and English renderable content for the Astro site while keeping the root source corpus as the canonical authoring surface. Japanese is the first-class source language. English is an intentional mirror for human readers and crawler/AI discovery.

## Locations

- Source corpus: `<domain>/<slug>.md`.
- Mirrors: `site/src/content/i18n/{ja,en}/<domain>/<slug>.md`.
- Translation scripts: `site/scripts/`.
- Site language routing: `site/src/pages/[lang]/`.
- Supported site language codes: `langCodes = ['ja','en']`.

## Retired Language Scope

- Chinese mirrors are retired and removed from `site/src/content/i18n/zh/`; git history preserves the deleted mirror corpus.
- `/zh/...` route URLs are not redirected and do not receive stub pages. They return 404 on GitHub Pages.
- Language switchers, UI surfaces, indexes, generated discovery files, and validation should treat Japanese and English as the only supported languages.

## Mirror Frontmatter

Mirrors should carry:

- `source`: current source path.
- `source_hash`: hash used to detect stale source.
- `lang`: `ja` or `en`.
- `status`: typically `machine`.
- `fidelity`: `ok` or review marker.

Example:

```yaml
---
source: payments/example-entry.md
source_hash: "..."
lang: en
status: machine
fidelity: ok
---
```

## Pipeline

1. Prep selects source entries missing or stale for a target language.
2. Protect masks facts, numbers, wikilinks and markers.
3. Translation writes masked language output.
4. Commit verifies placeholders, unmasks, writes mirror frontmatter and body.
5. Site renders language routes with mirror or fallback behavior.

## Constraints

- Wikilink target identity should stay stable across source and mirrors.
- Stale mirror state is a signal; do not hide it by rewriting hash without translation.
- Domain moves must update source pointers and mirror paths.
- Any future language expansion requires a new architecture decision before adding routes, mirror directories, UI switcher choices, or discovery output.

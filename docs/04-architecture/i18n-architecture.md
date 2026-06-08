# i18n Architecture

## Purpose

The i18n layer provides Japanese, English and Chinese renderable content for the Astro site while keeping root source corpus as the canonical authoring surface.

## Locations

- Source corpus: `<domain>/<slug>.md`.
- Mirrors: `site/src/content/i18n/{ja,en,zh}/<domain>/<slug>.md`.
- Translation scripts: `site/scripts/`.
- Site language routing: `site/src/pages/[lang]/`.

## Mirror Frontmatter

Mirrors should carry:

- `source`: current source path.
- `source_hash`: hash used to detect stale source.
- `lang`: language code.
- `status`: typically `machine`.
- `fidelity`: `ok` or review marker.

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

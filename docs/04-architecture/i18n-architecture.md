# i18n Architecture

## Purpose

The i18n layer provides bilingual renderable content for the Astro site: Japanese is the first-class source surface and English is the intentional mirror. The root source corpus remains the canonical authoring surface.

## Locations

- Source corpus: `<domain>/<slug>.md`.
- Mirrors: `site/src/content/i18n/{ja,en}/<domain>/<slug>.md`.
- Translation scripts: `site/scripts/`.
- Site language routing: `site/src/pages/[lang]/`.

Supported site languages are `ja` and `en`; code should model this as `langCodes = ['ja','en']`.

## Mirror Frontmatter

Mirrors should carry:

- `source`: current source path.
- `source_hash`: hash used to detect stale source.
- `lang`: language code.
- `status`: typically `machine`.
- `fidelity`: `ok` or review marker.

Example:

```yaml
source: megabanks/example-bank.md
source_hash: "..."
lang: en
status: machine
fidelity: ok
```

## Pipeline

1. Prep selects source entries missing or stale for the English mirror.
2. Protect masks facts, numbers, wikilinks and markers.
3. Translation writes masked English output.
4. Commit verifies placeholders, unmasks, writes mirror frontmatter and body.
5. Site renders Japanese and English routes with mirror or fallback behavior.

## Retired Language

The former `zh` mirror corpus is retired. The follow-up code issue deletes `site/src/content/i18n/zh/`, removes the `/zh/` route family and language switch option, and keeps `/zh/...` URLs as plain 404s with no redirect or stub page. Git history remains the archival source for the removed mirrors.

## Constraints

- Wikilink target identity should stay stable across source and mirrors.
- Stale mirror state is a signal; do not hide it by rewriting hash without translation.
- Domain moves must update source pointers and mirror paths.
- Do not reintroduce a third active language without a new ADR and a code issue that covers routing, content, and discovery surfaces.

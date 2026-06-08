# AI Discovery Surface Specification

## Outputs

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`
- `ai-index.json`
- `api/`

## Requirements

- Outputs reflect current corpus and public site routes.
- Outputs include enough metadata for machine traversal.
- Canonical anchor relationships are exposed where supported.
- `docs/` remains absent as a content source, page URL, API entry and AI traversal link.
- Per-entry API output is rewritten from a clean `api/entries/` directory so moved or deleted slugs do not leave stale JSON files.

## Generation

Use `bun tools/release.ts --write`, which invokes discovery generation as part of the synchronized release surface.

## Validation

- `bun tools/release.ts --check --strict`.
- Targeted grep for `docs/` source/page/API/link leakage when changing exclusion logic.
- Targeted grep for stale moved-domain API residue after domain or slug moves.
- Manual diff review for unexpected lastmod pollution.

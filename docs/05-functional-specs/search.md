# Search Specification

## Purpose

Search should expose public FinWiki entries for quick lookup without indexing internal developer documentation.

## Indexed Content

Expected searchable fields include title, URL, domain, summary/headings and relevant public body text as supported by the current static search implementation.

## Exclusions

- `docs/`.
- Build artifacts not intended as public content.
- Private data, secrets, non-public notes.

## Acceptance

- Search index build succeeds as part of site/release workflow.
- Search results do not route to `docs/`.
- New domain names appear after site metadata and discovery outputs are regenerated.

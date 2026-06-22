# AI Discovery Architecture

## Purpose

AI discovery surfaces let crawlers and LLM agents understand FinWiki without scraping blindly.

## Outputs

| Output | Role |
|---|---|
| `robots.txt` | crawler permissions and sitemap pointer. |
| `sitemap.xml` | URL inventory and lastmod. |
| `llms.txt` | compact LLM-readable entry point. |
| `llms-full.txt` | full text manifest with page summaries and links. |
| `ai-index.json` | machine-readable structured index. |
| `api/` | static JSON API artifacts. |

## Generator

`tools/generate_ai_discovery.ts` is normally run through `tools/release.ts --write`. Generated outputs should not be manually edited except during tooling repair.

## Data Inputs

- Parsed Markdown entries from `lib/markdown_helpers.ts`.
- Domain map from root `INDEX.md`.
- Canonical anchor relationships.
- Wikilinks and headings.
- Last modified timestamps.

## Per-Entry API Record Boundary

`api/entries/*.json` is a static per-page metadata record for agents that want
one entry without reading the full `ai-index.json` manifest. Its `frontmatter`
object exposes only safe scalar and list metadata already present in public
Markdown frontmatter: `canonical_anchor`, `related`, `note`, `type`, and
`sources` are included alongside the older fields.

The per-entry API uses a stable null / empty-array convention: missing scalar
fields are `null`, and missing list fields are `[]`. Entity graph facts are not
duplicated into this record in Phase 1; typed graph traversal stays in
`ai-index.json` (`entity_nodes[]`, `entity_edges[]`, `entity_relation_counts`)
until a later entity-edge exposure packet changes that boundary.

## Exclusions

`docs/` must not appear as a page URL, source entry, API entry or llms item.

Public control documents such as `README.md`, `CHANGELOG.md` and release notes may describe documentation changes because they are public release history. The generator must still filter Markdown links that point into `docs/` so AI consumers do not receive internal developer docs as crawlable `markdown_links` from `ai-index.json`.

Per-entry API generation must clear stale `api/entries/` files before writing the current entry set. Otherwise domain moves can leave old JSON files on disk even after `api/entries/index.json` no longer references them.

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
- Latest full-history Git commit date per source path, plus valid committed `ai-index.json` dates for shallow/history-less fallback.

## URL Contract and Ownership

`lib/markdown_helpers.ts` is the single owner of URL construction. A rendered
entry uses `/ja/<domain>/<slug>/` as its canonical and
`/en/<domain>/<slug>/` as the alternate; raw Markdown keeps `.md`. Populated
domain indexes use `/ja|en/domains/<domain>/`, while non-rendered control
records may have no HTML URL. Body wikilinks are resolved against the current
public route set, and unresolved targets are omitted instead of guessed.

`tools/generate_ai_discovery.ts` projects that model into every text, sitemap,
index and API output. `tools/generated_surface_drift_scan.ts` fixes the two
generated timestamps and byte-compares a temporary regeneration, including
the complete per-entry API file set and every `last_modified`.

After Astro and Pagefind output is assembled, `tools/txt_route_audit.ts`
reads those assembled surfaces, collects route-bearing internal URLs from
llms, sitemap, index and all API records, and
requires each one to resolve to a non-empty, non-symlink regular file in the
final `_site` or `_vercel_public` tree. Source-repository existence alone is not
route evidence. Same-host values are collected by hostname, then required to
match the exact `SITE_URL` origin; a wrong scheme or port is a blocking finding.

`ai-index.json` preserves author Markdown targets in `markdown_links`; these
may be relative or non-HTTP and are source evidence, not deployed-route claims.
Per-entry API `body_links.external_links` is the narrower absolute HTTP(S)
projection. External origins are not availability-tested, while same-host
values in that API field enter the assembled-route and exact-origin audit.

Canonical GitHub verification and deploy workflows use `fetch-depth: 0`.
Shallow or history-less builders first reuse a valid source-path date from the
committed `ai-index.json`, then try shallow Git history, and use fs mtime only
as the terminal fallback.

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

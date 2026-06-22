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
- Typed entity graph rails are exposed as additive fields: `entity_nodes[]`, `entity_edges[]`, and `entity_relation_counts`. The existing `entities[]` canonical-anchor identity surface remains backward-compatible and keeps its current meaning.
- `docs/` remains absent as a content source, page URL, API entry and AI traversal link.
- Per-entry API output is rewritten from a clean `api/entries/` directory so moved or deleted slugs do not leave stale JSON files.
- Per-entry API frontmatter exposes the safe static metadata subset needed by agents: `title`, `aliases`, `domain`, `type`, `created`, `last_updated`, `last_tended`, `review_by`, `confidence`, `tags`, `status`, `canonical_anchor`, `related`, `note`, and `sources`.
- Missing scalar frontmatter fields are serialized as `null`; missing list fields are serialized as empty arrays.
- Phase 1 per-entry API enrichment does not expose typed `entity_edges` in `api/entries/*.json`; typed graph traversal remains on `ai-index.json` until the entity-graph exposure packet explicitly changes that contract.

## Generation

Use `bun tools/release.ts --write`, which invokes discovery generation as part of the synchronized release surface.

## Validation

- `bun tools/release.ts --check --strict`.
- `bun run entity:audit` when `entity_node` or `entity_edges` parsing, authoring, or generated output changes.
- Targeted grep for `docs/` source/page/API/link leakage when changing exclusion logic.
- Targeted grep for stale moved-domain API residue after domain or slug moves.
- Manual diff review for unexpected lastmod pollution.

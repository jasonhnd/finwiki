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
- For a rendered wiki entry with route `<domain>/<slug>`, `url` and `html_url` use the Japanese HTML canonical `https://finwiki.zksc.io/ja/<domain>/<slug>/`; `alternate_html_urls.ja` repeats that canonical and `.en` uses `https://finwiki.zksc.io/en/<domain>/<slug>/`.
- Raw source is never represented by an extensionless entry URL. `raw_markdown_url` keeps the explicit `.md` suffix, using the assembled raw file when it is public and the GitHub raw URL as fallback; `github_url` remains the blob URL.
- A populated domain index is the intentional route exception: its HTML canonical is `/ja/domains/<domain>/`, its English alternate is `/en/domains/<domain>/`, and its raw source remains `/<domain>/INDEX.md`. Root control pages and non-rendered records may expose raw/GitHub URLs with `html_url` and alternates set to `null`.
- Body wikilinks are resolved against the current public route set, including the existing basename fallback; unresolved targets are omitted from `resolved_wikilinks` instead of emitting guessed 404 URLs.
- `ai-index.json` keeps `markdown_links` in source-target form after the existing docs filtering, deduplication and limit; relative, `mailto:` or other non-route values in that field are not deploy-route claims. Per-entry API `body_links.external_links` contains only absolute HTTP(S) values. External origins are preserved but not availability-tested; same-host values are audited against the assembled artifact.
- Canonical anchor relationships are exposed where supported.
- Typed entity graph rails are exposed as additive fields: `entity_nodes[]`, `entity_edges[]`, and `entity_relation_counts`. The existing `entities[]` canonical-anchor identity surface remains backward-compatible and keeps its current meaning.
- `docs/` remains absent as a content source, page URL, API entry and AI traversal link.
- Per-entry API output is rewritten from a clean `api/entries/` directory so moved or deleted slugs do not leave stale JSON files.
- Per-entry API frontmatter exposes the safe static metadata subset needed by agents: `title`, `aliases`, `domain`, `type`, `created`, `last_updated`, `last_tended`, `review_by`, `confidence`, `tags`, `status`, `canonical_anchor`, `related`, `note`, and `sources`.
- Missing scalar frontmatter fields are serialized as `null`; missing list fields are serialized as empty arrays.
- Phase 1 per-entry API enrichment does not expose typed `entity_edges` in `api/entries/*.json`; typed graph traversal remains on `ai-index.json` until the entity-graph exposure packet explicitly changes that contract.
- `last_modified` comes from the latest full-history Git commit date for the source path. An edited tracked file keeps its previous commit date until the edit is committed. In shallow/history-less execution, a valid date from the existing committed `ai-index.json` is reused before any shallow Git lookup; fs mtime is the terminal fallback only when neither full history, committed discovery data nor shallow history supplies a date. Final release generation therefore runs after the source commit.

## Ownership and data flow

- `lib/markdown_helpers.ts` owns route construction, raw/GitHub fallback selection, wikilink route resolution and Git-first `last_modified`. Git subprocesses clear inherited repository-addressing variables such as `GIT_DIR`, `GIT_WORK_TREE` and `GIT_INDEX_FILE` so an explicit source path remains authoritative inside hooks.
- `tools/generate_ai_discovery.ts` reads the shared corpus walk plus `INDEX.md`, then writes the outputs above. `--generated-at` and `--api-index-generated-at` are deterministic comparison inputs, not author-facing content fields.
- `tools/generated_surface_drift_scan.ts` owns read-only corpus/API alignment, excluded-path checks and fixed-timestamp exact regeneration. `tools/txt_route_audit.ts` owns final-route validation against the assembled copies in `_site` or `_vercel_public`, ignores source-preserving `markdown_links`, audits same-host API `external_links`, and rejects same-host URLs whose scheme or port changes the expected origin.

## Generation

Use `bun tools/release.ts --write`, which invokes discovery generation as part of the synchronized release surface.

## Validation

- `bun run surface:drift` must report `Generated-surface drift scan passed`, including byte-identical fixed-timestamp regeneration and every per-entry API JSON.
- `bun test tools/discovery_routes.test.ts` must pass URL semantics, final-route negative fixtures, absolute-HTTP external-link filtering, same-host exact-origin rejection, shallow-checkout fallback under inherited hook-like `GIT_*` context, and per-entry `last_modified` comparison tests.
- `bun run verify --out _site` must reach `Generated route audit passed` after assembly and finish with `FinWiki required verification: PASS`.
- `bun tools/release.ts --check --strict`.
- `bun run entity:audit` when `entity_node` or `entity_edges` parsing, authoring, or generated output changes.
- Targeted grep for `docs/` source/page/API/link leakage when changing exclusion logic.
- Targeted grep for stale moved-domain API residue after domain or slug moves.
- Manual diff review for unexpected fallback-derived `last_modified` changes.

Changing this contract is release-visible: regenerate and review `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `ai-index.json` and `api/`, then update the required bilingual release documents and GitHub Release in the same push.

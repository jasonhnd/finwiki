# Test Plan

## Standard Documentation Restructure Checks

```bash
git status --short --branch
# Run the approved stale-path scan for the moved flat docs and former site-level docs.
rg -n "docs/(architecture|toolchain|release-process|gotchas|entry-authoring|parallel-development|roadmap|backlog|decisions|domains|japanfg-split-design)\\.md|site/ARCHITECTURE\\.md|site/DEVELOPMENT-PLAN\\.md" docs README.md AGENTS.md CHANGELOG.md releases
rg -n "23 domains|23-domain|領域数 23|领域数 23|site/src/content/entries|postbuild|python tools/|tools/release\\.py|wiki_link_audit\\.py|generate_ai_discovery\\.py" docs -g "!99-archive/**"
rg -n "\"source\"\\s*:\\s*\"docs/|\"path\"\\s*:\\s*\"docs/|/docs/|<loc>[^<]*/docs/" ai-index.json api/entries/index.json sitemap.xml llms.txt llms-full.txt robots.txt
bun tools/release.ts --write
bun run verify
```

## When To Add More Tests

| Change Type | Additional Checks |
|---|---|
| Site rendering change | Astro build and browser spot check. |
| Discovery generator / URL helper change | `bun run surface:drift`; `bun test tools/discovery_routes.test.ts` (shallow committed-date fallback, source `markdown_links`, API absolute-HTTP filter, same-host wrong-origin); `bun run verify --out _site`; diff-review sitemap, llms, index and API URL fields. |
| Domain move | Broad wikilink audit, `bun tools/i18n_status.ts` (i18n mirror path / source / freshness). |
| Translation pipeline change | `bun test site/scripts/protect.test.mjs`, including ordered placeholders, sample-source losslessness, and single-/multi-URL provenance-marker round trips; then `bun run i18n:check` and full verify. |
| Release tooling change | `bun test tools/release_documentation_audit.test.ts`, `bun run release:docs`, plus positive and negative language-order / title / required-subsection gate tests. |
| Static publish assembly/release-pipeline change | Focused boundary + required-route tests, deliberately broken final-route fixture, `bun run verify --out _site`, and workflow YAML parse. |
| Final HTML route-audit change | `bun test tools/html_route_audit.test.ts tools/verify.test.ts`; include positive relative / same-origin / asset cases and a committed missing-route negative fixture; build, Pagefind, assemble, then run `bun run html:routes --out _site`. |
| Truthfulness audit/output-boundary change | `bun test tools/audit_artifact_isolation.test.ts`; generate an in-repo `audit-artifacts/` fixture, then prove strict release counts and fixed-timestamp discovery/API/sitemap outputs are unchanged and contain no local path. |
| Factual consistency audit change | `bun tools/factual_consistency_audit.ts`, `bun tools/factual_consistency_audit.ts --json`, and a temporary seeded duplicate-entity conflict with `--fail-on-conflicts` before removing the fixture. |
| Provenance completeness audit change | `bun test tools/provenance_completeness_audit.test.ts`; `bun tools/provenance_completeness_audit.ts`; parse the complete large report with `bun run provenance:audit -- --json \| jq`; and retain positive / negative fixtures for table heading, lead, footer, bounded section source, direct row links, homogeneous unsourced tables, mixed rows, generic nearby markers, and distant source lists. |
| UI/CSS/theme/layout change | Visual QA checklist, Astro build, duplicate-id check, desktop/mobile spot checks. |
| Delegated model-agent implementation | Review task packet, allowed-file diff, RTM rows and command report. |
| Code/doc alignment change | `bun tools/active_doc_stale_scan.ts` (active-doc stale scan), docs Markdown link check, docs leakage grep, [Documentation Drift Audit](documentation-drift-audit.md). |

## Exit Criteria

- Required commands exit 0.
- The local canonical command and fresh pull-request `Required verification` context both pass.
- README, CHANGELOG, and post-contract release notes pass the Japanese -> English -> Chinese documentation audit.
- No active stale doc-path references.
- Generated diff is intentional.
- No `docs/` page/source/API entry or crawlable markdown link leaks into public content surfaces.
- No truthfulness audit artifact or local artifact path changes corpus/API/sitemap counts or enters generated/public output.
- Historical audit fixtures reproduce the observed freshness trend, two-cycle growth can trip, repeated consistency groups count both source sides, and the workflow passes downloaded scheduled history into the runner.
- No stale moved-domain API JSON remains after release write.
- Fixed-timestamp regeneration is byte-identical for the six fixed discovery targets and every per-entry API JSON, including `metrics.last_modified`.
- Generated Japanese canonicals, English alternates, raw `.md` and API URLs resolve as non-empty regular files in the final assembled output.
- API `external_links` contains only absolute HTTP(S); same-host values are audited and wrong-scheme/port origins fail, while source-preserving `ai-index.json` `markdown_links` are not deploy-route claims.
- Assembled output contains no developer, hidden/ignored source, unmanifested or unknown-root files beyond the generated `.nojekyll` marker, and unsafe output paths cannot reach recursive cleanup.
- Root, ja/en, crawler, AI/API and Pagefind required routes exist in the final assembled output.
- Every same-origin `href` in every final assembled HTML file resolves to an exact-case, non-empty, non-symlink regular file after query and fragment removal.

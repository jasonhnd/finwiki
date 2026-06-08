# Test Plan

## Standard Documentation Restructure Checks

```bash
git status --short --branch
# Run the approved stale-path scan for the moved flat docs and former site-level docs.
rg -n "docs/(architecture|toolchain|release-process|gotchas|entry-authoring|parallel-development|roadmap|backlog|decisions|domains|japanfg-split-design)\\.md|site/ARCHITECTURE\\.md|site/DEVELOPMENT-PLAN\\.md" docs README.md AGENTS.md CHANGELOG.md releases
rg -n "23 domains|23-domain|領域数 23|领域数 23|site/src/content/entries|postbuild|python tools/|tools/release\\.py|wiki_link_audit\\.py|generate_ai_discovery\\.py" docs -g "!99-archive/**"
rg -n "\"source\"\\s*:\\s*\"docs/|\"path\"\\s*:\\s*\"docs/|/docs/|<loc>[^<]*/docs/" ai-index.json api/entries/index.json sitemap.xml llms.txt llms-full.txt robots.txt
bun tools/release.ts --write
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

## When To Add More Tests

| Change Type | Additional Checks |
|---|---|
| Site rendering change | Astro build and browser spot check. |
| Discovery generator change | Inspect `ai-index.json`, `llms-full.txt`, API output, stale API residue, docs-link filtering. |
| Domain move | Broad wikilink audit, i18n mirror path/source check. |
| Translation pipeline change | Placeholder tests and sample mirror verify. |
| Release tooling change | Positive and negative gate tests. |
| UI/CSS/theme/layout change | Visual QA checklist, Astro build, duplicate-id check, desktop/mobile spot checks. |
| Delegated model-agent implementation | Review task packet, allowed-file diff, RTM rows and command report. |
| Code/doc alignment change | `bun tools/active_doc_stale_scan.ts` (active-doc stale scan), docs Markdown link check, docs leakage grep, [Documentation Drift Audit](documentation-drift-audit.md). |

## Exit Criteria

- Required commands exit 0.
- No active stale doc-path references.
- Generated diff is intentional.
- No `docs/` page/source/API entry or crawlable markdown link leaks into public content surfaces.
- No stale moved-domain API JSON remains after release write.

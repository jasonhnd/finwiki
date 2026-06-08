# Documentation Drift Audit

> 2026-06-08 JST full audit of active developer documentation, root control docs, generated discovery/API surfaces, and the implementation facts those docs describe. This is the current baseline before the next development phase in [Next Development Plan](../01-strategy/next-development-plan.md).

## Scope

| Area | Included | Rule |
|---|---|---|
| Active developer docs | `docs/00-governance` through `docs/08-operations` | Must describe current implementation and current operating rules. |
| Archive | `docs/99-archive` | May preserve obsolete plans, but cannot be used as current truth. |
| Root control docs | `README.md`, `AGENTS.md`, `CHANGELOG.md`, root planning docs | May record history, but current navigation and rules must not point to stale paths. |
| Release notes | `releases/v*.md` | Public history may mention old counts and old decisions. Current release notes should avoid exposing docs links as machine-readable AI traversal links. |
| Generated surfaces | `ai-index.json`, `llms*.txt`, `sitemap.xml`, `api/entries/**` | Must reflect current corpus and must not retain stale moved-entry API files. |

## Current Facts

| Fact | Current value | Source of truth |
|---|---:|---|
| Topical domains | 40 | root `INDEX.md`, `ai-index.json` counts |
| Link-audited public wiki entries | 1485 | `tools/wiki_link_audit.ts` |
| Markdown files counted by release tooling | 1566 | `tools/release.ts --check --strict` |
| Unresolved wikilink issues | 0 | `tools/wiki_link_audit.ts --fail-on-issues` |
| Canonical anchor drift | 0 | release gate with `--fail-on-canonical-drift` |
| `docs/` status | excluded from corpus/site/sitemap/llms/API/wikilink audit | `lib/markdown_helpers.ts`, `tools/wiki_link_audit.ts`, site allowlist |

`docs/` is excluded from release-tooling counts, so adding or editing this audit document must not change the 1566 corpus Markdown count. The durable rule is that `bun tools/release.ts --write` then `--check --strict` must synchronize the published snapshot after any generated-surface-affecting change.

## Findings And Fixes

| Finding | Status | Fix |
|---|---|---|
| Moved flat-doc paths | Clean | Stale moved-path scan found no active references to former flat docs or former `site/` docs paths. |
| Active roadmap wording | Fixed | Roadmap/backlog now treat P2 and deployment-runbook expansion as completed documentation work, while next tooling gaps stay open. |
| JapanFG split design drift | Fixed | The design now reflects actual 17 new domains, 40 total domains, and retained `JapanFG/INDEX` umbrella behavior. |
| Entry authoring canonical examples | Fixed | Old `JapanFG/<entity>` anchor examples now use actual post-split entity paths. |
| Source canonical anchors | Fixed | Remaining root source declarations that pointed at old JapanFG-prefixed entity paths were updated to current entity paths. |
| AI surface docs links | Fixed in generator | `extractMarkdownLinks()` filters links into `docs/` so README/CHANGELOG/release notes may discuss docs publicly without exposing internal docs as AI traversal targets. |
| Stale API entry files | Fixed in generator | `generate_ai_discovery.ts` clears `api/entries/` before rewriting current per-entry JSON files. |
| UI domain-group comment | Fixed | `site/src/i18n/groups.ts` no longer describes the domain set as 23 domains. |
| Operations docs too terse | Fixed | Deployment, incident and maintenance runbooks now include local build, Vercel shadow, GitHub Actions, public spot-checks and drift routines. |

## Active Vs Historical Rule

Active docs must not present old facts as current implementation. Historical records may retain old facts only when they are clearly part of a dated event, release note, ADR history or archive.

Allowed historical examples:

- Old 23-domain state in ADR-008 or older release notes.
- Old 4147 / 4219 page build counts in dated README/CHANGELOG history.
- Old Python tooling references in archived plans or historical release records.

Not allowed in active instructions:

- Telling developers to use `site/src/content/entries` as the site source.
- Describing canonical drift as merely non-gating in release readiness.
- Treating `JapanFG/<entity>` as the current canonical path for moved entities.
- Treating deployment operations as memory-only instead of runbook-driven.

## Audit Command Bundle

Use this bundle before delegating the next development task:

```bash
git status --short --branch
rg -n "docs/(architecture|toolchain|release-process|gotchas|entry-authoring|parallel-development|roadmap|backlog|decisions|domains|japanfg-split-design)\\.md|site/ARCHITECTURE\\.md|site/DEVELOPMENT-PLAN\\.md" docs README.md AGENTS.md CHANGELOG.md releases
rg -n "23 domains|23-domain|領域数 23|领域数 23|site/src/content/entries|postbuild|python tools/|tools/release\\.py|wiki_link_audit\\.py|generate_ai_discovery\\.py" docs -g "!docs/99-archive/**"
node -e "const fs=require('fs');const ai=JSON.parse(fs.readFileSync('ai-index.json','utf8'));const api=JSON.parse(fs.readFileSync('api/entries/index.json','utf8'));const bad=[];const chk=(k,v)=>{if(typeof v==='string'&&/^(\\.\\.\\/)*docs\\//.test(v))bad.push(k+': '+v)};(ai.entries||[]).forEach((e,i)=>{chk('ai.source_path '+i,e.source_path);chk('ai.url '+i,e.url);(e.markdown_links||[]).forEach((l,j)=>chk('ai.link '+i+'.'+j,l));});(api.entries||[]).forEach((e,i)=>{chk('api.source_path '+i,e.source_path);chk('api.url '+i,e.url);chk('api.api_url '+i,e.api_url);});if(/<loc>[^<]*\\/docs\\//.test(fs.readFileSync('sitemap.xml','utf8')))bad.push('sitemap docs loc');if(bad.length){console.log(bad.join('\\n'));process.exit(1)}console.log('generated_docs_surface_ok')"
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

Interpretation:

- `rg` exit 1 can mean "no matches", which is a pass for stale-path and leakage scans.
- Release notes and archive may contain dated historical references; do not rewrite them unless they are currently misleading.
- Generated surfaces must be regenerated after any doc, release note, content or generator change that affects counts or machine-readable outputs.

## Next Development Baseline

The next implementation phase should start from these source-of-truth docs:

| Workstream | Primary doc | First implementation packet |
|---|---|---|
| `.txt` route/link audit | [Next Development Plan](../01-strategy/next-development-plan.md#phase-a---public-entry-point-audit-hardening) | Add a reusable route-reference audit for `llms-tasks.txt`, `llms.txt`, and `llms-full.txt`. |
| Docs quality tooling | [Documentation System](../00-governance/documentation-system.md) | Add reusable docs Markdown link checker and active-doc stale scan. |
| i18n status | [i18n Pipeline](../05-functional-specs/i18n-pipeline.md) | Add read-only i18n freshness/source-pointer report before future translation batches. |
| Deployment verification | [Deployment Runbook](../08-operations/deployment-runbook.md) | Keep runbook current; add code/tooling only if the runbook exposes repeatable manual steps. |
| UI/CSS work | [UI/UX Functional Spec](../05-functional-specs/ui-ux.md) | Any UI/CSS change must include visual QA and Japanese UI chrome checks. |

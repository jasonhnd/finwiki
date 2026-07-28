# Documentation Drift Audit

> Refreshed 2026-07-28 JST. This is the active baseline for developer documentation, root control docs, generated discovery/API surfaces, and the implementation facts those docs describe. The original 2026-06-08 plan is retained as completed history in [Next Development Plan](../01-strategy/next-development-plan.md).

## Scope

| Area | Included | Rule |
|---|---|---|
| Active developer docs | `docs/00-governance` through `docs/08-operations` | Must describe current implementation and current operating rules. |
| Archive | `docs/99-archive` | May preserve obsolete plans, but cannot be used as current truth. |
| Root control docs | `README.md`, `AGENTS.md`, `CHANGELOG.md`, root planning docs | May record history, but current navigation and rules must not point to stale paths. |
| Release notes | `releases/v*.md` | Public history may mention old counts and old decisions. Current release notes should avoid exposing docs links as machine-readable AI traversal links. |
| Generated surfaces | `ai-index.json`, `llms*.txt`, `sitemap.xml`, `api/entries/**` | Must reflect current corpus and must not retain stale moved-entry API files. |

## Current Facts

| Fact | Current source of truth |
|---|---|
| Topical domains | `ai-index.json` → `counts.topical_domains`; root Domain Map |
| Link-audited public wiki entries | `ai-index.json` → `counts.link_audited_entries`; wikilink audit output |
| Markdown files counted by release tooling | `ai-index.json` → `counts.markdown_files`; strict release output |
| Per-domain entry counts | root `INDEX.md`, checked by `bun run index:counts` |
| Unresolved wikilink / canonical issues | strict release and wikilink audit output |
| `docs/` status | excluded from corpus/site/sitemap/llms/API/wikilink audit by shared implementation rules |

`docs/` is excluded from release-tooling counts, so editing this audit document does not change corpus Markdown totals. Release notes are part of the corpus and do change them. The durable rule is to commit source changes before generating the release snapshot, then run `release:write` and the strict checks so generated metrics remain self-consistent.

## Findings And Fixes

| Finding | Status | Fix |
|---|---|---|
| Moved flat-doc paths | Clean | Stale moved-path scan found no active references to former flat docs or former `site/` docs paths. |
| Active roadmap wording | Fixed and guarded | Roadmap/backlog label delivered work as history and route live status to GitHub instead of copying numbered queues. |
| JapanFG split design drift | Fixed | The design now reflects actual 17 new domains, 40 total domains, and retained `JapanFG/INDEX` umbrella behavior. |
| Entry authoring canonical examples | Fixed | Old `JapanFG/<entity>` anchor examples now use actual post-split entity paths. |
| Source canonical anchors | Fixed | Remaining root source declarations that pointed at old JapanFG-prefixed entity paths were updated to current entity paths. |
| AI surface docs links | Fixed in generator | `extractMarkdownLinks()` filters links into `docs/` so README/CHANGELOG/release notes may discuss docs publicly without exposing internal docs as AI traversal targets. |
| Stale API entry files | Fixed in generator | `generate_ai_discovery.ts` clears `api/entries/` before rewriting current per-entry JSON files. |
| UI domain-group comment | Fixed | `site/src/i18n/groups.ts` no longer carries the obsolete pre-split domain total. |
| Operations docs too terse | Fixed | Deployment, incident and maintenance runbooks include local build, Vercel shadow, GitHub Actions, public spot-checks and drift routines. |
| Volatile corpus metrics | Fixed and guarded | Active docs read current totals from generated counts; `docs:stale` rejects mismatched copied snapshots. |
| Repository license metadata | Fixed and guarded | `package.json` matches the Apache 2.0 license text; `docs:stale` checks the invariant. |

## Active Vs Historical Rule

Active docs must not present old facts as current implementation. Historical records may retain old facts only when they are clearly part of a dated event, release note, ADR history or archive.

Allowed historical examples:

- Old 23-domain state in ADR-008 or older release notes.
- Old 4147 / 4219 page build counts in dated README/CHANGELOG history.
- Old Python tooling references in archived plans or historical release records.

Not allowed in active instructions:

- Telling developers to use the removed generated content mirror as the site source.
- Describing canonical drift as merely non-gating in release readiness.
- Treating `JapanFG/<entity>` as the current canonical path for moved entities.
- Treating deployment operations as memory-only instead of runbook-driven.

## Audit Command Bundle

Use this bundle before delegating the next development task:

```bash
git status --short --branch
bun run docs:audit
bun run docs:stale
bun run index:counts
bun run release:check
bun run wiki:audit:ci
git diff --check
```

Interpretation:

- Release notes and archive may contain dated historical references; do not rewrite them unless they are currently misleading.
- Generated surfaces must be regenerated after any doc, release note, content or generator change that affects counts or machine-readable outputs.
- A genuinely historical match in an active document needs a narrow, reviewed allowlist entry with a reason; blanket file exclusions are not acceptable.

## Current Development Baseline

| Workstream | Primary source | Current gate |
|---|---|---|
| Live scope and issue state | GitHub issue tracker | issue scope, acceptance, labels, implementing commit, closeout evidence |
| Public AI routes | [AI Discovery Surface](../05-functional-specs/ai-discovery-surface.md) | `bun run ai:audit` |
| Developer documentation | [Documentation System](../00-governance/documentation-system.md) | `bun run docs:audit` and `bun run docs:stale` |
| i18n integrity | [i18n Pipeline](../05-functional-specs/i18n-pipeline.md) | `bun run i18n:check` |
| Domain counts | root `INDEX.md` Domain Map | `bun run index:counts` |
| Deployment verification | [Deployment Runbook](../08-operations/deployment-runbook.md) | `bun run verify` plus remote checks |
| UI/CSS work | [UI/UX Functional Spec](../05-functional-specs/ui-ux.md) | visual QA and Japanese UI chrome checks |

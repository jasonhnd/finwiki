# Code / Docs Alignment Audit

> 2026-06-08 JST audit of how well FinWiki's code, generated surfaces, and developer documentation match. This is a planning input for [next-development-plan.md](../01-strategy/next-development-plan.md).

## Scope

Reviewed surfaces:

- Root tooling: `tools/release.ts`, `tools/wiki_link_audit.ts`, `tools/generate_ai_discovery.ts`, `lib/markdown_helpers.ts`.
- Site configuration and translation scripts: `site/src/content.config.ts`, `site/scripts/prep-parallel.mjs`, `site/scripts/commit-translate.mjs`, `site/package.json`.
- Developer docs: BRD / PRD / NFR / RTM / ARD / FSD, architecture docs, functional specs, implementation docs, quality docs, operations runbooks.
- Public generated surfaces: `README.md`, `index.html`, `ai-index.json`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, `api/entries/index.json`.

This audit checks implementation/documentation fit. It does not re-verify financial facts in individual wiki entries.

## Alignment Summary

| Area | Fit | Evidence | Action |
|---|---|---|---|
| Release gate | Strong | `tools/release.ts` runs wikilink audit, canonical drift gate, count sync, JSON/LF/duplicate-id verification. | Keep as primary publish readiness source. |
| Wikilink audit | Strong with one gap | `.md` entries, aliases, dead links and canonical drift are covered; `.txt` entry points are not covered. | Add `.txt` wikilink/route audit to next plan. |
| Discovery surface | Strong after cleanup fix | `generate_ai_discovery.ts` uses `iterMarkdownFiles`, excludes `docs/`, emits sitemap/llms/ai-index/API, clears stale API entries before rewrite. | Keep docs-leakage and stale-API grep as standard QA commands. |
| `docs/` exclusion | Strong after link filter | `docs` appears in both `EXCLUDED_WALK_DIRS` and `IGNORED_DIRS`; Markdown links into `docs/` are filtered out of AI surface links. | Keep invariant in AGENTS/RTM. |
| Domain documentation | Previously stale, now corrected | `domains.md` still carried a 23-domain historical table; root `INDEX.md` and code now use 40 domains. | Replaced `domains.md` with current 40-domain planning table. |
| Astro site architecture | Previously stale, now corrected | Old doc included 23 domains, 4140-page estimates, old `site/src/content/entries` mirror and Python/postbuild assumptions. | Rewritten as current site architecture. |
| Toolchain docs | Partially stale, now corrected | `toolchain.md` described canonical anchor audit as report-only, while `release.ts` gates drift with `--fail-on-canonical-drift`. | Updated toolchain and wikilink spec. |
| UI/UX docs | Previously scattered, now connected | UI/UX existed only as site rendering/search snippets and README theme notes. | Added product principles, theme architecture, FSD entry, visual QA, and RTM links. |
| i18n pipeline | Adequate but under-instrumented | Prep/commit support `--langs`; placeholder checks exist; global freshness/report command is not formalized. | Add i18n freshness/audit command to next plan. |
| Docs link health | Adequate but ad hoc | Current docs link check passed via one-off Node script; no first-class tool/script exists. | Add docs link checker to next plan. |
| Deployment operations | Stronger after audit | Deployment runbook covers site dependency install, local build, duplicate-id check, Vercel shadow build, GitHub Actions watch and public URL spot-checks. | Keep synchronized with future deployment tooling. |
| Generated API cleanup | Previously stale, now corrected | Old `api/entries/JapanFG/*` JSON files could remain after a domain move even when `api/entries/index.json` no longer referenced them. | `generate_ai_discovery.ts` now clears `api/entries/` before writing current entries. |
| Canonical anchor paths | Previously alias-tolerant, now corrected | Some source `canonical_anchor` fields still used old `JapanFG/<entity>` aliases after the physical split. | Updated source frontmatter and authoring examples to current entity paths. |

## Key Findings

### ALIGN-001: Release Gate Is The Correct Source Of Truth

The code and docs now agree that publish readiness is controlled by:

```bash
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

`release.ts` also calls `wiki_link_audit.ts --fail-on-canonical-drift`, so canonical anchor drift is a publish-blocking issue through the release gate.

### ALIGN-002: `.txt` Entry Points Are A Real Audit Gap

`llms-tasks.txt` is a public AI task entry point and can contain route-like references, but `wiki_link_audit.ts` only walks Markdown entries. Historical README/CHANGELOG already record that `.txt` links once drifted. This should be the next code improvement because it is small, testable, and directly protects AI/crawler entry points.

### ALIGN-003: Docs Link Checking Is Not Yet First-Class

`docs/` is excluded from corpus and wikilink audit by design. That is correct, but it means Markdown links inside developer docs need a separate checker. The current one-off Node script proves the check is easy. It should become a root tool and be wired into the documentation test plan.

### ALIGN-004: i18n Has Good Batch Scripts But Needs A Freshness Report

`site/scripts/prep-parallel.mjs --langs` and `commit-translate.mjs --langs` support target-language batching and source-hash freshness. However, maintainers still need a concise read-only report for:

- missing mirrors by language,
- stale mirrors by language,
- `fidelity: needs_review`,
- source pointer drift,
- wikilink/number mismatch spot checks.

This should be a read-only command before any new translation batch.

### ALIGN-005: Some Historical Docs Must Stay Historical

Old release notes and README history naturally mention old counts, old 23-domain states, old Pagefind/page counts and old build facts. Those should remain historical evidence. Active developer docs, source frontmatter, code comments and generated-surface behavior must not instruct developers or machines using old assumptions. The active stale items found in this audit were corrected or moved into the next plan.

### ALIGN-006: UI/UX Is A Cross-Layer Spec, Not A New Top-Level Tree

UI/UX now has a product principle document, a theme architecture document, an FSD execution document, and a visual QA checklist. This keeps the current docs structure intact while making UI/CSS/theme/localization changes traceable through PRD, ARD, FSD, NFR and RTM.

## Current Readiness

The repo is ready for the next development phase if the work starts with tooling/docs quality rather than new content volume. Adding more entries before fixing `.txt` audits, docs link checks and i18n freshness reporting would increase surface area without improving operational control.

## Recommended Next Phase

Use [next-development-plan.md](../01-strategy/next-development-plan.md). The recommended order is:

1. Add `.txt` route/link audit to release gate.
2. Add a first-class docs Markdown link checker.
3. Add active-doc stale scan.
4. Add i18n freshness/integrity report.
5. Add reusable docs link and stale-active-doc checks so the current manual drift audit becomes a repeatable gate.
6. Then address content deduplication and selective expansion.

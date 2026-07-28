# Code / Docs Alignment Audit

> Refreshed 2026-07-28 JST. The 2026-06-08 audit produced the historical implementation sequence in [next-development-plan.md](../01-strategy/next-development-plan.md); the formerly missing route, docs, stale-state, i18n, and generated-surface checks are now implemented.

## Scope

Reviewed surfaces:

- Root tooling: `tools/release.ts`, `tools/wiki_link_audit.ts`, `tools/generate_ai_discovery.ts`, `lib/markdown_helpers.ts`.
- Site configuration and translation scripts: `site/src/content.config.ts`, `site/scripts/prep-parallel.mjs`, `site/scripts/commit-translate.mjs`, `site/package.json`.
- Human-site UI implementation: `site/src/styles/global.css`, `site/src/layouts/Base.astro`, `site/src/layouts/EntryLayout.astro`, `site/src/pages/[lang]/**`, `site/src/components/*.astro`, `site/src/i18n/ui.ts`.
- Developer docs: BRD / PRD / NFR / RTM / ARD / FSD, architecture docs, functional specs, implementation docs, quality docs, operations runbooks.
- Public generated surfaces: `README.md`, `index.html`, `ai-index.json`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, `api/entries/index.json`.

This audit checks implementation/documentation fit. It does not re-verify financial facts in individual wiki entries.

## Alignment Summary

| Area | Fit | Evidence | Action |
|---|---|---|---|
| Release gate | Strong | `tools/release.ts` runs wikilink audit, canonical drift gate, count sync, JSON/LF/duplicate-id verification. | Keep as primary publish readiness source. |
| Public route audits | Strong | `.md` entries, aliases, dead links and canonical drift are covered by the wikilink audit; `.txt` entry points are covered by `ai:audit`. | Keep both checks in `verify`. |
| Discovery surface | Strong after cleanup fix | `generate_ai_discovery.ts` uses `iterMarkdownFiles`, excludes `docs/`, emits sitemap/llms/ai-index/API, clears stale API entries before rewrite. | Keep docs-leakage and stale-API grep as standard QA commands. |
| `docs/` exclusion | Strong after link filter | `docs` appears in both `EXCLUDED_WALK_DIRS` and `IGNORED_DIRS`; Markdown links into `docs/` are filtered out of AI surface links. | Keep invariant in AGENTS/RTM. |
| Domain documentation | Strong after volatile-count removal | `domains.md` reads totals from generated counts and per-domain values from the root Domain Map. | Keep `index:counts` as the numeric gate. |
| Astro site architecture | Strong after historical-plan labeling | Current architecture describes root-corpus loading; the Astro upgrade plan is explicitly a shipped historical record. | Keep dependency state in package manifests and live checks. |
| Toolchain docs | Strong | `toolchain.md` and `release.ts` agree that canonical drift is a publish-blocking gate. | Keep the release contract tested. |
| UI/UX docs | Strong after current-code baseline pass | UI/UX existed only as site rendering/search snippets and README theme notes; it now records the accepted current implementation. | Product principles, theme architecture, FSD entry, visual QA, PRD and RTM all point to the current CSS/layout/component baseline. |
| i18n pipeline | Strong and inspectable | Prep/commit support `--langs`; `i18n:status` and `i18n:check` report and gate missing, stale, orphaned, pointer-drift, and review states. | Run the strict check before releases and translation handoffs. |
| Docs link and stale-state health | Strong | `docs:audit` validates developer-doc links; `docs:stale` checks obsolete paths, metrics, copied issue state, release guidance, and license metadata. | Extend fixtures when a new drift class is discovered. |
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

### ALIGN-002: `.txt` Entry-Point Gap Is Closed

`llms-tasks.txt`, `llms.txt`, and `llms-full.txt` are protected by the first-class `ai:audit` command. The Markdown wikilink audit remains separate by design, and `verify` runs both contracts.

### ALIGN-003: Docs Checks Are First-Class

`docs/` remains excluded from corpus and wikilink audit by design. `docs:audit` checks its Markdown links, while `docs:stale` protects current-state claims and dynamically compares copied metrics with `ai-index.json`.

### ALIGN-004: i18n Has A Read-Only Report And Strict Gate

`site/scripts/prep-parallel.mjs --langs` and `commit-translate.mjs --langs` support target-language batching and source-hash freshness. `i18n:status` now reports:

- missing mirrors by language,
- stale mirrors by language,
- `fidelity: needs_review`,
- source pointer drift,
- wikilink/number mismatch spot checks.

`i18n:check` turns the blocking subset into a release/verification gate without rewriting mirrors.

### ALIGN-005: Some Historical Docs Must Stay Historical

Old release notes and README history naturally mention pre-split domain totals, old Pagefind/page counts and old build facts. Those should remain historical evidence. Active developer docs, source frontmatter, code comments and generated-surface behavior must not instruct developers or machines using old assumptions. The active stale items found in this audit were corrected or moved into the next plan.

### ALIGN-006: UI/UX Is A Cross-Layer Spec, Not A New Top-Level Tree

UI/UX now has a product principle document, a theme architecture document, an FSD execution document, and a visual QA checklist. This keeps the current docs structure intact while making UI/CSS/theme/localization changes traceable through PRD, ARD, FSD, NFR and RTM.

The current human-site UI is explicitly documented as the approved baseline, not as a pending redesign request. The baseline maps to the actual implementation surfaces: `global.css` tokens and shared classes, `Base.astro` shell/Pagefind wiring, `EntryLayout.astro` rails/factbar/TOC/prose layout, `[lang]/index.astro` home entry experience, domain/browse page filters and scan lists, `ThemeToggle.astro`, `LangSwitcher.astro`, and `site/src/i18n/ui.ts`.

## Current Readiness

The foundational route, docs, i18n, discovery, release, and deployment checks identified by the 2026-06-08 audit are implemented. New work should start from a scoped GitHub issue and use the existing gates rather than reopening the delivered historical sequence.

## Current Control Surface

Use the live GitHub issue tracker for scope and ordering. For each accepted packet:

1. keep Allowed Files and acceptance criteria explicit;
2. run the focused tool test plus `docs:audit`, `docs:stale`, and relevant domain checks;
3. run `verify` when public/release surfaces can change;
4. attach the passing command evidence and implementing commit to the issue before closeout.

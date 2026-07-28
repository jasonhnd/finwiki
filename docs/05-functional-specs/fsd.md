# FSD - Functional Specification

## Functional Areas

| ID | Function | Spec | Primary Validation |
|---|---|---|---|
| FSD-001 | Site rendering | [Site Rendering](site-rendering.md) | Astro build / release check |
| FSD-002 | Search | [Search](search.md) | search index build / release check |
| FSD-003 | Wikilink resolution | [Wikilink Resolution](wikilink-resolution.md) | `wiki_link_audit.ts --fail-on-issues` |
| FSD-004 | i18n pipeline | [i18n Pipeline](i18n-pipeline.md) | placeholder verify + mirror spot check |
| FSD-005 | Release gate | [Release Gate](release-gate.md) | `bun run verify` + required PR check |
| FSD-006 | AI discovery surface | [AI Discovery Surface](ai-discovery-surface.md) | exact regeneration + assembled-route audit in `bun run verify` |
| FSD-007 | Model-agent development workflow | [Model-Agent Workflow](../06-implementation/model-agent-workflow.md) | task packet + allowed-file review |
| FSD-008 | Human-site UI/UX | [UI/UX](ui-ux.md) | visual QA + site build when UI changes |
| FSD-009 | Static publish boundary | [Release Gate](release-gate.md#static-publish-boundary) | canonical assembly + boundary/required-route negative fixtures |

## Shared Acceptance

- No dead wikilinks.
- No count drift.
- No docs leakage into public corpus/discovery as page/source/API entry or AI traversal link.
- No audit artifact or local artifact path enters corpus counts, discovery/API/site/publish output, or shareable audit summaries.
- No stale moved-entry API JSON remains after release generation.
- Japanese HTML canonicals, English alternates and internal explicit `.md`/API route claims resolve in the final assembled artifact; fixed-timestamp regeneration is byte-identical, including per-entry `last_modified`.
- Same-host route claims use the exact site scheme, hostname and port; source-preserving `markdown_links` remain distinct from API absolute-HTTP `external_links`.
- No unrelated generated churn.
- README, CHANGELOG, and post-contract release notes follow Japanese -> English -> Chinese order; release titles are Japanese-only.
- Public information boundary remains intact.
- Delegated code output can be traced back to a task packet and accepted against PRD/FSD/ARD/NFR/RTM.
- Human-site UI changes preserve Japanese chrome, theme direction, responsive readability, and visible provenance/translation states.
- Static deployment contains only Astro output and manifest-approved raw public surfaces, and unsafe output paths fail before recursive cleanup.

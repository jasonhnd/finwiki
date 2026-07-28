---
title: Frontmatter canonical_anchor Field · Historical Decision Record
aliases:
  - frontmatter-canonical-anchor-field-proposal
  - canonical-anchor-field-proposal
  - canonical-anchor-frontmatter-proposal
  - schema-extension-canonical-anchor
domain: control-proposal
created: 2026-05-25
last_updated: 2026-07-28
last_tended: 2026-07-28
review_by: 2027-05-25
confidence: certain
tags: [meta, decision-record, historical, frontmatter, canonical-anchor, navigation]
status: deprecated
sources:
  - SCHEMA.md (current FinWiki frontmatter contract)
  - docs/04-architecture/adr.md (ADR-002 and ADR-007)
  - docs/06-implementation/entry-authoring.md (current authoring rule)
  - tools/wiki_link_audit.ts (declared-anchor integrity audit)
  - tools/generate_ai_discovery.ts (entity-identity discovery output)
---

# Frontmatter canonical_anchor Field · Historical Decision Record

## Wiki route

This historical record sits at FinWiki root next to [[SCHEMA|the current schema]] and [[INDEX|the repository map]]. Read [[entity-mirror-page-policy|the mirror-page policy]] and [[cross-domain-anchor-convention|the anchor convention]] for current editorial rules. The original proposal is retained to explain why `canonical_anchor` exists; it is not a future-work specification.

> [!info] Current status
> The proposal has been fully decided and implemented. `canonical_anchor` is **required on a mirror page**, omitted on the canonical anchor and on ordinary single-domain entries, and drift-gated when declared. Current authority is `SCHEMA.md`, ADR-007, and the entry-authoring guide.

## 1. Original problem

FinWiki needed a machine-readable way to distinguish a domain-specific mirror from an ordinary cross-reference. Aliases resolve page names, but they do not state that two pages describe the same underlying entity. Without an identity edge, reviewers and AI consumers could not reliably tell which page was primary, and a moved anchor could silently leave mirror metadata stale.

## 2. Landed decision sequence

| Phase | Landed result |
|---|---|
| 0 | Added the string field to `SCHEMA.md` and piloted it on confirmed mirror pairs. |
| 1 | Added declared-anchor resolution and core-body backlink reporting to `tools/wiki_link_audit.ts`. |
| 2 | Added canonical identity edges to `ai-index.json` and inline anchor metadata to `llms-full.txt`. |
| 3 | Back-filled the known mirror set and reached `canonical_anchor_drift=0`. |
| 4 | ADR-007 made the field an editorial hard requirement for mirror pages and made declared drift a release blocker through `--fail-on-canonical-drift`. |

The staged rollout was deliberate: report-only observation came first, then discovery output and back-fill, then the release gate. This record is therefore historical, while the resulting contract remains active.

## 3. Current authoritative contract

- **Mirror page:** must set one internal vault-root `canonical_anchor: domain/slug` value pointing to the designated anchor.
- **Canonical anchor page:** must omit `canonical_anchor`; self-pointing is not allowed by the authoring convention.
- **Ordinary or merely related page:** must omit the field and use normal wikilinks or `related` metadata instead.
- **Core-body link:** a declaring mirror must link the same anchor before `## Related` / `## Sources`.
- **Declared-anchor gate:** the target must resolve and the required core-body link must exist. `bun tools/release.ts --check --strict` fails when `canonical_anchor_drift>0`.
- **Mirror discovery boundary:** tooling cannot reliably infer every semantic mirror. Review and authoring rules enforce whether the field is present; tooling fail-closes the integrity of every declaration.

## 4. Resolved design questions

| Question | Decision |
|---|---|
| String or list? | One string. The field expresses one primary identity anchor. |
| Internal path or external URL? | Internal vault-root path only. |
| May an anchor self-point? | No. The anchor omits the field. |
| May ordinary related pages use it? | No. Use wikilinks, `related`, or typed entity edges. |
| Is it a redirect/successor field? | No. Deprecation and successor navigation use explicit status, notes, and links. |
| Does the release gate find missing mirror declarations? | No. Mirror classification is editorial; the gate validates declarations that exist. |

## 5. Current outputs and invariants

The declared relationship remains part of the public machine-readable identity surface:

- `ai-index.json` groups anchors and mirrors in its canonical identity edges.
- `llms-full.txt` exposes the anchor on declaring mirror pages.
- Per-entry JSON frontmatter includes `canonical_anchor` or `null`.
- Release verification keeps `canonical_anchor_drift=0`.

These are implemented contracts, not optional proposal phases.

## 6. Supersession

The original proposal text described optional use, possible self-pointing anchors, use on heavily related pages, and a future hard-requirement phase. Those alternatives were superseded by ADR-007 and the current `SCHEMA.md` / entry-authoring rules. This page retains the route and aliases so historical links remain valid while clearly recording the final decision.

## Related

- [[SCHEMA]] — current frontmatter authority.
- [[INDEX]] — current domain and control-document map.
- [[cross-domain-anchor-convention]] — current anchor designation and cross-domain rule.
- [[entity-mirror-page-policy]] — current mirror admission and frontmatter rule.
- [[wiki-link-improvement-plan]] — generated link and declared-anchor integrity report.

## Sources

- `SCHEMA.md` — current conditional requirement and key order.
- `docs/04-architecture/adr.md` — ADR-002 staged rollout and ADR-007 final gate decision.
- `docs/06-implementation/entry-authoring.md` — current mirror authoring checklist.
- `tools/wiki_link_audit.ts` — declared-anchor validation.
- `tools/generate_ai_discovery.ts` — public entity identity output.

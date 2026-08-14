# Per-entry API `canonical_anchor` decision

Status: accepted for Issue #281

Date: 2026-08-14 JST

## Decision

**Keep the field.** `api/entries/*.json` already exposes `frontmatter.canonical_anchor` as a string or `null`. Do not remove it, and do not open a second generator change.

## Rationale

- [AI Discovery Surface](ai-discovery-surface.md) already lists the field in the per-entry contract.
- `tools/generate_ai_discovery.ts` already writes it. About 12 mirror pages carry a non-null value; anchors and ordinary pages serialize `null`.
- The 2026-06 backlog note that the field was omitted is **stale**. A one-time 1,400-file API regen already happened in later discovery releases.
- Per-entry consumers can resolve a mirror to its anchor without parsing `ai-index.json` `entities[]`. Graph traversal still belongs on `ai-index.json`.

## Non-goals

- No corpus edits.
- No change to `canonical_anchor` authoring policy (mirror required; anchors omit the field).
- No typed `entity_edges` inside per-entry JSON in this decision.

## Child implementation

None. The generator work is already on `main`.

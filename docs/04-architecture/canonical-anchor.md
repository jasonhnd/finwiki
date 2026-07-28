# Canonical Anchor

## Authority

This document summarizes the current architecture contract. Root `SCHEMA.md` defines the field, [ADR-007](adr.md#adr-007canonical_anchor-hard-requirement-用-drift-gate--写作规范而非-mirror-自动检测) records the final decision, and [Entry Authoring](../06-implementation/entry-authoring.md) defines the operational checklist. The root proposal page is a historical decision record, not future optional work.

## Problem

The same institution or concept can appear in multiple domains. A securities firm, bank, payment company or group case may need a domain-specific view while still representing one underlying entity.

## Model

- **Anchor page:** the primary entity page. It omits `canonical_anchor`; self-pointing is not part of the contract.
- **Mirror page:** a domain-specific view of the same entity. It must set one vault-root `canonical_anchor: domain/slug` value to the primary anchor.
- **Ordinary related page:** a different product, case, framework, or associated entity. It omits `canonical_anchor` and uses wikilinks, `related`, or typed entity edges.
- **Declared drift:** the target cannot resolve, or the declaring mirror does not link the same anchor in its core body.

## Gate

`tools/wiki_link_audit.ts` reports `canonical_anchor_checked` and `canonical_anchor_drift`. The release contract runs it with `--fail-on-canonical-drift`, so any declared drift blocks `tools/release.ts --check --strict` and the canonical verification pipeline.

The gate does not try to infer every semantic mirror: slug matching is not reliable enough. Authors and reviewers decide whether a page is a mirror and therefore requires the field; tooling then fail-closes every declaration.

## Authoring Rule

When creating a mirror page:

1. Choose one primary anchor first.
2. Keep `canonical_anchor` off the anchor page.
3. Put the anchor path on each mirror.
4. Link that exact anchor before `## Related` / `## Sources`.
5. Add an editorial reverse link from the anchor to the mirror.
6. Run the strict release check and keep `canonical_anchor_drift=0`.

Do not use `canonical_anchor` as a general related-page pointer, redirect/successor field, external URL, or self-pointer.

## References

- [ADR](adr.md)
- [Entry Authoring](../06-implementation/entry-authoring.md)
- [Wikilink Resolution](../05-functional-specs/wikilink-resolution.md)
- [Content Model](content-model.md)

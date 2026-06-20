# Canonical Anchor

## Problem

The same institution or concept can appear in multiple domains. A securities firm, bank, payment company or group case may need a domain-specific view while still representing one underlying entity.

## Model

- Anchor page: the primary entity page. It does not need `canonical_anchor`.
- Mirror page: a domain-specific view of the same entity. It must set `canonical_anchor` to the anchor path.
- Drift: declared anchor cannot resolve, or required back-link/relationship is broken according to audit rules.

## Gate

`tools/wiki_link_audit.ts` reports canonical anchor state. `tools/release.ts --check --strict` runs the audit with drift gating, so declared anchors must remain valid.

## Authoring Rule

When creating a mirror page, choose the anchor first, then write the mirror as a scoped view. The body should make the relationship visible through a core wikilink, not only a footer related item.

## References

- [Canonical Entity Graph Design](canonical-entity-graph-design.md)
- [ADR](adr.md)
- [Entry Authoring](../06-implementation/entry-authoring.md)
- [Wikilink Resolution](../05-functional-specs/wikilink-resolution.md)

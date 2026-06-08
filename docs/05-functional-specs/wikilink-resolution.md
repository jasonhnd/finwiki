# Wikilink Resolution Specification

## Inputs

- Body wikilinks in Markdown.
- Frontmatter aliases.
- Domain indexes.
- Canonical anchor declarations.

## Behavior

- Resolve `domain/slug` style links to existing entries or domain indexes.
- Respect aliases where supported by the audit/index layer.
- Report dead targets, missing peer links and canonical drift.
- Treat `docs/` as excluded from the audit.

## Gate

Use:

```bash
bun tools/wiki_link_audit.ts --fail-on-issues
```

Release gate invokes wikilink audit through `tools/release.ts` with canonical drift as a hard gate:

```bash
bun tools/wiki_link_audit.ts --fail-on-issues --fail-on-canonical-drift
```

## Authoring Notes

Avoid writing literal double-bracket examples in audited control docs unless the target exists. In public control docs, use plain code paths when demonstrating a non-existent path.

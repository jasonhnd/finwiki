# Content Model

## Entry Types

| Type | Typical Path | Meaning |
|---|---|---|
| `wiki_entry` | `<domain>/<slug>.md` | Public knowledge article. |
| `domain_index` | `<domain>/INDEX.md` | Domain-level navigation and content map. |
| `control_doc` | root Markdown docs | Repository-wide public control document. |
| `release_note` | `releases/v*.md` | Public release record. |

`docs/` files are not content model entries.

## Wiki Entry Fields

Canonical frontmatter is defined in root `SCHEMA.md`. The important operational fields are:

- `title`: display title.
- `aliases`: alternative names used by wikilink resolution.
- `domain`: owning domain.
- `slug`: route slug.
- `sources`: public source references.
- `canonical_anchor`: optional mirror-to-anchor relationship.
- `status` and `confidence`: review state and confidence.

## Derived Fields

Release tooling derives URL, entry type, summaries, headings, wikilinks, word-like counts, last modified timestamp and discovery metadata.

## Count Semantics

- `entries`: count of `wiki_entry` only.
- `md`: count of corpus Markdown, including control docs, domain indexes and release notes.
- `domains`: count from root `INDEX.md` Domain Map.

## Invariants

- Domain index count should match disk reality after intentional calibration.
- Entry source paths should not point to moved legacy locations.
- Release notes are public history and can affect `md` count.

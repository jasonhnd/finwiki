# i18n Pipeline Specification

## Functions

| Step | Function |
|---|---|
| Prep | Select missing/stale translations for target language. |
| Protect | Mask facts, dates, numbers, wikilinks and markers. |
| Translate | Produce clean target-language Markdown while preserving placeholders. |
| Verify | Ensure placeholders match source. |
| Commit | Unmask and write `site/src/content/i18n/{lang}/...` mirrors. |

## Requirements

- Placeholder set and count must match before commit.
- Markdown structure must remain compatible with site rendering.
- Wikilink targets must not be invented or reordered.
- `source` path must match current source location.
- `source_hash` is a freshness signal, not a cosmetic field.

## Acceptance

- Commit script reports no missing translations for the batch.
- `fidelity` is `ok` unless review is required.
- Site build or release check passes after mirror updates.

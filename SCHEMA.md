# Wiki Frontmatter Schema

> Locked-in standard for all wiki/**/*.md entries.
> Wave 2 standard (May 2026).
> Supersedes prior Plan A spec (last_updated 2026-05-01).

Related: [[INDEX|FinWiki index]] · [[OBSIDIAN-SETUP|Obsidian setup]] · [[log|activity log]]

## Required (8 fields · always present)

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| title | string | H1 of body, or human-written | The entry display name. ≤ 80 chars. Bilingual OK. |
| aliases | YAML list | Author | Alternative names this entry might be linked as (Obsidian-friendly). Empty list if none. |
| domain | string | Parent directory name | Must match wiki/<domain>/ path. |
| created | ISO date YYYY-MM-DD | Git first-commit date or manual | Immutable once set. |
| last_updated | ISO date YYYY-MM-DD | Git last-commit date | Auto-bumpable on any edit. |
| last_tended | ISO date YYYY-MM-DD | Manual on review | When you actively reviewed (NOT the same as last_updated). Used by wiki-decay. |
| review_by | ISO date YYYY-MM-DD | Default = last_tended + 180d | Next scheduled review. wiki-decay flags overdue. |
| confidence | 5-bucket enum | Author judgment | One of: impossible / unlikely / possible / likely / certain. NO floats. |

## Recommended (3 fields)

| Field | Type | Notes |
|-------|------|-------|
| tags | YAML list | Cross-cutting labels. Reserved tags: needs-review · needs-verification · inbox-ingested · research-generated. |
| sources | YAML list (PLURAL) | Origin paths or URLs. Always a list, even if 1 element. |
| status | enum | candidate / confirmed / active / borderline / deprecated |

## Optional / legacy

| Field | Type | Notes |
|-------|------|-------|
| slug | string | URL-friendly identifier; usually = filename stem. |
| evidence_count | number | SOUL-style — how many sessions corroborate. |
| challenges | list | SOUL-style — counter-evidence sessions. |
| related | list of `[[wikilink]]` | Cross-references. |
| note | string | Free-form caveat / disclaimer (e.g. "未核实" notes). |
| research_run | object | Multi-agent research metadata: agents, depth, thesis, date. Only on /research-generated entries. |
| topic | string | Free-form topic label (legacy). |
| session_ref / source_session | string | Originating session SID (legacy). |
| source_decisions | list | Originating decision file paths. |
| type | string | Always "wiki" if present (legacy). |

## Confidence enum (5 buckets · v1.8.1+)

    certain    — multi-source convergent, primary verifiable, math/proof complete
    likely     — clearly cited, plausible, no known counter-evidence
    possible   — single source plausible, or your own draft you've thought through
                  (default for /research output and inbox-ingested stubs)
    unlikely   — speculation, anecdote, or source you're not sure about
    impossible — known-false claim being recorded for context only (rare)

Migration mapping from legacy floats (applied 2026-05-02 to all 72 entries):

    >= 0.85         → certain
    0.6  - < 0.85   → likely
    0.3  - < 0.6    → possible
    0.05 - < 0.3    → unlikely
    < 0.05          → impossible
    (boundaries round UP to higher bucket)

Why enum, not float: floats produce illusory precision. You can't actually distinguish 0.65 from 0.70. The 5-bucket enum forces honest calibration and lets pipelines reason about "promote / demote" cleanly.

## Status lifecycle

       (new entry)
            │
            ▼
       candidate ─────► active ─────► borderline ─────► deprecated
            │              ▲              │                 ▲
            ▼              │              │                 │
       confirmed ──────────┴──(re-evaluate)─────────────────┘

- **candidate**: just captured, awaiting validation
- **confirmed**: corroborated by 2+ independent uses or sessions (legacy term, equivalent to active)
- **active**: in current rotation, validated, recently tended
- **borderline**: confidence dropping or review_by overdue (auto-flagged by wiki-decay)
- **deprecated**: superseded or proven wrong; keep for audit, exclude from active surface

## Canonical key order (for tooling consistency)

    title
    aliases
    domain
    slug         (if present)
    topic        (if present)
    created
    last_updated
    last_tended
    review_by
    confidence
    tags
    status
    sources       (PLURAL list)
    session_ref / source_session
    source_decisions
    evidence_count
    challenges
    related
    type
    note
    research_run

## Stub template (for new entries)

    ---
    title: <H1 of the body, succinct, ≤80 chars>
    aliases: []
    domain: <parent dir name>
    created: 2026-MM-DD
    last_updated: 2026-MM-DD
    last_tended: 2026-MM-DD
    review_by: 2027-MM-DD
    confidence: possible
    tags: [<domain>]
    status: candidate
    sources:
      - <path or URL>
    ---

    # <H1 same as title>

    <body>

## Tooling hooks

- wiki/SCHEMA.md (this file) is the **source of truth**.
- wiki/.templates/wiki-entry-template.md — Templater-compatible new-entry stub.
- wiki/OBSIDIAN-SETUP.md — Obsidian vault setup guide.
- _meta/inbox/to-process/ — drop zone for raw notes; /inbox-process cmd triages → wiki.
- v1.8.1 prompts that consume this schema:
  - inbox-process.md (writes wiki entries)
  - research.md (writes wiki entries from multi-agent research)
  - wiki-decay.md (reads confidence + last_tended + review_by)
  - wiki-link-audit.md (reads body for links)
  - migrate-to-wikilinks.md (rewrites body links)
  - migrate-confidence.md (one-shot float → enum migration)

## Logging convention (v1.8.1)


    ## YYYY-MM-DD

    - [HH:MM] <action> | wiki/<domain>/<slug>.md | <one-line summary>

Action enum: created | updated | promoted | deprecated | merged | renamed | bulk | tended

## Migration history

- **2026-05-01 · Plan A normalization** — 70 entries; /tmp/wiki_normalize.py + /tmp/wiki_phase3.py. Backup: /tmp/wiki-backup-20260501T163736.tar.gz.
- **2026-05-02 · v1.8.1 Wave 2 schema migration** — all 72 entries: confidence float → 5-bucket enum (28 certain / 10 likely / 34 possible / 0 unlikely / 0 impossible) + source → sources (33 renames + listify) + added aliases (72) + last_tended (72) + review_by (72). Script: /tmp/wiki_v181_migrate.py. Backup: /tmp/wiki-backup-v181-20260502T185802.tar.gz.

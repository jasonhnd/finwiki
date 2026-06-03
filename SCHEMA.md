# Wiki Frontmatter Schema

> Public schema for FinWiki Markdown entries.

Related: [[INDEX|FinWiki index]] · [[OBSIDIAN-SETUP|Obsidian setup]]

## Public-Surface Requirement

Every entry must be safe for a public repository. Do not commit:

- local filesystem paths;
- private email addresses or account identifiers;
- personal income, account, tax, asset, passport, address, phone, or family details;
- non-public conversations, customer information, counterparty names, or internal project histories;
- unpublished advisory, investment, or business-operation cases unless rewritten entirely from public sources.

Public figures, public companies, public regulators, public laws, official addresses of organizations, filings, press releases, official registers, and public-market information may be included when relevant.

## Required Fields

| Field | Type | Notes |
|---|---|---|
| `title` | string | Human-readable title. |
| `aliases` | YAML list | Alternative names for Obsidian link resolution. Use `[]` if none. |
| `domain` | string | Parent directory name. |
| `created` | ISO date | Creation date. |
| `last_updated` | ISO date | Last content update date. |
| `last_tended` | ISO date | Last substantive review date. |
| `review_by` | ISO date | Next review target. |
| `confidence` | enum | `impossible`, `unlikely`, `possible`, `likely`, or `certain`. |

## Recommended Fields

| Field | Type | Notes |
|---|---|---|
| `tags` | YAML list | Cross-cutting search labels. |
| `sources` | YAML list | Public URLs, public documents, or public-source descriptions. Prefer URLs when possible. |
| `status` | enum | `candidate`, `confirmed`, `active`, `borderline`, or `deprecated`. |

## Body-Link Requirement

FinWiki entries must work as connected wiki nodes, not as isolated notes with only footer links.

- Every true wiki entry should have a top-level H1 title after frontmatter.
- Every true wiki entry should contain at least three body `[[wikilink]]` links before `## Related` or `## Sources`.
- Body links should normally include one route link to the domain index or nearest routing page, one peer / contrast link, and one system / regulatory link.
- `## Related` remains useful as a footer, but footer-only links do not satisfy the body-link requirement.
- Run `bun tools/wiki_link_audit.ts --report wiki-link-improvement-plan.md --fail-on-issues` before push.

## Optional / Legacy Fields

| Field | Type | Notes |
|---|---|---|
| `slug` | string | URL-friendly identifier, usually filename stem. |
| `topic` | string | Legacy topic label. |
| `evidence_count` | number | Legacy corroboration count. |
| `challenges` | list | Legacy counter-evidence field. |
| `related` | list | Cross-references. |
| `canonical_anchor` | string | Vault-root path to the single source-of-truth anchor entry for a multi-domain entity or mirror page. |
| `note` | string | Caveats or disclaimers. |
| `type` | string | Usually `wiki` if present. |

## Confidence Enum

| Value | Meaning |
|---|---|
| `certain` | Multi-source convergence, primary-source verification, or proof-grade confidence. |
| `likely` | Clearly cited, plausible, and no known counter-evidence. |
| `possible` | Single-source plausible, early synthesis, or needs further verification. |
| `unlikely` | Weak, speculative, anecdotal, or source quality uncertain. |
| `impossible` | Known-false claim retained only for correction context. |

## Status Lifecycle

| Status | Meaning |
|---|---|
| `candidate` | Captured but awaiting validation. |
| `confirmed` | Corroborated and usable. |
| `active` | Current routing surface or actively maintained entry. |
| `borderline` | Review overdue or confidence dropping. |
| `deprecated` | Superseded or retained only for audit context. |

## Canonical Key Order

```yaml
title:
aliases:
domain:
slug:
topic:
created:
last_updated:
last_tended:
review_by:
confidence:
tags:
status:
sources:
evidence_count:
challenges:
related:
canonical_anchor:
type:
note:
```

## Stub Template

```yaml
---
title: <H1 of the body, succinct>
aliases: []
domain: <parent directory name>
created: 2026-MM-DD
last_updated: 2026-MM-DD
last_tended: 2026-MM-DD
review_by: 2027-MM-DD
confidence: possible
tags: [<domain>]
status: candidate
sources:
  - <public URL or public source description>
---
```

## Maintenance

- Use [INDEX.md](INDEX.md) and domain `INDEX.md` files as routing surfaces.
- Use [.templates/wiki-entry-template.md](.templates/wiki-entry-template.md) for new entries.
- Use [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md) to audit body-link density and semantic link quality.
- Update [CHANGELOG.md](CHANGELOG.md) for public-surface, structure, index, sync, release, or maintenance-rule changes.

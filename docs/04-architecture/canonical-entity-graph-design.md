# Canonical Entity Graph Design

> Issue #29 planning artifact. This document is design-only: it does not change `SCHEMA.md`, corpus frontmatter, tooling, generated surfaces, or public wiki body content.

## Goal

Grow FinWiki from the current `canonical_anchor` mirror mechanism into a queryable canonical-entity graph for Japan-core financial institutions, regulators, licences, and closely related operating entities.

The design has two separate layers:

1. **Identity clusters**: pages that describe the same real-world entity from different domain angles. This is the existing `canonical_anchor` layer.
2. **Typed relationship edges**: facts such as parent / subsidiary, regulator / regulated entity, licence held, predecessor / successor, alliance, and peer relation. This is the new layer to design and build later.

The existing drift gate stays intact: every declared `canonical_anchor` must resolve and must be core-body linked, so `canonical_anchor_drift=0` remains a release invariant.

## Current Baseline

| Surface | Current state |
|---|---|
| `canonical_anchor` declarations | 12 mirror pages point to an anchor page. |
| `ai-index.json` | Emits `entities[]` only for declared mirror-to-anchor clusters. |
| `llms-full.txt` | Adds `Canonical anchor: ...` lines only on mirror pages. |
| Drift gate | `tools/release.ts` runs `wiki_link_audit.ts --fail-on-canonical-drift`; current drift is 0. |
| Major candidate universe | 633 non-INDEX Markdown pages across the 17 JapanFG-split institution / licence / regulator domains. |

Those 633 pages are not all final entity nodes, but they are the practical starting universe:

| Domain group | Candidate pages |
|---|---:|
| Megabanks / regional / cooperative / trust banks | 246 |
| Life / non-life insurers | 102 |
| Securities firms / asset managers | 50 |
| Payment firms / card issuers / leasing / consumer finance | 104 |
| Trading-company finance / financial conglomerates / foreign financial institutions | 71 |
| Financial regulators / financial licences | 60 |

## Design Principles

1. **Do not overload `canonical_anchor`**: keep it for mirror-to-anchor identity only. Do not make every anchor page self-point just to appear in the graph.
2. **Declared beats inferred**: discovery output may include inferred candidates for review, but queryable graph edges must be declared or derived from declared fields.
3. **Anchor pages are editorial choices**: an anchor is the page that should carry the entity's primary identity. For operating companies, prefer the institution-type domain created by the JapanFG split. For regulators, prefer `financial-regulators/`. For licence concepts, prefer `financial-licenses/`.
4. **Facts stay public-source backed**: relationship edges require public official, registry, IR, disclosure, or public-source evidence. No private relationship knowledge enters the graph.
5. **Small waves, zero drift**: each batch must keep `canonical_anchor_drift=0`, `entries_with_issues=0`, and generated-surface drift at 0.
6. **Japan core first**: non-Japan-core entities are out of scope unless they are necessary anchors for Japan branch / subsidiary pages already in the corpus.

## Entity Selection Tiers

### Tier 0: Existing Identity Clusters

Keep the 12 existing `canonical_anchor` clusters as the baseline. Do not rewrite them in the first build wave except to add explicit entity-node metadata once the schema exists.

### Tier 1: Systemically Important Japan-Core Anchors

First build wave should target roughly 60-90 anchors:

- financial regulators and SRO / exchange infrastructure pages used as supervisory anchors;
- megabanks and financial groups;
- major life and non-life insurers;
- major securities firms and asset managers;
- major payment / card / PSP operators with many inbound pages;
- foreign financial institutions with Japan branch or Japan subsidiary coverage.

Selection rule: a page qualifies when at least two of these are true:

- it is an operating company, financial group, regulator, SRO, exchange, or licence node;
- it appears as a parent, subsidiary, regulator, licence holder, or peer in several other pages;
- it is a likely endpoint for fact-freshness or consistency checks;
- it has official public sources that can support relationship facts;
- it is part of a high-traffic human / AI route such as megabanks, payment firms, card issuers, insurers, or regulators.

### Tier 2: Broad Institution-Domain Coverage

Second and third build waves should cover the remaining institution pages in the 17 JapanFG-split domains. Use domain batches rather than mixed ad hoc lists so parallel agents can work without conflicts.

Suggested order:

1. `regional-banks`, `cooperative-banks`, `trust-banks`;
2. `payment-firms`, `card-issuers`, `leasing-firms`, `consumer-finance`;
3. `securities-firms`, `asset-managers`;
4. `foreign-financial-institutions`;
5. `life-insurers`, `non-life-insurers`;
6. `financial-regulators`, `financial-licenses`.

### Tier 3: Thematic Entity Anchors Outside Institution Domains

Only after Tier 1-2 should the graph include entity-like pages in thematic domains such as `exchanges`, `business`, `manufacturer-finance`, `policy-finance`, or `fintech`. These need stricter review because many are case studies, systems, products, or mechanisms rather than durable entity nodes.

## Schema Shape

Issue #36 implements the optional frontmatter rails. The schema uses two optional fields:

```yaml
entity_node:
  kind: financial_group | operating_company | regulator | sro | exchange | licence | branch | product_operator | public_infrastructure
  scope: japan_core | japan_branch | global_parent_context
  status: anchor | mirror_member | relation_only

entity_edges:
  - relation: subsidiary_of
    target: megabanks/smfg
    evidence: official_profile
    source: https://example.com/public-source
    as_of: 2026-06-20
    confidence: likely
```

Field rules:

- `entity_node` appears on anchor pages and, if useful, on mirror pages. It does not replace `canonical_anchor`.
- `entity_edges` can appear on an entity page when the relation is public-source backed.
- `target` is a vault-root path without `.md`.
- `source` is a public URL or public-source description. Prefer URL when available.
- `as_of` is the verification date for the relationship.
- `confidence` reuses the existing confidence vocabulary where possible.
- Relationship inverses are generated by tooling where they are deterministic; authors should not declare both directions unless the two sources differ materially.

## Relationship Taxonomy

### Identity

| Relation | Meaning | Declared by |
|---|---|---|
| `canonical` | The anchor page for an entity cluster. | Derived from anchor path. |
| `mirror` | Domain-specific view of the same entity. | Existing `canonical_anchor`. |

### Ownership And Group Structure

| Relation | Inverse | Notes |
|---|---|---|
| `subsidiary_of` | `parent_of` | Primary group / parent relation. Prefer child page declaration. |
| `member_of_group` | `has_group_member` | Use when ownership is looser or the public source says "group company" without a clean direct parent. |
| `joint_venture_with` | `joint_venture_with` | Symmetric relation; use only with public source. |
| `predecessor_of` | `successor_of` | Legal or operating predecessor / successor. |

### Regulatory And Licence Structure

| Relation | Inverse | Notes |
|---|---|---|
| `regulated_by` | `regulates` | Regulator or supervisory authority relation. |
| `registered_as` | `has_registered_operator` | Registry status such as funds transfer, prepaid, FIBO, credit purchase, trust company. |
| `holds_license` | `licence_held_by` | Licence pages as target nodes; use where "registration" is not the best legal word. |
| `member_of_sro` | `has_sro_member` | Self-regulatory organization membership. |

### Market, Product, And Operating Relationships

These should start as optional, lower-priority edges because they are easier to overstate:

| Relation | Inverse | Notes |
|---|---|---|
| `operates_brand` | `brand_operated_by` | Use for durable public brands, not every product. |
| `alliance_with` | `alliance_with` | Symmetric; must cite a public release or official statement. |
| `competes_with` | `competes_with` | Prefer derived peer groups from domain pages at first; declare manually only for explicit comparison pages. |

## Declaration And Derivation Mechanism

1. **Author-declared facts**: `entity_node` and `entity_edges` are the durable source of truth.
2. **Generated inverses**: tooling derives inverse edges such as `parent_of` from `subsidiary_of`.
3. **Candidate inference**: tooling may use wikilinks, aliases, domain membership, and in-degree to propose candidate edges, but candidate edges do not enter `ai-index.json` as facts.
4. **Existing identity derivation**: `canonical_anchor` remains the sole source for mirror identity clusters.
5. **Frontmatter-only waves**: most graph backfill can be frontmatter-only. Because i18n freshness is body-hash based, this should not stale translation mirrors unless the source body changes.

## Discovery-Surface Representation

Recommended future `ai-index.json` shape:

```json
{
  "entity_nodes": [
    {
      "anchor": "megabanks/smfg",
      "url": "https://finwiki.zksc.io/megabanks/smfg",
      "kind": "financial_group",
      "scope": "japan_core",
      "domain": "megabanks",
      "mirrors": []
    }
  ],
  "entity_edges": [
    {
      "source": "card-issuers/smbc-card",
      "source_url": "https://finwiki.zksc.io/card-issuers/smbc-card",
      "relation": "subsidiary_of",
      "target": "megabanks/smfg",
      "target_url": "https://finwiki.zksc.io/megabanks/smfg",
      "target_resolves": true,
      "declared_in": "card-issuers/smbc-card.md",
      "evidence": "official_profile",
      "source_ref": "https://example.com/public-source",
      "as_of": "2026-06-20",
      "confidence": "likely"
    }
  ]
}
```

Keep the existing `entities[]` identity-cluster array for compatibility in the first implementation. Add `entity_nodes[]` and `entity_edges[]` as new arrays rather than changing the current `entities[]` meaning.

Recommended `llms-full.txt` addition:

```text
Entity node: kind=operating_company scope=japan_core
Entity edges:
- subsidiary_of -> megabanks/smfg (source: official_profile, as_of: 2026-06-20)
```

Human site surface is optional and later: a compact "Entity relationships" panel on entity pages can render parent, subsidiaries, licences, regulator, and mirror views once the AI surface is stable.

## Tooling And Cost

### Implemented Packet 1 Tooling

- `lib/markdown_helpers.ts`: parses `entity_node` and `entity_edges`.
- `tools/generate_ai_discovery.ts`: emits `entity_nodes[]`, `entity_edges[]`, relation counts, unresolved edge counts, and `llms-full.txt` lines.
- `tools/entity_graph_audit.ts`: validates relation type allowlist, target resolution, invalid self-edge, public-source presence, and required edge metadata; it includes negative fixtures for invalid relation and missing target.
- `package.json`: exposes `bun run entity:audit`.
- `SCHEMA.md` and `docs/06-implementation/entry-authoring.md`: document authoring rules.

### Cost Assessment

| Item | Cost | Risk |
|---|---|---|
| Schema + parser + discovery output | Medium | Needs careful compatibility with existing `entities[]`. |
| Read-only audit | Medium | Relation taxonomy must stay small to avoid false positives. |
| Tier 1 anchor backfill | Medium-high | 60-90 frontmatter edits; mostly deterministic. |
| Tier 2 coverage | High | Hundreds of frontmatter edits; must be domain-batched. |
| Typed relationship edges | High | Each edge needs public-source evidence and review. |
| Human site rendering | Medium | Should wait until data is stable. |

## Phased Implementation Plan

### Phase A: Inventory And Candidate Report

- Build a read-only report that lists candidate entity nodes from the 17 institution domains.
- Rank by domain tier, wikilink in-degree, existing `canonical_anchor` participation, and route importance.
- No corpus edits.

Validation:

- `bun run entity:audit` or the report command exits 0.
- `bun tools/release.ts --check --strict` remains green.

### Phase B: Schema And Discovery Infrastructure

- Add optional `entity_node` and `entity_edges` parsing.
- Emit `entity_nodes[]` and `entity_edges[]` in `ai-index.json`.
- Add audit for relation type allowlist and target resolution.
- Keep current `entities[]` identity-cluster output unchanged.

Validation:

- seeded positive and negative fixtures for edge resolution;
- `bun run entity:audit`;
- `bun tools/release.ts --check --strict`;
- `bun run surface:drift`;
- `bun run ai:audit`;
- `git diff --check`.

### Phase C: Tier 1 Entity-Node Backfill

- Add `entity_node` frontmatter to 60-90 highest-value anchors.
- Do not add broad relation edges yet except identity mirrors already covered by `canonical_anchor`.
- Prefer frontmatter-only edits to avoid unnecessary i18n churn.

Acceptance:

- `entity_nodes >= 60`;
- `canonical_anchor_drift=0`;
- no stale i18n caused by body edits.

### Phase D: Objective Typed Edges Wave 1

Start with relation types that are easiest to verify:

1. `subsidiary_of` / generated `parent_of`;
2. `regulated_by`;
3. `registered_as` / `holds_license`;
4. `member_of_sro`.

Do not start with `competes_with` except where a public comparison page already defines the peer group.

Acceptance:

- all edge targets resolve;
- each edge has a public source reference;
- relation counts appear in `ai-index.json`;
- `entity_graph_audit` exits 0.

### Phase E: Human-Site Rendering

- Add entity relationship panels only after Phase C-D data is stable.
- Keep panels compact: identity cluster, parent / subsidiaries, licences, regulator, and selected mirror views.
- Avoid turning every wikilink into a graph UI element.

## Build Task Packets

### Packet 1: Entity Graph Infrastructure

**Goal**: Add optional entity-node and entity-edge infrastructure without corpus backfill.

**Allowed files**:

- `SCHEMA.md`
- `lib/markdown_helpers.ts`
- `tools/generate_ai_discovery.ts`
- `tools/wiki_link_audit.ts` or new `tools/entity_graph_audit.ts`
- `package.json`
- `docs/04-architecture/canonical-entity-graph-design.md`
- `docs/05-functional-specs/ai-discovery-surface.md`
- `docs/06-implementation/entry-authoring.md`
- `docs/07-quality/acceptance-criteria.md`

**Acceptance**:

- `entity_nodes[]` and `entity_edges[]` are emitted but can be empty.
- Existing `entities[]` output is unchanged.
- Invalid relation type and missing target fixtures fail the audit.
- `canonical_anchor_drift=0` remains a release gate.

**Validation**:

- `bun run entity:audit`
- `bun tools/wiki_link_audit.ts --fail-on-issues`
- `bun tools/release.ts --check --strict`
- `bun run surface:drift`
- `bun run ai:audit`
- `git diff --check`

### Packet 2: Tier 1 Anchor Backfill

**Goal**: Add `entity_node` metadata to the highest-value Japan-core anchors.

**Allowed files**:

- selected source pages in `megabanks/`, `financial-regulators/`, `life-insurers/`, `non-life-insurers/`, `securities-firms/`, `asset-managers/`, `payment-firms/`, `card-issuers/`, `foreign-financial-institutions/`;
- `CHANGELOG.md`;
- generated surfaces from `release.ts --write`.

**Acceptance**:

- at least 60 entity nodes;
- no body edits unless required for source clarity;
- i18n remains current if body is unchanged;
- `entity_graph_audit` passes.

**Validation**:

- `bun run entity:audit`
- `bun run i18n:status`
- `bun tools/release.ts --check --strict`
- `git diff --check`

### Packet 3: Objective Relationship Edges Wave 1

**Goal**: Add first public-source-backed typed edges.

**Allowed relation types**:

- `subsidiary_of`
- `regulated_by`
- `registered_as`
- `holds_license`
- `member_of_sro`
- `predecessor_of`
- `successor_of`

**Acceptance**:

- each edge has a `target`, `source`, `as_of`, and `confidence`;
- every target resolves;
- generated inverse edges are deterministic;
- no `competes_with` or soft peer relations in Wave 1.

**Validation**:

- `bun run entity:audit`
- `bun tools/wiki_link_audit.ts --fail-on-issues`
- `bun tools/release.ts --check --strict`
- `bun run surface:drift`
- `git diff --check`

## Non-Goals

- No graph build in Issue #29 itself.
- No new corpus pages.
- No speculative or private relationship facts.
- No non-Japan-core expansion except where a Japan branch / subsidiary already depends on a global-parent context.
- No human-site UI work until entity-node and relation-edge data are stable.

## Issue #29 Closeout Criteria

Issue #29 is complete when this design exists, is linked from the developer-docs index / planning docs, and `bun run docs:audit` plus `git diff --check` pass. Implementation requires new follow-up issues using the packets above.

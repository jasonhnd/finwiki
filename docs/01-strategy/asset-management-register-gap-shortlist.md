# Asset Management Register Gap Shortlist

Issue: #43
Status: planning artifact only
Corpus impact: none

## Purpose

This document scopes gap #1 from the Japanese-finance coverage gap map: the
asset-management register / membership gap. It identifies missing asset
managers and REIT managers that are worth considering for future corpus pages,
using only public sources.

This issue does not create corpus entries. It gives reviewers a shortlist and a
downstream content task packet.

## Source Basis

Use these public-source lanes before any downstream content work:

| Source lane | Use in downstream review | Public source |
|---|---|---|
| FSA licensed / registered operator lists | Confirm FIEA registration category, investment-management business, and registered investment corporation manager names. | https://www.fsa.go.jp/menkyo/menkyo.html |
| IMAJ full-member investment-management directory | Identify investment-trust, investment-corporation asset-management, discretionary-management, and advisory members. The visible directory is dated June 1, 2026. | https://www.imaj.or.jp/en/about/members/investment_management/ |
| ARES regular members | Confirm real-estate securitization / investment-corporation asset-manager adjacency before a REIT-manager page is selected. | https://www.ares.or.jp/en/members/regular/industry/ |
| JAPAN-REIT links | Cross-check listed J-REITs and their asset-management companies without turning the result into an issuer directory. | https://en.japan-reit.com/list/link/ |
| Company / group disclosures | Establish why an entity matters beyond directory presence. | Candidate-specific public corporate pages and investor-relations pages. |

## Current Coverage Snapshot

Read-only review found that `asset-managers/` already covers the largest
domestic megabank, securities, insurance, and selected independent managers, but
it has no page for several high-signal online-broker, regional-bank, global-AM,
and REIT-manager routes.

Existing partial coverage appears in:

| Existing file | Current partial coverage |
|---|---|
| `securities/japan-asset-manager-landscape-matrix.md` | Mentions BlackRock Japan, JPMorgan Asset Management Japan, Rakuten investment-management adjacency, and a Monex Asset Management route that currently points outside `asset-managers/`. |
| `securities/japan-fiea-operator-registry-segment-matrix.md` | Uses global AMs and online / independent AMs as FIEA operator examples. |
| `real-estate-finance/glp-j-reit-3281.md` | Names GLP Japan Advisors as GLP J-REIT's asset-management company. |
| `real-estate-finance/aeon-mall-financing-and-securitization.md` | Names AEON Reit Management in the sponsor / J-REIT governance context. |
| `real-estate-finance/top-10-j-reit-overview-matrix.md` | Names Kenedix Real Estate Fund Management in a top J-REIT matrix. |
| `foreign-financial-institutions/bny-mellon-japan.md` and `foreign-financial-institutions/state-street-japan.md` | Mention BlackRock Japan and other global AM competitors, but do not provide a local AM page. |

## Shortlist

Priority means editorial usefulness, not a mandate to create every page. A
downstream issue should still re-check public sources and decide whether the
candidate has enough substance for a non-stub entry.

| Priority | Candidate route | Entity / topic | Why it matters | Candidate public source basis | Existing partial coverage |
|---:|---|---|---|---|---|
| 1 | `asset-managers/resona-asset-management` | Resona Asset Management Co., Ltd. | Bank-affiliated AM route missing from a group already covered in FinWiki; helps complete the megabank / trust-bank / bank-group AM lane without adding a registry-only page. | IMAJ directory lists Resona Asset Management; Resona AM corporate site can provide business context; FSA FIEA list should confirm registration. | `megabanks/resona-hd.md`, `megabanks/resona-bank.md` |
| 2 | `asset-managers/rakuten-investment-management` | Rakuten Investment Management, Inc. | Online-broker / economic-sphere AM route; useful counterpart to SBI AM and Rakuten Securities coverage. | IMAJ directory lists Rakuten Investment Management; FSA FIEA list; Rakuten group / Rakuten Securities disclosures. | `payment-firms/rakuten-fg.md`, `securities-firms/rakuten-securities.md`, `securities/japan-fiea-operator-registry-segment-matrix.md` |
| 3 | `asset-managers/sompo-asset-management` | Sompo Asset Management Co., Ltd. | Insurance-affiliated AM gap; balances existing Tokio Marine and T&D / Nissay-style AM coverage. | IMAJ directory lists Sompo Asset Management; FSA FIEA list; Sompo group / Sompo AM public disclosures. | `non-life-insurers/sompo.md` |
| 4 | `asset-managers/monex-asset-management` | Monex Asset Management, Inc. | Existing matrix implies a Monex AM route, but the current link points into `securities-firms/`; the entity belongs in the asset-manager domain if created. | Monex Group identifies Monex Asset Management as a group company and describes discretionary digital asset-management services; FSA FIEA list should confirm registration. | `securities/japan-asset-manager-landscape-matrix.md` |
| 5 | `asset-managers/blackrock-japan` | BlackRock Japan Co., Ltd. | Largest global-AM local route and ETF / iShares anchor; currently only matrix-level coverage. | IMAJ directory lists BlackRock Japan; FSA FIEA list; BlackRock Japan public disclosures. | `securities/japan-asset-manager-landscape-matrix.md`, `securities/japan-fiea-operator-registry-segment-matrix.md`, `foreign-financial-institutions/bny-mellon-japan.md`, `foreign-financial-institutions/state-street-japan.md` |
| 6 | `asset-managers/jpmorgan-asset-management-japan` | JPMorgan Asset Management (Japan) Limited | Global active-management route and banking-group adjacency; currently only matrix-level coverage. | IMAJ directory lists JPMorgan Asset Management (Japan); FSA FIEA list; JPMorgan Asset Management Japan public disclosures. | `securities/japan-asset-manager-landscape-matrix.md`, `securities/japan-fiea-operator-registry-segment-matrix.md`, `foreign-financial-institutions/jpmorgan-japan.md` |
| 7 | `asset-managers/chibagin-asset-management` | Chibagin Asset Management Co., Ltd. | Regional-bank AM route; useful if FinWiki wants one or two regional-bank AM examples rather than only megabank AMs. | IMAJ directory lists Chibagin Asset Management; FSA FIEA list; Chiba Bank / Chibagin AM disclosures. | `regional-banks/chiba-bank.md` |
| 8 | `asset-managers/chugin-asset-management` | Chugin Asset Management Company, Limited | Regional-bank AM route tied to a covered regional-bank group; complements Chibagin if a regional-AM pair is selected. | IMAJ directory lists Chugin Asset Management; FSA FIEA list; Chugin / Chugin AM disclosures. | `regional-banks/chugin-okayama.md` |
| 9 | `real-estate-finance/j-reit-asset-manager-source-map` | J-REIT asset-manager source map | A source-map page can explain how FSA, IMAJ, ARES, and JAPAN-REIT identify asset managers without creating an issuer directory. This is the safest first REIT-manager corpus page. | FSA registered investment corporation list, IMAJ investment-corporation asset-management column, ARES regular members, JAPAN-REIT links. | `real-estate-finance/j-reit-market-overview.md`, `real-estate-finance/top-10-j-reit-overview-matrix.md` |
| 10 | `real-estate-finance/glp-japan-advisors` | GLP Japan Advisors Inc. | Logistics J-REIT manager already appears in corpus; standalone page may be justified if logistics-REIT governance and sponsor structure need their own route. | IMAJ directory lists GLP Japan Advisors; ARES / JAPAN-REIT source lanes; GLP Japan Advisors corporate page. | `real-estate-finance/glp-j-reit-3281.md` |
| 11 | `real-estate-finance/kenedix-real-estate-fund-management` | Kenedix Real Estate Fund Management, Inc. | Large multi-REIT Kenedix / KDX route already appears in a J-REIT matrix; useful if the source-map shows enough non-stub context. | IMAJ directory lists Kenedix Real Estate Fund Management; ARES regular-member list; Kenedix public materials. | `real-estate-finance/top-10-j-reit-overview-matrix.md` |
| 12 | `real-estate-finance/aeon-reit-management` | AEON Reit Management Co., Ltd. | Retail / mall sponsor-adjacent REIT manager already appears in corpus; useful if AEON's sponsor-conflict / mall-finance route needs a separate manager page. | IMAJ directory lists AEON Reit Management; ARES regular-member list; AEON Reit Management corporate profile. | `real-estate-finance/aeon-mall-financing-and-securitization.md` |

## Selection Rules For Downstream Content

Create a page only when at least one of these signals is present:

- The entity fills a missing analytical lane already used in FinWiki, such as
  bank-affiliated AM, insurance-affiliated AM, online-broker AM, global-AM
  Japan entity, regional-bank AM, or J-REIT manager.
- FinWiki already partially covers the entity in a matrix, group page, or case
  page and needs a stable route.
- Public sources establish business role, group relationship, or market
  function beyond a directory row.
- The page can link to existing FinWiki context without becoming an isolated
  stub.

## Non-Goals

- Do not create all IMAJ members, all FSA registrants, all ARES members, or all
  J-REIT asset managers as corpus entries.
- Do not create registry-only stubs. A directory row is a lead, not enough by
  itself.
- Do not create issuer directories or investment-corporation pages only because
  a public list exists.
- Do not use non-public sources, customer material, internal notes, rumors,
  private transaction detail, or unpublished conversations.
- Do not add retail investment advice, tax advice, product recommendations, or
  promotional fund descriptions.
- Do not create any corpus page in #43.

## Recommended Downstream Task Packet

Title: `[Content] Add selected asset-manager / REIT-manager pages from #43 shortlist`

Goal:

Add a small, reviewer-selected set of non-stub corpus pages for the highest
signal asset managers and REIT managers identified in this shortlist. The first
batch should prioritize stable routes that repair or deepen existing FinWiki
coverage rather than maximize page count.

Recommended first batch:

1. `asset-managers/resona-asset-management`
2. `asset-managers/rakuten-investment-management`
3. `asset-managers/sompo-asset-management`
4. `asset-managers/monex-asset-management`
5. `real-estate-finance/j-reit-asset-manager-source-map`

Optional second batch after review:

1. `asset-managers/blackrock-japan`
2. `asset-managers/jpmorgan-asset-management-japan`
3. `asset-managers/chibagin-asset-management`
4. `asset-managers/chugin-asset-management`
5. One or two REIT-manager standalone pages from GLP Japan Advisors, Kenedix
   Real Estate Fund Management, and AEON Reit Management only if source depth is
   sufficient.

Allowed files for the downstream content issue:

- New selected pages under `asset-managers/`.
- New selected pages under `real-estate-finance/`.
- `asset-managers/INDEX.md`.
- `real-estate-finance/INDEX.md`.
- `securities/japan-asset-manager-landscape-matrix.md` and
  `securities/japan-fiea-operator-registry-segment-matrix.md` only for route
  fixes and forward links to newly created pages.
- Existing partial pages listed in the snapshot table only for short forward
  links to newly created pages.
- README / CHANGELOG / release notes / generated discovery outputs only if the
  public corpus changes.
- i18n mirrors only if the repository's content workflow requires them for the
  selected pages.

Acceptance for the downstream content issue:

- Every new page has public-source citations from at least two source lanes,
  preferably one register / membership lane and one company / issuer disclosure
  lane.
- Every new page explains why the entity matters in Japan-finance coverage and
  links to existing FinWiki context.
- Matrix or partial-page mentions are updated to point to the new route where
  appropriate.
- No registry-only stub, issuer directory, non-public source, retail advice, or
  promotional fund page is added.
- Generated surfaces and indexes are deterministic after regeneration.

Validation for the downstream content issue:

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
bun run ai:audit
bun run surface:drift
bun run i18n:status
git diff --check
```

## Closeout Evidence For #43

- A planning-only shortlist exists in `docs/01-strategy/`.
- No corpus entry was created.
- The downstream task packet is ready for reviewer selection.
- #43 validation should run `bun run docs:audit` and `git diff --check`.

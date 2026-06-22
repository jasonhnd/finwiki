# Japanese-Finance Coverage Gap Map

> Issue #32 planning artifact. This is analysis and planning only: it creates no corpus entries and changes no public routes.

## Goal

Give FinWiki a gap-driven view of Japanese finance coverage. The map compares what a public-source financial reference should cover against the current 40-domain corpus, then turns the difference into prioritized future content candidates.

## Inputs

- Current domain snapshot: `docs/02-product/domains.md`, root `INDEX.md`, and domain `INDEX.md` files.
- Current expansion stance: `docs/01-strategy/next-development-plan.md` and `docs/01-strategy/roadmap.md`.
- Public-source basis for future candidate work:
  - FSA licensed / registered operator lists: `https://www.fsa.go.jp/menkyo/menkyo.html`
  - FSA financial business operator search: `https://search.fsa.go.jp/`
  - FSA English licensed financial institution lists: `https://www.fsa.go.jp/en/regulated/licensed/index.html`
  - Bank of Japan statistics: `https://www.boj.or.jp/en/statistics/index.htm`
  - BOJ payment and settlement statistics: `https://www.boj.or.jp/en/statistics/set/kess/index.htm`
  - JSDA member lists: `https://www.jsda.or.jp/en/about/members-list/`
  - JPX listed-company search: `https://www.jpx.co.jp/english/listing/co-search/index.html`
  - Life Insurance Association of Japan member companies: `https://www.seiho.or.jp/english/about/companies/`
  - Investment Management Association of Japan membership directory: `https://www.imaj.or.jp/en/about/members/`
  - Japan Leasing Association statistics and surveys: `https://www.leasing.or.jp/english/`
  - National Tax Agency corporate-number publication site: `https://www.houjin-bangou.nta.go.jp/en/index.html`

## Coverage Axes

This map uses four axes:

1. **Sub-sector / domain**: banking, insurance, securities, asset management, leasing, payments, market infrastructure, public finance, real-estate finance, structured finance, corporate finance, retail / loyalty finance, trade finance, and AI / digital finance.
2. **Entity type**: regulated operator, holding company, infrastructure, SRO / regulator, product / instrument, legal regime, market practice, and strategic case.
3. **Regulatory regime / public register**: banking, FIEA, insurance, trust, payment services, credit purchase / installment sales, money lending, fund / investment management, exchange / clearing, and public finance.
4. **Coverage state**: `covered`, `thin`, `missing`, or `defer`.

## Current Coverage Map

| Area | Entity / topic types that should exist | Current state | Gap call |
|---|---|---|---|
| Depository banking | megabanks, regional banks, cooperative banks, foreign banks, bank agents, net banks, trust-bank overlaps. | `megabanks`, `regional-banks`, `cooperative-banks`, `foreign-financial-institutions`, `banking`, and `trust-banks` are substantial. | Covered; future additions should be register-backed missing operators or specific source-route pages. |
| Insurance | life insurers, non-life insurers, kyosai, reinsurance, solvency / distribution topics. | `life-insurers`, `non-life-insurers`, `insurance` are strong after entity deepening. | Covered; reinsurance and foreign-branch edge cases remain thin but not urgent. |
| Securities and exchanges | securities firms, FIEA regimes, exchanges, clearing, PTS, margin, stock lending, NISA. | `securities-firms`, `securities`, `exchanges`, `derivatives`, and `financial-regulators` cover core surfaces. | Covered; missing candidates should come from JSDA / FSA / JPX public lists rather than ad-hoc broker pages. |
| Asset management | investment managers, advisory / agency operators, fund products, REIT managers. | `asset-managers`, `real-estate-finance`, `structured-finance`, and `securities` cover several anchors. | Thin; IMAJ membership and FSA FIEA registers can drive selective missing-manager and REIT-manager candidates. |
| Leasing and captive finance | major lessors, auto finance, manufacturer finance, installment sales adjacency. | `leasing-firms`, `manufacturer-finance`, `consumer-finance`, `card-issuers` exist. | Thin; Japan Leasing Association statistics help choose market-structure pages, but avoid registry-only stubs. |
| Payments and cards | funds transfer, prepaid, merchant acquiring, cards, QR, BaaS / bank API, points. | `payment-firms`, `payments`, `card-issuers`, `loyalty`, `fintech` are strong. | Covered; future gaps should be license-stack or infrastructure pages, not more wallet stubs. |
| Trust and custody | trust banks, trust companies, custody banks, master trusts, tokenized-asset trustee roles. | `trust-banks` and `financial-licenses` exist; #26 deepened Alterna Trust. | Thin; a horizontal trust-license stack remains useful if #25's public-source trigger reopens it. |
| Public finance / policy finance | DBJ / JBIC / JFC / NEXI, public funds, fiscal agencies, trade insurance. | `policy-finance`, `trade`, and `financial-regulators` are present. | Covered; future additions should be program-specific and source-rich. |
| Market / settlement infrastructure | BOJ operations, payment systems, securities clearing, repo, call market, benchmarks. | `money-market`, `systems`, `payments`, `securities`, `derivatives` are present. | Thin; BOJ statistics and reports can seed settlement-system depth pages. |
| Real estate / structured finance | J-REITs, securitization, SPVs, ABS / RMBS / CMBS / CLO, rating methodology. | `real-estate-finance` and `structured-finance` cover the main mechanisms. | Covered with selective gaps; future candidates should be mechanism pages, not issuer directories. |
| Corporate finance / strategy | M&A, TOB / MBO, spin-offs, governance, disclosure, strategic restructuring cases. | `finance`, `corporate-strategy`, `business`, `securities` are present. | Covered; maintain as public-case and legal-mechanism reference, not deal-chatter coverage. |
| Retail / loyalty finance | retail groups, points, coalition programs, retail media, finance distribution. | `retail`, `loyalty`, `business`, `payment-firms` exist. | Covered; deduplication and synthesis are higher value than expansion. |
| AI / agent finance | agent payments, AI commerce protocols, AI-readable knowledge surfaces. | `agent-economy`, `fintech`, `systems`, and AI discovery docs exist. | Thin; #33 should decide surface and queryability before adding more corpus volume. |
| Compliance / quality source routes | source freshness, factual consistency, provenance completeness, registry-source pages. | #28, #30, and #34 design the core truthfulness audits. | Missing-to-thin; build issues should follow after design acceptance. |

## Prioritized Gap List

| Priority | Gap | Why it matters | Candidate public source | Downstream issue type |
|---:|---|---|---|---|
| 1 | Asset-management register / membership gap map | Asset managers are a small current domain, but FSA/IMAJ lists can expose high-signal missing entities and REIT-manager adjacency. | FSA FIEA lists; IMAJ membership directory. | `[Content Planning]` then scoped `[Content]`. |
| 2 | Settlement infrastructure depth map | BOJ payment / settlement data can support pages on Zengin, BOJ-NET, CLS / FX settlement, and securities settlement without guessing. | BOJ statistics and Payment and Settlement Systems Report. | `[Content Planning]` or `[Tooling]` if metrics ingestion is needed. |
| 3 | Trust / custody license-stack boundary | Trust companies, trust banks, custody banks, and tokenized-asset trustees are split across domains; a horizontal map would reduce routing ambiguity. | FSA trust-company / licensed institution lists. | `[Content]` only if public-source trigger is accepted. |
| 4 | Leasing market-structure depth | Leasing is not only entity pages; statistics and product categories can explain finance leases, operating leases, auto leases, and vendor finance. | Japan Leasing Association statistics and surveys. | `[Content Planning]`. |
| 5 | Reinsurance / foreign-insurance branch boundary | Insurance entity coverage is strong, but cross-border reinsurance and foreign-branch boundary pages remain thin. | FSA insurance lists; LIAJ and non-life association public lists. | `[Content Planning]`. |
| 6 | Public register source-route index | Readers and agents need clear routes from entity pages to source registers. | FSA lists, JSDA members, JPX listed-company search, NTA corporate-number site. | `[Content]` plus future provenance audit. |
| 7 | AI-queryable coverage matrix | Before adding more AI-facing pages, define whether agents need static enriched files or a query interface. | Current `llms*`, `ai-index.json`, and static API. | #33 build follow-up. |

Gap #1 is scoped for a separate asset-management register shortlist work item. It does not create corpus entries; it prepares the candidate set and downstream content packet.

## Do-Not-Cover Set

These are outside the current scope unless a future issue explicitly changes the product boundary:

- Private-client, customer, counterparty, or internal case material.
- Individual retail customer guides, advice, or tax / investment recommendations.
- Unsourced rumors, deal speculation, or non-public transaction detail.
- Global financial institutions with no Japan regulatory, market, or public-source relevance.
- Crypto token price pages, market-price trackers, or promotional protocol listings.
- Entity stubs created only because a directory exists, without a public-source reason why the page matters.

## Build Task Packet For Future Work

```text
ROLE:
High-reasoning content planning agent.

GOAL:
Turn one prioritized gap from docs/02-product/japanese-finance-coverage-gap-map.md into a scoped content issue with source basis, allowed files, acceptance criteria, and validation.

ALLOWED FILES:
- docs/01-strategy/backlog.md
- docs/02-product/japanese-finance-coverage-gap-map.md
- GitHub issue body / labels

FORBIDDEN:
- No corpus entry creation in the planning issue.
- No broad formatting cleanup.
- No non-public sources.

REQUIRED OUTPUT:
- Gap chosen.
- Candidate source list.
- Existing pages that already partially cover it.
- Proposed new / changed routes, if any.
- Explicit non-goals.
- Validation bundle.
```

## Closeout For Issue #32

Issue #32 is complete when this map is linked from the docs index / planning docs, `bun run docs:audit` and `git diff --check` pass, and future content work is seeded from the prioritized gap list rather than from ad-hoc volume goals.

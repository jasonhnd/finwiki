---
title: "Carve-out and divestiture process in Japan"
aliases:
  - "carve-out-divestiture-japan"
  - "Japan carve-out process"
  - "Japan divestiture"
  - "Japan spin-off"
  - "事業承継 カーブアウト"
domain: "finance"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [finance, M&A, carve-out, divestiture, spin-off, TSA, asset-deal, share-deal, tax]
status: active
sources:
  - "https://www.meti.go.jp/english/press/2023/0419_002.html"
  - "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html"
  - "https://www.fsa.go.jp/en/laws_regulations/faq_on_fiea.pdf"
  - "https://www.nta.go.jp/english/index.htm"
  - "https://www.jftc.go.jp/en/legislation_gls/amended_ama09/notification.html"
---

# Carve-out and divestiture process in Japan

## Overview

A Japanese carve-out separates a business unit from a parent and routes it to a new owner (trade sale), a new listed entity (IPO spin), or distributed shareholders (stock-distribution / demerger). The mechanical choice between **asset deal vs share deal vs company-split (会社分割) vs stock-distribution** drives tax outcome, consent triggers, [[finance/jftc-merger-control-process|JFTC merger-control]] burden, and [[finance/japan-tender-offer-process|TOB route]] interaction.

This page sits in [[finance/INDEX|finance]] alongside [[finance/cross-border-m-a-japan|cross-border M&A]] and [[finance/japan-leveraged-buyout-economics|LBO economics]]. Read it against [[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]], [[finance/japan-acquisition-finance|acquisition finance]], [[finance/japan-tender-offer-process|TOB process]], and the [[INDEX|FinWiki index]].

## Structure decision matrix

| Structure | Mechanism | Stamp / tax | Consent triggers | Use case |
|---|---|---|---|---|
| **Asset deal** (事業譲渡) | Sell defined assets + contracts | Asset-by-asset transfer tax, real-estate registration tax; capital gain at seller; book-up at buyer | Each material contract counterparty consent; employee consent for transfer | Cherry-pick assets, leave legacy liabilities behind |
| **Share deal** (株式譲渡) | Sell shares of subsidiary | Capital gain at seller; basis carries at buyer | Limited (change-of-control clauses only) | Clean entity transfer, including liabilities |
| **Company split** (会社分割) — absorption-type / incorporation-type | Statutory split under Companies Act Articles 757-816 | Tax-qualified ("適格") split is tax-deferred; non-qualified is taxable | Creditor objection procedure; employee succession under Labor Contract Succession Act | Reorganize before sale; clean separation with statutory succession |
| **Stock-distribution / spin-off** (株式分配) | Parent distributes subsidiary shares to its shareholders | 2017 reform: tax-qualified spin-off route under Article 2-12-15-2 of Corporation Tax Act | AGM if material; class-1 shareholder approval | Listed parent distributes a listed sub; institutional reshape (Toshiba / Sony Financial cases) |
| **IPO carve-out** | Sub listed separately; parent retains majority or minority | Parent retains book; gain on partial dilution | TSE listing process; underwriter due diligence | Monetize while keeping operational control |

## Asset deal vs share deal

| Dimension | Asset deal | Share deal |
|---|---|---|
| Liability transfer | Specified only; legacy stays with seller | All in-entity liabilities transferred |
| Contract assignment | Each contract requires counterparty consent | Change-of-control clauses only |
| Tax — seller | Capital gain on each asset; gross-up | Capital gain on shares (often more favorable) |
| Tax — buyer | Book-up to FMV → depreciation shield | Basis = purchase price; no asset step-up unless consolidated tax treatment |
| Real-estate transfer tax | Triggered | Avoided |
| Speed | Slower (per-contract) | Faster (single share-transfer) |
| Diligence scope | Narrower, specific | Full entity diligence including hidden liabilities |
| Employee transfer | Individual consent | Continues automatically |

## Stock-distribution vs trade sale

| Path | Stock-distribution | Trade sale |
|---|---|---|
| Buyer | Existing parent shareholders | Strategic / PE acquirer |
| Cash to parent | None (pure distribution) | Full purchase price |
| Tax to parent | Deferred if qualifying spin-off | Taxable gain |
| Speed | 6-12 months | 6-18 months including [[finance/jftc-merger-control-process|JFTC clearance]] |
| Control outcome | Sub becomes standalone listed entity | Sub goes into buyer's group |
| Strategic logic | Conglomerate discount unwind | Capital recycling, focus, debt paydown |

## TSA — transition services agreement

Carve-outs from a multi-product parent almost always require a TSA — the parent provides shared services to the divested business for a transition period (typically 12-36 months):

| Service | Typical TSA scope |
|---|---|
| IT / ERP | SAP / Oracle instance migration; data segregation, custom-code carve-out |
| HR / payroll | Continued payroll processing until sub builds capacity |
| Treasury / cash management | Inter-company cash pool unwind; new banking arrangement at sub |
| Procurement | Shared supplier contracts; bridge purchasing until sub renegotiates |
| Legal / compliance | Shared regulatory licenses (esp. financial-services under [[JapanFG/legal-financial-licenses/securities-license-stack|securities-license stack]]) |
| Real estate | Continued shared office occupancy with cost allocation |

TSA pricing is typically **cost-plus 5-10%**, with step-ups to incentivize exit. Reverse-TSAs flow services from sub back to parent for retained obligations.

## Tax considerations

Japanese tax-qualified ("適格") reorganization rules (Corporation Tax Act Article 2-12) allow deferral when:

- **Same-group reorganization** — 100% ownership both before and after
- **Joint-business reorganization** — substantial-business test (>80% workforce continues, business continues, exchange-of-equity)
- **2017 spin-off route** — direct stock-distribution to parent shareholders without prior asset-restructuring

Non-qualified split triggers **mark-to-market gain at parent level** and stamp-duty inefficiencies. NTA private rulings increasingly common for novel carve-out structures — see also [[finance/multi-jurisdiction-identity-tax-leverage|tax-jurisdiction comparison]] for cross-border carve-outs.

## Carve-out workstreams

1. **Perimeter definition** — which assets, contracts, employees, IP, real estate, regulatory licenses transfer
2. **Standalone carve-out financials** — restate sub financials excluding parent allocations
3. **Day-1 readiness** — TSA scope, IT cut-over plan, treasury setup, bank account opening
4. **Regulatory** — [[finance/jftc-merger-control-process|JFTC]] notification if turnover crosses thresholds; sector regulators (banking, telecom); foreign FDI if cross-border
5. **Tax structuring** — pursue 適格 status; secure NTA ruling on novel points
6. **Employee transfer** — Labor Contract Succession Act compliance for company-split; individual consent for asset deal
7. **Customer / supplier consent** — change-of-control walk-throughs

## Recent examples (2023-2026)

| Year | Parent | Carved-out business | Path | Notes |
|---|---|---|---|---|
| 2023 | Toshiba | Multiple post-private restructuring | Trade-sale + spin-off mix | Post-go-private optimization |
| 2024 | Sony FG | Sony Financial Group spin-off (re-listed 2025) | Stock-distribution spin-off | 2017-reform spin-off mechanic; tax-qualified |
| 2024 | Hitachi | Astemo (auto components) | Trade sale to PE | Continued portfolio-pruning theme |
| 2025 | Various TSA Prime | Non-core conglomerate disposals | Mixed | TSE PBR<1 reform pressure driving carve-outs |

## Research checklist

1. Pull TDnet / EDINET filings for the announcement, structure (asset / share / split / spin-off), and tax-qualified election.
2. Map [[finance/jftc-merger-control-process|JFTC]] notification timing vs deal-close conditions.
3. Identify TSA scope and termination triggers in the press release.
4. Check whether [[finance/japan-tender-offer-process|TOB]] is required (if listed-sub shares change hands above threshold).
5. Cross-reference with [[finance/japan-listed-financial-groups-investable-universe|listed FG universe]] for parent / sub valuation impact.

## Related

- [[finance/INDEX]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/jftc-merger-control-process]]
- [[finance/japan-takeover-defense-poison-pill]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[JapanFG/legal-financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## Sources

- METI: M&A guidelines and Fair M&A Guidelines publication page.
- METI: 2023 Carve-out / Group Management Guidelines press release.
- NTA: Corporation Tax Act 適格組織再編 (qualified reorganization) rules.
- JFTC: notification thresholds for asset / company-split transactions.
- FSA: FIEA tender-offer interaction when listed-sub shares are transferred.

---
source: banking/trust-bank-fee-structure-comparison
source_hash: 95ad2f85422c074a
lang: en
status: machine
fidelity: ok
title: "Trust bank fee structure comparison"
translated_at: 2026-05-31T03:19:56.388Z
---

# Trust bank fee structure comparison

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and complements the operating-model deep dives — read it alongside [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]], [[banking/custody-bank-operating-model|Custody Bank operating model]], [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], and the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]. Pair it with the entity pages [[JapanFG/master-trust-bank|MTBJ]], [[JapanFG/custody-bank|CBJ]], [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], [[JapanFG/mizuho-trust-bank|Mizuho Trust]], [[JapanFG/smbc-trust-bank|SMBC Trust]], [[JapanFG/bny-mellon-japan|BNY Mellon Japan]], [[JapanFG/state-street-japan|State Street Japan]], and [[JapanFG/jpmorgan-japan|JP Morgan Japan]]. For settlement-rail context see [[banking/jasdec-settlement-operations|JASDEC settlement operations]]. For institutional context see [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]].

## TL;DR

Trust-bank fee economics in Japan are dominated by three drivers: AUC-bps pricing on securities custody and 投信受託, pension trust admin fees on long-duration mandates, and real-estate trust fees on the full-service trust-bank side. Granular fee schedules are largely non-public — only aggregate-level inference is possible from shareholder consolidated disclosure and individual 投信 prospectuses (信託約款). Across 6 Japan trust banks (MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, SMBC Trust) and 4 global custodians (BNY Mellon, State Street, Citi, JPM), the structural pricing model is similar — AUC bps + per-transaction fees + revenue-share lending — but the mix and the pricing power differ sharply by client segment. Domestic custody-only specialists (MTBJ, CBJ) anchor low bps on volume; full-service trust banks bundle higher-margin real-estate / pension / inheritance fees with custody; global custodians charge a relative premium for cross-border + ICSD connectivity. Mandate-level pricing is not publicly disclosed; the fee-magnitude detail in this entry is therefore industry-level inference rather than entity-specific fact, and is quarantined to `.opinions/banking/trust-bank-fee-structure-comparison.md`.

## 1. 機関位置

| Entity | Category | Public AUC anchor | Listing | Granular fee disclosure |
|---|---|---|---|---|
| [[JapanFG/master-trust-bank|MTBJ]] | JP custody-only specialist | ~¥770tn (2025-03末, MTBJ disclosure) | Non-listed | None at line-item; aggregated in MUFG / 4-shareholder consolidated | 
| [[JapanFG/custody-bank|CBJ]] | JP custody-only specialist | ~¥696tn (2025-03末, CBJ disclosure) | Non-listed | None at line-item; aggregated in SMTB / Mizuho-side consolidated |
| [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]] | JP full-service trust bank | Trust assets in 100s of trillions; AUC + real-estate + pension | Subsidiary of [[JapanFG/mufg|MUFG]] (listed) | Aggregated segment disclosure |
| [[JapanFG/sumitomo-mitsui-trust|SMTB]] | JP full-service trust bank | Trust assets in 100s of trillions | Subsidiary of [[JapanFG/sumitomo-mitsui-trust|SMT Holdings]] (listed) | Aggregated segment disclosure |
| [[JapanFG/mizuho-trust-bank|Mizuho Trust]] | JP full-service trust bank | Trust assets in 10s-100s of trillions | Subsidiary of [[JapanFG/mizuho-fg|Mizuho FG]] (listed) | Aggregated segment disclosure |
| [[JapanFG/smbc-trust-bank|SMBC Trust]] | JP retail-PB-oriented trust bank | <¥10tn (PB / 富裕層 focus) | Subsidiary of [[JapanFG/smbc-group|SMBC Group]] (listed) | Aggregated under retail / PB segment |
| [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$50tn AuC/A | Subsidiary of BNY Mellon (NYSE) | Parent-level aggregate only |
| [[JapanFG/state-street-japan|State Street Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$46.6tn AuC/A (2024-12) | Subsidiary of State Street (NYSE) | Parent-level aggregate only |
| [[JapanFG/jpmorgan-japan|JP Morgan Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$35tn+ AuC (end-2024) | Subsidiary of JPMorgan Chase (NYSE) | Parent-level aggregate only |
| [[JapanFG/citigroup-japan|Citi Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$26.3tn AuC/A (2024-09) | Subsidiary of Citigroup (NYSE) | Parent-level aggregate only |

### Custody fee mechanics

| Fee component | Pricing logic | Typical magnitude (industry inference, not entity-specific) |
|---|---|---|

### Pension trust admin fees

| Component | Pricing logic | Magnitude inference |
|---|---|---|

### Securities investment trust admin fees

| Component | Pricing logic | Source for public observation |
|---|---|---|
| Fund accounting / NAV calc | Bundled into 受託会社報酬 | Stated only as bundled rate |
| Distribution processing | Bundled | Not separately disclosed |

Across the 投信 industry the 受託会社報酬 is typically a small fraction of total fund expense ratio — the bulk of the expense ratio sits at the asset manager (運用会社報酬) and the distributor (販売会社報酬) rather than the trust bank.

### Real-estate trust fees (full-service trust banks only)

| Component | Pricing logic | Magnitude |
|---|---|---|

This line is absent at MTBJ and CBJ — the custody-only specialists do not run real-estate trust.

### Cross-bank fee-economy matrix (10 entities)

| Fee dimension | MTBJ | CBJ | MUFG Trust | SMTB | Mizuho Trust | SMBC Trust | BNY JP | SS JP | JPM JP | Citi JP |
|---|---|---|---|---|---|---|---|---|---|---|
| Securities custody fee | Very low (utility scale) | Very low (utility scale) | Medium (full-service bundled) | Medium (full-service bundled) | Medium (full-service bundled) | High (PB-bundled, low volume) | Medium-high (cross-border premium) | Medium-high (cross-border premium) | Medium-high (cross-border premium) | Medium-high (cross-border premium) |
| 投信受託 admin fee | Low (utility scale) | Low (utility scale) | Low-medium | Low-medium | Low-medium | Limited line | Limited (JP-投信 not core) | Limited (JP-投信 not core) | Limited | Limited |
| Pension trust admin fee | Low at GPIF scale; medium at corp DB | Low at GPIF scale; medium at corp DB | Medium (bundled with front-office) | Medium (bundled with front-office) | Medium (bundled with front-office) | Limited | Medium (foreign-pension-side) | Medium (foreign-pension-side) | Medium (foreign-pension-side) | Limited |
| Real-estate trust fee | None | None | High (large real-estate trust book) | High (large real-estate trust book) | Medium-high | Limited (PB context only) | None (no JP real-estate trust) | None | None | None |
| Securities-lending agent fee | Revenue-share with beneficial owner | Revenue-share with beneficial owner | Revenue-share | Revenue-share | Revenue-share | Limited | Revenue-share (large agent-lender side) | Revenue-share (large agent-lender) | Revenue-share | Revenue-share |
| Cash-management spread | Small | Small | Larger (full balance-sheet) | Larger (full balance-sheet) | Larger | PB context | Large in $ context | Large in $ context | Large in $ context | Large in $ context |
| Inheritance / 遺言 fees | None | None | Yes (high-margin) | Yes (high-margin) | Yes | Yes (PB) | None | None | None | None |
| PB / wealth advisory fees | None | None | Yes | Yes | Yes | Core (high-margin) | UHNW only | UHNW only | UHNW only | UHNW only |

### Pricing-power summary

| Service | Strongest pricing power | Reason |
|---|---|---|
| GPIF-scale domestic custody | MTBJ / CBJ | Utility scale + GPIF tender competition between the two |
| Mass-investor 投信 受託会社 | MTBJ / CBJ | Volume utility, tight bps, but volume drives revenue |
| Corp-DB pension trust admin | MTBJ / CBJ / megabank trust arms | Mixed — utility specialists win on bps, full-service wins on bundling |
| Real-estate trust setup | MUFG Trust / SMTB / Mizuho Trust | Specialized + relationship-driven; no competition from custody-only specialists |
| Inheritance / 相続 / 遺言 | MUFG Trust / SMTB / Mizuho Trust / SMBC Trust | High-margin wealth-management line; absent at custody-only specialists and at global custodians |
| Cross-border / foreign-asset custody | BNY / State Street / JPM / Citi | Cross-border ICSD + sub-custody network premium |
| Securities lending (large institutional) | BNY / State Street / JPM (and MTBJ / CBJ on JP equity domestic flows) | Mixed; agent-lender scale wins |
| US-listed JP-securities (ADR) | BNY / Citi / JPM | ADR depository fees |

### Implied fee revenue (very rough industry inference)

Granular line-item fee revenue per entity is not publicly disclosed. The order-of-magnitude inference (industry-level only, not entity-specific guarantee) is:

| Implied revenue per ¥100tn AUC at custody-only specialist | Industry-rough inference (not entity-specific) |
|---|---|
| If average custody bps = 0.5 bp/year | ¥50bn / year revenue |
| If average custody bps = 1 bp/year | ¥100bn / year revenue |
| If average custody bps = 2 bps/year | ¥200bn / year revenue |

The per-entity gross custody revenue implied by applying these hypothetical bps to MTBJ / CBJ AUC is industry-level inference only and is not attributable to any disclosed fee line; that inference is quarantined to `.opinions/banking/trust-bank-fee-structure-comparison.md`.

### Fee trends

| Trend | Effect on trust-bank P&L |
|---|---|
| Passive-fund AUM growth | Volume up, per-bp down → modest net revenue growth, margin compression |
| Foreign-investor JP allocation growth | Foreign sub-custody revenue at MTBJ / CBJ tied to global-custodian fee schedules |
| NISA expansion (2024 onward) | Volume growth in 投信 受託会社 fees |
| DC pension reform (2025 onward) | DC member-balance reporting volume growth |
| Real-estate market cyclicality | Volatile for full-service trust banks; absent for custody-only |

### Why granular per-bank fee tables are impossible to publish externally

| Reason | Impact |
|---|---|
| Custody fees are mandate-specific contracts | No single tariff per bank |
| Group-consolidated disclosure aggregates many fee lines | Cannot isolate custody from other trust-bank fees |
| 投信 受託会社報酬 disclosed only per fund in each 信託約款 | Manual aggregation needed across all funds |
| Pension trust admin fees are individually negotiated | Including GPIF |
| Global-custodian Japan units do not disclose JP-specific lines | Only parent-level aggregates |
| Real-estate trust fees vary by deal | Cannot benchmark to a per-bp standard |

### Public observable per-fund 投信 受託会社報酬

For a structured public-data study, the 投信 受託会社報酬 across major fund families is the most observable line:

| Asset manager family | 受託会社 (most common) | Typical 受託会社報酬 (annualized) |
|---|---|---|

A precise study would scrape 信託約款 of leading funds for the documented per-fund 受託会社報酬 — the data is public per fund but laborious to aggregate.

### Regulatory fee constraints

| Layer | Constraint |
|---|---|
| 信託業法 fiduciary-duty rules | Fees must be fair and disclosed; conflict-of-interest controls |
| 金商法 投信運用報告書 disclosure | Fund-level fees including 受託会社報酬 must be disclosed |
| Pension fund 受託者責任 | Fees subject to pension trustee fiduciary review |
| Stewardship Code | Voluntary; encourages transparent fee disclosure where possible |
| FSA supervisory guidance | General reasonableness review; no rate-cap regime |

### Accounting view

| Item | Entity that recognizes |
|---|---|
| Custody / admin fees as revenue | Trust bank P&L |
| Custody / admin fees as expense | Asset owner / 投信ファンド |
| Off-balance-sheet trust AUC | Not on trust bank's balance sheet |
| On-balance settlement-account residuals | Trust bank's balance sheet (small) |
| Lending revenue share | Trust bank revenue + beneficial-owner revenue (split per contract) |

### Comparability problems

| Problem | Effect |
|---|---|
| AUC vs AuA definition variation | "Assets under custody" vs "assets under administration" measured differently across entities; cross-entity AUC numbers are not strictly comparable |
| Mix-effect across asset classes | One entity's mix-weight (domestic equity / JGB / foreign / 投信) differs sharply from another's |
| Domestic-only vs global aggregation | Global custodians report parent-level numbers; JP-specific lines opaque |
| 投信 受託会社 fees per fund vs per-bank aggregate | Per-fund disclosure can be aggregated manually but is not officially aggregated |
| Real-estate fees revenue lumpy | Full-service trust banks have lumpy deal-driven real-estate fees |

### Fee cost-side from infrastructure participation

| Infrastructure | Fee paid by trust bank (input cost) |
|---|---|
| [[banking/jasdec-settlement-operations|JASDEC]] participation + per-transaction | Fixed annual + per-ticket fee; published in JASDEC tariff |
| JSCC clearing | Clearing-membership cost + per-trade clearing fee |
| BoJ JGB book-entry | BoJ system participation cost |
| BoJ-net cash settlement | Per-transaction cost |
| 全銀ネット | Per-transaction cost |
| ICSD (via global custodians) | Pass-through global-custody fee |
| Voting platform (ICJ etc.) | Platform fee |

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/smbc-trust-bank]]
- [[JapanFG/nochu-trust-bank]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Trust Companies Association of Japan: trust-bank explanation, trust-assets statistics.
- Master Trust Bank of Japan: official site and business overview; FY2024 results (AUC ~¥770tn, 2025-03末): https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Custody Bank of Japan: official site and business overview; 2025 disclosure (預り資産 ~¥696tn, 2025-03末): https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf
- MUFG, SMT Holdings, Mizuho FG, SMBC Group: investor relations financial disclosure.
- BNY Mellon, State Street, JPMorgan Chase, Citigroup: investor relations financial reports.
- State Street FY2024 results (AuC/A $46.6tn, 2024-12): https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx
- Citigroup Q3 2024 results (Securities Services AuC/A $26.3tn, 2024-09): https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q32024/2024pr-qtr3rslt.pdf
- J.P. Morgan Securities Services (AuC ~$35tn+, end-2024): https://www.jpmorgan.com/securities-services
- FSA: trust-business financial institution list.
- Individual fund 信託約款 / 目論見書 (where 受託会社報酬 is disclosed).

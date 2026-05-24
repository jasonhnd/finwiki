---
title: "Trust bank fee structure comparison"
aliases:
  - "trust-bank-fee-structure-comparison"
  - "Japan trust bank fee comparison"
  - "trust bank AUC fee comparison"
  - "信託銀行 fee structure comparison"
domain: banking
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [banking, trust-bank, custody, asset-administration, pension, fees, comparison]
status: active
sources:
  - "https://www.shintaku-kyokai.or.jp/"
  - "https://www.shintaku-kyokai.or.jp/trust/trustbanks/"
  - "https://www.shintaku-kyokai.or.jp/en/pdf/trusts_under_management.pdf"
  - "https://www.mastertrust.co.jp/"
  - "https://www.custody.jp/"
  - "https://www.mufg.jp/dam/ir/financial/index.html"
  - "https://www.smtrust-holdings.co.jp/ir/"
  - "https://www.mizuho-fg.co.jp/investors/index.html"
  - "https://www.bnymellon.com/us/en/investor-relations/financial-reports.html"
  - "https://investors.statestreet.com/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf"
---

# Trust bank fee structure comparison

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and complements the operating-model deep dives — read it alongside [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]], [[banking/custody-bank-operating-model|Custody Bank operating model]], [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], and the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]. Pair it with the entity pages [[JapanFG/master-trust-bank|MTBJ]], [[JapanFG/custody-bank|CBJ]], [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], [[JapanFG/mizuho-trust-bank|Mizuho Trust]], [[JapanFG/smbc-trust-bank|SMBC Trust]], [[JapanFG/bny-mellon-japan|BNY Mellon Japan]], [[JapanFG/state-street-japan|State Street Japan]], and [[JapanFG/jpmorgan-japan|JP Morgan Japan]]. For settlement-rail context see [[banking/jasdec-settlement-operations|JASDEC settlement operations]]. For institutional context see [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]].

## TL;DR

Trust-bank fee economics in Japan are dominated by three drivers: AUC-bps pricing on securities custody and 投信受託, pension trust admin fees on long-duration mandates, and real-estate trust fees on the full-service trust-bank side. Granular fee schedules are largely non-public — only aggregate-level inference is possible from shareholder consolidated disclosure and individual 投信 prospectuses (信託約款). Across 6 Japan trust banks (MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, SMBC Trust) and 4 global custodians (BNY Mellon, State Street, Citi, JPM), the structural pricing model is similar — AUC bps + per-transaction fees + revenue-share lending — but the mix and the pricing power differ sharply by client segment. Domestic custody-only specialists (MTBJ, CBJ) anchor low bps on volume; full-service trust banks bundle higher-margin real-estate / pension / inheritance fees with custody; global custodians charge a relative premium for cross-border + ICSD connectivity. The public-visible reading is largely inferential and ambiguous — actual mandate-level pricing is opaque to outside readers. ^[ambiguous]

## 1. 機関位置

| Entity | Category | Public AUC anchor | Listing | Granular fee disclosure |
|---|---|---|---|---|
| [[JapanFG/master-trust-bank|MTBJ]] | JP custody-only specialist | ~¥700tn+ ^[ambiguous] | Non-listed | None at line-item; aggregated in MUFG / 4-shareholder consolidated | 
| [[JapanFG/custody-bank|CBJ]] | JP custody-only specialist | ~¥600-700tn ^[ambiguous] | Non-listed | None at line-item; aggregated in SMTB / Mizuho-side consolidated |
| [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]] | JP full-service trust bank | Trust assets in 100s of trillions; AUC + real-estate + pension | Subsidiary of [[JapanFG/mufg|MUFG]] (listed) | Aggregated segment disclosure |
| [[JapanFG/sumitomo-mitsui-trust|SMTB]] | JP full-service trust bank | Trust assets in 100s of trillions | Subsidiary of [[JapanFG/sumitomo-mitsui-trust|SMT Holdings]] (listed) | Aggregated segment disclosure |
| [[JapanFG/mizuho-trust-bank|Mizuho Trust]] | JP full-service trust bank | Trust assets in 10s-100s of trillions | Subsidiary of [[JapanFG/mizuho-fg|Mizuho FG]] (listed) | Aggregated segment disclosure |
| [[JapanFG/smbc-trust-bank|SMBC Trust]] | JP retail-PB-oriented trust bank | <¥10tn (PB / 富裕層 focus) | Subsidiary of [[JapanFG/smbc-group|SMBC Group]] (listed) | Aggregated under retail / PB segment |
| [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$50tn AuC/A | Subsidiary of BNY Mellon (NYSE) | Parent-level aggregate only |
| [[JapanFG/state-street-japan|State Street Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$40tn AuC/A ^[ambiguous] | Subsidiary of State Street (NYSE) | Parent-level aggregate only |
| [[JapanFG/jpmorgan-japan|JP Morgan Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$30tn AuC ^[ambiguous] | Subsidiary of JPMorgan Chase (NYSE) | Parent-level aggregate only |
| [[JapanFG/citigroup-japan|Citi Japan]] | Global custodian — Japan unit | JP-specific AUC non-disclosed; parent ~$20tn AuC ^[ambiguous] | Subsidiary of Citigroup (NYSE) | Parent-level aggregate only |

## 2. 主要業務 — fee-line breakdown

### Custody fee mechanics

| Fee component | Pricing logic | Typical magnitude (industry inference, not entity-specific) |
|---|---|---|
| AUC bps (asset-class-weighted) | Per basis-point of held assets, weighted by asset class (equity higher than JGB, foreign higher than domestic) | Domestic equity: ~0.2-1 bp/year for institutional scale; foreign equity: 1-5 bps; JGB: ~0.05-0.5 bp; foreign bonds: 1-5 bps ^[inferred] |
| Per-transaction settlement fee | Per book-entry transfer ticket | A few hundred to a few thousand yen per ticket, scaled by volume tier ^[inferred] |
| Cash-management spread | Spread on short-dated funding placements of settlement-account residuals | Small; dependent on JGB yield curve and short-rate environment ^[inferred] |
| Corporate-actions admin | Per CA event, often bundled into custody fee | Bundled for institutional clients; itemized for some clients ^[inferred] |
| Voting administration | Often bundled into custody fee; ICJ electronic-voting forwarding | Bundled ^[inferred] |
| Securities-lending agent fee | Revenue-share on lending income with beneficial owner | Typically 10-30% of lending revenue retained by agent lender ^[inferred] |

### Pension trust admin fees

| Component | Pricing logic | Magnitude inference |
|---|---|---|
| Trust contract administration fee | AUC bps × pension AUM | Very low for GPIF-scale (sub-1 bp); higher (a few bps) for small corporate DB ^[inferred] |
| Member balance reporting fee (DC) | Per-member, per-year | Hundreds to low thousands of yen per member, per year ^[inferred] |
| Benefit-payment processing | Per payment ticket | Bundled; possibly per-event itemization for some plans ^[inferred] |
| Asset-owner reporting | Often bundled | Bundled ^[inferred] |

### Securities investment trust admin fees

| Component | Pricing logic | Source for public observation |
|---|---|---|
| 受託会社報酬 (signed in 信託約款) | AUC bps of fund NAV | Stated in each fund's 目論見書 + 信託約款 — often 0.01-0.05% / year ^[inferred] |
| Fund accounting / NAV calc | Bundled into 受託会社報酬 | Stated only as bundled rate |
| Distribution processing | Bundled | Not separately disclosed |

Across the 投信 industry the 受託会社報酬 is typically a small fraction of total fund expense ratio — the bulk of the expense ratio sits at the asset manager (運用会社報酬) and the distributor (販売会社報酬) rather than the trust bank.

### Real-estate trust fees (full-service trust banks only)

| Component | Pricing logic | Magnitude |
|---|---|---|
| 不動産信託設定報酬 | Often a percentage of property value at trust setup | Substantial — full-service trust banks earn premium margins here ^[inferred] |
| 不動産信託継続報酬 | Annual fee for ongoing trust admin | AUC-bps of property under trust ^[inferred] |
| J-REIT 受託会社報酬 | Per J-REIT fund | Similar to 投信 受託会社 fees but at REIT-specific economics ^[inferred] |

This line is absent at MTBJ and CBJ — the custody-only specialists do not run real-estate trust.

## 3. 競合構造 — fee comparison matrix

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

## 4. 手数料・収益構造

### Implied fee revenue (very rough industry inference)

Granular line-item fee revenue per entity is not publicly disclosed. The order-of-magnitude inference (industry-level only, not entity-specific guarantee) is:

| Implied revenue per ¥100tn AUC at custody-only specialist | Industry-rough inference (not entity-specific) |
|---|---|
| If average custody bps = 0.5 bp/year | ¥50bn / year revenue |
| If average custody bps = 1 bp/year | ¥100bn / year revenue |
| If average custody bps = 2 bps/year | ¥200bn / year revenue |

For MTBJ and CBJ at ~¥600-700tn AUC each, gross custody-related revenue is in the rough range of low hundreds of billions of yen per year per entity. Public-disclosed shareholder-consolidated numbers are consistent with this order of magnitude but cannot be cleanly attributed to a single fee line. ^[ambiguous]

### Fee trends

| Trend | Effect on trust-bank P&L |
|---|---|
| Passive-fund AUM growth | Volume up, per-bp down → modest net revenue growth, margin compression |
| GPIF tender repricing | Recurring pressure on per-bp fees on largest mandates ^[inferred] |
| Foreign-investor JP allocation growth | Foreign sub-custody revenue at MTBJ / CBJ tied to global-custodian fee schedules |
| NISA expansion (2024 onward) | Volume growth in 投信 受託会社 fees |
| DC pension reform (2025 onward) | DC member-balance reporting volume growth |
| Real-estate market cyclicality | Volatile for full-service trust banks; absent for custody-only |
| T+1 settlement migration (~2027) | Short-term IT-cost upside; long-term operating-cost down ^[inferred] |
| Tokenization / ST | Open question — fees unclear; could be premium-priced or rapidly commoditized ^[inferred] |

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
| MUFG Asset Management funds | MTBJ (often) | 0.01-0.05% NAV ^[inferred] |
| Nomura Asset Management funds | MTBJ (often) or CBJ | 0.01-0.05% NAV ^[inferred] |
| Daiwa Asset Management funds | CBJ (often) | 0.01-0.05% NAV ^[inferred] |
| SMBC Nikko / SMTB AM funds | CBJ (often) | 0.01-0.05% NAV ^[inferred] |
| Mizuho-side AM funds | CBJ (often) | 0.01-0.05% NAV ^[inferred] |
| SBI Asset Management funds | Mixed (MTBJ / CBJ) | 0.01-0.05% NAV ^[inferred] |

A precise study would scrape 信託約款 of leading funds for the documented per-fund 受託会社報酬 — the data is public per fund but laborious to aggregate.

## 5. 規制・会計

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

## 6. JASDEC / clearing infrastructure connection

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

These infrastructure costs sit on the trust bank's operating expense line and form a fraction of one basis point of AUC for high-volume participants — small relative to custody-fee revenue but a meaningful operating cost. ^[inferred] The cost structure means trust-bank custody margins compress with passive-fund growth (volume up, per-bp fee down) but the infrastructure cost per ¥AUC stays roughly flat, producing operating leverage when AUC grows faster than expense base. ^[inferred]

### Why MTBJ / CBJ pricing power is structurally tied to JASDEC

Because JASDEC is the sole domestic CSD for dematerialized equity / corp bonds / CP / 投信, the trust-bank participants that ride JASDEC are not in competition with non-JASDEC alternatives for that asset class. Domestic custody for these assets must run through a JASDEC participant, and only a 信託銀行 with a 銀行法 + 信託業法 license can hold the trust-account nominee name in the way pension and 投信 contracts require. The two-strong utility (MTBJ + CBJ) on the institutional side and the megabank trust arms on the full-service side carry residual pricing power because the alternative for asset managers is to internalize the infrastructure cost themselves — which is uneconomic at any single-firm scale. ^[inferred]

## Counterpoints

- "Trust-bank fees are public" — false; only 投信 受託会社報酬 is per-fund-public. Pension and custody mandates are not publicly priced.
- "MTBJ + CBJ duopoly = high fees" — opposite; their utility scale produces the lowest per-bp custody / 投信 受託 fees in Japan. The duopoly check is on margin, not on price level. ^[inferred]
- "Global custodians charge less than JP trust banks" — depends on segment; cross-border is global-custodian territory and priced accordingly, but pure JP custody at GPIF scale is cheaper at MTBJ / CBJ.
- "Real-estate trust = small line" — false; for full-service trust banks (MUFG Trust, SMTB, Mizuho Trust), real-estate trust + J-REIT is a meaningful and lumpy revenue line.
- "Custody fees are declining everywhere" — partial; per-bp rates are compressing under passive growth, but absolute revenue can grow with AUC. ^[inferred]
- "AUC = revenue" — wrong; the per-bp fee mix-by-asset-class matters more than headline AUC. A ¥100tn JGB-heavy AUC produces far less revenue than a ¥100tn foreign-equity-heavy AUC.
- "BNY / State Street will price-undercut JP trust banks for domestic custody" — structural impediments (信託銀行 license + JASDEC participant requirement + 信託口 nominee logic) make this unlikely. Cross-border premium for globals is structurally protected.

## Open questions

- What is the actual per-bp custody fee schedule at MTBJ vs CBJ for GPIF-scale mandates? Both remain silent.
- How fast is the per-bp fee compression on 投信 受託会社報酬 across the major fund families? A manual aggregation of 信託約款 over multiple years would answer.
- What is the JP-revenue split for global-custodian Japan units (BNY / State Street / JPM / Citi)? Parent-level disclosure is too aggregated.
- How will T+1 migration (~2027) affect per-ticket settlement-fee structures at JASDEC and downstream trust banks?
- How does real-estate trust fee economics at MUFG Trust / SMTB / Mizuho Trust compare across the property-market cycle?
- Will tokenized-security custody fee structure be premium-priced (like cross-border premium today) or rapidly commoditized?
- How does the SMBC Trust PB / 富裕層 fee model compare to UHNW custody at BNY / State Street?

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
- Master Trust Bank of Japan: official site and business overview.
- Custody Bank of Japan: official site and business overview.
- MUFG, SMT Holdings, Mizuho FG, SMBC Group: investor relations financial disclosure.
- BNY Mellon, State Street, JPMorgan Chase, Citigroup: investor relations financial reports.
- FSA: trust-business financial institution list.
- Individual fund 信託約款 / 目論見書 (where 受託会社報酬 is disclosed).

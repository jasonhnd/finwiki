---
title: "Japan CDS market overview"
aliases:
  - "japan-cds-market-overview"
  - "Japan credit default swap market"
  - "iTraxx Japan"
  - "Japan single-name CDS"
  - "Japan corporate CDS"
  - "日本 CDS マーケット"
  - "日本クレジット・デフォルト・スワップ市場"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, cds, credit-default-swap, itraxx, jscc, ice-clear-credit, isda, dealer-market, japan-corporate-credit]
status: active
sources:
  - "https://www.isda.org/"
  - "https://www.fsa.go.jp/en/refer/councils/follow-up/index.html"
  - "https://www.jpx.co.jp/jscc/en/cds/index.html"
  - "https://www.theice.com/clear-credit"
  - "https://ihsmarkit.com/products/markit-itraxx.html"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://www.bis.org/statistics/derstats.htm"
  - "https://www.jsda.or.jp/en/"
---

# Japan CDS market overview

## TL;DR

The Japan credit default swap (CDS) market is a small but structurally important corner of the global credit derivatives universe. The dominant index reference is **iTraxx Japan**, the IHS Markit / S&P Global benchmark covering 50 investment-grade Japanese corporate names rolled every six months. Single-name CDS activity concentrates on Japan blue-chip credits with offshore-investor or hedge-fund interest — megabanks, large insurers, trading houses, autos, electronics, and telecoms. The dealer set is dominated by [[JapanFG/goldman-sachs-japan|Goldman Sachs Japan]], JPMorgan Tokyo, [[JapanFG/morgan-stanley-japan|Morgan Stanley Japan]], [[JapanFG/nomura-hd|Nomura]], BNP Paribas, and a small group of European and US dealers. Clearing splits between **JSCC** for yen-denominated index CDS and **ICE Clear Credit** (and historically LCH) for offshore-cleared exposure. The CDS-JGB / CDS-corporate-bond basis is structurally narrow but episodically volatile around BOJ policy moves, dealer balance-sheet contraction, and global credit stress.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the routing surface for the Japan credit derivatives subdomain. Read it together with [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the single-name pricing layer, [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] for the arbitrage layer, [[derivatives/japan-irs-market|Japan IRS market]] for the broader rates-swap context, [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve interplay, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the USD funding overlay that dominates Japanese institutional balance sheets.

On the issuer side, the corporate-credit anchor pages are [[finance/INDEX|finance index]], [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]], and [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]. On the user side, [[banking/INDEX|banking index]] and [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] frame the megabank / insurer demand for credit-hedging tools. [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] frames the dealer-to-hedge-fund plumbing that supports single-name CDS liquidity.

### Product taxonomy

| Product | Description | Typical user |
|---|---|---|
| iTraxx Japan index CDS | Tradable 50-name investment-grade Japan basket, 5Y benchmark, semi-annual roll | Macro funds, dealers, ETF / portfolio hedgers |
| Single-name CDS on Japan blue-chips | Bilateral CDS on individual Japanese listed corporates | Credit funds, structured-product issuers, dealers |
| iTraxx Japan tranches | Synthetic CDO-style tranches on the index (less liquid post-2008) | Specialist credit funds, dealers |
| Sovereign CDS on Japan | CDS on Japan government risk; modest activity vs G7 peers | Sovereign-risk funds, macro hedgers |
| Quanto CDS (USD-denominated on JPY credit) | CDS denominated in USD with JPY-denominated reference obligation | Offshore investors hedging FX exposure |
| Loan-CDS (LCDS) | CDS on syndicated loan reference; very limited Japan activity | Specialty loan credit funds |

The dominant volume by far sits in **iTraxx Japan index CDS** (5Y on-the-run series) and a thin tail of single-name activity on the most globally followed names.

### iTraxx Japan composition

iTraxx Japan is constructed by IHS Markit / S&P Global from the most liquid 50 Japan-domiciled investment-grade corporate CDS references. Composition is reviewed every six months at the index roll (March / September), with constituents weighted equally.

| Sector cluster | Representative names |
|---|---|
| Megabanks / financial groups | [[JapanFG/mufg|MUFG]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] (via SMFG), [[JapanFG/mizuho-bank|Mizuho]] (via Mizuho FG) |
| Insurance | Tokio Marine, Sompo, MS&AD |
| Trading houses (sogo shosha) | Mitsubishi Corp, Mitsui & Co, Itochu, Sumitomo Corp, Marubeni |
| Auto | Toyota, Honda, Nissan |
| Electronics / industrial | Sony, Panasonic, Hitachi, Mitsubishi Electric |
| Telecoms / utilities | NTT, KDDI, [[JapanFG/mufg|SoftBank Group]] (when included), TEPCO, Tokyo Gas |
| Real estate | Mitsubishi Estate, Mitsui Fudosan, Sumitomo Realty |
| Consumer / retail | Seven & I, Aeon (when included), Fast Retailing |

A small number of constituent rotations occur at each roll based on liquidity and rating criteria. The previous series remains tradeable for legacy hedges but liquidity migrates rapidly to the new on-the-run series.

### Single-name CDS coverage

Single-name CDS liquidity in Japan concentrates on a handful of internationally followed credits:

| Tier | Examples | Liquidity character |
|---|---|---|
| Tier 1 (most liquid) | MUFG, SMFG / SMBC, Mizuho, Nomura, SoftBank Group, Toyota Motor | Quoted by 5+ dealers, two-way flow, narrow bid-ask |
| Tier 2 (moderate) | Sony, Hitachi, Mitsubishi Corp, Mitsui & Co, Itochu, NTT, KDDI | Quoted by 3-5 dealers, episodic flow |
| Tier 3 (thin) | Mid-cap industrials, second-tier financials, utilities | Quoted on request, wide bid-ask, dealer balance-sheet driven |

[[JapanFG/mufg|MUFG]], [[JapanFG/sumitomo-mitsui-banking-corp|SMBC]] (via SMFG), and [[JapanFG/mizuho-bank|Mizuho]] (via Mizuho FG) are the most globally traded Japan financial CDS. [[JapanFG/nomura-hd|Nomura]] is the most actively traded Japan broker-dealer CDS. **SoftBank Group** is consistently the most actively traded Japan non-financial CDS owing to its leverage profile, M&A volatility, and Vision Fund mark-to-market sensitivity.

### Dealer set

| Dealer | Role |
|---|---|
| [[JapanFG/goldman-sachs-japan|Goldman Sachs Japan]] | Top-tier market maker on index and Tier-1 single names |
| JPMorgan Tokyo | Top-tier market maker, especially on insurance and financial credits |
| [[JapanFG/morgan-stanley-japan|Morgan Stanley Japan]] | Top-tier market maker, especially on technology and consumer credits |
| [[JapanFG/nomura-hd|Nomura]] | Leading domestic dealer, large index book, single-name presence |
| BNP Paribas Tokyo | Major European market maker on Japan credit |
| Citi Japan | Major US market maker, especially on financials |
| Barclays / Deutsche Bank Tokyo | Mid-tier presence, varies by sector |
| MUFG / MUMSS, SMBC Nikko, Mizuho Securities | Domestic banks active as price-takers / portfolio hedgers rather than top-tier market makers |

[[JapanFG/smbc-nikko|SMBC Nikko]], [[JapanFG/daiwa-sg|Daiwa]], and Mizuho Securities historically participated in single-name CDS but pulled back from active dealer-market-making roles after post-2008 regulatory and capital changes. Domestic megabank groups remain large counterparties for portfolio-hedging purposes (own-credit hedges, sovereign basis hedges) rather than dealer market makers.

### Notional outstanding

The Bank for International Settlements (BIS) publishes semi-annual statistics on global CDS notional outstanding by reference-entity region. Japan reference-entity CDS represents a small share — typically 2-4 percent of global single-name CDS notional and a similar share of index CDS notional — well below the US dollar and euro markets.

Within Japan, index CDS dominates by notional (driven by macro hedging and ETF replication flows) while single-name CDS dominates by client diversity (driven by structured product issuance and idiosyncratic credit hedging).

### Clearing infrastructure

Japan CDS clearing is bifurcated:

| Venue | Coverage | Currency | Member base |
|---|---|---|---|
| **JSCC CDS Clearing** | iTraxx Japan index series, eligible single-name Japan CDS | JPY-denominated trades | Japanese dealers, foreign-bank Tokyo branches |
| **ICE Clear Credit** | Global iTraxx index suite (including iTraxx Japan), broad single-name set | Multi-currency | Global dealer set including most active Japan CDS market-makers |
| **LCH CDSClear** | Reduced presence post-restructuring; historically cleared European indices | Multi-currency | European dealers; less Japan exposure |

[[banking/INDEX|JSCC]] (Japan Securities Clearing Corporation, part of JPX) launched CDS clearing to bring domestic dealer activity onshore and reduce cross-border concentration risk. ICE Clear Credit remains the dominant venue for cross-border Japan CDS flow given its scale, multi-product margin offset, and global dealer membership.

The CFTC clearing mandate and equivalent regimes in Japan (FIEA), EU (EMIR), UK (UK EMIR) drive most dealer-to-dealer trades into central clearing. Buy-side clients clear via dealer clients (client-clearing arrangement) rather than direct membership.

### CDS spread quoting

| Convention | Detail |
|---|---|
| Quoting basis | Running spread in basis points per annum on notional |
| Payment frequency | Quarterly, ACT/360 day count |
| Standard maturity | 5Y benchmark; full curve typically 1Y / 3Y / 5Y / 7Y / 10Y |
| Coupon convention | Standardized "small bang" coupons (25, 100, 500, 1000 bps for most names) with upfront payment to reconcile spread vs coupon |
| Recovery rate | Standardized assumption (typically 40 percent for senior unsecured corporate, 25 percent for subordinated) |
| Documentation | ISDA Master Agreement plus CDS Confirmation; 2014 ISDA Credit Derivatives Definitions |

The 5Y on-the-run CDS spread is the most-watched single number for Japan credit risk. The 5Y CDS-bond basis (described in [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]]) is the primary arbitrage signal.

### CDS curve shape

Most investment-grade Japan corporate CDS curves are upward-sloping (1Y < 3Y < 5Y < 10Y) reflecting the higher cumulative default probability over longer horizons. Inverted curves signal market expectation of near-term distress, as seen episodically in distressed financials and the most levered non-financials.

### Index roll mechanics

| Stage | Activity |
|---|---|
| T-30 | IHS Markit publishes provisional new-series constituents |
| T-15 | Final constituent list confirmed; weights set |
| T-1 | Old series final trading day before roll |
| T (semi-annual: 20 March, 20 September) | New series goes on-the-run; old series becomes off-the-run |
| T+5 to T+30 | Liquidity migration completes; off-the-run series widens vs on-the-run |

Roll basis (the spread difference between consecutive series) reflects credit-quality changes in constituents and supply-demand at the roll. Arbitrage funds and dealer trading desks position around the roll.

### Counterparty types

| Counterparty | Use case |
|---|---|
| Macro hedge funds | Outright index CDS for credit risk-on / risk-off positioning |
| Credit hedge funds | Single-name CDS for relative-value, basis trades, capital-structure arb |
| Bank dealer desks | Market-making, prop positioning, hedging structured products |
| Insurance and pension | Portfolio overlay hedging, ESR sensitivity management — see [[insurance/japan-life-insurance-alm-overview|Japan life ALM]] |
| Corporate treasury | Own-name hedging less common; sovereign / sector hedges for FX-linked exposures |
| Structured product issuers | Hedging credit-linked notes (CLN) and synthetic exposure transferred to retail / institutional buyers |
| Sovereign wealth funds | Tactical macro / credit positioning on Japan sovereign and IG basket |

[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] flags that life insurers can in principle use CDS for credit-spread hedging, though regulatory treatment under ESR and accounting rules under JGAAP and IFRS 9 constrain widespread use.

### Documentation

| Document | Purpose |
|---|---|
| ISDA Master Agreement | Bilateral framework for derivatives |
| Schedule and Credit Support Annex (CSA) | Collateral terms, threshold, MTA, eligible collateral |
| ISDA Credit Derivatives Definitions (2014) | Standardised CDS contract terms, credit events, settlement |
| Confirmation | Trade-specific terms (reference entity, notional, maturity, coupon, payment dates) |
| DTCC Deriv/SERV | Trade-matching and reporting infrastructure |

The 2014 ISDA Credit Derivatives Definitions replaced the 2003 Definitions and standardized governmental-intervention and bail-in credit-event treatment, particularly important after the 2008 crisis and European bank-resolution cases.

## Recent market structure shifts

| Period | Development |
|---|---|
| 2008-2010 | Post-Lehman cleanup, "Big Bang" and "Small Bang" CDS standardization, ISDA Determinations Committee creation |
| 2010-2015 | Migration to central clearing (JSCC launch, ICE Clear Credit dominance), Dodd-Frank / EMIR / JFSA clearing mandates |
| 2014 | New ISDA Credit Derivatives Definitions including governmental-intervention credit event |
| 2015-2020 | Single-name CDS liquidity contraction in many markets including Japan; index CDS resilient |
| 2020-Q1 | COVID credit spread blowout; CDS basis dislocation across investment-grade Japan |
| 2022-2023 | BOJ yield-curve-control adjustments triggered episodic CDS spread moves on financials |
| 2024-2025 | Continued thin single-name volumes; selective interest in Japan financial CDS during global bank-stress episodes |

## Related

- [[derivatives/INDEX]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[JapanFG/mufg]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- ISDA: Master Agreement, CDS Definitions, Determinations Committee public materials.
- FSA: post-2008 derivatives regulation, clearing mandate guidance, follow-up council materials.
- JSCC: CDS clearing service overview and member list.
- ICE: Clear Credit product list and clearing membership.
- IHS Markit / S&P Global: iTraxx Japan index methodology and roll calendar.
- BIS: semi-annual OTC derivatives statistics including CDS by region.
- BOJ: market statistics relevant to Japan credit funding and basis.
- JSDA: member-firm regulatory and market structure materials.

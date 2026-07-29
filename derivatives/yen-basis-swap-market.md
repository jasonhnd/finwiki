---
title: "Yen-USD cross-currency basis swap market"
aliases:
  - "yen-basis-swap-market"
  - "JPY-USD basis swap"
  - "yen basis swap"
  - "USD-JPY cross-currency basis"
  - "円ドルベーシススワップ"
  - "yen funding via basis swap"
  - "quarter-end basis widening"
  - "USDJPY basis curve"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, basis-swap, FX, USD-funding, JPY, megabank, dealer]
status: active
sources:
  - "BIS cross-currency basis analysis — https://www.bis.org/publ/qtrpdf/r_qt1609e.htm"
  - "BIS OTC derivatives statistics — https://www.bis.org/statistics/derstats.htm"
  - "ISDA interest-rate transaction disclosure — https://www.isda.org/a/ORiDE/isda-rates.pdf"
  - "BOJ US-dollar funds-supplying operations — https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_h/index.htm"
  - "Federal Reserve coordinated swap-line operations — https://www.federalreserve.gov/newsevents/pressreleases/monetary20200320a.htm"
---

# Yen-USD cross-currency basis swap market

## TL;DR

A yen-USD cross-currency basis swap (CCBS) is an OTC derivative in which two counterparties exchange principal and periodic floating-rate interest payments in two different currencies — typically JPY against USD — over a multi-year tenor. The "basis" is the spread (in basis points) added to one leg, usually the JPY leg, that prices the relative scarcity of USD funding for non-US holders of yen assets.

The quoted sign depends on which leg carries the spread and on market convention. BIS documents persistent covered-interest-parity deviations and quarter-end yen-dollar basis movements linked to hedging demand and dealer balance-sheet constraints. That evidence does not justify a timeless sign, fixed range, or single end-user explanation without a dated quote series.

For FinWiki, this market matters because it is the price of dollar funding for Japan and a direct input to: megabank USD asset funding, life insurer foreign-bond hedge cost, corporate USD-bond swap-back-to-yen economics, and BoJ / Federal Reserve USD swap line policy.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the single-currency rates side and [[derivatives/ois-tona-curve]] for the JPY discounting curve. The cash funding side is [[money-market/japan-money-market]] and the corporate end-user side is [[finance/japan-corporate-fx-and-rate-hedge-policy]].

## Instrument Mechanics

A standard JPY-USD CCBS has the following structure:

| Element | Detail |
|---|---|
| Tenor and dates | Agreed in the confirmation |
| Notional exchanges | Initial, interim, and final exchanges—if any—follow the contract's amounts and FX convention |
| Rate legs | Each leg specifies its benchmark, compounding or reset method, day count, payment dates, and any spread |
| Basis spread | The confirmation states the spread-bearing leg and sign; a bare negative number is ambiguous without the quote convention |
| Collateral and margin | Governed by the CSA, clearing rules if any, and applicable margin requirements |
| Clearing | Must be verified against the chosen CCP's current eligible-product list; it is not inferred from “standard tenor” |

Source: ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

Economic direction depends on which cash flows the party pays and receives; the product name alone does not establish a funding use.

## Post-2008 Evolution

Before the global financial crisis, the JPY-USD basis was close to zero. Covered interest parity (CIP) held tightly because banks arbitraged any deviation. Since 2008, persistent non-zero basis has reflected:

| Driver | Effect on basis |
|---|---|
| Dealer balance-sheet constraints | Can limit arbitrage that would otherwise narrow covered-interest-parity deviations |
| Quarter-end reporting dates | BIS documents recurring yen-dollar basis movements around quarter-end in the studied period |
| Currency-hedging demand | Creates one side of the flow; effect depends on supply and intermediation capacity |
| Central-bank dollar operations | Provide a dollar-liquidity backstop under their announced terms; they do not guarantee a market basis level |

Sources: ^[source:https://www.bis.org/publ/qtrpdf/r_qt1609e.htm] ^[source:https://www.federalreserve.gov/newsevents/pressreleases/monetary20200320a.htm] ^[source:https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_h/index.htm]

## Corporate USD Funding via JPY Funding Swap

A Japanese corporate or financial institution can fund a USD-asset purchase in two ways:

1. **Direct USD borrowing** — issue USD bonds, draw USD bank loans, or tap USD CP.
2. **JPY borrowing + JPY-USD swap (synthetic USD)** — issue JPY bonds or take JPY loans, then swap the JPY principal and coupon stream into USD via CCBS plus an FX swap at trade start.

An all-in comparison must align the same valuation date, maturity, credit issuer, issuance costs, FX notional exchanges, collateral, benchmark curves, basis convention, and transaction costs. A standalone basis quote cannot be added to a funding rate without first mapping the actual pay and receive legs.

For Japanese megabank treasuries, the basis directly prices the funding gap between yen-denominated deposits (cheap, ample) and USD assets (expensive, scarce), which is why megabank wholesale-funding strategy is sensitive to basis moves. See [[banking/INDEX]] and [[megabanks/mufg-bank]], [[megabanks/sumitomo-mitsui-banking-corp]], [[megabanks/mizuho-bank]] for the franchise level.

## Public dealer-data boundary

The cited aggregate sources do not publish a current JPY-USD CCBS dealer ranking, named-client flow, dealer market share, or product-level P&L. BIS evidence supports a general balance-sheet intermediation mechanism, not a firm-by-firm ranking or a universally one-directional client book.

See [[derivatives/japan-irs-market]] for the related single-currency rates franchise and [[banking/japan-banking-license-tier-comparison-matrix]] for the regulatory layer that governs which entities can be dealers.

## Basis Widening Triggers

| Condition | Documented mechanism | Evidence needed for a market claim |
|---|---|---|
| Quarter-end | Dealer balance-sheet constraints can intensify around reporting dates | Dated quote series using a stated leg and tenor convention |
| Broad dollar stress | Dollar funding supply and intermediation capacity can change sharply | Same-vintage funding, FX-swap, and CCBS observations |
| Hedging-demand change | Currency hedgers can create persistent flow imbalances | Flow or position evidence rather than institution labels |
| Central-bank dollar operation | BOJ lends dollars under announced operation terms using the coordinated swap-line framework | Operation allotment and market quotes; no automatic floor is assumed |

Sources: ^[source:https://www.bis.org/publ/qtrpdf/r_qt1609e.htm] ^[source:https://www.boj.or.jp/en/mopo/measures/mkt_ope/ope_h/opetori13.htm] ^[source:https://www.federalreserve.gov/newsevents/pressreleases/monetary20200320a.htm]

Reversal timing is empirical and varies by episode; no one-week diagnostic rule is applied.

## Comparison to EUR-USD Basis

| Dimension | JPY-USD basis | EUR-USD basis |
|---|---|---|
| Quote convention | Must identify the spread-bearing leg and sign convention | Must identify the spread-bearing leg and sign convention |
| Comparison date | Same observation time and maturity | Same observation time and maturity |
| Market drivers | Evaluate hedging demand, funding supply, and dealer constraints from dated data | Evaluate the same categories from dated data |
| Central-bank operations | BOJ-Federal Reserve arrangements and announced terms | ECB-Federal Reserve arrangements and announced terms |

Source: ^[source:https://www.bis.org/publ/qtrpdf/r_qt1609e.htm]

The cited BIS analysis does not support a timeless ranking of widest or most volatile currency pairs.

## Data Surface

Public data:

- **BIS Triennial Central Bank Survey and Semi-annual OTC Derivatives Statistics** — gross notional and gross market value of FX and interest-rate derivatives, broken down by currency pair and counterparty type.
- **BoJ statistics** — semi-annual Japan portion of BIS OTC derivatives survey; published in the same release window.
- **ISDA SwapsInfo** — weekly aggregated cleared and bilateral notional traded.
- **Tradeweb, Bloomberg, ICAP, BGC indicative quotes** — daily indicative basis curves; not direct trade data.

Public data shows aggregate notional outstanding (multi-trillion USD-equivalent for FX-derivatives generally) but does not show single-trade pricing, dealer P&L, or specific counterparty exposures. Dealer-bank IR disclosures occasionally reference "non-interest income from FX and rates" but do not isolate basis P&L.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/japan-market-infrastructure-map]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank for International Settlements: Semi-annual OTC derivatives statistics (FX derivatives by currency pair, instrument type).
- Bank for International Settlements: Quarterly Review articles on CIP deviations and FX-swap markets (multiple, 2016 onward).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Bank of Japan: Money Market surface and Tokyo Money Market Survey commentary.
- ISDA: SwapsInfo weekly aggregated transaction reports.
- Financial Services Agency: FIEA framework for OTC derivatives oversight.
- Japan Securities Clearing Corporation: clearing scope and product list.
- Federal Reserve and Bank of Japan: standing USD swap line documentation and usage releases.

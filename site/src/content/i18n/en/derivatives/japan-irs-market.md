---
source: derivatives/japan-irs-market
source_hash: 620e9585f44b81d4
lang: en
status: machine
fidelity: ok
title: "Japan yen interest-rate swap (IRS) market"
translated_at: 2026-05-31T03:19:56.479Z
---

# Japan yen interest-rate swap (IRS) market

## TL;DR

The yen interest-rate swap (IRS) market is the OTC derivative venue in which two counterparties exchange a stream of fixed JPY-denominated interest payments for a stream of floating-rate JPY payments over a defined tenor. It is the dominant interest-rate-hedging instrument for Japanese banks, life insurers, corporates, and foreign investors managing JPY exposure.

The floating reference has historically been 1-month, 3-month, or 6-month TIBOR; post-LIBOR-cessation, an increasing share of the curve references TONA-compounded-in-arrears (overlapping with the OIS market — see [[derivatives/ois-tona-curve]]). Tenors trade from 1Y out to 30Y and beyond; the most liquid points concentrate at 2Y, 3Y, 5Y, 7Y, 10Y, 20Y, and 30Y.

For FinWiki, this entry covers fixed-floating swap mechanics, the TIBOR-to-TONA migration alongside continued TIBOR-IRS, notional outstanding, dealer-bank franchise structure, JSCC clearing mandate, and end-user composition (corporates vs financial institutions).

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/ois-tona-curve]] for the discount-curve and short-tenor RFR side, [[derivatives/jgb-futures-curve]] for the exchange-listed hedge alternative, and [[derivatives/yen-basis-swap-market]] for the cross-currency intersection. The cash market is [[money-market/japan-money-market]]; the corporate end-user perspective is [[finance/japan-corporate-fx-and-rate-hedge-policy]].

## Instrument Mechanics

A standard JPY IRS has two legs swapped over a defined notional principal (no principal exchange):

| Element | Detail |
|---|---|
| Fixed leg | Fixed rate (the "swap rate") paid periodically (typically semi-annually for TIBOR-floating IRS, annually for TONA-OIS-style IRS). |
| Floating leg | Reset every period to the floating reference (1M, 3M, or 6M TIBOR; or compounded TONA in arrears). Day-count typically ACT/365 for JPY. |
| Notional | Not exchanged. Used only for interest-payment computation. |
| Tenor | Most-liquid points: 1Y, 2Y, 3Y, 5Y, 7Y, 10Y, 15Y, 20Y, 30Y. Tenors out to 40Y trade for life-insurer hedging. |
| Settlement | Net payment on each coupon date (only the difference between the two legs settles). |
| Collateral | Standard CSA with daily VM in JPY cash for collateralized trades; UMR-phased IM for non-cleared bilateral. |
| Clearing | Standardized tenors and reference indices clear at JSCC under the FIEA clearing mandate. |

The economic content: the fixed-rate payer locks in a known funding cost over the tenor and receives a floating cash flow; the floating-rate payer does the opposite. Both sides can hedge balance-sheet exposure to interest-rate changes.

## TIBOR vs TONA Migration

JPY IRS reference rates have evolved through the IBOR transition:

| Reference rate | Status | Typical use |
|---|---|---|
| 1-month TIBOR | Active; administered by JBATA | Some loan-linked IRS, structured products. |
| 3-month TIBOR | Active; administered by JBATA | Significant share of legacy and new JPY IRS, especially corporate-loan-linked hedging. |
| 6-month TIBOR | Active; administered by JBATA | Long-tenor IRS, especially insurance-linked. |
| TONA (compounded-in-arrears) | Risk-free rate (RFR); designated post-LIBOR | New OIS and increasingly new short-to-medium-tenor IRS; the discount-curve reference (see [[derivatives/ois-tona-curve]]). |
| JPY LIBOR (1M, 3M, 6M) | Ceased end-2021 (synthetic phase-out 2023) | Legacy contracts amended via ISDA Fallback Protocol to TONA + CAS. |
| Euroyen TIBOR (Z-TIBOR) | Discontinued December 2024 | Historical use only. |

The migration matters because:

1. New JPY IRS issuance increasingly references TONA-compounded for cleared, standardized swaps.
2. TIBOR-referencing IRS continues to coexist for term-fix loan-hedging applications.
3. The TIBOR-TONA basis (in basis points) is a tradable quote that compensates for the credit-bank-funding component of TIBOR vs the risk-free TONA.
4. Dealers run TIBOR-OIS and TIBOR-TONA basis books alongside outright IRS positions.

The dual-rate world is operationally complex but reflects the persistent demand for term-fix references in some segments of the Japan loan market alongside the global push toward RFR-based pricing.

## Notional Outstanding

JPY interest-rate derivatives (IRS + OIS combined) are reported semi-annually in the BIS OTC Derivatives Statistics and in the BoJ's Japan portion of the survey:

| Metric | Magnitude (illustrative — cite current BIS release for exact figures) |
|---|---|
| Gross notional outstanding, JPY single-currency interest-rate derivatives | Tens of trillions of USD-equivalent in BIS aggregate JPY IRS / OIS / FRA category. |
| Share of global IRS notional in JPY | One of the four largest currencies (USD, EUR, GBP, JPY); JPY share is meaningful but smaller than USD and EUR. |
| Gross market value | A small fraction of notional (typically low single-digit percent), reflecting offsetting positions across the dealer book. |

The standard caution: notional outstanding is a stock measure of contract size; gross market value is a closer proxy to economic exposure; net exposure is much smaller still after netting agreements. Both BIS and BoJ publish all three measures in their semi-annual releases. For any current analysis, cite the exact survey vintage because the numbers update twice a year.

A meaningful share of new JPY IRS clears at JSCC; the clearing share has grown since the FSA clearing mandate took effect.

## Dealer Bank Revenue Split

The JPY IRS dealer franchise is dominated by Japanese megabank-affiliated securities firms plus global investment banks:

| Dealer category | Representative firms |
|---|---|
| Japanese megabank securities affiliates | MUFG Securities, SMBC Nikko, Mizuho Securities (and their JPY-IRS market-making desks within the parent securities entities). |
| Independent Japanese securities firms | Nomura (the largest non-megabank franchise), Daiwa Securities. |
| Global investment banks active in JPY | JPMorgan, Goldman Sachs, Citi, Morgan Stanley, Deutsche Bank, Barclays, BNP Paribas, HSBC, UBS. |
| Inter-dealer brokers | ICAP / Tradition / BGC / Tullett Prebon — provide anonymous IDB execution and indicative price discovery. |

Revenue from JPY IRS market-making is reported in dealer-bank IR as part of "Fixed Income" or "Rates" within their wholesale / markets businesses. Public disclosures do not separately break out JPY-IRS P&L from the broader rates business, but franchise commentary in MUFG, SMFG, and Mizuho FG IR materials indicates that JPY rates is a meaningful contributor to their global-markets revenue.

The franchise economics depend on:

- Two-sided bid-ask capture on client flow.
- Inventory carry and run-rate revenue from warehoused positions.
- Cross-product synergy with JGB cash, repo, CCBS, and FX-forward businesses.
- Balance-sheet cost (RWA, LR, NSFR) as a regulatory drag.

See [[banking/INDEX]] and the JapanFG anchor pages for the parent-group disclosure layer; see [[banking/japan-banking-license-tier-comparison-matrix]] for the FIEA registration that governs dealer activity.

## Corporate vs Financial-Institution End-Users

| End-user category | Use case | Direction (typical) |
|---|---|---|
| Megabanks (treasury) | Hedge JPY loan repricing, JPY bond portfolio duration, ALM gap management. | Receive fixed (when assets are floating); pay fixed (when assets are fixed). |
| Regional banks | Hedge JPY bond portfolio duration; manage IRRBB (interest rate risk in the banking book). | Mixed; often receive fixed to extend duration cheaply. |
| Trust banks / custody banks | ALM and pension-related JPY-rate hedging. | Mixed. |
| Life insurance companies | Hedge long-tenor JPY policy-reserve liabilities (effective short duration vs long-duration liabilities → demand for long-tenor receive-fixed swaps). | Receive fixed at long tenors (10Y, 20Y, 30Y, 40Y). |
| Non-life insurers | Smaller-scale ALM hedging. | Mixed. |
| Corporates (non-financial) | Hedge JPY-denominated floating-rate loan exposure to fixed; convert fixed-coupon JPY bond issuance to floating; engage swap-back-to-yen on foreign-currency bond issuance. | Pay fixed when hedging floating-rate loans; receive fixed when swapping fixed-coupon bonds to floating. |
| Foreign investors | Take views on Japan rates; relative-value Japan vs other major-currency curves; hedge JGB-cash duration. | Highly directional and tactical. |
| Asset managers / pension funds | Duration management on JPY fixed-income mandates. | Mixed. |

Life insurers are structurally the largest single category of long-tenor JPY IRS receive-fixed demand because their long-duration policy reserves create a duration gap against their asset side. This anchor demand explains the deep liquidity at 20Y and 30Y tenors.

Corporate end-user flow detail is covered in [[finance/japan-corporate-fx-and-rate-hedge-policy]].

## JSCC Clearing Mandate

The FSA under FIEA implemented a clearing mandate for standardized JPY IRS, requiring eligible trades between covered counterparties to clear at JSCC:

| Element | Detail |
|---|---|
| CCP | Japan Securities Clearing Corporation (JSCC). |
| Mandated products | Standardized JPY IRS at major tenors, with cleared reference indices; expanded over multiple rule cycles. |
| Covered counterparties | Major Japanese financial institutions; expanded over time to include more entities. |
| Margin | IM and VM under JSCC's portfolio-margining methodology; settled in JPY cash. |
| Default management | JSCC waterfall (defaulter margin → defaulter contribution → JSCC capital tranche → non-defaulting member fund → further resources). |

The clearing share of JPY IRS at JSCC has grown materially. Cleared trades benefit from:

- Multilateral netting reducing gross exposure.
- Standardized margin methodology removing bilateral negotiation friction.
- Removal of bilateral counterparty risk; CCP risk concentrated and stress-tested.
- Capital relief relative to non-cleared trades (under Basel framework).

Non-cleared bilateral JPY IRS continues for: non-standard tenors, non-standard reset conventions, structured trades, and counterparties not subject to the mandate. Non-cleared trades are subject to UMR (Uncleared Margin Rules) phase-in IM requirements.

See [[securities/japan-securities-clearing-corp]] for clearing-corporation infrastructure and [[securities/japan-market-infrastructure-map]] for the broader market-infrastructure context.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate derivatives notional and market value).
- Bank of Japan: Japan portion of BIS OTC derivatives survey; JPY interest-rate derivatives statistical release.
- Japan Securities Clearing Corporation: JPY IRS clearing scope, mandated product list, margin methodology.
- Financial Services Agency: FIEA clearing mandate scope and supervisory guidance.
- ISDA: SwapsInfo aggregated weekly transactions; 2020 IBOR Fallbacks Protocol.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: TONA adoption and TIBOR-TONA coexistence reports.
- Dealer-bank IR releases: MUFG, SMFG, Mizuho FG, Nomura HD, Daiwa Securities Group quarterly markets-segment commentary.

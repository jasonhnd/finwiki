---
source: derivatives/japan-irs-market
source_hash: c07c36c0ab6999f3
lang: en
status: machine
fidelity: ok
title: "Japan yen interest-rate swap (IRS) market"
translated_at: 2026-07-29T21:20:00.000Z
---

# Japan yen interest-rate swap (IRS) market

## TL;DR

The yen interest-rate swap (IRS) market is the OTC derivative venue in which two counterparties exchange defined fixed and floating JPY interest cash flows over a stated tenor. Institution-specific use, direction, and product share require dated transaction or portfolio evidence.

Japanese Yen TIBOR remains active, while TONA underlies OIS and applicable JPY RFR fallbacks (see [[derivatives/ois-tona-curve]]). A current claim about product share or tenor liquidity requires a dated venue, trade-repository, or dealer dataset with the relevant benchmark and instrument scope.

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

| Reference rate | Verified status | Contractual point |
|---|---|---|
| Japanese Yen TIBOR | Active and administered by JBATA | Tenor and fallback terms must be read from the transaction |
| TONA | BOJ-published uncollateralized overnight call rate | Compounded TONA is used in OIS and as the JPY RFR component of applicable fallbacks |
| Panel-bank JPY LIBOR settings | Ceased or became non-representative after 31 December 2021 | Covered legacy derivatives use their contractual or protocol fallback |
| Synthetic 1M, 3M, and 6M JPY LIBOR | Permanently ceased after 31 December 2022 | Temporary UK-regulated bridge; it did not postpone the ISDA non-representativeness trigger |
| Euroyen TIBOR | Final publication on 30 December 2024 | JBATA announced no successor administrator or synthetic Euroyen TIBOR |

Sources: ^[source:https://www.jbatibor.or.jp/english/reform/] ^[source:https://www.jbatibor.or.jp/english/news/tibor_18.html] ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making] ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm]
The migration matters because:

1. TONA-compounded and Japanese Yen TIBOR products coexist; their dated new-trade shares require a venue or reporting dataset.
2. TIBOR-referencing IRS continues to coexist for term-fix loan-hedging applications.
3. The TIBOR-TONA basis (in basis points) is a tradable quote that compensates for the credit-bank-funding component of TIBOR vs the risk-free TONA.
4. Dealers run TIBOR-OIS and TIBOR-TONA basis books alongside outright IRS positions.

The dual-rate world is operationally complex but reflects the persistent demand for term-fix references in some segments of the Japan loan market alongside the global push toward RFR-based pricing.

## Notional Outstanding

JPY interest-rate derivatives (IRS + OIS combined) are reported semi-annually in the BIS OTC Derivatives Statistics and in the BoJ's Japan portion of the survey:

| Dataset field | Interpretation |
|---|---|
| Notional outstanding | Contractual reference amount at the reporting date; not a measure of daily turnover or loss exposure |
| Gross market value | Sum of positive and negative replacement values before netting, as defined by the dataset |
| Currency and reporting location | Global JPY totals and Japan-reporting-dealer totals use different populations and must not be mixed |

Sources: ^[source:https://www.bis.org/statistics/derstats.htm] ^[source:https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm]

For any current figure, cite the exact survey vintage, reporting population, currency, instrument, and unit.

## Public dealer-data boundary

The official aggregate sources cited here do not establish a current dealer ranking, dealer-level JPY IRS market share, or JPY-IRS-only revenue. Firm names, “dominant” status, and revenue splits require a dated public venue dataset or a dealer filing with that specific product and currency scope; broader fixed-income or markets revenue is not a substitute.

The franchise economics depend on:

- contractual cash flows and bid-offer terms;
- hedging and inventory outcomes;
- collateral, funding, capital, and operational costs; and
- default, liquidity, and basis risk.

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

The table lists possible hedge mappings, not observed positions. Claims about life-insurer direction, category rank, or 20Y/30Y liquidity require dated transaction, venue, or portfolio data.

Corporate end-user flow detail is covered in [[finance/japan-corporate-fx-and-rate-hedge-policy]].

## JSCC Clearing Mandate

The FSA under FIEA implemented a clearing mandate for standardized JPY IRS, requiring eligible trades between covered counterparties to clear at JSCC:

| Element | Detail |
|---|---|
| CCP | Japan Securities Clearing Corporation (JSCC). |
| Eligible product set | OIS, D-TIBOR IRS, D-TIBOR tenor swaps, OIS basis swaps, and OIS-versus-D-TIBOR basis swaps under current JSCC criteria |
| Scope caution | Eligibility is not itself proof that a particular counterparty pair is subject to a statutory clearing mandate |
| Client clearing | JSCC publishes a client-clearing framework for eligible submissions |
| Governing detail | Current JSCC IRS rules and procedures control acceptance, margin, and default management |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/otc/client.html] ^[source:https://www.jpx.co.jp/jscc/en/rule/rule_irs.html]

Clearing changes the risk and operational structure of a trade. Potential effects include:

- multilateral netting where positions and legal arrangements qualify;
- standardized CCP margin and default-management rules;
- replacement of bilateral counterparty exposure with exposure to the CCP framework; and
- capital effects that depend on the institution, product, and applicable rules.

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

---
source: derivatives/ois-tona-curve
source_hash: fb069097bbadc57a
lang: en
status: machine
fidelity: ok
title: "OIS TONA curve and JPY discounting"
translated_at: 2026-07-29T21:20:00.000Z
---

# OIS TONA curve and JPY discounting

## TL;DR

A JPY overnight indexed swap (OIS) is an OTC interest-rate derivative in which one party pays a fixed rate over a defined tenor and the counterparty pays the geometric (compounded) average of the daily Tokyo Overnight Average Rate (TONA) over the same period. TONA is the BoJ-published volume-weighted average of uncollateralized overnight call transactions and is the designated risk-free rate (RFR) for the JPY currency under the global IBOR transition.

Panel-bank JPY LIBOR ended after December 2021, and synthetic 1M, 3M, and 6M JPY LIBOR ceased permanently after 31 December 2022. TONA is the JPY overnight RFR and underlies OIS. Discounting is nevertheless contract-, collateral-, and CCP-specific; it should not be asserted solely from currency or product name.

For FinWiki, an OIS-TONA curve is a potential input to JPY derivative valuation and policy-expectations analysis. Its construction and use depend on the instruments, collateral, clearing, and model selected.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the longer-dated tenor curve, [[derivatives/jgb-futures-curve]] for the JGB-implied rate curve, and [[derivatives/yen-basis-swap-market]] for how the OIS curve interacts with cross-currency funding. The underlying TONA cash mechanism is [[money-market/call-market-structure]] and the BoJ policy implementation is [[money-market/boj-open-market-operations]].

## TONA — The Underlying Rate

TONA is calculated and published daily by the Bank of Japan based on uncollateralized overnight call transactions:

| Element | Detail |
|---|---|
| Full name | Tokyo Overnight Average Rate (無担保コールオーバーナイト物加重平均レート). |
| Calculator and publisher | Bank of Japan. |
| Underlying transactions | Qualifying uncollateralized overnight call transactions reported for BOJ statistics. |
| Method | Volume-weighted average rate published by BOJ. |
| Publication | Provisional result on the same day at around 5:15 p.m.; final result on the next business day at around 10:00 a.m. |
| Reset | Daily; no term structure inherent to the rate itself. |
| Currency / convention | Japanese yen; ACT/365 day-count by convention for JPY money-market. |

Source: ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm]

TONA replaced JPY LIBOR as the designated RFR under the IBOR transition coordinated by the Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks (a public-private body convened with BoJ and FSA participation). The transition followed the Financial Stability Board (FSB) recommendation for currency-by-currency RFR adoption.

TONA is based on reported uncollateralized overnight call transactions under BOJ's published statistical process. Any judgment about robustness, transaction volume, or sensitivity to reserves policy should use the BOJ methodology and dated volume data rather than being inferred here.

## Post-LIBOR Transition

The JPY LIBOR transition occurred along a coordinated timeline:

| Year | Event |
|---|---|
| 2017 | UK FCA announced LIBOR cessation by end-2021. |
| 2018 | Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks formed under BoJ / FSA / industry participation. |
| 2018–2021 | Migration of new JPY swap and loan business to TONA reference; legacy JPY LIBOR contracts amended or fallback-protocoled via ISDA 2020 Fallback Protocol. |
| End-2021 | JPY LIBOR ceased on a representative basis. Synthetic JPY LIBOR (FCA-administered, non-representative) introduced for some legacy 1M, 3M, 6M tenors as a wind-down bridge. |
| 31 December 2022 | Synthetic 1M, 3M, and 6M JPY LIBOR ceased permanently. |
| 30 December 2024 | Euroyen TIBOR was published for the final time; Japanese Yen TIBOR remains active. |

Sources: ^[source:https://www.fca.org.uk/markets/transition-libor/benchmarks-regulation-powers-policy-decision-making] ^[source:https://www.jbatibor.or.jp/english/news/tibor_18.html] ^[source:https://www.jbatibor.or.jp/english/reform/]

Applicable JPY LIBOR derivatives use the fallback in their documentation; Japanese Yen TIBOR and TONA products continue to coexist.

## BoJ Policy-Rate Transmission

The OIS-TONA curve is the most direct market expression of expected BoJ overnight rate over the curve's tenor:

| Horizon | Interpretation boundary |
|---|---|
| Short dated | Fixed OIS rates reflect expected compounded overnight fixings plus contractual and market premia over the exact accrual period |
| Extending across BOJ meetings | A quote can be analyzed against dated meeting decisions, but it is not a direct probability without a model |
| Longer dated | Forward expectations, term premia, collateral, and liquidity effects cannot be separated from one par rate alone |

Source: ^[source:https://www.boj.or.jp/en/mopo/outline/index.htm]

Any claim about a specific tenor's liquidity, implied meeting probability, or post-decision repricing requires dated OIS quotes and a stated model.

The relationship between OIS-TONA and the policy rate guideline is:

- The policy rate guideline (uncollateralized overnight call rate around target) sets a near-zero floor that TONA tracks daily.
- OIS forward rates embed the probability-weighted expectation of where BoJ will set the policy rate over each tenor.
- Differences between observed TONA and the implied OIS forward at the same horizon reveal repricing of policy expectations between MPMs.

See [[financial-regulators/boj-monetary-policy]] (where present) and [[money-market/boj-open-market-operations]] for the policy implementation layer; this entry covers the derivative expression.

## OIS Curve Construction

A market practitioner builds the JPY OIS-TONA curve as follows:

| Illustrative step | Contract- and data-dependent input |
|---|---|
| 1. Fixings | BOJ-published TONA observations and the trade's calendar and observation convention |
| 2. Market instruments | Dated, executable or validated OIS inputs available to the curve builder |
| 3. Cash-flow generation | Payment dates, compounding, lookback or shift, day count, and business-day rules |
| 4. Bootstrap | Solve discount factors that reproduce selected instrument prices |
| 5. Interpolation | Apply a documented method and test monotonicity, sensitivities, and out-of-sample instruments |

Sources: ^[source:https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm] ^[source:https://www.isda.org/a/ORiDE/isda-rates.pdf]

This is an illustrative workflow, not a claim that every quoted tenor exists or that every institution uses the same interpolation. The resulting curve may be used to:

- price new OIS trades at par;
- discount future cash flows on collateralized JPY swaps (the "OIS discounting" convention adopted post-2010);
- compute present value (PV) of CSA-collateralized JPY exposures;
- mark-to-market JSCC-cleared JPY IRS positions (JSCC uses TONA-OIS discounting for JPY-cleared products).

For non-collateralized or differently-collateralized trades, the discount curve is adjusted by a funding-valuation adjustment (FVA) or by switching to a different collateral-rate curve. This is the "multi-curve framework" that became standard after 2010.

## Swap-Rate Discount Curve for JPY-IRS

The JPY-IRS market (see [[derivatives/japan-irs-market]]) is dual-curve in pricing:

| Curve | Purpose |
|---|---|
| TONA-based curve | Can project compounded TONA cash flows under the selected methodology |
| Discount curve | Determined by collateral, clearing, funding, and contractual terms; may be TONA-based for applicable JPY-collateralized trades |
| Japanese Yen TIBOR forward curve | Can project active TIBOR-referencing cash flows; discounting remains transaction-specific |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jbatibor.or.jp/english/reform/]

Projection and discounting must be mapped from the actual trade, CSA, and CCP rules rather than assumed from the floating index alone.

## Market Depth and Liquidity

The cited official sources do not provide a timeless tenor-by-tenor bid-ask table or establish that JSCC clears a stated share of all JPY OIS. A liquidity assessment needs dated executable quotes, trade counts, or venue statistics with product and tenor scope.

## Public participant-data boundary

The official sources cited here do not publish a current JPY OIS dealer ranking, market share, broker roster, or universal end-user direction. Those claims require a dated venue dataset or institution-specific disclosure.

## TONA Futures (Adjacent Listed Product)

OSE lists TONA 3-Month Futures, which complement the OTC OIS market by providing exchange-traded, JSCC-cleared exposure to short-tenor TONA expectations. Specifications:

| Element | Detail |
|---|---|
| Underlying | 3-month compounded TONA over the contract reference period. |
| Quotation | 100.00 minus the futures rate; standard short-rate-futures convention. |
| Minimum price increment | Defined in the current JPX contract specification. |
| Settlement | Cash-settled against the reference 3-month TONA compound at contract maturity. |
| Clearing | JSCC. |

Sources: ^[source:https://www.jpx.co.jp/english/derivatives/products/interest-rate/3m-tona-futures/01.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/futures/product.html]

JPX defines the contract as cash-settled exposure to 100 minus the three-month compounded TONA rate. Any claim about growth or relative liquidity requires dated JPX and comparable OTC data.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Call Money Market Data (TONA / TONAR publication).
- Bank of Japan: Money Market surface and statistical releases.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: public reports on TONA adoption and IBOR transition.
- Japan Securities Clearing Corporation: JPY IRS / OIS clearing rules and TONA futures clearing.
- Japan Exchange Group / Osaka Exchange: TONA 3-Month Futures contract specifications.
- Financial Services Agency: IBOR transition supervisory guidance.
- ISDA: 2020 IBOR Fallbacks Protocol and Supplement.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- BIS: Semi-annual OTC derivatives statistics.

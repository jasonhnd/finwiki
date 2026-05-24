---
title: "OIS TONA curve and JPY discounting"
aliases:
  - "ois-tona-curve"
  - "TONA OIS"
  - "Tokyo Overnight Average Rate OIS"
  - "JPY OIS curve"
  - "yen overnight indexed swap"
  - "TONA discount curve"
  - "post-LIBOR JPY discounting"
  - "JPY swap risk-free rate"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, OIS, TONA, JPY, risk-free-rate, IBOR-transition, BoJ, discount-curve]
status: active
sources:
  - "https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm"
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.jscc.co.jp/en/"
  - "https://www.fsa.go.jp/en/"
  - "https://www.isda.org/"
---

# OIS TONA curve and JPY discounting

## TL;DR

A JPY overnight indexed swap (OIS) is an OTC interest-rate derivative in which one party pays a fixed rate over a defined tenor and the counterparty pays the geometric (compounded) average of the daily Tokyo Overnight Average Rate (TONA) over the same period. TONA is the BoJ-published volume-weighted average of uncollateralized overnight call transactions and is the designated risk-free rate (RFR) for the JPY currency under the global IBOR transition.

Post-LIBOR (cessation December 2021 for JPY LIBOR, with the synthetic JPY LIBOR phase-out completed in 2023), TONA-referencing OIS is the canonical discount curve for yen derivatives — both for OIS pricing itself and as the discount factor used in collateralized JPY IRS (see [[derivatives/japan-irs-market]]), JPY-USD basis swaps (see [[derivatives/yen-basis-swap-market]]), JPY-denominated CCP-cleared trades, and CSA-collateralized OTC bookings posted in JPY cash.

For FinWiki, the OIS-TONA curve is the price expression of BoJ short-rate policy expectations, the discount curve underneath every JPY-priced derivative, and the most direct visible market read on near-term BoJ rate decisions.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/japan-irs-market]] for the longer-dated tenor curve, [[derivatives/jgb-futures-curve]] for the JGB-implied rate curve, and [[derivatives/yen-basis-swap-market]] for how the OIS curve interacts with cross-currency funding. The underlying TONA cash mechanism is [[money-market/call-market-structure]] and the BoJ policy implementation is [[money-market/boj-open-market-operations]].

## TONA — The Underlying Rate

TONA is calculated and published daily by the Bank of Japan based on uncollateralized overnight call transactions:

| Element | Detail |
|---|---|
| Full name | Tokyo Overnight Average Rate (無担保コールオーバーナイト物加重平均レート). |
| Calculator and publisher | Bank of Japan. |
| Underlying transactions | Uncollateralized overnight call-market trades brokered through tanshi companies and reported to BoJ. |
| Method | Volume-weighted mean of qualifying overnight transactions on each business day. |
| Publication | Published the next business day (T+1) by BoJ; previously also disseminated as TONAR / Tokyo Overnight Average Rate. |
| Reset | Daily; no term structure inherent to the rate itself. |
| Currency / convention | Japanese yen; ACT/365 day-count by convention for JPY money-market. |

TONA replaced JPY LIBOR as the designated RFR under the IBOR transition coordinated by the Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks (a public-private body convened with BoJ and FSA participation). The transition followed the Financial Stability Board (FSB) recommendation for currency-by-currency RFR adoption.

Because TONA reflects actual unsecured overnight transactions (the same market detailed in [[money-market/call-market-structure]]), it is robust against the manipulation risks that ended LIBOR. It is, however, sensitive to BoJ policy implementation: if BoJ ample-reserves policy depresses call activity, TONA volume can shrink and the rate becomes thinner in some periods.

## Post-LIBOR Transition

The JPY LIBOR transition occurred along a coordinated timeline:

| Year | Event |
|---|---|
| 2017 | UK FCA announced LIBOR cessation by end-2021. |
| 2018 | Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks formed under BoJ / FSA / industry participation. |
| 2018–2021 | Migration of new JPY swap and loan business to TONA reference; legacy JPY LIBOR contracts amended or fallback-protocoled via ISDA 2020 Fallback Protocol. |
| End-2021 | JPY LIBOR ceased on a representative basis. Synthetic JPY LIBOR (FCA-administered, non-representative) introduced for some legacy 1M, 3M, 6M tenors as a wind-down bridge. |
| 2023 | Synthetic JPY LIBOR ceased. All JPY-rate derivatives reference TONA (or in select cases, TIBOR for term-fixing markets). |
| Ongoing | TIBOR (Tokyo Interbank Offered Rate) survives for some JPY-denominated loan and bond products requiring a term fix; D-TIBOR and Z-TIBOR are administered by Japanese Bankers Association TIBOR Administration (JBATA). |

The transition outcome: yen IRS markets, OIS markets, and CSA-collateralized OTC derivatives now use TONA as the underlying floating reference and discount rate. JPY LIBOR derivatives that were transitioned via ISDA fallback now reference TONA-compounded-in-arrears plus a fixed credit-adjustment spread (CAS).

## BoJ Policy-Rate Transmission

The OIS-TONA curve is the most direct market expression of expected BoJ overnight rate over the curve's tenor:

| Tenor | What the OIS rate expresses |
|---|---|
| 1W, 1M, 3M OIS | Near-term BoJ rate expectations through the next 1–2 Monetary Policy Meetings (MPMs). |
| 6M, 1Y OIS | Expected BoJ rate path including possible MPM hikes / cuts over the next 12 months. |
| 2Y, 3Y, 5Y OIS | Medium-term policy path; reflects MPM trajectory plus a small term premium. |
| 10Y, 20Y, 30Y OIS | Long-horizon equilibrium rate expectations plus term premium; less liquid than the IRS curve at the same tenor. |

Movements in 1Y or 2Y OIS rates around MPM dates are the most-watched signal of policy surprise. After the March 2024 BoJ regime shift exiting negative rates and YCC, the OIS curve repriced rapidly to reflect a probable rate-normalization path; subsequent OIS moves around each MPM have been closely watched.

The relationship between OIS-TONA and the policy rate guideline is:

- The policy rate guideline (uncollateralized overnight call rate around target) sets a near-zero floor that TONA tracks daily.
- OIS forward rates embed the probability-weighted expectation of where BoJ will set the policy rate over each tenor.
- Differences between observed TONA and the implied OIS forward at the same horizon reveal repricing of policy expectations between MPMs.

See [[JapanFG/boj-monetary-policy]] (where present) and [[money-market/boj-open-market-operations]] for the policy implementation layer; this entry covers the derivative expression.

## OIS Curve Construction

A market practitioner builds the JPY OIS-TONA curve as follows:

| Step | Input |
|---|---|
| 1. Spot | Today's TONA fixing (T-1 published rate) anchored to the BoJ policy guideline. |
| 2. Short end | OIS rates for 1W, 2W, 1M, 2M, 3M tenors from interdealer quotes. |
| 3. Medium tenor | OIS rates for 6M, 9M, 1Y, 18M, 2Y, 3Y. |
| 4. Long end | OIS rates for 5Y, 7Y, 10Y, 15Y, 20Y, 30Y, where liquidity supports quotes. |
| 5. Bootstrap | Solve for the discount-factor curve D(t) such that each input OIS rate prices to par; iterate forward. |
| 6. Smoothing | Apply a smoothing interpolation (cubic spline, monotone cubic, or piecewise linear in log-discount) consistent with the dealer's pricing model. |

The resulting discount curve D(t) is used to:

- price new OIS trades at par;
- discount future cash flows on collateralized JPY swaps (the "OIS discounting" convention adopted post-2010);
- compute present value (PV) of CSA-collateralized JPY exposures;
- mark-to-market JSCC-cleared JPY IRS positions (JSCC uses TONA-OIS discounting for JPY-cleared products).

For non-collateralized or differently-collateralized trades, the discount curve is adjusted by a funding-valuation adjustment (FVA) or by switching to a different collateral-rate curve. This is the "multi-curve framework" that became standard after 2010.

## Swap-Rate Discount Curve for JPY-IRS

The JPY-IRS market (see [[derivatives/japan-irs-market]]) is dual-curve in pricing:

| Curve | Purpose |
|---|---|
| TONA-OIS | Discount curve — used to PV future cash flows. |
| TONA forward curve | Projection curve — used to forecast future TONA floating-leg resets. |
| (Historic) TIBOR forward curve | For TIBOR-referencing legacy IRS, used to forecast 1M / 3M / 6M TIBOR resets; PV is still done on TONA-OIS. |

This dual-curve framework means even a TIBOR-floating IRS uses the TONA-OIS curve for discounting if the trade is collateralized in JPY cash under standard CSA terms. The TIBOR-TONA basis is reflected in a separate basis-swap quote (TIBOR vs TONA OIS, in bp).

## Market Depth and Liquidity

| Tenor band | Liquidity assessment |
|---|---|
| 1M–6M | Very liquid; tight bid-ask (sub-1 bp typical). |
| 1Y–3Y | Liquid; the most-traded MPM-expectations tenor. |
| 5Y–10Y | Liquid for institutional flow; bid-ask 1–2 bp typical. |
| 15Y–30Y | Less liquid in OIS form than in TIBOR IRS or JGB-cash form; bid-ask wider. |

Notional outstanding for JPY OIS is multi-trillion JPY-equivalent on an aggregate basis (BIS OTC derivatives statistics aggregate it within the JPY IRS / OIS category). JSCC clears the bulk of cleared JPY OIS; non-cleared bilateral OIS exists for non-standard tenors and structured trades.

## Dealer Makers

| Participant | Role |
|---|---|
| Japanese megabank securities affiliates (MUFG Securities, SMBC Nikko, Mizuho Securities) | Major makers in JPY OIS; serve domestic banks, insurers, and corporates. |
| Global dealers (JPMorgan, Goldman, Citi, Deutsche, BNP, Barclays, HSBC) | Two-sided market makers especially in cross-border flow and CCBS-adjacent trades. |
| Independent securities firms (Nomura, Daiwa) | Domestic franchise plus cross-border. |
| Inter-dealer brokers (Tradition, BGC, ICAP, Tullett Prebon) | Provide indicative pricing and execute IDB flow. |
| End users | Japanese megabanks (treasury hedging), regional banks, life insurers, asset managers, corporates, foreign accounts taking views on BoJ policy. |

Megabank dealing affiliates intersect with cash money market intermediation; see [[money-market/tanshi-company-business-model]] for the tanshi side and [[banking/japan-banking-license-tier-comparison-matrix]] for the regulated-entity layer.

## TONA Futures (Adjacent Listed Product)

OSE lists TONA 3-Month Futures, which complement the OTC OIS market by providing exchange-traded, JSCC-cleared exposure to short-tenor TONA expectations. Specifications:

| Element | Detail |
|---|---|
| Underlying | 3-month compounded TONA over the contract reference period. |
| Quotation | 100.00 minus the futures rate; standard short-rate-futures convention. |
| Tick value | Defined per contract; small notional sizing for retail and small institutional. |
| Settlement | Cash-settled against the reference 3-month TONA compound at contract maturity. |
| Clearing | JSCC. |

TONA futures are growing in liquidity but remain smaller than OTC OIS. They are useful for short-rate hedging where the user prefers exchange-listed structure over OTC.

## Counterpoints

- "TONA is the same as the BoJ policy rate" — No. TONA is the actual transaction-weighted rate from the call market. BoJ's policy guideline targets a range around the policy rate, and TONA can sit slightly above or below the target on any given day depending on reserve conditions.
- "OIS replaced LIBOR seamlessly" — Mostly true for JPY but with a transition cost: legacy contracts required ISDA fallback amendment, credit-adjustment spreads (CAS), and some valuation methodology changes. The transition was operationally complex even though the rate-mechanic is cleaner.
- "OIS curve is the only discount curve" — For JPY-cash-collateralized trades, yes. For trades collateralized in USD cash (e.g., some cross-border bilateral), USD SOFR-OIS is the discount; for non-collateralized, a funding-adjusted curve applies.
- "TIBOR is dead" — No. TIBOR survives as a term-fixing reference for JPY loans and some structured products. JBATA continues to administer it post-LIBOR transition.
- "OIS forward rates predict BoJ rate paths perfectly" — They embed risk-neutral expectations plus a small term premium. Realized outcomes can diverge, especially during regime shifts (e.g., the March 2024 negative-rate exit was somewhat anticipated by OIS but with significant uncertainty in timing).

## Open Questions

- How does TONA's quality as a benchmark hold up if BoJ ample-reserves policy continues to depress call-market activity?
- What is the optimal collateral-rate curve for cross-border JPY trades with USD or EUR cash collateral?
- How will the OIS-TONA curve evolve through a multi-hike normalization cycle? Has the curve term premium structurally shifted post-2024?
- Will TONA futures liquidity grow to challenge OTC OIS as the primary short-rate hedge instrument, similar to how SOFR futures have grown in the US?
- What is the right way to model OIS-vs-JGB rate convergence (or divergence) for asset-swap and basis trades discussed in [[derivatives/jgb-futures-curve]]?

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
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
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

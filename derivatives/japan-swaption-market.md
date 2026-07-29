---
title: "Japan swaption (interest-rate option) market"
aliases:
  - "japan-swaption-market"
  - "JPY swaption"
  - "yen swaption"
  - "Japanese yen swaption"
  - "swaption JPY market"
  - "payer swaption"
  - "receiver swaption"
  - "Bermudan callable JPY"
  - "life insurer variable annuity hedging"
  - "GMxB hedging swaption"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, swaption, JPY, interest-rate-options, life-insurer, variable-annuity, GMxB, ATMF, vol-grid]
status: active
sources:
  - "ISDA interest-rate product disclosure — https://www.isda.org/a/ORiDE/isda-rates.pdf"
  - "ISDA RFR conventions and fallbacks product table — https://www.isda.org/a/bdigE/RFR-Conventions-and-IBOR-Fallbacks-Product-Table-October-2021.pdf"
  - "BIS OTC derivatives statistics — https://www.bis.org/statistics/derstats.htm"
  - "BOJ BIS survey results — https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm"
  - "JSCC IRS eligible products — https://www.jpx.co.jp/jscc/en/cash/irs/product.html"
---

# Japan swaption (interest-rate option) market

## TL;DR

A swaption is an OTC interest-rate option granting the holder the right, but not the obligation, to enter into or settle against a defined interest-rate swap under agreed terms. JPY swaptions relate to the [[derivatives/japan-irs-market|JPY interest-rate swap]] and [[derivatives/ois-tona-curve|OIS-TONA]] markets. The cited aggregate sources do not establish that swaptions are the principal vehicle for any Japanese institution category or reveal current position direction.

European-style payer / receiver swaptions have a defined exercise date, while Bermudan-style contracts permit exercise on specified multiple dates. A callable bond, structured note, insurance guarantee, or other liability may contain interest-rate optionality, but product ownership and hedge mapping must be established from the actual contract and institution disclosure.

For FinWiki, this entry covers swaption mechanics, quote-surface fields, payer and receiver payoff direction, Bermudan structures, possible guarantee-risk mappings, evidence boundaries, and JSCC clearing-scope verification.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the interest-rate-options cluster. Read it against [[derivatives/japan-irs-market]] for the underlying IRS market the swaption references, [[derivatives/ois-tona-curve]] for the discount-curve and short-rate side, and [[derivatives/japan-cms-constant-maturity-swap]] for CMS-derivative cousins that share the same vol-grid inputs. The life-insurer end-user demand side is anchored at [[insurance/japan-life-insurance-alm-overview|Japan life-insurance ALM overview]] and [[insurance/economic-value-based-solvency|economic-value-based solvency (ESR)]].

## Instrument Mechanics

A standard JPY swaption has the following structure:

| Element | Detail |
|---|---|
| Underlying | A pre-specified JPY interest-rate swap (e.g., 10Y JPY IRS referencing TONA-compounded or TIBOR) |
| Right | Option-holder right to enter the swap on the option's exercise date |
| Direction | **Payer swaption**: right to pay fixed and receive floating. **Receiver swaption**: right to receive fixed and pay floating. Value depends on the contract, forward swap rate, strike, discounting, volatility and settlement. |
| Strike | Agreed fixed-rate strike; record moneyness and quote convention |
| Option expiry | Date on which the option-holder exercises (the "expiry") |
| Swap tenor | Tenor of the underlying swap, conventionally written as "expiry × tenor" (e.g., "1Y × 10Y" = 1-year expiry into a 10-year swap) |
| Style | European (single exercise), Bermudan (specified multiple exercise dates), or another contractually defined style |
| Settlement | Cash-settled to a defined valuation methodology (PV of the implied swap) or physical-settled (the option-holder is delivered into a live swap on exercise) |
| Documentation | ISDA Master Agreement + CSA |

Valuation requires the confirmation, forward curve, discount curve, volatility convention / surface, exercise and settlement terms, and the chosen model. No single Black, normal or other model is assumed for every trade. ^[Source: https://www.isda.org/a/ORiDE/isda-rates.pdf.]

## JPY Swaption Implied-Volatility Grid

The official aggregate sources cited here do not publish a current executable JPY swaption volatility surface. A quote or valuation record should identify at least:

- **Option expiry**: the contractual exercise date or schedule
- **Underlying swap tenor**: start, maturity, benchmark and payment conventions

No tenor or expiry is labelled “most liquid” without dated executable quotes, sizes, trade counts, or venue data:

| Quote field | Required evidence |
|---|---|
| Expiry | Contractual date or exercise schedule |
| Underlying | Swap start, maturity, benchmark, fixed / floating conventions |
| Strike / moneyness | Strike and definition of ATM, ITM, OTM or other moneyness |
| Volatility convention | Normal, lognormal, shifted, premium, or another stated convention with units |
| Quote timestamp | Observation time, bid / offer, notional or size, source and collateral assumptions |

The cited sources do not establish a current market-share ranking among normal, lognormal, shifted or premium quote conventions. The convention must be stated for each dataset.

A volatility surface may be an input to a [[derivatives/japan-cms-constant-maturity-swap|CMS]] or CMS-spread valuation, subject to the chosen model. The official sources cited here do not verify a named broker roster or a current executable surface. ^[Source: https://www.isda.org/a/ORiDE/isda-rates.pdf.]

## Payer vs Receiver Direction and Position Evidence

Payer / receiver labels describe contractual rights, not the identity or motive of a holder. Institution and flow claims need dated transaction or portfolio evidence:

| Evidence case | Contractual direction | Verification boundary |
|---|---|---|
| Payer holder | Right to pay fixed and receive floating under the confirmation | Does not identify hedge purpose or investor type |
| Receiver holder | Right to receive fixed and pay floating under the confirmation | Does not establish a long-rate or liability position |
| Option writer | Opposite contractual payoff to the holder, subject to collateral and close-out terms | Cannot infer whether exposure is hedged |
| Callable instrument | Map issuer / investor optionality from the instrument terms | Do not infer a Bermudan hedge without disclosure |
| Portfolio hedge | Match notional, dates, curve, sensitivity and accounting designation | Institution label is insufficient |
| [[derivatives/japan-irs-market|IRS]] alternative | Compare swap, option, funding, collateral and liquidity terms | No universal product preference is asserted |

The aggregate sources cited here do not establish a structural insurer-flow direction, tenor concentration, or causal effect of post-2024 BOJ policy on payer / receiver activity. Those hypotheses require dated quotes, trades, sensitivities and institution disclosures.

## Bermudan Callable Swaptions

A Bermudan swaption permits exercise on a specified set of dates. Callable and cancellable instruments can contain related optionality, but prevalence and hedge direction are empirical:

| Structure | Embedded option |
|---|---|
| Callable bond (issuer-callable) | Issuer has a call right on specified dates; exact swaption mapping depends on liability and hedge conventions |
| Puttable bond (investor-puttable) | Investor has a put right; map the payoff from the instrument terms |
| Cancellable swap | Swap with a contractually defined cancellation right |
| Callable structured note | Note with issuer call dates; any external hedge requires transaction-specific evidence |

Bermudan valuation requires an exercise-policy and continuation-value model across the contractual dates. Model choice, calibration, curve, volatility, correlation and numerical method must be stated; this page does not prescribe a universal model.

The cited aggregate sources do not establish JPY Bermudan volume by tenor or the hedge used for callable issuance. For instrument context, see [[derivatives/structured-bond-japan-retail-issuance|JPY structured bond retail issuance]].

## Life-Insurer Variable-Annuity (GMxB) Hedging

A variable annuity or another insurance product may contain guaranteed-minimum-benefit optionality. The contract, policyholder behavior assumptions, asset mix, discounting and insurer disclosure are required before identifying an interest-rate exposure or hedge:

| Guarantee type | Possible risk dimension | Illustrative instrument, not an observed hedge |
|---|---|---|
| GMDB (Guaranteed Minimum Death Benefit) | Mortality, equity, discount-rate and behavior assumptions | Test equity and rate options only against product cash flows |
| GMAB (Guaranteed Minimum Accumulation Benefit) | Equity downside and present-value sensitivity | Instrument mix depends on guarantee and asset strategy |
| GMIB (Guaranteed Minimum Income Benefit) | Annuity conversion, longevity, rates and behavior | Any swaption mapping requires dated sensitivity evidence |
| GMWB (Guaranteed Minimum Withdrawal Benefit) | Equity, rates, withdrawals, lapses and other behavior | A multi-asset hedge is possible but not inferred |

No general conclusion is made about vintage, moneyness, hedge direction, hedge size, or offsetting profit and loss for Japanese insurers. Those claims require product- and institution-specific disclosures with dated sensitivities.

The [[insurance/economic-value-based-solvency|economic-value-based solvency (ESR)]] framework may affect how disclosed risks are measured, but it does not by itself establish demand for a particular swaption direction or tenor. See [[insurance/japan-life-insurance-alm-overview]] for broader ALM context.

Whether a particular foreign-owned or domestic insurer uses swaptions, and in which direction, requires a dated portfolio, solvency, or transaction disclosure; ownership alone is not evidence of a hedge position.

## Public dealer-data boundary

The cited official aggregate sources do not publish a current JPY swaption dealer ranking, dealer market share, broker roster, or swaption-only revenue. Firm-level participation and any claim about recurring insurer flow require a dated venue dataset, transaction disclosure, or dealer filing with that exact product and currency scope.

## Clearing Status

The current JSCC IRS eligible-product page lists swaps rather than establishing broad swaption clearing. Clearing, margin, and bilateral treatment must be verified for the specific product, counterparties, and venue rather than inferred from the underlying IRS.

Source: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html]

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/foreign-life-affiliate-japan-positioning]]
- [[insurance/japan-life-insurance-big-four]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[money-market/INDEX]]
- [[money-market/boj-open-market-operations]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate options, including swaptions, notional and gross market value).
- Bank of Japan: Japan portion of BIS OTC derivatives survey.
- Japan Securities Clearing Corporation: JPY OTC clearing scope.
- Financial Services Agency: FIEA framework on OTC derivatives and ESR-related supervisory guidance.
- ISDA: Standard documentation, swaption definitions, 2020 IBOR Fallbacks Protocol.
- Industry publications (Risk, GlobalCapital, Practical Law) on swaption market practice.
- National Association of Insurance Commissioners (US): For comparison, US variable annuity / GMxB hedging practice.

---
title: "Japan single-stock options (OSE)"
aliases:
  - "japan-single-stock-options"
  - "single stock options Japan"
  - "OSE equity options"
  - "個別株オプション"
  - "個別証券オプション"
  - "stock-on-stock options Japan"
  - "Japan equity options market"
  - "covered call Japan"
domain: derivatives
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [derivatives, equity-derivatives, single-stock-options, OSE, JPX, structured-products, retail-issuer-hedging]
status: active
sources:
  - "https://www.jpx.co.jp/english/markets/derivatives/securities-options/"
  - "https://www.jpx.co.jp/english/markets/derivatives/"
  - "https://www.jpx.co.jp/english/markets/derivatives/trading-volume/"
  - "https://www.jscc.co.jp/en/"
  - "https://www.fsa.go.jp/en/"
  - "https://www.theocc.com/"
---

# Japan single-stock options (OSE)

## TL;DR

Single-stock options (個別証券オプション / Securities Options) on the Osaka Exchange (OSE) under Japan Exchange Group (JPX) are exchange-listed options on eligible stocks, ETFs and REITs. OSE's current product overview states that the eligible universe exceeds 200 issues, while the exact list changes; actual trading must be checked in JPX's daily issue-level statistics. OSE single-stock options clear at [[securities/japan-securities-clearing-corp|JSCC]]. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html; https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/.]

Eligible-universe size is not the same as liquidity. JPX's issue-level statistics can show little or no trading in many eligible contracts on a given day. Comparisons with the United States therefore require a stated date range and like-for-like venue statistics rather than a fixed multiple or an inferred cause.

For FinWiki, this entry covers current contract specifications, evidence routes for liquidity comparison, possible bilateral alternatives for institutional users, and the limits of what public product pages establish.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/nikkei-225-futures-options]] for the index-option peer, [[derivatives/topix-futures]] for the broader index-derivatives context, and [[derivatives/structured-product-eb-knockin-japan-retail]] for a retail-distribution product context. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; clearing at [[securities/japan-securities-clearing-corp|JSCC]].

## Contract Specifications

OSE Securities Options have the following standard specs:

The table is limited to OSE's current regular-trading specifications; the contract unit follows each underlying security's minimum trading unit and is not a universal 100 shares. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html; https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/01.html.]

| Element | Detail |
|---|---|
| Underlying | Eligible stocks, ETFs and REITs selected by OSE |
| Number of underlyings | More than 200 stocks, ETFs and REITs in the current OSE product overview; the exact list changes |
| Contract unit | Minimum trading unit of each underlying security |
| Style | European-style exercise |
| Settlement | Exercise is available only on the last trading day; settlement follows OSE / JSCC securities-option rules |
| Expiry cycle | Nearest two months plus two nearest March-cycle months |
| Tick size | JPY 0.1 to JPY 5,000 depending on quotation level and the underlying trading unit |
| Regular trading hours | 09:00-11:35 and 12:30-15:45 JST; no regular night session |

European exercise is a key difference from standard US single-stock options. Settlement mechanics must be read from the current OSE rules for the particular underlying; this page does not generalize all OSE securities options as cash-settled.

## Liquidity Reality

OSE publishes issue-level trading statistics, and many eligible issues can have little or no trading on a given day. The following is a qualitative liquidity classification rather than a fixed ranking. ^[Sources: https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/; https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html.]

| Evidence view | Public route | Interpretation boundary |
|---|---|---|
| Eligible universe | OSE's current securities-option product list | Eligibility does not establish active quotes or turnover |
| Trading activity | JPX daily issue-level volume and open interest | Measure over a stated date range; do not infer a permanent rank from one day |
| Executable liquidity | Current order book or documented dealer quote | Historical volume alone does not establish current bid-ask depth |

Comparison with the US single-stock option market:

This comparison table deliberately avoids unsupported universe and volume ranges; current counts and turnover should be read from each venue's own listings and statistics. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/individual/securities-options/index.html; https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/; https://www.cboe.com/us/options/market_statistics/.]

| Aspect | OSE Securities Options | US single-stock options (Cboe / NASDAQ / NYSE) |
|---|---|---|
| Underlying universe | More than 200 stocks, ETFs and REITs in OSE's current overview | Broader multi-exchange listed-option universe |
| Turnover evidence | OSE publishes daily issue-level statistics | US venues publish daily market statistics |
| Exercise style | European | Generally American for standard equity options |
| Multi-exchange competition | Single venue (OSE) | Many competing exchanges; complex SOR routing |

The cited venue statistics support a broader US multi-exchange comparison route, but they do not by themselves establish a timeless depth multiple. Bilateral dealer transactions are a possible alternative where documented and available; no share of institutional flow is inferred here (see [[derivatives/dealer-bank-derivatives-revenue-mix]] for public-disclosure boundaries on dealer franchises).

## Why Liquidity Is Limited (Structural Factors)

The following are research questions rather than established causal weights:

1. **Investor channel choice**: compare direct option statistics with relevant margin, CFD / FX-margin and [[derivatives/structured-product-eb-knockin-japan-retail|structured-product]] data over the same period.
2. **Structured-product distribution**: use issuer and distributor disclosures before attributing retail equity-volatility demand to EB or knock-in notes.
3. **Market-maker participation**: review current OSE participant and quote data rather than assuming a fixed number of dedicated makers.
4. **Tax and conduct rules**: identify the customer and instrument before comparing tax treatment or suitability requirements.
5. **Pricing quality**: measure executable spreads and depth for a stated sample rather than generalizing from eligibility.

The public product pages establish that a listed market exists; they do not establish a universal investor mix or the causal importance of any one factor above.

## OTC Single-Stock Options

For institutional flow that cannot be transacted on OSE, dealer banks may offer OTC single-stock options bilaterally. The table is a structural use-case map, not evidence that every structure is commonly used or available to every issuer. ^[Sources: https://www.isda.org/book/equity-derivatives-definitions/; https://www.jpx.co.jp/english/derivatives/rules/flexible/.]

| Possible use case | Illustrative structure and boundary |
|---|---|
| Block hedging on a disclosed share sale | Bilateral put or collar may be considered; actual use requires transaction evidence |
| Corporate buyback execution | A synthetic forward or collar is a possible structure, subject to own-share and insider-information controls |
| Structured-note hedging | Dealer hedge instruments depend on the issued payoff, liquidity and disclosure; no standard route is assumed |
| Sale of a large strategic holding | Multi-leg options are possible, but legal, accounting and market-impact treatment is transaction-specific |

Bilateral single-stock options may be documented under an ISDA Master Agreement and, where applicable, a CSA. Counterparty, collateral, valuation and documentation terms are transaction-specific; no fixed bid-ask premium over a listed contract is asserted.

## Post-2022 Issuer-Side Hedging Developments

Public developments since 2022 can motivate transaction-level research, but they do not establish aggregate option flow without supporting data:

1. **Cross-shareholding reform**: use issuer disclosures to test whether a specific unwind employed an option or collar.
2. **Buyback execution**: a buyback announcement does not by itself establish a derivatives hedge.
3. **Structured-product issuance**: use the disclosed payoff and hedge information for products in [[derivatives/structured-bond-japan-retail-issuance|retail structured channels]] before assigning flow to OSE or OTC options.
4. **Wealth-management strategies**: covered calls and cash-secured puts are possible strategies, but customer adoption requires provider or investor disclosure.

Any conclusion about market transformation should be based on a stated time series of issue-level volume, open interest and participant data.

## Clearing and Margin

| Element | Detail |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]] |
| Margin | Calculated under JSCC's current VaR method |
| Exercise | European; available only on the expiration day |
| Default management | Standard JSCC waterfall |

European-style exercise removes early-exercise decisions before expiry, but settlement and delivery obligations still depend on OSE / JSCC rules for the underlying security.

## Comparison with US Single-Stock Options Depth

The following table routes the comparison to current venue statistics instead of fixed daily-volume bands. ^[Sources: https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/; https://www.cboe.com/us/options/market_statistics/.]

| Market | Public comparison route |
|---|---|
| OSE securities options | Daily issue-level volume and open interest published by JPX |
| US listed equity options | Daily multi-exchange statistics published by US venues |

The sources support a much broader and more active US venue complex, but this page does not freeze a point-in-time multiple or rank.

For Japan-equity exposure expressed at the index level, the [[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]] complex is a separate product set. Its current depth should be measured from JPX statistics rather than described through a fixed global rank.

## Related

- [[derivatives/INDEX]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[securities/INDEX]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: Securities Options (個別証券オプション) contract specifications and listed-name registry.
- JPX: Monthly trading-volume statistics for OSE derivatives by product.
- Japan Securities Clearing Corporation: Margin methodology and settlement rules.
- Financial Services Agency: FIEA framework on listed and OTC derivatives.
- OCC (US): For comparison, US single-stock option market data and clearing volumes.
- Cboe Global Markets: US single-stock options data for depth comparison.

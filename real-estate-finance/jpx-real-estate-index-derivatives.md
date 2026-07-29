---
title: "JPX TSE REIT Index derivatives"
aliases:
  - "jpx-real-estate-index-derivatives"
  - "TSE REIT Index futures"
  - "TSE REIT Index options"
  - "REIT ETF Japan"
  - "1343 NEXT FUNDS REIT"
  - "1345 Listed Index Fund J-REIT"
  - "J-REIT index derivatives"
  - "J-REIT hedging"
domain: real-estate-finance
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [real-estate-finance, derivatives, etf, futures, options, j-reit, index, hedging, jpx]
status: active
sources:
  - "https://www.jpx.co.jp/english/equities/products/reits/outline/"
  - "https://www.jpx.co.jp/english/derivatives/products/reit/reit-futures/index.html"
  - "https://www.jpx.co.jp/english/derivatives/products/reit/index.html"
  - "https://www.jpx.co.jp/english/equities/products/etfs/issues/01-07.html"
  - "https://www.ares.or.jp/action/jreit/"
---

# JPX TSE REIT Index derivatives

## TL;DR

The **Tokyo Stock Exchange REIT Index (東証REIT指数)** is a JPX index for the J-REIT segment. JPX sources confirm the index methodology, listed tracker ETFs, TSE REIT Index Futures, and TSE REIT Index Options. Listing status does not establish liquidity, borrow, spreads, suitability, or hedge effectiveness.

1. **ETFs** on the TSE REIT Index include **NEXT FUNDS Tokyo Stock Exchange REIT Index ETF (1343)**, **Listed Index Fund J-REIT (Tokyo Stock Exchange REIT Index) (1345)**, and **MAXIS J-REIT ETF (1597)**.
2. **Index futures** on the TSE REIT Index — a currently listed Osaka Exchange product as of 2026-07-29; verify live volume and open interest separately.
3. **Options** — TSE REIT Index Options regular contracts launched on April 13, 2026; product availability is confirmed, while liquidity claims require dated JPX statistics.
4. **Single-name or ETF shorting / lending** — availability, eligibility, borrow, and execution must be checked for the named security and date.

For FinWiki, product availability and product liquidity are separate questions. JPX confirms live TSE REIT Index futures and options; users must compare dated volume, open interest, spreads, and ETF borrow before choosing a hedge. This page does not infer that a listed contract is liquid merely from its product page.

## Wiki route

This entry sits under [[real-estate-finance/INDEX|real-estate-finance index]] as a product-verification surface. [[real-estate-finance/j-reit-market-overview|J-REIT market overview]], [[real-estate-finance/top-10-j-reit-overview-matrix|J-REIT reference matrix]], [[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|logistics vs office comparison]], [[real-estate-finance/mitsui-fudosan-financing-model|Mitsui Fudosan]], [[real-estate-finance/mitsubishi-estate-financing-model|Mitsubishi Estate]], and [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate reference]] are context only. Product rules and current trading data must come from JPX, the fund, broker, and market sources. See [[derivatives/INDEX|derivatives index]] and [[exchanges/INDEX|exchanges domain]] for general product context.

## TSE REIT Index — the underlying benchmark

Table source note: The index attributes are sourced to JPX's TSE REIT Index overview; constituent count and weights are date-sensitive and must be refreshed. ^[Source: https://www.jpx.co.jp/english/equities/products/reits/outline/.]

| Attribute | Detail |
|---|---|
| Publisher | Tokyo Stock Exchange (JPX subsidiary) |
| Index methodology | Market-capitalization weighted, free-float adjusted, of all REIT-segment-listed J-REITs |
| Constituents | Eligible REIT-segment issues under the current JPX methodology; count changes with listings, mergers, and delistings |
| Base value / date | 1000 at 2003-03-31; calculation started 2003-04-01 |
| Rebalancing | Periodic free-float and weight adjustments per JPX methodology |
| Sector classification | Implicit (not formally sectorized); investors track logistics / office / retail / residential / hotel / diversified composition via JPX disclosure |
| Dividend treatment | Price return (income-distribution adjusted in total-return variants) |

JPX publishes index information and variants on its methodology surface. Any claim that a manager, sponsor, or foreign investor uses the index must be supported by that party's dated mandate or disclosure.

## ETF surface — listed trackers

JPX confirms the following listed tracker codes; it does not, by listing them, establish AUM, turnover, spreads, borrow, or relative depth.

Table source note: Each named code is checked against JPX's current REIT ETF list as of 2026-07-29. AUM/liquidity rankings are not inferred from listing status. ^[Source: https://www.jpx.co.jp/english/equities/products/etfs/issues/01-07.html.]

| ETF | Code | Provider | Mechanism |
|---|---|---|---|
| **NEXT FUNDS Tokyo Stock Exchange REIT Index ETF** | TSE **1343** | Nomura Asset Management | Listed tracker; verify current fund page and trading data |
| **Listed Index Fund J-REIT (Tokyo Stock Exchange REIT Index)** | TSE **1345** | Amova Asset Management | Listed tracker; verify current fund page and trading data |
| **MAXIS J-REIT ETF** | TSE **1597** | Mitsubishi UFJ Asset Management | Listed tracker; verify current fund page and trading data |

Before describing exposure or using an ETF in a hedge analysis, verify its current objective, index, portfolio, creation/redemption terms, margin eligibility, securities-borrow availability, turnover, spread, premium/discount, tax, and tracking difference. Do not infer a Bank of Japan ownership effect without same-date holdings, free-float, lending, and price-impact evidence.

## Index futures listing status

JPX lists **TSE REIT Index Futures** at Osaka Exchange. The contract opened on June 16, 2008; contract specifications and the live product roster confirm current availability as of 2026-07-29. Availability does not establish execution depth, so volume and open interest still require dated statistics. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/reit/reit-futures/index.html and https://www.jpx.co.jp/english/derivatives/products/reit/reit-futures/01.html.]

The following are hypotheses to test when comparing dated J-REIT futures liquidity with Nikkei 225 / TOPIX products:

Table source note: This is an analytical hypothesis matrix, not an empirical attribution of current liquidity. Test each row against dated JPX market statistics, constituent liquidity, ETF borrow, and participant data. ^[Sources: https://www.jpx.co.jp/english/derivatives/market-report/ and https://www.jpx.co.jp/english/derivatives/products/reit/reit-futures/index.html.]

| Constraint | Effect on J-REIT index futures liquidity |
|---|---|
| **Smaller market cap** | Compare same-date underlying-market size and notional turnover rather than assuming a liquidity effect |
| **Buy-and-hold institutional base** | Test short-tenor hedging demand against dated participant data |
| **Different volatility profile** | Compare realised and implied volatility over the same period |
| **Dealer warehousing economics** | Test constituent liquidity, basis, and securities-borrow cost |
| **ETF substitutability** | Compare ETF turnover and borrow with futures volume and open interest on the same date |

Do not infer a current product hierarchy without a common-date comparison of cash ETF turnover/borrow, futures volume/open interest, and options volume/open interest.

## Hedging real-estate equity exposure via short ETF / short futures

The following are instruments or strategies whose availability and economics must be tested; they are not recommendations or statements of operational feasibility:

1. **Short J-REIT ETF (1343 / 1345 / 1597)** — verify margin eligibility, locate, borrow rate, capacity, spread, tracking, and recall risk.
2. **Short single-name J-REITs** — verify eligibility, locate, borrow, concentration, and mismatch.
3. **Short TSE REIT Index futures** — currently listed; execution remains subject to live liquidity and basis risk.
4. **Listed developer (8801 / 8802) versus J-REIT ETF** — model factor exposures and basis; the pair does not isolate one spread by definition.
5. **Logistics REIT versus office REIT** — define the [[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|sector view]] and verify borrow, issuer, sponsor, leverage, and asset mismatches.
6. **JGB futures / IRS overlay** — estimate rate sensitivity and basis under [[derivatives/INDEX|derivatives index]]; it does not automatically hedge a cap rate or property-specific risk.

For every case, quantify order size, turnover, open interest, bid/ask, borrow, roll, basis, tracking, margin, tax, and stress behavior on the same date. No relative hedge precision is asserted without those data.

## Options market depth

JPX launched regular-contract **TSE REIT Index Options** on April 13, 2026. The contract is live as of 2026-07-29; because the product is new, depth must be evaluated from current volume, open interest, quotes, and spreads rather than inherited historical statements. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/reit/index.html and https://www.jpx.co.jp/english/corporate/about-jpx/history/02.html.]

Potential fields to test in a liquidity study include:

- **Underlying market size and turnover** — measure them for the same date; do not infer option demand.
- **Realised and implied volatility** — compare matched windows and definitions; do not infer customer demand from volatility alone.
- **Participant activity** — use dated participant or position data where available; do not characterize the investor base without evidence.
- **Substitute products** — verify actual listings, volume, open interest, spreads, and borrow before describing substitution.

Protective puts, collars, covered calls, cross-asset proxies, single-name positions, and rate options each introduce distinct payoff, basis, liquidity, margin, and legal risks. Model those risks from executable, same-date data rather than treating any as a substitute.

No blanket conclusion about current option-market depth is made without dated JPX statistics and executable quotes.

## Dealer hedging activity

Actual dealer books are private. The table lists possible risk mappings only and does not assert that any dealer uses them.

Table source note: The rows are possible hedge mappings, not evidence that a named dealer currently runs each book. Product availability is grounded in JPX listings; actual dealer activity is private and must not be inferred. ^[Source: https://www.jpx.co.jp/english/derivatives/products/reit/index.html.]

| Dealer activity | Hedging tool |
|---|---|
| Short ETF position from client buying | Buy basket of underlying single-name J-REITs to neutralize index exposure |
| Long ETF position from client selling | Short basket of underlying single-name J-REITs |
| Index-futures inventory | Possible cross-hedge with underlying ETF / single-name basket |
| Options book | Possible delta hedge via index futures or underlying ETF; rebalance as risk policy requires |
| Rate-sensitive J-REIT carry | IRS / JGB futures hedge of rate component |
| Cross-currency exposure (foreign-investor flow) | FX forward / swap to hedge JPY exposure |

Any claim about dealer capacity, regulation, warehousing cost, market-making depth, or franchise economics requires named, dated evidence; product volume alone does not establish it.

## Comparison to equity-index derivatives

Table source note: This is a directional comparison framework, not a current liquidity ranking. Product availability comes from JPX; all size, participation, and depth comparisons require same-date market statistics. ^[Source: https://www.jpx.co.jp/english/derivatives/products/.]

| Dimension | TSE REIT Index derivatives | TOPIX / Nikkei 225 derivatives |
|---|---|---|
| Underlying market cap | Measure on a common date and perimeter | Measure on the same date and perimeter |
| ETF depth | Compare AUM, turnover, spreads, premium/discount, and borrow on a common date | Compare the same fields and definitions |
| Futures availability | TSE REIT Index Futures listed; measure live liquidity | Multiple listed TOPIX / Nikkei 225 futures contracts; measure live liquidity |
| Options availability | TSE REIT Index Options listed from 2026-04-13; measure live liquidity | Multiple listed TOPIX / Nikkei 225 option contracts; measure live liquidity |
| Foreign-investor participation | Use matched participant/ownership data; no direction is assumed | Use matched participant/ownership data |
| Dealer market-making depth | Compare executable quotes, size, spreads, and dealer count | Compare the same fields |
| BoJ holdings | Use same-date instrument-level holdings and free-float data before testing an effect | Use the same definitions |

The table defines a same-date comparison, not a structural conclusion.

## Comparison to overseas REIT-derivatives markets

No overseas depth ranking is supplied. A valid cross-market comparison must first align product status, contract notional, currency, time zone, volume, open interest, executable spread/size, ETF AUM/turnover/borrow, and observation date from each exchange or fund source.

## Implications for investors and risk managers

This page confirms products, not suitability. For any proposed exposure or hedge, document the objective, eligible instrument, mandate, payoff, delta/beta/duration basis, borrow, liquidity, margin, tax, counterparty, legal terms, tracking error, stress loss, and unwind plan. The [[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|sector comparison]] is contextual and does not establish that a trade is feasible.

## ARES Investor Indices — complementary analytical surface

ARES publishes index and market-analytics materials on its own terms. Before combining them with JPX data, verify the exact series name, methodology, universe, return definition, sector classification, currency, date, and licence. This page does not call the combination a standard toolkit or claim institutional adoption.

## Index-rebalancing dynamics

The TSE REIT Index is periodically rebalanced as new J-REITs list, existing REITs merge or delist, and free-float weightings adjust. Rebalancing dynamics:

- **New J-REIT listing** — apply the current JPX inclusion rule and effective date; measure any flow or price effect rather than assuming it.
- **J-REIT merger** — apply the current treatment and calculate actual constituent/weight changes.
- **Free-float adjustment** — use JPX's current methodology and published factors; do not infer a factor from sponsor holdings alone.
- **Sector composition** — classify constituents consistently and compare dated weights; do not infer growth, outperformance, or investor impact from a composition change alone.

## Related

- [[real-estate-finance/INDEX|real-estate-finance INDEX]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix|top 10 J-REIT matrix]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict|J-REIT sponsor structure and conflict]]
- [[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign-investor ownership]]
- [[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|logistics vs office J-REIT comparison]]
- [[real-estate-finance/mitsui-fudosan-financing-model|Mitsui Fudosan financing model]]
- [[real-estate-finance/mitsubishi-estate-financing-model|Mitsubishi Estate financing model]]
- [[real-estate-finance/aeon-mall-financing-and-securitization|AEON Mall financing and securitization]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS/RMBS securitization]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank CRE lending Japan]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]]
- [[derivatives/INDEX|derivatives INDEX]]
- [[derivatives/yen-basis-swap-market|JPY-USD basis swap]]
- [[exchanges/INDEX|exchanges INDEX]]
- [[securities/INDEX|securities INDEX]]
- [[business/INDEX|business INDEX]]
- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- JPX, TSE REIT Index overview — https://www.jpx.co.jp/english/equities/products/reits/outline/
- JPX, Derivatives market product roster — https://www.jpx.co.jp/english/derivatives/
- JPX, REIT market segment landing — https://www.jpx.co.jp/english/equities/products/reits/
- ARES, Investor Indices and J-REIT market analytics — https://www.ares.or.jp/en/
- FSA, Investment Trust Act and Financial Instruments and Exchange Act framework — https://www.fsa.go.jp/en/
- JREI (Japan Real Estate Institute) appraisal methodology references — public landing

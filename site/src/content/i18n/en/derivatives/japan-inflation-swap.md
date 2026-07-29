---
source: derivatives/japan-inflation-swap
source_hash: 4b43b23200f08766
lang: en
status: machine
fidelity: ok
title: "Japan inflation swap market (JPY CPI-linked)"
translated_at: 2026-07-29T21:20:00.000Z
---

# Japan inflation swap market (JPY CPI-linked)

## TL;DR

A JPY inflation swap is an OTC derivative in which one party pays a fixed rate and the other party pays a floating rate indexed to a Japanese Consumer Price Index (CPI) measure — most commonly the Statistics Bureau's CPI ex-fresh-food index (生鮮食品除く). The two principal structural forms are zero-coupon inflation swaps (ZCIS, single payment at maturity based on cumulative inflation between trade date and maturity) and year-on-year inflation swaps (YoY, periodic payments tied to year-over-year CPI changes). The fixed rate paid against the inflation leg at trade date is the "breakeven inflation" priced into the swap.

The JPY inflation swap market is structurally smaller than its USD and EUR counterparts but has gained meaningful activity since the BoJ established its 2% price-stability target in January 2013 under the Quantitative and Qualitative Easing (QQE) framework, and again as actual JPY CPI moved decisively above 2% from 2022 onward. The market sits adjacent to the [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi inflation-linked bond]] cash market, with the breakeven priced in JPY inflation swaps providing a derivative-based read on inflation expectations that complements the JGBi-derived breakeven.

For FinWiki, this entry covers swap mechanics (ZCIS and YoY), the CPI reference, BoJ-2%-target era dynamics, pension-fund and insurer hedging demand, the relationship to JGBi, and the dealer franchise.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the rates-derivatives cluster. Read it against [[derivatives/jgb-inflation-linked-bond-jgbi]] for the cash inflation-linked bond peer, [[derivatives/japan-irs-market]] for the vanilla IRS peer, and [[derivatives/ois-tona-curve]] for the nominal-rate discount curve. The BoJ-policy context is anchored at [[money-market/boj-open-market-operations]] and the pension-fund / insurer end-user demand side at [[insurance/japan-life-insurance-alm-overview]].

## Instrument Mechanics

A standard JPY inflation swap exchanges fixed for inflation-linked floating cash flows.

### Zero-Coupon Inflation Swap (ZCIS)

The most common structural form for JPY inflation swaps:

| Element | Detail |
|---|---|
| Tenor | Agreed by the parties |
| Fixed leg | Single payment at maturity: $N \times [(1 + k)^T - 1]$, where $k$ is the fixed inflation breakeven rate and $T$ is tenor |
| Inflation leg | Single payment at maturity: $N \times \frac{\text{CPI}_T}{\text{CPI}_0} - N$, where CPI is the reference CPI index level on the maturity date (with a lag) |
| Net payment | The party paying the inflation leg pays the difference between realized cumulative inflation and the contracted breakeven |
| Reference index | A named Statistics Bureau CPI series, observation dates, lag, and interpolation rule specified in the confirmation |
| Day-count | Contract-specific; CPI observations follow the defined index publication and correction rules |
| Documentation | ISDA Master Agreement + CSA |

Sources: ^[source:https://www.stat.go.jp/english/data/cpi/index.html] ^[source:https://www.isda.org/book/2008-isda-inflation-derivatives-definitions/]

Economically, the inflation-leg payer locks in a known fixed cumulative inflation cost; the inflation-leg receiver collects realized inflation in exchange for paying the fixed breakeven. The breakeven rate priced in the market is the trade-implied expectation of cumulative inflation over the tenor (plus a small inflation risk premium).

### Year-on-Year Inflation Swap (YoY)

A more granular structure with periodic coupon payments:

| Element | Detail |
|---|---|
| Tenor | 2Y, 5Y, 10Y typical |
| Coupon frequency | Annual or semi-annual |
| Fixed leg | Periodic payment: $N \times k$ per coupon |
| Inflation leg | Periodic payment: $N \times \frac{\text{CPI}_t}{\text{CPI}_{t-1}} - N$ per coupon |

YoY swaps are useful for hedging exposures tied to year-by-year inflation outturns (rather than cumulative inflation), but they are less liquid than ZCIS in JPY.

## CPI Reference Index

The standard JPY inflation swap references the Japan CPI ex-fresh-food index (生鮮食品を除く総合, "core CPI" in Japanese convention), published monthly by the Statistics Bureau. Other CPI variants exist but are less commonly used:

| Index | Notes |
|---|---|
| CPI (total) | Includes all items including fresh food (volatile) |
| **CPI ex-fresh-food** | Standard "core" measure in Japan; standard inflation-swap reference |
| CPI ex-fresh-food, ex-energy | "Core-core"; used in some BoJ communications; less common as swap reference |
| Tokyo CPI (advance indicator) | Published before national CPI; not typically used as swap reference but watched as leading indicator |

The Statistics Bureau publishes CPI on a delayed-monthly basis (typically 3-4 weeks after the reference month). Swap fixings use the most recent published value with a defined fixing-rule lag (typically 2-3 months) to ensure the index is available at the swap valuation date.

## Breakeven Inflation Signal

The breakeven inflation rate priced in a ZCIS represents the market's risk-neutral expectation of cumulative CPI inflation over the swap tenor, plus a (typically small) inflation risk premium. Comparison with the [[derivatives/jgb-inflation-linked-bond-jgbi|JGBi breakeven]] (computed as nominal JGB yield minus JGBi yield at matching tenor) provides two market-implied inflation expectation measures:

| Source | Type of measure |
|---|---|
| JPY ZCIS breakeven | Derivative-based; pure inflation expression; CSA-collateralized |
| JGBi-implied breakeven | Cash-bond-based; affected by JGBi liquidity premium, JGB-JGBi liquidity differential |
| Survey-based expectations (BoJ Tankan, ESP Forecast) | Survey; longer release lag; non-market-based |
| Headline CPI prints | Realized data; lagged |

The derivative breakeven typically prints below the JGBi-implied breakeven by a "liquidity premium" reflecting the relative ease of trading via swap vs holding the JGBi cash bond.

For BoJ policy analysis, the inflation-swap breakeven is one of the cleanest market-based reads on whether the BoJ's 2% target is credibly priced. Pre-2022, JPY 10Y ZCIS breakevens spent extended periods well below 2% despite the BoJ's explicit target; post-2022, with realized inflation moving above 2%, breakevens repriced higher and the gap to the target narrowed materially.

## BoJ 2%-Target Era Dynamics

The JPY inflation swap market has been substantially shaped by the BoJ's 2% inflation target framework:

| Policy period | Officially documented framework | What the table does not establish |
|---|---|---|
| January 2013 onward | BOJ introduced a 2% price-stability target in terms of the year-on-year change in CPI | A target is not a quoted swap rate or proof of market liquidity |
| September 2016 to March 2024 | Yield-curve control formed part of the BOJ policy framework | Any effect on a particular swap tenor must be tested against dated market data |
| March 2024 onward | BOJ changed the monetary-policy framework and discontinued the former YCC operating framework | The policy decision alone does not establish dealer volumes or end-user positioning |

Sources: ^[source:https://www.boj.or.jp/en/mopo/outline/target.htm] ^[source:https://www.boj.or.jp/en/mopo/outline/index.htm]

## Pension-Fund and Insurer Demand

End-user demand for JPY inflation swaps comes principally from:

| Exposure | Possible contractual hedge | Direction depends on |
|---|---|---|
| CPI-linked liability or expense | Receive the defined inflation leg and pay fixed | Exact liability index, lag, tenor, basis risk, and hedge-accounting treatment |
| CPI-linked revenue or asset | Pay the defined inflation leg and receive fixed | Exact asset index, payment dates, and desired risk reduction |
| Relative-value position | Combine inflation swap, nominal-rate, or JGBi exposures | Trade thesis, collateral terms, liquidity, and exit assumptions |

Source: ^[source:https://www.isda.org/book/2008-isda-inflation-derivatives-definitions/]

The table describes possible hedge mappings; it does not assert that GPIF, an insurer, or another named institution holds such a trade. Institution-specific direction and size require a dated public portfolio or transaction disclosure.

## Relationship to JGBi

The cash-derivative relationship between JPY inflation swaps and the [[derivatives/jgb-inflation-linked-bond-jgbi|JGB inflation-linked bond (JGBi)]] market is structurally important:

| Trade type | Description |
|---|---|
| Inflation-swap vs JGBi asset swap | Buy JGBi, swap the inflation-linked coupon stream against a fixed rate via inflation swap → synthetic nominal exposure to JGB credit / liquidity |
| JGBi-implied breakeven vs swap-implied breakeven | Spread between the two; arbitrage opportunity when wide |
| BEI box trade | Cross-tenor breakeven trades across the JGBi curve and swap curve |

Limited JGBi issuance and reopening cadence (see [[derivatives/jgb-inflation-linked-bond-jgbi]] for the MoF issuance program) means that JGBi liquidity is much thinner than nominal JGB liquidity; this drives some inflation-hedging demand toward the swap market where execution can be larger and more flexible.

## Public-data boundary

The cited official sources do not publish a current Japan inflation-swap dealer ranking, dealer-level turnover, or named end-user positions. Those claims require a dated venue dataset, transaction disclosure, prospectus, or dealer filing; no ranking is inferred from general market participation.

## Clearing

JPY inflation swap trades are predominantly bilateral. [[securities/japan-securities-clearing-corp|JSCC]] does not extend mandatory clearing to inflation swaps as it does to vanilla IRS. Non-cleared trades are subject to UMR Phase IM requirements for in-scope counterparties and standard CSA collateralization.

## Related

- [[derivatives/INDEX]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/japan-swaption-market]]
- [[derivatives/japan-cms-constant-maturity-swap]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[money-market/INDEX]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[insurance/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Statistics Bureau: CPI data and methodology — https://www.stat.go.jp/english/data/cpi/index.html
- Ministry of Finance: inflation-indexed JGB framework — https://www.mof.go.jp/english/policy/jgbs/topics/bond/10year_inflation/index.htm
- Bank of Japan: 2% price-stability target — https://www.boj.or.jp/en/mopo/outline/target.htm
- Bank of Japan: monetary-policy framework — https://www.boj.or.jp/en/mopo/outline/index.htm
- ISDA: 2008 Inflation Derivatives Definitions — https://www.isda.org/book/2008-isda-inflation-derivatives-definitions/

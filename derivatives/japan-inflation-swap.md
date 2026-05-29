---
title: "Japan inflation swap market (JPY CPI-linked)"
aliases:
  - "japan-inflation-swap"
  - "JPY inflation swap"
  - "CPI swap Japan"
  - "yen inflation swap"
  - "zero coupon inflation swap JPY"
  - "ZCIS JPY"
  - "year-on-year inflation swap JPY"
  - "breakeven inflation JPY"
  - "BoJ 2% inflation target derivatives"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, inflation-swap, CPI, JPY, breakeven-inflation, JGBi, ZCIS, YoY, BoJ-2pct]
status: active
sources:
  - "https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm"
  - "https://www.bis.org/statistics/derstats.htm"
  - "https://www.stat.go.jp/english/data/cpi/index.html"
  - "https://www.mof.go.jp/english/policy/jgbs/topics/Inflation-Indexed_Bonds/index.htm"
  - "https://www.boj.or.jp/en/mopo/outline/qqe.htm"
  - "https://www.isda.org/"
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
| Tenor | 1Y, 2Y, 3Y, 5Y, 7Y, 10Y, 20Y, 30Y |
| Fixed leg | Single payment at maturity: $N \times [(1 + k)^T - 1]$, where $k$ is the fixed inflation breakeven rate and $T$ is tenor |
| Inflation leg | Single payment at maturity: $N \times \frac{\text{CPI}_T}{\text{CPI}_0} - N$, where CPI is the reference CPI index level on the maturity date (with a lag) |
| Net payment | The party paying the inflation leg pays the difference between realized cumulative inflation and the contracted breakeven |
| Reference index | Japan CPI excluding fresh food, published by Statistics Bureau (Ministry of Internal Affairs and Communications); typically lagged 2-3 months |
| Day-count | ACT/365 for fixed-leg accrual; CPI fixing follows the index publication calendar |
| Documentation | ISDA Master Agreement + CSA |

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

| Period | Inflation backdrop | Swap market dynamic |
|---|---|---|
| Pre-2013 (pre-QQE) | Persistent low / mild deflationary CPI | Thin inflation swap market; limited end-user demand |
| 2013–2021 (QQE era; YCC from 2016) | BoJ 2% target; actual CPI mostly below target despite massive easing | Modest swap activity; breakevens persistently below 2%; episodic demand from CPI-linked liability hedgers |
| 2022–2024 (inflation surge) | Imported inflation, energy/yen weakness; CPI ex-fresh-food above 3% peak | Sharp repricing higher of swap breakevens; increased hedging demand from corporates and institutional investors; activity uptick |
| 2024 onward (BoJ normalization) | CPI moderating but settling near or above 2% target | Breakevens approach 2% area; market activity normalizing |

The post-2022 inflation surge was the first sustained above-target inflation episode of the BoJ's 2% target era and meaningfully changed the practical demand for inflation hedging in JPY.

## Pension-Fund and Insurer Demand

End-user demand for JPY inflation swaps comes principally from:

| End-user | Use case | Direction |
|---|---|---|
| Public pension funds (including GPIF) | Hedge inflation-linked liability components on benefit payments | Receive inflation (pay fixed; receive realized inflation) |
| Corporate pension funds (DB) | Inflation-linked benefit liabilities | Receive inflation |
| Life insurers (general account ALM) | Inflation exposure on long-duration policy reserves; tactical inflation hedging | Mixed; receive inflation for liability hedge, pay inflation for tactical positioning |
| Corporates (non-financial) | Hedge inflation exposure on revenue / cost streams (e.g., infrastructure projects with inflation-linked revenue) | Mixed depending on direction of exposure |
| Asset managers | Inflation overlay on fixed-income mandates; relative-value inflation curve trades | Mixed |
| Foreign macro funds | Tactical inflation expression; correlation trades with JGBi, JGB, and global inflation markets | Highly directional |

Japanese pension fund demand for inflation hedging is structurally smaller than UK or US pension fund demand (where inflation-linked benefits are a larger share of liabilities), but residual demand is meaningful and concentrated in specific corporate DB schemes and inflation-sensitive public-sector pensions.

## Relationship to JGBi

The cash-derivative relationship between JPY inflation swaps and the [[derivatives/jgb-inflation-linked-bond-jgbi|JGB inflation-linked bond (JGBi)]] market is structurally important:

| Trade type | Description |
|---|---|
| Inflation-swap vs JGBi asset swap | Buy JGBi, swap the inflation-linked coupon stream against a fixed rate via inflation swap → synthetic nominal exposure to JGB credit / liquidity |
| JGBi-implied breakeven vs swap-implied breakeven | Spread between the two; arbitrage opportunity when wide |
| BEI box trade | Cross-tenor breakeven trades across the JGBi curve and swap curve |

Limited JGBi issuance and reopening cadence (see [[derivatives/jgb-inflation-linked-bond-jgbi]] for the MoF issuance program) means that JGBi liquidity is much thinner than nominal JGB liquidity; this drives some inflation-hedging demand toward the swap market where execution can be larger and more flexible.

## Dealer Franchise

JPY inflation swap market making is concentrated among the major bank-affiliated and global dealers:

| Dealer category | Activity |
|---|---|
| Japanese megabank securities affiliates | MUFG Securities, SMBC Nikko, Mizuho Securities run JPY inflation swap books |
| Independent Japanese securities (Nomura, Daiwa) | Smaller franchise |
| Global investment banks | JPMorgan, Goldman, Citi, Deutsche, BNP, Barclays, HSBC active in cross-border inflation flow and JGBi-swap basis trades |
| Inter-dealer brokers | Limited; principally dealer-to-end-client |

Dealer revenue from JPY inflation swaps is part of the broader inflation / rates desk in IR; not separately disclosed.

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

- BIS: Semi-annual OTC Derivatives Statistics (inflation-linked derivatives by currency).
- Bank of Japan: Japan portion of BIS OTC derivatives survey; inflation-expectations survey publications.
- Statistics Bureau (Ministry of Internal Affairs and Communications): CPI publications and methodology.
- Ministry of Finance: JGBi issuance program and statistics.
- Bank of Japan: 2% Price Stability Target policy framework documentation.
- Japan Securities Clearing Corporation: Clearing scope and product registry.
- ISDA: Standard inflation swap documentation; 2008 ISDA Inflation Derivatives Definitions.
- Financial Services Agency: FIEA framework on OTC derivatives.

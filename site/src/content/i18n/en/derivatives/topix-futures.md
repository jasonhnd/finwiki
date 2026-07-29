---
source: derivatives/topix-futures
source_hash: a2ae1c774d240e08
lang: en
status: machine
fidelity: ok
title: "TOPIX futures (OSE)"
translated_at: 2026-07-29T18:49:00+09:00
---

# TOPIX futures (OSE)

## TL;DR

TOPIX futures are exchange-listed equity-index futures on the Tokyo Stock Price Index (TOPIX). JPX describes TOPIX as an investable, free-float-adjusted market-capitalization-weighted benchmark covering an extensive proportion of the Japanese stock market. The current constituent set must be read from JPX's current component information rather than a fixed count. The futures list on the Osaka Exchange (OSE) and clear at [[securities/japan-securities-clearing-corp|JSCC]]. ^[Source: https://www.jpx.co.jp/english/markets/indices/topix/.]

OSE lists standard TOPIX Futures and mini-TOPIX Futures, as well as current sub-index contracts including TOPIX Core30 Futures and TOPIX Banks Index Futures. Product availability does not establish a user ranking, trading-volume comparison or investor share.

For FinWiki, this entry covers current contract specifications, the methodological comparison with Nikkei 225, an evidence-bounded cash-futures basis framework, the Bank of Japan ETF-policy timeline, sub-index futures, and JSCC margin.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/nikkei-225-futures-options]] for the price-weighted-index peer and [[derivatives/japan-single-stock-options]] for the single-name equity-derivative complement. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; the clearing layer is [[securities/japan-securities-clearing-corp|JSCC]]; the broader [[securities/tokyo-stock-exchange|TSE]] cash-equity market provides the constituent shares.

## Contract Specifications

OSE lists two main TOPIX-linked futures contracts plus several sub-index futures:

The table reflects the current JPX specifications; it removes TOPIX 100 and unspecified sector-index futures that are not listed in JPX's current product catalogue. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/mini-topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-core30futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-banks-index-futures/01.html.]

| Contract | Underlying | Multiplier | Tick | Listed months |
|---|---|---|---|---|
| TOPIX Futures (Standard) | TOPIX | JPY 10,000 × index | 0.5 index points (= JPY 5,000 per tick) | June / December: nearest 10; March / September: nearest 3 |
| mini-TOPIX Futures | TOPIX | JPY 1,000 × index (1/10) | 0.25 index points (= JPY 250 per tick) | Nearest 3 March-cycle quarterly months |
| TOPIX Core30 Futures | TOPIX Core30 | JPY 1,000 × index | 0.5 points (= JPY 500 per tick) | Nearest 3 March-cycle quarterly months |
| TOPIX Banks Index Futures | TOPIX Banks Index | JPY 10,000 × index | 0.1 points | Nearest 3 March-cycle quarterly months |

All contracts cash-settle to the Special Quotation (SQ) on the morning of the second Friday of the contract month, computed from underlying constituent opening prices on SQ day.

Regular trading hours are 08:45-15:45 JST and 17:00-06:00 JST next day for the four contracts above.

## TOPIX vs Nikkei 225: Methodological Difference

The comparison below is limited to index methodology; it does not infer users, sector tilts, liquidity or trading-volume ranks. ^[Sources: https://www.jpx.co.jp/english/markets/indices/topix/; https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225.]

| Aspect | TOPIX | Nikkei 225 |
|---|---|---|
| Published coverage | Extensive proportion of the Japanese stock market; consult JPX's current component information | 225 selected stocks; consult Nikkei's current component information |
| Weighting | Free-float-adjusted market capitalization weighted | Price weighted |
| Index owner | JPX Market Innovation & Research | Nikkei Inc. |
| Futures contract unit | TOPIX × JPY 10,000 for the standard contract | Nikkei 225 × JPY 1,000 for the large contract |

A hedge comparison must map the actual cash basket to each index methodology and measure basis risk. Product design alone does not establish which contract a named investor uses.

## Cash-Futures Basis Framework

A TOPIX cash-futures basis can be measured, but the product pages do not establish its size, direction or the identity of traders:

1. **Cash reference**: use a stated TOPIX cash basket or a currently listed TOPIX-tracking ETF whose benchmark and structure have been verified.
2. **Futures reference**: use the matching TOPIX futures contract month and timestamp.
3. **Carry inputs**: state financing, expected dividends, time to expiry and transaction costs.
4. **Observed basis**: compare the synchronized cash and futures values; do not infer an arbitrage position from a price difference alone.

Authorized participants or market makers may use cash and futures legs where their mandate and disclosures permit, but no actual direction or share is inferred here. See [[securities/japan-market-maker-and-liquidity-provider-landscape|ETF market making]] for the institutional framework.

The Bank of Japan discontinued ETF and J-REIT purchases on March 19, 2024. On September 19, 2025, it decided to sell ETF holdings to the market after operational preparations, at a pace of about JPY 330 billion per year on a book-value basis; the decision also states that the pace may be modified later. These policy facts do not by themselves establish a direction or magnitude for TOPIX basis. ^[Sources: https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240319a.htm; https://www.boj.or.jp/en/mopo/mpmdeci/state_2025/k250919a.htm.]

## Investor-Data Boundary

Investor shares, account types and hedge motives require a named JPX dataset, product and period. This page does not classify life insurers, pension funds, banks, asset managers, securities firms, foreign investors or retail investors by assumed use of TOPIX futures.

## Sub-Index Futures: Core30 and Banks

The following table lists the current TOPIX Core30 and TOPIX Banks index futures alongside the headline TOPIX products. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/topix-core30futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-banks-index-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/index.html.]

| Sub-index contract | Underlying | Contract unit | Tick | Listed months |
|---|---|---|---|---|
| TOPIX Core30 Futures | TOPIX Core30 | JPY 1,000 × index | 0.5 points | Nearest 3 March-cycle quarterly months |
| TOPIX Banks Index Futures | TOPIX Banks Index | JPY 10,000 × index | 0.1 points | Nearest 3 March-cycle quarterly months |

Current activity and investor interest must be read from dated JPX statistics; no liquidity ranking or event-driven demand is inferred.

## Clearing and Margin

The table uses current JPX contract specifications and the JSCC VaR margin route. ^[Sources: https://www.jpx.co.jp/jscc/en/cash/futures/marginsystem/VaR.html; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/mini-topix-futures/01.html.]

| Element | Detail |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]]; novation at execution |
| Margin | Current JSCC VaR method |
| Settlement | Product-specific cash settlement to SQ under current JPX specifications |
| Default management | Governed by current JSCC rules |

JSCC publishes the applicable VaR margin method and current parameters; this page does not assert a fixed offset for every portfolio combination.

## Related

- [[derivatives/INDEX]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/INDEX]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/boj-open-market-operations]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: current TOPIX Futures, mini-TOPIX Futures, TOPIX Core30 Futures and TOPIX Banks Index Futures specifications.
- JPX: current TOPIX description, component-information route and free-float-adjusted market-capitalization methodology.
- Japan Securities Clearing Corporation: current VaR margin method.
- Bank of Japan: March 19, 2024 discontinuation of ETF purchases and September 19, 2025 ETF-disposal decision.

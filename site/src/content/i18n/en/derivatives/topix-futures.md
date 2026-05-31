---
source: derivatives/topix-futures
source_hash: ad870e686022e9b4
lang: en
status: machine
fidelity: ok
title: "TOPIX futures (OSE)"
translated_at: 2026-05-31T03:19:56.423Z
---

# TOPIX futures (OSE)

## TL;DR

TOPIX futures are exchange-listed equity-index futures on the Tokyo Stock Price Index (TOPIX), the JPX-flagship free-float-market-capitalization-weighted index covering all Prime Market (formerly First Section) constituents — roughly 2,000 stocks. They list on the Osaka Exchange (OSE) under Japan Exchange Group (JPX) and clear at [[securities/japan-securities-clearing-corp|JSCC]]. The standard TOPIX Futures contract and the smaller mini TOPIX Futures together serve as the institutional-grade hedge instrument for broad Japan equity-beta exposure.

Compared with the [[derivatives/nikkei-225-futures-options|Nikkei 225 futures]] complex, TOPIX futures have smaller daily volume but a more institutionally weighted user base: domestic pension funds, life insurers, asset managers, and bank ALM desks use TOPIX futures for portfolio-level hedging and tactical positioning because TOPIX better represents the universe held in passive index mandates (especially since the [[insurance/japan-life-insurance-alm-overview|life-insurance ALM]] and pension allocations track TOPIX-style broad-market benchmarks more often than the price-weighted Nikkei 225).

For FinWiki, this entry covers contract specs, the comparison with Nikkei 225 futures, basis-to-ETF arbitrage, sub-index futures (TOPIX Core 30, TOPIX 100, TOPIX Banks), and the institutional flow profile.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/nikkei-225-futures-options]] for the price-weighted-index peer, [[derivatives/japan-single-stock-options]] for single-name equity derivative complement, and [[securities/japan-asset-manager-landscape-matrix]] for the institutional-investor end-user side. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; the clearing layer is [[securities/japan-securities-clearing-corp|JSCC]]; the broader [[securities/tokyo-stock-exchange|TSE]] cash-equity universe is the underlying.

## Contract Specifications

OSE lists two main TOPIX-linked futures contracts plus several sub-index futures:

| Contract | Underlying | Multiplier | Tick | Listed months |
|---|---|---|---|---|
| TOPIX Futures (Standard) | TOPIX (free-float MCap-weighted, ~2,000 Prime stocks) | JPY 10,000 × index | 0.5 index points (= JPY 5,000 per tick) | Mar / Jun / Sep / Dec, plus near months |
| mini TOPIX Futures | TOPIX | JPY 1,000 × index (1/10) | 0.25 index points (= JPY 250 per tick) | Monthly |
| TOPIX Core 30 Futures | TOPIX Core 30 (30 large-caps) | JPY 10,000 × index | 0.5 | Quarterly |
| TOPIX Banks Futures | TOPIX Banks sector index | JPY 10,000 × index | 0.1 | Quarterly |

All contracts cash-settle to the Special Quotation (SQ) on the morning of the second Friday of the contract month, computed from underlying constituent opening prices on SQ day.

Trading hours follow OSE's two-session structure (day session ~08:45–15:15 JST; night session ~16:30–06:00 JST next day), mirroring the [[derivatives/nikkei-225-futures-options|Nikkei 225 futures]] schedule.

## TOPIX vs Nikkei 225: Methodological Difference

The fundamental difference between TOPIX and Nikkei 225 determines who uses which futures:

| Aspect | TOPIX | Nikkei 225 |
|---|---|---|
| Constituents | All Prime Market stocks (~2,000) | 225 selected stocks |
| Weighting | Free-float market capitalization | Price-weighted (price ÷ divisor) |
| Sector tilt | Reflects actual market cap distribution; financials and broad market well-represented | Tech, industrials over-weighted due to high stock prices (e.g., Fast Retailing, SoftBank Group dominate) |
| Tracking benchmark for | Passive index mandates, pension funds, asset manager TOPIX trackers, broad Japan-equity exposure | Domestic retail-flow indicator, foreign macro Japan-beta proxy, headline financial-press index |
| Methodology updates | TSE Restructuring (Prime / Standard / Growth) influences TOPIX weighting policy; periodic free-float review | Periodic Nikkei Inc. reviews; component changes infrequent |

Because TOPIX is the market-cap-weighted broad benchmark, Japanese institutional investors (life insurers, regional banks, pension funds, asset managers running passive mandates) hedge with TOPIX futures rather than Nikkei 225 futures when their underlying holding is a broad-market portfolio. The Nikkei 225 contract, by contrast, attracts more retail and foreign macro positioning where the 225-stock price-weighted shape is acceptable or even preferred for tactical trading.

The two futures are not equivalent hedges for the same cash basket: a TOPIX-tracking portfolio hedged with Nikkei 225 futures retains sector basis risk because the two indices weight constituents very differently.

## Basis to ETF Arbitrage

The TOPIX futures-ETF basis trade is a major institutional and dealer activity:

1. **Cash leg**: TOPIX-tracking ETFs (e.g., NEXT FUNDS TOPIX ETF [1306], TOPIX ETF iShares [1475], Daiwa ETF TOPIX [1305], Nikko TOPIX ETF [1308]) provide physical exposure to the underlying basket.
2. **Futures leg**: TOPIX futures provide synthetic exposure with margin financing.
3. **Basis**: The implied dividend yield, cost of carry, and supply/demand imbalances drive a measurable cash-futures basis (in index points).
4. **Arbitrage**: Authorized participants and ETF market makers run long-ETF / short-futures (or the reverse) to capture basis dislocations.

The trade also intersects with [[securities/japan-market-maker-and-liquidity-provider-landscape|ETF market making]]:

| Direction | When triggered |
|---|---|
| Long ETF / Short Futures (positive basis) | When futures-implied price is above cash (e.g., before ex-dividend dates, when futures-buyer demand is strong) |
| Long Futures / Short ETF (negative basis) | When futures are cheap to cash (e.g., redemption demand on ETFs concentrating supply) |

A persistent driver of TOPIX basis is the BoJ's historical ETF holdings (BoJ purchased TOPIX-linked and Nikkei 225-linked ETFs under monetary policy from 2010 through 2024; the BoJ ETF balance is now in a hold/run-off phase). BoJ's ETF holdings reduce free-float on the underlying TOPIX constituents and affect ex-dividend dynamics at ETF level. See [[money-market/boj-open-market-operations]] for BoJ-operations context.

## Institutional Flow Profile

The TOPIX futures user base is more institutionally weighted than Nikkei 225:

| User category | Use case |
|---|---|
| Life insurers (treasury / equity ALM) | Tactical equity duration adjustment on TOPIX-tracking holdings; overlay strategies |
| Pension funds (GPIF, corporate DB, public-sector) | Rebalancing flow; passive-tracking overlay; transition management around quarterly reviews |
| Asset managers (active and passive) | Cash-equitization on subscription/redemption flows; index-fund tracking error reduction |
| Bank treasury / ALM | Equity-portfolio hedging on cross-shareholding unwind programs |
| Securities firm proprietary | Market making; arb trades vs ETFs and Nikkei futures |
| Foreign institutional | Country-level Japan-beta sizing; macro tactical |
| Retail | Smaller share than in Nikkei mini; mini TOPIX is the main retail-accessible TOPIX contract |

The Government Pension Investment Fund (GPIF) is the world's largest pension fund and a structural participant in Japan equity markets; its TOPIX-linked holdings make TOPIX futures (or TOPIX swaps for very large trades) the natural rebalancing instrument. Corporate cross-shareholding unwinding programs ([[finance/INDEX|finance]] anchor) frequently use TOPIX futures as a transitional hedge before block trades execute.

## Sub-Index Futures: Core 30, 100, Banks

OSE lists narrower sub-index futures:

| Sub-index contract | Underlying | Use case |
|---|---|---|
| TOPIX Core 30 Futures | Top 30 stocks by liquidity/cap | Large-cap Japan-beta isolation; cross-shareholding unwind hedging |
| TOPIX 100 Futures | Top 100 stocks | Mid-large-cap focused hedge |
| TOPIX Banks Futures | TOPIX Banks sector | Bank-sector beta hedge; pair trades against individual banks; macro views on Japan banking |
| TOPIX Sector Indices (other) | Various sectors | Limited liquidity; sector-rotation overlay |

TOPIX Banks Futures historically gained interest during banking-sector regime shifts (e.g., NIRP exit speculation, BoJ policy normalization scenarios). Sub-index liquidity is far thinner than the headline TOPIX contract and Core 30 / Banks contracts trade more episodically.

## Clearing and Margin

| Element | Detail |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]]; novation at execution |
| Margin | SPAN-style portfolio margining; offsets across TOPIX futures, mini, sub-index, and options |
| Settlement | Cash-settled to SQ on second Friday of contract month |
| Default management | Standard JSCC waterfall |

The SPAN portfolio margin approach supports complex multi-leg strategies (TOPIX vs Nikkei spreads, TOPIX vs Core 30, TOPIX futures vs ETF hedges) under one margin computation.

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

- Japan Exchange Group / Osaka Exchange: TOPIX Futures, mini TOPIX Futures, sub-index futures contract specifications.
- JPX: TOPIX index methodology, free-float review schedule, and SQ calculation rules.
- JPX: Monthly trading-volume and investor-category statistics for OSE derivatives.
- Japan Securities Clearing Corporation: SPAN-based margining methodology.
- Bank of Japan: ETF holdings disclosures and balance-sheet statistics.
- Financial Services Agency: FIEA framework on listed derivatives.

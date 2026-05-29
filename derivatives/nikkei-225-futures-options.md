---
title: "Nikkei 225 futures and options (OSE)"
aliases:
  - "nikkei-225-futures-options"
  - "Nikkei 225 futures"
  - "Nikkei 225 options"
  - "OSE Nikkei futures"
  - "Nikkei mini"
  - "日経225先物"
  - "日経225オプション"
  - "Nikkei weekly options"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, equity-derivatives, Nikkei-225, OSE, JPX, futures, options, Globex, weekly-options]
status: active
sources:
  - "https://www.jpx.co.jp/english/markets/derivatives/nikkei225/"
  - "https://www.jpx.co.jp/english/markets/derivatives/options/"
  - "https://www.jpx.co.jp/english/markets/derivatives/trading-volume/"
  - "https://www.jscc.co.jp/en/"
  - "https://www.cmegroup.com/markets/equities/international-indices/nikkei-225.html"
  - "https://www.fsa.go.jp/en/"
---

# Nikkei 225 futures and options (OSE)

## TL;DR

The Nikkei 225 futures and options complex listed on the Osaka Exchange (OSE) under Japan Exchange Group (JPX) is the largest exchange-traded derivative product set in Japan by daily turnover and the canonical hedge instrument for Japanese equity-beta exposure. The complex contains three principal contracts — large Nikkei 225 Futures, Nikkei 225 mini (one-tenth size), and the recently launched Nikkei 225 Micro Futures (further reduced) — plus the Nikkei 225 Options market that spans monthly, quarterly, and weekly expiries. All clear at [[securities/japan-securities-clearing-corp|JSCC]].

A parallel listing of Nikkei 225 futures on CME Globex provides near-24-hour price discovery; the OSE night session and CME-listed Nikkei contract together create overnight liquidity that is a meaningful share of total Nikkei futures activity. Participant mix is roughly split among foreign institutional (high-frequency and macro), Japanese securities firm proprietary desks, foreign HFT, and retail (especially in the mini contract); pure-cash equity hedging by domestic life insurers and pension funds is a smaller but structurally significant slice.

For FinWiki, this entry covers contract specifications, the mini / micro retail layer, weekly options, the OSE / Globex trading-hours dual track, participant mix, and how the complex relates to the [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI volatility index]] and to [[derivatives/topix-futures|TOPIX futures]].

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/topix-futures]] for the JPX-flagship index futures peer, [[derivatives/nikkei-vix-jpx-vi-equivalent]] for the volatility expression of the same options surface, and [[derivatives/japan-single-stock-options]] for the single-name equity option market. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; the clearing layer is [[securities/japan-securities-clearing-corp|JSCC]]; the broader market-infrastructure context is [[securities/japan-market-infrastructure-map]].

## Contract Specifications

OSE lists three Nikkei 225 futures contracts and the Nikkei 225 Options surface:

| Contract | Underlying | Multiplier | Tick | Listed months |
|---|---|---|---|---|
| Nikkei 225 Futures (Large) | Nikkei 225 stock average | JPY 1,000 × index | JPY 10 (= JPY 10,000 per tick) | Mar / Jun / Sep / Dec, plus nearest months |
| Nikkei 225 mini | Nikkei 225 stock average | JPY 100 × index (1/10) | JPY 5 (= JPY 500 per tick) | Monthly, multiple consecutive months |
| Nikkei 225 Micro Futures | Nikkei 225 stock average | JPY 10 × index (1/100) | JPY 5 | Monthly |
| Nikkei 225 Options | Nikkei 225 stock average | JPY 1,000 × index | Premium-tick-scaled | Monthly (third Friday), quarterly, weekly |

All contracts are cash-settled against the Special Quotation (SQ) on the morning of the second Friday of the contract month (so-called "SQ day"). Options are European-style for the standard monthly and weekly series.

## Trading Hours: OSE Day, OSE Night, and CME Globex

The Nikkei futures complex effectively trades around the clock through three overlapping venues:

| Venue / session | Hours (JST, approximate) | Activity profile |
|---|---|---|
| OSE Day Session | 08:45–15:15 | Domestic securities-firm flow; client hedging; intraday HFT. |
| OSE Night Session | 16:30–06:00 (next day) | Foreign macro and HFT activity; reacts to European data, US economic data, FOMC, US equity moves. |
| CME Globex Nikkei 225 (USD- and JPY-denominated) | Near-24-hour | US-overlap pricing; institutional cross-border hedging; provides reference price during US session. |

The OSE night session was extended over multiple rule cycles to capture more of the European and US trading day. CME-listed Nikkei 225 futures (both USD-denominated and JPY-denominated) provide a parallel venue and arbitrage opportunities exist between OSE and CME pricing, especially during gap periods.

For institutions running global equity-vol books, the dual OSE / CME listing means a Japan-equity hedge can be put on at almost any time. For Japanese domestic flow, the OSE night session captures most of the after-hours business; CME volumes are dominated by US-based and global accounts.

## Mini and Micro: The Retail Layer

The Nikkei 225 mini (launched 2006) and Nikkei 225 Micro (launched 2023) contracts scale the standard contract down for smaller participants:

| Aspect | mini | Micro |
|---|---|---|
| Size vs Large | 1/10 | 1/100 |
| Margin requirement | ~1/10 of Large | ~1/100 of Large |
| Primary user base | Active retail; small institutional residual hedging; introductory algorithmic strategies | Retail; entry-level investors; small-account portfolio overlay |
| Daily volume | Frequently exceeds the Large contract on a contract-count basis | Smaller absolute volume; growing |

The mini contract has been a major driver of Nikkei futures activity since its launch, especially among Japanese retail brokers' margin-trading customers and Japanese day-trader populations. The Micro further lowers the entry threshold; its adoption is being watched as a measure of retail equity-derivatives engagement.

Retail access to Nikkei futures is mediated by [[securities/INDEX|securities firms]] offering futures margin trading, including major online brokers like SBI Securities, Rakuten Securities, Matsui Securities, Monex, and au Kabucom Securities (covered in [[securities/japan-online-brokerage-competition]]).

## Weekly Options

Nikkei 225 Weekly Options expand the options surface beyond the standard monthly expiry:

| Aspect | Detail |
|---|---|
| Expiry cycle | Every Friday (with monthly expiries falling on the second Friday) |
| Listed series | Typically two to five weekly expiries listed at any time |
| Style | European; cash-settled to the weekly SQ |
| Use cases | Short-dated tactical positioning around scheduled events (BoJ MPM, FOMC, earnings), gamma scalping, defined-risk option strategies |

Weekly options have grown in adoption among foreign macro funds, dealer prop desks, and sophisticated retail; daily volume in weekly options is now a meaningful share of total Nikkei option turnover. Implied-vol pricing in the weekly series provides a more granular event-vol curve than monthly options alone, and it feeds into the [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI]] computation directly through the underlying option strip.

## Participant Mix

OSE publishes investor-category breakdowns for Nikkei futures and options through its trade statistics. The high-level composition (publicly disclosed in monthly OSE releases):

| Category | Typical share of Nikkei futures volume |
|---|---|
| Foreign investors (institutional, HFT, macro) | Largest single block, frequently 60–70%+ of futures turnover |
| Securities firm proprietary trading | Significant share; market-making and prop |
| Securities firm brokerage flow (institutional client) | Substantial; channels foreign and domestic institutional orders |
| Individual investors (retail) | Concentrated in mini and Micro; meaningful share of mini volume |
| Banks, insurers, pension funds | Smaller direct share; often access via prime brokers |

For options, the participant mix tilts more toward sophisticated institutional and prop accounts because of the higher operational complexity of options market-making and hedging.

The foreign-investor share is a regularly cited statistic for understanding who drives Nikkei futures pricing — and explains the OSE night session's prominence (when foreign accounts overlap with European and US hours).

## Comparison with Other Nikkei-Linked Products

Multiple instruments express Nikkei 225 exposure across cash and derivatives:

| Instrument | Venue | Use case |
|---|---|---|
| Nikkei 225 ETFs (1321 Daiwa, 1330 Nikko, 1320 NEXT FUNDS, etc.) | TSE | Cash-equity exposure; physical-backed; used by buy-and-hold and ETF arbitrage |
| Nikkei 225 Futures (Large, mini, Micro) | OSE | Leveraged exposure; institutional and retail hedging |
| Nikkei 225 Options | OSE | Direction + volatility expression |
| CME Nikkei 225 Futures (USD and JPY) | CME Globex | US-hour pricing; cross-border arbitrage |
| Nikkei 225 Index Futures (SGX) | Singapore Exchange | Asia-overlap pricing |
| Inverse / leveraged ETFs (e.g., 1357, 1570) | TSE | Retail one-day-leverage products |

The OSE / CME / SGX listings together provide near-continuous Nikkei 225 futures pricing globally. ETF and futures arbitrage is a steady source of basis flow; market makers in Nikkei ETFs (see [[securities/japan-market-maker-and-liquidity-provider-landscape]]) routinely run futures hedges.

## Comparison with TOPIX Futures and JPX-Prime 150

[[derivatives/topix-futures|TOPIX futures]] are the JPX-flagship broad-market index futures (covering ~2,000 TSE Prime stocks); Nikkei 225 futures cover the 225-stock price-weighted Nikkei 225 average. The two products serve overlapping but distinct hedging audiences:

| Aspect | Nikkei 225 futures | TOPIX futures |
|---|---|---|
| Universe | 225 stocks; price-weighted | ~2,000 stocks; free-float market-cap weighted |
| Sector tilt | Tech / industrials heavy due to price weighting | Broader, with banks / large-cap industrials reflected at market-cap weight |
| Daily volume | Larger (especially with mini + Micro retail) | Smaller; institutional-dominated |
| Primary users | Retail + foreign macro + Japanese securities prop | Domestic institutional ALM, pension hedging |

For broader equity-vol hedging, JPX has also launched JPX-Prime 150 futures and TSE Mothers (now TSE Growth) futures, with much smaller volumes; the Nikkei 225 / TOPIX pair remains the dominant pair.

## Clearing and Margin

All Nikkei 225 futures and options clear at [[securities/japan-securities-clearing-corp|JSCC]]:

| Element | Detail |
|---|---|
| CCP | JSCC; novation at trade execution |
| Margin methodology | SPAN-style portfolio margining; portfolio offsets across futures, options, and related products |
| Settlement | Cash-settled to SQ (Special Quotation) on the second Friday of the contract month for monthly series; for weekly options, to the weekly Friday SQ |
| Default management | Standard JSCC waterfall (defaulter margin → defaulter contribution → JSCC capital → member fund → further resources) |

The SPAN-based portfolio approach allows Nikkei 225 futures, options, mini, and Micro positions to net under one margin calculation, supporting active option-futures strategies.

## Related

- [[derivatives/INDEX]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[securities/INDEX]]
- [[securities/osaka-exchange]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-online-brokerage-competition]]
- [[exchanges/INDEX]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[JapanFG/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: Nikkei 225 Futures, Nikkei 225 mini, Nikkei 225 Micro Futures, and Nikkei 225 Options contract specifications.
- JPX: Monthly trading-volume statistics and investor-category breakdowns for OSE derivatives.
- Japan Securities Clearing Corporation: Margin methodology and default management for OSE derivatives.
- CME Group: Nikkei 225 Futures (USD-denominated and JPY-denominated) contract pages.
- Financial Services Agency: FIEA framework on listed derivatives and broker-dealer obligations.
- Nikkei Inc.: Nikkei 225 index methodology and Special Quotation calculation.

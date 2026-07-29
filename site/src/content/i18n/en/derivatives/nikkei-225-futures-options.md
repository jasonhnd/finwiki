---
source: derivatives/nikkei-225-futures-options
source_hash: 4eb5b2796afefe66
lang: en
status: machine
fidelity: ok
title: "Nikkei 225 futures and options (OSE)"
translated_at: 2026-07-29T20:12:00+09:00
---

# Nikkei 225 futures and options (OSE)

## TL;DR

The Nikkei 225 futures and options complex listed on the Osaka Exchange (OSE) under Japan Exchange Group (JPX) provides exchange-traded routes to Nikkei 225 equity exposure. The complex contains three futures sizes — large Nikkei 225 Futures, Nikkei 225 mini (one-tenth size), and Nikkei 225 Micro Futures (further reduced) — plus standard and mini Nikkei 225 Options. All clear at [[securities/japan-securities-clearing-corp|JSCC]].

CME Globex also lists Nikkei 225 futures. OSE and CME publish their own schedules, volume and open-interest data; cross-venue activity and participant mix should be compared for a stated period rather than inferred from product availability.

For FinWiki, this entry covers contract specifications, the mini / micro retail layer, weekly options, the OSE trading schedule, participant mix, and how the complex relates to the [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei 225 VI]] and to [[derivatives/topix-futures|TOPIX futures]].

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/topix-futures]] for the JPX-flagship index futures peer, [[derivatives/nikkei-vix-jpx-vi-equivalent]] for the volatility expression of the same options surface, and [[derivatives/japan-single-stock-options]] for the single-name equity option market. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; the clearing layer is [[securities/japan-securities-clearing-corp|JSCC]]; the broader market-infrastructure context is [[securities/japan-market-infrastructure-map]].

## Contract Specifications

OSE lists three Nikkei 225 futures contracts and the Nikkei 225 Options surface:

The contract table uses JPX's current product specifications as of this review; weekly Wednesday / Friday expiries belong to Nikkei 225 mini Options, not the standard Nikkei 225 Options contract. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225mini/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225micro-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225options/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225mini-options/index.html.]

| Contract | Underlying | Multiplier | Tick | Listed months |
|---|---|---|---|---|
| Nikkei 225 Futures (Large) | Nikkei 225 stock average | JPY 1,000 × index | JPY 10 (= JPY 10,000 per tick) | Quarterly March-cycle months; June / December up to 8 years and March / September up to 1.5 years |
| Nikkei 225 mini | Nikkei 225 stock average | JPY 100 × index (1/10) | JPY 5 (= JPY 500 per tick) | Quarterly months plus the nearest three monthly months |
| Nikkei 225 micro Futures | Nikkei 225 stock average | JPY 10 × index (1/100) | JPY 5 (= JPY 50 per tick) | Current JPX contract-month schedule |
| Nikkei 225 Options | Nikkei 225 stock average | Option price × JPY 1,000 | JPY 1 at premiums up to JPY 300; JPY 5 above JPY 300 | Quarterly months plus the nearest eight monthly months |
| Nikkei 225 mini Options | Nikkei 225 stock average | Option price × JPY 100 | Current JPX premium tick schedule | Wednesday and Friday expiries, including the second-Friday monthly series |

Large, mini and micro futures and standard Nikkei 225 Options use the second-Friday SQ cycle described in their specifications. Nikkei 225 mini Options separately provide Wednesday and Friday expiries, with final settlement against the SQ for that expiry.

## Trading Hours: OSE Day, OSE Night, and CME Globex

The OSE hours below are exact current regular-session hours; CME publishes its own session calendar and holiday rules. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html; https://www.cmegroup.com/markets/equities/international-indices/nikkei-225-yen.html.]

| Venue / session | Hours | Activity profile |
|---|---|---|
| OSE Day Session | 08:45-15:45 JST | Domestic and cross-border trading during Japan hours |
| OSE Night Session | 17:00-06:00 JST (next day) | Trading during European and US overlaps |
| CME Globex Nikkei 225 (USD- and JPY-denominated) | See CME product calendar | Parallel cross-border venue |

OSE and CME provide parallel venues with different calendars and contract terms. A cross-venue comparison should align timestamps, currencies and contract months before measuring price differences or activity.

The OSE night session and CME listing create overlapping implementation windows. Actual availability follows each venue's calendar, and any claim about after-hours share or account origin requires dated venue and participant data.

## Mini and Micro: Contract-Size Layer

The Nikkei 225 mini (launched 2006) and Nikkei 225 Micro (launched 2023) contracts scale down the standard contract:

The following table's contract-size ratios and launch dates follow JPX; margin is risk-based and does not mechanically equal the size ratio at every point in time. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/225mini/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225micro-futures/index.html; https://www.jpx.co.jp/jscc/en/cash/futures/marginsystem/VaR.html.]

| Aspect | mini | Micro |
|---|---|---|
| Size vs Large | 1/10 | 1/100 |
| Margin framework | JSCC VaR method | JSCC VaR method |
| Investor composition | See JPX investor-type statistics for the product and period | See JPX investor-type statistics for the product and period |
| Current volume | See JPX daily product statistics | See JPX daily product statistics |

The mini and micro contracts reduce contract size relative to the large contract. Current adoption and investor composition should be read from JPX product and investor-type statistics rather than inferred from contract size.

Retail access depends on the current product menu, account approval and suitability controls of each [[securities/INDEX|securities firm]]. Provider availability should be checked directly rather than inferred from a general online-broker list (see [[securities/japan-online-brokerage-competition]]).

## Weekly Options

The following table shows how Nikkei 225 mini Options expand the surface beyond the standard second-Friday monthly expiry. ^[Source: https://www.jpx.co.jp/english/derivatives/products/domestic/225mini-options/index.html.]

| Aspect | Detail |
|---|---|
| Expiry cycle | Every Wednesday and Friday; contracts other than the second-Friday monthly series are weekly contracts |
| Listed series | Nearest four non-second-Friday Friday expiries, nearest four Wednesday expiries, and nearest three second-Friday months |
| Style | European; cash-settled to the weekly SQ |
| Possible analytical uses | Short-dated event windows, gamma analysis and defined-risk option structures; actual use is not inferred |

The additional Wednesday and Friday expiries allow market participants to isolate shorter event windows. They are not described here as direct inputs to [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei 225 VI]]: Nikkei's published index methodology uses the specified near-term and next-term Nikkei 225 option inputs.

## Participant Mix

OSE publishes investor-category breakdowns for Nikkei futures and options through its trade statistics:

The table is a route map to the published statistics and does not preserve an unsupported fixed 60-70% share. ^[Sources: https://www.jpx.co.jp/english/markets/statistics-derivatives/investor-type/; https://www.jpx.co.jp/english/markets/statistics-derivatives/daily/.]

| Category | Reading approach |
|---|---|
| Foreign investors | Read the current investor-type table for the product and period |
| Securities firms | Includes proprietary and brokerage-mediated activity depending on the published table |
| Individual investors | Compare large, mini and micro contracts separately |
| Banks, insurers and other institutions | Read direct reported activity; intermediated access is not separately inferred here |

Investor-type shares vary by product and period. A reproducible comparison should identify the JPX table, contract, date range and whether the measure is volume or open interest.

## Comparison with Other Nikkei-Linked Products

Multiple instruments express Nikkei 225 exposure across cash and derivatives:

The following table sources venue and product availability to each exchange; ETF examples are product identifiers, not a volume ranking. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/domestic/index.html; https://www.jpx.co.jp/english/equities/products/etfs/issues/01.html; https://www.cmegroup.com/markets/equities/international-indices/nikkei-225-yen.html; https://www.sgx.com/derivatives.]

| Instrument | Venue | Use case |
|---|---|---|
| Nikkei 225 ETFs (1321 Daiwa, 1330 Nikko, 1320 NEXT FUNDS, etc.) | TSE | Verify current issue, benchmark and structure in the TSE list |
| Nikkei 225 Futures (Large, mini, Micro) | OSE | Three contract sizes under current JPX specifications |
| Nikkei 225 Options | OSE | Standard and mini option products |
| CME Nikkei 225 Futures (USD and JPY) | CME Globex | Parallel USD- and JPY-denominated contracts |
| Nikkei 225 Index Futures (SGX) | Singapore Exchange | Verify the current SGX contract page and calendar |
| Inverse / leveraged ETFs (e.g., 1357, 1570) | TSE | Verify current issue and leverage objective in the TSE list |

The listings provide separate venue routes. Cross-venue continuity, basis flow and market-maker hedging require synchronized price, volume and disclosure evidence; they are not inferred from listing availability (see [[securities/japan-market-maker-and-liquidity-provider-landscape]]).

## Comparison with TOPIX Futures and JPX-Prime 150

[[derivatives/topix-futures|TOPIX futures]] reference the free-float-adjusted market-cap-weighted TOPIX, while Nikkei 225 futures reference the 225-stock price-weighted Nikkei 225. The comparison below is methodological rather than a participant or volume ranking. ^[Sources: https://www.jpx.co.jp/english/markets/indices/topix/; https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225; https://www.jpx.co.jp/english/derivatives/products/domestic/topix-futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html.]

| Aspect | Nikkei 225 futures | TOPIX futures |
|---|---|---|
| Universe | 225 selected stocks; price-weighted | TOPIX constituents under the current JPX methodology; free-float-adjusted market-cap weighted |
| Weighting method | Price weighted | Free-float-adjusted market-cap weighted |
| Contract unit | Nikkei 225 × JPY 1,000 (large) | TOPIX × JPY 10,000 (large) |
| Current volume and users | Refer to JPX product and investor-type statistics | Refer to JPX product and investor-type statistics |

JPX also lists JPX Prime 150 futures and TSE Growth Market 250 Index Futures. Their current activity, and any comparison with Nikkei 225 or TOPIX products, should be read from JPX's product and daily-statistics pages.

## Clearing and Margin

All Nikkei 225 futures and options clear at [[securities/japan-securities-clearing-corp|JSCC]]:

The following table uses JSCC's current VaR margin page and the product-specific JPX settlement specifications. ^[Sources: https://www.jpx.co.jp/jscc/en/cash/futures/marginsystem/VaR.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225futures/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225options/01.html; https://www.jpx.co.jp/english/derivatives/products/domestic/225mini-options/index.html.]

| Element | Detail |
|---|---|
| CCP | JSCC; novation at trade execution |
| Margin methodology | Current JSCC VaR method; parameters and permitted offsets follow current JSCC rules |
| Settlement | Product-specific SQ: second-Friday cycle for the large, mini and micro futures and standard options; Wednesday / Friday expiries for mini Options |
| Default management | Governed by current JSCC rules |

Portfolio offsets, where permitted, depend on current JSCC parameters. This page does not assert a fixed offset or netting outcome for every account and position combination.

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
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: Nikkei 225 Futures, Nikkei 225 mini, Nikkei 225 Micro Futures, and Nikkei 225 Options contract specifications.
- JPX: Monthly trading-volume statistics and investor-category breakdowns for OSE derivatives.
- Japan Securities Clearing Corporation: Margin methodology and default management for OSE derivatives.
- CME Group: Nikkei 225 Futures (USD-denominated and JPY-denominated) contract pages.
- Financial Services Agency: FIEA framework on listed derivatives and broker-dealer obligations.
- Nikkei Inc.: Nikkei 225 index methodology and Special Quotation calculation.

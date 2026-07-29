---
source: derivatives/nikkei-vix-jpx-vi-equivalent
source_hash: f7088b6b2ecec84c
lang: en
status: machine
fidelity: ok
title: "Nikkei 225 VI — Japan equity volatility index"
translated_at: 2026-07-29T19:05:00+09:00
---

# Nikkei 225 VI — Japan equity volatility index

## TL;DR

**Nikkei Stock Average Volatility Index (Nikkei 225 VI; 日経平均ボラティリティー・インデックス)** is calculated by Nikkei Inc. from Nikkei 225 futures and options prices on OSE. It estimates expected fluctuation in the Nikkei 225 over a one-month horizon, using near-term and next-term out-of-the-money option prices and interpolation / extrapolation to 30 days. ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://indexes.nikkei.co.jp/nkave/archives/news/20250120E_2.pdf.]

The index itself is a reference value, while OSE lists **Nikkei 225 VI Futures** on it. Those futures are therefore a direct listed route to the index's future level; trading the underlying Nikkei 225 option strip and bilateral volatility derivatives are separate routes.

This entry covers the published index methodology, the OSE-listed futures contract, the distinction between the index and the broader Nikkei 225 option surface, and evidence-bounded comparisons with Cboe VIX products. It does not infer current ETF / ETN availability or institutional positions without a live product list or disclosure.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the equity-volatility cluster. Read it with [[securities/osaka-exchange|大阪取引所 (OSE)]] for the underlying Nikkei 225 option listing venue, [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the JSCC clearing layer, [[derivatives/equity-volatility-hedging-corporates-japan|equity volatility hedging by Japan corporates]] for potential end-user applications, and [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for dealer-franchise context. The [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] provides the BOJ-policy backdrop for reviewing volatility data.

## Why Nikkei 225 VI matters

The public product record supports three distinct layers; it does not establish how a particular investor uses them: ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html.]

1. **Published index measure** — Nikkei publishes a single value derived from the specified Nikkei 225 futures and option inputs;
2. **Direct listed derivative** — OSE lists Nikkei 225 VI Futures under its current product catalogue;
3. **Other analytical or implementation routes** — use of the option strip, OTC instruments or an ETP requires a stated method, current product evidence and user-specific controls.

For Japan, Nikkei 225 VI provides the benchmark and OSE lists futures on it, but the direct listed product set is narrower than the Cboe VIX complex. Bilateral OTC variance / volatility swaps and the underlying Nikkei 225 option strip remain separate implementation routes.

## Index methodology

The following table summarizes Nikkei's current methodology: it uses Nikkei 225 futures and out-of-the-money Nikkei 225 options for the near-term and next-term months, then interpolates or extrapolates to 30 days. ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://indexes.nikkei.co.jp/nkave/archives/news/20250120E_2.pdf.]

| Component | Reading |
|---|---|
| Underlying universe | Out-of-the-money [[derivatives/INDEX|Nikkei 225 put and call options]] listed on [[securities/osaka-exchange|OSE]]. |
| Strikes | OTM strikes retained under Nikkei's published validity and truncation rules |
| Maturities | Near-term and next-term option months, interpolated or extrapolated to 30 days |
| Futures input | Near-term Nikkei 225 futures price establishes the at-the-money reference |
| Formula | The volatility of each option month is calculated under Nikkei's guidebook and then converted to a 30-day index value |
| Dissemination | Nikkei publishes the index in real time |

The 30-day calculation means Nikkei 225 VI is **not** the implied volatility of a single option contract. It combines option prices across strikes and uses near-term and next-term maturities to produce a 30-day measure under Nikkei's published methodology.

### Term structure

Nikkei publishes the 30-day headline index, while the underlying [[derivatives/INDEX|Nikkei 225 option]] surface extends across multiple expiries. A practitioner can construct an implied-volatility term structure from those option expiries for analytical uses such as:

- **Comparing implied volatility across expiries**;
- **Testing changes in the slope of the option-implied term structure**;
- **Structured-product scenario analysis**;
- **Risk-overlay research** for portfolios with Japan-equity exposure.

Contango and backwardation are observable states of a volatility-futures or option-implied term structure, but their frequency and magnitude are empirical questions. Any claim about a particular event window should be tested against Nikkei index history and the relevant OSE contract data rather than assumed from the product design.

## Comparison to Cboe VIX

The comparison table uses each index owner's methodology and OSE's current VI-futures specifications; qualitative liquidity depth is not a fixed volume ranking. ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html; https://www.cboe.com/tradable-products/vix.]

| Dimension | Nikkei 225 VI | Cboe VIX |
|---|---|---|
| **Underlying** | Nikkei 225 options on [[securities/osaka-exchange|OSE]] | S&P 500 options on Cboe |
| **Methodology family** | Published 30-day option-implied methodology | Published near-term option-implied methodology |
| **Index owner / dissemination** | Nikkei Inc. | Cboe Global Markets |
| **Futures (direct)** | OSE Nikkei 225 VI Futures: 8 serial months, JPY 10,000 multiplier, 0.05-point tick | Cboe VIX futures |
| **Options on the index** | No OSE Nikkei 225 VI options in the current JPX product catalogue | Cboe VIX options |
| **Primary option input venue** | Osaka Exchange | Cboe options market |

The verified structural difference is product breadth: OSE lists Nikkei 225 VI Futures, while Cboe lists both VIX futures and VIX options. Potential implementation routes include the OSE future, the underlying Nikkei 225 option strip and documented OTC instruments; actual use depends on mandate, liquidity, tenor and basis risk.

## ETF and ETN verification

TSE's live ETF and ETN issue lists, together with each issue's prospectus, are the authoritative sources for deciding whether a currently listed product tracks Nikkei 225 VI, a futures index, or another volatility benchmark. A generic product-family description is not evidence that a particular issue remains listed.

Potential implementation routes, subject to mandate, liquidity and suitability, include:

1. **OSE Nikkei 225 VI Futures**;
2. **Direct Nikkei 225 option strip** on OSE, with an explicitly documented construction across strikes;
3. **Bilateral volatility derivatives**, where documented and available from an authorised counterparty;
4. **A current TSE-listed product**, only after its live listing and benchmark are verified.

## Event-study boundary

Nikkei's index series, BOJ decisions and MOF intervention records can be aligned to test event hypotheses. The following table states measurement questions only; the cited product pages do not support a preset direction, magnitude or reversion speed. ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.boj.or.jp/en/mopo/mpmdeci/index.htm; https://www.mof.go.jp/english/policy/international_policy/reference/feio/index.html.]

| Event window | Measurement question |
|---|---|
| **BOJ monetary-policy meeting** | Define the window and compare pre- and post-decision index observations. |
| **BOJ policy change** | Classify the dated decision, then measure direction, magnitude and persistence. |
| **MOF-directed FX intervention, with BOJ acting as agent** | Align official intervention dates with index observations; direction and magnitude require dated market data. |
| **Earnings calendar** | Define the constituent and date sample, then test whether the index distribution differs. |
| **Cboe VIX move across time zones** | Align timestamps and test co-movement without assuming an opening gap or intraday reversal. |
| **Geopolitical event** | Define events ex ante and measure the index path against a stated control window. |

Mean reversion, carry and event sensitivity must be measured over a stated sample and instrument. Nikkei's index page and BOJ's decision calendar provide inputs for such a study, but they do not establish a universal strategy return or a single dominant sizing variable.

## Review questions by user type

The following table lists review questions derived from the index and futures design, not disclosed client positions or market-share rankings. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html; https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi.]

| User type | Evidence-bounded review question |
|---|---|
| **Domestic life insurer / pension** | Does a named public disclosure use the index as a market indicator or research input, and does it separately identify any [[derivatives/INDEX|Nikkei 225 put]] or OTC hedge? |
| **Foreign macro hedge fund** | Does a dated disclosure identify directional, relative-value, term-structure or tail-hedge use, with the instrument and period stated? |
| **Domestic AM (long-only)** | Does a named fund document use of the index in risk reporting, portfolio construction or a hedge mandate? |
| **Retail investor** | Access, if any, depends on the current listed-product set, broker availability and suitability controls. |
| **Structured-product desk** | Does a dated product document identify the index or its option inputs in valuation, payoff or hedge documentation? |
| **Dealer-bank desk** | Does a public disclosure identify use in volatility-surface monitoring, valuation or risk management? |

## Historical review windows

Nikkei publishes historical index data that can be used to test the following public event windows; the table does not assign unsupported peak values or causal attribution. ^[Sources: https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225vi; https://www.boj.or.jp/en/mopo/mpmdeci/index.htm.]

| Episode | Nikkei 225 VI review window |
|---|---|
| **Global financial crisis (2008-2009)** | Compare the published index series around major global-credit events. |
| **Tōhoku earthquake (March 2011)** | Review the index window around the earthquake and subsequent market sessions. |
| **QQE-era policy decisions (2013 onward)** | Align index observations with dated BOJ decisions before testing policy-event hypotheses. |
| **COVID-19 onset (March 2020)** | Compare Nikkei 225 VI and Cboe VIX with consistent timestamps and currencies. |
| **BOJ YCC adjustments (2022-2024)** | Use the BOJ decision archive to define event windows; measure rather than assume direction or persistence. |
| **Post-YCC policy period** | Treat any change in the index distribution as a testable sample-dependent result. |

These episodes are candidate **review windows**, not predefined regimes. Classification, sampling, timestamps and control windows must be stated before a historical-volatility or backtest result is interpreted. None of the reference points establishes a forward-looking price path.

## Detailed listed product family

The following table limits the currently confirmed direct listed derivative to OSE Nikkei 225 VI Futures; current TSE ETP availability must be checked against the live TSE product list rather than inferred from generic structures. ^[Sources: https://www.jpx.co.jp/english/derivatives/products/vi/225-vi-futures/01.html; https://www.jpx.co.jp/english/equities/products/etns/issues/01.html; https://www.jpx.co.jp/english/equities/products/etfs/issues/01.html.]

| Product type | Current evidence-bound description |
|---|---|
| **Nikkei 225 VI Futures** | OSE-listed futures; 09:00-15:45 and 17:00-19:00 JST, 8 nearest serial months, JPY 10,000 multiplier and 0.05-point tick |
| **Nikkei 225 option strip** | Listed OSE options used in the index calculation; a separate replication route rather than a futures contract |
| **TSE-listed volatility ETPs** | Verify current issue and benchmark in the live ETF / ETN list before asserting availability |

The table deliberately leaves TSE volatility products as a live-verification item. No current issue, assets-under-management figure or investor-access conclusion should be inferred from historical product families.

## Potential pension and insurance applications

Nikkei 225 VI may be considered as a market indicator or research input for a portfolio with Japan-equity exposure. Possible analytical applications include scenario design, volatility monitoring and comparison with option-based hedges. Actual use by a pension fund or insurer must be supported by that institution's public disclosure; the index methodology alone does not establish positions, trigger rules, regulatory-capital treatment or dealer-flow importance.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/swap-execution-facility-japan]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[financial-regulators/japan-exchange-group]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[INDEX|FinWiki index]]

## Sources

- Nikkei Indexes, Nikkei 225 VI profile, calculation outline, and real-time dissemination.
- JPX / OSE, Nikkei 225 VI Futures contract specifications.
- JPX / TSE, current ETF and ETN issue lists.
- Cboe, VIX methodology and tradable-products reference (comparative basis only).
- FSA, supervisory framework for listed and OTC derivatives under FIEA.

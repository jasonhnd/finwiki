---
title: "Nikkei VIX / JPX-VI — Japan equity volatility index"
aliases:
  - "nikkei-vix-jpx-vi-equivalent"
  - "JPX-VI"
  - "Nikkei VIX"
  - "Nikkei 225 Volatility Index"
  - "日経平均ボラティリティー・インデックス"
  - "日経VI"
  - "Japan VIX equivalent"
  - "Nikkei implied volatility index"
  - "derivatives/nikkei-vix-and-volatility"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, equity-vol, volatility-index, JPX-VI, Nikkei-225, options, ETF, ETN, BOJ]
status: active
sources:
  - "https://www.jpx.co.jp/english/markets/indices/jpx-vi/"
  - "https://www.jpx.co.jp/english/markets/derivatives/"
  - "https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225"
  - "https://www.jpx.co.jp/english/markets/derivatives/options/"
  - "https://www.jscc.co.jp/en/"
  - "https://www.cboe.com/tradable_products/vix/"
  - "https://www.fsa.go.jp/en/"
---

# Nikkei VIX / JPX-VI — Japan equity volatility index

## TL;DR

**JPX-VI (日経平均ボラティリティー・インデックス, the Nikkei 225 Volatility Index, often called the "Nikkei VIX")** is the Japan analogue of the CBOE VIX. It is a model-free implied-volatility index computed from out-of-the-money [[derivatives/INDEX|Nikkei 225 options]] listed on [[securities/osaka-exchange|大阪取引所 (OSE)]] and disseminated through JPX. The methodology is a **30-day constant-maturity implied volatility** derived from a near-term / next-term option strip, analogous to the VIX 2003 methodology, but adapted to OSE's Nikkei 225 option expiry calendar and tick conventions.

JPX-VI matters because it is the only **publicly disseminated, exchange-published** measure of Japan-equity implied volatility — used by domestic asset managers for risk-overlay sizing, by foreign macro funds as the "fear gauge" for Japan equity beta, and by structured-product desks as the input to volatility-linked retail and institutional payoffs. It is **not directly tradable**: hedging JPX-VI exposure requires either trading the underlying [[derivatives/INDEX|Nikkei 225 option]] strip, the small set of JPX-VI-linked ETF/ETN products, or proxy-hedging via CBOE VIX futures (with material basis risk).

This entry covers: index methodology and term structure; comparison to CBOE VIX; the JPX-VI-linked ETF / ETN product set; mean-reversion behavior around BOJ monetary-policy events and intervention episodes; and the structural reason Japan's equity-vol market remains **less liquid and more dealer-dependent** than the US VIX complex.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the equity-volatility cluster. Read it with [[securities/osaka-exchange|大阪取引所 (OSE)]] for the underlying Nikkei 225 option listing venue, [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the JSCC clearing layer, [[derivatives/equity-volatility-hedging-corporates-japan|equity volatility hedging by Japan corporates]] for the end-user side, and [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for the dealer-franchise economics that explain why the JPX-VI product complex is structurally narrower than VIX. The [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] gives the BOJ-policy backdrop that drives implied-vol regime shifts.

## Why JPX-VI matters

A volatility index serves three functions in any equity-derivatives ecosystem:

1. **Pricing benchmark** — single number summarizing the implied-vol surface for the major equity index;
2. **Risk-overlay input** — asset managers and pension funds use it for VaR scaling, vol-target portfolio construction, and tail-risk hedging triggers;
3. **Tradable instrument** — VIX futures, VIX options, and VIX ETPs in the US allow direct vol speculation and hedging.

For Japan, JPX-VI delivers (1) and (2) well but only **partially** delivers (3) — the product set tradable directly off JPX-VI is structurally smaller than the CBOE VIX complex, and a meaningful share of "Japan equity vol trading" still routes through bilateral OTC variance / volatility swaps with dealer banks via [[derivatives/dealer-bank-derivatives-revenue-mix|equity derivatives desks at the megabank securities arms and foreign IBs]]. This asymmetry is the central structural fact for Japan equity vol.

## Index methodology

JPX-VI follows a **model-free implied-volatility methodology** in the same family as the CBOE VIX 2003 revision:

| Component | Reading |
|---|---|
| Underlying universe | Out-of-the-money [[derivatives/INDEX|Nikkei 225 put and call options]] listed on [[securities/osaka-exchange|OSE]]. |
| Strikes | All OTM strikes with non-zero bid (subject to JPX inclusion rules). |
| Maturities | Near-term and next-term option months (rolled per JPX-published rules); blended to a constant 30-day maturity. |
| Risk-free rate | Yen risk-free curve (post-LIBOR: [[derivatives/japan-interest-rate-derivatives-overview|TONA-referenced OIS]] discounting). |
| Formula family | Variance-swap fair-strike approximation: integrate option prices across strikes, weight by 1/K², annualize to 30-day variance, take square root. |
| Dissemination | JPX publishes the index in real time during OSE trading hours; daily official close also disseminated. |

The 30-day constant-maturity rule means JPX-VI is **not** the implied vol of any single option contract — it is a strip-weighted aggregate. This is the same property that makes the US VIX a "model-free" index, and is the reason JPX-VI tends to be more stable than any single-strike implied vol but still spikes during stress events.

### Term structure

JPX publishes the 30-day headline JPX-VI, but the underlying [[derivatives/INDEX|Nikkei 225 option]] surface extends across multiple expiries. The **JPX-VI term structure** — the implied-vol curve across 1-month, 3-month, 6-month, and longer expiries — is the canonical input for:

- **Calendar spread trading** (selling rich front-month vol vs buying back-month);
- **Variance-swap pricing** by dealer desks;
- **Structured-product hedging** for retail volatility-linked notes;
- **Risk-overlay timing** for institutional vol-target portfolios.

In normal regimes, JPX-VI term structure is in **contango** (back months > front month), consistent with the empirical mean-reversion property of equity vol. During stress events — particularly BOJ-policy surprises, US-VIX contagion episodes, or sharp JPY appreciation — the term structure typically inverts into **backwardation** (front > back), and front-month JPX-VI spikes 50-200% intraday.

## Comparison to CBOE VIX

| Dimension | JPX-VI | CBOE VIX |
|---|---|---|
| **Underlying** | Nikkei 225 options on [[securities/osaka-exchange|OSE]] | S&P 500 options on CBOE |
| **Methodology family** | Model-free 30-day implied vol | Model-free 30-day implied vol (2003 methodology) |
| **Real-time dissemination** | JPX during OSE trading hours | CBOE during US trading hours |
| **Futures (direct)** | Limited / discontinued history (see counterpoints) | CBOE VIX futures — deep, liquid |
| **Options on the index** | Not actively listed | CBOE VIX options — deep |
| **ETP product depth** | Narrow set of JPX-VI ETF / ETN | Very deep (VXX, UVXY, SVXY, VIXY, etc.) |
| **Typical normal-regime level** | Low-to-mid teens (low 20s in heightened periods) | Low-to-mid teens (similar regime) |
| **Stress-event spikes** | 40-60+ during crises; faster mean reversion | 40-80+ during crises |
| **Mean reversion half-life** | Days-to-weeks; mean-revert faster than US in many regimes | Days-to-weeks |
| **Trading-hours overlap** | Asia day session (Tokyo) | US session (Eastern Time) |
| **Correlation to other vol indices** | Positive but imperfect with CBOE VIX; co-moves during global risk-off | Anchor for global equity vol |

The structural difference that matters most: **CBOE VIX has a deep tradable derivatives ecosystem on the index itself** (VIX futures, VIX options, vol ETPs), while JPX-VI is primarily a **published index for reference and ETP-tracking** with a thinner direct-vol derivative complex. This means a Japan-equity macro fund that wants to short Japan vol typically does so via OTC variance swaps with dealer desks, via selling the underlying [[derivatives/INDEX|Nikkei 225 option]] strip directly, or via a CBOE VIX overlay with basis risk — rather than via a "JPX-VI future" of comparable depth to VIX futures.

## ETF and ETN products

A small set of JPX-VI-linked exchange-listed products trades on [[securities/tokyo-stock-exchange|TSE]]. These are structurally:

- **ETFs / ETNs that track JPX-VI futures** (where available) or proxy-tracking strategies on the underlying option surface;
- **Inverse and leveraged variants** in some product families (subject to JPX listing rules and FSA disclosure);
- **Time-decay sensitive** — like all vol-ETPs globally, term-structure contango imposes a structural cost on long-vol products.

The product set is materially smaller than the US VIX ETP complex. The largest Japan vol-ETP AUM is a fraction of the largest US vol-ETPs, which limits the liquidity and tracking quality available to a retail or smaller-institutional Japan-vol trader.

For an institutional client wanting larger Japan-vol exposure, the practical route is:

1. **OTC variance / volatility swap** with a dealer bank ([[securities-firms/nomura-hd|Nomura]], [[securities-firms/goldman-sachs-japan|GS Japan]], [[securities-firms/morgan-stanley-japan|MS Japan]], [[foreign-financial-institutions/jpmorgan-japan|JPM Japan]], [[foreign-financial-institutions/citigroup-japan|Citi Japan]], [[securities-firms/mizuho-securities|Mizuho Securities]], [[securities-firms/smbc-nikko|SMBC Nikko]]);
2. **Direct Nikkei 225 option strip** on OSE, replicating the vol exposure across strikes;
3. **CBOE VIX proxy** with basis-risk hedging on the JPX-VI vs VIX correlation.

## Mean reversion and BOJ events

JPX-VI has a documented empirical property: **faster mean reversion than CBOE VIX** in many regimes, and **distinctive spike-and-collapse patterns around BOJ events**. The pattern shape:

| Event type | Typical JPX-VI behavior |
|---|---|
| **BOJ monetary-policy meeting (no surprise)** | Modest pre-meeting drift up; post-meeting drift down as event vol clears. |
| **BOJ policy surprise (rate / YCC / asset-purchase shift)** | Sharp intraday spike (often 20-50% same-day move); spread compression on the option surface; backwardation in the term structure for days. |
| **MOF / BOJ FX intervention** | Indirect spike via JPY equity-correlation channel; spike often smaller than for direct equity-news shocks. |
| **Earnings season concentration (Apr / May, Oct / Nov)** | Persistent elevated level; rapid intraday mean reversion within each session. |
| **US-VIX contagion (overnight)** | Open-gap spike at OSE morning session; partial mean reversion intraday if US risk-off does not propagate further. |
| **Geopolitical / regional shock (e.g. North Asia geopolitics)** | Sustained elevated regime; slow mean reversion. |

The fast mean reversion is a structural feature dealers exploit: short-vol carry strategies in Japan have historically had attractive Sharpe ratios in calm regimes, but with episodic blow-up risk concentrated around BOJ-policy surprise dates (a published calendar event, which the dealer franchise sizes around).

For a Japan asset manager running a [[derivatives/equity-volatility-hedging-corporates-japan|vol-overlay program]], the BOJ calendar is the single most important input to overlay sizing — even more than the standalone JPX-VI level, because the regime shift on a BOJ-surprise day can dominate weeks of carry.

## Use cases by client type

| Client | Use case |
|---|---|
| **Domestic life insurer / pension** | Risk-overlay input for VaR sizing, tail-hedge triggering, and vol-target sleeve construction. Underlying hedges executed via [[derivatives/INDEX|Nikkei 225 puts]] or OTC put spreads at dealer banks. |
| **Foreign macro hedge fund** | Direction trade on Japan vs US vol relative-value; calendar trades along JPX-VI term structure; tail-hedge for Japan-equity beta. |
| **Domestic AM (long-only)** | Reference index for portfolio-risk disclosure; some flow into vol-target / risk-parity sleeves. |
| **Retail investor (via ETP)** | Direct directional exposure to Japan vol via the listed ETF / ETN; small share of retail equity-product activity. |
| **Structured-product desk** | Pricing input for vol-linked retail notes, principal-protected with vol exposure, and trigger-based structured equity products. |
| **Dealer-bank desk** | Real-time vol surface management; calibration anchor for OTC variance swaps and option-book Greeks. |

## Historical regime markers

JPX-VI (and its predecessor implied-vol indices on the Nikkei surface) has gone through several distinct regime episodes that are useful reference points for any vol analysis:

| Episode | JPX-VI behavior |
|---|---|
| **Global financial crisis (2008-2009)** | Sustained elevated regime — Japan vol behaved similarly to global equity vol, with multi-month elevated readings; Lehman week saw historic spike levels. |
| **Tōhoku earthquake (March 2011)** | Sharp spike in the days following the earthquake and Fukushima incident; sustained elevated for several weeks before mean-reversion as policy response stabilized markets. |
| **Abenomics launch and QQE era (2013 onward)** | Generally lower base-level vol as BOJ asset-purchase regime suppressed equity vol; episodic spikes around China devaluation episodes (Aug 2015), BOJ negative-rate introduction (Jan 2016), Brexit (Jun 2016). |
| **COVID-19 onset (Mar 2020)** | Historic spike to crisis-regime levels along with CBOE VIX; faster mean-reversion than US VIX in the recovery phase. |
| **BOJ YCC tweaks (2022-2024)** | Each adjustment of the BOJ yield-curve-control band — Dec 2022, July 2023, subsequent steps — generated discrete spikes followed by partial reversal as the market re-priced policy expectations. |
| **BOJ rate-policy normalization onset** | Post-YCC and on the path toward eventual rate-policy normalization, JPX-VI regime adjusted to a higher base level reflecting policy-uncertainty risk premium. |

These episodes are useful for **regime classification** in any historical-vol or backtested-strategy analysis on Japan equity vol. None of these reference points should be cited as price-action commentary in any forward-looking trading context — they are publicly visible regime markers in a publicly disseminated index.

## Detailed product family — JPX-VI-linked ETP

Public-source observation on the JPX-VI-linked exchange-listed product family:

| Product type | Structure |
|---|---|
| **Long JPX-VI futures-based ETP** | Holds a rolling position in JPX-VI futures (where listed) or proxy-replicating the strip; tracks JPX-VI levels but suffers structural roll-cost in contango (front-month richer than spot). |
| **Inverse JPX-VI ETP** | Inverse-linked product replicating short vol exposure; benefits from contango term-structure carry; carries asymmetric downside in vol-spike regimes (historic global precedent: US XIV-2018 unwind). |
| **Leveraged JPX-VI ETP** | 2x or similar leveraged exposure to vol changes; subject to daily-rebalancing erosion if vol is choppy. |
| **VIX-linked / cross-VIX ETP (where applicable)** | Some Japan-listed products provide exposure to US VIX rather than JPX-VI directly, given the broader US VIX futures liquidity. |

The JPX-VI ETP set is materially **smaller in AUM** than the US VIX ETP complex. Retail and small-institutional access to direct JPX-VI exposure is therefore narrower than US-equivalent access to VIX-linked products. This is one of the structural reasons Japan equity vol trading is concentrated at the institutional dealer-mediated tier rather than spread across a deep retail ETP layer.

## Pension and insurance use of JPX-VI

Japanese life insurers ([[finance/japan-listed-financial-groups-investable-universe|listed life insurers]] and the major non-listed mutual life insurers) and the corporate / public pension system (GPIF and corporate DB / DC pension plans) carry **trillion-yen-scale Japan equity exposure** through their domestic equity allocations. JPX-VI plays multiple roles in their risk management:

- **VaR / ES sizing input** for regulatory-capital reporting (insurers under ICS / J-SAM solvency frameworks; banks under Basel for equity-position risk);
- **Tail-hedge triggering** — some institutional vol-overlay programs use JPX-VI threshold rules (e.g. "buy puts when JPX-VI exceeds X percentile") to systematically hedge equity exposure during stress regimes;
- **Vol-target sleeve construction** — risk-parity and vol-target portfolio strategies adjust Japan-equity allocation inversely to JPX-VI level, increasing exposure when vol is low and reducing when vol is high;
- **Asset-liability matching adjacency** — for insurers running long-dated equity exposure backing long-duration liability books, JPX-VI is part of the input set for ALM scenario analysis;
- **Counterparty discussion benchmark** — JPX-VI is the lingua franca for institutional discussions with dealer banks about equity-derivative hedging needs.

The pension and insurance institutional flow is one of the **structurally important drivers of Japan equity-derivative dealer franchise revenue** — see [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for the dealer-side economic flow that this client tier creates.

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

- JPX, JPX-VI index methodology, calculation rules, and real-time dissemination pages.
- JPX, derivatives market — Nikkei 225 options contract specifications.
- Nikkei Indexes, Nikkei 225 index profile.
- JPX, options market overview (OSE listed options).
- JSCC, clearing scope for listed derivatives and OTC equity derivatives where applicable.
- CBOE, VIX methodology and tradable-products reference (comparative basis only).
- FSA, supervisory framework for listed and OTC derivatives under FIEA.

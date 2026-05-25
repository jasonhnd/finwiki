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
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
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

Single-stock options (個別証券オプション / Securities Options) on the Osaka Exchange (OSE) under Japan Exchange Group (JPX) are exchange-listed options on selected individual Japanese stocks. Despite OSE listing options on ~150 large-cap names at any time, the actual liquidity is structurally limited compared with the United States: daily turnover concentrates in a handful of high-vol names and remains a small fraction of the volume seen on equivalent US single-stock option contracts. OSE single-stock options clear at [[securities/japan-securities-clearing-corp|JSCC]].

The structurally limited single-stock option market in Japan reflects multiple factors: a smaller retail option-trading culture than the US, the dominance of [[derivatives/structured-product-eb-knockin-japan-retail|structured EB / Knock-in retail notes]] as the equity-vol distribution channel rather than direct option trading, and a market-maker landscape that has historically not been as deep as the US listed-option ecosystem. Post-2022, issuer-side hedging activity around structured products and corporate buyback / share-cancellation hedging has driven incremental flow, but the single-stock option market remains structurally much shallower than the US Cboe/Nasdaq-PHLX/NYSE Arca/MEMX listed option ecosystem.

For FinWiki, this entry covers contract specs, the liquidity-reality comparison with US single-stock options, the role of OTC equity options for institutional flow, the post-2022 issuer-side hedging developments, and the structural reasons single-stock option depth has not developed.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/nikkei-225-futures-options]] for the index-option peer that dominates exchange-traded Japan equity-vol flow, [[derivatives/topix-futures]] for the broader index-derivatives context, and [[derivatives/structured-product-eb-knockin-japan-retail]] for the retail-distribution channel that absorbs much of the equity-vol demand. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; clearing at [[securities/japan-securities-clearing-corp|JSCC]].

## Contract Specifications

OSE Securities Options have the following standard specs:

| Element | Detail |
|---|---|
| Underlying | Individual listed stocks (selected by OSE based on liquidity, market cap, and free-float criteria) |
| Number of underlyings | ~150 large-cap Japanese stocks at any time; subject to periodic addition / removal |
| Multiplier | 100 shares per contract |
| Style | European-style exercise |
| Settlement | Cash-settled to the Special Quotation (SQ) of the underlying on the morning of the second Friday of the contract month |
| Expiry cycle | Monthly (typically nearest two months + selected quarterly months listed) |
| Tick size | Premium-tick varies by underlying price |
| Trading hours | OSE day session and night session (limited night session for single-stock options) |

European-style + cash-settled (not physical-delivery) is a key difference from US single-stock options, which are American-style + physically-delivered. The OSE European/cash-settled convention simplifies margining and avoids assignment risk for short positions but reduces the "real option" content vs the American-style US contract.

## Liquidity Reality

Despite the ~150 listed names, daily volume is highly concentrated:

| Liquidity tier | Names | Profile |
|---|---|---|
| Active tier (handful of names) | High-vol large-caps with retail and institutional interest (e.g., SoftBank Group, Toyota, fast-movers around earnings, banks) | Visible bid-ask, occasional block transactions |
| Marginal tier | Most listed names | Sporadic transactions; wide bid-ask; market makers post but liquidity is thin |
| Effectively dormant tier | Long-tail listed names | Very few or no transactions on most days |

Comparison with the US single-stock option market:

| Aspect | OSE Securities Options | US single-stock options (Cboe / NASDAQ / NYSE) |
|---|---|---|
| Underlying universe | ~150 stocks | ~3,000+ stocks across multiple exchanges |
| Daily option volume (aggregate) | Modest; sub-million contracts industry-wide | Tens of millions of contracts daily |
| Retail participation | Very limited | Major driver (post-Robinhood) |
| Market-maker depth | A handful of dedicated market makers | Dozens of major makers; tight competition |
| Style | European, cash-settled | American, physical |
| Multi-exchange competition | Single venue (OSE) | Many competing exchanges; complex SOR routing |

The depth gap is large and persistent. Institutional Japan equity-option flow that cannot be transacted on OSE is typically done OTC bilaterally with dealer banks (see [[derivatives/dealer-bank-derivatives-revenue-mix]] for the dealer-franchise revenue side).

## Why Liquidity Is Limited (Structural Factors)

Several structural reasons explain the shallower OSE single-stock option market:

1. **Retail option culture**: Japanese retail equity investors lean heavily toward margin trading (信用取引), CFD / FX-margin trading (see [[derivatives/retail-fx-margin-trade-japan]]), and structured retail bonds (see [[derivatives/structured-product-eb-knockin-japan-retail]]) rather than direct option trading. The cultural and regulatory drift has favored those channels over single-stock options.
2. **Structured product distribution**: EB notes, knock-in notes, and other equity-linked structured products distributed via [[securities/japan-online-brokerage-competition|securities firms]] and [[banking/INDEX|bank retail]] channels absorb a meaningful share of retail equity-vol demand without the customer ever touching an option contract.
3. **Market-maker economics**: Single-stock option market making in Japan has historically faced thinner two-sided flow than the US, limiting how much capital dedicated makers commit. The chicken-and-egg problem (no flow → no market makers → no flow) has persisted.
4. **Tax treatment**: Japanese tax treatment for individual investors trading listed options is less favorable than for some other equity instruments, dampening retail interest.
5. **Pricing transparency**: Wider bid-ask spreads and lower transparency vs the US make the OSE contract less attractive even for sophisticated retail.

The result: a listed single-stock option market exists but functions more as a niche institutional and structured-product hedging venue than as a major retail / institutional speculative arena.

## OTC Single-Stock Options

For institutional flow that cannot be transacted on OSE, dealer banks offer OTC single-stock options bilaterally:

| Use case | Typical structure |
|---|---|
| Block hedging on cross-shareholding unwind | OTC put or collar on specific name; tailored size and tenor |
| Corporate buyback execution (TOSTNeT, ToSTNeT-3 large-block) | Synthetic forward / collar to manage execution price |
| Structured-note hedging | Dealers hedge issued EB / Knock-in note risk via OTC options or futures on the underlying |
| Sale of large strategic holding | Multi-leg OTC options to defer recognition or manage market impact |

OTC single-stock options are documented under ISDA Master Agreement and CSA. Counterparty risk and collateral terms drive a non-trivial bid-ask vs the equivalent listed contract (when one exists).

## Post-2022 Issuer-Side Hedging Developments

Several trends have driven incremental single-stock option flow since 2022:

1. **Cross-shareholding unwind acceleration**: TSE's market restructuring (Prime / Standard / Growth) and intensified focus on capital efficiency and corporate-governance reforms have pushed Japanese corporates to unwind cross-shareholdings. Bank securities affiliates (MUFG Securities, SMBC Nikko, Mizuho Securities) execute these unwinds and use single-stock options / OTC collars to manage execution risk.
2. **Buyback program execution**: Increased share-buyback volume in Japan has created hedging demand from securities firms running buyback mandates.
3. **Structured-product issuance volume**: EB / Knock-in note volumes through [[derivatives/structured-bond-japan-retail-issuance|retail structured channels]] have grown; issuer-side dealer hedging on the underlying names creates flow into OSE single-stock options where available and OTC otherwise.
4. **Family-office and HNW segment growth**: Japan's wealth-management segment has slowly increased option-using strategies (covered call, cash-secured put) for HNW clients, particularly via [[securities/japan-prime-brokerage-and-institutional-financing|prime-brokerage]] channels.

These developments add flow but have not transformed the market into a US-style retail-driven listed option market.

## Clearing and Margin

| Element | Detail |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]] |
| Margin | SPAN-style portfolio margining; can offset against related products (futures, ETFs) in some cases |
| Settlement | Cash-settled to SQ; no physical delivery risk on short positions at expiry |
| Default management | Standard JSCC waterfall |

European-style + cash-settled materially reduces operational complexity at expiry compared with American-style physical-delivery products, but limits some option strategy variants (e.g., early exercise on deep-ITM American puts before ex-dividend).

## Comparison with US Single-Stock Options Depth

The depth gap with the US is best illustrated by stock-level coverage:

| US example | Daily option volume profile |
|---|---|
| Apple (AAPL) | Hundreds of thousands to millions of contracts daily across many strikes and expiries |
| Tesla (TSLA) | Routinely millions of contracts daily; sometimes the most-traded single name globally |
| Nvidia (NVDA) | Hundreds of thousands to millions daily |

| OSE example | Daily option volume profile |
|---|---|
| Most-active OSE single-stock options | Thousands to low tens of thousands of contracts daily for top names |
| Typical OSE single-stock option | Hundreds or fewer daily contracts |

The order-of-magnitude difference reflects the structural factors above plus the much larger US underlying market cap and retail investor base.

For Japan-equity exposure expressed at the index level, the [[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]] complex offers very different depth — at the index, OSE liquidity is on par with major global equity-index option markets.

## Counterpoints

- "Japan has no single-stock option market" — False. OSE lists ~150 names with active clearing infrastructure, but the depth is limited.
- "European-style is inferior to American-style" — Different, not inferior. European cash-settled simplifies clearing and avoids assignment risk; for most institutional hedging use cases it is adequate.
- "Structured products will replace single-stock options entirely" — Unlikely. Structured products and listed options serve overlapping but distinct demand pools; they coexist with shifting share.
- "Cross-shareholding unwind will transform single-stock option market" — Partially. It adds episodic institutional flow but does not create the structural retail / market-maker depth that defines the US market.
- "OTC equity options are illegal in Japan" — False. They are documented under standard ISDA and traded by dealer banks; the FIEA framework permits OTC derivative dealing for [[securities/financial-instruments-business-operators-japan-index|FIBO]]-registered firms.

## Open Questions

- Can post-2022 issuer-side hedging activity build sufficient flow to attract more dedicated market makers and improve liquidity?
- Will retail option-trading culture grow as Japanese securities firms add option-trading interfaces to retail platforms?
- How does the regulatory environment for retail option trading need to evolve to support a US-style market? (Tax, suitability rules, disclosure.)
- What is the role of foreign market makers (e.g., proprietary trading firms) in OSE single-stock options? Will more enter?
- How will the BoJ ETF holdings unwind and broader free-float increases affect single-stock option liquidity in major names?

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

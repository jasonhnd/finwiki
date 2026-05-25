---
title: "Japan equity derivatives product matrix"
aliases:
  - "derivatives/japan-equity-derivatives-product-matrix"
  - "japan-equity-derivatives-product-matrix"
  - "Japan equity derivatives matrix"
  - "Japan equity index futures matrix"
  - "OSE equity derivatives matrix"
  - "Japan listed equity options matrix"
  - "Japan equity derivative product comparison"
  - "日本 株式デリバティブ比較マトリクス"
domain: "derivatives"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, equity-derivatives, OSE, TSE, JPX, Nikkei-225, TOPIX, JPX-VI, single-stock-options, sector-futures, EB, structured-products, equity-index-futures, equity-options]
status: active
sources:
  - "https://www.jpx.co.jp/english/markets/derivatives/"
  - "https://www.jpx.co.jp/english/markets/derivatives/nikkei225/"
  - "https://www.jpx.co.jp/english/markets/derivatives/topix-f/"
  - "https://www.jpx.co.jp/english/markets/derivatives/equity-option/"
  - "https://www.jpx.co.jp/english/markets/derivatives/sector-index-f/"
  - "https://www.jpx.co.jp/english/markets/derivatives/vi/"
  - "https://www.jscc.co.jp/en/"
  - "https://indexes.nikkei.co.jp/en/nkave/index/profile?idx=nk225"
  - "https://www.jpx.co.jp/english/markets/indices/topix/"
  - "https://www.fsa.go.jp/en/"
---

# Japan equity derivatives product matrix

## TL;DR

Japan's listed equity derivatives complex is concentrated on the Osaka Exchange (OSE) under the Japan Exchange Group (JPX) with clearing at JSCC. The product set spans **Nikkei 225 futures (standard, mini, micro), Nikkei 225 options, TOPIX futures (standard and mini), TOPIX options, JPX-Nikkei Index 400 futures and options, JPX volatility index (JPX-VI) futures, single-stock options on TSE-listed shares, sector index futures (TOPIX Core30, TOPIX Banks), and structured equity products** (exchangeable bonds with knock-in (EB), convertible bonds (CB), structured equity-linked notes). The matrix below collects exchange venue, notional / contract size, expiry cycle, settlement (cash vs physical), tick size, market participant mix, hedge use cases, and indicative turnover concentration so any single product page can be placed in the broader Japan equity-derivatives architecture.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. It pairs with [[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]] for the headline index-derivative lane, [[derivatives/topix-futures|TOPIX futures]] for the broad-market hedge lane, [[derivatives/japan-single-stock-options|Japan single-stock options]] for the name-by-name optionality lane, [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei VIX / JPX-VI]] for the volatility surface, and [[derivatives/structured-product-eb-knockin-japan-retail|Japan retail EB knock-in structured products]] for the structured / retail-distribution lane. The cash market sits at [[securities/INDEX|securities index]] and [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]; the exchange / CCP layer is [[securities/japan-securities-clearing-corp|JSCC]] and the dealer franchise is [[banking/INDEX|banking index]] plus the [[JapanFG/INDEX|JapanFG]] securities-firm pages.

## Why an equity-derivative product matrix matters

A single phrase like "Japan equity derivative" hides the fact that the contract size, settlement style, participant mix, and use case differ across products. Without classification:

- a Nikkei 225 large futures contract looks like a Nikkei 225 mini contract even though the participant mix (institutional vs retail / HFT) and the volume / open-interest distribution differ;
- a TOPIX future looks like a Nikkei 225 future even though the underlying universe, free-float methodology, dealer-warehouse use, and active-fund benchmark role differ;
- a single-stock option on a TSE name looks like an index option even though physical-delivery convention, liquidity, and earnings-event hedge use differ;
- an EB (exchangeable bond) knock-in structured note looks like an exotic option even though it is a retail-distributed OTC structured product issued through securities firms.

The matrix puts each product in its place so any single derivative page can be read against its alternative hedge or speculation route.

## Product 1 — Nikkei 225 standard futures (大型)

- **Exchange.** Osaka Exchange (OSE) under JPX; clearing at [[securities/japan-securities-clearing-corp|JSCC]].
- **Underlying.** Nikkei Stock Average (Nikkei 225), a price-weighted 225-name index of TSE Prime Market constituents.
- **Notional / contract size.** Index price × ¥1,000 per index point. At a Nikkei level around 40,000, one contract is around ¥40 million notional.
- **Expiry cycle.** Quarterly (March, June, September, December) with up to several contract months listed; "Big SQ" (special quotation) at the second-Friday morning auction. Monthly expiries also listed.
- **Settlement.** Cash settlement against the SQ value.
- **Tick size.** 10 index points (= ¥10,000 per contract).
- **Participant mix.** Foreign institutional investors (heavily dominant on a turnover basis), Japanese institutional investors, dealer warehouses, macro hedge funds, retail-aware HFT.
- **Typical daily turnover.** Concentrated at the front contract; the most-active contract carries hundreds of thousands of contracts per session.
- **Hedge use cases.** Macro overlay, portfolio beta hedge for foreign equity allocators, dealer warehouse against single-stock and structured-product books, ETF arbitrage.

## Product 2 — Nikkei 225 mini futures

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** Nikkei 225.
- **Notional / contract size.** Index price × ¥100 per index point (one-tenth of the standard). At Nikkei 40,000, one mini contract is around ¥4 million notional.
- **Expiry cycle.** Monthly across the near-term cycle, with longer-tenor quarterly listings.
- **Settlement.** Cash against SQ value.
- **Tick size.** 5 index points (= ¥500 per mini contract).
- **Participant mix.** Retail traders (heavy via online securities firms), HFT, smaller institutional accounts, single-stock dealers using mini for granular hedging.
- **Typical daily turnover.** Very high contract count (often higher than standard on a contract-count basis), measured in millions of contracts per session at peak; notional turnover lower than standard.
- **Hedge use cases.** Retail directional positioning, fine-grained dealer hedging, HFT short-horizon strategies, small-portfolio overlay.

## Product 3 — Nikkei 225 micro futures

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** Nikkei 225.
- **Notional / contract size.** Index price × ¥10 per index point (one-hundredth of the standard). At Nikkei 40,000, one micro contract is around ¥400,000 notional.
- **Expiry cycle.** Monthly; introduced to deepen the retail-access ladder.
- **Settlement.** Cash against SQ value.
- **Tick size.** 5 index points (= ¥50 per micro contract).
- **Participant mix.** Retail (primary), small-account HFT.
- **Typical daily turnover.** Established alongside mini but with smaller share of overall Nikkei-futures turnover; growing as retail product.
- **Hedge use cases.** Retail learning / starter contract, very small position sizing, hedge for individual NISA-scale stock portfolios.

## Product 4 — Nikkei 225 options

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** Nikkei 225.
- **Notional / contract size.** Index price × ¥1,000 per index point (same multiplier as standard Nikkei futures).
- **Expiry cycle.** Monthly; Friday SQ (second Friday of the month). Weekly options also listed (Weekly Nikkei 225 Options) introduced to deepen the short-tenor surface.
- **Settlement.** European-style exercise; cash settled against SQ value.
- **Tick size.** Premium tick varies by premium level (e.g. 1 index point or fractional for low-premium series).
- **Participant mix.** Foreign options dealers, Japanese securities-firm options desks, structured-product hedge flow, retail-distributed structured-note hedge, macro funds. Retail single-leg participation lighter than in single-stock options.
- **Typical daily turnover.** Significant; daily option volume measured in tens to hundreds of thousands of contracts across active strikes; option open interest concentrated near front and quarterly expiries.
- **Hedge use cases.** Dealer hedge for structured retail products (EB knock-in, capped notes), volatility trading, tail hedge for institutional equity allocations, gamma hedging.

## Product 5 — TOPIX standard futures

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** Tokyo Stock Price Index (TOPIX), a free-float-adjusted market-cap-weighted index covering TSE Prime Market.
- **Notional / contract size.** Index price × ¥10,000 per index point. At TOPIX around 2,800, one contract is around ¥28 million notional.
- **Expiry cycle.** Quarterly (March, June, September, December) with SQ Friday settlement.
- **Settlement.** Cash against SQ value.
- **Tick size.** 0.5 index points (= ¥5,000 per contract).
- **Participant mix.** Domestic institutional investors (pension funds, life insurers, public pension overlay), foreign institutional investors using TOPIX as a Japan-passive overlay, dealer warehouses, active asset managers benchmarked to TOPIX.
- **Typical daily turnover.** Significant institutional volume; turnover share has historically been comparable to or larger than Nikkei standard on a notional basis driven by domestic institutional benchmark exposure.
- **Hedge use cases.** Institutional benchmark hedge (TOPIX is the dominant active-fund benchmark in Japan), passive-fund replication overlay, dealer cross-hedge against single-stock baskets, pension de-risking.

## Product 6 — TOPIX mini futures

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** TOPIX.
- **Notional / contract size.** Index price × ¥1,000 per index point (one-tenth of standard). At TOPIX around 2,800, one mini contract is around ¥2.8 million notional.
- **Expiry cycle.** Quarterly with monthly listings; SQ Friday settlement.
- **Settlement.** Cash against SQ value.
- **Tick size.** 0.25 index points (= ¥250 per mini contract).
- **Participant mix.** Retail, smaller institutional accounts, HFT, dealer fine-grained hedging.
- **Typical daily turnover.** Smaller than TOPIX standard; mini lane provides retail access and granular sizing.
- **Hedge use cases.** Small-portfolio overlay against TOPIX-benchmarked active funds, retail directional positioning, dealer hedge refinement.

## Product 7 — TOPIX options

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** TOPIX.
- **Notional / contract size.** Index price × ¥10,000 per index point.
- **Expiry cycle.** Monthly; Friday SQ.
- **Settlement.** European-style; cash settled against SQ value.
- **Tick size.** Premium-level dependent.
- **Participant mix.** Institutional volatility trading, pension overlay strategies (TOPIX put-buy hedge), structured-product hedge, foreign volatility funds; thinner retail participation than Nikkei options.
- **Typical daily turnover.** Materially lower than Nikkei 225 options; the active-volatility surface in Japan concentrates on Nikkei rather than TOPIX, even though the cash-market institutional benchmark is TOPIX.
- **Hedge use cases.** Pension de-risking (long put), passive-fund tail hedge, institutional volatility trading, dealer cross-hedge against Nikkei vs TOPIX dispersion.

## Product 8 — JPX-VI futures (volatility index)

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** Nikkei 225 VI (Nikkei 225 Volatility Index) — a 30-day forward implied-volatility index calculated from listed Nikkei 225 option prices.
- **Notional / contract size.** Index price × ¥10,000 per index point.
- **Expiry cycle.** Monthly; SQ settlement against VI value on the SQ day.
- **Settlement.** Cash against SQ value.
- **Tick size.** 0.05 index points (= ¥500 per contract).
- **Participant mix.** Volatility arbitrage funds, dealer vega-hedging desks, macro funds positioning around event risk, tail-risk overlay programs. Retail use limited.
- **Typical daily turnover.** Far smaller than Nikkei 225 futures or options; the JPX-VI futures market is a specialist volatility venue rather than a deep retail surface. See [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei VIX / JPX-VI]] for the volatility-surface context.
- **Hedge use cases.** Vega hedge for option books, macro positioning on event risk (BoJ MPM, US FOMC, Japanese election), tail-risk overlay, volatility-of-volatility trading.

## Product 9 — Single-stock options (TSE-listed names)

- **Exchange.** OSE; clearing at JSCC; underlying shares trade on TSE.
- **Underlying.** Designated TSE-listed shares (eligible names selected by OSE / JSCC).
- **Notional / contract size.** Standardized share-equivalent contract (typically 100-share equivalent per contract).
- **Expiry cycle.** Monthly; SQ Friday.
- **Settlement.** Physical delivery (American-style exercise on some contracts; product specification varies by series). Settlement of underlying shares via JASDEC.
- **Tick size.** Premium-level dependent.
- **Participant mix.** Institutional volatility trading, retail directional / yield-enhancement, structured-product hedge flow, dealer warehouse against EB knock-in retail product.
- **Typical daily turnover.** Concentrated in the largest names (Toyota, Sony, SoftBank Group, Fast Retailing, megabank tickers); the overall single-stock option market is much shallower than the index-option market, but the most-active single names carry meaningful daily volume.
- **Hedge use cases.** Earnings-event hedge, dealer hedge for EB / reverse-convertible structured products, retail yield enhancement (covered call), single-name volatility trading.

## Product 10 — Sector index futures (TOPIX Core30, TOPIX Banks)

- **Exchange.** OSE; clearing at JSCC.
- **Underlying.** Sector / sub-index tickers (TOPIX Core30, TOPIX Banks, and other sector indices).
- **Notional / contract size.** Sector index × ¥10,000 per index point typical.
- **Expiry cycle.** Quarterly; SQ Friday.
- **Settlement.** Cash against SQ value.
- **Tick size.** Sector-specific.
- **Participant mix.** Specialist macro / sector funds, dealer overlay, pension sector-overlay; thinner than broad-market products.
- **Typical daily turnover.** Materially smaller than TOPIX or Nikkei broad-index contracts; sector futures are a niche venue for thematic overlay rather than a deep continuous market.
- **Hedge use cases.** Sector overlay (bank-sector hedge for rate-sensitive portfolios; Core30 for mega-cap-tilted strategies), thematic positioning, dealer cross-hedge against sector ETF arbitrage.

## Product 11 — Exchangeable bond with knock-in (EB knock-in)

- **Exchange.** OTC; not listed on OSE. Issued and distributed through Japanese securities firms; the structured-product venue is the retail-distribution channel rather than a centrally cleared exchange.
- **Underlying.** Single Japanese stock or basket of Japanese stocks; the structured-note pays a coupon and either redeems at par or delivers shares at a knock-in barrier breach.
- **Notional / contract size.** Note-issuance size; retail tickets in tens of thousands to millions of yen per note.
- **Expiry cycle.** Note-specific; typical maturities 6 months to 3 years.
- **Settlement.** Cash coupon throughout life; physical share delivery on knock-in breach (or cash equivalent depending on terms).
- **Tick size.** Note-specific; coupon and barrier defined at issuance.
- **Participant mix.** Retail investors as buyers; securities firms as issuer / distributor; dealer derivatives desks as hedger using single-stock options and equity-index options on OSE.
- **Typical daily turnover.** No exchange turnover; primary-market issuance flow tracked by [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in retail page]]. The structured-product market is a meaningful retail-flow channel that creates persistent dealer hedge demand for single-stock vega and gamma.
- **Hedge use cases.** Retail yield enhancement (the buyer effectively sells volatility for an enhanced coupon); dealer hedge of EB short-volatility exposure runs through single-stock options and the index-option market.

## Product 12 — Convertible bond (CB) and equity-linked structured note

- **Exchange.** TSE corporate bond / OTC for CB; OTC for structured equity-linked notes.
- **Underlying.** Issuer's own shares (CB) or named equity / basket (structured note).
- **Notional / contract size.** CB issuance size typical to corporate debt; structured-note distribution varies.
- **Expiry cycle.** CB maturity (typical 3–7 years); structured-note maturity varies.
- **Settlement.** CB cash coupon + share-conversion option; structured-note settles per term sheet.
- **Tick size.** N/A in derivative sense.
- **Participant mix.** Institutional CB investors, hedge-fund CB arb desks, structured-note retail / private-bank buyers, dealer hedging desks.
- **Typical daily turnover.** CB secondary turnover varies; structured-note distribution flows recorded in dealer / underwriter books rather than exchange turnover.
- **Hedge use cases.** CB issuer raises convertible capital with a built-in equity option sold to investors; hedge-fund arb decomposes the CB into bond + equity option + credit components. Structured notes embed exotic payoffs (Asian, autocallable, reverse-convertible) that dealers hedge through index and single-stock options.

## Cross-product comparison matrix

| Dimension | Nikkei 225 Std | Nikkei 225 Mini | Nikkei 225 Micro | Nikkei 225 Options | TOPIX Std | TOPIX Mini | TOPIX Options | JPX-VI Futures | Single-stock Options | Sector Futures | EB Knock-in | CB / Equity Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Exchange** | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OTC (sec. firm) | TSE / OTC |
| **Clearing** | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | None (bilateral) | None (bilateral) |
| **Multiplier per index point** | ¥1,000 | ¥100 | ¥10 | ¥1,000 | ¥10,000 | ¥1,000 | ¥10,000 | ¥10,000 | 100-share equivalent | ¥10,000 | Note size | Bond face |
| **Notional (illustrative)** | ~¥40m | ~¥4m | ~¥400k | ~¥40m delta-1 | ~¥28m | ~¥2.8m | ~¥28m delta-1 | Volatility-index based | Name-specific | Sector-specific | Retail ticket | Bond size |
| **Expiry cycle** | Quarterly + monthly | Monthly + quarterly | Monthly | Monthly (+ Weekly) | Quarterly | Quarterly + monthly | Monthly | Monthly | Monthly | Quarterly | Note-specific | Bond maturity |
| **Settlement** | Cash (SQ) | Cash (SQ) | Cash (SQ) | Cash (SQ, European) | Cash (SQ) | Cash (SQ) | Cash (SQ, European) | Cash (SQ) | Physical share delivery | Cash (SQ) | Cash + physical (knock-in) | Cash + convert option |
| **Tick size** | 10 idx pt | 5 idx pt | 5 idx pt | Premium-dep. | 0.5 idx pt | 0.25 idx pt | Premium-dep. | 0.05 idx pt | Premium-dep. | Sector-dep. | N/A | N/A |
| **HFT presence** | Heavy | Very heavy | Growing | Heavy | Moderate | Moderate | Lower | Lower | Moderate | Lower | None | None |
| **Foreign participants** | Heavy | Moderate | Lower | Heavy | Heavy | Moderate | Heavy | Moderate | Moderate | Lower | None | Hedge-fund CB arb |
| **Retail participants** | Lower | Heavy | Heavy | Lower | Lower | Moderate | Lower | Lower | Moderate | Lower | Heavy | Some (CB / private bank) |
| **Institutional participants** | Heavy | Lower | Lower | Heavy | Heavy | Moderate | Heavy | Specialist | Heavy | Specialist | None directly | CB / structured-note buyer |
| **Typical daily volume** | Hundreds of thousands of contracts | Millions of contracts | Growing | Tens to hundreds of thousands | Hundreds of thousands | Lower | Lower than Nikkei opt | Specialist niche | Concentrated in top names | Thin | No exchange volume | Issuance-driven |
| **Hedge use case** | Macro overlay, foreign-equity beta hedge, dealer warehouse | Retail directional, granular dealer hedge, HFT | Retail starter, very small overlay | Structured-product hedge, vol trading, tail hedge | Domestic institutional benchmark hedge | Small-portfolio overlay | Pension put-buy, dealer cross-hedge | Vega hedge, event-risk macro | Earnings hedge, EB dealer hedge | Sector overlay | Retail yield enhancement | Convertible-capital / structured |

## How to read this matrix

The equity-derivative product matrix is a public-surface tool. When reading any single product page:

1. **Start with venue.** OSE-listed JSCC-cleared products live in one institutional / retail world; OTC structured products (EB, CB, structured notes) live in a parallel issuer-distributor world that hedges back into the listed market.
2. **Check multiplier and notional.** Nikkei 225 standard, mini, and micro are the same underlying with different ticket sizes; TOPIX standard and mini follow the same pattern. The choice between large / mini / micro is a participant-mix decision, not a different product.
3. **Check settlement style.** Cash-settled index products vs physical-delivery single-stock options have different operational requirements (JASDEC settlement for physical, no settlement for cash).
4. **Check participant mix.** Foreign-investor concentration in Nikkei 225 large, retail concentration in mini / micro, institutional concentration in TOPIX standard, dealer-vol concentration in JPX-VI, and retail concentration in EB structured notes are stable patterns that explain liquidity and pricing behavior.
5. **Check hedge linkage.** Many products exist because they hedge another: index options hedge structured retail notes, sector futures hedge sector ETFs, single-stock options hedge EB knock-in retail product, JPX-VI futures hedge index-option vega.

## Boundary cases and caveats

- **Nikkei 225 vs TOPIX.** Nikkei is price-weighted, 225 constituents, TSE Prime; TOPIX is free-float-market-cap-weighted, full Prime universe. The product universes overlap but the indices behave differently in extreme returns. Hedging a TOPIX-benchmarked active fund with Nikkei futures introduces a meaningful basis.
- **Standard vs mini vs micro.** Operationally distinct contracts on the same underlying; settlement and SQ value are the same, but participant mix and tick-size economics differ. See [[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]].
- **JPX-VI futures vs Nikkei options vega.** JPX-VI futures pay off on the volatility-index level, while Nikkei option vega depends on strike, tenor, and skew. The two are correlated but not equivalent.
- **Single-stock options vs OTC equity options.** OSE-listed single-stock options exist alongside OTC bilateral single-stock options trading among dealers and hedge funds. The OTC market is larger by notional, less transparent, and used heavily in structured-product hedging.
- **EB knock-in vs reverse-convertible.** Both are short-volatility retail structured notes; "EB" (exchangeable bond) and "reverse-convertible" terminology varies by issuer. The economic content (short put + coupon) is broadly equivalent. See [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in retail product]].
- **CB vs structured equity-linked note.** A convertible bond is issued by the company whose shares are the conversion underlying; a structured note is issued by a securities firm with a third-party underlying. The two share embedded-option mechanics but have different credit and regulatory treatment.
- **Sector futures liquidity.** Sector futures liquidity is thin and depends on ETF arbitrage and dealer warehouse cross-hedge. Pricing in sector contracts often follows the cash sector index with a basis driven by cash-and-carry vs ETF arbitrage rather than independent supply / demand.

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/topix-futures]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[JapanFG/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group: OSE derivatives overview (jpx.co.jp / markets / derivatives).
- Japan Exchange Group: Nikkei 225 futures and options contract specifications.
- Japan Exchange Group: TOPIX futures specifications.
- Japan Exchange Group: equity option specifications (single-stock options).
- Japan Exchange Group: sector-index futures specifications (Core30, TOPIX Banks).
- Japan Exchange Group: Nikkei 225 VI futures specifications.
- Japan Securities Clearing Corporation (JSCC): clearing services overview.
- Nikkei Indexes: Nikkei 225 profile and methodology.
- Japan Exchange Group: TOPIX index methodology.
- Financial Services Agency (FSA): FIEA reference for OTC equity derivatives and structured-product distribution.

---
source: securities/japan-market-maker-and-liquidity-provider-landscape
source_hash: 479035c983b5e4e4
lang: en
status: machine
fidelity: ok
title: "Japan market maker and liquidity provider landscape"
translated_at: 2026-06-01T03:31:12.290Z
---

# Japan market maker and liquidity provider landscape

## Wiki route

This page sits inside [[securities/INDEX|securities index]] as the liquidity-provision peer of [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]], [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]], and [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]. It is the supply-side companion to the routing-side narrative: SOR routes the order, the market maker quotes the other side. Read it with [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for venue context, [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] and [[securities/osaka-exchange|Osaka Exchange]] for primary-venue rules, [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] for the financing layer that supports HFT inventory, and [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] for entity-level checks on the global proprietary trading firms operating Japan offices.

## TL;DR

Japan's equity and listed-derivatives market making is a hybrid market: domestic full-service houses (Nomura, Daiwa, SMBC Nikko, Mizuho, MUMSS) provide traditional bank / broker market making and ETF authorized-participant function; alongside them, a global proprietary trading / HFT tier — Citadel Securities Japan, Optiver Japan, Virtu Financial Japan, Jane Street Japan, IMC Japan, Susquehanna (SIG) Japan, plus other quantitative trading firms — operates inside JPX's designated-market-maker (DMM) and J-NET / arrowhead matching infrastructure. JPX runs formal Market Maker schemes on Osaka Exchange listed derivatives (index futures / options / JGB futures / options) and on Tokyo Stock Exchange ETFs; equity DMM coverage on TSE cash equities is selective. Securities-finance, prime-brokerage funding, and PTS routing economics ([[securities/japannext-securities|Japannext]]) shape competitive positioning. All firms operate as FIEA-registered Type I financial instruments business operators with Tokyo offices, supervised by FSA and JSDA self-regulatory rules.

## Why this ecosystem matters

Market makers and liquidity providers are the supply side of the order book that retail SOR and institutional execution algorithms tap. Without sufficient market-maker activity:

1. **Bid-ask spreads widen.** Customer execution costs rise.
2. **ETF arbitrage gaps open.** ETF prices drift from NAV without authorized-participant creation / redemption arbitrage.
3. **Options market liquidity thins.** Greeks-hedging by market makers is the structural source of options-book liquidity.
4. **Derivatives reference quality degrades.** Index-arbitrage between futures and underlying cash equity baskets requires consistent market-maker quoting on both sides.
5. **PTS price improvement opportunity shrinks.** SOR routing only delivers price improvement where competing quotes exist at PTS venues.

The post-2010 introduction of global HFT firms into Japan and the post-2013 TSE arrowhead engine upgrade together compressed spreads, improved displayed depth, and made formal designated-market-maker schemes more economically meaningful.

### Osaka Exchange derivatives market-maker scheme

OSE operates a formal Market Maker (MM) program for listed derivatives, covering products such as:

| Product | Market-maker relevance |
|---|---|
| Nikkei 225 futures / options | Core equity-index derivatives MM activity. |
| TOPIX futures / options | Index-derivatives MM. |
| Nikkei 225 mini / micro | Retail-friendly contracts with MM coverage. |
| JGB futures / options | Rates-derivatives MM with cross-asset linkage to JGB cash and repo (see [[money-market/jgb-repo-market-japan|JGB repo]] context where mapped). |
| Single-stock options | More selective MM coverage. |
| Volatility / sector products | MM-supported in some segments. |

The MM scheme provides incentives (fee rebates / reduced participation costs / formal quoting obligations and benefits) to firms that commit to two-sided continuous quoting under specified bid-ask spread / minimum size / quote-presence requirements. Verify current scheme parameters on the OSE Market Maker page.

### TSE ETF market-maker scheme

TSE runs a formal ETF Market Maker program for listed ETFs. The structural goal is to keep displayed bid-ask spreads tight and to support ETF arbitrage with the underlying basket. Domestic AMs (the dominant ETF issuers — Nomura AM, AM-One, MUFG AM, Nikko AM, Daiwa AM; see [[securities/japan-asset-manager-landscape-matrix|asset manager landscape]]) work with both domestic broker MMs and global firms in this scheme.

### TSE cash-equity DMM

TSE cash-equity designated-market-maker coverage is more selective than the derivatives / ETF schemes. The default cash-equity model on TSE is order-driven continuous auction via arrowhead; formal DMM commitments overlay this for specific market-quality goals on selected names.

## Domestic broker market making

Each major domestic securities firm operates equity / derivatives / ETF market-making and authorized-participant activity as part of its institutional business:

| House | Market-making relevance |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | Largest domestic MM footprint across equity / derivatives / ETF; major ETF AP. |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | Major domestic MM across equity / derivatives / ETF. |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | Domestic MM activity across equity / derivatives; SMFG group adjacency for rates / FX. |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | Domestic MM activity; strong rates / FX integration. |
| MUMSS (Mitsubishi UFJ Morgan Stanley) | Domestic MM with Morgan Stanley global integration; significant equity-derivatives activity. |

These houses combine MM with underwriting, prime brokerage, securities lending, and full-service institutional sales — a structurally different cost structure from pure-prop HFT firms.

### Citadel Securities Japan

- **Global parent**: Citadel Securities (separate from Citadel hedge fund).
- **Japan footprint**: Tokyo office operating as FSA-registered Type I FIBO; equity / derivatives market making and execution counterparty business.
- **Distinguishing feature**: Among the largest global equity market makers; significant US Reg NMS market-maker market share; Japan operation provides Japan equity / derivatives coverage with global firm risk infrastructure.
- **Activity scope**: Equity market making across TSE / PTS; equity-derivatives; ETF.

### Optiver Japan

- **Global parent**: Optiver (Amsterdam-headquartered global market maker).
- **Japan footprint**: Tokyo office; FSA-registered Type I FIBO; member of OSE / TSE for derivatives / ETF / equity activity.
- **Distinguishing feature**: Options market making is a global Optiver strength; Japan options / ETF / derivatives quoting is a core activity.
- **Activity scope**: Listed options, ETF MM, equity derivatives.

### Virtu Financial Japan

- **Global parent**: Virtu Financial (NYSE-listed global market maker).
- **Japan footprint**: Tokyo office; FSA-registered Type I FIBO; equity / ETF market making across multiple Asia venues including Japan.
- **Distinguishing feature**: Global ETF AP and market-making operation; cross-venue arbitrage capability.
- **Activity scope**: Equity / ETF MM; some derivatives activity.

### Jane Street Japan

- **Global parent**: Jane Street (privately held global quantitative trading firm).
- **Japan footprint**: Tokyo office; FSA-registered; ETF / equity / derivatives market making; strong global ETF AP franchise applied to Japan-listed ETFs and to cross-listed ETF arbitrage.
- **Distinguishing feature**: Among the most active global ETF market makers; quantitative trading culture; significant fixed income and equity cross-asset activity.
- **Activity scope**: ETF MM, equity derivatives, cross-asset arbitrage.

### IMC Japan

- **Global parent**: IMC Trading (Amsterdam-headquartered global market maker).
- **Japan footprint**: Tokyo office; FSA-registered; derivatives / ETF / equity market making.
- **Distinguishing feature**: Long-standing presence in Asian derivatives markets; options market making capability.
- **Activity scope**: Listed options, ETF MM, equity.

### Susquehanna (SIG) Japan

- **Global parent**: Susquehanna International Group (SIG, Philadelphia-headquartered global quantitative trading firm).
- **Japan footprint**: Tokyo office; FSA-registered; derivatives / options market making.
- **Distinguishing feature**: Global options market-making strength; structured-product expertise; quantitative trading culture.
- **Activity scope**: Listed options, ETF MM, equity derivatives.

### Other firms in the tier

Additional global / regional firms with Japan market-making activity (cap on this list reflects publicly visible firms; verify current FSA FIBO registry for active entities):

- Tower Research Capital Japan
- DRW Holdings Japan
- Hudson River Trading Japan
- Flow Traders (Asia operation covers Japan-listed ETFs)
- XR Trading and other quantitative shops with Japan-listed activity
- Domestic prop firms operating under FIEA Type I scope

## Designated-market-maker incentives and obligations

The general structure of JPX MM incentives:

| Incentive | Typical form |
|---|---|
| Fee rebate / reduced trading participation cost | Lower per-trade or per-product fee for MM-eligible activity. |
| Designated-issue assignment | Right to operate as DMM on specified issues. |
| Marketing / visibility | Public listing as scheme MM on JPX scheme pages. |
| Connectivity / infrastructure benefits | In some scheme designs. |

The corresponding obligations:

| Obligation | Typical form |
|---|---|
| Continuous two-sided quoting | Required quoting presence during specified hours. |
| Maximum bid-ask spread | Quotes must be within a specified spread band. |
| Minimum quote size | Quotes must be at or above a specified contract / share size. |
| Performance monitoring | Scheme operator monitors fulfillment; failure can suspend MM status. |
| Reporting | MM activity is reported to the venue. |

Exact scheme parameters change; verify current OSE Market Maker / TSE ETF Market Maker page for live numerical thresholds before publishing time-sensitive material.

## Futures and options market-making intensity

Listed equity-index, JGB, and single-stock options markets in Japan depend heavily on continuous MM quoting because:

- Options requires Greeks-hedging across the term structure and strike grid; only systematic MM with quantitative risk infrastructure can quote the full grid.
- Index futures liquidity is intertwined with cash-equity arbitrage; MM activity supports the basis and reduces tracking error for index funds.
- JGB futures / options interact with the JGB repo market (see [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] and JGB-repo-related entries) and with broader funding markets.
- The global HFT firms above provide the bulk of continuous MM intensity outside the domestic broker franchise activity.

## Equity market making vs PTS routing

Market making and SOR routing meet at the order book:

- A market maker quoting on TSE provides the NBBO reference that PTS quotes are arbitraged against.
- A market maker quoting on [[securities/japannext-securities|Japannext]] PTS provides price improvement opportunities for SOR.
- A market maker arbitraging between TSE and Japannext keeps the two books consistent.
- The same firm can be a market maker on both venues simultaneously, capturing the spread differential as inventory rebalances.

See [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]] for the routing-side mechanics and [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] for venue-share evidence.

## Financing layer for market makers

HFT inventory and intraday positions require funding infrastructure:

| Need | Source |
|---|---|
| Prime brokerage / financing | See [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] for the bulk-financing layer; global IBs provide synthetic and physical financing. |
| Securities lending for short side | See [[securities/japan-stock-lending-market-route|stock lending market route]]; [[financial-regulators/japan-securities-finance|Japan Securities Finance]] is one structural rail; broker-to-broker lending is another. |
| Margin trading rails | See [[securities/japan-margin-trading-and-securities-finance|margin trading]]; relevant for retail-broker MM activity in margin-trading-eligible names. |
| Clearing margin | Posted to [[securities/japan-securities-clearing-corp|JSCC]] under member margin requirements. |
| Cash repo and JGB collateral | Cross-asset financing via JGB repo market. |

Financing cost is a meaningful competitive differentiator: a firm with cheap inventory financing can quote tighter spreads on lower turnover than a firm with expensive financing.

## Regulatory and self-regulatory framework

| Layer | Role |
|---|---|
| FSA | Authorizes Type I FIBO registration for global HFT firms operating in Japan; supervises conduct, system resilience, and market-integrity controls. |
| JSDA | Self-regulatory body; members include MM-active firms; rules cover order entry, market-integrity, conflict management. |
| JPX (TSE / OSE / TOCOM) | Venue rules for MM schemes, quoting obligations, suspension procedures, surveillance. |
| JSCC | Clearing member rules and margin requirements. |
| FSA SESC (Securities and Exchange Surveillance Commission) | Market-abuse and conduct surveillance, including spoofing / layering / market-manipulation investigations relevant to algorithmic and HFT activity. |

Specific MM rule revisions, abusive-trading enforcement actions, and SESC settlements / cases periodically appear in public regulatory announcements; verify current cases before drawing conclusions on a specific firm.

## ETF authorized participant role

ETF authorized participants (APs) are typically the same firms acting as market makers, plus domestic full-service brokers:

- Domestic APs: Nomura Securities, Daiwa Securities, SMBC Nikko, Mizuho Securities, MUMSS.
- Global APs / MMs: Citadel Securities, Optiver, Virtu, Jane Street, IMC, SIG.
- AP activity is the creation / redemption mechanism that keeps ETF prices anchored to NAV.

For [[securities/japan-asset-manager-landscape-matrix|domestic ETF issuers]] (Nomura AM, AM-One, MUFG AM, Nikko AM, Daiwa AM, iShares Japan), the AP relationship is operationally critical; thin AP coverage on a niche ETF causes wider NAV-tracking errors.

## Latency and infrastructure

| Layer | Note |
|---|---|
| JPX arrowhead matching engine | Cash-equity matching engine; multiple-generation upgrades have reduced latency to globally competitive levels. |
| OSE J-GATE | Derivatives matching infrastructure. |
| Co-location at JPX data centers | Standard for global HFT firms operating in Japan; reduces venue-side latency. |
| Connectivity providers | Standard global low-latency connectivity providers serve Tokyo. |
| Market data | JPX feeds (TQ, FLEX) and venue-direct feeds for PTS venues. |

## Related

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/odx-start-stb-secondary-market]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/morgan-stanley-japan]]
- [[securities-firms/goldman-sachs-japan]]
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## Sources

- JPX, Osaka Exchange Market Maker scheme page (English / Japanese).
- JPX, TSE ETF Market Maker scheme page.
- JPX, equity statistics pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx) for FIBO registration verification.
- Citadel Securities, Optiver, Virtu Financial, Jane Street, IMC, SIG corporate sites.
- JSDA self-regulatory site.

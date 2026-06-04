---
title: "Japannext PTS SOR routing deep dive"
aliases:
  - "japannext-sor-routing-deep-dive"
  - "Japannext SOR deep dive"
  - "Japannext PTS routing"
  - "Japannext order types and routing"
  - "PTS SOR fragmentation Japan"
  - "ジャパンネクスト SOR 詳細"
  - "Japannext dark vs lit pool"
  - "Japannext execution quality"
domain: securities
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [securities, market-structure, PTS, SOR, japannext, best-execution]
status: active
sources:
  - "https://www.japannext.co.jp/"
  - "https://www.japannext.co.jp/en/regulations"
  - "https://www.japannext.co.jp/en/about"
  - "https://www.japannext.co.jp/en/market"
  - "https://www.jsda.or.jp/shiryoshitsu/toukei/pts_toukei.html"
  - "https://www.jsda.or.jp/en/statistics/pts-for-equity/files/explanatory_ptsforequity.pdf"
  - "https://www.fsa.go.jp/common/law/guide/kinyushohin/"
  - "https://www.fsa.go.jp/policy/kokyakuhoni/kokyakuhoni.html"
  - "https://www.jpx.co.jp/english/markets/statistics-equities/index.html"
---

# Japannext PTS SOR routing deep dive

## Wiki route

This page sits inside [[securities/INDEX|securities index]] as the venue-mechanics deepening of [[securities/japannext-securities|Japannext]] and the routing-mechanics deepening of [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]. Read it with [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] for the data layer, [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for where Japannext fits between TSE / OSE and JSCC / JASDEC, and [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]] for the license boundary that allows a PTS operator to exist. JapanFG operator anchors include [[megabanks/sbi-hd|SBI HD]] (Japannext's anchor shareholder via SBI group lineage), [[securities-firms/nomura-hd|Nomura HD]] (Instinet legacy / SOR-heavy participant), [[securities-firms/sbi-securities|SBI Securities]] and [[financial-regulators/jsda|JSDA]] (PTS statistics publisher).

## TL;DR

Japannext is the oldest and largest cash-equity PTS in Japan, operated by Japannext Co., Ltd. (formerly SBI Japannext) under a FIEA Type I financial instruments business with PTS authorization. It runs lit continuous-auction order books (J-Market for daytime sessions and X-Market for night session) and supports limit / market / iceberg / pegged order types familiar from MTF / ATS designs in EU and US. Its competitive role is to give broker SOR engines a price-improvement and out-of-hours alternative to [[securities/tokyo-stock-exchange|TSE]] and the OSE-listed cash adjacency. Routing economics are shaped by JSDA self-regulatory rules, FSA customer-best-interest principles, fragmentation between TSE / Japannext / [[securities/osaka-digital-exchange|ODX]] (cash equity scope is narrow at ODX, primarily security tokens), and broker preferencing where the SOR owner is also a Japannext shareholder or distribution counterparty.

## Venue identity

| Field | Public reading |
|---|---|
| Legal entity | Japannext Co., Ltd. (株式会社ジャパンネクスト証券) |
| FIEA registration | Type I Financial Instruments Business Operator with PTS operating authorization (verify on [[securities/financial-instruments-business-operators-japan-index|FIBO registry]]). |
| Shareholder lineage | SBI group / SBI HD-anchored historical PTS lineage; Goldman Sachs and other firms have been historical PTS shareholders or counterparties across Japan PTS history. Verify current cap-table per venue IR. |
| Self-regulatory adjacency | [[financial-regulators/jsda|JSDA]] member; PTS statistics consolidated by JSDA after the PTS Information Network ended in July 2025. |
| Markets operated | J-Market (daytime continuous), X-Market (night session continuous) for cash equity PTS trading. |
| Clearing route | Cash equity PTS trades clear through [[securities/japan-securities-clearing-corp|JSCC]] under the PTS clearing arrangement; settlement via [[securities/japan-securities-depository-center|JASDEC]] book-entry. |

Cap-table and entity-name changes occur; always check the venue's About / Regulations page before quoting current ownership in time-sensitive material.

## Session structure

Japannext operates two distinct sessions which broker SOR logic must treat as different liquidity pools:

| Session | Window (illustrative) | Use case |
|---|---|---|
| J-Market | Overlapping TSE day session | Lit alternative venue for price improvement, hidden liquidity capture, midpoint matching in supported segments. |
| X-Market | Evening / overnight session | After-hours liquidity for retail customers and ETF / index funds processing late flow; key value-add against TSE which lacks a regular night session for cash equities. |

The evening session is one of Japannext's most distinctive product features because [[securities/tokyo-stock-exchange|TSE]] does not offer a comparable regular post-close cash equity continuous market; OSE PTS-Night and TSE's own ToSTNeT venue have different mechanics (negotiated / closing-price / large-order designs). Routing customers' market-on-close or after-hours-news-reaction orders is therefore an X-Market use case rather than a TSE substitute.

## Order types

Japannext supports a richer order-type vocabulary than retail UIs typically expose. The publicly described family includes:

| Order type | Behaviour | Routing relevance |
|---|---|---|
| Limit (指値) | Standard price-time-priority limit. | Default SOR comparison primitive against TSE NBBO. |
| Market (成行) | Take available best displayed liquidity. | Higher impact risk in PTS books than on TSE due to thinner top-of-book in some issues. |
| Iceberg / hidden-quantity | Display only a portion, replenish on fill. | Used by institutional flow to mask block size from price-improvement seekers. |
| Pegged orders (where supported) | Track NBBO / midpoint / primary venue best price. | Useful for SOR engines seeking price improvement without quoting risk. |
| Stop / stop-limit | Conditional triggers. | Broker-side conditional orders may convert to limit / market on trigger and reroute. |
| Time-in-force variants (Day / IOC / FOK) | Standard global TIF vocabulary. | Critical for SOR engines that want to probe Japannext liquidity and immediately re-route on partial fill. |

Always verify the venue's current rule book and broker product disclosures for exact field-level behaviour; PTS rule revisions and tick-size synchronizations alter the practical edge.

## SOR routing decision logic

A broker's SOR is not a magic box. The decision logic that determines whether a customer order touches Japannext rather than executing straight on TSE typically combines:

1. **Customer instruction and product scope.** Some products (e.g. NISA-restricted issues, certain margin product flows, specified order types) may be excluded from PTS routing by the broker's policy. See [[securities/japan-best-execution-sor-pts|best-execution policy]] page for the broker-disclosure checklist.
2. **Real-time price comparison.** SOR compares Japannext best bid / offer against TSE NBBO at the moment of order arrival, including tick-size rules that determine whether sub-tick improvement is even possible.
3. **Available size.** If Japannext's displayed liquidity is below the order's size threshold, the SOR may send a child order to Japannext and the remainder to TSE simultaneously (spray routing) or sequentially.
4. **Latency and connectivity.** The SOR must factor in round-trip time to Japannext vs TSE arrowhead matching engine; for time-sensitive flow, marginal price improvement may be discarded if the venue is slower.
5. **Fee / rebate economics.** Japannext's fee schedule and any maker / taker rebate differential vs TSE participation fees influence broker incentives independently of customer outcomes (a conflict surface).
6. **Fallback rules.** If Japannext is in a halt, has data outage, or fails connectivity health-checks, the SOR must reroute to TSE with disclosed behaviour.

The FSA customer-best-interest principles (顧客本位の業務運営) effectively require the broker to document how its SOR balances price, cost, speed, likelihood of execution, settlement certainty, and customer instructions; the SOR design is the operating execution of that documented policy.

## Fragmentation: TSE / OSE / Japannext / ODX

Cash equity liquidity in Japan is far more concentrated on [[securities/tokyo-stock-exchange|TSE]] than US equity is on NYSE / Nasdaq. The fragmentation map looks like:

| Venue | Share of cash-equity flow | Notes |
|---|---|---|
| TSE | Large majority of value across Prime, Standard, Growth segments | Reference market for NBBO; arrowhead engine, ToSTNeT for off-auction. |
| OSE | Effectively no cash equity now (equities consolidated to TSE post-2013 integration); listed derivatives venue | Cash-equity fragmentation question barely involves OSE today. |
| Japannext | The largest PTS share of off-exchange cash equity | Most material SOR alternative for retail and institutional cash equity flow. |
| Cboe Japan (旧 Chi-X Japan) | Other major PTS pole | Verify current activity and ownership status per venue IR / FSA disclosure; PTS market consists of a small number of operators after consolidation. |
| ODX equity PTS | Cash equity scope is narrow; START security-token PTS is the main public-facing function | See [[securities/japan-security-token-secondary-market-route|security token secondary market route]] for the security-token side. |
| ToSTNeT (TSE off-auction) | TSE's own off-auction route | Block / closing-price / negotiated trades; not the same as PTS. |

The reading: fragmentation in Japan is much less pronounced than in US or European cash equities. The SOR design decision is therefore framed not as "should I go to 20 venues" but as "should I take TSE displayed liquidity, or check the small handful of PTS venues for price improvement and additional size."

## Dark vs lit pool routing

Japannext historically operates lit continuous-auction books as its primary product. "Dark pool" in the US sense (a non-displayed venue where orders are only revealed at execution) maps imperfectly onto Japan because:

- The major Japannext markets are lit limit-order books with published top-of-book / depth data.
- Iceberg / hidden-quantity orders provide a hidden-size feature inside a lit book rather than a fully dark venue.
- Pegged-to-midpoint segments where offered (verify current product page) provide a midpoint-cross feature analogous to some US dark-pool functionality.
- Broker internalization in Japan is constrained by best-execution rules and the JSDA self-regulatory framework; broker-internalized cash equity flow does not have the same regulatory shape as US Reg NMS-era dark pools.

For an analyst writing about Japan "dark pools", the more accurate language is "non-displayed liquidity within Japannext / Cboe Japan lit books" plus "ToSTNeT block / closing-price negotiation" plus "off-exchange brokered crossings under JSDA rules", rather than treating Japannext as a US-style ATS dark pool.

## Broker preferencing and conflicts

Broker preferencing is the term for SOR designs that favour a venue in which the broker (or its parent / affiliate) has an economic interest. In Japan the surface to watch includes:

- **Shareholder relationships.** Japannext's historical SBI lineage means [[securities-firms/sbi-securities|SBI Securities]] order flow has a structural reason to consider Japannext as part of its execution menu. The disclosure question is whether routing preferencing is documented in the broker's best-execution policy.
- **Rebate / fee economics.** Where the venue's maker rebate exceeds the broker's customer-rebate pass-through, the broker captures the differential; this is the same conflict pattern as US Reg NMS-era debate but with smaller numeric scale.
- **Securities lending and prime-brokerage adjacency.** Where the broker also runs [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] or interacts with [[securities/japan-stock-lending-market-route|stock lending]], indirect economics can complicate the apparent execution route. See [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] for the funding-side adjacency.
- **Information leakage to internalizers.** Where a broker internalizes flow before posting residual to PTS, the question is whether the customer order has been adversely selected on the way through internalization.

The FSA customer-oriented business conduct page (顧客本位の業務運営) sets a principles-based expectation that brokers disclose and manage these conflicts; analysts should read the broker's published policy plus JSDA self-regulatory materials before drawing conclusions on a specific firm.

## Execution-quality metrics

Useful metrics for evaluating whether Japannext routing actually improves customer outcomes:

| Metric | Definition | Caveat |
|---|---|---|
| Price improvement vs TSE NBBO | Difference between executed price and TSE best bid / offer at order arrival | Tick-size discreteness limits the magnitude of improvement; needs sub-tick capable comparison. |
| Effective spread | Two times absolute distance between execution price and mid-quote at order arrival | Lower is better; venue with more midpoint execution wins on this metric. |
| Realized spread (T+N) | Two times distance between execution price and mid-quote at T+5 min (or other interval) | Captures whether the trade was adversely selected. |
| Fill rate | Filled quantity / submitted quantity within a time-in-force window | Important for IOC / FOK probing strategies. |
| Speed | Time from order receipt to execution / cancellation | Latency matters for SOR sweeps. |
| Effective fee | Explicit commission plus implicit spread plus rebate pass-through | The customer-facing total cost is the right metric, not the headline venue fee. |

Published consolidated execution-quality data at the venue / broker level is far less standardised in Japan than US Rule 605 / 606 disclosures. Analysts have to assemble per-broker policy pages, JSDA aggregate PTS statistics from [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]], and any voluntary broker execution-quality disclosure rather than pulling a single regulated dataset.

## Settlement / clearing tie-in

Japannext PTS cash equity trades clear through [[securities/japan-securities-clearing-corp|JSCC]] under its PTS clearing service and settle through [[securities/japan-securities-depository-center|JASDEC]] book-entry settlement on T+2 (post-2024 shortened cycle; verify current standard settlement cycle). The relevant operational considerations:

- A PTS trade is not "off-clearing" — it lands in the same CCP risk system as TSE trades.
- Member margin and default-fund contributions at JSCC cover both venues.
- Operational failures at Japannext (matching engine issues, market data outage) do not unwind cleared trades; they affect future order routing.
- Cross-venue netting at the clearing member level is a meaningful operational benefit for SOR-active firms.

## Regulation and self-regulation

| Layer | Role |
|---|---|
| FSA | Authorizes Type I financial instruments business with PTS scope; supervises operational resilience, conduct, and customer-best-interest implementation. |
| JSDA | Self-regulatory body for securities firms (including PTS operators that are securities firms); publishes PTS statistics; runs rules for PTS trading of listed and unlisted securities. |
| JSCC | CCP risk management. |
| JASDEC | Book-entry settlement infrastructure. |
| Venue self-regulation | Japannext publishes its own rules / regulations page for participant conduct, order entry, and market-integrity controls. |

Boundary note: A Japannext rule is enforceable on a Japannext participant; an FSA principle is enforceable on the regulated entity; a JSDA self-regulatory rule binds JSDA members. When an analyst writes "Japannext requires X", verify whether X is a venue rule, a JSDA rule, or an FSA expectation; each has different enforcement and exception mechanics.

## History sketch

Japannext's lineage traces through the post-FIEA-2007 PTS framework liberalization, the SBI group's role in promoting PTS infrastructure, partnerships with global firms (including Goldman Sachs historically holding a stake in the predecessor entity), and consolidation that left a small number of cash-equity PTS poles. Cboe acquired the former Chi-X Japan business, renaming it Cboe Japan. Other PTS operators have entered and exited.

The major structural events relevant to today's routing landscape:

- **2007 FIEA Type I + PTS authorization framework** — created the modern PTS legal basis.
- **SBI Japannext launch** — established a daytime + night-session lit PTS.
- **Chi-X Japan / Cboe Japan succession** — second pole of cash-equity PTS competition.
- **TSE arrowhead matching engine upgrades** — narrowed the latency / function gap between the primary exchange and PTS venues.
- **PTS Information Network ended July 2025** — JSDA took over public PTS statistics consolidation.
- **Continued retail SOR product rollout at online brokers** — made PTS routing visible to retail customers in customer-facing UI.

## Related

- [[securities/INDEX]]
- [[securities/japannext-securities]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[megabanks/sbi-hd]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/nomura-hd]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[INDEX|FinWiki index]]

## Sources

- Japannext Co., Ltd., official site and regulations / about pages.
- JSDA, PTS trading statistics page and explanatory PDF for PTS equity statistics.
- FSA, comprehensive supervisory guideline for financial instruments business operators; customer-oriented business conduct (顧客本位の業務運営) page.
- JPX, equity statistics pages and clearing / settlement outline.

---
title: "FX STP and broker liquidity aggregation"
aliases:
  - "fx-stp-broker-aggregation"
  - "STP FX broker"
  - "A-book B-book FX"
  - "liquidity aggregation FX"
  - "ECN FX"
  - "prime broker FX"
  - "LMAX Currenex Hotspot EBS"
  - "Japan retail FX connectivity"
domain: derivatives
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [derivatives, fx, retail, STP, ECN, prime-broker, liquidity-aggregation]
status: active
sources:
  - "https://www.fsa.go.jp/en/"
  - "https://www.ffaj.or.jp/"
  - "https://www.bis.org/publ/qtrpdf/r_qt2212.htm"
  - "https://www.boj.or.jp/en/statistics/bis/yoshi/index.htm"
---

# FX STP and broker liquidity aggregation

## TL;DR

STP (straight-through processing) and market-maker (B-book) models are the two basic ways a retail FX broker can handle client orders. Under STP / A-book, the broker passes the order to an external liquidity provider and earns markup or commission; under B-book, the broker warehouses the risk internally and is the counterparty to the client. Most modern brokers operate a hybrid model with sophisticated liquidity aggregation across multiple ECNs (LMAX, Currenex, Hotspot, EBS, Reuters Matching) and prime-broker relationships. In Japan, broker connectivity to global FX liquidity venues is shaped by JFSA regulation, FFAJ self-regulatory disclosures, and the technical infrastructure of each major retail broker.

This entry is the back-end engineering / market-structure complement to [[derivatives/retail-fx-margin-trade-japan|retail FX margin trading in Japan]] inside the [[derivatives/INDEX|derivatives index]].

## Wiki route

This page sits in the [[derivatives/INDEX|derivatives index]] as the FX broker-connectivity entry. Read it against [[derivatives/retail-fx-margin-trade-japan|retail FX margin trading in Japan]] for the customer-facing surface, [[derivatives/fx-options-japan-corporate-treasury|FX options for Japan corporate treasury]] for the wholesale corporate parallel, and [[money-market/japan-money-market|Japan money market]] for the rate-curve context that drives forward-points and overnight financing.

## STP vs market-maker model

The two business models are the spine of how a retail FX broker generates revenue and manages risk:

| Dimension | STP / A-book | Market-maker / B-book |
|---|---|---|
| Risk warehousing | Pass-through to external LP. Broker is agent. | Broker holds risk. Broker is principal. |
| Revenue | Markup on spread or commission. | Bid/ask spread, P&L of client positions (positive when net client population loses, negative otherwise). |
| Counterparty risk | Client faces broker; broker faces LP. | Client faces broker only. |
| Disclosure | Some jurisdictions require A-book / B-book distinction. | Same. |
| Conflict of interest | Lower; broker is indifferent to client P&L. | Higher; broker benefits when net client population loses. |
| Operational complexity | Lower individual-trade margin but higher connectivity cost. | Higher P&L volatility but higher gross margin per trade. |

In practice almost every modern broker operates a hybrid: some client flow is routed STP (typically high-volume or sophisticated clients), and some is internalized B-book (typically retail high-frequency / scalping flow where the broker can predict short-horizon mean-reversion). The specific split is rarely disclosed.

### Why hybrid models persist

The case for B-book (internalization):
- The bulk of small-notional retail flow is short-lived and mean-reverting; netting offsetting customer trades internally is more efficient than routing each individually to external venues.
- External venue connectivity has cost (subscription fees, prime-broker margin) that does not scale linearly down to small notionals.
- Internalization captures the full bid-ask spread rather than passing it to a liquidity provider.

The case for STP (A-book):
- Eliminates conflict-of-interest with sophisticated customers who would notice and complain.
- Reduces broker tail risk in fat-tail / gap-move scenarios.
- Demonstrates execution-quality discipline that supports the broker's compliance posture.
- High-volume customers expect tight execution without internalization-driven slippage.

A typical broker may route the top 10-20% of customer flow (by sophistication or notional) through STP while internalizing the long tail of small retail flow. The exact threshold and routing logic is proprietary.

## Liquidity aggregation

A broker running an A-book / STP architecture typically connects to multiple liquidity venues simultaneously and uses a smart-order-router to pick the best price for each incoming client order. The major venue categories:

| Venue category | Examples | Notes |
|---|---|---|
| ECN (Electronic Communication Network) | LMAX Exchange, Currenex, Hotspot FX (now CBOE FX), Integral, FastMatch | Anonymous central-limit-order-book style; multi-bank pricing aggregated. |
| Interbank platforms | EBS Market (CME group), Reuters Matching (Refinitiv) | Historical interbank-only venues; now also accessible to large brokers via prime-broker arrangements. |
| Single-bank platforms | Citi Velocity, JPM eFX, Deutsche Bank Autobahn, Barclays BARX, UBS Neo, Goldman Sachs Marquee FX | Bank-internal liquidity; broker connects via FIX API or bespoke gateway. |
| Aggregator / technology vendor | oneZero, PrimeXM, Smartrader, Gold-i, FXone | Provide pre-built aggregation, smart-order-routing, risk management. |

A Japan retail broker typically subscribes to several of these and routes orders via a combination of internal SOR logic and aggregator middleware. Foreign-affiliated brokers like OANDA Japan and [[securities-firms/saxo-bank-securities|Saxo Bank Securities]] inherit their parent companies' global connectivity stacks; domestic-only brokers like [[securities-firms/gmo-click-securities|GMO Click Securities]] and [[securities-firms/sbi-fx-trade|SBI FX Trade]] have built proprietary aggregation infrastructure.

### Smart-order-router mechanics

A typical aggregation stack contains:

1. **Pre-trade filter**: filter out stale quotes; apply minimum-quote-life thresholds; exclude venues with elevated reject rates.
2. **Aggregated top-of-book**: merge bid / ask from all subscribed venues into a single best-bid-best-offer.
3. **Customer-quote synthesis**: apply the broker's markup or commission on top of aggregated price.
4. **Order routing**: when a customer submits an order, smart-order-router picks the venue (or combination of venues) offering best fill given the customer's order type.
5. **Execution and post-trade**: receive fills, allocate to customer, reconcile against external venue confirmation.

The aggregation latency is operationally critical: sub-millisecond aggregation engines are standard at top brokers. The cost is non-trivial: dedicated low-latency network connections to multiple venues, co-location at venue data centers, FIX-gateway infrastructure, and continuous SOR tuning.

## Prime broker relationships

A prime broker (PB) provides the credit and clearing wrapper that allows a broker to access multiple FX liquidity venues without posting bilateral credit to each one. The top PBs in FX:

- Citi
- JPMorgan
- Goldman Sachs
- Morgan Stanley
- UBS
- Deutsche Bank

Post-2015 (the SNB-floor-removal episode forced major write-downs across PBs), the FX PB business contracted and became more credit-selective. Many smaller / mid-sized brokers were dropped from PB rosters and had to either:

1. Upgrade their balance sheet and risk-controls to retain PB access; or
2. Move to a prime-of-prime (PoP) arrangement where a mid-tier broker acts as PB intermediary for smaller venues.

Japanese megabanks (notably [[megabanks/mufg-bank|MUFG Bank]], [[megabanks/sumitomo-mitsui-banking-corp|Sumitomo Mitsui Banking Corp]], and [[megabanks/mizuho-bank|Mizuho Bank]]) operate FX PB services primarily for institutional and corporate clients rather than for retail FX brokers; retail broker PB sourcing is usually international.

### Prime-of-prime model

A mid-sized broker that cannot meet top-tier PB credit standards typically routes through a prime-of-prime (PoP) provider. The PoP holds the PB relationship with a top bank and then on-provides credit and connectivity to several smaller brokers. The arrangement adds a layer of cost (the PoP takes a markup) but enables otherwise-excluded brokers to access deep liquidity. Public examples of PoP-style providers include Saxo Bank's institutional business, Sucden Financial, ADSS, and several smaller specialists.

The PoP model is meaningful for the Japan retail FX market because mid-tier domestic brokers often cannot independently meet US / European PB credit standards but compete effectively on customer-facing service and pricing.

## Japan retail FX broker connectivity

The specific connectivity stack of a Japanese retail FX broker is partially public via FFAJ disclosures and technology partner press releases. Broad pattern:

| Broker | Likely architecture |
|---|---|
| [[securities-firms/gmo-click-securities|GMO Click Securities]] | Proprietary platform; substantial internal liquidity from internalization; selective STP for institutional / high-volume clients. |
| [[securities-firms/sbi-fx-trade|SBI FX Trade]] | Aggregated multi-bank liquidity; tight-spread positioning. |
| [[securities-firms/dmm-com-securities|DMM.com Securities (DMM FX)]] | Hybrid model; significant internalization of retail flow. |
| OANDA Japan | Inherits OANDA's global STP-heavy architecture; fxTrade platform. |
| [[securities-firms/saxo-bank-securities|Saxo Bank Securities]] | Saxo's global multi-venue aggregation; institutional-grade tools. |
| [[securities-firms/matsui-sec|Matsui FX]] | Standard retail platform; outsourced infrastructure for FX. |

The exact A-book / B-book mix at each broker is rarely disclosed. FFAJ self-regulatory rules require certain conflict-of-interest disclosures but stop short of mandating full A-book / B-book reporting.

## ECN venue snapshot

Each major ECN has distinct strengths:

- **LMAX Exchange**: anonymous CLOB; strict no-last-look protocol; popular with algorithmic retail aggregators.
- **Currenex (State Street)**: aggregator-friendly; multi-bank quotes streamed via FIX.
- **Hotspot FX (CBOE FX)**: ECN with both anonymous CLOB and disclosed-counterparty modes.
- **EBS Market (CME Group)**: historical interbank market for JPY pairs (USD/JPY, EUR/JPY); now broadly accessible.
- **Reuters Matching (Refinitiv)**: historical interbank market for EUR/USD and major crosses; still meaningful in EUR/USD spot pricing.
- **Integral OCX**: broker-focused aggregation; popular with smaller / mid-sized brokers.
- **FastMatch (now Euronext FX)**: ECN for spot FX with mixed institutional / broker participation.

JPY-pair liquidity is structurally concentrated on EBS, with significant additional liquidity on the single-bank platforms of the three Japanese megabanks during Tokyo-session hours.

### Tokyo session liquidity dynamics

The intraday liquidity profile of USD/JPY (the dominant JPY pair) follows a distinct pattern:

| Session window (JST) | Activity profile |
|---|---|
| 08:00-09:00 | Tokyo open; significant fixing-related and TWAP-style flow. |
| 09:00-12:00 | Most active local session; megabank desks fully staffed; corporate flow into the 09:55 fixing. |
| 12:00-13:00 | Tokyo lunch lull (less aggressive in modern algorithmic era but still observable). |
| 13:00-16:00 | Tokyo afternoon; flow tapers as European traders prepare to enter. |
| 16:00-20:00 | London open overlap; deepest global liquidity for USD/JPY. |
| 20:00-04:00 | New York session; ECN flows dominate. |
| 04:00-08:00 | Wellington / Sydney handover; thin liquidity. |

The 09:55 JST Tokyo fixing is especially significant because it is the reference fixing used by many Japan corporate and asset-manager workflows; flow around the fixing concentrates briefly and can cause material spread widening.

## Regulatory disclosure

JFSA and FFAJ require certain disclosures from retail FX brokers about order execution and conflict of interest. Specific public disclosures include:

- Customer-execution-quality reports (some brokers publish slippage statistics voluntarily).
- Best-execution policy documentation under FIEA.
- Conflict-of-interest disclosure when broker acts as counterparty.
- Daily / monthly turnover and open-position reports to FFAJ.
- Annual disclosure of risk management framework.

The depth of disclosure varies; sophisticated retail customers can extract meaningful information from broker terms-of-service and FFAJ statistics, but the back-end venue routing is typically not disclosed at trade-by-trade level.

## Latency and infrastructure economics

The latency-sensitive nature of FX execution drives specific infrastructure investment:

- Co-location at major data centers (LD4 in London, NY4 in New York, TY3 in Tokyo) to minimize round-trip time to venues.
- Dedicated cross-connect circuits between aggregator engine and venue gateways.
- FPGA or kernel-bypass network stacks for the most latency-critical components.
- Real-time monitoring of venue-by-venue latency and fill quality.
- Periodic re-tuning of SOR weightings based on realized execution data.

For Japan brokers serving Japan retail customers, the dominant infrastructure investment is around the Tokyo data centers (Equinix TY3, AT Tokyo, NTT Data) with secondary connectivity to LD4 for European-hours liquidity. The cost of this infrastructure is one of the structural advantages of large brokers like GMO Click and SBI FX Trade over smaller competitors who rely on aggregator middleware.

## Last-look protocol mechanics

Last-look is a controversial FX-execution practice where the liquidity provider has a brief window (typically 50-200 milliseconds) to accept or reject an incoming order after it is presented. The rationale is that the LP is exposed to "stale quote" arbitrage in fast-moving markets and needs the window to verify pricing is still valid.

Variations:

| Protocol | Behavior | Customer impact |
|---|---|---|
| No-last-look | LP commits to fill at quoted price | Higher fill certainty but spreads typically wider. |
| Symmetric last-look | LP can reject either favorable or unfavorable moves | Fair but reduces customer fill certainty. |
| Asymmetric last-look | LP rejects only when move is unfavorable to LP | Worse for customer; widely criticized. |

The FX Global Code (published by Global Foreign Exchange Committee) recommends symmetric last-look when used and full disclosure to customers. ECN venues like LMAX have built market positioning around no-last-look protocols; many bank-aggregated feeds still use some form of last-look. For Japan retail brokers, the choice of LP and the last-look policy affects realized execution quality but is rarely disclosed at trade level.

## Risk management at the broker

A retail FX broker running a hybrid STP / B-book model needs continuous risk management:

| Risk type | Management tool |
|---|---|
| Net delta exposure (B-book) | Internal delta-target; offsetting hedge orders into wholesale market when limits breached. |
| Counterparty exposure (LP, PB) | Credit limits; daily reconciliation; collateral monitoring. |
| Operational risk (system outage) | Redundant infrastructure; documented business-continuity procedures. |
| Customer-default risk | Loss-cut system; conservative margin policy; segregated funds protect customers but residual exposure is broker-side. |
| Regulatory / compliance risk | Compliance officer; FFAJ / JFSA reporting; periodic internal audit. |
| Reputational risk | Service quality; transparency of execution practices; customer-service responsiveness. |

The risk-management function at a Japan retail FX broker is materially more sophisticated than at a typical securities-brokerage equivalent because of the 24-hour, leveraged, fast-moving nature of FX. JFSA inspects this function periodically as part of routine supervision.

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/fx-options-japan-corporate-treasury]]
- [[derivatives/corporate-fx-hedge-policy-japan-listed]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[money-market/japan-money-market]]
- [[money-market/INDEX]]
- [[securities-firms/gmo-click-securities]]
- [[securities-firms/sbi-fx-trade]]
- [[securities-firms/dmm-com-securities]]
- [[securities-firms/matsui-sec]]
- [[securities-firms/saxo-bank-securities]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]

## Sources

- Financial Services Agency (JFSA): FIEA best-execution and conduct rules.
- Financial Futures Association of Japan (FFAJ): self-regulatory rules and statistics.
- Bank for International Settlements: Quarterly Review FX market microstructure research.
- Bank of Japan: BIS Triennial Central Bank Survey, Japan FX section.

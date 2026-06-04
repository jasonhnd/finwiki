---
title: "Japan best execution, SOR, and PTS"
aliases:
  - "japan-best-execution-sor-pts"
  - "Japan best execution"
  - "SOR and PTS Japan"
  - "最良執行 SOR PTS"
domain: "securities"
created: 2026-05-22
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-22
confidence: likely
tags: [securities, best-execution, SOR, PTS, brokerage, market-infrastructure]
status: active
sources:
  - "https://www.fsa.go.jp/common/law/guide/kinyushohin/"
  - "https://www.fsa.go.jp/common/law/guide/kinyushohin.pdf"
  - "https://www.fsa.go.jp/policy/kokyakuhoni/kokyakuhoni.html"
  - "https://www.jsda.or.jp/shiryoshitsu/toukei/pts_toukei.html"
  - "https://www.jsda.or.jp/about/kisoku/index.html"
  - "https://www.japannext.co.jp/"
  - "https://www.odx.co.jp/"
  - "https://www.jpx.co.jp/equities/clearing-settlement/outline/index.html"
---

# Japan best execution, SOR, and PTS

## Overview

Best execution in Japan is the control layer behind retail stock-fee competition. A broker's "zero commission" message does not by itself explain whether a customer order is routed to Tokyo Stock Exchange, a proprietary trading system (PTS), or another execution path, nor whether price, cost, speed, likelihood of execution, settlement certainty, and customer instructions are being balanced well.

Use this page with [[securities/japan-online-brokerage-competition|Japan online brokerage competition]], [[securities/japan-market-infrastructure-map|Japan market infrastructure map]], [[financial-licenses/securities-license-stack|Japan securities license stack]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], and broker pages such as [[securities-firms/sbi-securities|SBI Securities]] and [[securities-firms/rakuten-securities|Rakuten Securities]].

This is the execution-quality route inside [[securities/INDEX|securities domain]]. For firm registration and category checks, start from [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] and [[financial-licenses/INDEX|JapanFG legal / financial licenses]] before reading broker policy pages.

## Source Stack

| Layer | Source route | What it explains |
|---|---|---|
| Regulation / supervision | FSA financial instruments business operator supervisory guideline and customer-oriented business-conduct page | Market-intermediary functions, customer best interest, system risk, order handling, and conduct supervision. |
| Self-regulation / statistics | [[financial-regulators/jsda|JSDA]] rules and PTS trading statistics | Dealer self-regulatory route and public PTS trading information. |
| Venue / execution | [[securities/tokyo-stock-exchange|TSE]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]] | Where orders can be executed. |
| Clearing / settlement | [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]] | Why execution is not complete until post-trade risk and settlement are controlled. |
| Broker disclosure | Broker best-execution policy and execution policy pages | How a specific broker routes customer orders and what factors it says it considers. |

## Execution Route Map

| Route | Practical meaning | FinWiki reading |
|---|---|---|
| Primary exchange routing | Broker sends the order to the main exchange market, usually [[securities/tokyo-stock-exchange|TSE]] for listed cash equities. | Simple to explain, but not automatically best in every price / spread / timing case. |
| SOR routing | Smart order routing compares available venues according to broker policy and order conditions. | Key link between fee marketing and real execution quality. |
| PTS execution | Order executes on an alternative venue such as [[securities/japannext-securities|Japannext]] or [[securities/osaka-digital-exchange|ODX]]. | Can improve price / hours / liquidity in some cases; requires clear policy and customer disclosure. |
| Customer instruction | Customer directs venue or order condition where available. | May override some broker default logic; check product screen and policy. |
| Internal / OTC / special route | Broker uses a non-standard or product-specific route. | Needs extra scrutiny for conflicts, pricing, and disclosure. |

## SOR Is Not A Magic Word

SOR is treated as an operating policy, not a guarantee. For each broker, check:

1. which venues are included;
2. whether the policy compares prices, fees, speed, execution probability, and settlement certainty;
3. whether PTS price improvement is passed through to the customer;
4. whether the broker earns rebates, spread economics, securities-lending value, or other indirect economics;
5. how system outages, crossed markets, partial fills, and market-open / close behavior are handled;
6. whether customers can choose or disable SOR.

This is why [[securities/japan-online-brokerage-competition|online brokerage competition]] does not be judged only by domestic equity commission schedules.

## PTS Role

JSDA publishes information on trading of listed securities on PTS venues and notes that the former PTS Information Network ended, with JSDA carrying the public statistical route. The practical reading is:

- PTS is part of market infrastructure, not a side note to broker marketing.
- PTS data helps analysts ask whether alternative venue liquidity is material for a security or time period.
- Broker SOR policy determines whether a retail order can access PTS price improvement.
- PTS venues still depend on clearing, settlement, system resilience, and regulatory oversight.

## Broker Comparison Questions

| Question | Public relevance |
|---|---|
| Does the broker publish a current best-execution policy? | Required reading before comparing fee claims. |
| Does the broker route to PTS? | Affects price improvement, execution hours, and fee / spread economics. |
| Which orders are excluded? | Odd lots, foreign stocks, margin, derivatives, special orders, and NISA workflows may differ. |
| What is the customer-visible benefit? | Better price, lower explicit fee, faster fill, or only broker-side economics. |
| What happens if SOR fails? | Fallback route and outage policy matter for operational risk. |
| Is there an ecosystem incentive? | Points, bank linkage, and wallet economics can mask execution economics. |

## JapanFG Relevance

- [[securities-firms/sbi-securities|SBI Securities]] and [[securities-firms/rakuten-securities|Rakuten Securities]] are the first broker pages to read because domestic-stock fee changes and SOR / PTS routing affect the customer value proposition.
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] and other bank / telecom linked brokers be read against group distribution economics, not only trading cost.
- [[securities-firms/paypay-securities|PayPay Securities]] is app-embedded, so execution disclosure must be read with UX simplicity and investor-protection controls.
- [[securities-firms/gmo-click-securities|GMO Click Securities]], [[securities-firms/dmm-com-securities|DMM.com Securities]], and FX / CFD brokers need separate product-route checks because best execution for listed cash equities is not the same as derivatives execution.

## Risks and Caveats

| Risk | Reading |
|---|---|
| Headline price improvement without context | Compare total outcome, including commissions, spread, fill probability, and order size. |
| Venue concentration | A policy can be formally broad but practically route most orders to one venue. |
| Conflict of interest | Broker economics may differ from customer execution outcome. |
| System fragility | SOR depends on real-time data, connectivity, venue availability, and fallback rules. |
| Poor customer comprehension | Retail customers may see "free trading" but not understand venue selection. |
| Stale policy pages | Always check current broker policy pages before making a live claim. |

## Research Checklist

1. Start with the broker's current best-execution policy.
2. Identify included venues: TSE, PTS, or other route.
3. Check JSDA PTS statistics for the relevant period if volume matters.
4. Check whether customer instructions or product category change the routing.
5. Separate explicit fee, implicit spread, price improvement, points, and group economics.
6. Link execution-route conclusions back to [[securities/japan-market-infrastructure-map|market infrastructure]] and [[financial-licenses/securities-license-stack|license stack]].

## Related

- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-licenses/securities-license-stack]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: comprehensive supervisory guideline for financial instruments business operators.
- FSA: customer-oriented business conduct page.
- JSDA: PTS trading statistics page.
- JSDA: rules and self-regulatory materials page.
- Japannext and ODX official venue pages.
- JPX: clearing / settlement outline.

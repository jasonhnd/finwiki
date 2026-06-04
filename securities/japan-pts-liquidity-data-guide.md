---
title: "Japan PTS liquidity data guide"
aliases:
  - "japan-pts-liquidity-data-guide"
  - "Japan PTS statistics guide"
  - "PTS liquidity Japan"
  - "PTS流動性データ guide"
domain: "securities"
created: 2026-05-22
last_updated: 2026-05-22
last_tended: 2026-05-22
review_by: 2026-11-22
confidence: likely
tags: [securities, PTS, liquidity, market-data, SOR, best-execution]
status: active
sources:
  - "https://www.jsda.or.jp/shiryoshitsu/toukei/pts_toukei.html"
  - "https://www.jsda.or.jp/en/statistics/pts-for-equity/files/explanatory_ptsforequity.pdf"
  - "https://www.jpx.co.jp/english/markets/statistics-equities/index.html"
  - "https://www.japannext.co.jp/"
  - "https://www.japannext.co.jp/en/regulations"
  - "https://www.odx.co.jp/equity/en/market_info/daily_report/"
  - "https://www.odx.co.jp/equity/en/market_info/historical_data/"
---

# Japan PTS liquidity data guide

## Overview

PTS liquidity data is the evidence layer behind [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]. It helps answer whether alternative venues are material for a security, but it is not the same as a customer-specific best-execution result. A useful analysis must separate aggregate trading value, issue-level activity, venue availability, spread / quote quality, order size, execution probability, and broker routing policy.

Use this page with [[securities/INDEX|securities domain]], [[securities/japan-market-infrastructure-map|Japan market infrastructure map]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]], and [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]].

## Source Stack

| Source | What it is good for | Boundary |
|---|---|---|
| JSDA PTS statistics page | Monthly and annual data on trading of exchange-listed securities on PTS venues. | Public statistical route; not a live quote feed or a broker policy. |
| JSDA explanatory PDF | Definitions of exchange-traded, off-exchange, and PTS transactions; data source explanation. | Aggregated from reports by relevant JSDA members. |
| JPX equity statistics | Exchange-side trading value, market capitalization, margin, short-selling, and investor-type context. | Exchange data is not PTS data; compare denominators carefully. |
| Japannext public pages | Venue profile, regulations, session structure, and rules context. | Venue material is not a broker-specific best-execution policy. |
| ODX market information | Daily report, historical data, and Equity PTS / START context. | ODX itself notes that investors transact through accepted securities firms. |
| Broker policy pages | SOR, best execution, included venues, exclusions, fallback route. | Broker disclosure may not provide issue-level realized price-improvement data. |

## Reading The JSDA PTS Statistics

JSDA explains that the PTS statistics now published on its website were previously published through the PTS Information Network, which ended on July 1, 2025. Its English explanatory PDF defines:

- exchange-traded transactions as sales and purchases at domestic financial instruments exchanges;
- off-exchange transactions as transactions outside those exchanges;
- PTS transactions as off-exchange transactions through approved PTS operating businesses conducted by JSDA members;
- the data source as reports on trading volume and value submitted by JSDA members conducting PTS operating business and by members engaged in off-exchange transactions.

That makes the JSDA page the right starting point for **market-share / liquidity context**, not for a one-order execution audit.

## Core Metrics

| Metric | Useful question | Main caveat |
|---|---|---|
| Trading value | Is PTS liquidity economically material in this period? | High aggregate value may be concentrated in liquid large caps. |
| Trading volume | Is there share-count activity, not only yen value? | Low-priced stocks can distort volume comparison. |
| PTS share of total / off-exchange activity | How meaningful is PTS versus exchange and other off-exchange routes? | Denominator choice changes the answer. |
| Issue-level activity | Which securities actually trade on PTS? | Aggregate statistics can hide issue-level thinness. |
| Venue-level split | Is activity concentrated in one PTS? | Venue concentration can affect SOR value. |
| Time-of-day / session | Does after-hours or daytime PTS liquidity matter? | Public monthly statistics may not show intraday depth. |
| Spread / quote quality | Would routing improve price? | Requires quote / best-bid-offer data, not only executed value. |
| Fill probability | Can the order execute at useful size? | Hard to infer from monthly totals alone. |

## Analyst Workflow

1. Start with the question: market structure, broker execution, issuer liquidity, or trading-strategy relevance.
2. Use JSDA PTS statistics for aggregate / monthly / annual PTS context.
3. Use JPX statistics to understand exchange-side denominator and market-wide context.
4. Use venue pages for rules, session structure, and available market data.
5. Use broker best-execution / SOR policy pages to determine whether the customer can access the venue.
6. For a specific stock, record only with price improvement unless quote, spread, order-size, and broker routing data support it.
7. Link any broker conclusion back to [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] rather than treating PTS statistics as proof by themselves.

## PTS Data Interpretation

| Interpretation | Good use | Bad use |
|---|---|---|
| "PTS share rose" | Ask whether alternative venue liquidity is becoming more relevant to brokers and SOR. | Claim every retail order gets better execution. |
| "PTS activity is concentrated" | Identify which securities and venues deserve deeper execution analysis. | Generalize liquidity to the full TSE universe. |
| "ODX / Japannext publish venue data" | Compare venue availability and session structure. | Treat venue marketing as independent execution-quality proof. |
| "Exchange volume dominates" | Explain why exchange liquidity remains the reference market. | Ignore PTS price improvement in specific large / liquid names. |
| "Monthly statistics are available" | Build trend charts and periodic reviews. | Use monthly aggregate data to audit a single order. |

## JapanFG Relevance

- [[securities-firms/sbi-securities|SBI Securities]] and [[securities-firms/rakuten-securities|Rakuten Securities]] are the core online brokers to read when asking whether SOR and PTS access is part of the retail value proposition.
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] and [[securities-firms/paypay-securities|PayPay Securities]] matter because app / ecosystem brokerage can simplify UX while hiding route complexity.
- [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa Securities Group]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], and [[securities-firms/mufg-mums|MUMSS]] matter for institutional and full-service execution, but broker-policy evidence must still be checked by entity.

## Caveats

- PTS statistics are not a live consolidated tape.
- PTS execution can be useful even when aggregate share is small, but only for specific orders, securities, and time windows.
- Spread / depth / fill data is more important than headline trading value for execution-quality analysis.
- Broker SOR inclusion is not universal across product types, order types, NISA, margin, or odd lots.
- Security-token PTS activity is routed to [[securities/osaka-digital-exchange|ODX]] and relevant tokenized-security pages rather than mixed into ordinary cash-equity liquidity analysis.

## Related

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
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

- JSDA: PTS trading statistics page.
- JSDA: explanatory PDF for PTS equity statistics.
- JPX: equity statistics pages.
- Japannext: official site and regulations page.
- ODX: daily report and historical data pages.

---
title: "Money market domain"
aliases:
  - "money-market INDEX"
  - "短期金融市場 domain"
domain: "money-market"
created: 2026-05-19
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-11-15
confidence: likely
tags: [money-market, index, BoJ, call-market, tanshi]
status: active
sources:
  - "https://www.boj.or.jp/en/paym/market/"
  - "https://www.boj.or.jp/en/statistics/market/short/mutan/index.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b31.htm"
  - "https://www.boj.or.jp/en/about/education/oshiete/seisaku/b34.htm"
---

# Money market domain

## TL;DR

This domain routes Japan short-term money-market knowledge: call-rate formation, BoJ open market operations, and the connection between monetary policy, banks, securities firms, and tanshi companies.

Use [[JapanFG/boj-monetary-policy]] for the central-bank policy page and this domain for the market mechanics underneath it.

## Start Here

| Lane | Start page | Use when asking |
|---|---|---|
| Domain overview | [[money-market/japan-money-market|Japan money market]] | How Japan's short-term funding layer fits into BoJ policy and JapanFG entities. |
| Call-rate mechanism | [[money-market/call-market-structure|Call market structure]] | How the uncollateralized overnight call rate is formed and why it matters. |
| JGB repo / secured funding | [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] | How secured JGB funding, collateral scarcity, GC / SC repo, and securities lending affect market functioning. |
| BoJ implementation | [[money-market/boj-open-market-operations|BoJ open market operations]] | What operation tools the BoJ uses to supply or absorb funds. |
| Tanshi business model | [[money-market/tanshi-company-business-model|Tanshi company business model]] | How Tokyo / Central / Ueda Yagi tanshi differ in business model and intersect with BoJ operations. |
| Instrument comparison hub | [[money-market/japan-short-term-funding-instrument-matrix|Japan short-term funding instrument matrix]] | Comparing tenor, issuer type, minimum lot, settlement, credit, and BoJ collateral eligibility across every front-end instrument. |
| BoJ floor system | [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] | How the post-2024 floor system and 補完当座預金制度 tiered rates anchor the call rate. |

## Instruments

Start at the [[money-market/japan-short-term-funding-instrument-matrix|Japan short-term funding instrument matrix]] to compare these front-end instruments on tenor, issuer type, minimum lot, settlement cycle, credit profile, and BoJ collateral eligibility before drilling into a single product page.

| Instrument | Page | Use when asking |
|---|---|---|
| Commercial paper | [[money-market/japan-cp-commercial-paper-market|Japan CP (commercial paper) market]] | How corporate short-term CP is issued, settled via JASDEC, and traded. |
| Negotiable CDs | [[money-market/japan-ncd-negotiable-cd-market|Japan NCD (negotiable certificate of deposit) market]] | How bank-issued negotiable certificates of deposit fund the front end. |
| Treasury Discount Bills | [[money-market/japan-tbill-treasury-discount-bill|Japan Treasury Discount Bills (TDB / 国庫短期証券)]] | How MoF-issued TDB / TBill discount bills work as the government's short paper. |
| Money market funds | [[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF (money market mutual funds)]] | How MRF / MMF money funds invest in and connect retail flows to the money market. |
| BoJ deposit facility | [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] | How the post-2024 floor system and tiered complementary deposit facility set the rate floor. |

## JapanFG Anchors

| Cluster | Entity pages |
|---|---|
| Central bank / policy | [[JapanFG/boj-monetary-policy]] |
| Tanshi companies | [[JapanFG/tokyo-tanshi]], [[JapanFG/central-tanshi]], [[JapanFG/ueda-yagi-tanshi]] |
| Megabanks | [[JapanFG/mufg]], [[JapanFG/smfg]], [[JapanFG/mizuho-fg]] |
| Securities / JGB market | [[JapanFG/mizuho-securities]], [[JapanFG/mufg-mums]], [[JapanFG/local-bond-market]] |
| Legal / license map | [[JapanFG/legal-financial-licenses/INDEX]] |

## Research Control

1. Use BoJ pages first for operation mechanics, call-rate data, and monetary-policy terminology.
2. Do not treat the policy-rate guideline as the same thing as actual transaction rates.
3. Separate call market, repo market, JGB outright purchases, and securities lending.
4. Keep company-specific pages in [[JapanFG/INDEX|JapanFG]]; this domain explains the market layer.

## Backlog

| Priority | Gap (not yet written) | Why |
|---|---|---|
| P2 | BoJ current account access — *no page yet* | Useful for bank / settlement / tanshi boundary analysis. Not yet authored; do not link until created. |

## Related

- [[banking/INDEX]]
- [[securities/nisa-2024-flow]]
- [[policy-finance/INDEX]]
- [[JapanFG/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market.
- Bank of Japan: Call Money Market Data.
- Bank of Japan: What are market operations?
- Bank of Japan: What types of open market operations does the Bank conduct?

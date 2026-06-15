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

Use [[financial-regulators/boj-monetary-policy]] for the central-bank policy page and this domain for the market mechanics underneath it.

## Start Here

| Lane | Start page | Use when asking |
|---|---|---|
| Domain overview | [[money-market/japan-money-market|Japan money market]] | How Japan's short-term funding layer fits into BoJ policy and JapanFG entities. |
| Call-rate mechanism | [[money-market/call-market-structure|Call market structure]] | How the uncollateralized overnight call rate is formed, why "the call rate" means the uncollateralized overnight rate, and where the collateralized segment went. |
| JGB repo / secured funding | [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] | How secured JGB funding, collateral scarcity, GC / SC repo, and securities lending affect market functioning. |
| Repo contract structures | [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|Repo transaction structures: gensaki vs cash-collateralized securities lending]] | The two legal forms (現先 gensaki vs 現金担保付債券貸借) underneath the repo market and how GC / SC overlays them. |
| BoJ implementation | [[money-market/boj-open-market-operations|BoJ open market operations]] | What operation tools the BoJ uses to supply or absorb funds. |
| Tanshi business model | [[money-market/tanshi-company-business-model|Tanshi company business model]] | How Tokyo / Central / Ueda Yagi tanshi differ in business model and intersect with BoJ operations. |
| Instrument comparison hub | [[money-market/japan-short-term-funding-instrument-matrix|Japan short-term funding instrument matrix]] | Comparing tenor, issuer type, minimum lot, settlement, credit, and BoJ collateral eligibility across every front-end instrument. |
| BoJ floor system | [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] | How the post-2024 floor system and 補完当座預金制度 tiered rates anchor the call rate. |
| Settlement rail | [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET Funds Transfer System and RTGS settlement]] | Where the cash legs of call, repo, and BoJ operations settle across BoJ current accounts on an RTGS basis. |

## Instruments

Start at the [[money-market/japan-short-term-funding-instrument-matrix|Japan short-term funding instrument matrix]] to compare these front-end instruments on tenor, issuer type, minimum lot, settlement cycle, credit profile, and BoJ collateral eligibility before drilling into a single product page.

| Instrument | Page | Use when asking |
|---|---|---|
| Commercial paper | [[money-market/japan-cp-commercial-paper-market|Japan CP (commercial paper) market]] | How corporate short-term CP is issued, settled via JASDEC, and traded. |
| Negotiable CDs | [[money-market/japan-ncd-negotiable-cd-market|Japan NCD (negotiable certificate of deposit) market]] | How bank-issued negotiable certificates of deposit fund the front end. |
| Treasury Discount Bills | [[money-market/japan-tbill-treasury-discount-bill|Japan Treasury Discount Bills (TDB / 国庫短期証券)]] | How MoF-issued TDB / TBill discount bills work as the government's short paper. |
| Money market funds | [[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF (money market mutual funds)]] | How MRF / MMF money funds invest in and connect retail flows to the money market. |
| BoJ deposit facility | [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] | How the post-2024 floor system and tiered complementary deposit facility set the rate floor. |

## Benchmarks and Rate Mechanics

These pages cover how Japan's money-market reference rates are formed, governed, and reformed. Read them together: the call market is the cash market, TONA is the transaction-based risk-free rate built on it, TIBOR is the surviving quote-based credit-sensitive term benchmark, and TORF is the forward-looking term risk-free rate derived from TONA-referencing OIS.

| Topic | Page | Use when asking |
|---|---|---|
| Call-market segmentation | [[money-market/call-market-structure|Call market structure]] | The difference between 無担保コール and 有担保コール, and why the collateralized call rate is no longer calculated. |
| Term benchmark (credit-sensitive) | [[money-market/japan-tibor-benchmark-rate|TIBOR (Tokyo Interbank Offered Rate)]] | How JBATA-administered Japanese Yen / Euroyen TIBOR works and why Euroyen TIBOR ended in 2024. |
| Term benchmark (risk-free) | [[money-market/japan-torf-term-risk-free-rate|TORF (Tokyo Term Risk Free Rate)]] | How QUICK Benchmarks' forward-looking term RFR is derived from TONA-referencing OIS data and contrasts with credit-sensitive TIBOR. |
| Benchmark reform | [[money-market/japan-money-market-benchmark-reform-tona|Japan money-market benchmark reform (TONA)]] | How JPY LIBOR was replaced by TONA, why TIBOR survives, and the resulting multi-rate world. |

For the derivative-pricing expression of the risk-free rate, cross to [[derivatives/ois-tona-curve|the OIS TONA curve]] in the derivatives domain.

## JapanFG Anchors

| Cluster | Entity pages |
|---|---|
| Central bank / policy | [[financial-regulators/boj-monetary-policy]] |
| Benchmark governance | [[financial-regulators/zenginkyo]] (JBATA / TIBOR), [[financial-regulators/fsa]] |
| Tanshi companies | [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] |
| Megabanks | [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] |
| Securities / JGB market | [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], [[financial-regulators/local-bond-market]] |
| Legal / license map | [[financial-licenses/INDEX]] |

## Research Control

1. Use BoJ pages first for operation mechanics, call-rate data, and monetary-policy terminology.
2. Do not treat the policy-rate guideline as the same thing as actual transaction rates.
3. Separate call market, repo market, JGB outright purchases, and securities lending.
4. Keep company-specific pages in [[JapanFG/INDEX|JapanFG]]; this domain explains the market layer.

## Backlog

| Priority | Gap (not yet written) | Why |
|---|---|---|
| — | BoJ current account access — now covered by [[money-market/boj-net-funds-transfer-system-rtgs-settlement|BOJ-NET FTS / RTGS settlement]] | The settlement-asset and reserve / policy roles of BoJ current accounts are documented on the settlement-rail page. |

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

---
source: securities/japan-pts-liquidity-data-guide
source_hash: 7f5a21c0f3b10acf
lang: zh
status: machine
fidelity: ok
title: "日本 PTS 流动性数据指南"
translated_at: 2026-06-19T12:43:19.858Z
---

# 日本 PTS 流动性数据指南

## Overview

PTS 流动性数据是 [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] 背后的证据层。它有助于回答某只证券的替代交易场所是否具有实质意义，但它与特定客户的最优执行结果并不相同。一项有用的分析必须区分合计成交额、个券层面的活跃度、交易场所的可用性、价差 / 报价质量、订单规模、执行概率，以及券商的路由政策。

请将本页与 [[securities/INDEX|securities domain]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] 以及 [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] 一并使用。

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

JSDA 说明，目前在其网站上公布的 PTS 统计，此前是通过 PTS Information Network 公布的，而该网络已于 1, 2025年 7 月终止。其英文解释 PDF 定义了：

- 交易所内交易（exchange-traded transactions）为在国内金融商品交易所进行的买卖；
- 交易所外交易（off-exchange transactions）为在这些交易所之外进行的交易；
- PTS 交易为由 JSDA 会员通过经核准的 PTS 运营业务进行的交易所外交易；
- 数据来源为由从事 PTS 运营业务的 JSDA 会员以及从事交易所外交易的会员提交的有关成交量和成交额的报告。

这使得 JSDA 页面成为**市场份额 / 流动性背景**的恰当起点，而非单笔订单执行审计的起点。

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

1. 从问题入手：市场结构、券商执行、发行人流动性，或与交易策略的相关性。
2. 对于合计 / 月度 / 年度的 PTS 背景，使用 JSDA PTS 统计。
3. 使用 JPX 统计来理解交易所一侧的分母和市场整体背景。
4. 对于规则、交易时段结构和可用的市场数据，使用交易场所页面。
5. 使用券商的最优执行 / SOR 政策页面来判断客户能否接入该交易场所。
6. 对于特定股票，除非有报价、价差、订单规模和券商路由数据支撑，否则仅以价格改善记录。
7. 将任何关于券商的结论关联回 [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]，而不是把 PTS 统计本身当作证据。

## PTS Data Interpretation

| Interpretation | Good use | Bad use |
|---|---|---|
| "PTS share rose" | Ask whether alternative venue liquidity is becoming more relevant to brokers and SOR. | Claim every retail order gets better execution. |
| "PTS activity is concentrated" | Identify which securities and venues deserve deeper execution analysis. | Generalize liquidity to the full TSE universe. |
| "ODX / Japannext publish venue data" | Compare venue availability and session structure. | Treat venue marketing as independent execution-quality proof. |
| "Exchange volume dominates" | Explain why exchange liquidity remains the reference market. | Ignore PTS price improvement in specific large / liquid names. |
| "Monthly statistics are available" | Build trend charts and periodic reviews. | Use monthly aggregate data to audit a single order. |

## JapanFG Relevance

- [[securities-firms/sbi-securities|SBI Securities]] 和 [[securities-firms/rakuten-securities|Rakuten Securities]] 是在追问 SOR 与 PTS 接入是否构成零售价值主张一部分时应当阅读的核心在线券商。
- [[securities-firms/mufg-esmart-securities|MUFG eSmart Securities]] 和 [[securities-firms/paypay-securities|PayPay Securities]] 之所以重要，是因为应用 / 生态型经纪业务可以在隐藏路由复杂性的同时简化 UX。
- [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] 和 [[securities-firms/mufg-mums|MUMSS]] 对机构及全方位服务执行而言重要，但券商政策证据仍须按实体逐一核查。

## Caveats

- PTS 统计不是实时的合并行情带（consolidated tape）。
- 即使合计份额很小，PTS 执行也可能有用，但仅限于特定的订单、证券和时间窗口。
- 对于执行质量分析而言，价差 / 深度 / 成交数据比头条成交额更重要。
- 券商的 SOR 纳入在各产品类型、订单类型、NISA、信用和零股之间并非普遍适用。
- 证券型代币的 PTS 活动被路由至 [[securities/osaka-digital-exchange|ODX]] 及相关的代币化证券页面，而非混入普通的现金股票流动性分析。

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

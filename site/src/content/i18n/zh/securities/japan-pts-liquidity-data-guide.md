---
source: securities/japan-pts-liquidity-data-guide
source_hash: 6619b265e1dbd58f
lang: zh
status: machine
fidelity: ok
title: ""
translated_at: 2026-06-01T03:31:12.333Z
---
#日本PTS流动性数据指南

## 概述

PTS流动性数据是[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]背后的证据层。它有助于回答替代场所对于证券是否重要，但它与特定于客户的最佳执行结果不同。有用的分析必须将总交易价值、发行级别活动、场地可用性、点差/报价质量、订单大小、执行概率和经纪商路由策略分开。

将此页与 [[securities/INDEX|securities domain]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[securities/japannext-securities|Japannext]]、[[securities/osaka-digital-exchange|ODX]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] 和 [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] 一起使用。

## 源堆栈

|来源 |它有什么好处 |边界 |
|---|---|---|
| JSDA PTS统计页面| PTS 场所交易所上市证券交易的月度和年度数据。 |公共统计路线；不是实时报价或经纪商政策。 |
| JSDA 解释性 PDF |交易所交易、场外交易和 PTS 交易的定义；数据来源说明。 |根据相关 JSDA 成员的报告汇总。 |
| JPX股权统计|交易所交易价值、市值、保证金、卖空和投资者类型背景。 |交易所数据不是PTS数据；仔细比较分母。 |
| Japannext 公共页面 |场地概况、规定、会议结构和规则背景。 |场地材料并不是特定于经纪商的最佳执行政策。 |
| ODX市场资讯|每日报告、历史数据和股票 PTS/START 背景。 | ODX 本身指出，投资者通过认可的证券公司进行交易。 |
|经纪人政策页面| SOR，最佳执行，包括场地、排除情况、后备路线。 |经纪商披露可能不提供发行层面的已实现价格改善数据。 |

## 阅读 JSDA PTS 统计数据

JSDA解释说，现在在其网站上发布的PTS统计数据是之前通过PTS信息网发布的，该信息网于7月1, 2025结束。其英文解释性 PDF 定义：

- 国内金融工具交易所买卖等交易所交易；
- 场外交易是指在这些交易所之外进行的交易；
- PTS交易为场外交易，由JSDA会员通过经批准的PTS运营业务进行；
- 数据来源为从事PTS运营业务的JSDA会员和从事场外交易的会员提交的交易量和交易额报告。

这使得 JSDA 页面成为**市场份额/流动性背景**的正确起点，而不是单指令执行审核的正确起点。

## 核心指标

|公制|有用的问题 |主要警告|
|---|---|---|
|交易价值|在此期间，PTS 流动性在经济上是否重要？ |高总价值可能集中在流动性大盘股中。 |
|交易量|是否有股票计数活动，而不仅仅是日元价值？ |低价股票可能会扭曲成交量比较。 |
| PTS 占总/场外活动的份额 |与交换和其他场外路由相比，PTS 有何意义？ |分母的选择会改变答案。 |
|问题级活动 |哪些证券实际上在 PTS 上交易？ |汇总统计数据可以隐藏问题层面的薄弱程度。 |
|场馆级拆分|活动是否集中在一个 PTS 上？ |场地集中度会影响SOR值。 |
|一天中的时间/会话 |盘后或日间 PTS 流动性重要吗？ |公开的月度统计数据可能不会显示盘中深度。 |
|点差/报价质量 |路由会提高价格吗？ |需要报价/最佳出价-报价数据，而不仅仅是执行价值。 |
|填充概率|订单能否以有用的规模执行？ |仅从每月总数很难推断。 |

## 分析师工作流程

1。从以下问题开始：市场结构、经纪商执行、发行人流动性或交易策略相关性。
2。使用 JSDA PTS 统计数据来了解聚合/每月/年度 PTS 背景。
3。使用 JPX 统计数据了解交易所方分母和整个市场背景。
4。使用场地页面了解规则、会话结构和可用市场数据。
5。使用经纪商最佳执行/SOR 策略页面来确定客户是否可以访问场地。
6。对于特定股票，仅记录价格上涨情况，除非报价、点差、订单大小和经纪商路径数据支持。
7。将任何经纪商结论链接回 [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]，而不是将 PTS 统计数据本身视为证据。

## PTS数据解读

|解读|好用|使用不当|
|---|---|---|
| “PTS股价上涨”|询问替代场所流动性是否与经纪商和 SOR 变得更加相关。 |声称每个零售订单都能得到更好的执行。 |
| “PTS活动集中”|确定哪些证券和场所值得进行更深入的执行分析。 |将流动性推广到整个 TSE 领域。 |
| “ODX / Japannext 公布场地数据”|比较场地可用性和会议结构。 |将场馆营销视为独立执行质量的证明。 |
| “交易量占主导地位”|解释为什么交易所流动性仍然是参考市场。 |忽略特定大型/流动性名称的 PTS 价格改善。 |
| “每月统计数据可用” |建立趋势图表和定期回顾。 |使用每月汇总数据审核单个订单。 |

## JapanFG 相关性

- 当询问 SOR 和 PTS 访问是否是零售价值主张的一部分时，[[JapanFG/sbi-securities|SBI Securities]] 和 [[JapanFG/rakuten-securities|Rakuten Securities]] 是需要阅读的核心在线经纪商。
- [[JapanFG/mufg-esmart-securities|MUFG eSmart Securities]] 和 [[JapanFG/paypay-securities|PayPay Securities]] 很重要，因为应用程序/生态系统经纪可以简化用户体验，同时隐藏路线复杂性。
- [[JapanFG/nomura-hd|Nomura]]、[[JapanFG/daiwa-sg|Daiwa Securities Group]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-securities|Mizuho Securities]] 和 [[JapanFG/mufg-mums|MUMSS]] 对于机构和全方位服务执行很重要，但经纪商政策证据仍必须由实体检查。

## 注意事项

- PTS 统计数据不是实时合并磁带。
- 即使总份额很小，PTS 执行也很有用，但仅限于特定订单、证券和时间窗口。
- 对于执行质量分析，点差/深度/填充数据比总体交易价值更重要。
- 经纪商 SOR 包含在产品类型、订单类型、NISA、保证金或碎股中并不通用。
- 证券代币 PTS 活动被路由到 [[securities/osaka-digital-exchange|ODX]] 和相关代币化证券页面，而不是混合到普通现金股权流动性分析中。

## 相关

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[JapanFG/sbi-securities]]
- [[JapanFG/rakuten-securities]]
- [[JapanFG/jsda]]
- [[INDEX|FinWiki index]]

## 来源

- JSDA：PTS交易统计页面。
- JSDA：PTS 股权统计的解释性 PDF。
- JPX：权益统计页面。
- Japannext：官方网站和法规页面。
- ODX：每日报告和历史数据页面。

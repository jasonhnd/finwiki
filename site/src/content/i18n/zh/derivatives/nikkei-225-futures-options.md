---
source: derivatives/nikkei-225-futures-options
source_hash: db54f10e03cbdfc4
lang: zh
status: machine
fidelity: ok
title: "日经 225 期货与期权（OSE）"
translated_at: 2026-06-18T23:33:48.287Z
---

# 日经 225 期货与期权（OSE）

## TL;DR

在日本交易所集团（JPX）旗下大阪交易所（OSE）上市的日经 225 期货与期权复合体，是日本按日成交额计最大的交易所交易衍生品商品群，也是日本股票贝塔敞口的正统对冲工具。该复合体包含三个主要合约 — 日经 225  大型期货、日经 225  迷你（十分之一规模）、以及最近上市的日经 225  微型期货（进一步缩小）— 外加横跨月度、季度、周度到期的日经 225  期权市场。全部在 [[securities/japan-securities-clearing-corp|JSCC]] 清算。

CME Globex 上日经 225  期货的平行上市，提供近 24 小时的价格发现；OSE 夜间交易时段与 CME 上市的日经合约共同创造了占日经期货总活动有意义份额的隔夜流动性。参与者构成大致分布于外国机构投资者（高频与宏观）、日本证券公司自营台、外国 HFT 以及散户（尤其在迷你合约中）之间；国内寿险公司与养老金基金的纯现物股票对冲是较小但结构性重要的一块。

对 FinWiki 而言，本条目涵盖合约规格、迷你 / 微型散户层、周度期权、OSE / Globex 交易时间的双轨、参与者构成，以及该复合体如何与 [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI volatility index]] 和 [[derivatives/topix-futures|TOPIX futures]] 相关联。

## Wiki route

本条目归属于 [[derivatives/INDEX|derivatives index]]。请对照 [[derivatives/topix-futures]]（JPX 旗舰指数期货同业）、[[derivatives/nikkei-vix-jpx-vi-equivalent]]（同一期权曲面的波动率表达）、[[derivatives/japan-single-stock-options]]（个股期权市场）阅读。上市场所为 [[securities/osaka-exchange|Osaka Exchange]]；清算层为 [[securities/japan-securities-clearing-corp|JSCC]]；更广泛的市场基础设施背景为 [[securities/japan-market-infrastructure-map]]。

## 合约规格

OSE 上市三个日经 225  期货合约与日经 225  期权曲面：

| 合约 | 标的 | 乘数 | 最小变动价位 | 上市月份 |
|---|---|---|---|---|
| 日经 225  期货（大型） | 日经 225  股价平均 | JPY 1,000  × 指数 | JPY 10 （= 每跳 JPY 10,000 ） | 3 月 / 6 月 / 9 月 / 12 月，加最近各月 |
| 日经 225  迷你 | 日经 225  股价平均 | JPY 100  × 指数（1/10） | JPY 5 （= 每跳 JPY 500 ） | 月度，多个连续月 |
| 日经 225  微型期货 | 日经 225  股价平均 | JPY 10  × 指数（1/100） | JPY 5  | 月度 |
| 日经 225  期权 | 日经 225  股价平均 | JPY 1,000  × 指数 | 按权利金跳动缩放 | 月度（第三个周五）、季度、周度 |

所有合约在合约月第二个周五上午对特别清算指数（SQ）现金结算（即所谓"SQ 日"）。期权在标准月度与周度系列中为欧式。

## 交易时间：OSE 日盘、OSE 夜盘与 CME Globex

日经期货复合体通过三个重叠的场所实际上 24 小时交易：

| 场所 / 时段 | 时间（JST，约） | 活动概况 |
|---|---|---|
| OSE 日盘时段 | 08:45–15:15  | 国内证券公司流量；客户对冲；日内 HFT。 |
| OSE 夜盘时段 | 16:30–06:00 （次日） | 外国宏观与 HFT 活动；对欧洲数据、美国经济数据、FOMC、美股走势作出反应。 |
| CME Globex 日经 225 （美元计价与日元计价） | 近 24 小时 | 美国重叠时段定价；机构跨境对冲；在美国时段提供参考价格。 |

OSE 夜盘时段在多个规则周期中被延长，以捕捉更多的欧洲与美国交易日。CME 上市的日经 225  期货（美元计价与日元计价两者）提供了平行场所，OSE 与 CME 定价之间存在套利机会，尤其在跳空期间。

对运营全球股票波动率账簿的机构而言，OSE / CME 双重上市意味着日本股票对冲几乎可以在任何时间建立。对日本国内流量而言，OSE 夜盘时段捕捉了大部分盘后业务；CME 成交量由美国本土及全球账户主导。

## 迷你与微型：散户层

日经 225  迷你（2006 上市）与日经 225  微型（2023 上市）合约将标准合约为小型参与者缩小规模：

| 方面 | 迷你 | 微型 |
|---|---|---|
| 相对大型的规模 | 1/10  | 1/100  |
| 保证金要求 | 约为大型的 1/10  | 约为大型的 1/100  |
| 主要用户群 | 活跃散户；小型机构残余对冲；入门级算法策略 | 散户；入门级投资者；小账户组合叠加 |
| 日成交量 | 按合约数计经常超过大型合约 | 绝对成交量较小；增长中 |

迷你合约自上市以来一直是日经期货活动的主要驱动力，尤其在日本散户经纪商的保证金交易客户与日本日内交易者群体之间。微型进一步降低了入门门槛；其采用情况作为散户股票衍生品参与度的衡量指标受到关注。

散户对日经期货的接入由提供期货保证金交易的 [[securities/INDEX|securities firms]] 媒介，包括 SBI 证券、乐天证券、松井证券、Monex、au 嘉信证券等主要在线券商（在 [[securities/japan-online-brokerage-competition]] 中涵盖）。

## 周度期权

日经 225  周度期权将期权曲面扩展至标准月度到期之外：

| 方面 | 详情 |
|---|---|
| 到期周期 | 每个周五（月度到期落在第二个周五） |
| 上市系列 | 通常任何时候上市两到五个周度到期 |
| 风格 | 欧式；对周度 SQ 现金结算 |
| 用例 | 围绕预定事件（日银金融政策决定会合、FOMC、财报）的短期战术性头寸、伽马剥头皮、风险限定期权策略 |

周度期权在外国宏观基金、做市自营台与成熟散户之间的采用有所增长；周度期权的日成交量如今是日经期权总成交额的有意义份额。周度系列的隐含波动率定价提供了比单独的月度期权更细颗粒度的事件波动率曲线，并通过标的期权序列直接供入 [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI]] 的计算。

## 参与者构成

OSE 通过其交易统计公布日经期货与期权的投资者类别细分。高层级构成（在月度 OSE 发布中公开披露）：

| 类别 | 日经期货成交量的典型份额 |
|---|---|
| 外国投资者（机构、HFT、宏观） | 单一最大区块，期货成交额经常 60–70%+ |
| 证券公司自营交易 | 相当份额；做市与自营 |
| 证券公司经纪流量（机构客户） | 可观；输送外国与国内机构订单 |
| 个人投资者（散户） | 集中于迷你与微型；迷你成交量的有意义份额 |
| 银行、保险公司、养老金基金 | 较小的直接份额；常经主经纪商接入 |

对期权而言，由于期权做市与对冲的运营复杂度更高，参与者构成更偏向成熟的机构与自营账户。

外国投资者份额是用于理解谁驱动日经期货定价的常被引用统计 — 并解释了 OSE 夜盘时段的突出性（当外国账户与欧洲及美国时段重叠时）。

## 与其他日经挂钩商品的比较

多种工具在现物与衍生品间表达日经 225  敞口：

| 工具 | 场所 | 用例 |
|---|---|---|
| 日经 225  ETF（1321  大和、1330  日兴、1320  NEXT FUNDS 等） | TSE | 现物股票敞口；实物支持；由买入持有及 ETF 套利使用 |
| 日经 225  期货（大型、迷你、微型） | OSE | 杠杆敞口；机构与散户对冲 |
| 日经 225  期权 | OSE | 方向 + 波动率表达 |
| CME 日经 225  期货（美元与日元） | CME Globex | 美国时段定价；跨境套利 |
| 日经 225  指数期货（SGX） | 新加坡交易所 | 亚洲重叠时段定价 |
| 反向 / 杠杆 ETF（例如 1357, 1570） | TSE | 散户单日杠杆产品 |

OSE / CME / SGX 上市共同提供了全球近乎连续的日经 225  期货定价。ETF 与期货套利是基差流量的稳定来源；日经 ETF 的做市商（见 [[securities/japan-market-maker-and-liquidity-provider-landscape]]）惯常运行期货对冲。

## 与 TOPIX 期货及 JPX 优质 150

 的比较

[[derivatives/topix-futures|TOPIX futures]] 是 JPX 旗舰的广义市场指数期货（覆盖约 2,000  只 TSE 优质股）；日经 225  期货覆盖 225 只股价加权的日经 225  平均。这两种产品服务于重叠但不同的对冲受众：

| 方面 | 日经 225  期货 | TOPIX 期货 |
|---|---|---|
| 范围 | 225  只股票；股价加权 | 约 2,000  只股票；自由流通市值加权 |
| 板块倾斜 | 因股价加权而偏重科技 / 工业 | 更广泛，银行 / 大型工业按市值权重反映 |
| 日成交量 | 更大（尤其含迷你 + 微型散户） | 更小；机构主导 |
| 主要用户 | 散户 + 外国宏观 + 日本证券自营 | 国内机构 ALM、养老金对冲 |

对更广泛的股票波动率对冲，JPX 还上市了 JPX 优质 150  期货与 TSE 新兴市场（现 TSE 成长）期货，成交量小得多；日经 225  / TOPIX 这一对仍是主导对。

## 清算与保证金

所有日经 225  期货与期权在 [[securities/japan-securities-clearing-corp|JSCC]] 清算：

| 要素 | 详情 |
|---|---|
| CCP | JSCC；交易执行时进行更替 |
| 保证金方法 | SPAN 式组合保证金；跨期货、期权及相关产品的组合抵消 |
| 结算 | 月度系列在合约月第二个周五对 SQ（特别清算指数）现金结算；周度期权对周五周度 SQ |
| 违约管理 | 标准 JSCC 瀑布（违约方保证金 → 违约方出资 → JSCC 资本 → 会员基金 → 更多资源） |

基于 SPAN 的组合方法允许日经 225  期货、期权、迷你、微型头寸在一次保证金计算下净额，支持活跃的期权-期货策略。

## Related

- [[derivatives/INDEX]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[securities/INDEX]]
- [[securities/osaka-exchange]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-online-brokerage-competition]]
- [[exchanges/INDEX]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[megabanks/mufg-bank]]
- [[INDEX|FinWiki index]]

## Sources

- 日本交易所集团 / 大阪交易所：日经 225  期货、日经 225  迷你、日经 225  微型期货、日经 225  期权合约规格。
- JPX：OSE 衍生品月度交易量统计与投资者类别细分。
- 日本证券清算机构：OSE 衍生品的保证金方法与违约管理。
- CME Group：日经 225  期货（美元计价与日元计价）合约页面。
- 金融厅：关于上市衍生品与经纪商-交易商义务的 FIEA 框架。
- 日本经济新闻社：日经 225  指数方法论与特别清算指数计算。

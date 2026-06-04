---
source: derivatives/nikkei-225-futures-options
source_hash: 54a81709b93c43a1
lang: zh
status: machine
fidelity: ok
title: "日经 225  期货与期权（OSE）"
translated_at: 2026-05-31T03:19:56.453Z
---

# 日经 225  期货与期权（OSE）

## 摘要

在日本交易所集团（JPX）旗下大阪交易所（OSE）上市的日经 225  期货与期权产品群，按日成交额计是日本最大的交易所交易衍生品产品集，也是日本股票贝塔敞口的标准套保工具。该产品群包含三个主要合约——大型日经 225  期货、日经 225  mini（十分之一规模）以及近期推出的日经 225  微型期货（进一步缩小）——加上跨越月度、季度和周度到期的日经 225  期权市场。全部在 [[securities/japan-securities-clearing-corp|JSCC]] 清算。

日经 225  期货在 CME Globex 上的平行上市提供近 24 小时的价格发现；OSE 夜盘与 CME 上市的日经合约共同形成隔夜流动性，占日经期货总活跃度的可观份额。参与者构成大致分为外国机构（高频与宏观）、日本证券公司自营台、外国 HFT 和散户（尤其是 mini 合约）；国内寿险公司和养老基金的纯现货股票套保是较小但结构上重要的一块。

对 FinWiki 而言，本条目涵盖合约规格、mini / 微型散户层、周度期权、OSE / Globex 交易时段双轨、参与者构成，以及该产品群如何与 [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI volatility index]] 及 [[derivatives/topix-futures|TOPIX futures]] 关联。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/topix-futures]] for the JPX-flagship index futures peer, [[derivatives/nikkei-vix-jpx-vi-equivalent]] for the volatility expression of the same options surface, and [[derivatives/japan-single-stock-options]] for the single-name equity option market. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; the clearing layer is [[securities/japan-securities-clearing-corp|JSCC]]; the broader market-infrastructure context is [[securities/japan-market-infrastructure-map]].

## 合约规格

OSE 上市三个日经 225  期货合约及日经 225  期权面：

| 合约 | 标的 | 乘数 | 最小变动价位 | 上市月份 |
|---|---|---|---|---|
| 日经 225  期货（大型） | 日经 225  股价平均 | JPY 1,000  × 指数 | JPY 10 （= 每跳 JPY 10,000 ） | 3 / 6 / 9 / 12 月，外加最近月份 |
| 日经 225  mini | 日经 225  股价平均 | JPY 100  × 指数（1/10） | JPY 5 （= 每跳 JPY 500 ） | 月度，多个连续月份 |
| 日经 225  微型期货 | 日经 225  股价平均 | JPY 10  × 指数（1/100） | JPY 5  | 月度 |
| 日经 225  期权 | 日经 225  股价平均 | JPY 1,000  × 指数 | 按权利金跳点缩放 | 月度（第三个周五）、季度、周度 |

所有合约均按合约月份第二个周五上午的特别报价（SQ，所谓"SQ 日"）现金结算。标准月度和周度系列的期权为欧式。

## 交易时段：OSE 日盘、OSE 夜盘与 CME Globex

日经期货产品群通过三个重叠场所实际上全天候交易：

| 场所 / 时段 | 时间（JST，近似） | 活动特征 |
|---|---|---|
| OSE 日盘 | 08:45–15:15  | 国内证券公司流量；客户套保；日内 HFT。 |
| OSE 夜盘 | 16:30–06:00 （次日） | 外国宏观与 HFT 活动；对欧洲数据、美国经济数据、FOMC、美股走势作出反应。 |
| CME Globex 日经 225 （美元及日元计价） | 近 24 小时 | 美国时段重叠定价；机构跨境套保；在美国时段提供参考价。 |

OSE 夜盘经多轮规则周期延长，以覆盖更多欧洲和美国交易日。CME 上市的日经 225  期货（美元计价与日元计价）提供平行场所，OSE 与 CME 定价之间存在套利机会，尤其在跳空时段。

对运行全球股票波动率账本的机构而言，OSE / CME 双重上市意味着几乎可在任何时间建立日本股票套保。对日本国内流量而言，OSE 夜盘捕获大部分盘后业务；CME 成交量则由美国本土及全球账户主导。

## mini 与微型：散户层

日经 225  mini（2006 推出）和日经 225  微型（2023 推出）合约把标准合约按比例缩小，面向较小参与者：

| 方面 | mini | 微型 |
|---|---|---|
| 相对大型的规模 | 1/10  | 1/100  |
| 保证金要求 | ~大型的 1/10  | ~大型的 1/100  |
| 主要用户群 | 活跃散户；小型机构残余套保；入门算法策略 | 散户；入门级投资者；小账户组合叠加 |
| 日成交量 | 按合约张数计常超过大型合约 | 绝对成交量较小；持续增长 |

mini 合约自推出以来一直是日经期货活跃度的主要驱动力，尤其在日本散户券商的保证金交易客户和日本日内交易者群体中。微型进一步降低入门门槛；其采用度被作为衡量散户股票衍生品参与度的指标受到关注。

散户对日经期货的接入由提供期货保证金交易的 [[securities/INDEX|securities firms]] 中介，包括 SBI 证券、乐天证券、松井证券、Monex、au Kabucom 证券等主要网络券商（在 [[securities/japan-online-brokerage-competition]] 中涵盖）。

## 周度期权

日经 225  周度期权把期权面扩展到标准月度到期之外：

| 方面 | 细节 |
|---|---|
| 到期周期 | 每个周五（月度到期落在第二个周五） |
| 上市系列 | 任何时点通常上市两到五个周度到期 |
| 风格 | 欧式；按周度 SQ 现金结算 |
| 用例 | 围绕既定事件（日本银行货币政策会议、FOMC、财报）的短期战术性头寸、伽马刮头皮、限定风险期权策略 |

周度期权在外国宏观基金、交易商自营台和成熟散户中采用度上升；周度期权的日成交量现已占日经期权总成交额的可观份额。周度系列的隐含波动率定价提供比单看月度期权更细颗粒度的事件波动率曲线，并通过标的期权条直接进入 [[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI]] 计算。

## 参与者构成

OSE 通过其交易统计发布日经期货与期权的投资者类别细分。高层构成（在 OSE 月度发布中公开披露）：

| 类别 | 日经期货成交量的典型份额 |
|---|---|
| 外国投资者（机构、HFT、宏观） | 最大的单一板块，常占期货成交额 60–70%+ |
| 证券公司自营交易 | 份额显著；做市与自营 |
| 证券公司经纪流量（机构客户） | 占比可观；导流外国和国内机构订单 |
| 个人投资者（散户） | 集中于 mini 和微型；占 mini 成交量可观份额 |
| 银行、保险公司、养老基金 | 直接份额较小；常通过主经纪商接入 |

对期权而言，由于期权做市与套保的运营复杂度更高，参与者构成更偏向成熟机构和自营账户。

外国投资者份额是理解谁在驱动日经期货定价时经常被引用的统计数据——也解释了 OSE 夜盘的突出地位（外国账户与欧洲和美国时段重叠时）。

## 与其他日经挂钩产品的比较

多种工具在现货与衍生品中表达日经 225  敞口：

| 工具 | 场所 | 用例 |
|---|---|---|
| 日经 225  ETF（1321  大和、1330  日兴、1320  NEXT FUNDS 等） | TSE | 现货股票敞口；实物支持；用于买入持有和 ETF 套利 |
| 日经 225  期货（大型、mini、微型） | OSE | 杠杆敞口；机构与散户套保 |
| 日经 225  期权 | OSE | 方向 + 波动率表达 |
| CME 日经 225  期货（美元和日元） | CME Globex | 美国时段定价；跨境套利 |
| 日经 225  指数期货（SGX） | 新加坡交易所 | 亚洲时段重叠定价 |
| 反向 / 杠杆 ETF（如 1357, 1570） | TSE | 散户单日杠杆产品 |

OSE / CME / SGX 上市共同在全球提供近乎连续的日经 225  期货定价。ETF 与期货套利是基差流量的稳定来源；日经 ETF 的做市商（见 [[securities/japan-market-maker-and-liquidity-provider-landscape]]）经常运行期货套保。

## 与 TOPIX 期货及 JPX-Prime 150

 的比较

[[derivatives/topix-futures|TOPIX futures]] 是 JPX 旗舰宽基指数期货（覆盖约 2,000  只 TSE Prime 股票）；日经 225  期货覆盖 225 只价格加权的日经 225  平均。两个产品服务于重叠但不同的套保受众：

| 方面 | 日经 225  期货 | TOPIX 期货 |
|---|---|---|
| 样本范围 | 225  只股票；价格加权 | ~2,000  只股票；自由流通市值加权 |
| 行业倾斜 | 因价格加权而偏重科技 / 工业 | 更广泛，银行 / 大盘工业按市值加权体现 |
| 日成交量 | 更大（尤其加上 mini + 微型散户） | 更小；机构主导 |
| 主要用户 | 散户 + 外国宏观 + 日本证券自营 | 国内机构 ALM、养老套保 |

为更广泛的股票波动率套保，JPX 还推出了 JPX-Prime 150  期货和 TSE Mothers（现 TSE Growth）期货，成交量小得多；日经 225  / TOPIX 这一对仍是主导的一对。

## 清算与保证金

所有日经 225  期货与期权在 [[securities/japan-securities-clearing-corp|JSCC]] 清算：

| 要素 | 细节 |
|---|---|
| CCP | JSCC；在成交执行时更替（novation） |
| 保证金方法 | SPAN 式组合保证金；期货、期权及相关产品间的组合对冲 |
| 结算 | 月度系列按合约月份第二个周五的 SQ（特别报价）现金结算；周度期权按周度周五 SQ 结算 |
| 违约管理 | 标准 JSCC 瀑布（违约方保证金 → 违约方出资 → JSCC 资本 → 会员基金 → 进一步资源） |

基于 SPAN 的组合方法允许日经 225  期货、期权、mini 和微型头寸在一次保证金计算下轧差，支持活跃的期权—期货策略。

## 相关

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

## 来源

- 日本交易所集团 / 大阪交易所：日经 225  期货、日经 225  mini、日经 225  微型期货及日经 225  期权合约规格。
- JPX：OSE 衍生品的月度交易量统计及投资者类别细分。
- 日本证券清算机构：OSE 衍生品的保证金方法与违约管理。
- 芝商所（CME Group）：日经 225  期货（美元计价与日元计价）合约页面。
- 金融厅：FIEA 下上市衍生品与券商义务框架。
- 日本经济新闻社：日经 225  指数方法论与特别报价计算。

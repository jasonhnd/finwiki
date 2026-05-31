---
source: derivatives/japan-single-stock-options
source_hash: 68d2992a76f25883
lang: zh
status: machine
fidelity: ok
title: "日本个股期权（OSE）"
translated_at: 2026-05-31T03:19:56.374Z
---

# 日本个股期权（OSE）

## TL;DR

日本交易所集团（JPX）旗下大阪交易所（OSE）的个股期权（個別証券オプション / Securities Options）是针对选定的日本个股的交易所上市期权。尽管 OSE 在任一时点对约 150 只大盘股上市期权，但与美国相比其实际流动性在结构上受限：日成交集中于少数高波动名称，且仍仅为相应美国个股期权合约成交量的一小部分。OSE 个股期权在 [[securities/japan-securities-clearing-corp|JSCC]] 清算。

日本个股期权市场在结构上受限反映了多重因素：零售期权交易文化小于美国、作为股票波动率分销渠道占主导的是 [[derivatives/structured-product-eb-knockin-japan-retail|structured EB / Knock-in retail notes]] 而非直接期权交易，以及历史上不如美国上市期权生态系统深厚的做市商格局。在 2022, 之后，围绕结构化产品的发行方一侧对冲活动以及企业回购 / 注销股份对冲带来了增量流量，但个股期权市场在结构上仍远比美国 Cboe/Nasdaq-PHLX/NYSE Arca/MEMX 上市期权生态系统浅薄。

对 FinWiki 而言，本条目涵盖合约规格、与美国个股期权的流动性现实比较、OTC 股票期权对机构流量的作用、2022 之后的发行方一侧对冲发展，以及个股期权深度未能发展的结构性原因。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. Read it against [[derivatives/nikkei-225-futures-options]] for the index-option peer that dominates exchange-traded Japan equity-vol flow, [[derivatives/topix-futures]] for the broader index-derivatives context, and [[derivatives/structured-product-eb-knockin-japan-retail]] for the retail-distribution channel that absorbs much of the equity-vol demand. The listing venue is [[securities/osaka-exchange|Osaka Exchange]]; clearing at [[securities/japan-securities-clearing-corp|JSCC]].

## Contract Specifications

OSE 证券期权具有以下标准规格：

| 要素 | 详情 |
|---|---|
| 标的 | 个别上市股票（由 OSE 基于流动性、市值和自由流通股标准选定） |
| 标的数量 | 任一时点约 150 只日本大盘股；受周期性新增 / 剔除影响 |
| 乘数 | 每张合约 100 股 |
| 类型 | 欧式行权 |
| 结算 | 现金结算，按合约月第二个周五上午标的的特别报价（SQ） |
| 到期周期 | 月度（通常上市最近两个月 + 选定的季月） |
| 最小变动价位 | 权利金最小变动价位随标的价格而异 |
| 交易时间 | OSE 日盘和夜盘（个股期权的夜盘有限） |

欧式 + 现金结算（非实物交割）是与美国个股期权的关键区别，后者为美式 + 实物交割。OSE 的欧式 / 现金结算惯例简化了保证金计算并避免了空头的指派风险，但相对美式的美国合约降低了"真实期权"的含量。

## Liquidity Reality

尽管有约 150 只上市名称，日成交量高度集中：

| 流动性层级 | 名称 | 特征 |
|---|---|---|
| 活跃层（少数名称） | 具备零售与机构兴趣的高波动大盘股（如软银集团、丰田、财报前后的快速变动者、银行） | 有可见买卖盘，偶有大宗交易 |
| 边缘层 | 大多数上市名称 | 零星交易；买卖盘宽；做市商挂单但流动性稀薄 |
| 实质沉寂层 | 长尾上市名称 | 大多数日子极少或没有交易 |

与美国个股期权市场的比较：

| 方面 | OSE 证券期权 | 美国个股期权（Cboe / NASDAQ / NYSE） |
|---|---|---|
| 标的范围 | 约 150 只股票 | 跨多家交易所约 3,000+ 只股票 |
| 日期权成交量（合计） | 适中；全行业不足百万张合约 | 每日数千万张合约 |
| 零售参与 | 非常有限 | 主要驱动力（Robinhood 之后） |
| 做市商深度 | 少数专门做市商 | 数十家主要做市商；竞争激烈 |
| 类型 | 欧式、现金结算 | 美式、实物 |
| 多交易所竞争 | 单一场所（OSE） | 多家竞争交易所；复杂的 SOR 路由 |

深度差距巨大且持久。无法在 OSE 成交的机构性日本股票期权流量，通常与交易商银行进行双边 OTC（关于交易商专营收入一侧见 [[derivatives/dealer-bank-derivatives-revenue-mix]]）。

## Why Liquidity Is Limited (Structural Factors)

若干结构性原因解释了 OSE 个股期权市场更浅薄的状况：

1. **零售期权文化**：日本零售股票投资者严重偏向融资融券交易（信用取引）、CFD / 外汇保证金交易（见 [[derivatives/retail-fx-margin-trade-japan]]）以及结构化零售债券（见 [[derivatives/structured-product-eb-knockin-japan-retail]]），而非直接期权交易。文化与监管的漂移使这些渠道相对于个股期权更受青睐。
2. **结构化产品分销**：通过 [[securities/japan-online-brokerage-competition|securities firms]] 和 [[banking/INDEX|bank retail]] 渠道分销的 EB 票据、敲入票据以及其他股票挂钩结构化产品，在客户从未接触期权合约的情况下吸收了相当份额的零售股票波动率需求。
3. **做市商经济性**：日本的个股期权做市历史上面临比美国更薄的双向流量，限制了专门做市商投入的资本量。鸡生蛋蛋生鸡的难题（没有流量 → 没有做市商 → 没有流量）一直存在。
4. **税务处理**：日本针对个人投资者交易上市期权的税务处理不如某些其他股票工具有利，抑制了零售兴趣。
5. **定价透明度**：相对美国更宽的买卖价差和更低的透明度，使 OSE 合约即便对成熟零售也较不具吸引力。

结果是：上市个股期权市场存在，但更多地作为利基的机构和结构化产品对冲场所发挥作用，而非作为主要的零售 / 机构投机场域。

## OTC Single-Stock Options

对于无法在 OSE 成交的机构流量，交易商银行提供双边 OTC 个股期权：

| 用例 | 典型结构 |
|---|---|
| 交叉持股解除时的大宗对冲 | 针对特定名称的 OTC 看跌期权或领口；定制规模和期限 |
| 企业回购执行（TOSTNeT、ToSTNeT-3 大宗） | 合成远期 / 领口以管理执行价格 |
| 结构化票据对冲 | 交易商通过标的的 OTC 期权或期货对冲所发行的 EB / 敲入票据风险 |
| 大型战略持股出售 | 多腿 OTC 期权以递延确认或管理市场冲击 |

OTC 个股期权依据 ISDA 主协议和 CSA 记录。对手方风险和担保条款相对于相应的上市合约（在存在时）推动了不容小觑的买卖价差。

## Post-2022 Issuer-Side Hedging Developments

自 2022以来，若干趋势带来了增量的个股期权流量：

1. **交叉持股解除加速**：TSE 的市场重组（Prime / Standard / Growth）以及对资本效率和公司治理改革的加强关注，推动日本企业解除交叉持股。银行证券附属公司（MUFG Securities、SMBC Nikko、Mizuho Securities）执行这些解除并使用个股期权 / OTC 领口管理执行风险。
2. **回购计划执行**：日本回购量增加，为运营回购委托的证券公司带来对冲需求。
3. **结构化产品发行量**：通过 [[derivatives/structured-bond-japan-retail-issuance|retail structured channels]] 的 EB / 敲入票据量增长；发行方一侧交易商对标的名称的对冲，在有上市合约处带来流向 OSE 个股期权的流量，否则走 OTC。
4. **家族办公室与高净值客群增长**：日本的财富管理客群已缓慢增加面向高净值客户的用期权策略（备兑看涨、现金担保看跌），尤其通过 [[securities/japan-prime-brokerage-and-institutional-financing|prime-brokerage]] 渠道。

这些发展增加了流量，但未将该市场转变为美国式的零售驱动上市期权市场。

## Clearing and Margin

| 要素 | 详情 |
|---|---|
| CCP | [[securities/japan-securities-clearing-corp|JSCC]] |
| 保证金 | SPAN 式组合保证金；在某些情况下可与相关产品（期货、ETF）对冲抵消 |
| 结算 | 现金结算至 SQ；到期时空头无实物交割风险 |
| 违约管理 | 标准 JSCC 瀑布机制 |

相比美式实物交割产品，欧式 + 现金结算在到期时显著降低了运营复杂度，但限制了某些期权策略变体（例如除息前对深度实值美式看跌期权提前行权）。

## Comparison with US Single-Stock Options Depth

与美国的深度差距通过个股层面的覆盖最能说明：

| 美国示例 | 日期权成交量特征 |
|---|---|
| Apple（AAPL） | 跨众多行权价和到期日每日数十万至数百万张合约 |
| Tesla（TSLA） | 常规每日数百万张合约；有时是全球成交最活跃的单一名称 |
| Nvidia（NVDA） | 每日数十万至数百万张 |

| OSE 示例 | 日期权成交量特征 |
|---|---|
| 最活跃的 OSE 个股期权 | 顶级名称每日数千至低数万张合约 |
| 典型的 OSE 个股期权 | 每日数百张或更少 |

数量级的差异反映了上述结构性因素，加上美国大得多的标的市值和零售投资者基础。

对于以指数层面表达的日本股票敞口，[[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]] 系列提供了截然不同的深度——在指数层面，OSE 流动性与主要的全球股指期权市场相当。

## Related

- [[derivatives/INDEX]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/retail-fx-margin-trade-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[securities/INDEX]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[banking/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group / Osaka Exchange: Securities Options (個別証券オプション) contract specifications and listed-name registry.
- JPX: Monthly trading-volume statistics for OSE derivatives by product.
- Japan Securities Clearing Corporation: Margin methodology and settlement rules.
- Financial Services Agency: FIEA framework on listed and OTC derivatives.
- OCC (US): For comparison, US single-stock option market data and clearing volumes.
- Cboe Global Markets: US single-stock options data for depth comparison.

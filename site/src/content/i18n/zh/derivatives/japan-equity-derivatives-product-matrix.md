---
source: derivatives/japan-equity-derivatives-product-matrix
source_hash: 94b1bba21a5877b8
lang: zh
status: machine
fidelity: ok
title: "日本股票衍生品产品矩阵"
translated_at: 2026-05-31T03:19:56.436Z
---

# 日本股票衍生品产品矩阵

## TL;DR

日本的上市股票衍生品体系集中于日本交易所集团（JPX）旗下的大阪交易所（OSE），并在 JSCC 清算。产品集涵盖**日经 225 期货（标准、迷你、微型）、日经 225 期权、TOPIX 期货（标准与迷你）、TOPIX 期权、JPX-Nikkei Index 400 期货与期权、JPX 波动率指数（JPX-VI）期货、东证（TSE）上市股票的单股期权、行业指数期货（TOPIX Core30, TOPIX Banks），以及结构化股票产品**（带敲入的可交换债（EB）、可转债（CB）、结构化股票挂钩票据）。下方矩阵汇集交易场所、名义本金 / 合约规模、到期周期、结算方式（现金 vs 实物）、最小变动价位（tick size）、市场参与者构成、对冲用例，以及指示性的成交集中度，以便任何单一产品页面都能被置入更广泛的日本股票衍生品架构中。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]]. It pairs with [[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]] for the headline index-derivative lane, [[derivatives/topix-futures|TOPIX futures]] for the broad-market hedge lane, [[derivatives/japan-single-stock-options|Japan single-stock options]] for the name-by-name optionality lane, [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei VIX / JPX-VI]] for the volatility surface, and [[derivatives/structured-product-eb-knockin-japan-retail|Japan retail EB knock-in structured products]] for the structured / retail-distribution lane. The cash market sits at [[securities/INDEX|securities index]] and [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]; the exchange / CCP layer is [[securities/japan-securities-clearing-corp|JSCC]] and the dealer franchise is [[banking/INDEX|banking index]] plus the [[JapanFG/INDEX|JapanFG]] securities-firm pages.

## Why an equity-derivative product matrix matters

诸如「日本股票衍生品」这样的单一说法，掩盖了一个事实：合约规模、结算方式、参与者构成和用例在各产品间各不相同。若不加以分类：

- 一份日经 225 大型期货合约看起来像一份日经 225 迷你合约，尽管参与者构成（机构 vs 零售 / HFT）以及成交量 / 未平仓合约分布各不相同；
- 一份 TOPIX 期货看起来像一份日经 225 期货，尽管标的范围、自由流通量（free-float）方法论、做市商仓库（warehouse）用途以及主动型基金基准角色各不相同；
- 一份东证名称的单股期权看起来像一份指数期权，尽管实物交割惯例、流动性以及财报事件对冲用途各不相同；
- 一份 EB（可交换债）敲入结构化票据看起来像一份奇异期权，尽管它其实是经由证券公司发行、面向零售分销的 OTC 结构化产品。

该矩阵把每个产品归位，以便任何单一衍生品页面都能与其替代性的对冲或投机路径相对照阅读。

## Product 1 — 日经 225 标准期货 (大型)

- **Exchange.** JPX 旗下大阪交易所（OSE）；在 [[securities/japan-securities-clearing-corp|JSCC]] 清算。
- **Underlying.** 日经平均股价（日经 225），一个由东证 Prime Market 成分股构成、价格加权的 225-名称指数。
- **Notional / contract size.** 指数价格 × 每指数点 ¥1,000 。当日经在约 40,000,  水平时，一份合约约为 ¥40 million 名义本金。
- **Expiry cycle.** 季度（3 月、6 月、9 月、12 月），最多挂出若干合约月份；在第二个周五上午集合竞价时进行「Big SQ」（特别报价，special quotation）。亦挂出月度到期。
- **Settlement.** 对照 SQ 值进行现金结算。
- **Tick size.** 10 指数点（= 每份合约 ¥10,000 ）。
- **Participant mix.** 外国机构投资者（按成交额计高度占主导）、日本机构投资者、做市商仓库、宏观对冲基金、零售取向的 HFT。
- **Typical daily turnover.** 集中于近月合约；最活跃的合约每个交易时段成交数十万份合约。
- **Hedge use cases.** 宏观叠加、为外国股票配置者进行组合 beta 对冲、做市商仓库对冲单股和结构化产品账簿、ETF 套利。

## Product 2 — 日经 225 迷你期货

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** 日经 225。
- **Notional / contract size.** 指数价格 × 每指数点 ¥100 （标准的十分之一）。当日经 40,000,  时，一份迷你合约约为 ¥4 million 名义本金。
- **Expiry cycle.** 近月周期内逐月，加上较长期限的季度挂牌。
- **Settlement.** 对照 SQ 值现金结算。
- **Tick size.** 5 指数点（= 每份迷你合约 ¥500 ）。
- **Participant mix.** 零售交易者（经由在线证券公司，占比重）、HFT、较小型机构账户、使用迷你进行精细对冲的单股做市商。
- **Typical daily turnover.** 合约数量非常高（按合约数量计常高于标准），峰值时每个交易时段以百万份合约计；名义成交额低于标准。
- **Hedge use cases.** 零售方向性建仓、做市商精细对冲、HFT 短周期策略、小型组合叠加。

## Product 3 — 日经 225 微型期货

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** 日经 225。
- **Notional / contract size.** 指数价格 × 每指数点 ¥10 （标准的百分之一）。当日经 40,000,  时，一份微型合约约为 ¥400,000  名义本金。
- **Expiry cycle.** 月度；为加深零售准入阶梯而推出。
- **Settlement.** 对照 SQ 值现金结算。
- **Tick size.** 5 指数点（= 每份微型合约 ¥50 ）。
- **Participant mix.** 零售（主要）、小账户 HFT。
- **Typical daily turnover.** 与迷你并行设立，但在日经期货整体成交中占比较小；作为零售产品在增长。
- **Hedge use cases.** 零售学习 / 入门合约、极小头寸规模、为个人 NISA 规模的股票组合对冲。

## Product 4 — 日经 225 期权

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** 日经 225。
- **Notional / contract size.** 指数价格 × 每指数点 ¥1,000 （与标准日经期货乘数相同）。
- **Expiry cycle.** 月度；周五 SQ（每月第二个周五）。亦挂出周度期权（Weekly Nikkei 225 Options），以加深短期限曲面。
- **Settlement.** 欧式行权；对照 SQ 值现金结算。
- **Tick size.** 权利金最小变动价位随权利金水平而异（例如 1 指数点，或对低权利金序列为分数）。
- **Participant mix.** 外国期权做市商、日本证券公司期权台、结构化产品对冲流、零售分销的结构化票据对冲、宏观基金。零售单腿参与较单股期权为轻。
- **Typical daily turnover.** 可观；每日期权成交量在各活跃行权价上以数万至数十万份合约计；期权未平仓合约集中于近月和季度到期附近。
- **Hedge use cases.** 为结构化零售产品（EB 敲入、封顶票据）进行的做市商对冲、波动率交易、为机构股票配置进行的尾部对冲、gamma 对冲。

## Product 5 — TOPIX 标准期货

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** 东京证券价格指数（TOPIX），一个覆盖东证 Prime Market、经自由流通量调整、按市值加权的指数。
- **Notional / contract size.** 指数价格 × 每指数点 ¥10,000 。当 TOPIX 在约 2,800,  时，一份合约约为 ¥28 million 名义本金。
- **Expiry cycle.** 季度（3 月、6 月、9 月、12 月），SQ 周五结算。
- **Settlement.** 对照 SQ 值现金结算。
- **Tick size.** 0.5 指数点（= 每份合约 ¥5,000 ）。
- **Participant mix.** 国内机构投资者（养老基金、寿险公司、公共养老金叠加）、以 TOPIX 作为日本被动叠加的外国机构投资者、做市商仓库、以 TOPIX 为基准的主动型资产管理人。
- **Typical daily turnover.** 可观的机构成交量；由于国内机构基准敞口的驱动，其成交份额按名义本金计在历史上与日经标准相当或更大。
- **Hedge use cases.** 机构基准对冲（TOPIX 是日本占主导的主动型基金基准）、被动型基金复制叠加、做市商对冲单股一篮子的交叉对冲、养老金去风险。

## Product 6 — TOPIX 迷你期货

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** TOPIX。
- **Notional / contract size.** 指数价格 × 每指数点 ¥1,000 （标准的十分之一）。当 TOPIX 在约 2,800,  时，一份迷你合约约为 ¥2.8 million 名义本金。
- **Expiry cycle.** 季度加月度挂牌；SQ 周五结算。
- **Settlement.** 对照 SQ 值现金结算。
- **Tick size.** 0.25 指数点（= 每份迷你合约 ¥250 ）。
- **Participant mix.** 零售、较小型机构账户、HFT、做市商精细对冲。
- **Typical daily turnover.** 小于 TOPIX 标准；迷你通道提供零售准入和精细化规模。
- **Hedge use cases.** 针对 TOPIX 基准主动型基金的小型组合叠加、零售方向性建仓、做市商对冲精细化。

## Product 7 — TOPIX 期权

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** TOPIX。
- **Notional / contract size.** 指数价格 × 每指数点 ¥10,000 。
- **Expiry cycle.** 月度；周五 SQ。
- **Settlement.** 欧式；对照 SQ 值现金结算。
- **Tick size.** 取决于权利金水平。
- **Participant mix.** 机构波动率交易、养老金叠加策略（TOPIX 买入看跌对冲）、结构化产品对冲、外国波动率基金；零售参与较日经期权为薄。
- **Typical daily turnover.** 显著低于日经 225 期权；尽管现货市场的机构基准是 TOPIX，日本的活跃波动率曲面仍集中于日经而非 TOPIX。
- **Hedge use cases.** 养老金去风险（多头看跌）、被动型基金尾部对冲、机构波动率交易、对冲日经 vs TOPIX 离散度的做市商交叉对冲。

## Product 8 — JPX-VI 期货（波动率指数）

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** 日经 225 VI（日经 225 波动率指数）——一个根据上市日经 225 期权价格计算的 30-天远期隐含波动率指数。
- **Notional / contract size.** 指数价格 × 每指数点 ¥10,000 。
- **Expiry cycle.** 月度；在 SQ 日对照 VI 值进行 SQ 结算。
- **Settlement.** 对照 SQ 值现金结算。
- **Tick size.** 0.05 指数点（= 每份合约 ¥500 ）。
- **Participant mix.** 波动率套利基金、做市商 vega 对冲台、围绕事件风险建仓的宏观基金、尾部风险叠加方案。零售使用有限。
- **Typical daily turnover.** 远小于日经 225 期货或期权；JPX-VI 期货市场是专业波动率场所，而非深度零售曲面。波动率曲面背景见 [[derivatives/nikkei-vix-jpx-vi-equivalent|Nikkei VIX / JPX-VI]]。
- **Hedge use cases.** 为期权账簿进行的 vega 对冲、围绕事件风险（BoJ MPM、美国 FOMC、日本选举）的宏观建仓、尾部风险叠加、波动率之波动率（volatility-of-volatility）交易。

## Product 9 — 单股期权（东证上市名称）

- **Exchange.** OSE；在 JSCC 清算；标的股票在东证（TSE）交易。
- **Underlying.** 指定的东证上市股票（由 OSE / JSCC 选定的合格名称）。
- **Notional / contract size.** 标准化的股数等值合约（通常每份合约为 100-股等值）。
- **Expiry cycle.** 月度；SQ 周五。
- **Settlement.** 实物交割（部分合约为美式行权；产品规格因序列而异）。标的股票经由 JASDEC 结算。
- **Tick size.** 取决于权利金水平。
- **Participant mix.** 机构波动率交易、零售方向性 / 收益增强、结构化产品对冲流、对冲 EB 敲入零售产品的做市商仓库。
- **Typical daily turnover.** 集中于最大型名称（丰田、索尼、SoftBank Group、Fast Retailing、巨型银行代码）；整体单股期权市场远比指数期权市场浅，但最活跃的单一名称承载着有意义的每日成交量。
- **Hedge use cases.** 财报事件对冲、为 EB / 反向可转换（reverse-convertible）结构化产品进行的做市商对冲、零售收益增强（备兑看涨，covered call）、单名波动率交易。

## Product 10 — 行业指数期货（TOPIX Core30, TOPIX Banks）

- **Exchange.** OSE；在 JSCC 清算。
- **Underlying.** 行业 / 子指数代码（TOPIX Core30, TOPIX Banks，以及其他行业指数）。
- **Notional / contract size.** 通常为行业指数 × 每指数点 ¥10,000 。
- **Expiry cycle.** 季度；SQ 周五。
- **Settlement.** 对照 SQ 值现金结算。
- **Tick size.** 因行业而异。
- **Participant mix.** 专业宏观 / 行业基金、做市商叠加、养老金行业叠加；较广义市场产品为薄。
- **Typical daily turnover.** 显著小于 TOPIX 或日经广义指数合约；行业期货是用于主题性叠加的小众场所，而非深度连续市场。
- **Hedge use cases.** 行业叠加（为利率敏感组合进行银行业对冲；Core30  用于大盘倾斜策略）、主题性建仓、对冲行业 ETF 套利的做市商交叉对冲。

## Product 11 — 带敲入的可交换债（EB 敲入）

- **Exchange.** OTC；不在 OSE 上市。经由日本证券公司发行和分销；该结构化产品的场所是零售分销渠道，而非中央清算交易所。
- **Underlying.** 单只日本股票或一篮子日本股票；该结构化票据支付票息，并在敲入障碍（knock-in barrier）被突破时按面值赎回或交付股票。
- **Notional / contract size.** 票据发行规模；零售单笔每张票据从数万到数百万日元不等。
- **Expiry cycle.** 因票据而异；典型期限为 6 个月至 3 年。
- **Settlement.** 存续期内现金票息；敲入突破时实物股票交付（或视条款而定的现金等值）。
- **Tick size.** 因票据而异；票息和障碍在发行时确定。
- **Participant mix.** 零售投资者作为买方；证券公司作为发行人 / 分销商；做市商衍生品台作为对冲方，使用 OSE 上的单股期权和股票指数期权。
- **Typical daily turnover.** 无交易所成交；一级市场发行流由 [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in retail page]] 跟踪。结构化产品市场是一个有意义的零售流渠道，对单股 vega 和 gamma 产生持续的做市商对冲需求。
- **Hedge use cases.** 零售收益增强（买方实际上是卖出波动率以换取增强票息）；做市商对 EB 空头波动率敞口的对冲，经由单股期权和指数期权市场进行。

## Product 12 — 可转债（CB）与股票挂钩结构化票据

- **Exchange.** CB 为东证公司债 / OTC；结构化股票挂钩票据为 OTC。
- **Underlying.** 发行人自身股票（CB）或指定股票 / 一篮子（结构化票据）。
- **Notional / contract size.** CB 发行规模与公司债典型一致；结构化票据分销规模不一。
- **Expiry cycle.** CB 到期（典型 3–7 年）；结构化票据到期不一。
- **Settlement.** CB 现金票息 + 股份转换期权；结构化票据按条款书（term sheet）结算。
- **Tick size.** 在衍生品意义上不适用（N/A）。
- **Participant mix.** 机构 CB 投资者、对冲基金 CB 套利台、结构化票据零售 / 私人银行买方、做市商对冲台。
- **Typical daily turnover.** CB 二级成交不一；结构化票据分销流记录于做市商 / 承销商账簿，而非交易所成交。
- **Hedge use cases.** CB 发行人通过卖给投资者的内嵌股票期权募集可转换资本；对冲基金套利把 CB 分解为债券 + 股票期权 + 信用成分。结构化票据内嵌奇异收益（亚式、自动赎回、反向可转换），做市商通过指数和单股期权进行对冲。

## Cross-product comparison matrix

| Dimension | Nikkei 225 Std | Nikkei 225 Mini | Nikkei 225 Micro | Nikkei 225 Options | TOPIX Std | TOPIX Mini | TOPIX Options | JPX-VI Futures | Single-stock Options | Sector Futures | EB Knock-in | CB / Equity Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **交易所** | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OSE | OTC（证券公司） | TSE / OTC |
| **清算** | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | JSCC | 无（双边） | 无（双边） |
| **每指数点乘数** | ¥1,000 | ¥100 | ¥10 | ¥1,000 | ¥10,000 | ¥1,000 | ¥10,000 | ¥10,000 | 100-股等值 | ¥10,000 | 票据规模 | 债券面值 |
| **名义本金（示例）** | ~¥40m | ~¥4m | ~¥400k | ~¥40m delta-1 | ~¥28m | ~¥2.8m | ~¥28m delta-1 | 基于波动率指数 | 因名称而异 | 因行业而异 | 零售单笔 | 债券规模 |
| **到期周期** | 季度 + 月度 | 月度 + 季度 | 月度 | 月度（+ 周度） | 季度 | 季度 + 月度 | 月度 | 月度 | 月度 | 季度 | 因票据而异 | 债券到期 |
| **结算** | 现金（SQ） | 现金（SQ） | 现金（SQ） | 现金（SQ，欧式） | 现金（SQ） | 现金（SQ） | 现金（SQ，欧式） | 现金（SQ） | 实物股票交割 | 现金（SQ） | 现金 + 实物（敲入） | 现金 + 转换期权 |
| **最小变动价位** | 10 idx pt | 5 idx pt | 5 idx pt | 取决权利金 | 0.5 idx pt | 0.25 idx pt | 取决权利金 | 0.05 idx pt | 取决权利金 | 取决行业 | N/A | N/A |
| **HFT 参与** | 重 | 非常重 | 增长中 | 重 | 中等 | 中等 | 较低 | 较低 | 中等 | 较低 | 无 | 无 |
| **外国参与者** | 重 | 中等 | 较低 | 重 | 重 | 中等 | 重 | 中等 | 中等 | 较低 | 无 | 对冲基金 CB 套利 |
| **零售参与者** | 较低 | 重 | 重 | 较低 | 较低 | 中等 | 较低 | 较低 | 中等 | 较低 | 重 | 部分（CB / 私人银行） |
| **机构参与者** | 重 | 较低 | 较低 | 重 | 重 | 中等 | 重 | 专业 | 重 | 专业 | 无直接 | CB / 结构化票据买方 |
| **典型每日成交量** | 数十万份合约 | 数百万份合约 | 增长中 | 数万至数十万 | 数十万 | 较低 | 低于日经期权 | 专业小众 | 集中于头部名称 | 薄 | 无交易所成交 | 由发行驱动 |
| **对冲用例** | 宏观叠加、外国股票 beta 对冲、做市商仓库 | 零售方向性、做市商精细对冲、HFT | 零售入门、极小叠加 | 结构化产品对冲、波动率交易、尾部对冲 | 国内机构基准对冲 | 小型组合叠加 | 养老金买入看跌、做市商交叉对冲 | vega 对冲、事件风险宏观 | 财报对冲、EB 做市商对冲 | 行业叠加 | 零售收益增强 | 可转换资本 / 结构化 |

## How to read this matrix

股票衍生品产品矩阵是一个公开层面（public-surface）的工具。在阅读任何单一产品页面时：

1. **从场所开始。** OSE 上市、JSCC 清算的产品处于一个机构 / 零售世界；OTC 结构化产品（EB、CB、结构化票据）处于一个平行的发行人-分销商世界，它对冲回上市市场。
2. **检查乘数和名义本金。** 日经 225 标准、迷你和微型是同一标的、不同单笔规模；TOPIX 标准和迷你遵循相同模式。在大型 / 迷你 / 微型之间的选择是参与者构成的决策，而非不同的产品。
3. **检查结算方式。** 现金结算的指数产品 vs 实物交割的单股期权有不同的运营要求（实物经由 JASDEC 结算，现金无需结算）。
4. **检查参与者构成。** 日经 225 大型的外国投资者集中、迷你 / 微型的零售集中、TOPIX 标准的机构集中、JPX-VI 的做市商波动率集中，以及 EB 结构化票据的零售集中，都是解释流动性和定价行为的稳定模式。
5. **检查对冲联动。** 许多产品之所以存在是因为它们对冲另一产品：指数期权对冲结构化零售票据、行业期货对冲行业 ETF、单股期权对冲 EB 敲入零售产品、JPX-VI 期货对冲指数期权 vega。

## Boundary cases and caveats

- **日经 225  vs TOPIX。** 日经为价格加权、225  个成分、东证 Prime；TOPIX 为自由流通市值加权、完整 Prime 范围。产品范围有重叠，但在极端收益下两个指数表现不同。用日经期货对冲以 TOPIX 为基准的主动型基金会引入有意义的基差。
- **标准 vs 迷你 vs 微型。** 同一标的上运营层面相互区分的合约；结算和 SQ 值相同，但参与者构成和最小变动价位的经济学不同。见 [[derivatives/nikkei-225-futures-options|Nikkei 225 futures and options]]。
- **JPX-VI 期货 vs 日经期权 vega。** JPX-VI 期货按波动率指数水平产生收益，而日经期权 vega 取决于行权价、期限和偏度（skew）。两者相关但不等价。
- **单股期权 vs OTC 股票期权。** OSE 上市的单股期权与在做市商和对冲基金之间交易的 OTC 双边单股期权并存。OTC 市场按名义本金计更大、透明度更低，在结构化产品对冲中被大量使用。
- **EB 敲入 vs 反向可转换。** 两者都是空头波动率的零售结构化票据；「EB」（可交换债）和「反向可转换」的术语因发行人而异。其经济内容（空头看跌 + 票息）大体等价。见 [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in retail product]]。
- **CB vs 股票挂钩结构化票据。** 可转债由其股票为转换标的的公司发行；结构化票据由证券公司发行，标的为第三方。两者共享内嵌期权机制，但在信用和监管处理上不同。
- **行业期货流动性。** 行业期货流动性较薄，取决于 ETF 套利和做市商仓库交叉对冲。行业合约的定价往往跟随现货行业指数，其基差由现货持有（cash-and-carry）vs ETF 套利驱动，而非独立的供 / 求。

## Related

- [[derivatives/INDEX|derivatives index]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/topix-futures]]
- [[derivatives/japan-single-stock-options]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[JapanFG/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group: OSE derivatives overview (jpx.co.jp / markets / derivatives).
- Japan Exchange Group: Nikkei 225 futures and options contract specifications.
- Japan Exchange Group: TOPIX futures specifications.
- Japan Exchange Group: equity option specifications (single-stock options).
- Japan Exchange Group: sector-index futures specifications (Core30, TOPIX Banks).
- Japan Exchange Group: Nikkei 225 VI futures specifications.
- Japan Securities Clearing Corporation (JSCC): clearing services overview.
- Nikkei Indexes: Nikkei 225 profile and methodology.
- Japan Exchange Group: TOPIX index methodology.
- Financial Services Agency (FSA): FIEA reference for OTC equity derivatives and structured-product distribution.

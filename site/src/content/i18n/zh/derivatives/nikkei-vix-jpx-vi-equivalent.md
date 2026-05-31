---
source: derivatives/nikkei-vix-jpx-vi-equivalent
source_hash: a476e4592d8e27cd
lang: zh
status: machine
fidelity: ok
title: "日经 VIX / JPX-VI — 日本股票波动率指数"
translated_at: 2026-05-31T03:19:56.467Z
---

# 日经 VIX / JPX-VI — 日本股票波动率指数

## TL;DR

**JPX-VI(日経平均ボラティリティー・インデックス,即日经 225 波动率指数,常被称为"日经 VIX")** 是 CBOE VIX 的日本对应物。它是一个无模型隐含波动率指数,由在 [[securities/osaka-exchange|大阪取引所 (OSE)]] 上市的价外 [[derivatives/INDEX|Nikkei 225 options]] 计算得出,并通过 JPX 发布。其方法是从近月/次月期权序列推导出的 **30天恒定期限隐含波动率**,类似于 VIX 2003 方法,但适配了 OSE 的日经 225 期权到期日历和最小变动价位惯例。

JPX-VI 之所以重要,是因为它是日本股票隐含波动率唯一 **公开发布、交易所发布** 的度量——被国内资产管理公司用于风险覆盖规模设定,被外国宏观基金用作日本股票 beta 的"恐慌指标",并被结构化产品柜台用作波动率挂钩零售和机构收益的输入。它 **不可直接交易**:对冲 JPX-VI 敞口需要交易标的 [[derivatives/INDEX|Nikkei 225 option]] 序列、少量 JPX-VI 挂钩的 ETF/ETN 产品,或通过 CBOE VIX 期货进行代理对冲(存在可观的基差风险)。

本条目涵盖:指数方法和期限结构;与 CBOE VIX 的比较;JPX-VI 挂钩的 ETF / ETN 产品集;围绕日本央行(BOJ)货币政策事件和干预事件的均值回归行为;以及日本股票波动率市场相比美国 VIX 综合体仍 **流动性较差、更依赖交易商** 的结构性原因。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the equity-volatility cluster. Read it with [[securities/osaka-exchange|大阪取引所 (OSE)]] for the underlying Nikkei 225 option listing venue, [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the JSCC clearing layer, [[derivatives/equity-volatility-hedging-corporates-japan|equity volatility hedging by Japan corporates]] for the end-user side, and [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] for the dealer-franchise economics that explain why the JPX-VI product complex is structurally narrower than VIX. The [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] gives the BOJ-policy backdrop that drives implied-vol regime shifts.

## 为何 JPX-VI 重要

波动率指数在任何股票衍生品生态系统中发挥三种功能:

1. **定价基准** ——概括主要股票指数隐含波动率曲面的单一数字;
2. **风险覆盖输入** ——资产管理公司和养老金用它进行 VaR 缩放、波动率目标组合构建和尾部风险对冲触发;
3. **可交易工具** ——美国的 VIX 期货、VIX 期权和 VIX ETP 允许直接的波动率投机和对冲。

对日本而言,JPX-VI 很好地实现了(1)和(2),但仅 **部分** 实现了(3)——直接基于 JPX-VI 可交易的产品集在结构上小于 CBOE VIX 综合体,而"日本股票波动率交易"的相当一部分仍通过经 [[derivatives/dealer-bank-derivatives-revenue-mix|equity derivatives desks at the megabank securities arms and foreign IBs]] 与交易商银行进行的双边 OTC 方差/波动率互换路由。这种不对称是日本股票波动率的核心结构性事实。

## 指数方法

JPX-VI 遵循与 CBOE VIX 2003 修订版同一族系的 **无模型隐含波动率方法**:

| 组成部分 | 读数 |
|---|---|
| 标的范围 | 在 [[securities/osaka-exchange|OSE]] 上市的价外 [[derivatives/INDEX|Nikkei 225 put and call options]]。 |
| 行权价 | 所有具有非零买价的 OTM 行权价(受 JPX 纳入规则约束)。 |
| 到期 | 近月和次月期权月份(按 JPX 发布的规则滚动);混合至恒定 30天期限。 |
| 无风险利率 | 日元无风险曲线(后 LIBOR 时代:[[derivatives/japan-interest-rate-derivatives-overview|TONA-referenced OIS]] 贴现)。 |
| 公式族 | 方差互换公平行权价近似:跨行权价对期权价格积分,以 1/K² 加权,年化为 30天方差,取平方根。 |
| 发布 | JPX 在 OSE 交易时段实时发布该指数;每日官方收盘价也予以发布。 |

30天恒定期限规则意味着 JPX-VI **不是** 任何单一期权合约的隐含波动率——它是一个序列加权的总量。这与使美国 VIX 成为"无模型"指数的性质相同,也是 JPX-VI 往往比任何单一行权价隐含波动率更稳定、但在压力事件期间仍会飙升的原因。

### 期限结构

JPX 发布 30天的标题 JPX-VI,但标的 [[derivatives/INDEX|Nikkei 225 option]] 曲面横跨多个到期。**JPX-VI 期限结构** ——跨 1个月、3个月、6个月及更长到期的隐含波动率曲线——是以下用途的标准输入:

- **日历价差交易**(卖出富贵的近月波动率对买入远月);
- 交易商柜台的 **方差互换定价**;
- 零售波动率挂钩票据的 **结构化产品对冲**;
- 机构波动率目标组合的 **风险覆盖择时**。

在正常体制下,JPX-VI 期限结构处于 **正向**(远月 > 近月),与股票波动率的实证均值回归性质一致。在压力事件期间——特别是日本央行政策意外、美国 VIX 传染事件或日元急剧升值——期限结构通常倒挂为 **反向**(近月 > 远月),且近月 JPX-VI 在日内飙升 50-200%。

## 与 CBOE VIX 的比较

| 维度 | JPX-VI | CBOE VIX |
|---|---|---|
| **标的** | [[securities/osaka-exchange|OSE]] 上的日经 225 期权 | CBOE 上的标普 500 期权 |
| **方法族** | 无模型 30天隐含波动率 | 无模型 30天隐含波动率(2003 方法) |
| **实时发布** | OSE 交易时段的 JPX | 美国交易时段的 CBOE |
| **期货(直接)** | 有限/已停止的历史(见反论点) | CBOE VIX 期货——深度、流动 |
| **指数期权** | 未积极上市 | CBOE VIX 期权——深度 |
| **ETP 产品深度** | 狭窄的 JPX-VI ETF / ETN 集 | 非常深(VXX、UVXY、SVXY、VIXY 等) |
| **典型正常体制水平** | 十几的低至中段(高度紧张时期为 200 出头) | 十几的低至中段(类似体制) |
| **压力事件飙升** | 危机期间 40-60+;更快的均值回归 | 危机期间 40-80+ |
| **均值回归半衰期** | 数天至数周;在许多体制下比美国回归更快 | 数天至数周 |
| **交易时段重叠** | 亚洲日盘(东京) | 美国时段(东部时间) |
| **与其他波动率指数的相关性** | 与 CBOE VIX 正相关但不完美;在全球风险规避期间同向变动 | 全球股票波动率的锚点 |

最重要的结构性差异:**CBOE VIX 在指数本身上拥有深度的可交易衍生品生态系统**(VIX 期货、VIX 期权、波动率 ETP),而 JPX-VI 主要是一个 **用于参考和 ETP 跟踪的发布指数**,直接波动率衍生品综合体较薄。这意味着,一只想做空日本波动率的日本股票宏观基金,通常通过与交易商柜台的 OTC 方差互换、通过直接卖出标的 [[derivatives/INDEX|Nikkei 225 option]] 序列,或通过带基差风险的 CBOE VIX 覆盖来实现——而非通过深度可与 VIX 期货相比的"JPX-VI 期货"。

## ETF 和 ETN 产品

一小组 JPX-VI 挂钩的交易所上市产品在 [[securities/tokyo-stock-exchange|TSE]] 交易。这些在结构上是:

- **跟踪 JPX-VI 期货的 ETF / ETN**(在可获得时)或标的期权曲面上的代理跟踪策略;
- 某些产品族中的 **反向和杠杆变体**(受 JPX 上市规则和 FSA 披露约束);
- **对时间衰减敏感** ——像全球所有波动率 ETP 一样,期限结构正向对多波动率产品施加结构性成本。

该产品集实质上小于美国 VIX ETP 综合体。最大的日本波动率 ETP 的 AUM 只是最大美国波动率 ETP 的一个零头,这限制了零售或较小机构日本波动率交易者可获得的流动性和跟踪质量。

对于想要更大日本波动率敞口的机构客户,实用路径是:

1. 与交易商银行([[JapanFG/nomura-hd|Nomura]]、[[JapanFG/goldman-sachs-japan|GS Japan]]、[[JapanFG/morgan-stanley-japan|MS Japan]]、[[JapanFG/jpmorgan-japan|JPM Japan]]、[[JapanFG/citigroup-japan|Citi Japan]]、[[JapanFG/mizuho-securities|Mizuho Securities]]、[[JapanFG/smbc-nikko|SMBC Nikko]])的 **OTC 方差/波动率互换**;
2. OSE 上的 **直接日经 225 期权序列**,跨行权价复制波动率敞口;
3. 带 JPX-VI 对 VIX 相关性基差风险对冲的 **CBOE VIX 代理**。

## 均值回归与日本央行事件

JPX-VI 有一个有记载的实证性质:在许多体制下 **比 CBOE VIX 更快的均值回归**,以及 **围绕日本央行事件独特的飙升与崩塌模式**。模式形态:

| 事件类型 | 典型 JPX-VI 行为 |
|---|---|
| **日本央行货币政策会议(无意外)** | 会前温和上行漂移;随着事件波动率消退,会后下行漂移。 |
| **日本央行政策意外(利率 / YCC / 资产购买转变)** | 急剧日内飙升(常为 20-50% 当日波动);期权曲面价差压缩;期限结构反向持续数天。 |
| **财务省 / 日本央行外汇干预** | 通过日元股票相关性渠道间接飙升;飙升常小于直接股票新闻冲击。 |
| **财报季集中(4 月 / 5 月、10 月 / 11 月)** | 持续抬高的水平;每个交易时段内快速的日内均值回归。 |
| **美国 VIX 传染(隔夜)** | OSE 早盘时段的开盘跳空飙升;若美国风险规避未进一步传播,日内部分均值回归。 |
| **地缘政治 / 区域冲击(例如北亚地缘政治)** | 持续抬高的体制;缓慢的均值回归。 |

快速均值回归是交易商利用的结构性特征:日本的做空波动率套息策略历史上在平静体制下有吸引人的夏普比率,但伴随集中于日本央行政策意外日期(一个发布的日历事件,交易商特许经营围绕其设定规模)的偶发性爆仓风险。

对于运行 [[derivatives/equity-volatility-hedging-corporates-japan|vol-overlay program]] 的日本资产管理公司,日本央行日历是覆盖规模设定的唯一最重要输入——甚至比独立的 JPX-VI 水平更重要,因为日本央行意外日的体制转变可能压倒数周的套息。

## 按客户类型的用例

| 客户 | 用例 |
|---|---|
| **国内寿险公司 / 养老金** | VaR 规模设定、尾部对冲触发和波动率目标分层构建的风险覆盖输入。标的对冲通过 [[derivatives/INDEX|Nikkei 225 puts]] 或在交易商银行的 OTC 看跌价差执行。 |
| **外国宏观对冲基金** | 日本对美国波动率相对价值的方向交易;沿 JPX-VI 期限结构的日历交易;日本股票 beta 的尾部对冲。 |
| **国内资产管理公司(只做多)** | 组合风险披露的参考指数;部分流入波动率目标 / 风险平价分层。 |
| **零售投资者(通过 ETP)** | 通过上市 ETF / ETN 对日本波动率的直接方向敞口;占零售股票产品活动的一小部分。 |
| **结构化产品柜台** | 波动率挂钩零售票据、带波动率敞口的保本产品和基于触发的结构化股票产品的定价输入。 |
| **交易商银行柜台** | 实时波动率曲面管理;OTC 方差互换和期权账簿希腊字母的校准锚点。 |

## 历史体制标记

JPX-VI(及其在日经曲面上的前身隐含波动率指数)经历了几个不同的体制事件,它们对任何波动率分析都是有用的参考点:

| 事件 | JPX-VI 行为 |
|---|---|
| **全球金融危机(2008-2009)** | 持续抬高的体制——日本波动率表现与全球股票波动率类似,有数月抬高的读数;雷曼那一周出现历史性飙升水平。 |
| **东北地震(2011年 3 月)** | 在地震和福岛事故后的数天内急剧飙升;在政策应对稳定市场使均值回归之前,持续抬高数周。 |
| **安倍经济学启动和 QQE 时代(2013 起)** | 由于日本央行资产购买体制压制股票波动率,基础水平波动率普遍较低;围绕中国贬值事件(2015年 8 月)、日本央行引入负利率(2016年 1 月)、英国脱欧(2016年 6 月)的偶发飙升。 |
| **新冠(19 )爆发(2020年 3 月)** | 与 CBOE VIX 一同历史性飙升至危机体制水平;在恢复阶段比美国 VIX 更快的均值回归。 |
| **日本央行 YCC 微调(2022-2024)** | 日本央行收益率曲线控制区间的每次调整——2022, 年 12 月、2023, 年 7 月及后续步骤——产生离散的飙升,随后随市场重新定价政策预期而部分回落。 |
| **日本央行利率政策正常化启动** | 在 YCC 之后并走向最终利率政策正常化的路径上,JPX-VI 体制调整至反映政策不确定性风险溢价的更高基础水平。 |

这些事件对任何关于日本股票波动率的历史波动率或回测策略分析的 **体制分类** 是有用的。这些参考点都不应在任何前瞻性交易语境中被引用为价格行为评论——它们是公开发布指数中公开可见的体制标记。

## 详细产品族 — JPX-VI 挂钩 ETP

关于 JPX-VI 挂钩交易所上市产品族的公开来源观察:

| 产品类型 | 结构 |
|---|---|
| **多 JPX-VI 期货型 ETP** | 持有 JPX-VI 期货(在上市时)的滚动头寸或代理复制该序列;跟踪 JPX-VI 水平,但在正向期限结构下承受结构性滚动成本(近月比即期更富贵)。 |
| **反向 JPX-VI ETP** | 复制做空波动率敞口的反向挂钩产品;受益于正向期限结构套息;在波动率飙升体制下带有不对称下行(历史全球先例:美国 XIV-2018 平仓)。 |
| **杠杆 JPX-VI ETP** | 2x 或类似的对波动率变化的杠杆敞口;若波动率震荡,受每日再平衡侵蚀影响。 |
| **VIX 挂钩 / 跨 VIX ETP(在适用时)** | 鉴于更广义的美国 VIX 期货流动性,一些日本上市产品提供对美国 VIX 而非直接 JPX-VI 的敞口。 |

JPX-VI ETP 集在 AUM 上实质 **小于** 美国 VIX ETP 综合体。因此,零售和小机构对直接 JPX-VI 敞口的可获得性,比美国对等的 VIX 挂钩产品可获得性更窄。这是日本股票波动率交易集中于机构交易商中介层、而非分散于深度零售 ETP 层的结构性原因之一。

## 养老金和保险对 JPX-VI 的使用

日本寿险公司([[finance/japan-listed-financial-groups-investable-universe|listed life insurers]] 和主要的非上市相互制寿险公司)及企业/公共养老金系统(GPIF 和企业 DB / DC 养老金计划)通过其国内股票配置承载 **万亿日元规模的日本股票敞口**。JPX-VI 在其风险管理中扮演多重角色:

- 监管资本报告的 **VaR / ES 规模设定输入**(保险公司在 ICS / J-SAM 偿付能力框架下;银行在巴塞尔下针对股票头寸风险);
- **尾部对冲触发** ——一些机构波动率覆盖项目使用 JPX-VI 阈值规则(例如"当 JPX-VI 超过 X 百分位时买入看跌期权")在压力体制下系统性对冲股票敞口;
- **波动率目标分层构建** ——风险平价和波动率目标组合策略与 JPX-VI 水平成反比调整日本股票配置,在波动率低时增加敞口、在波动率高时减少;
- **资产负债匹配邻接** ——对于运行支撑长久期负债账簿的长期股票敞口的保险公司,JPX-VI 是 ALM 情景分析的输入集的一部分;
- **交易对手讨论基准** ——JPX-VI 是与交易商银行就股票衍生品对冲需求进行机构讨论的通用语。

养老金和保险机构资金流是 **日本股票衍生品交易商特许经营收入的结构性重要驱动因素** 之一——该客户层创造的交易商一侧经济流见 [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/swap-execution-facility-japan]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[INDEX|FinWiki index]]

## 来源

- JPX,JPX-VI 指数方法、计算规则和实时发布页面。
- JPX,衍生品市场——日经 225 期权合约规格。
- Nikkei Indexes,日经 225 指数简介。
- JPX,期权市场概览(OSE 上市期权)。
- JSCC,上市衍生品及适用时 OTC 股票衍生品的清算范围。
- CBOE,VIX 方法和可交易产品参考(仅作比较基础)。
- FSA,FIEA 下上市和 OTC 衍生品的监管框架。

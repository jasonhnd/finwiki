---
source: derivatives/nikkei-vix-jpx-vi-equivalent
source_hash: 82beb9fa508535cb
lang: zh
status: machine
fidelity: ok
title: "日经 VIX / JPX-VI — 日本股票波动率指数"
translated_at: 2026-06-18T23:33:48.301Z
---

# 日经 VIX / JPX-VI — 日本股票波动率指数

## TL;DR

**JPX-VI（日经平均波动率指数，Nikkei 225  Volatility Index，常被称为「日经 VIX」）** 是 CBOE VIX 的日本对应物。它是一个无模型隐含波动率指数，由在 [[securities/osaka-exchange|大阪取引所 (OSE)]] 上市的价外 [[derivatives/INDEX|Nikkei 225 options]] 计算得出，并通过 JPX 发布。其方法论是一种 **30 天恒定期限隐含波动率**，由近月 / 次月期权条带推导得出，类似于 VIX 的 2003  方法论，但适配了 OSE 的日经 225  期权到期日历与最小变动价位惯例。

JPX-VI 之所以重要，是因为它是日本股票隐含波动率唯一的 **公开发布、交易所公布** 的衡量指标 —— 被国内资产管理公司用于风险叠加的规模设定，被海外宏观基金用作日本股票贝塔的「恐慌指数」，被结构化产品台用作波动率挂钩的零售与机构收益结构的输入。它 **无法直接交易**：对冲 JPX-VI 敞口需要交易基础的 [[derivatives/INDEX|Nikkei 225 option]] 条带、少数 JPX-VI 挂钩的 ETF/ETN 产品，或经由 CBOE VIX 期货进行代理对冲（伴有相应的基差风险）。

本词条涵盖：指数方法论与期限结构；与 CBOE VIX 的比较；JPX-VI 挂钩的 ETF / ETN 产品集；围绕 BOJ 货币政策事件与干预阶段的均值回归行为；以及日本股票波动率市场相较于美国 VIX 复合体仍 **流动性更低、更依赖交易商** 的结构性原因。

## Wiki route

本词条在股票波动率集群中位于 [[derivatives/INDEX|derivatives index]] 之下。请与 [[securities/osaka-exchange|大阪取引所 (OSE)]]（基础日经 225  期权的上市场所）、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]（JSCC 清算层）、[[derivatives/equity-volatility-hedging-corporates-japan|equity volatility hedging by Japan corporates]]（终端用户侧），以及 [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]（解释 JPX-VI 产品复合体为何在结构上比 VIX 更窄的交易商特许经营经济学）一并阅读。[[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] 给出了驱动隐含波动率制度转换的 BOJ 政策背景。

## 为何 JPX-VI 重要

波动率指数在任何股票衍生品生态系统中发挥三种功能：

1. **定价基准** —— 概括主要股票指数隐含波动率曲面的单一数值；
2. **风险叠加输入** —— 资产管理公司与养老基金用于 VaR 缩放、波动率目标型组合构建及尾部风险对冲触发；
3. **可交易工具** —— 在美国，VIX 期货、VIX 期权及 VIX ETP 允许直接的波动率投机与对冲。

对日本而言，JPX-VI 很好地提供了（1）与（2），但仅 **部分** 提供（3）—— 可直接基于 JPX-VI 交易的产品集在结构上小于 CBOE VIX 复合体，而「日本股票波动率交易」的相当比例仍经由 [[derivatives/dealer-bank-derivatives-revenue-mix|equity derivatives desks at the megabank securities arms and foreign IBs]] 通过与交易商银行的场外 OTC 方差 / 波动率掉期进行。这种不对称性是日本股票波动率的核心结构性事实。

## 指数方法论

JPX-VI 遵循与 CBOE VIX 2003  修订同系的 **无模型隐含波动率方法论**：

| 构成要素 | 读法 |
|---|---|
| 基础范围 | 在 [[securities/osaka-exchange|OSE]] 上市的价外 [[derivatives/INDEX|Nikkei 225 put and call options]]。 |
| 行权价 | 所有具有非零买价的价外行权价（受 JPX 纳入规则约束）。 |
| 到期 | 近月与次月期权月份（按 JPX 公布的规则滚动）；混合至恒定 30 天到期。 |
| 无风险利率 | 日元无风险曲线（后 LIBOR：[[derivatives/japan-interest-rate-derivatives-overview|TONA-referenced OIS]] 贴现）。 |
| 公式系族 | 方差掉期公平行权价近似：在各行权价上对期权价格积分，以 1/K² 加权，年化为 30 天方差，再取平方根。 |
| 发布 | JPX 在 OSE 交易时段内实时公布指数；每日官方收盘价也会发布。 |

30 天恒定期限规则意味着 JPX-VI **不是** 任何单一期权合约的隐含波动率 —— 它是条带加权的聚合值。这与使美国 VIX 成为「无模型」指数的性质相同，也是 JPX-VI 倾向于比任何单一行权价隐含波动率更稳定、但仍在压力事件中飙升的原因。

### 期限结构

JPX 公布 30 天的头条 JPX-VI，但基础的 [[derivatives/INDEX|Nikkei 225 option]] 曲面跨越多个到期。**JPX-VI 期限结构** —— 跨 1 个月、3 个月、6 个月及更长到期的隐含波动率曲线 —— 是以下各项的标准输入：

- **日历价差交易**（卖出昂贵的近月波动率 vs 买回远月）；
- 交易商台进行的 **方差掉期定价**；
- 面向零售的波动率挂钩票据的 **结构化产品对冲**；
- 机构波动率目标型组合的 **风险叠加择时**。

在正常制度下，JPX-VI 期限结构处于 **正向市场（contango）**（远月 > 近月），与股票波动率的经验性均值回归性质一致。在压力事件中 —— 尤其是 BOJ 政策意外、美 VIX 传染阶段或急剧的日元升值 —— 期限结构通常反转为 **逆向市场（backwardation）**（近月 > 远月），且近月 JPX-VI 在日内 50-200% 飙升。

## 与 CBOE VIX 的比较

| 维度 | JPX-VI | CBOE VIX |
|---|---|---|
| **基础** | [[securities/osaka-exchange|OSE]] 上的日经 225  期权 | CBOE 上的标普 500  期权 |
| **方法论系族** | 无模型 30 天隐含波动率 | 无模型 30 天隐含波动率（2003  方法论） |
| **实时发布** | OSE 交易时段内由 JPX | 美国交易时段内由 CBOE |
| **期货（直接）** | 有限 / 已停止的历史（见反论） | CBOE VIX 期货 —— 深厚、流动 |
| **指数期权** | 未积极上市 | CBOE VIX 期权 —— 深厚 |
| **ETP 产品深度** | 狭窄的 JPX-VI ETF / ETN 集 | 非常深厚（VXX、UVXY、SVXY、VIXY 等） |
| **典型正常制度水平** | 十几中至偏高（高涨期处于低 20 区间） | 十几中至偏高（类似制度） |
| **压力事件飙升** | 危机时 40-60+；更快的均值回归 | 危机时 40-80+ |
| **均值回归半衰期** | 数天至数周；在许多制度下比美国更快回归 | 数天至数周 |
| **交易时段重叠** | 亚洲日盘（东京） | 美国时段（东部时间） |
| **与其他波动率指数的相关性** | 与 CBOE VIX 正相关但不完美；在全球避险时联动 | 全球股票波动率的锚 |

最重要的结构性差异：**CBOE VIX 在指数本身拥有深厚的可交易衍生品生态系统**（VIX 期货、VIX 期权、波动率 ETP），而 JPX-VI 主要是一个 **用于参照与 ETP 追踪的公布指数**，伴有更薄的直接波动率衍生品复合体。这意味着，想要做空日本波动率的日本股票宏观基金，通常经由与交易商台的 OTC 方差掉期、直接卖出基础的 [[derivatives/INDEX|Nikkei 225 option]] 条带，或经由带基差风险的 CBOE VIX 叠加来实现 —— 而非经由深度可比 VIX 期货的「JPX-VI 期货」。

## ETF 与 ETN 产品

少数 JPX-VI 挂钩的交易所上市产品在 [[securities/tokyo-stock-exchange|TSE]] 交易。它们在结构上为：

- **追踪 JPX-VI 期货的 ETF / ETN**（在可用时）或基于基础期权曲面的代理追踪策略；
- 部分产品族中的 **反向与杠杆变体**（受 JPX 上市规则与 FSA 披露约束）；
- **对时间衰减敏感** —— 与全球所有波动率 ETP 一样，期限结构的正向市场对做多波动率产品施加结构性成本。

该产品集明显小于美国 VIX ETP 复合体。日本波动率 ETP 的最大 AUM 仅为美国最大波动率 ETP 的一小部分，这限制了零售或较小机构的日本波动率交易者可获得的流动性与追踪质量。

对于想要更大日本波动率敞口的机构客户，实务路径为：

1. 与交易商银行（[[securities-firms/nomura-hd|Nomura]]、[[securities-firms/goldman-sachs-japan|GS Japan]]、[[securities-firms/morgan-stanley-japan|MS Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JPM Japan]]、[[foreign-financial-institutions/citigroup-japan|Citi Japan]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/smbc-nikko|SMBC Nikko]]）的 **OTC 方差 / 波动率掉期**；
2. OSE 上的 **直接日经 225  期权条带**，跨各行权价复制波动率敞口；
3. 带 JPX-VI vs VIX 相关性基差风险对冲的 **CBOE VIX 代理**。

## 均值回归与 BOJ 事件

JPX-VI 有一个有文献记载的经验性质：在许多制度下 **比 CBOE VIX 更快的均值回归**，以及 **围绕 BOJ 事件独特的飙升-崩落模式**。模式形态：

| 事件类型 | 典型 JPX-VI 行为 |
|---|---|
| **BOJ 货币政策会议（无意外）** | 会前温和漂移上行；随着事件波动率消退，会后漂移下行。 |
| **BOJ 政策意外（加息 / YCC / 资产购买转变）** | 急剧的日内飙升（常为 20-50% 的同日变动）；期权曲面上的价差压缩；期限结构数日内呈逆向市场。 |
| **MOF / BOJ 外汇干预** | 经由日元股票相关性渠道的间接飙升；飙升常小于直接的股票消息冲击。 |
| **财报季集中（4 月 / 5 月、10 月 / 11 月）** | 持续高涨的水平；每个时段内快速的日内均值回归。 |
| **美 VIX 传染（隔夜）** | OSE 早盘的开盘跳空飙升；若美国避险未进一步传播，则日内部分均值回归。 |
| **地缘政治 / 区域冲击（如北亚地缘政治）** | 持续高涨的制度；缓慢的均值回归。 |

快速的均值回归是交易商加以利用的结构性特征：日本的做空波动率套息策略在平静制度下历来具有有吸引力的夏普比率，但伴随集中于 BOJ 政策意外日（一个公布的日历事件，交易商特许经营据此进行规模设定）的偶发性爆仓风险。

对于运营 [[derivatives/equity-volatility-hedging-corporates-japan|vol-overlay program]] 的日本资产管理公司，BOJ 日历是叠加规模设定单一最重要的输入 —— 甚至比独立的 JPX-VI 水平更重要，因为 BOJ 意外日的制度转换可能主导数周的套息。

## 按客户类型的用例

| 客户 | 用例 |
|---|---|
| **国内寿险公司 / 养老金** | 用于 VaR 规模设定、尾部对冲触发及波动率目标型分块构建的风险叠加输入。基础对冲经由 [[derivatives/INDEX|Nikkei 225 puts]] 或交易商银行的 OTC 看跌价差执行。 |
| **海外宏观对冲基金** | 针对日本 vs 美国波动率相对价值的方向性交易；沿 JPX-VI 期限结构的日历交易；日本股票贝塔的尾部对冲。 |
| **国内 AM（仅做多）** | 用于组合风险披露的参照指数；部分流入波动率目标 / 风险平价分块。 |
| **零售投资者（经由 ETP）** | 经由上市 ETF / ETN 对日本波动率的直接方向性敞口；零售股票产品活动的一小部分。 |
| **结构化产品台** | 用于波动率挂钩零售票据、带波动率敞口的保本型、触发型结构化股票产品的定价输入。 |
| **交易商银行台** | 实时波动率曲面管理；OTC 方差掉期与期权账册希腊值的校准锚。 |

## 历史制度标记

JPX-VI（及其在日经曲面上的前身隐含波动率指数）经历了若干不同的制度阶段，对任何波动率分析都是有用的参照点：

| 阶段 | JPX-VI 行为 |
|---|---|
| **全球金融危机（2008-2009）** | 持续高涨的制度 —— 日本波动率表现与全球股票波动率类似，呈现数月的高涨读数；雷曼那一周录得历史性飙升水平。 |
| **东北地方太平洋近海地震（2011 年 3 月）** | 地震与福岛事件后数日内急剧飙升；在政策应对稳定市场而均值回归之前，持续高涨数周。 |
| **安倍经济学启动与 QQE 时代（2013  年起）** | 由于 BOJ 资产购买制度抑制了股票波动率，基础水平波动率普遍较低；围绕中国贬值阶段（2015 年 8 月）、BOJ 负利率引入（2016 年 1 月）、英国脱欧（2016 年 6 月）的偶发性飙升。 |
| **COVID-19  爆发（2020 年 3 月）** | 与 CBOE VIX 一同历史性飙升至危机制度水平；在复苏阶段比美 VIX 更快的均值回归。 |
| **BOJ YCC 微调（2022-2024）** | BOJ 收益率曲线控制区间的每次调整 —— 2022,  年 12 月、2023,  年 7 月及其后各步 —— 随着市场重新定价政策预期，产生离散的飙升及随后的部分回落。 |
| **BOJ 利率政策正常化开始** | 在 YCC 之后并朝向最终的利率政策正常化之路，JPX-VI 制度调整至反映政策不确定性风险溢价的更高基础水平。 |

这些阶段对日本股票波动率上任何历史波动率或回测策略分析中的 **制度分类** 都有用。这些参照点中的任何一个，都不应在任何前瞻型交易语境中被引用为价格行情评论 —— 它们是公开发布指数中公开可见的制度标记。

## 详细产品族 — JPX-VI 挂钩 ETP

关于 JPX-VI 挂钩交易所上市产品族的公开来源观察：

| 产品类型 | 结构 |
|---|---|
| **做多 JPX-VI 期货型 ETP** | 持有 JPX-VI 期货（在已上市时）的滚动头寸或代理复制条带；追踪 JPX-VI 水平，但在正向市场中承受结构性滚动成本（近月比现货昂贵）。 |
| **反向 JPX-VI ETP** | 复制做空波动率敞口的反向挂钩产品；从正向市场期限结构的套息中获益；在波动率飙升制度中伴有不对称的下行风险（历史性全球先例：美国 XIV-2018  平仓）。 |
| **杠杆 JPX-VI ETP** | 对波动率变化的 2 倍或类似杠杆敞口；若波动率震荡则承受每日再平衡的侵蚀。 |
| **VIX 挂钩 / 跨 VIX ETP（在适用时）** | 鉴于更广的美国 VIX 期货流动性，部分日本上市产品提供对美国 VIX 而非直接 JPX-VI 的敞口。 |

JPX-VI ETP 集在 AUM 上明显 **小于** 美国 VIX ETP 复合体。因此，零售与小型机构对直接 JPX-VI 敞口的可及性，比美国对 VIX 挂钩产品的等价可及性更窄。这是日本股票波动率交易集中于机构交易商中介层、而非分散于深厚零售 ETP 层的结构性原因之一。

## 养老金与保险对 JPX-VI 的运用

日本寿险公司（[[finance/japan-listed-financial-groups-investable-universe|listed life insurers]] 及主要的非上市相互寿险公司）与企业 / 公共养老金体系（GPIF 与企业 DB / DC 养老金计划）通过其国内股票配置持有 **万亿日元规模的日本股票敞口**。JPX-VI 在其风险管理中发挥多重作用：

- 用于监管资本报告的 **VaR / ES 规模设定输入**（ICS / J-SAM 偿付能力框架下的保险公司；股票头寸风险方面 Basel 下的银行）；
- **尾部对冲触发** —— 部分机构波动率叠加方案使用 JPX-VI 阈值规则（如「当 JPX-VI 超过 X 百分位时买入看跌」），以在压力制度期间系统性地对冲股票敞口；
- **波动率目标型分块构建** —— 风险平价与波动率目标型组合策略与 JPX-VI 水平反向地调整日本股票配置，在波动率低时增加敞口、高时减少；
- **资产负债匹配的邻接性** —— 对于运营支撑长久期负债账册的长期股票敞口的保险公司，JPX-VI 是 ALM 情景分析输入集的一部分；
- **交易对手讨论基准** —— JPX-VI 是与交易商银行就股票衍生品对冲需求进行机构讨论的通用语言。

养老金与保险的机构资金流是日本股票衍生品交易商特许经营收入 **结构上重要的驱动因素** 之一 —— 关于该客户层所创造的交易商侧经济流，参见 [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]。

## Related

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
- [[financial-regulators/japan-exchange-group]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[INDEX|FinWiki index]]

## Sources

- JPX，JPX-VI 指数方法论、计算规则及实时发布页面。
- JPX，衍生品市场 — 日经 225  期权合约规格。
- 日经指数，日经 225  指数概况。
- JPX，期权市场概览（OSE 上市期权）。
- JSCC，上市衍生品及适用情况下的 OTC 股票衍生品的清算范围。
- CBOE，VIX 方法论及可交易产品参照（仅作比较基础）。
- FSA，FIEA 下的上市与 OTC 衍生品监管框架。

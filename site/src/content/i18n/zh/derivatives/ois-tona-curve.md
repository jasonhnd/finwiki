---
source: derivatives/ois-tona-curve
source_hash: bf0a12202ae1cf91
lang: zh
status: machine
fidelity: ok
title: "OIS TONA 曲线与日元贴现"
translated_at: 2026-05-31T03:19:56.480Z
---

# OIS TONA 曲线与日元贴现

## TL;DR

日元隔夜指数互换(OIS)是一种 OTC 利率衍生品,一方就一段约定期限支付固定利率,交易对手则支付同一期间每日东京隔夜平均利率(TONA)的几何(复利)平均值。TONA 是 BoJ 公布的无抵押隔夜拆借交易的成交量加权平均值,是全球 IBOR 转换下日元货币的指定无风险利率(RFR)。

在后 LIBOR 时代(日元 LIBOR 于 2021 年 12 月停止,合成日元 LIBOR 已在 2023年逐步退出完成),参考 TONA 的 OIS 是日元衍生品的标准贴现曲线 — 既用于 OIS 自身定价,也作为已抵押日元 IRS(见 [[derivatives/japan-irs-market]])、日元-美元基差互换(见 [[derivatives/yen-basis-swap-market]])、日元计价 CCP 清算交易,以及以日元现金支付的 CSA 抵押 OTC 记账中所用的贴现因子。

对 FinWiki 而言,OIS-TONA 曲线是 BoJ 短端利率政策预期的价格表达,是每一笔日元定价衍生品之下的贴现曲线,也是对近期 BoJ 利率决策最直接可见的市场解读。

## Wiki 路由

本条目归属于 [[derivatives/INDEX|derivatives index]]。请对照 [[derivatives/japan-irs-market]] 阅读以了解更长期限的曲线,[[derivatives/jgb-futures-curve]] 了解 JGB 隐含利率曲线,以及 [[derivatives/yen-basis-swap-market]] 了解 OIS 曲线如何与交叉货币融资相互作用。底层 TONA 现金机制是 [[money-market/call-market-structure]],BoJ 政策实施是 [[money-market/boj-open-market-operations]]。

## TONA — 底层利率

TONA 由日本银行基于无抵押隔夜拆借交易每日计算和公布:

| 要素 | 细节 |
|---|---|
| 全称 | 东京隔夜平均利率(無担保コールオーバーナイト物加重平均レート)。 |
| 计算和发布方 | 日本银行。 |
| 底层交易 | 经短资(tanshi)公司中介并向 BoJ 报告的无抵押隔夜拆借市场交易。 |
| 方法 | 每个营业日合格隔夜交易的成交量加权均值。 |
| 发布 | 由 BoJ 在次一营业日(T+1)发布;此前也曾以 TONAR / Tokyo Overnight Average Rate 名义发布。 |
| 重置 | 每日;利率本身不内含期限结构。 |
| 货币/惯例 | 日元;日元货币市场按惯例采用 ACT/365 天数计算。 |

在由日元利率基准跨业委员会(一个有 BoJ 和 FSA 参与召集的公私机构)协调的 IBOR 转换下,TONA 取代日元 LIBOR 成为指定 RFR。该转换遵循金融稳定理事会(FSB)关于逐货币采用 RFR 的建议。

由于 TONA 反映实际的无担保隔夜交易(即 [[money-market/call-market-structure]] 中详述的同一市场),它对终结 LIBOR 的操纵风险具有稳健性。然而,它对 BoJ 政策实施敏感:若 BoJ 充裕准备金政策压低拆借活动,TONA 成交量可能萎缩,利率在某些时期会变得稀薄。

## 后 LIBOR 转换

日元 LIBOR 转换沿一条协调的时间线进行:

| 年份 | 事件 |
|---|---|
| 2017 | 英国 FCA 宣布 LIBOR 于 2021底停止。 |
| 2018 | 在 BoJ/FSA/业界参与下成立日元利率基准跨业委员会。 |
| 2018–2021 | 新增日元互换和贷款业务迁移至 TONA 参考;存量日元 LIBOR 合约经 ISDA 2020 Fallback 协议修订或纳入回退协议。 |
| 2021 底 | 日元 LIBOR 在代表性基础上停止。合成日元 LIBOR(由 FCA 管理,非代表性)针对某些存量 1M、3M、6M 期限引入,作为退场过渡桥梁。 |
| 2023 | 合成日元 LIBOR 停止。所有日元利率衍生品参考 TONA(在特定情形下,定期固定市场参考 TIBOR)。 |
| 持续 | TIBOR(东京银行间同业拆借利率)在某些需要定期固定的日元计价贷款和债券产品中存续;D-TIBOR 和 Z-TIBOR 由日本银行家协会 TIBOR 管理机构(JBATA)管理。 |

转换结果:日元 IRS 市场、OIS 市场及 CSA 抵押 OTC 衍生品现在以 TONA 作为底层浮动参考和贴现利率。经 ISDA 回退转换的日元 LIBOR 衍生品现在参考 TONA 后置复利加上固定信用调整利差(CAS)。

## BoJ 政策利率传导

OIS-TONA 曲线是对该曲线期限内 BoJ 预期隔夜利率最直接的市场表达:

| 期限 | OIS 利率所表达的内容 |
|---|---|
| 1周、1月、3月 OIS | 直至接下来 1–2 次货币政策会议(MPM)的近期 BoJ 利率预期。 |
| 6月、1年 OIS | 预期 BoJ 利率路径,包括接下来 12 个月内可能的 MPM 加息/降息。 |
| 2年、3年、5年 OIS | 中期政策路径;反映 MPM 轨迹加上小幅期限溢价。 |
| 10年、20年、30年 OIS | 长视野均衡利率预期加期限溢价;流动性低于同期限的 IRS 曲线。 |

MPM 日期前后 1年或 2年 OIS 利率的变动是受关注程度最高的政策意外信号。在 2024 年 3 月 BoJ 退出负利率和 YCC 的体制转换之后,OIS 曲线迅速重新定价以反映可能的利率正常化路径;此后每次 MPM 前后的 OIS 变动都受到密切关注。

OIS-TONA 与政策利率指引之间的关系是:

- 政策利率指引(目标附近的无抵押隔夜拆借利率)设定了 TONA 每日跟踪的近零下限。
- OIS 远期利率内嵌了 BoJ 在每个期限将把政策利率设定在何处的概率加权预期。
- 观察到的 TONA 与同一视野隐含 OIS 远期之间的差异,揭示了各 MPM 之间政策预期的重新定价。

政策实施层见 [[JapanFG/boj-monetary-policy]](若存在)及 [[money-market/boj-open-market-operations]];本条目涵盖衍生品表达。

## OIS 曲线构建

市场从业者按如下方式构建日元 OIS-TONA 曲线:

| 步骤 | 输入 |
|---|---|
| 1. 即期 | 锚定 BoJ 政策指引的今日 TONA 定盘(T-1 发布利率)。 |
| 2. 短端 | 来自交易商间报价的 1周、2周、1月、2月、3月期限 OIS 利率。 |
| 3. 中期限 | 6月、9月、1年、18月、2年、3年的 OIS 利率。 |
| 4. 长端 | 5年、7年、10年、15年、20年、30年的 OIS 利率,在流动性支持报价处。 |
| 5. 自举 | 求解贴现因子曲线 D(t),使每个输入 OIS 利率定价至平价;向前迭代。 |
| 6. 平滑 | 应用与交易商定价模型一致的平滑插值(三次样条、单调三次,或对数贴现下的分段线性)。 |

所得贴现曲线 D(t) 用于:

- 将新 OIS 交易按平价定价;
- 对已抵押日元互换的未来现金流进行贴现(2010之后采用的"OIS 贴现"惯例);
- 计算 CSA 抵押日元敞口的现值(PV);
- 对 JSCC 清算的日元 IRS 头寸盯市(JSCC 对日元清算产品采用 TONA-OIS 贴现)。

对于非抵押或采用不同抵押的交易,贴现曲线通过融资估值调整(FVA)或切换至不同抵押利率曲线来调整。这就是 2010之后成为标准的"多曲线框架"。

## 日元 IRS 的互换利率贴现曲线

日元 IRS 市场(见 [[derivatives/japan-irs-market]])在定价上是双曲线的:

| 曲线 | 用途 |
|---|---|
| TONA-OIS | 贴现曲线 — 用于对未来现金流求现值。 |
| TONA 远期曲线 | 预测曲线 — 用于预测未来 TONA 浮动端重置。 |
| (历史)TIBOR 远期曲线 | 对于参考 TIBOR 的存量 IRS,用于预测 1M / 3M / 6M TIBOR 重置;现值仍在 TONA-OIS 上计算。 |

这一双曲线框架意味着,即便是 TIBOR 浮动 IRS,只要交易在标准 CSA 条款下以日元现金抵押,也使用 TONA-OIS 曲线进行贴现。TIBOR-TONA 基差体现在单独的基差互换报价中(TIBOR 对 TONA OIS,以基点计)。

## 市场深度与流动性

| 期限带 | 流动性评估 |
|---|---|
| 1月–6月 | 极具流动性;买卖价差很窄(通常低于 1 基点)。 |
| 1年–3年 | 流动;交易最活跃的 MPM 预期期限。 |
| 5年–10年 | 对机构流量流动;买卖价差通常 1–2 基点。 |
| 15年–30年 | OIS 形式的流动性低于 TIBOR IRS 或 JGB 现券形式;买卖价差更宽。 |

日元 OIS 的名义存量在汇总基础上达数万亿日元等值(BIS OTC 衍生品统计将其汇总在日元 IRS/OIS 类别内)。JSCC 清算大部分已清算日元 OIS;非标准期限和结构化交易存在非清算双边 OIS。

## 交易商做市方

| 参与者 | 角色 |
|---|---|
| 日本超大型银行证券关联机构(MUFG Securities、SMBC Nikko、Mizuho Securities) | 日元 OIS 的主要做市方;服务国内银行、保险公司和企业。 |
| 全球交易商(JPMorgan、Goldman、Citi、Deutsche、BNP、Barclays、HSBC) | 双边做市商,尤其在跨境流量和 CCBS 相邻交易中。 |
| 独立证券公司(Nomura、Daiwa) | 国内业务加跨境。 |
| 交易商间经纪商(Tradition、BGC、ICAP、Tullett Prebon) | 提供指示性定价并执行 IDB 流量。 |
| 终端用户 | 日本超大型银行(财资对冲)、地方银行、寿险公司、资产管理人、企业,以及对 BoJ 政策持仓的外国账户。 |

超大型银行交易关联机构与现金货币市场中介相交;短资一侧见 [[money-market/tanshi-company-business-model]],受监管实体层见 [[banking/japan-banking-license-tier-comparison-matrix]]。

## TONA 期货(相邻上市产品)

OSE 上市 TONA 3个月期货,通过提供交易所交易、JSCC 清算的短期限 TONA 预期敞口,补充 OTC OIS 市场。规格:

| 要素 | 细节 |
|---|---|
| 标的 | 合约参考期间内的 3个月复利 TONA。 |
| 报价 | 100.00 减去期货利率;标准短端利率期货惯例。 |
| 最小变动价值 | 每份合约定义;面向零售和小型机构的小额名义规模。 |
| 结算 | 在合约到期时对照参考 3个月 TONA 复利现金结算。 |
| 清算 | JSCC。 |

TONA 期货流动性正在增长,但仍小于 OTC OIS。当用户偏好交易所上市结构而非 OTC 时,它们对短端利率对冲很有用。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/japan-irs-market]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 来源

- 日本银行:拆借货币市场数据(TONA / TONAR 发布)。
- 日本银行:货币市场概况及统计发布。
- 日元利率基准跨业委员会:关于 TONA 采用及 IBOR 转换的公开报告。
- 日本证券清算公司:日元 IRS/OIS 清算规则及 TONA 期货清算。
- 日本交易所集团/大阪交易所:TONA 3个月期货合约规格。
- 金融厅:IBOR 转换监管指引。
- ISDA:2020 IBOR Fallbacks 协议及补充文件。
- 日本银行家协会 TIBOR 管理机构(JBATA):TIBOR 基准管理。
- BIS:半年度 OTC 衍生品统计。

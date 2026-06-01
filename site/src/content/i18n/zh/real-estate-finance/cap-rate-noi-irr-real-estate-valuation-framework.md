---
source: real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework
source_hash: df4671fe53de5d43
lang: zh
status: machine
fidelity: ok
title: "资本化率 NOI IRR 房地产估值框架"
translated_at: 2026-06-01T03:31:12.265Z
---
# 资本化率 NOI IRR 房地产估值框架

## 要点摘要

日本的房地产估值围绕四个相互关联的指标构建：资本化率（NOI 收益率）、NOI / NCF（净营业收入/净现金流）、无杠杆 IRR（项目回报）和杠杆 IRR（股权回报）。这些指标覆盖了 [[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]] 中规定的三种方法评估框架——收入、比较、成本。 J-REIT 的定价以 JREI 资本化率输入下的 [[real-estate-finance/j-reit-market-overview|price-to-NAV mechanics]] 为主，而私人房地产基金则增加了持有期 IRR 承销和显性杠杆。 JREI 的半年度房地产投资者调查是事实上的上限利率基准，[[real-estate-finance/real-estate-cap-rate-compression-2026|current 2026 cap-rate ranges]] 反映出 NIRP 时代低点的小幅扩大。本页是方法论参考，而不是投资建议——在做出任何决策之前，请根据当前的 JREI / ARES 出版物验证资本化率和 IRR 范围。

## Wiki 路径

此页面位于 [[real-estate-finance/INDEX|real-estate-finance index]] 下，作为估值方法路由界面。与[[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]]一起用于法定国土交通省评估框架，[[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]]用于当前上限利率范围图，[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]用于上市车辆定价环境，[[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]用于非上市车辆平行，[[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]]用于收益率利差读数，[[real-estate-finance/bank-commercial-real-estate-lending-japan|bank commercial real-estate lending Japan]]用于杠杆侧承销，[[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]]用于跨域估值环境。与 [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] 配对用于折扣率输入层。

## 四个相互关联的指标

|公制|公式|它捕获了什么 |
|---|---|---|
|资本化率（NOI 收益率）| NOI / 房价 |第一年稳定收益|
|诺伊/NCF |请参阅下面的定义 |物业层面现金流定义|
|无杠杆IRR |财产级现金流的 IRR（收购 + NOI + 出售）|资产级项目回报 |
|杠杆内部收益率|股权现金流内部收益率（偿债+融资费用后）|股权投资者回报 |

## NOI 与 NCF（定义协调）

JREI 调查、[[real-estate-finance/j-reit-market-overview|J-REIT]] IR、私募基金 LP 报告和评估实践中的定义有所不同。协调它们对于任何跨方法比较都是至关重要的。

|项目 |诺伊 | NCF |
|---|---|---|
|租金收入（总额）| + | + |
|其他收入（停车位、标牌、公共区域）| + | + |
|空缺/收款损失| - | - |
|物业运营费用| - | - |
|房产税/城市规划税| - | - |
|保险 | - | - |
|物业管理费| - | - |
|大厦管理费 | - | - |
|维修/保养（经常性）| - | - |
|资本支出/TI/租赁佣金（一次性）|通常被排除|通常扣除 |
|资本维修储备金|通常被排除|通常扣除 |
|折旧|排除|排除|
|利息支出|排除|排除|
|所得税|排除|排除|

一般惯例：NOI 是资本支出/准备金之前的财产运营收入； NCF 是 NOI 减去资本支出/储备，是支持实际分配/偿债的现金流。 J-REIT IR 通常会通过调节来披露两者。

## 资本化率 — 三个子定义

|类型 |定义 |
|---|---|
|进入上限率|第一年 NOI / 收购价格 |
|资本化率稳定 | NOI 处于完全租赁/稳定状态/当前价格 |
|反转/端子盖| DCF 终值适用于 N+1 NOI 年的资本化率 |
|预期（远期）资本化率|基于调查的远期收益率预期； JREI半年度调查是基准|
|交易（市场）上限率|已结束交易的隐含上限利率|

JREI 调查公布了按房地产类型和城市划分的预期资本化率范围； ARES 发布 J-REIT 交易上限和房地产层面数据。两者共同构成公共源上限利率参考。

## 收入法 DCF 机制

[[real-estate-finance/japan-real-estate-appraisal-methodology|appraisal practice]] 中的收入法 DCF 使用：
```
Value = Σ(NCF_t / (1+r)^t) + (TerminalValue_(N+1) / (1+r)^N)

TerminalValue = NCF_(N+1) / TerminalCap
```
|输入|来源 |
|---|---|
|预测 NCF |租赁滚动预测、市场租金假设、空置率假设、资本支出计划 |
|贴现率r |资本化率+增长+风险溢价组成部分|
|持有期N|机构估值通常为 10  年 |
|端子盖|基于调查或边际买家承保；通常为 25-50bp 宽的进入帽 |

直接资本化法（V = NOI / 资本化率）和 DCF 法需要在符合国土交通省的评估意见中进行协调。

## J-REIT 与私人房地产基金定价

相同的基础房地产在上市 J-REIT 工具和私人房地产基金中的定价不同。

|领域 | J-REIT（上市）|私募基金|
|---|---|---|
|定价锚|相对于每单位资产净值的上市单价|收购上限利率加上持有期IRR承保|
|电容率输入 | JREI 评估上限利率（半年周期）|基于交易比较的承保上限率|
|折扣机制|交易价格与资产净值的比率（可以是折扣或溢价）|持有期 IRR 与基金目标 IRR |
|杠杆政策|保守的; LTV 通常为 ~40-50% |更高; LTV 通常为 50-70%，具体取决于策略 |
|分布概况|税收转嫁的强制性 ~90% 分配 |酌情决定；再投资/杠杆灵活性|
|流动性|每日上市流动性|锁仓+赎回窗口结构|
|投资者基础 |零售+机构+外国买家+人寿保险公司|主要是机构（人寿保险公司、养老金、外国全科医生）|
|边际买家承保|公开市场贴现率|私人市场门槛IRR（通常为12-18%以实现增值）|

这种定价差异是 J-REIT 可能以与私人市场买家承保相同资产类型不同的上限利率/资产净值比率进行交易的结构性原因 - 请参阅 [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] 和 [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]。

## 无杠杆与杠杆 IRR

|内部收益率|现金流量基础|它测量什么 |
|---|---|---|
|无杠杆IRR |物业层面：收购流出+NCF+出售收益|资产级项目回报；独立于杠杆|
|杠杆内部收益率|股权层面：股权投资+偿债后NCF+扣除债务后的销售收益|股权投资者回报；对杠杆敏感|

### 力学

对于具有假设的单个属性：
- 收购价格P
- LTV L（债务 = L × P）
- 总债务成本 Rd
- 保持时间N
- 年-1 NCF C
- NCF增长g
- 退出上限利率K_exit
```
Unlevered IRR solves: −P + Σ(C × (1+g)^(t−1)) + (C × (1+g)^N / K_exit − sale cost) over t = 1..N

Levered IRR solves: −P×(1−L) + Σ((C × (1+g)^(t−1)) − (debt service)_t) + (sale proceeds − remaining debt)
```
### 杠杆对 IRR 的影响

|资本化率与债务成本|效果|
|---|---|
|资本化率 > 债务成本（正利差）|杠杆放大股票IRR向上|
|资本化率 ≈ 债务成本 |杠杆几乎不会增加股本IRR，但会增加风险|
|资本化率 < 债务成本（负利差）|杠杆降低了股本内部收益率并集中了下行空间|

在上限利率为 3-5% 和 NIRP 正常化后融资成本的 [[real-estate-finance/real-estate-cap-rate-compression-2026|2026 environment]] 中，主要资产的正利差比 NIRP 时代更窄。这压缩了杠杆内部收益率的上升，并使持有期假设变得更加关键。

## 保持周期灵敏度

持有期假设与上限利率压缩/扩大预期相互作用：

|假设|方向 |
|---|---|
|长期持有 (10y+) 且具有上限速率稳定性 |收入回报主导总回报|
|带上限压缩率的短期保持 (3-5y) |退出上限收益主导总回报|
|长期持有并扩大资本化率|收入回报抵消退出上限损失
|空头持有并扩大资本化率|退出上限损失占主导地位；潜在的负杠杆IRR |

在利率正常化的环境中，审慎的承保假设退出上限比进入上限略宽（例如+25-50bp）。这会降低预测内部收益率，也是对基金承保质量的考验。

## JREI 评估方法重叠

[[real-estate-finance/japan-real-estate-appraisal-methodology|JREI appraisal methodology]] 使用许多与私募基金承销相同的投入，但存在重大差异：

|领域 | JREI评估|私募基金承销|
|---|---|---|
|电容率输入 |以市场调查为基础； JREI 房地产投资者调查范围 |基于交易；交易补偿锚定|
|增长假设|通常保守；实际租金温和增长|特定于战略；增值假设商业计划租金上涨|
|资本支出假设|以储备为基础；长期平均利率|特定于战略；翻新/重新定位资本支出|
|持有期（DCF）|通常为 10  年 |策略特定（3-7y 核心+；5-10y 增值）|
|和解|收入/比较/成本方法的强制规定|单一收入法 DCF 通常占主导地位
|独立|法定执业评估师独立性|经理-自保 |

J-REIT NAV 根据 JREI 锚定的评估值构建；评估滞后（2-4  季度刷新周期）是 J-REIT 交易价格与资产净值变动速度快于评估资产净值变动的结构性原因。

## 资本化率与贴现率（关键区别）

|概念 |定义 |
|---|---|
|资本化率| NOI/价格；第一年收益率；静态测量|
|折扣率|所需总回报；无风险+风险溢价-增长|

关系：资本化率 ≈ 贴现率 − 预期 NOI 增长。

3.5% 上限利率和 1.0% 预期 NOI 增长意味着 ~4.5% 贴现率。将上限利率等同于贴现率（常见的简写）仅在零增长稳定状态下成立。有关贴现率的构造，请参阅 [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]]。

## 相关

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/j-reit-vs-us-reit-governance-comparison]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict]]
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/cost-of-capital-japan-2026-reference]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[money-market/japan-money-market]]
- [[INDEX|FinWiki index]]

## 来源

- JREI（日本房地产研究所）：房地产投资者调查（半年度上限利率发布）。
- ARES（房地产证券化协会）：J-REIT 数据和调查出版物。
- J-REIT.jp：市场门户和教育材料。
- 国土交通省：不动产鉴定価基准（房地产评估标准）框架。
- JPX：REIT 细分数据和披露框架。
- 日本央行：宏观和利率数据供无风险参考。
- Damodaran：无杠杆/杠杆 IRR 机制的房地产估值方法参考。

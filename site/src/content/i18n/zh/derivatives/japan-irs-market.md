---
source: derivatives/japan-irs-market
source_hash: dd6eada7e3fde355
lang: zh
status: machine
fidelity: ok
title: "日本日元利率互换(IRS)市场"
translated_at: 2026-05-31T03:19:56.478Z
---

# 日本日元利率互换(IRS)市场

## TL;DR

日元利率互换(IRS)市场是一个 OTC 衍生品场所,两个交易对手在其中就一段约定期限,以一连串固定的日元计价利息支付,交换一连串浮动利率的日元支付。它是日本银行、寿险公司、企业及管理日元敞口的外国投资者最主要的利率对冲工具。

浮动参考利率历来是 1个月、3个月或 6个月的 TIBOR;在 LIBOR 停止后,曲线中越来越大的份额参考 TONA 后置复利(与 OIS 市场重叠 — 见 [[derivatives/ois-tona-curve]])。期限从 1年交易至 30年乃至更长;流动性最高的点集中在 2年、3年、5年、7年、10年、20年和 30年。

对 FinWiki 而言,本条目涵盖固定-浮动互换机制、TIBOR 向 TONA 的迁移以及 TIBOR-IRS 的延续、名义存量、交易商银行业务结构、JSCC 清算强制令,以及终端用户构成(企业对金融机构)。

## Wiki 路由

本条目归属于 [[derivatives/INDEX|derivatives index]]。请对照 [[derivatives/ois-tona-curve]] 阅读以了解贴现曲线和短期限 RFR 一侧,[[derivatives/jgb-futures-curve]] 了解交易所上市的对冲替代品,以及 [[derivatives/yen-basis-swap-market]] 了解交叉货币交汇点。现券市场是 [[money-market/japan-money-market]];企业终端用户视角是 [[finance/japan-corporate-fx-and-rate-hedge-policy]]。

## 工具机制

标准日元 IRS 有两条端,就一笔约定的名义本金进行交换(不交换本金):

| 要素 | 细节 |
|---|---|
| 固定端 | 固定利率(即"互换利率")定期支付(TIBOR 浮动 IRS 通常半年一次,TONA-OIS 式 IRS 通常一年一次)。 |
| 浮动端 | 每期重置为浮动参考利率(1M、3M 或 6M TIBOR;或后置复利 TONA)。日元的天数计算惯例通常为 ACT/365 。 |
| 名义本金 | 不交换。仅用于利息支付计算。 |
| 期限 | 流动性最高的点:1年、2年、3年、5年、7年、10年、15年、20年、30年。直至 40年的期限用于寿险公司对冲。 |
| 结算 | 每个票息日净额支付(仅结算两端之间的差额)。 |
| 抵押品 | 已抵押交易采用标准 CSA,以日元现金每日支付 VM;非清算双边交易采用 UMR 分阶段的 IM。 |
| 清算 | 标准化期限和参考指数在 FIEA 清算强制令下于 JSCC 清算。 |

经济内涵:固定利率支付方在该期限内锁定已知的融资成本并收取浮动现金流;浮动利率支付方则相反。双方均可对冲资产负债表对利率变动的敞口。

## TIBOR 对 TONA 迁移

日元 IRS 参考利率经历了 IBOR 转换的演进:

| 参考利率 | 状态 | 典型用途 |
|---|---|---|
| 1个月 TIBOR | 在用;由 JBATA 管理 | 部分贷款挂钩 IRS、结构化产品。 |
| 3个月 TIBOR | 在用;由 JBATA 管理 | 存量和新增日元 IRS 的重要份额,尤其是企业贷款挂钩对冲。 |
| 6个月 TIBOR | 在用;由 JBATA 管理 | 长期限 IRS,尤其是保险挂钩。 |
| TONA(后置复利) | 无风险利率(RFR);后 LIBOR 时代指定 | 新增 OIS 以及越来越多的新增中短期限 IRS;贴现曲线参考(见 [[derivatives/ois-tona-curve]])。 |
| 日元 LIBOR(1M、3M、6M) | 已于 2021 底停止(合成版逐步退出 2023) | 存量合约经 ISDA Fallback 协议修订为 TONA + CAS。 |
| 欧洲日元 TIBOR(Z-TIBOR) | 于 2024 年 12 月停用 | 仅供历史使用。 |

迁移之所以重要,因为:

1. 新增日元 IRS 发行越来越多地为已清算的标准化互换参考 TONA 复利。
2. 参考 TIBOR 的 IRS 在定期固定贷款对冲应用中继续共存。
3. TIBOR-TONA 基差(以基点计)是一个可交易报价,补偿 TIBOR 相对无风险 TONA 的银行信用融资成分。
4. 交易商在持有直接 IRS 头寸的同时,还运营 TIBOR-OIS 和 TIBOR-TONA 基差账簿。

这个双利率世界在运营上复杂,但反映出日本贷款市场某些细分领域对定期固定参考的持续需求,与全球向基于 RFR 定价的推进并存。

## 名义存量

日元利率衍生品(IRS + OIS 合计)在 BIS OTC 衍生品统计及 BoJ 的日本部分调查中半年度报告一次:

| 指标 | 量级(示意性 — 精确数字请引用当期 BIS 发布) |
|---|---|
| 日元单一货币利率衍生品总名义存量 | 在 BIS 汇总的日元 IRS/OIS/FRA 类别中达数十万亿美元等值。 |
| 全球 IRS 名义额中日元的占比 | 四大货币之一(美元、欧元、英镑、日元);日元占比有意义,但小于美元和欧元。 |
| 总市值 | 名义额的一小部分(通常为低个位数百分比),反映交易商账簿中相互抵消的头寸。 |

标准告诫:名义存量是合约规模的存量度量;总市值是更接近经济敞口的代理;净敞口在净额结算协议之后还要小得多。BIS 和 BoJ 在其半年度发布中都公布全部三种度量。任何当期分析都应引用确切的调查批次,因为这些数字每年更新两次。

新增日元 IRS 中有相当大的份额在 JSCC 清算;自 FSA 清算强制令生效以来,清算份额持续增长。

## 交易商银行收入划分

日元 IRS 交易商业务由日本超大型银行关联证券公司加上全球投资银行主导:

| 交易商类别 | 代表性公司 |
|---|---|
| 日本超大型银行证券关联机构 | MUFG Securities、SMBC Nikko、Mizuho Securities(及其在母证券实体内的日元 IRS 做市台)。 |
| 独立日本证券公司 | Nomura(最大的非超大型银行业务)、Daiwa Securities。 |
| 活跃于日元的全球投资银行 | JPMorgan、Goldman Sachs、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS。 |
| 交易商间经纪商 | ICAP / Tradition / BGC / Tullett Prebon — 提供匿名 IDB 执行和指示性价格发现。 |

日元 IRS 做市收入在交易商银行 IR 中作为其批发/市场业务内"固定收益"或"利率"的一部分报告。公开披露不会将日元 IRS 损益从更广的利率业务中单独拆分,但 MUFG、SMFG 和 Mizuho FG 的 IR 材料中的业务评述表明,日元利率是其全球市场收入的重要贡献者。

业务经济性取决于:

- 在客户流量上捕获双边买卖价差。
- 库存持有及仓储头寸的运行率收入。
- 与 JGB 现券、回购、CCBS 及外汇远期业务的跨产品协同。
- 作为监管拖累的资产负债表成本(RWA、LR、NSFR)。

母集团披露层见 [[banking/INDEX]] 及 JapanFG 锚点页面;规范交易商活动的 FIEA 注册见 [[banking/japan-banking-license-tier-comparison-matrix]]。

## 企业对金融机构终端用户

| 终端用户类别 | 用例 | 方向(典型) |
|---|---|---|
| 超大型银行(财资) | 对冲日元贷款重定价、日元债券组合久期、ALM 缺口管理。 | 收取固定(当资产为浮动时);支付固定(当资产为固定时)。 |
| 地方银行 | 对冲日元债券组合久期;管理 IRRBB(银行账簿利率风险)。 | 混合;常收取固定以低成本拉长久期。 |
| 信托银行/托管银行 | ALM 及养老金相关日元利率对冲。 | 混合。 |
| 寿险公司 | 对冲长期限日元保单准备金负债(资产端有效久期短对长久期负债 → 对长期限收取固定互换的需求)。 | 在长期限收取固定(10年、20年、30年、40年)。 |
| 财险公司 | 较小规模的 ALM 对冲。 | 混合。 |
| 企业(非金融) | 将日元计价浮动利率贷款敞口对冲为固定;将固定票息日元债券发行转换为浮动;在外币债券发行上进行换回日元操作。 | 对冲浮动利率贷款时支付固定;将固定票息债券换为浮动时收取固定。 |
| 外国投资者 | 对日本利率持仓;日本对其他主要货币曲线的相对价值;对冲 JGB 现券久期。 | 高度方向性和战术性。 |
| 资产管理人/养老基金 | 日元固定收益委托的久期管理。 | 混合。 |

寿险公司在结构上是长期限日元 IRS 收取固定需求中最大的单一类别,因为其长久期保单准备金对资产端构成久期缺口。这一锚点需求解释了 20年和 30年期限的深厚流动性。

企业终端用户流量细节见 [[finance/japan-corporate-fx-and-rate-hedge-policy]]。

## JSCC 清算强制令

FSA 依据 FIEA 实施了对标准化日元 IRS 的清算强制令,要求受涵盖交易对手之间符合条件的交易在 JSCC 清算:

| 要素 | 细节 |
|---|---|
| CCP | 日本证券清算公司(JSCC)。 |
| 强制产品 | 主要期限的标准化日元 IRS,带已清算参考指数;经多个规则周期扩展。 |
| 受涵盖交易对手 | 主要日本金融机构;随时间扩展以纳入更多实体。 |
| 保证金 | 在 JSCC 组合保证金方法下的 IM 和 VM;以日元现金结算。 |
| 违约处置 | JSCC 瀑布(违约方保证金 → 违约方出资 → JSCC 资本档 → 非违约成员基金 → 进一步资源)。 |

日元 IRS 在 JSCC 的清算份额已大幅增长。已清算交易受益于:

- 多边净额结算降低总敞口。
- 标准化保证金方法消除双边谈判摩擦。
- 消除双边交易对手风险;CCP 风险集中并经压力测试。
- 相对非清算交易的资本减免(在巴塞尔框架下)。

非清算双边日元 IRS 在以下情形继续存在:非标准期限、非标准重置惯例、结构化交易,以及不受强制令约束的交易对手。非清算交易须遵守 UMR(非清算保证金规则)分阶段的 IM 要求。

清算公司基础设施见 [[securities/japan-securities-clearing-corp]],更广的市场基础设施背景见 [[securities/japan-market-infrastructure-map]]。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## 来源

- BIS:半年度 OTC 衍生品统计(日元利率衍生品名义额与市值)。
- 日本银行:BIS OTC 衍生品调查的日本部分;日元利率衍生品统计发布。
- 日本证券清算公司:日元 IRS 清算范围、强制产品清单、保证金方法。
- 金融厅:FIEA 清算强制令范围及监管指引。
- ISDA:SwapsInfo 汇总周度交易;2020 IBOR Fallbacks 协议。
- 日本银行家协会 TIBOR 管理机构(JBATA):TIBOR 基准管理。
- 日元利率基准跨业委员会:TONA 采用及 TIBOR-TONA 共存报告。
- 交易商银行 IR 发布:MUFG、SMFG、Mizuho FG、Nomura HD、Daiwa Securities Group 季度市场板块评述。

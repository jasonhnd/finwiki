---
source: derivatives/japan-irs-market
source_hash: 620e9585f44b81d4
lang: zh
status: machine
fidelity: ok
title: "日本日元利率互换（IRS）市场"
translated_at: 2026-06-18T23:33:48.344Z
---

# 日本日元利率互换（IRS）市场

## TL;DR

日元利率互换（IRS）市场是这样一个场外衍生品场所：两个交易对手在约定的期限内，将一系列固定的日元计价利息支付与一系列浮动利率的日元支付相交换。它是日本的银行、寿险公司、事业公司以及管理日元敞口的外国投资者最主要的利率对冲工具。

浮动参照历史上为 1个月、3个月或 6个月 TIBOR; LIBOR 停用后，曲线中越来越大的份额参照 TONA 后定复利（与 OIS 市场重叠 — 参见 [[derivatives/ois-tona-curve]]）。期限从 1Y 到 30Y 及以上均有交易; 流动性最高的点集中于 2Y、3Y、5Y、7Y、10Y、20Y 和 30Y。

对 FinWiki 而言，本条目涵盖固定-浮动互换机制、从 TIBOR 向 TONA 的迁移与持续存在的 TIBOR-IRS、名义本金存量、交易商银行的特许经营结构、JSCC 清算义务，以及终端用户构成（事业公司 对 金融机构）。

## Wiki 路径

本条目归属于 [[derivatives/INDEX|derivatives index]]。贴现曲线与短期限 RFR 侧请配合 [[derivatives/ois-tona-curve]] 阅读，交易所上市的对冲替代方案请配合 [[derivatives/jgb-futures-curve]]，跨货币交叉点请配合 [[derivatives/yen-basis-swap-market]] 阅读。现货市场为 [[money-market/japan-money-market]]; 事业公司终端用户视角为 [[finance/japan-corporate-fx-and-rate-hedge-policy]]。

## 工具机制

标准 JPY IRS 拥有两条腿，在约定的名义本金上互换（不交换本金）：

| Element | Detail |
|---|---|
| 固定腿 | 定期支付的固定利率（「互换利率」）（TIBOR 浮动 IRS 通常半年一次，TONA-OIS 式 IRS 通常一年一次）。 |
| 浮动腿 | 每期重置为浮动参照（1M、3M 或 6M TIBOR; 或后定复利 TONA）。日数计算对 JPY 通常为 ACT/365 。 |
| 名义本金 | 不交换。仅用于利息支付计算。 |
| 期限 | 流动性最高的点：1Y、2Y、3Y、5Y、7Y、10Y、15Y、20Y、30Y。最长至 40Y 的期限用于寿险公司对冲交易。 |
| 结算 | 每个票息日的净支付（仅结算两条腿之间的差额）。 |
| 担保 | 对担保化交易采用配有日元现金每日 VM 的标准 CSA; 对非清算双边交易采用 UMR 分阶段 IM。 |
| 清算 | 标准化期限与参照指数在 FIEA 清算义务下于 JSCC 清算。 |

经济内涵：固定利率支付方锁定期限内已知的融资成本并收取浮动现金流; 浮动利率支付方则相反。双方均可对冲资产负债表对利率变动的敞口。

## TIBOR 对 TONA 迁移

JPY IRS 参照利率已历经 IBOR 转换而演变：

| Reference rate | Status | Typical use |
|---|---|---|
| 1个月 TIBOR | 活跃; 由 JBATA 运营 | 部分贷款联结 IRS、结构化产品。 |
| 3个月 TIBOR | 活跃; 由 JBATA 运营 | 遗留及新增 JPY IRS 的可观份额，尤其是事业公司贷款联结对冲。 |
| 6个月 TIBOR | 活跃; 由 JBATA 运营 | 长期限 IRS，尤其是保险联结。 |
| TONA（后定复利） | 无风险利率（RFR）; LIBOR 停用后指定 | 新增 OIS，以及日益增多的新增短至中期限 IRS; 贴现曲线参照（参见 [[derivatives/ois-tona-curve]]）。 |
| JPY LIBOR（1M、3M、6M） | 2021 末停用（合成式逐步退出 2023） | 遗留合同经由 ISDA 回退协议修订为 TONA + CAS。 |
| 欧洲日元 TIBOR（Z-TIBOR） | 2024 年 12 月停用 | 仅历史使用。 |

此迁移之所以重要：

1. 新增 JPY IRS 发行就已清算的标准化互换而言，日益参照 TONA 复利。
2. 参照 TIBOR 的 IRS 因定期固定的贷款对冲用途而继续共存。
3. TIBOR-TONA 基差（以基点计）是一项可交易报价，用以补偿 TIBOR 的信用-银行融资成分相对于无风险 TONA 的差异。
4. 交易商在持有直接 IRS 头寸的同时，运营 TIBOR-OIS 及 TIBOR-TONA 基差账簿。

这一双利率世界在运营上颇为复杂，但它反映了在全球推动 RFR 基准定价的同时，日本贷款市场某些细分领域对定期固定参照的持续需求。

## 名义本金存量

JPY 利率衍生品（IRS + OIS 合计）在 BIS 场外衍生品统计以及 BoJ 调查的日本部分中按半年报告：

| Metric | Magnitude (illustrative — cite current BIS release for exact figures) |
|---|---|
| 总名义本金存量，JPY 单一货币利率衍生品 | 在 BIS 汇总 JPY IRS / OIS / FRA 类别中为数十万亿 USD 等值。 |
| JPY 在全球 IRS 名义本金中的份额 | 四大货币（USD、EUR、GBP、JPY）之一; JPY 份额可观但小于 USD 与 EUR。 |
| 总市场价值 | 名义本金的一小部分（通常为低个位数百分比），反映交易商账簿中相互抵消的头寸。 |

标准提醒：名义本金存量是合同规模的存量度量; 总市场价值是更接近经济敞口的代理量; 净敞口在轧差协议后更要小得多。BIS 与 BoJ 均在其半年度发布中公布全部三项度量。对任何当前分析，因数字每年更新两次，请引用确切的调查年份。

新增 JPY IRS 的可观份额在 JSCC 清算; 自 FSA 清算义务生效以来，清算份额持续增长。

## 交易商银行收入分割

JPY IRS 交易商特许经营由日本大型银行系券商加上全球投资银行主导：

| Dealer category | Representative firms |
|---|---|
| 日本大型银行证券系 | MUFG 证券、SMBC 日兴、瑞穗证券（及其母券商实体内的 JPY-IRS 做市台）。 |
| 独立日本券商 | 野村（非大型银行系中最大的特许经营）、大和证券。 |
| 在 JPY 活跃的全球投资银行 | JPMorgan、Goldman Sachs、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS。 |
| 银行间经纪商 | ICAP / Tradition / BGC / Tullett Prebon — 提供匿名 IDB 执行与指示性价格发现。 |

JPY IRS 做市收入在交易商银行 IR 中，作为其批发／市场业务内「固定收益」或「利率」的一部分报告。公开披露并不将 JPY-IRS 损益从更广泛的利率业务中单独剥离，但 MUFG、SMFG、瑞穗 FG 的 IR 资料中的特许经营评述表明，JPY 利率是其全球市场收入的可观贡献者。

特许经营经济性取决于：

- 对客户流的双向买卖价差捕获。
- 来自仓储头寸的库存持有与运行率收入。
- 与 JGB 现货、回购、CCBS、FX 远期业务的跨产品协同。
- 作为监管拖累的资产负债表成本（RWA、LR、NSFR）。

母集团披露层请参见 [[banking/INDEX]] 及 JapanFG 锚点页面; 规范交易商活动的 FIEA 登记请参见 [[banking/japan-banking-license-tier-comparison-matrix]]。

## 事业公司 对 金融机构终端用户

| End-user category | Use case | Direction (typical) |
|---|---|---|
| 大型银行（资金部） | 对冲 JPY 贷款重定价、JPY 债券组合久期、ALM 缺口管理。 | 收取固定（资产为浮动时）; 支付固定（资产为固定时）。 |
| 地区银行 | 对冲 JPY 债券组合久期; 管理 IRRBB（银行账簿利率风险）。 | 混合; 常为廉价延长久期而收取固定。 |
| 信托银行 / 托管银行 | ALM 及养老金相关的 JPY 利率对冲。 | 混合。 |
| 寿险公司 | 对冲长期限 JPY 保单准备金负债（相对长久期负债的实际短久期 → 对长期限收取固定互换的需求）。 | 在长期限（10Y、20Y、30Y、40Y）收取固定。 |
| 财险公司 | 较小规模的 ALM 对冲。 | 混合。 |
| 事业公司（非金融） | 将 JPY 计价浮动利率贷款敞口对冲为固定; 将固定票息 JPY 债券发行转换为浮动; 对外币债券发行进行回换至日元。 | 对冲浮动利率贷款时支付固定; 将固定票息债券换为浮动时收取固定。 |
| 外国投资者 | 对日本利率持有观点; 日本对其他主要货币曲线的相对价值; 对冲 JGB 现货久期。 | 高度方向性且具战术性。 |
| 资产管理人 / 养老金基金 | JPY 固定收益委托的久期管理。 | 混合。 |

寿险公司在结构上是长期限 JPY IRS 收取固定需求的最大单一类别，因为其长久期保单准备金对资产侧形成了久期缺口。这一锚定需求解释了 20Y 与 30Y 期限上的深厚流动性。

事业公司终端用户流的细节在 [[finance/japan-corporate-fx-and-rate-hedge-policy]] 中涵盖。

## JSCC 清算义务

FSA 在 FIEA 下实施了对标准化 JPY IRS 的清算义务，要求受涵盖交易对手之间的合格交易在 JSCC 清算：

| Element | Detail |
|---|---|
| CCP | Japan Securities Clearing Corporation（JSCC）。 |
| 强制清算产品 | 主要期限的标准化 JPY IRS，配有可清算的参照指数; 历经多个规则周期扩展。 |
| 受涵盖交易对手 | 主要日本金融机构; 随时间扩展以纳入更多实体。 |
| 保证金 | 在 JSCC 的组合保证金方法下的 IM 与 VM; 以日元现金结算。 |
| 违约管理 | JSCC 瀑布机制（违约方保证金 → 违约方出资 → JSCC 资本分层 → 非违约成员基金 → 进一步资源）。 |

JSCC 处 JPY IRS 的清算份额已实质性增长。已清算交易享有以下益处：

- 降低总敞口的多边轧差。
- 消除双边谈判摩擦的标准化保证金方法。
- 消除双边交易对手风险; CCP 风险被集中并经压力测试。
- 相对于非清算交易的资本减免（在巴塞尔框架下）。

非清算双边 JPY IRS 因以下原因继续存在：非标准期限、非标准重置惯例、结构化交易，以及不受该义务约束的交易对手。非清算交易受 UMR（非清算保证金规则）分阶段 IM 要求约束。

清算公司基础设施请参见 [[securities/japan-securities-clearing-corp]]，更广泛的市场基础设施背景请参见 [[securities/japan-market-infrastructure-map]]。

## Related

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
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## Sources

- BIS: Semi-annual OTC Derivatives Statistics (JPY interest-rate derivatives notional and market value).
- Bank of Japan: Japan portion of BIS OTC derivatives survey; JPY interest-rate derivatives statistical release.
- Japan Securities Clearing Corporation: JPY IRS clearing scope, mandated product list, margin methodology.
- Financial Services Agency: FIEA clearing mandate scope and supervisory guidance.
- ISDA: SwapsInfo aggregated weekly transactions; 2020 IBOR Fallbacks Protocol.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: TONA adoption and TIBOR-TONA coexistence reports.
- Dealer-bank IR releases: MUFG, SMFG, Mizuho FG, Nomura HD, Daiwa Securities Group quarterly markets-segment commentary.

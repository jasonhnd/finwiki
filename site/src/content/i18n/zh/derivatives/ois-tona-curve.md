---
source: derivatives/ois-tona-curve
source_hash: 85b13d2473defdba
lang: zh
status: machine
fidelity: ok
title: "OIS TONA 曲线与日元贴现"
translated_at: 2026-06-18T23:33:48.311Z
---

# OIS TONA 曲线与日元贴现

## TL;DR

日元隔夜指数掉期 (OIS) 是一种 OTC 利率衍生品，其中一方在确定的期限内支付固定利率，交易对手支付同期日度 Tokyo Overnight Average Rate (TONA) 的几何 (复利) 平均。TONA 是日本央行公布的无担保隔夜拆借交易的成交量加权平均，在全球 IBOR 过渡之下被指定为日元货币的无风险利率 (RFR)。

LIBOR 退场后 (日元 LIBOR 于 2021 停用，合成日元 LIBOR 的分阶段淘汰于 2023完成)，参照 TONA 的 OIS 是日元衍生品的标准贴现曲线 — 既用于 OIS 本身的定价，也作为担保日元 IRS (见 [[derivatives/japan-irs-market]])、日元-美元基差掉期 (见 [[derivatives/yen-basis-swap-market]])、日元计价的 CCP 清算交易，以及以日元现金缴付的 CSA 担保 OTC 记账中所使用的贴现因子。

对 FinWiki 而言，OIS-TONA 曲线是日本央行短期利率政策预期的价格表达，是每一个以日元定价的衍生品之下的贴现曲线，也是对日本央行近期利率决定最直接、最可见的市场解读。

## Wiki route

本词条位于 [[derivatives/INDEX|derivatives index]] 之下。请对照 [[derivatives/japan-irs-market]] 以了解更长期限的曲线，对照 [[derivatives/jgb-futures-curve]] 以了解 JGB 隐含的利率曲线，对照 [[derivatives/yen-basis-swap-market]] 以了解 OIS 曲线如何与跨货币融资相互作用。底层的 TONA 现金机制为 [[money-market/call-market-structure]]，日本央行的政策实施为 [[money-market/boj-open-market-operations]]。

## TONA — 底层利率

TONA 由日本银行基于无担保隔夜拆借交易每日计算并公布:

| 要素 | 详情 |
|---|---|
| 全称 | Tokyo Overnight Average Rate (无担保隔夜拆借加权平均利率)。 |
| 计算者与公布者 | 日本银行。 |
| 底层交易 | 经由短资公司中介并向日本央行报告的无担保隔夜拆借市场交易。 |
| 方法 | 各营业日合格隔夜交易的成交量加权平均。 |
| 公布 | 由日本央行于下一营业日 (T+1) 公布; 此前也曾以 TONAR / Tokyo Overnight Average Rate 形式发布。 |
| 重置 | 每日; 利率本身不含内在的期限结构。 |
| 货币 / 惯例 | 日元; 日元货币市场按惯例采用 ACT/365 日计数。 |

在由日本円利率基准跨行业委员会 (一个由日本央行与 FSA 参与召集的官民机构) 协调的 IBOR 过渡之下，TONA 作为指定 RFR 取代了日元 LIBOR。此次过渡遵循金融稳定理事会 (FSB) 关于逐一货币采用 RFR 的建议。

由于 TONA 反映实际的无担保隔夜交易 (即 [[money-market/call-market-structure]] 中详述的同一市场)，它对终结 LIBOR 的操纵风险具有稳健性。然而，它对日本央行的政策实施较为敏感: 若日本央行的充裕准备金政策压低拆借活动，TONA 的成交量可能萎缩，利率在某些时期会变得更为稀薄。

## LIBOR 退场后的过渡

日元 LIBOR 过渡沿着一条协调的时间线展开:

| 年 | 事件 |
|---|---|
| 2017 | 英国 FCA 宣布在 2021年底前停用 LIBOR。 |
| 2018 | 日本円利率基准跨行业委员会在日本央行 / FSA / 业界参与下成立。 |
| 2018–2021 | 新增日元掉期与贷款业务向 TONA 参照迁移; 既有日元 LIBOR 合同经由 ISDA 2020 Fallback Protocol 修订或加装回退条款。 |
| 2021 年底| 日元 LIBOR 在代表性基础上停用。为部分既有 1M、3M、6M 期限引入合成日元 LIBOR (FCA 管理、不具代表性) 作为收尾过渡桥梁。 |
| 2023 | 合成日元 LIBOR 停用。所有日元利率衍生品参照 TONA (或在特定情形下，为定期定价市场参照 TIBOR)。 |
| 持续中 | TIBOR (Tokyo Interbank Offered Rate) 为部分需要定期固定的日元计价贷款与债券产品继续存在; D-TIBOR 与 Z-TIBOR 由全国银行协会 TIBOR 运营机构 (JBATA) 管理。 |

过渡结果: 日元 IRS 市场、OIS 市场以及 CSA 担保 OTC 衍生品如今以 TONA 作为底层浮动参照与贴现利率。经由 ISDA 回退迁移的日元 LIBOR 衍生品如今参照 TONA 后置复利 + 固定的信用调整利差 (CAS)。

## 日本央行政策利率传导

OIS-TONA 曲线是对曲线期限内预期日本央行隔夜利率最直接的市场表达:

| 期限 | OIS 利率所表达的内容 |
|---|---|
| 1W、1M、3M OIS | 通过接下来 1–2 次货币政策会议 (MPM) 的近期日本央行利率预期。 |
| 6M、1Y OIS | 预期的日本央行利率路径，包含未来 12 个月内 MPM 可能的加息 / 降息。 |
| 2Y、3Y、5Y OIS | 中期政策路径; 反映 MPM 轨迹加上小幅期限溢价。 |
| 10Y、20Y、30Y OIS | 长期视野的均衡利率预期加期限溢价; 在同一期限上流动性低于 IRS 曲线。 |

MPM 日期前后 1Y 或 2Y OIS 利率的变动是政策意外最受关注的信号。在 2024 年 3 月日本央行退出负利率与 YCC 的体制转变之后，OIS 曲线迅速重新定价以反映可能的利率正常化路径; 此后每次 MPM 前后的 OIS 变动均受到密切关注。

OIS-TONA 与政策利率指引之间的关系为:

- 政策利率指引 (目标附近的无担保隔夜拆借利率) 设定了 TONA 每日跟踪的近零下限。
- OIS 远期利率嵌入了日本央行在每个期限内将政策利率设定于何处的概率加权预期。
- 在同一视野下，观测到的 TONA 与隐含的 OIS 远期之间的差异，揭示了 MPM 之间政策预期的重新定价。

政策实施层请参见 [[financial-regulators/boj-monetary-policy]] (若存在) 与 [[money-market/boj-open-market-operations]]; 本词条涵盖衍生品层面的表达。

## OIS 曲线构建

市场从业者按如下方式构建日元 OIS-TONA 曲线:

| 步骤 | 输入 |
|---|---|
| 1. 即期 | 今日的 TONA 定盘 (T-1 公布利率)，锚定于日本央行政策指引。 |
| 2. 短端 | 来自交易商间报价的 1W、2W、1M、2M、3M 期限的 OIS 利率。 |
| 3. 中期 | 6M、9M、1Y、18M、2Y、3Y 的 OIS 利率。 |
| 4. 长端 | 在流动性支持报价处，5Y、7Y、10Y、15Y、20Y、30Y 的 OIS 利率。 |
| 5. 自举 | 求解贴现因子曲线 D(t)，使每个输入 OIS 利率均按面值定价; 向前迭代。 |
| 6. 平滑 | 应用与交易商定价模型一致的平滑插值 (三次样条、单调三次，或对数贴现的分段线性)。 |

所得的贴现曲线 D(t) 用于:

- 按面值为新增 OIS 交易定价;
- 为担保日元掉期的未来现金流贴现 (LIBOR 退场后于 2010采用的「OIS 贴现」惯例);
- 计算 CSA 担保日元敞口的现值 (PV);
- 对 JSCC 清算的日元 IRS 头寸进行盯市 (JSCC 对日元清算产品采用 TONA-OIS 贴现)。

对于非担保或采用不同担保的交易，贴现曲线通过融资估值调整 (FVA) 或切换至不同的担保利率曲线进行调整。这就是 2010之后成为标准的「多曲线框架」。

## 日元 IRS 的掉期利率贴现曲线

日元 IRS 市场 (见 [[derivatives/japan-irs-market]]) 在定价上是双曲线:

| 曲线 | 用途 |
|---|---|
| TONA-OIS | 贴现曲线 — 用于为未来现金流计算 PV。 |
| TONA 远期曲线 | 投影曲线 — 用于预测未来 TONA 浮动端的重置。 |
| (历史) TIBOR 远期曲线 | 用于参照 TIBOR 的既有 IRS，预测 1M / 3M / 6M TIBOR 重置; PV 仍以 TONA-OIS 进行。 |

这一双曲线框架意味着，即便是 TIBOR 浮动的 IRS，只要交易在标准 CSA 条件下以日元现金担保，其贴现也使用 TONA-OIS 曲线。TIBOR-TONA 基差反映在单独的基差掉期报价中 (TIBOR vs TONA OIS，以 bp 计)。

## 市场深度与流动性

| 期限带 | 流动性评估 |
|---|---|
| 1M–6M | 非常流动; 紧致的买卖价差 (通常低于 1 bp)。 |
| 1Y–3Y | 流动; 最常交易的 MPM 预期期限。 |
| 5Y–10Y | 对机构投资者流动较为流动; 买卖价差通常为 1–2 bp。 |
| 15Y–30Y | OIS 形态下的流动性低于 TIBOR IRS 或 JGB 现货形态; 买卖价差更宽。 |

日元 OIS 的名义未平仓金额在汇总基础上为数万亿日元等值的万亿级别 (BIS 的 OTC 衍生品统计将其归入日元 IRS / OIS 类别汇总)。JSCC 清算了清算日元 OIS 的绝大部分; 非标准期限与结构化交易则存在非清算的双边 OIS。

## 交易商做市方

| 参与者 | 角色 |
|---|---|
| 日本megabank证券子公司 (MUFG Securities、SMBC Nikko、Mizuho Securities) | 日元 OIS 的主要做市方; 服务国内银行、保险公司与企业。 |
| 全球交易商 (JPMorgan、Goldman、Citi、Deutsche、BNP、Barclays、HSBC) | 双边做市商，尤其在跨境流量与 CCBS 邻近交易中。 |
| 独立证券公司 (Nomura、Daiwa) | 国内业务加跨境。 |
| 交易商间经纪商 (Tradition、BGC、ICAP、Tullett Prebon) | 提供指示性定价并执行 IDB 流量。 |
| 终端用户 | 日本megabank (财资对冲)、地方银行、寿险公司、资产管理者、企业，以及对日本央行政策持有观点的海外账户。 |

megabank的交易子公司与现金货币市场中介相交叉; 短资一侧请参见 [[money-market/tanshi-company-business-model]]，受监管实体层请参见 [[banking/japan-banking-license-tier-comparison-matrix]]。

## TONA 期货 (邻近的上市产品)

OSE 上市 TONA 3个月期货，通过提供交易所交易、JSCC 清算的短期限 TONA 预期敞口来补充 OTC OIS 市场。规格:

| 要素 | 详情 |
|---|---|
| 标的 | 合约参照期内的 3个月复利 TONA。 |
| 报价 | 100.00 减去期货利率; 标准的短期利率期货惯例。 |
| 最小变动价值 | 按合约定义; 面向零售与小型机构的小额名义规模。 |
| 结算 | 在合约到期时对照参照 3个月 TONA 复利进行现金结算。 |
| 清算 | JSCC。 |

TONA 期货的流动性正在增长，但仍小于 OTC OIS。对于用户偏好交易所上市结构而非 OTC 的短期利率对冲而言，它们颇为有用。

## Related

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
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Call Money Market Data (TONA / TONAR publication).
- Bank of Japan: Money Market surface and statistical releases.
- Cross-Industry Committee on Japanese Yen Interest Rate Benchmarks: public reports on TONA adoption and IBOR transition.
- Japan Securities Clearing Corporation: JPY IRS / OIS clearing rules and TONA futures clearing.
- Japan Exchange Group / Osaka Exchange: TONA 3-Month Futures contract specifications.
- Financial Services Agency: IBOR transition supervisory guidance.
- ISDA: 2020 IBOR Fallbacks Protocol and Supplement.
- Japanese Bankers Association TIBOR Administration (JBATA): TIBOR benchmark administration.
- BIS: Semi-annual OTC derivatives statistics.

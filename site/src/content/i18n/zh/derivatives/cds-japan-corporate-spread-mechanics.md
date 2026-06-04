---
source: derivatives/cds-japan-corporate-spread-mechanics
source_hash: 614fb0d191a9118c
lang: zh
status: machine
fidelity: ok
title: "日本企业 CDS 利差机制"
translated_at: 2026-05-31T03:19:56.435Z
---

# 日本企业 CDS 利差机制

## TL;DR

日本企业 CDS 利差，是保护买方为换取在参考的日本上市企业发生违约时获得违约或有支付，而向保护卖方支付的以基点计的运行式（running）保费。该利差可分解为信用风险溢价（预期违约概率与假定回收率的函数）加上结构性溢价（相对于标的债券的基差、做市商持有成本、监管资本成本）。日本企业 CDS 以**主权对企业利差**为基准定价，以日本主权 CDS 作为隐含的无信用风险锚点，再在其上叠加各家企业的利差。2014 版 ISDA 信用衍生品定义下的信用事件触发覆盖**破产、未付款（failure-to-pay）和重组**（由 Mod-R / Mod-Mod-R 变体决定可交割债务）。信用事件发生后，回收率由 **ISDA 主持的拍卖**确定。鉴于 ESR / 会计约束，寿险公司和养老基金对 CDS 的使用较为谨慎，但通过指数 CDS 进行信用利差对冲是 [[insurance/japan-life-insurance-alm-overview|life ALM]] 讨论中反复出现的主题。

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the spread-mechanics page that complements [[derivatives/japan-cds-market-overview|Japan CDS market overview]]. Read it together with [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] for the arb structure, [[derivatives/japan-irs-market|Japan IRS market]] for the underlying yen rates curve, [[derivatives/yen-basis-swap-market|yen basis swap market]] for the JPY funding overlay, and [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] for the USD overlay that dominates Japanese institutional funding.

Cross-reference [[finance/INDEX|finance index]] and [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the issuer-side credit context, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for the equity-credit linkage, [[banking/INDEX|banking index]] for the megabank dealer / counterparty role, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the insurer credit-hedging use case, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer-to-fund plumbing.

### Building blocks

一个日本单名企业 CDS 利差 *S(corp)* 在期限 T 上可以在概念上分解为：

```
S(corp, T) ≈ S(sovereign, T) + S(sector, T) + S(idiosyncratic, T) + basis_adjustment
```

| Component | Driver |
|---|---|
| 主权基线 *S(sovereign, T)* | 期限 T 上的日本主权 CDS 利差；短期限接近零，在 5Y / 10Y 略为正 |
| 行业溢价 *S(sector, T)* | 行业层面的信用因子（金融 vs 工业 vs 电信等） |
| 特异性成分 *S(idiosyncratic, T)* | 公司特定的杠杆、现金流稳定性、治理、并购特征 |
| 基差调整 | 由做市商资产负债表、回购特殊券、监管成本驱动的 CDS-债券基差——见 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |

该分解是概念性的，而非代数式的。市场实践是直接通过市场报价拟合企业 CDS 曲线，而不是从各成分自下而上构建。

### Risk-neutral default probability

CDS 利差隐含一个风险中性违约强度（hazard rate）（或违约强度的期限结构）：

```
Risk-neutral default probability (per period) ≈ S / (1 - R)
```

其中 S 是运行利差，R 是假定回收率。对于假定 R = 40 percent 的投资级日本企业：

| 5Y CDS spread (bps) | Implied 5Y risk-neutral default probability |
|---|---|
| 25 bps | ~2.0 percent |
| 50 bps | ~4.1 percent |
| 100 bps | ~8.0 percent |
| 200 bps | ~15.5 percent |
| 500 bps | ~34 percent |
| 1000 bps | ~57 percent |

风险中性违约概率不是实际违约概率；它内含风险溢价和流动性溢价。在正常条件下，投资级日本企业的历史违约率远低于这些风险中性隐含水平。

### Recovery rate assumption

| Reference obligation type | Standard assumed recovery |
|---|---|
| 高级无担保企业债（多数日本投资级） | 40 percent |
| 次级企业债 | 25 percent |
| 银行高级优先（senior preferred） | 40 percent |
| 银行高级非优先 / Tier 2 | 25-40 percent，视司法辖区而定 |
| 主权（发达市场） | 40 percent（日本） |

40 percent 的假定是惯例性的，而非市场隐含的。信用事件后的拍卖确定实际回收率（见下文描述）。

## 2014 版 ISDA 定义下的信用事件

2014 版 ISDA 信用衍生品定义规定了触发 CDS 结算的信用事件。对于日本企业 CDS，三类信用事件是标准的：

### Bankruptcy

| Trigger | Description |
|---|---|
| 申请民事再生（民事再生） | 面向企业的日本法庭内重整程序 |
| 申请会社更生（会社更生） | 面向较大型企业的日本法庭内重整 |
| 特别清算（特別清算） | 法院监督下的清算 |
| 外国破产程序 | 若参考实体存在外国司法辖区的破产事件 |
| 一般解散 / 清算 | 自愿或非自愿解散 |

破产是最清晰的触发。ISDA 裁定委员会（DC）决定已申报事件是否符合条件，并公开宣布信用事件裁定。

### Failure to pay

| Trigger | Description |
|---|---|
| 付款违约 | 在宽限期后，未对任何超过门槛（通常为等值 USD 1 million）的债务进行预定付款 |
| 宽限期 | 标准宽限期通常为 3 个营业日，除非适用合同约定的宽限期 |
| 补救期（cure period） | 触发前的可选补救期 |

对于日本企业，宽限期后错过的预定债券或贷款付款符合条件，须经 DC 裁定。

### Restructuring（及其变体）

| Variant | Coverage |
|---|---|
| 完全重组（R） | 原始 1999 版定义；对债务重组事件的覆盖较广 |
| 修订重组（Mod-R） | 美国惯例；可交割债务期限自信用事件起上限为 30 个月 |
| 修订-修订重组（Mod-Mod-R） | 欧洲 / 日本惯例；可交割债务期限上限为 60 个月 |
| 无重组（No-R） | 美国 2009后；取消重组作为信用事件 |

| Restructuring trigger | Detail |
|---|---|
| 票息削减 | 约定票息的削减 |
| 本金削减 | 本金金额的削减 |
| 期限延长 | 付款日的延长 |
| 次级化 | 付款优先顺序的变更 |
| 货币变更 | 变更为不被允许的货币 |

日本企业 CDS 按惯例以 **Mod-Mod-R**（修订-修订重组）交易，与欧洲市场惯例一致。Mod-Mod-R 对可交割债务期限的上限，降低了广义重组所产生的「最便宜可交割（cheapest-to-deliver）」期权性。

### Governmental intervention（银行）

对于日本金融机构 CDS，2014 版定义增加了一个**政府干预**信用事件，覆盖纾困内部化（bail-in）和处置（resolution）行动：

| Event | Trigger |
|---|---|
| 纾困内部化（Bail-in） | 对债务工具的法定减记或转换 |
| 处置当局行动 | 由主管当局转移债务或施加折扣（haircut） |
| 强制资产出售 | 构成等同于信用事件的强制处分 |

这与 [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（经由 SMFG）、[[megabanks/mizuho-bank|Mizuho]]（经由 Mizuho FG）以及其他日本金融机构 CDS 相关，其中根据《存款保险法》及更广泛处置框架进行的银行处置，对保护覆盖具有重要意义。

## ISDA 裁定委员会（DC）流程

| Stage | Activity |
|---|---|
| 事件申报 | 市场参与者向 ISDA DC 提交问询 |
| DC 审查 | DC 在公布的时限内对照已公布标准审查事件 |
| 公开宣布 | DC 就信用事件是 / 否作出有约束力的裁定 |
| 拍卖或结算决定 | DC 决定是否召集拍卖 |
| 拍卖管理 | 若召集拍卖，经由 Creditex / Markit 主持的流程进行 |
| 最终价格 | 公布拍卖确定的最终价格 |

DC 是一个常设委员会，按地区（美洲、EMEA、亚洲除日本外、日本、澳大利亚 / 新西兰）由主要做市商和买方机构组成。对于日本参考实体，相关 DC 包括在日本活跃的主要做市商。

DC 裁定在 ISDA 信用衍生品裁定委员会网站公开发布，并对标准 ISDA 文档化的 CDS 合约具有约束力。

## Recovery rate auction mechanics

信用事件后，ISDA 主持的拍卖确定用于现金结算 CDS 的回收率：

| Stage | Activity |
|---|---|
| 拍卖公告 | ISDA / Creditex 公布拍卖日期和可交割债务清单 |
| 初始竞价（Stage 1） | 参与竞价方提交双向报价；计算初始市场中点 |
| 公布未平仓权益 | 公布净未平仓权益的方向（买或卖） |
| 限价订单簿（Stage 2） | 竞价方提交限价订单以填补未平仓权益 |
| 最终价格 | 设定拍卖清算价格；这就是用于现金结算的「回收率」 |

现金结算：保护卖方向保护买方支付（名义本金）×（1 - 最终价格）。例如，若最终拍卖价格为 35, ，回收率为 35 percent，则保护卖方支付名义本金的 65 percent。

实物结算（遗留方式，在多数现行合约下为可选）涉及交付合格债务以换取按面值付款。多数现代 CDS 合约默认采用经由拍卖的现金结算。

## Japan-specific auction history

触发 ISDA 拍卖的日本企业信用事件并不频繁。历史事件包括：

| Period | Reference entity type | Auction outcome (illustrative pattern) |
|---|---|---|
| 2010 | Japan Airlines | 破产申请触发信用事件；拍卖确定回收率 |
| 2010 | Takefuji | 消费金融破产；拍卖回收率反映无担保债权人前景 |
| 2012-2015 | 各类小盘股重组 | CDS 覆盖有限；DC 活动较少 |
| 2017 | Toshiba（无正式信用事件） | 市场通过 CDS 利差对接近信用事件的风险定价；未触发拍卖 |
| 2020-2024 | 新冠及后新冠时期 | 无重大日本投资级信用事件；少数小盘股困境案例无显著 CDS 敞口 |

日本投资级信用事件的稀少，反映了较低的基础违约率、强有力的银行-债权人支持，以及庭外重组（out-of-court workout）惯例的结合。

## Basis to JGB benchmark

CDS 利差通常与企业债在匹配期限上相对于 **JGB 基准曲线**的债券利差进行比较：

| Measure | Calculation |
|---|---|
| 相对 JGB 的 Z-spread | 加到 JGB 曲线上的恒定利差，使贴现现金流与债券价格相匹配 |
| 资产互换利差 | 相对互换曲线的利差；对日本而言，通常相对 TONA 互换曲线 |
| CDS-债券基差 | CDS 利差 - 对应债券利差 |
| 负基差 | CDS 利差 < 债券利差；多现券-空 CDS 交易具吸引力 |
| 正基差 | CDS 利差 > 债券利差；空现券-多 CDS 交易具吸引力 |

[[derivatives/basis-trade-bond-cds-japan|Bond-CDS basis trade]] 详细展开了基差交易的经济学，包括融资成本、回购可得性和资产负债表约束。

对于日本投资级企业，基差通常较窄，但在压力时期（新冠 Q1 、2022-2023 的 BOJ YCC 调整 2020, ）当做市商资产负债表容量收缩或特定 JGB 回购动态改变相对价值定价时，基差可能走阔。

## Sector spread patterns

| Sector | Spread character |
|---|---|
| 巨型银行金融（MUFG、SMBC、Mizuho） | 正常条件下 5Y 利差温和；全球银行压力期间间歇性走阔（2023  SVB / Credit Suisse、2024  地区银行压力） |
| 大型寿险 / 财险公司 | 5Y 利差温和；对 BOJ 利率路径和 ESR 特征敏感 |
| 综合商社（sogo shosha） | 5Y 利差温和；在周期性时期对大宗商品周期敏感 |
| 汽车 / 工业蓝筹 | 稳定条件下 5Y 利差较低；在电动车转型压力下间歇性走阔 |
| 电信 / 公用事业 | 区间较宽；TEPCO 在 2011  后多年维持高位 |
| 房地产 | 对利率周期和 J-REIT 融资条件敏感 |
| SoftBank Group | 持续是最宽的日本投资级或跨界（crossover）名称；Vision Fund 按市值计价驱动间歇性利差飙升 |

SoftBank Group CDS 是交易量最大的日本非金融单名 CDS，且遥遥领先，反映其杠杆特征、并购历史和股票波动率联动。

### Life insurer and pension fund

| Use case | Detail |
|---|---|
| 信用利差对冲 | 针对信用利差冲击的组合层面 CDS 指数对冲 |
| 行业对冲 | 行业分层 CDS 叠加（日本流动性有限） |
| 单名负面观点对冲 | 对所关注持仓选择性买入单名 CDS 保护 |
| 合成信用敞口 | 卖出 CDS 保护以在不购买债券的情况下获得信用敞口 |

在实践中，日本寿险公司和养老基金对 CDS 的使用较为谨慎，原因如下：

- ESR 会计处理使对冲有效性认定复杂化；
- JGAAP / IFRS 9  对冲会计要求；
- 内部风险管理治理约束；
- Tier 1  以下名称的日本单名 CDS 流动性约束。

更广泛的对冲工具箱背景见 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]。

### Bank dealer and treasury

| Use case | Detail |
|---|---|
| 做市 | 做市商账簿上的库存对冲 |
| 交易对手信用风险对冲 | 对做市商交易对手的 CDS（CVA 对冲） |
| 自身名称对冲 | 有限；自身信用对冲存在会计问题 |
| 主权基差交易 | 对冲 JGB 跨货币基差敞口 |

CVA（信用估值调整）对冲是做市商 CDS 需求的监管和会计驱动因素，尤其针对金融交易对手名称。

### Hedge fund

| Use case | Detail |
|---|---|
| 直接信用观点 | 按方向性观点买 / 卖单名 CDS |
| 相对价值 | 跨 CDS 曲线或跨名称做多 / 做空 |
| 资本结构套利 | CDS vs 股票、CDS vs 可转债、CDS vs 优先股 |
| 基差交易 | 多现券-空 CDS 以博取负基差，或反之——见 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |
| 指数套利 | iTraxx Japan vs 成分单名 CDS |

鉴于活跃的可转债市场，资本结构套利在日本是反复出现的策略——见 [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]。

### Structured product issuer

| Use case | Detail |
|---|---|
| 信用挂钩票据（CLN）对冲 | 发行人通过买入参考名称的 CDS 保护进行对冲 |
| 合成 CDO | 池层面 CDS 头寸打包成分层（tranches） |
| 面向零售 / 机构的定制信用产品 | 嵌入票据形式的单名或一篮子 CDS 敞口 |

CLN 发行和对冲是单名 CDS 买入保护需求的反复出现的驱动因素，导致个别名称偶尔出现供需失衡。这与 [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] 市场交叉。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- ISDA: 2014 Credit Derivatives Definitions public materials.
- ISDA Credit Derivatives Determinations Committees: published determinations and process documentation.
- Creditex / Markit (auction administrators): auction results and methodology.
- FSA: derivatives regulation, post-crisis CDS reforms, follow-up council materials.
- BOJ: yen funding and credit statistics.
- MOF: JGB benchmark curve and issuance materials.
- JSCC: CDS clearing service materials.
- JSDA: member-firm regulatory materials.

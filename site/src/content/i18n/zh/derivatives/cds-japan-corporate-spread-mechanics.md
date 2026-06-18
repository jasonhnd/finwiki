---
source: derivatives/cds-japan-corporate-spread-mechanics
source_hash: fcca7c1d98f0bfbc
lang: zh
status: machine
fidelity: ok
title: "日本公司 CDS 利差机制"
translated_at: 2026-06-18T23:33:48.344Z
---

# 日本公司 CDS 利差机制

## TL;DR

日本公司 CDS 利差是保护买方为换取针对某参照日本上市公司的违约或有支付，而向保护卖方支付的运行型基点保费。该利差可分解为信用风险溢价（预期违约概率与假定回收率的函数）加上结构性溢价（相对于标的债券的基差、交易商持有成本、监管资本成本）。日本公司 CDS 以**主权对公司利差**定价，以日本主权 CDS 作为隐含的无信用风险锚点，个别公司利差叠加于其上。在 2014 ISDA 信用衍生品定义下，信用事件触发条件涵盖**破产、不付款及重组**（由 Mod-R / Mod-Mod-R 变体决定可交付债务）。回收率在信用事件后由 **ISDA 主办的拍卖**确定。鉴于 ESR ／会计约束，寿险公司与养老金基金极少使用 CDS，但经由指数 CDS 进行信用利差对冲是 [[insurance/japan-life-insurance-alm-overview|life ALM]] 讨论中反复出现的话题。

## Wiki 路径

本条目归属于 [[derivatives/INDEX|derivatives index]]，是对 [[derivatives/japan-cds-market-overview|Japan CDS market overview]] 加以补充的利差机制页面。套利结构请配合 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] 阅读，标的日元利率曲线请配合 [[derivatives/japan-irs-market|Japan IRS market]]，JPY 融资叠加请配合 [[derivatives/yen-basis-swap-market|yen basis swap market]]，主导日本机构融资的 USD 叠加请配合 [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] 阅读。

发行人侧信用背景请交叉参考 [[finance/INDEX|finance index]] 与 [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]，股票-信用联动请参考 [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]，大型银行交易商／交易对手角色请参考 [[banking/INDEX|banking index]]，保险公司信用对冲用例请参考 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]，交易商至基金的管道请参考 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]]。

### 构成模块

跨越期限 T 的日本单一名称公司 CDS 利差 *S(corp)* 可在概念上分解为：

```
S(corp, T) ≈ S(sovereign, T) + S(sector, T) + S(idiosyncratic, T) + basis_adjustment
```

| Component | Driver |
|---|---|
| 主权基线 *S(sovereign, T)* | 期限 T 处的日本主权 CDS 利差; 短期限近乎为零，在 5Y ／ 10Y 处略为正 |
| 行业溢价 *S(sector, T)* | 行业层面的信用因子（金融 对 工业 对 电信，等等） |
| 特异性成分 *S(idiosyncratic, T)* | 公司特定的杠杆、现金流稳定性、治理、并购情况 |
| 基差调整 | 由交易商资产负债表、回购特殊性、监管成本驱动的 CDS-债券基差 — 参见 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |

此分解为概念性而非代数性。市场惯例是经由市场报价直接拟合公司 CDS 曲线，而非由各构成模块自下而上构建。

### 风险中性违约概率

CDS 利差隐含一个风险中性风险率（或风险率期限结构）：

```
风险中性违约概率（每期） ≈ S / (1 - R)
```

其中 S 为运行利差，R 为假定回收率。对于假定 R = 40 % 的投资级日本公司：

| 5Y CDS spread (bps) | Implied 5Y risk-neutral default probability |
|---|---|
| 25 bps | ~2.0 percent |
| 50 bps | ~4.1 percent |
| 100 bps | ~8.0 percent |
| 200 bps | ~15.5 percent |
| 500 bps | ~34 percent |
| 1000 bps | ~57 percent |

风险中性违约概率并非实际违约概率; 它内嵌了风险溢价与流动性溢价。在正常情况下，投资级日本公司的历史违约率远低于这些风险中性隐含水平。

### 回收率假定

| Reference obligation type | Standard assumed recovery |
|---|---|
| 高级无担保公司债（大多数日本 IG） | 40 percent |
| 次级公司债 | 25 percent |
| 银行高级优先 | 40 percent |
| 银行高级非优先 / Tier 2 | 视法域而定 25-40 percent |
| 主权（发达市场） | 40 percent（日本） |

40 % 的假定属惯例性而非市场隐含。信用事件后的拍卖决定实际回收率（如下所述）。

## 2014 ISDA 定义下的信用事件

2014 ISDA 信用衍生品定义规定了触发 CDS 结算的信用事件。对于日本公司 CDS，三项信用事件为标准：

### 破产

| Trigger | Description |
|---|---|
| 申请民事再生（民事再生） | 日本面向公司的庭内再生程序 |
| 申请公司更生（会社更生） | 日本面向较大型公司的庭内重整程序 |
| 特别清算（特別清算） | 法院监督下的清算 |
| 外国破产程序 | 若参照实体存在外国法域的破产事件 |
| 一般解散 / 清算 | 自愿或强制解散 |

破产是最清晰的触发条件。ISDA 决定委员会（DC）判定所申报的事件是否符合资格，并公开宣布信用事件决定。

### 不付款

| Trigger | Description |
|---|---|
| 付款违约 | 在宽限期后，对超过阈值（通常为 USD 1 百万等值）的任何债务未能进行预定付款 |
| 宽限期 | 除非适用合同宽限期，标准宽限期通常为 3 个营业日 |
| 补救期 | 触发前的可选补救期 |

对于日本公司，在宽限期后漏付的预定债券或贷款付款符合资格，以 DC 判定为条件。

### 重组（及变体）

| Variant | Coverage |
|---|---|
| 完全重组 (R) | 原始的 1999 定义; 对债务重组事件的广泛涵盖 |
| 修订重组 (Mod-R) | 美国惯例; 可交付债务期限自信用事件起上限 30 个月 |
| 修订-修订重组 (Mod-Mod-R) | 欧洲／日本惯例; 可交付债务期限上限 60 个月 |
| 无重组 (No-R) | 美国 2009后; 将重组排除为信用事件 |

| Restructuring trigger | Detail |
|---|---|
| 票息削减 | 约定票息的削减 |
| 本金削减 | 本金额的削减 |
| 期限延长 | 付款日的延长 |
| 次级化 | 付款优先顺序的变更 |
| 货币变更 | 变更为不被许可的货币 |

日本公司 CDS 惯例上以 **Mod-Mod-R**（修订-修订重组）交易，与欧洲市场惯例一致。Mod-Mod-R 对可交付债务期限的上限，降低了广泛重组所产生的「最便宜可交付」选择权。

### 政府干预（银行）

对于日本金融机构 CDS，2014 定义新增了涵盖纾困（bail-in）与处置措施的**政府干预**信用事件：

| Event | Trigger |
|---|---|
| 纾困 | 对债务工具的法定减记或转换 |
| 处置当局措施 | 主管当局对债务的转移或减值施加 |
| 强制资产出售 | 构成信用事件等价的被迫处置 |

这对 [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（经由 SMFG）、[[megabanks/mizuho-bank|Mizuho]]（经由瑞穗 FG）及其他日本金融机构 CDS 具有相关性，在这些情形下，存款保险法及更广泛处置框架下的银行处置，对保护涵盖范围至关重要。

## ISDA 决定委员会（DC）流程

| Stage | Activity |
|---|---|
| 事件报告 | 市场参与者向 ISDA DC 提交问询 |
| DC 审查 | DC 在公布的时间表内对照公布标准审查事件 |
| 公开宣布 | DC 就信用事件是否成立发布具约束力的决定 |
| 拍卖或结算决定 | DC 决定是否召集拍卖 |
| 拍卖管理 | 若召集拍卖，经由 Creditex / Markit 主办的流程进行 |
| 最终价格 | 公布拍卖确定的最终价格 |

DC 是一个常设委员会，按地区（美洲、EMEA、亚洲（日本除外）、日本、澳大利亚／新西兰）由主要交易商与买方公司组成。对于日本参照实体，相关 DC 包含在日本活跃的主要交易商。

DC 的决定在 ISDA 信用衍生品决定委员会网站上公开发布，并对标准 ISDA 文档化的 CDS 合同具有约束力。

## 回收率拍卖机制

信用事件后，ISDA 主办的拍卖设定用于现金结算 CDS 的回收率：

| Stage | Activity |
|---|---|
| 拍卖公告 | ISDA / Creditex 公布拍卖日及可交付债务清单 |
| 初次竞价（阶段 1） | 参与竞价者提交双向市场报价; 计算初次市场中点 |
| 公布未平仓权益 | 公布净未平仓权益的方向（买或卖） |
| 限价订单簿（阶段 2） | 竞价者提交限价订单以填补未平仓权益 |
| 最终价格 | 设定拍卖清算价; 此即用于现金结算的「回收率」 |

现金结算：保护卖方向保护买方支付（名义本金）×（1 - 最终价格）。例如，若最终拍卖价为 35, ，则回收率为 35 %，保护卖方支付名义本金的 65 %。

实物结算（属遗留方式，且在大多数现行合同下为可选）涉及交付合格债务以换取按面值付款。大多数现代 CDS 合同默认采用经由拍卖的现金结算。

## 日本特有的拍卖历史

触发 ISDA 拍卖的日本公司信用事件并不常见。历史性事例包括：

| Period | Reference entity type | Auction outcome (illustrative pattern) |
|---|---|---|
| 2010 | 日本航空 | 破产申请触发信用事件; 拍卖设定回收率 |
| 2010 | 武富士 | 消费金融破产; 拍卖回收率反映无担保债权人前景 |
| 2012-2015 | 各类小盘股重组 | 有限的 CDS 涵盖; 小规模 DC 活动 |
| 2017 | 东芝（无正式信用事件） | 市场经由 CDS 利差定价近信用事件风险; 未触发拍卖 |
| 2020-2024 | COVID 及 post-COVID 期 | 无重大日本 IG 信用事件; 少数不含显著 CDS 敞口的小盘股困境案例 |

日本 IG 信用事件的稀少，反映了低标的违约率、强力的银行债权人支持以及庭外重整惯例三者的结合。

## 相对于 JGB 基准的基差

CDS 利差通常在匹配期限上，与该公司相对于 **JGB 基准曲线**的债券利差进行比较：

| Measure | Calculation |
|---|---|
| 相对于 JGB 的 Z 利差 | 加至 JGB 曲线、使贴现现金流与债券价格匹配的恒定利差 |
| 资产互换利差 | 相对于互换曲线的利差; 对日本而言通常相对于 TONA 互换曲线 |
| CDS-债券基差 | CDS 利差 - 对应债券利差 |
| 负基差 | CDS 利差 < 债券利差; 多现券-空 CDS 交易具吸引力 |
| 正基差 | CDS 利差 > 债券利差; 空现券-多 CDS 交易具吸引力 |

[[derivatives/basis-trade-bond-cds-japan|Bond-CDS basis trade]] 详细展开了基差交易的经济性，包括融资成本、回购可得性及资产负债表约束。

对于日本 IG 公司，基差通常较窄，但在压力事件期间（COVID 的 Q1 2020, 、2022-2023的 BOJ YCC 调整）——当交易商资产负债表容量收缩、或特定 JGB 回购动态改变相对价值定价时——可能扩大。

## 行业利差模式

| Sector | Spread character |
|---|---|
| 大型银行金融（MUFG、SMBC、瑞穗） | 正常情况下温和的 5Y 利差; 全球银行压力时（2023 的 SVB ／ Credit Suisse、2024 的地区银行压力）阶段性扩大 |
| 大型寿险／财险 | 温和的 5Y 利差; 对 BOJ 利率路径与 ESR 状况的敏感性 |
| 商社（综合商社） | 温和的 5Y 利差; 周期阶段中的商品周期敏感性 |
| 汽车／工业蓝筹 | 稳定情况下较低的 5Y 利差; EV 转型压力时阶段性扩大 |
| 电信／公用 | 区间宽广; 2011 后 TEPCO 多年维持高位 |
| 不动产 | 对利率周期及 J-REIT 融资状况敏感 |
| 软银集团 | 持续为最宽的日本 IG-或跨界名称; 愿景基金的按市值计价驱动阶段性利差飙升 |

软银集团 CDS 是交易量最大的日本非金融单一名称 CDS，且优势显著，这反映了其杠杆状况、并购历史及股票波动率联动。

### 寿险公司与养老金基金

| Use case | Detail |
|---|---|
| 信用利差对冲 | 针对信用利差冲击的组合层面 CDS 指数对冲 |
| 行业对冲 | 行业分层 CDS 叠加（日本流动性有限） |
| 单一名称负面观点对冲 | 对存忧持仓进行选择性单一名称 CDS 保护 |
| 合成信用敞口 | 出售 CDS 保护以在不购买债券的情况下获得信用敞口 |

实务中，日本寿险公司与养老金基金极少使用 CDS，原因如下：

- 使对冲有效性认定复杂化的 ESR 会计处理;
- JGAAP / IFRS 9 的对冲会计要求;
- 内部风险管理治理约束;
- Tier 1 名称以下的日本单一名称 CDS 流动性约束。

更广泛的对冲工具箱背景，参见 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]。

### 银行交易商与资金部

| Use case | Detail |
|---|---|
| 做市 | 交易商账簿上的库存对冲 |
| 交易对手信用风险对冲 | 针对交易商交易对手的 CDS（CVA 对冲） |
| 自有名称对冲 | 有限; 自身信用对冲的会计问题 |
| 主权基差交易 | 对冲 JGB 跨货币基差敞口 |

CVA（信用估值调整）对冲是交易商 CDS 需求的监管与会计驱动因素，尤其针对金融交易对手名称。

### 对冲基金

| Use case | Detail |
|---|---|
| 直接信用观点 | 基于方向性观点买／卖单一名称 CDS |
| 相对价值 | 跨 CDS 曲线或跨名称的多／空 |
| 资本结构套利 | CDS 对股票、CDS 对 CB、CDS 对优先股 |
| 基差交易 | 针对负基差的多现券-空 CDS，或反之 — 参见 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] |
| 指数套利 | iTraxx Japan 对成分单一名称 CDS |

鉴于活跃的可转债市场，资本结构套利是日本反复使用的策略 — 参见 [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]。

### 结构化产品发行人

| Use case | Detail |
|---|---|
| 信用联结票据（CLN）对冲 | 发行人通过购买针对参照名称的 CDS 保护进行对冲 |
| 合成 CDO | 将池层面 CDS 头寸打包成分层 |
| 面向零售／机构的定制信用产品 | 嵌入票据形式的单一名称或一篮子 CDS 敞口 |

CLN 发行与对冲是单一名称 CDS 保护买入需求反复出现的驱动因素，对个别名称上偶发的供需失衡有所贡献。这与 [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] 市场相交。

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

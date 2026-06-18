---
source: derivatives/japan-cds-market-overview
source_hash: 13454e3cba9010d1
lang: zh
status: machine
fidelity: ok
title: "日本 CDS 市场概观"
translated_at: 2026-06-18T23:33:48.311Z
---

# 日本 CDS 市场概观

## TL;DR

日本信用违约掉期 (CDS) 市场是全球信用衍生品世界中一个虽小却具结构重要性的角落。占主导地位的指数参照是 **iTraxx Japan**，这是 IHS Markit / S&P Global 的基准，涵盖每六个月滚动一次的 50 个投资级日本企业名。单名 CDS 活动集中于具有离岸投资者或对冲基金关注的日本蓝筹信用 — megabank、大型保险、商社、汽车、电子与电信。交易商阵营由 [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]]、JPMorgan 东京、[[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]]、[[securities-firms/nomura-hd|Nomura]]、BNP Paribas 以及一小群欧美交易商主导。清算分为: 日元计价指数 CDS 由 **JSCC** 清算，离岸清算敞口由 **ICE Clear Credit** (历史上还有 LCH) 清算。CDS-JGB / CDS-公司债基差在结构上较窄，但在日本央行政策变动、交易商资产负债表收缩与全球信用压力前后会出现阶段性波动。

## Wiki route

本词条作为日本信用衍生品子领域的路由界面，位于 [[derivatives/INDEX|derivatives index]] 之下。请与 [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] (单名定价层)、[[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] (套利层)、[[derivatives/japan-irs-market|Japan IRS market]] (更广泛的利率掉期语境)、[[derivatives/yen-basis-swap-market|yen basis swap market]] (融资曲线的相互作用)，以及 [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] (主导日本机构资产负债表的美元融资叠加) 一并阅读。

在发行体一侧，公司信用锚点页面为 [[finance/INDEX|finance index]]、[[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] 与 [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]。在用户一侧，[[banking/INDEX|banking index]] 与 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] 勾勒了megabank / 保险公司对信用对冲工具的需求。[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] 勾勒了支撑单名 CDS 流动性的交易商对对冲基金的管道。

### 产品分类

| 产品 | 说明 | 典型用户 |
|---|---|---|
| iTraxx Japan 指数 CDS | 可交易的 50名投资级日本篮子，5Y 基准，半年滚动 | 宏观基金、交易商、ETF / 组合对冲者 |
| 日本蓝筹单名 CDS | 针对个别日本上市公司的双边 CDS | 信用基金、结构化产品发行体、交易商 |
| iTraxx Japan 分层 | 针对指数的合成 CDO 式分层 (2008之后流动性较低) | 专业信用基金、交易商 |
| 日本主权 CDS | 针对日本政府风险的 CDS; 相对 G7 同侪活动有限 | 主权风险基金、宏观对冲者 |
| 量子 CDS (针对日元信用的美元计价) | 以美元计价、参照债务为日元计价的 CDS | 对冲 FX 敞口的离岸投资者 |
| 贷款 CDS (LCDS) | 以银团贷款为参照的 CDS; 日本活动极为有限 | 专业贷款信用基金 |

迄今为止占主导地位的成交量远在 **iTraxx Japan 指数 CDS** (5Y 在跑系列)，以及对最受全球关注的名字的单名活动的薄尾。

### iTraxx Japan 构成

iTraxx Japan 由 IHS Markit / S&P Global 从流动性最高的 50 日本注册投资级公司债 CDS 参照中构建。构成在指数滚动 (3 月 / 9 月) 时每六个月审查一次，成分股等权重。

| 板块集群 | 代表性名字 |
|---|---|
| megabank / 金融集团 | [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]] (经由 SMFG)、[[megabanks/mizuho-bank|Mizuho]] (经由 Mizuho FG) |
| 保险 | Tokio Marine、Sompo、MS&AD |
| 商社 (综合商社) | Mitsubishi Corp、Mitsui & Co、Itochu、Sumitomo Corp、Marubeni |
| 汽车 | Toyota、Honda、Nissan |
| 电子 / 工业 | Sony、Panasonic、Hitachi、Mitsubishi Electric |
| 电信 / 公用事业 | NTT、KDDI、[[megabanks/mufg|SoftBank Group]] (纳入时)、TEPCO、Tokyo Gas |
| 房地产 | Mitsubishi Estate、Mitsui Fudosan、Sumitomo Realty |
| 消费 / 零售 | Seven & I、Aeon (纳入时)、Fast Retailing |

每次滚动会基于流动性与评级标准发生少量成分股轮换。前一系列对遗留对冲仍可交易，但流动性迅速迁移至新的在跑系列。

### 单名 CDS 覆盖

日本的单名 CDS 流动性集中于少数受国际关注的信用:

| 层级 | 例子 | 流动性特征 |
|---|---|---|
| 层级 1 (最流动) | MUFG、SMFG / SMBC、Mizuho、Nomura、SoftBank Group、Toyota Motor | 由 5+ 交易商报价、双向流量、窄买卖价差 |
| 层级 2 (中等) | Sony、Hitachi、Mitsubishi Corp、Mitsui & Co、Itochu、NTT、KDDI | 由 3-5 交易商报价、阶段性流量 |
| 层级 3 (稀薄) | 中型工业、二线金融、公用事业 | 按需报价、宽买卖价差、取决于交易商资产负债表 |

[[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]] (经由 SMFG) 与 [[megabanks/mizuho-bank|Mizuho]] (经由 Mizuho FG) 是最受全球交易的日本金融 CDS。[[securities-firms/nomura-hd|Nomura]] 是交易最活跃的日本经纪交易商 CDS。**SoftBank Group** 因其杠杆特征、并购波动性与愿景基金的盯市敏感性，一贯是交易最活跃的日本非金融 CDS。

### 交易商阵营

| 交易商 | 角色 |
|---|---|
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 在指数及层级-1 单名上的顶级做市商 |
| JPMorgan 东京 | 顶级做市商，尤其在保险与金融信用上 |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | 顶级做市商，尤其在科技与消费信用上 |
| [[securities-firms/nomura-hd|Nomura]] | 领先的国内交易商，大型指数账簿，单名存在 |
| BNP Paribas 东京 | 日本信用上的主要欧洲做市商 |
| Citi Japan | 主要的美国做市商，尤其在金融上 |
| Barclays / Deutsche Bank 东京 | 中层存在，因板块而异 |
| MUFG / MUMSS、SMBC Nikko、Mizuho Securities | 作为价格接受者 / 组合对冲者而非顶级做市商活跃的国内银行 |

[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]] 与 Mizuho Securities 历史上曾参与单名 CDS，但在 2008 之后的监管与资本变化后，退出了活跃的交易商做市角色。国内megabank集团仍是用于组合对冲目的 (自身信用对冲、主权基差对冲) 的大型交易对手，而非交易商做市商。

### 名义未平仓金额

国际清算银行 (BIS) 按参照实体地区公布全球 CDS 名义未平仓金额的半年统计。日本参照实体 CDS 占据较小份额 — 通常为全球单名 CDS 名义金额的 2-4 个百分点，指数 CDS 名义金额也为相近份额 — 远低于美元与欧元市场。

在日本国内，指数 CDS 按名义金额占主导 (由宏观对冲与 ETF 复制流量驱动)，而单名 CDS 按客户多样性占主导 (由结构化产品发行与特异性信用对冲驱动)。

### 清算基础设施

日本 CDS 清算一分为二:

| 场所 | 覆盖 | 货币 | 会员基础 |
|---|---|---|---|
| **JSCC CDS 清算** | iTraxx Japan 指数系列、合格的日本单名 CDS | 日元计价交易 | 日本交易商、外资银行东京分行 |
| **ICE Clear Credit** | 全球 iTraxx 指数套件 (含 iTraxx Japan)、广泛的单名集合 | 多货币 | 含最活跃日本 CDS 做市商的全球交易商阵营 |
| **LCH CDSClear** | 重组后存在感减弱; 历史上清算欧洲指数 | 多货币 | 欧洲交易商; 日本敞口较少 |

[[banking/INDEX|JSCC]] (Japan Securities Clearing Corporation，JPX 的一部分) 推出 CDS 清算，以将国内交易商活动在岸化并降低跨境集中风险。鉴于其规模、多产品保证金抵消与全球交易商会员资格，ICE Clear Credit 仍是跨境日本 CDS 流量的主导场所。

CFTC 的清算强制要求，以及日本 (FIEA)、欧盟 (EMIR)、英国 (UK EMIR) 的同等制度，将大多数交易商间交易推向中央清算。买方客户经由交易商客户 (客户清算安排) 进行清算，而非直接会员资格。

### CDS 利差报价

| 惯例 | 详情 |
|---|---|
| 报价基础 | 按名义金额的年化基点运行利差 |
| 支付频率 | 季度，ACT/360 日计数 |
| 标准到期 | 5Y 基准; 完整曲线通常为 1Y / 3Y / 5Y / 7Y / 10Y |
| 票息惯例 | 标准化的「小爆炸」票息 (多数名字为 25, 100, 500, 1000 bps)，附带前期支付以调和利差与票息 |
| 回收率 | 标准化假设 (高级无担保公司债通常为 40 个百分点，次级为 25 个百分点) |
| 文档 | ISDA 主协议加 CDS 确认书; 2014 ISDA 信用衍生品定义 |

5Y 在跑 CDS 利差是日本信用风险最受关注的单一数字。5Y CDS-债券基差 (在 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] 中描述) 是主要的套利信号。

### CDS 曲线形态

大多数投资级日本公司债 CDS 曲线呈上行斜率 (1Y < 3Y < 5Y < 10Y)，反映在更长视野上更高的累积违约概率。倒挂曲线信号市场对近期困境的预期，正如在困境金融与杠杆最高的非金融中阶段性出现的那样。

### 指数滚动机制

| 阶段 | 活动 |
|---|---|
| T-30 | IHS Markit 公布临时的新系列成分股 |
| T-15 | 确定最终成分股清单; 设定权重 |
| T-1 | 滚动前旧系列的最后交易日 |
| T (半年: 20 3 月、20 9 月) | 新系列进入在跑; 旧系列变为脱跑 |
| T+5 至 T+30 | 流动性迁移完成; 脱跑系列相对在跑走阔 |

滚动基差 (连续系列之间的利差差异) 反映成分股的信用质量变化与滚动时的供需。套利基金与交易商交易台在滚动前后建仓。

### 交易对手类型

| 交易对手 | 用例 |
|---|---|
| 宏观对冲基金 | 用于信用风险偏好 / 风险规避定位的直接指数 CDS |
| 信用对冲基金 | 用于相对价值、基差交易、资本结构套利的单名 CDS |
| 银行交易商交易台 | 做市、自营定位、对冲结构化产品 |
| 保险与养老金 | 组合叠加对冲、ESR 敏感性管理 — 见 [[insurance/japan-life-insurance-alm-overview|Japan life ALM]] |
| 企业财资 | 自身名称对冲不太常见; 针对 FX 关联敞口的主权 / 板块对冲 |
| 结构化产品发行体 | 对冲信用关联票据 (CLN) 与转移给零售 / 机构买方的合成敞口 |
| 主权财富基金 | 对日本主权与 IG 篮子的战术性宏观 / 信用定位 |

[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] 标记寿险公司原则上可使用 CDS 进行信用利差对冲，尽管 ESR 下的监管处理与 JGAAP 及 IFRS 9 下的会计规则制约了其广泛使用。

### 文档

| 文件 | 目的 |
|---|---|
| ISDA 主协议 | 衍生品的双边框架 |
| 附表与信用支持附件 (CSA) | 抵押条款、阈值、MTA、合格抵押品 |
| ISDA 信用衍生品定义 (2014) | 标准化的 CDS 合同条款、信用事件、结算 |
| 确认书 | 交易特定条款 (参照实体、名义金额、到期、票息、支付日) |
| DTCC Deriv/SERV | 交易匹配与报告基础设施 |

2014 ISDA 信用衍生品定义取代了 2003 定义，并标准化了政府干预与自救 (bail-in) 信用事件的处理，这在 2008 危机与欧洲银行处置案例之后尤为重要。

## 近期市场结构变化

| 时期 | 进展 |
|---|---|
| 2008-2010 | 雷曼后清理、「大爆炸」与「小爆炸」CDS 标准化、ISDA 决定委员会创设 |
| 2010-2015 | 向中央清算迁移 (JSCC 推出、ICE Clear Credit 主导)、Dodd-Frank / EMIR / JFSA 清算强制要求 |
| 2014 | 包含政府干预信用事件的新 ISDA 信用衍生品定义 |
| 2015-2020 | 包括日本在内的许多市场单名 CDS 流动性收缩; 指数 CDS 具韧性 |
| 2020-Q1 | COVID 信用利差爆发; 投资级日本全境的 CDS 基差错位 |
| 2022-2023 | 日本央行收益率曲线控制调整阶段性引发金融的 CDS 利差变动 |
| 2024-2025 | 单名薄成交量持续; 在全球银行压力事件期间对日本金融 CDS 的选择性关注 |

## Related

- [[derivatives/INDEX]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
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

- ISDA: Master Agreement, CDS Definitions, Determinations Committee public materials.
- FSA: post-2008 derivatives regulation, clearing mandate guidance, follow-up council materials.
- JSCC: CDS clearing service overview and member list.
- ICE: Clear Credit product list and clearing membership.
- IHS Markit / S&P Global: iTraxx Japan index methodology and roll calendar.
- BIS: semi-annual OTC derivatives statistics including CDS by region.
- BOJ: market statistics relevant to Japan credit funding and basis.
- JSDA: member-firm regulatory and market structure materials.

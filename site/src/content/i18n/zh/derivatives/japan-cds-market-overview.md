---
source: derivatives/japan-cds-market-overview
source_hash: a8c738c681427923
lang: zh
status: machine
fidelity: ok
title: "日本 CDS 市场概览"
translated_at: 2026-05-31T03:19:56.404Z
---

# 日本 CDS 市场概览

## TL;DR

日本信用违约互换（CDS）市场是全球信用衍生品宇宙中规模虽小但结构上重要的一隅。占主导地位的指数参照是 **iTraxx Japan**，即 IHS Markit / S&P Global 的基准，涵盖 50 个投资级日本企业名称，每六个月滚动一次。单名 CDS 活动集中于受离岸投资者或对冲基金关注的日本蓝筹信用——巨型银行、大型保险公司、商社、汽车、电子和电信。交易商群体由 [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]]、摩根大通东京（JPMorgan Tokyo）、[[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]]、[[securities-firms/nomura-hd|Nomura]]、法国巴黎银行（BNP Paribas）以及一小批欧美交易商主导。清算分为日元计价指数 CDS 由 **JSCC** 清算，离岸清算敞口则由 **ICE Clear Credit**（以及历史上的 LCH）清算。CDS-JGB / CDS-公司债基差结构上较窄，但在 BOJ 政策举措、交易商资产负债表收缩及全球信用压力前后会阶段性波动。

## Wiki route

本条目归于 [[derivatives/INDEX|derivatives index]] 之下，作为日本信用衍生品子领域的路由界面。请与 [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]（单名定价层）、[[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]]（套利层）、[[derivatives/japan-irs-market|Japan IRS market]]（更广泛的利率互换背景）、[[derivatives/yen-basis-swap-market|yen basis swap market]]（融资曲线相互作用）以及 [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]]（主导日本机构资产负债表的美元融资叠加）一并阅读。

在发行人侧，公司信用锚点页面为 [[finance/INDEX|finance index]]、[[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] 和 [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]。在使用者侧，[[banking/INDEX|banking index]] 和 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] 框定了巨型银行/保险公司对信用对冲工具的需求。[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] 框定了支撑单名 CDS 流动性的交易商对对冲基金的管道。

### 产品分类

| 产品 | 描述 | 典型用户 |
|---|---|---|
| iTraxx Japan 指数 CDS | 可交易的 50名投资级日本篮子，5年期基准，半年滚动 | 宏观基金、交易商、ETF/组合对冲者 |
| 日本蓝筹单名 CDS | 针对单个日本上市企业的双边 CDS | 信用基金、结构化产品发行人、交易商 |
| iTraxx Japan 分券 | 指数上的合成 CDO 式分券（2008后流动性较低） | 专业信用基金、交易商 |
| 日本主权 CDS | 针对日本政府风险的 CDS；相对 G7 同侪活动适中 | 主权风险基金、宏观对冲者 |
| Quanto CDS（美元计价、参照日元信用） | 以美元计价、参照债务为日元计价的 CDS | 对冲外汇敞口的离岸投资者 |
| 贷款 CDS（LCDS） | 参照银团贷款的 CDS；日本活动极为有限 | 专业贷款信用基金 |

迄今为止主导成交量的远远是 **iTraxx Japan 指数 CDS**（5年期当期系列），以及在最受全球关注的名称上的一小撮单名活动尾部。

### iTraxx Japan 构成

iTraxx Japan 由 IHS Markit / S&P Global 从流动性最高的 50 个日本注册投资级企业 CDS 参照构建。构成每六个月在指数滚动（3 月/9 月）时审查，成分等权重。

| 行业集群 | 代表名称 |
|---|---|
| 巨型银行/金融集团 | [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（经由 SMFG）、[[megabanks/mizuho-bank|Mizuho]]（经由 Mizuho FG） |
| 保险 | 东京海上（Tokio Marine）、Sompo、MS&AD |
| 商社（综合商社） | 三菱商事、三井物产、伊藤忠、住友商事、丸红 |
| 汽车 | 丰田、本田、日产 |
| 电子/工业 | 索尼、松下、日立、三菱电机 |
| 电信/公用事业 | NTT、KDDI、[[megabanks/mufg|SoftBank Group]]（纳入时）、东京电力（TEPCO）、东京瓦斯 |
| 房地产 | 三菱地所、三井不动产、住友不动产 |
| 消费/零售 | Seven & I、永旺（Aeon，纳入时）、迅销（Fast Retailing） |

每次滚动时会基于流动性和评级标准发生少量成分轮换。前一系列对于存量对冲仍可交易，但流动性会迅速迁移至新的当期系列。

### 单名 CDS 覆盖

日本的单名 CDS 流动性集中于少数几个受国际关注的信用：

| 层级 | 示例 | 流动性特征 |
|---|---|---|
| 第 1 层（流动性最高） | MUFG、SMFG/SMBC、Mizuho、野村、软银集团（SoftBank Group）、丰田汽车 | 由 5+ 家交易商报价，双向流动，买卖价差窄 |
| 第 2 层（适中） | 索尼、日立、三菱商事、三井物产、伊藤忠、NTT、KDDI | 由 3-5 家交易商报价，阶段性流动 |
| 第 3 层（稀薄） | 中型工业、二线金融、公用事业 | 应需报价，买卖价差宽，由交易商资产负债表驱动 |

[[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（经由 SMFG）和 [[megabanks/mizuho-bank|Mizuho]]（经由 Mizuho FG）是全球交易最多的日本金融 CDS。[[securities-firms/nomura-hd|Nomura]] 是交易最活跃的日本券商 CDS。**软银集团（SoftBank Group）** 因其杠杆状况、并购波动性及愿景基金（Vision Fund）按市值计价敏感性，始终是交易最活跃的日本非金融 CDS。

### 交易商群体

| 交易商 | 角色 |
|---|---|
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 指数及第 1 层单名上的顶级做市商 |
| 摩根大通东京（JPMorgan Tokyo） | 顶级做市商，尤其在保险和金融信用上 |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | 顶级做市商，尤其在科技和消费信用上 |
| [[securities-firms/nomura-hd|Nomura]] | 领先的国内交易商，指数账簿庞大，有单名业务存在 |
| 法国巴黎银行东京（BNP Paribas Tokyo） | 日本信用上的主要欧洲做市商 |
| 花旗日本（Citi Japan） | 主要美国做市商，尤其在金融上 |
| 巴克莱/德意志银行东京（Barclays / Deutsche Bank Tokyo） | 中层业务存在，因行业而异 |
| MUFG/MUMSS、SMBC 日兴、瑞穗证券 | 国内银行活跃于价格接受者/组合对冲者角色，而非顶级做市商 |

[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]] 和瑞穗证券历史上曾参与单名 CDS，但在 2008 后的监管和资本变化之后退出了活跃的交易商做市角色。国内巨型银行集团仍是大型对手方，用于组合对冲目的（自身信用对冲、主权基差对冲），而非交易商做市商。

### 名义未平仓余额

国际清算银行（BIS）发布按参照实体地区划分的全球 CDS 名义未平仓余额半年统计。日本参照实体 CDS 占比较小——通常占全球单名 CDS 名义的 2-4 个百分点，指数 CDS 名义占比也类似——远低于美元和欧元市场。

在日本国内，指数 CDS 按名义占主导（由宏观对冲和 ETF 复制流驱动），而单名 CDS 按客户多样性占主导（由结构化产品发行和特异性信用对冲驱动）。

### 清算基础设施

日本 CDS 清算呈两分结构：

| 场所 | 覆盖 | 货币 | 会员基础 |
|---|---|---|---|
| **JSCC CDS 清算** | iTraxx Japan 指数系列、合资格的日本单名 CDS | 日元计价交易 | 日本交易商、外资银行东京分行 |
| **ICE Clear Credit** | 全球 iTraxx 指数套件（含 iTraxx Japan）、广泛的单名集合 | 多币种 | 全球交易商群体，包括最活跃的日本 CDS 做市商 |
| **LCH CDSClear** | 重组后业务存在减少；历史上清算欧洲指数 | 多币种 | 欧洲交易商；日本敞口较少 |

[[banking/INDEX|JSCC]]（Japan Securities Clearing Corporation，JPX 旗下）推出 CDS 清算，以将国内交易商活动引入境内并降低跨境集中风险。鉴于其规模、多产品保证金抵消及全球交易商会员资格，ICE Clear Credit 仍是跨境日本 CDS 流动的主导场所。

CFTC 清算强制要求以及日本（FIEA）、欧盟（EMIR）、英国（UK EMIR）的同等制度，将大多数交易商间交易引入中央清算。买方客户通过交易商客户清算（客户清算安排），而非直接会员资格。

### CDS 利差报价

| 惯例 | 细节 |
|---|---|
| 报价基础 | 名义上每年以基点计的连续利差 |
| 支付频率 | 季度，ACT/360 天计息 |
| 标准期限 | 5年期基准；完整曲线通常为 1年/3年/5年/7年/10年 |
| 票息惯例 | 标准化"小爆炸"（small bang）票息（多数名称为 25, 100, 500, 1000 基点），配合期初付款以调和利差与票息 |
| 回收率 | 标准化假设（高级无担保企业通常为 40 %，次级为 25 %） |
| 文档 | ISDA 主协议加 CDS 确认书；2014 ISDA 信用衍生品定义 |

5年期当期 CDS 利差是日本信用风险最受关注的单一数字。5年期 CDS-债券基差（在 [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] 中描述）是主要套利信号。

### CDS 曲线形态

大多数投资级日本企业 CDS 曲线向上倾斜（1年 < 3年 < 5年 < 10年），反映在更长期限内更高的累计违约概率。倒挂曲线预示市场对近期困境的预期，这在陷入困境的金融机构和杠杆最高的非金融机构中阶段性出现过。

### 指数滚动机制

| 阶段 | 活动 |
|---|---|
| T-30 | IHS Markit 发布临时新系列成分 |
| T-15 | 确认最终成分名单；设定权重 |
| T-1 | 旧系列滚动前最后交易日 |
| T（半年：20 月 3 月、20 月 9 月） | 新系列成为当期；旧系列成为非当期 |
| T+5 至 T+30 | 流动性迁移完成；非当期系列相对当期走阔 |

滚动基差（连续系列之间的利差差异）反映成分信用质量的变化以及滚动时的供需。套利基金和交易商交易台围绕滚动布局。

### 对手方类型

| 对手方 | 使用场景 |
|---|---|
| 宏观对冲基金 | 用于信用风险偏好/风险规避布局的直接指数 CDS |
| 信用对冲基金 | 用于相对价值、基差交易、资本结构套利的单名 CDS |
| 银行交易商交易台 | 做市、自营布局、对冲结构化产品 |
| 保险与养老金 | 组合叠加对冲、ESR 敏感性管理——见 [[insurance/japan-life-insurance-alm-overview|Japan life ALM]] |
| 企业财资 | 自身名称对冲较少见；用于外汇关联敞口的主权/行业对冲 |
| 结构化产品发行人 | 对冲信用挂钩票据（CLN）及转移给零售/机构买家的合成敞口 |
| 主权财富基金 | 针对日本主权及 IG 篮子的战术性宏观/信用布局 |

[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] 指出，寿险公司原则上可使用 CDS 进行信用利差对冲，尽管 ESR 下的监管处理以及 JGAAP 和 IFRS 9 下的会计规则限制了其广泛使用。

### 文档

| 文档 | 用途 |
|---|---|
| ISDA 主协议 | 衍生品的双边框架 |
| 附表与信用支持附件（CSA） | 抵押品条款、门槛、MTA、合资格抵押品 |
| ISDA 信用衍生品定义（2014） | 标准化 CDS 合约条款、信用事件、结算 |
| 确认书 | 交易特定条款（参照实体、名义、期限、票息、支付日期） |
| DTCC Deriv/SERV | 交易匹配与报告基础设施 |

2014 ISDA 信用衍生品定义取代了 2003 定义，并标准化了政府干预与自救（bail-in）信用事件处理，这在 2008 危机及欧洲银行处置案例之后尤为重要。

## 近期市场结构变迁

| 时期 | 进展 |
|---|---|
| 2008-2010 | 后雷曼清理、"大爆炸"（Big Bang）与"小爆炸"（Small Bang）CDS 标准化、ISDA 裁定委员会成立 |
| 2010-2015 | 向中央清算迁移（JSCC 启动、ICE Clear Credit 主导）、Dodd-Frank / EMIR / JFSA 清算强制要求 |
| 2014 | 新 ISDA 信用衍生品定义，含政府干预信用事件 |
| 2015-2020 | 包括日本在内的许多市场单名 CDS 流动性收缩；指数 CDS 具韧性 |
| 2020-Q1 | 新冠信用利差暴涨；投资级日本各处 CDS 基差错位 |
| 2022-2023 | BOJ 收益率曲线控制调整触发金融机构 CDS 利差阶段性变动 |
| 2024-2025 | 单名成交量持续稀薄；全球银行压力事件期间对日本金融 CDS 选择性关注 |

## 相关

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

## 来源

- ISDA：主协议、CDS 定义、裁定委员会公开材料。
- FSA：2008 后衍生品监管、清算强制要求指引、后续审议会材料。
- JSCC：CDS 清算服务概览及会员名单。
- ICE：Clear Credit 产品清单及清算会员资格。
- IHS Markit / S&P Global：iTraxx Japan 指数方法论及滚动日历。
- BIS：含按地区划分 CDS 的半年场外衍生品统计。
- BOJ：与日本信用融资及基差相关的市场统计。
- JSDA：会员公司监管及市场结构材料。

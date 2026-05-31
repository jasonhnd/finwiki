---
source: derivatives/swap-execution-facility-japan
source_hash: 53185cae1e01d293
lang: zh
status: machine
fidelity: ok
title: "互换执行设施——日本对等物（ETP 制度）"
translated_at: 2026-05-31T03:19:56.406Z
---

# 互换执行设施——日本对等物（ETP 制度）

## TL;DR

日本没有美式"互换执行设施（SEF）"牌照——但它运行着一套**功能等同的制度**，即用于场外衍生品执行的**电子交易平台（ETP）**，由 FSA 依据 FIEA 监督。ETP 制度针对指定的标准化场外产品（尤其是日元 IRS）强制实施，是 **Dodd-Frank SEF 要求（美国）** 和 **MiFID II MTF/OTF 要求（欧盟）** 的日本对应物。

日本场外衍生品执行市场结合了：

1. **电子 ETP 执行**——由 **Tradeweb（Tradeweb Japan / Tradeweb FSA 注册 ETP）**、**Bloomberg（针对日本受监管的 Bloomberg 电子交易服务）** 及其他电子平台提供的多交易商询价（RFQ）和订单簿系统，它们占据了标准化日元 IRS、OIS 及基差互换流量中日益增长的份额；

2. **语音经纪执行**——交易商间语音经纪（"批发经纪"层级——**ICAP/NEX、BGC Brokers、Tullett Prebon，全部归于 TP ICAP 家族或独立的传统经纪**），为交易商对交易商的场外交易做中介，尤其是非标准期限、大额大宗交易及流动性较低的产品变体；

3. **双边交易商对客户交易**——通过语音、聊天或专有单一交易商平台进行的直接交易商-客户场外交易；是许多企业终端用户交易及定制结构的主导渠道。

本条目涵盖 FIEA ETP 监管边界、在东京运营的领先平台和经纪、电子执行份额对语音经纪份额、与美国 SEF 及欧盟 MiFID II OTF/MTF 制度的比较、FSA 交易商监管框架，以及日本电子场外执行相对可比产品的美国 SEF 市场仍**更不集中且更倚重语音经纪**的结构性原因。

## Wiki route

本条目归于场外基础设施集群中的 [[derivatives/INDEX|derivatives index]] 之下。请与 [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]]（交易后清算环节）、[[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]（底层日元 IRS 市场）、[[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]（特许经营经济性）、[[securities/japan-securities-clearing-corp|JSCC]]（已清算执行的清算环节）、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]（更广泛的管道背景）以及 [[securities/japan-best-execution-sor-pts|Japan best execution / SOR / PTS]]（现货股票执行比较）一并阅读。

## ETP 制度为何重要

2008 年 G20 匹兹堡框架在中央清算和交易报告库报告之外，纳入了一项**"平台交易"支柱**。其逻辑：

- **交易前透明度**——标准化场外产品应在多交易商竞争的平台上报价，为终端用户收窄买卖价差；
- **最佳执行可比性**——买方对手方应能比较来自多个交易商的报价；
- **降低双边不透明性**——将执行从语音/聊天转移至带审计轨迹的电子平台，支持市场诚信监督；
- **流动性集中**——ETP 上的多交易商 RFQ 聚合了双边执行所分散的流动性。

实施方式各异：

- **美国（Dodd-Frank 第 VII 章）**——SEF，配合"可供交易（MAT）"判定流程，触发指定产品的交易执行要求；
- **欧盟（MiFID II）**——指定衍生品交易义务下的 MTF（多边交易设施）和 OTF（有组织交易设施）；
- **日本（FIEA）**——FSA 注册/监督下的电子交易平台（ETP），指定产品须遵守平台内执行义务。

日本制度在范围上**比美国 SEF 规则更不带规定性**——须强制电子执行的产品较少，语音经纪与电子执行之间的边界更具流动性。这是一种刻意的校准，反映了较小的国内交易商数量以及语音经纪在东京场外市场中的历史角色。

### 注册与监督

在日本运营场外衍生品 ETP 的实体通常需要：

- 依据 FIEA **作为电子交易平台运营商在 FSA 注册**（具体类别取决于产品范围——涵盖日元 IRS、外币计价 IRS、适用时的 CDS 及其他标准化场外衍生品）；
- **遵守 FSA 规则**，涉及市场行为、交易前与交易后透明度、会员准入、系统韧性，以及与 [[derivatives/otc-clearing-jp-trade-repository|JFSA-designated trade repository]] 的交易报告整合；
- 对于须强制清算的产品，与 [[securities/japan-securities-clearing-corp|JSCC]] 的**清算整合安排**。

### 强制电子执行范围

依据 FIEA，**指定的标准化场外衍生品**在范围内对手方之间交易时须遵守平台内执行义务。须遵守此项的主要产品类别是具备标准化条款（货币、浮动利率指数、支付频率、计息方式、期限）的**日元 IRS**——与美国 SEF 对美元 IRS 的 MAT 判定相对应。

范围外（即仍允许语音经纪或双边执行）：

- 非标准期限；
- 非标准利率参照指数；
- 定制结构（可赎回、摊销、结构化收益）；
- 与范围外对手方的交易（较小企业、低于门槛的终端用户）；
- 超过指定门槛的大额大宗交易（适用大宗交易豁免规则）。

### 交易前与交易后透明度

ETP 通常发布：

- 平台会员可见的 RFQ 或订单簿界面中的**交易前指示性报价**；
- 馈入 ISDA SwapsInfo、BIS 汇总及 BOJ 统计出版物的**交易后成交摘要**（匿名化，有时延迟）；
- RFQ 提交、交易商响应及交易执行的**审计轨迹**。

这**可与欧盟 MiFID II RFQ 透明度**及美国 **SEF RFQ 规则**相比，尽管范围和时间细节有所不同。

### 电子平台

| 平台 | 覆盖 |
|---|---|
| **Tradeweb（Tradeweb Japan）** | 多交易商 RFQ 平台——在日元 IRS、OIS、JGB 现货、JGB 回购及部分外汇衍生品上实力强劲。FSA 注册的 ETP 运营商。全球最大固定收益电子交易平台之一；东京业务是机构流量的一线 1 ETP。 |
| **Bloomberg（具备日本注册的 Bloomberg 电子交易服务）** | 跨利率、外汇、信用及部分股票衍生品的多交易商 RFQ。Bloomberg 的 BSEF（Bloomberg SEF）是美国注册的 SEF；面向日本的服务针对范围内产品集合在 FSA 注册下运营。 |
| **MarketAxess（部分固定收益信用衍生品 RFQ）** | 在信用产品电子执行上实力强劲；日本业务聚焦于信用衍生品和债券相关流量。 |
| **JPX 关联平台** | JPX 拥有与 [[JapanFG/japan-exchange-group|JPX group]] 相关的电子场外衍生品交易举措。范围各异；请查看当前产品供应。 |

### 交易商间语音经纪

日本交易商间语音经纪市场以 **TP ICAP 家族**（由 Tullett Prebon 与 ICAP 的非 EBS/非 BrokerTec 资产历史性合并而成）和 **BGC Brokers**（现 Cantor/BGC 家族）为核心：

| 经纪 | 覆盖 |
|---|---|
| **ICAP（TP ICAP 品牌）** | 东京语音经纪利率、外汇、信用及新兴产品场外衍生品的历史核心。现为 TP ICAP 一部分。覆盖范围涵盖日元 IRS、OIS、基差互换、JGB 现货、JGB 回购及外汇互换/期权。 |
| **Tullett Prebon（TP ICAP 品牌）** | TP ICAP 内的姊妹语音经纪品牌。东京覆盖场外利率、信用及结构化产品。 |
| **BGC Brokers** | Cantor/BGC 全球交易商间经纪；东京业务涉及利率、信用及部分新兴产品。 |
| **Tradition（Compagnie Financière Tradition）** | 独立的全球语音经纪；东京业务涉及利率、外汇、能源/大宗商品相邻领域。 |
| **国内短资/货币市场交易商间经纪** | [[money-market/tanshi-company-business-model|tanshi]] 层级及其他国内短端中介在相邻的货币市场和短期利率领域运营——与全球语音经纪不同的特许经营，但在前端日元利率领域有重叠。 |

### 单一交易商平台

每家主要交易商银行都运营**单一交易商平台**用于面向客户的场外执行：

- [[JapanFG/nomura-hd|Nomura]]（NomuraNow）；
- [[JapanFG/daiwa-sg|Daiwa SG]]（Daiwa Direct / 机构渠道）；
- [[JapanFG/smbc-nikko|SMBC Nikko]]；
- [[JapanFG/mizuho-securities|Mizuho Securities]]；
- [[JapanFG/goldman-sachs-japan|GS Japan]]（Marquee）；
- [[JapanFG/morgan-stanley-japan|MS Japan]]（Matrix）；
- [[JapanFG/jpmorgan-japan|JPM Japan]]（MorganMarkets）；
- [[JapanFG/citigroup-japan|Citi Japan]]（Velocity）。

单一交易商平台不是多边场所，因此**本身不受 ETP 规则约束**，但它们与多交易商 ETP 整合以进行 RFQ 式执行，并将交易报告馈入 TR。

## 电子执行份额对语音经纪份额

关于电子/语音分布的公开来源观察：

| 产品类别 | 大致电子份额 |
|---|---|
| **标准化日元 IRS（基准期限、当期）** | 大多数通过 ETP（Tradeweb/Bloomberg）电子执行；较大宗交易有残余语音经纪份额。 |
| **参照 TONA 的 OIS（标准化）** | 大多数电子，尤其在 LIBOR 过渡后推动了对 TONA 曲线基础设施的平台投资。 |
| **跨币种基差互换（日元-美元）** | 混合——电子份额增长，但较大/非当期交易历史上为语音经纪。 |
| **定制/结构化 IRS（可赎回、摊销、内嵌互换期权）** | 主要为语音或双边。 |
| **单名 CDS（非清算范围）** | 主要为语音或双边。 |
| **iTraxx Japan 指数 CDS** | 混合——标准系列电子；非当期为语音。 |
| **外汇期权（机构）** | 混合——普通期权常为电子；奇异/结构化为语音。 |
| **股票场外衍生品（方差互换、单股互换）** | 主要为双边/交易商直接；电子平台渗透低于利率。 |

结构性模式：**产品越标准化，电子份额越高**。定制和复杂结构仍为语音兼双边。这与美国 SEF 及欧盟 MTF/OTF 经验相对应，在那里电子执行首先占据标准化 IRS，并逐步扩展至相邻产品类别。

## 与美国 SEF 及欧盟 MiFID II OTF/MTF 的比较

| 维度 | 美国（Dodd-Frank SEF） | 欧盟（MiFID II MTF/OTF） | 日本（FIEA ETP） |
|---|---|---|---|
| **强制场所类型** | SEF（或 DCM） | MTF 或 OTF | FSA 注册下的 ETP |
| **强制产品范围** | 针对指定互换（美元 IRS、欧元 IRS、CDS 指数）的"可供交易"（MAT）判定 | RTS 22 下针对指定衍生品的交易义务 | 指定的标准化场外产品（尤其是日元 IRS） |
| **RFQ 最低要求** | 范围内产品的 RFQ-3 （向至少 3 家交易商请求） | MiFID II RTS 下的 RFQ 规则 | FSA/FIEA ETP 规则下的 RFQ 规则 |
| **交易前透明度** | SEF 发布的实时可交易报价 | MiFID II 下的交易前透明度（大规模有豁免） | ETP 上的交易前透明度（大宗交易有豁免） |
| **交易后透明度** | 向 SDR（互换数据存储库）实时报告 | APA（核准发布安排）报告 | 交易报告库报告（DTCC Japan），按 FSA 配合发布安排 |
| **大宗交易豁免** | 超过指定门槛的大宗交易规则 | MiFID II 下的大规模豁免 | FSA/FIEA 规则下的大宗交易豁免 |
| **跨境对等** | 对外国场所的替代合规/可比性（在判定情况下） | 对第三国场所的对等（在判定情况下） | EMIR/第 VII 章对等（在获授予情况下） |
| **语音经纪角色** | SEF 规则后范围内产品减少 | MiFID II 后范围内减少 | 实质性残余角色，尤其针对非标准/大宗 |
| **交易商数量** | 多家 SEF 运营；实施后有一定整合 | 每个产品类别场所较少 | 服务日本的 ETP 集合集中；语音经纪层仍属实质性 |

结构性要点：**日本的 ETP 制度在功能上与美国 SEF/欧盟 MTF-OTF 框架一致，但对哪些交易必须电子执行的规则规定性较低**，在对手方层面留有更多裁量权。这是**日本按交易笔数计的电子执行份额对可比产品低于美国**、且语音经纪尾部更大的原因之一。

## FSA 交易商监管

在日本场外衍生品市场运营的交易商银行依据 FIEA 受监管，类别为：

- **第一种 FIBO（金融商品交易业者）**——涵盖包括场外衍生品中介在内的券商活动；
- **银行牌照**（针对银行实体部分——见 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]）——针对同时运营银行与证券实体的巨型银行关联交易商；
- **JSDA 会员资格**——用于自主规制行为监督；
- **JSCC 会员资格**——用于合资格清算产品。

FSA 交易商监管涵盖：

- 场外衍生品敞口的**资本充足性**（银行实体对应巴塞尔框架，证券实体对应 FIEA 资本规则）；
- **风险管理**——内部模型、限额、治理；
- **客户保护**——适当性规则、披露要求、营业行为规则，包括针对零售终端用户场外衍生品销售；
- **市场行为监督**——对市场滥用、操纵及利益冲突的监察。

客户保护层在交易商银行向**企业终端用户客户**（为 [[finance/japan-corporate-fx-and-rate-hedge-policy|FX and rate exposure]] 提供财资对冲）及**零售/小企业客户**（内嵌衍生品的结构化产品）销售场外衍生品时尤为相关——历史上向不够老练的终端用户错误销售复杂场外结构的事件，推动了 FSA 行为规则逐步收紧。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[money-market/tanshi-company-business-model]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/morgan-stanley-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 来源

- FSA，关于 FIEA 框架、ETP 注册及场外衍生品监督的英文页面。
- FSA，金融商品交易业者注册名册（fibo.pdf）。
- BOJ，支付/市场——场外衍生品执行统计。
- Tradeweb，受监管平台概览（日本 ETP 范围参照）。
- Bloomberg，电子交易服务概览。
- TP ICAP（ICAP/Tullett Prebon 的母公司）、BGC Brokers 及 Tradition 集团企业页面，用于语音经纪特许经营范围。
- JPX/OSE/TSE，上市衍生品执行规则（用于比较边界）。
- ISDA，SwapsInfo 及交易执行分析出版物。

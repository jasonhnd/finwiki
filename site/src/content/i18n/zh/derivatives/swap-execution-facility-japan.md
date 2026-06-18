---
source: derivatives/swap-execution-facility-japan
source_hash: fb88c5223ed8a1f4
lang: zh
status: machine
fidelity: ok
title: "掉期执行设施 — 日本对应物（ETP 制度）"
translated_at: 2026-06-18T23:33:48.365Z
---

# 掉期执行设施 — 日本对应物（ETP 制度）

## TL;DR

日本没有美国式的"掉期执行设施（SEF）"牌照——但它为场外衍生品执行运营着一套**功能上等价的电子交易平台（ETP）制度**，由 FSA 依据 FIEA 监督。ETP 制度针对指定的标准化场外产品（尤其是日元 IRS）作出强制要求，是美国**多德-弗兰克 SEF 要求**和欧盟 **MiFID II MTF／OTF 要求**的日本类比。

日本场外衍生品执行市场结合了：

1. **电子 ETP 执行**——由 **Tradeweb（Tradeweb Japan／Tradeweb 经 FSA 注册的 ETP）**、**Bloomberg（Bloomberg 在日本受监管的电子交易服务）**及其他电子平台提供的多交易商询价（RFQ）和订单簿系统，它们正捕获不断增长的标准化日元 IRS、OIS 和基差掉期资金流份额；

2. **语音经纪执行**——交易商间语音经纪商（"批发经纪商"层级——**ICAP／NEX、BGC Brokers、Tullett Prebon，均隶属 TP ICAP 家族或为独立的传统经纪商**），它们为交易商对交易商的场外交易充当中介，尤其针对非标准期限、大额大宗交易和流动性较差的产品变体；

3. **双边交易商对客户交易**——通过语音、聊天或专有单一交易商平台进行的直接交易商-客户场外交易；是许多企业终端用户交易和定制结构的主导渠道。

本条目涵盖 FIEA ETP 监管边界、在东京运营的主要平台和经纪商、电子执行份额对语音经纪份额、与美国 SEF 和欧盟 MiFID II OTF／MTF 制度的比较、FSA 交易商监管框架，以及日本电子场外执行就可比产品而言仍**较不集中且更偏重语音经纪**（相较于美国 SEF 市场）的结构性原因。

## Wiki 路径

本条目位于 [[derivatives/INDEX|derivatives index]] 之下，处于场外基础设施集群中。请将其与 [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]]（交易后清算环节）、[[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]（基础日元 IRS 市场）、[[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]（特许经营经济学）、[[securities/japan-securities-clearing-corp|JSCC]]（已清算执行的清算环节）、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]（更广泛的管道语境）以及 [[securities/japan-best-execution-sor-pts|Japan best execution / SOR / PTS]]（现金股票执行比较）一并阅读。

## 为何 ETP 制度重要

2008 年 G20 匹兹堡框架在中央清算和交易报告库报告之外，纳入了一个**"平台交易"支柱**。其逻辑为：

- **交易前透明度**——标准化场外产品应在多家交易商竞争的平台上报价，为终端用户收窄买卖价差；
- **最佳执行可比性**——买方交易对手应能够比较来自多家交易商的报价；
- **降低双边不透明性**——将执行从语音／聊天转移到带有审计轨迹的电子平台，支持市场诚信监督；
- **流动性集中**——ETP 上的多交易商 RFQ 汇集了双边执行所分割的流动性。

实施方式各异：

- **美国（多德-弗兰克第七章）**——SEF，带有"可供交易（MAT）"认定流程，对指定产品触发交易执行要求；
- **欧盟（MiFID II）**——交易义务下针对指定衍生品的 MTF（多边交易设施）和 OTF（有组织交易设施）；
- **日本（FIEA）**——经 FSA 注册／监督的电子交易平台（ETP），指定产品须遵守平台上执行义务。

日本制度在范围上**比美国 SEF 规则更不具规定性**——受强制电子执行约束的产品更少，且语音经纪与电子执行之间的边界更为流动。这是一种刻意的校准，反映了较小的国内交易商数量以及语音经纪在东京场外市场中的历史角色。

### 注册与监督

在日本为场外衍生品运营一个 ETP 的实体通常需要：

- 依据 FIEA **作为电子交易平台运营者向 FSA 注册**（具体类别取决于产品范围——涵盖日元 IRS、外币计价 IRS、适用时的 CDS，以及其他标准化场外衍生品）；
- **遵守 FSA 规则**，涉及市场行为、交易前与交易后透明度、成员引入、系统韧性，以及与 [[derivatives/otc-clearing-jp-trade-repository|JFSA-designated trade repository]] 的交易报告整合；
- 就受强制清算约束的产品，与 [[securities/japan-securities-clearing-corp|JSCC]] 作出**清算整合安排**。

### 强制电子执行范围

依据 FIEA，**指定的标准化场外衍生品**在符合条件的交易对手之间交易时，须遵守平台上执行义务。受此约束的主要产品类别是具有标准化条款（货币、浮动利率指数、支付频率、计息天数、期限）的**日元 IRS**——与美国 SEF 对美元 IRS 的 MAT 认定相对应。

范围之外（即仍允许语音经纪或双边执行）：

- 非标准期限；
- 非标准利率参考指数；
- 定制结构（可赎回、摊销、结构化收益）；
- 与范围外交易对手（较小企业、阈值以下终端用户）的交易；
- 超过指定阈值的大额大宗交易（带有大宗交易豁免规则）。

### 交易前与交易后透明度

ETP 通常发布：

- 在 RFQ 或订单簿界面中、对平台成员可见的**交易前指示性报价**；
- 流入 ISDA SwapsInfo、BIS 汇总和日银统计出版物的**交易后成交摘要**（匿名化，有时延迟）；
- RFQ 提交、交易商响应和交易执行的**审计轨迹**。

这**与欧盟的 MiFID II RFQ 透明度**及美国的 **SEF RFQ 规则**相当，尽管范围和时间细节有所不同。

### 电子平台

| 平台 | 覆盖范围 |
|---|---|
| **Tradeweb（Tradeweb Japan）** | 多交易商 RFQ 平台——在日元 IRS、OIS、JGB 现金、JGB 回购及部分外汇衍生品方面实力强劲。经 FSA 注册的 ETP 运营者。全球最大固定收益电子交易平台之一；东京存在是面向机构资金流的第 1 级 ETP。 |
| **Bloomberg（Bloomberg 在日本注册的电子交易服务）** | 跨利率、外汇、信用及部分股票衍生品的多交易商 RFQ。Bloomberg 的 BSEF（Bloomberg SEF）是美国注册的 SEF；面向日本的服务就范围内产品集合在 FSA 注册下运营。 |
| **MarketAxess（部分固定收益信用衍生品 RFQ）** | 在信用产品电子执行方面实力强劲；日本存在聚焦于信用衍生品和债券相关资金流。 |
| **JPX 关联平台** | JPX 拥有与 [[financial-regulators/japan-exchange-group|JPX group]] 相关的电子场外衍生品交易举措。范围各异；请查阅当前产品供给。 |

### 交易商间语音经纪商

日本交易商间语音经纪市场以 **TP ICAP 家族**（由 Tullett Prebon 与 ICAP 非 EBS／非 BrokerTec 资产的历史合并而成）和 **BGC Brokers**（现属 Cantor／BGC 家族）为锚：

| 经纪商 | 覆盖范围 |
|---|---|
| **ICAP（TP ICAP 品牌）** | 东京语音经纪利率、外汇、信用及新兴产品场外衍生品的历史锚点。现属 TP ICAP。覆盖范围涵盖日元 IRS、OIS、基差掉期、JGB 现金、JGB 回购及外汇掉期／期权。 |
| **Tullett Prebon（TP ICAP 品牌）** | TP ICAP 内的姊妹语音经纪品牌。东京覆盖场外利率、信用及结构化产品。 |
| **BGC Brokers** | Cantor／BGC 全球交易商间经纪商；东京存在于利率、信用及部分新兴产品。 |
| **Tradition（Compagnie Financière Tradition）** | 独立全球语音经纪商；东京存在于利率、外汇、能源／大宗商品周边。 |
| **国内短资／货币市场交易商间经纪商** | [[money-market/tanshi-company-business-model|tanshi]] 层级及其他国内短端中介在相邻的货币市场和短期利率空间运营——与全球语音经纪商不同的特许经营，但在前端日元利率空间有所重叠。 |

### 单一交易商平台

每家主要交易商银行运营着面向客户的场外执行的**单一交易商平台**：

- [[securities-firms/nomura-hd|Nomura]]（NomuraNow）；
- [[securities-firms/daiwa-sg|Daiwa SG]]（Daiwa Direct／机构渠道）；
- [[securities-firms/smbc-nikko|SMBC Nikko]]；
- [[securities-firms/mizuho-securities|Mizuho Securities]]；
- [[securities-firms/goldman-sachs-japan|GS Japan]]（Marquee）；
- [[securities-firms/morgan-stanley-japan|MS Japan]]（Matrix）；
- [[foreign-financial-institutions/jpmorgan-japan|JPM Japan]]（MorganMarkets）；
- [[foreign-financial-institutions/citigroup-japan|Citi Japan]]（Velocity）。

单一交易商平台不是多边场所，因此**本身不受 ETP 规则约束**，但它们与多交易商 ETP 整合以进行 RFQ 式执行，并将交易报告馈入交易报告库。

## 电子执行份额对语音经纪份额

关于电子／语音分割的公开来源观察：

| 产品类别 | 大致电子份额 |
|---|---|
| **标准化日元 IRS（基准期限、活跃券）** | 多数通过 ETP（Tradeweb／Bloomberg）电子执行；较大宗交易有残余语音经纪份额。 |
| **参照 TONA 的 OIS（标准化）** | 多数电子执行，尤其在 LIBOR 转换后推动了平台对 TONA 曲线基础设施的投资。 |
| **交叉货币基差掉期（日元-美元）** | 混合——电子份额在增长，但历史上较大／非活跃券交易偏语音经纪。 |
| **定制／结构化 IRS（可赎回、摊销、嵌入掉期期权）** | 以语音或双边为主。 |
| **单名 CDS（清算范围之外）** | 以语音或双边为主。 |
| **iTraxx Japan 指数 CDS** | 混合——标准系列电子执行；非活跃券语音执行。 |
| **外汇期权（机构）** | 混合——普通期权常电子执行；奇异／结构化语音执行。 |
| **股票场外衍生品（方差掉期、单只股票掉期）** | 以双边／交易商直接为主；电子平台渗透率低于利率。 |

结构性模式：**产品越标准化，电子份额越高**。定制和复杂结构仍为语音与双边。这与美国 SEF 和欧盟 MTF／OTF 经验相镜像，电子执行首先捕获标准化 IRS，并逐步扩展至相邻产品类别。

## 与美国 SEF 和欧盟 MiFID II OTF／MTF 的比较

| 维度 | 美国（多德-弗兰克 SEF） | 欧盟（MiFID II MTF／OTF） | 日本（FIEA ETP） |
|---|---|---|---|
| **强制场所类型** | SEF（或 DCM） | MTF 或 OTF | FSA 注册下的 ETP |
| **强制产品范围** | 针对指定掉期（美元 IRS、欧元 IRS、CDS 指数）的"可供交易"（MAT）认定 | RTS 22 下针对指定衍生品的交易义务 | 指定的标准化场外产品（尤其是日元 IRS） |
| **RFQ 最低要求** | 范围内产品的 RFQ-3 （向至少 3 家交易商询价） | MiFID II RTS 下的 RFQ 规则 | FSA／FIEA ETP 规则下的 RFQ 规则 |
| **交易前透明度** | SEF 发布的实时可交易报价 | MiFID II 下的交易前透明度（对大额有豁免） | ETP 上的交易前透明度（带有大宗交易豁免） |
| **交易后透明度** | 向 SDR（掉期数据库）实时报告 | APA（核准发布安排）报告 | 交易报告库报告（DTCC Japan），并按 FSA 的发布安排 |
| **大宗交易豁免** | 超过指定阈值的大宗交易规则 | MiFID II 下的大额规模豁免 | FSA／FIEA 规则下的大宗交易豁免 |
| **跨境等效** | 对外国场所的替代合规／可比性（经认定时） | 对第三国场所的等效（经认定时） | EMIR／第七章等效（经授予时） |
| **语音经纪角色** | SEF 规则后对范围内产品有所减少 | MiFID II 后对范围内有所减少 | 实质性残余角色，尤其针对非标准／大宗 |
| **交易商数量** | 许多 SEF 运营；实施后有所整合 | 每个产品类别的场所较少 | 服务日本的 ETP 集合集中；语音经纪层级仍属实质性 |

结构性要点：**日本的 ETP 制度在功能上与美国 SEF／欧盟 MTF-OTF 框架对齐，但对哪些交易必须电子执行的规则规定性更弱**，在交易对手层面留有更多裁量。这是日本按交易笔数计的电子执行份额就可比产品而言低于美国的原因之一，并伴有更大的语音经纪尾部。

## FSA 交易商监管

在日本场外衍生品市场运营的交易商银行依据 FIEA 受监管，作为：

- **第一类金融商品交易业者（FIBO）**——涵盖包括场外衍生品中介在内的经纪交易商活动；
- **银行牌照**（针对银行实体部分——参见 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]）——针对同时运营银行和证券实体的巨型银行系交易商；
- **JSDA 会员资格**——用于自律行为监督；
- **JSCC 会员资格**——用于可清算产品。

FSA 交易商监管涵盖：

- 场外衍生品敞口的**资本充足率**（对银行实体镜像巴塞尔框架，对证券实体适用 FIEA 资本规则）；
- **风险管理**——内部模型、限额、治理；
- **客户保护**——适当性规则、披露要求、行为规范，包括针对零售终端用户场外衍生品销售的规则；
- **市场行为监督**——对市场滥用、操纵和利益冲突的监察。

客户保护层面在交易商银行向**企业终端用户客户**（为 [[finance/japan-corporate-fx-and-rate-hedge-policy|FX and rate exposure]] 的资金对冲）和**零售／小企业客户**（嵌有衍生品的结构化产品）销售场外衍生品时尤为相关——向不够老练的终端用户错误销售复杂场外结构的历史事件，推动了 FSA 行为规则逐步收紧。

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
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 来源

- FSA，关于 FIEA 框架、ETP 注册及场外衍生品监督的英文页面。
- FSA，金融商品交易业者登记册（fibo.pdf）。
- 日银，支付／市场——场外衍生品执行统计。
- Tradeweb，受监管平台概览（日本 ETP 范围参考）。
- Bloomberg，电子交易服务概览。
- TP ICAP（ICAP／Tullett Prebon 母公司）、BGC Brokers 及 Tradition 集团企业页面，了解语音经纪特许经营范围。
- JPX／OSE／TSE，上市衍生品执行规则（用于比较边界）。
- ISDA，SwapsInfo 及交易执行分析出版物。

---
source: securities/japan-market-maker-and-liquidity-provider-landscape
source_hash: ed3274178592258a
lang: zh
status: machine
fidelity: ok
title: "日本做市商和流动性提供商格局"
translated_at: 2026-06-01T03:31:12.290Z
---

# 日本做市商和流动性提供商格局

## 维基路线

此页面位于 [[securities/INDEX|securities index]] 内部，作为 [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]] 和 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 的流动性提供对等体。它是路由方叙述的供应方伴侣：SOR 路由订单，做市商报价另一方。使用[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]了解场所背景，[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]和[[securities/osaka-exchange|Osaka Exchange]]了解主要场所规则，[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]]用于支持高频交易库存的融资层，[[securities/financial-instruments-business-operators-japan-index|FIBO registry]]用于对运营日本办事处的全球自营贸易公司进行实体级检查。

## 长话短说

日本的股票和上市衍生品做市是一个混合市场：国内全方位服务机构（Nomura、Daiwa、SMBC Nikko、Mizuho、MUMSS）提供传统银行/经纪商做市和 ETF 授权参与者功能；除此之外，全球自营交易/高频交易层——Citadel Securities Japan、Optiver Japan、Virtu Financial Japan、Jane Street Japan、IMC Japan、Susquehanna (SIG) Japan 以及其他量化交易公司——在 JPX 的指定做市商 (DMM) 和 J-NET/arrowhead 匹配基础设施内运营。 JPX 在大阪交易所上市衍生品（指数期货/期权/JGB 期货/期权）和东京证券交易所 ETF 上运行正式的做市商计划；股票 DMM 对 TSE 现金股票的覆盖范围是有选择性的。证券金融、大宗经纪融资和 PTS 路径经济学 ([[securities/japannext-securities|Japannext]]) 塑造了竞争地位。 所有公司都是在 FIEA 注册的 I 类金融工具业务运营商，在东京设有办事处，并受到 FSA 和 JSDA 自律规则的监管。

## 为什么这个生态系统很重要

做市商和流动性提供者是零售 SOR 和机构执行算法所利用的订单簿的供应方。如果没有足够的做市商活动：

1。 **买卖价差扩大。**客户执行成本上升。
2。 **ETF 套利缺口打开。** 如果没有授权参与者创建/赎回套利，ETF 价格就会偏离资产净值。
3。 **期权市场流动性稀薄。** 希腊做市商的对冲是期权账面流动性的结构性来源。
4。 **衍生品参考质量下降。**期货和基础现金股票篮子之间的指数套利需要双方一致的做市商报价。
5。 **PTS 价格改善机会缩小。** SOR 路由仅在 PTS 场地存在竞争报价的情况下提供价格改善。

2010 后全球高频交易公司引入日本以及2013 后TSE箭头引擎升级共同压缩了价差，提高了显示深度，并使正式的指定做市商计划更具经济意义。

### 大阪交易所衍生品做市商制度

OSE 针对上市衍生品运营正式的做市商 (MM) 计划，涵盖的产品包括：

|产品 |做市商相关性|
|---|---|
|日经指数 225  期货/期权 |核心股票指数衍生品MM活动。 |
|东证期货/期权 |指数衍生品 MM。 |
|日经指数225 迷你/微型|适合零售的合同，涵盖 MM。 |
|日本国债期货/期权|利率衍生品 MM 与日本国债现金和回购协议具有跨资产联系（请参阅映射的 [[money-market/jgb-repo-market-japan|JGB repo]] 上下文）。 |
|个股期权 |更有选择性的MM报道。 |
|波动率/行业产品 | MM 在某些部分支持。 |

MM计划向承诺在指定买卖差价/最小规模/报价存在要求下进行双边连续报价的公司提供激励措施（费用回扣/降低参与成本/正式报价义务和利益）。在 OSE 做市商页面上验证当前方案参数。

### TSE ETF 做市商计划

TSE 为上市 ETF 运行正式的 ETF 做市商计划。结构性目标是保持显示的买卖价差较小，并支持 ETF 与标的篮子的套利。国内 AM 机构（主要 ETF 发行人 — Nomura AM、AM-One、MUFG AM、Nikko AM、Daiwa AM；参见 [[securities/japan-asset-manager-landscape-matrix|asset manager landscape]]）在此计划中与国内经纪商 MM 和全球公司合作。

### TSE 现金股票 DMM

东京证交所现金股票指定做市商的覆盖范围比衍生品/ETF 计划更具选择性。 TSE 默认的现金股权模型是通过箭头进行订单驱动的连续拍卖；正式的 DMM 承诺将其覆盖到选定名称的特定市场质量目标。

## 国内经纪商做市

国内各大券商均将股票/衍生品/ETF做市及授权参与活动作为其机构业务的一部分：

|房子|做市相关性|
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] |国内最大的MM在股票/衍生品/ETF领域的足迹；主要ETF AP。 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] |国内主要MM横跨股票/衍生品/ETF。 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] |国内MM在股票/衍生品领域的活动； SMFG 集团邻接汇率/外汇。 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] |国内MM活动；强大的利率/外汇一体化。 |
| MUMSS（三菱日联摩根士丹利）|国内MM与摩根士丹利全球接轨；重大的股票衍生品活动。 |

这些公司将MM与承销、大宗经纪、证券借贷和全方位服务的机构销售结合起来——这是与纯自营高频交易公司结构上不同的成本结构。

### Citadel 证券日本

- **全球母公司**：Citadel 证券（与 Citadel 对冲基金分开）。
- **日本足迹**：东京办事处作为 FSA 注册的 I 型 FIBO 运营；股票/衍生品做市及执行交易对手业务。
- **显着特征**：位居全球最大的股票做市商之列；重要的美国 Reg NMS 做市商市场份额；日本业务为日本股票/衍生品提供全球公司风险基础设施保障。
- **活动范围**：TSE / PTS 的股票做市；股票衍生品； ETF。

### 日本光学

- **全球母公司**：Optiver（总部位于阿姆斯特丹的全球做市商）。
- **日本足迹**：东京办事处； FSA 注册的 I 型 FIBO； OSE/TSE 衍生品/ETF/股票活动会员。
- **显着特点**：期权做市是 Optiver 的全球优势；日本期权/ETF/衍生品报价是一项核心活动。
- **活动范围**：上市期权、ETF MM、股票衍生品。

### Virtu 金融日本

- **全球母公司**：Virtu Financial（纽约证券交易所上市的全球做市商）。
- **日本足迹**：东京办事处； FSA 注册的 I 型 FIBO；包括日本在内的多个亚洲场所的股票/ETF 做市。
- **特色**：全球ETF AP及做市操作；跨场所套利能力。
- **活动范围**：股票/ETF MM；一些衍生品活动。

### 日本简街

- **全球母公司**：Jane Street（私营全球量化交易公司）。
- **日本足迹**：东京办事处； FSA 注册； ETF/股票/衍生品做市；强大的全球 ETF AP 专营权适用于日本上市 ETF 和交叉上市 ETF 套利。
- **显着特征**：位居全球最活跃的 ETF 做市商之列；量化交易文化；重大的固定收益和股权交叉资产活动。
- **活动范围**：ETF MM、权益衍生品、跨资产套利。

### 日本万邦公司

- **全球母公司**：IMC Trading（总部位于阿姆斯特丹的全球做市商）。
- **日本足迹**：东京办事处； FSA 注册；衍生品/ETF/股票做市。
- **显着特点**：长期涉足亚洲衍生品市场；期权做市能力。
- **活动范围**：上市期权、ETF MM、股票。

### 萨斯奎哈纳 (SIG) 日本

- **全球母公司**：Susquehanna International Group（SIG，总部位于费城的全球量化交易公司）。
- **日本足迹**：东京办事处； FSA 注册；衍生品/期权做市。
- **特色**：全球期权做市实力；结构化产品专业知识；量化交易文化。
- **活动范围**：上市期权、ETF MM、股票衍生品。

### 同级其他企业

其他在日本开展做市活动的全球/区域公司（此列表中的上限反映了公开可见的公司；验证当前活跃实体的 FSA FIBO 注册）：

- 日本塔尔研究资本
- DRW控股日本
- 哈德逊河贸易日本
- Flow Traders（亚洲业务涵盖日本上市的 ETF）
- XR Trading 及其他在日本上市活动的量化店铺
- 在 FIEA I 类范围内运营的国内支柱公司

## 指定做市商的激励和义务

JPX MM激励的总体结构：

|激励 |典型形式|
|---|---|
|费用回扣/降低交易参与成本|对于符合 MM 资格的活动，每笔交易或每件产品的费用较低。 |
|指定问题作业 |在特定问题上作为 DMM 运作的权利。 |
|营销/知名度|在 JPX 方案页面上公开列为方案 MM。 |
|连接性/基础设施优势|在一些方案设计中。 |

相应义务：

|义务|典型形式|
|---|---|
|连续双面引用|要求报价在指定时间内出现。 |
|最大买卖价差|报价必须在指定的价差范围内。 |
|最小报价大小 |报价必须等于或高于指定的合约/股票规模。 |
|性能监控|计划运营商监控履行情况；失败可以暂停MM状态。 |
|报告| MM活动报告给会场。 |

确切的方案参数变化；在发布时间敏感材料之前，请验证当前 OSE 做市商/TSE ETF 做市商页面的实时数字阈值。

## 期货和期权做市强度

日本的上市股票指数、JGB 和单一股票期权市场严重依赖于连续 MM 报价，因为：

- 期权要求希腊人在期限结构和罢工网格中进行对冲；只有具有定量风险基础设施的系统MM才能对整个网格进行报价。
- 股指期货流动性与现金股票套利交织在一起； MM 活动支持指数基金的基础并减少跟踪误差。
- JGB 期货/期权与 JGB 回购市场（参见 [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] 和 JGB 回购相关条目）以及更广泛的融资市场相互作用。
- 上述全球高频交易公司在国内经纪商特许经营活动之外提供了大部分持续的MM强度。

## 股票做市与 PTS 路由

做市商和 SOR 路由在订单簿中相遇：

- TSE 报价的做市商提供了 PTS 报价进行套利的 NBBO 参考。
- 做市商在 [[securities/japannext-securities|Japannext]] PTS 上报价为 SOR 提供了价格改善机会。
- 在 TSE 和 Japannext 之间进行套利的做市商使两本书保持一致。
- 同一家公司可以同时成为两个场所的做市商，在库存重新平衡时捕获利差。

有关路由端机制，请参阅 [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]；有关场地共享证据，请参阅 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]。

## 做市商的融资层

高频交易库存和日内头寸需要融资基础设施：

|需要|来源 |
|---|---|
|大宗经纪/融资|请参阅 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] 了解大宗融资层；全球IB提供综合融资和实物融资。 |
|空方融资|参见[[securities/japan-stock-lending-market-route|stock lending market route]]； [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 是一根结构轨；经纪人对经纪人的贷款是另一个例子。 |
|保证金交易轨道|参见[[securities/japan-margin-trading-and-securities-finance|margin trading]]；与保证金交易资格名称中的零售经纪商MM活动相关。 |
|清算保证金 |根据会员保证金要求发布到 [[securities/japan-securities-clearing-corp|JSCC]]。 |
|现金回购和日本国债抵押品 |通过日本国债回购市场进行跨资产融资。 |

融资成本是一个有意义的竞争优势：与融资成本高昂的公司相比，库存融资成本低廉的公司可以在较低的周转率下报出更小的利差。

## 监管和自律框架

|层|角色 |
|---|---|
|英国金融服务管理局 |授权在日本运营的全球高频交易公司进行 I 类 FIBO 注册；监督行为、系统弹性和市场完整性控制。 |
| JSDA |自律机构；成员包括活跃于MM的公司；规则涵盖订单输入、市场完整性、冲突管理。 |
| JPX (TSE / OSE / TOCOM) | MM 计划的场地规则、报价义务、暂停程序、监督。 |
| JSCC |清算会员规则和保证金要求。 |
| FSA SESC（证券交易监督委员会）|市场滥用和进行监视，包括与算法和高频交易活动相关的欺骗/分层/市场操纵调查。 |

具体的 MM 规则修订、滥用交易执法行动以及 SESC 和解/案件定期出现在公共监管公告中；在对特定公司做出结论之前先验证当前案例。

## ETF授权参与者角色

ETF 授权参与者 (AP) 通常是充当做市商的同一家公司，加上国内全方位服务经纪商：

- 国内AP：野村证券、大和证券、SMBC日兴、瑞穗证券、MUMSS。
- 全球 AP / MM：Citadel Securities、Optiver、Virtu、Jane Street、IMC、SIG。
- AP 活动是一种创造/赎回机制，使 ETF 价格锚定于资产净值。

对于 [[securities/japan-asset-manager-landscape-matrix|domestic ETF issuers]]（Nomura AM、AM-One、MUFG AM、Nikko AM、Daiwa AM、iShares Japan）来说，AP 关系对于运营至关重要；利基 ETF 的 AP 覆盖范围较小会导致更大的 NAV 跟踪误差。

## 延迟和基础设施

|层|注意|
|---|---|
| JPX 箭头匹配引擎 |现金-股权匹配引擎；多代升级已将延迟降低至具有全球竞争力的水平。 |
| OSE J-GATE |衍生品匹配基础设施。 |
| JPX 数据中心的主机托管 |在日本运营的全球高频交易公司的标准；减少场地侧延迟。 |
|连接提供商|标准的全球低延迟连接提供商为东京提供服务。 |
|市场数据| JPX 源（TQ、FLEX）和 PTS 场馆的场馆直接源。 |

## 有关的

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/odx-start-stb-secondary-market]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/morgan-stanley-japan]]
- [[securities-firms/goldman-sachs-japan]]
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## 来源

- JPX，大阪交易所做市商计划页面（英语/日语）。
- JPX、TSE ETF 做市商计划页面。
- JPX，股权统计页面。
- FSA，用于 FIBO 注册验证的金融工具业务运营商名单 (kinyushohin.xlsx)。
- Citadel 证券、Optiver、Virtu Financial、Jane Street、IMC、SIG 公司网站。
- JSDA 自律网站。

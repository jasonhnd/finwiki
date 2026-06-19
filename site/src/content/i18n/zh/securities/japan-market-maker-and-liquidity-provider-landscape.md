---
source: securities/japan-market-maker-and-liquidity-provider-landscape
source_hash: 479035c983b5e4e4
lang: zh
status: machine
fidelity: ok
title: "Japan market maker and liquidity provider landscape"
translated_at: 2026-06-19T12:43:19.988Z
---

# Japan market maker and liquidity provider landscape

## Wiki 路径

本页作为 [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]] 与 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] 的流动性供给同类，位于 [[securities/INDEX|securities index]] 内部。它是路由侧叙事的供给侧搭档：SOR 路由订单，做市商报出另一侧。请将其与 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 一并阅读以了解交易场所背景，与 [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] 和 [[securities/osaka-exchange|Osaka Exchange]] 了解主要交易场所规则，与 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] 了解支撑 HFT 库存的融资层，并与 [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] 了解在日本设立办公室的全球自营交易公司的实体层面核查。

## TL;DR

日本的股票及上市衍生品做市是一个混合市场：国内全能券商（野村、大和、SMBC 日兴、瑞穗、MUMSS）提供传统的银行/经纪做市以及 ETF 授权参与者（AP）职能；与它们并列的，是全球自营交易/HFT 层级——Citadel Securities Japan、Optiver Japan、Virtu Financial Japan、Jane Street Japan、IMC Japan、Susquehanna (SIG) Japan，以及其他量化交易公司——它们在 JPX 的指定做市商（DMM）及 J-NET / arrowhead 撮合基础设施内部运作。JPX 在大阪交易所上市衍生品（指数期货/期权/JGB 期货/期权）及东京证券交易所 ETF 上运行正式的做市商制度；TSE 现货股票上的股票 DMM 覆盖是选择性的。证券金融、主经纪融资及 PTS 路由经济性（[[securities/japannext-securities|Japannext]]）塑造了竞争定位。所有公司均作为在东京设有办公室的 FIEA 注册第一种金融商品交易业者运作，受 FSA 及 JSDA 自主监管规则监督。

## Why this ecosystem matters

做市商与流动性提供者是零售 SOR 与机构执行算法所接入的订单簿供给侧。若没有足够的做市商活动：

1. **买卖价差扩大。** 客户执行成本上升。
2. **ETF 套利缺口出现。** 若没有授权参与者的申购/赎回套利，ETF 价格会偏离 NAV。
3. **期权市场流动性变薄。** 做市商对希腊字母（Greeks）的对冲是期权簿流动性的结构性来源。
4. **衍生品参照质量退化。** 期货与标的现货股票篮子之间的指数套利需要双侧一致的做市商报价。
5. **PTS 价格改善机会缩小。** SOR 路由仅在 PTS 交易场所存在竞争性报价时才带来价格改善。

全球 HFT 公司进入日本（2010  之后）与 TSE arrowhead 引擎升级（2013  之后）相结合，共同压缩了价差、改善了显示深度，并使正式的指定做市商制度在经济上更具意义。

### Osaka Exchange derivatives market-maker scheme

OSE 运行涵盖如下产品的上市衍生品正式做市商（MM）计划：

| Product | Market-maker relevance |
|---|---|
| 日经 225  期货 / 期权 | 核心股价指数衍生品 MM 活动。 |
| TOPIX 期货 / 期权 | 指数衍生品 MM。 |
| 日经 225  迷你 / 微型 | 具备 MM 覆盖的零售友好型合约。 |
| JGB 期货 / 期权 | 与 JGB 现货及回购具有跨资产联动的利率衍生品 MM（在已映射之处参见 [[money-market/jgb-repo-market-japan|JGB repo]] 背景）。 |
| 个股期权 | 更具选择性的 MM 覆盖。 |
| 波动率 / 行业产品 | 部分板块有 MM 支援。 |

MM 制度向那些在指定的买卖价差/最小规模/报价存在要求下承诺双侧连续报价的公司提供激励（手续费返还/降低参与成本/正式的报价义务与权益）。请在 OSE 做市商页面确认当前制度参数。

### TSE ETF market-maker scheme

TSE 为上市 ETF 运行正式的 ETF 做市商计划。其结构性目标是将显示的买卖价差保持紧密，并支持与标的篮子的 ETF 套利。国内 AM（占主导的 ETF 发行体——野村 AM、AM-One、MUFG AM、日兴 AM、大和 AM；参见 [[securities/japan-asset-manager-landscape-matrix|asset manager landscape]]）在此制度中与国内经纪 MM 及全球公司双方协作。

### TSE cash-equity DMM

TSE 现货股票的指定做市商覆盖比衍生品/ETF 制度更具选择性。TSE 上现货股票的默认模式是经由 arrowhead 的订单驱动连续竞价；正式的 DMM 承诺在此之上叠加，以针对选定标的实现特定的市场质量目标。

## Domestic broker market making

各主要国内证券公司将股票/衍生品/ETF 做市与授权参与者活动作为其机构业务的一部分来运营：

| House | Market-making relevance |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | 在股票/衍生品/ETF 中最大的国内 MM 足迹；主要 ETF AP。 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 在股票/衍生品/ETF 中的主要国内 MM。 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 在股票/衍生品中的国内 MM 活动；在利率/FX 方面具备 SMFG 集团的近接性。 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 国内 MM 活动；强大的利率/FX 整合。 |
| MUMSS (Mitsubishi UFJ Morgan Stanley) | 具备摩根士丹利全球整合的国内 MM；相当可观的股票衍生品活动。 |

这些券商将 MM 与承销、主经纪、证券借贷及全能机构销售相结合——与纯自营 HFT 公司在结构上不同的成本结构。

### Citadel Securities Japan

- **Global parent**: Citadel Securities（与 Citadel 对冲基金相独立）。
- **Japan footprint**: 作为 FSA 注册第一种 FIBO 运作的东京办公室；股票/衍生品做市与执行交易对手业务。
- **Distinguishing feature**: 最大的全球股票做市商之一；在美国 Reg NMS 中具有相当可观的做市商市场份额；日本业务以全球公司的风险基础设施提供日本股票/衍生品覆盖。
- **Activity scope**: 横跨 TSE / PTS 的股票做市；股票衍生品；ETF。

### Optiver Japan

- **Global parent**: Optiver（总部位于阿姆斯特丹的全球做市商）。
- **Japan footprint**: 东京办公室；FSA 注册第一种 FIBO；为衍生品/ETF/股票活动而成为 OSE / TSE 的会员。
- **Distinguishing feature**: 期权做市是 Optiver 的全球强项；日本的期权/ETF/衍生品报价是其核心活动。
- **Activity scope**: 上市期权、ETF MM、股票衍生品。

### Virtu Financial Japan

- **Global parent**: Virtu Financial（NYSE 上市的全球做市商）。
- **Japan footprint**: 东京办公室；FSA 注册第一种 FIBO；横跨包括日本在内的多个亚洲交易场所的股票/ETF 做市。
- **Distinguishing feature**: 全球 ETF AP 及做市业务；跨交易场所套利能力。
- **Activity scope**: 股票/ETF MM；部分衍生品活动。

### Jane Street Japan

- **Global parent**: Jane Street（私人持有的全球量化交易公司）。
- **Japan footprint**: 东京办公室；FSA 注册；ETF/股票/衍生品做市；应用于日本上市 ETF 及交叉上市 ETF 套利的强大全球 ETF AP 特许经营。
- **Distinguishing feature**: 最活跃的全球 ETF 做市商之一；量化交易文化；相当可观的固定收益与股票跨资产活动。
- **Activity scope**: ETF MM、股票衍生品、跨资产套利。

### IMC Japan

- **Global parent**: IMC Trading（总部位于阿姆斯特丹的全球做市商）。
- **Japan footprint**: 东京办公室；FSA 注册；衍生品/ETF/股票做市。
- **Distinguishing feature**: 在亚洲衍生品市场的长期存在；期权做市能力。
- **Activity scope**: 上市期权、ETF MM、股票。

### Susquehanna (SIG) Japan

- **Global parent**: Susquehanna International Group（SIG，总部位于费城的全球量化交易公司）。
- **Japan footprint**: 东京办公室；FSA 注册；衍生品/期权做市。
- **Distinguishing feature**: 全球期权做市强项；结构化产品专长；量化交易文化。
- **Activity scope**: 上市期权、ETF MM、股票衍生品。

### Other firms in the tier

在日本开展做市活动的其他全球/区域公司（此列表的上限反映公开可见的公司；请就活跃实体核对当前的 FSA FIBO 注册）：

- Tower Research Capital Japan
- DRW Holdings Japan
- Hudson River Trading Japan
- Flow Traders（亚洲业务覆盖日本上市 ETF）
- XR Trading 及其他开展日本上市活动的量化机构
- 在 FIEA 第一种范围下运作的国内自营公司

## Designated-market-maker incentives and obligations

JPX MM 激励的一般结构：

| Incentive | Typical form |
|---|---|
| 手续费返还 / 降低交易参与成本 | 对 MM 适格活动的逐笔或逐产品手续费下调。 |
| 指定标的分配 | 在指定标的上作为 DMM 运作的权利。 |
| 营销 / 可见性 | 在 JPX 制度页面上作为制度 MM 公开列示。 |
| 连接性 / 基础设施权益 | 在部分制度设计中。 |

相应的义务：

| Obligation | Typical form |
|---|---|
| 连续双侧报价 | 在指定时段内要求报价存在。 |
| 最大买卖价差 | 报价必须位于指定的价差区间内。 |
| 最小报价规模 | 报价必须达到或超过指定的合约/股份规模。 |
| 绩效监控 | 制度运营者监控履行情况；不履行可暂停 MM 资格。 |
| 报告 | MM 活动向交易场所报告。 |

确切的制度参数会变更；在发布对时间敏感的资料之前，请在当前的 OSE 做市商 / TSE ETF 做市商页面确认最新的数值阈值。

## Futures and options market-making intensity

日本的上市股价指数、JGB 及个股期权市场严重依赖连续的 MM 报价，因为：

- 期权需要横跨期限结构与行权价格网格的希腊字母对冲；只有具备量化风险基础设施的系统化 MM 才能报出整个网格。
- 指数期货流动性与现货股票套利相互交织；MM 活动支撑基差并降低指数基金的跟踪误差。
- JGB 期货 / 期权与 JGB 回购市场（参见 [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] 及 JGB 回购相关条目）以及更广泛的融资市场相互作用。
- 上述全球 HFT 公司提供了国内券商特许经营活动之外的大部分连续 MM 强度。

## Equity market making vs PTS routing

做市与 SOR 路由在订单簿处交汇：

- 在 TSE 报价的做市商提供 PTS 报价据以套利的 NBBO 参照。
- 在 [[securities/japannext-securities|Japannext]] PTS 报价的做市商为 SOR 提供价格改善机会。
- 在 TSE 与 Japannext 之间套利的做市商使两个订单簿保持一致。
- 同一家公司可同时在两个交易场所担任做市商，在库存再平衡之际捕获价差差异。

关于路由侧机制参见 [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]，关于交易场所份额的证据参见 [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]。

## Financing layer for market makers

HFT 库存与日内头寸需要融资基础设施：

| Need | Source |
|---|---|
| 主经纪 / 融资 | 关于批量融资层参见 [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]]；全球投行提供合成与实物融资。 |
| 空头侧的证券借贷 | 参见 [[securities/japan-stock-lending-market-route|stock lending market route]]；[[financial-regulators/japan-securities-finance|Japan Securities Finance]] 是一条结构性轨道；经纪商间借贷是另一条。 |
| 信用交易轨道 | 参见 [[securities/japan-margin-trading-and-securities-finance|margin trading]]；与信用交易适格标的中的零售经纪 MM 活动相关。 |
| 清算保证金 | 在会员保证金要求下缴存至 [[securities/japan-securities-clearing-corp|JSCC]]。 |
| 现金回购与 JGB 抵押品 | 经由 JGB 回购市场的跨资产融资。 |

融资成本是一项有意义的竞争差异化因素：拥有廉价库存融资的公司，能以比拥有昂贵融资的公司更低的换手率报出更紧的价差。

## Regulatory and self-regulatory framework

| Layer | Role |
|---|---|
| FSA | 为在日本运作的全球 HFT 公司授予第一种 FIBO 注册；监督行为、系统耐性及市场健全性管控。 |
| JSDA | 自主监管机构；会员包括从事 MM 的公司；规则涵盖订单录入、市场健全性、利益冲突管理。 |
| JPX (TSE / OSE / TOCOM) | 关于 MM 制度、报价义务、暂停程序、监察的交易场所规则。 |
| JSCC | 清算会员规则与保证金要求。 |
| FSA SESC (证券交易等监视委员会) | 市场滥用与行为监察，包括与算法及 HFT 活动相关的幌骗（spoofing）/分层（layering）/操纵市场调查。 |

特定的 MM 规则修订、滥用性交易执法行动及 SESC 和解/案件会定期出现在公开的监管公告中；在就特定公司得出结论之前，请确认当前的案件。

## ETF authorized participant role

ETF 授权参与者（AP）通常是与担任做市商相同的公司，再加上国内全能券商：

- 国内 AP：野村证券、大和证券、SMBC 日兴、瑞穗证券、MUMSS。
- 全球 AP / MM：Citadel Securities、Optiver、Virtu、Jane Street、IMC、SIG。
- AP 活动是使 ETF 价格锚定于 NAV 的申购/赎回机制。

对于 [[securities/japan-asset-manager-landscape-matrix|domestic ETF issuers]]（野村 AM、AM-One、MUFG AM、日兴 AM、大和 AM、iShares Japan），AP 关系在运营上至关重要；某只小众 ETF 上的稀薄 AP 覆盖会导致更大的 NAV 跟踪误差。

## Latency and infrastructure

| Layer | Note |
|---|---|
| JPX arrowhead 撮合引擎 | 现货股票撮合引擎；多代升级已将延迟降至全球具竞争力的水平。 |
| OSE J-GATE | 衍生品撮合基础设施。 |
| 在 JPX 数据中心的同址托管 | 对在日本运作的全球 HFT 公司而言为标准；降低交易场所侧延迟。 |
| 连接性提供商 | 标准的全球低延迟连接性提供商为东京提供服务。 |
| 市场数据 | JPX 行情（TQ、FLEX）及 PTS 交易场所的交易场所直连行情。 |

## Related

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

## Sources

- JPX, Osaka Exchange Market Maker scheme page (English / Japanese).
- JPX, TSE ETF Market Maker scheme page.
- JPX, equity statistics pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx) for FIBO registration verification.
- Citadel Securities, Optiver, Virtu Financial, Jane Street, IMC, SIG corporate sites.
- JSDA self-regulatory site.

---
source: derivatives/dealer-bank-derivatives-revenue-mix
source_hash: 43a2ce1d350cc22e
lang: zh
status: machine
fidelity: ok
title: "交易商银行衍生品收入构成 — 日本超大型银行与外资投行"
translated_at: 2026-05-31T03:19:56.477Z
---

# 交易商银行衍生品收入构成 — 日本超大型银行与外资投行

## TL;DR

日本的交易商银行衍生品业务被划分为**三个结构层级**,每一层在利率、外汇、股票和信用衍生品之间都有独特的收入构成:

1. **超大型银行综合银行业务 — [[megabanks/mufg-bank|MUFG]] / [[megabanks/sumitomo-mitsui-banking-corp|SMBC]] / [[megabanks/mizuho-bank|Mizuho]]** — 银行与证券合并的实体,运营着面向日本交易商对企业、交易商对机构流量的最大规模日元 IRS、OIS、基差互换及外汇衍生品账簿。利率和外汇在超大型银行的衍生品收入构成中占主导;股票衍生品规模较小,集中在证券子公司;信用衍生品集中在银行账簿对冲及有限的交易商 CDS 活动;

2. **独立的日本投行业务 — [[securities-firms/nomura-hd|Nomura]] / [[securities-firms/daiwa-sg|Daiwa SG]]** 加上超大型银行证券臂([[securities-firms/smbc-nikko|SMBC Nikko]] / [[securities-firms/mizuho-securities|Mizuho Securities]]) — 以证券公司为根基的交易商业务,相比纯银行实体拥有**更广的股票衍生品能力**,以及围绕一级交易商 JGB 活动构建的强大利率/信用衍生品账簿;

3. **外资投行业务 — [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]]、[[securities-firms/morgan-stanley-japan|Morgan Stanley Japan / MUMSS]]、[[foreign-financial-institutions/jpmorgan-japan|JPMorgan Japan]]、[[foreign-financial-institutions/citigroup-japan|Citi Japan]]** — 拥有完整日本交易商实体的全球性投行,具备独特的**全球交叉保证金与跨境衍生品账簿整合**、深厚的股票场外(OTC)与结构化产品能力,并将全球外汇主经纪/利率主经纪业务叠加于其日本账簿之上。

**不存在与美国 Volcker 规则同等明确形式的日本专属 Volcker 式禁令**,但日本的监管框架通过不同机制达到了类似结果:**依据 FIEA/银行法,通过子公司化实现银行与证券业务分离**、**对银行实体自营交易冒险行为的严格监督**、**巴塞尔框架的资本与杠杆限制**,以及 **FSA 对做市与自营交易的行为监督**。其结构性效果是,日本的"交易商业务"是真正的做市和面向客户的业务,自营交易式的投机性账簿对银行实体受到实质性约束(对证券公司实体的约束较小,后者有自己的资本与行为规则)。

本条目涵盖各层级的收入构成、按资产类别(利率/外汇/股票/信用)的细分、细分背后的结构性原因、外资投行在日本的跨境收入占比,以及 Volcker 式自营交易约束框架。

## Wiki 路由

本条目归属于 OTC 基础设施集群下的 [[derivatives/INDEX|derivatives index]]。请配合 [[derivatives/otc-clearing-jp-trade-repository|OTC clearing and trade repository Japan]] 阅读以了解交易后清算环节,[[derivatives/swap-execution-facility-japan|Japan SEF-equivalent ETP regime]] 了解执行场所环节,[[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]] 了解利率产品背景,[[derivatives/nikkei-vix-jpx-vi-equivalent|JPX-VI]] 和 [[derivatives/equity-volatility-hedging-corporates-japan|equity vol hedging by corporates]] 了解股票衍生品的终端用户一侧,以及 [[securities/japan-prime-brokerage-and-institutional-financing-matrix|Japan prime brokerage matrix]] 了解相关的机构融资业务。企业终端用户一侧见 [[finance/japan-corporate-fx-and-rate-hedge-policy|Japan corporate FX and rate hedge policy]]。

## 为何收入构成很重要

交易商银行衍生品业务是**毛利率最高、监管最密集、全球整合度最高**的批发银行业务线之一。利率/外汇/股票/信用之间的收入构成:

- 揭示**每家交易商的结构性优势所在**,这驱动着企业和资产管理人在挑选衍生品交易对手时的客户覆盖选择;
- 驱动**资本配置与资产负债表使用** — 每个衍生品产品类别消耗不同组合的 RWA、杠杆和清算保证金;
- 驱动**技术投资** — 电子执行平台、风险系统和定价基础设施在各交易台之间分布不均;
- 驱动**监管互动** — 利率与外汇业务在 2008 之后受到的监管最重(清算强制令、ETP 规则、TR 报告);股票衍生品的行为监督强度不同;信用衍生品则有其自身的清算范围和 CDS 专属规则。

对于日本上市金融集团而言,披露的收入构成是 [[finance/japan-listed-financial-groups-investable-universe|investable-universe analysis]] 的一项**关键公开来源输入** — 全球市场板块中利率与外汇的占比,是对 BOJ 政策正常化、日元走势及全球波动率体制高度敏感的经营杠杆变量。

### MUFG、SMBC、Mizuho

三家日本超大型银行运营着日本最大的交易商衍生品账簿,以**银行实体的日元利率与外汇业务**为锚,由证券子公司处理股票衍生品及面向证券的机构客户。

| 超大型银行 | 银行实体 | 证券臂 | 合资伙伴 |
|---|---|---|---|
| **[[megabanks/mufg-bank|MUFG Bank]]** | MUFG Bank, Ltd. | [[securities-firms/morgan-stanley-japan|MUMSS]](Morgan Stanley MUFG Securities,即该合资公司);此外还有 Mitsubishi UFJ Securities Holdings 的非合资业务 | Morgan Stanley(在 MUMSS 架构中) |
| **[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]** | Sumitomo Mitsui Banking Corp | [[securities-firms/smbc-nikko|SMBC Nikko Securities]] | Jefferies(联盟)、Moelis(顾问联盟)等 |
| **[[megabanks/mizuho-bank|Mizuho Bank]]** | Mizuho Bank, Ltd. | [[securities-firms/mizuho-securities|Mizuho Securities]];Mizuho 集团还包括 Mizuho Trust & Banking | Greenhill(顾问收购历史) |

### 超大型银行的大致收入构成(基于公开来源推断)

逐家公司的衍生品收入细分并不总是在交易台板块层面披露 — MUFG、SMFG 和 Mizuho FG 投资者关系公开披露的是跨多项活动汇总的**全球市场板块收入**。推断的粗略构成(示意性,并非已发布数字):

| 资产类别 | 衍生品收入构成中的大致占比 |
|---|---|
| **利率(IRS、OIS、基差互换、JGB 期货相邻对冲、互换期权)** | 占主导份额 — 超大型银行交易商及终端用户流量中最大的单一衍生品产品族。后 LIBOR 时代向 TONA 参考的 OIS 过渡、BOJ 政策正常化的重启,以及日元利率曲线活动,共同驱动出结构上庞大的利率衍生品收入基础。 |
| **外汇(外汇远期、外汇掉期、外汇期权含日元交叉货币基差互换流量)** | 第二大份额 — 超大型银行主导企业终端用户的日元外汇对冲流量(日本企业跨境并购与贸易融资的外汇对冲需求)。自 QQE 时代日元融资压力以来,交叉货币基差互换流量尤为庞大。 |
| **股票(JPX 上市衍生品、OTC 股票期权、结构化股票、波动率对冲)** | 在银行实体层面份额较小(受银行-证券分离规则约束) — 集中于证券子公司。 |
| **信用(单一名称与指数 CDS、信用衍生品对冲)** | 四者中份额最小 — 日本信用衍生品市场在结构上小于美国/欧盟;银行账簿信用对冲活动有意义,但并非大额收入来源。 |

### 为何利率和外汇在超大型银行占主导

超大型银行衍生品收入集中于利率和外汇,反映了:

- **银行实体客户构成** — 企业财资部的外汇对冲(进出口资金驱动)、贷款组合的利率对冲,以及面向企业交易对手的结构化利率方案;
- **银行牌照约束** — 与零售或企业终端用户的股票衍生品中介业务集中于 [[financial-regulators/japan-exchange-group|FIEA-licensed]] 证券子公司,而非银行实体;
- **信托银行关联能力** — 对于需要信托包装敞口的产品(员工信托股份、结构化投资者载体),由信托银行子公司处理法律包装,而银行/证券实体提供衍生品;
- **JGB 一级交易商地位** — 超大型银行关联的证券臂([[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/morgan-stanley-japan|MUMSS]])是 JGB 一级交易商,构成结构性的利率衍生品锚点。

### Nomura HD、Daiwa SG

[[securities-firms/nomura-hd|Nomura]] 和 [[securities-firms/daiwa-sg|Daiwa Securities Group]] 是**两家大型、独立、总部位于日本的投资银行** — 以证券公司为根基的业务,在没有超大型银行母公司的情况下运营着完整的交易商银行衍生品能力。

### Nomura/Daiwa 的大致收入构成(基于公开来源推断)

| 资产类别 | 大致占比 |
|---|---|
| **利率** | 大份额 — JGB 一级交易商地位锚定了一个第 1 档的利率衍生品业务;日元 IRS/OIS 交易商账簿在规模上可与超大型银行业务相比。 |
| **外汇** | 重要份额 — Nomura 的全球外汇业务(Nomura International、Nomura NY)与东京的日元外汇交易整合;Daiwa 全球外汇足迹较小,但有核心的日本企业外汇覆盖。 |
| **股票** | **相比超大型银行份额格外大** — Nomura 运营着所有日本总部业务中最深厚的**国内股票衍生品**账簿(单一股票 OTC 互换、结构化股票产品、交叉持股解除相关衍生品);Daiwa 类似但规模较小。 |
| **信用** | 重要份额,与超大型银行相当;全球信用 CDS 业务小于顶级美资外资投行。 |

### 为何独立投行的股票业务格外大

结构性原因:独立投行业务**历史上是围绕证券与资本市场活动而非银行业务构建的**。它们的股票衍生品、结构化产品和 OTC 股票期权账簿反映了对以下客户的深厚覆盖:

- [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding]] 的国内企业客户;
- 国内资产管理人对波动率叠加和结构化股票产品的需求;
- 国内保险公司由 ALM 驱动的结构化股票敞口;
- 通过券商子公司渠道分销的零售结构化产品。

超大型银行关联的证券臂([[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]])已建立起可比但略窄的股票衍生品能力 — 在经济上受超大型银行集团资本配置框架的约束。

### Goldman Sachs Japan、Morgan Stanley Japan / MUMSS、JPMorgan Japan、Citi Japan、BofA Japan

外资投行层级运营**完全整合的东京交易商业务**,参与跨境全球衍生品账簿,而非独立的仅限日本的账簿。

### 外资投行的大致收入构成(基于公开来源推断,集团层面汇总至日本)

| 外资投行 | 在日本的衍生品收入特色倾斜 |
|---|---|
| **[[securities-firms/goldman-sachs-japan|GS Japan]]** | 外资投行中最深厚的股票 OTC 与结构化产品业务;强大的利率和外汇;跨境全球资本市场整合。股票波动率和 OTC 股票互换是其特色业务。 |
| **[[securities-firms/morgan-stanley-japan|MS Japan / MUMSS]]** | 双渠道结构(全资 MS Japan + 与 MUFG 合资的 MUMSS) — 将全球投行能力与 MUFG 集团资产负债表结合用于利率/外汇;MS Japan 拥有深厚的股票 OTC;在全部四个资产类别均具竞争力。 |
| **[[foreign-financial-institutions/jpmorgan-japan|JPM Japan]]** | 格外强大的外汇主经纪和利率衍生品业务(映射 JPM 在外汇和利率上的全球市场份额领先地位);强大的托管与银行整合;股票 OTC 具竞争力。 |
| **[[foreign-financial-institutions/citigroup-japan|Citi Japan]]** | 格外强大的外汇主经纪和利率业务(Citi 全球市场份额领先);经由 Citibank 东京分行的银行账簿外汇整合;股票 OTC 具竞争力。 |
| **[[foreign-financial-institutions/jpmorgan-japan|BofA Japan]](BofA Securities Japan)** | 各资产类别均具竞争力;亚洲业务小于 GS/MS/JPM/Citi;具备 FICC 和股票 OTC 能力。 |

### 为何外资投行维持日本交易商实体

尽管在某些零售和商业银行板块经历了 2010 之后的 [[banking/foreign-bank-japan-retreat|foreign-bank Japan retreat]],顶级外资投行出于结构性原因仍维持完整的日本交易商业务:

- **全球企业客户覆盖** — 在日本有业务的跨国企业客户需要日元衍生品服务;
- **全球对冲基金客户的日本配置** — 运行日本策略的全球多策略基金通过外资投行东京交易商实体进行路由;
- **跨境产品能力** — 日元-美元交叉货币基差互换、JGB 期货对美元利率相对价值、JPX 对标普相对价值、日本企业跨境并购外汇对冲 — 全都需要整合的东京 + 伦敦 + 纽约业务;
- **监管对等** — 在 [[derivatives/otc-clearing-jp-trade-repository|EMIR / Title-VII equivalence]] 之下,拥有注册东京交易商实体的外资投行可向母国法域客户提供符合日本清算资格的产品,而不丧失资本高效待遇。

### 外资投行在日本衍生品收入中的占比

外资投行合计在日本交易商衍生品市场中的占比,在许多产品上**重要但次于**超大型银行 + 独立投行层级:

- **日元 IRS/OIS** — 超大型银行 + Nomura/Daiwa 主导名义存量;外资投行竞争但排名靠后;
- **日元-美元交叉货币基差互换** — 外资投行(尤其是 [[foreign-financial-institutions/jpmorgan-japan|JPM]] 和 [[foreign-financial-institutions/citigroup-japan|Citi]])因其美元融资侧业务而具结构重要性;
- **日本单一名称的 OTC 股票衍生品** — [[securities-firms/goldman-sachs-japan|GS]] 和 [[securities-firms/morgan-stanley-japan|MS]] 拥有格外深厚的业务,与 Nomura 竞争;
- **日元外汇期权** — 全球投行(尤其是 [[foreign-financial-institutions/jpmorgan-japan|JPM]]、[[foreign-financial-institutions/citigroup-japan|Citi]])在全球处于第 1 档,在东京具竞争力;
- **日本参考实体的 CDS 与 iTraxx Japan** — 鉴于国内 CDS 业务较小,外资投行历来是重要交易对手。

精确的市场份额数字需要交易商层面的披露,而这在日本板块层面并不总是可得;因此逐家公司的规模测算必然只是指示性的,基于全球排行榜数据、BIS 日本交易对手统计及 JSCC 清算汇总数据。

## 日本的 Volcker 式自营交易约束

**美国 Volcker 规则**(Dodd-Frank 法案第 619 条)禁止银行实体从事自营交易,并限制对对冲基金和私募股权基金的投资,但对做市、承销、对冲及某些政府证券交易设有豁免。

日本**不存在**名为"Volcker 规则"的**直接立法对等物**,但其监管框架通过不同机制达到可比结果:

| 机制 | 效果 |
|---|---|
| **银行法/FIEA 对银行与证券的分离** | 银行实体的自营交易受到结构性约束 — 大部分做市和交易商活动设于 [[banking/japan-banking-license-tier-comparison-matrix|FIEA-licensed securities-arm subsidiary]] 而非银行实体。 |
| **巴塞尔框架的资本与杠杆** | 对自营交易风险加权资产和杠杆率敞口的资本计提,使得纯投机性头寸持有在规模上经济上缺乏吸引力。 |
| **FSA 监管框架** | FSA 对大型银行的行为监督包括对交易账簿冒险、内部控制充分性,以及做市对自营交易边界的审查。 |
| **内部治理** | 超大型银行内部治理区分做市(面向客户、运行对冲)与自营交易(自有账户方向性冒险);内部限额约束自营活动。 |
| **JFSA/BOJ 宏观审慎监测** | 大型银行的交易账簿总敞口在集团层面受到监测。 |

结构性效果:**日本大型银行运营面向客户的做市与终端用户覆盖衍生品业务,而非大型方向性自营交易账簿**。日本上市的日本金融集团中最大的自营交易业务历来位于拥有自身资本结构的非银行证券子公司(即便在那里,资本和杠杆约束也限制了自营规模)。

经济效果:**超大型银行衍生品业务的收入构成由客户流量主导**(企业对冲、机构交易商活动、外汇企业流量),而非投机性头寸持有的损益。这就是为何超大型银行的全球市场板块收入在结构上比历史上自营交易时代的美资投行银行实体回报更稳定但毛利率更低。

## 跨产品业务整合

某些衍生品产品类别驱动**跨产品业务整合**:

- **交叉货币基差互换(日元-美元)** — 位于利率与外汇的交汇处;驱动企业外汇对冲与 JGB 日元利率对冲的联合覆盖;在 [[megabanks/mufg-bank|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho]]、[[securities-firms/nomura-hd|Nomura]] 及全球外汇外资投行处为主要业务;
- **JGB 现券、JGB 期货、JGB 回购、JGB-OIS 对冲综合体** — 驱动以一级交易商 JGB 活动为锚的整合利率衍生品覆盖;
- **股票衍生品 + 交叉持股解除** — 驱动证券公司层级对企业财资 + 资本市场 + 结构化产品活动的整合覆盖;
- **信用 CDS + 债券现券 + 结构化信用** — 驱动交易商银行信用交易台的整合信用产品覆盖。

这些整合正是**衍生品交易台收入很少能在交易商银行披露中与现券、回购和结构化产品收入干净分离**的结构性原因。超大型银行的"利率衍生品收入"一行反映的是利率衍生品交易**加上** JGB 现券、JGB 回购和利率结构化产品收入 — 要从公开来源披露中将它们精确分离只能是近似的。

## 相关

- [[derivatives/INDEX]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/swap-execution-facility-japan]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/jgb-futures-curve]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-best-execution-sor-pts]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/foreign-bank-japan-retreat]]
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
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[INDEX|FinWiki index]]

## 来源

- MUFG、SMFG、Mizuho FG、Nomura HD、Daiwa Securities Group — IR 材料、板块披露、年度报告。
- Goldman Sachs、Morgan Stanley、JPMorgan Chase、Citigroup — 集团层面 IR 材料(日本/亚洲评述)。
- FSA,英文版 FIEA 框架页面 — 银行/证券分离、市场行为监督、ETP 及 OTC 衍生品规则。
- BOJ,支付/市场统计 — 日本 OTC 衍生品总名义额及总市值。
- ISDA — SwapsInfo 汇总数据、OTC 衍生品产品分类、市场规模出版物。
- JSCC,英文版清算统计出版物。

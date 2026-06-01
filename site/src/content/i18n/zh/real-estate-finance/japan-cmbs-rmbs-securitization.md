---
source: real-estate-finance/japan-cmbs-rmbs-securitization
source_hash: e88cf1e0c06a9456
lang: zh
status: machine
fidelity: ok
title: "日本 CMBS 和 RMBS 证券化市场"
translated_at: 2026-06-01T03:31:12.254Z
---
# 日本 CMBS 和 RMBS 证券化市场

## 长篇大论；博士

日本的抵押贷款支持证券化市场明显分裂为两股。 RMBS（住宅抵押贷款支持证券）以 [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF)]] 月度直通式 MBS 发行为主，由私人银行渠道发放的固定利率住房贷款 35  提供支持，另外还有来自大型银行和信托银行发起机构的规模较小的私人 RMBS 链。 CMBS（商业抵押贷款支持证券）在结构上规模较小，更具周期性——单一借款人 CMBS 在 2008  后的市场中占据主导地位，在 2008-2010  困境周期之后，管道 CMBS 实际上处于休眠状态，在该周期中，日本房地产的无追索权 CMBS 贷款遭受了重大减记。安排人专营权集中于大型银行证券子公司、[[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[JapanFG/sumitomo-mitsui-trust|SMTB]] 和 [[JapanFG/mizuho-trust-bank|Mizuho Trust]] 的信托银行证券化部门，以及外资机构的剩余存在。评级范围以国内机构[[JapanFG/jcr|JCR]]和[[JapanFG/rating-and-investment|R&I]]为主，[[JapanFG/sp-global-ratings-japan|S&P]]和[[JapanFG/moodys-japan|Moody's]]提供跨境投资者所需的高级评级全球范围评级。

## 维基路线

该条目位于 [[real-estate-finance/INDEX|real-estate-finance index]] 下，锚定了日本房地产金融的证券化方面。与上市权益工具的 [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] 一起阅读，与仓库/私家车层的 [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] 一起阅读，与证券化前仓储层的 [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] 一起阅读，并与驱动高级 LTV 和档次厚度的承销资本化率输入 [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] 一起阅读。与[[policy-finance/japan-housing-finance-agency|JHF]]配对用于公共部门RMBS引擎，与[[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]]配对用于运行SPV现金流的受托人基础设施，与[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]配对用于资产管理和证券化托管之间的运营分割。跨域锚点是 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]]——人寿保险公司是高级人民币债券和高级 CMBS 债券的最大日元方机构买家，因为日本国债的资产类别久期和收益率上升补偿了信用曲线工作。

### 两条规模截然不同的股线

仅数量级；每年的详细数据存在于 JSDA 证券化市场の动向调查（每月/年度 Excel 文件）和 JHF MBS 披露中，两者均在来源下引用。仅 JHF MBS 累计发行额为 ¥26.3 trn / ¥12.7 trn 在 FY2017 end 未偿付，而 RMBS 未偿付金额约为 ¥15 trn，约在 2016  左右 - 包括以下范围。

|斯特兰德|年度发行量（粗略的公共来源数量级）|流通股（粗略的公共来源数量级）|主导发行人模式|
|---|---|---|---|
| **人民币** | ¥1.5-3 trn/年（JHF MBS ≈ ¥2-3 trn/年）| ¥10-15 trn | JHF 月度直通MBS 占主导地位；私人RMBS仅占总数的一小部分|
| **CMBS** |活跃年份每年低于 ¥500  亿；休眠期接近于零| ¥500 bn-¥1 trn | 2010 后单一借款人 CMBS 占据主导地位；导管CMBS有效归零|MBS-CMBS 的不对称是结构性的。日本的住房金融体系通过 Flat 35,  输送很大一部分固定利率抵押贷款，该贷款是 JHF 几乎每月购买并证券化的。相比之下，CMBS 的竞争对手是 (a) [[real-estate-finance/j-reit-market-overview|J-REIT]] 公开股权融资、(b) 银行资产负债表无追索权贷款和 (c) 私募基金债务——所有这些都吸收了大部分机构级商业房地产，否则这些房地产将流入公共 CMBS 交易。

### 历史弧线

- **1998-2007：** 两条链的构建。 SPC法（1998）、信托法改革、资产流动化法为SPV证券化搭建了法律框架。 CMBS 管道发行规模扩大到 2000 中期，具有多借款人多元化资金池。
- **2008-2010：** 全球金融危机对日本 CMBS 的打击比任何其他日本结构性融资资产类别都严重。许多管道-CMBS 交易遭受了尾部减记；超期期限无追索权 CMBS 贷款的再融资失败引发了财产抛售。管道 CMBS 的投资者基础实际上已退出。

### JHF 每月直通MBS

JHF 每月传递 MBS 是锚定工具。公共源码结构特点：

|特色 | JHF MBS 阅读 |
|---|---|
|发行人 | [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] |
|抵押品 | 35  固定利率住房贷款，由私人金融机构发起并由 JHF 购买 |
|结构|传递；每月本金+利息传递，无需信贷分级 |
|增信|隐性/显性的政策性银行信贷支持，加上JHF自身作为独立行政法人的信用状况|
|结算|通过 [[securities/japan-securities-depository-center|JASDEC]] 记账 |

### 私人 RMBS

私人 RMBS 发行来自大型银行和信托银行发起人，它们将部分自有固定利率或浮动利率住房贷款组合证券化。公共源功能：

- 高级/夹层/次级分级，发起人通常保留垂直或水平部分以保留风险。
- 通常汇集经验丰富的住房贷款的静态或近静态投资组合。
- [[JapanFG/jcr|JCR]]和[[JapanFG/rating-and-investment|R&I]]的高级部分被评为投资级，[[JapanFG/sp-global-ratings-japan|S&P]]或[[JapanFG/moodys-japan|Moody's]]的跨境投资者评级为AAA部分。
- 池因子摊销跟踪预定摊销加上适度的预付款。

### RMBS 的评级机构标准

|元素|标准重点|
|---|---|
|泳池调料|较旧的贷款 → 表现出的付款行为 → 较低的预期损失 |
|初始生命周期价值 |较低的 LTV → 更多的股权缓冲 → 较低的违约损失预期 |
|贸工部 |收入与债务→支付能力指标|
|地理集中度|东京/大阪集中度 vs 区域分散度 |
|原创品质 | Megabank / [[JapanFG/japan-post-bank|Japan Post Bank]] / 区域银行 vs 非银行发起人 |
|贷款产品|组屋35 (JHF购买) vs 普通银行房屋贷款 vs 公寓贷款 (1栋阿帕特) |
|服务|主服务商/备份服务商设置 |
|宏叠加|失业、家庭收入、房价情景|

### 单一借款人 CMBS 后 2010

 后 2008,  管道 CMBS 模式实际上已从日本退出，并被单一借款人 CMBS 所取代。公共源码结构特点：

|特色 |单一借款人 CMBS 阅读 |
|---|---|
|借款人|单一拥有财产的 SPV（通常是 [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] 或 TMK）持有一项或少量相关财产 |
|贷款|由财产担保的无追索权贷款|
|证券化|贷款转移至发行 SPV 信托；分批发行 CMBS 票据 |
|部分 |高级/中层/从属，基于LTV的从属校准|
|成熟度 |通常情况下 5-7Y 具有到期再融资风险 |
|评级 |高级组 IG 为 [[JapanFG/jcr|JCR]] 和 [[JapanFG/rating-and-investment|R&I]]；跨境投资者AAA级可能获得[[JapanFG/sp-global-ratings-japan|S&P]]或[[JapanFG/moodys-japan|Moody's]]双重评级|
|物业类型 |写字楼（东京甲级）、物流、酒店、零售、住宅公寓楼；很少有开发风险资产|
|受托人|发行SPV的信托银行受托人|

### 导管 CMBS — 休眠

在 2008-2010  困境周期之后，管道-CMBS 模式（多贷款池、多元化借款人基础、主服务商操作）在日本实际上处于休眠状态。公开来源的原因解读：

2。 2013  后的日元曲线压缩使得银行资产负债表无追索权贷款比 CMBS 融资的贷款更便宜，从而消除了推动管道 CMBS 起源的利差套利。
3。 [[real-estate-finance/j-reit-market-overview|J-REIT]] 股本在 2010  后迅速扩大，并吸收了大部分机构级商业地产，这些地产将成为管道 CMBS 借款人基础。

### CMBS 评级机构标准

|元素|标准重点|
|---|---|
|鉴定| [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI-compliant appraisal]] 包括 DCF + 直接上限 + 比较方法 |
|资本化率|针对 [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI cap-rate survey]] 和最近的交易证据进行压力测试 |
| DSCR|偿债覆盖率，针对再融资风险情景进行压力测试|
|租户集中度|单租户与多租户；租约到期概况；租户信用 |
|物业类型 |办公楼、物流、酒店、零售、住宅——不同评级机构的损失假设
|地理集中度|东京中央商务区/大阪/地区|
|赞助商品质 |保荐人-SPV 股权等级、保荐人往绩记录、保荐人再融资能力 |
|再融资风险|上限利率和利率曲线变化下的到期气球再融资情景|

### RMBS鼻祖格局

|发起人| RMBS 角色 |
|---|---|
| [[policy-finance/japan-housing-finance-agency|JHF]] |通过固定 35  购买 + 每月转手 MBS 锚定 RMBS 发行人 |
|大型银行| Flat 35 to JHF的直接鼻祖；自己的私人 RMBS 发行人，用于自己的投资组合回收 |
|区域银行|平35 原产地合作伙伴；偶尔为自己的投资组合发行私人 RMBS |
|信托银行|自有组合住房贷款的发起人；信托银行还担任 JHF MBS 和私人 RMBS 的受托人 |
|非银行住房贷款发起人|相对于银行渠道规模有限|

### CMBS鼻祖景观

|发起人| CMBS 的作用 |
|---|---|
| Megabank 企业房地产金融柜台 |无追索权贷款随后证券化的由来 |
|信托银行房地产金融部门|起源+编曲组合 |
|外国银行日本分行房地产金融柜台|跨境投资者基础来源；缩短外资银行撤退后周期|
|兆丰证券子公司|发行中的安排者/经销商角色 |

### 安排者/经销商特许经营

JP CMBS / 私人 RMBS 的安排人/经销商专营权集中于：

|经销商|特许经营阅读 |
|---|---|
| [[JapanFG/mufg-morgan-stanley-securities|Mitsubishi UFJ Morgan Stanley Securities]] | MUFG 侧；通过 [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]] 深度信托银行联系 |
| [[JapanFG/smbc-nikko-securities|SMBC Nikko Securities]] | SMBC侧；与 [[JapanFG/sumitomo-mitsui-trust|SMTB]] 的联系是跨组而非组内 |
| [[JapanFG/mizuho-securities|Mizuho Securities]] |瑞穗侧；通过 [[JapanFG/mizuho-trust-bank|Mizuho Trust]] 深度信托银行联系 |

### 信托银行托管经济学

信托银行托管层在结构上很重要，因为日本证券化 SPV 通常使用信托受益権（受益信托利益），而不是直接将贷款资产转移到发行 SPV。信托银行根据信托契约持有标的资产（贷款或财产），而受益权益则被转移和分割。这就是 JP CMBS / RMBS 的信托银行特许经营权属于大型银行集团信托银行，而不是属于 [[JapanFG/master-trust-bank|MTBJ]] 或 [[JapanFG/custody-bank|CBJ]] 等纯托管信托银行的原因之一——证券化托管是收费的前台工作，而不是资产管理公用事业工作。有关操作拆分，请参阅 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]。

## 5。评级机构格局

|评级机构| JP CMBS / MBS 角色 |
|---|---|
| [[JapanFG/sp-global-ratings-japan|S&P Global Ratings Japan]] |全球范围的标准；以跨境投资者为目标的 AAA 级所需的 |
| [[JapanFG/moodys-japan|Moody's Japan]] |全球范围的标准；与标准普尔相同的跨境用例 |
|惠誉日本 |日期不详。 — 没有公开的惠誉 JP CMBS / RMBS 评级名单浮出水面； JP 结构性融资覆盖范围相对于 JCR / R&I 而言较小 |

### 国内规模与全球规模

|方面|国内规模评级|全球范围评级|
|---|---|---|
|参考宇宙|日本发行人/工具宇宙 |全球发行人/工具宇宙|
|主权帽|有效 JGB 上限（AA+/AAA 级）|全球主权可比性|
|典型用途|日元投资者限额管理； JBA/投信协会报告|跨境投资者限额管理；巴塞尔风险权重下限|
| JP CMBS / RMBS 的覆盖范围 |高（JCR + R&I 占主导地位）|选择性（仅高级部分且仅当跨境分销证明成本合理时）|

### RMBS投资者基础

|投资者类型 |需求阅读 |
|---|---|
|人寿保险公司|主力买家——JHF MBS 和高级私人 RMBS 在 ALM 账目中的日元长期资产类别中表现出色；参见 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] |
|大型银行（自有账户）|自有资金投资组合的买家；风险权重治疗对 JHF MBS 有利
|区域银行|买家寻求提高日元国债收益率
|资产管理公司|针对日元利差产品的固定收益委托买家|

### CMBS 投资者基础

|投资者类型 |需求阅读 |
|---|---|
|人寿保险公司|高级部分的买家；夹层位于信贷资产套中|
|区域银行|优先级的选择性买家；夹层胃口各异|
|资产管理公司|信贷授权多元化的买家|
|外国投资者|选择性——通常仅在具有全球评级的跨境定向发行时|

## 相关

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/jcr]]
- [[JapanFG/rating-and-investment]]
- [[JapanFG/sp-global-ratings-japan]]
- [[JapanFG/moodys-japan]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## 来源

- ARES（房地产证券化协会）：日本房地产证券化市场汇总统计。
- JPX：证券化产品披露表面。
- JSDA (日本证券业协会) 证券化市场の动向调查：按基础资产类型划分的每年证券化发行量 — https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html
- 日本住房金融机构：机构和每月传递 MBS 披露 — https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html（JHF MBS ≈ ¥26.3 trn 累计发行/¥12.7 trn 在 FY2017 end 未偿还）。
- JCR（日本信用评级机构）：结构性融资评级标准和评级行动。
- R&I（评级和投资信息）：结构性融资评级标准。
- 标准普尔全球评级：跨境结构性融资标准。
- 穆迪：跨境结构性融资标准。
- 日本央行：与证券化存量相关的金融流量汇总统计数据。

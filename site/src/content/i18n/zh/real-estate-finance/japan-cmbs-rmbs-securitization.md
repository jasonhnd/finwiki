---
source: real-estate-finance/japan-cmbs-rmbs-securitization
source_hash: 369b1796602442cc
lang: zh
status: machine
fidelity: ok
title: "日本 CMBS 与 RMBS 证券化市场"
translated_at: 2026-06-19T12:43:19.901Z
---

# 日本 CMBS 与 RMBS 证券化市场

## TL;DR

日本的按揭抵押证券化市场清晰地分为两条支线。RMBS (住宅按揭抵押证券) 以 [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF)]] 的月度 Monthly Pass-Through MBS 发行为主导，其背后是通过民间银行渠道组成的 Flat 35  固定利率住房贷款，外加来自大型银行和信托银行发起人的较小民间 RMBS 支线。CMBS (商业按揭抵押证券) 在结构上更小且更具周期性 — 单一借款人 CMBS 主导 2008  后市场，而在针对日本房地产的无追索权 CMBS 贷款遭受实质性减记的 2008-2010  困境周期之后，管道型 (conduit) CMBS 实际上处于休眠状态。承销特许经营集中于大型银行的证券子公司、[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]] 和 [[trust-banks/mizuho-trust-bank|Mizuho Trust]] 的信托银行证券化部门，加上外资机构的残余存在。评级覆盖以本土机构 [[financial-regulators/jcr|JCR]] 和 [[financial-regulators/rating-and-investment|R&I]] 为主导，由 [[JapanFG/sp-global-ratings-japan|S&P]] 和 [[JapanFG/moodys-japan|Moody's]] 为优先档提供跨境投资者所需的全球尺度评级。

## Wiki 路径

本条目位于 [[real-estate-finance/INDEX|real-estate-finance index]] 之下，锚定日本房地产融资的证券化一侧。请与 [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] 一同阅读以了解上市股权载体，与 [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] 一同了解仓储 / 民间载体层，与 [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] 一同了解证券化前的仓储层，与 [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] 一同了解驱动优先档 LTV 与档层厚度的承销资本化率输入。与 [[policy-finance/japan-housing-finance-agency|JHF]] 配对以了解公共部门 RMBS 引擎，与 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]] 配对以了解运行 SPV 现金流的受托基础设施，与 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 配对以了解资产管理与证券化受托之间的运营划分。跨领域锚点是 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] — 寿险公司是优先 RMBS 档层和优先 CMBS 票据最大的日元侧机构买家，因为该资产类别的久期和相对 JGB 的收益率提升弥补了信用曲线工作。

### 规模迥异的两条支线

仅为数量级;细颗粒的逐年数据存在于 JSDA 証券化市場の動向調査 (月度/年度 Excel 文件) 和 JHF MBS 披露中，二者均在 Sources 下引用。仅 JHF MBS 在 FY2017  末就累计发行 ¥26.3  万亿 / 存量 ¥12.7  万亿，而 RMBS 存量在 2016  前后约为 ~¥15  万亿 — 框定下方区间。

| Strand | Annual issuance (rough public-source order of magnitude) | Outstanding stock (rough public-source order of magnitude) | Dominant issuer model |
|---|---|---|---|
| **RMBS** | ¥1.5-3  万亿/年 (JHF MBS ≈ ¥2-3  万亿/年) | ¥10-15  万亿 | JHF Monthly Pass-Through MBS 主导;民间 RMBS 仅占总量一小部分 |
| **CMBS** | 活跃年份每年不足 ¥500  亿;休眠年份接近于零 | ¥500  亿-¥1  万亿 | 单一借款人 CMBS 在 2010 后主导;管道型 CMBS 实际为零 |

RMBS-CMBS 的不对称是结构性的。日本的住房金融系统将很大份额的固定利率按揭发起通过 Flat 35,  引导，后者由 JHF 以近乎月度的节奏买入并证券化。相比之下，CMBS 需与 (a) [[real-estate-finance/j-reit-market-overview|J-REIT]] 的公开股权融资、(b) 银行资产负债表上的无追索权贷款、以及 (c) 私募基金债务竞争 — 这些都吸收了本应流入公开 CMBS 交易的大部分机构级商业房地产。

### 历史脉络

- **1998-2007:** 两条支线的搭建。SPC 法 (1998)、信託法 改革和 資産流動化法 为基于 SPV 的证券化创建了法律框架。管道型 CMBS 发行随着多借款人分散化资产池在 2000 年代中期扩大。
- **2008-2010:** 全球金融危机对日本 CMBS 的冲击比任何其他日本结构化金融资产类别都更剧烈。许多管道型 CMBS 交易的尾部档层遭受减记;气球到期的无追索权 CMBS 贷款再融资失败引发了甩卖式的物业处置。管道型 CMBS 的投资者基础实际上撤出。

### JHF Monthly Pass-Through MBS

JHF Monthly Pass-Through MBS 是锚定工具。公开来源的结构特征:

| Feature | JHF MBS reading |
|---|---|
| 发行体 | [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] |
| 抵押品 | Flat 35  固定利率住房贷款，由民间金融机构发起并由 JHF 买入 |
| 结构 | 过手 (pass-through);月度本金 + 利息过手，不为信用进行分档 |
| 信用增强 | 隐性 / 显性的政策银行信用支持，加上 JHF 自身作为 独立行政法人 的信用地位 |
| 结算 | 经由 [[securities/japan-securities-depository-center|JASDEC]] 的簿记 |

### 民间 RMBS

民间 RMBS 发行来自将自有账户固定或浮动利率住房贷款组合的一部分证券化的大型银行和信托银行发起人。公开来源特征:

- 优先 / 夹层 / 次级分档，发起人通常为风险自留目的保留一个垂直或水平切片。
- 资产池通常是经过磨合 (seasoned) 的住房贷款的静态或近静态组合。
- 优先档由 [[financial-regulators/jcr|JCR]] 和 [[financial-regulators/rating-and-investment|R&I]] 评为投资级，AAA 档带有 [[JapanFG/sp-global-ratings-japan|S&P]] 或 [[JapanFG/moodys-japan|Moody's]] 的跨境投资者评级。
- 资产池系数摊还跟踪计划摊还加上温和的提前偿还。

### RMBS 的评级机构标准

| Element | Criteria emphasis |
|---|---|
| 资产池磨合度 | 较旧贷款 → 已证实的还款行为 → 较低预期损失 |
| 发起时 LTV | 较低 LTV → 更多股权缓冲 → 违约时较低预期损失 |
| DTI | 收入对债务 → 偿付能力指标 |
| 地理集中度 | 东京 / 大阪集中 对 区域分散 |
| 发起人质量 | 大型银行 / [[regional-banks/japan-post-bank|Japan Post Bank]] / 地方银行 对 非银行发起人 |
| 贷款产品 | Flat 35  (JHF 买入) 对 普通银行住房贷款 对 公寓贷款 (1 栋公寓) |
| 服务 | 主服务机构 / 备用服务机构设置 |
| 宏观叠加 | 失业、家庭收入、房价情景 |

### 2010

 后的单一借款人 CMBS

2008,  后，管道型 CMBS 模式实际上从日本撤出，被单一借款人 CMBS 取代。公开来源的结构特征:

| Feature | Single-borrower CMBS reading |
|---|---|
| 借款人 | 持有一处或少数相关物业的单一物业持有 SPV (常为 [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] 或 TMK) |
| 贷款 | 以该物业为担保的无追索权贷款 |
| 证券化 | 贷款转让给发行 SPV 信托;CMBS 票据分档发行 |
| 档层 | 优先 / 夹层 / 次级，带基于 LTV 的次级化校准 |
| 到期 | 通常 5-7 年，到期时有再融资风险 |
| 评级 | 优先档由 [[financial-regulators/jcr|JCR]] 和 [[financial-regulators/rating-and-investment|R&I]] 评为 IG;AAA 档可能为跨境投资者带有 [[JapanFG/sp-global-ratings-japan|S&P]] 或 [[JapanFG/moodys-japan|Moody's]] 双评级 |
| 物业类型 | 办公 (东京甲级)、物流、酒店、零售、住宅公寓楼;开发风险资产罕见 |
| 受托人 | 发行 SPV 的信托银行受托人 |

### 管道型 CMBS — 休眠

管道型 CMBS 模式 (多贷款资产池、分散借款人基础、主服务机构运营) 在 2008-2010  困境周期之后于日本实际处于休眠状态。关于原因的公开来源解读:

2. 2013  后的日元曲线压缩使银行资产负债表上的无追索权贷款比 CMBS 融资贷款更便宜，移除了驱动管道型 CMBS 发起的利差套利。
3. 2010  后 [[real-estate-finance/j-reit-market-overview|J-REIT]] 股权迅速扩大，吸收了本会成为管道型 CMBS 借款人基础的大部分机构级商业物业。

### CMBS 的评级机构标准

| Element | Criteria emphasis |
|---|---|
| 评估 | 包含 DCF + 直接资本化 + 比较法的 [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI-compliant appraisal]] |
| 资本化率 | 针对 [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI cap-rate survey]] 及近期交易证据进行压力测试 |
| DSCR | 偿债覆盖率，针对再融资风险情景进行压力测试 |
| 租户集中度 | 单一租户 对 多租户;租约到期画像;租户信用 |
| 物业类型 | 办公 对 物流 对 酒店 对 零售 对 住宅 — 不同评级机构的损失假设各异 |
| 地理集中度 | 东京 CBD / 大阪 / 区域 |
| 发起方质量 | 发起方 SPV 股权层级、发起方业绩、发起方再融资能力 |
| 再融资风险 | 资本化率与利率曲线移动下的到期气球再融资情景 |

### RMBS 发起人格局

| Originator | RMBS role |
|---|---|
| [[policy-finance/japan-housing-finance-agency|JHF]] | 经由 Flat 35  买入 + Monthly Pass-Through MBS 的锚定 RMBS 发行体 |
| 大型银行 | 向 JHF 的 Flat 35  直接发起人;为自有组合循环的自前民间 RMBS 发行体 |
| 地方银行 | Flat 35  发起合作伙伴;偶尔为自有组合的民间 RMBS 发行体 |
| 信托银行 | 自有组合住房贷款的发起人;信托银行亦作为 JHF MBS 与民间 RMBS 双方的受托人 |
| 非银行住房贷款发起人 | 相对于银行渠道规模有限 |

### CMBS 发起人格局

| Originator | CMBS role |
|---|---|
| 大型银行企业房地产融资台 | 随后被证券化的无追索权贷款的发起 |
| 信托银行房地产融资部门 | 发起 + 承销结合 |
| 外资银行日本分行房地产融资台 | 为跨境投资者基础的发起;在外资银行撤退周期后缩减 |
| 大型银行证券子公司 | 发行中的承销 / 交易商角色 |

### 承销 / 交易商特许经营

日本 CMBS / 民间 RMBS 中的承销 / 交易商特许经营是集中的:

| Dealer | Franchise reading |
|---|---|
| [[securities-firms/mufg-morgan-stanley-securities|Mitsubishi UFJ Morgan Stanley Securities]] | MUFG 侧;经由 [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] 的深度信托银行联结 |
| [[securities-firms/smbc-nikko-securities|SMBC Nikko Securities]] | SMBC 侧;与 [[trust-banks/sumitomo-mitsui-trust|SMTB]] 的联结是跨集团而非集团内 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 瑞穗侧;经由 [[trust-banks/mizuho-trust-bank|Mizuho Trust]] 的深度信托银行联结 |

### 信托银行受托业务经济学

信托银行受托层在结构上很重要，因为日本的证券化 SPV 通常使用 信託受益権 (受益信托权益) 而非向发行 SPV 直接转让贷款资产。信托银行在 信託契約 下持有底层资产 (贷款或物业)，被转让和分档的是受益权益。这是日本 CMBS / RMBS 中的信托银行特许经营落在大型银行集团信托银行、而非像 [[trust-banks/master-trust-bank|MTBJ]] 或 [[trust-banks/custody-bank|CBJ]] 这样仅做托管的信托银行手中的原因之一 — 证券化受托是带手续费的前台业务，而非资产管理公用事业型业务。运营划分见 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]。

## 5. 评级机构格局

| Rating agency | JP CMBS / RMBS role |
|---|---|
| [[JapanFG/sp-global-ratings-japan|S&P Global Ratings Japan]] | 全球尺度标准;针对跨境投资者目标的 AAA 档所需 |
| [[JapanFG/moodys-japan|Moody's Japan]] | 全球尺度标准;与 S&P 相同的跨境用例 |
| Fitch Japan | n.d. — 未浮现公开的 Fitch JP CMBS / RMBS 评级清单;JP 结构化金融覆盖相对 JCR / R&I 较小 |

### 本土尺度 对 全球尺度

| Aspect | Domestic-scale rating | Global-scale rating |
|---|---|---|
| 参照范围 | JP 发行体 / 工具范围 | 全球发行体 / 工具范围 |
| 主权上限 | 实际为 JGB 上限 (AA+ / AAA 尺度) | 全球主权可比性 |
| 典型用途 | 日元投资者限额管理;JBA / 投信協会 报告 | 跨境投资者限额管理;巴塞尔风险权重底线 |
| 在 JP CMBS / RMBS 上的覆盖 | 高 (JCR + R&I 主导) | 选择性 (仅优先档，且仅当跨境分销证成成本合理时) |

### RMBS 投资者基础

| Investor type | Demand reading |
|---|---|
| 寿险公司 | 锚定买家 — JHF MBS 与优先民间 RMBS 很好地落入 ALM 账册的日元长资产桶;见 [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] |
| 大型银行 (自有账户) | 自有财库组合的买家;JHF MBS 的风险权重处理有利 |
| 地方银行 | 日元账册财库收益增强的买家 |
| 资产管理人 | 针对日元利差产品的固定收益委托的买家 |

### CMBS 投资者基础

| Investor type | Demand reading |
|---|---|
| 寿险公司 | 优先档的买家;夹层落入信用资产单元 |
| 地方银行 | 优先档的选择性买家;夹层偏好各异 |
| 资产管理人 | 信用委托分散的买家 |
| 外国投资者 | 选择性 — 通常仅在带全球尺度评级的跨境目标发行时 |

## Related

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
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[JapanFG/sp-global-ratings-japan]]
- [[JapanFG/moodys-japan]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- ARES (不动产证券化协会): 日本不动产证券化市场汇总统计。
- JPX: 证券化产品披露界面。
- JSDA (日本证券业协会) 証券化市場の動向調査: 按底层资产类型的逐年证券化发行 — https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html
- 住宅金融支援机构: 机构及 Monthly Pass-Through MBS 披露 — https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html (JHF MBS ≈ ¥26.3  万亿 累计发行 / ¥12.7  万亿 存量，FY2017  末)。
- JCR (日本格付研究所): 结构化金融评级标准与评级行动。
- R&I (格付投资信息中心): 结构化金融评级标准。
- S&P Global Ratings: 跨境结构化金融标准。
- Moody's: 跨境结构化金融标准。
- BoJ: 与证券化存量相关的汇总资金流统计。

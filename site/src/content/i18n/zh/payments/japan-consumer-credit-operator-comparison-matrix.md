---
source: payments/japan-consumer-credit-operator-comparison-matrix
source_hash: c993d4c4f5ab8842
lang: zh
status: machine
fidelity: ok
title: "日本消费信贷运营商比较矩阵"
translated_at: 2026-06-01T03:31:12.292Z
---

# 日本消费信贷运营商比较矩阵

## 长话短说

日本的“消费信贷”不是一个行业——它至少有**九个运营商类别**，它们在结帐时看起来相似，但拥有不同的许可证、不同的监管机构、不同的贷款上限、不同的利率上限和不同的消费者保护制度。如果读者将“カードローン”、“信贩”、“消费者金融”、“BNPL”、“自动自保”、“住宅贷款”、“教育贷款”、“小额信贷”和“PSP 嵌入信贷”归为一类，就会误读合并压力、监管风险、ABS 管道和银行邻接关系。在进行任何公司级分析之前，当问题是**运营商实际属于哪个消费信贷类别**时，此页面是 [[payments/INDEX|payments index]] 其余部分所指向的并排比较表面。

## 维基路线

它位于 [[payments/INDEX|payments index]] 下，作为跨类别消费者信用参考。读取时用 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 为 BNPL/信贩行，[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] 为卡端角色分离，[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 为跨方案比较本条目刻意补充，[[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] 为 METI 注册表行级源，[[financial-licenses/payment-license-stack|Japan payment license stack]] 为监管类别映射，[[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] 为房贷邻接的政策金融面。实体锚的示例为 [[consumer-finance/acom|ACOM]]、[[consumer-finance/aiful|AIFUL]]、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]] 和 [[card-issuers/orico|Orico]]。

## 九个操作员类别

FinWiki 保留九个类别（而不是传统的“卡/商贷/shinpan”三个类别）的原因是，BNPL、自动自保、住房贷款相邻、教育贷款、小额信贷和 PSP 嵌入信贷具有**不同的许可途径、不同的监管机构和不同的消费者保护制度**，即使消费者可见的产品看起来像是单一的“信贷”体验。

| # | 类别 | 日本人 | 主要法规 | 主调节器 |
|---|---|---|---|---|
| 1  | 发卡机构 | 信用卡公司/综合信用购买中介 | 分期付款销售法 | METI（经济产业省） |
| 2  | 消费金融/商科贷款 | 消费金融/放债人 | 放债商业法 | FSA（金融服务局） |
| 3  | 分期付款信用/shinpan | 赊销公司/个人赊购经纪人 | 分期付款销售法 | METI（经济产业省） |
| 4  | BNPL 纯业务 | BNPL / 后付费 | 分期付款销售法（选择性；适用豁免门槛） | 主要是经济产业省；钱包/资金转账重叠的 FSA |
| 5  | 汽车金融/汽车自保 | 汽车贷款/汽车信贷 | Installment Sales Act (个别 / 包括) + Money-Lending Act where unsecured | 主要是经济产业省；任何放贷部分的 FSA |
| 6  | 房贷毗邻（JHF路线） | 直接住房贷款/平 35  | JHF Act (独立行政法人住宅金融支援机构法) + Banking Act | MLIT（国土交通省）+MOF+银行方FSA |
| 7  | 教育贷款 | 教育贷款 | Banking Act (民间) + JFC Act (公的) | FSA（私人）+ MOF（公共/JFC） |
| 8  | 小额信贷 | 小额信贷 | 放债法（通常）或社会金融途径 | FSA 放贷；厚生省的一些社会信用渠道 |
| 9  | PSP-相邻信用（嵌入式 EC 信用） | PSP内置延期付款/EC嵌入式信用 | 分期付款销售法 + 资金转账/预付（若钱包链接） | METI + FSA（边界情况） |

每行都是一个独立的许可证堆栈。持有超过一项的运营商**不**自动成为控股公司——它更常见的是多牌照的销售金融/消费信贷运营商（例如，[[card-issuers/orico|Orico]]同时持有综合信用购买中介、个人信用购买中介和放贷业务；[[consumer-finance/aiful|AIFUL]]通过生命卡持有放贷+综合信用购买中介业务；[[card-issuers/jaccs|JACCS]]持有全部三项业务，再加上综合信用购买中介+个人信贷购买调解）。

## 比较矩阵 - 完整

| 方面 | 发卡机构 | 消费金融 | 分期付款信用（shinpan） | BNPL 纯业务 | 自动俘虏 | 住房贷款（JHF） | 教育贷款 | 小额信贷 | PSP-相邻信用 |
|---|---|---|---|---|---|---|---|---|---|
| **执照** | 分期付款销售法（综合信用购买调解） | Money-Lending Business Act (贷金业) | 分期付款销售法（个人赊购调解+常包容） | 分期付款销售法（第二类≤2 mo+个别豁免门槛） | Installment Sales Act (个别 / 包括 mostly) + Money-Lending Act sometimes | JHF法+银行法（私人方面） | 银行法 + JFC 法（公共侧） | 放债法通常 | 分期付款销售法+支付服务法（混合） |
| **调节器** | 放 | 金融服务管理局 | 放 | METI（+ 钱包链接的 FSA） | 主要是经济产业省 | 国土交通省+财政部+银行方金融服务管理局 | 金融服务管理局+MOF | 主要是FSA | METI + FSA 边界 |
| **注册登记处** | 日本经济产业省注册综合信用购买调解员名单（2026-04 月末的241 ） | FSA放债人登记名单 | 日本经济产业省注册个人信用购买调解员名单（2026-04 月末的138 ） | 混合 — METI II 类 / 个别豁免 + FSA II / III 类资金转移 | METI 个别/包括 lists | JHF参与金融机构名单（私人）+JHF direct | 银行产品披露+JFC产品披露 | FSA 放债人注册 + JICC / CIC | METI注册+FSA资金转账服务+第三方预付款 |
| **总金额限制（借贷上限）** | 是的，适用于预付现金部分；循环购物使用不同的规则 | 是 - 年收入硬顶 1/3  | 无（分期销售法有预估应付金额调查，而非总金额规定） | 对于 ≤ 2 mo 的延期付款，实际上不适用；已注册的完整个人信贷购买调解规则 | 否（分期付款销售法路径） | 否——担保+政策金融剥离 | 民间不行（银行产品）； JFC 公共贷款否 | 是（1/3 cap 适用） | 取决于实际登记应收账款的许可证 |
| **利率上限** | 利息限制法15-20%（预付现金）；分期付款销售法 购物有效年利率 | 利息制限法 15-20% + 出资法 20% criminal cap | 利息限制法+分期销售法 实际年利率披露 | 一般为消费者 0%（商家支付 MDR 等值）；滞纳金模式 | 分期付款销售法 有效年利率 | 私人住房贷款：银行市场利率；平板 35  固定式 | 银行贷款：市场利率； JFC：低固定 | 利息限制法+投资法 20% | 混合 — 取决于预订许可证 |
| **了解您的客户/反洗钱义务** | 《防止刑事收益转移法》（《刑事收益法》）的全部义务 | 刑事收益法 + 放债商业法 KYC 严格 | 刑事收益法+分期付款销售法 会员店调查 | 刑事收益法对小额票据的适用程度较低；超过阈值的地方已满 | 犯收法 + dealership KYC | 犯收法 + bank-side full KYC | 犯收法 + bank-side full KYC | 犯收法 + 贷金业 KYC | 犯收法 + wallet / 资金移动业 KYC where applicable |
| **披露义务** | Installment Sales Act 実质年率, 加盟店表示, security guideline (J-CSC) | 放债业务法第 13  文件交付、第 17  合同文件 | Installment Sales Act 実质年率, 加盟店表示, 个别 contract | METI 后払い FAQ guidance + 消费者契约法 | 分期销售法 实际年利率+经销商披露 | 重要事项声明+银行方披露 | 银行端披露+JFC产品披露 | 放债商业法文章 13/17  | METI + 消费者契约法 + wallet T&C |
| **违约率披露** | 发行人IR（按部门划分的年度贷款损失率） | 有报 + JFSA aggregate stats | Shinpan IR（分部级信用成本率） | 有限 — Paidy 运营商 IR（如果列出）（例如，Paidy 通过 PayPal 披露） | OEM 财务部门 IR（例如 OEM 合并报告中嵌入的丰田财务披露） | JHF annual report + bank-side 贷倒率 | 银行IR+JFC年度报告 | 放债 IR（如果上市）；否则 JFSA 总计 | 有限的;大部分在父 PSP IR 内 |
| **负债/坏账拨备** | IFRS 9 / J-GAAP津贴+分期销售法会员店风险负担 | IFRS 9 / J-GAAP 条款、超额支付遗留条款 | IFRS 9 / J-GAAP 引当金 + 加盟店求偿 | 通常由商家+运营商共同共享 | OEM 保证或经销商追索模式常见 | 银行准备金 + JHF 信用增级 35  回购 | 银行准备金 + JFC 财政支持 | 放贷业务准备金+超额支付风险挥之不去 | 通过预订许可证混合 |
| **报告注册途径** | 日本经济产业省注册综合信用购买中介公司 PDF 列表 | FSA放债人登记名单（中央+都道府县） | 日本经济产业省注册个人信用购买中介公司 PDF 列表 | METI 注册（如适用）+ 延期付款行政处置状态页 | METI 个别/包括 lists | JHF经手金融机构名单+JHF Direct | 全银协披露的银行贷款产品； JFC 产品页面 | FSA放债人登记名单 | METI + FSA 交叉注册 |
| **近期监管压力** | 修订分期销售法（2018, 2020, 2024 BNPL澄清）； J-CSC指南6.0/6.1 （EMV 3-DS强制2025-03 对于EC） | 修订《放债业务法》（2010-06 全面执行：20%上限+1/3 金额规定）；超额付款逐步减少 | 改正割賦販売法 (2018 加盟店調査強化); 2020 amendment for 認定包括/少額包括 | 2024 BNPL 对分期付款销售法修正案的澄清； CAA/消费者事务局对滥用现金兑换发出警告 | EV/KINTO认购转型压力； OEM自保合并讨论 | 平35 滥用问题（2019-）+JHF投资者基数转移 | 没有专业；学费上涨导致教育贷款需求压力 | Limited national framework; 社会的金融 discussions ongoing | METI + FSA 对嵌入式结账信用的边界澄清 |
| **证券化/ABS管道** | 重磅——信用卡应收ABS（V-RACE、S-RACE、乐天卡ABS例行发行） | Heavy — ACOM / SMBCCF / AIFUL 的消费贷款 ABS 例程 | 重磅——汽车贷款ABS（汽车/购物信贷ABS例程） | 新兴——PayPal旗下Paidy应收账款证券化路线 | 重磅——丰田金融/本田金融/日产金融汽车ABS例程 | 重磅 — 持平 35 MBS JHF 例行发行（JHF MBS，日本最大的 MBS 发行人） | 有限——银行贷款组合很少被证券化用于纯教育池 | 最小 | 最小 |
| **银行毗邻** | Megabank-FG 一致：[[card-issuers/smbc-card\|SMBC Card]] (SMFG)、[[card-issuers/mufg-nicos\|MUFG NICOS]] (MUFG)、[[card-issuers/jcb\|JCB]]（多银行）、[[card-issuers/rakuten-card\|Rakuten Card]] (Rakuten FG)、[[card-issuers/paypay-card\|PayPay Card]] (PayPay FG) | 混合：[[consumer-finance/smbc-consumer-finance\|SMBC Consumer Finance / Promise]]（SMFG 100%）、[[consumer-finance/acom\|ACOM]]（MUFG 39.6% 权益法）、[[consumer-finance/aiful\|AIFUL]]（独立） | 银行-FG 一致：[[card-issuers/jaccs\|JACCS]]（MUFG 权益法）、[[card-issuers/orico\|Orico]]（瑞穗 + 伊藤忠）、[[card-issuers/aplus\|APLUS]]（SBI Shinsei）、Credit Saison（独立/瑞穗相邻） | 主要是非银行：Paidy (PayPal)、Atone (Net Protections)、NP 后払い (Net Protections) — 但银行 FG 发卡机构也扩展了类似 BNPL 的产品 | OEM自保：丰田金融（丰田）、本田金融、日产金融服务——非银行自保，有时与银行合作 | 银行主导（私人）：所有大型银行+区域银行； JHF是政策性金融非银行 | 银行贷款（民间教育贷款）； JFC 是政策性金融非银行机构 | 通常是非银行社会金融+放贷小型业务 | 如果父 PSP 与银行相邻，则银行-FG 对齐 |
| **卡品牌接受依赖性** | 直接 — 发卡机构带有 Visa / Mastercard / JCB / Amex / Diners 品牌 | 无（现金贷款，非卡品牌传递） | 混合型 — 许多 Shinpan 还发行品牌卡（Orico 卡、JACCS 卡） | 尽管有些 BNPL 提供虚拟品牌卡，但通常在结账点（运营商直接）没有 | 贷款产品层面没有 | 贷款产品层面没有 | 没有任何 | 没有任何 | 视情况而定 — 某些 PSP 信用路线通过品牌卡后端 |

### 1。发卡机构（信用卡公司/综合信用购买中介机构）

Card issuers are **包括信用購入あっせん業者** under the Installment Sales Act, registered with METI (241 registrations as of 2026-04 month-end per the METI 登録包括信用購入あっせん業者 list). The card issuer is the entity that screens cardholders, sets credit limits, books the receivable, and runs fraud monitoring. Bank-FG anchors: [[card-issuers/smbc-card|SMBC Card]] (SMFG), [[card-issuers/mufg-nicos|MUFG NICOS]] (MUFG), [[card-issuers/jcb|JCB]] (multi-bank consortium). Non-bank-FG anchors: [[card-issuers/rakuten-card|Rakuten Card]] (Rakuten FG), [[card-issuers/paypay-card|PayPay Card]] (PayPay FG), [[card-issuers/aeon-financial-service|AEON Financial Service]] (AEON retail-FG).

Cash-advance (キャッシング) inside a card product crosses into the 貸金業 regime — that portion is subject to 総量規制 (1/3 of income cap) and the 利息制限法 20% interest cap, while the **shopping** portion is governed by the Installment Sales Act 支払可能見込額調査 rather than 総量規制. This dual-regime structure is unique to card issuers.

### 2。消费金融/shoko-loan（消费金融/放债人）

Consumer finance operators are 貸金業者 under the Money-Lending Business Act (貸金業法), registered with FSA via 中央 (財務局) or 都道府県 routes. The current "3 大消費者金融" are [[consumer-finance/acom|ACOM]] (MUFG equity-method 39.6%), [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG 100% subsidiary), and [[consumer-finance/aiful|AIFUL]] (independent, founder-family controlled). After 武富士 collapsed via 会社更生 in 2010, the segment consolidated around these three.

The defining regulatory event is the **改正貸金業法** that fully enforced in 2010-06: 利息制限法 cap of 20% (15% / 18% / 20% tiered by principal size) replaced the old 出資法 29.2% gray-zone, and 総量規制 (1/3 of annual income hard cap) became binding. The 過払金 (overcharged-interest refund) wave that followed is responsible for the [[consumer-finance/aiful|AIFUL]] 事業再生 ADR (2009-09), the MUFG TOB of [[consumer-finance/acom|ACOM]] (2008-10), and the SMFG full-subsidiary-isation of Promise.

银行方面的解决方法是**银行卡贷款**——银行发行的产品受《银行法》管辖，历来不面临贷款。 ACOM、Promise 和 AIFUL 都经营银行担保副业，通过担保银行卡贷款敞口来记入收入。

### 3。分期付款信用/新盘（信用销售公司/个人信用购买经纪人）

Shinpan operators are **個別信用購入あっせん業者** under the Installment Sales Act (138 registrations as of 2026-04 month-end per METI 登録個別信用購入あっせん業者 list). The distinguishing feature is that the loan is tied to a specific purchase (個品割賦), often via a merchant agreement (加盟店) — auto-dealership ローン, リフォームローン, 教育ローン (private side), 楽器 / 家電 / 医療 / 住宅設備. Anchors: [[card-issuers/orico|Orico]] (Mizuho + Itochu, auto-loan #1), [[card-issuers/jaccs|JACCS]] (MUFG equity-method, auto/education/reform 3 lanes), [[card-issuers/aplus|APLUS]] (SBI Shinsei), Credit Saison (independent / Mizuho-adjacent, card-heavy).

Shinpan operators typically hold **multiple licenses** — they almost always combine 個別信用購入あっせん with 包括信用購入あっせん (for their issued cards), 貸金業 (for カードローン), 銀行保証 (for bank-cardloan guarantee), and often 集金代行 (for B2B 公共料金 / 継続課金 collection). The 2018 改正割賦販売法 strengthened 加盟店調査 obligation, which raised onboarding cost for marginal merchant relationships.

### 4。 BNPL 纯游戏（BNPL / 后付费）

BNPL is the **most regulatory-ambiguous** category. Under the Installment Sales Act, deferred-payment of **≤ 2 months and single-payment** is generally not 包括信用購入あっせん, and individual deferred-payment under certain merchant-fronted models can avoid 個別信用購入あっせん registration via 加盟店表示 routes. The 2020 改正割賦販売法 (effective 2021-04) added an 認定包括信用購入あっせん業者 / 少額包括信用購入あっせん業者 framework explicitly to bring some BNPL operators under a lighter version of the 包括 regime; the 2024 BNPL clarification round continued tightening.

锚定：[[payment-firms/paidy|Paidy]]（由 PayPal 2021-09  收购，价格约为 2.7 bn 美元），Atone / NP Postpaid（净保护）。 [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 页面逐步完成每个产品的分类测试。消费者事务局 (CAA) 对 BNPL（稍后付款）的**现金兑换滥用**以及使延期付款感觉像现金一样的用户体验模式保持着主动警告渠道 — 请参阅 CAA 的支付问题警告页面。

### 5。汽车金融/自动自保（汽车贷款/汽车信贷）

汽车金融有两种结构形式：（a）通过分期销售法通过经销加盟店网络预订的新盘汽车贷款（例如，[[card-issuers/orico|Orico]]是国内#1 in汽车贷款，[[card-issuers/jaccs|JACCS]]是#2-3），以及（b）**OEM auto-captive**——丰田金融（丰田）、本田金融、日产金融服务、三菱日联租赁和金融（现为三菱 HC Capital）等——主要是为了承保母公司 OEM 的汽车销售。

OEM自营预订通常是分期付款销售法个别+包括（对于OEM品牌卡，如果有的话）+贷金业（有时）。 OEM 提供显性或隐性的信用支持（KINTO 式认购的剩余价值担保），相对于独立的 Shinpan 汽车贷款账簿，这减少了自保公司的坏账拨备需求。汽车 ABS 市场是日本最大的非 MBS 消费贷款 ABS 领域——丰田金融是常规基准发行人。 EV/KINTO 认购/汽车共享趋势对新盘和自保汽车贷款所共享的经销商信贷渠道构成了结构性压力。

### 6。房贷相邻（直接房贷/单位35）

住房贷款主要是《银行法》下的银行-FG世界，但**政策-金融叠加**很重要：[[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF / 住宅金融支援機構)]]运行**furatto 35**——发放银行出售给JHF的长期固定利率住房贷款，JHF将其打包为机构MBS。 JHF是日本最大的MBS发行人。

Regulator: MLIT (国交省) is the primary supervisor for JHF (housing-policy side); MOF supervises the JHF Act financial side; the originating bank side is FSA-supervised under the Banking Act. The フラット 35 不正利用問題 (2019-) — investor-rental-property purchase misrepresented as owner-occupied — triggered a structural tightening of JHF's 取扱金融機関 due-diligence requirements. JHF is **not** an Installment Sales Act or Money-Lending Act operator; it is a 独立行政法人 policy-finance institution and sits outside the METI / FSA consumer-credit registries.

### 7。教育贷款

教育贷款按照**公共/私人**线划分。私人贷款由银行根据《银行法》提供（无需注册《分期付款销售法》，因为它是私人贷款），通常打包为无担保教育贷款产品。公共方面由 **日本金融公司 (JFC)** 根据 JFC 法案运营 - JFC 的教育贷款是主要的公共教育贷款，相对于私人银行产品，利率固定较低。 JFC 受 MOF（财政部）监管。

教育贷款账簿通常不会被证券化为独立的教育贷款资产支持证券——银行方风险敞口位于更广泛的无担保消费贷款账簿中。 Shinpan 运营商（例如 [[card-issuers/jaccs|JACCS]]）还根据《分期付款销售法》个人途径提供教育机构渠道，这是继银行-私人和 JFC-公共之后的第三条教育信贷途径。

### 8。小额信贷

Japan does not have a developed national microcredit framework comparable to Bangladesh / India microfinance. Where microcredit-style small-ticket consumer credit exists in Japan, it is usually booked under the **Money-Lending Act** by small 貸金業者, which means it inherits the 利息制限法 20% cap, 出資法 20% criminal cap, 総量規制 1/3 cap, and 犯収法 KYC obligations of the full 貸金業 regime.

存在社会金融和非营利组织引导的小额贷款渠道（例如，厚生劳动省资助的都道府县社会福利委员会），但这些不是放贷渠道，而是政策福利渠道。因此，在日本对“小额信贷”进行细分时，需要检查运营商是放贷（由 FSA 监管）还是社会福利（由 MHLW 监管），因为消费者保护制度、注册途径和披露义务完全不同。

### 9。 PSP-邻接信用（电子商务嵌入信用）

PSP 相邻信用是比较矩阵的**边界情况**。当 PSP（支付服务提供商）或钱包运营商延长结账时间信贷产品时，应收账款可以根据 (a) 分期销售法（如果运营商持有注册）进行登记；(b) 支付服务法（如果结构为钱包余额预付款）；(c) 支付服务法（如果结构为预付储值扩展）；或 (d) 放贷法（在极少数结构情况下）。因此，相同的结账用户体验可以转换为不同的许可证，具体取决于实际记账应收款的法人实体。

此类别的存在是因为 Mercari/Merpay（其中 Pay Later 功能跨越资金转账 + PayPay 线路）、PayPay（其中 Pay Later 使用 [[card-issuers/paypay-card|PayPay Card]] 作为信用预订）以及 EC 市场的平台端信用实体扩展等运营商。 [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 页面和 [[financial-licenses/payment-license-stack|payment license stack]] 页面给出了每个产品的分类测试。

## 信用信息局的足迹

消费信贷运营商的报告/查询义务取决于其许可证类别和局成员资格。下设三个主要局：

| 局 | 会员基础 | 典型运营商覆盖范围 |
|---|---|---|
| **JICC** (日本信用情报机构) | 主要是放贷行业+shinpan | 消费金融/商工贷款、shinpan、部分 BNPL |
| **CIC**（信用信息中心） | 大多数是分期付款销售法注册者 | 发卡机构、新盘、汽车金融、个人信用购买中介机构 |
| **国家银行个人信用信息中心（KSC）** | 银行系统 | Banks, 信用金库, 信用组合 — housing loan + education loan + bank card-loan |

A **3 大消費者金融** operator is typically a member of JICC + CIC + KSC, since cross-bureau check is the basis of 総量規制 verification. A pure BNPL operator may only be a JICC or CIC member depending on its license stack. JHF (フラット 35) reports through the bank-originator side to KSC.

## 银行邻近地图（合并）

读取类别 1, 2, 3, 4, 5, 6, 7  一起，日本消费信贷的银行-FG 邻接图为：

| FG | 发卡机构 | 消费金融 | 新盘 | 笔记 |
|---|---|---|---|---|
| [[megabanks/mufg|MUFG]] | [[card-issuers/mufg-nicos|MUFG NICOS]] (100%) | [[consumer-finance/acom|ACOM]]（39.6%权益法） | [[card-issuers/jaccs|JACCS]]（权益法） | 3 一个 FG 内的消费信贷足迹 |
| [[megabanks/smfg|SMFG]] | [[card-issuers/smbc-card|SMBC Card]] (100%) | [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (100%) | （内部没有主要的 Shinpan；与 Credit Saison 等合作） | 2系列，与shinpan作为合伙而非所有权 |
| [[megabanks/mizuho-fg|Mizuho FG]] | （UC 卡遗产；合作伙伴关系） | （没有主要的独立） | [[card-issuers/orico|Orico]]（权益法+伊藤忠商事） | Shinpan重，卡片轻 |
| [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] | （新生金融卡产品） | 新生金融 / Lake ALSA（原 GE） | [[card-issuers/aplus|APLUS]]（集团公司） | 通过遗留的 GE / Lake / APLUS 书籍获得重度消费信贷 FG |
| 独立/非银行-FG | [[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] | [[consumer-finance/aiful|AIFUL]]（创始人家族） | Credit Saison（独立），[[card-issuers/aplus|APLUS]]（SBI 方） | 银行-FG 所有权不存在或部分所有权的情况 |

MUFG 3 线足迹（NICOS 卡 + ACOM 消费金融 + JACCS shinpan）是日本消费信贷中最集中的银行 FG 头寸。三菱日联金融集团最终是否将其整合为统一的消费信贷子公司，还是将它们保留为单独的上市/权益法实体，是一个长期存在的结构性问题。

## 近期监管压力

| 日期 | 来源 | 发生了什么变化 |
|---|---|---|
| 2006-01-13 | 最高法院 | 灰色地带利率有效裁决使放债业务法条款无效，引发超额退款浪潮 |
| 2006-12  | 国民议会 | 修改后的放债业务法通过（20%利息上限+1/3 总数量上限） |
| 2008-04  | 金融服务管理局 | 针对 [[consumer-finance/aiful|AIFUL]] 的业务改进令（催收-实践问题）、全部业务暂停令 |
| 2008-10-22 | 三菱日联金融集团TOB | MUFG 收购 [[consumer-finance/acom|ACOM]] 的 ~ 40%，权益法合并 |
| 2010-06  | 金融服务管理局 | 修订后的放债业务法全面执行（20%上限+1/3 总数量上限，全面执行） |
| 2010-09  | 武藤 | Takefuji filed 会社更生 (corporate reorganization), industry consolidates to 3 大消费者金融 |
| 2018  | 放 | 修订分期付款销售法——加强商户调查义务、卡数据安全堆栈 |
| 2020  修订 | 放 | 分期销售法修订案——BNPL认证综合信用购买中介机构+小额综合信用购买中介机构框架 |
| 2021-04  | 放 | 2020  修订分期销售执法 |
| 2024  | 日本经济产业省 / 日本航空协会 | BNPL澄清轮，后払い运营商行政行动页面（atobaraigyouseisyounnojoukyou.html） |
| 2025-03  | 日本经济产业省 / J-信用协会 | J-CSC 指南 6.0  下的 EC 卡支付强制使用 EMV 3-DS（请参阅 [[payments/japan-card-security-authentication-controls|card security and authentication controls]]） |
| 进行中 | CAA（消费者事务局） | 对 BNPL 现金兑换滥用以及使延期付款感觉像现金一样的用户体验模式发出积极警告 |

2010-06  修订后的放贷业务执法是现代日本消费信贷中**单一最大的结构性事件**——它将消费金融从 4 强+多小格局整合到目前的 3  大（ACOM、Promise、AIFUL）+银行卡贷款合作伙伴关系，退款浪潮消耗了运营商十年的大部分时间股权。

## 证券化/ABS 管道摘要

| 类别 | 常规ABS/MBS管道 | 评论 |
|---|---|---|
| 发卡机构 | 重磅——信用卡应收ABS（V-RACE、S-RACE、乐天卡ABS） | 银行-FG发卡机构定期发卡；通过 SPC 的非银行 FG 发卡机构 |
| 消费金融 | Heavy — ACOM / SMBCCF / AIFUL 的消费贷款 ABS 例程 | 超额支付浪潮后，ABS是稳定的二次融资线 |
| Shinpan（自动购物积分） | 重磅——汽车贷款+购物信用ABS | Orico / JACCS / APLUS 常规管道 |
| 法国国家石油公司 | 新兴——PayPal所有权下的Paidy应收账款证券化路线 | 规模仍然很小，但管道正在开通 |
| 自动捕获 (OEM) | 重磅——丰田金融/本田金融/日产金融汽车ABS例程 | 最大的非 MBS 消费贷款 ABS 细分市场 |
| 住房（JHF） | 重型—平35 机构MBS例程 | JHF是日本最大的MBS发行人 |
| 教育贷款 | 最小作为独立池 | 银行端汇总，而非单独 |
| 小额信贷 | 最小 | 对于 ABS 经济来说太小 |
| PSP-相邻 | 最小 | 汇总到母公司的其他 ABS 管道（如果有）中 |

ABS 维度对于理解**每个运营商如何为自己融资**很重要——重度 ABS 类别可以在没有比例资产负债表资本的情况下维持账面快速增长，而轻量 ABS 类别（小额信贷、教育贷款、PSP 相关）则受到母公司资产负债表能力的增长限制。这是实现经常性证券化（PayPal 下的 Paidy）的 BNPL 运营商相对于通过股本融资的 BNPL 运营商获得真正资本效率的原因之一。

## 有关的

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/INDEX]]
- [[consumer-finance/acom]]
- [[consumer-finance/aiful]]
- [[consumer-finance/smbc-consumer-finance]]
- [[card-issuers/aplus]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/smbc-card]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/jcb]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/paypay-card]]
- [[card-issuers/aeon-financial-service]]
- [[payment-firms/paidy]]
- [[payment-firms/bnpl-landscape]]
- [[policy-finance/japan-housing-finance-agency]]
- [[INDEX|FinWiki index]]

## 来源

- 日本经济产业省分期付款销售法门户网站：https://www.meti.go.jp/policy/economy/consumer/credit/
- METI 信用交易指数：https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI 注册运营商列表门户：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigousyaitiran.html
- 日本经济产业省注册综合信用购买调解员 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI 注册个人信贷购买调解员 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI信用卡号码处理协议签约经营者PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI 分期付款销售法付款后常见问题解答：https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- 日本经济产业省修订分期销售法页面：https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- FSA 放贷法门户网站：https://www.fsa.go.jp/menkyo/kashikin/
- FSA 许可/注册运营商门户：https://www.fsa.go.jp/menkyo/menkyo.html
- FSA 预付政策门户网站：https://www.fsa.go.jp/policy/prepaid/
- JICC (日本信用情报机构): https://www.jicc.co.jp/
- CIC（信用信息中心）：https://www.cic.co.jp/
- 日本信用协会 — 分期付款销售法消费者页面：https://www.j-credit.or.jp/customer/sales_law/
- JHF (住宅金融支援机构): https://www.jhf.go.jp/
- JFC (日本政策金融公库): https://www.jfc.go.jp/
- CAA（消费者事务局）付款麻烦警告：https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/ payment.html
- 每个运营商的IR /公司披露（公开分）：[[consumer-finance/acom|ACOM]]（TSE STD 8572），[[consumer-finance/aiful|AIFUL]]（TSE PRIME 8515），[[card-issuers/jaccs|JACCS]]（TSE PRIME 8584），[[card-issuers/orico|Orico]]（TSE PRIME） 8585）、[[card-issuers/aplus|APLUS]]（SBI集团公司网站）、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（SMFG合并）

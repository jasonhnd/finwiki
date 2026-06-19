---
source: payments/japan-consumer-credit-operator-comparison-matrix
source_hash: 2dfc88f5aaadbef9
lang: zh
status: machine
fidelity: ok
title: "日本消费者信用运营方比较矩阵"
translated_at: 2026-06-19T06:09:18.151Z
---

# 日本消费者信用运营方比较矩阵

## TL;DR

日本的「消费者信用」并非一个行业——它至少是 **九个运营方类别**，在结算时看似相似，却坐落于不同的牌照、不同的监管机关、不同的放贷上限、不同的利率上限和不同的消费者保护体制之上。若读者将カードローン、信販、消費者金融、BNPL、汽车自保（auto-captive）、住宅ローン、教育ローン、微型信贷（microcredit）和 PSP 嵌入式信用平板化为一个桶，便会误读并购压力、监管敞口、ABS 流水线和银行邻接性。本页面正是这样一个并列比较界面：当问题是在任何公司层面分析之前 **某运营方实际属于哪一个消费者信用类别** 时，[[payments/INDEX|payments index]] 的其余部分会指向它。

## Wiki 路径

本页面归属于 [[payments/INDEX|payments index]]，作为跨类别的消费者信用参照。请与 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 一并阅读了解 BNPL / 信販 这一条线，[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] 了解卡片侧的角色分离，[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 了解本条目刻意补充的跨方案比较，[[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] 了解经产省登记的行级来源，[[financial-licenses/payment-license-stack|Japan payment license stack]] 了解监管类别映射，以及 [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] 了解住房贷款邻接性的政策金融侧。示例的主体锚点为 [[consumer-finance/acom|ACOM]]、[[consumer-finance/aiful|AIFUL]]、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]] 和 [[card-issuers/orico|Orico]]。

## 九个运营方类别

FinWiki 之所以保留九个类别（而非传统的「卡 / 商工贷 / 信販」三类），是因为 BNPL、汽车自保、住房贷款邻接、教育贷款、微型信贷和 PSP 嵌入式信用具有 **不同的牌照路径、不同的监管机关和不同的消费者保护体制**，即便面向消费者可见的产品看起来像是单一的「信用」体验。

| # | 类别 | 日文 | 主要法令 | 主要监管机关 |
|---|---|---|---|---|
| 1 | 发卡机构 | クレジットカード会社 / 包括信用購入あっせん業者 | 分期销售法（割賦販売法） | 经产省（経産省） |
| 2 | 消费金融 / 商工贷 | 消費者金融 / 貸金業者 | 贷金业法（貸金業法） | 金融厅（金融庁） |
| 3 | 分期信用 / 信販 | 信販会社 / 個別信用購入あっせん業者 | 分期销售法（割賦販売法） | 经产省（経産省） |
| 4 | BNPL 纯玩家 | BNPL / 後払い | 分期销售法（选择性；适用豁免阈值） | 主要为经产省；钱包/资金移动重叠处为金融厅 |
| 5 | 汽车金融 / 汽车自保 | 自動車ローン / オートクレジット | 分期销售法（個別 / 包括）+ 无担保处适用贷金业法 | 主要为经产省；任何贷金业部分为金融厅 |
| 6 | 住房贷款邻接（JHF 路径）| 住宅ローン直接型 / フラット 35 | JHF 法（独立行政法人住宅金融支援機構法）+ 银行法 | 国交省（国交省）+ MOF + 银行侧金融厅 |
| 7 | 教育贷款 | 教育ローン | 银行法（民間）+ JFC 法（公的） | 金融厅（民間）+ MOF（公的・JFC） |
| 8 | 微型信贷 | マイクロクレジット | 贷金业法（多数情形）或社会金融路径 | 贷金业处为金融厅；部分社会信用渠道为厚劳省 |
| 9 | PSP 邻接信用（嵌入式 EC 信用）| PSP 内蔵後払い / EC 埋込型クレジット | 分期销售法 + 钱包连接处的资金移动/预付 | 经产省 + 金融厅（边界情形） |

每一行都是一套独立的牌照栈。持有多于一套牌照的运营方 **并不** 自动成为控股公司——更多情况下它是多牌照的销售金融 / 消费者信用运营方（例如：[[card-issuers/orico|Orico]] 同时持有包括信用購入あっせん、個別信用購入あっせん和貸金業；[[consumer-finance/aiful|AIFUL]] 通过 Life Card 持有貸金業 + 包括信用購入あっせん；[[card-issuers/jaccs|JACCS]] 持有这三者外加包括信用購入あっせん + 個別信用購入あっせん）。

## 比较矩阵 — 完整

| 维度 | 发卡机构 | 消费金融 | 分期信用（信販） | BNPL 纯玩家 | 汽车自保 | 住房贷款（JHF） | 教育贷款 | 微型信贷 | PSP 邻接信用 |
|---|---|---|---|---|---|---|---|---|---|
| **牌照** | 分期销售法（包括信用購入あっせん） | 贷金业法（貸金業） | 分期销售法（個別信用購入あっせん + 常含包括） | 分期销售法（Type II ≤ 2 个月 + 個別豁免阈值） | 分期销售法（大多为個別 / 包括）+ 有时贷金业法 | JHF 法 + 银行法（私营侧） | 银行法 + JFC 法（公共侧） | 通常为贷金业法 | 分期销售法 + 资金结算法（混合） |
| **监管机关** | 经产省 | 金融厅 | 经产省 | 经产省（钱包连接处 + 金融厅） | 主要为经产省 | 国交省 + MOF + 银行侧金融厅 | 金融厅 + MOF | 主要为金融厅 | 经产省 + 金融厅边界 |
| **登记名录** | 经产省 登録包括信用購入あっせん業者 名录（截至 2026-04 月末 241 ）| 金融厅 貸金業者登録 名录 | 经产省 登録個別信用購入あっせん業者 名录（截至 2026-04 月末 138 ）| 混合 — 经产省 Type II / 個別豁免 + 金融厅 Type II / III 资金移动 | 经产省 個別/包括 名录 | JHF 参与金融机构名录（私营）+ JHF 直接 | 银行产品披露 + JFC 产品披露 | 金融厅 貸金業者登録 + JICC / CIC | 经产省 登録 + 金融厅 資金移動業 + 第三者型前払 |
| **总量规制（放贷上限）** | 现金借支（キャッシング）部分适用；循环购物用不同规则 | 适用 — 年收入的 1/3 硬上限 | 无（分期销售法以支払可能見込額調査替代総量規制）| ≤ 2 个月后付款实际上无；登记处适用完整個別信用購入あっせん规则 | 无（分期销售法路径）| 无 — 担保 + 政策金融豁免 | 民間（银行产品）无；JFC 公共贷款亦无 | 适用（1/3 上限适用）| 取决于实际计入债权的牌照 |
| **上限金利（利率上限）** | 利息制限法 15-20%（现金借支）；购物适用分期销售法 実質年率 | 利息制限法 15-20% + 出資法 20% 刑事上限 | 利息制限法 + 分期销售法 実質年率 披露 | 对消费者一般为 0%（商户支付 MDR 等值）；滞纳金模型 | 分期销售法 実質年率 | 民間 住房贷款：银行市场利率；フラット 35 固定 | 银行贷款：市场利率；JFC：低固定 | 利息制限法 + 出資法 20% | 混合 — 取决于计入牌照 |
| **KYC / AML 义务** | 犯罪収益移転防止法（犯収法）完整义务 | 犯収法 + 贷金业法 KYC（严格）| 犯収法 + 分期销售法 加盟店調査 | 小额时犯収法从轻；超阈值时完整 | 犯収法 + 经销商 KYC | 犯収法 + 银行侧完整 KYC | 犯収法 + 银行侧完整 KYC | 犯収法 + 贷金业 KYC | 犯収法 + 适用处钱包 / 資金移動業 KYC |
| **披露义务** | 分期销售法 実質年率、加盟店表示、安全指南（J-CSC）| 贷金业法 13 条 书面交付、17 条 合同书面 | 分期销售法 実質年率、加盟店表示、個別 合同 | 经产省 後払い FAQ 指引 + 消費者契約法 | 分期销售法 実質年率 + 经销商披露 | 重要事項説明書 + 银行侧披露 | 银行侧披露 + JFC 产品披露 | 贷金业法 13/17 条 | 经产省 + 消費者契約法 + 钱包 T&C |
| **违约率披露** | 发卡机构 IR（分部年度 貸倒率）| 有报 + 金融厅汇总统计 | 信販 IR（分部级 信用コスト率）| 有限 — 上市处为后付款运营方 IR（例：经由 PayPal 披露的 Paidy）| OEM 金融部门 IR（例：嵌入 OEM 并表报告的 Toyota Finance 披露）| JHF 年度报告 + 银行侧 貸倒率 | 银行 IR + JFC 年度报告 | 上市处为贷金业 IR；否则为金融厅汇总 | 有限；大多在母 PSP 的 IR 内 |
| **负债 / 坏账拨备** | IFRS 9 / J-GAAP 引当金 + 分期销售法 加盟店リスク負担 | IFRS 9 / J-GAAP 引当金、過払金引当 的遗留 | IFRS 9 / J-GAAP 引当金 + 加盟店求償 | 通常为商户 + 运营方共担 | OEM 担保或经销商追索模型常见 | 银行 引当金 + 用于フラット 35 回购的 JHF 信用补充 | 银行 引当金 + JFC 财政支撑 | 贷金业 引当金 + 過払金 风险残留 | 按计入牌照混合 |
| **报告名录路径** | 经产省 登録包括信用購入あっせん業者 PDF 名录 | 金融厅 貸金業者登録 名录（中央 + 都道府县）| 经产省 登録個別信用購入あっせん業者 PDF 名录 | 经产省 登録（适用处）+ 後払い行政処分状況 页面 | 经产省 個別/包括 名录 | JHF 取扱金融機関一覧 + JHF 直接 | 全銀協 披露中的银行贷款产品；JFC 产品页 | 金融厅 貸金業者登録 名录 | 经产省 + 金融厅跨名录 |
| **近期监管压力** | 改正割賦販売法（2018, 2020, 2024 BNPL 厘清）；J-CSC 指南 6.0/6.1 （EC 处 2025-03 起 EMV 3-DS 强制）| 改正貸金業法（2010-06 完全施行：20% 上限 + 1/3 総量規制）；過払金 收尾 | 改正割賦販売法（2018 加盟店調査強化）；为 認定包括/少額包括 的 2020 修订 | 分期销售法修订下的 2024 BNPL 厘清；CAA / 消費者庁 对套现滥用的警告 | EV / KINTO 订阅转型压力；OEM 自保整合讨论 | フラット 35 不正利用問題（2019-）+ JHF 投资者基础迁移 | 无重大；随学费上升的教育贷款需求压力 | 国家框架有限；社会的金融 讨论持续 | 经产省 + 金融厅对嵌入式结算信用的边界厘清 |
| **证券化 / ABS 流水线** | 大量 — 信用卡债权 ABS（V-RACE、S-RACE、Rakuten Card ABS 例行发行）| 大量 — ACOM / SMBCCF / AIFUL 的消费贷款 ABS 例行 | 大量 — 汽车贷款 ABS（汽车 / 购物信用 ABS 例行）| 萌芽 — PayPal 下的 Paidy 债权证券化路径 | 大量 — Toyota Finance / Honda Finance / Nissan Financial 汽车 ABS 例行 | 大量 — 由 JHF 例行发行的フラット 35 MBS（机构 MBS，日本最大 MBS 发行人）| 有限 — 银行贷款组合很少为教育专用池证券化 | 极少 | 极少 |
| **银行邻接性** | 超大型银行 FG 系：[[card-issuers/smbc-card\|SMBC Card]]（SMFG）、[[card-issuers/mufg-nicos\|MUFG NICOS]]（MUFG）、[[card-issuers/jcb\|JCB]]（多银行）、[[card-issuers/rakuten-card\|Rakuten Card]]（乐天 FG）、[[card-issuers/paypay-card\|PayPay Card]]（PayPay FG）| 混合：[[consumer-finance/smbc-consumer-finance\|SMBC Consumer Finance / Promise]]（SMFG 100%）、[[consumer-finance/acom\|ACOM]]（MUFG 39.6% 权益法）、[[consumer-finance/aiful\|AIFUL]]（独立）| 银行 FG 系：[[card-issuers/jaccs\|JACCS]]（MUFG 权益法）、[[card-issuers/orico\|Orico]]（瑞穗 + 伊藤忠）、[[card-issuers/aplus\|APLUS]]（SBI Shinsei）、Credit Saison（独立 / 瑞穗邻接）| 大多为非银行：Paidy（PayPal）、Atone（Net Protections）、NP後払い（Net Protections）— 但银行 FG 发卡机构亦提供 BNPL 类产品 | OEM 自保：Toyota Finance（Toyota）、Honda Finance、Nissan Financial Services — 非银行自保，有时与银行合作 | 银行前置（民間）：所有超大型银行 + 地银；JHF 为政策金融非银行 | 银行前置（民間 教育贷款）；JFC 为政策金融非银行 | 常为非银行社会金融 + 贷金业 小型运营 | 若母 PSP 银行邻接则为银行 FG 系 |
| **卡品牌受理依赖** | 直接 — 发卡机构承载 Visa / Mastercard / JCB / Amex / Diners 品牌 | 无（现金贷款，非卡品牌路由）| 混合 — 许多信販亦发行品牌卡（Orico Card、JACCS Card）| 结算时点一般无（运营方直接），不过部分 BNPL 扩展虚拟品牌卡 | 贷款产品层面无 | 贷款产品层面无 | 无 | 无 | 取决于 — 部分 PSP 信用经由品牌卡后端路由 |

### 1. 发卡机构（クレジットカード会社 / 包括信用購入あっせん業者）

发卡机构是分期销售法下的 **包括信用購入あっせん業者**，在经产省登记（据经产省 登録包括信用購入あっせん業者 名录，截至 2026-04 月末 241 家登记）。发卡机构是筛选持卡人、设定信用额度、计入债权并运行欺诈监控的主体。银行 FG 锚点：[[card-issuers/smbc-card|SMBC Card]]（SMFG）、[[card-issuers/mufg-nicos|MUFG NICOS]]（MUFG）、[[card-issuers/jcb|JCB]]（多银行财团）。非银行 FG 锚点：[[card-issuers/rakuten-card|Rakuten Card]]（乐天 FG）、[[card-issuers/paypay-card|PayPay Card]]（PayPay FG）、[[card-issuers/aeon-financial-service|AEON Financial Service]]（永旺零售 FG）。

卡产品内的现金借支（キャッシング）越界进入贷金业体制——该部分受总量规制（收入的 1/3 上限）和利息制限法 20% 利率上限约束，而 **购物** 部分则由分期销售法 支払可能見込額調査 而非总量规制治理。这种双重体制结构为发卡机构所特有。

### 2. 消费金融 / 商工贷（消費者金融 / 貸金業者）

消费金融运营方是贷金业法（貸金業法）下的貸金業者，经由中央（财务局）或都道府县路径在金融厅登记。当前的「3 大消费金融」为 [[consumer-finance/acom|ACOM]]（MUFG 权益法 39.6%）、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（SMFG 100% 子公司）和 [[consumer-finance/aiful|AIFUL]]（独立，创始家族控制）。在武富士于 2010, 经会社更生破产后，该板块围绕这三家整合。

决定性的监管事件是于 2010-06完全施行的 **改正貸金業法**：利息制限法 20% 上限（按本金规模分级为 15% / 18% / 20%）取代了旧 出資法 29.2% 灰色地带，总量规制（年收入的 1/3 硬上限）开始具有约束力。随后涌现的過払金（超额利息返还）浪潮，是 [[consumer-finance/aiful|AIFUL]] 的事业再生 ADR（2009-09）、MUFG 对 [[consumer-finance/acom|ACOM]] 的 TOB（2008-10）以及 SMFG 将 Promise 完全子公司化的原因。

银行侧的变通办法是 **银行卡贷（銀行カードローン）**——银行发行的产品受银行法治理，历史上不面临总量规制，这引发了围绕「实质总量规制超额」放贷的行业自律讨论。ACOM、Promise、AIFUL 均运营一项 銀行保証 副业，从担保银行卡贷敞口中计入收入。

### 3. 分期信用 / 信販（信販会社 / 個別信用購入あっせん業者）

信販运营方是分期销售法下的 **個別信用購入あっせん業者**（据经产省 登録個別信用購入あっせん業者 名录，截至 2026-04 月末 138 家登记）。其识别特征在于贷款与特定购买（個品割賦）挂钩，常经由商户协议（加盟店）——汽车经销商贷款、装修贷款、教育贷款（私营侧）、乐器 / 家电 / 医疗 / 住房设备。锚点：[[card-issuers/orico|Orico]]（瑞穗 + 伊藤忠，汽车贷款 #1）、[[card-issuers/jaccs|JACCS]]（MUFG 权益法，汽车/教育/装修 3 条线）、[[card-issuers/aplus|APLUS]]（SBI Shinsei）、Credit Saison（独立 / 瑞穗邻接，卡片为主）。

信販运营方通常持有 **多套牌照**——它们几乎总是将個別信用購入あっせん与包括信用購入あっせん（用于自身发行的卡）、貸金業（用于卡贷）、銀行保証（用于银行卡贷担保）相结合，且常含集金代行（用于 B2B 公共费用 / 持续计费的收款）。2018 改正割賦販売法 强化了 加盟店調査 义务，提高了边缘商户关系的导入成本。

### 4. BNPL 纯玩家（BNPL / 後払い）

BNPL 是 **监管上最模糊** 的类别。在分期销售法下，**≤ 2 个月且一次性付款** 的后付款一般不属于包括信用購入あっせん，而某些以商户前置的模型下的个别后付款，可经由加盟店表示路径规避個別信用購入あっせん登记。2020 改正割賦販売法（2021-04施行）明确新增了 認定包括信用購入あっせん業者 / 少額包括信用購入あっせん業者 框架，以将部分 BNPL 运营方纳入较轻版本的包括体制；2024 BNPL 厘清轮次延续了收紧。

锚点：[[payment-firms/paidy|Paidy]]（PayPal 于 2021-09 以约 USD 2.7 十亿收购）、Atone / NP後払い（Net Protections）。[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 页面逐一讲解按产品的分类测试。消费者厅（消費者庁 / CAA）就 BNPL 的 **套现滥用**（現金化目的後払い）以及使后付款产生现金般感受的 UX 模式，维持一个活跃的警告渠道——参见 CAA 的支付纠纷警示页面。

### 5. 汽车金融 / 汽车自保（自動車ローン / オートクレジット）

汽车金融有两种结构形态：(a) 信販前置的汽车贷款（例如 [[card-issuers/orico|Orico]] 在汽车贷款中为国内 #1 、[[card-issuers/jaccs|JACCS]] 为 #2-3），在分期销售法下经由经销商加盟店网络计入；(b) **OEM 汽车自保**——Toyota Finance（Toyota）、Honda Finance、Nissan Financial Services、Mitsubishi UFJ Lease & Finance（现 Mitsubishi HC Capital）等——其存在主要是为承保母 OEM 的车辆销售。

OEM 自保的计入通常为分期销售法 個別 + 包括（若有 OEM 品牌卡）+ 某些情况下的貸金業。OEM 提供显性或隐性的信用支持（KINTO 式订阅的残值保证），相对于独立的信販汽车贷款账簿降低了自保的坏账拨备需要。汽车 ABS 市场是日本非 MBS 消费贷款 ABS 的最大板块——Toyota Finance 是例行的基准发行人。EV / KINTO 订阅 / 共享汽车趋势，是信販前置与自保前置的汽车贷款共同承受的、对经销商信用渠道的结构性压力。

### 6. 住房贷款邻接（住宅ローン直接型 / フラット 35）

住房贷款大多属于银行法下的银行 FG 世界，但 **政策金融叠加** 至关重要：[[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF / 住宅金融支援機構)]] 运营 **フラット 35**——发起银行出售给 JHF、由 JHF 打包为机构 MBS 的长期固定利率住房贷款。JHF 是日本最大的 MBS 发行人。

监管机关：国交省（国交省）是 JHF（住房政策侧）的主要监管者；MOF 监管 JHF 法的金融侧；发起银行侧在银行法下受金融厅监管。フラット 35 不正利用問題（2019-）——将投资性出租物业的购买伪装为自住——引发了对 JHF 取扱金融機関 尽职调查要求的结构性收紧。JHF **并非** 分期销售法或贷金业法运营方；它是 独立行政法人 政策金融机构，位于经产省 / 金融厅消费者信用名录之外。

### 7. 教育贷款（教育ローン）

教育贷款沿 **公共 / 私营** 这条线分开。私营侧由银行在银行法下提供（无分期销售法登记，因其为民間ローン），常打包为无担保的 教育目的ローン 产品。公共侧由 **国民金融公庫 / Japan Finance Corporation（JFC / 日本政策金融公庫）** 在 JFC 法下运营——JFC 的 教育一般貸付 是主要的 公的 教育贷款，相对于民間 银行产品采用低固定利率。JFC 受 MOF（财务省）监管。

教育贷款账簿不会作为独立的教育贷款 ABS 例行证券化——银行侧敞口位于更广泛的无担保消费贷款账簿之内。信販运营方（例如 [[card-issuers/jaccs|JACCS]]）也在分期销售法 個別 路径下经由教育机构加盟店渠道提供教育贷款，这是与银行-民間和 JFC-公的并列的、教育信用的第三条路由路径。

### 8. 微型信贷（マイクロクレジット）

日本没有可与孟加拉 / 印度微型金融相比的成熟国家级微型信贷框架。在日本存在微型信贷式小额消费者信用之处，它通常由小型貸金業者在 **贷金业法** 下计入，这意味着它继承了完整贷金业体制的利息制限法 20% 上限、出資法 20% 刑事上限、总量规制 1/3 上限和犯収法 KYC 义务。

社会金融和 NPO 经办的小额放贷渠道确实存在（例如由 都道府県社会福祉協議会 以厚劳省资金运营的 生活福祉資金貸付），但那些 **并非** 贷金业——它们是政策福利渠道。因此，在日本对「微型信贷」进行细分，需要核查运营方究竟是貸金業（金融厅监管）还是 社会福祉（厚劳省监管），因为其消费者保护体制、登记路径和披露义务完全不同。

### 9. PSP 邻接信用（电子商务嵌入式信用）

PSP 邻接信用是比较矩阵的 **边界情形**。当 PSP（支付服务提供方）或钱包运营方提供结算时点的信用产品时，该债权可在以下牌照下计入：(a) 若运营方持有個別 / 包括 信用購入あっせん登记，则为分期销售法；(b) 若构造为钱包余额预支，则为资金结算法 資金移動業；(c) 若构造为预付储值的延展，则为资金结算法 第三者型前払；(d) 在罕见的结构化情形中为贷金业法。因此，同一结算 UX 可依据究竟由哪个法律主体实际计入债权，而翻译为不同的牌照。

这一类别之所以存在，是因为有诸如 Mercari/Merpay（其 後払い 功能跨越资金移动 + 後払い 两条线）、PayPay（其 あと払い 以 [[card-issuers/paypay-card|PayPay Card]] 作为信用计入主体），以及来自 EC 市场的平台侧信用延展等运营方。[[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 页面和 [[financial-licenses/payment-license-stack|payment license stack]] 页面给出按产品的分类测试。

## 征信机构覆盖

消费者信用运营方的报送 / 查询义务取决于其牌照类别与机构会员资格。共有三家主要机构：

| 机构 | 会员基础 | 典型运营方覆盖 |
|---|---|---|
| **JICC**（日本信用情報機構）| 大多为贷金业 + 信販 | 消费金融 / 商工贷、信販、部分 BNPL |
| **CIC**（Credit Information Center）| 大多为分期销售法登记业者 | 发卡机构、信販、汽车金融、个别信用购买中介 |
| **全国銀行個人信用情報センター（KSC）**| 银行系 | 银行、信用金庫、信用組合 — 住房贷款 + 教育贷款 + 银行卡贷 |

**3 大消费金融** 运营方通常是 JICC + CIC + KSC 的会员，因为跨机构核查是总量规制验证的基础。纯 BNPL 运营方可能依其牌照栈仅为 JICC 或 CIC 会员。JHF（フラット 35）经由银行发起侧向 KSC 报送。

## 银行邻接性图谱（合并）

将类别 1, 2, 3, 4, 5, 6, 7 合起来读，日本消费者信用的银行 FG 邻接图景为：

| FG | 发卡机构 | 消费金融 | 信販 | 备注 |
|---|---|---|---|---|
| [[megabanks/mufg|MUFG]] | [[card-issuers/mufg-nicos|MUFG NICOS]]（100%）| [[consumer-finance/acom|ACOM]]（39.6% 权益法）| [[card-issuers/jaccs|JACCS]]（权益法）| 一个 FG 内 3条线的消费者信用足迹 |
| [[megabanks/smfg|SMFG]] | [[card-issuers/smbc-card|SMBC Card]]（100%）| [[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（100%）| （无主要的自有信販；与 Credit Saison 等合作）| 2条线，信販以合作而非所有的形式 |
| [[megabanks/mizuho-fg|Mizuho FG]] | （UC Card 遗留；合作）| （无主要的独立体）| [[card-issuers/orico|Orico]]（权益法 + 伊藤忠）| 信販偏重，卡片偏轻 |
| [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] | （Shinsei Financial 卡产品）| Shinsei Financial / レイクALSA（旧 GE 系）| [[card-issuers/aplus|APLUS]]（集团公司）| 经由遗留 GE / Lake / APLUS 账簿的消费者信用偏重 FG |
| 独立 / 非银行 FG | [[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] | [[consumer-finance/aiful|AIFUL]]（创始家族）| Credit Saison（独立）、[[card-issuers/aplus|APLUS]]（SBI 侧）| 银行 FG 所有权缺失或部分之处 |

MUFG 的 3条线足迹（NICOS 卡 + ACOM 消费金融 + JACCS 信販）是日本消费者信用中单一最集中的银行 FG 头寸。MUFG 最终是将其整合为统一的消费者信用子公司，还是保留为各自上市 / 权益法的主体，是一个长期存在的结构性问题。

## 近期监管压力

| 日期 | 来源 | 何者变化 |
|---|---|---|
| 2006-01-13 | 最高法院 | グレーゾーン金利 裁决实际上使贷金业法的 みなし弁済 条款失效，引发過払金 返还浪潮 |
| 2006-12 | 国会 | 改正貸金業法 通过（20% 利率上限 + 1/3 总量上限）|
| 2008-04 | 金融厅 | 对 [[consumer-finance/aiful|AIFUL]] 的业务改善命令（催收实务问题）、全业务停止命令 |
| 2008-10-22 | MUFG TOB | MUFG 取得 [[consumer-finance/acom|ACOM]] 约 40%，权益法并表 |
| 2010-06 | 金融厅 | 改正貸金業法 完全施行（20% 上限 + 1/3 总量上限，完全施行）|
| 2010-09 | 武富士 | 武富士申请会社更生（公司重整），行业整合为 3 大消费金融 |
| 2018 | 经产省 | 改正割賦販売法 — 强化 加盟店調査 义务、卡数据安全栈 |
| 2020 改正 | 经产省 | 改正割賦販売法 — 为 BNPL 的 認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 框架 |
| 2021-04 | 经产省 | 2020 改正割賦販売法 施行 |
| 2024 | 经产省 / CAA | BNPL 厘清轮次、后付款运营方行政处分页面（atobaraigyouseisyobunnojoukyou.html）|
| 2025-03 | 经产省 / 日本クレジット協会 | 在 J-CSC 指南 6.0 下，EC 卡支付强制 EMV 3-DS（参见 [[payments/japan-card-security-authentication-controls|card security and authentication controls]]）|
| 持续 | CAA（消費者庁）| 就 BNPL 套现滥用及使后付款产生现金般感受的 UX 模式的活跃警告 |

2010-06 改正貸金業法 的施行，是现代日本消费者信用中 **单一最大的结构性事件**——它将消费金融从 4家强 + 众多小型的格局整合为当前的 3 大（ACOM、Promise、AIFUL）+ 银行卡贷合作，而過払金 返还浪潮消耗了运营方近十年的自有资本。

## 证券化 / ABS 流水线小结

| 类别 | 例行 ABS / MBS 流水线 | 评论 |
|---|---|---|
| 发卡机构 | 大量 — 信用卡债权 ABS（V-RACE、S-RACE、Rakuten Card ABS）| 银行 FG 发卡机构例行发行；非银行 FG 发卡机构经由 SPC |
| 消费金融 | 大量 — ACOM / SMBCCF / AIFUL 的消费贷款 ABS 例行 | 過払金 浪潮之后，ABS 是稳定的次级融资线 |
| 信販（汽车-购物信用）| 大量 — 汽车贷款 + 购物信用 ABS | Orico / JACCS / APLUS 的例行流水线 |
| BNPL | 萌芽 — PayPal 所有下的 Paidy 债权证券化路径 | 仍小，但流水线正在打开 |
| 汽车自保（OEM）| 大量 — Toyota Finance / Honda Finance / Nissan Financial 汽车 ABS 例行 | 非 MBS 消费贷款 ABS 的最大板块 |
| 住房（JHF）| 大量 — フラット 35 机构 MBS 例行 | JHF 是日本最大的 MBS 发行人 |
| 教育贷款 | 作为独立池极少 | 银行侧汇总，而非独立 |
| 微型信贷 | 极少 | 对 ABS 经济性而言太小 |
| PSP 邻接 | 极少 | 若有则汇入母公司的其他 ABS 流水线 |

ABS 这一维度对于理解 **各运营方如何为自身融资** 至关重要——ABS 偏多的类别能在无须按比例的资产负债表资本下维持账簿的快速增长，而 ABS 偏少的类别（微型信贷、教育贷款、PSP 邻接）则受母公司资产负债表容量约束而增长受限。这是实现经常性证券化的 BNPL 运营方（PayPal 下的 Paidy）相对于以自有资本融资的 BNPL 运营方获得实质资本效率的原因之一。

## 相关

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

## 出处

- 经产省 分期销售法 门户：https://www.meti.go.jp/policy/economy/consumer/credit/
- 经产省 信用交易索引：https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- 经产省 登记业者名录 门户：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- 经产省 登録包括信用購入あっせん業者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- 经产省 登録個別信用購入あっせん業者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- 经产省 クレジットカード番号等取扱契約締結事業者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- 经产省 割賦販売法 后付款 FAQ：https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- 经产省 改正割賦販売法 页面：https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- 金融厅 贷金业法 门户：https://www.fsa.go.jp/menkyo/kashikin/
- 金融厅 牌照 / 登记业者 门户：https://www.fsa.go.jp/menkyo/menkyo.html
- 金融厅 预付政策 门户：https://www.fsa.go.jp/policy/prepaid/
- JICC（日本信用情報機構）：https://www.jicc.co.jp/
- CIC（Credit Information Center）：https://www.cic.co.jp/
- 日本クレジット協会 — 分期销售法 消费者页面：https://www.j-credit.or.jp/customer/sales_law/
- JHF（住宅金融支援機構）：https://www.jhf.go.jp/
- JFC（日本政策金融公庫）：https://www.jfc.go.jp/
- CAA（消費者庁）支付纠纷警示：https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- 各运营方的 IR / 企业披露（公开部分）：[[consumer-finance/acom|ACOM]]（TSE STD 8572）、[[consumer-finance/aiful|AIFUL]]（TSE PRIME 8515）、[[card-issuers/jaccs|JACCS]]（TSE PRIME 8584）、[[card-issuers/orico|Orico]]（TSE PRIME 8585）、[[card-issuers/aplus|APLUS]]（SBI Group 企业网站）、[[consumer-finance/smbc-consumer-finance|SMBC Consumer Finance / Promise]]（SMFG 并表）

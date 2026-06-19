---
source: payments/japan-bnpl-pay-later-operator-registry-matrix
source_hash: 9ca5e6397c450602
lang: zh
status: machine
fidelity: ok
title: "Japan BNPL / pay-later operator registry matrix"
translated_at: 2026-06-19T06:09:18.050Z
---

# Japan BNPL / pay-later operator registry matrix

## TL;DR

日本的 BNPL / 後払い 格局主要由 **割賦販売法（分期销售法）** 通过 **個別信用購入あっせん業者**（个别信用购买斡旋业者）登记线进行规制，由经济产业省（METI）担任主要监管者。METI 的登録個別信用購入あっせん業者 一览据 [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] 显示在 2026-04 月末时点包含约 138  家登记业者，其中较小的子集 — 大致 15-20  — 以有意义的规模积极运营面向消费者可见的 BNPL / 後払い 产品。本矩阵沿着决定 BNPL 经济性的各轴对这些活跃业者进行画像：母公司／所有权、交易模式（一次性后付 vs 分期）、信用风险模式（业者承担损失 vs 加盟店承担损失 vs 共担）、资金来源、加盟店类别专精、月交易量量级、登记年份，以及在 2020 改正割賦販売法 框架下的监管层级（認定包括 / 少額包括 / 個別 / 适用除外）。本矩阵是 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 的业者层面对应物，也是 [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]] 的 BNPL 专属横断面。

## Wiki 路径

本页作为 BNPL 的业者层面参考归属于 [[payments/INDEX|payments index]]。请与 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]（逐产品分类测试）、[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]（METI 登记追踪）、[[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]]（更广泛消费者信用语境中的 BNPL 类别）、[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]（跨方案经济性视角中的 BNPL 行）、[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]（BNPL 偏离的角色分离框架），以及业者锚点 [[payment-firms/net-protections-hd|Net Protections HD]]、[[payment-firms/atone|atone]]、[[payment-firms/kuroneko-atobarai|Kuroneko Atobarai]]、[[payment-firms/gmo-postpay|GMO Postpay]]、[[payment-firms/paidy|Paidy]]、[[payment-firms/mercari-hd|Mercari HD]]、[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]、[[card-issuers/credit-saison|Credit Saison]] 一并阅读。

## 本矩阵的意义

BNPL 是日本监管上最模糊的单一支付类别。同一结账 UX（「便利店／银行汇款后付」或「次月付」按钮）可能经由 (a) 割賦販売法 下的個別信用購入あっせん 登记业者、(b) 规避 個別 登记的适用除外门槛后付结构、(c) 2020 改正割賦販売法 引入的認定包括信用購入あっせん 或 少額包括信用購入あっせん 制度、(d) 既有发卡机构 BNPL 扩展中的包括信用購入あっせん 制度（PayPay あと払い → [[card-issuers/paypay-card|PayPay Card]] 后端）、或 (e) 组合资金移动 + 後払い 层的混合模式（Mercari / Merpay）进行路由。没有逐业者视角，读者会混淆那些在结账时看起来相同、但坐落于实质不同的牌照堆栈、信用风险模式与消费者保护制度之上的业者。本矩阵就是 [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 页面所指向的业者层面界面。

消费者厅（消費者庁 / CAA）就 **BNPL 的现金化目的滥用**（現金化目的後払い）以及导致过度借贷的 UX 模式维持着一个活跃的警告渠道 — 参见来源中 CAA 的支付纠纷注意页面。本矩阵追踪监管层级与登记历史，使读者能识别哪些业者受哪一级别的监督。

### Net Protections HD (NP 後払い, TSE PRIME 7383)

[[payment-firms/net-protections-hd|Net Protections HD]]（TSE PRIME 7383）是日本最早行动的 BNPL 纯做者，运营 EC 加盟店作为「便利店／银行汇款后付」选项附加的、基于账单的 BtoC 产品 **NP 後払い**。该集团还运营 **atone**（消费者侧的月度周期 BNPL 钱包）、**NP 掛け払い**（BtoB 开票）以及 **AFTEE**（面向台湾／越南的东南亚 BNPL）。NP 後払い 的决定性特征是 **保证模式 BNPL** — Net Protections 以加盟店手续费为交换吸收回收不能风险，使加盟店完全卸下应收账款管理。在 METI 一览以個別信用購入あっせん業者 登记。于 2021-12 在 TSE PRIME 上市。

### atone (Net Protections 子公司)

[[payment-firms/atone|atone]] 是 Net Protections 的消费者侧月度周期 BNPL 钱包，区别于 NP 後払い 的逐笔开票模式。atone 给消费者一个账户，将跨多个加盟店的 BNPL 购买聚合为一笔月度便利店／银行汇款付款，UX 上类似 [[payment-firms/paidy|Paidy]]，但基于独立（非 PayPal）的经济性。从监管角度看，atone 使用与 NP 後払い 相同的 Net Protections 牌照堆栈（割賦販売法 個別信用購入あっせん）。品牌分拆让 Net Protections 能在「月度周期 BNPL 钱包」分部竞争，而不稀释 NP 後払い「加盟店侧 BNPL 网关」品牌。

### Kuroneko Atobarai (Yamato Financial Holdings)

[[payment-firms/kuroneko-atobarai|Kuroneko Atobarai (クロネコ後払い)]] 是 Yamato 集团金融实体运营、利用 Yamato 运输全国配送网络的 BNPL 产品线。独特的加盟店分部契合是 **经由 Yamato 配送发货的 EC 购买** — BNPL 回收可与配送确认捆绑，为已将 Yamato 作为主要承运商的 EC 加盟店赋予 Kuroneko Atobarai 一项结构性成本优势。在 METI 登録個別信用購入あっせん業者 一览登记。该产品在「发货捆绑式账单 BNPL」分部与 [[payment-firms/net-protections-hd|Net Protections]] NP 後払い 自然契合，其中加盟店价值是「我们在一个包内处理配送 + 回收」。

### GMO Postpay (GMO Payment Gateway 集团)

[[payment-firms/gmo-postpay|GMO Postpay]] 是 [[business/gmo-internet-group|GMO Internet Group]] / [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 的 後払い 产品线，旨在作为与卡／码／便利店支付方式并列的 後払い 选项，与更广泛的 GMO-PG 加盟店基础整合。GMO-PG 整合意味着已在 GMO-PG 的加盟店无需建立单独的网关关系即可将 GMO Postpay 添加为附加支付方式 — 对 後払い 产品而言是一项结构性渠道优势。在 METI 登録個別信用購入あっせん業者 一览登记。向 GMO-PG 约 30万 加盟店基础的自然交叉销售是主要的规模驱动力。

### Paidy (PayPal 所有)

[[payment-firms/paidy|Paidy]] 是 PayPal 所有的消费者侧月度周期 BNPL 业者，具有多产品变体，包括标准月度便利店／银行汇款付款、3-pay（分为 3 期月度分期）以及面向更高额购买的更长分期变体。于 2021-09 被 PayPal 以约 2.7  十亿美元收购（据 [[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]] 词条及 PayPal Holdings 公开披露）。Paidy 独特的规模优势是 **与主要 EC 加盟店的整合（Amazon Japan 为旗舰整合）** 以及 PayPal 全球足迹的交叉杠杆。在 METI 登録個別信用購入あっせん業者 一览登记。

### Komoju Atobarai (Degica)

Komoju Atobarai 是 Degica / Komoju 自有品牌的 後払い 产品，集成入 Komoju PSP 网关，面向希望在 Komoju 的卡／码／便利店支付方式覆盖之外提供 後払い 的加盟店（Komoju 的垂直专精是数字内容／游戏／跨境 — 参见 [[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]）。在 METI 登録個別信用購入あっせん業者 一览登记。自然契合是希望将 後払い 作为无活跃信用卡的持卡人的替代方案的数字内容／游戏加盟店。

### Smarpay

Smarpay（株式会社Smartpay 等）是在 BNPL 上线的 2020年代浪潮中出现的相对较新的 BNPL 进入者，提供具分期付款可选性的消费者侧 BNPL 产品。该业者在 METI 登録個別信用購入あっせん業者 一览登记。读者注意：此类别集群中的独立 BNPL 业者规模可变，业者长寿性对消费者信用周期状况敏感。

### Lattepay

Lattepay 是参与日本 2020-2022  BNPL 上线浪潮的较小型 BNPL 业者之一，在割賦販売法 個別信用購入あっせん 路线下登记。与 Smarpay 一样，Lattepay 的运营规模小于 NP / Paidy / Atone，关于业者连续性读者注意同样适用。多个较小型 BNPL 业者与占主导地位的纯做者并存，是 2020 改正割賦販売法 后环境的一个特征，其中登记壁垒有意义但并非禁止性的。

### Mercari Smart Money / Merpay BNPL 扩展

[[payment-firms/mercari-hd|Mercari HD]]（TSE PRIME 4385）运营 [[payment-firms/merpay|Merpay]] 作为其支付部门，并通过 メルペイ翌月払い（Merpay 次月付）以及 Mercari Smart Money / メルペイスマートマネー 借贷产品扩展至 BNPL。决定性特征是 **与 Mercari 点对点市场的垂直整合** — Merpay 可在资金来源与回收均处于 Mercari 生态内的情况下提供 BNPL，赋予不同于独立 BNPL 业者的结构性单位经济性。Merpay 的牌照堆栈在信用购买经由该线路由时组合资金移动业 与個別信用購入あっせん 登记，外加面向现金类借贷产品的貸金業 登记 — 在 BNPL 纯做者中罕见的多牌照组合。

### b/43 (Smartbank)

b/43 （由 Smartbank, Inc. 提供）是一款带分期／后付可选性的预付 Visa 卡 + 家庭账户支出管理产品。b/43  产品将自己定位为更接近带 BNPL 功能的 **家庭金融／家计预算工具**，而非纯 BNPL 纯做者。信用／後払い 组成部分依据具体产品功能在割賦販売法 個別 / 资金结算法 前払い 线下适当地获得牌照。读者注意：像 b/43  这样以预付为主的产品的 BNPL 扩展，处于与 NP 後払い 或 Paidy 这样的纯 BNPL 纯做者略有不同的类别。

### NP後払い (Net Protections 下的单独品牌列示)

NP後払い 是 Net Protections 基于账单的 BNPL 产品（与 Net Protections HD 一节所涵盖的产品相同）的面向客户的品牌。这里单独列出是因为 **加盟店与消费者通常独立于 Net Protections 公司名而识别 NP 後払い 品牌**，且登记由 株式会社ネットプロテクションズ（运营子公司）而非控股实体持有。品牌 vs 实体的区别对照 METI 登録個別信用購入あっせん業者 一览的登记查询很重要 — 登记簿上的业者名是运营子公司。

### 三井住友卡 / SMBC 侧的 BNPL 扩展

[[card-issuers/smbc-card|SMBC Card]] 通过其 Vpass / 三井住友カード あと払い + V Point 生态拥有 BNPL 相邻扩展，允许持卡人在购买后将特定交易转换为分期付款条件。由于底层应收账款是卡发行的授信额度应收账款，这些扩展坐落于既有的包括信用購入あっせん（发卡机构）登记之上，而非单独的 個別 登记。从消费者角度看它们像 BNPL，但从监管角度看它们是卡授信额度扩展功能。同一模式适用于 [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]] 及其他主要发卡机构。

### PayPay あと払い (经由 PayPay Card 后端)

PayPay あと払い 是通过 [[payment-firms/paypay|PayPay]] 钱包 UX 提供的有 BNPL 感的产品，但授信额度后端是 [[card-issuers/paypay-card|PayPay Card]]（发卡机构实体）。PayPay 钱包充当面向消费者的 UX 层，而 PayPay Card 的包括信用購入あっせん 登记承载授信应收账款。这作为一个 **边界案例** 列入 — 从消费者角度看它等同 BNPL，但从监管角度看它坐落于发卡机构登记之上。同一模式适用于通过关联发卡机构后端扩展 BNPL 等效功能的 d払い / au PAY / 楽天ペイ。

### 信贩侧 BNPL：APLUS、JACCS、Orico、Credit Saison

[[card-issuers/aplus|APLUS]]（[[regional-banks/sbi-shinsei-bank|SBI Shinsei]] 集团）、[[card-issuers/jaccs|JACCS]]（[[megabanks/mufg|MUFG]] 权益法）、[[card-issuers/orico|Orico]]（[[megabanks/mizuho-fg|Mizuho]] + 伊藤忠）与 [[card-issuers/credit-saison|Credit Saison]]（独立系）均以個別信用購入あっせん 登记作为其主要信贩业务线，并以独立的面向消费者品牌或作为加盟店在前的 BNPL 提供的白标后端来运营 BNPL 式产品。其相对纯做 BNPL 的结构性优势是 **多线信贩经济性** — 通过 BNPL 渠道获取的客户可被交叉销售至汽车贷款、リフォームローン（装修贷）、教育ローン（教育贷）与卡产品，产生单一产品 BNPL 纯做者无法匹敌的多产品 LTV。它们被纳入本矩阵并非因为它们在纯做意义上是「BNPL 业者」，而是因为 **它们是纯做 BNPL 业者所登记的個別信用購入あっせん 登记簿的主要参与者**，且信贩购物信用与 BNPL 之间的监管界线在结构上模糊。

## 大比较矩阵表

| 业者 | 母公司／所有权 | 牌照登记 | 上市 | 登记年份（约） | 交易模式 | 信用风险模式 | 资金来源 | 主要加盟店类别 | 月交易量量级 | 监管层级（2020 改正割賦販売法 框架） |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/net-protections-hd\|Net Protections / NP 後払い]]** | 独立系（上市） | 個別信用購入あっせん業者 (METI) | TSE PRIME 7383 (上市 2021-12) | 2010 以前 | 逐笔账单；≤2个月或分期 | 业者承担损失（保证模式） | 股权 + ABS 管道兴起中 | EC 通用（服装、化妆品、食品、一般零售） | 每年数千万笔交易 | 個別 |
| **[[payment-firms/atone\|atone (Net Protections)]]** | Net Protections 子公司 | 個別信用購入あっせん業者 (METI) | 子公司 | 2010年代中 | 月度周期聚合 BNPL 钱包 | 业者承担损失 | 股权 + 母公司 | 多加盟店 BtoC 消费者 | 数百万用户 | 個別 |
| **[[payment-firms/kuroneko-atobarai\|Kuroneko Atobarai (Yamato)]]** | Yamato Financial Holdings | 個別信用購入あっせん業者 (METI) | 子公司 | 2000年代 | 逐笔账单；≤2个月 | 业者承担损失（保证模式） | Yamato 集团资产负债表 | EC 通用（Yamato 配送发货） | 每年数千万笔交易 | 個別 |
| **[[payment-firms/gmo-postpay\|GMO Postpay]]** | [[business/gmo-internet-group\|GMO Internet]] / [[payment-firms/gmo-payment-gateway\|GMO-PG]] | 個別信用購入あっせん業者 (METI) | 子公司 | 2010年代 | 逐笔账单；≤2个月或分期 | 业者承担损失 + 加盟店共担变体 | GMO 集团资产负债表 + ABS | EC 通用（GMO-PG 加盟店基础） | 每年数百万笔交易 | 個別 |
| **[[payment-firms/paidy\|Paidy]]** | PayPal Holdings ([[payment-firms/paypal-pte-ltd-japan\|PayPal Pte. Ltd. Japan]])；2021-09 收购 | 個別信用購入あっせん業者 (METI) | PayPal 的子公司 | 2010年代 | 月度周期聚合 BNPL + 3-pay + 分期 | 业者承担损失；ABS / 证券化 | 股权 + 应收账款证券化路线 | EC 通用；Amazon Japan 旗舰整合 | 每年数千万笔交易 | 個別（带 認定/少額包括 关注） |
| **Komoju Atobarai (Degica)** | Degica / Komoju（独立系） | 個別信用購入あっせん業者 (METI) | Degica 的子公司 | 2010年代-2020年代 | 逐笔账单 | 业者承担损失 + 加盟店共担 | Komoju 集团资产负债表 | 数字内容、游戏、跨境 EC | 较小；垂直专精 | 個別 |
| **Smarpay** | 独立系（Smartpay） | 個別信用購入あっせん業者 (METI) | 非上市 | 2020-2022 上线浪潮 | 逐笔 + 分期 | 业者承担损失；规模较小 | 股权 / 投资者支持 | EC 通用 | 较小 | 個別 |
| **Lattepay** | 独立系 | 個別信用購入あっせん業者 (METI) | 非上市 | 2020-2022 上线浪潮 | 逐笔 | 业者承担损失；规模较小 | 股权 | EC 通用 | 较小 | 個別 |
| **[[payment-firms/merpay\|Merpay / Mercari Smart Money]]** | [[payment-firms/mercari-hd\|Mercari HD]] (TSE PRIME 4385) | 個別信用購入あっせん業者 + 資金移動業 + 貸金業（多牌照） | Mercari HD 的子公司 | Merpay 为 2010年代；Smart Money 在后 | 月度周期聚合 BNPL + 翌月払い + 现金贷 | 在 Mercari 生态内业者承担损失 | Mercari 集团资产负债表 | Mercari 市场 + 外部加盟店 | 每年数千万笔交易 | 個別 + 扩展中的包括 |
| **b/43 (Smartbank)** | Smartbank, Inc.（独立系） | 预付（前払い式） + 用于授信扩展的個別信用購入あっせん | 非上市 | 2020年代 | 预付 + 带后付可选性的家庭金融 | 主要为预付；授信额度规模较小 | 股权 / 投资者支持 | 家庭／家计金融 | 较小 | 前払い式 + 個別（混合） |
| **NP後払い (单独品牌)** | 在 Net Protections 下运营 | 個別信用購入あっせん業者 (METI) — 与 Net Protections 同一运营实体 | 上市实体下的品牌 | 2010 以前 | 与 Net Protections HD 词条相同 | 业者承担损失 | 股权 | EC 通用 | （与 Net Protections HD 相同） | 個別 |
| **PayPay あと払い** | [[payment-firms/paypay\|PayPay]] 钱包 UX、[[card-issuers/paypay-card\|PayPay Card]] 后端 | 包括信用購入あっせん（发卡机构登记） | PayPay FG / SoftBank 的子公司 | 2010年代（PayPay Card 设立） | 卡线分期 / 循环 + あと払い 功能 | 发卡机构模式（业者信用审查） | 发卡机构资产负债表 + ABS 管道 | PayPay 加盟店生态 + 一般 | 每年数千万笔交易 | 包括（发卡机构线，非 個別） |
| **[[card-issuers/aplus\|APLUS]] BNPL 扩展** | [[regional-banks/sbi-shinsei-bank\|SBI Shinsei]] | 個別信用購入あっせん + 包括 | SBI 新生 的子公司 | 2010 以前 | 逐笔 + 分期；植根信贩 | 信贩承担损失；多牌照摊销 | 银行 FG 资金 + ABS | 汽车 / 购物 / 各类 | 每年数千万笔交易 | 個別 + 包括（信贩，非纯 BNPL） |
| **[[card-issuers/jaccs\|JACCS]] BNPL 扩展** | [[megabanks/mufg\|MUFG]] 权益法 | 個別信用購入あっせん + 包括 | TSE PRIME 8584 | 2010 以前 | 逐笔 + 分期 | 信贩承担损失 | 银行 FG 资金 + ABS | 汽车 / 教育 / 装修 / 一般 | 每年数千万笔交易 | 個別 + 包括（信贩） |
| **[[card-issuers/orico\|Orico]] BNPL 扩展** | [[megabanks/mizuho-fg\|Mizuho]] + 伊藤忠 | 個別信用購入あっせん + 包括 | TSE PRIME 8585 | 2010 以前 | 逐笔 + 分期 | 信贩承担损失 | 银行 FG 资金 + ABS | 汽车 / 购物 / 一般 | 每年数千万笔交易 | 個別 + 包括（信贩） |
| **[[card-issuers/credit-saison\|Credit Saison]] BNPL 扩展** | 独立系（上市） | 個別信用購入あっせん + 包括 | TSE PRIME 8253 | 2010 以前 | 逐笔 + 卡线循环 | 发卡机构 + 信贩混合 | 股权 + ABS | 一般消费者 + 丸井相邻零售 | 每年数千万笔交易 | 個別 + 包括（发卡机构 + 信贩） |

### 侧轴 — 登记追踪与监督状态

METI 登録個別信用購入あっせん業者 的 PDF 一览是正规的登记簿。针对矩阵中任一特定业者的读者工作流：

1. 从 [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] 门户打开 METI 登録個別信用購入あっせん業者 PDF。
2. 用运营实体名搜索 PDF（注：品牌 vs 实体的区别 — 登记簿列示 株式会社X 而非品牌）。
3. 若业者直接处理卡号，交叉核对 METI クレジットカード番号等取扱契約締結事業者 PDF。
4. 对任何带钱包／資金移動業 分支的业者（Mercari、PayPay 等），交叉核对 FSA 資金移動業者 一览。
5. 对有报道行政处分的 BNPL 业者，交叉核对 METI 後払い行政処分状況 页面。

METI 後払い 行政处分页面是针对 後払い 业者任何监督措施的正规来源 — 追踪 BNPL 业者风险的读者应直接监测它，而非依赖二手报道。

### 侧轴 — 信用信息机构加盟

| 业者类型 | JICC | CIC | KSC（银行） |
|---|---|---|---|
| 纯做 BNPL（NP、atone、Kuroneko、Paidy 等） | 部分 | 部分（Paidy 披露引用 CIC） | 通常无 |
| 带 BNPL 扩展的信贩（APLUS、JACCS、Orico、Credit Saison） | 是 | 是 | 选择性 |
| 发卡机构 BNPL 扩展（PayPay Card、Rakuten Card、SMBC Card 等） | 是 | 是 | 选择性 |
| 钱包锚点 BNPL（Merpay） | 是 | 是 | 通常无 |

机构加盟塑造支撑业者信用审查的消费者信用信息共享 — 机构加盟有限的业者无法可靠地在自身数据之外核查申请人的信用历史，这是小型纯做 BNPL 业者比拥有完整机构访问的信贩植根业者面临更高违约率的一个结构性原因。

## 2020 改正割賦販売法 的监管层级框架

2020 改正割賦販売法（2021-04施行）为包括信用購入あっせん 业者引入了一个对 BNPL 业者格局有影响的分层框架：

| 层级 | 门槛 | 对业者的含义 |
|---|---|---|
| **包括信用購入あっせん（标准）** | 标准的包括信用購入あっせん 登记 | 依改正割賦販売法 的完全信用审查义务 |
| **認定包括信用購入あっせん業者** | 符合高级数据审查认定资格的业者 | 在监管认可下允许使用 AI / 数据型审查 |
| **少額包括信用購入あっせん業者** | 面向小额 BNPL 的更低门槛 | 适合小额 BNPL 的更轻审查义务 |
| **個別信用購入あっせん業者** | 逐笔信用购买斡旋业者 | 大多数纯做 BNPL 业者所处的线 |
| **适用除外门槛** | ≤2个月一次性后付 + 某些加盟店在前的模式 | 合格结构无需 個別 登记 |

認定包括 与 少額包括 的引入，专门旨在将一些 BNPL 业者纳入 包括 制度的更轻版本，认识到既有的 個別 登记并不很适合月度周期多加盟店 BNPL 钱包产品。截至 2026, ，专门登记为 少額包括 的业者数量很少，但框架已就位。

改正割賦販売法 下的 2024  BNPL 明确化轮次继续收紧适用除外的后付与登记的個別信用購入あっせん 之间的边界 — 关于由此出现的逐产品分类测试参见 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]。

## 业者集合中的资金来源模式

| 资金来源模式 | 业者 |
|---|---|
| **纯股权 + 投资者资本** | Smarpay、Lattepay、Komoju Atobarai、b/43 |
| **股权 + 兴起中的 ABS 管道** | Net Protections HD、atone、PayPal 旗下的 Paidy |
| **母集团资产负债表** | GMO Postpay（GMO Internet Group）、Kuroneko Atobarai（Yamato Financial）、Merpay（Mercari） |
| **银行 FG 资金 + 常态化 ABS** | APLUS（SBI 新生）、JACCS（MUFG 权益法）、Orico（瑞穗 + 伊藤忠）、Credit Saison（瑞穗相邻）、发卡机构 BNPL 后端（PayPay Card / Rakuten Card / SMBC Card 等） |
| **外国母公司股权 + 日本侧资金** | PayPal Holdings 旗下的 Paidy |

资金来源模式是决定哪些 BNPL 业者能维持快速账面增长 vs 哪些受资本约束的最大单一决定因素。拥有 **常态化 ABS 管道** 的业者（信贩、发卡机构、PayPal 式母公司旗下的大型纯做者）可在无需成比例股权资本注入的情况下增长；处于 **纯股权 + 投资者资本** 的业者受融资轮次约束，在消费者信用周期下行中最为脆弱。

这就是为何 2020-2022  BNPL 上线浪潮产生了许多小型业者，而其在 5-10 年视野上的生存模式很可能有利于 (a) 带多牌照摊销的信贩植根 BNPL、(b) 拥有发卡机构 ABS 管道访问的发卡机构后端 BNPL、(c) 达到足以进行常态化 ABS 经济性规模的少数纯做者 — 而较小的纯做者面临整合压力。

## 边界案例

- **「[[payment-firms/paidy|Paidy]] 是 BNPL 业者还是 PayPal 产品？」** 两者皆是。Paidy 是一个拥有自有面向消费者品牌与加盟店关系的独立個別信用購入あっせん 登记业者；自 2021-09  收购以来它也是 PayPal Holdings 的子公司。收购为 Paidy 提供了 PayPal 全球基础设施与资产负债表能力的访问，但未改变其日本牌照堆栈或监管地位。
- **「メルカリ翌月払い / Merpay BNPL 是 BNPL 业者还是钱包功能？」** 两者皆是 — 而这正是边界问题所在。钱包（Merpay）坐落于資金移動業 登记；翌月払い 功能坐落于個別信用購入あっせん 登记；现金贷扩展坐落于貸金業 登记。Merpay 的多牌照堆栈在 BNPL 中罕见，且明确横跨 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]]。
- **「PayPay あと払い 是 BNPL 吗？」** 从消费者 UX 看，是。从监管者角度看，它是经由 PayPay 钱包 UX 路由的 [[card-issuers/paypay-card|PayPay Card]]（包括信用購入あっせん 登记）的功能。它在结构上是发卡机构扩展，而非单独的 BNPL 登记。同一模式适用于 d払いカード 等。
- **「[[card-issuers/aplus|APLUS]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] 是 BNPL 业者吗？」** 它们按主要牌照是個別信用購入あっせん業者，这与 BNPL 纯做者所用牌照相同。它们的核心业务是比「BNPL」一词更古老的信贩／购物信用；在纯做意义上称它们为 BNPL 业者是类别错误，但它们是同一监管线的主要参与者。
- **「[[card-issuers/credit-saison|Credit Saison]] 是发卡机构、信贩，还是 BNPL 业者？」** 三者皆是 — Credit Saison 持有包括信用購入あっせん（发卡机构线） + 個別信用購入あっせん（信贩线） + 貸金業（现金贷线），使其成为日本牌照最多元的消费者信用业者之一。其「BNPL 扩展」坐落于既有牌照堆栈之上，而非单独的 BNPL 登记。
- **「METI 個別 一览上的较小／地方业者又如何？」** 138 家业者的登记簿包含许多面向消费者可见的 BNPL 足迹很小的小型／地方业者（地方汽车经销商自有金融、地方购物信用业者、利基加盟店的 個別 业者）。本矩阵聚焦于以有意义规模运营面向消费者可见 BNPL 产品的 15-20  家业者；追踪完整登记簿的读者应直接参阅 METI 的 PDF。
- **「BNPL vs 卡的消费者拒付／争议机制如何运作？」** 卡有割賦販売法 抗弁の接続 加上品牌拒付规则（Visa Dispute、Mastercard Chargeback、JCB Dispute），在加盟店未能交付时为持卡人提供一条退路。BNPL 纯做者的争议机制因业者而异 — Net Protections / Paidy 等已公布争议程序，但不存在法定的跨业者拒付框架（参见 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 的拒付一节）。
- **「受到 METI 行政处分的 後払い 业者又如何？」** 关于当前行政处分状态，请参阅 METI 後払い行政処分状況 页面（atobaraigyouseisyobunnojoukyou.html）。CAA 的支付纠纷注意页面亦提及一般的 後払い 消费者保护问题。

## 与其他矩阵的交叉引用

- vs **[[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]**：该词条确立了逐产品分类测试，判断结账 BNPL 功能是否触发個別信用購入あっせん、包括信用購入あっせん、認定包括、少額包括、适用除外或資金移動業 分类。本矩阵是该分类测试所指向的业者层面界面。
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]**：该词条是 METI 登録個別信用購入あっせん業者（2026-04 月末时点 138  家业者）与 登録包括信用購入あっせん業者（241  家业者）的登记追踪界面。本矩阵为这些登记的 BNPL 活跃子集画像。
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit operator comparison matrix]]**：该词条涵盖九个消费者信用业者类别（卡 / 消费者金融 / 信贩 / BNPL / 汽车 / 住房 / 教育 / 微信用 / PSP 相邻）。本矩阵是 BNPL 类别的放大，其中信贩侧业者（APLUS、JACCS、Orico、Credit Saison）出现在两个界面中。
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：该词条在方案类层面涵盖卡 vs 码 vs A2A vs 预付。BNPL 被作为卡类内的子类别处理。本矩阵逐业者分解 BNPL 子类别。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|JCB issuer ecosystem positioning matrix]]** 与 **[[payments/japan-merchant-psp-competitive-scorecard|merchant PSP competitive scorecard]]**：这些矩阵分别涵盖发行方侧与加盟店 PSP 侧；本矩阵是对两者的 BNPL 业者侧补充。发卡机构后端 BNPL（经由 PayPay Card 的 PayPay あと払い）处于与 JCB 发行方矩阵的交叉点，其中 PayPay Card 是 JCB 品牌持牌人（在适用处），以及与 PSP 计分卡的交叉点，其中 SB Payment Service 是 PayPay 锚点加盟店的加盟店侧处理方。

## 近期监管压力时间线

| 日期 | 来源 | 何变化 |
|---|---|---|
| 2018 | METI | 改正割賦販売法 强化了 加盟店調査 义务 — 对作为個別信用購入あっせん 登记的 BNPL 业者有直接影响，提高了边际加盟店关系的接入成本 |
| 2020 改正 | METI | 改正割賦販売法 引入 認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 框架，明确旨在将一些 BNPL 业者纳入更轻的 包括 制度 |
| 2021-04 | METI | 2020 改正割賦販売法 施行；新层级框架投入运营 |
| 2021-09 | 跨境 M&A | PayPal Holdings 以约 2.7  十亿美元收购 [[payment-firms/paidy\|Paidy]] — 日本 BNPL 领域首例主要外国母公司收购 |
| 2021-12 | TSE | [[payment-firms/net-protections-hd\|Net Protections HD]] 在 TSE PRIME 上市（7383）；日本首家上市的纯做 BNPL 业者 |
| 2024 | METI / CAA | 在持续的 改正割賦販売法 下的 BNPL 明确化轮次 + CAA 支付纠纷警告渠道更新 |
| 2024-2025 | METI | 针对任何行政处分维护 後払い行政処分状況 页面；发出选择性行政处分 |
| 2025-03 | METI / J-CSC | EC 卡支付强制 EMV 3-DS — 随着卡 EC 摩擦增加，对 BNPL 采用的二次效应（参见 [[payments/japan-card-security-authentication-controls\|Japan card security and authentication controls]]） |
| 持续中 | CAA | 就 BNPL 的现金化目的滥用（現金化目的後払い）以及导致过度借贷的 UX 模式发出活跃警告 |

## 交易模式分解

扫读本矩阵的读者不应将「BNPL」压平为一种形态。上述 BNPL 业者使用至少四种不同的交易模式，每种各有不同的风险与经济特性：

| 交易模式 | 业者 | 主要风险特性 |
|---|---|---|
| **逐笔账单（≤2个月，一次性付款）** | NP 後払い、Kuroneko Atobarai、GMO Postpay、Komoju Atobarai | 短期应收款；逐笔平均额低；业者层面违约风险因加盟店组合而集中；便利店／银行汇款回收机制 |
| **月度周期聚合钱包** | atone、Paidy、Merpay 翌月払い | 多加盟店聚合开票；消费者侧授信额度管理；月度违约率可观察周期 |
| **分期 / 分付（3-pay、6-pay、更长）** | Paidy 3-pay + 6-pay 变体、信贩分期线（APLUS、JACCS、Orico、Credit Saison） | 期限更长；典型上逐笔价值更高；改正割賦販売法 下的分期层面披露义务 |
| **发卡机构后端 BNPL 功能** | PayPay あと払い（经由 PayPay Card）、d払いカード 功能、其他 | 发卡机构授信额度经济性；经由包括信用購入あっせん 登记而非 個別 路由 |

交易模式之所以重要，是因为：(a) 逐笔账单业者与月度钱包业者具有非常不同的单位经济性（单一加盟店手续费 vs 消费者获取 LTV）；(b) 分期 / 分付 业者在改正割賦販売法 下面临不同于 ≤2个月一次性付款适用除外模式的披露义务；(c) 发卡机构后端 BNPL 在监管上是发卡机构功能，而非单独的 BNPL 产品。

## 信用风险模式分解

业者承担损失 vs 加盟店承担损失 vs 共担 这条线是矩阵中最具后果性的差异之一。存在三种主要模式：

| 风险模式 | 业者 | 经济含义 |
|---|---|---|
| **业者承担损失（保证模式）** | NP 後払い、Kuroneko Atobarai、Paidy、atone、大多数纯做者 | 加盟店完全卸下应收款风险；业者赚取更高加盟店手续费作为补偿；业者必须运营有效的信用审查 + 回收 |
| **加盟店承担损失 + 业者作为回收方** | 一些利基／较小的 BNPL 配置 | 加盟店保留应收款风险；业者仅为回收 / 开票服务赚取较小手续费 |
| **共担 / 损失分割模式** | 一些 GMO Postpay / Komoju Atobarai 配置 | 加盟店与业者按公式共担回收不能风险；加盟店手续费随之调整 |
| **发卡机构授信额度模式** | PayPay あと払い、信贩分期、发卡机构 BNPL 后端 | 发卡机构 / 信贩承担持卡人授信额度的信用风险；消费者侧信用决策与逐笔分离 |

纯做 BNPL 业者几乎一律使用业者承担损失模式，因为正是这一模式产生了能够为业者相对于加盟店径自吸收应收款而单独存在正名的加盟店手续费经济性。业者承担损失的结构性挑战在于业者必须在其资产负债表上吸收消费者信用周期的波动性，这就是为何 ABS 管道访问（依上文资金来源分析）对业者存续能力如此具后果性。

## 业者集群摘要

将矩阵表一并阅读，浮现出四个业者集群：

1. **采用业者承担损失模式的纯做 BNPL**：Net Protections HD / NP 後払い、atone、Kuroneko Atobarai（Yamato）、PayPal 旗下的 Paidy、Komoju Atobarai。它们承担应收款风险并赚取加盟店手续费；其经济性由承保模式 + ABS 访问决定。
2. **带多牌照堆栈的钱包锚点 BNPL**：Merpay / Mercari Smart Money、PayPay あと払い（经由 PayPay Card 后端）、d払い / au PAY 扩展。它们以各种配置组合资金移动 + 個別 或 包括 信用購入あっせん，并从钱包侧消费者关系 + 适用处的发卡机构 ABS 管道中获益。
3. **信贩植根的 BNPL 扩展**：APLUS、JACCS、Orico、Credit Saison。它们是参与 個別 登记簿、并将 BNPL 式产品作为众多渠道之一（汽车贷、教育贷、装修、卡等）提供的完整信贩业者。其结构性优势是多线信贩经济性 + 银行 FG 资金。
4. **较小／较新／垂直专精的纯做者**：Smarpay、Lattepay、b/43,  加上小型 個別 登记簿业者的长尾。鉴于有限的 ABS 访问与有限的跨产品 LTV，它们在 5-10 年视野上面临最高的整合压力。

读者将一个业者归入的集群，比其当前 GMV 或加盟店数更能预测其 3-5 年的竞争轨迹。

## Related

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-merchant-psp-competitive-scorecard]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/cashless-jp-landscape]]
- [[payment-firms/net-protections-hd]]
- [[payment-firms/atone]]
- [[payment-firms/kuroneko-atobarai]]
- [[payment-firms/gmo-postpay]]
- [[payment-firms/paidy]]
- [[payment-firms/mercari-hd]]
- [[payment-firms/merpay]]
- [[card-issuers/aplus]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/credit-saison]]
- [[payment-firms/paypal-pte-ltd-japan]]
- [[card-issuers/paypay-card]]
- [[payment-firms/paypay]]
- [[regional-banks/sbi-shinsei-bank]]
- [[INDEX|FinWiki index]]

## Sources

- METI: 登録個別信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI: 登録包括信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI: クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI: registered operator lists portal — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: 割賦販売法 after-payment / 後払い FAQ — https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI: 改正割賦販売法 page — https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- Net Protections HD corporate / IR: https://corp.netprotections.com/ir/
- atone product page: https://www.atone.be/
- Yamato Group / Kuroneko Atobarai: https://www.kuronekoyamato.co.jp/ytc/business/option/payment/
- GMO Postpay: https://www.gmo-pp.co.jp/
- Paidy: https://paidy.com/
- Komoju Atobarai: https://komoju.com/ja/payments/atobarai/
- Mercari press releases: https://about.mercari.com/press/
- CAA (消費者庁) payment-trouble caution: https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- Operator IR disclosure (公開分) for listed operators: [[payment-firms/net-protections-hd|Net Protections HD]] (TSE PRIME 7383), [[card-issuers/jaccs|JACCS]] (TSE PRIME 8584), [[card-issuers/orico|Orico]] (TSE PRIME 8585), [[card-issuers/credit-saison|Credit Saison]] (TSE PRIME 8253), [[payment-firms/mercari-hd|Mercari HD]] (TSE PRIME 4385)

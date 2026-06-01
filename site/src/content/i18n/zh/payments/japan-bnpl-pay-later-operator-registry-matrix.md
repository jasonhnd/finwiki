---
source: payments/japan-bnpl-pay-later-operator-registry-matrix
source_hash: 6d17585c82222549
lang: zh
status: machine
fidelity: ok
title: "日本 BNPL / pay-later 运营方登记矩阵"
translated_at: 2026-06-01T03:31:12.238Z
---

# 日本 BNPL / pay-later 运营方登记矩阵

## TL;DR

日本 BNPL / 後払い 版图主要由 **割賦販売法 (Installment Sales Act)** 通过 **個別信用購入あっせん業者**（individual credit-purchase intermediary）登记线监管，METI 是主要监管者。METI 登録個別信用購入あっせん業者 清单截至 2026-04  月末（根据 [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]）约有 138  家已登记运营方，其中较小一部分 — 约 15-20  家 — 以有意义规模实际运营消费者可见的 BNPL / 後払い 产品。本矩阵按决定 BNPL 经济性的轴线刻画这些活跃运营方：母公司 / 所有权、交易模型（单笔延期支付 vs 分期）、信用风险模型（运营方承担损失 vs 商户承担损失 vs 共同分担）、资金来源、商户类别专门化、月交易量数量级、登记年份，以及 2020  改正割賦販売法 框架下的监管层级（認定包括 / 少額包括 / 個別 / exemption）。该矩阵是 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 的运营方层面配套页面，也是 [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]] 中 BNPL 特定切面的展开。

## Wiki route

本页位于 [[payments/INDEX|payments index]] 之下，是 BNPL 运营方层面的参考。可与 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 一起阅读，用于单产品分类测试；与 [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] 一起阅读，用于 METI 登记轨迹；与 [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]] 一起阅读，用于更广消费者信贷语境中的 BNPL 类别；与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 一起阅读，用于跨支付方案经济性视图中的 BNPL 行；与 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] 一起阅读，用于 BNPL 偏离的角色分离框架；并与运营方锚点 [[JapanFG/net-protections-hd|Net Protections HD]]、[[JapanFG/atone|atone]]、[[JapanFG/kuroneko-atobarai|Kuroneko Atobarai]]、[[JapanFG/gmo-postpay|GMO Postpay]]、[[JapanFG/paidy|Paidy]]、[[JapanFG/mercari-hd|Mercari HD]]、[[JapanFG/aplus|APLUS]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]]、[[JapanFG/credit-saison|Credit Saison]] 配套阅读。

## 为什么这个矩阵重要

BNPL 是日本监管上最模糊的支付类别。相同的 checkout UX（一个“通过便利店 / 银行转账后付款”或“下月支付”按钮）可能路由到：(a) Installment Sales Act 下的 個別信用購入あっせん 登记运营方，(b) 避开 個別 登记的豁免阈值延期支付结构，(c) 2020  改正割賦販売法 引入的 認定包括信用購入あっせん 或 少額包括信用購入あっせん 制度，(d) 既有发卡方的 BNPL 扩展中的 包括信用購入あっせん 制度（PayPay あと払い → [[JapanFG/paypay-card|PayPay Card]] backend），或 (e) 结合资金转移 + 後払い 层的混合结构（Mercari / Merpay）。如果没有按运营方拆解的视图，读者会把 checkout 看起来相同、但牌照栈、信用风险模型和消费者保护制度实质不同的运营方混为一谈。本矩阵就是 [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] 页面指向的运营方层面界面。

Consumer Affairs Agency（消費者庁 / CAA）对 **BNPL 现金化滥用**（現金化目的後払い）以及导致过度借款的 UX 模式维持活跃警示渠道 — 见来源中的 CAA payment-trouble caution 页面。本矩阵跟踪监管层级和登记历史，使读者能识别哪些运营方受到何种级别监督。

### Net Protections HD（NP 後払い, TSE PRIME 7383）

[[JapanFG/net-protections-hd|Net Protections HD]]（TSE PRIME 7383）是日本最早的 BNPL pure-play，并运营 **NP 後払い** 这种基于发票的 BtoC 产品，EC 商户把它作为“通过便利店 / 银行转账后付款”选项接入。集团还运营 **atone**（消费者侧月度周期 BNPL 钱包）、**NP 掛け払い**（BtoB 开票）和 **AFTEE**（面向台湾 / 越南的东南亚 BNPL）。NP 後払い 的定义性特征是**保证模型 BNPL** — Net Protections 以商户费为对价吸收未回收付款风险，使商户完全外包应收账款管理。它在 METI 清单上登记为 個別信用購入あっせん業者。2021-12  在 TSE PRIME 上市。

### atone（Net Protections 子公司）

[[JapanFG/atone|atone]] 是 Net Protections 的消费者侧月度周期 BNPL 钱包，不同于 NP 後払い 的单笔交易开票模型。atone 为消费者提供账户，把多家商户的 BNPL 购买汇总为一笔月度便利店 / 银行转账付款，UX 类似 [[JapanFG/paidy|Paidy]]，但经济性独立（非 PayPal）。监管上，atone 使用与 NP 後払い 相同的 Net Protections 牌照栈（Installment Sales Act 個別信用購入あっせん）。品牌分拆使 Net Protections 能在“月度周期 BNPL 钱包”板块竞争，而不稀释 NP 後払い 的“商户侧 BNPL gateway”品牌。

### Kuroneko Atobarai（Yamato Financial Holdings）

[[JapanFG/kuroneko-atobarai|Kuroneko Atobarai (クロネコ後払い)]] 是 Yamato 集团金融实体运营的 BNPL 产品线，利用 Yamato Transport 的全国配送网络。其独特商户适配点是**通过 Yamato Delivery 发货的 EC 购买** — BNPL 收款可与配送确认绑定，使 Kuroneko Atobarai 对已经以 Yamato 为主承运商的 EC 商户具备结构性成本优势。它登记在 METI 登録個別信用購入あっせん業者 清单上。该产品自然适合与 [[JapanFG/net-protections-hd|Net Protections]] NP 後払い 同属“配送绑定发票 BNPL”板块，商户价值是“我们把配送 + 收款打包处理”。

### GMO Postpay（GMO Payment Gateway group）

[[JapanFG/gmo-postpay|GMO Postpay]] 是 [[business/gmo-internet-group|GMO Internet Group]] / [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] 後払い 产品线，设计为与更广的 GMO-PG 商户基础整合，作为与卡 / 码 / 便利店支付方式并列的 後払い 选项。GMO-PG 整合意味着已经在 GMO-PG 上的商户，无需建立单独 gateway 关系即可添加 GMO Postpay 作为额外支付方式 — 这是 後払い 产品的结构性渠道优势。它登记在 METI 登録個別信用購入あっせん業者 清单上。向 GMO-PG 约 30万 家商户基础自然交叉销售，是主要规模驱动因素。

### Paidy（PayPal 持有）

[[JapanFG/paidy|Paidy]] 是 PayPal 持有的消费者侧月度周期 BNPL 运营方，拥有标准月度便利店 / 银行转账付款、3-pay（拆分为 3  个月分期）以及面向高客单购买的更长期分期等多产品变体。PayPal 于 2021-09  以约 USD 2.7  billion 收购（见 [[JapanFG/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]] 条目和 PayPal Holdings 公开披露）。Paidy 的独特规模优势是**与主要 EC 商户整合（Amazon Japan 是旗舰整合）**以及 PayPal 全球 footprint 的交叉杠杆。它登记在 METI 登録個別信用購入あっせん業者 清单上。

### Komoju Atobarai（Degica）

Komoju Atobarai 是 Degica / Komoju 自有品牌 後払い 产品，整合进 Komoju PSP gateway，面向希望在 Komoju 的卡 / 码 / Konbini 支付方式覆盖之外提供 後払い 的商户（Komoju 的垂直专长是数字内容 / 游戏 / 跨境 — 见 [[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]）。它登记在 METI 登録個別信用購入あっせん業者 清单上。自然适配场景是希望为没有活跃信用卡的持卡人提供 後払い 替代方式的数字内容 / 游戏商户。

### Smarpay

Smarpay（株式会社Smartpay 等）是相对较新的 BNPL 进入者，出现在 2020 年代 BNPL 发布浪潮中，提供带分期支付可选性的消费者侧 BNPL 产品。该运营方登记在 METI 登録個別信用購入あっせん業者 清单上。读者注意：这一类别中的独立 BNPL 运营方规模差异大，运营方持续性对消费者信贷周期条件敏感。

### Lattepay

Lattepay 是较小的 BNPL 运营方之一，参与了日本 2020-2022  BNPL 发布浪潮，并通过 Installment Sales Act 個別信用購入あっせん 路径登记。与 Smarpay 一样，Lattepay 规模小于 NP / Paidy / Atone，读者应注意运营连续性。多个较小 BNPL 运营方与主导 pure-play 并存，是 2020  改正割賦販売法 后环境的特征：登记壁垒有意义但并非禁止性。

### Mercari Smart Money / Merpay BNPL extension

[[JapanFG/mercari-hd|Mercari HD]]（TSE PRIME 4385）运营 [[JapanFG/merpay|Merpay]] 作为其支付业务，并通过 メルペイ翌月払い（Merpay next-month payment）和 Mercari Smart Money / メルペイスマートマネー 贷款产品延伸至 BNPL。定义性特征是**与 Mercari peer-to-peer marketplace 的垂直整合** — Merpay 可在 Mercari 生态内部同时完成资金来源和收款，形成与独立 BNPL 运营方不同的单位经济性。Merpay 的牌照栈结合资金转移（資金移動業），在信用购买通过该线时结合 個別信用購入あっせん 登记，并为现金型贷款产品持有 貸金業 登记 — 这是 BNPL pure-play 中少见的多牌照组合。

### b/43 (Smartbank)

b/43 （由 Smartbank, Inc. 提供）是预付 Visa 卡 + 家庭账户支出管理产品，带分期 / pay-later 可选性。b/43  产品定位更接近带 BNPL 功能的**家庭金融 / 家庭预算工具**，而不是纯 BNPL pure-play。信用 / 後払い 组件视具体产品功能，在 Installment Sales Act 個別 / Payment Services Act 前払い 线上取得适当牌照。读者注意：像 b/43  这样以预付为主的产品的 BNPL 扩展，与 NP 後払い 或 Paidy 这样的纯 BNPL pure-play 处于略有不同的类别。

### NP後払い（Net Protections 下的独立品牌列示）

NP後払い 是 Net Protections 基于发票 BNPL 产品的客户可见品牌（与 Net Protections HD 章节所述同一产品）。此处单独列示，是因为**商户和消费者通常独立于 Net Protections 公司名识别 NP 後払い 品牌**，且登记由株式会社ネットプロテクションズ（运营子公司）持有，而不是控股实体。品牌 vs 实体区分对照 METI 登録個別信用購入あっせん業者 清单查询很重要 — 登记册上的运营方名称是运营子公司。

### Mitsui Sumitomo Card / SMBC-side BNPL extensions

[[JapanFG/smbc-card|SMBC Card]] 通过 Vpass / 三井住友カード あと払い + V Point 生态拥有 BNPL 邻接扩展，允许持卡人在购买后把特定交易转换为分期支付条件。这些扩展位于既有 包括信用購入あっせん（发卡方）登记之上，而不是单独的 個別 登记，因为底层应收账款是发卡信用额度应收账款。从消费者视角看，它们像 BNPL；但从监管视角看，它们是卡信用额度扩展功能。[[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/rakuten-card|Rakuten Card]] 和其他主要发卡方也适用同一模式。

### PayPay あと払い（via PayPay Card backend）

PayPay あと払い 是通过 [[JapanFG/paypay|PayPay]] 钱包 UX 提供的 BNPL 感产品，但信用额度 backend 是 [[JapanFG/paypay-card|PayPay Card]]（发卡实体）。PayPay 钱包充当消费者可见 UX 层，PayPay Card 包括信用購入あっせん 登记承载信用应收账款。这里将其列入**边界案例** — 从消费者视角看它等同 BNPL，但从监管视角看它在发卡方登记上运行。同一模式也适用于 d払い / au PAY / 楽天ペイ 通过关联发卡方 backend 扩展 BNPL 等价功能的情况。

### Shinpan-side BNPL：APLUS, JACCS, Orico, Credit Saison

[[JapanFG/aplus|APLUS]]（[[JapanFG/sbi-shinsei-bank|SBI Shinsei]] group）、[[JapanFG/jaccs|JACCS]]（[[JapanFG/mufg|MUFG]] equity-method）、[[JapanFG/orico|Orico]]（[[JapanFG/mizuho-fg|Mizuho]] + Itochu）和 [[JapanFG/credit-saison|Credit Saison]]（独立）都持有 個別信用購入あっせん 登记作为其主要 shinpan 业务线，并以独立消费者品牌或商户前端 BNPL 产品的 white-label backend 形式运营 BNPL 风格产品。它们相对于 BNPL pure-play 的结构性优势是**多线 shinpan 经济性** — 通过 BNPL 渠道获得的客户可被交叉销售到 auto-loan、リフォームローン、教育ローン 和卡产品，产生单一产品 BNPL pure-play 无法匹配的多产品 LTV。它们纳入本矩阵，并不是因为它们在 pure-play 意义上是“BNPL 运营方”，而是因为**它们是 個別信用購入あっせん 登记线中的主要参与者，而 BNPL pure-play 也在该线登记**，shinpan-shopping-credit 与 BNPL 之间的监管边界本来就结构性模糊。

## 大型比较矩阵表

| Operator | Parent / ownership | License registration | Listing | Registration year (approx) | Transaction model | Credit-risk model | Funding source | Primary merchant categories | Monthly tx volume order | Regulatory tier (2020 改正割賦販売法 framework) |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[JapanFG/net-protections-hd\|Net Protections / NP 後払い]]** | Independent (listed) | 個別信用購入あっせん業者 (METI) | TSE PRIME 7383 (listed 2021-12) | Pre-2010 | Per-transaction invoice; ≤2-month or installment | Operator-eats-loss (guarantee model) | Equity + ABS pipeline emerging | EC general (apparel, cosmetics, food, general retail) | Tens of millions of tx / year | 個別 |
| **[[JapanFG/atone\|atone (Net Protections)]]** | Net Protections subsidiary | 個別信用購入あっせん業者 (METI) | Subsidiary | Mid-2010s | Monthly-cycle aggregated BNPL wallet | Operator-eats-loss | Equity + parent | Multi-merchant BtoC consumer | Several million users | 個別 |
| **[[JapanFG/kuroneko-atobarai\|Kuroneko Atobarai (Yamato)]]** | Yamato Financial Holdings | 個別信用購入あっせん業者 (METI) | Subsidiary | 2000s | Per-transaction invoice; ≤2-month | Operator-eats-loss (guarantee model) | Yamato group balance sheet | EC general (Yamato-delivery-shipped) | Tens of millions of tx / year | 個別 |
| **[[JapanFG/gmo-postpay\|GMO Postpay]]** | [[business/gmo-internet-group\|GMO Internet]] / [[JapanFG/gmo-payment-gateway\|GMO-PG]] | 個別信用購入あっせん業者 (METI) | Subsidiary | 2010s | Per-transaction invoice; ≤2-month or installment | Operator-eats-loss + merchant co-share variants | GMO group balance sheet + ABS | EC general (GMO-PG merchant base) | Millions of tx / year | 個別 |
| **[[JapanFG/paidy\|Paidy]]** | PayPal Holdings ([[JapanFG/paypal-pte-ltd-japan\|PayPal Pte. Ltd. Japan]]); acquired 2021-09 | 個別信用購入あっせん業者 (METI) | Subsidiary of PayPal | 2010s | Monthly-cycle aggregated BNPL + 3-pay + installment | Operator-eats-loss; ABS / securitization | Equity + receivables securitization route | EC general; Amazon Japan flagship integration | Tens of millions of tx / year | 個別 (with 認定/少額包括 watch) |
| **Komoju Atobarai (Degica)** | Degica / Komoju (independent) | 個別信用購入あっせん業者 (METI) | Subsidiary of Degica | 2010s-2020s | Per-transaction invoice | Operator-eats-loss + merchant co-share | Komoju group balance sheet | Digital content, gaming, cross-border EC | Smaller; vertical-specialized | 個別 |
| **Smarpay** | Independent (Smartpay) | 個別信用購入あっせん業者 (METI) | Non-listed | 2020-2022 launch wave | Per-transaction + installment | Operator-eats-loss; smaller scale | Equity / investor-backed | EC general | Smaller | 個別 |
| **Lattepay** | Independent | 個別信用購入あっせん業者 (METI) | Non-listed | 2020-2022 launch wave | Per-transaction | Operator-eats-loss; smaller scale | Equity | EC general | Smaller | 個別 |
| **[[JapanFG/merpay\|Merpay / Mercari Smart Money]]** | [[JapanFG/mercari-hd\|Mercari HD]] (TSE PRIME 4385) | 個別信用購入あっせん業者 + 資金移動業 + 貸金業 (multi-license) | Subsidiary of Mercari HD | 2010s for Merpay; Smart Money later | Monthly-cycle aggregated BNPL + 翌月払い + cash-loan | Operator-eats-loss within Mercari ecosystem | Mercari group balance sheet | Mercari marketplace + external merchants | Tens of millions of tx / year | 個別 + 包括 in extensions |
| **b/43 (Smartbank)** | Smartbank, Inc. (independent) | Prepaid (前払い式) + 個別信用購入あっせん for credit extensions | Non-listed | 2020s | Prepaid + family-finance with pay-later optionality | Mostly prepaid; credit lines smaller scale | Equity / investor-backed | Family / household finance | Smaller | 前払い式 + 個別 (mixed) |
| **NP後払い (separate brand)** | Operated under Net Protections | 個別信用購入あっせん業者 (METI) — same operating entity as Net Protections | Brand under listed entity | Pre-2010 | Same as Net Protections HD entry | Operator-eats-loss | Equity | EC general | (Same as Net Protections HD) | 個別 |
| **PayPay あと払い** | [[JapanFG/paypay\|PayPay]] wallet UX, [[JapanFG/paypay-card\|PayPay Card]] backend | 包括信用購入あっせん (card-issuer registration) | Subsidiaries of PayPay FG / SoftBank | 2010s (PayPay Card founding) | Card-line installment / revolving + あと払い feature | Card-issuer model (operator credit screening) | Card-issuer balance sheet + ABS pipeline | PayPay-merchant ecosystem + general | Tens of millions of tx / year | 包括 (card-issuer line, not 個別) |
| **[[JapanFG/aplus\|APLUS]] BNPL extensions** | [[JapanFG/sbi-shinsei-bank\|SBI Shinsei]] | 個別信用購入あっせん + 包括 | Subsidiary of SBI Shinsei | Pre-2010 | Per-transaction + installment; shinpan-rooted | Shinpan-loss-eats; multi-license amortization | Bank-FG funding + ABS | Auto / shopping / various | Tens of millions of tx / year | 個別 + 包括 (shinpan, not pure BNPL) |
| **[[JapanFG/jaccs\|JACCS]] BNPL extensions** | [[JapanFG/mufg\|MUFG]] equity-method | 個別信用購入あっせん + 包括 | TSE PRIME 8584 | Pre-2010 | Per-transaction + installment | Shinpan-loss-eats | Bank-FG funding + ABS | Auto / education / リフォーム / general | Tens of millions of tx / year | 個別 + 包括 (shinpan) |
| **[[JapanFG/orico\|Orico]] BNPL extensions** | [[JapanFG/mizuho-fg\|Mizuho]] + Itochu | 個別信用購入あっせん + 包括 | TSE PRIME 8585 | Pre-2010 | Per-transaction + installment | Shinpan-loss-eats | Bank-FG funding + ABS | Auto / shopping / general | Tens of millions of tx / year | 個別 + 包括 (shinpan) |
| **[[JapanFG/credit-saison\|Credit Saison]] BNPL extensions** | Independent (listed) | 個別信用購入あっせん + 包括 | TSE PRIME 8253 | Pre-2010 | Per-transaction + card-line revolving | Card-issuer + shinpan mixed | Equity + ABS | General consumer + Marui-adjacent retail | Tens of millions of tx / year | 個別 + 包括 (card-issuer + shinpan) |

### 侧轴 — 登记轨迹和监督状态

METI 登録個別信用購入あっせん業者 PDF 清单是规范登记源。针对矩阵中的任何具体运营方，读者工作流如下：

1. 从 [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] portal 打开 METI 登録個別信用購入あっせん業者 PDF。
2. 在 PDF 中搜索运营实体名称（注意：品牌 vs 实体区分 — 登记册列的是 株式会社X，而不是品牌）。
3. 如果运营方直接处理卡号，交叉核对 METI クレジットカード番号等取扱契約締結事業者 PDF。
4. 对任何有钱包 / 資金移動業 支线的运营方（Mercari、PayPay 等），交叉核对 FSA 資金移動業者 清单。
5. 对有行政处分报道的 BNPL 运营方，交叉核对 METI 後払い行政処分状況 页面。

METI 後払い 行政处分页面是针对 後払い 运营方任何监督行动的规范来源 — 追踪 BNPL 运营方风险的读者应直接监测该页面，而不是依赖二手报道。

### 侧轴 — 信用信息机构会员资格

| 运营方类型 | JICC | CIC | KSC（银行） |
|---|---|---|---|
| Pure-play BNPL（NP, atone, Kuroneko, Paidy 等） | 部分 | 部分（Paidy 披露引用 CIC） | 通常不是 |
| 带 BNPL 扩展的 shinpan（APLUS, JACCS, Orico, Credit Saison） | 是 | 是 | 选择性 |
| 发卡方 BNPL 扩展（PayPay Card, Rakuten Card, SMBC Card 等） | 是 | 是 | 选择性 |
| 钱包锚定 BNPL（Merpay） | 是 | 是 | 通常不是 |

机构会员资格塑造支持运营方信用筛选的消费者信用信息共享 — 机构会员资格有限的运营方无法可靠检查申请人在自身数据之外的信用历史，这也是小型 pure-play BNPL 运营方默认率高于拥有完整机构访问的 shinpan-rooted 运营方的结构性原因之一。

## 2020 改正割賦販売法 监管层级框架

2020  改正割賦販売法（2021-04 生效）为 包括信用購入あっせん 运营方引入分层框架，对 BNPL 运营方版图产生影响：

| 层级 | 阈值 | 运营方含义 |
|---|---|---|
| **包括信用購入あっせん（标准）** | 标准 包括信用購入あっせん 登记 | 按 改正割賦販売法 承担完整信用筛选义务 |
| **認定包括信用購入あっせん業者** | 符合先进数据筛选认证的运营方 | 允许使用 AI / 数据化筛选，并获得监管认可 |
| **少額包括信用購入あっせん業者** | 面向小额 BNPL 的较低阈值 | 适合小额 BNPL 的较轻筛选义务 |
| **個別信用購入あっせん業者** | 单笔交易信用购买中介 | 大多数 pure-play BNPL 运营方所在的线 |
| **Exemption thresholds** | ≤2 个月单笔延期支付 + 特定商户前端模型 | 符合条件结构不需要 個別 登记 |

引入 認定包括 和 少額包括，是专门为了把部分 BNPL 运营方纳入 包括 制度的轻量版本，因为既有 個別 登记并不完全适配月度周期、多商户 BNPL 钱包产品。截至 2026, ，专门登记为 少額包括 的运营方数量很少，但框架已经存在。

2024  BNPL clarification round 在 改正割賦販売法 下继续收紧豁免延期支付与已登记 個別信用購入あっせん 之间的边界 — 由此形成的单产品分类测试见 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]。

## 运营方集合中的资金来源模式

| 资金来源模式 | 运营方 |
|---|---|
| **纯股权 + 投资者资本** | Smarpay, Lattepay, Komoju Atobarai, b/43 |
| **股权 + 新兴 ABS 管线** | Net Protections HD, atone, PayPal 旗下 Paidy |
| **母集团资产负债表** | GMO Postpay（GMO Internet Group）、Kuroneko Atobarai（Yamato Financial）、Merpay（Mercari） |
| **银行 FG 资金 + 常规 ABS** | APLUS（SBI Shinsei）、JACCS（MUFG equity-method）、Orico（Mizuho + Itochu）、Credit Saison（Mizuho-adjacent）、发卡方 BNPL backend（PayPay Card / Rakuten Card / SMBC Card / 等） |
| **外资母公司股权 + 日本侧融资** | PayPal Holdings 旗下 Paidy |

资金来源模式是决定哪些 BNPL 运营方能够维持快速账簿增长、哪些受资本约束的最大因素。拥有**常规 ABS 管线**的运营方（shinpan、发卡方、大型 pure-play under PayPal-style parents）可以在不同比例增加股本注入的情况下增长；依赖**纯股权 + 投资者资本**的运营方受融资轮约束，在消费者信贷周期下行中最脆弱。

这就是为什么 2020-2022  BNPL 发布浪潮产生许多小运营方，而在 5-10  年视野下，生存模式可能偏向 (a) 具有多牌照摊销能力的 shinpan-rooted BNPL，(b) 可访问发卡方 ABS 管线的发卡 backend BNPL，(c) 少数达到足够规模、具备常规 ABS 经济性的 pure-play；较小 pure-play 面临整合压力。

## 边界案例

- **“[[JapanFG/paidy|Paidy]] 是 BNPL 运营方还是 PayPal 产品？”** 两者都是。Paidy 是独立的 個別信用購入あっせん 登记运营方，有自己的消费者品牌和商户关系；自 2021-09  收购以来，它也是 PayPal Holdings 子公司。该收购使 Paidy 获得 PayPal 全球基础设施和资产负债表能力，但未改变其日本牌照栈或监管位置。
- **“メルカリ翌月払い / Merpay BNPL 是 BNPL 运营方还是钱包功能？”** 两者都是 — 这正是边界问题。钱包（Merpay）位于 資金移動業 登记上；翌月払い 功能位于 個別信用購入あっせん 登记上；现金贷款扩展位于 貸金業 登记上。Merpay 的多牌照栈在 BNPL 中少见，并明确跨越 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]]。
- **“PayPay あと払い 是 BNPL 吗？”** 从消费者 UX 看，是。从监管视角看，它是经 PayPay 钱包 UX 路由的 [[JapanFG/paypay-card|PayPay Card]]（包括信用購入あっせん 登记）功能。结构上它是发卡方扩展，而不是单独 BNPL 登记。d払いカード 等也适用同一模式。
- **“[[JapanFG/aplus|APLUS]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]] 是 BNPL 运营方吗？”** 它们按主要牌照是 個別信用購入あっせん業者，与 BNPL pure-play 使用相同牌照。其核心业务是早于“BNPL”术语的 shinpan / shopping-credit；在 pure-play 意义上称它们为 BNPL 运营方是类别错误，但它们是同一监管线上的主要参与者。
- **“[[JapanFG/credit-saison|Credit Saison]] 是发卡方、shinpan，还是 BNPL 运营方？”** 三者都是 — Credit Saison 持有 包括信用購入あっせん（发卡方线）+ 個別信用購入あっせん（shinpan 线）+ 貸金業（现金贷款线），使其成为日本牌照最多元的消费者信贷运营方之一。其“BNPL extensions”位于既有牌照栈上，而非单独 BNPL 登记。
- **“METI 個別 清单上的较小 / 区域运营方怎么办？”** 138 家运营方登记册包括许多小型 / 区域运营方（区域汽车经销商 captive finance、区域 shopping-credit 运营方、利基商户 個別 运营方），消费者可见 BNPL footprint 较小。本矩阵聚焦运行有意义规模消费者可见 BNPL 产品的 15-20  家运营方；追踪完整登记册的读者应直接查阅 METI PDF。
- **“BNPL vs 卡的消费者 chargeback / 争议机制如何运作？”** 卡有 Installment Sales Act 抗弁の接続 以及品牌 chargeback 规则（Visa Dispute、Mastercard Chargeback、JCB Dispute），如果商户未交付，持卡人有追索路径。BNPL pure-play 争议机制因运营方而异 — Net Protections / Paidy / 等有公开争议流程，但不存在法定跨运营方 chargeback 框架（见 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] chargeback section）。
- **“收到 METI 行政处分的 後払い 运营方怎么办？”** 当前行政处分状态请查阅 METI 後払い行政処分状況 页面（atobaraigyouseisyobunnojoukyou.html）。CAA payment-trouble caution 页面也引用一般 後払い 消费者保护问题。

## 与其他矩阵的交叉引用

- vs **[[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]**：该条目建立单产品分类测试，用于判断 checkout BNPL 功能是否触发 個別信用購入あっせん、包括信用購入あっせん、認定包括、少額包括、exemption 或 資金移動業 分类。本矩阵是该分类测试指向的运营方层面界面。
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]**：该条目是 METI 登録個別信用購入あっせん業者（截至 2026-04  月末有 138  家运营方）和 登録包括信用購入あっせん業者（241  家运营方）的登记轨迹界面。本矩阵刻画这些登记中 BNPL 活跃的子集。
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit operator comparison matrix]]**：该条目覆盖九类消费者信贷运营方（卡 / 消费金融 / shinpan / BNPL / 汽车 / 住房 / 教育 / microcredit / PSP-adjacent）。本矩阵是 BNPL 类别放大图，其中 shinpan-side 运营方（APLUS, JACCS, Orico, Credit Saison）出现在两个界面中。
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：该条目在 scheme-class 层面覆盖 card vs code vs A2A vs prepaid。BNPL 被视为卡类别下的子类别。本矩阵按运营方拆解 BNPL 子类别。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|JCB issuer ecosystem positioning matrix]]** 和 **[[payments/japan-merchant-psp-competitive-scorecard|merchant PSP competitive scorecard]]**：这些矩阵分别覆盖发卡方侧和商户 PSP 侧；本矩阵是两者的 BNPL 运营方侧补充。发卡方 backend BNPL（通过 PayPay Card 的 PayPay あと払い）与 JCB issuer matrix 相交，因为 PayPay Card 在适用时是 JCB 品牌 licensee；也与 PSP scorecard 相交，因为 SB Payment Service 是 PayPay 锚定商户的商户侧处理方。

## 近期监管压力时间线

| Date | Source | What changed |
|---|---|---|
| 2018 | METI | 改正割賦販売法 强化 加盟店調査 义务 — 直接影响登记为 個別信用購入あっせん 的 BNPL 运营方，提高边际商户关系入驻成本 |
| 2020 改正 | METI | 改正割賦販売法 引入 認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 框架，明确把部分 BNPL 运营方纳入较轻的 包括 制度 |
| 2021-04 | METI | 2020  改正割賦販売法 生效；新层级框架开始运作 |
| 2021-09 | Cross-border M&A | PayPal Holdings 以约 USD 2.7 bn 收购 [[JapanFG/paidy\|Paidy]] — 日本 BNPL 领域首个大型外资母公司收购 |
| 2021-12 | TSE | [[JapanFG/net-protections-hd\|Net Protections HD]] 在 TSE PRIME 上市（7383）；日本首家 pure-play BNPL 运营方上市 |
| 2024 | METI / CAA | 持续 改正割賦販売法 下的 BNPL clarification round + CAA payment-trouble warning channel updates |
| 2024-2025 | METI | 後払い行政処分状況 页面持续维护任何行政处分；选择性行政处分发布 |
| 2025-03 | METI / J-CSC | EC 卡支付强制 EMV 3-DS — 随卡 EC friction 增加，对 BNPL 采用产生次级影响（见 [[payments/japan-card-security-authentication-controls\|Japan card security and authentication controls]]） |
| Ongoing | CAA | 对 BNPL 现金化滥用（現金化目的後払い）和导致过度借款的 UX 模式持续警示 |

## 交易模型拆解

读者扫描本矩阵时，不应把“BNPL”压平为单一形态。上述 BNPL 运营方至少使用四种不同交易模型，每种模型风险和经济性不同：

| 交易模型 | 运营方 | 关键风险特征 |
|---|---|---|
| **单笔发票（≤2 个月，单笔支付）** | NP 後払い, Kuroneko Atobarai, GMO Postpay, Komoju Atobarai | 短期限应收；单笔平均额低；运营方层面违约风险按商户组合集中；便利店 / 银行转账收款机制 |
| **月度周期聚合钱包** | atone, Paidy, Merpay 翌月払い | 多商户聚合账单；消费者侧信用额度管理；月度违约率可观察周期 |
| **分期 / split-pay（3-pay, 6-pay, 更长期）** | Paidy 3-pay + 6-pay variants, shinpan installment lanes (APLUS, JACCS, Orico, Credit Saison) | 更长期限；通常客单价更高；改正割賦販売法 下有分期级披露义务 |
| **发卡方 backend BNPL 功能** | PayPay あと払い (via PayPay Card), d払いカード features, others | 发卡方信用额度经济性；通过 包括信用購入あっせん 登记而非 個別 路由 |

交易模型很重要，因为：(a) 单笔发票运营方与月度钱包运营方单位经济性非常不同（单一商户费 vs 消费者获取 LTV）；(b) 分期 / split-pay 运营方面对的 改正割賦販売法 披露义务不同于 ≤2 个月单笔支付豁免模型；(c) 发卡方 backend BNPL 在监管上是发卡方功能，不是单独 BNPL 产品。

## 信用风险模型拆解

运营方承担损失 vs 商户承担损失 vs 共同分担，是矩阵中最重要的差异之一。存在三种主要模式：

| 风险模型 | 运营方 | 经济含义 |
|---|---|---|
| **运营方承担损失（保证模型）** | NP 後払い, Kuroneko Atobarai, Paidy, atone, most pure-plays | 商户完全外包应收风险；运营方收取更高商户费作为补偿；运营方必须运行有效信用筛选 + 催收 |
| **商户承担损失 + 运营方作为收款方** | 部分利基 / 小型 BNPL 配置 | 商户保留应收风险；运营方仅为收款 / 账单服务赚取较小费用 |
| **共同分担 / split-loss 模型** | 部分 GMO Postpay / Komoju Atobarai 配置 | 商户和运营方按公式分担未回收付款风险；商户费相应调整 |
| **发卡方信用额度模型** | PayPay あと払い, shinpan-installment, card-issuer BNPL backends | 发卡方 / shinpan 承担持卡人信用额度信用风险；消费者侧信用决策与单笔交易分离 |

Pure-play BNPL 运营方几乎普遍使用运营方承担损失模型，因为这正是产生商户费经济性、使运营方相对于商户自行吸收应收账款具有独立存在理由的机制。运营方承担损失的结构性挑战在于，运营方必须在资产负债表上吸收消费者信贷周期波动，因此 ABS 管线访问（如上文资金来源分析）对运营方可行性至关重要。

## 运营方集群总结

合并阅读矩阵表后，可以看到四个运营方集群：

1. **采用运营方承担损失模型的 pure-play BNPL**：Net Protections HD / NP 後払い、atone、Kuroneko Atobarai（Yamato）、PayPal 旗下 Paidy、Komoju Atobarai。这些运营方承担应收风险并赚取商户费；其经济性由承保模型 + ABS 访问决定。
2. **钱包锚定、具有多牌照栈的 BNPL**：Merpay / Mercari Smart Money、PayPay あと払い（via PayPay Card backend）、d払い / au PAY extensions。这些以不同配置结合 funds-transfer + 個別 或 包括 信用購入あっせん，并受益于钱包侧消费者关系，以及适用时的发卡方 ABS 管线。
3. **Shinpan-rooted BNPL 扩展**：APLUS、JACCS、Orico、Credit Saison。这些是完整 shinpan 运营方，参与 個別 登记，并把 BNPL 风格产品作为多个渠道之一（auto-loan、education-loan、リフォーム、card 等）。其结构性优势是多线 shinpan 经济性 + 银行 FG 融资。
4. **较小 / 较新 / 垂直专长 pure-play**：Smarpay、Lattepay、b/43,  以及小型 個別 登记运营方长尾。鉴于 ABS 访问有限和跨产品 LTV 有限，它们在 5-10  年视野下面临最高整合压力。

读者把运营方归入哪个集群，比其当前 GMV 或商户数量更能预测其 3-5  年竞争轨迹。

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
- [[JapanFG/net-protections-hd]]
- [[JapanFG/atone]]
- [[JapanFG/kuroneko-atobarai]]
- [[JapanFG/gmo-postpay]]
- [[JapanFG/paidy]]
- [[JapanFG/mercari-hd]]
- [[JapanFG/merpay]]
- [[JapanFG/aplus]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/credit-saison]]
- [[JapanFG/paypal-pte-ltd-japan]]
- [[JapanFG/paypay-card]]
- [[JapanFG/paypay]]
- [[JapanFG/sbi-shinsei-bank]]
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
- Operator IR disclosure (公開分) for listed operators: [[JapanFG/net-protections-hd|Net Protections HD]] (TSE PRIME 7383), [[JapanFG/jaccs|JACCS]] (TSE PRIME 8584), [[JapanFG/orico|Orico]] (TSE PRIME 8585), [[JapanFG/credit-saison|Credit Saison]] (TSE PRIME 8253), [[JapanFG/mercari-hd|Mercari HD]] (TSE PRIME 4385)

---
source: payments/visa-mastercard-amex-jcb-japan-operating-comparison
source_hash: 42288ade60cedf39
lang: zh
status: machine
fidelity: ok
title: "Visa Mastercard AMEX JCB 日本运营比较"
translated_at: 2026-06-19T06:09:18.153Z
---

# Visa Mastercard AMEX JCB 日本运营比较

## Wiki 路径

本条目归属于 [[payments/INDEX|payments index]]，作为 **四品牌交叉比较页面**，与 [[payments/jcb-three-party-operating-model|JCB three-party operating model]] 配合用于 JCB 专项深度剖析、[[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] 用于角色分离框架、[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] 用于手续费流的后果、[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 用于跨方案经济性视角，以及 [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] 用于同时落在全部四个品牌上的 EMV 3-DS / J-CSC 强制要求。品牌锚点为 [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]、[[payment-firms/mastercard-japan|Mastercard Japan]]、[[payment-firms/american-express-international-japan|American Express International Japan]] 和 [[card-issuers/jcb|JCB Co Ltd]] / [[payment-firms/jcb-international|JCB International]]。被引用的主要发卡机构 / 收单机构对手方包括 [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]、[[card-issuers/epos-card|Epos Card]] 和 [[card-issuers/paypay-card|PayPay Card]]。

## TL;DR

在日本运营的四个国际品牌——**Visa、Mastercard、American Express、JCB**——常被当作可互换的「信用卡品牌」，但它们坐落于 **结构上不同的运营位置**。Visa 和 Mastercard 运营 **四方方案**，拥有各自被许可的发卡机构与收单机构，在日本主要通过 [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] 等被许可方分销。American Express 运营以其自身日本主体为中心的 **三方闭环方案**，以 **经由 Saison-AMEX Persona 合作的 Credit Saison** 作为主要的外部发卡合作方。JCB 运营 **带有混合发卡许可层的三方品牌模型**，将 JCB Co Ltd 的品牌 / 收单 / 发卡角色与日本约 30 家合作发卡公司相结合。四品牌还在法律主体、JP 商户受理份额（JCB 与 Visa 在受理上领先；AMEX 落后）、银行 JV 结构（V/MC 为 MUFG NICOS；AMEX 为 AMEX-Saison Persona）以及各品牌战略分化的 **2025-2026 代理支付 / push-to-card 叠加**（Visa Direct、Mastercard Send、JCB-Pay 叠加）方面有所不同。本矩阵沿着实际决定日本手续费经济性、商户选择、发卡机构关系和竞争地位的运营维度，将四品牌并列。

## 本比较为何重要

三种说法常常混淆四品牌分析。第一，「它们都只是卡品牌」——将四方对三方的区别（见 [[payments/jcb-three-party-operating-model|JCB three-party operating model]]）平板化，会掩盖驱动商户手续费经济性的「有无 interchange」的分叉。第二，「JCB 仅在国内重要」——JCB International 的全球收单合作（Discover Global Network、CTBC、KB Kookmin 等）以及 JCB 在韩国 / 台湾 / 东南亚的入境游客受理角色，使 JCB 在全球的相关性高于其标题受理足迹所暗示的程度。第三，「AMEX 只是高端」——**Credit Saison Persona JV** 的发卡线意味着 AMEX 在日本的发卡足迹实质上比其闭环声誉所暗示的更广。本矩阵将这三者直接呈现以供解读。

## 四大品牌比较矩阵

| 维度 | Visa | Mastercard | American Express | JCB |
|---|---|---|---|---|
| **日本法律主体（主要）** | Visa Worldwide Pte Ltd（日本分行）（[[payment-firms/visa-worldwide-japan\|Visa Worldwide Japan]]） | Mastercard Japan K.K.（[[payment-firms/mastercard-japan\|Mastercard Japan]]） | American Express International Inc.（日本分行）（[[payment-firms/american-express-international-japan\|AMEX International Japan]]） | JCB Co Ltd（[[card-issuers/jcb\|JCB]]）+ JCB International Co Ltd（[[payment-firms/jcb-international\|JCB International]]） |
| **集团母公司** | Visa Inc.（NYSE: V，美国上市） | Mastercard Inc.（NYSE: MA，美国上市） | American Express Co.（NYSE: AXP，美国上市） | 非公开（主要股东包括 MUFG、SMFG、瑞穗、日本生命、东京海上、NTT Data 等） |
| **方案类型** | 四方（开放） | 四方（开放） | 三方（闭环核心）+ 合作发卡层 | 带有广泛合作发卡生态的三方（混合） |
| **品牌在日本的角色** | 纯品牌 / 网络运营方；不直接发卡或收单 | 纯品牌 / 网络运营方；不直接发卡或收单 | 品牌 + 主要发卡方 + 主要收单方（闭环） | 品牌 + 主要发卡方 + 主要收单方 + 向约 30 合作方的发卡许可方 |
| **日本主要发卡机构** | [[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/rakuten-card\|Rakuten Card]]、[[card-issuers/credit-saison\|Credit Saison]]、[[card-issuers/aeon-financial-service\|AEON Financial Service]]、[[card-issuers/jaccs\|JACCS]]、[[card-issuers/orico\|Orico]]、[[card-issuers/epos-card\|Epos Card]]、[[card-issuers/paypay-card\|PayPay Card]]、View Card（JR 东日本） | 与 Visa 相同的多发卡机构日本足迹：[[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/rakuten-card\|Rakuten Card]]、[[card-issuers/credit-saison\|Credit Saison]]、[[card-issuers/aeon-financial-service\|AEON Financial Service]]、[[card-issuers/jaccs\|JACCS]]、[[card-issuers/orico\|Orico]] | AMEX 直接（高端专有产品线）；经 Persona JV 的 [[card-issuers/credit-saison\|Credit Saison]]；部分联名为 [[card-issuers/mufg-nicos\|MUFG]] | JCB Co Ltd 直接；[[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/aeon-financial-service\|AEON Financial Service]]、[[card-issuers/rakuten-card\|Rakuten Card]]、[[card-issuers/credit-saison\|Credit Saison]]、[[card-issuers/jaccs\|JACCS]]、[[card-issuers/orico\|Orico]]、JR（View）、Lifecard 及约 25 其他 |
| **日本主要收单机构** | [[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/jcb\|JCB Co]]（交叉许可的收单方）、[[card-issuers/credit-saison\|Credit Saison]] 线，加上经 [[payment-firms/gmo-payment-gateway\|GMO-PG]] / [[payment-firms/sb-payment-service\|SBPS]] / [[payment-firms/dg-financial-technology\|DGFT]] 的 PSP 路由收单 | 相同集合：[[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/jcb\|JCB Co]]、[[card-issuers/credit-saison\|Credit Saison]]，经主要 PSP 路由 | AMEX 直接商户收单方（闭环核心）；为拓展低端商户广度有部分收单合作 | JCB Co Ltd 直接（主要收单方）；作为共同加盟店的协作收单方 [[card-issuers/mufg-nicos\|MUFG NICOS]]；经 PSP 由合作方路由 |
| **受理份额（CPC / Visa-MC 数据，指示性）** | n.d.（CPC / METI 未公布按品牌的受理份额）；定性上为日本最大的国际品牌受理 | 第二大的国际品牌受理；在商户网点足迹上接近 Visa | 历史上窄于 V/MC/JCB；自 AMEX-JCB 交叉受理 + Saison Persona 扩张以来更广 | 高端品牌中最强的国内日本受理；在大型商户处近乎普遍；在微型商户处弱于 V/MC |
| **interchange / 方案费结构** | 品牌设定的公布 interchange 费率（日本标准，自 2023 路线图以来披露）；显性的收单方方案费 | 与 Visa 相同结构；自 2023 路线图以来公布日本标准 interchange；显性的收单方方案费 | 闭环商户折扣率由 AMEX 双边设定（因闭环核心中发卡方 = 收单方，故无与独立发卡方的 interchange 分割）；合作发行卡（如 Saison）有内部分配 | JCB Co Ltd 直接商户：无 interchange 分割（发卡方 = 收单方）；合作发行卡：JCB 收单方与合作发卡方之间的 interchange 于 2023-06 披露（日本首个主要品牌） |
| **银行 JV 结构（日本）** | [[card-issuers/mufg-nicos\|MUFG NICOS]]（以 MUFG 为锚，V/MC 双品牌）；用于收单的与 [[card-issuers/smbc-card\|SMBC Card]] 的 SMBC GMO PAYMENT JV | [[card-issuers/mufg-nicos\|MUFG NICOS]]（与 Visa 双品牌）；与 [[card-issuers/smbc-card\|SMBC Card]] 的 SMBC GMO PAYMENT JV | **AMEX-Saison Persona 合作**（[[card-issuers/credit-saison\|Credit Saison]] 发卡 JV，可追溯至 2000）；[[card-issuers/mufg-nicos\|MUFG]] 联名卡 | 股东结构横跨银行 FG（MUFG、SMFG、瑞穗）；JCB Co Ltd 自身充当品牌-银行-发卡混合体；与大多数主要卡公司的合作发卡 JV |
| **发卡侧对拒付的责任** | 发卡方承担拒付风险；提供品牌仲裁层级 | 发卡方承担拒付风险；提供品牌仲裁层级 | AMEX 直接：闭环内部处理；Saison 发行：在 Persona 条款下由 Saison 承担发卡方拒付风险 | JCB 直接：内部处理（发卡方 = 收单方）；合作发行：由合作方承担发卡方拒付风险 |
| **EMV 3-DS / J-CSC 6.0 强制要求的遵守（2025-03）** | 强制；Visa Secure（3-DS 2.x）广泛部署 | 强制；Mastercard Identity Check（3-DS 2.x）广泛部署 | 强制；AMEX SafeKey 3-DS 已部署 | 强制；J/Secure 3-DS 已部署；品牌经由三方规则直接管理遵守 |
| **QR / 码支付叠加** | **Visa Direct** push-to-card 通道；Visa 卡上的 Tap-to-Pay / NFC 非接触 | **Mastercard Send** push-to-card；Mastercard 卡上的 Tap-to-Pay / NFC 非接触 | AMEX 非接触 / NFC 标准；无主要 QR 叠加产品 | JCB Tap（非接触）；部分市场的 JCB Pay 码支付产品 |
| **代理支付 / 代币化路线图（2025-2026）** | 用于代理发起支付的 **Visa Agentic Commerce** / **Visa Intelligent Commerce**；Visa Token Service 网络代币 | 用于代理发起支付的 **Mastercard Agent Pay** / **Mastercard Agentic Tokens**；Mastercard Digital Enablement Service（MDES） | AMEX 代理支付路线图开发中；SafeKey 适应代理流程 | JCB 路线图公开披露较少；J/Secure 在合作发行组合上适应代理流程 |
| **入境游客受理（日本境内的境外发行卡）** | 在日本商户中最大的入境受理足迹 | 第二大入境受理足迹；与 Visa 几近持平 | 在小型商户处窄于 V/MC；在酒店 / 高端 / 面向入境的零售处更广 | 来自韩国 / 台湾 / 中国的 JCB 卡是有意义的入境分部；JCB International 在收单侧 |
| **出境游客受理（境外的日本发行卡）** | 普遍的全球受理 | 普遍的全球受理 | 全球高端受理；在境外微型商户处更弱 | 在韩国 / 台湾 / 香港 / 东南亚强；Discover 联盟提供美国足迹；在欧洲更弱 |
| **国内监管对话（METI / JFTC）** | 经由日本代表处；与全球 HQ 协调 | 经由日本代表处；与全球 HQ 协调 | 经由日本代表处；与美国 HQ 协调 | 直接的国内接洽（HQ 在日本）；最先回应 2023 手续费披露请求 |
| **品牌费是否披露？** | 日本标准 interchange 于 2023-08 公布（Payments Japan 路线图） | 日本标准 interchange 于 2023-08 公布（Payments Japan 路线图） | 不单独披露（闭环商户折扣为内部） | 发卡方 / 收单方分割于 2023-06 披露（日本主要品牌中首个） |

### Visa（Visa Worldwide Pte Ltd 日本分行）

[[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]] 是 Visa Inc.（NYSE: V）在日本的主要存在。运营 **纯四方方案**：Visa 在日本既不直接发卡也不直接收单——而是将发卡与收单许可给日本国内的运营方。主要日本发卡机构横跨银行 FG 卡线（[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]）、独立系卡公司（[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]）、EC 生态卡（[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]）、以零售为锚的卡（[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/epos-card|Epos Card]]）和以交通为锚的卡（经 JR 东日本的 View Card）。收单同样横跨银行 FG 收单方与 PSP（[[payment-firms/gmo-payment-gateway|GMO-PG]]、[[payment-firms/sb-payment-service|SBPS]]、[[payment-firms/dg-financial-technology|DGFT]]）分散。

Visa 的特色日本定位：**最大的国际品牌受理足迹 + 经由与 JCB 的双品牌卡的普遍发卡覆盖**。日本发行的大多数信用卡在 JCB 国内底层之上承载 Visa 或 Mastercard 作为国际品牌，使 Visa 尽管不直接发卡仍获得实际近乎普遍的日本发卡触达。2025-2026 的 **Visa Direct push-to-card** 叠加以及 **Visa Agentic Commerce** / **Visa Intelligent Commerce** 的推出，将 Visa 定位为日本代理发起卡支付的主要基础设施。

### Mastercard（Mastercard Japan K.K.）

[[payment-firms/mastercard-japan|Mastercard Japan]] 是 Mastercard Inc.（NYSE: MA）在日本的主要存在。在方案类型（四方）、被许可发卡模型和收单关系上与 Visa 结构相同。主要日本发卡机构与收单机构几乎与 Visa 的集合完全重叠——[[card-issuers/mufg-nicos|MUFG NICOS]]（V/MC 双品牌发卡）、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] 等通常两品牌都发行。

Mastercard 的特色日本定位：**向高端分部的轻微倾斜** 以及 **2025-2026 Mastercard Send / Mastercard Agent Pay** 叠加。Mastercard 历史上被定位为日本国际品牌受理中仅次于 Visa 的强劲第二，但在商户受理足迹层面差距很小。**Mastercard Digital Enablement Service（MDES）** 网络代币化层支撑 Mastercard 的代理商务路线图，在功能上与 Visa Token Service 平行。

### American Express（American Express International Inc. Japan）

[[payment-firms/american-express-international-japan|AMEX International Japan]] 在日本以其核心的 **三方闭环方案** 运营 AMEX 品牌。AMEX 直接向日本持卡人发行其自有高端卡（Platinum、Gold、Green 等），并直接与商户签约受理。历史上这一狭窄的闭环限制了日本受理广度，但两项结构性进展实质性地扩大了 AMEX 足迹：

1. **Credit Saison Persona JV**（saisoncard.co.jp/company/persona/）：Credit Saison（[[card-issuers/credit-saison|Credit Saison]]）在 **Persona** 品牌合作下于日本发行 AMEX 品牌卡，可追溯至 2000。这赋予 AMEX 实质上超出其闭环声誉的日本发卡合作足迹，并意味着许多「日本的 AMEX 卡」实际上是在 Persona JV 下由 Saison 发行的 AMEX 品牌卡——这是一种在结构上与 JCB 的合作发卡模型相似的合作发卡安排。
2. **AMEX-JCB 交叉受理**：AMEX 卡经由 AMEX-JCB 交叉受理联盟在日本于 JCB 收单的商户处受理，从而在 AMEX 无须直接收单这些商户的情况下，实质上赋予 AMEX 使用 JCB 更广的日本受理足迹。

AMEX 的特色日本定位：**闭环高端核心 + Persona 合作发卡 + JCB 交叉受理**。其结果是一个比 AMEX 方案在许多其他市场所拥有的足迹显著更广的三方方案。AMEX 的代理商务路线图（SafeKey 适配）处于比 Visa / Mastercard 公开侧披露更早的开发阶段。

### JCB（JCB Co Ltd + JCB International Co Ltd）

JCB 运营 **带有混合发卡许可层的三方品牌模型**——在 [[payments/jcb-three-party-operating-model|JCB three-party operating model]] 中深入论述。[[card-issuers/jcb|JCB Co Ltd]]（日本国内品牌 + 主要收单方 + 发卡方 + 发卡许可方）与 [[payment-firms/jcb-international|JCB International]]（国际收单合作 + 跨境结算）之间的企业分割，是 JCB 运营模型的基础。日本约 30 家的合作发卡足迹（MUFG NICOS、AEON、Rakuten Card、Saison、JACCS、Orico、JR View、地方银行、Lifecard 等），赋予 JCB 显著大于 AMEX 以 Persona 为锚的合作发卡的日本发卡触达。

JCB 的特色日本定位：**唯一的国内日本国际品牌**、高端国内受理、用于美国受理的 **Discover Global Network 联盟**、在韩国 / 台湾 / 东南亚的区域收单合作。JCB 是首个公开披露其发卡方 / 收单方手续费分配费率的主要日本品牌（2023-06-01 METI / JFTC 联合发布），反映了在三方模型下 JCB 对商户手续费分割两端的控制。

## 发卡方 / 收单方交叉所有权矩阵

大多数主要日本卡发卡机构发行不止一个品牌。这种交叉所有权模式对于理解为何日本的发卡机构竞争是 **品牌重叠而非品牌分段** 在结构上至关重要：

| 发卡机构 | 发行 Visa？ | 发行 Mastercard？ | 发行 AMEX？ | 发行 JCB？ | 备注 |
|---|---|---|---|---|---|
| [[card-issuers/mufg-nicos\|MUFG NICOS]] | 是（锚） | 是（锚） | 是（部分联名） | 是（锚合作方） | 双 / 三品牌卡常见 |
| [[card-issuers/smbc-card\|SMBC Card]] | 是（锚） | 是（锚） | 是（部分联名） | 是（部分） | 三品牌 SMBC Olive 卡 |
| [[card-issuers/credit-saison\|Credit Saison]] | 是 | 是 | 是（Persona JV） | 是 | 四品牌发卡足迹 |
| [[card-issuers/rakuten-card\|Rakuten Card]] | 是 | 是 | 是（Rakuten Premium Card） | 是 | 在消费者基础上的四品牌 |
| [[card-issuers/aeon-financial-service\|AEON Financial Service]] | 是 | 是 | 是（部分） | 是（锚合作方） | AEON CARD Select 多品牌 |
| [[card-issuers/jaccs\|JACCS]] | 是 | 是 | 是（部分） | 是 | 多品牌联名 |
| [[card-issuers/orico\|Orico]] | 是 | 是 | 是（部分） | 是 | 多品牌联名 |
| [[card-issuers/epos-card\|Epos Card]] | 是（锚） | — | — | — | Visa 单品牌联名 |
| [[card-issuers/paypay-card\|PayPay Card]] | 是（锚） | 是 | — | 是 | 以 PayPay 为锚的发卡机构 |
| View Card（JR 东日本） | 是 | 是 | — | 是（VIEW JCB） | JR 渠道卡 |

模式：**在消费者-发卡机构层面，品牌选择通常是产品线决策，而非不同发卡机构之间的竞争性选择**。在 MUFG-NICOS 各卡之间选择的消费者，是把 Visa、Mastercard 或 JCB 作为同一发卡机构的品牌变体来选，而非作为不同发卡机构之间的选择。

## 日本商户处的受理份额（指示性）

公开的 Cashless Promotion Council 与 METI 数据，并未以本节理想上所要求的精度一致地拆分按品牌的受理份额。由于未公布权威的按品牌份额数字，下表的份额特征列标注为 `n.d.`（数据未公开）；仅保留定性的受理广度观察。

| 品牌 | 受理广度（日本商户） | 指示性份额特征 | 备注 |
|---|---|---|---|
| Visa | 最大的国际品牌足迹；在连锁商户及线上近乎普遍 | n.d.（按品牌份额未公布） | 品牌受理上普遍 |
| Mastercard | 在连锁商户及线上与 Visa 几近持平 | n.d.（按品牌份额未公布） | 品牌受理上普遍 |
| AMEX | 在微型商户处更窄；经 JCB 交叉受理更广 | n.d.（按品牌份额未公布） | 高端倾斜的受理 |
| JCB | 最大的国内品牌足迹；在大型商户处强；在主要零售处普遍 | n.d.（按品牌份额未公布） | 国内领先的受理 |

可验证的数据来源：METI 2025 无现金数据发布（https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html）、Cashless Promotion Council 码支付调查（https://paymentsjapan.or.jp/category/publications/），以及日本クレジット協会（https://www.j-credit.or.jp/）的行业统计。

## QR / 码支付叠加战略比较

四品牌在是否以及如何参与在日本与卡支付并存兴起的 QR / 码支付通道（在 [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] 中论述）上有意义地分化：

| 品牌 | push-to-card / 即时支付产品 | 码支付直接产品 | 钱包发行卡经济性 |
|---|---|---|---|
| Visa | **Visa Direct**（push-to-card；个人对个人、企业对消费者、跨境） | 无直接；Visa 卡被 PayPay / Rakuten / 各 钱包作为资金来源消费 | 普遍 — 日本大多数钱包接受 Visa 卡资金供给 |
| Mastercard | **Mastercard Send**（在功能上与 Visa Direct 平行） | 无直接；Mastercard 卡被日本钱包作为资金来源消费 | 普遍 — 日本大多数钱包接受 Mastercard 卡资金供给 |
| AMEX | AMEX Send（push-to-card；日本足迹更有限） | 无直接；AMEX 卡被日本钱包消费的情况比 V/MC 更有限 | 更窄 — 因 MDR 经济性，接受 AMEX 卡资金供给的日本钱包更少 |
| JCB | 部分市场的 J-RPay / 国内叠加产品 | 有限；部分市场的 JCB 品牌钱包 | 普遍 — 日本大多数钱包接受 JCB 卡资金供给 |

结构性模式：**Visa Direct 与 Mastercard Send 是日本钱包与汇款产品日益路由的两条主要全球 push-to-card 通道**。AMEX Send 在功能上类似但日本足迹更窄。JCB 未以同等规模构建直接竞争的 push-to-card 产品，反映了 JCB 对国内日本的聚焦。

## 代理支付叠加路线图比较

AI 代理发起的商务（在支付侧于 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 中论述）的 2025-2026 兴起，催生了四品牌之间将各自代币化 / 认证 / 授权基础设施定位为代理支付标准通道的并行竞赛：

| 品牌 | 代理支付产品 / 框架 | 代币化层 | 认证适配 |
|---|---|---|---|
| Visa | **Visa Intelligent Commerce** / **Visa Agentic Commerce** | Visa Token Service（网络代币、一次性代币） | 为代理流程以委托认证扩展的 Visa Secure（3-DS 2.x） |
| Mastercard | **Mastercard Agent Pay** / **Mastercard Agentic Tokens** | Mastercard Digital Enablement Service（MDES） | 为代理流程以委托认证扩展的 Mastercard Identity Check（3-DS 2.x） |
| AMEX | 代理支付路线图公开披露较少 | AMEX 内部代币化 | 为代理流程适配的 AMEX SafeKey 3-DS |
| JCB | 代理支付路线图公开披露较少；依赖合作发卡方 | J/Secure 代币化 | 为代理流程适配的 J/Secure 3-DS |

Visa 与 Mastercard 拥有代理支付基础设施最先进的公开侧披露；AMEX 与 JCB 处于更早的路线图披露阶段。日本国内的代理商务市场是收敛于 Visa / Mastercard 的全球通道，还是经由钱包-PSP 层发展出日本特有的叠加，是一个未决的问题——见 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]。

## 银行 JV 与合作结构比较

四品牌与日本银行及银行 FG 拥有结构上不同的关系：

| 品牌 | 银行 FG 锚关系 | JV / 合作结构 | 分销渠道 |
|---|---|---|---|
| Visa | MUFG（经 [[card-issuers/mufg-nicos\|MUFG NICOS]]）、SMFG（经 [[card-issuers/smbc-card\|SMBC Card]] + SMBC GMO PAYMENT JV） | 许可关系；无股权 JV | 银行 FG 卡线 + 多品牌联名卡 |
| Mastercard | 与 Visa 相同的银行 FG 锚 | 许可关系；无股权 JV | 银行 FG 卡线 + 多品牌联名卡 |
| AMEX | **Saison Persona JV**（[[card-issuers/credit-saison\|Credit Saison]]，自 2000以来） | 带收益分成的发卡合作 JV | Persona 发行卡 + AMEX 直接发行高端 |
| JCB | JCB Co Ltd 股东结构包括 MUFG、SMFG、瑞穗、日本生命、东京海上、NTT Data 作为重要股东 | 品牌-与-股东混合 | JCB 直接 + 30+ 合作发卡卡 |

**AMEX-Saison Persona** 合作与 **JCB 的股东结构** 是两个最具结构特色的银行关系安排。AMEX 在 Persona 之下为广泛的日本发卡而依赖 Saison，实质上将 AMEX 从纯闭环转变为混合方案；JCB 的银行 FG 股东持股，赋予 JCB 一种国际品牌无法复制的、与日本银行业的结构性对齐。

## 手续费披露与 JFTC 压力的落地

2022-04-08 JFTC 的信用卡商户手续费报告，以及关于 JCB 手续费披露的 2023-06-01 METI / JFTC 联合发布，代表着对日本卡品牌运营经济性的有意义的持续监管压力：

| 品牌 | 手续费披露状况（日本，2026-05） | JFTC 接洽 |
|---|---|---|
| Visa | 日本标准 interchange 于 2023-08 公布（Payments Japan 路线图）；按收单方的分割未披露 | 许可关系限制中央披露 |
| Mastercard | 日本标准 interchange 于 2023-08 公布（Payments Japan 路线图）；按收单方的分割未披露 | 许可关系限制中央披露 |
| AMEX | 闭环商户折扣：不单独披露；Persona 侧分配：内部 | 闭环缩小了 JFTC 对单笔交易 interchange 的范围 |
| JCB | 发卡方 / 收单方手续费分配分割于 2023-06 披露（日本主要品牌中首个） | 直接接洽；披露的先行者 |

JCB 在手续费披露上的先行者地位反映了三方模型：JCB Co Ltd 控制手续费分割的两端，可单方面披露，而 Visa 与 Mastercard 必须跨多个被许可的收单方进行协调（关于结构性解释见 [[payments/jcb-three-party-operating-model|JCB three-party operating model]]）。

## 与其他矩阵的交叉引用

- **[[payments/jcb-three-party-operating-model|JCB three-party operating model]]** vs：该条目深入剖析 JCB 的三方架构；本矩阵将 JCB 置于跨品牌语境。
- **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]** vs：该条目确立角色分离框架；本矩阵点名各品牌并展示每个品牌如何组合或分离角色。
- **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]** vs：该矩阵在方案类层面涵盖卡对码对 A2A 对预付；本矩阵将卡类分解为其四品牌运营方。
- **[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]** vs：该条目涵盖 interchange / 方案 / 收单方手续费结构；本矩阵映射品牌特定的手续费架构。
- **[[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]** vs：该矩阵涵盖位于商户与品牌之间的 PSP / 网关层；本矩阵涵盖 PSP 之上的品牌层。
- **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]** vs：该矩阵分解 JCB 的合作发卡集合；本矩阵围绕其放置品牌比较框架。

## 相关

- [[payments/INDEX]]
- [[payments/jcb-three-party-operating-model]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-merchant-psp-competitive-scorecard]]
- [[payments/japan-jcb-issuer-ecosystem-positioning-matrix]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/cashless-jp-landscape]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/mastercard-japan]]
- [[payment-firms/american-express-international-japan]]
- [[card-issuers/jcb]]
- [[payment-firms/jcb-international]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/smbc-card]]
- [[card-issuers/credit-saison]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/epos-card]]
- [[card-issuers/paypay-card]]
- [[INDEX|FinWiki index]]

## 出处

- Visa Japan 企业网站：https://www.visa.co.jp/
- Visa Japan 关于 页面：https://www.visa.co.jp/about-visa.html
- Mastercard Japan 企业网站：https://www.mastercard.co.jp/
- Mastercard Japan 关于 页面：https://www.mastercard.co.jp/ja-jp/business/about-mastercard.html
- American Express Japan：https://www.americanexpress.com/jp/
- American Express Japan 企业：https://www.americanexpress.com/ja-jp/company/
- JCB 全球网站（日文）：https://www.global.jcb/ja/
- JCB 业务领域 / 品牌：https://www.global.jcb/ja/about-us/business-area/brand/
- JCB Japan：https://www.jcb.co.jp/
- Credit Saison Persona 合作：https://www.saisoncard.co.jp/company/persona/
- MUFG NICOS 企业：https://www.cr.mufg.jp/corporate/
- METI 2023-06-01 关于 JCB 手续费披露的发布：https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html
- METI 2025 无现金支付比率发布：https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- METI 无现金政策门户：https://www.meti.go.jp/policy/mono_info_service/cashless/index.html
- Payments Japan Association 2023 无现金路线图：https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf
- Payments Japan Association 刊物：https://paymentsjapan.or.jp/category/publications/
- 日本クレジット協会：https://www.j-credit.or.jp/
- JFTC 2022-04-08 信用卡商户手续费报告：https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html

---
source: payments/visa-mastercard-amex-jcb-japan-operating-comparison
source_hash: 1c001bab672eff70
lang: zh
status: machine
fidelity: ok
title: "Visa Mastercard AMEX JCB 日本运营比较"
translated_at: 2026-06-01T03:31:12.272Z
---
# Visa Mastercard AMEX JCB 日本运营比较

## Wiki route

本条目位于 [[payments/INDEX|payments index]] 之下，是**四品牌横向比较页**；与 [[payments/jcb-three-party-operating-model|JCB three-party operating model]] 配套用于 JCB 专门深潜，与 [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] 配套用于角色分离框架，与 [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] 配套用于费用流后果，与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 配套用于跨方案经济性视角，与 [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] 配套用于同时落到四个品牌上的 EMV 3-DS / J-CSC 强制要求。品牌锚点为 [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]]、[[JapanFG/mastercard-japan|Mastercard Japan]]、[[JapanFG/american-express-international-japan|American Express International Japan]]、[[JapanFG/jcb|JCB Co Ltd]] / [[JapanFG/jcb-international|JCB International]]。引用的主要发行 / 收单交易对手包括 [[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]]、[[JapanFG/epos-card|Epos Card]]、[[JapanFG/paypay-card|PayPay Card]]。

## TL;DR

在日本运营的四个国际品牌：**Visa、Mastercard、American Express、JCB**，常被视作可互换的“信用卡品牌”，但它们处在**结构上不同的运营位置**。Visa 和 Mastercard 运行**四方方案**，发行人与收单机构分离且各自持牌，主要通过 [[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]] 及其他持牌机构在日本分发。American Express 运行以自身日本实体为中心的**三方闭环方案**，并以 **Credit Saison 通过 Saison-AMEX Persona partnership** 作为主要外部发行伙伴。JCB 运行**带混合发行人许可层的三方品牌模型**，将 JCB Co Ltd 的品牌 / 收单 / 发行角色与日本约 30  家伙伴发行公司结合。四个品牌也在法律实体、日本商户受理份额（JCB 和 Visa 领先；AMEX 落后）、银行 JV 结构（V/MC 为 MUFG NICOS；AMEX 为 AMEX-Saison Persona），以及各自策略分化的 **2025-2026  agent-payment / push-to-card overlays**（Visa Direct、Mastercard Send、JCB-Pay overlays）上有所不同。本矩阵把四个品牌按真正决定费用经济性、商户选择、发行人关系和日本竞争位置的运营维度并列展示。

## Why this comparison matters

四品牌分析常被三类说法搅混。第一，“它们都只是卡品牌”：这会抹平四方 vs 三方差异（见 [[payments/jcb-three-party-operating-model|JCB three-party operating model]]），并隐藏推动商户费用经济性的有交换费 vs 无交换费分歧。第二，“JCB 只在国内重要”：JCB International 的全球收单伙伴关系（Discover Global Network、CTBC、KB Kookmin 等）以及 JCB 在韩国 / 台湾 / 东南亚入境游客受理中的角色，使 JCB 的全球相关性高于表面受理版图。第三，“AMEX 只是高端”：**Credit Saison Persona JV** 发行线意味着 AMEX 的日本发行人版图显著大于其闭环声誉所暗示的范围。本矩阵直接呈现这三点。

## Big four-brand comparison matrix

| Dimension | Visa | Mastercard | American Express | JCB |
|---|---|---|---|---|
| **日本法律实体（主要）** | Visa Worldwide Pte Ltd（日本分行）（[[JapanFG/visa-worldwide-japan\|Visa Worldwide Japan]]） | Mastercard Japan K.K.（[[JapanFG/mastercard-japan\|Mastercard Japan]]） | American Express International Inc.（日本分行）（[[JapanFG/american-express-international-japan\|AMEX International Japan]]） | JCB Co Ltd（[[JapanFG/jcb\|JCB]]）+ JCB International Co Ltd（[[JapanFG/jcb-international\|JCB International]]） |
| **集团母公司** | Visa Inc.（NYSE: V，美国上市） | Mastercard Inc.（NYSE: MA，美国上市） | American Express Co.（NYSE: AXP，美国上市） | 私有（主要股东包括 MUFG、SMFG、Mizuho、Nippon Life、Tokio Marine、NTT Data 等） |
| **方案类型** | 四方（开放） | 四方（开放） | 三方（闭环核心）+ 伙伴发行人层 | 三方（混合），拥有广泛伙伴发行人生态 |
| **在日本的品牌角色** | 纯品牌 / 网络运营商；不直接发行或收单 | 纯品牌 / 网络运营商；不直接发行或收单 | 品牌 + 主要发行人 + 主要收单机构（闭环） | 品牌 + 主要发行人 + 主要收单机构 + 向约 30  家伙伴授予发行人许可 |
| **日本主要发行人** | [[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/rakuten-card\|Rakuten Card]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/orico\|Orico]]、[[JapanFG/epos-card\|Epos Card]]、[[JapanFG/paypay-card\|PayPay Card]]、View Card（JR East） | 与 Visa 相同的日本多发行人版图：[[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/rakuten-card\|Rakuten Card]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/orico\|Orico]] | AMEX direct（高端自有产品线）；通过 Persona JV 的 [[JapanFG/credit-saison\|Credit Saison]]；选择性联名中的 [[JapanFG/mufg-nicos\|MUFG]] | JCB Co Ltd 直接发行；[[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/rakuten-card\|Rakuten Card]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/orico\|Orico]]、JR（View）、Lifecard 及约 25  家其他发行人 |
| **日本主要收单机构** | [[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/jcb\|JCB Co]]（交叉持牌收单机构）、[[JapanFG/credit-saison\|Credit Saison]] 线，以及通过 [[JapanFG/gmo-payment-gateway\|GMO-PG]] / [[JapanFG/sb-payment-service\|SBPS]] / [[JapanFG/dg-financial-technology\|DGFT]] 的 PSP 路由收单 | 同一集合：[[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/jcb\|JCB Co]]、[[JapanFG/credit-saison\|Credit Saison]]，并通过主要 PSP 路由 | AMEX 直接商户收单（闭环核心）；部分为低端商户覆盖度而设的收单伙伴关系 | JCB Co Ltd 直接（主要收单）；[[JapanFG/mufg-nicos\|MUFG NICOS]] 作为 蜈ｱ蜷悟刈逶溷ｺ・ 合作收单机构；通过 PSP 进行伙伴路由 |
| **受理份额（CPC / Visa-MC 数据，指示性）** | n.d.（CPC / METI 不公布按品牌受理份额）；定性上为日本最大国际品牌受理 | 第二大国际品牌受理；商户地点版图接近 Visa | 历史上相较 V/MC/JCB 受理更窄；AMEX-JCB 交叉受理 + Saison Persona 扩张后更广 | 高端品牌中日本国内受理最强；大型商户近乎通用；在微型商户弱于 V/MC |
| **交换费 / 方案费结构** | 品牌设定并公布的交换费率（日本标准，自 2023  路线图以来披露）；明确的收单方案费 | 与 Visa 相同结构；自 2023  路线图以来公布日本标准交换费；明确的收单方案费 | AMEX 双边设定闭环商户折扣率（闭环核心中发行人 = 收单人，故无单独发行人交换费拆分）；伙伴发行卡（Saison 等）有内部分配 | JCB Co Ltd 直接商户：无交换费拆分（发行人 = 收单人）；伙伴发行卡：JCB 收单方与伙伴发行方之间的交换费于 2023-06  披露（日本主要品牌中首家） |
| **银行 JV 结构（日本）** | [[JapanFG/mufg-nicos\|MUFG NICOS]]（MUFG 锚定，V/MC 双品牌）；SMBC GMO PAYMENT 与 [[JapanFG/smbc-card\|SMBC Card]] 的收单 JV | [[JapanFG/mufg-nicos\|MUFG NICOS]]（与 Visa 双品牌）；SMBC GMO PAYMENT 与 [[JapanFG/smbc-card\|SMBC Card]] 的 JV | **AMEX-Saison Persona partnership**（[[JapanFG/credit-saison\|Credit Saison]] 发行人 JV，可追溯至 2000）；[[JapanFG/mufg-nicos\|MUFG]] 联名卡 | 股东结构跨银行 FG（MUFG、SMFG、Mizuho）；JCB Co Ltd 本身兼具品牌 - 银行 - 发行人混合功能；与大多数主要卡公司有伙伴发行人 JV |
| **发行人侧拒付责任** | 发行人承担拒付风险；有品牌仲裁层 | 发行人承担拒付风险；有品牌仲裁层 | AMEX direct：闭环内部处理；Saison 发行：Saison 按 Persona 条款承担发行人拒付风险 | JCB direct：内部处理（发行人 = 收单人）；伙伴发行：伙伴承担发行人拒付风险 |
| **EMV 3-DS / J-CSC 6.0  强制合规（2025-03）** | 强制；Visa Secure（3-DS 2.x）广泛部署 | 强制；Mastercard Identity Check（3-DS 2.x）广泛部署 | 强制；AMEX SafeKey 3-DS 已部署 | 强制；J/Secure 3-DS 已部署；品牌通过三方规则直接控制合规 |
| **QR / 码支付 overlay** | **Visa Direct** push-to-card 轨道；Visa 卡 Tap-to-Pay / NFC 非接触 | **Mastercard Send** push-to-card；Mastercard 卡 Tap-to-Pay / NFC 非接触 | AMEX 非接触 / NFC 标准；无主要 QR overlay 产品 | JCB Tap（非接触）；部分市场有 JCB Pay 码支付产品 |
| **Agent-payment / tokenization roadmap（2025-2026）** | 面向 agent-initiated payments 的 **Visa Agentic Commerce** / **Visa Intelligent Commerce**；Visa Token Service 网络 token | 面向 agent-initiated payments 的 **Mastercard Agent Pay** / **Mastercard Agentic Tokens**；Mastercard Digital Enablement Service（MDES） | AMEX agentic-pay 路线图开发中；SafeKey 适配 agentic flows | JCB 路线图公开较少；J/Secure 适配伙伴发行组合上的 agentic flows |
| **入境游客受理（外国发行卡在日本）** | 日本商户中最大入境受理版图 | 第二大入境受理版图；接近 Visa | 小商户处弱于 V/MC；酒店 / 高端 / 入境目标零售更广 | 来自韩国 / 台湾 / 中国的 JCB 卡是有意义的入境客群；JCB International 收单侧 |
| **出境游客受理（日本发行卡海外）** | 全球通用受理 | 全球通用受理 | 全球高端受理；海外微型商户较弱 | 韩国 / 台湾 / 香港 / 东南亚强；Discover 联盟提供美国版图；欧洲较弱 |
| **国内监管对话（METI / JFTC）** | 通过日本代表处；与全球 HQ 协调 | 通过日本代表处；与全球 HQ 协调 | 通过日本代表处；与美国 HQ 协调 | 直接国内参与（HQ 在日本）；最先回应 2023  费用披露请求 |
| **品牌费是否披露？** | 公布日本标准交换费 2023-08 （Payments Japan 路线图） | 公布日本标准交换费 2023-08 （Payments Japan 路线图） | 未单独披露（闭环商户折扣内部） | 发行人 / 收单人拆分于 2023-06  披露（日本主要品牌中首家） |

### Visa（Visa Worldwide Pte Ltd Japan branch）

[[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] 是 Visa Inc.（NYSE: V）在日本的主要存在。其运营**纯四方方案**：Visa 在日本不直接发行卡或收单，而是向日本国内运营商授予发行和收单许可。日本主要发行人覆盖银行 FG 卡线（[[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]）、独立卡公司（[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]]）、EC 生态卡（[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/paypay-card|PayPay Card]]）、零售锚定卡（[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/epos-card|Epos Card]]）和交通锚定卡（JR East 的 View Card）。收单也类似分布于银行 FG 收单机构和 PSP（[[JapanFG/gmo-payment-gateway|GMO-PG]]、[[JapanFG/sb-payment-service|SBPS]]、[[JapanFG/dg-financial-technology|DGFT]]）。

Visa 的日本独特定位是：**最大国际品牌受理版图 + 通过与 JCB 的双品牌卡实现几乎通用的发行覆盖**。多数日本发行信用卡在 JCB 国内基础上搭载 Visa 或 Mastercard 作为国际品牌，使 Visa 即使不直接发行，也取得近乎通用的日本发行触达。2025-2026  **Visa Direct push-to-card** overlay 以及 **Visa Agentic Commerce** / **Visa Intelligent Commerce** 推出，将 Visa 定位为日本 agent-initiated card payments 的主要基础设施。

### Mastercard（Mastercard Japan K.K.）

[[JapanFG/mastercard-japan|Mastercard Japan]] 是 Mastercard Inc.（NYSE: MA）在日本的主要存在。其在方案类型（四方）、持牌发行人模型和收单关系上与 Visa 结构相同。日本主要发行人和收单机构几乎完全与 Visa 集合重叠：[[JapanFG/mufg-nicos|MUFG NICOS]]（V/MC 双品牌发行）、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]] 等通常同时发行两个品牌。

Mastercard 的日本独特定位是：**略偏高端细分联名**以及 **2025-2026  Mastercard Send / Mastercard Agent Pay** overlay。Mastercard 历史上在日本国际品牌受理中被定位为 Visa 之后的强二号，但在商户受理版图层面差距很窄。**Mastercard Digital Enablement Service（MDES）** 网络代币化层支撑 Mastercard 的 agentic-commerce 路线图，功能上平行于 Visa Token Service。

### American Express（American Express International Inc. Japan）

[[JapanFG/american-express-international-japan|AMEX International Japan]] 在日本以**三方闭环方案**为核心运营 AMEX 品牌。AMEX 直接向日本持卡人发行自有高端卡（Platinum、Gold、Green 等），并直接与商户签约受理。历史上，这种窄闭环限制了日本受理广度，但两项结构性发展显著扩大了 AMEX 版图：

1. **Credit Saison Persona JV**（saisoncard.co.jp/company/persona/）：Credit Saison（[[JapanFG/credit-saison|Credit Saison]]）在日本通过 **Persona** 品牌伙伴关系发行 AMEX 品牌卡，可追溯至 2000。这使 AMEX 在日本拥有实质上超过其闭环声誉的发行伙伴版图，也意味着日本许多“AMEX 卡”实际上是 Saison 在 Persona JV 下发行的 AMEX 品牌卡，这是一种结构上类似 JCB 伙伴发行人模型的伙伴发行安排。
2. **AMEX-JCB 交叉受理**：AMEX 卡可通过 AMEX-JCB 交叉受理联盟在 JCB 收单商户处受理，使 AMEX 能够有效使用 JCB 更广的日本受理版图，而无需直接收单这些商户。

AMEX 的日本独特定位是：**闭环高端核心 + Persona 伙伴发行 + JCB 交叉受理**。结果是，一个三方方案在日本拥有显著大于 AMEX 在许多其他市场中表现的版图。AMEX 的 agentic-commerce 路线图（SafeKey 适配）公开披露进度早于 Visa / Mastercard 的公开披露。

### JCB（JCB Co Ltd + JCB International Co Ltd）

JCB 运行**带混合发行人许可层的三方品牌模型**，详见 [[payments/jcb-three-party-operating-model|JCB three-party operating model]]。[[JapanFG/jcb|JCB Co Ltd]]（日本国内品牌 + 主要收单 + 发行 + 发行人许可）与 [[JapanFG/jcb-international|JCB International]]（国际收单伙伴关系 + 跨境结算）之间的公司拆分，是 JCB 运营模型的基础。日本约 30  家伙伴发行人版图（MUFG NICOS、AEON、Rakuten Card、Saison、JACCS、Orico、JR View、地方银行、Lifecard 等）使 JCB 的日本发行触达显著大于 AMEX 的 Persona 锚定伙伴发行。

JCB 的日本独特定位是：**唯一的日本国内国际品牌**、高端国内受理、通过 **Discover Global Network alliance** 实现美国受理，以及韩国 / 台湾 / 东南亚区域收单伙伴关系。JCB 是日本主要品牌中第一家公开披露其发行人 / 收单人费用分配率的品牌（2023-06-01 METI / JFTC 联合发布），反映出 JCB 在三方模型下控制商户费拆分两端。

## Issuer / acquirer cross-ownership matrix

大多数日本主要卡发行人发行不止一个品牌。交叉所有 / 发行模式对于理解为什么日本发行人竞争是**品牌重叠而非品牌分割**具有结构性重要性：

| Issuer | Issues Visa? | Issues Mastercard? | Issues AMEX? | Issues JCB? | Notes |
|---|---|---|---|---|---|
| [[JapanFG/mufg-nicos\|MUFG NICOS]] | Yes (anchor) | Yes (anchor) | Yes (cobrand select) | Yes (anchor partner) | 双 / 三品牌卡常见 |
| [[JapanFG/smbc-card\|SMBC Card]] | Yes (anchor) | Yes (anchor) | Yes (cobrand select) | Yes (select) | 三品牌 SMBC Olive 卡 |
| [[JapanFG/credit-saison\|Credit Saison]] | Yes | Yes | Yes (Persona JV) | Yes | 四品牌发行人版图 |
| [[JapanFG/rakuten-card\|Rakuten Card]] | Yes | Yes | Yes (Rakuten Premium Card) | Yes | 消费者基础上的四品牌 |
| [[JapanFG/aeon-financial-service\|AEON Financial Service]] | Yes | Yes | Yes (select) | Yes (anchor partner) | AEON CARD Select 多品牌 |
| [[JapanFG/jaccs\|JACCS]] | Yes | Yes | Yes (select) | Yes | 多品牌联名 |
| [[JapanFG/orico\|Orico]] | Yes | Yes | Yes (select) | Yes | 多品牌联名 |
| [[JapanFG/epos-card\|Epos Card]] | Yes (anchor) | 窶・| 窶・| 窶・| Visa 单品牌联名 |
| [[JapanFG/paypay-card\|PayPay Card]] | Yes (anchor) | Yes | 窶・| Yes | PayPay 锚定发行人 |
| View Card (JR East) | Yes | Yes | 窶・| Yes (VIEW JCB) | JR 渠道卡 |

模式是：**在消费者发行层，品牌选择通常是产品线决策，而不是发行人之间的竞争选择**。消费者在 MUFG-NICOS 卡之间选择 Visa、Mastercard 或 JCB，是在同一发行人的品牌变体之间选择，而不是在不同发行人之间选择。

## Acceptance share at Japan merchants（indicative）

公开的无现金推进协会和 METI 数据并不持续以本节理想所需精度拆分按品牌受理份额。由于没有权威按品牌份额数字发布，下表中的份额特征列标为 `n.d.`（繝・・繧ｿ譛ｪ蜈ｬ髢・）；仅保留定性的受理广度观察。

| Brand | Acceptance breadth (Japan merchants) | Indicative share characterization | Notes |
|---|---|---|---|
| Visa | 最大国际品牌版图；连锁商户和线上近乎通用 | n.d.（按品牌份额未公布） | 在品牌受理处通用 |
| Mastercard | 连锁商户和线上与 Visa 接近 | n.d.（按品牌份额未公布） | 在品牌受理处通用 |
| AMEX | 微型商户较窄；通过 JCB 交叉受理扩大 | n.d.（按品牌份额未公布） | 偏高端受理 |
| JCB | 最大国内品牌版图；大型商户强；主要零售商通用 | n.d.（按品牌份额未公布） | 国内领先受理 |

可核验数据源：METI 2025  无现金数据发布（https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html）、Cashless Promotion Council 码支付调查（https://paymentsjapan.or.jp/category/publications/）以及 Japan Credit Association（https://www.j-credit.or.jp/）行业统计。

## QR / code-payment overlay strategy comparison

在日本与卡支付并行出现的 QR / 码支付赛道中（见 [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]），四个品牌在是否以及如何参与上显著分化：

| Brand | Push-to-card / instant-payment product | Code-payment direct product | Wallet-issued card economics |
|---|---|---|---|
| Visa | **Visa Direct**（push-to-card；个人对个人、企业对消费者、跨境） | 无直接产品；PayPay / Rakuten / 蜷・wallets 将 Visa 卡作为资金来源使用 | 通用：大多数日本钱包接受 Visa 卡充值 |
| Mastercard | **Mastercard Send**（功能上平行 Visa Direct） | 无直接产品；日本钱包将 Mastercard 卡作为资金来源使用 | 通用：大多数日本钱包接受 Mastercard 卡充值 |
| AMEX | AMEX Send（push-to-card；日本版图更有限） | 无直接产品；日本钱包使用 AMEX 卡比 V/MC 更有限 | 较窄：由于 MDR 经济性，接受 AMEX 卡充值的日本钱包较少 |
| JCB | 部分市场的 J-RPay / 国内 overlay 产品 | 有限；部分市场有 JCB 品牌钱包 | 通用：大多数日本钱包接受 JCB 卡充值 |

结构性模式是：**Visa Direct 和 Mastercard Send 是两条主要全球 push-to-card 轨道**，日本钱包和汇款产品越来越多地在其上路由。AMEX Send 功能类似但日本版图较窄。JCB 尚未建立同等规模的直接竞争性 push-to-card 产品，反映 JCB 的日本国内重点。

## Agent-payment overlay roadmap comparison

2025-2026  出现的 AI-agent-initiated commerce（支付侧见 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]）创造了四个品牌之间的平行竞赛：将自身代币化 / 认证 / 授权基础设施定位为 agentic payments 的标准轨道。

| Brand | Agentic-pay product / framework | Tokenization layer | Authentication adaptation |
|---|---|---|---|
| Visa | **Visa Intelligent Commerce** / **Visa Agentic Commerce** | Visa Token Service（网络 token、一次性 token） | Visa Secure（3-DS 2.x）扩展 delegated-authentication 用于 agent flows |
| Mastercard | **Mastercard Agent Pay** / **Mastercard Agentic Tokens** | Mastercard Digital Enablement Service（MDES） | Mastercard Identity Check（3-DS 2.x）扩展 delegated-authentication 用于 agent flows |
| AMEX | Agentic-pay 路线图公开较少 | AMEX 内部代币化 | AMEX SafeKey 3-DS 适配 agent flows |
| JCB | Agentic-pay 路线图公开较少；依赖伙伴发行人 | J/Secure 代币化 | J/Secure 3-DS 适配 agent flows |

Visa 和 Mastercard 拥有最先进的 agentic-pay 基础设施公开披露；AMEX 和 JCB 仍处于较早的路线图披露阶段。日本国内 agentic-commerce 市场究竟会收敛到 Visa / Mastercard 全球轨道，还是通过钱包 - PSP 层发展日本特定 overlay，仍是开放问题，见 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]。

## Bank-JV and partnership structure comparison

四个品牌与日本银行和银行 FG 的关系在结构上不同：

| Brand | Bank-FG anchor relationships | JV / partnership structure | Distribution channel |
|---|---|---|---|
| Visa | MUFG（通过 [[JapanFG/mufg-nicos\|MUFG NICOS]]）、SMFG（通过 [[JapanFG/smbc-card\|SMBC Card]] + SMBC GMO PAYMENT JV） | 许可关系；无股权 JV | 银行 FG 卡线 + 多品牌联名卡 |
| Mastercard | 与 Visa 相同的银行 FG 锚点 | 许可关系；无股权 JV | 银行 FG 卡线 + 多品牌联名卡 |
| AMEX | **Saison Persona JV**（[[JapanFG/credit-saison\|Credit Saison]]，自 2000 起） | 带收入分享的发行人伙伴 JV | Persona 发行卡 + AMEX 直接发行高端卡 |
| JCB | JCB Co Ltd 股东结构包括 MUFG、SMFG、Mizuho、Nippon Life、Tokio Marine、NTT Data 等重要股东 | 品牌与股东混合 | JCB direct + 30+ 伙伴发行卡 |

**AMEX-Saison Persona** 伙伴关系和 **JCB 的股东结构** 是两个最具结构特色的银行关系安排。AMEX 依赖 Saison 通过 Persona 实现日本广泛发行，实际上把 AMEX 从纯闭环转为混合方案；JCB 的银行 FG 持股使其与日本银行业形成结构性一致，这是国际品牌无法复制的。

## Fee disclosure and JFTC pressure landing

2022-04-08 JFTC 信用卡商户费报告，以及 2023-06-01 METI / JFTC 关于 JCB 费用披露的联合发布，代表了日本卡品牌运营经济性上显著且持续的监管压力：

| Brand | Fee disclosure status (Japan, 2026-05) | JFTC engagement |
|---|---|---|
| Visa | 日本标准交换费于 2023-08  公布（Payments Japan 路线图）；未披露按收单机构拆分 | 许可关系限制集中披露 |
| Mastercard | 日本标准交换费于 2023-08  公布（Payments Japan 路线图）；未披露按收单机构拆分 | 许可关系限制集中披露 |
| AMEX | 闭环商户折扣：未单独披露；Persona 侧分配：内部 | 闭环降低 JFTC 对单笔交换费的适用范围 |
| JCB | 发行人 / 收单人费用分配拆分于 2023-06  披露（日本主要品牌中首家） | 直接参与；披露先行者 |

JCB 在费用披露上的先行地位反映三方模型：JCB Co Ltd 控制费用拆分两端，能够单方面披露，而 Visa 和 Mastercard 必须跨多个持牌收单机构协调（结构说明见 [[payments/jcb-three-party-operating-model|JCB three-party operating model]]）。

## Cross-references with other matrices

- vs **[[payments/jcb-three-party-operating-model|JCB three-party operating model]]**：该条目深潜 JCB 的三方架构；本矩阵把 JCB 放入跨品牌语境。
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**：该条目建立角色分离框架；本矩阵点名各品牌以及各品牌如何组合或分离角色。
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：该矩阵在方案类别层面覆盖卡 vs 码支付 vs A2A vs 预付；本矩阵将卡类别拆解为四个品牌运营商。
- vs **[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]**：该条目覆盖交换费 / 方案费 / 收单费结构；本矩阵映射品牌特定费用架构。
- vs **[[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]**：该矩阵覆盖位于商户和品牌之间的 PSP / 网关层；本矩阵覆盖 PSP 之上的品牌层。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]**：该矩阵拆解 JCB 伙伴发行人集合；本矩阵为其加上品牌比较框架。

## Related

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
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/mastercard-japan]]
- [[JapanFG/american-express-international-japan]]
- [[JapanFG/jcb]]
- [[JapanFG/jcb-international]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/smbc-card]]
- [[JapanFG/credit-saison]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/epos-card]]
- [[JapanFG/paypay-card]]
- [[INDEX|FinWiki index]]

## Sources

- Visa Japan corporate site: https://www.visa.co.jp/
- Visa Japan about page: https://www.visa.co.jp/about-visa.html
- Mastercard Japan corporate site: https://www.mastercard.co.jp/
- Mastercard Japan about page: https://www.mastercard.co.jp/ja-jp/business/about-mastercard.html
- American Express Japan: https://www.americanexpress.com/jp/
- American Express Japan corporate: https://www.americanexpress.com/ja-jp/company/
- JCB global site (Japanese): https://www.global.jcb/ja/
- JCB business area / brand: https://www.global.jcb/ja/about-us/business-area/brand/
- JCB Japan: https://www.jcb.co.jp/
- Credit Saison Persona partnership: https://www.saisoncard.co.jp/company/persona/
- MUFG NICOS corporate: https://www.cr.mufg.jp/corporate/
- METI 2023-06-01 release on JCB fee disclosure: https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html
- METI 2025  cashless payment ratio release: https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- METI cashless policy portal: https://www.meti.go.jp/policy/mono_info_service/cashless/index.html
- Payments Japan Association 2023  cashless roadmap: https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf
- Payments Japan Association publications: https://paymentsjapan.or.jp/category/publications/
- Japan Credit Association: https://www.j-credit.or.jp/
- JFTC 2022-04-08 credit-card merchant-fee report: https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html

---
source: payments/japan-merchant-psp-competitive-scorecard
source_hash: 837071ef5461c24f
lang: zh
status: machine
fidelity: ok
title: "日本商户 PSP 竞争记分卡"
translated_at: 2026-06-15T03:48:21.900Z
---

# 日本商户 PSP 竞争记分卡

## TL;DR

日本的商户 PSP（Payment Service Provider，支付服务提供商）市场比消费者可见的无现金格局所暗示的更 **碎片化、更分层**。该市场至少沿四个维度分裂 —（a）传统卡网关 PSP（[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]），（b）QR 聚合 PSP（[[payment-firms/netstars|Netstars]]），（c）全球结账 PSP（Stripe Japan、PayPal Japan、Square Japan、Komoju），以及（d）钱包平台收单方（Amazon Pay、Rakuten Payment、Recruit Card / 受取代行）— 各自具有不同的商户费用经济、结算速度、垂直专业化及并购历史。本记分卡沿对选择网关的商户以及试图理解谁实际控制日本 EC 支付流的行业读者重要的各轴，将十二家主要 PSP 并列。它是 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] 的商户侧伴随篇，也是 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 的经营者侧伴随篇。

## Wiki route

本页位于 [[payments/INDEX|payments index]] 之下，作为商户侧 PSP 参考。请与 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 一并阅读以了解技术栈视角，与 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] 一并阅读以了解角色分离框架，与 [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]] 一并阅读以了解结算周期与商户敞口视角，与 [[payments/account-to-account-payment-japan|account-to-account payment in Japan]] 一并阅读以了解 PSP 日益承载的 A2A 通道，与 [[payments/merchant-bank-pay-account-direct-acquiring|merchant Bank Pay account direct-acquiring]] 一并阅读以了解银行侧直连路径，与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 一并阅读以了解本条目刻意补充的跨方案经济，以及经营者锚点 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]]、[[payment-firms/netstars|Netstars]]、[[payment-firms/freee|freee]]、[[payment-firms/money-forward|Money Forward]]、[[payment-firms/famima-digital-one|FamiMa Digital One]] 与 [[payment-firms/seven-payment-service|Seven Payment Service]]。

## 为什么这个矩阵重要

选择 PSP 的商户 — 或试图读懂日本 EC 栈的行业读者 — 在没有并排比较的情况下通常会误读三个结构性要点。第一，**「PSP」并非单一产品**：卡受理网关在结构上不同于 QR 聚合方，后者又在结构上不同于像 Stripe 这样的全球结账产品。第二，**收单角色**：有些 PSP 是纯技术处理方，透传给外部收单方；另一些自身则是割赋销售法下的商户签约经营者（アクワイアラ），而商户的风险敞口也相应不同（参见 [[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]）。第三，**结算速度与费用模型**：使用 Square 或 PayPay 商户方案的小商户所获得的结算体验，与使用 GMO-PG 或 SB Payment Service 合同的大型企业有根本不同。本记分卡将这三点全部呈现出来。

### GMO Payment Gateway（GMO-PG，东证 PRIME 3769）

[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 是日本按商户数与处理金额计最大的纯 PSP。1995-03-25 作为株式会社カードコマース 成立，在 2000, 更名为 GMO-PG，在 2005, 于东证 Mothers 上市，在 2008迁至东证一部（现 PRIME）。为 [[business/gmo-internet-group|GMO Internet Group]] 的合并子公司。据报道 EC 商户基础 30 万+ 家店铺。多产品线：卡网关、码支付、便利店支付、银行转账收款、BtoB 发票 / 后付（後払い）、Pay.JP 开发者 SDK（Stripe 式竞品）、经由 NextPay（越南）、ECPay（台湾）的跨亚洲网关。经由 SMBC GMO PAYMENT JV 与 [[card-issuers/smbc-card|SMBC Card]] 建立战略关系。基于商户支付数据的交易贷款副业。

GMO-PG 的独特定位：**多收单方关系中介** — 该 PSP 按品牌将商户路由至多家卡收单方，在 METI クレジットカード番号等取扱契約締結事業者 名单上拥有自有的商户签约经营者注册，并在结算可靠性与集成深度比表面费率更重要的高交易量商户账户上竞争。

### GMO Epsilon（GMO-PG 子公司）

[[payment-firms/gmo-epsilon|GMO Epsilon]] 是 GMO Payment Gateway 聚焦中小商户的 PSP，构建为一个独立品牌，以应对与 GMO-PG 企业／中端账册不同的商户分部。两者在 [[business/gmo-internet-group|GMO Internet Group]] 支付伞下作为姊妹实体运营，GMO Epsilon 处理较高交易量／较小客单的商户账户（较小的 EC 店铺、在线服务、内容收费商户），GMO-PG 处理较大的企业合同。

独特定位：**一个集团内的双品牌小商户 + 企业分工** — GMO Internet Group 经由独立品牌 PSP 运营商户规模谱系的两端，这在结构上不同于 Stripe（一个产品适配所有规模）或 Square（一个产品适配小微）。

### SB Payment Service（SBPS，SoftBank Group）

[[payment-firms/sb-payment-service|SB Payment Service / SBペイメントサービス]] 是 SoftBank Group 的 PSP，在码支付处理上与 [[payment-firms/paypay|PayPay]] 深度集成，在 EC 商户受理上与 Yahoo! Japan Shopping 深度集成。SBPS 处理 SoftBank 集团的 EC 商户基础以及希望从单一 PSP 获得卡 + 码 + PayPay 集成受理的外部 EC 商户基础。它是 METI クレジットカード番号等取扱契約締結事業者 名单上的商户签约经营者，以及 包括信用購入あっせん業者 通道经营者。

独特定位：**钱包锚定 PSP** — SBPS 的 PayPay 集成为希望以码支付为主渠道的商户提供结构性优势，而其 SoftBank Group 锚定则为其在 Yahoo! Japan Shopping / ZOZOTOWN / LINE 关联 EC 资产上提供关系强度。

### DG Financial Technology / DGFT（Digital Garage 集团）

[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]] 是 Digital Garage（东证 PRIME 4819）的支付子公司，服务高端 EC 与企业商户，侧重跨境受理、多币种结算以及与 Square 的集成（在 Square 设立自有日本实体之前，Digital Garage 曾是 Square 的日本合作伙伴）。DGFT 还作为 Veritrans（被 Digital Garage 收购的一个长期 PSP 品牌）的聚合方。

独特定位：**企业 + 跨境 PSP** — DGFT 在多币种处理、高级欺诈筛查以及技术合作伙伴生态（DG 持有许多与 fintech 相邻的初创企业的投资）上进行差异化，瞄准那些国际卡受理与受理率优化能够证明相对于大宗 PSP 的溢价费用结构合理的商户。

### Netstars（QR 聚合纯业务）

[[payment-firms/netstars|Netstars]] 是日本领先的 **多钱包 QR 聚合方**，运营 StarPay 商户受理产品，使一台终端／一个 QR 码可受理多个码支付钱包（PayPay、d払い、au PAY、楽天ペイ、メルペイ、WeChat Pay、Alipay+、AppPay 等）。瞄准那些经由单一集成进行多钱包受理在结构上比直接签署每个钱包合同更高效的商户类别 — 便利店、药妆店、餐厅、零售连锁以及入境游客密集的商户。

独特定位：**钱包无关网关** — 与 GMO-PG 或 SBPS（偏卡优先、码作为附加）不同，Netstars 专为码支付优先的商户而构建，是跨钱包受理需求的天然对手方。结构性风险在于钱包经营者可能推动绕过聚合方的自有直连商户经济。

### Square Japan（Block Inc. 子公司）

Square Japan 是 Block, Inc.（前 Square, Inc.）的日本分支。以读卡器 + mPOS App + 集成支付服务套装瞄准小／微商户，形态与其美国产品相同。结算速度使 Square 形成差异化：相对于 T+M 传统商户批量，次工作日结算（瑞穗银行／三井住友银行账户持有人更快）是其表面价值主张。卡品牌受理涵盖 Visa、Mastercard、JCB、AMEX、Diners、Discover，外加经由 Square Reader 的 QR 码支付（PayPay 等）与 Suica / IC 卡。

独特定位：**微商户 + 无摩擦入网** — Square 的价值主张是「周六开户，周一收款」，无月费、无最低交易量要求。它通过更适合零售 POS 与 Stripe（偏线上）竞争，并通过提供 PayPay 所不提供的信用卡品牌受理与 PayPay（免费零费率促销）竞争。

### Stripe Japan

Stripe Japan 是 Stripe, Inc. 的日本分支。以 API 优先的支付集成瞄准开发者、初创企业及数字优先商户，支持卡品牌（Visa、Mastercard、JCB、AMEX）、码支付（PayPay、Konbini Payment、Bank Transfer、Apple Pay、Google Pay）以及周期性计费 / 订阅原语。Stripe Japan 不运营自有的实体 POS 硬件；其产品完全是线上 / App 嵌入式的。

独特定位：**开发者 API 优先** — Stripe 的文档深度、API 工效及 SDK 质量使其成为构建定制结账的技术型商户的默认选择，尽管其表面费率高于 GMO-PG 或 SBPS 同等交易量的协商费率。Pay.JP（GMO-PG 的开发者 SDK 产品）是该轴上主要的日本本土竞品。

### PayPal Japan

PayPal Japan（PayPal Pte. Ltd. 日本分行，[[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]]）为日本商户运营 PayPal 结账产品，并拥有 [[payment-firms/paidy|Paidy]]（2021-09 以 ~USD 2.7bn 收购），使 PayPal Japan 在与其核心结账业务相邻的 后付（後払い）/ BNPL 领域拥有立足点。PayPal 的商户主张侧重跨境受理、买家保护以及与全球结账流程的集成。

独特定位：**跨境优先** — PayPal 的价值主张依靠其全球受理布局，对从日本进行国际销售或向入境外国买家销售的商户最具优势。相较于 2015 前，境内优先的商户对 PayPal 的偏好有所下降，因为境内替代方案（GMO-PG、SBPS、Stripe）已趋成熟。Paidy 的所有权增加了一条 后付（後払い）通道，补充了 PayPal 结账以卡 / 钱包为主的基础。

### Komoju（Degica，聚焦游戏 / 数字内容）

Komoju（株式会社 Degica）是一家总部位于东京的 PSP，聚焦 **数字内容、游戏、软件及入境跨境 EC** 商户。它支持广泛的支付方式组合，包括国际卡品牌、Konbini Payment、Pay-Easy（Bank Transfer）、码支付以及 后付（後払い）/ Atobarai（Komoju Atobarai 是 Komoju 自有品牌的 BNPL 产品）。Komoju Atobarai 是 METI 名单上的 個別信用購入あっせん 注册。

独特定位：**垂直专业化 PSP** — Komoju 的游戏 / 数字内容聚焦使其在微交易计费、虚拟货币结算以及游戏商户典型的跨境买家组合上具有专长。Steam / Sony PlayStation / 各类游戏发行商是示例性的商户分部。

### Amazon Pay

Amazon Pay（Amazon Japan G.K. / Amazon Web Services Japan）是 Amazon-账户即结账 产品，允许第三方商户经由买家存储的 Amazon 账户（卡存档、地址存档）受理支付。瞄准希望通过利用 Amazon 已注册买家基础来降低结账摩擦的 EC 商户。

独特定位：**账户锚定 PSP** — Amazon Pay 的价值在于 **买家侧存储账户 + Amazon Prime 相邻性**，而非网关效率。商户费用与卡网关 PSP 具竞争力，但对商户的战略价值在于无摩擦结账带来的买家转化提升，而非费率效率。

### Rakuten Payment / 楽天ペイメント

Rakuten Payment Inc. 为商户运营 [[payment-firms/rakuten-fg|Rakuten FG]] 支付栈 — Rakuten Pay（码支付）、Rakuten Card 受理、Rakuten Bank 结算、R-Card 联动。与 [[card-issuers/rakuten-card|Rakuten Card]]（发卡方）及 Rakuten Point 忠诚度层紧密集成。瞄准受益于 Rakuten 生态买家获取（Rakuten Members 注册、Rakuten Point 赚取 / 兑换）的商户。

独特定位：**生态锚定 PSP** — 如同 SB Payment Service 之于 SoftBank 或 Amazon Pay 之于 Amazon，Rakuten Payment 的结构性优势在于 Rakuten 生态的专属买家基础。Rakuten 生态之外的商户仍可使用 Rakuten Pay，但会失去其价值主张中的生态提升成分。

### Recruit Card / Recruit MUFG Business

[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] 是 Recruit Holdings 与 [[megabanks/mufg|MUFG]] 之间的合资企业，运营 Recruit Card 产品及相关商户服务供给，包括 Air PAY（Recruit 运营的 mPOS / QR 受理产品）与 Air Regi（POS 集成）。Air PAY 在日本的小商户 / 餐厅 / 个人服务商户分部中是一款颇有分量的卡 / 码受理产品。

独特定位：**Recruit 生态 + mPOS** — Recruit 的 HotPepper Beauty / HotPepper Gourmet / Jalan / SUUMO 预订与发现产品为 Air PAY 提供了其他任何 PSP 都没有的商户获取渠道。预订流 + 支付受理 + POS 集成的组合在结构上难以复制。

## 大比较矩阵表

| PSP | Parent / group | Listing | Founded | Primary merchant base | Reported merchant count | Card brand support | Code payment support | A2A / Bank Pay support | Konbini / bank-transfer | Suica / IC-prepaid | BNPL / 後払い integration | Settlement speed (typical) | Fee model (small merchant baseline) | Vertical specialization | Acquirer role (own/external) | M&A / parent history |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/gmo-payment-gateway\|GMO-PG]]** | [[business/gmo-internet-group\|GMO Internet Group]] | TSE PRIME 3769 | 1995 (as カードコマース) | Enterprise + mid-market EC | ~30万+ stores | Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d払い / au PAY / 楽天ペイ via gateway | Bank Pay / 銀行振込 | Yes (multi-konbini) | Limited | BtoB 後払い in-house + 3rd-party | Configurable T+5 to T+M | Negotiated by volume; high-volume rates among lowest | Multi-vertical; enterprise | Own merchant-contracting + multi-acquirer routing | GMO group internal; SMBC GMO PAYMENT JV with [[card-issuers/smbc-card\|SMBC Card]] |
| **[[payment-firms/gmo-epsilon\|GMO Epsilon]]** | [[business/gmo-internet-group\|GMO Internet Group]] | Subsidiary | 2000s era | Small-and-medium EC, content / subscription | Tens of thousands | Visa / MC / JCB / AMEX | PayPay / d払い / au PAY etc. | Bank Pay | Yes | Limited | 3rd-party 後払い integrations | T+M to T+5 | Lower minimum; higher headline rate than GMO-PG enterprise | Small-merchant EC | Pass-through to GMO-PG infrastructure / external acquirer | GMO Internet Group internal positioning |
| **[[payment-firms/sb-payment-service\|SB Payment Service]]** | SoftBank Group + PayPay FG | Subsidiary | 2004 (Yahoo! ウォレット predecessor) | Yahoo! Japan Shopping, ZOZOTOWN, LINE-EC, external | Hundreds of thousands | Visa / MC / JCB / AMEX | PayPay (deep integration) + 楽天ペイ / au PAY / d払い | Bank Pay | Yes | Limited | PayPay あと払い / BNPL integration | T+M traditional; faster on PayPay-anchored | Negotiated; PayPay-merchant favorable rates | SoftBank ecosystem + LINE-tied EC | Own merchant-contracting | Yahoo!ウォレット predecessor; restructured under PayPay FG |
| **[[payment-firms/dg-financial-technology\|DG Financial Technology]]** | Digital Garage (TSE PRIME 4819) | Subsidiary | Veritrans heritage | Enterprise + cross-border EC | Tens of thousands | Visa / MC / JCB / AMEX / Diners / UnionPay | Yes (multi-wallet) | Bank Pay | Yes | Limited | 3rd-party 後払い integrations | Configurable | Premium for enterprise cross-border | Enterprise cross-border | Own merchant-contracting | Digital Garage acquired Veritrans; was Square Japan-partner pre-Square direct entry |
| **[[payment-firms/netstars\|Netstars]]** | Independent (Recruit Strategic Partners / others equity-back) | Non-listed | 2009 | Multi-wallet merchant acceptance | Hundreds of thousands of merchant locations (multi-wallet) | Limited card focus | All major code wallets + Alipay+ / WeChat Pay | Limited | Limited | Limited | Limited | T+M typical | Per-transaction multi-wallet fee | Code-first multi-wallet aggregation | Pass-through aggregator | Independent QR-pioneer; Recruit-adjacent investor base |
| **Square Japan** | Block, Inc. (US parent) | Subsidiary | 2013 Japan entry | Micro / small merchant retail | Hundreds of thousands | Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d払い via Square Reader and code-accept | Limited | Limited | Suica / IC-card via Square Reader | Limited | Next-business-day (Mizuho / SMBC partner) | 3.25-3.75% MDR; no monthly fee | Micro-merchant retail / restaurant | Own merchant-contracting | Block (US) parent; pre-Square Japan via DGFT-Square partnership |
| **Stripe Japan** | Stripe, Inc. (US parent) | Subsidiary | 2016 Japan entry | Developer / startup / digital | Tens of thousands public | Visa / MC / JCB / AMEX | PayPay / Konbini / Bank Transfer / Apple Pay / Google Pay | Limited via Bank Transfer | Konbini Payment, Bank Transfer | Limited | Limited (custom merchant-side integration) | Configurable | 3.6% baseline; volume tiers | Developer-API-first / digital | Own merchant-contracting | Stripe (US) parent; partnership with mizuho-fg / SMBC for settlement |
| **[[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]** | PayPal Holdings (US parent) | Subsidiary | 2000s era Japan | Cross-border EC; SaaS; international merchant | Hundreds of thousands | Visa / MC / JCB / AMEX (via PayPal wallet linkage) | PayPal wallet itself | Limited | Limited | Limited | Paidy ([[payment-firms/paidy\|Paidy]]) 後払い integration | T+M; PayPal-wallet immediate to PayPal balance | 3.6% + JPY 40 / tx baseline (varies) | Cross-border / international EC | Own merchant-contracting | Paidy acquired 2021-09 (~USD 2.7bn) |
| **Komoju (Degica)** | Degica (independent + investor-backed) | Non-listed | 2013 | Gaming / digital content / inbound EC | Tens of thousands | Visa / MC / JCB / AMEX | PayPay / d払い / 楽天ペイ / au PAY | Bank Transfer | Konbini Payment, Pay-Easy | Limited | Komoju Atobarai (own-brand BNPL) | Configurable | Per-method pricing | Gaming / digital content / cross-border | Own merchant-contracting + own BNPL | Independent; investor-backed |
| **Amazon Pay** | Amazon Japan / Amazon US parent | Subsidiary | 2007 Japan launch | EC merchants (Amazon-buyer-account leveragers) | Tens of thousands | Card-on-file via buyer Amazon account | Limited | Limited | Limited | Limited | Limited | Configurable | Comparable to card-gateway rates | EC checkout-friction reduction | Pass-through with buyer-account anchor | Amazon US parent strategy |
| **Rakuten Payment** | [[payment-firms/rakuten-fg\|Rakuten FG]] | Subsidiary | Rakuten Pay 2016 launch | Rakuten-ecosystem merchant + external | Hundreds of thousands | Rakuten Card direct + Visa / MC / JCB / AMEX | Rakuten Pay anchored | Limited | Limited | Limited | Rakuten group BNPL adjacent | T+M; Rakuten ecosystem favored | Negotiated; Rakuten-ecosystem favorable | Rakuten ecosystem merchant | Own + Rakuten Card linkage | Rakuten Group internal restructuring |
| **[[payment-firms/recruit-mufg-business\|Recruit Card / Air PAY]]** | Recruit Holdings + [[megabanks/mufg\|MUFG]] JV | Subsidiary | Air PAY 2012 launch | Small merchant + restaurant + personal-service | Hundreds of thousands of Air PAY accounts | Visa / MC / JCB / AMEX / Diners | PayPay / d払い / au PAY / 楽天ペイ etc. | Limited | Limited | Suica / IC-card via Air PAY Reader | Limited | T+M; Mizuho / SMBC-account next-day options | 3.24-3.74% MDR; no monthly fee | Restaurant + beauty + small-service | Own merchant-contracting | Recruit-MUFG JV established for card / payments |

## 旁轴 — 处理的 GMV（粗略的公开报道指示）

报道的 GMV / 处理金额数字在这组同业中并非一致披露，因此本旁轴是局部的。GMO Payment Gateway 在 IR 中发布年度处理金额（处于数万亿日元区间，反映其企业商户基础）。SB Payment Service 的处理金额在 SoftBank Group / PayPay FG 合并披露中报告，而非作为独立 PSP。DGFT 的处理金额在 Digital Garage 分部披露中报告。Square Japan、Stripe Japan、PayPal Japan、Komoju、Amazon Pay 与 Rakuten Payment 并未在 PSP 分部层级一致地独立披露；读者应查阅母公司 IR 以获取所披露的部分。

| PSP | Processed-value disclosure surface | Order of magnitude (public-source indication) |
|---|---|---|
| **GMO-PG** | Own IR, quarterly | Trillions of yen annual processed value |
| **SB Payment Service** | SoftBank Group / PayPay FG consolidated | Trillions of yen if PayPay code-payment volume aggregated |
| **DGFT** | Digital Garage segment disclosure | Hundreds of billions to low-trillion yen |
| **Netstars** | Limited public; multi-wallet aggregated | Per-wallet processed not aggregated publicly |
| **Square Japan** | Block consolidated | Tens of billions of yen scale (Japan portion) |
| **Stripe Japan** | Not standalone disclosed | Not publicly disclosed |
| **PayPal Japan** | Not standalone disclosed | Not publicly disclosed |
| **Komoju** | Not standalone disclosed | Not publicly disclosed |
| **Amazon Pay** | Not standalone disclosed | Not publicly disclosed (Amazon segment) |
| **Rakuten Payment** | Rakuten Group segment disclosure | Trillions of yen if Rakuten Pay + Rakuten Card aggregated |
| **Recruit / Air PAY** | Recruit Holdings segment disclosure | Hundreds of billions of yen scale |

读者应将任何具体数字仅视为 **公开来源引用**，并对照所涉年份最近的 IR 加以核实 — 随着 EC 渗透变化与 PSP 商户流失发生，处理金额数字会逐年大幅变动。

## 跨 PSP 技术差异化

| Capability | GMO-PG | GMO Epsilon | SBPS | DGFT | Netstars | Square | Stripe | PayPal | Komoju | Amazon Pay | Rakuten Pay | Recruit / Air PAY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMV 3-DS 2.x compliance (2025-03 mandate) | Yes | Yes | Yes | Yes | N/A (code-first) | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Tokenization (network tokens) | Yes | Yes | Yes | Yes | N/A | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Recurring billing / subscriptions | Yes | Yes | Yes | Yes | Limited | Yes (Subscription) | Yes (Billing) | Yes (Subscriptions) | Yes | Limited | Yes | Limited |
| Apple Pay / Google Pay | Yes | Yes | Yes | Yes | Limited | Yes | Yes | Yes | Yes | Limited | Yes | Yes |
| Multi-currency settlement | Yes (limited) | Limited | Limited | Yes (strength) | Limited | Limited (Japan-only) | Yes | Yes | Yes (cross-border focus) | Limited (Japan-USD) | Limited | Limited |
| Marketplace / split-payment | Yes (custom) | Limited | Yes | Yes | Limited | Yes (some) | Yes (Connect) | Yes (Adaptive) | Yes | Limited | Yes | Limited |
| Custom reconciliation file | Yes | Yes | Yes | Yes | Yes | Limited | Yes | Yes | Yes | Yes | Yes | Yes |
| Inbound-tourist wallet support (Alipay+, WeChat Pay) | Yes (via partner) | Limited | Yes (via partner) | Yes (strength) | Yes (native) | Limited | Limited | Limited | Yes | Limited | Limited | Yes (via partner) |

## 费用经济 — 小商户视角

对于决定接入哪家 PSP 的 商店街 小商户而言，表面费用比较通常如下所示。实际费用按每个商户与每个 MCC 协商确定。

| PSP | Card MDR baseline (small merchant) | Per-tx fixed | Monthly minimum | Onboarding time | Hardware cost |
|---|---|---|---|---|---|
| **GMO-PG** | Negotiated by volume; typically 2.5-3.5% | Varies | Often required for enterprise | Days to weeks | EC: zero; POS: external |
| **GMO Epsilon** | 3.0-3.6% | Varies | Lower than GMO-PG | Days to a week | EC: zero |
| **SB Payment Service** | Negotiated | Varies | Often required | Days to weeks | EC: zero |
| **DGFT** | Negotiated; premium-tier | Varies | Required for enterprise | Weeks | EC: zero |
| **Netstars** | Per-wallet rate (1.8-3.0% range typical) | Varies | Lower | Days to a week | Printed QR or terminal |
| **Square Japan** | 3.25% Visa/MC; 3.75% JCB/AMEX | None | None | 1 business day after approval | JPY 7,980 (Square Reader) or zero (mPOS via phone) |
| **Stripe Japan** | 3.6% baseline | None | None | 1-2 business days | None (online only) |
| **PayPal Japan** | 3.6% + JPY 40 / tx (variable) | JPY 40 | None | 1-2 business days | None (online only) |
| **Komoju** | Per-method pricing (varies) | Varies | None | 1-2 business days | None (online) |
| **Amazon Pay** | Comparable to card MDR | Varies | None | Days | None (online) |
| **Rakuten Pay** | Negotiated; Rakuten-ecosystem favorable | Varies | Lower | Days to a week | EC: zero |
| **Air PAY** | 3.24% Visa/MC; 3.74% JCB/AMEX | None | None | 1-2 weeks | Air PAY Reader free with subscription / promo |

## 并购与母公司历史模式

日本 PSP 市场经历了本记分卡所揭示的三个大致的并购 / 重组时代：

1. **2010 年之前 — 银行侧卡处理方整合。** 银行 FG 卡处理方合并为当前的 MUFG NICOS / SMBC Card 配置，为纯 PSP 的成长留出空间。
2. **2010年代 — 纯 PSP 扩张。** [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 经由 [[business/gmo-internet-group|GMO Internet Group]] 伞 + SMBC GMO PAYMENT JV 成长；[[payment-firms/dg-financial-technology|DGFT]] 经由 Digital Garage 的 Veritrans 收购成长；[[payment-firms/sb-payment-service|SB Payment Service]] 经由 SoftBank Group 重组扩张；Netstars 作为 QR 聚合纯业务崛起。
3. **2020年代 — 全球结账进入 + 生态锚定整合。** Stripe Japan、Square Japan 与 PayPal Japan / [[payment-firms/paidy|Paidy]] 收购（2021-09）确立了全球结账 PSP 布局；PayPay FG / SoftBank 在 SB Payment Service 之下整合钱包侧受理；Rakuten Payment 整合 Rakuten 侧受理。

第四个时代很可能正在 2024-2026 窗口围绕 **BNPL 集成**（PayPal 旗下的 Paidy、Komoju Atobarai 等）与 **A2A 受理**（商户直连 Bank Pay）出现 — 两者都仍是局部的，并重塑 PSP 经济。

## 边界案例

- **「[[payment-firms/netstars|Netstars]] 是 PSP 还是钱包聚合方？」** 两者皆是。Netstars 提供商户网关（PSP 职能）与钱包路由聚合（多钱包受理）。它不是卡收单方，也不作为主要卡签约经营者列于 METI クレジットカード番号等取扱契約締結事業者 名单，但它经由钱包侧合同路由码支付交易。
- **「[[payment-firms/freee|freee]] 或 [[payment-firms/money-forward|Money Forward]] 是 PSP 吗？」** 不属于经典意义上的 PSP — 它们是具备支付受理功能（freee Pay、Money Forward Pay）的会计 / SaaS 平台，但经由底层 PSP（通常是 GMO-PG、GMO Epsilon 或合作收单方）进行路由。它们是带支付集成的商户侧软件，而非 PSP 本身。
- **「[[payment-firms/famima-digital-one|FamiMa Digital One]] 或 [[payment-firms/seven-payment-service|Seven Payment Service]] 是 PSP 吗？」** 它们是便利店 FG 支付经营者，对其自有零售网络具备支付受理能力，并具更广泛的码支付 / 钱包角色，但它们并非 GMO-PG / SBPS / DGFT 意义上的多商户 PSP。它们更接近 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]]，而非商户网关 PSP。
- **「那 [[payment-firms/jal-payment-port|JAL Payment Port]] 呢？」** 它是一个聚焦 JAL 集团支付以及为 JAL 集团 / 里程计划提供商户直连结算的 [[payment-firms/jal-payment-port|JAL Payment Port]] 实体，而非多商户通用 PSP。
- **「那 UnionPay International Japan、Visa Worldwide Japan 或 Mastercard Japan 呢？」** 它们是方案 / 品牌经营者，而非 PSP。它们在角色栈中位于 PSP 层之上 — 角色分离参见 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]。
- **「像 [[card-issuers/smbc-card|SMBC Card]]（作为收单方通道）这样的商户收单方在哪里？」** SMBC Card 是发卡方与收单方，而非 PSP。商户与 SMBC Card 的关系通常由一家 PSP（常经由 SMBC GMO PAYMENT JV 的 GMO-PG）中介，而非直接的商户收单方关系。SMBC Card 的收单方通道出现在 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 条目中。
- **「这个矩阵与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 有何关系？」** 那个矩阵在方案类层级涵盖卡对码对 A2A 对预付。本矩阵在所有四个方案类的商户受理侧之内分解 PSP / 商户网关维度。两者正交。

## 近期对 PSP 的监管压力

| Date | Source | What changed |
|---|---|---|
| 2018 | METI | 改正割賦販売法 strengthened 加盟店調査 obligation — raised onboarding cost for PSPs that hold merchant-contracting operator registration |
| 2020-2021 | METI / J-CSC | Credit-card security guideline 5.0 / 5.1 — PCI DSS expectations, vulnerability-scan obligations, non-retention enforcement |
| 2022-04-08 | JFTC | Credit-card merchant fee report — pressure on PSP-merchant fee transparency |
| 2023-06-01 | METI + JFTC | JCB merchant-fee allocation rate disclosure — affects PSPs routing JCB volume |
| 2024-2025 | METI / J-CSC | Guideline 6.0 / 6.1: **EMV 3-DS mandatory for EC card payments from 2025-03**; non-retention rules tightened; vulnerability-scan obligations expanded — compliance burden falls heavily on EC-PSPs |
| 2025-2026 | METI | Continued pressure for fee disclosure extends from card class toward code-payment and prepaid PSP layers |

2025-03 年的 EMV 3-DS 强制要求是对 EC-PSP 分部影响最大的变化，因为合规工作落在 PSP 侧，需要将 3-DS 认证集成进结账流程。

## 与其他矩阵的交叉引用

- 对比 **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：那个矩阵在经营者层级涵盖卡 / 码 / A2A / 预付方案类。本矩阵在所有四个方案类之间分解商户侧网关 / PSP 层，因为大多数主要 PSP 受理多方案支付。
- 对比 **[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]**：那个条目涵盖从 POS / EC 结账到发卡方结算的技术栈。本矩阵命名位于该栈网关 / PSP 层的具体经营者。
- 对比 **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**：那个条目确立角色分离框架。本矩阵以具名经营者填充 PSP / 处理方一栏，并显示其中哪些另外持有商户签约经营者角色。
- 对比 **[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]**：那个条目涵盖依赖 PSP 进行结算的商户侧风险画像。本矩阵给出该风险画像所依托的逐家经营者清单。
- 对比 **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]** 与 **[[payments/japan-bnpl-pay-later-operator-registry-matrix|BNPL operator registry matrix]]**：那些矩阵分别涵盖发卡方侧与 BNPL 经营者侧；本矩阵是两者的商户网关侧补充。

## 商户的 PSP 选择决策视角

在日本选择 PSP 的小型或中型商户通常面临四向决策：卡受理布局、码支付受理布局、结算速度要求以及集成复杂度容忍度。本矩阵支持以下决策树捷径：

| Merchant profile | Best-fit PSP cluster |
|---|---|
| **Micro / individual / casual seller, retail POS** | Square Japan (free reader, next-day settlement) or Air PAY (Recruit, similar economics with HotPepper-channel) |
| **Small-to-medium EC, developer-friendly, digital-first** | Stripe Japan or Komoju (vertical-specialized) or GMO Epsilon |
| **Enterprise EC with multi-acquirer routing and integration depth** | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]] or [[payment-firms/dg-financial-technology\|DGFT]] (cross-border) or [[payment-firms/sb-payment-service\|SB Payment Service]] (PayPay-anchored) |
| **Cross-border EC selling to inbound foreign buyers** | [[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]] or DGFT or Komoju (cross-border specialist) |
| **Code-first multi-wallet acceptance (retail chain, convenience store, drugstore)** | [[payment-firms/netstars\|Netstars]] (multi-wallet aggregator) |
| **Ecosystem-anchored merchant inside Rakuten / Amazon / PayPay / Recruit** | Ecosystem-native PSP first ([[payment-firms/rakuten-fg\|Rakuten Payment]] / Amazon Pay / [[payment-firms/sb-payment-service\|SB Payment Service]] / Recruit), with general-PSP for non-ecosystem volume |
| **High-volume restaurant / personal-service with booking-flow integration** | Recruit / Air PAY (HotPepper Beauty / Gourmet integration) |
| **Gaming / digital content / micro-transaction merchant** | Komoju (vertical specialist) |

本矩阵不产生单一的「最佳」答案 — 商户的具体运营画像、结算周期需求及集成能力决定了哪个 PSP 集群适合，且许多商户为不同的交易量切片运行 **多个 PSP**（例如 GMO-PG 用于主要卡受理 + Netstars 用于多钱包码 + Square 用于线下活动）。

## Related

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-payment-clearing-and-settlement-infrastructure]]
- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/gmo-epsilon]]
- [[payment-firms/sb-payment-service]]
- [[payment-firms/dg-financial-technology]]
- [[payment-firms/netstars]]
- [[payment-firms/freee]]
- [[payment-firms/money-forward]]
- [[payment-firms/famima-digital-one]]
- [[payment-firms/seven-payment-service]]
- [[payment-firms/recruit-mufg-business]]
- [[payment-firms/paypal-pte-ltd-japan]]
- [[payment-firms/paidy]]
- [[payment-firms/rakuten-fg]]
- [[payment-firms/paypay]]
- [[business/gmo-internet-group]]
- [[INDEX|FinWiki index]]

## Sources

- GMO Payment Gateway corporate site and IR: https://corp.gmo-pg.com/ and https://corp.gmo-pg.com/ir/
- GMO Epsilon (Epsilon): https://www.epsilon.jp/
- SB Payment Service (SBペイメントサービス): https://www.sbpayment.jp/
- DG Financial Technology (DGFT): https://www.dgft.jp/
- Netstars (StarPay): https://netstars.co.jp/
- Square Japan: https://squareup.com/jp/
- Stripe Japan: https://stripe.com/jp
- PayPal Japan business: https://www.paypal.com/jp/business
- Komoju (Degica): https://komoju.com/ja/
- Amazon Pay Japan: https://pay.amazon.co.jp/
- Rakuten Payment: https://payment.rakuten.co.jp/
- Recruit Card / Air PAY: https://recruit-card.jp/
- METI: 登録包括信用購入あっせん業者 list portal — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- FSA: 資金移動業者 list PDF — https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- Payments Japan Association publications — https://paymentsjapan.or.jp/category/publications/

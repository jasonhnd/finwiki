---
source: payments/japan-merchant-psp-competitive-scorecard
source_hash: 62f3e83568013e98
lang: zh
status: machine
fidelity: ok
title: ""
translated_at: 2026-06-01T03:31:12.324Z
---
#日本商家PSP竞争记分卡

## TL;DR

日本的商家 PSP（支付服务提供商）市场比消费者可见的无现金环境所显示的更加**分散且更加分层**。市场至少沿着四个维度进行划分：(a) 传统卡网关 PSP（[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]）、(b) 二维码聚合器 PSP ([[payment-firms/netstars|Netstars]])、(c) 全球结账 PSP（Stripe Japan、PayPal Japan、Square Japan、Komoju）和 (d) 钱包平台收单方（Amazon Pay、Rakuten Payment、Recruit Card / 受取代行）——每个收单方都有不同的商户费用经济、结算速度、垂直专业化和并购历史。该记分卡沿轴并排设置了 12 个主要 PSP，这对于选择网关的商家以及试图了解谁真正控制日本 EC 支付流的行业读者都很重要。它是[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]的商户端伴侣和[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]的运营商端伴侣。

## Wiki 路径

它位于 [[payments/INDEX|payments index]] 下，作为商家端 PSP 参考。使用[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]了解技术堆栈视图，[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]了解角色分离框架，[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]了解结算周期和商户风险视图，[[payments/account-to-account-payment-japan|account-to-account payment in Japan]]了解PSP越来越多地携带的A2A线路，[[payments/merchant-bank-pay-account-direct-acquiring|merchant Bank Pay account direct-acquiring]]了解银行端直接路线，[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]了解跨方案经济学此条目有意补充，运营商锚定 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]]、[[payment-firms/netstars|Netstars]]、[[payment-firms/freee|freee]]、[[payment-firms/money-forward|Money Forward]]、[[payment-firms/famima-digital-one|FamiMa Digital One]] 和 [[payment-firms/seven-payment-service|Seven Payment Service]]。

## 为什么这个矩阵很重要
选择 PSP 的商家——或者试图阅读日本 EC 堆栈的行业阅读器——在没有并排的情况下通常会犯三个错误。首先，**“PSP”不是一个产品**：卡接受网关在结构上不同于 QR 聚合器，而 QR 聚合器在结构上又不同于 Stripe 等全球结账产品。其次，**收单角色**：一些PSP是纯粹的技术处理者，转嫁给外部收单方，另一些PSP本身就是《分期付款销售法》下的商户承包运营商（akuwaiara），商户的风险敞口相应不同（参见[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]）。第三，**结算速度和费用模型**：使用 Square 或 PayPay 商户计划的小商户获得的结算体验与使用 GMO-PG 或 SB 支付服务合同的大型企业完全不同。这张记分卡显示了这三个方面。

### GMO 支付网关（GMO-PG、TSE PRIME 3769）
按商家数量和处理价值计算，[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 是日本最大的纯游戏 PSP。成立1995-03-25为Card Commerce Co., Ltd.，于2000, 更名为GMO-PG于2005, 于TSE Mothers上市于2008移至TSE部分（现为PRIME）。 [[business/gmo-internet-group|GMO Internet Group]]的合并子公司。据报道，EC商户基地为30 万+商店。多产品线：卡网关、代码支付、便利店支付、银行转账收款、BtoB 发票/Pay.JP 开发者 SDK（Stripe 风格的竞争对手）、通过 NextPay（越南）、ECPay（台湾）的泛亚网关。通过 SMBC GMO PAYMENT JV 与 [[card-issuers/smbc-card|SMBC Card]] 建立战略关系。基于商家支付数据的交易借贷副业。

GMO-PG 的独特定位是：**多收单机构关系经纪人** — PSP 将商户路由到每个品牌的多个卡收单机构，在 METI 信用卡处理合同列表中拥有自己的商户签约运营商注册，并争夺大容量商户账户，在这些账户中，结算可靠性和集成深度比总体费率更重要。

### GMO Epsilon（GMO-PG 的子公司）
[[payment-firms/gmo-epsilon|GMO Epsilon]] 是 GMO Payment Gateway 专注于中小型商户的 PSP，其结构为一个独立的品牌，旨在满足与 GMO-PG 的企业/中端市场不同的商户细分市场。两者作为 [[business/gmo-internet-group|GMO Internet Group]] 支付伞内的姊妹实体运营，GMO Epsilon 处理较大交易量/较小票据的商户账户（较小的 EC 商店、在线服务、内容收费商户），GMO-PG 处理较大的企业合同。

独特定位：**双品牌小商户+企业拆分为一组**——GMO互联网集团通过独立品牌PSP运营商户规模的两端，这在结构上不同于Stripe（一种产品适用于所有规模）或Square（一种产品适用于小微）。

### SB 支付服务（SBPS，软银集团）

[[payment-firms/sb-payment-service|SB Payment Service / SBペイメントサービス]] 是 SoftBank 集团的 PSP，与 [[payment-firms/paypay|PayPay]] 深度集成以进行代码支付处理，并与 Yahoo! 深度集成。日本代购EC商户受理。 SBPS 处理软银集团 EC 商户基础和外部 EC 商户基础，这些商户希望从单个 PSP 接受集成卡 + 代码 + PayPay。它是经济产业省kureジットカード番号等取扱契约缔结事业者名单上的商业承包运营商，也是包括信用购入あっせん业者线路运营商。
独特的地位：**钱包锚定的 PSP** — SBPS 的 PayPay 集成为其希望将代码支付作为主要渠道的商家提供了结构性优势，而其软银集团的锚定则使其与 Yahoo! 的关系更加牢固！日本购物 / ZOZOTOWN / LINE 附属 EC 属性。

### DG 金融科技 / DGFT（数字车库集团）

[[payment-firms/dg-financial-technology|DG Financial Technology / DGFT]]是Digital Garage（TSE PRIME 4819）的支付子公司，服务于高端电商和企业商户，重点是跨境受理、多币种结算以及与Square的集成（在Square建立自己的日本实体之前，Digital Garage是Square的日本合作伙伴）。 DGFT 还充当 Veritrans（Digital Garage 收购的一个历史悠久的 PSP 品牌）的聚合商。

独特定位：**企业 + 跨境 PSP** — DGFT 在多币种处理、高级欺诈筛查和技术合作伙伴生态系统（DG 持有许多金融科技相关初创公司的投资）方面具有差异化优势，针对国际卡受理和受理率优化证明其收费结构优于商品 PSP 的商户。

### Netstars（QR 聚合器纯游戏）
[[payment-firms/netstars|Netstars]]是日本领先的**多钱包二维码聚合器**，运营StarPay商户受理产品，允许一个终端/一个二维码接受多个代码支付钱包（PayPay、d払い、au PAY、楽天ペイ、メルペイ、微信支付、支付宝+、AppPay等）。针对通过单一集成接受多钱包在结构上比直接签署每个钱包合同更高效的商户类别——便利店、药店、餐馆、零售连锁店和入境游客较多的商户。

独特的地位：**与钱包无关的网关**——与 GMO-PG 或 SBPS（它们倾向于卡优先，以代码作为附加组件）不同，Netstars 是专门为代码支付优先的商家而构建的，是跨钱包接受需求的天然对手方。结构性风险在于，钱包运营商可能会绕过聚合商推行自己的直销经济。

### Square Japan（Block Inc.子公司）
Square Japan 是 Block, Inc.（以前称为 Square, Inc.）的日本分公司。针对小型/微型商户，配备读卡器 + mPOS 应用程序 + 集成支付服务包，其形状与其美国产品相同。结算速度使 Square 脱颖而出：与 T+M 传统商户批次相比，下一个工作日结算（瑞穗银行/三井住友银行账户持有人的结算速度更快）是主要价值主张。受理卡品牌包括 Visa、Mastercard、JCB、AMEX、Diners、Discover，以及通过 Square Reader 进行二维码支付（PayPay 等）和 Suica / IC 卡。

独特定位：**微商户 + 无摩擦入职** — Square 的价值主张是“周六开户，周一接受付款”，无月费，也没有最低交易量要求。通过更加适合零售 POS 与 Stripe（专注于在线）竞争，通过提供信用卡品牌接受度（而 PayPay 不提供）与 PayPay（免费零费用促销）竞争。

### 日本条纹

Stripe Japan 是 Stripe, Inc. 的日本分公司。面向开发者、初创公司和数字优先商家，提供 API 优先支付集成，支持卡品牌（Visa、Mastercard、JCB、AMEX）、代码支付（PayPay、Konbini Payment、Bank Transfer、Apple Pay、Google Pay）以及定期计费/订阅原语。 Stripe Japan 不运营自己的实体 POS 硬件；该产品完全在线/嵌入应用程序。
独特的地位：**开发者 API 优先** — Stripe 的文档深度、API 人体工学和 SDK 质量使其成为构建自定义结帐的技术商家的默认选择，尽管总体费用率高于类似数量的 GMO-PG 或 SBPS 的协商费率。 Pay.JP（GMO-PG 的开发者 SDK 产品）是该轴上的主要日本本土竞争对手。

### 贝宝日本

PayPal Japan（PayPal Pte. Ltd. Japan 分公司，[[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]]）为日本商家运营 PayPal 结账产品，并拥有 [[payment-firms/paidy|Paidy]]（以 ~USD 2.7bn 收购了 2021-09 ），这使得 PayPal Japan 在紧邻其核心结账业务的后払い / BNPL 中占有一席之地。 PayPal 的商家主张强调跨境接受、买家保护以及与全球结账流程的整合。

独特地位： **跨境优先** — PayPal 的价值主张依赖于其全球接受足迹，对于从日本进行国际销售或向入境外国买家销售的商家而言最为强大。与 2015  之前相比，国内优先商家对 PayPal 的偏好较低，因为国内替代品（GMO-PG、SBPS、Stripe）已经成熟。 Paydy 所有权增加了一条后払い通道，补充了 PayPal 结账的主要卡/钱包基础。

### Komoju（Degica，专注于游戏/数字内容）
Komoju（株式会社 Degica）是一家总部位于东京的 PSP，专注于**数字内容、游戏、软件和入站跨境 EC** 商家。它支持广泛的支付方式组合，包括国际卡品牌、Konbini Payment、Pay-Easy（银行转账）、代码支付和后払い/Atobarai（Komoju Atobarai 是 Komoju 自有品牌 BNPL 产品）。 Komoju Atobarai 是在 METI 名单上注册的个体信用购入あっせん。

独特地位：**垂直专业 PSP** — Komoju 的游戏/数字内容重点使其在微交易计费、虚拟货币结算以及游戏商家典型的跨境买家组合方面拥有专业知识。 Steam / Sony PlayStation / 各种游戏发行商都是典型的商业细分市场。

### 亚马逊支付

Amazon Pay（Amazon Japan G.K. / Amazon Web Services Japan）是亚马逊账户即结账产品，允许第三方商家通过买家存储的亚马逊账户（卡文件、地址文件）接受付款。针对希望通过利用亚马逊注册买家群来减少结账摩擦的电子商务商家。

独特地位：**账户锚点 PSP** — Amazon Pay 的价值是**买方存储账户 + Amazon Prime 邻接**，而不是网关效率。商户费用与卡网关 PSP 相比具有竞争力，但商户的战略价值是通过无摩擦结账提高买家转化率，而不是费率效率。

### 乐天支付 / 楽天ペイメント
Rakuten Payment Inc. 为商户运营 [[payment-firms/rakuten-fg|Rakuten FG]] 支付堆栈 — Rakuten Pay（代码支付）、乐天卡受理、乐天银行结算、R-Card 链接。与 [[card-issuers/rakuten-card|Rakuten Card]]（发卡机构）和 Rakuten Point 忠诚度层紧密集成。针对受益于乐天生态系统买家获取（乐天会员注册、乐天积分赚取/兑换）的商家。

独特的地位：**生态系统锚定的 PSP** — 就像软银的 SB 支付服务或亚马逊的 Amazon Pay 一样，乐天支付的结构性优势是乐天生态系统的专属买家基础。乐天生态系统之外的商家仍然可以使用 Rakuten Pay，但失去了价值主张中的生态系统提升部分。

### 招募卡/招募MUFG业务

[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] 是 Recruit Holdings 和 [[megabanks/mufg|MUFG]] 之间的合资企业，运营 Recruit 卡产品和相关商户服务产品，包括 Air PAY（Recruit 运营的 mPOS/QR 接受产品）和 Air Regi（POS 集成）。 Air PAY 是日本小商户/餐厅/个人服务商户领域中一种有意义的卡/代码接受产品。

独特地位： **Recruit 生态系统 + mPOS** — Recruit 的 HotPepper Beauty / HotPepper Gourmet / Jalan / SUUMO 预订和发现产品为 Air PAY 提供了其他 PSP 所没有的商户获取渠道。预订流程 + 支付受理 + POS 集成的组合在结构上难以复制。

## 大比较矩阵表
|掌上游戏机|家长/团体|列表 |成立|主要商户基础 |报告的商户数量 |卡品牌支持|支持扫码支付 | A2A / 银行支付支持 | Konbini / 银行转账 | Suica / IC 预付 | BNPL / 后付费集成 |沉降速度（典型）|收费模式（小商户基线）|垂直专业化|收单方角色（自己/外部）|并购/母公司历史 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **[[payment-firms/gmo-payment-gateway\|GMO-PG]]** | [[business/gmo-internet-group\|GMO Internet Group]] | TSE PRIME 3769  | 1995 (作为卡商务) |企业+中端市场EC | ~30万+ 商店 | Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d 支付 / au PAY / Rakuten Pay via gateway |银行支付/银行转账|是（多功能便利店）|有限公司| BtoB 内部后付费 + 3rd 方 |可配置 T+5  至 T+M |按量协商；高成交量率位列最低|多垂直；企业 |自有商户签约 + 多收单机构路由 | GMO 集团内部； SMBC GMO PAYMENT JV 与 [[card-issuers/smbc-card\|SMBC Card]] |
| **[[payment-firms/gmo-epsilon\|GMO Epsilon]]** | [[business/gmo-internet-group\|GMO Internet Group]] |子公司| 2000时代|中小型EC、内容/订阅|数万| Visa/MC/JCB/AMEX | PayPay/d支付/au PAY等|银行支付 |是的 |有限公司| 3rd 方延期付款集成 | T+M 转 T+5 |降低最小值；标题率高于转基因PG企业|小商户电子商务 |传递至 GMO-PG 基础设施/外部收单机构 | GMO互联网集团内部定位|
| **[[payment-firms/sb-payment-service\|SB Payment Service]]** |软银集团+ PayPay FG |子公司| 2004 （雅虎钱包前身） |雅虎！日本代购、ZOZOTOWN、LINE-EC、外部|数十万| Visa/MC/JCB/AMEX | PayPay（深度整合）+ Rakuten Pay / au PAY / dPay |银行支付 |是的 |有限公司| PayPay延期付款/BNPL整合| T+M 传统；更快的PayPay锚定|已协商； PayPay-商户优惠费率|软银生态系统 + LINE 绑定 EC |自己的商业承包|雅虎！钱包前身； PayPay FG 下重组 |
| **[[payment-firms/dg-financial-technology\|DG Financial Technology]]** |数字车库 (TSE PRIME 4819) |子公司| Veritrans 遗产 |企业+跨境EC |数万| Visa / MC / JCB / AMEX / Diners / 银联 |是（多钱包）|银行支付 |是的 |有限公司| 3rd 方延期付款集成 |可配置|企业跨境溢价|企业跨境|自己的商业承包| Digital Garage 收购 Veritrans； Square成为日本合作伙伴预售Square直入|
| **[[payment-firms/netstars\|Netstars]]** |独立（招募战略合作伙伴/其他股权回馈）|非上市 | 2009 |多钱包商户受理 |数十万个商户地点（多钱包）|限卡焦点|各大码钱包+支付宝+/微信支付 |有限公司|有限公司|有限公司|有限公司|聚合器|独立QR先锋；招募邻近投资者群|
| **方形日本** | Block, Inc.（美国母公司）|子公司| 2013 日本入门 |微型/小型商户零售|数十万| Visa / MC / JCB / AMEX / Diners / Discover | PayPay / d払い 通过 Square Reader 和代码接受 |有限公司|有限公司| Suica / IC 卡通过 Square Reader |有限公司|下一工作日（瑞穗/SMBC 合作伙伴）| 3.25-3.75% MDR；无月租费 |微商零售/餐饮|自己的商业承包|阻止（美国）家长；前 Square Japan 通过 DGFT-Square 合作伙伴关系 |
| **日本条纹** | Stripe, Inc.（美国母公司）|子公司| 2016 日本入门 |开发商/初创公司/数字|数万公众| Visa/MC/JCB/AMEX | PayPay / Konbini / 银行转账 / Apple Pay / Google Pay |通过银行转账进行限制| Konbini 付款、银行转账 |有限公司|有限公司（定制商户端集成）|可配置| 3.6%基线；卷层 |开发者-API-优先/数字|自己的商业承包| Stripe（美国）母公司；与 mizuho-fg / SMBC 合作结算 |
| **[[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]** | PayPal Holdings（美国母公司）|子公司| 2000s时代日本|跨境电商； SaaS；国际商人|数十万| Visa / MC / JCB / AMEX（通过PayPal钱包链接）| PayPal 钱包本身 |有限公司|有限公司|有限公司| Paydy([[payment-firms/paidy\|Paidy]])后払い整合| T+M； PayPal 钱包即时到 PayPal 余额 | 3.6% + 日元 40 / 交易基线（可变）|跨境/国际EC |自己的商业承包| Paydy 收购 2021-09 (~USD 2.7bn) |
| **Komoju (Degica)** | Degica（独立+投资者支持）|非上市 | 2013 |游戏/数字内容/入站EC |数万| Visa/MC/JCB/AMEX | PayPay / d払い / 楽天ペイ / au PAY |银行转账| Konbini 支付，轻松支付 |有限公司| Komoju Atobarai（自有品牌 BNPL）|可配置|按方法定价 |游戏/数字内容/跨境|自己的商业承包 + 自己的 BNPL |独立的;投资者支持 |
| **亚马逊支付** |亚马逊日本/亚马逊美国母公司|子公司| 2007 日本推出| EC商家（亚马逊买家账户杠杆）|数万|通过买家亚马逊账户归档卡 |有限公司|有限公司|有限公司|有限公司|有限公司|可配置|与卡网关费率相当| EC结帐-减少摩擦 |与买家帐户锚点的传递 |亚马逊美国母公司战略|
| **乐天支付** | [[payment-firms/rakuten-fg\|Rakuten FG]] |子公司| Rakuten Pay 2016  推出 |乐天生态系统商家+外部|数十万|乐天卡直接+ Visa/MC/JCB/AMEX | Rakuten Pay 锚定 |有限公司|有限公司|有限公司|乐天集团BNPL毗邻| T+M；乐天生态系统受青睐 |已协商；乐天生态系统有利|乐天生态系统商家|自己+乐天卡联动|乐天集团内部重组|
| **[[payment-firms/recruit-mufg-business\|Recruit Card / Air PAY]]** |瑞可利控股 + [[megabanks/mufg\|MUFG]] 合资公司 |子公司| Air PAY 2012 推出 |小商户+餐厅+个人服务|数十万个 Air PAY 账户 | Visa/MC/JCB/AMEX/Diners | PayPay / d払い / au PAY / 楽天ペイ 等 |有限公司|有限公司|通过 Air PAY 读卡器的 Suica / IC 卡 |有限公司| T+M； Mizuho / SMBC 账户次日期权 | 3.24-3.74% MDR；无月租费 |餐厅+美容+小服务|自己的商业承包| Recruit-MUFG 成立卡/支付合资公司 |

## 侧轴 — GMV 已处理（粗略的公开报告指示）
报告的 GMV/加工价值数字并未在该同行集中统一披露，因此该侧轴是部分的。 GMO 支付网关以 IR 形式发布年度处理价值（数万亿日元范围，反映其企业商户基础）。 SB 支付服务处理价值在 SoftBank Group / PayPay FG 合并披露中报告，而不是作为独立的 PSP。 DGFT 处理值在数字车库部门披露中报告。 Square Japan、Stripe Japan、PayPal Japan、Komoju、Amazon Pay 和 Rakuten Payment 在 PSP 细分市场层面并未始终独立披露；读者应查阅母公司IR以了解所披露的内容。

|掌上游戏机|加工值披露表面 |数量级（公共来源指示）|
|---|---|---|
| **转基因-PG** |自己的 IR，每季 |每年处理价值数万亿日元|
| **SB支付服务** |软银集团 / PayPay FG 合并 |如果 PayPay 代码支付量合计可达数万亿日元 |
| **DGFT** |数字车库部门披露|数千亿至低万亿日元|
| **网络明星** |有限公众；多钱包聚合|每个钱包处理未公开汇总 |
| **方形日本** |块合并|百亿日元规模（日本部分）|
| **日本条纹** |未独立披露 |未公开披露 |
| **PayPal 日本** |未独立披露 |未公开披露 |
| **科莫朱** |未独立披露 |未公开披露 |
| **亚马逊支付** |未独立披露 |未公开披露（亚马逊部分）|
| **乐天支付** |乐天集团分部披露|如果 Rakuten Pay + Rakuten Card 合计，将达到数万亿日元 |
| **招聘/航空支付** | Recruit Holdings 部门披露 |千亿日元规模|

读者应将任何具体数字视为**仅引用的公共来源**，并根据相关年份的最新 IR 进行验证——随着 EC 渗透率的变化和 PSP 商家流失的发生，处理后的价值数字同比发生重大变化。

## 跨 PSP 技术差异化

|能力|转基因-PG |转基因厄普西隆 | SBPS | DGFT |网星|广场|条纹|贝宝 |科莫朱 |亚马逊支付 |乐天支付 |招聘/航空支付 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMV 3-DS 2.x 合规性（2025-03  授权）|是的 |是的 |是的 |是的 |不适用（代码优先）|是的 |是的 |是的 |是的 |是的 |是的 |是的 |
|代币化（网络代币）|是的 |是的 |是的 |是的 |不适用 |是的 |是的 |是的 |是的 |是的 |是的 |是的 |
|定期计费/订阅|是的 |是的 |是的 |是的 |有限公司|是（订阅）|是（计费）|是（订阅）|是的 |有限公司|是的 |有限公司|
|苹果支付 / 谷歌支付 |是的 |是的 |是的 |是的 |有限公司|是的 |是的 |是的 |是的 |有限公司|是的 |是的 |
|多币种结算 |是（有限）|有限公司|有限公司|是（强度）|有限公司|有限公司（仅限日本）|是的 |是的 |是（跨界聚焦）|有限公司（日本-美元）|有限公司|有限公司|
|市场/分期付款 |是（定制）|有限公司|是的 |是的 |有限公司|是的（一些）|是（连接）|是（自适应）|是的 |有限公司|是的 |有限公司|
|自定义对账文件 |是的 |是的 |是的 |是的 |是的 |有限公司|是的 |是的 |是的 |是的 |是的 |是的 |
|入境游客钱包支持（支付宝+、微信支付）|是（通过合作伙伴）|有限公司|是（通过合作伙伴）|是（强度）|是（母语）|有限公司|有限公司|有限公司|是的 |有限公司|有限公司|是（通过合作伙伴）|

## 费用经济学——小商户观点

对于决定加入哪个 PSP 的商店街小商户来说，标题费用比较通常如下所示。实际费用根据商家和 MCC 协商确定。

|掌上游戏机|卡 MDR 基线（小型商户）|每笔交易固定 |每月最低 |入职时间 |硬件成本|
|---|---|---|---|---|---|
| **转基因-PG** |按量协商；通常是 2.5-3.5% |变化 |企业经常需要|几天到几周| EC：零； POS：外部|
| **转基因厄普西隆** | 3.0-3.6% |变化 |低于转基因PG |几天到一周 | EC：零 |
| **SB支付服务** |洽谈 |变化 |经常需要 |几天到几周| EC：零 |
| **DGFT** |已协商；高级|变化 |企业必备|周 | EC：零 |
| **网络明星** |每个钱包的费率（1.8-3.0% 系列典型值）|变化 |降低|几天到一周 |打印的 QR 或终端 |
| **方形日本** | 3.25% 签证/MC； 3.75% JCB/美国运通 |无 |无 | 1 批准后工作日|日元 7,980 （方形读卡器）或零（通过电话的 mPOS）|
| **日本条纹** | 3.6%基线|无 |无 | 1-2 工作日 |无（仅在线）|
| **PayPal 日本** | 3.6% + 日元 40 / tx（可变）|日元 40 |无 | 1-2 工作日 |无（仅在线）|
| **科莫朱** |每种方法的定价（各不相同）|变化 |无 | 1-2 工作日 |无（在线）|
| **亚马逊支付** |与卡片MDR相媲美|变化 |无 |天|无（在线）|
| **乐天支付** |已协商；乐天生态系统有利|变化 |降低|几天到一周 | EC：零 |
| **航空支付** | 3.24% 签证/MC； 3.74% JCB/美国运通 |无 |无 | 1-2 周| Air PAY Reader 免费订阅/促销 |

## 并购和母公司历史模式

从这张记分卡可以看出，日本 PSP 市场经历了三个艰难的并购/重组时代：

1。 **2010  之前的版本 — 银行端卡处理器整合。** 银行-FG 卡处理器合并到当前的 MUFG NICOS / SMBC 卡配置中，为纯 PSP 的增长留下了空间。
2。 **2010s — 纯粹的 PSP 缩放。** [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 通过 [[business/gmo-internet-group|GMO Internet Group]] 保护伞 + SMBC GMO PAYMENT JV 发展； [[payment-firms/dg-financial-technology|DGFT]] 通过 Digital Garage 收购 Veritrans 实现增长； [[payment-firms/sb-payment-service|SB Payment Service]]通过软银集团重组扩大规模； Netstars 是作为纯粹的 QR 聚合器而出现的。
3。 **2020s — 全球结账入口 + 生态系统锚定整合。** Stripe Japan、Square Japan 和 PayPal Japan / [[payment-firms/paidy|Paidy]] 收购 (2021-09) 建立了全球结账 PSP 足迹； PayPay FG / SoftBank 合并 SB 支付服务下的钱包端受理；乐天支付合并乐天方接受。

第四个时代似乎正在 2024-2026  窗口中出现，围绕 **BNPL 集成**（PayPal、Komoju Atobarai 等下的 Payy）和 **A2A 接受**（商家直接银行支付）——这两者仍然是局部的，并重塑了 PSP 经济。

## 边界情况

- **“[[payment-firms/netstars|Netstars]] 是 PSP 还是钱包聚合器？”** 两者都是。 Netstars提供商户网关（PSP功能）和钱包路由聚合（多钱包接受）。它不是卡收单机构，也不作为主要卡签约运营商列入 METI kurejittokado番号等取扱契约缔结事业结者名单，但它通过钱包端合约路由代码支付交易。
- **“[[payment-firms/freee|freee]] 或 [[payment-firms/money-forward|Money Forward]] 是 PSP 吗？”** 不是传统意义上的 — 它们是会计/SaaS 平台，具有支付接受功能（freee Pay、Money Forward Pay），但通过底层 PSP（通常是 GMO-PG、GMO Epsilon 或合作伙伴收单机构）进行路由。它们是具有支付集成功能的商家端软件，而不是 PSP 本身。
- **“[[payment-firms/famima-digital-one|FamiMa Digital One]] 或 [[payment-firms/seven-payment-service|Seven Payment Service]] 是 PSP 吗？”** 他们是便利店 FG 支付运营商，具有针对自己的零售网络的支付接受能力以及更广泛的代码支付/钱包角色，但他们不是 GMO-PG / SBPS / DGFT 意义上的多商户 PSP。它们距离 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] 比距离商业网关 PSP 更近。
- **“[[payment-firms/jal-payment-port|JAL Payment Port]] 怎么样？”** 这是一家专注于日航集团支付和日航集团/里程计划商家直接结算的 [[payment-firms/jal-payment-port|JAL Payment Port]] 实体，而不是多商户通用 PSP。
- **“日本银联国际、日本 Visa Worldwide 或日本万事达卡怎么样？”** 他们是计划/品牌运营商，而不是 PSP。它们位于角色堆栈中 PSP 层之上 - 请参阅 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] 了解角色分离。
- **“像 [[card-issuers/smbc-card|SMBC Card]]（作为收单行）这样的商户收单机构适合在哪里？”** SMBC 卡是发行机构和收单机构，而不是 PSP。商户与 SMBC 卡的关系通常由 PSP（通常是通过 SMBC GMO PAYMENT JV 的 GMO-PG）作为中介，而不是直接的商户-收单机构关系。 SMBC 卡的收单行显示在 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 条目中。
- **“这个矩阵与 [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 有什么关系？”** 该矩阵涵盖了卡与代码、A2A 与方案类别级别的预付费。该矩阵分解了所有四个方案类别的商家接受侧内的 PSP/商家网关维度。两者是正交的。

## 最近对 PSP 的监管压力

|日期 |来源 |发生了什么变化|
|---|---|---|
| 2018 |日本经济产业省 | 大正割赋贩売法加强了加盟店调查义务——提高了持有商业承包运营商注册的PSP的入职成本
| 2020-2021 |日本经济产业省 / J-CSC |信用卡安全指南 5.0 / 5.1 — PCI DSS 期望、漏洞扫描义务、非保留执行 |
| 2022-04-08 |日本公平贸易委员会 |信用卡商户费用报告 — PSP 商户费用透明度面临压力 |
| 2023-06-01 |日本经济产业省 + 日本公平贸易委员会 | JCB 商户费用分配率披露 — 影响 PSP 路由 JCB 交易量 |
| 2024-2025 |日本经济产业省 / J-CSC |指南 6.0 / 6.1：**对于 2025-03 的 EC 卡付款，强制要求使用 EMV 3-DS**；收紧非保留规则；漏洞扫描义务扩大——合规负担严重落在 EC-PSP 身上
| 2025-2026 |日本经济产业省 |费用披露的持续压力从卡类扩展到代码支付和预付费 PSP 层 |

2025-03 EMV 3-DS 指令是 EC-PSP 细分市场最重要的变化，因为合规性工作落在 PSP 方面，以将 3-DS 身份验证集成到结帐流程中。
## 与其他矩阵的交叉引用

- 与 **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**：该矩阵涵盖了运营商级别的卡/代码/A2A/预付费方案类别。该矩阵将商户侧网关/PSP 层分解为所有四种方案类别，因为大多数主要 PSP 都接受多方案支付。
- 与 **[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]**：该条目涵盖了从 POS / EC 结账到发行人结算的技术堆栈。该矩阵命名了位于该堆栈的网关/PSP 层的特定操作员。
- 与 **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**：该条目建立了角色分离框架。该矩阵用指定的运营商填充 PSP/处理器列，并显示其中哪些人另外还担任商业签约运营商角色。
- 与 **[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]**：该条目涵盖了依赖 PSP 进行结算的商户侧风险状况。该矩阵给出了风险状况之上的各个运营商的清单。
- 对比 **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]** 和 **[[payments/japan-bnpl-pay-later-operator-registry-matrix|BNPL operator registry matrix]]**：这些矩阵分别涵盖发行方和 BNPL 运营商方；该矩阵是商家网关端对两者的补充。

## PSP-商家选择决策镜头

日本的中小型商户在选择 PSP 时通常面临四向决策：卡接受足迹、代码支付接受足迹、结算速度要求和集成复杂性容忍度。该矩阵支持以下决策树快捷方式：

|商家简介 |最适合的 PSP 集群 |
|---|---|
| **微型/个体/休闲卖家、零售POS** | Square Japan（免费阅读器，次日结算）或 Air PAY（Recruit，与 HotPepper 渠道类似的经济效益）|
| **中小型 EC、开发人员友好、数字优先** | Stripe Japan 或 Komoju（垂直专业）或 GMO Epsilon |
| **具有多收单方路由和集成深度的企业 EC** | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]]或[[payment-firms/dg-financial-technology\|DGFT]]（跨境）或[[payment-firms/sb-payment-service\|SB Payment Service]]（PayPay锚定）|
| **跨境电子商务销售给入境外国买家** | [[payment-firms/paypal-pte-ltd-japan\|PayPal Japan]]或DGFT或Komoju（跨境专家）|
| **代码优先多钱包接受（零售连锁店、便利店、药店）** | [[payment-firms/netstars\|Netstars]]（多钱包聚合器）|
| **乐天/亚马逊/PayPay/Recruit 内的生态系统锚定商家** |生态系统原生 PSP 第一（[[payment-firms/rakuten-fg\|Rakuten Payment]] / Amazon Pay / [[payment-firms/sb-payment-service\|SB Payment Service]] / Recruit），与非生态系统量的通用 PSP |
| **大容量餐厅/个人服务与预订流程集成** |招募/Air PAY（HotPepper美容/美食整合）|
| **游戏/数字内容/微交易商家** | Komoju（垂直专家）|

该矩阵不会产生单一的“最佳”答案——商家的具体运营概况、结算周期需求和集成能力决定了哪个 PSP 集群适合，并且许多商家针对不同的容量切片运行**多个 PSP**（例如，用于主卡受理的 GMO-PG + 用于多钱包代码的 Netstars + 用于现场活动的 Square）。

## 相关

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
-[[payments/japan-card-issuer-acquirer-processor-split]]
-[[payments/psp-merchant-settlement-risk]]
-[[payments/account-to-account-payment-japan]]
-[[payments/merchant-bank-pay-account-direct-acquiring]]
-[[payments/japan-payment-scheme-economics-matrix]]
-[[payments/japan-interchange-and-merchant-fee-stack]]
-[[payments/japan-card-security-authentication-controls]]
-[[payments/cashless-jp-landscape]]
-[[payments/credit-purchase-card-operators-japan-index]]
-[[payments/japan-bnpl-credit-purchase-boundary]]
-[[payments/japan-payment-clearing-and-settlement-infrastructure]]
-[[payment-firms/gmo-payment-gateway]]
-[[payment-firms/gmo-epsilon]]
-[[payment-firms/sb-payment-service]]
-[[payment-firms/dg-financial-technology]]
-[[payment-firms/netstars]]
-[[payment-firms/freee]]
-[[payment-firms/money-forward]]
-[[payment-firms/famima-digital-one]]
-[[payment-firms/seven-payment-service]]
-[[payment-firms/recruit-mufg-business]]
-[[payment-firms/paypal-pte-ltd-japan]]
-[[payment-firms/paidy]]
-[[payment-firms/rakuten-fg]]
-[[payment-firms/paypay]]
-[[business/gmo-internet-group]]
-[[INDEX|FinWiki index]]

## 来源

- GMO 支付网关公司网站和 IR：https://corp.gmo-pg.com/ 和 https://corp.gmo-pg.com/ir/
- 转基因厄普西隆（Epsilon）：https://www.epsilon.jp/
- SB 支付服务：https://www.sb payment.jp/
- DG 金融科技 (DGFT)：https://www.dgft.jp/
- Netstars (StarPay)：https://netstars.co.jp/
- Square 日本：https://squareup.com/jp/
- Stripe 日本：https://stripe.com/jp
- PayPal 日本业务：https://www.paypal.com/jp/business
- Komoju（Degica）：https://komoju.com/ja/
- 亚马逊支付日本：https://pay.amazon.co.jp/
- 乐天支付：https:// payment.rakuten.co.jp/
- 招募卡/Air PAY：https://recruit-card.jp/
- METI：注册综合信用购买调解员列表门户 — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyouyaitiran.html
- METI：已签订信用卡号码等处理合同的企业。 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- FSA：许可/注册运营商门户 — https://www.fsa.go.jp/menkyo/menkyo.html
- FSA：资金转账代理列表 PDF — https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- 日本支付协会出版物 — https:// paymentsjapan.or.jp/category/publications/

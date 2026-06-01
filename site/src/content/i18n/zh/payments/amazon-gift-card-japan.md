---
source: payments/amazon-gift-card-japan
source_hash: 0a1a27dd4347c3d3
lang: zh
status: machine
fidelity: ok
title: "Amazon Gift Card Japan：闭环电商预付"
translated_at: 2026-06-01T03:31:12.312Z
---

# Amazon Gift Card Japan：闭环电商预付

## Wiki 路径

此条目位于 [[payments/INDEX|payments index]] 下，作为亚马逊日本礼品卡预付发行人页面，与 FSA 注册表视图的 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] 配对。与[[payments/apple-gift-card-japan|Apple Gift Card Japan]]、[[payments/google-play-gift-card-japan|Google Play Gift Card Japan]]（同级平台锚定闭环礼品卡）、[[payments/quo-card-prepaid|QUO Card]]（多商户开环礼品）和[[payments/visa-gift-card-japan|Visa Gift Card]]（品牌网络预付）进行比较。与第三方零售锚定预付费 ([[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]) 不同 - 亚马逊礼品卡是**闭环**（仅可在 Amazon.co.jp 使用），而 WAON / nanaco 是接受第三方多商户的。法律框架：[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。

## TL;DR

**亚马逊礼品卡（Amazonギfuto券）**是Amazon.co.jp的**闭环预付电子商务积分**，由**Amazon Japan G.K.在日本发行。 （マゾンジャパン合同会社）**并在[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]下注册为自家型（单商/闭环）前払式支払手段。与 [[payments/quo-card-prepaid|QUO Card]] 和 [[payments/visa-gift-card-japan|Visa Gift Card]]（均为开环/多商户）不同，亚马逊礼品卡**只能在 Amazon.co.jp** 上用于市场购买。分发范围涵盖**电子礼品数字代码**（电子邮件、社交媒体交付、可定制）、**塑料礼品卡**（在便利店 Lawson / FamilyMart / MiniStop / 7-11 / 药店出售）、**チャージタイプ**（在便利店收银机/亚马逊网站上进行账户余额充值）以及**盒子/信封实物礼品包装**。该产品定位为**送礼**（向收件人提供数字/实物电子礼物）和**自助收费**（为没有信用卡的用户进行无卡 Amazon.co.jp 支付——对于银行账户不足/未成年人/无信用卡人群尤其重要）。

## 发行人和运营结构

|尺寸|阅读|
|---|---|
|运营公司| マゾンジャパン合同会社 (Amazon Japan G.K.) |
|集团家长| Amazon.com, Inc.（美国）|
| FSA 预付费注册 | 自家型前払式支払手段（闭环）—单商户Amazon.co.jp使用|
|法律分类|闭环预付费（非第三方/第三者型）— 未出现在`daisan.xlsx`第三者列表中 |
|日本上市年份 | 2003 （Amazon.co.jp 推出2000；随后几年礼品卡阵容不断扩大）|
|面额 |塑料卡/盒卡固定面额 (¥500, ¥1,000, ¥2,000, ¥3,000, ¥5,000, ¥10,000) 和电子礼品/收费类型的可变/自由选择面额（通常每笔交易 ¥15  到 ¥500,000 ）|
|分销路径| Amazon.co.jp 电子礼品、便利店实体卡、账户余额收费、B2B 批量企业计划 |
|验收|仅限 Amazon.co.jp |
|到期 | 10 自签发/最后一次收费起的年数 |

##法律依据：自家型前払式支払手段（闭环/单商户）

亚马逊礼品卡在[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]]第3 章下注册为**自家型前払式支払手段**（闭环预付），因为接受仅限于发卡机构自己的服务 (Amazon.co.jp)。这是与[[payments/quo-card-prepaid|QUO Card]]（第三方/第三者类型——被许多商家接受）的结构区别。主要监管后果：

- **不同的 FSA 注册机构** — 闭环发行人出现在“jika.xlsx”而不是“daisan.xlsx”中；此条目未出现在 [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]] 中。
- **在某些方面降低监管负担**（无第三方商户结算；闭环浮动更易于监控），但仍须遵守每半年一次的**未使用余额存款**（供托）义务。
- **除非停止发行，否则不会退还给原始付款人** — 亚马逊礼品卡余额不可退还为现金。
- **破损**受到 10 年到期的限制，但在 Amazon.co.jp 规模上仍然很重要。

## 分销路径和用例

|铁路 |描述 |
|---|---|
| **电子礼品 (Emeルタイプ)** |电子邮件/短信/LINE发送代码，可定制设计，发送者选择金额和消息；收件人在 Amazon.co.jp 上输入代码 |
| **印刷タイプ（可打印）** |用于打印和实物交接的 PDF 礼品代码 |
| **チャージタイプ（充电类型）** |通过 Amazon.co.jp 使用信用卡、银行转账、便利店支付、ATM (Pay-easy) 为账户余额充值；用于亚马逊余额自充 |
| **コンビni・ATM・ネットバンキングタイプ（便利/ATM/网上银行）** |亚马逊网站下单，便利店/ATM/网银支付→账户入账|
| **プラシチックタイプ / ボックスタイプ** |便利店和药店出售的实体塑料礼品卡或盒装礼品卡 |
| **B2B 法人ギfutokado** |企业批量采购给员工/客户送礼 |

**自收费用例**在日本具有结构性重要性：相当多的 Amazon.co.jp 用户没有或不想注册信用卡；他们在便利店收取亚马逊礼品卡余额，并用余额支付亚马逊购物费用。与其他国家/地区的预付借记卡使用案例相比，这充当了**银行服务不足的用户的无现金入口**。

## 礼品卡欺诈/诈骗问题

亚马逊礼品卡在**日本的“电子マネー型特殊欺诈/振り込め诈骗”（电子货币型电汇欺诈骗局）**生态系统中被大量利用——诈骗者（冒充税务机关、亚马逊客户支持、家庭成员等）指示受害者在便利店购买亚马逊礼品卡并通过电话读取代码。国家警察厅 (NPA)、金融服务管理局 (FSA) 和消费者保护当局已多次就这种模式发出警告。主要对策：

- 便利店收银员会警告购买 >¥10,000 礼品卡的购买者并询问其用途。
- 亚马逊日本发布了消费者警告页面并添加了诈骗意识消息。
- 这是日本公开发行礼品卡面临的主要监管/社会压力之一。

## 关键绩效指标快照

|公制|阅读（公开披露）|
|---|---|
|亚马逊礼品卡累计发行量 |特许经营期限内的实质性规模达数万亿日元（行业估计；亚马逊未披露仅限日本的礼品卡信息）|
|便利店分销渗透率|所有主要连锁便利店（Lawson、FamilyMart、MiniStop、7-11、Daily Yamazaki、Seicomart）均提供实体亚马逊礼品卡 |
|电子礼品活动 |大量的数字交付量；新冠疫情后远程礼物采用率不断增长 |
|自充电队列 |很大一部分无卡/银行账户不足的 Amazon.co.jp 用户使用礼品卡作为主要付款方式 |

亚马逊在财务披露中未公布日本细分的礼品卡 KPI；数字存在于行业估计和间接指标中。

## 策略：闭环无现金入口+礼物分发

日本亚马逊礼品卡的战略作用：

1。 **Amazon.co.jp 的无现金入口** — 无卡用户可以通过充值礼品卡余额在亚马逊上进行交易，从而扩大亚马逊在信用卡相对较少的日本零售人口中的潜在客户群。
2。 **礼品分发类别捕获** — 电子礼品类别用于个人礼品，企业 B2B 批量用于员工/客户礼品。
3。 **浮动/破损经济学** - 大量未偿礼品卡余额是为亚马逊营运资金提供资金的闭环浮动。
4。 **便利店铁路锚点** — 在便利店分发礼品卡是银行账户不足的用户的主要获取途径。
5。 **多轨分发** — 电子礼品、实体卡、收费类型、B2B 全部共存，以捕获不同的用例，而不会互相蚕食。

## 相关

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/apple-gift-card-japan]]
- [[payments/google-play-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## 来源

- 亚马逊礼品卡日本页面 (amazon.co.jp/giftcards)。
- 亚马逊礼品卡条款/帮助页面。
- 亚马逊日本 G.K.公司披露。
- FSA预付支付工具政策页面（闭环/自家型框架）。
- FSA `daisan.xlsx`（交叉引用 — 确认亚马逊是闭环的，未由第三方列出）。
- METI 无现金政策页面。

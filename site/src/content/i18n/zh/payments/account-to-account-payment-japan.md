---
source: payments/account-to-account-payment-japan
source_hash: 3f3af38bae18064d
lang: zh
status: machine
fidelity: ok
title: "日本账户对账户（account-to-account）支付路径"
translated_at: 2026-06-19T06:09:18.150Z
---

# 日本账户对账户（account-to-account）支付路径

## 概览

日本的账户对账户支付介于经典银行转账、钱包余额、卡收单和码支付之间。关键的控制问题是：**价值是直接从存款账户流动，还是通过资金移动 / 预付余额流动，抑或通过商户收单 / 卡网络层流动？**

本页面应与 [[payments/INDEX|payments domain]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]], [[payments/japan-code-payment-competitive-map|code-payment competitive map]], [[banking/quick-deposit-four-methods|quick deposit methods]] 和 [[financial-licenses/INDEX|JapanFG legal / financial licenses]] 配合使用。

## 通道图谱

| 通道 | 运营方 / 来源路径 | 客户视角 | FinWiki 解读 |
|---|---|---|---|
| 经典银行转账 | 银行与全银系统 | 银行账户到银行账户，通常基于账号。 | 核心银行支付通道；当资产负债表或银行系统结构相关时使用 [[banking/INDEX|banking domain]]。 |
| Cotra / ことら送金 | 与全银系统连接的 Cotra 系统 | 使用银行 App、账号、电话号码、电子邮件或兼容账户标识符进行的小额即时个人转账。 | 存款类机构与资金移动运营方之间的 A2A 互操作层。 |
| Bank Pay | JEPPO / 日本电子支付推进机构 | 从登记的银行账户进行 QR / 条码支付，采用直接扣款式的账户结算。 | 与码支付竞争但具有直接账户资金供给逻辑的商户支付通道。 |
| J-Debit | JEPPO / J-Debit 基础设施 | 在商户处基于现金卡的借记。 | 传统的账户直连商户借记层，亦是 Bank Pay 的基础设施基座。 |
| 钱包银行连接支付 | Pay App、银行 API / 账户连接、资金移动或预付运营方 | 用户看到 PayPay / Merpay / au PAY / 其他钱包流程。 | 需要区分账户资金供给、钱包余额、商户收单以及资金移动 / 预付分类。 |
| BaaS / 嵌入式银行账户 | 银行合作方与 App 提供方 | App 看起来像银行或钱包。 | 使用 [[banking/baas-japan-landscape|BaaS Japan landscape]] 和 [[banking/mercari-bank-license-stack|Mercari Bank license stack]]。 |

## Cotra 系统解读

全银网的官方说明称，Cotra 是在五家城市银行提出 2020 小额支付基础设施构想之后设立的，面向 100,000 日元以下的个人转账，于 2022 年10月起通过 Cotra 系统开始提供服务。它还将该系统描述为将全银系统与既有机制同更新的 IT 相结合，不仅向存款类金融机构开放连接，也向资金移动运营方开放，并在日间通过全银系统对接入运营方的资金结算两次。

对 FinWiki 而言，这使 Cotra 成为以下各方之间的有用桥梁：

- [[megabanks/mufg-bank|MUFG Bank]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], [[megabanks/mizuho-bank|Mizuho Bank]], [[megabanks/resona-bank|Resona Bank]] 及其他存款类银行；
- [[regional-banks/ssnb|SBI Sumishin Net Bank]] 和 [[banking/minna-bank-baas-model|Minna Bank BaaS]] 等 App 银行与数字银行路径；
- 经由 [[payments/funds-transfer-service-providers-japan-index|Japan funds-transfer service providers registry]] 路由的资金移动运营方；
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] 中面向用户的钱包与码支付路径。

## Bank Pay / J-Debit 解读

JEPPO 将自身描述为通过账户直连支付基础设施提供 J-Debit 和 Bank Pay 无现金服务。其 Bank Pay 页面将 Bank Pay 描述为由 JEPPO 运营的智能手机支付服务，可供拥有银行账户的用户使用，允许在无需事先充值的情况下直接从登记的银行账户付款。该页面还指出，Bank Pay 使用 J-Debit 支付基础设施，并允许登记多个账户。

这一点之所以重要，是因为 Bank Pay 在消费者看来像 QR 支付，但其经济与风险解读不同于先存储余额的钱包：

- 直接账户付款的环节不需要储值余额；
- 银行账户登记与认证层处于核心地位；
- 商户受理、退款、欺诈处理和用户支持规则不同于卡和预付通道；
- Bank Pay 还可呈现 Cotra 汇款和账单支付功能。

## 产品边界

| 产品形态 | 主要问题 | 典型路径 |
|---|---|---|
| Cotra 下的个人对个人转账 | 发送方是银行客户、钱包客户还是资金移动客户？ | Cotra / 全银连接加上银行或资金移动提供方的披露。 |
| 从银行账户进行的 QR 商户支付 | 账户是被直接扣款，还是先充值钱包余额？ | Bank Pay / 账户直连路径。 |
| 银行充值后的钱包支付 | 价值在商户支付前是否储存于钱包中？ | [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]。 |
| 通过 PayPay / d払い / au PAY / 乐天 Pay 的商户 QR 支付 | 这属于码支付、卡收单、预付还是资金移动经济性？ | [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 和 [[payments/psp-merchant-settlement-risk|PSP settlement risk]]。 |
| 向证券 / 加密账户的快速入金 | 通道是银行转账、账户扣款、API 指令还是支付代理路径？ | [[banking/quick-deposit-four-methods|quick deposit methods]] 和 [[financial-licenses/INDEX|license stack]]。 |

## 与 JapanFG 的关联

- 超大型银行和核心银行处于中心地位，因为账户对账户支付最终需要存款账户连接以及银行清算 / 结算规则。
- [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] 及 COIN+ 类模式被记录为围绕账户连接通道构建商户与消费者支付频率的尝试。
- [[payment-firms/paypay|PayPay]], [[payment-firms/merpay|Merpay]], [[payment-firms/au-payment|au PAY]] 和 [[payment-firms/rakuten-edy|Rakuten Edy]] 仍是钱包 / 码支付的锚点，但其银行连接流程与纯粹的账户对账户支付是分开的。
- [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]], [[regional-banks/fukuoka-fg|Fukuoka FG]] 以及地方银行的 App 路径很重要，因为 Cotra 和 Bank Pay 能将银行 App 变成日常支付界面。

## 风险与注意事项

| 风险 | 解读 |
|---|---|
| 银行账户欺诈 / 未授权扣款 | 账户直连付款使认证、设备迁移和账户登记控制变得重要。 |
| 消费者混淆 | QR 支付 UX 可能掩盖产品究竟是账户直连、预付、资金移动、卡还是钱包余额。 |
| 商户受理碎片化 | Bank Pay、J-Debit、支持 Cotra 的 App 和码支付 App 各自拥有不同的商户网络。 |
| 结算时点 | 面向客户的即时完成与运营方之间的最终结算是不同的层级。 |
| 互操作性限制 | Cotra 的可用性取决于参与的 App 和机构；Bank Pay 的可用性取决于登记的银行和商户。 |
| 监管分类 | 当非银行或钱包运营方触及价值时，资金移动和预付制度仍然重要。 |

## 研究清单

1. 确定价值起始于银行存款账户、钱包余额、卡额度还是预付余额。
2. 确定商户或收款人收到的是银行货币、钱包价值还是资金移动价值。
3. 核查运营方：银行、资金移动服务提供方、预付发行方、PSP 还是码支付平台。
4. 对于 Cotra，核查当前参与的 App / 机构页面。
5. 对于 Bank Pay，核查当前参与的金融机构和商户受理情况。
6. 在作出牌照论断之前，将公司页面链接回 [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] 和 [[financial-licenses/INDEX|legal / financial licenses]]。

## 相关

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/psp-merchant-settlement-risk]]
- [[banking/quick-deposit-four-methods]]
- [[banking/baas-japan-landscape]]
- [[financial-licenses/INDEX]]
- [[payment-firms/recruit-mufg-business]]
- [[payment-firms/paypay]]
- [[payment-firms/merpay]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 出处

- 全银网：Cotra 系统连接说明。
- Cotra：官方服务、P2P 转账及参与运营方页面。
- JEPPO：组织及 Bank Pay 官方页面。
- 金融厅：资金移动服务提供方登记簿。

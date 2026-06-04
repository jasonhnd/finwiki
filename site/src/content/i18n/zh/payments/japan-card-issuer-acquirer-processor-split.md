---
source: payments/japan-card-issuer-acquirer-processor-split
source_hash: d0156df45dc02ebb
lang: zh
status: machine
fidelity: ok
title: "日本发卡机构、收单机构和处理机构的分割"
translated_at: 2026-06-01T03:31:12.249Z
---
# 日本发卡机构、收单机构和处理机构的分割

## 概述

日本卡支付至少分为五个角色：发卡机构、国际/国内品牌、收单机构、卡号合约/商户合约运营商以及处理者/PSP。一个团体可以担任多个角色，但 FinWiki 并没有将它们扁平化为“信用卡公司”。

将此页面与 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/japan-card-security-authentication-controls|card security and authentication controls]]、[[payments/credit-purchase-card-operators-japan-index|credit purchase and card operator registry]]、[[payments/psp-merchant-settlement-risk|PSP settlement risk]]、[[payments/cashless-jp-landscape|cashless landscape]]、[[card-issuers/jcb|JCB]]、[[card-issuers/smbc-card|SMBC Card]] 和 [[card-issuers/mufg-nicos|MUFG NICOS]] 一起使用。

## 角色地图

|角色 |它控制什么 |典型的日本FG主播|
|---|---|---|
|发行人 |持卡人筛选、信用额度、计费、循环/分期应收账款、欺诈监控。 | [[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] |
|品牌/方案|网络规则、品牌接受度、国际路由、卡产品规则。 | [[card-issuers/jcb|JCB]]，Visa / Mastercard / AMEX / Diners 合作伙伴。 |
|收单机构 |商户承保、商户合同、结算、退款/争议处理。 | [[card-issuers/jcb|JCB]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] |
| PSP/网关|技术验收、标记化、支付页面、欺诈过滤器、对帐文件。 | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/dg-financial-technology|DGFT]] |
|商家|接受卡付款、保护持卡人数据、处理运输/退款/争议证据。 | [[retail/INDEX|retail INDEX]]下的零售/电商运营商以及[[business/gmo-internet-group|GMO Internet Group]]等平台案例。 |

## 法律/注册边界

|问题 |路线 |
|---|---|
|该实体是分期销售/赊购运营商吗？ |检查经济产业省分期付款销售法登记列表和 [[payments/credit-purchase-card-operators-japan-index|registry-control page]]。 |
|实体商户是否面向卡号处理/合同签订？ |检查商家合同和安全指南义务。 |
|该实体只是网关/处理器吗？ |检查是否也承保商家或仅提供技术处理。 |
|该产品是循环/分期信用吗？ |检查分期付款销售法和信用/BNPL 边界。 |
|产品是直接预付/借记/银行账户吗？ |路由至 [[payments/funds-transfer-vs-prepaid-boundary|prepaid / funds-transfer boundary]] 或 [[payments/account-to-account-payment-japan|A2A route]]。 |

## 安全控制堆栈

日本信用协会安全指南路线很重要，因为欺诈和卡数据泄露控制不仅仅是发卡机构的控制：

- EC 商家和 PSP 需要卡信息保护控制；
- 收单机构和 PSP 协调商家入职和安全修复；
- 发卡机构授权和 3-D 安全/身份验证控制位于持卡人一侧；
- 退款/争议证据跨越发行人、收单机构、PSP 和商户系统；
- 定期计费和代币化支付在第一笔交易之外添加了生命周期/同意控制。

JCB 公共品牌业务解释是一种有用的简单语言模型，用于在添加日本特定的注册和安全控制之前区分持卡人、商户、发卡机构、收单机构和品牌/支付网络角色。

## 常见误读

|误读|更好的阅读 |
|---|---|
| “JCB只是一家发卡机构。” |根据具体情况，JCB 可以理解为国内卡品牌、发行机构、收单机构和网络参与者。 |
| “PSP = 收单方。” | PSP 可以是技术网关、商业承包运营商、结算参与者或所有这些。 |
| “3-D Secure 解决了卡欺诈问题。” |身份验证是一种控制；商家筛选、标记化、监控和争议处理仍然很重要。 |
| “信用卡公司=消费贷款机构。” |发行人信用风险是一层；商户收单和计划规则是不同的层次。 |

## 研究清单

1。确定实体是发行方、收单方、品牌、处理方/PSP、商家还是多个角色。
2。检查 METI 注册类别和上市公司披露。
3。检查卡数据是否由第三方处理器存储、标记或处理。
4。检查产品是否包含循环、分期、BNPL 或仅签账卡结算。
5。将商家风险问题链接到 [[payments/psp-merchant-settlement-risk|PSP settlement risk]]，将消费者信用问题链接到 [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]]。

## 相关

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/cashless-jp-landscape]]
- [[card-issuers/jcb]]
- [[card-issuers/smbc-card]]
- [[card-issuers/mufg-nicos]]
- [[payment-firms/gmo-payment-gateway]]
- [[INDEX|FinWiki index]]

## 来源

- METI：分期付款销售法登记列表。
- METI：卡/后付款常见问题解答和信用卡安全指南修订发布。
- 日本信用协会：安全指南文档页面和 5.0 / 6.0  指南材料。
- JCB：卡支付参与者模型和商户规则。
- FSA：持牌/注册金融机构门户。
- 日本支付协会：公共出版索引。

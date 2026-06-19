---
source: payments/japan-card-issuer-acquirer-processor-split
source_hash: 6747ff79dacb1070
lang: zh
status: machine
fidelity: ok
title: "日本卡片发卡方、收单方与处理方的划分"
translated_at: 2026-06-19T06:09:18.095Z
---

# 日本卡片发卡方、收单方与处理方的划分

## Overview

日本卡片支付至少划分为五种角色：发卡方、国际 / 国内品牌、收单方、卡号合同 / 商户签约运营方，以及处理方 / PSP。单一集团可同时持有多种角色，但 FinWiki 不会将它们压平为「信用卡公司」。

请将本页与 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/japan-card-security-authentication-controls|card security and authentication controls]]、[[payments/credit-purchase-card-operators-japan-index|credit purchase and card operator registry]]、[[payments/psp-merchant-settlement-risk|PSP settlement risk]]、[[payments/cashless-jp-landscape|cashless landscape]]、[[card-issuers/jcb|JCB]]、[[card-issuers/smbc-card|SMBC Card]] 和 [[card-issuers/mufg-nicos|MUFG NICOS]] 一并使用。

## 角色地图

| 角色 | 它控制什么 | 典型 JapanFG 锚点 |
|---|---|---|
| 发卡方 | 持卡人审核、信用额度、账单、循环 / 分期应收款、欺诈监控。| [[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]] |
| 品牌 / 卡组织 | 网络规则、品牌受理、国际路由、卡产品规则。| [[card-issuers/jcb|JCB]]，Visa / Mastercard / AMEX / Diners 合作方。|
| 收单方 | 商户核保、商户合同、结算、拒付 / 争议路由。| [[card-issuers/jcb|JCB]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] |
| PSP / 网关 | 技术受理、令牌化、支付页面、欺诈过滤、对账文件。| [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/dg-financial-technology|DGFT]] |
| 商户 | 受理卡支付、保护持卡人数据、处理发货 / 退款 / 争议证据。| [[retail/INDEX|retail INDEX]] 下的零售 / EC 运营者，以及如 [[business/gmo-internet-group|GMO Internet Group]] 等平台案例。|

## 法律 / 登记边界

| 问题 | 路径 |
|---|---|
| 该实体是否为分期销售 / 信用购买运营者？| 查阅 METI 分期销售法登记清单及 [[payments/credit-purchase-card-operators-japan-index|registry-control page]]。|
| 该实体是否面向商户进行卡号处理 / 合同订立？| 查阅商户签约与安全指引义务。|
| 该实体是否仅为网关 / 处理方？| 查验它是否也对商户核保，抑或仅提供技术处理。|
| 该产品是否为循环 / 分期信用？| 查阅分期销售法与信用 / BNPL 边界。|
| 该产品是否为预付 / 借记 / 银行账户直连？| 引向 [[payments/funds-transfer-vs-prepaid-boundary|prepaid / funds-transfer boundary]] 或 [[payments/account-to-account-payment-japan|A2A route]]。|

## 安全控制栈

日本信用协会的安全指引路径之所以重要，是因为欺诈与卡数据泄露控制并非仅是发卡方的控制：

- EC 商户与 PSP 需要卡信息保护控制；
- 收单方与 PSP 协调商户准入与安全整改；
- 发卡方授权与 3-D Secure / 认证控制位于持卡人一侧；
- 拒付 / 争议证据横跨发卡方、收单方、PSP 与商户系统；
- 周期性账单与令牌化支付在首笔交易之外增加了生命周期 / 同意控制。

JCB 公开的品牌业务说明，是在添加日本特有的登记与安全控制之前，用以区分持卡人、商户、发卡方、收单方与品牌 / 支付网络角色的有用的通俗模型。

## 常见误读

| 误读 | 更好的解读 |
|---|---|
| 「JCB 只是发卡方。」| 视语境，JCB 可被解读为国内卡品牌、发卡方、收单方与网络参与方。|
| 「PSP = 收单方。」| PSP 可能是技术网关、商户签约运营方、结算参与方，或以上全部。|
| 「3-D Secure 解决卡欺诈。」| 认证只是一项控制；商户审核、令牌化、监控与争议处理仍然重要。|
| 「卡公司 = 消费者放贷方。」| 发卡方信用风险是一层；商户收单与卡组织规则是不同的层。|

## 研究清单

1. 识别该实体是发卡方、收单方、品牌、处理方 / PSP、商户，还是多重角色。
2. 查验 METI 登记类别与公开公司披露。
3. 查验卡数据是被存储、令牌化，还是由第三方处理方处理。
4. 查验该产品是否包含循环、分期、BNPL，还是仅为记账卡结算。
5. 将商户风险问题链接至 [[payments/psp-merchant-settlement-risk|PSP settlement risk]]，将消费者信用问题链接至 [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]]。

## Related

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

## Sources

- METI: 分期销售法登记清单。
- METI: 卡 / 后付 FAQ 及信用卡安全指引修订发布。
- 日本信用协会: 安全指引文件页及 5.0 / 6.0 指引资料。
- JCB: 卡支付参与者模型与商户规则。
- FSA: 持牌 / 登记金融机构门户。
- Payments Japan Association: 公开出版物索引。

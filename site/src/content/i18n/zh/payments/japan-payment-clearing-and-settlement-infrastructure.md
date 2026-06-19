---
source: payments/japan-payment-clearing-and-settlement-infrastructure
source_hash: 21d8d902c60b350a
lang: zh
status: machine
fidelity: ok
title: "Japan payment clearing and settlement infrastructure"
translated_at: 2026-06-19T06:09:18.197Z
---

# Japan payment clearing and settlement infrastructure

## Overview

日本的支付基础设施包括中央银行结算资产、日银网（BOJ-NET）、银行间转账清算、小额转账基础设施、账户直连支付、借记支付、卡支付、钱包支付以及私营部门的清算安排。本页将面向客户的支付产品与用于清算和结算的系统及规则区分开来。

本页归属于 [[payments/INDEX|payments domain]]，并链接至 [[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud-control map]]、[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]、[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[banking/quick-deposit-four-methods|quick deposit four methods]] 与 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]。

## Infrastructure Map

| Layer | Public system / route | Public function |
|---|---|---|
| Central-bank settlement | BOJ accounts and BOJ-NET | 结算资产及资金／国债结算服务。 |
| Interbank bank transfer | Zengin System | 全国在线的国内银行间资金转账系统。 |
| Zengin net settlement | Zengin clearing route and BOJ current accounts | 参加银行间的净额头寸及日银账户结算。 |
| Large-value transfer | BOJ-NET RTGS where applicable | 100 百万日元及以上的转账通过日银网 RTGS 进行。 |
| Small-value transfer | Cotra | 连接银行账户与参加机构的小额个人转账通道。 |
| Account-direct merchant payment | Bank Pay | 银行账户直连的智能手机商户支付通道。 |
| Debit payment | J-Debit | 银行现金卡的借记支付通道。 |
| Bank API / payment instruction | Electronic payment agency / Open API | 账户信息与支付指令的接口通道。 |
| Card payment | Issuer / acquirer / brand / PSP stack | 卡的授权、清算、拒付与结算。 |

## BOJ Settlement Layer

日本银行提供结算资产并运营日银网。日银的资料将结算资产描述为已转移的资金或证券，并将支付与结算系统描述为可包含系统、规则、协议、有时还包括相关法律法规的有组织安排。

日银账户之间的资金转账用于银行间货币市场交易、JGB 及其他证券交易的现金部分，以及来自私营部门清算系统的净额头寸。日银账户的借记与贷记还用于货币市场操作、与金融机构的贷款交易、国库资金，以及国债的发行／偿还。

## Zengin System Route

全银系统是全国在线的银行间国内资金转账系统。全银网（Zengin-Net）的资料描述了其银行转账职能及相关清算通道。该系统覆盖日本几乎所有的私营银行。

全银清算资料将净额头寸与日银账户结算确定为银行间结算层。100 百万日元及以上的转账通过日银网 RTGS 进行经路，而非普通的净额结算。

## Cotra Route

Cotra（ことら）是连接五大都市银行小额基础设施构想以及于 2021 设立的运营公司的小额银行账户转账通道。公开的服务资料确定了 100,000 及以下的个人转账，以及 2022 年 10 月的服务启动。

Cotra 的公开资料将吸收存款的金融机构与资金移动业者确定为参加类别。该服务支持按账号经路指定，以及附带发送方名义确认的电话／电子邮件式别名流程。公开来源资料记录，所连接机构的资金通过全银每日日内清算两次以完成最终结算。

## JEPPO, J-Debit, and Bank Pay Route

JEPPO 推动账户关联的支付基础设施。其公开的服务页面将 J-Debit 与 Bank Pay 确定为核心的账户关联支付服务。

| Service | Public model |
|---|---|
| J-Debit | 客户出示现金卡并输入 PIN；资金立即从银行账户扣除；商户随后获得支付。 |
| Bank Pay | 由 JEPPO 运营、面向银行账户持有者的智能手机支付服务；从注册的银行账户直接扣款；无需预先充值／入金。 |
| Bank Pay infrastructure | 使用 J-Debit 的支付基础设施。 |
| Bank Pay adjacent functions | 商户支付、Cotra 汇款与账单支付流程可同处于同一应用界面。 |

## Product-To-Infrastructure Crosswalk

| Product surface | Infrastructure route |
|---|---|
| Bank transfer | 全银系统与银行账户分类账。 |
| High-value bank transfer | 在适用情形下，100 百万日元及以上经由日银网 RTGS。 |
| Small-value P2P transfer | 在参加银行／应用使用该服务时的 Cotra 通道。 |
| Merchant QR from bank account | Bank Pay／账户直连的商户收单通道。 |
| Cash-card debit at merchant | J-Debit 通道。 |
| Immediate deposit to broker / wallet | 银行 API、快速入金、账户转账或关联银行支付通道。 |
| Card checkout | 卡网络／收单方／PSP／处理方／发卡方通道。 |
| Wallet top-up | 视条款而定的银行 API、卡、资金移动、预付或账户间通道。 |

## Public Record Fields

| Field | Source route |
|---|---|
| System operator | 日银、全银网、Cotra、JEPPO、卡组织或 PSP 的披露。 |
| Participant category | 银行、资金移动业者、支付服务提供商、商户、PSP 或应用。 |
| Transfer type | 银行间转账、小额转账、借记、账户直连商户支付、卡、钱包充值。 |
| Clearing layer | 全银清算、Cotra 清算、卡清算、组织通道或双边银行账户通道。 |
| Settlement asset | 日银账户余额、银行存款、预付余额、资金移动余额、卡应收款或其他债权。 |
| Settlement timing | 系统文档与参加者条款。 |
| Refund / cancellation route | 组织文档与商户条款。 |
| Incident / reconciliation route | 银行 API 事件页面、组织资料与公司披露。 |

## Related Routes

[[payments/account-to-account-payment-japan|Account-to-account payment Japan]] 记录 Cotra／Bank Pay／J-Debit 及账户直连流程。[[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring]] 记录银行账户直连支付的商户入网、退款、关联业务与结算控制。[[payments/japan-bank-api-incident-and-fraud-control|Bank API incident and fraud-control map]] 记录故障、未授权指令、补偿、AML 与对账项目。

## JapanFG Operator Links

- 银行网络背景：[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]]、[[megabanks/resona-bank]] 及地方银行页面。
- 钱包／资金移动：[[payment-firms/paypay]]、[[payment-firms/merpay]]、[[payment-firms/au-payment]]、[[payment-firms/rakuten-edy]]。
- 商户 PSP／收单：[[payment-firms/gmo-payment-gateway]]、[[payment-firms/sb-payment-service]]、[[payment-firms/netstars]]。

## Related

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/card-acquiring-japan-stack]]
- [[banking/quick-deposit-four-methods]]
- [[financial-licenses/payment-license-stack]]
- [[money-market/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: payment and settlement systems overview.
- Bank of Japan: payment and settlement system review materials.
- Zengin-Net: Zengin System and clearing public pages.
- Zengin-Net / Cotra: Cotra public pages.
- Cotra: service and member pages.
- Japan Electronic Payment Promotion Organization: Bank Pay and J-Debit.
- Payments Japan: cashless / payment publications.

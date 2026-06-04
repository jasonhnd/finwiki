---
source: payments/japan-payment-clearing-and-settlement-infrastructure
source_hash: be2defa929cfa7db
lang: zh
status: machine
fidelity: ok
title: "日本支付清算和结算基础设施"
translated_at: 2026-06-01T03:31:12.225Z
---
﻿
# 日本支付清算和结算基础设施

## 概述

日本支付基础设施包括央行结算资产、BOJ-NET、银行间转账清算、小额转账基础设施、账户直接支付、借记支付、卡结算、钱包结算和私营部门清算安排。该页面将面向客户的支付产品与用于清算和结算的系统和规则分开。

本页面属于[[payments/INDEX|payments domain]]，链接至[[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident and fraud-control map]]、[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]、[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、 [[banking/quick-deposit-four-methods|quick deposit four methods]] 和 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]。

## 基础设施地图

| 图层 | 公共系统/路线 | 公共职能 |
|---|---|---|
| 央行结算 | 日本央行账户和日本央行-NET | 结算资产及资金/JGS结算服务。 |
| 银行间银行转账 | 增金系统 | 覆盖全国的在线境内银行间资金划转系统。 |
| Zengin净额结算 | Zengin 清算路线和日本央行经常账户 | 参与银行之间的净头寸和日本央行账户结算。 |
| 大额转账 | BOJ-NET RTGS（如适用） | 通过 BOJ-NET RTGS 转账 100  百万日元或以上。 |
| 小额转账 | 科特拉 | 与银行账户和参与运营商相关的小额个人转账路线。 |
| 账户-商户直接支付 | 银行支付 | 银行账户直接智能手机商家付款途径。 |
| 借记付款 | J-借记卡 | 银行现金卡借记卡付款方式。 |
| 银行API/支付指令 | 电子支付代理/开放API | 账户信息和支付指令接口路由。 |
| 刷卡支付 | 发行者/收单者/品牌/PSP堆栈 | 卡授权、清算、退款和结算。 |

## 日本央行结算层

日本银行提供结算资产并运营 BOJ-NET。日本央行的材料将结算资产描述为已转移的货币或证券，并将支付和结算系统描述为有组织的安排，其中可以包括系统、规则、协议，有时还包括相关法律和法规。

日本央行账户之间的资金转账用于银行间货币市场交易、日本国债和其他证券交易的现金部分以及私营部门清算系统的净头寸。日本央行账户借方和贷方还用于货币市场操作、与金融机构、国库基金的借贷交易以及 JGS 发行/赎回。

## Zengin系统路线

Zengin系统是全国性在线银行间国内资金转账系统。 Zengin-Net 材料描述了其银行转账的作用和相关的清算路线。该系统覆盖了日本几乎所有的私人银行。

Zengin 清算材料将净头寸和日本央行经常项目结算确定为银行间结算层。日元 100  百万或以上的转账通过 BOJ-NET RTGS 进行，而不是普通的净额结算。

## 科特拉路线

Cotra是连接五城银行小额基础设施概念的小额银行账户转账路线，运营商公司成立于2021。公共服务材料显示个人转账金额为 100,000  或以下，服务于 10 月开始 2022。

公共 Cotra 材料将接受存款的金融机构和资金转移运营商确定为参与者类别。该服务支持帐号路由和电话/电子邮件式别名流以及发送方名称确认。公开资料包记录称，互联运营商的资金通过 Zengin 进行盘中两次清算以进行最终结算。

## JEPPO、J-Debit 和银行支付途径

JEPPO 推广账户关联支付基础设施。其公共服务页面将 J-Debit 和 Bank Pay 视为与账户相关的核心支付服务。

| 服务 | 公模 |
|---|---|
| J-借记卡 | 客户出示现金卡并输入 PIN 码；资金立即从银行账户扣除；商家稍后付款。 |
| 银行支付 | JEPPO 为银行账户持有人提供智能手机支付服务；从注册银行账户直接扣款；无需预付款/收费。 |
| 银行支付基础设施 | 使用 J-Debit 支付基础设施。 |
| 银行支付相关功能 | 商户支付、Cotra 汇款和账单支付流程可以位于同一个应用程序界面中。 |

## 产品到基础设施的人行横道

| 产品表面 | 基础设施路线 |
|---|---|
| 银行转账 | Zengin 系统和银行账户分类账。 |
| 大额银行转账 | BOJ-NET RTGS 日元 100  百万或更多（如适用）。 |
| 小额P2P转账 | 参与银行/应用程序使用该服务的 Cotra 路线。 |
| 银行账户的商户二维码 | 银行支付/账户直接商户收单途径。 |
| 商户现金卡借记卡 | J-借记路线。 |
| 立即存入经纪商/钱包 | 银行API、快速存款、账户转账或链接银行支付路径。 |
| 刷卡结账 | 卡网络/收单机构/PSP/处理器/发行机构路线。 |
| 钱包充值 | 银行 API、卡、资金转账、预付费或账户到账户路径，具体取决于条款。 |

## 公共记录字段

| 领域 | 来源路线 |
|---|---|
| 系统操作员 | BOJ、Zengin-Net、Cotra、JEPPO、卡计划或 PSP 披露。 |
| 参赛者类别 | 银行、资金转账运营商、支付服务提供商、商家、PSP 或应用程序。 |
| 转移类型 | 跨行转账、小额转账、借记卡、商户直付、卡、钱包充值。 |
| 清除层 | Zengin清算、Cotra清算、卡清算、计划路线或双边银行账户路线。 |
| 结算资产 | 日本央行账户余额、银行存款、预付余额、资金转账余额、卡应收账款或其他债权。 |
| 结算时间 | 系统文档和参与者条款。 |
| 退款/取消路线 | 方案文件和商家条款。 |
| 事件/和解路线 | 银行API事件页面、方案材料和公司披露。 |

## 相关路线

[[payments/account-to-account-payment-japan|Account-to-account payment Japan]] 记录 Cotra / Bank Pay / J-Debit 和账户直接流量。 [[payments/merchant-bank-pay-account-direct-acquiring|Merchant bank-account direct acquiring]] 记录银行账户直接支付的商户入驻、退款、关联业务和结算控制。 [[payments/japan-bank-api-incident-and-fraud-control|Bank API incident and fraud-control map]] 记录中断、未经授权的指令、补偿、AML 和对账字段。

## JapanFG 运营商链接

- 银行网络上下文：[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]]、[[megabanks/resona-bank]] 和区域银行页面。
- 钱包/资金转账：[[payment-firms/paypay]]、[[payment-firms/merpay]]、[[payment-firms/au-payment]]、[[payment-firms/rakuten-edy]]。
- 商户PSP/收单：[[payment-firms/gmo-payment-gateway]]、[[payment-firms/sb-payment-service]]、[[payment-firms/netstars]]。

## 相关

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

## 来源

- 日本银行：支付和结算系统概述。
- 日本银行：支付结算系统审查材料。
- Zengin-Net：Zengin系统和清理公共页面。
- Zengin-Net / Cotra：Cotra 公共页面。
- Cotra：服务和会员页面。
- 日本电子支付促进组织：Bank Pay 和 J-Debit。
- 日本支付：无现金/支付出版物。

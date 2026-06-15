---
source: payments/japan-bank-api-payment-agency-route
source_hash: 69c0717ae1eba5c2
lang: zh
status: machine
fidelity: ok
title: "日本银行API和电子支付代理路线"
translated_at: 2026-06-01T03:31:12.323Z
---
# 日本银行API和电子支付代理路线

## 概述

日本的银行API/电子支付代理路线是银行和金融科技应用程序之间的合法和运营桥梁，这些应用程序获取账户信息、启动账户关联指令或将面向客户的服务连接到存款账户轨道。它与银行、资金转账服务提供商、预付费发卡机构、卡收单机构或钱包运营商不同。

将此页面与 [[payments/INDEX|payments domain]]、[[financial-licenses/INDEX|JapanFG legal / financial licenses]]、[[payments/account-to-account-payment-japan|Japan account-to-account payment route]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[banking/baas-japan-landscape|BaaS Japan landscape]] 和 [[banking/mercari-bank-license-stack|Mercari Bank license stack]] 一起使用。

## 路线图

|角色 |它有什么作用 |它不是什么 |
|---|---|---|
|银行|持有存款、维护账户并执行银行账户分类帐移动。 |不仅仅是应用程序前端。 |
|电子支付代理运营商|在已注册的电子支付代理路径下连接银行以获取账户信息/支付指令相关服务。 |并不自动成为资金转移运营商或预付费发行人。 |
|资金转账运营商|根据《支付服务法》途径转移资金。 |如果没有相关银行/合法途径，则不会自动允许访问银行 API。 |
|预付发行人 |发行储值工具。 |本身不是帐户信息或支付指令服务。 |
| BaaS /嵌入式金融应用程序|通过合作银行或许可堆栈提供类似银行的用户体验。 |不一定是持牌银行或电子支付代理运营商。 |
| PSP/商户网关|提供商户受理及结算服务。 |不一定是帐户信息/银行 API 参与者。 |

## 源堆栈

|来源 |它证明了什么 |
|---|---|
| FSA 许可证门户 |电子支付代理运营商和相关持牌/注册金融机构的官方入口点。 |
| FSA电子支付机构名单|指定运营商是否出现在已检查的电子支付机构注册表中。 |
| FSA授权电子支付机构协会名单|该类别是否存在自律/关联路径。 |
| JBA Open API 模型合约文档 |实用银行/电子支付代理合同问题和 API 使用模式。 |
| FAPI 关联链接 |用于法规和技术标准讨论的行业导航界面。 |

对于实时的公司结论，请检查确切的法定名称、注册号、截至日期、服务范围和银行 API 合同披露。不要仅从营销页面推断注册情况。

## 产品边界

|产品/流程|第一个问题 |典型的Wiki 路径 |
|---|---|---|
|账户聚合/PFM |应用程序获取银行账户信息是否经过用户同意？ |电子支付代理路线加银行API/合约披露。 |
|从银行账户发起付款|谁接收用户指令以及谁执行银行账户移动？ |电子支付代理路线、[[payments/account-to-account-payment-japan|A2A payment route]]、银行页面。 |
|从银行账户充值钱包 |账户借记后，价值会转入钱包余额吗？ | [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]。 |
|商户二维码账户-直接支付 |商户付款是银行支付/帐户直接付款还是钱包余额？ | [[payments/merchant-bank-pay-account-direct-acquiring|merchant account-direct acquiring]]。 |
|嵌入式银行账户用户体验 |银行账户是由应用公司还是合作银行持有？ | [[banking/baas-japan-landscape|BaaS Japan landscape]]。 |
|稳定币/EPI 处理 |该工具是电子支付工具还是加密资产？ | [[fintech/japan-ecisb-license|ECISB]] 和 [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]]。 |

## JapanFG 相关性

- [[megabanks/mufg-bank|MUFG Bank]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho Bank]] 和 [[megabanks/resona-bank|Resona Bank]] 很重要，因为金融科技账户链接取决于银行 API/合同接受。
- [[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/money-forward|Money Forward]] 和 [[payment-firms/freee|freee]] 是账户信息、会计​​、支付和 API 路由可能变得具有战略重要性的实体示例。
- [[payment-firms/merpay|Merpay]]、[[payment-firms/paypay|PayPay]] 和 [[payment-firms/au-payment|au PAY]] 分为钱包/资金转账/预付费/帐户直接/银行 API 层，而不是视为一个“支付应用程序”类别。
- [[banking/mercari-bank-license-stack|Mercari Bank license stack]] 是最清晰的内部路线，用于展示如何拆分银行合作伙伴、应用程序用户体验和支付帐户。

## 控制问题

|问题 |公共相关性|
|---|---|
|经营者是否注册为电子支付代理经营者？ |注册是针对特定类别的，必须在 FSA 列表中进行检查。 |
|使用哪些银行 API？ |银行 API 合同和范围因银行和服务而异。 |
|该服务是只读的还是具有指令功能的？ |信息检索和支付/转账指令具有不同的风险面。 |
|谁对用户进行身份验证？ |银行认证、应用认证和同意管理可以分开。 |
|未经授权的交易风险由谁承担？ |用户保护、银行责任、应用程序责任和欺诈响应取决于法律/合同途径。 |
|应用程序是否具有价值？ |如果是，可能需要资金转账/预付/钱包分类。 |
|商家有参与吗？ |商户承兑增加了 PSP/收单/结算风险。 |

## 风险和警告

- 注册并不能证明每个 API 或支付功能都处于活动状态。
- 与银行相关的用户体验可以隐藏应用程序是否仅读取数据、发起指令、转移资金或持有钱包余额。
- 屏幕抓取、代币化 API 访问和基于合约的 API 使用不可互换。
- 客户同意和身份验证是操作控制，而不仅仅是入职屏幕。
- 银行 API 中断可能会导致下游支付、会计、工资或对账失败。
- 电子支付代理路线与电子支付工具/稳定币路线分开。

## 研究清单

1。确定法人实体、服务名称和银行合作伙伴。
2。检查 FSA 电子支付机构注册表。
3。检查该服务是否仅提供信息、具有指令功能或两者兼而有之。
4。检查价值是否被存储、汇出、预付或仅指示。
5。检查公共 API/银行合作伙伴披露信息以及任何用户保护通知。
6。将公司页面链接到 [[financial-licenses/INDEX|legal / financial licenses]] 以及相关的付款或银行路线。

## 相关

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[banking/baas-japan-landscape]]
- [[banking/mercari-bank-license-stack]]
- [[financial-licenses/INDEX]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[payment-firms/money-forward]]
- [[payment-firms/freee]]
- [[INDEX|FinWiki index]]

## 来源

- FSA：许可/注册机构门户。
- FSA：电子支付机构运营商注册机构。
- FSA：授权电子支付机构协会名单。
- 日本银行家协会：API 合同文件模型。
- FAPI协会：官方链接集合。

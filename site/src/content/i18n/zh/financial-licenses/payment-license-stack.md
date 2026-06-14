---
source: financial-licenses/payment-license-stack
source_hash: 06a5abe22155e7d2
lang: zh
status: machine
fidelity: ok
title: "日本支付牌照组合"
translated_at: 2026-05-31T23:05:42.100Z
---
# 日本支付牌照组合

## Overview

日本的支付产品可能同时组合多个公开监管类别：资金转移、预付式支付工具、电子支付代理、电子支付手段、电子支付处理、信用 / 分期销售、卡收单以及银行账户直接支付。因此，一个钱包、结账产品、二维码支付服务或与稳定币相关的服务，可能同时拥有不止一条法律路线。

本页属于 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]，并链接到 [[payments/INDEX|payments domain]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]]、[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]]、[[payments/credit-purchase-card-operators-japan-index|credit / card registry]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]、[[fintech/japan-ecisb-license|Japan ECISB license]] 和 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]。

## License Stack Matrix

| 功能 | 主要公开类别 | 主要法律 / 路线 | 批准 / 登记 | FinWiki route |
|---|---|---|---|---|
| 非银行汇款 / 钱包转账 | `資金移動業者` | Payment Services Act | 登记 | [[payments/funds-transfer-service-providers-japan-index]] |
| 可用于第三方支付的储值 | 第三方型预付式支付工具发行人 | Payment Services Act | 事前登记 | [[payments/prepaid-payment-instrument-issuers-japan-index]] |
| 自家使用型储值 | 自家型预付式支付工具发行人 | Payment Services Act | 达到阈值条件后备案 | [[payments/funds-transfer-vs-prepaid-boundary]] |
| 银行账户信息 / 支付指令 | `電子決済等代行業者` | Banking Act route | 登记 | [[payments/japan-bank-api-payment-agency-route]] |
| 稳定币 / EPI 销售、交换、中介、保管类处理 | `電子決済手段等取引業者` | Payment Services Act | 登记 | [[fintech/japan-ecisb-license]] |
| 受银行委托的电子存款债权处理 | `電子決済等取扱業` | Banking Act route | 登记 | [[financial-licenses/bank-license-and-baas-boundary]] |
| 信用卡 / 分期 / BNPL | Installment Sales Act / credit-purchase route | METI route | 适用时登记 | [[payments/credit-purchase-card-operators-japan-index]], [[payments/japan-bnpl-credit-purchase-boundary]] |
| 商户 PSP / 收单 | 商户签约 / PSP / 卡收单路线 | Installment Sales Act、卡组织规则、服务条款 | 取决于角色 | [[payments/card-acquiring-japan-stack]], [[payments/psp-merchant-settlement-risk]] |
| 银行账户直接支付 | Bank Pay / J-Debit / Cotra / 银行直接扣款路线 | 网络 / 方案 / 银行账户路线 | 参与者和方案路线 | [[payments/account-to-account-payment-japan]] |

## Funds Transfer Route

资金转移路线是 Payment Services Act 下针对非银行汇款的登记类别。FSA 资料将现行结构识别为三种类型：

| 类型 | FSA 资料中的公开描述 | 边界字段 |
|---|---|---|
| Type I | 面向超过 JPY 1 million 转账需求的路线 | 较高金额资金转移类别。 |
| Type II | 传统核心资金转移类别 | 主要的非银行汇款 / 钱包转账类别。 |
| Type III | 低金额转账路线 | 小额转账类别。 |

公开核验通常使用 FSA 资金转移页面、FSA 资金转移名单、实体条款和登记编号。除非产品条款和法律实体明确显示持牌银行存款路线，否则余额不记录为银行存款。

## Prepaid Payment Instrument Route

预付式路线是 Payment Services Act 下的储值路线。主要公开划分为自家型和第三方型预付式支付工具。

| 类别 | 公开字段 | 公开核验 |
|---|---|---|
| Self-use prepaid instrument | 发行人及可用商户 / 服务范围与发行人自有集团或自有服务路线相连。 | FSA prepaid Q&A、发行人披露、条款。 |
| Third-party prepaid instrument | 储值可在工具路线下用于第三方商户或服务。 | FSA 第三方预付式发行人名单和服务条款。 |
| Self-use threshold field | FSA Q&A 表示，自家型发行人在基准日未使用余额超过 JPY 10 million 后负有备案义务。 | FSA FinTech Support Desk Q&A 和发行人记录。 |
| Third-party approval field | 第三方型预付式发行人路线采用事前登记。 | FSA 第三方预付式发行人名单。 |

预付式路线是商户支付 / 储值路线。除非同时存在资金转移等其他路线，否则它不同于一般汇款。

## Electronic Payment Instrument Route

Payment Services Act 侧使用 `電子決済手段等取引業者` 表示电子支付手段等交易业务。FSA 的公开 EPI 资料把该路线与稳定币 / 电子支付工具的销售、购买、交换、中介和保管类处理相连接。

Banking Act 侧使用 `電子決済等取扱業` 表示受银行委托的电子存款债权处理。该路线单独记录在 [[financial-licenses/bank-license-and-baas-boundary|Japan bank license and BaaS boundary]]，因为公开法律类别不同于 Payment Services Act 下的 EPI 交易路线。

## Product-Layer Examples

| 产品表层 | 可能的法律组件 |
|---|---|
| QR wallet | 资金转移登记、预付式发行人登记、商户 PSP / 收单、银行 API、信用卡联动。 |
| Travel wallet | 资金转移、预付式、外汇 / 汇款条款、卡组织、已披露时的银行代理。 |
| BNPL checkout | 分期销售 / 信用购买路线、商户签约、PSP 清算、信用筛选。 |
| Bank-account payment | 银行账户、银行 API / 电子支付代理、账户直连商户接入、退款 / 取消控制。 |
| Stablecoin payment | EPI 交易路线、电子支付处理路线、发行人 / 信托 / 银行分类、适用时的钱包或交易所登记。 |
| BaaS deposit wallet | 持牌银行、合作方 UI、已披露时的银行代理或电子支付代理路线。 |

## Public Record Fields

| 字段 | 来源路线 |
|---|---|
| Operator legal name | FSA / METI 登记和公司披露。 |
| Registration category | 资金转移、预付式、电子支付代理、EPI、信用 / 卡、银行代理或电子支付处理。 |
| Registration number | 可用时的登记名单行。 |
| Funds-transfer type | FSA 名单 / 资料披露的 Type I、Type II 或 Type III。 |
| Prepaid classification | 自家型或第三方型预付式支付工具。 |
| FSA list as-of date | FSA 经营者名单行或登记文件。 |
| Service scope | 产品条款、官方服务页和监管名单。 |
| Balance type | 存款、预付余额、资金转移余额、信用应收款、电子支付工具或银行存款债权。 |
| Merchant route | Acquirer、PSP、payment facilitator、Bank Pay / J-Debit route 或 scheme route。 |
| User protection / segregation | 监管指引、条款和披露文件。 |

## JapanFG Operator Links

- Wallet / funds transfer: [[payment-firms/paypay]], [[payment-firms/merpay]], [[payment-firms/au-payment]], [[payment-firms/rakuten-edy]], [[payment-firms/recruit-mufg-business]], [[payment-firms/jal-payment-port]], [[payment-firms/sbi-remit]].
- Merchant PSP / acquiring: [[payment-firms/gmo-payment-gateway]], [[payment-firms/gmo-epsilon]], [[payment-firms/sb-payment-service]], [[payment-firms/dg-financial-technology]], [[payment-firms/netstars]].
- Credit / card / installment: [[card-issuers/smbc-card]], [[card-issuers/mufg-nicos]], [[card-issuers/rakuten-card]], [[card-issuers/paypay-card]], [[card-issuers/orico]], [[card-issuers/jaccs]], [[payment-firms/paidy]].
- Stablecoin / EPI adjacency: [[payment-firms/jpyc]], [[payment-firms/progmat]], [[exchanges/jp-exchange-sbi-vc-trade]], [[fintech/jp-stablecoin-progmat]].

## Related

- [[financial-licenses/INDEX]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/account-to-account-payment-japan]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/japan-ecisb-license]]
- [[INDEX|FinWiki index]]

## Sources

- e-Gov: Payment Services Act.
- FSA: licensed / registered operator lists.
- FSA: funds-transfer service provider page and registry.
- FSA: prepaid payment instruments policy pages and issuer registry.
- FSA: FinTech Support Desk Q&A.
- FSA: 2020  Payment Services Act reform explanation.
- FSA: crypto-asset / electronic payment instrument policy pages.
- FSA: electronic payment instruments transaction business page.
- FSA: electronic payment handling business page.
- METI: Installment Sales Act registered operator lists.

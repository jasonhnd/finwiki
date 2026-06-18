---
source: financial-licenses/payment-license-stack
source_hash: c0c768134f7f2966
lang: zh
status: machine
fidelity: ok
title: "日本支付牌照堆叠"
translated_at: 2026-06-18T23:59:13.126Z
---

# 日本支付牌照堆叠

## 概述

日本的支付产品可以组合多个公开监管类别：资金移动（汇款）、预付支付工具、电子支付代理、电子支付工具、电子支付处理、信用 / 分期销售、收单（card acquiring）以及银行账户直接付款。因此，一个钱包、结账产品、码付服务或与稳定币挂钩的服务，可能同时具有不止一条法律路径。

本页归属于 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]，并链接至 [[payments/INDEX|payments domain]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]]、[[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]]、[[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]]、[[payments/credit-purchase-card-operators-japan-index|credit / card registry]]、[[payments/japan-bank-api-payment-agency-route|bank API route]]、[[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]、[[fintech/japan-ecisb-license|Japan ECISB license]] 与 [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]。

## 牌照堆叠矩阵

| 功能 | 主要公开类别 | 主要法律 / 路径 | 批准 / 登记 | FinWiki 路径 |
|---|---|---|---|---|
| 非银行汇款 / 钱包转账 | `資金移動業者` | 资金结算法 | 登记 | [[payments/funds-transfer-service-providers-japan-index]] |
| 面向第三方支付的储值 | 第三方型预付支付工具发行人 | 资金结算法 | 事前登记 | [[payments/prepaid-payment-instrument-issuers-japan-index]] |
| 自用型储值 | 自用型预付支付工具发行人 | 资金结算法 | 达到门槛条件后申报 | [[payments/funds-transfer-vs-prepaid-boundary]] |
| 银行账户信息 / 付款指示 | `電子決済等代行業者` | 银行法路径 | 登记 | [[payments/japan-bank-api-payment-agency-route]] |
| 稳定币 / EPI 的销售、兑换、中介、类托管处理 | `電子決済手段等取引業者` | 资金结算法 | 登记 | [[fintech/japan-ecisb-license]] |
| 受银行委托的电子存款债权处理 | `電子決済等取扱業` | 银行法路径 | 登记 | [[financial-licenses/bank-license-and-baas-boundary]] |
| 信用卡 / 分期 / BNPL | 分期付款销售法 / 信用购买路径 | METI 路径 | 适用时登记 | [[payments/credit-purchase-card-operators-japan-index]]、[[payments/japan-bnpl-credit-purchase-boundary]] |
| 商户 PSP / 收单 | 商户签约 / PSP / 收单路径 | 分期付款销售法、卡组织规则、服务条款 | 视角色而定 | [[payments/card-acquiring-japan-stack]]、[[payments/psp-merchant-settlement-risk]] |
| 银行账户直接付款 | Bank Pay / J-Debit / Cotra / 银行直接借记路径 | 网络 / 卡组织 / 银行账户路径 | 参与方与卡组织路径 | [[payments/account-to-account-payment-japan]] |

## 资金移动路径

资金移动路径是资金结算法下面向非银行汇款的登记类别。FSA 资料标明了当前的三类结构：

| 类型 | FSA 资料中的公开描述 | 边界字段 |
|---|---|---|
| 第一类 | 面向超过 1 百万日元转账需求的路径 | 较高金额资金移动类别。 |
| 第二类 | 传统核心资金移动类别 | 主要的非银行汇款 / 钱包转账类别。 |
| 第三类 | 较低金额转账路径 | 低额转账类别。 |

公开核验使用 FSA 资金移动页面、FSA 资金移动名单、主体条款及登记编号。除非产品条款与法律主体标明了持牌银行存款路径，否则余额不被记录为银行存款。

## 预付支付工具路径

预付路径是资金结算法下面向储值的路径。主要的公开划分在于自用型与第三方型预付支付工具之间。

| 类别 | 公开字段 | 公开核验 |
|---|---|---|
| 自用型预付工具 | 发行人与适用商户 / 服务范围与发行人自身集团或自有服务路径相关联。 | FSA 预付 Q&A、发行人披露、条款。 |
| 第三方型预付工具 | 在该工具路径下，储值可用于第三方商户或服务。 | FSA 第三方型预付发行人名单与服务条款。 |
| 自用门槛字段 | FSA Q&A 指出，自用型发行人在基准日未使用余额超过 10 百万日元后即负有申报义务。 | FSA FinTech 支援窗口 Q&A 与发行人记录。 |
| 第三方批准字段 | 第三方型预付发行人路径采用事前登记。 | FSA 第三方型预付发行人名单。 |

预付路径是一条商户支付 / 储值路径。除非另有诸如资金移动等路径同时存在，否则它与一般汇款相互独立。

## 电子支付工具路径

资金结算法一侧将 `電子決済手段等取引業者` 用于电子支付工具交易业务。FSA 公开的 EPI 资料将该路径与稳定币 / 电子支付工具的销售、购买、兑换、中介及类托管处理相连接。

银行法一侧将 `電子決済等取扱業` 用于受银行委托的存款债权电子处理。该路径在 [[financial-licenses/bank-license-and-baas-boundary|Japan bank license and BaaS boundary]] 中单独记录，因为其公开法律类别与资金结算法 EPI 交易路径并不相同。

## 产品层示例

| 产品形态 | 可能的法律构件 |
|---|---|
| 二维码钱包 | 资金移动登记、预付发行人登记、商户 PSP / 收单、银行 API、信用卡联动。 |
| 旅行钱包 | 资金移动、预付、外汇 / 汇款条款、卡组织、披露时的银行代理。 |
| BNPL 结账 | 分期销售 / 信用购买路径、商户签约、PSP 结算、信用审核。 |
| 银行账户付款 | 银行账户、银行 API / 电子支付代理、账户直连商户接入、退款 / 取消控制。 |
| 稳定币支付 | EPI 交易路径、电子支付处理路径、发行人 / 信托 / 银行分类、适用时的钱包或交易所登记。 |
| BaaS 存款钱包 | 持牌银行、合作方 UI、披露时的银行代理或电子支付代理路径。 |

## 公开记录字段

| 字段 | 来源路径 |
|---|---|
| 经营者法定名称 | FSA / METI 登记簿与公司披露。 |
| 登记类别 | 资金移动、预付、电子支付代理、EPI、信用 / 卡、银行代理，或电子支付处理。 |
| 登记编号 | 可获取时的登记簿行。 |
| 资金移动类型 | FSA 名单 / 资料披露时的第一类、第二类或第三类。 |
| 预付分类 | 自用型或第三方型预付支付工具。 |
| FSA 名单截至日期 | FSA 经营者名单行或登记簿文件。 |
| 服务范围 | 产品条款、官方服务页面与监管名单。 |
| 余额类型 | 存款、预付余额、资金移动余额、信用应收款、电子支付工具，或银行存款债权。 |
| 商户路径 | 收单方、PSP、支付服务商、Bank Pay / J-Debit 路径，或卡组织路径。 |
| 用户保护 / 隔离 | 监管指引、条款与披露文件。 |

## JapanFG 经营者链接

- 钱包 / 资金移动：[[payment-firms/paypay]]、[[payment-firms/merpay]]、[[payment-firms/au-payment]]、[[payment-firms/rakuten-edy]]、[[payment-firms/recruit-mufg-business]]、[[payment-firms/jal-payment-port]]、[[payment-firms/sbi-remit]]。
- 商户 PSP / 收单：[[payment-firms/gmo-payment-gateway]]、[[payment-firms/gmo-epsilon]]、[[payment-firms/sb-payment-service]]、[[payment-firms/dg-financial-technology]]、[[payment-firms/netstars]]。
- 信用 / 卡 / 分期：[[card-issuers/smbc-card]]、[[card-issuers/mufg-nicos]]、[[card-issuers/rakuten-card]]、[[card-issuers/paypay-card]]、[[card-issuers/orico]]、[[card-issuers/jaccs]]、[[payment-firms/paidy]]。
- 稳定币 / EPI 相邻：[[payment-firms/jpyc]]、[[payment-firms/progmat]]、[[exchanges/jp-exchange-sbi-vc-trade]]、[[fintech/jp-stablecoin-progmat]]。

## 相关

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

## 来源

- e-Gov：资金结算法。
- FSA：持牌 / 已登记经营者名单。
- FSA：资金移动业者页面与登记簿。
- FSA：预付支付工具政策页面与发行人登记簿。
- FSA：FinTech 支援窗口 Q&A。
- FSA：2020 资金结算法修订说明。
- FSA：加密资产 / 电子支付工具政策页面。
- FSA：电子支付工具交易业务页面。
- FSA：电子支付处理业务页面。
- METI：分期付款销售法已登记经营者名单。

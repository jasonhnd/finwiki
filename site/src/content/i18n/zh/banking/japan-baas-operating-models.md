---
source: banking/japan-baas-operating-models
source_hash: ce3a3f7251fa53ce
lang: zh
status: machine
fidelity: ok
title: "日本 BaaS 运营模式"
translated_at: 2026-05-30T18:10:53.988Z
---

# 日本 BaaS 运营模式

## Overview

日本的 BaaS 可以从客户归属、存款合约持有方、UI 控制方、API 提供方、KYC / 反洗钱 / 欺诈监测责任,以及牌照堆栈等维度来描述。一款合作伙伴品牌的应用可以呈现银行业务的 UX,而银行账户在法律上仍归属于持牌银行。

本页面位于 [[banking/INDEX|banking domain]] 之下,作为 [[banking/baas-japan-landscape|Japan BaaS landscape]] 的运营模式配套。它链接至 [[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]、[[banking/quick-deposit-four-methods|quick deposit four methods]]、[[JapanFG/ssnb|SSNB]]、[[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]]、[[JapanFG/ui-bank|UI Bank]]、[[banking/japan-net-bank-competition-map|Japan net bank competition map]] 及 [[banking/regional-bank-api-digital-partnership-route|regional bank API route]]。

## Operating-Model Matrix

| Model | Customer-facing surface | Deposit contract | Typical example | Main analytical issue |
|---|---|---|---|---|
| API-provided banking | Partner app embeds transfers, balance, payment, or account-linking | Licensed bank | [[banking/minna-bank-baas-model|Minna Bank API]], quick-deposit routes | API consent, electronic payment agency, AML / fraud split. |
| Partner branch | Bank app or bank account experience carries partner brand / branch | Licensed bank | Minna Bank partner branches | Partner marketing versus bank legal responsibility. |
| Full-banking white-label / NEOBANK | Partner brand distributes a fuller bank-account proposition | Licensed bank | [[JapanFG/ssnb|SSNB]] NEOBANK | Who owns customer relationship, account economics, and support. |
| Corporate API bank | Business account and payment workflows are embedded into SaaS / accounting / platform ops | Licensed bank | [[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]] | API reliability, treasury operations, SME KYC, webhook / integration risk. |
| Bank-agent route | Non-bank or adjacent bank partner introduces / handles banking service under bank-agent structure | Licensed bank | [[JapanFG/ui-bank|UI Bank]] / CQ BANK-style route | Agency authority and customer explanation boundary. |
| Narrow BaaS | One banking function, such as quick deposit or direct account charge | Licensed bank plus payment / API layer | [[banking/quick-deposit-four-methods|quick deposit]] | Narrow utility can be valuable without full bank relationship. |

## Legal Stack Versus UX Stack

在日本,法律堆栈与 UX 堆栈常常分歧:

- 客户可能通过合作伙伴品牌开户,但存款债务由银行承担。
- 合作伙伴可能控制应用的旅程,但 KYC、反洗钱、可疑交易监测及账户管控仍是银行级别的义务。
- 账户信息与支付指令 API 可能触及电子支付代理路径。
- 钱包余额、预付余额或资金转移余额与银行存款不同。
- 证券 / 加密 / 支付应用可以嵌入银行转账而不成为银行。

相关的法律与支付路径包括 [[payments/japan-bank-api-payment-agency-route|bank API payment agency route]]、[[payments/account-to-account-payment-japan|account-to-account payment Japan]] 及 [[fintech/japan-financial-regulation|Japan financial regulation]]。

## Case Set

### Minna Bank

[[banking/minna-bank-baas-model|Minna Bank]] 公开地将 API 提供型银行业务与合作伙伴支行模式区分开来。公开的合作伙伴类别包括零售、创意交易市场、证券、保险、外汇、娱乐及 C2C 平台。

### SSNB NEOBANK

[[JapanFG/ssnb|SSNB]] NEOBANK 是一种全功能银行 BaaS 模式。它提供合作伙伴品牌的银行账户体验,并可连接存款、转账、贷款、卡片及证券毗邻功能。

### GMO Aozora

[[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]] 是法人 API / 中小企业运营模式。其 BaaS 价值在于开户、转账、支付运营、会计集成、API / webhook 工作流及初创 / 平台资金管理。

### UI Bank / CQ BANK

[[JapanFG/ui-bank|UI Bank]] 是银行代理 / 区域集团数字银行的案例。它使用应用与合作伙伴渠道创建数字账户界面,而吸收存款仍是银行职能。

## Responsibility Boundary

| Responsibility | Usually sits with | Notes |
|---|---|---|
| Deposit liability | Licensed bank | Partner brand and deposit obligor can be separate. |
| UI / user acquisition | Partner, bank, or both | Determines CAC and data access. |
| KYC / AML | Bank, sometimes with partner support | Outsourcing support does not remove bank responsibility. |
| Fraud / incident response | Bank plus partner ops | API incidents require coordinated response. |
| Customer support | Bank, partner, or split | Important for complaints and operational risk. |
| Data use / consent | Bank and partner under relevant privacy / API terms | Critical for embedded-finance monetization. |
| Economic upside | Bank, partner, or revenue share | Depends on deposits, lending, fees, and cross-sell. |

## Public Data Fields

1. 合作伙伴客户细分与账户活动。
2. 存款、贷款、支付、证券、保险及账户数。
3. API / 运营风险披露及服务水平信息。
4. 受监管银行识别与客户保护路径。
5. 在公开披露的情况下,银行代理、电子支付代理、资金转移、预付、证券或保险分销类别。

## Related

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[banking/japan-net-bank-competition-map]]
- [[JapanFG/ssnb]]
- [[JapanFG/gmo-aozora-net]]
- [[JapanFG/ui-bank]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[INDEX|FinWiki index]]

## Sources

- Minna Bank: BaaS and alliance-service pages.
- SSNB: NEOBANK BaaS pages.
- GMO Aozora Net Bank: company and API specification pages.
- UI Bank / CQ BANK public pages.
- FSA: electronic payment agency system and registry.
- Japanese Bankers Association: Open API council materials.

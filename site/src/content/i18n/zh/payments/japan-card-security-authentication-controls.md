---
source: payments/japan-card-security-authentication-controls
source_hash: 726a81f3eecdaee7
lang: zh
status: machine
fidelity: ok
title: "Japan card security and authentication controls"
translated_at: 2026-06-19T06:09:18.110Z
---

# Japan card security and authentication controls

## Overview

日本的电商卡片安全不仅仅是「3-D Secure」。有用的控制栈为：卡数据保护 → 商户漏洞控制 → EMV 3-D Secure 认证 → 欺诈监测 → 收单方／PSP／商户信息共享 → 拒付与补救。

本页请与 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]、[[payments/card-acquiring-japan-stack|card acquiring stack]]、[[payments/psp-merchant-settlement-risk|PSP settlement risk]]、[[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]] 和 [[card-issuers/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]] 一同使用。

## Guideline Snapshot

| Version / route | Public-source role | Wiki reading |
|---|---|---|
| METI 2025-03-05 release | 公布信用卡安全指南的修订。 | 电商商户安全强化的公共政策锚点。 |
| Japan Credit Association guideline 6.1 | 卡片安全控制方面现行的主要公开指南来源。 | 用于非留存、电商安全、EMV 3-D Secure 及欺诈控制术语。 |
| PCI DSS | 国际卡数据安全标准。 | 用于持卡人数据环境及商户／PSP 安全控制。 |
| EMV 3-D Secure | 认证协议／消息标准。 | 用于基于风险的认证与挑战流程分析。 |
| JCB merchant / brand pages | 发卡方、收单方、品牌、商户及认证各角色的通俗模型。 | 用于厘清将所有当事方笼统归为「卡公司」的做法。 |

## Actor And Responsibility Map

| Actor | Japanese / market term | Core responsibility | Security artifact |
|---|---|---|---|
| Issuer | イシュア / カード発行会社 | 持卡人审核、授权、ACS／认证决策、计费、欺诈监测。 | 授权日志、ACS 结果、持卡人争议／欺诈监测。 |
| Card brand / network | 国際ブランド / ブランド | 网络规则、目录路由、品牌安全规则、互操作性。 | 方案规则、目录服务器路由、品牌合规。 |
| Acquirer | アクワイアラ / 加盟店契約会社 | 商户承做审核、商户合同、结算、拒付路由。 | 商户尽职调查、安全状态、拒付监测。 |
| PSP / gateway | 決済代行 / PSP | 支付页面、令牌化、3DS Server 集成、交易数据、对账。 | 令牌化设计、3DS 交易日志、欺诈过滤器。 |
| Merchant | EC 加盟店 | 站点安全、客户认证 UX、发货／退款控制、证据留存。 | 漏洞控制、订单日志、配送／退款证据。 |
| 3DS Server / DS / ACS | 3-D Secure components | 数据传输、目录路由、发卡方认证、挑战／无摩擦流程。 | AReq / ARes / 挑战结果、ECI / CAVV 风格的认证数据。 |

## Control Stack

| Layer | Threat | Control objective | Primary owner | Secondary owner |
|---|---|---|---|---|
| Card-data protection | 持卡人数据泄露。 | 尽可能避免存储卡数据；将 PCI 范围控制住。 | Merchant / PSP | Acquirer |
| Tokenization / non-retention | 原始卡数据暴露。 | 用令牌／重定向／JavaScript 令牌模型替代卡数据处理。 | PSP | Merchant |
| Merchant vulnerability control | 电商站点被攻陷、表单劫持、账户接管。 | 保持电商站点、插件、管理员账户及支付页面加固。 | Merchant | PSP / EC system provider |
| EMV 3-D Secure | 未授权的无卡使用。 | 增加基于风险的发卡方认证与挑战流程。 | Issuer / ACS | Merchant / PSP / brand |
| Fraud monitoring | 信用卡撞库／BIN 攻击、异常订单模式、转运欺诈。 | 检测并阻止可疑交易与配送。 | Issuer / acquirer / PSP | Merchant |
| Chargeback / dispute | 损失分配与证据不足。 | 保全订单、认证、配送、退款及沟通证据。 | Acquirer / merchant | Issuer / PSP |

## EMV 3-D Secure Route

| Step | Component | Research question |
|---|---|---|
| Checkout | Merchant / PSP | 交易数据是否完整到足以进行基于风险的认证？ |
| 3DS request | 3DS Server | PSP 或商户是否正确集成了 3DS Server？ |
| Directory routing | Directory Server | 哪个品牌／卡路由接收认证请求？ |
| Issuer decision | ACS / issuer | 流程是无摩擦、被挑战、被拒绝，还是不可用？ |
| Authorization | Issuer / acquirer | 认证结果与授权结果如何结合？ |
| Dispute / liability | Issuer / acquirer / merchant | 认证结果是真的改变了责任，还是仅仅增加了证据？ |

3-D Secure 降低无卡欺诈风险，但它并不能替代商户审核、卡数据保护、账户接管控制、配送控制或拒付证据。这正是本页与 [[payments/psp-merchant-settlement-risk|PSP settlement risk]] 链接、而非仅作为协议说明的原因。

## Non-retention, Tokenization, And PCI DSS

| Integration pattern | Card-data exposure | Wiki reading |
|---|---|---|
| Redirect payment page | 商户重定向至 PSP／收单方托管页面。 | 若实现正确，商户的卡数据暴露较低。 |
| JavaScript token model | 卡数据从浏览器发送至 PSP／令牌化端点。 | 由于页面被攻陷可改变脚本，商户仍需站点安全控制。 |
| Server-side card handling | 商户服务器接收卡数据。 | PCI 及运营负担最高；在描述为合规前需要强有力的证据。 |
| Stored credential / recurring billing | 在后续支付中使用令牌或在档凭证。 | 需要同意、生命周期、取消及欺诈监测控制。 |

## EC Merchant Fraud Controls

| Pattern | Control |
|---|---|
| Credit master / BIN attack | 速率限制、授权模式监测、发卡方／收单方告警、支付页面控制。 |
| Account takeover | 登录保护、设备／行为监测、升级认证、密码重置监测。 |
| High-risk delivery | 地址／配送变更监测、配送暂缓、人工审查、取消／退款控制。 |
| Refund abuse | 退款审批工作流、结算对账、商户仪表板权限控制。 |
| Site compromise | 漏洞扫描、打补丁、脚本完整性检查、管理员 MFA、事件响应。 |

## JapanFG Relevance

卡片安全分析经由发卡方／收单方／PSP 角色路由，而非经由单一的「信用卡公司」标签：

- Issuers / acquirers: [[card-issuers/jcb|JCB]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]]。
- PSP / gateway: [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DGFT]]、[[payment-firms/netstars|Netstars]]。
- Legal / registry layer: [[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]] 及 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]。

## Red Flags For Wiki Research

1. 某来源说「卡公司」，但未说明其指发卡方、收单方、品牌、处理方还是 PSP。
2. 商户声称支持 3-D Secure，但没有漏洞控制、令牌化或欺诈运营的证据。
3. PSP 声称已令牌化，但商户页面仍可能通过被攻陷的脚本暴露卡数据。
4. 引用了某欺诈指标却无分母：交易金额、订单数、批准率、挑战率、拒付率或欺诈金额。
5. 将责任转移声明当作完整的损失保证看待。

## Related

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-bank-api-incident-and-fraud-control]]
- [[card-issuers/installment-sales-act-2020-amendment]]
- [[card-issuers/jcb]]
- [[INDEX|FinWiki index]]

## Sources

- METI: 信用卡安全指南修订的公布及信用交易政策页面。
- Japan Credit Association: 信用卡安全指南 6.1 及文档索引。
- JCB: 面向商户的 EMV 3-D Secure 通知及品牌／卡支付当事方说明。
- PCI Security Standards Council: PCI DSS 概要及日语文档库。
- EMVCo: EMV 3-D Secure 公开标准概要。
- Payments Japan 及 FSA / PPC / METI 的公开安全咨询资料。

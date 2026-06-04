---
source: payments/japan-card-security-authentication-controls
source_hash: ddc68a139781a901
lang: zh
status: machine
fidelity: ok
title: "日本卡安全和身份验证控制"
translated_at: 2026-06-01T03:31:12.259Z
---
# 日本卡安全和身份验证控制

## 概述

日本EC卡的安全性不仅仅是“3-D Secure”。有用的控制堆栈是：卡数据保护 -> 商户漏洞控制 -> EMV 3-D 安全身份验证 -> 欺诈监控 -> 收单机构/PSP/商户信息共享 -> 退款和补救。

此页面与 [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]、[[payments/card-acquiring-japan-stack|card acquiring stack]]、[[payments/psp-merchant-settlement-risk|PSP settlement risk]]、[[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]] 和 [[card-issuers/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]] 一起使用。

## 指南快照

|版本/路线 |公共源角色 |维基阅读|
|---|---|---|
| METI 2025-03-05 发布 |宣布修订信用卡安全指南。 |加强欧共体商家安全的​​公共政策支柱。 |
|日本信用协会指南6.1 |当前卡安全控制的主要公共指南来源。 |用于非保留、EC 安全、EMV 3-D 安全和欺诈控制词汇。 |
| PCI DSS |国际卡数据安全标准。 |用于持卡人数据环境和商家/PSP 安全控制。 |
| EMV 3-D 安全 |身份验证协议/消息传递标准。 |用于基于风险的身份验证和质询流分析。 |
| JCB商家/品牌页面|发行者、收单者、品牌、商家和认证角色的简单语言模型。 |用于将各方分开扁平化为“卡公司”。 |

## 参与者和责任图

|演员 |日语/市场术语 |核心责任|安全神器|
|---|---|---|---|
|发行人 |发行人 |持卡人筛选、授权、ACS/身份验证决策、计费、欺诈监控。 |授权日志、ACS 结果、持卡人争议/欺诈监控。 |
|卡品牌/网络|国际品牌/品牌|网络规则、目录路由、品牌安全规则、互操作性。 |方案规则、目录服务器路由、品牌合规性。 |
|收单机构 |商户承销、商户合同、结算、退款路由。 |商户尽职调查、安全状态、退款监控。 |
| PSP/网关|支付代理/PSP |支付页面、代币化、3DS 服务器集成、交易数据、对账。 |代币化设计、3DS 交易日志、欺诈过滤器。 |
|商家| EC商户|站点安全、客户身份验证用户体验、运输/退款控制、证据保留。 |漏洞控制、订单日志、交付/退款证据。 |
| 3DS 服务器/DS/ACS | 3-D 安全组件|数据传输、目录路由、发行者身份验证、质询/无摩擦流程。 | AReq / ARes / 质询结果，ECI / CAVV 风格的认证数据。 |

## 控制堆栈

|层|威胁|控制目标|主要业主 |次要业主|
|---|---|---|---|---|
|卡数据保护 |持卡人数据泄露。 |尽可能避免存储卡数据；控制 PCI 范围。 |商家/PSP |收单机构 |
|标记化/非保留 |原始卡数据曝光。 |用令牌/重定向/JavaScript 令牌模型替换卡数据处理。 |掌上游戏机|商家|
|商户漏洞管控 | EC 站点泄露、劫持、帐户接管。 |保持 EC 站点、插件、管理员帐户和支付页面的安全性。 |商家| PSP/EC系统提供商|
| EMV 3-D 安全 |未经授权的无卡使用。 |添加基于风险的发行者身份验证和质询流程。 |发行人/ACS |商家/PSP/品牌|
|欺诈监控 |信用大师/BIN攻击、异常订单模式、转发欺诈。 |检测并阻止可疑交易和交付。 |发行人/收单人/PSP |商家|
|退款/争议 |损失分配和证据失效。 |保存订单、身份验证、交付、退款和通信证据。 |收单方/商户|发行人/PSP |

## EMV 3-D 安全路由

|步骤|组件|研究问题|
|---|---|---|
|结帐 |商家/PSP |交易数据是否足够完整以进行基于风险的身份验证？ |
| 3DS 请求 | 3DS 服务器 | PSP或商家是否正确集成3DS服务器？ |
|目录路由|目录服务器|哪个品牌/卡路由收到认证请求？ |
|发行人决定 | ACS/发行人|流程是否无摩擦、有挑战、下降或不可用？ |
|授权|发行人/收单人 |认证结果和授权结果如何合并？ |
|争议/责任 |发行人/收单机构/商户|鉴定结果实际上改变了责任还是只是增加了证据？ |

3-D Secure 降低了无卡欺诈风险，但它不能取代商户筛选、卡数据保护、帐户接管控制、交付控制或退款证据。这就是为什么此页面与 [[payments/psp-merchant-settlement-risk|PSP settlement risk]] 链接，而不是仅作为协议注释。

## 非保留、标记化和 PCI DSS

|整合模式|卡数据暴露 |维基阅读|
|---|---|---|
|重定向支付页面 |商户重定向至 PSP/收单机构托管页面。 |如果实施正确，可以降低商户卡数据的暴露程度。 |
| JavaScript 代币模型 |卡数据从浏览器发送到 PSP/标记化端点。 |商家仍然需要站点安全控制，因为页面泄露可能会改变脚本。 |
|服务器端卡处理|商户服务器接收卡数据。 | PCI 和运营负担最高；在描述为合规之前需要强有力的证据。 |
|存储凭证/定期计费|用于以后付款的令牌或存档凭证。 |需要同意、生命周期、取消和欺诈监控控制。 |

## EC 商家欺诈控制

|图案|控制|
|---|---|
| Credit master / BIN attack |速率限制、授权模式监控、发行方/收单方警报、支付页面控制。 |
|帐户接管 |登录保护、设备/行为监控、升级身份验证、密码重置监控。 |
|高风险交付|地址/运输变更监控、交货保留、人工审核、取消/退款控制。 |
|滥用退款 |退款审批流程、结算对账、商户仪表板权限控制。 |
|网站妥协 |漏洞扫描、修补、脚本完整性检查、管理 MFA、事件响应。 |

## JapanFG 相关性

卡安全分析通过发卡机构/收单机构/PSP 角色进行，而不是通过单个“信用卡公司”标签：

- 发行人/收单机构：[[card-issuers/jcb|JCB]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]]。
- PSP/网关：[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DGFT]]、[[payment-firms/netstars|Netstars]]。
- 法律/注册层：[[payments/credit-purchase-card-operators-japan-index|credit / card operator registry]] 和 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]。

## Red Flags For Wiki Research

1。消息人士称“卡公司”，但没有说明它是否指发卡机构、收单机构、品牌、处理机构或 PSP。
2。商家声称支持 3-D 安全，但没有漏洞控制、标记化或欺诈操作的证据。
3。 PSP 声称令牌化，但商家页面仍然可以通过受损的脚本暴露卡数据。
4。欺诈指标不带分母：交易价值、订单数、批准率、质疑率、退款率或欺诈金额。
5。责任转移声明被视为完全损失保证。

## 相关

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

## 来源

- METI：信用卡安全指南修订版和信用交易政策页面。
- 日本信用协会：信用卡安全指南 6.1  和文档索引。
- JCB：商户 EMV 3-D 安全通知和品牌/卡支付参与者说明。
- PCI 安全标准委员会：PCI DSS 概述和日语文档库。
- EMVCo：EMV 3-D 安全公共标准概述。
- 日本支付和 FSA / PPC / METI 公共安全咨询材料。

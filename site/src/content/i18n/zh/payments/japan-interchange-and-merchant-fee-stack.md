---
source: payments/japan-interchange-and-merchant-fee-stack
source_hash: 96c290f4de43a8da
lang: zh
status: machine
fidelity: ok
title: "日本 interchange 与商户手续费栈"
translated_at: 2026-06-01T03:31:12.302Z
---
# 日本 interchange 与商户手续费栈

## 概览

本页记录日本卡商户手续费和 interchange 相关披露的公开结构。范围包括卡商户手续费构成、发卡方费用 / interchange 披露、收单方经济性以及相关公共政策材料。更广泛的商户 PSP 定价、结算准备金、拒付分配和网关定价路由至[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]和[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]。

本页属于[[payments/INDEX|payments domain]]，并链接到[[payments/cashless-jp-landscape|Japan cashless payment landscape]]、[[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]]、[[payments/japan-card-security-authentication-controls|card security and authentication controls]]、[[payments/credit-purchase-card-operators-japan-index|credit / card registry]]、[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]]和[[financial-licenses/payment-license-stack|Japan payment license stack]]。

## 费用构成地图

| 构成 | 公开角色 | 链接路径 |
|---|---|---|
| 商户手续费 | 商户向收单方 / PSP / 商户签约方支付的费用 | [[payments/card-acquiring-japan-stack]] |
| 发卡方费用 / interchange | 通过卡网络规则或双边安排支付给发卡侧的经济性 | [[payments/japan-card-issuer-acquirer-processor-split]] |
| 收单方份额 | 商户签约、结算、风险、处理和网络连接经济性 | [[payments/card-acquiring-japan-stack]] |
| 标准 interchange 率 | 没有双边发卡方-收单方设定时适用的卡网络默认费率 | 卡品牌披露和 Payments Japan 路线图 |
| 品牌 / scheme 费 | 卡网络 / 品牌层 | JCB / 国际品牌披露 |
| 处理商 / 网关费 | 授权、请款、路由、对账和 API 层 | [[payments/psp-merchant-settlement-risk]] |
| 安全 / 认证成本 | EMV 3-D Secure、令牌化、PCI DSS、非保留、欺诈检测 | [[payments/japan-card-security-authentication-controls]] |
| 拒付 / 欺诈准备金 | 商户风险控制和结算准备金 | [[payments/psp-merchant-settlement-risk]] |
| 结算时点 | 入账周期、滚动准备金、退款、取消处理 | 商户合同 / PSP 条款 |

## 公开披露时间线

| 日期 / 来源 | 公开事实字段 |
|---|---|
| 2022 JFTC 报告 | JFTC 审查信用卡商户手续费、interchange 相关构成、商户规模差异和谈判模式。 |
| 2022 Payments Japan 路线图 | 路线图将 Category I 的 off-us 发卡方费用视为 interchange，并描述无双边设定时的默认 `standard rate`。 |
| 2023-06-01 METI / JFTC 发布 | METI 和 JFTC 宣布 JCB 披露信用卡商户手续费在发卡方与收单方之间的分配率。 |
| 2023 Payments Japan 路线图 | 路线图称 Mastercard、UnionPay 和 Visa 已公布日本信用卡标准 interchange 率。 |

## 公开数字字段

| 来源 | 字段 | 来源包记录值 |
|---|---|---|
| JFTC 2022 | 简单平均商户手续费率 | 2.70% |
| JFTC 2022 | 估算加权平均商户手续费率 | 1.66% |
| JFTC 2022 | 商户规模模式 | 小商户平均费率高于大商户。 |
| JFTC 2022 | 谈判模式 | 进行谈判的商户平均费率低于未谈判商户。 |
| Payments Japan 2022 | Category I 平均商户手续费 | 2.63% |
| Payments Japan 2022 | Category II 平均商户手续费 | 2.89% |
| Payments Japan 2022 | Category I 和 Category II 的发卡方费用 | 两类均为1.56%。 |

## 商户合同字段

| 字段 | 公开记录来源 |
|---|---|
| 商户签约方 | 收单方 / PSP 官方材料和商户条款。 |
| 受理品牌 | 商户申请页面、收单方 / PSP 服务页面。 |
| 商户手续费率 / 定价计划 | 已披露的公开商户定价页面。 |
| 发卡方费用 / interchange 参考 | 卡品牌披露、Payments Japan 路线图、JFTC / METI 材料。 |
| 结算周期 | PSP / 收单方商户条款。 |
| 安全要求 | 日本信用卡安全指南、PCI DSS、EMV 3-D Secure 材料。 |
| 拒付流程 | 收单方 / PSP 条款和公开品牌规则。 |
| 退款 / 取消处理 | 商户条款和 PSP 文档。 |

## 卡安全连接

商户手续费和卡安全是不同字段，但在运营上相互连接。EMV 3-D Secure、PCI DSS、令牌化、非保留、EC 商户漏洞控制、欺诈监控和拒付证据均路由至[[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]]。

卡安全路径使用日本消费者信用协会指南、PCI DSS 和 EMVCo 材料。公开商户签约页面可识别 PSP、收单方或商户承担哪些具体实施义务。

## JapanFG 运营方链接

- 主要发卡方 / 收单方：[[card-issuers/smbc-card]]、[[card-issuers/mufg-nicos]]、[[card-issuers/rakuten-card]]、[[card-issuers/paypay-card]]、[[card-issuers/aeon-financial-service]]、[[card-issuers/jcb]]。
- 商户 PSP / 网关运营方：[[payment-firms/gmo-payment-gateway]]、[[payment-firms/gmo-epsilon]]、[[payment-firms/sb-payment-service]]、[[payment-firms/dg-financial-technology]]、[[payment-firms/netstars]]。
- 信用 / 分期登记路径：[[payments/credit-purchase-card-operators-japan-index]]。

## 相关

- [[payments/INDEX]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[financial-licenses/payment-license-stack]]
- [[INDEX|FinWiki index]]

## 来源

- METI / JFTC：JCB 商户手续费分配率披露发布。
- METI：无现金支付数据页面。
- JFTC：2022 信用卡商户手续费发布和报告。
- Payments Japan：2022 和2023 路线图出版物。
- 日本消费者信用协会：信用卡安全指南。
- JCB：品牌 / 支付网络公开材料。
- PCI Security Standards Council：PCI DSS。
- EMVCo：EMV 3-D Secure。

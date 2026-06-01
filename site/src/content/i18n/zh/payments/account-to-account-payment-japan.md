---
source: payments/account-to-account-payment-japan
source_hash: 36cad5cc1aee1693
lang: zh
status: machine
fidelity: ok
title: "日本账户到账户支付路径"
translated_at: 2026-06-01T03:31:12.301Z
---
# 日本账户到账户支付路径

## 概览

日本账户到账户支付位于传统银行转账、钱包余额、银行卡收单和码支付之间。核心控制问题是：**价值是直接从存款账户移动，还是经过资金转移 / 预付余额，或经过商户收单 / 卡网络层？**

请将本页与[[payments/INDEX|支付领域]]、[[payments/funds-transfer-vs-prepaid-boundary|资金转移与预付边界]]、[[payments/funds-transfer-service-providers-japan-index|资金转移业者名录]]、[[payments/japan-code-payment-competitive-map|码支付竞争地图]]、[[banking/quick-deposit-four-methods|快速入金方法]]和[[JapanFG/legal-financial-licenses/INDEX|JapanFG 法律 / 金融牌照]]一起使用。

## 支付轨道地图

| 轨道 | 运营方 / 来源路径 | 客户视角 | FinWiki 解读 |
|---|---|---|---|
| 传统银行转账 | 银行和全银系统 | 银行账户到账户，通常基于账号。 | 核心银行支付轨道；当资产负债表或银行系统结构重要时使用[[banking/INDEX|银行领域]]。 |
| Cotra / Kotora 汇款 | 与全银系统联动的 Cotra 系统 | 使用银行 App、账号、电话、邮件或兼容账户标识的小额即时个人转账。 | A2A 互操作层，连接存款机构与资金转移业者。 |
| Bank Pay | JEPPO / 日本电子支付推进机构 | 从已登记银行账户发起 QR / 条码支付，并以直接借记式账户结算。 | 与码支付竞争、但具备直接账户扣款逻辑的商户支付轨道。 |
| J-Debit | JEPPO / J-Debit 基础设施 | 使用现金卡在商户借记支付。 | 传统账户直连商户借记层，也是 Bank Pay 的基础设施。 |
| 钱包银行链接支付 | 支付 App、银行 API / 账户连接、资金转移或预付运营方 | 用户看到 PayPay / Merpay / au PAY / 其他钱包流程。 | 必须拆分账户充值、钱包余额、商户收单以及资金转移 / 预付分类。 |
| BaaS / 嵌入式银行账户 | 合作银行与 App 提供方 | App 看起来像银行或钱包。 | 使用[[banking/baas-japan-landscape|日本 BaaS 版图]]和[[banking/mercari-bank-license-stack|Mercari Bank 牌照栈]]。 |

## Cotra 系统解读

全银网络的官方说明称，Cotra 是在五大城市银行提出2020 小额支付基础设施构想后设立的，并从2022 年开始通过 Cotra 系统提供100,000 日元以下个人转账服务。该系统把全银系统和既有机制与较新的 IT 结合，不仅向存款金融机构开放连接，也向资金转移业者开放，并通过全银系统在日内两次结算连接运营方资金。

对 FinWiki 来说，Cotra 是连接以下主体的桥梁：

- [[JapanFG/mufg-bank|MUFG Bank]]、[[JapanFG/sumitomo-mitsui-banking-corp|SMBC]]、[[JapanFG/mizuho-bank|Mizuho Bank]]、[[JapanFG/resona-bank|Resona Bank]]以及其他存款银行；
- [[JapanFG/ssnb|SBI Sumishin Net Bank]]和[[banking/minna-bank-baas-model|Minna Bank BaaS]]等 App 银行和数字银行路径；
- 通过[[payments/funds-transfer-service-providers-japan-index|日本资金转移业者名录]]路由的资金转移业者；
- [[payments/japan-code-payment-competitive-map|日本码支付竞争地图]]中的面向用户的钱包和码支付路径。

## Bank Pay / J-Debit 解读

JEPPO 将自身描述为通过账户直连支付基础设施提供 J-Debit 和 Bank Pay 无现金服务。Bank Pay 是由 JEPPO 运营、面向拥有银行账户用户的智能手机支付服务，可无需预先充值而直接从登记银行账户支付，并使用 J-Debit 支付基础设施。

这很重要，因为 Bank Pay 对消费者像 QR 支付，但经济和风险解读不同于先存储钱包余额再付款的模式：

- 直接账户支付环节不需要储值余额；
- 银行账户登记与认证层是核心；
- 商户受理、退款、欺诈处理和用户支持不同于卡和预付轨道；
- Bank Pay 也可以承载 Cotra 汇款和账单支付功能。

## 产品边界

| 产品模式 | 主要问题 | 典型路径 |
|---|---|---|
| Cotra 下的个人间转账 | 发送方是银行客户、钱包客户还是资金转移客户？ | Cotra / 全银联动，加银行或资金转移服务提供方披露。 |
| 从银行账户发起的 QR 商户支付 | 账户是直接扣款，还是先充值到钱包余额？ | Bank Pay / 账户直连路径。 |
| 银行充值后的钱包支付 | 价值是否先存入钱包再用于商户支付？ | [[payments/funds-transfer-vs-prepaid-boundary|资金转移与预付边界]]。 |
| 通过 PayPay / d Pay / au PAY / Rakuten Pay 的商户 QR 支付 | 这是码支付、卡收单、预付还是资金转移经济？ | [[payments/japan-code-payment-competitive-map|码支付竞争地图]]和[[payments/psp-merchant-settlement-risk|PSP 结算风险]]。 |
| 向证券 / 加密账户快速入金 | 轨道是银行转账、账户扣款、API 指令还是支付代理路径？ | [[banking/quick-deposit-four-methods|快速入金方法]]和[[JapanFG/legal-financial-licenses/INDEX|牌照栈]]。 |

## JapanFG 相关性

- 大型银行和核心银行很重要，因为账户到账户支付最终需要存款账户连接以及银行清算 / 结算规则。
- [[JapanFG/recruit-mufg-business|Recruit MUFG Business]]和 COIN+ 类型模型是围绕账户连接轨道建立商户和消费者支付频率的尝试。
- [[JapanFG/paypay|PayPay]]、[[JapanFG/merpay|Merpay]]、[[JapanFG/au-payment|au PAY]]和[[JapanFG/rakuten-edy|Rakuten Edy]]仍是钱包 / 码支付锚点，但其银行链接流程不同于纯账户到账户支付。
- [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]]、[[JapanFG/fukuoka-fg|Fukuoka FG]]和区域银行 App 路径重要，因为 Cotra 和 Bank Pay 可把银行 App 转为日常支付界面。

## 风险与注意点

| 风险 | 解读 |
|---|---|
| 银行账户欺诈 / 未授权扣款 | 账户直连支付使认证、设备迁移和账户登记控制非常重要。 |
| 消费者混淆 | QR 支付体验可能隐藏产品究竟是账户直连、预付、资金转移、卡还是钱包余额。 |
| 商户受理碎片化 | Bank Pay、J-Debit、Cotra 对应 App 和码支付 App 具有不同商户网络。 |
| 结算时点 | 客户可见的即时完成与运营方之间最终结算是不同层。 |
| 互操作限制 | Cotra 可用性取决于参与 App 和机构；Bank Pay 取决于登记银行和商户。 |
| 监管分类 | 当非银行或钱包运营方触达价值时，资金转移和预付制度仍重要。 |

## 研究清单

1. 识别价值起点是银行存款账户、钱包余额、卡额度还是预付余额。
2. 识别商户或收款方收到银行资金、钱包价值还是资金转移价值。
3. 检查运营方：银行、资金转移服务提供方、预付发行方、PSP 或码支付平台。
4. 对 Cotra，检查当前参与 App / 机构页面。
5. 对 Bank Pay，检查当前参与金融机构和商户受理范围。
6. 在作出牌照判断前，把公司页面链接回[[payments/funds-transfer-vs-prepaid-boundary|资金转移与预付边界]]和[[JapanFG/legal-financial-licenses/INDEX|法律 / 金融牌照]]。

## 相关

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/psp-merchant-settlement-risk]]
- [[banking/quick-deposit-four-methods]]
- [[banking/baas-japan-landscape]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/recruit-mufg-business]]
- [[JapanFG/paypay]]
- [[JapanFG/merpay]]
- [[JapanFG/mufg-bank]]
- [[JapanFG/sumitomo-mitsui-banking-corp]]
- [[JapanFG/mizuho-bank]]
- [[INDEX|FinWiki index]]

## 来源

- 全银网络：Cotra 系统联动说明。
- Cotra：官方服务、P2P 转账和参与运营方页面。
- JEPPO：机构和 Bank Pay 官方页面。
- FSA：资金转移服务提供方登记名册。

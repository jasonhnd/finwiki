---
source: payments/funds-transfer-service-providers-japan-index
source_hash: 2e70677bbf51158e
lang: zh
status: machine
fidelity: ok
title: "日本资金移动业者 登记注册簿 索引"
translated_at: 2026-06-19T06:09:18.078Z
---

# 日本资金移动业者 登记注册簿 索引

## 概览

金融厅的资金移动业者名录在 **2026-04-30 时点包含 83 家登记事业者**。本页是 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid]] 分析的注册簿统制路由；它并不复制全部逐行注册簿数据。

当 [[payments/INDEX|payments INDEX]] 之下的某家公司页需要被解读为汇款事业者、钱包运营商、汇款提供商、具备转账能力的 PSP 或与稳定币邻接的结算公司时，使用本页。就登记号、日期、地址与服务种别各列而言，金融厅官方 PDF 仍为权威来源。

## 注册簿快照

| 指标 | 解读 |
|---|---:|
| 金融厅基准日 | 2026-04-30 |
| 已登记资金移动业者总数 | 83 |
| 主要监管路由 | 金融厅 `资金移动业者登录一览` |
| Wiki 复制政策 | 不复制全部 83 行；引用金融厅，并在此维护重要的 wiki 路由。 |

## 辖区计数

| 辖区 | 事业者数 |
|---|---:|
| 北海道财务局 | 2 |
| 关东财务局 | 76 |
| 东海财务局 | 1 |
| 北陆财务局 | 1 |
| 近畿财务局 | 3 |
| **合计** | **83** |

## 边界

| 边界 | 处理 |
|---|---|
| 资金移动业者 | 依资金结算法登记，在银行牌照路由之外进行汇兑交易。 |
| 第三者型预付式支付手段发行者 | 当价值为不可提取的储值时，路由至 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]]。 |
| 银行／银行代理业 | 当核心产品为吸收存款、银行账户访问或银行代理业时，路由至 [[banking/INDEX|banking]]。 |
| 卡收单／商户合同 | 路由至 [[payments/card-acquiring-japan-stack|card acquiring stack]] 及经产省的分期销售法名录。 |
| 稳定币／EPI | 当涉及电子支付手段时，路由至 [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]] 及 EPI 事业者页面。 |

## 现有的重要 Wiki 路由

以下路由为 FinWiki 中已涵盖或新晋升的重要事业者。它们并非 83行金融厅名录的完整复制。

| 板块 | 官方／产品路由 | Wiki 路由 | 边界注记 |
|---|---|---|---|
| 大型码支付钱包 | PayPay株式会社 | [[payment-firms/paypay]] | 钱包、码支付、预付、资金移动、工资数字支付邻接性 |
| 市场平台钱包 | 株式会社メルペイ | [[payment-firms/merpay]] | 市场平台支付与钱包路由 |
| 电信钱包 | auペイメント株式会社 | [[payment-firms/au-payment]] | au PAY 资金移动／预付边界 |
| 预付电子货币 | 楽天Edy株式会社 | [[payment-firms/rakuten-edy]] | 储值加资金移动注册簿路由 |
| 消费者钱包／预付卡 | 株式会社Kyash | [[payment-firms/kyash]] | 钱包、预付卡、资金移动 |
| 家庭钱包 | 株式会社スマートバンク | [[payment-firms/smartbank]] | 消费者钱包与卡关联储蓄 UX |
| 零售／ATM 结算 | 株式会社セブン・ペイメントサービス | [[payment-firms/seven-payment-service]] | 7 & i 结算基础设施 |
| PSP／网关 | GMOペイメントゲートウェイ株式会社 | [[payment-firms/gmo-payment-gateway]] | 具备资金移动登记的上市 PSP |
| PSP／网关 | GMOイプシロン株式会社 | [[payment-firms/gmo-epsilon]] | 中小商户 PSP／转账路由 |
| PSP／网关 | SBペイメントサービス株式会社 | [[payment-firms/sb-payment-service]] | SoftBank／PayPay 集团商户 PSP |
| PSP／网关 | 株式会社DGフィナンシャルテクノロジー | [[payment-firms/dg-financial-technology]] | Digital Garage PSP／商户结算路由 |
| QR 网关 | 株式会社ネットスターズ | [[payment-firms/netstars]] | StarPay QR／多重无现金网关与资金移动登记 |
| COIN+／Air Wallet | 株式会社リクルートMUFGビジネス | [[payment-firms/recruit-mufg-business]] | Recruit + MUFG 钱包／转账事业者 |
| 旅行钱包 | JALペイメント・ポート株式会社 | [[payment-firms/jal-payment-port]] | JAL Pay、预付、银行代理业、转账路由 |
| 跨境汇款 | ワイズ・ペイメンツ・ジャパン株式会社 | [[payment-firms/wise-payments-japan]] | 跨境汇款／多币种转账 |
| 跨境汇款 | REVOLUT TECHNOLOGIES JAPAN株式会社 | [[payment-firms/revolut-technologies-japan]] | 基于 App 的国际转账／钱包路由 |
| 跨境汇款 | PayPal Pte. Ltd. | [[payment-firms/paypal-pte-ltd-japan]] | 跨境支付／钱包边界 |
| 跨境汇款 | ペイオニア・ジャパン株式会社 | [[payment-firms/payoneer-japan]] | 市场平台付款与跨境汇款 |
| 跨境汇款 | ウエスタンユニオンジャパン株式会社 | [[payment-firms/western-union-japan]] | 汇款网络 |
| 跨境汇款 | SBIレミット株式会社 | [[payment-firms/sbi-remit]] | SBI 集团汇款事业者 |
| 外汇／旅行货币 | トラベレックスジャパン株式会社 | [[payment-firms/travelex-japan]] | 零售外汇／汇款邻接性 |
| 跨境企业支付 | Airwallex Japan株式会社 | [[payment-firms/airwallex-japan]] | 跨境 B2B 支付基础设施 |
| 稳定币邻接的资金移动 | JPYC株式会社 | [[payment-firms/jpyc]] | 资金移动 + 稳定币／EPI 邻接性 |
| 银行集团消费金融 | 株式会社アプラス | [[card-issuers/aplus]] | 分期／卡／资金移动邻接性 |
| 电信 FG 观察名单 | 株式会社NTTドコモ・フィナンシャルグループ | [[megabanks/ndfg]] | 新注册簿行；随集团结构成熟关注经营公司路由 |

## 晋升规则

仅当事业者满足以下之一时，方将注册簿行晋升为独立 wiki 页：

- 大型消费者钱包、汇款网络、商户 PSP、码支付网关、上市集团或稳定币邻接事业者；
- 对某条 [[payments/cashless-jp-landscape|Japan cashless payment]] 分析线索已属重要；
- 公开来源足够丰富，可支撑战略、牌照边界与风险分析；或
- 为解决 [[financial-regulators/missing-financial-institutions-backlog|the JapanFG expansion backlog]] 中母公司／经营公司的区分所需。

## 相关

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 来源

- 金融厅 牌照／登记索引：https://www.fsa.go.jp/menkyo/menkyo.html
- 金融厅 资金移动业者名录：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- 金融厅 面向资金移动业者的表格／监管路由：https://www.fsa.go.jp/common/shinsei/shikinidou.html

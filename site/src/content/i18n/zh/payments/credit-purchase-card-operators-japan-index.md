---
source: payments/credit-purchase-card-operators-japan-index
source_hash: 07b1fbcddfe020a0
lang: zh
status: machine
fidelity: ok
title: "日本信用购买与卡运营商登记索引"
translated_at: 2026-06-19T06:09:18.183Z
---

# 日本信用购买与卡运营商登记索引

## 概览

经济产业省（METI）依据《分期付款销售法》公布的名录，是日本信用卡发行、购物信贷、个别分期信贷以及商户签约 / 卡号处理的控制面。截至 **2026-04 月末**，METI 列出 **241 家登记综合信用购买中介**、**0 家小额综合信用购买中介**、**138 家登记个别信用购买中介**，以及 **275 家登记信用卡号等处理签约缔结业者**。

请将本页与 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 和 [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] 一并阅读，以区分卡信贷、商户收单、PSP 业务以及钱包 / 转账产品。METI 官方 PDF 仍是逐行的事实依据来源。

## 登记快照

| 登记 | 截止日期 | 数量 | Wiki 处理 |
|---|---:|---:|---|
| 登録包括信用購入あっせん業者 | 2026-04 月末 | 241 | 为重要卡发行机构 / 信用公司建立路径；地方长尾保留在 METI PDF 中。 |
| 登録少額包括信用購入あっせん業者 | 2026-04 月末 | 0 | 无需独立的 wiki 行动。 |
| 登録個別信用購入あっせん業者 | 2026-04 月末 | 138 | 仅推进重要的分期信贷、汽车金融、BNPL 或银行集团信用运营商。 |
| クレジットカード番号等取扱契約締結事業者 | 2026-04 月末 | 275 | 用于收单方、商户 PSP 以及卡号处理责任。 |

## 边界

| 边界 | 处理 |
|---|---|
| 综合信用购买中介 | 卡 / 循环 / 信用购买运营商路径；通常与卡发行页面重叠。 |
| 个别信用购买中介 | 购物信贷、汽车金融、教育 / 医疗信贷及其他销售金融路径。 |
| 信用卡号等处理签约缔结业者 | 商户签约与卡数据控制路径；对 PSP / 收单分析至关重要。 |
| 资金转移业者 | 使用金融厅登记和 [[payments/funds-transfer-service-providers-japan-index]]。 |
| 预付发行方 | 使用金融厅预付登记和 [[payments/prepaid-payment-instrument-issuers-japan-index]]。 |

## 现有的重要 Wiki 路径

| 分段 | 路径 | 为何这些是独立的 |
|---|---|---|
| 大型银行 / 银行集团卡发行机构 | [[card-issuers/smbc-card]]、[[card-issuers/mufg-nicos]]、[[card-issuers/jcb]]、[[trust-banks/mitsubishi-ufj-trust-bank]] | 发行 / 收单、银行集团战略、卡网络或信托银行邻接性。 |
| 零售 / 生态系统卡发行机构 | [[card-issuers/rakuten-card]]、[[card-issuers/paypay-card]]、[[card-issuers/aeon-financial-service]]、[[card-issuers/epos-card]]、[[card-issuers/seven-card-service]]、[[card-issuers/ucs-card]]、[[card-issuers/life-card]]、[[card-issuers/pocket-card]] | 消费信贷、忠诚度、零售金融及支付数据闭环。 |
| 消费金融 / 分期 | [[consumer-finance/smbc-consumer-finance]]、[[consumer-finance/acom]]、[[consumer-finance/aiful]]、[[card-issuers/orico]]、[[card-issuers/jaccs]]、[[card-issuers/aplus]]、[[consumer-finance/shinsei-financial]]、[[card-issuers/toyota-finance]] | 放贷 / 担保 / 分期信贷经营公司。 |
| 商户 PSP / 收单 | [[payment-firms/gmo-payment-gateway]]、[[payment-firms/gmo-epsilon]]、[[payment-firms/sb-payment-service]]、[[payment-firms/dg-financial-technology]]、[[payment-firms/netstars]] | 商户接入、网关、卡号处理及结算风险基础设施。 |
| 钱包 / 嵌入式金融 | [[payment-firms/recruit-mufg-business]]、[[payment-firms/jal-payment-port]]、[[payment-firms/paypay]]、[[payment-firms/merpay]]、[[payment-firms/au-payment]] | 钱包通常组合预付、转账、商户支付及卡关联通道。 |

## 分析视角

对于 FinWiki 而言，METI 名录最重要的用途不是"谁出现在 PDF 中"，而是"该运营商在信用与收单堆栈中扮演什么角色"。

- 卡发行机构掌握消费信贷与还款行为。
- 个别信贷运营商连接商户、消费者与产品融资。
- 商户签约业者决定哪些商户可以接受卡片，并承担接入 / 监控职责。
- 即使最终的商户签约权属于另一家登记收单方，PSP 在技术上也可能处于中心位置。
- 一些运营商同时位于多个名录中，因此一个公司页面解释边界，而不是按牌照逐一重复页面。

## 相关

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- METI 信用交易政策页面：https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI 登记运营商名录：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI 登记综合信用购买中介 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI 登记个别信用购买中介 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI 信用卡号等处理签约缔结业者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf

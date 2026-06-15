---
source: card-issuers/rakuten-card
source_hash: a78d22131119c5bf
lang: zh
status: machine
fidelity: ok
title: "乐天卡 (Rakuten Card)"
translated_at: 2026-06-15T03:48:21.826Z
---

# 乐天卡 (Rakuten Card)


## Wiki 路由

本词条归属于 [[card-issuers/INDEX|card-issuers INDEX]]。请与 [[payments/INDEX|payments index]] 一起阅读以了解相邻语境，并参照 [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] 了解更广泛的系统边界。

## TL;DR

乐天卡是 [[payment-firms/rakuten-fg|楽天グループ金融]] 的卡 issuer / payment touchpoint。由于与乐天市场、乐天积分、乐天 Pay、乐天银行、乐天证券相连接，需要将其作为 ecosystem finance 的核心来读，而非单一的信用卡。

## 1. 法人・牌照边界

| Item | Reading |
|---|---|
| Legal entity | 楽天カード株式会社 |
| Group | [[payment-firms/rakuten-fg|Rakuten financial ecosystem]] |
| Main lanes | 信用卡发行、卡贷、银行代理业 / 支付 App 邻接 |
| Regulatory route | METI 分期付款销售法 登记经营者一览；官方公司概况及贷金 / 银行代理业的备案。 |

## 2. 业务角色

- 将乐天的 commerce 与积分活动转化为刷卡使用与持续的账户关系。
- 作为横跨乐天 ecosystem 的主要数据与奖励接口；scheme economics 见 [[payments/japan-payment-scheme-economics-matrix]]。
- 锚定乐天消费金融界面的信用风险、反欺诈与积分负债分析 —— issuer / acquirer / processor 的分工见 [[payments/japan-card-issuer-acquirer-processor-split]]。
- 可读作 [[card-issuers/paypay-card|PayPayカード]] 的直接 ecosystem-finance 对应物：二者都是在 commerce / wallet 基础（而非存款基础）之上叠加一条信用额度。

## 3. 这一独立页面的意义

不应将乐天卡并入一个泛化的「乐天 finance」页面。它是使更广泛的集团金融闭环可被计量的、面向消费者的信用产品。

## 相关

- [[payment-firms/rakuten-fg]]
- [[payments/cashless-jp-landscape]]
- [[loyalty/japan-points-landscape]]
- [[payments/card-acquiring-japan-stack]]

## 来源

- Rakuten Card corporate top: https://www.rakuten-card.co.jp/corporate/
- Rakuten Card company overview: https://www.rakuten-card.co.jp/corporate/info/about/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html

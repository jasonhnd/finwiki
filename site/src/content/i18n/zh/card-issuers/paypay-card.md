---
source: card-issuers/paypay-card
source_hash: 068d22ea83d16bf9
lang: zh
status: machine
fidelity: ok
title: "PayPay卡 (PayPay Card)"
translated_at: 2026-06-15T03:48:21.931Z
---

# PayPay卡 (PayPay Card)


## Wiki 路径

本词条归属于 [[card-issuers/INDEX|card-issuers INDEX]]。请对照 [[payments/INDEX|payments index]] 阅读以获取相邻背景，并对照 [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] 了解更广泛的体系边界。

## TL;DR

PayPay卡是 [[megabanks/paypay-fg|PayPay金融グループ]] 的信用卡 / PayPay信用业务 operator。由于其承担着将 credit line 嵌入 PayPay wallet 支付体验的角色，需将 wallet 与 card issuer 分开管理。

## 1. 法人 / 牌照边界

| 项目 | 内容 |
|---|---|
| 法人主体 | PayPayカード株式会社 |
| 集团 | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| 主要业务线 | PayPay Card, PayPay Card Gold, PayPay credit products, lending disclosures |
| 监管路径 | 官方公司公告；依据《分期付款销售法》进行信用卡 / 分期销售管控的 METI 注册事业者名单。 |

## 2. 业务角色

- 在 PayPay 的码支付与应用分发基础之上，加入循环信贷 / 信用卡的经济性。
- 将积分、应用结账、收单合作方与消费信贷整合进一条零售金融漏斗；issuer / acquirer / processor 关系图见 [[payments/japan-card-issuer-acquirer-processor-split]]。
- 对于将 PayPay 与其最接近的生态金融同业 [[card-issuers/rakuten-card|楽天カード]]，以及 au PAY、d払い和传统发卡机构进行比较至关重要——方案经济性见 [[payments/japan-payment-scheme-economics-matrix]]。

## 3. 为何这一独立页面重要

作为钱包的 PayPay 与作为信用 operator 的 PayPay Card，在牌照、资产负债表和消费者保护方面存在不同的问题。本页面让这一边界保持可见。

## 相关条目

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## 来源

- PayPay Card 公司页面：https://www.paypay-card.co.jp/company/
- 《分期付款销售法》下的 METI 注册事业者：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html

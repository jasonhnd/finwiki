---
source: payment-firms/gmo-postpay
source_hash: aa3e7731d2b81515
lang: zh
status: machine
fidelity: ok
title: "GMO 后付 (GMO Postpay)"
translated_at: 2026-06-15T03:48:21.834Z
---

# GMO 后付 (GMO Postpay)

## Wiki 路由

本词条作为 **PSP 侧 BNPL** 产品归属于 [[payment-firms/INDEX|payment-firms INDEX]]。请将其与 [[payment-firms/bnpl-landscape|Japan BNPL landscape]] 的系统说明对照阅读，并与解释商户收单（acquiring）堆栈的兄弟页面 [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]]、以及展示纯粹 BNPL 的 [[payment-firms/net-protections-hd|Net Protections HD]] / [[payment-firms/paidy|Paidy]] 同类一同阅读。[[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] 框定监管议题，[[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] 锚定登记，[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 将其置于卡 / 码经济的并列之中。

## TL;DR

GMO 后付 是由 **GMO ペイメントサービス株式会社**（GMO 互联网 G、[[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]] 的关联公司）运营的 EC 后付款支付。这是 PSP 出身的集团自研・运营 BNPL 的案例，一并提供加盟店签约 / 授信 / 发票开具 / 代收。它与 Net Protections 的 NP 后付、Yamato 的 [[payment-firms/kuroneko-atobarai|クロネコ代金後払い]] 并列，是 EC 后付款的主要选项。

## 1. 法人・牌照边界

| Item | Reading |
|---|---|
| Operating entity | GMO ペイメントサービス株式会社 |
| Group | GMO 互联网集团（与 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 为兄弟公司 / 持股关系）|
| Product type | EC 后付款支付（发票同捆 + 便利店 / 银行转账 / 电子条形码回收）|

## 2. 业务角色

- 相对于 GMO ペイメントゲートウェイ ([[payment-firms/gmo-payment-gateway|GMO PG]]) 提供的 **刷卡支付 PSP** 业务线，GMO ペイメントサービス 承担 **后付款** 与 **便利店代收** 的兄弟业务线。EC 加盟店可借助 GMO 1 社 一站式提供多样的支付手段。^[extracted]
- 通过为加盟店代行授信判断 + 发票开具 + 催收 / 回收，成为在纯粹 PSP 之上叠加授信职能的 **PSP 系 BNPL** 类别的代表案例。^[extracted]
- BtoC EC（尤其是邮购・订阅 EC）是核心细分领域。

## 3. 这一独立页面的意义

由于 [[payment-firms/gmo-payment-gateway|GMO ペイメントゲートウェイ]] 主体页面以 **刷卡支付 PSP** 为主题，将后付款业务作为另一 entity（[[payment-firms/gmo-postpay|GMO ペイメントサービス]]）单设独立页面，可以明示 PSP / 后付款 / 便利店代收 的牌照边界。

## 4. 监管・政策

- **资金结算法 邻接**: 代收业 / 预付式支付手段的边界在 PSP 系 BNPL 中容易复杂化。
- **个人信息保护法**: 授信数据与 EC 购买记录的处理。

## 相关

- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/bnpl-landscape]]
- [[payment-firms/net-protections-hd]]
- [[payment-firms/kuroneko-atobarai]]
- [[payment-firms/paidy]]
- [[payment-firms/atone]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## 来源

- GMO Payment Service corporate site: https://gmo-ps.com/
- GMO Payment Service "後払い" service page: https://gmo-ps.com/service/postpay/
- GMO Payment Gateway corporate site (sibling PSP): https://www.gmo-pg.com/corp/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html

---
source: payment-firms/mastercard-japan
source_hash: 3f2d2a120c1d660b
lang: zh
status: machine
fidelity: ok
title: "万事达卡日本（Mastercard Japan）"
translated_at: 2026-05-31T23:59:49.354Z
---

# 万事达卡日本（Mastercard Japan）

## Wiki 路线

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。可对照 [[card-issuers/jcb|JCB]] 理解同业 / 对比背景（4-party global scheme vs JCB 的 3-party hybrid），并参照 [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] 理解更广泛的系统 / 监管边界。

## TL;DR

株式会社マスターカードジャパン是美国 Mastercard Incorporated（NYSE:MA）的日本据点法人。Mastercard 不自行发行卡片，只承担品牌授权、scheme 运营和商户间交易处理，是纯粹的 4-party scheme operator。在日本，它向 [[card-issuers/rakuten-card|楽天カード]]、[[card-issuers/mufg-nicos|三菱UFJニコス]]、[[card-issuers/aplus|アプラス]] 等国内 issuer 授权 Mastercard 品牌，商户合同则由国内 acquirer 承担。它既不直接向消费者发卡，也不直接签约商户，这一点与后述 [[payment-firms/american-express-international-japan|Amex Japan]] 有决定性差异。

## 1. 牌照 / 集团边界

| 项目 | 说明 |
|---|---|
| 法定名称 | 株式会社マスターカードジャパン (Mastercard Japan Co., Ltd.) |
| 母公司 | Mastercard Incorporated（美国 NYSE:MA） |
| 品牌角色 | 纯 4-party scheme operator / brand licensor — 自身不发卡，也不签约商户 |
| 集团边界 | 美国母公司的日本分支功能。与国内 issuer（楽天カード等）和 acquirer（三井住友カード等）只是合同关系。 |
| Wiki 角色 | “日本 Mastercard 品牌窗口”的实体页面。 |

## 2. 日本业务线

- **品牌授权**：向国内 issuer（楽天カード、三菱UFJニコス、アプラス、Olive 等）授权 Mastercard 品牌。
- **Scheme 运营**：提供跨境发卡银行 ↔ 商户银行之间的结算处理（Authorization / Clearing / Settlement）。
- **交换费率设定**：设定日本市场的 interchange rate，详情见 [[payments/japan-interchange-and-merchant-fee-stack]]。
- **面向商户的营销与技术支持**：支持 tokenization、3-D Secure、contactless payments 等标准化和在日本的展开。
- **法人卡与 B2B 支付**：作为面向日本大企业的 purchasing card / corporate card 产品 supplier。
- **数字支付与合作伙伴关系**：支持 Apple Pay / Google Pay，并与日本 BigTech 合作（部分 PayPay 商品搭载 Mastercard 品牌）。

由于它在日本没有直接的 card issuance license 或 acquirer license（即不是《分期付款销售法》上的注册发卡业者），因此不会出现在 METI Installment Sales Act 注册业者名单中。这正是它与 [[card-issuers/jcb|JCB]]、Amex 不同的监管边界。

## 4. 为什么本页重要

- 作为整理“**4-party scheme operator**”与“card issuer”之间法律和经济差异的入口。
- 在追踪国内 issuer 与哪些品牌签约时，作为反向检索实体（楽天カード Mastercard 版 → Mastercard Japan）。
- 作为追踪 interchange rate、PCI DSS、tokenization 等国际规则来源的起点。

## Related

- [[card-issuers/jcb|JCB]]（国内主要竞争者 / 3-party hybrid）
- [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]（4-party 直接竞争者 / 国内份额首位）
- [[payment-firms/american-express-international-japan|American Express International Japan]]（3-party 竞争者）
- [[payment-firms/unionpay-international-japan|UnionPay International Japan]]（中国系竞争者 / 入境消费）
- [[card-issuers/rakuten-card]] / [[card-issuers/mufg-nicos]] / [[card-issuers/aplus]]（主要 Mastercard 品牌 issuer）
- [[payments/japan-interchange-and-merchant-fee-stack]] / [[payments/japan-card-issuer-acquirer-processor-split]]

## Sources

- Mastercard Japan 公式网站: https://www.mastercard.co.jp/
- Mastercard 企业信息（日文）: https://www.mastercard.co.jp/ja-jp/business/overview/about-mastercard.html
- Mastercard Incorporated 投资者信息（美国）: https://investor.mastercard.com/

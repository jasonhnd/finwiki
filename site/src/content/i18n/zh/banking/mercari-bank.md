---
source: banking/mercari-bank
source_hash: 1eb4016940a0cfb4
lang: zh
status: machine
fidelity: ok
title: "Mercari Bank(メルカリバンク / Mercari Bank）"
translated_at: 2026-05-30T18:52:47.786Z
---

# Mercari Bank(メルカリバンク / Mercari Bank）

## Wiki route

本条目归属于 [[banking/INDEX|banking index]]。请与 [[banking/mercari-bank-license-stack|メルカリバンク license stack]] 对照阅读以获取同类 / 对比背景，并与 [[banking/cooperative-banking-japan|Cooperative banking in Japan]] 对照以了解更广泛的体系 / 监管边界。

## TL;DR

Mercari Bank 是一项让用户能够在 Mercari app 内使用 Minna Bank 账户的 BaaS 服务。2025-12-18，通过 Minna Bank 与 Merpay 的 BaaS 业务合作启动。银行主体为 [[banking/minna-bank-baas-model|みんなの銀行]]，Merpay 承担 API 对接、电子结算等代行业的层。

## Product map

| Component | Description |
|---|---|
| Service front | Mercari app 的余额 / 钱包导流 |
| Bank account | Minna Bank 普通存款账户、合作分行「Mercari 分行」 |
| API connector | Merpay 与 Minna Bank 的 API 对接 |
| Core use case | 将 Mercari 销售款 / Merpay 余额即时、免手续费转入银行账户 |
| Cash-out | Seven Bank ATM 等取款导流，附优惠条件 |

## Strategic read

Mercari Bank 的本质，是降低把二手交易销售款转换为银行存款的摩擦。传统的「提取销售款」UX 中，手续费、等待时间、外部银行账户登记容易成为心理负担。Mercari Bank 把销售款、Merpay 余额、银行账户置于同一 app 导流之中，从而把卖、用、存连接起来。

这一结构是 [[banking/baas-japan-landscape|Japan BaaS landscape]] 中也很强的例子。Mercari 拥有高频的 C2C marketplace 与结算余额，Minna Bank 拥有银行牌照与 API / 合作分行。两者结合，便能获取银行单独难以触及的生活接触点。

## What it is not

- 并非 Merpay 取得了银行牌照的服务。
- Mercari 分行是 Minna Bank 的合作分行，而非 Mercari 独立的存款银行。
- 据公开 FAQ，Mercari 分行在 Mercari Bank 以外的 API 对接上存在限制，因此未必与通用 Minna Bank 账户拥有相同的 UX。

## Competitive meaning

Mercari Bank 不同于 [[banking/rakuten-bank|楽天銀行]] 或 [[banking/paypay-bank|PayPay 銀行]] 那样的全银行集团战略。Mercari 选择的不是自己持有银行，而是利用 BaaS 把金融功能嵌入 app 内。

因此其比较轴并非「作为银行的综合实力」，而是以下 3  点。

| Axis | Question |
|---|---|
| Conversion | 能把多少销售款·余额转化为存款 |
| Stickiness | 能否把 Mercari app 的使用频率转化为金融导流 |
| License leverage | 能把自有牌照与 Minna Bank API 的边界拓展到何种程度 |

## Related

- [[banking/mercari-bank-license-stack]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[banking/paypay-bank]]
- [[banking/rakuten-bank]]
- [[JapanFG/gmo-aozora-net]]

## Sources

- Minna Bank / Merpay, 2025-12-18: Mercari Bank 服务启动发布。
- Minna Bank: Mercari 分行官方 FAQ / 分行页面。
- Mercari Help: 将 Minna Bank 账户对接到 Merpay。
- Mercari: 关于电子结算等代行业的标示等。

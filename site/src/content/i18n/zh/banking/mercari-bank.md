---
source: banking/mercari-bank
source_hash: 385edc86a2548249
lang: zh
status: machine
fidelity: ok
title: "メルカリバンク (Mercari Bank)"
translated_at: 2026-06-18T23:33:48.270Z
---

# メルカリバンク (Mercari Bank)

## Wiki 路由

本条目位于 [[banking/INDEX|banking index]] 之下。请将其与 [[banking/mercari-bank-license-stack|メルカリバンク license stack]](同侪 / 对照背景)以及 [[banking/cooperative-banking-japan|Cooperative banking in Japan]](更宏观的系统 / 监管边界)对照阅读。

## TL;DR

Mercari Bank 是一项让用户在 Mercari 应用内即可使用 Minna Bank(みんなの銀行)账户的 BaaS 服务。它于 2025-12-18 通过 Minna Bank 与 Merpay 的 BaaS 业务合作启动。银行主体为 [[banking/minna-bank-baas-model|みんなの銀行]],而 Merpay 承担 API 对接 / 电子结算等代行业的这一层。

## Product map

| 组件 | 说明 |
|---|---|
| Service front | Mercari 应用内的余额 / 钱包导流 |
| Bank account | Minna Bank 普通存款账户,合作分行"Mercari 分行" |
| API connector | Merpay 与 Minna Bank 的 API 对接 |
| Core use case | 将 Mercari 销售款 / Merpay 余额即时、免手续费地转入银行账户 |
| Cash-out | 通过 Seven Bank ATM 等的提现导流,并有优待条件 |

## Strategic read

Mercari Bank 的本质,是降低把二手交易销售款转化为银行存款的摩擦。传统的"提现销售款"UX 容易因手续费、等待时间、外部银行账户登记而构成心理负担。Mercari Bank 通过把销售款、Merpay 余额、银行账户置于同一应用内导流中,将"卖、用、存"连接起来。

这一结构即便在 [[banking/baas-japan-landscape|Japan BaaS landscape]] 之中也是有力的范例。Mercari 拥有高频的 C2C marketplace 与支付余额,而 Minna Bank 拥有银行牌照与 API / partner branch。两者结合,银行便能获得其单独难以触及的生活接触点。

## What it is not

- 这并非 Merpay 取得银行牌照的服务。
- Mercari 分行是 Minna Bank 的合作分行,而非 Mercari 单独运营的存款银行。
- 根据公开 FAQ,Mercari 分行对 Mercari Bank 以外的 API 对接存在限制,因此不一定与通用的 Minna Bank 账户具有相同的 UX。

## Competitive meaning

Mercari Bank 不同于 [[banking/rakuten-bank|楽天銀行]] 或 [[banking/paypay-bank|PayPay 銀行]] 那样的全银行集团战略。与其自建银行,Mercari 选择了使用 BaaS 把金融功能嵌入应用内的路径。

因此,比较的维度并非"作为银行的综合实力",而是以下 3  点。

| Axis | Question |
|---|---|
| Conversion | 能将多少销售款 / 余额转化为存款 |
| Stickiness | 能否把 Mercari 应用的使用频率转化为金融导流 |
| License leverage | 能将自有牌照与 Minna Bank API 之间的边界拓展到何种程度 |

## Related

- [[banking/mercari-bank-license-stack]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[banking/paypay-bank]]
- [[banking/rakuten-bank]]
- [[payment-firms/gmo-aozora-net]]

## Sources

- みんなの銀行 / メルペイ, 2025-12-18: Mercari Bank 服务启动新闻稿。
- みんなの銀行: Mercari 分行官方 FAQ / 分行页面。
- メルカリ Help: 将 Minna Bank 账户关联到 Merpay。
- メルカリ: 关于电子结算等代行业的披露等。

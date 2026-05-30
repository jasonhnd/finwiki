---
source: banking/baas-japan-landscape
source_hash: 59004eaed7a6ecaf
lang: zh
status: machine
fidelity: ok
title: "日本 BaaS 全景"
translated_at: 2026-05-30T18:10:53.979Z
---

# 日本 BaaS 全景

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/minna-bank-baas-model|みんなの銀行 BaaS model]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

日本的 BaaS 并非单一的「银行 API 产品」。它至少分为 4 类:API 提供、合作伙伴支行、银行代理 / white-label 式的开户获客,以及专注于支付、账户划转、即时入金的 narrow BaaS。[[banking/minna-bank-baas-model|みんなの銀行]] 以面向 B2C 应用的嵌入式 BaaS 进行比较,[[JapanFG/gmo-aozora-net|GMO あおぞらネット銀行]] 偏向法人 / API / 嵌入式金融,[[JapanFG/ssnb|住信SBIネット銀行]] 则属 NEOBANK 型。

## Landscape map

| Type | What is embedded | Main value | Typical examples |
|---|---|---|---|
| API-provided banking | Account information, account transfer, payment instruction | External app UX improvement | みんなの銀行 API提供モデル, [[banking/quick-deposit-four-methods|OAuth quick deposit]] |
| Partner branch | Branded branch / account experience | Partner brand + banking relationship | [[banking/mercari-bank|Mercari Bank]], pixiv branch, DMM branch |
| NEOBANK / white-label bank | Bank account opened under partner proposition | Fuller embedded banking | [[JapanFG/ssnb|SSNB]] / NEOBANK type models |
| Corporate API bank | Business account, payment, transfer, accounting integration | SME / SaaS / platform operation | [[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]] adjacency |

## Strategic read

BaaS 对银行而言是获客战略,对平台而言是牌照杠杆战略。银行通过高频的非银行应用获得分销;平台无需成为吸收存款的银行即可获得银行功能。

日本特有的约束在于 UX 与法律地位并不同步移动。用户可能感觉某个交易市场、证券应用或零售应用已经成了银行,而实际的银行层仍归属于持牌银行。前端品牌、API 连接器、支付牌照、存款合约可以分别归属于不同的主体。

## Why Minna Bank matters

みんなの銀行 是一个清晰的案例,因为它公开地将 BaaS 定位为「+金融」,并将 API提供モデル 与 パートナー支店モデル 区分开来。其合作伙伴名单还显示,BaaS 已超出纯金融范畴,延伸至创意交易市场、人力资源、零售、保险、外汇、娱乐及 C2C 商务。

2025-12 Mercari 的上线尤为重要,因为 Mercari 拥有庞大的钱包 / 销售收益场景。如果 BaaS 能以低摩擦将非银行余额转化为银行存款,那么 BaaS 就不仅仅是一个引流渠道。

## Regulatory / operating constraints

| Constraint | Meaning |
|---|---|
| Banking license | Deposit-taking and bank account operations remain with licensed banks |
| Electronic payment agency | API-based account information and payment instruction may require registration |
| Funds transfer / prepaid instruments | Wallet balances and payment flows can sit outside the deposit bank |
| AML / fraud monitoring | Embedded UX does not remove bank-grade monitoring duties |
| Responsibility boundary | User-facing brand and regulated service provider may differ |

## Related

- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[JapanFG/gmo-aozora-net]]
- [[JapanFG/ssnb]]
- [[fintech/japan-financial-regulation]]

## Sources

- みんなの銀行: みんなのBaaS official service page.
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略.
- みんなの銀行: 提携サービス / BaaS overview.
- 金融庁: 免許・許可・登録等を受けている事業者一覧.

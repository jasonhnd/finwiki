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

## Wiki 路径

本条目位于 [[banking/INDEX|银行索引]]。可与 [[banking/minna-bank-baas-model|みんなの銀行 BaaS model]] 和 [[banking/cooperative-banking-japan|日本协同组织金融]] 配套阅读。

## TL;DR

日本的 BaaS 并非单一的「银行 API 产品」。它至少分为 4 类:API 提供、合作伙伴支行、银行代理 / white-label 式的开户获客,以及专注于支付、账户划转、即时入金的 narrow BaaS。[[banking/minna-bank-baas-model|みんなの銀行]] 以面向 B2C 应用的嵌入式 BaaS 进行比较,[[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行]] 偏向法人 / API / 嵌入式金融,[[regional-banks/ssnb|住信SBIネット銀行]] 则属 NEOBANK 型。

## 全景地图

| 类型 | 嵌入内容 | 主要价值 | 典型例子 |
|---|---|---|---|
| API 提供型银行 | 账户信息、账户划转、支付指令 | 改善外部应用的用户体验 | みんなの銀行 API 提供模型、[[banking/quick-deposit-four-methods|OAuth 快速入金]] |
| 合作伙伴支行 | 品牌化支行 / 账户体验 | 合作伙伴品牌 + 银行关系 | [[banking/mercari-bank|Mercari Bank]]、pixiv 支行、DMM 支行 |
| NEOBANK / 白标银行 | 在合作伙伴命题下开设银行账户 | 更完整的嵌入式银行体验 | [[regional-banks/ssnb|SSNB]] / NEOBANK 型模型 |
| 法人 API 银行 | 商业账户、支付、转账、会计集成 | 中小企业 / SaaS / 平台运营 | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] 邻接领域 |

## 战略解读

BaaS 对银行而言是获客战略,对平台而言是牌照杠杆战略。银行通过高频的非银行应用获得分销;平台无需成为吸收存款的银行即可获得银行功能。

日本特有的约束在于 UX 与法律地位并不同步移动。用户可能感觉某个交易市场、证券应用或零售应用已经成了银行,而实际的银行层仍归属于持牌银行。前端品牌、API 连接器、支付牌照、存款合约可以分别归属于不同的主体。

## みんなの銀行为何重要

みんなの銀行 是一个清晰的案例,因为它公开地将 BaaS 定位为「+金融」,并将 API提供モデル 与 パートナー支店モデル 区分开来。其合作伙伴名单还显示,BaaS 已超出纯金融范畴,延伸至创意交易市场、人力资源、零售、保险、外汇、娱乐及 C2C 商务。

2025-12 Mercari 的上线尤为重要,因为 Mercari 拥有庞大的钱包 / 销售收益场景。如果 BaaS 能以低摩擦将非银行余额转化为银行存款,那么 BaaS 就不仅仅是一个引流渠道。

## 监管与运营约束

| 约束 | 含义 |
|---|---|
| 银行牌照 | 吸收存款与银行账户运营仍归持牌银行承担 |
| 电子支付等代行业 | API 型账户信息取得和支付指令可能需要登记 |
| 资金转移 / 预付式支付工具 | 钱包余额和支付流可位于存款银行之外 |
| AML / 欺诈监测 | 嵌入式体验不免除银行级监测义务 |
| 责任边界 | 面向用户的品牌与受监管服务提供者可能不同 |

## Related

- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[payment-firms/gmo-aozora-net]]
- [[regional-banks/ssnb]]
- [[fintech/japan-financial-regulation]]

## Sources

- みんなの銀行: みんなのBaaS official service page.
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略.
- みんなの銀行: 提携サービス / BaaS overview.
- 金融庁: 免許・許可・登録等を受けている事業者一覧.

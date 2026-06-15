---
source: banking/baas-japan-landscape
source_hash: 5483848c42f6a179
lang: zh
status: machine
fidelity: ok
title: "日本 BaaS 全景"
translated_at: 2026-06-15T04:20:19.998Z
---

# 日本 BaaS 全景

## Wiki 导览

本词条归属于 [[banking/INDEX|banking index]]。请对照 [[banking/minna-bank-baas-model|みんなの銀行 BaaS model]] 阅读以获取同类 / 对比语境，并对照 [[banking/cooperative-banking-japan|Cooperative banking in Japan]] 了解更宏观的体系 / 监管边界。

## TL;DR

日本的 BaaS 并非单一的「银行 API 产品」。它至少分为 4 种类型：API 提供、合作伙伴支行、银行代理 / white-label 式的账户获取，以及专注于支付、账户划转、即时入金的 narrow BaaS。[[banking/minna-bank-baas-model|みんなの銀行]] 是面向 B2C 应用的嵌入式 BaaS，[[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行]] 偏向法人 / API / 嵌入式金融，[[regional-banks/ssnb|住信SBIネット銀行]] 则被作为 NEOBANK 型来比较。

## 全景图

| Type | What is embedded | Main value | Typical examples |
|---|---|---|---|
| API 提供型银行 | 账户信息、账户划转、支付指令 | 改善外部应用 UX | みんなの銀行 API提供モデル, [[banking/quick-deposit-four-methods|OAuth quick deposit]] |
| 合作伙伴支行 | 品牌化支行 / 账户体验 | 合作方品牌 + 银行关系 | [[banking/mercari-bank|Mercari Bank]], pixiv 支行, DMM 支行 |
| NEOBANK / white-label 银行 | 在合作方主张下开立的银行账户 | 更完整的嵌入式银行 | [[regional-banks/ssnb|SSNB]] / NEOBANK 型模式 |
| 法人 API 银行 | 企业账户、支付、划转、会计集成 | 中小企业 / SaaS / 平台运营 | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] 邻接领域 |

## 战略解读

对银行而言，BaaS 是一种获客策略；对平台而言，则是一种牌照杠杆策略。银行通过高频的非银行应用获得分发渠道；平台无需成为吸收存款的银行即可获得银行功能。

日本特有的约束在于，UX 与法律地位并不同步移动。用户可能感觉某个交易市场、证券应用或零售应用已经成为了一家银行，而实际的银行层仍然由持牌银行承担。前端品牌、API 连接器、支付牌照与存款合约可以分别归属于不同的实体。

## 为何 Minna Bank 很重要

みんなの銀行 是一个清晰的案例，因为它公开地将 BaaS 定位为「+金融」，并将 API提供モデル 与 パートナー支店モデル 区分开来。其合作伙伴名单也显示出 BaaS 正在超越纯粹的金融领域，进入创意市场、人力资源、零售、保险、外汇、娱乐以及 C2C 商务。

2025-12 的 Mercari 上线尤为重要，因为 Mercari 拥有庞大的钱包 / 销售款项语境。如果 BaaS 能够以低摩擦将非银行余额转化为银行存款，那么 BaaS 就不仅仅是一个引流渠道了。

## 监管 / 运营约束

| Constraint | Meaning |
|---|---|
| 银行牌照 | 吸收存款与银行账户运营仍由持牌银行承担 |
| 电子支付代理 | 基于 API 的账户信息与支付指令可能需要登记 |
| 资金划转 / 预付式支付手段 | 钱包余额与支付流可以处于存款银行之外 |
| 反洗钱 / 欺诈监控 | 嵌入式 UX 并不免除银行级别的监控义务 |
| 责任边界 | 面向用户的品牌与受监管的服务提供方可能不同 |

## 相关

- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[payment-firms/gmo-aozora-net]]
- [[regional-banks/ssnb]]
- [[fintech/japan-financial-regulation]]

## 来源

- みんなの銀行: みんなのBaaS 官方服务页面。
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略。
- みんなの銀行: 提携サービス / BaaS overview。
- 金融庁: 免許・許可・登録等を受けている事業者一覧。

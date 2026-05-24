---
title: Circle Arc 战略 · 发行方收回 50% 分成的 §501 终局
aliases: [issuer distributor incentive realignment arc strategy, Circle Arc rebalance, USDC self-L1 economics]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, circle, arc, coinbase, base, stablecoin-l1, vertical-integration]
sources: []
status: candidate
---

# Circle Arc 战略 · 发行方收回 50% 分成的 §501 终局


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Circle 2025.09 公布 Arc(自营 L1)的真正战略目标 = **在 Arc 上的 USDC 利息不需分给 Coinbase 50%** —— 不是技术问题 · 是经济问题。如果 USDC 在 Arc 上流通量从 $0 增长到 $5B · Circle 多保留的利息 = $5B × 4.5% × 50% = **$112.5M / 年** 纯增量收入(无需新发 USDC)。这是 stablecoin 发行方-分销方均衡重构的核心样本。

## Key facts

- Arc 2025.09 公布 · 2026.Q1-Q2 测试网 · 2026.Q4 主网预计 ^[extracted]
- Circle 利息 Coinbase 50% 分成 = $905M / 年(2024)是潜在收回目标 ^[extracted]
- Arc 上 $5B USDC = Circle 增量 $112.5M / 年(纯) ^[inferred]
- Arc 与 Circle 现有 CCTP 兼容 = Circle 自己掌控分销渠道 ^[extracted]
- Tempo / Codex / Plasma 已解决"为 USDC 优化的 L1"技术问题 = Arc 不是技术差异化 ^[inferred]

## Mechanism / How it works

**表面 vs 实际**:

| 表面叙事 | 实际战略 |
|---|---|
| 提供"为 USDC 优化的"L1 | 不是技术问题(Tempo / Codex 已解) |
| 链上 USDC 体验更好 | 是经济问题 —— **Arc 上的 USDC 利息不分给 Coinbase 50%** |
| 与 Circle 现有 CCTP 兼容 | Circle 自己掌控分销渠道 |

**三方均衡可能路径**:

| 路径 | Coinbase 损益 | Circle 损益 | 终局 |
|---|---|---|---|
| A. 现状维持 50/50 不变 | 维持 $305M/Q | Arc 单飞侵蚀 USDC on Base | 5 年内 Arc USDC > Base USDC · 分成自动重平衡 |
| B. 议价至 40/60 | 损 ~$60M/Q | 增 ~$60M/Q | 双方让步 · 维持联盟 |
| C. Coinbase 发 BASE token | 短期失 50% USDC 收入 | Arc 独占 USDC 增长 | Coinbase 退出 USDC 分销 |
| D. Circle 主动减 Arc 权重 | 维持 50% | 失去 Arc 议价杠杆 | 不可能(Circle 已上市需对股东) |

**最可能 = 路径 B(议价 40/60)或 A → B 的渐进过渡**。

**Coinbase 的对应选择**:不发 BASE token = 维持 USDC 主分销但被 Arc 持续侵蚀;发 BASE token = 激进重构 + 启动自有 stablecoin 战场;第三路径 = 与 Circle 重新议价比例换取 Coinbase 不发 token。

## Origin & evolution

2018-2024 = Coinbase + Circle 联盟稳定 · 50/50 维持。2024.Q4 = Stripe / Visa / SC 入场 · 多家稳定币 L1 项目浮现([[fintech/protocol-hedge-strategy-stripe-pattern|Tempo]] / Codex / Plasma) · 改变 Circle 的 outside option 集合。2025.07 = GENIUS Act §501 标准化合规 · Circle 不再需要 Coinbase 的"合规背书"。2025.09 = Arc 公布 = Circle 用"垂直整合"杠杆迫使 Coinbase 重新议价。2026 Arc 主网启动 = 议价进入实战阶段,并需要与 [[systems/cctp-v2-overview|CCTP v2]] 桥接以稀释 Base 单链锁定。

**历史类比**:Visa / Mastercard 与发卡行的 interchange 重新议价 · Apple ↔ Google 搜索默认协议(2024 反垄断) · 微软 ↔ IBM OS 协议(1990s)。**核心规律**:分销方占总价值 50% 的协议在监管 / 技术变革窗口必然重新议价。

## Counterpoints

主张"Arc 会失败":Circle 没有 L1 运营经验 · validator 招募难 · 与现有 Coinbase / Base 用户基础脱钩 · 5 年内 USDC on Arc 可能只达 $1-2B(不足以重设 50/50)。监管(SEC / OCC)可能介入垂直整合(Circle 同时是发行方 + L1 运营方 = conflict of interest)。Coinbase 可能反向加速 BASE token 启动 = 路径 C 反噬 Circle,而 [[fintech/cbbtc-institutional-btc-wrapper|cbBTC 闭环]] 已经为 Base 自循环现金流提供了原型。

## Open questions

Arc 主网启动后 12 个月 USDC on Arc volume?Coinbase 反向是否会发 BASE token(决策窗 ≤ 18 月)?Circle ↔ Coinbase 是否会启动公开仲裁?监管(OCC / SEC)是否介入"发行方-自有 L1" 双重身份?Tempo / Codex 是否会借机抢 USDC distribution 份额?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|发行方-分销方 50/50 模型]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币公链 Token 策略三态]]
- [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮 · 概览]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密文化分离]]
- [[fintech/portfolio-winner-structure-arm-analog|组合赢家结构 · ARM 类比]]
<!-- /wiki-links:managed -->

## Sources

- Circle Arc 公告(2025.09)· Coinbase Q1 2025 财报

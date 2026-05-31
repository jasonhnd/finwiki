---
source: fintech/issuer-distributor-incentive-realignment-arc-strategy
source_hash: 219c32ad91403987
lang: zh
status: machine
fidelity: ok
title: "Circle Arc 战略 · 发行方收回 50% 分发权 §501  终局"
translated_at: 2026-05-31T06:16:15.663Z
---

# Circle Arc 战略 · 发行方收回 50% 分发权 §501  终局

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Circle 于 2025.09  发布的 Arc（自运营 L1）的真正战略目标 = **Arc 上的 USDC 利息无需向 Coinbase 分配 50%** —— 这是经济问题而非技术问题。若 USDC 在 Arc 上将流通量从 $0  增至 $5B，Circle 可额外保留的利息 = $5B × 4.5% × 50% = **$112.5M/年**的净增收（无需新增 USDC 发行量）。这是稳定币发行方与分发方之间均衡重构的核心样本。

## Key facts

- Arc 2025.09  发布 · 2026.Q1-Q2  测试网 · 2026.Q4  主网预定 ^[extracted]
- Circle 向 Coinbase 分配 50% 利息 = $905M/年（2024），是回收目标的潜在规模 ^[extracted]
- Arc 与 Circle 现有 CCTP 兼容 = Circle 自主控制分发渠道 ^[extracted]

## Mechanism / How it works

**表面叙事 vs 实际战略**：

| 表面叙事 | 实际战略 |
|---|---|
| 提供"USDC 优化"L1  | 不是技术问题（Tempo / Codex 已解决） |
| 提升链上 USDC 体验 | 经济问题 —— **Arc 上 USDC 利息无需向 Coinbase 分配 50%** |
| 与 Circle 现有 CCTP 兼容 | Circle 自主控制分发渠道 |

**三方均衡的可能路径**：

| 路径 | Coinbase 损益 | Circle 损益 | 终局 |
|---|---|---|---|
| A. 维持现状（50/50 不变） | 维持 $305M/季 | Arc 单独侵蚀 Base 上的 USDC | 5  年内 Arc USDC > Base USDC · 分配自动再均衡 |
| B. 就 40/60  展开谈判 | ~$60M/季 减少 | ~$60M/季 增加 | 双方妥协 · 联盟维持 |
| C. Coinbase 发行 BASE 代币 | 短期损失 USDC 收入的 50% | Arc 独占 USDC 增长 | Coinbase 退出 USDC 分发 |
| D. Circle 主动降低 Arc 比重 | 维持 50% | 失去 Arc 谈判筹码 | 不可能（Circle 已上市，负有股东责任） |

**最有可能 = 路径 B（就 40/60  谈判）或 A → B 的渐进过渡**。

**Coinbase 的应对选择**：不发行 BASE 代币 = 维持 USDC 主要分发，同时持续遭受 Arc 侵蚀。发行 BASE 代币 = 激进重构 + 启动自身稳定币战线。第三条路径 = 与 Circle 就分配比率重新谈判，换取 Coinbase 不发行代币的承诺。

## Origin & evolution

2018-2024  = Coinbase + Circle 联盟稳定 · 维持 50/50 。2024.Q4  = Stripe / Visa / SC 入场 · 多个稳定币 L1  项目浮现（[[fintech/protocol-hedge-strategy-stripe-pattern|Tempo]] / Codex / Plasma）· 改变 Circle 的外部备选集合。2025.07  = GENIUS Act §501  合规标准化 · Circle 不再需要 Coinbase 的"合规背书"。2025.09  = Arc 发布 = Circle 使用"垂直整合"筹码迫使 Coinbase 重新谈判。2026  Arc 主网上线 = 谈判进入实战阶段，需要通过与 [[systems/cctp-v2-overview|CCTP v2]] 的桥接来稀释 Base 单链锁定。

**历史类比**：Visa/万事达卡与发卡行之间的交换费重新谈判 · Apple ↔ Google 搜索默认合同（2024  反垄断）· 微软 ↔ IBM OS 合同（1990 年 年代）。**核心规律**：分发侧占据总价值 50% 的协议，在监管/技术变革窗口期必然被重新谈判。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|発行体・分配者 50/50 モデル]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン・トークン戦略のトリレンマ]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産相互ロックのフライホイール · 概要]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 · ARM アナロジー]]
<!-- /wiki-links:managed -->

## Sources

- Circle Arc 公告（2025.09）· Coinbase Q1 2025  财报

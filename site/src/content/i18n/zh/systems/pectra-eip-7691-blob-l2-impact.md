---
source: systems/pectra-eip-7691-blob-l2-impact
source_hash: bcac0483b6035a63
lang: zh
status: machine
fidelity: ok
title: "Pectra EIP-7691  · blob 翻倍与 L2 经济连锁"
translated_at: 2026-06-01T04:15:40.138Z
---

# Pectra EIP-7691  · blob 翻倍与 L2 经济连锁

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/pectra-upgrade-overview|Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧]] 阅读同类 / 对比背景，并结合 [[fintech/INDEX|fintech index]] 理解更广的系统 / 监管边界。

## Key facts

- Dencun 后 blob target=3  / max=6  ^[extracted]
- Pectra 后 target=6  / max=9（翻倍）^[extracted]
- L2 calldata 成本约下降 -50% ^[extracted]
- Base / Arbitrum / Optimism 的用户 gas 同步下降 ^[extracted]
- Stripe Base 上的 USDC settlement / Coinbase Smart Wallet 体验改善 ^[extracted]
- L2 与 L1 之间的经济竞争加剧 · 资本在两端流动 ^[extracted]

## Mechanism / How it works

Dencun（2024-03）引入的 EIP-4844 blob —— 是专为 rollup 的 data availability 设计的临时存储槽，价格独立于普通 calldata，大幅降低了 L2 提交成本。但 Dencun 初期的 target=3 blob/block（每 12 秒）很快被 Base + Arbitrum + Optimism 等高吞吐 L2 填满。**Pectra EIP-7691 将 target / max 翻倍** —— target=6  / max=9 ，使 L2 在不发生 blob fee spike 的情况下承载 2 倍数据量，直接结果是 L2 calldata cost -50%。Base 上的 Stripe USDC settlement 与 Coinbase Smart Wallet 的 sub-cent 体验进一步改善。Sequencer 收入会因 gas 单价下降而减少，但可由用户活动上升抵消，净效应取决于弹性。同时，它与 EIP-7251 共同构成“L1 增厚（2048 ETH staking）+ L2 扩张（blob 翻倍）”的双轨。

## Origin & evolution

2024-03 Dencun 上线 · EIP-4844 blob 是 rollup-centric roadmap 的第一步。自 2024-Q2 起，Base / Arbitrum / Optimism 等 L2 在 blob fee market 中受压 · 频繁达到 max=6  → blob fee spike → L2 用户感受到的 gas 上升。EthMagicians 上加速讨论 EIP-7691 的 target 翻倍。2024-Q3-Q4  ACD 确认将 7691 纳入 Pectra bundle。2025-Q2 mainnet 激活后数周内，Base / Arbitrum / Optimism 的用户实际 gas 下降 30-50%。Stripe 在 Base 上 USDC settlement 的经济性持续改善（与 [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] 的 L2 上流量分布相对）· Coinbase Smart Wallet 实现“几乎零 gas”体验。下一步 Fusaka（计划 2026-Q4 ）中，PeerDAS 将 blob 与 P2P 广播进一步 decouple，理论上还能再扩大数倍。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-upgrade-overview|Pectra アップグレード総覧]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec
- EthMagicians EIP-7691 discussion
- EIP-7691 — https://eips.ethereum.org/EIPS/eip-7691

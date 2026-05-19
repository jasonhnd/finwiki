---
title: Pectra EIP-7691 · blob 翻倍与 L2 经济连锁
aliases: [pectra-eip-7691-blob-l2-impact, eip-7691, blob-target-six, l2-gas-50-percent-cut]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, ethereum, l2, eip-7691, blob, base, arbitrum, optimism, eip-4844]
sources: []
status: candidate
---

# Pectra EIP-7691 · blob 翻倍与 L2 经济连锁

> [!info] TL;DR
> EIP-7691 把 Dencun 引入的 blob 容量从 target=3 / max=6 提升到 target=6 / max=9 · L2 calldata 成本直接 -50%。Base / Arbitrum / Optimism 用户 gas 进一步压低,sequencer 收入随活跃度上升但单位下降,Stripe Base 上的 USDC settlement 与 Coinbase Smart Wallet 体验同步改善 · 是 Vitalik L2 战略的延续动作。

## Key facts

- Dencun 后 blob target=3 / max=6 ^[extracted]
- Pectra 后 target=6 / max=9(翻倍) ^[extracted]
- L2 calldata 成本下降约 -50% ^[extracted]
- Base / Arbitrum / Optimism 用户 gas 同步下降 ^[extracted]
- Stripe Base 上 USDC settlement / Coinbase Smart Wallet 体验改善 ^[extracted]
- L2 与 L1 经济竞争加剧 · 资本两端流动 ^[extracted]
- 与 EIP-7251 形成 "L1 厚化 + L2 扩容" 双轨 ^[inferred]

## Mechanism / How it works

Dencun(2024-03)引入 EIP-4844 blob —— 专为 rollup data availability 设计的临时存储槽,价格独立于普通 calldata,大幅降低 L2 提交成本。但 Dencun 初始 target=3 blob/block(每 12 秒)很快被 Base + Arbitrum + Optimism 等高 throughput L2 占满。**Pectra EIP-7691 把 target / max 双倍化** —— target=6 / max=9 意味着 L2 在没有 blob fee spike 的情况下可承载 2 倍数据量,直接结果是 L2 calldata cost -50%。Base 上的 Stripe USDC settlement 与 Coinbase Smart Wallet sub-cent 体验进一步改善。Sequencer 收入因 gas 单价下降但用户活跃度上升,净效应取决于弹性。同时与 EIP-7251 共同构成 "L1 厚化(2048 ETH staking)+ L2 扩容(blob 翻倍)" 双轨。

## Origin & evolution

2024-03 Dencun 上线 · EIP-4844 blob 是 rollup-centric roadmap 的第一步。2024-Q2 起 Base / Arbitrum / Optimism 等 L2 在 blob fee market 上挤压 · 经常达到 max=6 → blob fee spike → L2 用户感受 gas 上升。EthMagicians 讨论加速到 EIP-7691 target 翻倍。2024-Q3-Q4 ACD 敲定 Pectra bundle 含 7691。2025-Q2 主网激活后数周内 Base / Arbitrum / Optimism 用户实际 gas 下降 30-50%。Stripe 在 Base 上的 USDC settlement 经济性继续改善 · Coinbase Smart Wallet 实现 "几乎零 gas" 体验。下一步 Fusaka(2026-Q4 计划)PeerDAS 进一步把 blob 解耦 P2P 广播 · 理论上可再翻数倍。

## Counterpoints

- 7691 的 -50% gas 优势可能很快被 L2 用户增长吃完 · 长期价格仍向 blob fee 调节
- L2 经济压低 sequencer 收入 · 但 sequencer 集中度反而上升(中心化压力)
- Vitalik "L2 承载 99% 用户" 战略可能反向蚕食 L1 安全预算(staking yield 下降)
- blob 容量翻倍对非 rollup 应用(如 DA 备份)的影响未充分讨论

## Open questions

- 2027 Fusaka PeerDAS 是否会让 blob 容量再 10×?
- L2 之间是否会因为 blob 共享而产生 "blob fee 战争"(谁抢得多)?
- Stripe / Coinbase 在 Base 上的 stablecoin settlement 是否会因 L1 staking yield 上升而搬回 L1?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-upgrade-overview|Pectra 升级总览]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 机构 staking]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分叉]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec
- EthMagicians EIP-7691 discussion

---
source: systems/threshold-bft-consensus-rust-implementations
source_hash: eea3ec7815d58e53
lang: zh
status: machine
fidelity: ok
title: "Threshold BFT 共识 Rust 化潮流"
translated_at: 2026-06-01T04:15:40.130Z
---
# Threshold BFT 共识 Rust 化潮流

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT 架构本质分歧（mempool 抽象之争）]] 阅读，以获得同业 / 对比语境；并对照 [[fintech/INDEX|fintech index]] 阅读，以了解更广泛的系统 / 监管边界。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|Token 策略三态博弈]]
- [[systems/post-quantum-blockchain-day1-integration|抗量子签名 day-1 集成]]
<!-- /wiki-links:managed -->

## 来源

- Malachite — Flexible BFT consensus engine in Rust（采用 Arc）— https://github.com/informalsystems/malachite
- Quint — 基于 TLA 的可执行规范语言（与 Malachite co-design）— https://github.com/informalsystems/quint
- Tempo 官方网站（采用 Threshold Simplex 的支付 L1）— https://tempo.xyz/
- HotStuff: BFT Consensus in the Lens of Blockchain（Chain-BFT 的理论基础）— https://arxiv.org/abs/1803.05069

---
title: Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）
aliases: [Threshold BFT Rust, Malachite, Threshold Simplex, BLS aggregate consensus]
domain: systems
kind: knowledge
topic: threshold-bft-consensus-rust-implementations
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [systems, blockchain, consensus, BFT, Rust, BLS]
status: active
sources:
  - https://github.com/informalsystems/malachite
  - https://github.com/informalsystems/quint
  - https://tempo.xyz/
  - https://arxiv.org/abs/1803.05069
---

# Threshold BFT 共识 Rust 化潮流


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT 架构本质分歧（mempool 抽象之争）]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|Token 策略三态博弈]]
- [[systems/post-quantum-blockchain-day1-integration|抗量子签名 day-1 集成]]
<!-- /wiki-links:managed -->

## Sources

- Malachite — Flexible BFT consensus engine in Rust（Arc 採用）— https://github.com/informalsystems/malachite
- Quint — TLA ベースの実行可能仕様言語（Malachite との co-design）— https://github.com/informalsystems/quint
- Tempo 公式サイト（Threshold Simplex を採用する決済 L1）— https://tempo.xyz/
- HotStuff: BFT Consensus in the Lens of Blockchain（Chain-BFT の理論基盤）— https://arxiv.org/abs/1803.05069

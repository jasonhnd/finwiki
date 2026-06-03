---
source: systems/threshold-bft-consensus-rust-implementations
source_hash: eea3ec7815d58e53
lang: ja
status: machine
fidelity: ok
title: "Threshold BFT コンセンサスの Rust 化潮流"
translated_at: 2026-06-03T01:06:46.357Z
---
# Threshold BFT コンセンサスの Rust 化潮流

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照文脈として [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT 架构本质分歧（mempool 抽象之争）]] を参照し、より広いシステム上および規制上の境界については [[fintech/INDEX|fintech index]] とあわせて読む。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|Token 策略三态博弈]]
- [[systems/post-quantum-blockchain-day1-integration|抗量子签名 day-1 集成]]
<!-- /wiki-links:managed -->

## 出典

- Malachite — Flexible BFT consensus engine in Rust（Arc 採用）— https://github.com/informalsystems/malachite
- Quint — TLA ベースの実行可能仕様言語（Malachite との co-design）— https://github.com/informalsystems/quint
- Tempo 公式サイト（Threshold Simplex を採用する決済 L1）— https://tempo.xyz/
- HotStuff: BFT Consensus in the Lens of Blockchain（Chain-BFT の理論基盤）— https://arxiv.org/abs/1803.05069

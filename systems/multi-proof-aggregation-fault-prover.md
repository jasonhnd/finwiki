---
title: 多証明システム集約 fault prover アーキテクチャ
aliases: [multi-proof aggregation, base fault prover three-track, TEE ZK optimistic aggregate, proofBytes type tag]
domain: systems
kind: knowledge
topic: multi-proof-aggregation-fault-prover
created: 2026-05-16
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-16
confidence: certain
tags: [systems, rollup, fault-proof, zk, tee, optimistic, base, l2, rust]
status: candidate
sources:
  - https://docs.optimism.io/op-stack/fault-proofs/explainer
  - https://specs.optimism.io/fault-proof/index.html
  - https://github.com/ethereum-optimism/optimism
---

# 多証明システム集約 fault prover アーキテクチャ


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|BFT Rust 実装]]
- [[systems/post-quantum-blockchain-day1-integration|耐量子 day-1]]
- [[systems/formal-spec-implementation-codesign|形式仕様 co-design]]
<!-- /wiki-links:managed -->

## Sources

- Optimism「Fault proofs explainer」（modular multi-proof system の基盤）— https://docs.optimism.io/op-stack/fault-proofs/explainer
- OP Stack Fault Proof 仕様（Program / VM / Interactive Dispute Game）— https://specs.optimism.io/fault-proof/index.html
- ethereum-optimism/optimism モノレポ（op-challenger / fault-proof 実装）— https://github.com/ethereum-optimism/optimism

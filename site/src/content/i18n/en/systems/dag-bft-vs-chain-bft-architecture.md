---
source: systems/dag-bft-vs-chain-bft-architecture
source_hash: 7c5e6d5a9a523d5b
lang: en
status: machine
fidelity: ok
title: "DAG-BFT vs Chain-BFT: The Essential Architectural Split"
translated_at: 2026-06-01T04:15:40.163Z
---

# DAG-BFT vs Chain-BFT: The Essential Architectural Split


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it with [[fintech/INDEX|fintech index]] for adjacent context and [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode forensic — 3 層 verify 技術]] for the broader system boundary.

> [!info] TL;DR
> Modern BFT consensus algorithms split into 2  major schools: **Chain-BFT** (HotStuff / Tendermint / Threshold Simplex / Malachite) chains blocks, while **DAG-BFT** (Narwhal / Bullshark / Mysticeti) promotes the mempool to a first-class consensus citizen. **The essential split is not performance, but how the mempool is abstracted** — Chain-BFT is suitable for settlement scenarios (audit-friendly), while DAG-BFT is suitable for high-throughput scenarios (100k+ TPS). Tempo and Arc both adopt Chain-BFT.

**Comparison of the 2  major schools**:

| Item | Chain-BFT | DAG-BFT |
|---|---|---|
| Representative algorithms | HotStuff, Tendermint, **Threshold Simplex (Tempo)**, **Malachite (Arc)** | Narwhal, Bullshark, **Mysticeti (Sui)** |
| Data structure | Chain + view change | DAG + total order extraction |
| Mempool abstraction | secondary (leader gather → propose) | **first-class** (mempool = consensus) |
| Time complexity | O(n) per block | O(1) per block (asynchronous) |
| Throughput | About 10K TPS | **100K+ TPS** |
| Finality | 1-2  seconds | **sub-second** |
| Audit / debugging | **Simple** (linear history) | Complex (DAG traversal) |
| Application scenario | **Settlement, stablecoins, institutional finance** | High-frequency trading, games, DEX |

**Why Tempo and Arc chose Chain-BFT**:

1. **Audit-friendly**: in settlement scenarios, auditability is required for each transaction 1 件, and unfolding DAG history is too complex
2. **TPS is already sufficient**: stablecoin settlement does not require 100K+ TPS (Visa globally is about 24K TPS)
3. **High academic maturity**: the papers and implementations of HotStuff and Tendermint have both been validated at large scale
4. **Formal specification verification is easier to implement**: [[systems/threshold-bft-consensus-rust-implementations|Malachite + Quint co-design]] is more direct under the Chain-BFT system

**Scenarios where DAG-BFT is advantaged**:

- High-TPS L1s such as Sui / Aptos (contrast with [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社対照]] on each company's L1  rollout)
- Solana-like designs (PoH + Tower BFT is DAG-flavored)
- Future AI agent micropayment scenarios (millions of sub-cent transactions per second)

**Academic frontier**:

- **Mysticeti (Sui, 2024)**: achieves sub-second finality with DAG-BFT
- **Bullshark (2022, Aptos / Sui)**: formalizes the first-class mempool idea
- **Threshold Simplex (2025, Tempo)**: engineering convergence of Chain-BFT + BLS aggregation
- **Malachite (2025, Arc)**: Chain-BFT + Quint formal verification paradigm

**Paper index**:

- HotStuff: Yin et al. 2019 (https://arxiv.org/abs/1803.05069)
- Narwhal & Bullshark: Spiegelman et al. 2022

- Mysticeti: Babel et al. 2024

- Threshold Simplex: Tempo blog / Paradigm research
- Malachite: Informal Systems 2025



**Application decision framework**:

- **Settlement / clearing** → Chain-BFT (contrast with institutional chains' preference for linear auditability in [[fintech/protocol-renewal-trigger-as-event-anchor|protocol renewal trigger]])
- **Games / high frequency** → DAG-BFT
- **General-purpose L1** → either can work (depending on ecosystem goals)


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT コンセンサス Rust 化]]
- [[systems/post-quantum-blockchain-day1-integration|耐量子署名 day-1 統合]]
<!-- /wiki-links:managed -->

## Sources

- HotStuff: BFT Consensus in the Lens of Blockchain (Yin et al. 2019) — https://arxiv.org/abs/1803.05069

- Narwhal and Tusk: A DAG-based Mempool and Efficient BFT Consensus (Danezis et al. 2022) — https://arxiv.org/abs/2105.11827

- Bullshark: DAG BFT Protocols Made Practical (Spiegelman et al. 2022) — https://arxiv.org/abs/2201.05677

- Mysticeti: Reaching the Limits of Latency with Uncertified DAGs (Babel et al. 2024) — https://arxiv.org/abs/2310.14821

- Malachite — Flexible BFT consensus engine in Rust (Chain-BFT implementation adopted by Arc) — https://github.com/informalsystems/malachite
- Tempo official site (Chain-BFT settlement L1 / Threshold Simplex) — https://tempo.xyz/

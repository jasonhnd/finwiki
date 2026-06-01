---
source: systems/dag-bft-vs-chain-bft-architecture
source_hash: 7c5e6d5a9a523d5b
lang: zh
status: machine
fidelity: ok
title: "DAG-BFT vs Chain-BFT 架构的本质分歧"
translated_at: 2026-06-01T04:15:40.162Z
---

# DAG-BFT vs Chain-BFT 架构的本质分歧


## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请结合 [[fintech/INDEX|fintech index]] 阅读相邻背景，并用 [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode forensic — 3 層 verify 技術]] 理解更广泛的系统边界。

> [!info] TL;DR
> 现代 BFT 共识算法分为 2 大流派：**Chain-BFT**（HotStuff / Tendermint / Threshold Simplex / Malachite）将 block 链式化，**DAG-BFT**（Narwhal / Bullshark / Mysticeti）将 mempool 提升为 first-class consensus citizen。**本质分歧不在性能，而在 mempool 的抽象方法** — Chain-BFT 适合结算场景（审计友好），DAG-BFT 适合高吞吐场景（100k+ TPS）。Tempo 与 Arc 均采用 Chain-BFT。

**2 大流派比较**：

| 项目 | Chain-BFT | DAG-BFT |
|---|---|---|
| 代表算法 | HotStuff, Tendermint, **Threshold Simplex (Tempo)**, **Malachite (Arc)** | Narwhal, Bullshark, **Mysticeti (Sui)** |
| 数据结构 | 链 + view change | DAG + total order extraction |
| Mempool 抽象 | secondary（leader gather → propose）| **first-class**（mempool = consensus）|
| 时间复杂度 | O(n) per block | O(1) per block（异步）|
| 吞吐量 | 约 10K TPS | **100K+ TPS** |
| 最终性 | 1-2 秒 | **亚秒级** |
| 审计 / 调试 | **简单**（线性 history）| 复杂（DAG traversal）|
| 适用场景 | **结算、稳定币、机构金融** | 高频交易、游戏、DEX |

**Tempo 和 Arc 选择 Chain-BFT 的理由**：

1. **审计友好**：在结算场景中，需要对每笔交易 1 件 具备可审计性，DAG history 的展开过于复杂
2. **TPS 已经足够**：稳定币结算不需要 100K+ TPS（Visa 全球约 24K TPS）
3. **学术成熟度高**：HotStuff 和 Tendermint 的论文与实现均已大规模验证
4. **形式化规格验证更容易实现**：[[systems/threshold-bft-consensus-rust-implementations|Malachite + Quint co-design]] 在 Chain-BFT 体系下更直接

**DAG-BFT 占优的场景**：

- Sui / Aptos 等 high-TPS L1（与 [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社対照]] 中各公司的 L1 展开形成对照）
- 类 Solana 设计（PoH + Tower BFT 带有 DAG 风格）
- 未来 AI agent 微支付场景（每秒数百万笔 sub-cent transaction）

**学术前沿**：

- **Mysticeti (Sui, 2024)**：以 DAG-BFT 实现亚秒级 finality
- **Bullshark (2022, Aptos / Sui)**：first-class mempool 思想的正式化
- **Threshold Simplex (2025, Tempo)**：Chain-BFT + BLS aggregation 的工程收敛
- **Malachite (2025, Arc)**：Chain-BFT + Quint formal verification 范式

**论文索引**：

- HotStuff: Yin et al. 2019 (https://arxiv.org/abs/1803.05069)
- Narwhal & Bullshark: Spiegelman et al. 2022

- Mysticeti: Babel et al. 2024

- Threshold Simplex: Tempo blog / Paradigm research
- Malachite: Informal Systems 2025



**适用判断框架**：

- **结算 / 清算** → Chain-BFT（与 [[fintech/protocol-renewal-trigger-as-event-anchor|protocol renewal trigger]] 中机构链对线性可审计性的偏好形成对照）
- **游戏 / 高频** → DAG-BFT
- **通用 L1** → 两者皆可（取决于生态系统目标）


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT コンセンサス Rust 化]]
- [[systems/post-quantum-blockchain-day1-integration|耐量子署名 day-1 統合]]
<!-- /wiki-links:managed -->

## Sources

- HotStuff: BFT Consensus in the Lens of Blockchain（Yin et al. 2019）— https://arxiv.org/abs/1803.05069

- Narwhal and Tusk: A DAG-based Mempool and Efficient BFT Consensus（Danezis et al. 2022）— https://arxiv.org/abs/2105.11827

- Bullshark: DAG BFT Protocols Made Practical（Spiegelman et al. 2022）— https://arxiv.org/abs/2201.05677

- Mysticeti: Reaching the Limits of Latency with Uncertified DAGs（Babel et al. 2024）— https://arxiv.org/abs/2310.14821

- Malachite — Flexible BFT consensus engine in Rust（Arc 采用的 Chain-BFT 实现）— https://github.com/informalsystems/malachite
- Tempo 官方网站（Chain-BFT 结算 L1 / Threshold Simplex）— https://tempo.xyz/

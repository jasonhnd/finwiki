---
title: DAG-BFT vs Chain-BFT 架构本质分歧（mempool 抽象之争）
aliases: [DAG BFT, chain BFT, mempool abstraction, Bullshark Narwhal]
domain: systems
kind: framework
topic: dag-bft-vs-chain-bft-architecture
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-05-13
review_by: 2026-11-13
confidence: certain
tags: [systems, blockchain, BFT, consensus, mempool, architecture]
status: candidate
sources: []
---

# DAG-BFT vs Chain-BFT 架构本质分歧


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it with [[fintech/INDEX|fintech index]] for adjacent context and [[security/bytecode-forensic-three-tier-verify|智能合约 bytecode forensic — 三层 verify 技术]] for the broader system boundary.

> [!info] TL;DR
> 现代 BFT 共识算法分为两大流派:**Chain-BFT**（HotStuff / Tendermint / Threshold Simplex / Malachite）将 block 链化,**DAG-BFT**（Narwhal / Bullshark / Mysticeti）将 mempool 升格为 first-class consensus citizen。**本质分歧不在性能而在 mempool 抽象方式** —— Chain-BFT 适合支付场景（审计友好）,DAG-BFT 适合高吞吐场景（100k+ TPS）。Tempo 与 Arc 均选择 Chain-BFT。

**两大流派对比**：

| 维度 | Chain-BFT | DAG-BFT |
|---|---|---|
| 代表算法 | HotStuff, Tendermint, **Threshold Simplex (Tempo)**, **Malachite (Arc)** | Narwhal, Bullshark, **Mysticeti (Sui)** |
| 数据结构 | 链 + view change | DAG + total order extraction |
| Mempool 抽象 | secondary（leader gather → propose）| **first-class**（mempool = consensus）|
| 时间复杂度 | O(n) per block | O(1) per block（异步）|
| 吞吐量 | 约 10K TPS | **100K+ TPS** |
| 最终性 | 1-2 秒 | **亚秒级** |
| 审计与调试 | **简单**（线性 history）| 复杂（DAG 遍历）|
| 适用场景 | **支付、稳定币、机构金融** | 高频交易、游戏、DEX |

**Tempo 与 Arc 选择 Chain-BFT 的原因**：

1. **审计友好**:支付场景下每笔 transaction 都需要可审计,DAG 历史展开过于复杂
2. **TPS 已经够用**:稳定币支付不需要 100K+ TPS（Visa 全球约 24K TPS）
3. **学术成熟度高**:HotStuff 与 Tendermint 的论文与实现均已经过大规模验证
4. **形式化验证更易实现**:[[systems/threshold-bft-consensus-rust-implementations|Malachite + Quint co-design]] 在 Chain-BFT 体系下更为直接

**DAG-BFT 的优势场景**：

- Sui / Aptos 等 high-TPS L1(对照 [[exchanges/global-dex-major-five-comparison|global DEX 主流五家对照]] 中各家在不同 L1 的部署)
- Solana 类似设计（PoH + Tower BFT 属于 DAG-flavored）
- 未来 AI agent 微支付场景（每秒数百万笔 sub-cent transaction）

**学术前沿**：

- **Mysticeti (Sui, 2024)**:DAG-BFT 实现亚秒 finality
- **Bullshark (2022, Aptos / Sui)**:first-class mempool 思想的正式化
- **Threshold Simplex (2025, Tempo)**:Chain-BFT + BLS aggregation 工程收敛
- **Malachite (2025, Arc)**:Chain-BFT + Quint formal verification 范式

**论文索引**：

- HotStuff: Yin et al. 2019 (https://arxiv.org/abs/1803.05069)
- Narwhal & Bullshark: Spiegelman et al. 2022
- Mysticeti: Babel et al. 2024
- Threshold Simplex: Tempo blog / Paradigm research
- Malachite: Informal Systems 2025

**适用判断框架**：

- **支付 / 结算** → Chain-BFT(对照 [[fintech/protocol-renewal-trigger-as-event-anchor|protocol renewal trigger]] 中机构链对线性可审计性的偏好)
- **游戏 / 高频** → DAG-BFT
- **通用 L1** → 两者皆可（取决于生态目标）


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化]]
- [[systems/post-quantum-blockchain-day1-integration|抗量子签名 day-1 集成]]
<!-- /wiki-links:managed -->

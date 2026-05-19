---
title: 多证明系统聚合 fault prover 架构
aliases: [multi-proof aggregation, base fault prover three-track, TEE ZK optimistic aggregate, proofBytes type tag]
domain: systems
kind: knowledge
topic: multi-proof-aggregation-fault-prover
created: 2026-05-16
last_updated: 2026-05-16
last_tended: 2026-05-16
review_by: 2026-11-16
confidence: certain
tags: [systems, rollup, fault-proof, zk, tee, optimistic, base, l2, rust]
status: candidate
sources: []
---

# 多证明系统聚合 fault prover 架构

> [!info] TL;DR
> Rollup 的 fault prover 系统从"单一证明范式"演进到"**多证明聚合 + 单字节 type tag 路由**"。Base Azul Rust 客户端在 `aggregate_verifier.rs` 通过 `proofBytes[0]` 区分 TEE（type 0）+ ZK（type 1），实现"多证明并行 + 渐进信任迁移"。这是 Optimistic Rollup 向 ZK-Optimistic 过渡的工程范式。

**核心架构**：

```
                  L1 verifier 合约
                       |
                proofBytes[0] → type tag 路由
                /      |      \
            type 0   type 1   type N
              ↓        ↓        ↓
            TEE       ZK    Optimistic
          (SGX/TDX) (ZK-EVM) (interactive)
```

**Base 三轨实装（2026-05）**：

| Type | 证明体 | 信任假设 | 验证延迟 | 用途 |
|---|---|---|---|---|
| 0 | TEE | Intel / AMD 硬件 | 即时 | 快速 finality |
| 1 | ZK | crypto + circuit | ~分钟 | 强保证 finality |
| (2 预留) | Optimistic | 7 天挑战 | 7 天 | fallback / 极端情况 |

**实现代码定位**：

- 主 verifier 在 `crates/proof/contracts/src/aggregate_verifier.rs`
- 类型 dispatch 通过 `proofBytes[0]` 第一个字节决定
- 109 个 Rust crate 中 fault prover 占 12 个 crate

**多证明聚合优势**：

1. **并行验证**：多个证明体并行运行，最快返回的优先 finality
2. **渐进信任迁移**：早期依赖 TEE 快速 finality，ZK 成熟后切换为主
3. **抗证明体漏洞**：单一证明体被破解时仍有 fallback
4. **审计粒度**：每个证明体独立审计 + 整体聚合合约审计

**与单证明范式对比**：

| 范式 | 代表 | 优势 | 劣势 |
|---|---|---|---|
| 纯 Optimistic | Arbitrum / Optimism 早期 | 简单 | 7 天 finality |
| 纯 ZK | zkSync / Starknet / Scroll | 即时 finality | 证明开销高 |
| 纯 TEE | Phala / Oasis | 即时 + 廉价 | 硬件信任假设 |
| **多证明聚合** | **Base Azul / Polygon AggLayer** | **三者优势叠加** | **架构复杂度高** |

**触发条件**：

- Rollup 规模足够大（年 TVL > $10B），单一证明体故障代价不可接受
- 工程团队具备多证明体集成能力（Rust / Cairo / Circom 都需要）
- L1 gas 成本可承受多证明聚合 verifier 部署

**通用性 / 可推广至**：

- Polygon AggLayer（已实现多链 ZK 聚合）
- Optimism Superchain（fault prover 升级路径中）
- Arbitrum BoLD（多证明体兼容）
- 未来 Tempo / Arc 跨链桥（聚合不同链证明体）
- 任何"渐进式信任迁移 + 高 TVL"系统

**反例 / 边界**：

- 小型 rollup（TVL < $100M）不值得复杂架构
- 单证明体经济激励集中时（如 Starknet 100% ZK），聚合反而稀释 incentive
- TEE 漏洞（SGX SGAxe / Foreshadow）会拖累整个聚合系统信任度

**安全审计要点**：

- type tag 路由是否可伪造（重入 / 重放）
- 各证明体独立审计深度
- 聚合 verifier 的 fallback 行为
- 证明体之间结果不一致时的仲裁机制

**估值 / 决策含义**：

- 多证明聚合 = L2 项目"工程实力"的可量化指标
- 投资判断：fault prover 升级到多证明聚合的 L2 项目，估值乘数 +20–30%
- 监管沟通：多证明聚合 = "系统重要性 L2"的合规辩护材料（EU DORA / 美 OCC）


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|BFT Rust 实现]]
- [[systems/post-quantum-blockchain-day1-integration|抗量子 day-1]]
- [[systems/formal-spec-implementation-codesign|形式化规范 co-design]]
<!-- /wiki-links:managed -->

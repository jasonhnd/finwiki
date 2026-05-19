---
title: Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）
aliases: [Threshold BFT Rust, Malachite, Threshold Simplex, BLS aggregate consensus]
domain: systems
kind: knowledge
topic: threshold-bft-consensus-rust-implementations
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-05-13
review_by: 2026-11-13
confidence: certain
tags: [systems, blockchain, consensus, BFT, Rust, BLS]
status: candidate
sources: []
---

# Threshold BFT 共识 Rust 化潮流

> [!info] TL;DR
> 2025-2026 年的新兴稳定币与支付公链普遍采用**阈值 BFT 共识 + BLS 聚合签名 + Rust 实现**的技术组合。**Tempo 采用 Threshold Simplex + BLS12-381**（每个 finalized block 附 240 字节聚合证书）,**Arc 采用 Malachite + Quint formal verification co-design**。该组合可使桥接成本降低一个数量级,且 Rust 在性能与安全性上优于 Go 实现的 CometBFT。

**技术栈分解**：

| 组件 | Tempo | Arc |
|---|---|---|
| 共识算法 | Threshold Simplex | Malachite（Tendermint BFT 变体）|
| 实现语言 | Rust | Rust |
| 签名 | BLS12-381 + DKG | BLS + 5 个自定义 precompiles |
| Actor 模型 | 8 个 tokio actor + mpsc mailbox | actor-based |
| 形式化验证 | — | **Quint + TLA+ Model-Based Testing**（co-design 同 PR）|
| Validator 集合管理 | 完全链上化（`validator_config_v2` precompile）| PermissionedValidatorManager |

**BLS 聚合签名的桥接经济学**：

- 每个 finalized block 附 240 字节 BLS 聚合证书（Tempo 实测）
- 跨链桥验证一个 block = 验证一个 240B 签名（相较传统 1KB+ multi-sig）
- 跨链桥 calldata cost 可降低 **5-10 倍**

**Malachite 的形式化验证范式**：

- Rust 实现与 Quint 规范在**同一 PR 中并行演进**（v2 #7 揭示）
- TLA+ Model-Based Testing:每次状态机变更先在 Quint 中验证,再写入 Rust
- CometBFT（Go 实现的 Cosmos 共识）缺乏该范式 → 安全性优势显著

**Rust 化的产业趋势**：

- Reth（Paradigm）:Ethereum 执行客户端
- op-reth:OP Stack 执行
- base/base:Base 自有 Rust 全栈（109 crates）
- arc-node:Circle Arc（25 crates）
- tempo:Stripe Tempo（26 crates）
- Malachite:由 Informal Systems 团队开发（Circle 于 2025 年完成 IP 收购）

**未来方向**：

- 性能层面:Threshold Simplex 与 Malachite 的实测 TPS 有待主网数据验证
- 互操作层面:BLS 聚合签名的跨链验证标准化
- 形式化层面:Quint / TLA+ 等工具与 Rust 实现的协同 CI/CD

**市场结构含义**：理解共识机制 Rust 化潮流有助于**评估稳定币链投资标的**（Circle Arc / Tempo / 未来候选）的技术风险。"Tendermint Go 时代结束,Rust BFT 成为新基线"是 2026 年的明显趋势。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|Token 策略三态博弈]]
- [[systems/post-quantum-blockchain-day1-integration|抗量子签名 day-1 集成]]
<!-- /wiki-links:managed -->

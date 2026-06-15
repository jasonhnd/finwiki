---
source: systems/hyperlane-ism-modular-security
source_hash: eb41f86a257a0ba3
lang: zh
status: machine
fidelity: ok
title: "Hyperlane Interchain Security Modules(ISM)· 可插拔的验证层"
translated_at: 2026-06-15T04:09:41.143Z
---

# Hyperlane Interchain Security Modules(ISM)· 可插拔的验证层

## Wiki 路由

本条目归属于[[systems/INDEX|systems index]]。请将其与[[systems/cross-chain-four-poles-overview|cross chain four poles overview]]（同业 / 对比语境）一并阅读，并与[[fintech/INDEX|fintech index]]（更广泛的系统 / 监管边界）一并阅读。

## 关键事实

- 可从 5  种以上的标准 ISM 类型中选择 ^[extracted]
- MultisigISM 为默认 · 类似于 LayerZero DVN ^[extracted]
- OptimisticISM 引入 7  天的挑战期 + watcher ^[extracted]
- EigenLayerISM 从 Ethereum L1  restaking 继承跨链安全性 ^[extracted]
- AggregationISM 允许多个 ISM 的组合（例：multisig + optimistic 的双重）^[extracted]
- RoutingISM 根据 message type 路由至不同的 ISM ^[extracted]

## ISM 安全组合

**主要的 ISM 类型**：

| ISM | 验证方式 | 适用场景 |
|---|---|---|
| **MultisigISM** | N-of-M 签名 · 类似于 LayerZero DVN | 默认选项 · 安全性与速度的平衡 |
| **OptimisticISM** | 7  天的挑战期 + watcher | 高额、低频次的跨链 · 类似于 OP withdrawal |
| **CCIPReadISM** | 与 Chainlink CCIP 协同 | 在获得 Chainlink 背书的同时使用 Hyperlane 基础设施的场合 |
| **AggregationISM** | 多个 ISM 的组合（multisig + optimistic 的双重） | 极高的安全性要求（机构 / 大额） |
| **RoutingISM** | 根据 message type 路由至不同的 ISM | 复杂应用 · 按消息种别采用不同的安全级别 |
| **EigenLayerISM** | Restaking-secured · ETH 担保 | 希望继承 Ethereum L1  经济安全性的场合 |

**ISM 选择的权衡**：
- **速度 vs 安全性**：multisig 快但存在单点故障风险 · optimistic 安全但有 7  天的延迟
- **成本 vs 信任**：CCIPRead 借用 Chainlink 的信任但成本增加 · 自营的 multisig 便宜但需要自行运营 validator
- **简单 vs 灵活**：单一 ISM 简单 · Aggregation 安全但 gas 高

**EigenLayerISM 的特别意义**：将「加密经济安全性 = ETH 担保」模型引入跨链验证。validator 所质押的 ETH 经由 EigenLayer restake 给 Hyperlane 验证者——当发生验证错误时 · slash 发生在 EigenLayer 层 · 损失最终由 Ethereum L1  stake 承担。这是将 restaking 与 cross-chain security 直接结合的做法，也是模块化中间件 + restaking 概念早期得以实现的事例之一（参见[[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]）。

## 起源与演进

ISM 的模块化是 Hyperlane 2022 年 改名之时的核心设计——团队认识到「千篇一律的跨链安全模型」无法满足所有应用的需求。初期仅有 MultisigISM，但在 2023-2024 年 期间，OptimisticISM / CCIPReadISM / AggregationISM 相继被加入。

2024 年 的 EigenLayer 集成是 ISM 模块化的重要里程碑——它表明 Hyperlane 可与任意 verification primitive 兼容 · 而不限于自营的 validator 集合。这与 LayerZero DVN 的封闭式 verifier 形成对照。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
<!-- /wiki-links:managed -->

## 来源

- Hyperlane ISM docs(docs.hyperlane.xyz/docs/protocol/ISM)
- Hyperlane docs — https://docs.hyperlane.xyz/

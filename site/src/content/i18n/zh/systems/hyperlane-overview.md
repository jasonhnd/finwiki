---
source: systems/hyperlane-overview
source_hash: db63457eb56f315c
lang: zh
status: machine
fidelity: ok
title: "Hyperlane 概览 · Permissionless Cross-chain Interoperability"
translated_at: 2026-06-01T04:15:40.121Z
---
# Hyperlane 概览 · Permissionless Cross-chain Interoperability

## Wiki 路线

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] 阅读同类 / 对照背景，并结合 [[fintech/INDEX|fintech index]] 阅读更广泛的系统 / 监管边界。

## 关键事实

- Permissionless 部署 · 任何人都可以 fork + deploy ^[extracted]
- 已连接 50+ 条链 ^[extracted]
- 核心创新：Modular ISM（开发者自行选择验证方式）^[extracted]
- 与 LayerZero / CCIP 之间形成「gated rollout vs permissionless」的路线分叉 ^[extracted]
- 最早支持 EigenLayer restaking ISM 的团队之一 ^[extracted]

## 机制 / 运作方式

跨链消息（arbitrary message passing，AMP）是 2024-2026 年 年链间互操作中的主流抽象。三大参与者的定位差异：

| 协议 | 部署模型 | 验证方式 |
|---|---|---|
| **LayerZero** | Gated（团队评估新链） | DVN（Decentralized Verifier Network）· 应用侧可选择 |
| **Chainlink CCIP** | Heavily gated（Chainlink DON 部署） | OCR 委员会 + RMN 风险管理 |
| **Hyperlane** | **Permissionless**（任何人都可以 fork + deploy） | **Modular ISM** · 完全开放 |

**Hyperlane 的押注**：长尾链（尤其是 app-chain）无法等待 LayerZero/CCIP 团队批准，因此需要自助式连接方案。这与 Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit 等「一键启动链」趋势相一致 —— bridge 也需要 permissionless 化。

**主要组件**：
- **Mailbox**：部署在各链上的统一收发合约 · 标准化跨链消息格式
- **Interchain Security Modules (ISM)**：可插拔验证层 · 开发者自行选择
- **Relayer**：permissionless · 任何人都可以运营（包括应用自行运营的 relayer）
- **Validators**：监控 source chain · 对 message 签名 · 提交到 destination

**Warp Routes**：Hyperlane 的 token bridge 抽象 · 支持 Native/Collateral/Synthetic 的 3 种 wrap 模式 · 开发者可以一键完成 ERC-20  的跨链部署。

## 起源与演进

Hyperlane 由 Asa Oines、Jon Kol 等人（前 Celo 团队成员）于 2021 年 创立，最初名为 Abacus，并在 2022 年 更名为 Hyperlane。核心押注是「长尾链需要 permissionless bridge」，这与 LayerZero / CCIP 的中心化部署模型形成路线分叉。

2023-2025 年 期间，Hyperlane 被 Celestia / dYdX v4 / Injective / Sei / Berachain 等长尾 / app-chain 陆续采用，并成为非 EVM（Cosmos / Solana / Move）连接 EVM 生态系统的事实标准（参见 [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]）。在 2024 年 加入 EigenLayer restaking 集成后，加密经济安全性由 Ethereum L1  继承。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## 来源

- Hyperlane docs(docs.hyperlane.xyz)
- Hyperlane docs — https://docs.hyperlane.xyz/

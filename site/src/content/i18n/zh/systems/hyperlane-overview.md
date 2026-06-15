---
source: systems/hyperlane-overview
source_hash: 50a7162db02312b7
lang: zh
status: machine
fidelity: ok
title: "Hyperlane 概览 · 无需许可的跨链互操作性"
translated_at: 2026-06-15T04:09:41.151Z
---

# Hyperlane 概览 · 无需许可的跨链互操作性

## Wiki 路径

本条目归属于 [[systems/INDEX|systems index]]。请将其与 [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] 对照阅读以了解同业／对比背景，并与 [[fintech/INDEX|fintech index]] 对照以了解更广泛的系统／监管边界。

## 关键事实

- 无需许可部署 · 任何人均可 fork + 部署 ^[extracted]
- 已接入 50+ 条链 ^[extracted]
- 核心创新：模块化 ISM（开发者自选验证方式）^[extracted]
- 与 LayerZero / CCIP 之间形成「gated rollout vs permissionless」的路径分叉 ^[extracted]
- 最早支持 EigenLayer restaking ISM 的群体之一 ^[extracted]

## 机制 / 工作原理

跨链消息传递（arbitrary message passing，AMP）是 2024-2026 年 的链间互操作中的主流抽象。主要协议在定位上的差异：

| 协议 | 部署模型 | 验证方式 |
|---|---|---|
| **LayerZero** | Gated（团队评估新增链） | DVN（Decentralized Verifier Network）· 可在应用侧选择 |
| **Chainlink CCIP** | Heavily gated（由 Chainlink DON 部署） | OCR 委员会 + RMN 风险管理 |
| **Hyperlane** | **Permissionless**（任何人均可 fork + 部署） | **模块化 ISM** · 完全开放 |

**Hyperlane 的押注**：长尾链（尤其是 app-chain）无法等待 LayerZero/CCIP 团队的批准 · 需要自助式的接入解决方案。这与 Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit 等「一键启动链」的趋势相一致 —— bridge 也需要无需许可化。

**主要组件**：
- **Mailbox**：部署于各条链上的统一收发合约 · 标准化跨链消息格式
- **Interchain Security Modules（ISM）**：可插拔的验证层 · 由开发者自选
- **Relayer**：无需许可 · 任何人均可运营（包括应用自营的 relayer）
- **Validators**：监视 source chain · 对 message 签名 · 提交至 destination

**Warp Routes**：Hyperlane 的 token bridge 抽象 · 支持 Native/Collateral/Synthetic 这 3  种 wrap 模式 · 开发者可一键完成 ERC-20  的跨链部署。

## 起源与演进

Hyperlane 由 Asa Oines、Jon Kol 等人（原 Celo 团队成员）于 2021 年 创立 · 最初名为 Abacus · 于 2022 年 改名为 Hyperlane。其核心押注是「长尾链需要无需许可的 bridge」，这与 LayerZero / CCIP 的中心化部署模型形成路径分叉。

2023-2025 年 期间在 Celestia / dYdX v4  / Injective / Sei / Berachain 等长尾 / app-chain 上陆续被采用 · 成为非 EVM（Cosmos / Solana / Move）接入 EVM 生态的事实标准（参见 [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]）。2024 年 增加 EigenLayer restaking 集成后 · 加密经济安全从 Ethereum L1  继承而来。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## 来源

- Hyperlane docs（docs.hyperlane.xyz）
- Hyperlane docs — https://docs.hyperlane.xyz/

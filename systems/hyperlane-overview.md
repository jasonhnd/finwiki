---
title: Hyperlane 概览 · Permissionless Cross-chain Interoperability
aliases: [hyperlane-overview, permissionless-bridge, modular-interop]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, interop, hyperlane, modular]
sources: []
status: candidate
---

# Hyperlane 概览 · Permissionless Cross-chain Interoperability


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Permissionless 部署 · 任何人可 fork + deploy ^[extracted]
- 50+ 链已接入 ^[extracted]
- 核心创新:Modular ISM(开发者自选验证方案) ^[extracted]
- 与 LayerZero / CCIP 形成"gated rollout vs permissionless"路线分歧 ^[extracted]
- 首批支持 EigenLayer restaking ISM ^[extracted]

## Mechanism / How it works

跨链消息(arbitrary message passing,AMP)是 2024-2026 链间互操作的主流抽象。三大玩家定位差异:

| 协议 | 部署模式 | 验证方案 |
|---|---|---|
| **LayerZero** | Gated(团队评估新链) | DVN(Decentralized Verifier Network)· app 可选 |
| **Chainlink CCIP** | Heavily gated(Chainlink DON 部署) | OCR 委员会 + RMN 风控 |
| **Hyperlane** | **Permissionless**(任何人 fork + deploy) | **Modular ISM** · 完全开放 |

**Hyperlane 的赌注**:长尾链(尤其 app-chain)无法等待 LayerZero/CCIP 团队批准 · 需要 self-serve 接入方案。这与 Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit 等"链可以一键启动"的趋势对齐——bridge 也必须 permissionless 化。

**核心组件**:
- **Mailbox**:每条链部署的统一收发合约 · 标准化跨链消息格式
- **Interchain Security Modules(ISM)**:可插拔验证层 · 开发者自选
- **Relayer**:permissionless · 任何人可跑(包括 app 自营 relayer)
- **Validators**:监听 source chain · 签名 message · 提交到 destination

**Warp Routes**:Hyperlane 的 token bridge 抽象 · 支持 Native/Collateral/Synthetic 三种 wrap 模式 · 开发者一键部署 ERC-20 跨链。

## Origin & evolution

Hyperlane 由 Asa Oines、Jon Kol 等(原 Celo 团队成员)2021 创立 · 早期名为 Abacus · 2022 改名 Hyperlane。核心赌注是"长尾链需要 permissionless bridge",这与 LayerZero / CCIP 的中心化部署模式形成路线分歧。

2023-2025 间陆续被 Celestia / dYdX v4 / Injective / Sei / Berachain 等长尾 / app-chain 采用 · 成为非 EVM(Cosmos / Solana / Move)接入 EVM 生态的事实标准。2024 加入 EigenLayer restaking 集成后 · 加密经济安全继承自 Ethereum L1。

## Counterpoints

**Permissionless 的代价**:**ISM 选择责任全在 app 开发者**。如果 app 选了弱 multisig · 被 hack 不能怪 Hyperlane 协议。这与 LayerZero/CCIP 的"协议方背书"模式形成 trade-off——更开放但更需要 app 团队懂 security。

**心智份额**:LayerZero 通过早期激进市场推广 · 心智份额仍领先 Hyperlane。机构/大型 dApp 在选择跨链协议时 · LayerZero 的"团队背书"反而是优势 · Hyperlane 主要服务"愿意自负 security 责任"的项目方。

## Open questions

- 50+ 链中实际有活跃流量的占比?
- EigenLayerISM 在 2025-2026 间的实际采用率?
- 与 LayerZero / CCIP 的长期市场份额分配?
- Hyperlane token 经济模型对长期可持续性的影响?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## Sources

- Hyperlane docs(docs.hyperlane.xyz)

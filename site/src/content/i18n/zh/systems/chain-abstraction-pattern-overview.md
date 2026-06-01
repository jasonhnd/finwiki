---
source: systems/chain-abstraction-pattern-overview
source_hash: 656833e295798ba6
lang: zh
status: machine
fidelity: ok
title: "链抽象模型概观"
translated_at: 2026-06-01T04:15:40.161Z
---

# 链抽象模型概观

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet 採用状況 · Privy/Coinbase/Alchemy/Safe]] 阅读同业 / 对比背景，并用 [[fintech/INDEX|fintech index]] 理解更广泛的系统 / 监管边界。

## Key facts

- 链抽象并不会消灭多链，而是让多链对用户透明 ^[extracted]
- 3 大主流方式：Polygon AggLayer / NEAR Chain Abstraction / EigenLayer restaking ^[extracted]
- Base + Coinbase Smart Wallet = 当前最成熟的“端到端链抽象”实现案例 ^[extracted]
- 监管尚未触及链抽象，但 MiCA / GENIUS 默认假设“用户知道自己在哪条链上” ^[extracted]

## Mechanism / How it works

链抽象的核心机制在于把“链选择”从用户决策迁移到协议层。**3 阶段范式演进**：
1. **钱包认知**（MetaMask 时代 · 2017-2022）：用户管理助记词 + 选择链 + 切换链
2. **embedded wallet**（Privy / Dynamic 时代 · 2023-2024）：用户使用邮箱 / 社交登录，但仍需要选择链
3. **链抽象**（AggLayer / NEAR 时代 · 2024-2026+）：用户完全不知道自己在哪条链上，由协议自动路由

**Base + Coinbase Smart Wallet 的案例**：用户通过邮箱登录直接交易，甚至不知道自己位于 L2  上。这是 embedded wallet + 链抽象的端到端典型案例。**主要张力**：链抽象与“主权链”叙事相矛盾 — 机构链（Kinexys / Arc）希望把用户绑定在自身链上以保留控制权，但用户希望抽象掉链选择。

## Origin & evolution

2017-2022 多链时代，用户深切感受到链切换的痛苦（钱包切换 / gas token / 桥风险）。2022-2023 跨链桥（Wormhole / LayerZero / Axelar）已经成熟，但没有解决 UX 问题。2023 [[agent-economy/privy-embedded-wallet-overview|Privy]] / Dynamic / Magic 等 embedded wallet 出现，解决了私钥 UX，但链选择仍由用户承担（参见 [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]]）。2024.02 Polygon AggLayer v1 上线 → “共享流动性 + 状态”路径。2024.04 NEAR Chain Signatures + Intents → “意图驱动 + MPC 多链账户”路径。2024.04 EigenLayer 主网上线 → “共享安全 / restaking”路径（安全层抽象）。2025-2026 3 种方式共存，链抽象成为协议价值捕获的新前沿。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式 · AggLayer / NEAR / EigenLayer]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer 官方文档（共享流动性 + 统一桥）— https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction 官方文档（Chain Signatures + Intents）— https://docs.near.org/chain-abstraction/what-is
- EigenLayer 官方文档（restaking / 共享安全）— https://docs.eigenlayer.xyz/
- Coinbase Developer Platform（Base + Smart Wallet 端到端案例）— https://docs.cdp.coinbase.com/
- LayerZero v2 官方文档（omnichain messaging）— https://docs.layerzero.network/v2

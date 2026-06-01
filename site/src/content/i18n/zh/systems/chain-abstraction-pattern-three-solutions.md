---
source: systems/chain-abstraction-pattern-three-solutions
source_hash: caebf3b7b2704e95
lang: zh
status: machine
fidelity: ok
title: "链抽象的 3 大主流方式"
translated_at: 2026-06-01T04:15:40.171Z
---
# 链抽象的 3 大主流方式

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请结合 [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] 阅读同业 / 对照背景，并结合 [[fintech/INDEX|fintech index]] 阅读更广泛的系统 / 监管边界。

## Key facts

- Polygon AggLayer 于 2024.02 v1 上线，并在 2025 v2 支持接入非 Polygon 链 ^[extracted]
- AggLayer 的主要合作伙伴: OKX X Layer / Astar zkEVM / Immutable 等 ^[extracted]
- NEAR Chain Abstraction 于 2024.04 主网，2025 支持 12+ chain ^[extracted]
- NEAR 主要技术: Chain Signatures（通过 MPC 控制其他链的私钥）+ NEAR Intents ^[extracted]
- EigenLayer 于 2024.04 主网，2025 末 TVL > $15B ^[extracted]
- EigenDA / AltLayer / Hyperliquid 是 EigenLayer 模型的代表案例 ^[extracted]
- 3 种方式的技术路径完全不同，可能共存 ^[extracted]

## Mechanism / How it works

**1. Polygon AggLayer · 共享流动性 + 状态**: 多条链共享 ZK 证明 + 统一桥 + 统一流动性池。跨链资产无需 wrap 即可直接互操作。Polygon 从“单一链”转向“链抽象基础设施”。**抽象层**: 流动性 + 状态。**主要合作伙伴**: OKX X Layer / Astar zkEVM / Immutable 等已接入。

**2. NEAR Chain Abstraction · 意图驱动 + 多链账户**: 用户使用单一 NEAR 账户，通过 MPC（Chain Signatures）控制 ETH / BTC / SOL 等其他链的私钥。输入意图（intent）→ solver 网络竞价完成 → 用户只看到结果。**抽象层**: 账户 + 操作意图。NEAR 从 L1 转向“账户抽象 + 跨链路由层”。

**3. EigenLayer / Hyperliquid 模型 · 共享安全**: 多个应用 / 链共享 ETH validator 集合（restaking）。新链无需 bootstrap validator 经济，可直接租用 ETH 安全性（参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]）。**抽象层**: 安全性 / validator 集合。代表案例 EigenDA / AltLayer / Hyperliquid（自有 L1 + 借用安全性）。**不是 UX 层抽象，而是安全层抽象** —— 用户不需要意识到“这条链有多少 validator”。

3 种方式比较:

| 方式 | 抽象层 | 主导者 | 对 UX 的影响 |
|---|---|---|---|
| AggLayer | 流动性 + 状态 | Polygon | 跨链资产可即时使用 |
| NEAR | 账户 + 意图 | NEAR | 单一账户控制多条链 |
| EigenLayer | 安全性 / validator | EigenLabs | 链开发者借用安全性 |

## Origin & evolution

2022-2023 跨链桥时代（Wormhole / LayerZero / Axelar）解决了“资产能否跨链”的问题，但没有解决 UX。2024.02 AggLayer 上线 → Polygon 抢占“流动性抽象”定位。2024.04 NEAR 公开 Chain Signatures（MPC 跨链密钥）+ Intents → NEAR 转向“账户抽象”。2024.04 EigenLayer 主网 → “安全抽象”通过 restaking 实现。2025 3 种方式各自验证可扩展性: AggLayer 接入 5+ 非 Polygon 链，NEAR 控制 12+ 链，EigenLayer TVL > $15B。2026+ 3 种方式是融合还是一方胜出，尚未确定。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer 官方文档（流动性 + 状态抽象）— https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction 官方文档（账户 + 意图抽象）— https://docs.near.org/chain-abstraction/what-is
- NEAR MPC 节点实现（Chain Signatures 的阈值签名）— https://github.com/near/mpc
- EigenLayer 官方文档（安全性 / validator 集合抽象）— https://docs.eigenlayer.xyz/

---
source: systems/hyperlane-vs-layerzero-ccip
source_hash: 71656fd6ea52f8bf
lang: zh
status: machine
fidelity: ok
title: "Hyperlane vs LayerZero/CCIP · Permissionless vs Gated 路线对照"
translated_at: 2026-06-01T04:15:40.129Z
---
# Hyperlane vs LayerZero/CCIP · Permissionless vs Gated 路线对照

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] 阅读，以获得同业 / 对比语境；并对照 [[fintech/INDEX|fintech index]] 阅读，以了解更广泛的系统 / 监管边界。

## 关键事实

- Hyperlane 完全 permissionless · 任何人都可以 fork + deploy ^[extracted]
- LayerZero 半 gated · 团队评估新链 · DVN 可由应用侧选择 ^[extracted]
- CCIP 强 gated · Chainlink DON 部署 + RMN 风险管理 ^[extracted]
- Cosmos / Solana / app-chain 默认选择 Hyperlane（LayerZero 在非 EVM 链上的部署较慢）^[extracted]

## 机制 / 工作方式

**三大协议详细对照**：

| 视角 | LayerZero | Chainlink CCIP | Hyperlane |
|---|---|---|---|
| 部署模型 | Gated（团队评估） | Heavily gated（DON 部署） | Permissionless |
| 验证方式 | DVN（应用侧可选择） | OCR 委员会 + RMN | Modular ISM（应用侧自选） |
| 非 EVM 支持 | 较慢 · 以 EVM 为主轴 | 几乎没有 | 强 · Cosmos/Solana/Move 是一等公民 |
| 机构背书 | 强（Stargate 等 DeFi 大型项目） | 最强（Chainlink） | 弱（面向开发者） |
| 安全责任 | 协议侧提供部分背书 | Chainlink 全面背书 | 完全由应用开发者负责 |
| 适配场景 | 主流 EVM dApp | 机构高额跨链 | 长尾 / app-chain / 非 EVM |

**Tempo / Arc 的选择逻辑**：作为新兴 L1 ，不能等待 LayerZero 或 CCIP 团队的审批时间表。Hyperlane 的 permissionless 部署使 Tempo/Arc 能在启动时同时接入 EVM 流动性。但与此同时，为触达更多 dApp，也可能并行集成 LayerZero / CCIP，从而形成三足鼎立格局。

**非 EVM 流动性的重要瓶颈**：当 Cosmos / Solana / Move 等非 EVM 链连接 EVM 生态（USDC / USDT 流动性主要在 EVM 上）时，LayerZero / CCIP 部署较慢 —— Hyperlane 成为事实标准（其在金融机构场景中的渗透见 [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]] 对照）。因此，Hyperlane 在长尾市场拥有先发优势。

## 起源与演进

三大协议在同一时期（2021-2022）启动，但此后的方向大不相同：
- LayerZero 在 2021-2022  大规模融资 + 积极营销 · 早期 mindshare 领先
- CCIP 由 Chainlink 在 2022-2023  主力推动 · 利用 Chainlink 既有机构关系
- Hyperlane 于 2021-2022  启动 · 早期无名 · 2023-2024  在 Cosmos / Solana 市场反攻

到 2024-2026 年，格局稳定：LayerZero 主导主流 EVM dApp · CCIP 主导机构高额领域 · Hyperlane 主导长尾 / 非 EVM / app-chain。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
- [[systems/cctp-v2-overview|CCTP V2(USDC 専用 bridge 対照)]]
<!-- /wiki-links:managed -->

## 来源

- LayerZero docs · Chainlink CCIP docs · Hyperlane docs
- Hyperlane docs — https://docs.hyperlane.xyz/
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip

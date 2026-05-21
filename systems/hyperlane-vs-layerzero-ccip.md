---
title: Hyperlane vs LayerZero/CCIP · Permissionless vs Gated 路线对照
aliases: [hyperlane-vs-layerzero, hyperlane-vs-ccip, bridge-comparison]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, hyperlane, layerzero, ccip, comparison]
sources: []
status: candidate
---

# Hyperlane vs LayerZero/CCIP · Permissionless vs Gated 路线对照


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Hyperlane 完全 permissionless · 任何人可 fork + deploy ^[extracted]
- LayerZero 半 gated · 团队评估新链 · DVN 由 app 可选 ^[extracted]
- CCIP 重 gated · Chainlink DON 部署 + RMN 风控 ^[extracted]
- Cosmos / Solana / app-chain 默认 Hyperlane(LayerZero 在非 EVM 链推进缓慢) ^[extracted]
- Tempo / Arc 等新 L1 偏好 Hyperlane(自主部署不依赖第三方) ^[inferred]

## Mechanism / How it works

**三大协议详细对照**:

| 维度 | LayerZero | Chainlink CCIP | Hyperlane |
|---|---|---|---|
| 部署模式 | Gated(团队评估) | Heavily gated(DON 部署) | Permissionless |
| 验证方案 | DVN(app 可选) | OCR 委员会 + RMN | Modular ISM(app 自选) |
| 非 EVM 支持 | 慢 · 主推 EVM | 几乎无 | 强 · Cosmos/Solana/Move 一等公民 |
| 机构背书 | 强(Stargate 等 DeFi 巨头) | 最强(Chainlink) | 弱(开发者向) |
| 安全责任 | 协议方部分背书 | Chainlink 全背书 | 完全 app 开发者负责 |
| 适合场景 | 主流 EVM dApp | 机构高金额跨链 | 长尾 / app-chain / 非 EVM |

**Tempo / Arc 的选择逻辑**:作为新 L1 · 不能等 LayerZero 或 CCIP 团队批准时间表。Hyperlane permissionless 部署让 Tempo/Arc 上线即接入 EVM 流动性。但同时他们可能并行集成 LayerZero / CCIP 以触达更多 dApp · 三足鼎立。

**非 EVM 流动性的关键瓶颈**:Cosmos / Solana / Move 等非 EVM 链接入 EVM 生态(USDC / USDT 流动性主要在 EVM)· LayerZero / CCIP 推进缓慢——Hyperlane 成为事实标准。这让 Hyperlane 在长尾市场有先发优势。

## Origin & evolution

三大协议同期(2021-2022)启动 · 但走向截然不同:
- LayerZero 2021-2022 大规模融资 + 激进市场推广 · 早期心智份额领先
- CCIP 2022-2023 由 Chainlink 主推 · 借 Chainlink 既有机构关系
- Hyperlane 2021-2022 启动 · 早期默默无闻 · 2023-2024 在 Cosmos / Solana 市场逆袭

2024-2026 间格局趋于稳定:LayerZero 主导 EVM 主流 dApp · CCIP 主导机构高金额 · Hyperlane 主导长尾 / 非 EVM / app-chain。

## Counterpoints

**Hyperlane 心智份额弱**:LayerZero 通过早期激进市场 + Stargate 等"标杆 dApp"建立心智锚定 · Hyperlane 在大型 dApp 选型时仍处于劣势。需要更多旗舰案例。

**LayerZero / CCIP 也在 catch up**:LayerZero 在 2024-2025 间加强 Cosmos / Solana 支持 · CCIP 推出更多链——长期看 permissionless 优势可能被稀释。Hyperlane 需要持续投入差异化(EigenLayerISM、ZK ISM 等)。

**Tempo / Arc 选择不确定**:虽然 Hyperlane 看似最优 · 但 Tempo / Arc 作为企业级 L1 · 可能更看重 LayerZero / CCIP 的"协议方背书"减少自营 security 责任。最终可能选多桥并行。

## Open questions

- 三大协议 5 年市场份额预测?
- Hyperlane 是否会建立"机构信任锚"(类似 Chainlink RMN)?
- ZK ISM(zero-knowledge 验证)何时主流化?
- 跨协议 messaging(LayerZero <-> Hyperlane)是否会出现?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
- [[systems/cctp-v2-overview|CCTP V2(USDC 专用 bridge 对照)]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero docs · Chainlink CCIP docs · Hyperlane docs

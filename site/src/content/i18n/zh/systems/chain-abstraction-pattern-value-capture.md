---
source: systems/chain-abstraction-pattern-value-capture
source_hash: 6cc2bbf9ddefe017
lang: zh
status: machine
fidelity: ok
title: "跨链桥商品化与价值向链抽象层上移"
translated_at: 2026-06-01T04:15:40.179Z
---
# 跨链桥商品化与价值向链抽象层上移

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観 · ユーザーが基盤チェーンを意識しない次世代インフラ]] 阅读，以获得同业 / 对照背景，并结合 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- 2020-2023 跨链桥利润区间 0.1-0.5% 手续费 ^[extracted]
- 2024+ 桥技术成熟、利润压缩、商品化 ^[extracted]

## 机制 / 运作方式

**价值层级的演进**:

| 层级 | 2020-2023 价值 | 2024-2026 价值 |
|---|---|---|
| 跨链桥 | 高（收取 0.1-0.5% 手续费） | 低（商品化） |
| 链抽象 | 不存在 | 高（UX + 流动性路由） |
| 意图层 | 不存在 | 正在启动（solver 市场） |

**核心机制**: 技术商品化是基础设施层不可避免的命运 —— 所有“标准化协议”长期都会由多个团队实现，价格会收敛到零（HTTP 协议的类比）。但是“用户接点”和“流量控制”是稀缺资源：用户使用的钱包 / 在哪个 app 内交易 / solver 网络如何选择最优路径 —— 这些全都是可以附着 take rate 的接点。

**意图 solver 市场**是新前沿：用户表达“想把 USDC 换成 1 ETH” → 多个 solver 通过竞价完成路径（单链 / 跨链 / 多跳）→ 用户向中标的 solver 支付手续费。这会把“跨链桥的 take rate”演进为“solver 市场手续费 + 路由 take rate”。NEAR Intents / CoW Protocol 是早期案例。

## 起源与演进

2017-2019 Atomic Swap / WBTC 等早期跨链方式，没有标准化协议。2020-2021 Wormhole / Multichain / Axelar 等通用跨链桥兴起 → 高 fee + 高 TVL 的时代。2022 Wormhole 遭受攻击并损失 $325M → 跨链桥风险显性化。2023 LayerZero / Hyperlane / Across 等下一代跨链架构兴起 → 技术路径多元化但 fee 被压缩。2024+ 跨链桥利润被压缩，价值向链抽象层上移。AggLayer / NEAR Intents / Across 转向“链抽象 + solver 市场”。2025-2026 跨链桥服务商陆续转型 —— LayerZero 现在更愿意自称为“omnichain messaging infrastructure”而非“bridge”（参见 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] 和 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] 的最新切片）。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル概観]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent 決済プロトコルコモディティ化]]
<!-- /wiki-links:managed -->

## 来源

- Wormhole 官方文档（通用跨链消息传递）— https://wormhole.com/docs/
- LayerZero v2 官方文档（转向 omnichain messaging）— https://docs.layerzero.network/v2
- Hyperlane 官方文档（permissionless interoperability）— https://docs.hyperlane.xyz/
- Across Protocol 智能合约（基于 intent 的下一代桥）— https://github.com/across-protocol/contracts
- NEAR Intents 官方文档（意图 solver 市场）— https://docs.near.org/chain-abstraction/what-is
- CoW Protocol 智能合约（solver 竞价市场的早期案例）— https://github.com/cowprotocol/contracts

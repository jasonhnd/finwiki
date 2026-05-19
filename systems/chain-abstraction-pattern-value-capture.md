---
title: 跨链桥 commoditization 与链抽象层价值上移
aliases: [chain-abstraction-pattern-value-capture, cross-chain bridge commoditization, 跨链桥 commoditization]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, chain-abstraction, cross-chain-bridge, commoditization, value-capture]
sources: []
status: candidate
---

# 跨链桥 commoditization 与链抽象层价值上移

> [!info] TL;DR
> 2020-2023 跨链桥(Wormhole / LayerZero / Axelar)是高利润赛道(收 0.1-0.5% 手续费),2024+ 技术成熟、利润压缩 → 价值捕获上移到链抽象层(UX + 流动性路由 + 意图 solver 市场)。LayerZero / Wormhole 正在转型为"链抽象基础设施提供方"而非"桥"。

## Key facts

- 2020-2023 跨链桥利润区间 0.1-0.5% 手续费 ^[extracted]
- 2024+ 桥技术成熟、利润压缩,commoditized ^[extracted]
- 链抽象层价值捕获 = UX + 流动性路由 + solver 市场 ^[inferred]
- LayerZero / Wormhole 转型为"链抽象基础设施提供方" ^[inferred]
- 价值捕获上移类比:传输协议(TCP/IP)→ 应用层(Google / Meta) ^[inferred]

## Mechanism / How it works

**价值层级演化**:

| 层级 | 2020-2023 价值 | 2024-2026 价值 |
|---|---|---|
| 跨链桥 | 高(收 0.1-0.5% 手续费) | 低(commoditized) |
| 链抽象 | 不存在 | 高(UX + 流动性路由) |
| 意图层 | 不存在 | 涌现(solver 市场) |

**核心机制**:技术 commoditization 是基础设施层不可避免的命运 —— 任何"标准化协议"长期都会被多个团队实现,价格趋零(类比 HTTP 协议)。但"用户接触点"和"流量调度"是稀缺资源:用户用什么钱包 / 在哪个 app 内交易 / solver 网络如何选最优路径 —— 这些都是 take rate 可附着的接触点。

**意图 solver 市场**是新前沿:用户表达"我要从 USDC 换 1 个 ETH"→ 多个 solver 竞价完成路径(单链 / 跨链 / 多 hop)→ 用户付 fee 给中标 solver。这是把"跨链桥的 take rate"演化为"solver 市场佣金 + 路由 take rate"。NEAR Intents / CoW Protocol 是早期实例。

## Origin & evolution

2017-2019 Atomic Swap / WBTC 等早期跨链方案,无标准化协议。2020-2021 Wormhole / Multichain / Axelar 等通用跨链桥兴起 → 高 fee + 高 TVL 时代。2022 Wormhole 被攻击损失 $325M → 跨链桥风险显化。2023 LayerZero / Hyperlane / Across 等下一代跨链架构涌现 → 技术路径多样化但 fee 已被压缩。2024+ 跨链桥利润压缩,价值上移到链抽象层。AggLayer / NEAR Intents / Across 都开始向"链抽象 + solver 市场"转型。2025-2026 跨链桥服务商纷纷转型 —— LayerZero 现在更愿意自我定位为"omnichain messaging infrastructure"而非"bridge"。

## Counterpoints

- "桥 commoditization"假设技术继续 open 化 —— 若监管反向促使桥集中(KYC bridge)则利润可能反弹
- 链抽象层是否真能捕获价值未充分验证 —— 用户可能不愿为"看不见的服务"付 premium
- solver 市场可能 race-to-bottom,fee 持续压缩
- 类比 Web2 应用层(Google / Meta)需要大规模 distribution,链抽象层是否能复制不确定

## Open questions

- 桥公司在转型期是否会被链抽象层公司(AggLayer / NEAR)收购?
- 监管对 solver 市场的反洗钱合规如何处理?
- 机构链(Tempo / Arc)是否会建立自有的链抽象 + solver 网络(垂直整合)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|链抽象模式概览]]
- [[systems/chain-abstraction-pattern-three-solutions|三大主流方案]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent 支付协议 commoditization]]
<!-- /wiki-links:managed -->

## Sources


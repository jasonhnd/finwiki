---
title: 链抽象三大主流方案 · AggLayer / NEAR / EigenLayer
aliases: [chain-abstraction-pattern-three-solutions, AggLayer NEAR EigenLayer comparison, 链抽象三方案]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, chain-abstraction, polygon, near, eigenlayer, agglayer, restaking, intent]
sources: []
status: candidate
---

# 链抽象三大主流方案

> [!info] TL;DR
> 链抽象有三个并行的技术路径:Polygon AggLayer(共享流动性 + 状态 · ZK 证明)、NEAR Chain Abstraction(意图驱动 + MPC 多链账户)、EigenLayer / Hyperliquid 模式(共享安全 + restaking)。三者技术路径完全不同,可能长期并存,代表"流动性抽象"、"账户抽象"、"安全抽象"三种不同方向。

## Key facts

- Polygon AggLayer 2024.02 上线 v1,2025 v2 支持非 Polygon 链接入 ^[extracted]
- AggLayer 关键合作:OKX X Layer / Astar zkEVM / Immutable 等 ^[extracted]
- NEAR Chain Abstraction 2024.04 mainnet,2025 支持 12+ chain ^[extracted]
- NEAR 关键技术:Chain Signatures(MPC 控制其他链私钥)+ NEAR Intents ^[extracted]
- EigenLayer 2024.04 mainnet,2025 末 TVL > $15B ^[extracted]
- EigenDA / AltLayer / Hyperliquid 是 EigenLayer 模式代表案例 ^[extracted]
- 三方案技术路径完全不同,可能并存 ^[extracted]

## Mechanism / How it works

**1. Polygon AggLayer · 共享流动性 + 状态**:多链共享 ZK 证明 + 统一桥 + 统一流动性池。跨链资产无需 wrap,直接互操作。Polygon 从"单链"转型为"链抽象基础设施"。**抽象层**:流动性 + 状态。**关键合作伙伴**:OKX X Layer / Astar zkEVM / Immutable 等接入。

**2. NEAR Chain Abstraction · 意图驱动 + 多链账户**:用户用单一 NEAR 账户,通过 MPC(Chain Signatures)控制 ETH / BTC / SOL 等其他链私钥。意图(intent)输入 → solver 网络竞价完成 → 用户只看结果。**抽象层**:账户 + 操作意图。NEAR 从 L1 转型为"账户抽象 + 跨链路由层"。

**3. EigenLayer / Hyperliquid 模式 · 共享安全**:多个应用 / 链共享 ETH 验证者集合(restaking)。新链不需要 bootstrap 验证者经济,直接租用 ETH 安全。**抽象层**:安全 / 验证者集合。代表案例 EigenDA / AltLayer / Hyperliquid(自有 L1 + 借用安全)。**不是 UX 层抽象,而是安全层抽象** —— 用户不感知"这条链有几个验证者"。

三方案对比:

| 方案 | 抽象层 | 主导方 | UX 影响 |
|---|---|---|---|
| AggLayer | 流动性 + 状态 | Polygon | 跨链资产即时使用 |
| NEAR | 账户 + 意图 | NEAR | 单账户控多链 |
| EigenLayer | 安全 / 验证者 | EigenLabs | 链开发者借安全 |

## Origin & evolution

2022-2023 跨链桥时代(Wormhole / LayerZero / Axelar)解决"资产能不能跨链",但不解决 UX。2024.02 AggLayer 上线 → Polygon 抢先占"流动性抽象"位。2024.04 NEAR 推 Chain Signatures(MPC 跨链密钥) + Intents → NEAR 转型"账户抽象"。2024.04 EigenLayer mainnet → "安全抽象"通过 restaking 实现。2025 三方案各自验证规模化可行性:AggLayer 接入 5+ 非 Polygon 链,NEAR 控 12+ 链,EigenLayer TVL > $15B。2026+ 三方案是否会融合或一方胜出尚未明朗。

## Counterpoints

- 三方案抽象的是不同维度,严格说不是直接竞争而是不同问题的解
- AggLayer 依赖 ZK 证明性能持续提升,若 ZK 进展放缓则 AggLayer UX 优势削弱
- NEAR MPC 路径有密钥托管风险(MPC 节点串通理论可能),长期安全性未充分验证
- EigenLayer restaking 引入新的 slashing 风险叠加,机构是否真敢用 EigenLayer 借安全存疑

## Open questions

- 三方案会融合(如 AggLayer 集成 NEAR Intents)还是分裂(三路独立成熟)?
- 哪种抽象层会成为机构链(Tempo / Arc)首选?
- 监管对 MPC 跨链密钥控制(NEAR 模式)的态度?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|链抽象模式概览]]
- [[systems/chain-abstraction-pattern-value-capture|跨链桥 commoditization 与价值上移]]
- [[systems/bft-validator-economy-overview|BFT validator 经济学]]
<!-- /wiki-links:managed -->

## Sources


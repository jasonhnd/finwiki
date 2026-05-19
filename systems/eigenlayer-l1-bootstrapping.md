---
title: EigenLayer 对新 L1 启动期安全的赋能 · Tempo/Arc 潜在路径
aliases: [eigenlayer-l1-bootstrapping, restaking-l1-startup, eigenlayer-tempo-arc]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: possible
tags: [systems, restaking, eigenlayer, l1, tempo, arc, bootstrapping]
sources: []
status: candidate
---

# EigenLayer 对新 L1 启动期安全的赋能 · Tempo/Arc 潜在路径

> [!info] TL;DR
> Tempo(Stripe-backed)和 Arc(Circle 主导)都是企业级 L1,**无法承担"启动期 token 攻击窗口"**——EigenLayer restaking 提供"启动期租用 ETH 安全,逐步过渡到自有 token"的选项。Arc 已公开探讨 "restaking-secured permissioned BFT" 模型。如果实现,EigenLayer 从模块化中间件扩展到 **新 L1 启动期保护伞**——这是协议史上最大的扩张方向。

## Key facts

- Tempo / Arc 都是企业级 L1 · 不能容忍启动期 token 攻击窗口 ^[inferred]
- Arc 已公开探讨 restaking-secured permissioned BFT 模型 ^[extracted]
- 三种启动选项:自建 validator · EigenLayer AVS · 混合 ^[inferred]
- EigenLayer 扩展到 L1 启动伞是协议史最大扩张方向 ^[inferred]
- 对 Ethereum L1 的反身效应:ETH 成为"加密经济安全的基础资产" ^[inferred]

## Mechanism / How it works

新 L1 启动期面临 bootstrapping 问题:原生 token 市值低 → 攻击成本低 → 用户不敢用 → 流量低 → token 不增值 → 死循环。

**三种解法**:

| 选项 | 含义 | 适用场景 |
|---|---|---|
| **A. 自建 validator 集合** | 经典 L1 路径 · 发币 + 激励 + 长期 bootstrapping | 加密原生项目 · 有时间窗口 |
| **B. EigenLayer AVS 启动** | 启动期租用 ETH 安全 · 逐步过渡到自有 token | 企业级 L1 · 必须 day-1 安全 |
| **C. 混合(BFT + restaking 加固)** | 自有 validator + restaking 经济补强 · 降低 51% 攻击成本 | 既有发币需求又要快速启动 |

**Tempo / Arc 选项 B/C 几乎必然**:
- Tempo(Stripe)需要面对 Stripe 客户(merchant 大企业)· 不能允许启动期被攻击
- Arc(Circle)是 USDC 主战场 · 安全风险=Circle 公司风险
- 两者都不能用"承诺未来 token 涨价"换启动期安全 · 必须借用 ETH 已成熟的经济安全

## Origin & evolution

EigenLayer 早期定位是模块化中间件(DA / Oracle / 跨链桥)的安全层 · L1 启动伞是 2024-2025 间的扩张方向。Hyperlane 是首批采用 EigenLayerISM(restaking-secured 跨链消息验证)的案例 · 验证了"用 ETH 担保非 Ethereum 服务"的可行性。

若 Tempo / Arc 采用 EigenLayer 路径成功,将形成示范效应——其他企业级 L1(JPM Kinexys 公链化路径若启动 · 或其他 stablecoin 链)可能跟进。

**对 Ethereum L1 的反身效应**:restaking 让 ETH 不只是"L1 gas + staking yield" · 还成为 **加密经济安全的基础资产**——类似美元成为"全球抵押品"。这是 ETH 长期价值的最大叙事支柱(可能比 ultrasound money 更重要)。

## Counterpoints

**Vitalik 警告的核心**:EigenLayer 不应过度扩展到"应用层共识"——若 Tempo / Arc 等 L1 大规模采用 restaking,Ethereum L1 的共识与外部服务的共识深度耦合,系统性风险传染概率上升。

**实际采用障碍**:Circle 自己 IPO 后 $4.34B treasury,有自建 validator 经济能力;Stripe 同样资金雄厚。是否真愿意把 L1 安全外包给 EigenLayer(每年支付 restaking yield)而不是自己直接担保,这是商业决策而非技术决策。

## Open questions

- Arc / Tempo 是否真会采用 EigenLayer · 时间表?
- "restaking-secured permissioned BFT" 的具体技术 spec 何时公布?
- 若 EigenLayer L1 启动伞业务起飞,EIGEN token 估值的天花板?
- Ethereum 社区会否对"L1 restaking 化"形成共识压力?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-avs-mechanism|AVS Mechanism]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT Rust(L1 共识对照)]]
<!-- /wiki-links:managed -->

## Sources


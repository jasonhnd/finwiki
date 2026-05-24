---
title: EigenLayer 概览 · Restaking 与 Ethereum 加密经济安全租赁
aliases: [eigenlayer-overview, restaking-overview, eigen-protocol]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, staking, restaking, eigenlayer, ethereum, security]
sources: []
status: candidate
---

# EigenLayer 概览 · Restaking 与 Ethereum 加密经济安全租赁


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-avs-mechanism|EigenLayer AVS 机制 · Operator · Slashing · EIGEN 仲裁]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2023-06 主网上线 ^[extracted]
- TVL 150 亿+ USD(2025 中) ^[extracted]
- 40+ AVS 已上线(EigenDA / Hyperlane / AltLayer / Espresso / Lagrange 等) ^[extracted]
- EIGEN token 2024-10 上线 · 用于 inter-subjective dispute resolution ^[extracted]
- Slashing 机制 2025 启用——AVS 可定义自定义 slashing 条件 ^[extracted]

## Mechanism / How it works

传统加密经济安全是 **bootstrapping 问题**:新 L1 需要原生 token 质押才能启动 BFT,但启动初期 token 市值低 → 攻击成本低 → 没人敢用。跨链桥 / Oracle / DA 层等"中间件"也需要独立 validator 集合,各自募集质押资本,极度低效。

EigenLayer 解法:**把 ETH 这个最深的 staking 池"出租"给任何需要 BFT-style 验证的服务**。质押人额外赚收益,新服务获得即时安全,Ethereum L1 不受损(双重 slashing 保证)(参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX 敞口]])。

类比:把 SWIFT 已有的 KYC 银行网络"租"给新支付公司,而不是每家都自建。

**核心组件**:
- **Operators**:节点运营商,质押 ETH(或代他人质押),选择性 opt-in 各 AVS
- **AVS**:需要外部验证的服务,定义自己的 slashing 条件
- **EigenPods**:接收 ETH staking rewards 的合约,允许 native restaking
- **Strategies**:支持 LST(stETH、rETH、cbETH 等)的 restaking

## Origin & evolution

EigenLayer 由 Sreeram Kannan 团队(原 UW 教授)2021 年提出 restaking 论文,2023-06 主网启动。早期定位是"模块化区块链时代的安全层",目标客户是 Celestia 竞品(EigenDA)、跨链桥(Hyperlane)、shared sequencer(Espresso)。

2024-10 EIGEN token 上线,引入 inter-subjective dispute resolution 概念——当 AVS 出现"主观"违规(如 oracle 报价偏离市场,无法密码学证伪),EIGEN 持有人投票决定是否 slash。2025 启用 slashing 后,EigenLayer 从"承诺机制"进入"实际经济安全市场"(对照 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] 中加密原生侧的演化)。

## Counterpoints

**Rehypothecation 风险**——一笔 ETH 同时保 N 个 AVS,如果多个 AVS 同时被攻击,系统性 slash 可能引发"crypto-economic bank run"。Vitalik 多次警告(2024)EigenLayer 不应过度扩展到 "应用层共识"——这是 Ethereum 社区的核心张力点。

另外 EIGEN 的 inter-subjective dispute 模型本质是"代币持有人投票"——在金额足够大时可能被资本操控,这与"加密经济安全"的初衷有内在矛盾。

## Open questions

- Slashing 启用后 1 年内实际 slash 事件数量和金额?
- Rehypothecation 系数(平均一笔 ETH 同时保几个 AVS)?
- Vitalik 警告是否会演化为 Ethereum 社区限制 EigenLayer 扩张的具体行动?
- Tempo / Arc 等新 L1 是否真会采用 EigenLayer 启动期安全?(对照 [[exchanges/global-dex-major-five-comparison|global DEX 主流五家对照]] 中各 DEX 对底层链安全的选择)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer Whitepaper(Sreeram Kannan et al.)

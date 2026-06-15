---
source: systems/eigenlayer-overview
source_hash: 926585c9820a3680
lang: zh
status: machine
fidelity: ok
title: "EigenLayer 概观 · Restaking 与 Ethereum 加密经济安全的租赁"
translated_at: 2026-06-15T04:09:41.214Z
---

# EigenLayer 概观 · Restaking 与 Ethereum 加密经济安全的租赁

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 之下。请将其与 [[systems/eigenlayer-avs-mechanism|EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁]] 对照阅读以了解同类／对比背景，并与 [[fintech/INDEX|fintech index]] 对照以了解更广义的系统／监管边界。

## 关键事实

- 2023-06 主网上线 ^[extracted]
- TVL 150 億+ USD（2025 中） ^[extracted]
- 40+ AVS 已运行（EigenDA / Hyperlane / AltLayer / Espresso / Lagrange 等） ^[extracted]
- EIGEN token 2024-10 上线 · 用于 inter-subjective dispute resolution ^[extracted]
- Slashing 机制 2025 启动 —— AVS 可自定义 slashing 条件 ^[extracted]

## Restaking Mechanism and AVS Workflow

传统的加密经济安全存在 **bootstrapping 问题**：新 L1 需要以原生 token 的质押来启动 BFT，但在启动初期 token 市值较低 → 攻击成本低 → 没人有勇气使用。跨链桥 / Oracle / DA 层等「中间件」也需要独立的 validator 集合，且各自都要汇集质押资本，极为低效。

EigenLayer 的解决方案：**将 ETH 这一最深的 staking 池「租借」给任何需要 BFT 风格验证的服务**。质押者获得额外收益，新服务获得即时安全，Ethereum L1 不受损（双重 slashing 保证）（参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]）。

类比：SWIFT 将其已经拥有的 KYC 银行网络「租给」新的支付公司，而不是让各家分别自行构建。

**核心组件**：
- **Operators**：节点运营者，质押 ETH（自身或代理他人）并选择性地 opt-in 各 AVS
- **AVS**：需要外部验证的服务，定义自身的 slashing 条件
- **EigenPods**：接收 ETH staking rewards 的合约，允许 native restaking
- **Strategies**：支持 LST（stETH、rETH、cbETH 等）的 restaking

## Origin & evolution

EigenLayer 由 Sreeram Kannan 团队（前 UW 教授）于 2021 年提出 restaking 论文，并于 2023-06 启动主网。初期定位为「模块化区块链时代的安全层」，目标客户为 Celestia 竞品（EigenDA）、跨链桥（Hyperlane）、shared sequencer（Espresso）。

2024-10 上线 EIGEN token，并引入 inter-subjective dispute resolution 概念 —— 当 AVS 出现「主观」违规（如 oracle 报价偏离市场，在密码学上无法反证）时，由 EIGEN holder 投票决定是否 slash。在 2025 启动 slashing 之后，EigenLayer 从「承诺机制」转向「实际的经济安全市场」（与 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] 中加密原生一侧的演进相对照）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer Whitepaper（Sreeram Kannan et al.）
- EigenLayer docs — https://docs.eigenlayer.xyz/

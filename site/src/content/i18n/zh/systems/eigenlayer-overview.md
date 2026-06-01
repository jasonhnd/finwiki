---
source: systems/eigenlayer-overview
source_hash: 16b200ca9a060572
lang: zh
status: machine
fidelity: ok
title: "EigenLayer 概览 · Restaking 与 Ethereum 加密经济安全的租赁"
translated_at: 2026-06-01T04:15:40.109Z
---
# EigenLayer 概览 · Restaking 与 Ethereum 加密经济安全的租赁

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/eigenlayer-avs-mechanism|EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁]] 获取同类 / 对比背景，并结合 [[fintech/INDEX|fintech index]] 把握更广泛的系统 / 监管边界。

## 关键事实

- 2023-06  主网上线 ^[extracted]
- TVL 超过 150 億+ USD（2025  中） ^[extracted]
- 40+ 个 AVS 已运行（EigenDA / Hyperlane / AltLayer / Espresso / Lagrange 等） ^[extracted]
- EIGEN token 于 2024-10  上线，用于 inter-subjective dispute resolution ^[extracted]
- Slashing 机制于 2025  启动——AVS 可自定义 slashing 条件 ^[extracted]

## 机制 / 工作方式

传统加密经济安全存在 **bootstrapping 问题**：新的 L1  需要通过原生 token staking 来启动 BFT，但在启动早期 token 市值较低 → 攻击成本低 → 没有人敢使用。跨链桥 / Oracle / DA 层等“中间件”也需要独立的 validator 集合，并且各自必须募集 staking 资本，效率极低。

EigenLayer 的解决方案：**把 ETH 这一最深的 staking 池“出租”给任何需要 BFT 风格验证的服务**。质押者获得额外收益，新服务立即获得安全性，Ethereum L1  不受损害（双重 slashing 保证）（参见 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]）。

类比：这类似于 SWIFT 将其既有的 KYC 银行网络“出租”给新的支付公司，而不是让每家公司单独构建。

**核心组件**：
- **Operators**：节点运营者，质押 ETH（自有或代他人），并选择性地 opt-in 各个 AVS
- **AVS**：需要外部验证的服务，定义自身的 slashing 条件
- **EigenPods**：接收 ETH staking rewards 的合约，允许 native restaking
- **Strategies**：支持 LST（stETH、rETH、cbETH 等）的 restaking

## 起源与演进

EigenLayer 由 Sreeram Kannan 团队（前 UW 教授）在 2021 年 提出 restaking 论文，并于 2023-06  启动主网。初始定位是“模块化区块链时代的安全层”，目标客户包括 Celestia 竞争项（EigenDA）、跨链桥（Hyperlane）以及 shared sequencer（Espresso）。

2024-10  上线 EIGEN token，并引入 inter-subjective dispute resolution 概念——当 AVS 中出现“主观”违规（例如 oracle 报价偏离市场，且无法用密码学方式反证）时，由 EIGEN holder 投票决定是否 slash。在 2025  启动 slashing 后，EigenLayer 从“承诺机制”转向“实际的经济安全市场”（可与 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] 中加密原生侧的演进对照）。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## 来源

- EigenLayer Whitepaper(Sreeram Kannan et al.)
- EigenLayer docs — https://docs.eigenlayer.xyz/

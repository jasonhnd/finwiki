---
source: systems/eigenlayer-l1-bootstrapping
source_hash: a3f644f926eca2ec
lang: zh
status: machine
fidelity: ok
title: "EigenLayer 对新 L1  启动期安全的支持 · Tempo/Arc 潜在路径"
translated_at: 2026-06-01T04:15:40.097Z
---
# EigenLayer 对新 L1  启动期安全的支持 · Tempo/Arc 潜在路径

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 下。请与 [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] 对照阅读，以获得同类 / 对比背景；更广泛的系统 / 监管边界请参阅 [[fintech/INDEX|fintech index]]。

## 关键事实

- Arc 已公开讨论 restaking-secured permissioned BFT 模型 ^[extracted]

## 机制 / 工作方式

新 L1 在启动期会面对 bootstrapping 问题：原生 token 市值低 → 攻击成本低 → 用户害怕使用 → 流量低 → token 价值无法上升 → 死循环。

**3 个解决方案**：

| 选项 | 含义 | 适用场景 |
|---|---|---|
| **A. 自有 validator 集合** | 古典 L1 路径 · 发行 token + 激励 + 长期 bootstrapping | 加密原生项目 · 有时间窗口 |
| **B. 通过 EigenLayer AVS 启动** | 启动期租用 ETH 安全性 · 逐步迁移到自有 token | 企业级 L1 · day-1 安全性必需 |
| **C. 混合型（BFT + restaking 强化）** | 自有 validator + restaking 经济补强 · 降低 51% 攻击成本 | 有 token 发行需求且也需要快速启动 |

**Tempo / Arc 几乎必然是选项 B/C**：
- Tempo（Stripe）需要面对 Stripe 客户（大型商户企业）· 无法容忍启动期攻击
- Arc（Circle）是 USDC 主战场 · 安全风险 = Circle 公司风险
- 两者都不能通过“承诺未来 token 升值”来交换启动期安全 · 必须借用已经成熟的 ETH 经济安全性

## 起源与演进

EigenLayer 的初期定位是模块化中间件（DA / Oracle / 跨链桥）的安全层 · L1 启动保护伞是 2024-2025 年的扩展方向。Hyperlane 是采用 EigenLayerISM（restaking-secured 跨链消息验证）的最早案例之一 · 验证了“用 ETH 为非 Ethereum 服务提供担保”的可能性。

如果 Tempo / Arc 采用 EigenLayer 路径并取得成功，将产生示范效应 —— 其他企业级 L1（JPM Kinexys 的公链化路径是否启动 · 其他稳定币链）可能跟随。

**对 Ethereum L1 的反身性影响**：通过 restaking，ETH 不仅是“L1 gas + staking yield”，还成为**加密经济安全的基础资产** —— 类似美元成为“全球抵押资产”。这是 ETH 长期价值最大的叙事支柱（可能比 ultrasound money 更重要）（与 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 中 CEX 侧的演进形成对照）。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-avs-mechanism|AVS Mechanism]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT Rust(L1 コンセンサス対照)]]
<!-- /wiki-links:managed -->

## 来源

- EigenLayer docs — https://docs.eigenlayer.xyz/

---
source: fintech/cbdc-multi-tier-architecture-tradeoffs
source_hash: 67c33bd5b5347093
lang: zh
status: machine
fidelity: ok
title: "CBDC 架构选择 4 大权衡"
translated_at: 2026-05-31T05:31:05.780Z
---

# CBDC 架构选择 4 大权衡

## Wiki 路由

本条目位于 [[fintech/INDEX|fintech index]]。相邻监管语境见 [[fintech/japan-financial-regulation|日本金融监管：代币、加密资产与支付法体系]]；更广泛的制度边界见 [[fintech/japan-stablecoin-regulatory-landscape|日本稳定币法制的三层结构（JPYC、USDC、Project Pax）]]。

> [!info] TL;DR
> 中央银行在选择 CBDC 架构时，面临 4 个核心权衡: **金融中介的存续 vs 中央银行直连**（决定商业银行的命运）、**货币主权 vs 跨境互操作性**（决定与批发型 CBDC 走廊的关系）、**隐私 vs 反洗钱**（决定中央银行的可见性）、**创新空间 vs 系统稳定**（决定可编程性）。所有现役 CBDC 设计都是这 4 项权衡的不同组合。

## Key facts

- 直接 CBDC 将商业银行边缘化 → 政治上不可接受 → G10 中央银行无一采用 ^[extracted]
- 二层架构在域内强、在跨境弱 → 需要批发型 CBDC 走廊（mBridge / Agorá）^[extracted]
- token-based 多层天然亲和跨境，但威胁主权货币层级 ^[extracted]
- 直接 CBDC 赋予中央银行最强的 AML 能力，但隐私为零 ^[extracted]
- 二层由商业银行承担 KYC，中央银行不直接看到用户 ^[extracted]
- token-based 多层可在加密层调节隐私，但合规成本高 ^[extracted]
- 智能合约的可编程性是 token-based 多层的主要创新空间 ^[extracted]

## 架构机制与权衡变量

**1. 金融中介的存续 vs 中央银行直连**: 直接 CBDC 将商业银行边缘化 → 金融中介的崩溃 → 中央银行被迫承担信用配置（直接向企业放贷）→ 政治上不可接受。主要中央银行均保护银行存款基础（二层或多层）。这正是 G10 中央银行无一采用直接 CBDC 的原因。

**2. 货币主权 vs 跨境互操作性**: 二层架构在域内强（完整的中央银行 → 商业银行 → 用户的控制链）但在跨境弱（需要借助 [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 等批发型 CBDC 走廊）。token-based 多层天然亲和跨境（token 规格的互操作）但威胁主权货币层级（本国的代币化存款可能在海外流通）。这正是 e-CNY 选择二层 + mBridge 跨境补充的逻辑。

**3. 隐私 vs 反洗钱**: 直接 CBDC = 中央银行完全可见，AML 最强但隐私为零（欧洲反对最大）。二层 = 商业银行承担 KYC，中央银行不直接看到用户，契合现行金融隐私规范。token-based 多层 = 可在加密层（零知识证明 / 阈值签名）调节隐私，但合规成本高，监管侧学习曲线陡峭。

**4. 创新空间 vs 系统稳定**: token-based 多层（智能合约）的创新空间最大，但需要新一代基础设施（EVM / token 规格 / 链原生开发栈）。二层最稳定但创新天花板低（账户系统本质上不可编程）。e-CNY 选择二层是稳定优先，DREX 选择 token-based 是创新优先。

## Origin & evolution

2017-2020 BIS / IMF 的早期 CBDC 框架几乎只讨论“直接 vs 二层”的二分法，创新维度尚未浮现。2020-2022 Hyperledger / Corda 等企业 DLT 在 PoC 阶段验证了可编程性 → “token-based 多层”作为第 3 选项浮现。2022-2024 各中央银行基于自身政治 / 监管偏好进行权衡: 中国稳定优先（e-CNY 二层）、巴西创新优先（DREX token-based）、欧元区在中介保护与可编程性之间妥协（数字欧元的混合 + 持有上限）。2026+ 三方 MRA（欧 [[fintech/mica-overview|MiCA]] + 美 [[fintech/genius-act-501-denylist-mandate|GENIUS]] + 港 [[fintech/hkma-stablecoin-licensing-overview|HKMA]]） + 批发型 CBDC 走廊（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] + [[fintech/bis-project-agora-overview|Agorá]]）进一步约束了架构选择空间。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト · 通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources

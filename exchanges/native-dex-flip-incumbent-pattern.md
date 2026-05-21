---
title: L2 原生 DEX 反超 incumbent 模式
aliases: [Aerodrome flip Uniswap, native DEX flip, L2 incumbent flip pattern, ve33 host alignment flip]
domain: exchanges
kind: knowledge
topic: native-dex-flip-incumbent-pattern
created: 2026-05-16
last_updated: 2026-05-16
last_tended: 2026-05-16
review_by: 2026-11-16
confidence: likely
tags: [fintech, defi, dex, l2, aerodrome, uniswap, base, ve33]
status: candidate
sources: []
---

# L2 原生 DEX 反超 incumbent 模式


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> [!info] TL;DR
> EVM 多链历史中，原生 DEX 在 L2 主场反超 incumbent（通常 Uniswap）极罕见。**Aerodrome 在 Base 上反超至 63% DEX 量份额**，是首个有完整复盘的案例。其机制 = ve(3,3) + L2 主导方利益绑定 + 关键 wrapped 资产配对池 + 跨链合并复制。

**核心机制**：

1. **ve(3,3) emission 引导**：Aerodrome 用 Velodrome (v2) 架构，veAERO 投票决定 emission 流向
2. **L2 主导方持仓**：Coinbase Ventures 持显著 veAERO，可定向引导 emission
3. **关键资产护城河**：cbBTC / cbETH 等只在 Base 原生的 wrapped 资产强化"必须在 Aerodrome 交易"的诉求
4. **稳定币基础对**：USDC 主导池子集中在 Aerodrome（与 Coinbase USDC 关系协同）
5. **跨链合并复制**：Aero + Velo 合并 94.5:5.5，扩展至 Ethereum L1 + Circle Arc，复制模式而非局限单链

**反超 KPI（Aerodrome × Base）**：

- 2024-Q4：Aerodrome 量份额 ~35% on Base
- 2025-Q2：50% on Base
- 2025-Q4：63% on Base，**首次稳定超过 Uniswap**
- 2026-Q1：合并 Aero 宣布，扩展 Ethereum + Arc

**反超条件清单（必要 + 充分）**：

| # | 条件 | Aerodrome | Uniswap 反例（其他链）|
|---|---|---|---|
| 1 | ve emission 引导治理 | 有 veAERO | 无（UNI 无 emission）|
| 2 | L2 主导方持仓 | Coinbase Ventures | 无主导方支持 |
| 3 | 关键 wrapped 资产 | cbBTC / cbETH | 无原生独占资产 |
| 4 | 主导方利益对齐 | Coinbase USDC + Base + Aero 三角 | Uniswap 跨链中立 |
| 5 | Bribe market 效率 | Aero 高 bribe ROI | Uniswap v3 无 bribe 机制 |

**通用性 / 可推广至**：

- Solana：Orca / Raydium 已部分实现（vs Uniswap 跨链）
- Polygon：QuickSwap 历史尝试但失败（缺主导方持仓）
- 未来 Arc：Curve fork + Circle Ventures 持仓 + USDC 主场，**复制可能性高**
- 未来 Tempo：可能孵化 Stripe + Paradigm 联合背书 DEX
- 任何 L1/L2 主导方愿意持 ve 头寸的链 + ve(3,3) 类 DEX 组合

**反例 / 边界**：

- L2 主导方不持仓时，反超不会发生（Optimism 早期）
- DEX 不用 ve 模型时（Uniswap v3 集中流动性），无 emission 引导
- incumbent 推出原生 L2 链上版本时（Uniswap v4 + UniChain），可能逆转

**估值 / 决策含义**：

- veAERO 估值应包含"主导方持仓承诺"溢价
- 主导方（Coinbase）估值应包含"DEX 飞轮"现金流分项（见 [[exchanges/vetoken-host-protocol-flywheel|veToken 飞轮]]）
- 投资判断：在 L2 主导方公开持 ve 头寸前 6 个月入场原生 DEX = 高 alpha
- 监管风险：反超事件可能触发 SEC 关注"未注册证券分销"


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × 主导方飞轮]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密原生]]
<!-- /wiki-links:managed -->

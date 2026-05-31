---
source: exchanges/native-dex-flip-incumbent-pattern
source_hash: 932d4e56cb321fcd
lang: zh
status: machine
fidelity: ok
title: "L2 原生DEX逆转incumbent的模式"
translated_at: 2026-05-31T06:16:15.688Z
---

# L2 原生DEX逆转incumbent的模式


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> [!info] TL;DR
> 在EVM多链历史上，原生DEX在L2主场超越incumbent（通常为Uniswap）的案例极为罕见。**Aerodrome在Base上将DEX交易量份额逆转至63%**，是首个可进行完整回顾分析的案例。机制为ve(3,3) + L2 宿主方利益对齐 + 核心wrapped资产对池 + 跨链整合复制的组合。

**核心机制**:

1. **ve(3,3) emission引导**：Aerodrome采用Velodrome (v2)架构，通过veAERO投票决定emission流向（基础机制参见[[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]]）
2. **L2 宿主方持仓**：Coinbase Ventures持有显著的veAERO，可定向引导emission
3. **核心资产护城河**：cbBTC / cbETH等Base原生wrapped资产强化了"在Aerodrome交易的必要性"
4. **稳定币基轴对**：USDC主导的流动性池集中于Aerodrome（Coinbase与USDC关系的协同效应）
5. **跨链整合复制**：Aero + Velo以94.5:5.5比例整合，向Ethereum L1  + Circle Arc扩展，不局限于单一链而复制模式

**逆转KPI（Aerodrome × Base）**:

- 2024-Q4：Aerodrome在Base上的交易量份额约35%
- 2025-Q2：50%（在Base上）
- 2025-Q4：63%（在Base上），**首次稳定超越Uniswap**
- 2026-Q1：发布整合版Aero，向Ethereum + Arc扩展

**逆转条件清单（必要+充分）**:

| # | 条件 | Aerodrome | Uniswap反例（其他链） |
|---|---|---|---|
| 1  | ve emission引导治理 | 有veAERO | 无（UNI无emission） |
| 2  | L2 宿主方持仓 | Coinbase Ventures | 无宿主方支持 |
| 3  | 核心wrapped资产 | cbBTC / cbETH | 无原生独占资产 |
| 4  | 宿主方利益对齐 | Coinbase USDC + Base + Aero三角结构 | Uniswap跨链中立 |
| 5  | Bribe市场效率 | Aero的bribe ROI高 | Uniswap v3无bribe机制 |

**通用性/可横向拓展领域**:

- Solana：Orca / Raydium已部分实现（对比Uniswap跨链版本）
- Polygon：QuickSwap历史上曾尝试但失败（缺乏宿主方持仓）
- 未来的Arc：Curve fork + Circle Ventures持仓 + USDC主场，**可复制性高**
- 未来的Tempo：由Stripe + Paradigm联合支持的DEX存在孵化可能性
- L1/L2宿主方持有ve权益意愿的链 + 任意ve(3,3)型DEX的组合（参见[[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]与[[exchanges/amm-design-evolution|AMM design evolution]]的设计基准）

**反例/边界条件**:

- L2宿主方不持仓的情况下不会发生逆转（Optimism早期）
- DEX未采用ve模型的情况（Uniswap v3集中流动性），emission引导不可行
- incumbent发布原生L2链版本的情况（Uniswap v4  + UniChain），存在被逆转的可能

**估值/决策含义**:

- veAERO估值应包含"宿主方持仓承诺"溢价
- 宿主方（Coinbase）估值应包含"DEX飞轮"现金流项（参见[[exchanges/vetoken-host-protocol-flywheel|veToken フライホイール]]）
- 投资判断：在L2宿主方公开持有ve权益的6个月前进入原生DEX = 高alpha
- 监管风险：逆转事件可能引起SEC对"未注册证券销售"的关注


## Sources

- Aerodrome Finance合约规范（Velodrome/Solidly派生的ve(3,3) DEX·veAERO投票引导emission这一逆转机制的一次资料）— https://github.com/aerodrome-finance/contracts/blob/main/SPECIFICATION.md
- Coinbase官方博客"Coinbase Wrapped BTC (cbBTC) is now live"（Base原生wrapped资产cbBTC与Aerodrome整合）— https://www.coinbase.com/blog/coinbase-wrapped-btc-cbbtc-is-now-live
- Uniswap v3-core代码库（incumbent反例：不具备emission/bribe机制的集中流动性DEX）— https://github.com/Uniswap/v3-core

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × ホスト側フライホイール]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン金利分配]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号資産ネイティブ]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[exchanges/amm-design-evolution|AMM design evolution]]
- [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
<!-- /wiki-links:managed -->

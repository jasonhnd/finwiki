---
title: veToken × 主导方 DEX 自循环飞轮 —— L2/L1 主导方的链上闭环
aliases: [veToken flywheel, cbBTC veAERO flywheel, L2 host protocol flywheel, ve33 host alignment]
domain: exchanges
kind: knowledge
topic: vetoken-host-protocol-flywheel
created: 2026-05-16
last_updated: 2026-05-16
last_tended: 2026-05-16
review_by: 2026-11-16
confidence: certain
tags: [fintech, defi, dex, vetoken, l2, base, aerodrome, coinbase, flywheel]
status: candidate
sources: []
---

# veToken × 主导方 DEX 自循环飞轮


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> [!info] TL;DR
> L1/L2 主导方通过持有原生 DEX 的 ve 治理代币，引导 emission 流向自家关键资产池（如 wrapped BTC），既获得排他性流动性，又在该资产托管费上完成 **链上闭环回流主业**。Coinbase × Aerodrome × cbBTC 案例年化 **$130–250M**，是 EVM 多链历史中首个被定量验证的"主导方-DEX"自循环结构。

**核心机制**：

1. L1/L2 主导方（运营公司或其投资部门）持有原生 DEX 的 ve 治理代币
2. 用治理票引导 emission → 自家关键资产配对池（cbBTC/USDC、cbBTC/ETH 等）
3. 排他性深度流动性吸引机构使用主导方的 wrapped 资产，扩大托管 AUM
4. 托管费 / 储备金收益 / 借贷 spread **回流主业财报**
5. 主业现金流再投入 ve 头寸或 emission 引导，飞轮自加速

**典型量级（cbBTC × veAERO × Coinbase）**：

- cbBTC 在 Base TVL **$839M**，流通 **89,000 BTC**，市值 $6.1B
- Aerodrome 在 Base DEX 量份额 **63%**，反超 Uniswap
- 自循环年化估算 **$130–250M**（托管费 + 储备收益 + spread）
- Aerodrome + Velodrome 2026 合并为 Aero（94.5% : 5.5%），扩张至 Ethereum L1 + Circle Arc，**飞轮跨链复制**

**触发条件**：

- 主导方有 wrapped / native 资产（cbBTC、cbETH、sUSDe、stETH 等）
- 链上 DEX 采用 ve(3,3) 类 emission 引导治理
- 主导方持有 ve 头寸足够引导关键池子（一般 >10%）
- 主导方 / DEX / 资产之间无监管禁止的关联交易约束

**通用性 / 可推广至**：

- Lido × Curve × ETH 主导方（历史早期范式）
- Coinbase × Aerodrome × cbBTC / cbETH（本案）
- 未来 Arc × Curve fork × USDC 配对池
- 任何 L2 推出 wrapped BTC / native stablecoin 同时孵化 ve-DEX 的组合

**反例 / 边界**：

- 主导方不发原生 wrapped 资产时（如 Optimism 早期）飞轮缺失资产腿
- DEX 不用 ve emission（如 Uniswap v2/v3）则无法引导
- 资产池被 incumbent（Uniswap）锁定时，emission 引导效果递减
- 主导方上市公司 / 合规体（如 Coinbase 是 SEC reporting issuer）需披露关联交易，财报会暴露飞轮利润

**估值 / 决策含义**：

- 主导方估值应增加 "DEX-flywheel 现金流" 分项，单独折现
- 反过来：DEX 的 veToken 估值受主导方"长期持仓"承诺影响，集中度风险显著
- 飞轮可被 incumbent 反制（Uniswap 在 Base 失守即是直接案例）
- 监管层（SEC / OCC）若界定为"未注册证券分销"，飞轮可被切断


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 加密网络中立]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX 反超 incumbent]]
<!-- /wiki-links:managed -->

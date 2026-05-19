---
title: 稳定币公链 token 策略三态博弈（发币 / 不发 / 已发）
aliases: [token trilemma, stablecoin chain token strategy, L1 token game theory]
domain: fintech
kind: framework
topic: stablecoin-chain-token-strategy-trilemma
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-05-13
review_by: 2026-11-13
confidence: likely
tags: [fintech, blockchain, token, game-theory, framework]
status: candidate
sources: []
---

# 稳定币公链 token 策略三态博弈

> [!info] TL;DR
> 稳定币与支付公链在 "是否发行 native token" 的决策上呈现三种策略均衡：**摇摆中（Base 模式）** / **明确不发（Tempo 模式）** / **已发（Arc 模式）**。每一态绑定不同的资本群体、监管 trade-off 与时间窗口约束，且**一旦选定 3-5 年内难以反转**。

**三态决策矩阵**：

| 维度 | 摇摆中 | 明确不发 | 已发 |
|---|---|---|---|
| 典型案例 | Base | Tempo | Arc |
| 绑定资本 | 散户（airdrop 预期）+ 投资人（视发币动作而定）| 商户 + 传统机构 | Wall Street 机构 |
| 监管阻力 | 中等（取决于母公司身份）| 最低 | 最高（取决于 token 定性）|
| 短期套现窗口 | 中（押注未来发币）| 0（押注 10 年市场捕获）| 高（私募轮 + listing 杠杆）|
| 不可逆性 | 一旦发币即不可撤回 | 一旦承诺不发即难以再发 | 一旦发币即无法回收 |

**关键洞察**：

1. **三态均为稳定均衡**，不存在"显然更优"的策略 —— 选择取决于母公司身份（上市公司 vs 私有 vs 监管原生）、资本市场的叙事需求与监管窗口的开闭。
2. **时间不可逆**：Coinbase 的上市公司身份在 Base 早期阶段限制了发币能力，但 2025-09 SEC 撤诉、Hester Peirce 上任之后,该窗口已经打开。
3. **博弈论含义**：当 N 家竞争者中的 1 家突然改变策略（例如 Base 由摇摆转向发币），其余各态被迫重新计算（Tempo 是否仍可维持不发？Arc 是否需要加速 vesting？）。

**触发条件**：

- 母公司财务压力（净亏需要 token 叙事支撑估值）→ 摇摆 → 发币
- 监管窗口开启（SEC 撤诉 / 政府换届）→ 摇摆 → 发币
- 关键人物多重身份切割 → 不发 → 摇摆（例如 Matt Huang 三重身份未来若被切割,Tempo 可能重估其立场）

**反例 / 例外**：Ethereum L2（Arbitrum / Optimism / zkSync 等）大多已经发币,但其与稳定币、支付公链的"内化收入"动机不同。本框架仅适用于**稳定币原生 / 支付定位**的公链。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

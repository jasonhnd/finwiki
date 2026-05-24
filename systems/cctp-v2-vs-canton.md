---
title: CCTP V2 vs Canton · 公链路线 vs 私链路线根本对峙
aliases: [cctp-vs-canton, public-vs-private-stablecoin-rails, circle-vs-jpm]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, bridge, dlt, stablecoin, cctp, canton, comparison]
sources: []
status: candidate
---

# CCTP V2 vs Canton · 公链路线 vs 私链路线根本对峙


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-overview|CCTP V2 概览 · Circle USDC 跨链 burn-and-mint]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM Kinexys 2026-01 明确不集成 CCTP V2(`kinexys/technology.md §4.2`) ^[extracted]
- CCTP V2 是公链联盟(Circle + Arc + 18 链)清算基础设施 ^[extracted]
- Canton 是私链联盟(GS + BNY + JPM + DTCC)清算基础设施 ^[extracted]
- Arc 链是 CCTP V2 原生家园,USDC 即 Arc gas ^[extracted]
- §501 入榜本质上是 CCTP attestation 白名单 ^[inferred]

## Mechanism / How it works

两条路线的根本差异:

| 维度 | CCTP V2(公链路线) | Canton(私链路线) |
|---|---|---|
| 流动性主权 | Circle 单点 mint/burn | 银行联盟内部记账 |
| 跨链方式 | burn-and-mint(无 wrapped) | DAML 跨 application 原子调用 |
| 隐私 | 公链全公开 + denylist 过滤 | Sub-transaction privacy 默认 |
| 价值归属 | Circle + 公链生态 | 银行联盟(GS/BNY/JPM/DTCC) |
| 监管模型 | Circle 自我合规 + §501 denylist | Regulator Node 内嵌 |
| 用户类型 | 加密原生 + 部分机构 | 纯机构客户 |

**JPM Kinexys 选择**:[[fintech/jpmorgan-jpmd-coin|JPMD]] 不集成 CCTP V2 而是迁回 Canton——理由(1) Coinbase Custody 客户在 Base 上 holdings 可被 chain analysis 反推;(2) Canton 原生支持 multi-party atomic settlement;(3) DAML 比 Solidity 更适合金融合约;(4) JPM 是 Canton 创始成员的战略一致性。

**Circle Arc 选择**:Arc 链直接押 CCTP V2 + USDC 即 gas + §501 合规叙事,**绕开 Coinbase Base 分润($200M/年)**——这是 Circle 去-Coinbase 化的核心动作。

## Origin & evolution

2024-2025 间机构 tokenization 进入路线选择窗口期。Circle 路径(CCTP V1 → V2 → Arc)和 JPM 路径(JPMD on Base → JPMD on Canton)同步演进但走向相反。2026-01 JPM 公开宣布主战场迁 Canton,标志公私链分裂正式定型。

预期未来 5 年:**公链路线**(CCTP V2 + Arc + Base + [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]])主导加密原生 + DeFi + 跨境零售;**私链路线**(Canton + JPMD + GS DAP + BNY LiquidityDirect)主导机构 collateral management + 大额清算。两条路线在 §501 入榜地条款约束下,**形成"美元合规圈"内部的并行体系**(参见 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]])。

## Counterpoints

公链路线劣势:Circle 单点信任 + 集中化风险 + 监管易受国家强制(OFAC Tornado Cash 案例)。私链路线劣势:联盟治理成本高 + 缺少零售/DeFi 入口 + 创新速度慢(DAML 生态小)。

中长期可能出现"混合路线"——例如 BlackRock BUIDL 在公链发行同时通过 Canton 提供机构 wrapper · 或 JPMD 在 Canton 主战场同时保留 Base 上的零售接入。当前(2026-Q1)路线对立可能在 2027-2028 间松动。

## Open questions

- Canton 联盟是否会推出与 CCTP V2 对接的"私链版桥"?
- §501 入榜地条款是否会强制公私链互操作?
- 5-10 年视角下两条路线的市场份额分配?
- Stripe Tempo 的路线选择(目前未明)如何影响平衡?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
<!-- /wiki-links:managed -->

## Sources


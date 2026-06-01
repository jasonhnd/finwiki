---
source: systems/cctp-v2-vs-canton
source_hash: b9f333306f5f0e91
lang: zh
status: machine
fidelity: ok
title: "CCTP V2 vs Canton · 公链路线 vs 私有链路线的根本对峙"
translated_at: 2026-06-01T04:15:40.153Z
---
# CCTP V2 vs Canton · 公链路线 vs 私有链路线的根本对峙

## Wiki 路径

本条目位于 [[systems/INDEX|系统索引]] 下。可结合 [[systems/cctp-v2-overview|CCTP V2 概览 · Circle USDC 跨链 burn-and-mint]] 阅读同业与对比语境，并结合 [[fintech/INDEX|金融科技索引]] 理解更广泛的系统与监管边界。

## 关键事实

- JPM Kinexys 明确表示在 2026-01 不会集成 CCTP V2 (`kinexys/technology.md §4.2`) ^[extracted]
- CCTP V2 是公链联盟(Circle + Arc + 18 条链)的清算基础设施 ^[extracted]
- Canton 是私有链联盟(GS + BNY + JPM + DTCC)的清算基础设施 ^[extracted]
- Arc 链是 CCTP V2 的原生主场，USDC 是 Arc 的 gas ^[extracted]

## 机制与运作

两条路线的根本差异:

| 维度 | CCTP V2(公链路线) | Canton(私有链路线) |
|---|---|---|
| 流动性主权 | Circle 单独 mint/burn | 银行联盟内部记账 |
| 跨链方式 | burn-and-mint(无 wrapped) | DAML 应用间原子调用 |
| 隐私 | 公链完全公开，并以 denylist 过滤 | 默认启用 sub-transaction privacy |
| 价值归属 | Circle + 公链生态系统 | 银行联盟(GS/BNY/JPM/DTCC) |
| 监管模型 | Circle 自我合规 + §501 denylist | 内置 Regulator Node |
| 用户类型 | 加密原生 + 部分机构 | 纯机构客户 |

**JPM Kinexys 的选择**:[[fintech/jpmorgan-jpmd-coin|JPMD]] 不集成 CCTP V2，而是回归 Canton。主要理由包括：(1) Coinbase Custody 客户在 Base 上的持仓可能通过链上分析被逆向推定；(2) Canton 原生支持 multi-party atomic settlement；(3) DAML 比 Solidity 更适合金融合约；(4) JPM 是 Canton 创始成员，战略一致性更高。

**Circle Arc 的选择**:Arc 链直接押注 CCTP V2、以 USDC 作为 gas，并围绕 §501 合规叙事构建定位，**回避向 Coinbase Base 的利益分配($200M/年)**。这是 Circle 去 Coinbase 化的核心举措。

## 起源与演进

2024-2025 年已经进入机构 tokenization 路线选择窗口期。Circle 路线(CCTP V1 → V2 → Arc)与 JPM 路线(JPMD on Base → JPMD on Canton)并行演进，但方向相反。2026-01，JPM 公开表示将主战场转向 Canton，公链 / 私有链分裂由此正式成型。

预计未来五年，**公链路线**(CCTP V2 + Arc + Base + [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]])将主导加密原生、DeFi 与跨境零售场景；**私有链路线**(Canton + JPMD + GS DAP + BNY LiquidityDirect)将主导机构 collateral management 与大额清算场景。两条路线将在 §501 入榜地条款约束下，**形成“美元合规圈”内部的并行体系**(参见 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]])。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Canton Network (Digital Asset) — https://www.canton.network/

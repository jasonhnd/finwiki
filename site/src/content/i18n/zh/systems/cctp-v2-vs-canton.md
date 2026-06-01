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

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]] 阅读以获得同业 / 对比语境，并结合 [[fintech/INDEX|fintech index]] 阅读以理解更广泛的系统 / 监管边界。

## Key facts

- JPM Kinexys 明确表示在 2026-01  不会集成 CCTP V2 (`kinexys/technology.md §4.2`) ^[extracted]
- CCTP V2  是公链联盟(Circle + Arc + 18 链)的清算基础设施 ^[extracted]
- Canton 是私有链联盟(GS + BNY + JPM + DTCC)的清算基础设施 ^[extracted]
- Arc 链是 CCTP V2  的原生主页，USDC 是 Arc 的 gas ^[extracted]

## Mechanism / How it works

2  路线的根本差异:

| 维度 | CCTP V2(公链路线) | Canton(私有链路线) |
|---|---|---|
| 流动性主权 | Circle 单独 mint/burn | 银行联盟内部记账 |
| 跨链方式 | burn-and-mint(无 wrapped) | DAML 应用间原子调用 |
| 隐私 | 公链完全公开 + denylist 过滤 | Sub-transaction privacy 默认 |
| 价值归属 | Circle + 公链生态系统 | 银行联盟(GS/BNY/JPM/DTCC) |
| 监管模型 | Circle 自我合规 + §501 denylist | 内置 Regulator Node |
| 用户类型 | 加密原生 + 部分机构 | 纯机构客户 |

**JPM Kinexys 的选择**:[[fintech/jpmorgan-jpmd-coin|JPMD]] 不集成 CCTP V2 ，而是回归 Canton——理由是(1) Coinbase Custody 客户在 Base 上的 holdings 可通过链上分析逆向推定；(2) Canton 原生支持 multi-party atomic settlement；(3) DAML 比 Solidity 更适合金融合约；(4) JPM 是 Canton 创始成员，具备战略一致性。

**Circle Arc 的选择**:Arc 链直接押注 CCTP V2  + 以 USDC 作为 gas + §501  合规叙事，**回避向 Coinbase Base 的利益分配($200M/年)**——这是 Circle 去 Coinbase 化的核心举措。

## Origin & evolution

2024-2025 年 已进入机构 tokenization 路线选择的窗口期。Circle 路线(CCTP V1 → V2 → Arc)与 JPM 路线(JPMD on Base → JPMD on Canton)并行演进，但方向相反。2026-01  JPM 公开表示将主战场转向 Canton，公链 / 私有链分裂正式定型。

预计未来 5  年:**公链路线**(CCTP V2 + Arc + Base + [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]])将主导加密原生 + DeFi + 跨境零售；**私有链路线**(Canton + JPMD + GS DAP + BNY LiquidityDirect)将主导机构 collateral management + 大额清算。2  路线将在 §501  入榜地条款约束下，**形成“美元合规圈”内部的并行体系**(参见 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]])。

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

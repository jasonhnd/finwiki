---
source: systems/canton-mmf-coalition
source_hash: 437925e68e594dbf
lang: zh
status: machine
fidelity: ok
title: "Canton MMF 联合 · JPM + GS + BNY + DTCC 的反 BlackRock 公链路线"
translated_at: 2026-06-01T04:15:40.117Z
---
# Canton MMF 联合 · JPM + GS + BNY + DTCC 的反 BlackRock 公链路线

## Wiki 路线

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] 阅读同类 / 对照背景，并结合 [[fintech/INDEX|fintech index]] 阅读更广泛的系统 / 监管边界。

## 关键事实

- JPM：JPMD（现金腿）+ MONY/JLTXX MMF 部署到 Canton ^[extracted]
- GS：GS DAP 平台 + 5 只 MMF 入驻（BlackRock / BNY Dreyfus / Federated / Fidelity / GSAM）^[extracted]
- BNY：LiquidityDirect（托管 + 客户界面）+ Dreyfus MMF ^[extracted]
- DTCC：Project Ion（Canton 上的 Treasury tokenization）在 2026-10  平台整体上线 ^[extracted]
- BlackRock / Fidelity / Federated 只是被动入驻 GS DAP 的资产管理公司 ^[extracted]

## 机制 / 运作方式

机构 tokenization 的「2 路线」对峙：

| 路线 | 公链路线（BlackRock BUIDL） | 私链路线（Canton 联合） |
|---|---|---|
| 平台 | Ethereum + 7+ 公链 | Canton Network |
| 入口 | Securitize（中立平台） | BNY LiquidityDirect（银行渠道） |
| 隐私 | 公开 + Securitize KYC | Sub-transaction privacy |
| 价值归属 | 资产管理公司 + 公链生态系统 | 银行（GS/BNY/JPM/DTCC） |
| 客户类型 | DeFi + 加密原生 + 机构混合 | 纯机构 + 传统 collateral mgmt |

**关键洞察**：Canton 联合的设计使「机构 MMF 全生命周期」的各阶段都由联合成员支配 —— cash（[[fintech/jpmorgan-jpmd-coin|JPM JPMD]]）+ 资产（GS DAP）+ custody（BNY）+ underlying Treasury（DTCC）。[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 作为 MMF 发行方，在 Canton 上只是 GS DAP 中的 1 个 MMF 选项之一，**价值归属和客户关系都不在 BlackRock 手中**。这与公链路线中 BlackRock 直接接触客户并与 Securitize 分润的结构形成鲜明对比（与 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] 对照）。

## 起源与演进

2024-2025 年 进入了机构 tokenization 的「路线选择」窗口期。BlackRock 通过 BUIDL（2024-03  上线）抢占公链路线先发位置，2025 年 年中 BUIDL TVL 突破 $1B。Canton 联合的反应：GS DAP 在 2024-2025 年 期间陆续引入 MMF → BNY LiquidityDirect 在 2025 年 向银行客户开放 → JPM Kinexys 在 2026-01  宣布将 JPMD 的主战场迁移到 Canton → DTCC Project Ion 在 2026-10  平台整体上线。

从时间线看，这是**应对措施** —— Canton 联合在 BlackRock 占据公链高地之后，反向构建闭环栈，并采取将价值重新锁定在银行体系内的战略。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-daml-technical-spec|DAML Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## 来源

- DTCC Project Ion announcements
- Canton Network (Digital Asset) — https://www.canton.network/

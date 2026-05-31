---
source: exchanges/dex-orca-solana
source_hash: 2df99fe3d5e1fdb1
lang: zh
status: machine
fidelity: ok
title: "Orca Whirlpools — Solana 系集中流动性 AMM overview"
translated_at: 2026-05-31T03:19:56.457Z
---

# Orca Whirlpools — Solana 系集中流动性 AMM overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dex-raydium-solana|Raydium]] for the Solana AMM peer comparison, [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the broader Solana DEX layer, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the system / design boundary.

> 2021-02  上线 · ORCA token · concentrated liquidity AMM（Whirlpools，类似 Uniswap v3 ）· 重视 retail UX

## 1. 协议概要

- **链**：Solana L1（SVM 环境）
- **模型**：concentrated liquidity AMM（Whirlpools 设计，与 Uniswap v3  功能类似）
- **上线**：2021-02（standard AMM）、2022-03（Whirlpools CLMM）
- **代币**：ORCA（governance、fee share）
- **官方 URL**：orca.so
- **TVL（2024–2026  概览）**：$300–500M 区间，占 Solana DEX TVL 的 5–10%
- **24h Volume**：持续占据 Solana DEX 整体的 10–20%

## 2. Whirlpools CLMM 的设计

Orca 的核心产品 **Whirlpools** 是将 Uniswap v3  的集中流动性概念实现于 Solana SVM 之上的 CLMM。LP 指定价格区间提供流动性，仅当交易处于指定区间内时才获取 fee。

- **fee tier**：0.01% / 0.05% / 0.3% / 1% 的 4  个档（按资产波动性选择）
- **tick spacing**：每个 fee tier 固定（细粒度区间管理）
- **LP NFT**：每个 LP 头寸以 NFT 形式表示（与 Uniswap v3  相同）
- **active liquidity**：区间外的流动性无法获取 fee（capital efficiency 与 LP 风险的权衡）

## 3. UX / 设计思想

Orca 自始即标榜 **"the most user-friendly DEX on Solana"**，以面向 retail 层的 UX 优先设计形成差异化：

- **Fair Price Indicator**：在 UI 上明示与 oracle 价格的偏离
- **简洁的 swap UI**：省略面向技术用户的细致设置
- **气候贡献**：将部分交易手续费捐赠给环境团体的设计（2021–2022  期）
- **代币上线审查**：并非一律接受 memecoin，而是基于质量审查的上线路线（与 Raydium 的对比点）

## 4. 与 Raydium 的比较（Solana 2  大 AMM）

| 项目 | Orca | Raydium |
|---|---|---|
| 主设计 | Whirlpools（纯 CLMM） | constant product + CLMM + orderbook hook |
| 上线政策 | 审查制（高品质志向） | 自由上线（接受 memecoin） |
| TVL 规模 | $300–500M | $1.5–2.5B |
| memecoin 暴露 | 有限 | 压倒性（与 Pump.fun 联动） |
| UX 评价 | retail 友好 | 面向专业 |
| token 经济 | ORCA staking fee share | RAY buy-back |
| 优势 | 稳定 LP、机构志向、干净 UX | aggregator routing 量、memecoin 流动性 |

两个 DEX 处于竞争关系，但因上线政策不同而形成分工。Orca 为 **stablecoin・blue-chip 集中型**，Raydium 为 **long-tail memecoin 集中型** 的格局。

## 5. 主要事件・沿革

- **2021-02**：Orca standard AMM 上线
- **2021–2022**：在 Solana DeFi summer 中确立与 Raydium 并列的两大 AMM 地位
- **2022-03**：Whirlpools CLMM 上线
- **2022-11**：FTX 破产余波导致 Solana TVL 骤减，Orca TVL 也降至 $1B → $100M 区间
- **2023**：随 Solana 生态恢复而阶段性 TVL 回升
- **2024–2025**：在 Pump.fun memecoin 狂热期将 Volume 主导权让给 Raydium，但作为稳定 LP 层维持 TVL 份额
- **2024**：宣布向 Eclipse Mainnet（Solana SVM L2）展开 Whirlpools

## 6. 治理・经济模型

- **ORCA token**：总供应 100M，governance + 部分 fee share
- **fee 分配**：standard AMM 中为 LP 100%，Whirlpools 中为 fee tier 内 LP 全额
- **protocol fee**：通过 governance 投票可变设定
- **Orca DAO**：以 Realms 为基础的链上投票运营
- **Foundation 形态**：Orca Foundation 主导协议开发

## 7. 国际比较・cross-chain 战略

Orca 在延续 Solana 中心战略的同时，通过向 Eclipse（Ethereum 之上的 SVM L2 ）展开采取 **multi-SVM** 战略。无向 Aptos / Sui 展开的实绩。向 EVM 展开的计划未公布。

Solana 整体的 DEX 量与市场结构参见 [[exchanges/solana-ecosystem-dex-comparison]]，与 EVM 系 DEX 的对比参见 [[exchanges/global-dex-major-five-comparison]]。集中流动性设计的谱系参见 [[exchanges/amm-design-evolution]]。

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX 群比较（最重要 cross-link）
- [[exchanges/dex-raydium-solana]] — Solana 竞争 AMM（最直接比较对象）
- [[exchanges/amm-design-evolution]] — AMM 设计演进
- [[exchanges/global-dex-major-five-comparison]] — 全球 DEX 比较
- [[exchanges/INDEX]] — 交易所域索引
- [[exchanges/native-dex-flip-incumbent-pattern]] — DEX flip 模式

## Sources

- 公开信息整理（Orca 官方 docs / Whirlpools whitepaper, orca.so）
- 公开信息整理（DefiLlama Orca 仪表盘 TVL / Volume）
- 公开信息整理（Orca Foundation governance forum 发声）
- 公开信息整理（Solana Foundation 生态发布）
- 公开信息整理（Uniswap v3  whitepaper - 设计比较参照源）

---
source: exchanges/dex-raydium-solana
source_hash: 81314f18ebad085f
lang: zh
status: machine
fidelity: ok
title: "Raydium — Solana 系老牌 AMM / memecoin 流动性 hub 概览"
translated_at: 2026-05-31T03:19:56.483Z
---

# Raydium — Solana 系老牌 AMM / memecoin 流动性 hub 概览


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the Solana peer context, [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for EVM 対比, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / design boundary.

> 2021-02 上线 · RAY token · constant product(x*y=k)AMM · 旧 Serum integration legacy · 现在是 memecoin 流动性 hub

## 1. 协议概览

- **链**:Solana L1(SVM 环境)
- **模型**:constant product AMM(x*y=k)+ concentrated liquidity(CLMM)+ 旧 Serum/OpenBook orderbook 混合(legacy)
- **上线**:2021-02-21
- **代币**:RAY(governance / fee accrual / staking)
- **官方 URL**:raydium.io
- **TVL(2024–2026 概观)**:在 $1.5–2.5B 区间内变动,持续占据 Solana DEX TVL 的 20–30%

## 2. 设计上的特征(Serum legacy → OpenBook 迁移 → 自建 CLMM)

Raydium 最初以向 Solana 上的 **Serum 中央订单簿**提供流动性的"AMM-on-orderbook"设计实现差异化。这是一种将 Solana 独有的高速 CLOB(Serum)与 AMM 之间双向套利自动化的机制,EVM 系没有类似设计。

- **2021–2022**:Serum CLOB + Raydium AMM 的混合时代
- **2022-11**:随 FTX 破产,Serum(FTX 创始团队主导)实质上被冻结
- **2022-12**:Solana 社区将 Serum fork 为 [[exchanges/openbook-fork-solana|OpenBook]] 并延续。Raydium 切换至 OpenBook 联动
- **2023 以后**:实现自建的 **Concentrated Liquidity Market Maker(CLMM)**。提供类似 Uniswap v3 的集中流动性池
- **现在**:standard AMM + CLMM + OpenBook hook 的 3 层并存

## 3. 在 memecoin 经济中的角色

Raydium 在 2024–2026 年发挥最大存在感,是作为 **Pump.fun 联动的 memecoin 上市路径**。

- **Pump.fun bonding curve**:新 memecoin 在 curve 上达到约 $69k 的 market cap 时,自动迁移至 Raydium 池
- **migration fee**:约 6 SOL(协议收取)+ Raydium 侧 listing
- **结果**:Raydium 上的 memecoin 池数以 **1000+/日**的速度增加(2024-Q4–2025)
- **流动性 routing**:由于 Jupiter aggregator 优先 routing Raydium 池,Raydium 成为 memecoin 事实上的默认上市场所

## 4. 与 Orca / Meteora 的比较

| 项目 | Raydium | Orca | Meteora |
|---|---|---|---|
| 设计 | constant product + CLMM + orderbook hook | 集中流动性(Whirlpools) | DLMM(Dynamic Liquidity) |
| 主用途 | memecoin + 一般 spot | retail 友好 swap | memecoin + 高级 LP |
| token | RAY | ORCA | MET(TBD) |
| TVL 规模 | $1.5–2.5B | $300–500M | $400–800M |
| 强项 | memecoin migration、经 aggregator 的交易量 | UX、稳定 LP | LP 效率、dynamic fee |

## 5. 主要事件·沿革

- **2021-02-21**:Raydium 主网上线
- **2021-03–2022**:以 Serum AMM-on-orderbook 设计快速成长,Solana DeFi summer 的中心
- **2022-11**:FTX 破产 → Serum 冻结 → Raydium 临时应对
- **2022-12**:OpenBook fork 开始
- **2023**:CLMM 实现,迁移至自建流动性层
- **2023-12**:协议遭黑客攻击(admin key 泄露,约 $4.4M 损失)。实施修复·补偿
- **2024-Q3 以后**:经与 Pump.fun 的 migration 联动而 memecoin hub 化
- **2025–2026**:在 Solana memecoin 狂热期作为经 Jupiter routing 的中心 DEX 称雄

## 6. 治理·经济模型

- **RAY**:总供给 555M,经 staking 受领 fee share
- **fee 结构**:标准 0.25%(其中 0.22% 归 LP,0.03% 用于向 RAY staker 的 buy-back)
- **CLMM 池**:可选 fee tier(0.01% / 0.05% / 0.25% / 1%)
- **governance**:相比链上投票更偏团队主导,代币分散度相对较低

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX 比较(最重要 cross-link)
- [[exchanges/dex-orca-solana]] — Solana 竞品 AMM
- [[exchanges/global-dex-major-five-comparison]] — EVM DEX 对比
- [[exchanges/amm-design-evolution]] — AMM 设计演进
- [[exchanges/native-dex-flip-incumbent-pattern]] — 先行 DEX flip 模式
- [[exchanges/INDEX]] — 交易所域索引
- [[exchanges/global-dex-major-five-comparison]] — 全球 DEX 比较

## Sources

- 公开信息整理(Raydium 官方 docs, raydium.io)
- 公开信息整理(DefiLlama Raydium 仪表盘 TVL/Volume)
- 公开信息整理(Solana Foundation Serum 终结时间线 / OpenBook fork 经过)
- 公开信息整理(Pump.fun 白皮书 / Raydium migration 规格)
- 公开信息整理(Raydium 2023-12 admin key incident postmortem)

---
source: exchanges/dex-raydium-solana
source_hash: 81314f18ebad085f
lang: zh
status: machine
fidelity: ok
title: "Raydium — Solana 系老牌 AMM / memecoin 流动性枢纽概览"
translated_at: 2026-05-31T03:19:56.483Z
---

# Raydium — Solana 系老牌 AMM / memecoin 流动性枢纽概览


## Wiki 路径

本条目位于 [[exchanges/INDEX|交易所索引]] 之下。可结合 [[exchanges/solana-ecosystem-dex-comparison|Solana 生态 DEX 比较]] 阅读 Solana 同业语境，结合 [[exchanges/global-dex-major-five-comparison|全球五大 DEX 比较]] 阅读 EVM 对照，并结合 [[exchanges/amm-design-evolution|AMM 设计演进谱系]] 理解更广的系统与设计边界。

> 2021-02 上线 · RAY 代币 · constant product (x*y=k) AMM · 旧 Serum 集成遗产 · 现为 memecoin 流动性枢纽

## 1. 协议概览

- **链**:Solana L1(SVM 环境)
- **模型**:constant product AMM (x*y=k) + concentrated liquidity (CLMM) + 旧 Serum/OpenBook 订单簿混合架构 (legacy)
- **上线**:2021-02-21
- **代币**:RAY (governance / fee accrual / staking)
- **官方 URL**:raydium.io
- **TVL(2024–2026 概观)**:在 $1.5–2.5B 区间内变动,持续占据 Solana DEX TVL 的 20–30%

## 2. 设计上的特征(Serum legacy → OpenBook 迁移 → 自建 CLMM)

Raydium 最初以向 Solana 上的 **Serum 中央订单簿**提供流动性的"AMM-on-orderbook"设计实现差异化。这是一种将 Solana 独有的高速 CLOB(Serum)与 AMM 之间双向套利自动化的机制,EVM 系没有类似设计。

- **2021–2022**:Serum CLOB + Raydium AMM 的混合时代
- **2022-11**:随 FTX 破产,Serum(FTX 创始团队主导)实质上被冻结
- **2022-12**:Solana 社区将 Serum fork 为 [[exchanges/openbook-fork-solana|OpenBook]] 并延续。Raydium 切换至 OpenBook 联动
- **2023 以后**:实现自建的 **Concentrated Liquidity Market Maker (CLMM)**。提供类似 Uniswap v3 的集中流动性池
- **现状**:standard AMM + CLMM + OpenBook hook 三层并存

## 3. 在 memecoin 经济中的角色

Raydium 在 2024–2026 年发挥最大存在感,是作为 **Pump.fun 联动的 memecoin 上市路径**。

- **Pump.fun bonding curve**:新 memecoin 在曲线上达到约 $69k 的市值时，自动迁移至 Raydium 池
- **迁移费用**:约 6 SOL(协议收取) + Raydium 侧上架
- **结果**:Raydium 上的 memecoin 池数以 **1000+/日**的速度增加(2024-Q4–2025)
- **流动性路由**:由于 Jupiter aggregator 优先路由 Raydium 池，Raydium 成为 memecoin 事实上的默认上市场所

## 4. 与 Orca / Meteora 的比较

| 项目 | Raydium | Orca | Meteora |
|---|---|---|---|
| 设计 | constant product + CLMM + orderbook hook | 集中流动性(Whirlpools) | DLMM(Dynamic Liquidity) |
| 主用途 | memecoin + 一般现货 | 面向零售用户的 swap | memecoin + 高级 LP |
| 代币 | RAY | ORCA | MET(参考公开材料未明确披露) |
| TVL 规模 | $1.5–2.5B | $300–500M | $400–800M |
| 强项 | memecoin 迁移、经 aggregator 汇集的交易量 | UX、稳定 LP | LP 效率、dynamic fee |

## 5. 主要事件·沿革

- **2021-02-21**:Raydium 主网上线
- **2021-03–2022**:以 Serum AMM-on-orderbook 设计快速成长,Solana DeFi summer 的中心
- **2022-11**:FTX 破产 → Serum 冻结 → Raydium 临时应对
- **2022-12**:OpenBook fork 开始
- **2023**:CLMM 实现,迁移至自建流动性层
- **2023-12**:协议遭黑客攻击(admin key 泄露，约 $4.4M 损失)。实施修复与补偿
- **2024-Q3 以后**:经与 Pump.fun 的迁移联动而成为 memecoin 枢纽
- **2025–2026**:在 Solana memecoin 狂热期，作为经 Jupiter 路由的中心 DEX 占据主导地位

## 6. 治理·经济模型

- **RAY**:总供给 555M，经 staking 获取 fee share
- **费用结构**:标准 0.25%(其中 0.22% 归 LP，0.03% 用于面向 RAY staker 的 buy-back)
- **CLMM 池**:可选 fee tier (0.01% / 0.05% / 0.25% / 1%)
- **治理**:相比链上投票更偏团队主导，代币分散度相对较低

## 相关条目

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX 比较(最重要的交叉链接)
- [[exchanges/dex-orca-solana]] — Solana 竞品 AMM
- [[exchanges/global-dex-major-five-comparison]] — EVM DEX 对比
- [[exchanges/amm-design-evolution]] — AMM 设计演进
- [[exchanges/native-dex-flip-incumbent-pattern]] — 先行 DEX 翻转模式
- [[exchanges/INDEX]] — 交易所域索引
- [[exchanges/global-dex-major-five-comparison]] — 全球 DEX 比较

## 来源

- 公开信息整理(Raydium 官方文档, raydium.io)
- 公开信息整理(DefiLlama Raydium 仪表盘 TVL/Volume)
- 公开信息整理(Solana Foundation Serum 终结时间线 / OpenBook fork 经过)
- 公开信息整理(Pump.fun 白皮书 / Raydium 迁移规格)
- 公开信息整理(Raydium 2023-12 admin key 事件复盘)

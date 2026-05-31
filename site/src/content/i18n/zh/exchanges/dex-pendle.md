---
source: exchanges/dex-pendle
source_hash: 250618c944525932
lang: zh
status: machine
fidelity: ok
title: "Pendle Finance — 收益代币化协议(PT/YT)概览"
translated_at: 2026-05-31T03:19:56.469Z
---

# Pendle Finance — 收益代币化协议(PT/YT)概览


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for adjacent DEX peer context, [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / design boundary, and [[exchanges/cex-native-token-strategy-comparison|CEX native token strategy comparison]] for token economy contrast.

> 2021 上线 · 多链(Ethereum、Arbitrum、BNB、Mantle、Berachain、Sonic 等)· PENDLE token · 将生息资产分离为 **PT(本金)+ YT(收益)**

## 1. 协议概要

- **链**:以 Ethereum 主网为中心,也展开至 Arbitrum / BNB Chain / Mantle / Berachain / Sonic 等
- **模型**:收益代币化(yield tokenization)
- **上线**:2021-06
- **代币**:PENDLE(治理 + 经由 vePENDLE 的 fee share)
- **官方 URL**:pendle.finance
- **TVL(2024–2026 概观)**:$3–7B 区间,在收益代币化领域压倒性首位

## 2. PT / YT 机制

Pendle 的核心设计是将生息资产(例:stETH、sDAI、USDe、sfrxETH)**分离为 2 种代币**:

| 代币 | 含义 | 价格行为 |
|---|---|---|
| **PT(Principal Token,本金代币)** | 本金相当部分(到期时可按 1:1 兑换原始资产) | 含 satisfaction yield 的折扣价格,到期收敛至 1.0  |
| **YT(Yield Token,收益代币)** | 至到期的收益领取权 | 由剩余期限和收益预期值决定价格,到期为零 |

由此可实现以下策略:

- **购买 PT** → 锁定"固定收益"(DeFi 版零息债券)
- **购买 YT** → "对收益做多",以杠杆方式博取收益波动
- **卖出 YT** → 将自身收益即时变现(forward yield selling,远期收益出售)

## 3. 主要支持资产(2024–2026)

Pendle 作为生息资产的集中点,与主要 DeFi 协议整合:

- **Lido stETH**(Ethereum LST):自最初期起的基干市场
- **Maker sDAI**(Savings DAI):稳定币收益市场
- **Ethena USDe / sUSDe**(合成美元):2024 年将 Pendle TVL 推升至 $1B → $5B+ 的决定性市场
- **Frax sfrxETH**:LST 市场
- **Aave aTokens**:lending 收益市场
- **EigenLayer LRT 群**(eETH / pufETH / ezETH / rsETH 等):2024 年在 restaking 收益市场爆发性扩张

特别是与 **Ethena USDe** 的整合(2024 年)是 Pendle TVL 激增的主因。USDe 持有者将 sUSDe 带入 Pendle,固定收益获取 + Sats(Ethena 积分)领取的双重策略得以成立。

## 4. AMM 设计(自定义 curve)

Pendle 内部 AMM 是针对 **PT-asset 对** 的 swap 优化的独有 curve:

- 将随到期临近 PT 价格收敛至 1.0  的性质纳入 curve
- LP 将 IL(无常损失)最小化,持续获取 satisfaction yield
- v2 引入 **time-decaying AMM**,curve 拟合 PT 的理论价格
- 向 LP 分配 swap fee + PENDLE incentive

## 5. vePENDLE 经济

- **PENDLE token**:治理 + ve(vote-escrow)模型
- **vePENDLE**:将 PENDLE 最长锁定 2 年取得
- **vePENDLE 持有者的权利**:协议 fee share、对各池的 emission 分配投票(gauge voting)、boost
- 作为 ve(3,3) 治理设计(参见 [[exchanges/amm-design-evolution]])的变体,参考 Curve / Convex 模型设计
- bribe market(向 vlPENDLE 提供外部 incentive)也成立,经 Equilibria / Penpie 等 booster 协议

## 6. 主要事件・沿革

- **2021-06**:Pendle v1 上线
- **2022–2023**:DeFi 寒冬期 TVL 低迷,在 $50–200M 区间耐久
- **2023-Q4**:随 LST 收益市场扩张 TVL 复活,突破 $500M
- **2024-Q1–Q2**:Ethena USDe 整合使 **TVL $1B → $5B** 激增。Pendle 的结构性转折点
- **2024-Q3–Q4**:对 EigenLayer LRT 群的支持使其进一步扩张
- **2025**:Boros 开发启动(perpetual yield trading 扩展)
- **2025–2026**:多链展开加速(Berachain / Sonic / Mantle 等)

## 7. 国际比较・cross-chain 战略

Pendle 在收益代币化领域压倒类似协议(Element Finance 撤退、Tempus 撤退、Sense Finance 规模小),确立 **事实上的垄断地位**。作为 EVM 系固定收益市场的代表存在而运作。

Solana 一侧具有类似功能的协议较少([[exchanges/solana-ecosystem-dex-comparison]] 中类似功能有限),成为 EVM 系的固有强项。Pendle 以 Ethereum L1 为核心,展开至 Arbitrum / BNB / Mantle / Berachain / Sonic 等,纳入各链主要生息资产的多链战略。

## Related

- [[exchanges/global-dex-major-five-comparison]] — 全球 DEX 比较
- [[exchanges/amm-design-evolution]] — AMM 设计演进(ve(3,3) 谱系)
- [[exchanges/dex-raydium-solana]] — 另一链主要 DEX
- [[exchanges/dex-orca-solana]] — 另一链主要 DEX
- [[exchanges/dex-jito-solana]] — LST 系(JitoSOL)对比
- [[exchanges/INDEX]] — 交易所域索引
- [[exchanges/native-dex-flip-incumbent-pattern]] — DEX flip 模式

## Sources

- 公开信息整理 (Pendle 官方 docs / whitepaper, pendle.finance)
- 公开信息整理 (DefiLlama Pendle 仪表板 TVL / Volume)
- 公开信息整理 (Ethena Labs USDe × Pendle 整合官方发布, 2024)
- 公开信息整理 (EigenLayer LRT 群 × Pendle 整合发布, 2024)
- 公开信息整理 (Lido / Maker / Frax 协议官方 — Pendle 支持资产记载)

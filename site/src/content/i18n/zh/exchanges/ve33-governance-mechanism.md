---
source: exchanges/ve33-governance-mechanism
source_hash: fc7acc2300644603
lang: zh
status: machine
fidelity: ok
title: "ve(3,3) 治理机制 — Curve veCRV → Solidly → Velodrome/Aerodrome 演进"
translated_at: 2026-05-31T05:31:05.758Z
---

# ve(3,3) 治理机制 — Curve veCRV → Solidly → Velodrome/Aerodrome 演进


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

**ve(3,3)** 是 **vote-escrow (ve)** + **(3,3) game theory** 的组合。整合 LP 奖励 + 协议收益分配 + 治理投票的 DeFi 代币经济机制。Curve 的 veCRV (2020) 为原点,Solidly (Andre Cronje, 2022) 抽象化,Velodrome (Optimism, 2022) / Aerodrome (Base, 2023) 实用化。如今数十个衍生 protocol 作为 L2 native DEX 经济的核心运转。

## 基本结构

- **lock**: 将 token lock 1 周〜4 年即发行 veToken (NFT) · lock 期间越长 veToken 比率越高 (例: 4 年 lock = 1.0x, 1 年 = 0.25x)
- **vote**: veToken 持有者在 weekly epoch 中通过投票决定 emission 的流向 (奖励发往哪个 LP 池)
- **bribe**: 第三方 (token 项目) 支付"投票诱导费",将 emission 引向自己的 LP 池 → 形成 bribe market
- **rebase**: emission 的一部分再分配给现有 veToken 持有者 → 缓和稀释 + 培育 holder loyalty

## 主要 protocol 比较

- **Curve (veCRV)** (2020-08): ve original · 4 年 lock · LP gauge 投票 · CRV emission · stable swap 流动性 hub · 与 Convex Finance 的 meta layer
- **Solidly** (2022-02): Andre Cronje 抽象化 · Fantom · 即刻失败 (rug + Cronje 引退) · 设计思想由后继者继承
- **Velodrome** (2022-06, Optimism): Solidly fork · veVELO · Optimism native DEX · 首个成功实现
- **Aerodrome** (2023-08, Base): Velodrome v2 fork · veAERO · Base native DEX · Uniswap 反超案例 (在 Base 上 TVL #1)
- **Equalizer** (Sonic), **Thena** (BNB), **Camelot** (Arbitrum) 等众多 ecosystem 衍生

## 经济学角色

- **流动性 segmentation**: 通过 emission 投票形成"战略 LP" (L2 主导方将其集中于重要资产池)
- **bribe market**: token 项目为引导流动性而支付,实现真金白银化 (例: Aerodrome bribe = 每周数百万 USD)
- **host alignment**: L2 主导方 (Coinbase Ventures / Optimism Foundation) 通过持有 veToken 闭环 chain native economy · 将 cbBTC/USDC 这类 host 资产的流动性内制化

## 风险与制约

- **治理集中**: ve 持有 top 10 支配 emission → 寡头化 · "veWhale" 问题
- **vetokenomics 复杂化**: 一般 LP 的 UX 恶化 · lock 期间 + NFT + bribe + rebase 使 learning curve 陡峭
- **chain 依赖性**: native DEX 的宿命 (L2 衰退时连锁) · Velodrome 因 Optimism stagnation 而 TVL 萎缩
- **emission 持续性**: token 价格下跌导致 APR 崩塌 → flywheel 逆向回转风险

## Cross-links

- [[exchanges/native-dex-flip-incumbent-pattern]] (Aerodrome 反超案例)
- [[exchanges/vetoken-host-protocol-flywheel]] (Coinbase × Aerodrome × cbBTC)
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[fintech/portfolio-winner-structure-arm-analog|portfolio winner structure arm analog]]
- [[exchanges/cex-native-token-strategy-comparison|CEX ネイティブトークン戦略比較]]

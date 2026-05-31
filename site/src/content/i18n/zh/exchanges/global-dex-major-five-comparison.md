---
source: exchanges/global-dex-major-five-comparison
source_hash: fb89bebcf5bedc62
lang: zh
status: machine
fidelity: ok
title: "全球 DEX 主要 5 社比较"
translated_at: 2026-05-31T03:19:56.380Z
---

# 全球 DEX 主要 5 社比较


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

去中心化交易所 (DEX) 在设计层面分为 AMM (Automated Market Maker) 和 CLOB (Central Limit Order Book on-chain) 两大潮流（2 ）。Uniswap 确立了 AMM 的事实标准，将流动性池 × xy=k 数式打造为业界通用语言；另一方面，Hyperliquid 在 2024 年之后凭借专用 L1 上的 CLOB perp 迅速崛起，打破了"DEX = AMM"的前提。在 EVM 多链化推进的过程中，也观测到像 Aerodrome (Base) 这样的链专属 native DEX 在该链上反超 Uniswap 的案例（[[exchanges/native-dex-flip-incumbent-pattern]]）。本文将以交易量 · 流动性为代表的 5 强进行画像。

## 5 强画像

- **Uniswap** — AMM 之祖。拥有 v1 / v2 / v3 (concentrated liquidity) / v4 (hooks) 的演进谱系。Ethereum mainnet + 主要 L2 (Arbitrum / Optimism / Base / Polygon) 几乎全部展开。spot 24h vol $2-3B 规模。UNI 代币以 governance 为中心 (fee switch 处于阶段性讨论)。创始 Hayden Adams (2018)。
- **Curve Finance** — 专注于面向 stablecoin / wrapped asset 的 stableswap AMM。将 slippage 压缩至 1/100 的数式是其强项。CRV + veCRV (vote-escrow) 的治理机制成为 ve(3,3) 的原型，后续协议多有 fork（[[exchanges/vetoken-host-protocol-flywheel]]）。
- **Aerodrome** — 作为 Velodrome v2 fork，于 2023 后半在 Base 上 launch。Base 专属 native DEX，采用 ve(3,3) emission 机制。Coinbase Ventures 参与，与 Base 生态深度整合。Base 上的 DEX 交易量份额 ~63%，反超 Uniswap。
- **PancakeSwap** — BSC (BNB Chain) 专属 native DEX。CAKE 代币。将 spot + perp + lottery + NFT marketplace 整合为 1 ，作为 BSC 流动性的核心 hub 发挥作用。华语圈用户比率高。
- **Hyperliquid** — 自有 L1 (Hyperliquid Chain) 上的 CLOB perp 专门 DEX。在链上运营订单簿的同时实现低 latency。perp 24h vol $1-3B，于 2024-2025 急速成长。创始 Jeff Yan。无 token，以 trading-fee-rebate 和 points program 先行。

## 比较表 (chain / 设计 / token / 24h vol / 特征)

| 名称 | 主要 chain | 设计 | token | 24h vol (推定) | 特征 |
|---|---|---|---|---|---|
| Uniswap | ETH + L2 multi | AMM (v3 CL) | UNI | $2-3B | 业界标准 · hooks v4 |
| Curve | ETH + multi | stableswap AMM | CRV/veCRV | $0.1-0.3B | stable 专注 · ve(3,3) 祖 |
| Aerodrome | Base 专属 | ve(3,3) AMM | AERO/veAERO | $0.5-1B | Base native flip |
| PancakeSwap | BSC 专属 | AMM + perp | CAKE | $0.3-0.8B | BSC hub · retail |
| Hyperliquid | 自有 L1 | CLOB perp | (无) | $1-3B (perp) | on-chain 订单簿 · points |

设计层面的 trade-off — AMM 兼具流动性提供的简单性与 MEV 抗性的课题，而 CLOB 则在订单类型的多样性和价格发现的精度上更胜一筹。Emission 结构在 veToken 系 (Curve / Aerodrome) 与固定发行系 (Uniswap)、trading-fee-rebate (Hyperliquid) 之间大幅分化。监管定位上各方均在推进对来自美国的接入的屏蔽，在日本作为未上市 token 不属于 FSA 警告书发出的对象，但未列入 JVCEA WhiteList ([[exchanges/jvcea-whitelist-token-listing]])（国内交易所非经办）。与 CEX 的交易量对比参照（[[exchanges/global-cex-top10-comparison]]）。交易量市场变动大，表中数值为 2025 时点的概算范围。设计派别比较参照 [[exchanges/amm-design-evolution|AMM design evolution]] 与 [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]，Solana 系参照 [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]。

来源: DefiLlama dexs ranking · Dune Analytics 仪表板 · 各 protocol whitepaper / docs (Uniswap, Curve, Aerodrome, PancakeSwap, Hyperliquid)

---
source: exchanges/global-dex-major-five-comparison
source_hash: fb89bebcf5bedc62
lang: en
status: machine
fidelity: ok
title: "Global DEX major 5 社 comparison"
translated_at: 2026-05-31T03:19:56.380Z
---

# Global DEX major 5 社 comparison


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

Decentralized exchanges (DEXs) split, in design terms, into the two major currents of AMM (Automated Market Maker) and CLOB (Central Limit Order Book on-chain) (2 ). Uniswap established the de facto AMM standard and made the liquidity-pool × xy=k formula the industry's common language; on the other hand, Hyperliquid rose rapidly after 2024 年 with CLOB perps on a dedicated L1 , breaking the "DEX = AMM" premise. As EVM multi-chain proliferation advances, cases are also observed where a chain-exclusive native DEX such as Aerodrome (Base) overtakes Uniswap on that chain ([[exchanges/native-dex-flip-incumbent-pattern]]). This article profiles the 5  representative players by trading volume / liquidity.

## 5 -player profiles

- **Uniswap** — the progenitor of the AMM. It has an evolutionary lineage of v1  / v2  / v3  (concentrated liquidity) / v4  (hooks). Deployed across almost all of Ethereum mainnet + the major L2  (Arbitrum / Optimism / Base / Polygon). spot 24h vol on the order of $2-3B. The UNI token is governance-centric (the fee switch is under phased discussion). Founded by Hayden Adams (2018).
- **Curve Finance** — specialized in stableswap AMM for stablecoins / wrapped assets. Its strength is a formula that compresses slippage to 1/100 . The CRV + veCRV (vote-escrow) governance mechanism became the prototype of ve(3,3), forked by many subsequent protocols ([[exchanges/vetoken-host-protocol-flywheel]]).
- **Aerodrome** — launched on Base in the latter half of 2023  as a Velodrome v2  fork. A Base-exclusive native DEX adopting the ve(3,3) emission mechanism. Coinbase Ventures is involved, and it is deeply integrated with the Base ecosystem. With a DEX trading-volume share of ~63% on Base, it has flipped Uniswap.
- **PancakeSwap** — a BSC (BNB Chain)-exclusive native DEX. CAKE token. It integrates spot + perp + lottery + NFT marketplace into 1  and functions as the core hub of BSC liquidity. A high ratio of Chinese-speaking users.
- **Hyperliquid** — a CLOB-perp-specialized DEX on its own L1  (Hyperliquid Chain). It runs the order book on-chain while achieving low latency. perp 24h vol $1-3B, with rapid growth in 2024-2025 . Founded by Jeff Yan. No token; it leads with a trading-fee-rebate and points program.

## Comparison table (chain / design / token / 24h vol / features)

| Name | Main chain | Design | token | 24h vol (est.) | Features |
|---|---|---|---|---|---|
| Uniswap | ETH + L2 multi | AMM (v3 CL) | UNI | $2-3B | industry standard · hooks v4 |
| Curve | ETH + multi | stableswap AMM | CRV/veCRV | $0.1-0.3B | stable-focused · ve(3,3) progenitor |
| Aerodrome | Base-exclusive | ve(3,3) AMM | AERO/veAERO | $0.5-1B | Base native flip |
| PancakeSwap | BSC-exclusive | AMM + perp | CAKE | $0.3-0.8B | BSC hub · retail |
| Hyperliquid | own L1 | CLOB perp | (none) | $1-3B (perp) | on-chain order book · points |

The design trade-off — AMMs carry the challenges of liquidity-provision simplicity and MEV resistance, whereas CLOBs are superior in order-type diversity and price-discovery precision. Emission structures diverge widely among the veToken family (Curve / Aerodrome), fixed-issuance family (Uniswap), and trading-fee-rebate (Hyperliquid). On regulatory positioning, all are progressively blocking access from the US; in Japan, as unlisted tokens they are outside the scope of FSA warning letters but are not on the JVCEA WhiteList ([[exchanges/jvcea-whitelist-token-listing]]) (not handled by domestic exchanges). For trading-volume comparison versus CEXs, see ([[exchanges/global-cex-top10-comparison]]). Trading volume is highly market-variable, and the figures in the table are approximate ranges as of 2025 . For design-faction comparison see [[exchanges/amm-design-evolution|AMM design evolution]] and [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]; for the Solana family see [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]].

Sources: DefiLlama dexs ranking · Dune Analytics dashboards · each protocol's whitepaper / docs (Uniswap, Curve, Aerodrome, PancakeSwap, Hyperliquid)

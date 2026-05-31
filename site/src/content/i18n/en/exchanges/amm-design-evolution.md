---
source: exchanges/amm-design-evolution
source_hash: ab6bc1560ef52291
lang: en
status: machine
fidelity: ok
title: "AMM design evolution — Uniswap v1/v2/v3/v4 + variants (Curve / Balancer / TraderJoe)"
translated_at: 2026-05-31T03:19:56.455Z
---

# AMM design evolution — Uniswap v1/v2/v3/v4 + variants (Curve / Balancer / TraderJoe)

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

Since the emergence of 2018 年 Uniswap v1 , AMMs (Automated Market Makers) have evolved through 4  stages, with variants developing in parallel. The core of the design follows the progression **constant product (x*y=k) → stable swap → concentrated liquidity → custom hooks**, with each stage driving the liquidity efficiency, capital efficiency, and extensibility of the entire DEX ecosystem. It is the foundational technology that made DEXs viable as an alternative to order-book-style CEXs.

## Uniswap lineage

- **v1** (2018-11): ETH ↔ ERC20  pairs only · constant product (x*y=k) · 1% fixed fee · LP provides at a single ratio
- **v2** (2020-05): direct ERC20  ↔ ERC20  pairs · flash swap (borrow → arb → repay in a single transaction) · built-in TWAP oracle · 3 -tier fees
- **v3** (2021-05): **concentrated liquidity** — LPs can concentrate liquidity by choosing any price range · 4 -tier fees (0.01/0.05/0.30/1.00%) · capital efficiency up to 4000x for equivalent liquidity
- **v4** (2024-): **hooks** — arbitrary logic can be injected into swap/LP events (dynamic fee / on-chain limit order / custom oracle) · singleton contract (all pools aggregated into 1  contract) · 50%+ gas reduction + extensibility

## Variant AMMs

- **Curve** (2020-02): **stable swap** = constant sum + constant product hybrid · specialized for stablecoins / wrapped assets to minimize slippage · emission-allocation competition (curve war) via CRV + veCRV gauges
- **Balancer** (2020-03): multi-token pools at arbitrary ratios (80/20  etc.) · automatic portfolio rebalancing · index-fund-style operation possible with weighted pools
- **TraderJoe Liquidity Book** (2022-): **bin-based AMM** · divides the price range into discrete bins · zero-slippage within a bin (constant sum) · simplifies v3 's concentrated approach via binning

## Design trade-offs

- **constant product**: simple / supports arbitrary token pairs / capital-inefficient in the middle price range
- **stable swap**: extremely high efficiency for stables / complex design / unsuitable for non-stables
- **concentrated**: high efficiency / increased impermanent loss / complex LP UX (requires active management)
- **hooks (v4)**: maximum extensibility / security risk of custom logic (rising audit cost)

## Practical use

DEX aggregators ([[exchanges/global-dex-major-five-comparison]]'s 1inch / Paraswap / Matcha) route across multiple AMMs to achieve best execution. Because MEV bots (Flashbots) exploit gaps in AMM design (sandwich / arbitrage), each AMM is evolving toward designs that account for MEV resistance. At present Uniswap V3+V4  is the mainstream general-purpose AMM, but in the stablecoin space Curve is dominant. Perps are a separate lineage; see [[exchanges/global-perp-dex-five-comparison]].

## Related

- [[exchanges/global-dex-major-five-comparison]] — Uniswap / Curve / Aerodrome / PancakeSwap / Hyperliquid
- [[exchanges/global-perp-dex-five-comparison]] — perp family (CLOB / oracle / AMM) vs spot AMM in this article
- [[exchanges/native-dex-flip-incumbent-pattern]] — structure in which chain-native DEXs surpass external entrants
- [[exchanges/vetoken-host-protocol-flywheel]] — details of the veCRV model in the Curve war
- [[systems/cross-chain-four-poles-overview]] — cross-chain 4  overview (AMM × bridge)
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]] — cross-chain bridge × CEX deposit/withdrawal
- [[exchanges/ve33-governance-mechanism]] — ve(3,3) governance mechanism

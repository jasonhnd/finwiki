---
source: exchanges/solana-ecosystem-dex-comparison
source_hash: 01db5473c0ae58e7
lang: en
status: machine
fidelity: ok
title: "Comparison of the Solana ecosystem DEX cluster"
translated_at: 2026-07-29T11:50:43.000Z
---

# Comparison of the Solana ecosystem DEX cluster


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

Solana hosts protocols with different designs, including swap aggregation, multiple AMM types, concentrated liquidity, DLMM, perpetuals, and an on-chain CLOB. This entry compares Jupiter, Raydium, Orca, Meteora, Drift, and Phoenix using their official documentation; it does not cover trading-volume ranks, TVL shares, or fixed fee and block-time figures. See [[exchanges/global-dex-major-five-comparison]] for the EVM comparison.

## Six protocol profiles

- **Jupiter** — an aggregator that searches routes across multiple liquidity sources.
- **Raydium** — an AMM with several pool designs, including CPMM and CLMM, plus swap and liquidity-provision functions; it is not limited to constant product.
- **Orca** — a concentrated-liquidity AMM built around Whirlpools.
- **Meteora** — provides DLMM and other dynamic pools.
- **Drift Protocol** — a trading protocol centered on perpetuals and combining order, liquidity, and oracle mechanisms. It is also covered in [[exchanges/global-perp-dex-five-comparison]].
- **Phoenix** — a fully on-chain central limit order book on Solana.

## Comparison table (design / use)

The table compares functions confirmed in each protocol's official documentation reviewed on 2026-07-29. Token status, daily volume, TVL, and user segments are volatile and are not evaluation columns. ^[Sources: https://dev.jup.ag/docs/; https://docs.raydium.io/raydium/; https://docs.orca.so/; https://docs.meteora.ag/; https://docs.drift.trade/; https://docs.phoenix.trade/.]

| Name | Design confirmed in official material | Main use |
|---|---|---|
| Jupiter | aggregator / routing | swaps across multiple liquidity sources |
| Raydium | CPMM, CLMM, and other pool types | swaps, liquidity provision, pool creation |
| Orca | Whirlpools (concentrated-liquidity AMM) | swaps and concentrated-liquidity provision |
| Meteora | DLMM and dynamic pools | swaps and liquidity provision |
| Drift | perpetuals plus order and liquidity mechanisms | derivatives trading |
| Phoenix | fully on-chain CLOB | limit-order spot trading |

This classification identifies primary design functions; it is not a rank or a hierarchy of six layers.

## memecoin economics (Solana-specific)

Liquidity paths combining token-launch platforms, AMMs or DLMMs, and aggregators appear on Solana, but a token does not necessarily migrate from one named platform to one named DEX. Issuance counts, volume, and destination shares vary substantially by period, so no fixed values are used.

## International comparison — contrast with EVM-family chains

EVM and Solana differ in execution environment, account model, and liquidity distribution, so this entry does not judge superiority using one-time block-time or fee figures. See [[exchanges/amm-design-evolution]] for AMM design evolution and [[exchanges/ve33-governance-mechanism]] for ve(3,3) governance. Domestic handling of SOL and access to on-chain DEXs are separate questions; this entry does not claim that only a specific wallet path exists or that CEX routing does not exist. For route design, read [[systems/cross-chain-four-poles-overview]] and [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]; for perpetuals, see [[exchanges/global-perp-dex-five-comparison]].

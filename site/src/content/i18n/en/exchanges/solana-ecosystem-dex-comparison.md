---
source: exchanges/solana-ecosystem-dex-comparison
source_hash: fe3f3690c1ee483b
lang: en
status: machine
fidelity: ok
title: "Comparison of the Solana ecosystem DEX cluster"
translated_at: 2026-06-15T03:48:21.908Z
---

# Comparison of the Solana ecosystem DEX cluster


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

On the SVM (Sealevel Virtual Machine) environment, which differs from EVM-family chains (Ethereum / L2), Solana has built its own DEX ecosystem. At the top layer reigns Jupiter, an aggregator (DEX-integrating router), and beneath it coexist the 3  major AMMs Raydium / Orca / Meteora, plus the perp-specialist Drift and the institutional CLOB Phoenix — a 6 -layer structure. 400ms blocks + parallel execution + low transaction cost (< $0.001) form the base supporting retail mania and the memecoin economy, and it achieved rapid growth in the 2023-2026  period. For the EVM ecosystem comparison see ([[exchanges/global-dex-major-five-comparison]]).

## Top 6  protocol profiles

- **Jupiter** — the router layer that integrates all of Solana's DEXs as an aggregator. It launched the JUP token via airdrop in 2024-01  (one of the largest retroactive distributions in Solana history). It is the de facto entry point through which 70%+ of Solana DEX trading volume is routed via Jupiter.
- **Raydium** — an old-guard AMM (constant product x*y=k) running since 2021 . RAY token. It carries a legacy of former Serum orderbook integration, but is now reactivated as a memecoin listing route.
- **Orca** — adopts a concentrated liquidity AMM (Whirlpools design, similar to Uniswap v3 ). ORCA token. Strong in the retail layer with a UX-friendly UI.
- **Meteora** — surged with DLMM (Dynamic Liquidity Market Maker) and Memecoin pools. The MET token is pending 2024-2025  confirmation. Functions as the secondary-liquidity layer for memecoins originating from Pump.fun.
- **Drift Protocol** — a perp DEX (oracle pricing + AMM hybrid). DRIFT token. As a Solana perp hub it is also listed in ([[exchanges/global-perp-dex-five-comparison]]).
- **Phoenix** — realizes a fully on-chain CLOB (order-book method) on Solana. Institutional low-latency design.

## Comparison table (design / use / TVL)

| Name | Design | Main use | token |
|---|---|---|---|
| Jupiter | aggregator router | integrated swap entry | JUP |
| Raydium | constant product AMM | general spot + memecoin listing | RAY |
| Orca | concentrated liquidity AMM | retail UX swap | ORCA |
| Meteora | DLMM + memecoin pools | memecoin liquidity | token status not confirmed in the current public-source scope |
| Drift | oracle + AMM perp | leveraged trading | DRIFT |
| Phoenix | on-chain CLOB | institutional spot order book | (none) |

The coexistence of 6  designs (aggregator / standard AMM / concentrated / DLMM / perp / CLOB) shows the depth of the Solana ecosystem. 24h vol totals a $0.5-2B scale, the majority of which is routed via Jupiter. The DEX cluster occupies 30-40% of Solana ecosystem TVL.

## memecoin economics (Solana-specific)

As a Solana-specific phenomenon, the memecoin-issuance platform **Pump.fun**, which launched in 2024-, has been explosively boosting DEX trading volume. A pipeline of issue on Pump.fun → bonding curve → listing on Raydium / Meteora → instant trading via Jupiter swap has been established, with new issuance at a scale of 1000+ tokens/day. High volatility combined with retail mania has become a structural driver of DEX trading volume.

## International comparison — contrast with EVM-family chains

In contrast with the EVM (Uniswap / Curve / Aerodrome) ecosystem, Solana SVM achieves low cost + low latency through a single L1 + parallel execution + 400ms blocks, whereas EVM takes a multi-chain distributed structure with a rollup + sequencer model. For the AMM design evolution lineage see ([[exchanges/amm-design-evolution]]), and for ve(3,3) governance see ([[exchanges/ve33-governance-mechanism]]). The pattern of a chain-native DEX flipping the incumbent first-mover corresponds to ([[exchanges/native-dex-flip-incumbent-pattern]]). On the regulation + access side, domestic VASPs are advancing SOL spot handling ([[exchanges/jvcea-whitelist-listing-timeline]]), but direct access to the Solana DEXs themselves is only via domestic wallets, and there is no automatic routing via CEXs. For cross-chain route design read [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] and [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX 入出金]] together, and for the cross-perp comparison read [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 社比較]] as well.

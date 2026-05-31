---
source: exchanges/dex-orca-solana
source_hash: 2df99fe3d5e1fdb1
lang: en
status: machine
fidelity: ok
title: "Orca Whirlpools — Solana-based concentrated-liquidity AMM overview"
translated_at: 2026-05-31T03:19:56.457Z
---

# Orca Whirlpools — Solana-based concentrated-liquidity AMM overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dex-raydium-solana|Raydium]] for the Solana AMM peer comparison, [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the broader Solana DEX layer, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the system / design boundary.

> Launched 2021-02  · ORCA token · concentrated-liquidity AMM (Whirlpools, similar to Uniswap v3 ) · retail-UX focused

## 1. Protocol overview

- **Chain**: Solana L1 (SVM environment)
- **Model**: concentrated-liquidity AMM (Whirlpools design, functionally similar to Uniswap v3 )
- **Launch**: 2021-02 (standard AMM), 2022-03 (Whirlpools CLMM)
- **Token**: ORCA (governance, fee share)
- **Official URL**: orca.so
- **TVL (2024–2026  overview)**: $300–500M range, 5–10% of Solana DEX TVL
- **24h Volume**: continuously accounts for 10–20% of total Solana DEX

## 2. Design of Whirlpools CLMM

Orca's core product **Whirlpools** is a CLMM that implements Uniswap v3 's concentrated-liquidity concept on Solana SVM. LPs supply liquidity by specifying a price range and earn fees only when trading is within the specified range.

- **fee tier**: 4  tiers of 0.01% / 0.05% / 0.3% / 1% (selected by asset volatility)
- **tick spacing**: fixed per fee tier (fine-grained range management)
- **LP NFT**: each LP position is represented as an NFT (same as Uniswap v3 )
- **active liquidity**: liquidity outside the range cannot earn fees (trade-off between capital efficiency and LP risk)

## 3. UX / design philosophy

From the outset Orca has billed itself as **"the most user-friendly DEX on Solana,"** differentiating through a UX-first design aimed at the retail tier:

- **Fair Price Indicator**: explicitly shows deviation from the oracle price in the UI
- **Simple swap UI**: omits the fine-grained settings aimed at technical users
- **Climate contribution**: a design that donates part of trading fees to environmental organizations (2021–2022  period)
- **Token-listing screening**: not blanket acceptance of memecoins, but a quality-screening-based listing approach (a point of contrast with Raydium)

## 4. Comparison with Raydium (Solana's 2  major AMMs)

| Item | Orca | Raydium |
|---|---|---|
| Main design | Whirlpools (pure CLMM) | constant product + CLMM + orderbook hook |
| Listing policy | Screening-based (quality-oriented) | Free listing (accepts memecoins) |
| TVL scale | $300–500M | $1.5–2.5B |
| memecoin exposure | Limited | Overwhelming (linked to Pump.fun) |
| UX assessment | retail-friendly | pro-oriented |
| token economics | ORCA staking fee share | RAY buy-back |
| Strengths | stable LPs, institutional orientation, clean UX | aggregator routing volume, memecoin liquidity |

The two DEXs are in a competitive relationship, but a division of roles holds due to their differing listing policies. Orca is **stablecoin / blue-chip concentrated**, while Raydium is **long-tail memecoin concentrated**.

## 5. Major events / history

- **2021-02**: Orca standard AMM launched
- **2021–2022**: established its position as one of the two major AMMs alongside Raydium during the Solana DeFi summer
- **2022-03**: Whirlpools CLMM launched
- **2022-11**: Solana TVL plunged in the aftermath of the FTX collapse; Orca TVL also fell into the $1B → $100M range
- **2023**: gradual TVL recovery accompanying the Solana ecosystem's recovery
- **2024–2025**: during the Pump.fun memecoin mania, ceded volume leadership to Raydium but maintained TVL share as a stable LP layer
- **2024**: announced Whirlpools deployment to Eclipse Mainnet (Solana SVM L2)

## 6. Governance / economic model

- **ORCA token**: total supply 100M, governance + partial fee share
- **fee allocation**: LP 100% in the standard AMM; full amount to LPs within the fee tier in Whirlpools
- **protocol fee**: variably set by governance vote
- **Orca DAO**: operated via Realms-based on-chain voting
- **Foundation form**: the Orca Foundation leads protocol development

## 7. International comparison / cross-chain strategy

While continuing its Solana-centric strategy, Orca takes a **multi-SVM** strategy through deployment to Eclipse (an SVM L2  on Ethereum). There is no track record of deployment to Aptos / Sui. No plans for EVM deployment have been disclosed.

For the overall Solana DEX volume and market structure, see [[exchanges/solana-ecosystem-dex-comparison]]; for the comparison with EVM-family DEXs, see [[exchanges/global-dex-major-five-comparison]]. For the lineage of concentrated-liquidity design, see [[exchanges/amm-design-evolution]].

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX group comparison (most important cross-link)
- [[exchanges/dex-raydium-solana]] — Solana competing AMM (most direct comparison target)
- [[exchanges/amm-design-evolution]] — AMM design evolution
- [[exchanges/global-dex-major-five-comparison]] — global DEX comparison
- [[exchanges/INDEX]] — exchanges domain index
- [[exchanges/native-dex-flip-incumbent-pattern]] — DEX flip pattern

## Sources

- Public-information compilation (Orca official docs / Whirlpools whitepaper, orca.so)
- Public-information compilation (DefiLlama Orca dashboard TVL / Volume)
- Public-information compilation (Orca Foundation governance forum communications)
- Public-information compilation (Solana Foundation ecosystem announcements)
- Public-information compilation (Uniswap v3  whitepaper - design-comparison reference source)

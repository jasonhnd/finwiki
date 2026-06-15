---
source: exchanges/dex-raydium-solana
source_hash: e832b9d0bea77fbc
lang: en
status: machine
fidelity: ok
title: "Raydium — Solana veteran AMM / memecoin liquidity hub overview"
translated_at: 2026-06-15T03:48:21.866Z
---

# Raydium — Solana veteran AMM / memecoin liquidity hub overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the Solana peer context, [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for the EVM contrast, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / design boundary.

> Launched 2021-02  · RAY token · constant product (x*y=k) AMM · former Serum integration legacy · now a memecoin liquidity hub

## 1. Protocol overview

- **Chain**: Solana L1 (SVM environment)
- **Model**: constant product AMM (x*y=k) + concentrated liquidity (CLMM) + former Serum/OpenBook orderbook hybrid (legacy)
- **Launch**: 2021-02-21
- **Token**: RAY (governance / fee accrual / staking)
- **Official URL**: raydium.io
- **TVL (2024–2026  overview)**: ranges within $1.5–2.5B, continuously occupying 20–30% of Solana DEX TVL

## 2. Design characteristics (Serum legacy → OpenBook migration → in-house CLMM)

Raydium initially differentiated itself with an "AMM-on-orderbook" design that supplied liquidity to the **Serum central order book** on Solana. This is a mechanism that automates two-way arbitrage between Solana's unique high-speed CLOB (Serum) and the AMM, a design with no analog in EVM ecosystems.

- **2021–2022**: the hybrid era of Serum CLOB + Raydium AMM
- **2022-11**: with the FTX collapse, Serum (led by the FTX founding team) was effectively frozen
- **2022-12**: the Solana community forked Serum and continued it as [[exchanges/openbook-fork-solana|OpenBook]]. Raydium switched to OpenBook integration
- **From 2023  onward**: implemented its own **Concentrated Liquidity Market Maker (CLMM)**. Provides concentrated-liquidity pools similar to Uniswap v3 
- **Currently**: a 3 -layer coexistence of standard AMM + CLMM + OpenBook hook

## 3. Role in the memecoin economy

What gives Raydium its greatest presence in 2024–2026 年 is its role as the **Pump.fun-linked memecoin listing route**.

- **Pump.fun bonding curve**: when a new memecoin reaches a market cap of about $69k on the curve, it automatically migrates to a Raydium pool
- **migration fee**: about 6 SOL (collected by the protocol) + Raydium-side listing
- **Result**: the number of memecoin pools on Raydium increases at a pace of **1000+/day** (2024-Q4–2025)
- **Liquidity routing**: because the Jupiter aggregator prioritizes routing through Raydium pools, Raydium is the de facto default listing venue for memecoins

## 4. Comparison with Orca / Meteora

| Item | Raydium | Orca | Meteora |
|---|---|---|---|
| Design | constant product + CLMM + orderbook hook | concentrated liquidity (Whirlpools) | DLMM (Dynamic Liquidity) |
| Main use | memecoin + general spot | retail-oriented swap | memecoin + advanced LP |
| token | RAY | ORCA | MET (not issued / no public information) |
| TVL scale | $1.5–2.5B | $300–500M | $400–800M |
| Strengths | memecoin migration, aggregator-routed volume | UX, stable LP | LP efficiency, dynamic fee |

## 5. Major events / history

- **2021-02-21**: Raydium mainnet launch
- **2021-03–2022**: rapid growth with the Serum AMM-on-orderbook design, the center of Solana DeFi summer
- **2022-11**: FTX collapse → Serum frozen → Raydium interim response
- **2022-12**: OpenBook fork begins
- **2023**: CLMM implementation, migration to an in-house liquidity layer
- **2023-12**: protocol hack (admin key leak, about $4.4M loss). Remediation / compensation carried out
- **From 2024-Q3  onward**: became a memecoin hub through migration linkage with Pump.fun
- **2025–2026**: reigned as the core DEX routed via Jupiter during the Solana memecoin mania period

## 6. Governance / economic model

- **RAY**: total supply 555M, receives fee share via staking
- **fee structure**: standard 0.25% (of which 0.22% to LPs, 0.03% for buy-back to RAY stakers)
- **CLMM pools**: selectable fee tier (0.01% / 0.05% / 0.25% / 1%)
- **governance**: more team-led than on-chain voting; token distribution is relatively low

## Related

- [[exchanges/solana-ecosystem-dex-comparison]] — Solana DEX comparison (most important cross-link)
- [[exchanges/dex-orca-solana]] — Solana competing AMM
- [[exchanges/global-dex-major-five-comparison]] — EVM DEX contrast
- [[exchanges/amm-design-evolution]] — AMM design evolution
- [[exchanges/native-dex-flip-incumbent-pattern]] — earlier DEX flip pattern
- [[exchanges/INDEX]] — exchanges domain index
- [[exchanges/global-dex-major-five-comparison]] — global DEX comparison

## Sources

- Public-information compilation (Raydium official docs, raydium.io)
- Public-information compilation (DefiLlama Raydium dashboard TVL/Volume)
- Public-information compilation (Solana Foundation Serum end-of-life timeline / OpenBook fork background)
- Public-information compilation (Pump.fun whitepaper / Raydium migration specification)
- Public-information compilation (Raydium 2023-12 admin key incident postmortem)

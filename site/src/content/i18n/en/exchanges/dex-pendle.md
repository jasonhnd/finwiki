---
source: exchanges/dex-pendle
source_hash: 250618c944525932
lang: en
status: machine
fidelity: ok
title: "Pendle Finance — yield tokenization protocol (PT/YT) overview"
translated_at: 2026-05-31T03:19:56.470Z
---

# Pendle Finance — yield tokenization protocol (PT/YT) overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX major five comparison]] for adjacent DEX peer context, [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the broader system / design boundary, and [[exchanges/cex-native-token-strategy-comparison|CEX native token strategy comparison]] for token economy contrast.

> Launched 2021  · multi-chain (Ethereum, Arbitrum, BNB, Mantle, Berachain, Sonic, etc.) · PENDLE token · splits yield-bearing assets into **PT (principal) + YT (yield)**

## 1. Protocol overview

- **Chains**: centered on Ethereum mainnet, also deployed to Arbitrum / BNB Chain / Mantle / Berachain / Sonic, etc.
- **Model**: yield tokenization
- **Launch**: 2021-06
- **Token**: PENDLE (governance + fee share via vePENDLE)
- **Official URL**: pendle.finance
- **TVL (2024–2026  snapshot)**: $3–7B range, overwhelming top position in the yield-tokenization field

## 2. PT / YT mechanism

Pendle's core design **splits a yield-bearing asset (e.g., stETH, sDAI, USDe, sfrxETH) into 2  tokens**:

| Token | Meaning | Price behavior |
|---|---|---|
| **PT (Principal Token)** | The principal-equivalent portion (redeemable for the underlying asset 1:1  at maturity) | Discounted price inclusive of accrued yield; converges to 1.0  at maturity |
| **YT (Yield Token)** | The right to receive yield until maturity | Priced by remaining time and expected yield; zero at maturity |

This enables the following strategies:

- **Buy PT** → lock in a "fixed yield" (the DeFi version of a zero-coupon bond)
- **Buy YT** → "go long on yield," taking leveraged exposure to yield movements
- **Sell YT** → immediately monetize your own yield (forward yield selling)

## 3. Major supported assets (2024–2026)

As a focal point for yield-bearing assets, Pendle integrates with major DeFi protocols:

- **Lido stETH** (Ethereum LST): the core market from the earliest period
- **Maker sDAI** (Savings DAI): stablecoin yield market
- **Ethena USDe / sUSDe** (synthetic dollar): the decisive market that pushed Pendle TVL from $1B → $5B+ in 2024 年
- **Frax sfrxETH**: LST market
- **Aave aTokens**: lending yield market
- **EigenLayer LRT group** (eETH / pufETH / ezETH / rsETH, etc.): explosive expansion in the restaking yield market in 2024 年

In particular, the integration with **Ethena USDe** (2024 年) was the main driver of Pendle's TVL surge. USDe holders bring sUSDe into Pendle, enabling the double strategy of securing fixed yield + receiving Sats (Ethena points).

## 4. AMM design (custom curve)

Pendle's internal AMM is a proprietary curve optimized for swaps of the **PT-asset pair**:

- Builds into the curve the property that the PT price converges to 1.0  as maturity approaches
- LPs minimize IL (impermanent loss) and continuously earn accrued yield
- v2  introduced a **time-decaying AMM**, with the curve fitting PT's theoretical price
- Distributes swap fees + PENDLE incentives to LPs

## 5. vePENDLE economy

- **PENDLE token**: governance + ve (vote-escrow) model
- **vePENDLE**: obtained by locking PENDLE for up to 2  years
- **Rights of vePENDLE holders**: protocol fee share, voting on emission allocation to each pool (gauge voting), boost
- Designed as a variant of ve(3,3) governance design (see [[exchanges/amm-design-evolution]]), referencing the Curve / Convex model
- A bribe market (providing external incentives to vlPENDLE) is also established, via booster protocols such as Equilibria / Penpie

## 6. Major events & history

- **2021-06**: Pendle v1  launched
- **2022–2023**: TVL languished during the DeFi winter, enduring in the $50–200M range
- **2023-Q4**: TVL revived as the LST yield market expanded, breaking $500M
- **2024-Q1–Q2**: the Ethena USDe integration surged **TVL $1B → $5B**. Pendle's structural inflection point
- **2024-Q3–Q4**: further expansion through support for the EigenLayer LRT group
- **2025**: Boros development began (perpetual yield trading extension)
- **2025–2026**: multi-chain expansion accelerated (Berachain / Sonic / Mantle, etc.)

## 7. International comparison & cross-chain strategy

Pendle overwhelms similar protocols in the yield-tokenization field (Element Finance withdrew, Tempus withdrew, Sense Finance small in scale), establishing a **de facto monopoly position**. It functions as the representative of EVM-based fixed-yield markets.

There are few protocols with similar functionality on the Solana side (similar functionality is limited in [[exchanges/solana-ecosystem-dex-comparison]]), making it an inherent strength of the EVM ecosystem. Pendle pursues a multi-chain strategy centered on Ethereum L1 , expanding to Arbitrum / BNB / Mantle / Berachain / Sonic, etc., and incorporating each chain's major yield-bearing assets.

## Related

- [[exchanges/global-dex-major-five-comparison]] — Global DEX comparison
- [[exchanges/amm-design-evolution]] — AMM design evolution (the ve(3,3) lineage)
- [[exchanges/dex-raydium-solana]] — Major DEX on another chain
- [[exchanges/dex-orca-solana]] — Major DEX on another chain
- [[exchanges/dex-jito-solana]] — Comparison with LST-based (JitoSOL)
- [[exchanges/INDEX]] — Exchange domain index
- [[exchanges/native-dex-flip-incumbent-pattern]] — DEX flip pattern

## Sources

- Public-information compilation (Pendle official docs / whitepaper, pendle.finance)
- Public-information compilation (DefiLlama Pendle dashboard TVL / Volume)
- Public-information compilation (Ethena Labs USDe × Pendle integration official announcement, 2024)
- Public-information compilation (EigenLayer LRT group × Pendle integration announcement, 2024)
- Public-information compilation (Lido / Maker / Frax protocol official — supported-asset listings for Pendle)

---
source: exchanges/dex-orca-solana
source_hash: cfd3a920f0455eb0
lang: en
status: machine
fidelity: ok
title: "Orca Whirlpools — Solana-based concentrated-liquidity AMM overview"
translated_at: 2026-07-29T11:02:23.000Z
---

# Orca Whirlpools — Solana-based concentrated-liquidity AMM overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dex-raydium-solana|Raydium]] for the Solana AMM peer comparison, [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] for the broader Solana DEX layer, and [[exchanges/amm-design-evolution|AMM 設計進化系譜]] for the system / design boundary.

> Launched in 2021 · open-source concentrated-liquidity AMM on Solana · ORCA governance and utility token

## 1. Protocol overview

- **Chain**: Solana L1 (SVM environment)
- **Model**: concentrated-liquidity AMM (Whirlpools design, functionally similar to Uniswap v3 )
- **Launch**: 2021 (standard AMM), 2022 (Whirlpools CLMM)
- **Token**: ORCA (governance / utility; verify current rights in the official Tokenomics documentation)
- **Official URL**: orca.so
- **Liquidity provision**: permissionless pool creation and full-range / custom-range positions

## 2. Design of Whirlpools CLMM

Orca's core product **Whirlpools** is a CLMM that implements Uniswap v3 's concentrated-liquidity concept on Solana SVM. LPs supply liquidity by specifying a price range and earn fees only when trading is within the specified range.

- **fee tiers**: pool-level fee configurations may change; verify them in the current official documentation
- **tick spacing**: fixed per fee tier (fine-grained range management)
- **LP NFT**: each LP position is represented as an NFT (same as Uniswap v3 )
- **active liquidity**: liquidity outside the range cannot earn fees (trade-off between capital efficiency and LP risk)

## 3. UX / design philosophy

Orca's current official About page states that it aims to make onchain trading and liquidity provision accessible through clear interfaces, open infrastructure, and Solana-native tools:

- **Clear tools**: interfaces for token swaps and liquidity provision
- **Permissionless pool creation**: support for pool creation and liquidity management
- **Open infrastructure**: audited smart contracts, SDKs, and APIs for builders

## 4. Orca public-specification snapshot

Source: The entire table is based on Orca's official [About](https://docs.orca.so/support/about), [Developer Overview](https://docs.orca.so/developers/overview), and [ORCA Tokenomics](https://docs.orca.so/governance/tokenomics), checked on 2026-07-29.

| Item | Officially documented specification |
|---|---|
| Network / AMM | Open-source CLMM on Solana (Whirlpools) |
| Liquidity positions | Users can create and manage full-range or custom-range positions |
| Protocol history | Orca launched in 2021, Whirlpools in 2022, and the v2 UI in 2024 |
| ORCA token | Solana SPL governance / utility token; verify supply and related parameters in the current official Tokenomics documentation |
| Governance | Verify the current DAO proposal, voting, and delegation mechanisms in the official governance documentation |

Dynamic TVL, volume, market share, and other protocols' listing policies are excluded from this static snapshot.

## 5. Major events / history

- **2021**: Orca launched as a constant-product AMM
- **2022**: Orca launched Whirlpools, its concentrated-liquidity program
- **2024**: Orca launched the v2 UI for traders, liquidity providers, token creators, and builders

## 6. Governance / economic model

- **ORCA token**: Solana SPL governance and utility token
- **Token / fee mechanisms**: xORCA, protocol-fee, and treasury parameters may change, so this entry does not freeze allocation ratios; verify them in the official [ORCA Tokenomics](https://docs.orca.so/governance/tokenomics)
- **Orca DAO**: verify current rights and procedures for proposals, voting, delegation, and the Council in the official governance documentation

## 7. International comparison / cross-chain strategy

The current official Developer Overview describes Whirlpools as an **open-source CLMM on Solana**. This entry does not infer active deployments or a multi-chain / multi-SVM strategy that current official materials do not establish.

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

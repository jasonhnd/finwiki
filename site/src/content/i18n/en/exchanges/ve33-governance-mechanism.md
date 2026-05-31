---
source: exchanges/ve33-governance-mechanism
source_hash: fc7acc2300644603
lang: en
status: machine
fidelity: ok
title: "ve(3,3) governance mechanism — Curve veCRV → Solidly → Velodrome/Aerodrome evolution"
translated_at: 2026-05-31T05:31:05.758Z
---

# ve(3,3) governance mechanism — Curve veCRV → Solidly → Velodrome/Aerodrome evolution


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

**ve(3,3)** is the combination of **vote-escrow (ve)** + **(3,3) game theory**. A DeFi tokenomics mechanism that integrates LP rewards + protocol revenue distribution + governance voting. Curve's veCRV (2020) is the origin, Solidly (Andre Cronje, 2022) abstracted it, and Velodrome (Optimism, 2022) / Aerodrome (Base, 2023) put it into practice. Today dozens of derivative protocols operate as the core of L2 native DEX economies.

## Basic structure

- **lock**: locking a token for 1  weeks〜4  years issues a veToken (NFT) · the longer the lock period, the higher the veToken ratio (e.g. 4 -year lock = 1.0x, 1  years = 0.25x)
- **vote**: veToken holders decide by vote the direction of emissions (which LP pool gets rewards) during the weekly epoch
- **bribe**: a third party (token project) pays a "vote-incentive fee" to direct emissions to its own LP pool → forms a bribe market
- **rebase**: a portion of emissions is redistributed to existing veToken holders → mitigates dilution + cultivates holder loyalty

## Major protocol comparison

- **Curve (veCRV)** (2020-08): ve original · 4 -year lock · LP gauge voting · CRV emission · stable-swap liquidity hub · meta layer with Convex Finance
- **Solidly** (2022-02): Andre Cronje abstracted it · Fantom · failed immediately (rug + Cronje's retirement) · design philosophy inherited by successors
- **Velodrome** (2022-06, Optimism): Solidly fork · veVELO · Optimism native DEX · first successful implementation
- **Aerodrome** (2023-08, Base): Velodrome v2 fork · veAERO · Base native DEX · Uniswap reversal case (TVL #1 on Base)
- **Equalizer** (Sonic), **Thena** (BNB), **Camelot** (Arbitrum), and many other ecosystem derivatives

## Economic role

- **liquidity segmentation**: emission voting forms "strategic LPs" (the L2 -leading party concentrates them in key asset pools)
- **bribe market**: token projects pay to direct liquidity, turning it into real money (e.g. Aerodrome bribe = several million USD per week)
- **host alignment**: the L2 -leading party (Coinbase Ventures / Optimism Foundation) closes the loop of a chain-native economy by holding veToken · internalizing the liquidity of host assets such as cbBTC/USDC

## Risks and constraints

- **governance concentration**: the top 10  of ve holdings controls emissions → oligopolization · the "veWhale" problem
- **vetokenomics complexity**: degraded UX for ordinary LPs · lock period + NFT + bribe + rebase make the learning curve steep
- **chain dependency**: the fate of a native DEX (a chain reaction when L2  declines) · Velodrome's TVL shrank with Optimism stagnation
- **emission sustainability**: a token-price decline causes APR collapse → risk of the flywheel spinning in reverse

## Cross-links

- [[exchanges/native-dex-flip-incumbent-pattern]] (Aerodrome reversal case)
- [[exchanges/vetoken-host-protocol-flywheel]] (Coinbase × Aerodrome × cbBTC)
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[fintech/portfolio-winner-structure-arm-analog|portfolio winner structure arm analog]]
- [[exchanges/cex-native-token-strategy-comparison|CEX ネイティブトークン戦略比較]]

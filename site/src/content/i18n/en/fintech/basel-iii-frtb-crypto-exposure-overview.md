---
source: fintech/basel-iii-frtb-crypto-exposure-overview
source_hash: 3de99393729c2f2a
lang: en
status: machine
fidelity: ok
title: "Basel III FRTB Crypto Exposure · BCBS SCO60 1,250% Risk Weight Overview"
translated_at: 2026-05-31T06:16:15.702Z
---

# Basel III FRTB Crypto Exposure · BCBS SCO60 1,250% Risk Weight Overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The BCBS (Basel Committee on Banking Supervision) published the "Prudential treatment of cryptoasset exposures" standard (SCO60) in 2022-12 , classifying cryptoassets into 2  groups: **Group 1** (compliant tokenized assets or qualifying stablecoins) applies existing risk weights of 5-100%; **Group 2** (other cryptoassets including BTC/ETH) applies a **1,250% risk weight + 1% exposure limit**. 2025-01-01 was set as the target implementation date for jurisdictions.

## Key facts

- BCBS SCO60  published: 2022-12-16 ^[extracted]
- Global implementation target date: 2025-01-01 ^[extracted]
- Group 2  exposure limit: 1% of Tier 1  capital ^[extracted]
- Treatment when limit exceeded: amount above limit receives 1,250% × 2  = effective 2,500% risk weight ^[extracted]
- EU / HK / JP / SG / CH: full implementation 2025-01  through 2025-04  ^[extracted]
- UK: implementation 2026-01-01 ^[extracted]
- USA: 2025-07  delayed to 2026-07  · delayed due to banking industry lobbying ^[extracted]

## Mechanism / How it works

**BCBS SCO60  4 -group classification**:
- **Group 1a (Tokenized TradFi)**: tokenized bonds/equities/commodities · same RW as underlying (5-100%) · examples: BUIDL / OUSG / ONDO · redeemability + legal enforceability required
- **Group 1b (Qualifying SC)**: fully reserved + real-time redemption · must pass redemption risk + basis risk (≤10bp for 99% of the time) tests · candidates: USDC PPSI / EURC / USDB · disqualified: DAI / FRAX / USDT
- **Group 2a (Hedged)**: BTC/ETH hedged with derivatives · 1,250% RW + capital relief
- **Group 2b (Other)**: 1,250% RW = 100% capital backing · 1% exposure limit

Basel III formula: RWA = Exposure × Risk Weight × 12.5  · Capital = RWA × 8%. $100  BTC exposure → RWA = $100  × 1250% = $1,250  → Capital = $100, i.e. 1:1  capital deduction. Practical effect = banks must maintain 1:1  capital against BTC positions, degrading ROE relative to normal credit by ~12.5x. Comparison with USDC Group 1b: reserve = short-term treasuries + cash · applicable short-term treasury risk weight 0-20% · capital ~10%, far less costly. HK's reserve framework connects directly to SCO60 ; see [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]] for details.

## Origin & evolution

BCBS launched cryptoasset consultation in 2019 年, introducing the Group 1/2  classification prototype in the 2 th round CP of 2021 年. Final CPs issued 2022-06 ; SCO60  standard published 2022-12-16. Jurisdictions completed domestic BCBS implementation proposals in the first half of 2024 年, setting 2025-01  as the global implementation target. In the US Endgame proposal, megabank lobbying sought partial exemptions for BTC/ETH ETFs; Trump 2.0  leans toward a light-touch approach, with 1,250% possibly softened to ~150-300% in the 2026-Q3  final rule. For the implicit effect of the capital transmission channel on bank selection between USDC and USDT, see [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 準備金概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
<!-- /wiki-links:managed -->

## Sources

---
source: fintech/cbdc-multi-tier-architecture-three-paradigms
source_hash: 260dd492e8809cb7
lang: en
status: machine
fidelity: ok
title: "3  Major Active CBDC Paradigms"
translated_at: 2026-05-31T06:16:15.741Z
---

# 3  Major Active CBDC Paradigms

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 3  CBDC projects each represent 3  distinct architectural paradigms: China's e-CNY = the canonical two-tier architecture (central bank → 6  commercial banks → users); Brazil's DREX = token-based multi-tier (BCB → commercial-bank tokenised deposits → users · Hyperledger Besu); digital euro = hybrid architecture (ECB → PSP → users · €3000-4000  holding cap). The 3  illustrate how central banks trade off between protecting financial intermediation and introducing programmability.

## Key facts

- e-CNY research began 2014 , pilot operations 2020.04 ; cumulative transaction volume as of 2025  exceeds ¥7 兆 ^[extracted]
- e-CNY operating institutions: ICBC / ABC / BOC / CCB / BoCom + 6  commercial banks ^[extracted]
- e-CNY cross-border interconnects with Hong Kong / Thailand / UAE via mBridge ^[extracted]
- DREX technology stack: Hyperledger Besu (EVM-compatible) + smart contract programmability ^[extracted]
- DREX pilot operations 2024-2025 ; 14  institutional consortium participants ^[extracted]
- Digital euro: legislation began 2025 年; holding cap €3000-4000  ^[extracted]
- Digital euro offline transactions have cash-type privacy; online is account-based ^[extracted]

## Mechanism / How it works

**China e-CNY · Canonical two-tier architecture**:
- Central bank (PBoC) → operating institutions (6  commercial banks) → user wallets
- Mixed account-based and value-token model; controllable anonymity (small amounts anonymous, large amounts traceable)
- Fully preserves commercial bank intermediation; does not destabilise the 4  major-bank system
- Cross-border interconnection with HKD / THB / AED via [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]

**Brazil DREX · Token-based multi-tier**:
- BCB (Banco Central do Brasil) → commercial banks (issuing tokenised deposits) → users
- Hyperledger Besu (EVM-compatible) + smart contracts
- DREX is not a direct retail CBDC but a two-tier structure of wholesale CBDC + tokenised deposits
- Core design choice: **make commercial banks the drivers of innovation through tokenised deposits**

**Digital euro · Hybrid architecture**:
- ECB → regulated payment service providers (PSPs) → users
- Technology not yet finalised; legislation began 2025 年
- Offline transactions have cash-type privacy; online is account-based
- Holding cap €3000-4000  → **explicitly protects commercial bank deposit base**; avoids disintermediation

## Origin & evolution

2014  China's PBoC initiated e-CNY → the world's longest-running CBDC research project. 2020.04  First 4 -city e-CNY pilot; expanded to 23  cities by 2022.04 . 2023  Brazil's DREX (formerly Real Digital) launched → choosing Hyperledger Besu was a significant decision from the perspective of "chain-native + EVM ecosystem." 2023  ECB completed the digital euro Investigation Phase; 2024  Preparation Phase; 2025.06  legislation began → the holding cap became the political focal point in design discussions. The 3  projects respectively embody 3  political paths: China (state-led), emerging market (bank empowerment), and the euro area (cautious intermediary protection). For Japan's DC-JPY, see [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
<!-- /wiki-links:managed -->

## Sources

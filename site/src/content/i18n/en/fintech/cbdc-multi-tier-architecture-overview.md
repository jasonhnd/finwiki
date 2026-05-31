---
source: fintech/cbdc-multi-tier-architecture-overview
source_hash: 3a6a0b57603d5355
lang: en
status: machine
fidelity: ok
title: "CBDC Multi-Tier Architecture Overview"
translated_at: 2026-05-31T06:16:15.732Z
---

# CBDC Multi-Tier Architecture Overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> CBDCs (central bank digital currencies) can be classified into 3  paradigms based on issuance architecture: **two-tier architecture** (central bank → commercial bank → user · China e-CNY etc.), **direct CBDC** (central bank directly to user · theoretical only), and **token-based multi-tier architecture** (layered central bank + commercial bank tokenised deposits · Brazil DREX / digital euro etc.). The choice of architecture reflects fundamental judgements by central banks on financial intermediation continuity / monetary sovereignty / privacy / cross-border interoperability.

## Key facts

- As of end of 2025 年, 130+ central banks globally are researching CBDC; 30+ have entered the pilot stage ^[extracted]
- Only 4  countries have formally issued retail CBDCs (China / Brazil / Nigeria / Jamaica) ^[extracted]
- All G10  central banks have chosen **two-tier or multi-tier architecture**; none has adopted direct CBDC ^[extracted]
- Brazil's DREX is the most mature commercial experiment in the token-based multi-tier paradigm ^[extracted]
- China's e-CNY is the largest-scale proof-of-concept for two-tier architecture (cumulative ¥7 兆 yuan as of 2025 年) ^[extracted]
- Digital euro holding cap: €3000-4000 (to avoid bank deposit outflows) ^[extracted]

## Mechanism / How it works

The core difference among the 3  types of architecture lies in the **account hierarchy**:

| Dimension | Two-tier | Direct | Token-based multi-tier |
|---|---|---|---|
| Number of central bank accounts | Few (for commercial banks) | Many (for all citizens) | Medium (for commercial banks + token pools) |
| Role of commercial banks | Complete (KYC + distribution) | Marginalised or eliminated | Evolves into tokenised deposit issuers |
| Privacy | Commercial banks can see; central bank restricted | Central bank has full visibility | Adjustable via cryptographic layer |
| Technology | Account-centric | Account or token | Token + smart contracts |
| Cross-border | Weak | Extremely weak | Strong (interoperable with wholesale CBDC) |

**Political implications of architecture choice**: Direct CBDC marginalises commercial banks → breakdown of financial intermediation → central bank takes on credit allocation → politically unacceptable. **All major central banks choose to protect the bank deposit base** (two-tier or multi-tier). Token-based multi-tier is an emerging middle path that introduces programmability while preserving intermediation by having commercial banks issue tokenised deposits — structurally isomorphic to the logic of [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC と deposit token のテーゼ]].

## Origin & evolution

2014 : PBoC begins e-CNY research (the oldest large-scale CBDC project globally). 2017-2019 : Multilateral organisations such as BIS / IMF propose the "central bank digital currency" conceptual framework. 2020 : ECB publishes digital euro report, establishing the "two-tier / direct" dichotomy. 2022.04 : China's e-CNY pilot expands to 23  cities; two-tier architecture validated at scale. 2023-2024 : Brazil's DREX (Hyperledger Besu-based) + digital euro legislation begins → token-based multi-tier paradigm matures. 2025-2026 : G10  central banks coordinate wholesale CBDC via [[fintech/bis-project-agora-overview|Agorá]]; retail CBDC pursued independently by each country → "architecture choice determines sovereign space" becomes central bank consensus. For the Japan DC-JPY trial, see [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム · e-CNY / DREX / デジタル・ユーロ]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## Sources

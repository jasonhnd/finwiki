---
source: fintech/cbdc-multi-tier-architecture-tradeoffs
source_hash: 67c33bd5b5347093
lang: en
status: machine
fidelity: ok
title: "CBDC Architecture Choice: the 4  Major Tradeoffs"
translated_at: 2026-05-31T05:31:05.780Z
---

# CBDC Architecture Choice: the 4  Major Tradeoffs

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> When a central bank chooses a CBDC architecture, it faces 4  core tradeoffs: **survival of financial intermediation vs central-bank direct** (decides the fate of commercial banks), **monetary sovereignty vs cross-border interoperability** (decides the relationship with wholesale-CBDC corridors), **privacy vs anti-money-laundering** (decides the central bank's visibility), and **room for innovation vs system stability** (decides programmability). Every live CBDC design is a different combination of these 4  tradeoffs.

## Key facts

- Direct CBDC marginalizes commercial banks → politically unacceptable → adopted by none of the G10  central banks ^[extracted]
- The two-tier architecture is strong domestically, weak cross-border → requires wholesale-CBDC corridors (mBridge / Agorá) ^[extracted]
- token-based multi-tier is naturally cross-border-friendly, but threatens the sovereign-currency hierarchy ^[extracted]
- Direct CBDC gives the central bank the strongest AML capability, but zero privacy ^[extracted]
- In the two-tier model commercial banks handle KYC, and the central bank does not see users directly ^[extracted]
- token-based multi-tier can tune privacy at the cryptographic layer, but compliance cost is high ^[extracted]
- The programmability of smart contracts is the main room for innovation in token-based multi-tier ^[extracted]

## Mechanism / How it works

**1. Survival of financial intermediation vs central-bank direct**: Direct CBDC marginalizes commercial banks → collapse of financial intermediation → the central bank is forced to take on credit allocation (lending directly to companies) → politically unacceptable. All major central banks protect the bank-deposit base (two-tier or multi-tier). This is why none of the G10  central banks has adopted direct CBDC.

**2. Monetary sovereignty vs cross-border interoperability**: The two-tier architecture is strong domestically (a complete central bank → commercial bank → user control chain) but weak cross-border (it must borrow wholesale-CBDC corridors such as [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]). token-based multi-tier is naturally cross-border-friendly (interoperability of token standards) but threatens the sovereign-currency hierarchy (a country's tokenized deposits may circulate overseas). This is the logic behind e-CNY choosing two-tier + mBridge cross-border supplementation.

**3. Privacy vs anti-money-laundering**: Direct CBDC = the central bank is fully visible, AML is strongest but privacy is zero (greatest opposition in Europe). Two-tier = commercial banks handle KYC, the central bank does not see users directly, consistent with current financial-privacy norms. token-based multi-tier = privacy can be tuned at the cryptographic layer (zero-knowledge proofs / threshold signatures), but compliance cost is high and the regulator's learning curve is steep.

**4. Room for innovation vs system stability**: token-based multi-tier (smart contracts) has the greatest room for innovation, but requires next-generation infrastructure (EVM / token standards / chain-native development stack). Two-tier is the most stable but has a low innovation ceiling (an account system is inherently not programmable). e-CNY chose two-tier prioritizing stability; DREX chose token-based prioritizing innovation.

## Origin & evolution

2017-2020  The early CBDC frameworks of the BIS / IMF discussed almost only the "direct vs two-tier" dichotomy, and the innovation dimension had not yet surfaced. 2020-2022  Enterprise DLT such as Hyperledger / Corda verified programmability at the PoC stage → "token-based multi-tier" surfaced as a 3  option. 2022-2024  Each central bank weighed the tradeoffs based on its own political / regulatory preferences: China prioritized stability (e-CNY two-tier), Brazil prioritized innovation (DREX token-based), the eurozone compromised between intermediation protection and programmability (the digital euro's hybrid + holding caps). 2026+ the three-way MRA (EU [[fintech/mica-overview|MiCA]] + US [[fintech/genius-act-501-denylist-mandate|GENIUS]] + HK [[fintech/hkma-stablecoin-licensing-overview|HKMA]]) + wholesale-CBDC corridors ([[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] + [[fintech/bis-project-agora-overview|Agorá]]) further constrain the architecture-choice space.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|3 大現役パラダイム]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リスト · 通貨保護主義]]
<!-- /wiki-links:managed -->

## Sources

---
source: fintech/bis-project-agora-overview
source_hash: c346c135ed3b00ec
lang: en
status: machine
fidelity: ok
title: "BIS Project Agorá Overview"
translated_at: 2026-06-18T23:59:13.052Z
---

# BIS Project Agorá Overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Agorá (ancient Greek for "marketplace") is the flagship project the BIS Innovation Hub launched in 2024.04  — 7  G10  central banks (U.S. FRBNY / U.K. BoE / France BdF / Japan BoJ / Korea BoK / Mexico Banxico / Switzerland SNB) + 40+ commercial banks experimenting simultaneously with wholesale CBDC + tokenized commercial-bank deposits on a unified programmable platform, positioned as the de facto standard candidate for multilateral tokenized infrastructure.

## Key facts

- 7  G10  central banks: FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ commercial-bank participants: JPM / Citi / HSBC / [[megabanks/mufg|MUFG]] / SWIFT / Mastercard / Visa, etc. ^[extracted]
- Launched 2024.04 , with the list of private-sector institutions published in 2024.09  ^[extracted]
- 2025  Phase 1  = proof of concept (cross-border wholesale settlement) ^[extracted]
- 2025-2026  Phase 2  = live prototype (not yet in operation) ^[extracted]
- The BIS Innovation Hub is overseen by Cecilia Skingsley, and Agorá was designed by the Hyun Song Shin team ^[extracted]
- Test focus: PvP (payment-vs-payment), DvP (delivery-vs-payment), cross-currency atomic settlement ^[extracted]

## Mechanism / How it works

Agorá's architecture is not a single blockchain; rather, the BIS provides a "coordination-layer specification." It **experiments with a two-tier structure in parallel**: central banks issue wholesale CBDC (M0  central-bank money), commercial banks issue tokenized deposits (M1  commercial-bank money), and the two interoperate on the same programmable platform. Core test scenarios: in cross-border wholesale settlement, PvP (the atomic exchange of 2  payment legs) / DvP (the atomic exchange of a payment leg vs an asset leg) / cross-currency settlement (the direct exchange of USD ↔ EUR, without going through SWIFT correspondent banking as an intermediary).

**Not a true "global CBDC"**: the 7  central banks each issue their own wholesale CBDC, and what Agorá provides is an "interoperability-layer specification," not a single technology stack or a single currency imposed on participants. Commercial banks issuing tokenized deposits on the Agorá platform effectively means rewriting current correspondent banking into a programmable version.

## Origin & evolution

In 2021 年, [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] (BIS + China / Hong Kong / Thailand / UAE) was launched → in 2024.10  the BIS withdrew from mBridge (with the technology handed over to PBoC + HKMA). The BIS launched Agorá almost simultaneously with its mBridge withdrawal (2024.04), which the industry widely interpreted as "the BIS politically had to have a Western-led version." In 2024.09  it published a list of 40+ commercial banks, with a depth of participation far exceeding mBridge. In 2025 年 it entered the Phase 1  proof of concept. If the three-circle MRA (Europe [[fintech/mica-overview|MiCA]] + U.S. [[fintech/genius-act-501-denylist-mandate|GENIUS]] + Hong Kong [[fintech/hkma-stablecoin-licensing-overview|HKMA]] · 2026-2027  launch expected) is established, Agorá wholesale CBDC could become the ultimate settlement anchor for cross-border stablecoin redemption — a three-tier pass-through of stablecoin → commercial-bank tokenized deposit → wholesale CBDC.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリング 5 層]]
<!-- /wiki-links:managed -->

## Sources

- https://www.bis.org/about/bisih/topics/cbdc/agora.htm

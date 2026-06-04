---
source: fintech/bis-project-agora-overview
source_hash: e031c34ab57a839c
lang: en
status: machine
fidelity: ok
title: "BIS Project Agorá Overview"
translated_at: 2026-05-31T06:16:15.723Z
---

# BIS Project Agorá Overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Agorá (from ancient Greek for "marketplace") is the flagship project launched by the BIS Innovation Hub in 2024.04  — 7  G10  central banks (US FRBNY / UK BoE / France BdF / Japan BoJ / Korea BoK / Mexico Banxico / Switzerland SNB) + 40+ commercial banks are jointly experimenting on a unified programmable platform with wholesale CBDC and tokenised commercial-bank deposits simultaneously, positioned as a de facto standard candidate for multilateral tokenisation infrastructure.

## Key facts

- 7  G10  central banks: FRBNY / BoE / BdF / BoJ / BoK / Banxico / SNB ^[extracted]
- 40+ commercial bank participants: JPM / Citi / HSBC / [[megabanks/mufg|MUFG]] / SWIFT / Mastercard / Visa etc. ^[extracted]
- Launched 2024.04 , private institution list published 2024.09  ^[extracted]
- 2025  Phase 1  = proof of concept (cross-border wholesale settlement) ^[extracted]
- 2025–2026  Phase 2  = live prototype (not yet operational) ^[extracted]
- BIS Innovation Hub overseen by Cecilia Skingsley; Agorá designed by the Hyun Song Shin team ^[extracted]
- Test focus: PvP (payment-vs-payment), DvP (delivery-vs-payment), cross-currency atomic settlement ^[extracted]

## Mechanism / How it works

Agorá's architecture is not a single blockchain; rather, the BIS provides a "coordination layer specification". **Two-layer structure in parallel experiment**: central banks issue wholesale CBDC (M0  central-bank money), commercial banks issue tokenised deposits (M1  commercial-bank money), and both interoperate on the same programmable platform. Core test scenarios: PvP in cross-border wholesale settlement (atomic exchange of 2  settlement legs) / DvP (atomic exchange of settlement leg vs asset leg) / cross-currency settlement (direct USD ↔ EUR exchange, bypassing SWIFT correspondent banking intermediation).

**Not a true "global CBDC"**: each of the 7  central banks issues its own wholesale CBDC, and what Agorá provides is an "interoperability layer specification" — it does not mandate a single technology stack or single currency. Commercial banks issuing tokenised deposits on the Agorá platform are in effect rewriting the current correspondent banking model as a programmable version.

## Origin & evolution

2021 年 sees [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] (BIS + China / Hong Kong / Thailand / UAE) launch → 2024.10  BIS withdraws from mBridge governance (technology transferred to PBoC + HKMA). Almost simultaneously with the BIS mBridge exit, Agorá is launched (2024.04); the industry widely interprets this as "BIS was politically compelled to hold a Western-led alternative." 2024.09  sees the 40+ commercial bank list published, with a depth of participation far exceeding mBridge. 2025 年 enters Phase 1  proof of concept. If the three-circle MRA (EU [[fintech/mica-overview|MiCA]] + US [[fintech/genius-act-501-denylist-mandate|GENIUS]] + HK [[fintech/hkma-stablecoin-licensing-overview|HKMA]], planned launch 2026–2027 ) is established, the Agorá wholesale CBDC could become the ultimate settlement anchor for cross-border stablecoin redemption — a three-layer pass-through of stablecoin → commercial bank tokenised deposit → wholesale CBDC.

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

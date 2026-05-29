---
title: "[opinion] Japan stablecoin / BaaS bank perimeter (2025–2026)"
source_entry: banking/japan-stablecoin-bank-perimeter-2025.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Japan stablecoin / BaaS bank perimeter (2025–2026)

> 出典エントリー: `banking/japan-stablecoin-bank-perimeter-2025.md`

## 推論 (from 1. The three-layer perimeter)

The legal-form mapping replaces a previously messy practice where SC-like products were tested under various 前払式支払手段 / 資金移動業 / VASP combinations without a clean fit. ^[inferred]

## 推論 (from Why Progmat anchors the institutional rails)

[[JapanFG/progmat|株式会社Progmat]] became an independent company on **2023-10-02**, separating from [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]] internal-project status. Its shareholder structure brings together MUFG-group institutions plus NTT Data, [[JapanFG/japan-exchange-group|JPX]], and others; participating banks include not only [[JapanFG/mufg|MUFG]] but also other megabanks and regionals. ^[inferred] The platform's role is technology and operating-rail provision, **not** issuer status — the issuer role sits with trust banks under the 信託型 EPI regime.

## 推論 (from Why platform-provider ≠ issuer)

The clean separation matters because: ^[inferred]

## 推論 (from What regional banks can and cannot do)

Regional banks face the same three-layer perimeter as megabanks: ^[inferred]

## 推論 (from BaaS partner-channel distribution)

Some regional banks have used BaaS architectures ([[banking/minna-bank-baas-model|Minna Bank]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]]) to extend their deposit franchise into partner-brand customer journeys. The SC perimeter intersects with BaaS at two points: ^[inferred]

## 推論 (from Regional pilot status)

As of the 2025–2026 transition, regional-bank SC pilots are emerging but **operationally limited**: most regional participation has been through participation in megabank- or trust-bank-led consortia (Progmat, DCJPY) rather than standalone SC issuance. The structural reason is fixed-cost technology and supervisory-coordination burden; specialised infrastructure providers like Progmat exist precisely to amortise that cost across many participating banks. ^[inferred]

## 推論 (from 6. Deposit-token vs stablecoin — the operational boundary)

The two are **complementary, not substitutes** — banks can run both legal forms in parallel, choosing the legal form per use case rather than picking one architecture. ^[inferred]

## Counterpoints

- "Japan SC framework is over-restrictive." The 信託型 lane is one of the more permissive institutional-SC frameworks globally; the broader perimeter trades off speed-to-market for legal clarity. ^[ambiguous]
- "Deposit tokens are just a marketing relabel of bank deposits." Operationally distinct — programmability, settlement design, and inter-institution transferability are structurally different from passive deposit balances. ^[inferred]
- "Stablecoins replace bank deposits." Wrong category — EPI is a separate legal form with separate consumer-protection rules; it does not displace bank-deposit funding economics. ^[inferred]
- "Progmat is a bank." It is not — Progmat is a platform-provider company. The issuer / trustee / distributor roles sit with regulated entities. ^[extracted]
- "Only megabanks can run SCs." Trust-bank issuance is restricted to 信託兼営銀行 (a small set), but participation in multi-bank consortia and EPI distribution is open to regionals and net banks under license. ^[inferred]
- "Foreign SCs will displace JPY SCs in Japan." Different use case — USDC distribution under SBI VC Trade is for dollar-denominated SC exposure; JPY-denominated SCs (JPYC, Progmat coin) serve different settlement and treasury needs. ^[inferred]

## Open questions

- How rapidly will the Progmat platform onboard additional trust-bank issuers beyond MUFG Trust?
- What is the realistic timeline for Progmat-anchored 信託型 SC to reach material institutional usage?
- How will regional-bank SC pilots evolve — pure consortium participation, or genuinely standalone regional SC issuance?
- How will deposit-token and EPI interoperate operationally — bridging protocols, settlement-vs-issuance distinction, conversion mechanics?
- How does the 改正資金決済法 framework treat tokenized deposits in cross-border settlement under [[fintech/bis-project-agora-overview|BIS Project Agora]] / [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]]-style multi-CBDC / SC architectures?
- How does the SC perimeter intersect with the [[banking/baas-japan-landscape|BaaS]] architecture as partner-brand journeys begin to integrate token-based settlement?
- How does the EPI distribution license framework adapt as more foreign SCs (USDT, PYUSD, etc.) seek Japan distribution beyond USDC?
- Will the trust-bank issuer set expand beyond the current narrow group, or will the 信託兼営銀行 license remain a structural bottleneck?

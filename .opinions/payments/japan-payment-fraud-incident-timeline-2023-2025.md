---
title: "[opinion] Japan payment fraud incident timeline 2023-2025"
source_entry: payments/japan-payment-fraud-incident-timeline-2023-2025.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Japan payment fraud incident timeline 2023-2025

> 出典エントリー: `payments/japan-payment-fraud-incident-timeline-2023-2025.md`

## Counterpoints

- "Fraud loss is just rising because there is more cashless volume." Partially true — but loss-rate per transaction in some sub-categories (notably EC card fraud and bank-API unauthorized debit) rose faster than transaction volume, indicating attacker-capability improvement rather than just denominator expansion.
- "EMV 3-DS will eliminate EC card fraud." Will substantially reduce the unauthenticated-channel volume; will not eliminate fraud at merchants that accept 3-DS step-up but where attackers bypass 3-DS through compromised cardholder-side credentials or SIM-swap.
- "Smishing is a consumer-education problem." Education matters but is incomplete — operator-side device-binding, transaction-monitoring, and step-up authentication design carry materially more loss-prevention impact than consumer-side education alone.
- "PSP onboarding failures are unusual outlier cases." They occur with structural regularity across the period; the surface needs ongoing KYM investment, not one-off fixes.
- "Liability frameworks are clear and enforceable." 預金者保護法 and brand-rules chargeback frameworks are clear; the operational reality of consumer claim adjudication is more variable, with case-specific evidence questions often determining outcome.

## Open questions

- How will smishing waves evolve as AI-generated voice and image content becomes cheaper — will mass-personalization defeat current SMS / call filtering and behavioral-monitoring detection?
- Will EMV 3-DS deployment shift fraud loss to bank-API or code-payment surfaces, repeating the historical pattern where security tightening at one surface shifts attacker focus to the next?
- Will the FSA and Japanese Bankers Association move to a 預金者保護法-equivalent statutory framework for code-payment unauthorized use, or will it remain governed by T&C?
- How will PSP and merchant-contracting-party obligations evolve following continued fraudulent-merchant onboarding cases?
- Will Japan move toward a centralized fraud-data-sharing utility (cross-issuer / cross-wallet / cross-bank), or will competition-law concerns continue to keep fraud-signal sharing limited to brand-level channels?
- How will cross-border fraud routing (using foreign-issued cards or foreign-domiciled mule accounts) affect Japan-domestic detection effectiveness?

---
title: "[opinion] Japan transit-prepaid e-money: Suica / PASMO / ICOCA / regional IC economics"
source_entry: payments/japan-transit-prepaid-suica-pasmo-icoca-economics.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Japan transit-prepaid e-money: Suica / PASMO / ICOCA / regional IC economics

> 出典エントリー: `payments/japan-transit-prepaid-suica-pasmo-icoca-economics.md`

## Counterpoints

- "Suica will be displaced by code payment." Transit-gate throughput requirements (200ms read-cycle, offline balance-debit) are structurally hard to replicate with QR code or contactless EMV at scale. Suica retains the transit niche; code payment competes at retail tap volume.
- "FeliCa is a Japanese Galapagos technology that limits global compatibility." True for inbound tourists with EMV-contactless-only cards, but JR East's Suica Welcome (短期滞在者向け) tourist-Suica and Visa / Mastercard tap-and-go at JR ticket machines partially bridge the gap.
- "Apple Pay made Mobile Suica universal." Mobile Suica via Apple Pay requires a device with FeliCa hardware — global iPhone 8+ has it, but other manufacturers (Samsung, Google Pixel for non-Japan models) typically do not, limiting the rail to Apple users and Japan-market Android users.
- "All 10 IC cards work identically." Mostly true for tap behavior; differs materially on deposit policy, expiry rules, refund procedure, mobile-app feature set, points / loyalty program, and acquirer-side merchant-fee economics.

## Open questions

- Will JR East and PASMO Co eliminate card-version deposits to match Mobile-Suica deposit-free policy, accepting one-time write-down for long-term cost simplification?
- How will breakage economics evolve as inbound tourism volume continues recovering — and at what point does breakage disclosure become a META / FSA pressure point comparable to card-class merchant-fee disclosure?
- Will Suica Internet payment grow as an EC route, or will it remain a niche compared to code-payment EC and card EC?
- How does Mobile Suica's tokenization treatment under Apple Pay interact with EMV 3-DS for retail merchants that accept Suica via the card-payment terminal infrastructure?
- Will Cyberne settlement governance evolve as private-railway issuers (PASMO, manaca, nimoca) gain settlement weight relative to JR-issuer dominance?
- Will any of the regional IC issuers exit the scheme as smartphone code-payment cannibalizes regional retail tap volume?

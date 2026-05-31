---
source: fintech/tokenized-deposit-cumulative-volume-scale
source_hash: 7c9f5e063810d5af
lang: en
status: machine
fidelity: ok
title: "Tokenized deposit cumulative transaction size pattern · Kinexys $1.5T as an anchor for the bank deposit token sector"
translated_at: 2026-05-31T11:13:44.835Z
---

# Tokenized deposit cumulative transaction size pattern · Kinexys $1.5T as an anchor for the bank deposit token sector

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The bank deposit token sector and the stablecoin sector are **2  mutually non-overlapping markets**. Kinexys (JPMD) cumulative transaction value is $1.5T (2026-05), with daily average $5B+ and **100% institutional clients** —— this scale cannot be compared directly with cumulative USDC / USDT flows, because the client layer, regulatory layer, and clearing layer are completely different. $1.5T is the core anchor for measuring "tokenized deposit sector penetration" —— the 2 th digital USD infrastructure, but its service targets are 80  global institutions (including 6  central banks), not retail / DeFi users.

## Key facts

- Kinexys cumulative transaction amount $1.5T (since 2019  started), daily average $5B+, monthly average $150B+ ^[extracted]
- Customer 100% Institution · ~80 社 (Including Visa / Mastercard / Ant / 6  central banks)^[extracted]
- JPMD = JPM Deposit Token (EUR/USD/GBP) Follow OCC US National Bank Charter, **§501  not applicable to stablecoins** ^[extracted]
- Global Digital USD Infrastructure Ranking (Cumulative): USDT $20T+ (Retail/Gray Zone) > Kinexys $1.5T (Institutional) > USDC $1.2T (Mixed)^[extracted]
- 2026-04 JPMD on Coinbase Base public chain = Bank deposit token ↔ First bridge in stablecoin sector ^[extracted]

## Mechanism / How it works

Deposit tokens vs stablecoins = 2  one regulated sector, 2  one customer base:

```
                  ステーブルコイン(§501)        銀行預金トークン
                  ─────────────                ─────────────────────
発行体            Circle / Stripe / Tether    JPMorgan / Citi / BNY
準備金            国債 / 現金                  銀行預金（FDIC 保護）
規制              GENIUS §501 / MiCA           OCC bank charter / Reg E
顧客              リテール + 機関 + DeFi       機関のみ
利息              保有者への支払い不可         可（銀行預金利息）
代表              USDC / USDT / USDB           JPMD (Kinexys) / Citi TS
```

JPMorgan uses deposit tokens to circumvent the “100% government bonds + no interest payments” constraint in §501 : JPMD holders are essentially JPM depositors and enjoy bank deposit interest + FDIC protection. Kinexys $1.5T The numbers prove the real size of the institutional-only sector, which will continue to be led in 5  years in a coalition by banks (JPM/Citi/BNY) and not crypto-native companies.

## Origin & evolution

2019 JPM Coin started (Onyx Coin System private chain / Quorum derivative) · Renamed to 2024 Kinexys · 2025-12  number of customers reached 80 社 · 2026-04 [[fintech/jpmorgan-jpmd-coin|JPMD]] onboards to Coinbase Base public chain (first bridge to public chain) [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] forms **dual core of tokenized asset infrastructure** — BlackRock goes the neutral arms dealer route (selling BUIDL to all SC issuers), JPMorgan goes the closed loop banking route (JPMD sells JPM service to customers).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン thesis]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブの分離]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- JPMorgan Kinexys 2025 Public Disclosure · OCC bank charter regulatory documents

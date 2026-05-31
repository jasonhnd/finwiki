---
source: exchanges/rwa-tokenization-cex-integration
source_hash: f37aeb554ff01eb9
lang: en
status: machine
fidelity: ok
title: "RWA (Real World Asset) Tokenization × CEX Integration"
translated_at: 2026-05-31T06:16:15.699Z
---

# RWA (Real World Asset) Tokenization × CEX Integration

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

RWA (Real World Asset) tokenization = the mechanism for issuing real-world assets (US Treasuries / real estate / commodities / private credit) as on-chain tokens. BlackRock BUIDL (launched 2024-03  · US Treasury MMF) acted as a catalyst, driving rapid growth in 2024-2026 . Total RWA TVL stands at approximately $12-20B (2026  estimate), with tokenized US Treasuries as the core segment.

## Key Players

- **BlackRock BUIDL** (Ethereum) — Issued via Securitize · US institutional investors only · 5.4% yield · AUM $1.5B (2025)
- **Ondo Finance OUSG/USDY** — Backed by US Treasury ETF (SHV) · Two-tier structure: OUSG (institutional) + USDY (retail)
- **Securitize** — Tokenization platform · Manages issuance for BUIDL / Apollo / Hamilton Lane
- **Maple Finance** — On-chain private credit lending
- **Centrifuge** — Multi-asset RWA pool
- **Provenance Blockchain (Figure)** — Real estate + private credit

## CEX Listing Status

- **Domestic (Japan)**: No direct spot listings · Not approved for JVCEA whitelist · RWA-related products such as Mitsui & Co. (Zipangcoin) use separate channels (security tokens / trust structures)
- **Overseas (US)**: Coinbase provides institutional OUSG custody · Binance offers some RWA prime services
- **CEX strategy**: RWA is an extension of institutional prime brokerage → institutional CEXs have an advantage over retail CEXs

## CEX × RWA Integration Strategy

- **Custody**: BUIDL / OUSG frequently custodied by Coinbase Custody / Anchorage
- **Trading**: Institutional OTC only for secondary market (limited retail)
- **Settlement**: 24/7  settlement via USDC / USDT
- **Tax + regulation**: US SEC oversight + Reg D / Reg S exemptions + restricted to qualified institutional investors

## Domestic + Asia Expansion

- **Progmat** (Mitsubishi UFJ Trust affiliated) — Largest domestic trust-type security token (~68% market share)
- **DCJPY** + **JPYC** — Complementary candidates for RWA settlement
- **HK SFC** + **MAS DPT** are running RWA integration experiments (HKMA Project Ensemble, etc.)
- Japan retail RWA listing awaits legislative amendments (Investment Trust Act + Financial Instruments and Exchange Act)

## Cross-links

- [[exchanges/btc-spot-etf-japan-impact]] (institutional parallel)
- [[exchanges/global-institutional-custody-five-pillars]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]]
- [[exchanges/global-cex-prime-brokerage-layer]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview]]
- [[fintech/blackrock-buidl-sc-issuer-adoption]]
- Ondo Finance USDY/OUSG
- [[fintech/jp-stablecoin-progmat]]
- [[exchanges/jp-cex-staking-lending-regulation]]
- [[JapanFG/progmat]] — Progmat operating-company anchor
- [[securities/japan-best-execution-sor-pts]] — Japan best execution SOR/PTS
- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure

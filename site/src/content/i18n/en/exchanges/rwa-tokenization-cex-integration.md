---
source: exchanges/rwa-tokenization-cex-integration
source_hash: 223b48cdb2a2c1a0
lang: en
status: machine
fidelity: ok
title: "RWA (Real World Asset) tokenization × CEX handling"
translated_at: 2026-06-18T23:33:48.367Z
---

# RWA (Real World Asset) tokenization × CEX handling

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

RWA (Real World Asset) tokenization = a mechanism for issuing real assets (US Treasuries / real estate / commodities / private credit) as on-chain tokens. With BlackRock BUIDL (2024-03 launch · US Treasury MMF) as a catalyst, it grew rapidly in 2024-2026 . Total RWA TVL is $12-20B (2026 estimate), with tokenized US Treasuries as the central segment.

## Major players

- **BlackRock BUIDL** (Ethereum) — issued via Securitize · limited to US institutional investors · 5.4% yield · $1.5B AUM (2025)
- **Ondo Finance OUSG/USDY** — collateralized by US Treasury ETF (SHV) · two-tier structure of OUSG (institutional) + USDY (retail)
- **Securitize** — tokenization platform · entrusted with BUIDL / Apollo / Hamilton Lane issuance
- **Maple Finance** — private credit lending on-chain
- **Centrifuge** — multi-asset RWA pool
- **Provenance Blockchain (Figure)** — real estate + private credit

## CEX handling status

- **Domestic (Japan)**: No direct spot handling · not approved on the JVCEA WhiteList · RWA-related items such as Mitsui & Co. (Zipangcoin) go through separate routes (ST / trust)
- **Overseas (US)**: Coinbase provides institutional OUSG custody · Binance provides some RWA prime
- **CEX strategy**: RWA is an extension of institutional prime brokerage → institutional CEXs have an edge over retail CEXs

## CEX × RWA integration strategy

- **custody**: BUIDL / OUSG are entrusted to Coinbase Custody / Anchorage in many cases
- **trading**: Secondary market only via institutional OTC (limited for retail)
- **settlement**: 24/7 settlement via USDC / USDT
- **taxation + regulation**: US SEC supervision + Reg D / Reg S exemption + limited to institutional accredited investors

## Domestic + Asia expansion

- **Progmat** (Mitsubishi UFJ Trust group) — largest domestic trust-type ST (~68% share)
- **DCJPY** + **JPYC** — candidates to complement RWA settlement
- **HK SFC** + **MAS DPT** are advancing RWA integration experiments (HKMA Project Ensemble, etc.)
- Japan retail RWA handling awaits legal amendments (Investment Trust Act + FIEA)

## Cross-links

- [[exchanges/btc-spot-etf-japan-impact]] (parallel institutionalization)
- [[exchanges/global-institutional-custody-five-pillars]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]]
- [[exchanges/global-cex-prime-brokerage-layer]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview]]
- [[fintech/blackrock-buidl-sc-issuer-adoption]]
- Ondo Finance USDY/OUSG
- [[fintech/jp-stablecoin-progmat]]
- [[exchanges/jp-cex-staking-lending-regulation]]
- [[payment-firms/progmat]] — Progmat operating-company anchor
- [[securities/japan-best-execution-sor-pts]] — japan best execution SOR/PTS
- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure

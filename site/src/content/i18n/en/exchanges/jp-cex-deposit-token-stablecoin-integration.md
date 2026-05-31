---
source: exchanges/jp-cex-deposit-token-stablecoin-integration
source_hash: 71b911f813fcfe25
lang: en
status: machine
fidelity: ok
title: "Domestic CEX × deposit token / EPI integration strategy — DCJPY / Progmat / JPYC linkage"
translated_at: 2026-05-31T03:19:56.430Z
---

# Domestic CEX × deposit token / EPI integration strategy — DCJPY / Progmat / JPYC linkage


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

The 2022-06  amended Payment Services Act put into effect the system of the three EPI (Electronic Payment Instrument) types — **trust type / bank type / funds-transfer-operator type** — establishing the legal positioning of JPY-pegged stablecoins and deposit tokens. Although existing VASPs are not EPI issuers, the integration of handling is rapidly advancing through 2025-2026 . The CEX × EPI linkage model is entering a phase of driving the domestic market toward becoming a liquidity hub.

## Major EPI / deposit-token players

- **[[exchanges/jp-exchange-jpyc|JPYC 株式会社]]** (funds-transfer-operator-type EPI · JVCEA Type 1  #1042) — issues the JPY-pegged stablecoin **JPYC** + operates its own JPYC EX market. Retail-oriented.
- **[[fintech/jp-stablecoin-progmat|株式会社 Progmat]]** (trust-type EPI platform · Mitsubishi UFJ Trust 49% investment) — a multi-megabank SC issuance platform + Project Pax cross-border settlement. Institution-oriented.
- **[[fintech/jp-stablecoin-dcjpy|DCJPY]]** (DeCurret DCP, Inc. · bank-type deposit token) — invested by IIJ + SBI + Japan Post Bank + KDDI + NTT + MUFG. Commercial launch in 2024-08 . Inter-bank-settlement-oriented.

## CEX-side response

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]]** — began handling USDC / EP USDC + planned EPI issuer (the only one holding the three license types)
- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** / **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** / **[[exchanges/jp-exchange-bitbank|bitbank]]** — considering handling JPYC
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]** — Progmat SETTLENET PRO partnership + providing institutional settlement infrastructure

## Business implications

- **CEX → EPI handling**: by adding a customer JPY ⇔ stablecoin swap function, expanding domestic-settlement / overseas-remittance channels becomes possible. Extends the CEX's scope of business to payment rails.
- **Deposit token (DCJPY)**: centered on direct bank linkage + institutional-settlement use. No CEX needed (a banking-infra-direct type). Coexists with CEXs as both competitor and complement.
- **Competitive relations**: a 3 -way competitive structure of Progmat (institutional) vs JPYC (retail) vs DCJPY (inter-bank settlement). Each is optimized for a different customer base / use.
- **§501  denylist-related**: under the influence of 2026 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]], Japanese EPI emerges as a "[[fintech/three-circles-stablecoin-mra-framework|MRA 互認]]" candidate.

## Strategic roadmap

From 2026 H2  onward, each CEX is scheduled to progressively unlock the handling of EPI-family stablecoins. As CEX × EPI integration advances, the domestic market's overall transformation into a liquidity hub is expected to accelerate. The deposit token (DCJPY) runs in parallel as a B2B institutional-settlement layer, and the two-layer structure (retail EPI + institutional deposit token) heads toward completion.

## Related entries

- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/three-circles-stablecoin-mra-framework]]
- [[fintech/genius-act-501-denylist-mandate]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — global stablecoin regulation 5 -way comparison
- [[fintech/japan-stablecoin-regulatory-landscape]] — Japan stablecoin regulation landscape
- [[JapanFG/jpyc]] — JPYC operating-company anchor
- [[JapanFG/progmat]] — Progmat operating-company anchor

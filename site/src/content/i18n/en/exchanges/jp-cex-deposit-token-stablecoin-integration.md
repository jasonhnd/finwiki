---
source: exchanges/jp-cex-deposit-token-stablecoin-integration
source_hash: a5342c9fdf36a131
lang: en
status: machine
fidelity: ok
title: "Domestic CEX × deposit tokens / EPI integration strategy — DCJPY / Progmat / JPYC collaboration"
translated_at: 2026-06-18T23:33:48.346Z
---

# Domestic CEX × deposit tokens / EPI integration strategy — DCJPY / Progmat / JPYC collaboration


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

The 2022-06  amended Payment Services Act brought into force the system of the three EPI (electronic payment instrument) types — **trust type / bank type / funds-transfer-operator type** — establishing the legal positioning of yen-pegged stablecoins and deposit tokens. Although existing VASPs are not EPI issuers, the integration of their handling is advancing rapidly over 2025-2026 . The CEX × EPI collaboration model is entering a phase that drives the domestic market toward becoming a liquidity hub.

## Major EPI / deposit-token players

- **[[exchanges/jp-exchange-jpyc|JPYC 株式会社]]** (funds-transfer-operator-type EPI · JVCEA Type 1  #1042) — issues the yen-pegged stablecoin **JPYC** + operates its own JPYC EX market. Retail-oriented.
- **[[fintech/jp-stablecoin-progmat|株式会社 Progmat]]** (trust-type EPI platform · Mitsubishi UFJ Trust 49% investment) — a multi-megabank SC issuance platform + Project Pax cross-border settlement. Institution-oriented.
- **[[fintech/jp-stablecoin-dcjpy|DCJPY]]** (DeCurret DCP Inc. · bank-type deposit token) — invested in by IIJ + SBI + Japan Post Bank + KDDI + NTT + MUFG. Commercial launch 2024-08 . Interbank-settlement-oriented.

## CEX-side response

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]]** — began handling USDC / EP USDC + planned EPI issuer (sole holder of all three licenses)
- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** / **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** / **[[exchanges/jp-exchange-bitbank|bitbank]]** — considering handling JPYC
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]** — Progmat SETTLENET PRO partnership + provision of institutional settlement infrastructure

## Business implications

- **CEX → EPI handling**: adding a customer JPY ⇔ stablecoin swap function enables expansion of domestic-settlement / overseas-remittance channels. Extends the CEX's scope of business into payment rails.
- **Deposit tokens (DCJPY)**: centered on direct bank linkage + institutional settlement use. No CEX intermediation needed (a banking-infra direct-connection type). Coexists with CEX in both competition and complementarity.
- **Competitive relationship**: a 3 -pole competitive structure of Progmat (institutional) vs JPYC (retail) vs DCJPY (interbank settlement). Each is optimized for a different customer segment and use case.
- **§501  denylist relation**: under the influence of 2026 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]], Japan EPI emerges as a "[[fintech/three-circles-stablecoin-mra-framework|MRA 互認]]" candidate.

## Strategic roadmap

From 2026 H2  onward, each CEX plans to progressively unlock the handling of EPI-type stablecoins. As CEX × EPI integration advances, the liquidity-hub transformation of the domestic market as a whole is expected to accelerate. Deposit tokens (DCJPY) run alongside as a B2B institutional-settlement layer, and a two-tier structure (retail EPI + institutional deposit tokens) heads toward completion.

## Related entries

- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/three-circles-stablecoin-mra-framework]]
- [[fintech/genius-act-501-denylist-mandate]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — global stablecoin regulatory 5 -pole comparison
- [[fintech/japan-stablecoin-regulatory-landscape]] — Japan stablecoin regulatory landscape
- [[payment-firms/jpyc]] — JPYC operating-company anchor
- [[payment-firms/progmat]] — Progmat operating-company anchor

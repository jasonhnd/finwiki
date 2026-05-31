---
source: exchanges/liquid-staking-restaking-cex-exposure
source_hash: cfb062419e573e58
lang: en
status: machine
fidelity: ok
title: "Liquid Staking + Restaking Ecosystem + CEX Exposure"
translated_at: 2026-05-31T06:16:15.678Z
---

# Liquid Staking + Restaking Ecosystem + CEX Exposure

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

**Liquid Staking** = a mechanism that issues LSTs (Liquid Staking Tokens) to re-liquefy staked ETH, enabling continued DeFi participation while staking. **Restaking** = a mechanism that re-stakes already-staked ETH to AVSs (Actively Validated Services) to provide additional economic security. EigenLayer established the restaking standard on 2024 年, and combined with LRTs (Liquid Restaking Tokens), created a 2 -layer leverage structure. Institutions and CEXs are increasing exposure at both layers.

## Liquid Staking — top players

- **Lido** (stETH) — largest Ethereum LST, TVL ~$30B, DAO governance, staking available with as little as 32  ETH
- **Rocket Pool** (rETH) — decentralised, permissionless validator, operation participation from 16  ETH minimum
- **Coinbase (cbETH)** — Coinbase subsidiary staking, navigating US SEC oversight, institutional on-ramp
- **Binance (BETH/WBETH)** — Binance LST, geographic restrictions in some regions, peg mechanism
- **Mantle (mETH)** — Mantle L2  ecosystem, coordination with Bybit
- **Lido + Rocket Pool together cover ~40% of total staked ETH** (the core centralisation-risk concern)

## Restaking ecosystem

- **EigenLayer** — developed by Layr Labs, 2024-04  mainnet, ETH/LST restaking, provides trust base for AVSs, DA / oracle / bridge AVSs operational
- **Symbiotic** — Cyber Fund affiliated, multi-asset restaking, modular framework
- **Karak** — Andalusia Labs, multi-chain restaking, cross-chain DSS
- **Renzo / EtherFi / Puffer** — LRT protocols, issuing ezETH / weETH / pufETH
- 2024-2026  LRT bubble + airdrop farming drove $30B+ TVL rapid growth, point-system-based metagame

## CEX handling status

- **Domestic (Japan)**: No direct spot trading of stETH / cbETH; domestic VASP ETH staking services (bitFlyer / GMO / SBI VC) use a different structure (in-CEX staking with no LST issuance)
- **Overseas (US)**: Coinbase cbETH spot; Kraken (US staking suspended from 2023); Binance BETH (geographic restrictions in some regions)
- **Regulatory risk**: SEC monitors LST/LRT as "unregistered securities"; MiCA requires CASP licence and restrictively permits staking-as-a-service

## Risks and systemic implications

- **Lido concentration risk**: ETH 30%+ staking concentrated in 1  protocol → Ethereum consensus risk; self-limit debate ongoing
- **Slashing cascade**: AVS violations via EigenLayer can result in slashing of base staking; re-hypothecation vulnerability
- **Liquidity breakdown**: risk of recurrence of 2022-06  stETH depeg (Celsius-related), particularly for LRT pegs
- **US SEC litigation**: Coinbase case pending after 2023  Kraken staking settlement; LST/LRT is central to the securities-classification debate

## Related

- [[exchanges/jp-cex-staking-lending-regulation]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/ve33-governance-mechanism]]
- [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/eu-mica-casp-regime-overview]]
- [[exchanges/us-crypto-licensing-multi-layer-system]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview]]
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — Global VASP regulatory comparison matrix
- [[exchanges/rwa-tokenization-cex-integration]] — RWA tokenisation × CEX integration
- [[exchanges/vetoken-host-protocol-flywheel]] — veToken host protocol flywheel

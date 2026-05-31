---
source: exchanges/jp-cex-staking-lending-regulation
source_hash: 74af69c1b6588aad
lang: en
status: machine
fidelity: ok
title: "Domestic CEX staking / lending services + regulation"
translated_at: 2026-05-31T03:19:56.487Z
---

# Domestic CEX staking / lending services + regulation


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## Overview

Domestic CEXs offer **staking (earning PoS rewards)** and **lending (earning interest)** to customers. The permitted scope is restrictively defined by **JVCEA self-regulation + FSA supervisory guidelines**; compared with the US (SEC vs Kraken/Coinbase), Japan takes an ex-ante guideline-based approach.

## Major domestic services

- **[[exchanges/jp-exchange-bitflyer]] lending** — lending of BTC/ETH etc. · 14–90  days · annual yield 0.5-3%
- **[[exchanges/jp-exchange-coincheck]] crypto-asset lending** — same as above · 14-365  days
- **[[exchanges/jp-exchange-gmo-coin]] lending + staking** (Tezos etc.)
- **[[exchanges/jp-exchange-sbi-vc-trade]] staking** — late entrant on ETH
- **[[exchanges/jp-exchange-bitbank]] staking** — limited coverage

## Regulatory points

- **Avoiding deposit-likeness**: kept within the scope of "crypto-asset exchange business" under the revised Payment Services Act · customer-return guarantee obligation
- **Prohibition on principal guarantees**: obligation to disclose principal-loss risk (brochures / terms)
- **JVCEA rules**: staking is limited to **100% deployment of customer assets** · proprietary in-house deployment is prohibited
- **Tax treatment**: interest / rewards are **miscellaneous income (progressive taxation, max 55%)** for individuals / business income for corporations

For details see [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/jp-vasp-regulatory-timeline]].

## Overseas cases

- **US SEC vs Kraken** (2023-02): determined staking-as-service to be an "unregistered securities offering" · cease order + settlement of $30M
- **US SEC vs Coinbase** (2023-): similar litigation pending · a comprehensive exchange lawsuit that includes staking
- **EU MiCA** (2026  guidelines): staking services envisioned as requiring a separate license
- **Multi-layer comparison**: [[exchanges/us-crypto-licensing-multi-layer-system]]

## Risk management

- **Slashing risk**: a validator's slashing can cause loss of customer principal
- **Validator selection**: disclosure of transparency over in-house vs outsourced (Figment / Blockdaemon etc.)
- **Liquidity risk**: liquidity lock-up during the unstaking period (ETH 14-21  days etc.)
- **Token selection**: domestic CEXs conservatively offer only major PoS tokens (ETH / SOL / ATOM etc.)

## Related

- [[exchanges/liquid-staking-restaking-cex-exposure]] — Liquid staking / restaking × CEX exposure
- [[exchanges/jp-crypto-asset-taxation-detailed]] — JP crypto asset tax detail
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — Global VASP regulatory comparison matrix

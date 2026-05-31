---
source: exchanges/jp-crypto-market-maker-otc-layer
source_hash: 0fb16280599de300
lang: en
status: machine
fidelity: ok
title: "Domestic crypto-asset market maker / OTC desk industry overview"
translated_at: 2026-05-31T03:19:56.399Z
---

# Domestic crypto-asset market maker / OTC desk industry overview

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-prime-brokerage-layer|global cex prime brokerage layer]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

Behind the visible order book of domestic CEXs sits a layer of MMs (market makers) / OTC desks that handle institutional orders and large-value trades. Much of the visible trading volume at domestic VASPs depends on the continuous quoting of these MMs, and the liquidity of the retail order book is in substance supported by this layer.

## Domestic deployment of global MMs

- **B2C2 Japan** — Kanto Local Finance Bureau Director 第00012号 (registered 2017 ). UK-headquartered B2C2  was acquired and made a subsidiary by SBI Holdings in 2021-12 . A major player in domestic institutional OTC.
- **Wintermute** — No domestic legal entity. Provides liquidity to some domestic VASPs via KYC-based API connection.
- **Cumberland (DRW group)** — No domestic legal entity. OTC-centric institutional player.
- **GSR Markets** — No domestic legal entity. Quotes to domestic institutions from overseas bases.

## Domestic OTC-desk proprietary players

- **Crypto Garage (SETTLENET / OTC)** — Institutional-facing infrastructure of the DG (Digital Garage) × Tokyo Tanshi × Nomura HD group.
- **Custodiem OTC** — Formerly FTX Japan, now in the bitFlyer HD group. Transitioning from retail to institutional-OTC-only.
- **bitbank OTC** — Provides institutional OTC via affiliated subsidiary / Mercury (CoinTrade).

## Business model

bid/ask spread + large-lot premium are the main revenue sources. The tokens handled are centered on BTC / ETH / USDT / USDC, with OTC of long-tail alts being limited. The domestic minimum trade size is roughly 500 万円 and up as a guide.

## Regulatory relationship

MM-only players require either a VASP registration (Payment Services Act) or a proprietary-order-execution-business (DPM) registration under the FIEA. KYC + AML obligations are imposed on the same basis as CEXs, and they are subject to FSA monitoring.

## Related

- [[exchanges/jp-exchange-crypto-garage]]
- [[exchanges/jp-exchange-custodiem]]
- [[exchanges/jp-exchange-bitbank]]
- [[exchanges/jp-exchange-mercury]]
- [[exchanges/jp-institutional-custody-three-pillars]]
- [[exchanges/jp-vasp-parent-company-map]]
- [[exchanges/global-cex-prime-brokerage-layer]] — Global CEX prime brokerage layer
- [[securities/japan-best-execution-sor-pts]] — japan best execution SOR/PTS
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA spot volume statistical analysis

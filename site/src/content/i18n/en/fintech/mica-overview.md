---
source: fintech/mica-overview
source_hash: a415dc804e2572d6
lang: en
status: machine
fidelity: ok
title: "EU MiCA · Markets in Crypto-Assets Regulation Overview"
translated_at: 2026-05-31T07:28:06.161Z
---
# EU MiCA · Markets in Crypto-Assets Regulation Overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> MiCA is the EU-wide law regulating crypto-assets and stablecoins. It was passed in 2023-06 , partially took effect for SCs (ART / EMT) in 2024-06 , and fully took effect in 2024-12 . MiCA aligns with U.S. GENIUS Act §501  and forms the basis for a U.S.-EU MRA. It is the EU pillar of the three-circle MRA and transforms Europe into a two-track compliant market centered on USDC / EURC.

## Key facts

- MiCA was passed in 2023-06  and fully took effect in 2024-12  ^[extracted]
- Roughly 10-15 社 entities had obtained first-wave MiCA EMT licenses by round 1  ^[extracted]
- EURC circulation in 2026-05  was €280M (vs USDC EU circulation of ~$8B, with the gap narrowing from 300x to ~20x) ^[extracted]; see [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026-05]] and [[fintech/circle-usdc-stablecoin|Circle USDC / EURC issuer]] for detail
- Issuer-restriction clauses for large ARTs above €5B constrain EU expansion of USD stablecoins such as USDT ^[extracted]
- USDT's EU share fell from ~28% in 2024-12  to ~3% in 2026-05  ^[extracted]
- Algorithmic stablecoins are explicitly banned under MiCA (a consequence of the UST collapse) ^[extracted]
- ESMA Q&A 2.7: DAI / USDS / LUSD without an issuer are not in scope of MiCA, but they cannot be offered to the public ^[extracted]

## Mechanism / How it works

**MiCA's 2 -type SC framework**:
| Type | Name | Regulatory tier | Example |
|---|---|---|---|
| EMT (E-Money Token) | Single-fiat peg | EBA + national central bank | USDC (Circle Europe) / EURC / PYUSD |
| ART (Asset-Referenced Token) | Basket assets / multi-fiat peg | EBA (special regulation) | Almost no large-scale compliant ARTs |

**Key insight**: MiCA classifies stablecoins by whether they are pegged to a single fiat currency, and **pushes the vast majority of projects into the EMT bucket**. ART carries too much regulatory burden, so it is rarely adopted. This is structurally similar to GENIUS §501  chain-level denylist enforcement: rules shape product form. For concrete MiCA CASP implementation detail, see [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概要]]; for horizontal comparison with HK / SG / JP, see [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]].

**Core provisions**: reserves under 100% (short-dated sovereign bills + central-bank deposits) + third-party custody of reserves + monthly audit disclosure + issuer must maintain an EU entity + capital requirements + supply caps (large ART > €5B restrictions + some limits on large EMTs) + whitelist (only EU-licensed issuers may circulate commercially in the EU) + coordination with GENIUS §501  (freeze function + AML/CFT required).

## Origin & evolution

MiCA was proposed as part of the 2020-09  EU Commission Digital Finance Package. It was passed in 2023-06  as Regulation (EU) 2023/1114. The SC section (ART / EMT) took effect in 2024-06 , and the full regime in 2024-12 . Pressure players included Tether / USDT (MiCA non-acceptance + Article 17  large-SC restrictions limiting EU circulation), DAI / LUSD / FRAX (issuerless SC restrictions), and algorithmic stablecoins (explicitly banned after the UST collapse). Beneficiaries include Circle (USDC EU + EURC double brand), Société Générale (EUR-pegged STBL), BBVA / Santander (planned EUR SC issuance), and MiCA-compliant exchanges (Kraken / Bitstamp / Coinbase EU). MiCA forms a dual-track framework of **business + resilience** together with [[fintech/dora-eu-digital-operational-resilience-overview|DORA]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 深掘り]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC issuer]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026-05]]
<!-- /wiki-links:managed -->

## Sources

---

**Last refresh** (2026-05-26): synced EURC 2026-05  numbers (€280M) with `eu-mica-implementation-status-2026`; added Circle USDC and implementation-status wikilinks.

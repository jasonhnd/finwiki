---
source: fintech/mica-emt-art-subcategories-deep-dive
source_hash: bd833cc8af1e7cb7
lang: en
status: machine
fidelity: ok
title: "Deep dive into MiCA EMT vs ART sub-classification · Product shaping based on regulatory burden"
translated_at: 2026-05-31T11:13:44.833Z
---

# Deep dive into MiCA EMT vs ART sub-classification · Product shaping based on regulatory burden

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> MiCA precisely categorizes stablecoins into EMT (single legal currency peg) and ART (multi-asset/multi-currency peg), but on the surface it is a classification technology, in reality it is **product shaping due to regulatory burden** - forcing the majority of projects into EMT, and ART is almost never adopted. USDC/USDT falls under EMT, and multi-asset fund types like BUIDL fall under ART. **MiCA EMT's ≥ 30% bank deposit requirement is an important difference from the GENIUS Act's ≤ 50% bank deposit / ≤ 93  day T-bill**, and this is a technical gap that must be adjusted in the Transatlantic MRA (2026-Q3).

## Key facts

- MiCA 3 層:Regulation (EU) 2023/1114(L1)+ EBA/ESMA RTS/ITS(L2)+ Q&A/Guidelines(L3) ^[extracted]
- 2024-12-30:MiCA fully implemented ^[extracted]
- Existing license EMT issuer(2026-05):Circle EU / Société Générale-Forge / Banking Circle / Membrane / Quantoz / Schuman / StablR / Crypto.com (total 8 社) ^[extracted]
- Almost no ART · Excessive regulatory burden · Market votes with feet ^[extracted]
- EU share of USDT:2024-12 ~28% → 2026-05 ~3% ^[extracted]
- Significant EMT/ART Threshold: Outstanding ≥ €700M · or 30  daily average trading volume ≥ €500M · or holder ≥ 1M ^[extracted]
- USDC is designated as Significant EMT after 2025-09  · Only ^[extracted] in EU
- Reserve Difference vs GENIUS:MiCA ≥ 30% Bank Deposit · GENIUS is ≤ 50% Deposit + ≤ 93  Days T-bill Limit ^[extracted]

## Mechanism / How it works

**EMT(E-Money Token · Article 3(1)(7))**: Single official fiat currency peg (1:1) · Issuer must have EMI or credit institution license (EU Directive 2009/110/EC) · Reserve ≥ 30% Bank deposit(Article 36(1)(a))+ Remaining amount is high liquidity low risk assets · Bankruptcy-remote segregation · Representative example USDC(Circle Europe)/ EURC / EURI / EURCV / EURØP.

**ART(Asset-Referenced Token · Article 3(1)(6))**: Pegged to "any other value or right or combination thereof" (multi-currency basket / commodity basket / multi-asset) · EBA directly regulates (not national NCA) · Reserve composition is maintained at the reference asset ratio · Quarterly audit + monthly reserve attestation · Typical example XAUT(Friday) / Stopped Diem/Libra / Multi-asset type like BUIDL in theory.

**Significant EMT/ART Threshold** (EBA RTS 2025-01-22): Outstanding ≥ €700M, or 30  daily average trading volume ≥ €500M, or holder ≥ 1M. Either EBA direct regulation + stricter capital requirements + stress testing. USDC has been designated as a Significant EMT since 2025-09  (the only one in the EU).

**Important differences between Reserve vs GENIUS Act**: MiCA ≥ 30% bank deposits + long-term government bonds allowed; GENIUS allows ≤ 93  days T-bill limit + deposit limit 50% → MRA always requires mutual authentication. This is the core structural reason why USDC has a valuation premium over USDT (USDC satisfies the three-yen compliance at the same time). See [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概要]] for secondary market CASP license related requirements for EMT distribution.

## Origin & evolution

MiCA's 2  type design has its origin in 2020-09 EU Commission Digital Finance Package. 2023-06 Regulation (EU) EMT / ART dichotomy becomes clear after passing 2023/1114 . 2024-12-30 After full enforcement, the market votes with their feet: 8 社 license has EMT but almost no ART → Product shaping through regulatory burden has been successful. USDT is neither EMT (no EMI license) nor ART (reserve composition non-conformity) → withdrawn from the EU. Membrane Finance's Tether acquisition negotiations 2025-08  break down = EU entry route completely closed. See [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ概要]] for the Japanese EPI type 3 compatible version.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-overview|MiCA 概要]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
<!-- /wiki-links:managed -->

## Sources

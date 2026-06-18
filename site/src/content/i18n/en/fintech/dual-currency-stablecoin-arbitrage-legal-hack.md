---
source: fintech/dual-currency-stablecoin-arbitrage-legal-hack
source_hash: 16a7129370eab4a4
lang: en
status: machine
fidelity: ok
title: "Dual-currency arbitrage · the §501  legal hack and regulatory fragility"
translated_at: 2026-06-18T23:59:13.092Z
---

# Dual-currency arbitrage · the §501  legal hack and regulatory fragility

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The legality of dual-currency stablecoin arbitrage rests on a single legal hack: **"an atomic swap between 2  independent payment stablecoins is not an FX business."** This gives on-chain FX legal room. But the weak point of the hack is that the moment any of the US / EU / Japan regulators redefines a "dual-currency swap" as an "FX business" → the entire structure becomes void. Notices from the SEC / OCC / FCA / FSA need to be monitored continuously.

## Key facts

- The GENIUS Act §501  does not prohibit cross-currency "via holding ↔ swap" · it prohibits only FX business by the issuer ^[extracted]
- MiCA Title IV already permits multiple issuers of EUR-stablecoins = effectively equivalent to encouraging on-chain EUR FX liquidity ^[extracted]
- The Japan PSA 2023  amendment defines a stablecoin as an "electronic payment instrument" · it does not explicitly classify swaps as FX ^[extracted]
- Euro stablecoins such as SocGen EURCV / Lugh EURL provide pluralization of regulation ^[extracted]

## Mechanism / How it works

**Three-tier argument · why it is not an FX business**:

1. **An individual / company voluntarily exchanges 2  independent 1:1  stablecoins with each other** = voluntary asset allocation · no FX license required
2. **The DEX provides pool liquidity** = automated market-making · not an OTC FX desk
3. **Mint/burn is performed only by the issuer** = what the issuer does is "redemption" · not "exchange"

This entire structure is simultaneously legal under the three frameworks of GENIUS §501  + MiCA Title IV + the Japan PSA, but · it collapses upon a regulatory redefinition in any one of them.

**Why §501  left room**: the main constraint of the GENIUS Act §501  = a payment stablecoin must be 1:1  fiat-reserved · the issuer must be an IDI / NCBA / QC NTI · direct conduct of FX business is not permitted (to avoid a conflict with ECF 1934  regulation). But **it does not state that "a swap of 2  independent stablecoins = FX"** → a legal vacuum.

**MiCA's active encouragement**: Title IV (EMT) permits multiple issuers · reduces single-dependence on Circle · the EU actively leaves room for on-chain FX liquidity (the political intent = reducing dependence on USD-stablecoins).

## Origin & evolution

Before 2024 年 = on-chain FX was not feasible (USDC dominance). 2024  [[fintech/mica-overview|MiCA]] Title IV took effect + EURC circulation rose + the listings of SocGen / Lugh = a multi-issuer structure on the euro side was formed. 2025  [[payment-firms/jpyc|JPYC]] became the first yen stablecoin under the new framework of Japan's Payment Services Act. 2026.05  triangular arbitrage went into actual operation on a DEX for the first time = the legal hack moved from theory to product.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|二通貨アービトラージ · 概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本ステーブルコイン規制全景]]
- [[fintech/three-circles-stablecoin-mra-framework|三円ステーブルコイン MRA フレームワーク]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## Sources

- GENIUS Act §501  / MiCA Title IV / Japan PSA (2023  amendment)
- SEC Uniswap Wells Notice (2024)

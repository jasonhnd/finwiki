---
source: fintech/dual-currency-stablecoin-arbitrage-legal-hack
source_hash: 0e93d4b2307afc3a
lang: en
status: machine
fidelity: ok
title: "Dual-Currency Arbitrage · §501  Legal Hack and Regulatory Vulnerability"
translated_at: 2026-05-31T06:16:15.732Z
---

# Dual-Currency Arbitrage · §501  Legal Hack and Regulatory Vulnerability

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The legality of dual-currency stablecoin arbitrage rests on a single legal hack: **"an atomic swap between 2  independent payment stablecoins is not an FX business."** This creates legal space for on-chain FX. However, the hack's vulnerability is that the moment any regulator in the US / EU / Japan redefines a "dual-currency swap" as an "FX business," the entire structure becomes void. SEC / OCC / FCA / FSA notices must be monitored continuously.

## Key facts

- GENIUS Act §501  does not prohibit cross-currency operations via "hold ↔ swap route" · only prohibits FX business conducted directly by issuers ^[extracted]
- MiCA Title IV already permits multiple EUR-stablecoin issuers = effectively encourages on-chain EUR FX liquidity ^[extracted]
- Japan PSA 2023  amendment defines stablecoins as "electronic payment instruments" · does not explicitly classify swaps as FX ^[extracted]
- Euro stablecoins such as SocGen EURCV / Lugh EURL provide regulatory diversification ^[extracted]

## Mechanism / How it works

**Three-part argument · why it is not an FX business**:

1. **Individuals / corporates voluntarily exchange 2  independent 1:1  stablecoins** = voluntary asset allocation · no FX licence required
2. **DEX provides pool liquidity** = automated market-making · not an OTC FX desk
3. **Mint/burn executed only by the issuer** = the issuer performs "redemption" · not "currency exchange"

This entire structure is simultaneously lawful under GENIUS §501  + MiCA Title IV + Japan PSA's three frameworks, but collapses if any regulatory authority redefines it.

**Why §501  creates space**: The principal constraints of GENIUS Act §501  = payment stablecoins must be 1:1  fiat-reserved · issuers must be an IDI / NCBA / QC NTI · direct FX business is prohibited (to avoid conflict with ECF 1934  regulation). However, **it does not state that "a swap between 2  independent stablecoins = FX"** → legal gap.

**MiCA's active encouragement**: Title IV (EMT) permits multiple issuers · reduces dependence on a single Circle source · the EU actively leaves room for on-chain FX liquidity (political intent = reduce dependence on USD stablecoins).

## Origin & evolution

Before 2024 年 = on-chain FX unachievable (USDC dominant). 2024 : [[fintech/mica-overview|MiCA]] Title IV takes effect + EURC circulation rises + SocGen / Lugh listings = multi-issuer structure on the euro side takes shape. 2025 : [[payment-firms/jpyc|JPYC]] becomes the first JPY stablecoin under Japan PSA's new framework. 2026.05 : Triangle arbitrage goes live on DEX for the first time = legal hack moves from theory to product.

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

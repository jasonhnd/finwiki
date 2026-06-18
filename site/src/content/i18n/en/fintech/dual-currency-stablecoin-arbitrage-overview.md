---
source: fintech/dual-currency-stablecoin-arbitrage-overview
source_hash: 1a069b00d6a8da06
lang: en
status: machine
fidelity: ok
title: "Dual-currency stablecoin arbitrage · the only legal on-chain FX path in the §501  era"
translated_at: 2026-06-18T23:59:13.100Z
---

# Dual-currency stablecoin arbitrage · the only legal on-chain FX path in the §501  era

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> GENIUS Act §501  confines the compliance boundary for issuing / holding / transferring stablecoins, and **only the "mutual exchange of dual-currency / multi-currency stablecoins" becomes a clearly legal on-chain FX path**. The USDC ↔ EURC ↔ JPYC triangular-arbitrage structure is its sample —— interchange cost can be compressed to 0.01% (1/100 of traditional cross-border FX's 1-3%), and even capturing 1% on the $33T global-settlement rail amounts to a $3.3B/year revenue opportunity.

## Key facts

- USDC circulation $40-45B · EURC $200-300M · JPYC $50M+ (2025.Q4) ^[extracted]
- Net cost of the triangular arbitrage ~10-20 bp (0.01-0.02%) · traditional FX 1-3% all-in ^[extracted]
- Global cross-border settlement annual volume $33T (BIS 2024) · capturing 1% = a $3.3B/year opportunity ^[extracted]
- 2026.05  triangular arbitrage is already running live in Curve / Uniswap V4 hooks pools ^[extracted]

## Mechanism / How it works

**Arbitrage route**: USDC (Circle USD 1:1) ↔ EURC (Circle EUR 1:1) ↔ [[payment-firms/jpyc|JPYC]] (JPYC Inc. JPY 1:1) ↔ unwind the USDC position.

| Step | Operation | Cost |
|---|---|---|
| 1 | USDC → EURC swap (Circle Mint API) | ~0 bp + mint/burn fee |
| 2 | EURC → JPYC (on-chain DEX · Curve / Uniswap V4 hooks) | 5-15 bp slippage |
| 3 | JPYC → unwind the USDC position | ~0 bp + mint/burn fee |
| Net | cross-currency triangular arbitrage | ~10-20 bp |

By contrast: SWIFT + correspondent banking 1-3% all-in · T+1/T+2; Wise / Remitly 0.5-1% · several hours; dual-currency stablecoin 0.01-0.02% · second-level finality. **A 100× cost reduction + hundreds of times the speed**, moving in the opposite direction from [[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] (the latter embeds the SC into SWIFT, the former bypasses it).

## Origin & evolution

2018-2023 = Circle USDC monopoly · EURC launched in 2022  but with low liquidity. 2024 [[fintech/mica-overview|MiCA]] Title IV (EMT) activated the multi-issuer structure for euro stablecoins. 2024-2025  under the new framework of Japan's Payment Services Act, JPYC became the first yen stablecoin. After 2025.07 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] took effect = the legal room was clarified: "a dual-currency swap ≠ FX business" · this is the asset allocation of 2  independent 1:1 tokens. 2026  triangular arbitrage moved from theory to a live DEX product.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|二通貨アービトラージ · §501 リーガル hack]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange モデル]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
<!-- /wiki-links:managed -->

## Sources

- BIS 2024  cross-border settlement annual-volume report · MiCA Title IV · Japan PSA · GENIUS Act §501 (2025.07)

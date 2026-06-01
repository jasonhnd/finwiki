---
source: fintech/dual-currency-stablecoin-arbitrage-overview
source_hash: 314411f50642d628
lang: en
status: machine
fidelity: ok
title: "Dual-Currency Stablecoin Arbitrage · The Only Legally Clear On-Chain FX Path in the §501  Era"
translated_at: 2026-05-31T06:16:15.742Z
---

# Dual-Currency Stablecoin Arbitrage · The Only Legally Clear On-Chain FX Path in the §501  Era

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation: legal framework for tokens, crypto-assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape: the three-layer structure of JPYC, USDC, and Project Pax]] for the broader system boundary.

> [!info] TL;DR
> GENIUS Act §501  delimits the compliance boundary for stablecoin issuance / holding / transfer · **"mutual exchange of dual-currency / multi-currency stablecoins" is the only clearly legal on-chain FX path**. The USDC ↔ EURC ↔ JPYC triangular arbitrage structure is the canonical example — interchange costs can be compressed to 0.01% (1/100 of the traditional cross-border FX cost of 1-3%), and capturing 1% of the $33T global payment flow generates a $3.3B/year revenue opportunity.

## Key facts

- USDC circulation $40-45B · EURC $200-300M · JPYC $50M+ (2025.Q4) ^[extracted]
- Triangular arbitrage net cost ~10-20 bp (0.01-0.02%) · traditional FX 1-3% all-in ^[extracted]
- Global cross-border payment annual volume $33T (BIS 2024) · capturing 1% = $3.3B/year opportunity ^[extracted]
- 2026.05  triangular arbitrage live on Curve / Uniswap V4 hooks pools ^[extracted]

## Mechanism / How it works

**Arbitrage path**: USDC (Circle USD 1:1) ↔ EURC (Circle EUR 1:1) ↔ [[JapanFG/jpyc|JPYC]] (JPYC Inc. JPY 1:1) ↔ USDC position close.

| Step | Operation | Cost |
|---|---|---|
| 1  | USDC → EURC swap (Circle Mint API) | ~0 bp + mint/burn fee |
| 2  | EURC → JPYC (on-chain DEX · Curve / Uniswap V4 hooks) | 5-15 bp slippage |
| 3  | JPYC → USDC position close | ~0 bp + mint/burn fee |
| Net | Cross-currency triangular arbitrage | ~10-20 bp |

Comparison: SWIFT + correspondent banking 1-3% all-in · T+1/T+2; Wise / Remitly 0.5-1% · hours; dual-currency stablecoin 0.01-0.02% · second-level finality. **100× cost reduction + hundreds-of-times speed improvement** — moving in the opposite direction to [[fintech/cross-border-sc-via-swift-api|stablecoins through SWIFT API for cross-border settlement]] (the latter embeds stablecoins into SWIFT; the former bypasses it).

## Origin & evolution

2018-2023  = Circle USDC monopoly · EURC launched 2022  but with low liquidity. 2024  [[fintech/mica-overview|MiCA]] Title IV (EMT) initiated a multi-issuer structure for euro stablecoins. 2024-2025  Under Japan's new Payment Services Act framework, JPYC became the first yen stablecoin. 2025.07  After [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] came into force = legal space clarified: "dual-currency swap ≠ foreign exchange business" — this is 2  independent 1:1  token asset allocations. 2026  Triangular arbitrage moved from theory to live DEX products.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|dual-currency arbitrage · §501 legal workaround]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange model]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|stablecoin cross-border B2B growth]]
<!-- /wiki-links:managed -->

## Sources

- BIS 2024  cross-border payment annual volume report · MiCA Title IV · Japan PSA · GENIUS Act §501 (2025.07)

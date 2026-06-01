---
source: fintech/ripple-rlusd-stablecoin
source_hash: 5d88b253b5010392
lang: en
status: machine
fidelity: ok
title: ""
translated_at: 2026-05-31T07:28:06.135Z
---
﻿# Ripple RLUSD · Bank-Grade Compliance-First Stablecoin · XRPL + Ethereum 2 -Chain

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation: legal architecture for tokens, crypto-assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape: the JPYC / USDC / Project Pax three-layer structure]] for the broader system boundary.

> [!info] TL;DR
> Ripple RLUSD launched simultaneously on XRPL + Ethereum as a **2 -chain launch** in 2024-12-17, issued by Standard Custody (a Ripple subsidiary with a NY DFS trust license), and positioned as a **bank-grade compliance-first** product. As of 2026-05  its market cap is **$700M+**, with a goal of surpassing $3B in 2027 年. RLUSD is the key product that completes Ripple's evolution from "cross-border payments software" to an "end-to-end settlement stack" (RLUSD + ODL + XRPL DEX + RippleNet). Under the GENIUS Act framework, it is the archetype of "compliance first, growth second."

## Key facts

- MCap **$700M+** (2026-05) · simultaneous launch on 2  chains 2024-12-17 ^[extracted]
- Issuer: Standard Custody (Ripple subsidiary; NY DFS Trust license obtained in 2024-04 ; ex-Anchorage team) ^[extracted]
- Reserves: 100% UST (1-3M) + cash; monthly attestation by BDO USA ^[extracted]
- Main exchanges: Bitstamp / Bitso / Independent Reserve / Uphold ^[extracted]
- Relation to XRPL: native asset · native DEX support · IOU model ^[extracted]
- Relation to ODL: from 2025-Q2  RLUSD replaced the XRP bridge in some ODL corridors ^[extracted]
- 2026-Q1  Ripple applied for an OCC National Bank Charter; the application status remained subject to subsequent regulatory review. ^[extracted]

## Mechanism / How it works

The core differentiation of RLUSD versus USDC/USDT is that it **does not pursue DeFi liquidity depth** (USDC's strength) and **does not pursue gray-zone circulation scale** (USDT's strength), but instead focuses on **institutional cross-border payment settlement**. Ripple layers ODL (launched in 2018 ) + the native XRPL DEX (2018) + the RippleNet banking network (200+ banks). This completes Ripple's evolutionary path from software layer to liquidity layer to stablecoin layer to a fully closed loop: a cross-border bank uses the RippleNet messaging layer, RLUSD replaces the XRP bridge in the ODL channel, settlement occurs on XRPL in sub-3-second time, and the receiving bank redeems into local currency. The full settlement stack is tighter than **USDC + SWIFT** because the issuer, bridge asset, DEX, and bank messaging are all inside the Ripple group. It is a different tactical approach on the same battlefield as [[fintech/cross-border-sc-via-swift-api|stablecoin cross-border settlement via SWIFT API]].

## Origin & evolution

2012-2018  software layer (RippleNet · 200+ banks). From 2018  onward, liquidity layer (ODL using XRP as the bridge). 2020-2023  lawsuit with the SEC (whether XRP is a security). 2023-07  court ruling that XRP is not a security on public exchanges. 2024-04  acquisition of Standard Custody (NY DFS Trust license). **2024-12-17 simultaneous launch of RLUSD on XRPL + Ethereum**. In 2025-Q3  RLUSD entered Bitstamp (an exchange acquired by Robinhood), greatly expanding retail touchpoints. In 2026-Q1  Ripple applied for an OCC National Bank Charter, following the [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust-bank federal stablecoin arbitrage]] route. Together with [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe Tempo protocol hedge strategy]] / Coinbase Arc it forms a mirror-image tripod: **Ripple = "cross-border compliant settlement" / Stripe = "e-commerce payments" / Coinbase = "DeFi liquidity."**

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/cross-border-sc-via-swift-api|stablecoin cross-border settlement via SWIFT API]]
- [[fintech/three-circles-stablecoin-mra-framework|three-circle stablecoin MRA framework]]
- [[fintech/stablecoin-crossborder-b2b-growth|stablecoin cross-border B2B growth]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street crypto-asset network neutrality]]
<!-- /wiki-links:managed -->

## Sources

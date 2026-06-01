---
source: fintech/usd-stablecoin-interchange
source_hash: 87644706372cc1c6
lang: en
status: machine
fidelity: ok
title: "USD Stablecoin Interchange Market"
translated_at: 2026-05-31T07:28:06.175Z
---
# USD Stablecoin Interchange Market


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-financial-regulation|Japan financial regulation for tokens, crypto-assets, and payments]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal framework: three-layer structure]] for the broader system / regulatory boundary.

> [!info] TL;DR
> The exchange, clearing, and settlement between USD stablecoins such as USDT, [[fintech/circle-usdc-stablecoin|USDC]], [[fintech/sky-usds-decentralized-stablecoin|USDS]], and [[fintech/paypal-pyusd-stablecoin|PYUSD]] itself constitutes a large standalone market.

**Market size**: stablecoin trading volume of $33 兆 in 2025 年 [Bloomberg/Artemis]. Even if only 10% of that is USD stablecoin interchange, a fee of 0.01% implies annual revenue on the order of **$3.3 億/year**.

**Interchange characteristics**: USD stablecoin interchange differs from general crypto exchange. In theory, the tokens are pegged to the US dollar at 1:1 , actual price spreads are extremely small (typically < 0.05%), and the risk is far lower than ordinary crypto trading.

**2  implementation paths**:
- DeFi (Curve, etc.): about 0.01-0.04% for USDT↔USDC; permissionless, but with slippage and gas costs for large trades
- CeFi (market makers / exchange APIs): 0.02-0.05%; deep liquidity, but KYB connectivity required

**Standalone value**: A stablecoin interchange gateway does not need to depend on any specific application, such as [[fintech/ai-payment-two-tracks|AI payments]] or [[fintech/stablecoin-crossborder-b2b-growth|cross-border B2B remittance]], and can serve any industry as independent infrastructure. Its role is similar to a market maker in FX markets. On the Japan side, if it only operates as an information intermediary through a self-custody routing model, it falls under [[fintech/japan-ecisb-license|ECISB license]]. For legal routes that cross currency boundaries, see [[fintech/dual-currency-stablecoin-arbitrage-overview|two-currency triangular arbitrage]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/jp-crypto-bank-credit-facilities|CEX × 日本銀行 無担保与信実績図譜（Fintech 業界情報）]]
- [[fintech/japan-ecisb-license|Japan ECISB license for transaction-routing intermediation without handling funds]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal framework: three-layer structure]]
- [[fintech/ai-payment-two-tracks|Two AI payment rails: Stripe model versus stablecoin model]]
- [[fintech/circle-usdc-stablecoin|Circle USDC 発行体]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): refreshed dates; added Circle USDC issuer wikilink alongside USDT/USDS/PYUSD peers.

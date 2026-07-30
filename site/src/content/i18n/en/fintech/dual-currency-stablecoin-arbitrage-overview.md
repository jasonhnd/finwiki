---
source: fintech/dual-currency-stablecoin-arbitrage-overview
source_hash: 9f76cbaa686f9b6a
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Dual-currency stablecoin exchange · execution routes and constraints for on-chain FX"
translated_at: 2026-07-29T16:39:22.568Z
---
# Dual-currency stablecoin exchange · execution routes and constraints for on-chain FX

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial regulation — legal framework for tokens, crypto-assets and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-tier stablecoin legal framework (JPYC, USDC and Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> Exchanging USDC, EURC and JPYC spans multiple issuers, fiat-currency accounts, exchanges or DEXs, and KYC/AML controls. Circle Mint provides eligible institutional customers with issuance, redemption and currency-exchange functions for USDC / EURC, but JPYC has a different issuer and access route; neither triangular liquidity nor arbitrage profit is guaranteed. The GENIUS Act also does not uniformly designate each exchange as “legal FX.”

## Key facts

- Circle Mint is for eligible institutional customers and provides 1:1 issuance and redemption of USDC and EURC, together with currency exchange. It is not a retail service.
- Circle maintains the list of supported chains for USDC / EURC. JPYC-supported chains, redemption terms and service providers must be checked separately in JPYC's public information.
- DEX slippage, gas, trading fees, fiat FX, and deposit / withdrawal time must all be aggregated before costs can be compared with conventional remittance.
- Public primary sources available as of 2026-05 do not confirm a permanent USDC–EURC–JPYC triangular pool or a persistent arbitrage spread.

## Mechanism / How it works

**Candidate execution route**: USDC ↔ EURC follows Circle Mint eligibility, supported regions and FX quotes. A leg involving [[payment-firms/jpyc|JPYC]] requires a separate check of JPYC issuance / redemption terms and the actual exchange / DEX order book.

The table below is an analytical checklist for transaction steps, not evidence of a single existing pool or fixed costs. It is based on [Circle Mint](https://developers.circle.com/circle-mint), the [supported currencies and chains list](https://developers.circle.com/circle-mint/supported-chains-and-currencies), and [official JPYC information](https://jpyc.jp/).

| Step | Candidate operation | Costs / constraints to check before execution |
|---|---|---|
| 1 | Exchange USDC and EURC | Circle Mint eligibility, quoted FX rate, bank deposit / withdrawal fees, supported region |
| 2 | Exchange EURC and JPYC | Existing trading venue, order-book depth, slippage, gas, counterparty risk |
| 3 | Exchange JPYC and USDC | JPYC issuance / redemption route, exchange fees, transfer and settlement time |
| Overall | Cross-currency transaction | Ability to execute every leg simultaneously, price movements, KYC/AML, tax and each country's FX rules |

The relevant comparison is therefore not the abstract binary of “on-chain versus SWIFT,” but total costs and final delivery time for the same amount, currency pair and user conditions.

## Origin & evolution

USDC, EURC and JPYC each have a different jurisdiction, issuer and redemption route. MiCA, Japan's amended Payment Services Act and the US GENIUS Act establish frameworks for issuance, intermediation and reserve assets, but they do not remove FX, remittance, tax or other obligations that apply to exchanging multiple currency tokens. Until public primary sources confirm that a specified market is operating, triangular trading should be treated as an analytical scenario, not an implemented product.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|dual-currency stablecoin legal analysis]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange model]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation status]]
- [[fintech/stablecoin-crossborder-b2b-growth|Stablecoin cross-border B2B growth]]
<!-- /wiki-links:managed -->

## Sources

- Circle Mint — https://developers.circle.com/circle-mint
- Circle Mint supported chains and currencies — https://developers.circle.com/circle-mint/supported-chains-and-currencies
- JPYC — https://jpyc.jp/
- BIS CPMI, cross-border payments — https://www.bis.org/cpmi/publ/d220.htm

---
source: fintech/retail-stablecoin-dual-bind
source_hash: fa55315441da918c
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Retail stablecoins · design tradeoffs between regulatory control and open UX"
translated_at: 2026-07-29T16:47:45.885Z
---
# Retail stablecoins · design tradeoffs between regulatory control and open UX


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial regulation — legal framework for tokens, crypto-assets and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-tier stablecoin legal framework (JPYC, USDC and Project Pax)]] for the broader system boundary.

> [!info] TL;DR
> A retail stablecoin in Japan must coordinate the issuing entity, intermediary registration, identity verification, redemption and wallet UX. The design is not, however, a binary choice between bank issuance and a fully permissionless system. Issuance routes through banks, funds-transfer providers, trust companies and similar entities can be combined in several ways with registered intermediaries and wallets.

## Conclusion

The following is not a legal binary classification, but an analytical model showing two design poles.

It is based on the FSA's [materials on electronic payment instruments](https://www.fsa.go.jp/policy/virtual_currency02/index.html), [registry of electronic payment instrument service providers](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx), and [registry of funds-transfer providers](https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf). Registration does not automatically mean that every product has been issued or made available.

| Design dimension | Strong regulatory and management integration | Broader open use |
|---|---|---|
| Issuance / redemption | Issuing entity and registered intermediary manage users and redemption routes | Expands the scope of transfers through external wallets |
| Identity verification | KYC/AML at account opening, redemption and intermediation | Even if the base layer is public, controls remain at fiat gateways |
| UX | Easier to provide recovery, freezing and support | Easier to provide self-custody and transfers between applications |
| Main risks | Procedural burden and closed scope of use | Key management, fraud, sanctions / AML and consumer protection |
| Design challenge | Reduce friction while preserving control | Meet legal and redemption conditions while preserving openness |

**Design options**:
- **KYC × wallet integration** → My Number wallet model ([[fintech/maina-wallet-kyc-permissionless-ux-bridge|maina-wallet-kyc-permissionless-ux-bridge]])
- **Smart-contract controls** → escrow, conditional payments, reversibility and controls for large-value payments
- **ID integration + product-specific amount conditions** → for high-value or conditional transactions, compare requirements with those for prepaid payment instruments and funds-transfer businesses

## Reasoning

- Existing domestic options include cards, bank transfers, prepaid payment instruments and funds-transfer services, so a new product must identify its target customers and incremental value.
- Bank issuance alone does not determine competitiveness; compare redemption, acceptance, fees, recoverability and conditional payments.
- Do not generalize transaction counts from an individual experiment into demand or future adoption across Japan.
- Evaluate KYC, wallet recovery, conditional payments and external-service integration individually as candidates for incremental value.
- When using a high-value or conditional transaction as an example, identify the applicable issuance category, product limit, identity-verification requirement and consumer protection.

## Applicable When

- Before designing a retail stablecoin business, when comparing combinations of issuance, intermediation, redemption and wallet design
- Preparing a response to “Isn't PayPay enough?”
- Designing the retail axis / retail use cases of a commercial stablecoin (for protocol UX foundations, see [[systems/erc-7702-overview|ERC-7702]] / [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]])
- When regulators ask what social value a retail stablecoin provides and concrete benefits and user protection must be organized

## Source

- Alignment: [[banking/minna-bank-baas-model|Minna Bank TD/SC strategy]] (retail stablecoins and retail deposit tokens face the same tradeoff axis)
- Alignment: [[fintech/ai-payment-two-tracks|Two tracks for AI payments]] (as with Stripe vs stablecoins, differentiation lies outside payment alone)
- Public framework materials: https://www.fsa.go.jp/policy/virtual_currency02/index.html

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional stablecoin = deposit token]]
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge|My Number wallet KYC × UX bridge]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[banking/minna-bank-baas-model|Minna Bank BaaS model]]
<!-- /wiki-links:managed -->

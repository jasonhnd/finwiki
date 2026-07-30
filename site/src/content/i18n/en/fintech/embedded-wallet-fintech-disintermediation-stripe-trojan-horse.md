---
source: fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse
source_hash: 71950d5373e0421e
lang: en
status: machine
fidelity: ok
title: "Embedded wallets as fintech's Trojan horse into Web3 (Stripe's five layers)"
translated_at: 2026-07-30T00:00:00+09:00
---

# Embedded wallets as fintech's Trojan horse into Web3 (Stripe's five layers)

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial-regulation framework for tokens, cryptoassets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|the three-layer structure of Japan's stablecoin regime]] for the broader system boundary.

> [!info] TL;DR
> Stripe's public materials show that payments, stablecoin orchestration, embedded wallets, a payments-focused chain, and agent payments can be combined. Stripe reported that more than five million businesses used it directly or through a platform in 2025. It completed the Bridge acquisition in February 2025, acquired Privy in July, and announced Tempo in September; Tempo now describes its mainnet as live. This does **not prove that every Stripe business uses wallets, stablecoins, Tempo, and AP2 / x402 as one integrated system**. The “five layers” below are an analytical model of functions that could be combined.

## Key facts

- Stripe reported that more than five million businesses used it directly or through a platform in 2025. This figure is neither the number of embedded-wallet deployments nor a ceiling on potential deployments.
- Stripe completed its acquisition of Bridge in February 2025. Privy announced the acquisition agreement in June 2025, while Stripe's annual update records the acquisition in July. Public materials do not support the claim that both companies were acquired simultaneously in June 2025 or that the combined announced price was $2.2 billion.
- Tempo was announced in September 2025 as a payments-first blockchain incubated by Stripe and Paradigm, and its official website now describes mainnet as live.
- Tempo identifies sub-second finality and predictable low fees as design goals, but chain finality is not the same as end-to-end cross-border settlement time. Official materials do not support a universal comparison of “SWIFT in three days for $25” versus “Tempo in five seconds for almost no fee.”

Source note: the four points above use direct disclosures from the [Stripe 2025 annual update](https://stripe.com/in/newsroom/news/stripe-2025-update), [Bridge acquisition completion](https://stripe.com/en-fr/newsroom/news/stripe-completes-bridge-acquisition), [Privy acquisition agreement](https://privy.io/blog/announcing-our-acquisition-by-stripe), [Tempo announcement](https://tempo.xyz/blog/introducing-tempo), and [Tempo official site](https://tempo.xyz/). Do not infer adoption, pricing, or end-to-end settlement figures that these materials do not publish.

## Mechanism / How it works

**Functions and boundaries established by public information**:

| User journey | Function established by public information | Verification boundary |
|---|---|---|
| Login / onboarding | Privy provides embedded wallets, and wallets can be provisioned from Stripe Projects | Wallet-creation conditions, custody, recovery, and consent design depend on each application's implementation |
| On-ramp / off-ramp | Stripe / Bridge provides fiat and stablecoin orchestration | Supported assets, regions, fees, and settlement differ by product and jurisdiction |
| Cross-border payment | Tempo targets stablecoin payments with sub-second finality and predictable low fees | Chain finality does not include off-ramp processing or delivery to the recipient in an end-to-end time |
| Agent payment | AP2 is a payment-agnostic open protocol, and an A2A x402 extension has also been announced. Stripe describes machine payments including stablecoin micropayments | AP2 / x402 adoption, authorization, assets, merchant acceptance, and fee policy depend on each implementation |
| Payout / revenue distribution | Programmable stablecoin settlement can be embedded | It does not guarantee instant, continuous, or free settlement and depends on compliance, liquidity, and off-ramps |

→ A user experience can hide crypto rails in the backend, but individual product announcements do not establish that users will never notice the chain or that one company automates the entire journey.

**Stripe five-layer collapse architecture**:

- **L5 application / distribution**: Checkout, Connect, and more than five million businesses using Stripe directly or through platforms
- **L4 wallet interface**: [[agent-economy/privy-embedded-wallet-overview|Privy]] embedded wallets and their integration with Stripe Projects
- **L3 stablecoin orchestration**: Stablecoin infrastructure provided by Bridge. Public materials do not establish a particular “USDB” as the default asset across the stack
- **L2 payment chain**: Tempo, an independent payments-first blockchain incubated by Stripe / Paradigm
- **L1 agent-protocol options**: [[agent-economy/ap2-overview|AP2]] / [[agent-economy/x402-http-payment-overview|x402]]. Their public specifications may be combined, but this does not mean Stripe owns both protocols or operates all five layers as one system

This classification is an analytical checklist for examining layers from distribution to protocol, not a stack diagram that directly represents product ownership or technical dependencies. The wallet interface matters because it is close to identity, authorization, and recovery, but using Privy alone does not necessarily confer exclusive control over spending data or agent permissions.

## Origin & evolution

The public-record milestones are the completion of the Bridge acquisition in February 2025, Privy's announcement of its acquisition agreement in June and Stripe's record of the acquisition in July, and Tempo's announcement in September. They show expansion into adjacent capabilities, but there is no verified public forecast or result showing that 5–10% of Stripe's more than five million businesses will switch to USDC / Tempo in 2026–2027. Useful leading indicators would instead track wallet provisions, active wallets, stablecoin volume, actual settlement on Tempo, and availability by region using consistent periods and definitions.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded-wallet disintermediation — overview]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded-wallet network effects and the integrated-provider moat]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedging — the Stripe pattern]]
- [[fintech/ai-payment-two-tracks|Two tracks for AI payments]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|The bifurcation of onchain finance and crypto culture]]
<!-- /wiki-links:managed -->

## Sources

- [Stripe 2025 annual update (2026-02-24)](https://stripe.com/in/newsroom/news/stripe-2025-update) — More than five million businesses; public information on Privy / Tempo, stablecoins, and machine payments.
- [Stripe completes Bridge acquisition (2025-02-04)](https://stripe.com/en-fr/newsroom/news/stripe-completes-bridge-acquisition) — Completion date for the Bridge acquisition.
- [Privy acquisition announcement (2025-06-11)](https://privy.io/blog/announcing-our-acquisition-by-stripe) — Agreement date and closing conditions.
- [Privy is live in Stripe Projects (2025-10-15)](https://privy.io/blog/privy-is-live-in-stripe-projects) — Wallet provisioning from Stripe Projects.
- [Introducing Tempo (2025-09-04)](https://tempo.xyz/blog/introducing-tempo) / [Tempo official site](https://tempo.xyz/) — Incubators, design goals, and current network status.
- [Google Cloud: AP2 announcement (2025-09-16)](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) — The payment-agnostic protocol and A2A x402 extension.

---
source: fintech/embedded-wallet-fintech-disintermediation-overview
source_hash: 067b40c87854afe5
lang: en
status: machine
fidelity: ok
title: "Embedded Wallet-Driven Fintech Disintermediation · Privy/CDP/Magic/Web3Auth"
translated_at: 2026-07-30T02:03:00+09:00
---

# Embedded Wallet-Driven Fintech Disintermediation · Four-Player Structure

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Embedded wallets connect familiar email, SMS, or OAuth login flows to in-app wallets, offering an onboarding path that does not require a seed phrase or browser extension. Privy, Coinbase Developer Platform, Magic, and Web3Auth are notable implementation candidates, but key management, supported chains, account abstraction, pricing, and custody boundaries differ by product and plan. Stripe did not disclose the Privy acquisition price, so estimates should not be stated as fact.

## Key facts

- Privy announced its agreement to be acquired by Stripe on 11 June 2025. The price was not disclosed; Privy reported more than 75 million accounts and more than 1,000 developer teams at the time. ^[https://privy.io/blog/announcing-our-acquisition-by-stripe]
- Coinbase CDP documents non-custodial user wallets using email, SMS, or social login separately from system wallets controlled through APIs and protected in a TEE. ^[https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview]
- Magic documents email OTP, SMS, OAuth, and support for more than 30 blockchains. ^[https://docs.magic.link/embedded-wallets/quickstart/integration]
- Web3Auth publishes social login, MFA, MPC/TSS, and pre-generated-wallet capabilities by plan. ^[https://web3auth.io/pricing.html]

## Mechanism / How it works

**Published specification comparison of four products** (checked 30 July 2026). The table compares only feature boundaries documented by each provider; it omits undisclosed key-share counts, integration line counts, and customer-conversion estimates. ^[https://docs.privy.io/wallets/overview/embedded; https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview; https://docs.magic.link/embedded-wallets/quickstart/overview; https://web3auth.io/pricing.html]

| Dimension | Privy (Stripe) | Coinbase CDP | Magic | Web3Auth |
|---|---|---|---|---|
| Published positioning | Stripe company; self-custodial user wallets and developer-controlled wallet fleet | Coinbase non-custodial user and system wallets | Magic embedded-wallet SDK | Torus Labs / Web3Auth Wallet Services |
| Authentication | Email, SMS, OAuth, passkeys, and others | Email, SMS, and social login; API keys for system wallets | Email OTP, SMS, OAuth, and others | Email, SMS, wallets, passkeys, social login, and MFA |
| Key / control boundary | Choice of user-controlled or developer-controlled wallets with policies, MFA, and m-of-n approvals | Non-custodial user wallets; system-wallet keys protected in a TEE | Non-custodial embedded wallets and pre-generated wallets | Self-custodial and MPC/TSS configurations by plan |
| Supported scope | Official docs list EVM/SVM plus Bitcoin, TRON, Stellar, and others | EVM, Solana, and others by product | More than 30 blockchains | Blockchain-agnostic SDK; compatibility must be checked per SDK |
| Selection context | Where Stripe / Privy integration and policy engine are important | Where Coinbase wallet, onramp, paymaster, or x402 integration is important | Where broad client SDKs and authentication UI are important | Where configurable authentication, MFA, and MPC/TSS are important |

**UX architecture checklist to verify per deployment (draft)**:

- Onboarding: verify login providers, seed-phrase display, custody, key export, and recovery for each product and plan. Social login does not by itself imply a TSS backend or seedless recovery.
- Delegated execution / sessions: verify how the wallet implements session keys, spending limits, expiry, revocation, and re-authentication. EIP-7702 delegation and an ERC-7715 permission request are separate layers; neither alone guarantees a prompt-free session after one approval.
- Gas: verify supported chains, tokens, quotas, and fallback for ERC-4337 paymasters, operator sponsorship, or ERC-20 gas payment. Paying gas in USDC is not a common capability of all four products.
- Recovery: verify whether a product uses devices, cloud services, server shares, MPC/TSS, or guardians and where control sits. Do not assume a common “device + cloud + server” split.
- Cross-chain: verify the bridge or messaging provider, finality, fees, failure recovery, and balance presentation for each deployment. Hyperlane / CCIP and a single-balance UX are not automatically included with an embedded-wallet product.

**Standards status (30 July 2026)**: [[systems/erc-7702-overview|EIP-7702]] is Final and writes a **persistent** delegation indicator to an EOA until it is explicitly cleared or replaced; it is not inherently a temporary upgrade. [[agent-economy/erc-7715-overview|ERC-7715]] is a Draft wallet permission-request interface, not evidence of a uniformly deployed granular-permission layer. For it and [[systems/erc-4337-overview|ERC-4337]], implementation must be verified per wallet, chain, bundler, and paymaster. ^[https://eips.ethereum.org/EIPS/eip-7702] ^[https://eips.ethereum.org/EIPS/eip-7715] ^[https://eips.ethereum.org/EIPS/eip-4337]

## Origin & evolution

From 2018 to 2022, browser extensions and seed phrases were the dominant model and the crypto-native boundary was clear. In 2023-2024, embedded wallets and Wallet-as-a-Service expanded from dApps into fintech, gaming, and social products. Stripe completed the Bridge acquisition on 4 February 2025 and announced the Privy acquisition agreement on 11 June 2025. In May 2026, Stripe / Privy and AWS announced AgentCore payments, extending the embedded-wallet use case to agent payments. ^[https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition; https://privy.io/blog/announcing-our-acquisition-by-stripe; https://stripe.com/newsroom/news/aws-stripe-agentcore-privy]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|組込み型ウォレット · Stripe 五層 Trojan horse]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
<!-- /wiki-links:managed -->

## Sources

- [Privy and Stripe acquisition announcement (11 June 2025)](https://privy.io/blog/announcing-our-acquisition-by-stripe)
- [Privy embedded-wallet documentation](https://docs.privy.io/wallets/overview/embedded)
- [Coinbase CDP non-custodial wallets](https://docs.cdp.coinbase.com/wallets/non-custodial-wallets/overview)
- [Magic embedded-wallet quickstart](https://docs.magic.link/embedded-wallets/quickstart/overview)
- [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337)
- [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702)
- [ERC-7715](https://eips.ethereum.org/EIPS/eip-7715)
- [Web3Auth pricing and published feature matrix](https://web3auth.io/pricing.html)
- [Stripe completes Bridge acquisition (4 February 2025)](https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition)

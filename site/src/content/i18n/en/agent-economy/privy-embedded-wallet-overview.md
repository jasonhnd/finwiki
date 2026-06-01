---
source: agent-economy/privy-embedded-wallet-overview
source_hash: 5af0c4f9f23e3dce
lang: en
status: machine
fidelity: ok
title: "Privy · Stripe-owned embedded self-custodial wallet (overview)"
translated_at: 2026-05-30T17:31:02.643Z
---

# Privy · Stripe-owned embedded self-custodial wallet (overview)

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI agent payment protocols overview · seven-protocol landscape]]. Read it against [[agent-economy/embedded-wallet-network-effects-moat|Embedded-wallet network effects · the integrator moat rather than the wallet itself]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2021 founded in New York · founders Henri Stern + Asta Li ^[extracted]
- 2025-06 acquired by Stripe (estimated $300-500M) ^[extracted]
- 75M accounts at time of acquisition · reached 110M+ wallets by 2026-Q1  ^[extracted]
- 1,000+ developer team integrated ^[extracted]
- Self-custodial model: MPC + TEE sharding · the private key never exists at any single Privy point ^[extracted]
- User onboarding ~10 seconds vs MetaMask 5-10 minutes ^[extracted]
- Pre-acquisition core customers: OpenSea / Hyperliquid / Farcaster / Friend.tech / Toku / Zora ^[extracted]
- Announced the Multichain balances API at 2026 Sessions ^[extracted]

## Mechanism / How it works

When a user logs in with email or Google, the Privy SDK (roughly 30 lines of code) runs MPC sharding key generation in the frontend. **One shard is stored on the user's device** (Passkey / WebAuthn / Secure Enclave based), and **one shard is stored in Privy's TEE** (Trusted Execution Environment · AWS Nitro Enclaves or equivalent). At signing time the two shards cooperate to generate a valid signature, but Privy alone cannot sign, and the user alone cannot sign either: this realizes the compromise of "self-custodial yet management-free" (for the same model see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded-wallet adoption]]). With the Multichain balances API, one API call can retrieve multi-chain balances across Ethereum, Solana, Tempo, Polygon, and other networks, eliminating the need for developers to implement multi-chain aggregation individually; the underlying layer depends on [[systems/chain-abstraction-pattern-overview|chain-abstraction patterns]]. The whole experience is fully Web2: the user never sees a seed phrase, never installs MetaMask, and never has to switch networks. This is the core reason Privy reached a 110M-wallet scale.

## Origin & evolution

Privy was founded in New York in 2021 by Stern and Li, both formerly at Protocol Labs. During 2022-2024, it integrated deeply with dapps such as OpenSea, Hyperliquid, Farcaster, and Friend.tech, accumulating 75M accounts. In 2024-Q4, Stripe launched its chained acquisition strategy around stablecoins, Tempo, and Bridge, making a wallet layer necessary; for the full strategic picture, see [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]. In 2025-06, Stripe completed the Privy acquisition at an estimated $300-500M, below Bridge's $1.1B valuation because Privy was still in a high-growth phase. In 2025 H2, Privy continued operating under an independent brand while beginning to serve internal demand from Stripe Connect, Tempo, and Bridge. On 2026-05-07, AWS Bedrock AgentCore Payments embedded Privy and Coinbase CDP in parallel as default wallet providers, establishing Privy's position in AI agent economy infrastructure; for the legacy path, see [[exchanges/global-institutional-custody-five-pillars|global institutional custody five pillars]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|CEX disintermediation through embedded wallets]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment protocol]]
<!-- /wiki-links:managed -->

## Sources

- Privy docs — https://docs.privy.io/

---
source: agent-economy/privy-embedded-wallet-overview
source_hash: 2cc86328a9020b3e
lang: en
status: machine
fidelity: ok
title: "Privy · Stripe-owned embedded self-custodial wallet (overview)"
translated_at: 2026-07-28T18:19:40Z
---

# Privy · Stripe-owned embedded self-custodial wallet (overview)

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI agent payment protocols overview · seven-protocol landscape]]. Read it against [[agent-economy/embedded-wallet-network-effects-moat|Embedded-wallet network effects · the integrator moat rather than the wallet itself]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Privy's official 2025-06-11 announcement, signed by Henri Stern and Asta Li, says they started Privy a little over three years earlier. ^[Source: https://privy.io/blog/announcing-our-acquisition-by-stripe.]
- The same announcement disclosed Stripe's acquisition, subject to customary closing conditions and expected to close within weeks. ^[Source: https://privy.io/blog/announcing-our-acquisition-by-stripe.]
- The official disclosure reported 75M+ accounts and 1,000+ developer teams; it did not disclose the transaction price or a 110M-wallet figure. ^[Source: https://privy.io/blog/announcing-our-acquisition-by-stripe.]
- Self-custodial model: MPC + TEE sharding · the private key never exists at any single Privy point ^[extracted]
- User onboarding ~10 seconds vs MetaMask 5-10 minutes ^[extracted]
- Pre-acquisition core customers: OpenSea / Hyperliquid / Farcaster / Friend.tech / Toku / Zora ^[extracted]
- Announced the Multichain balances API at 2026 Sessions ^[extracted]

## Mechanism / How it works

When a user logs in with email or Google, the Privy SDK (roughly 30 lines of code) runs MPC sharding key generation in the frontend. **One shard is stored on the user's device** (Passkey / WebAuthn / Secure Enclave based), and **one shard is stored in Privy's TEE** (Trusted Execution Environment · AWS Nitro Enclaves or equivalent). At signing time the two shards cooperate to generate a valid signature, but Privy alone cannot sign, and the user alone cannot sign either: this realizes the compromise of "self-custodial yet management-free" (for the same model see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded-wallet adoption]]). With the Multichain balances API, one API call can retrieve multi-chain balances across Ethereum, Solana, Tempo, Polygon, and other networks, eliminating the need for developers to implement multi-chain aggregation individually; the underlying layer depends on [[systems/chain-abstraction-pattern-overview|chain-abstraction patterns]]. The whole experience is fully Web2: the user never sees a seed phrase, never installs MetaMask, and never has to switch networks. For scale, this entry uses the 75M+ accounts confirmed in the 2025-06-11 official disclosure and does not adopt the unsupported 110M-wallet estimate.

## Origin & evolution

Privy's official 2025-06-11 announcement says Henri Stern and Asta Li started the company a little over three years earlier and supported 75M+ accounts and 1,000+ developer teams at the time of the announcement. It disclosed Stripe's acquisition as a transaction subject to customary closing conditions and said Privy would continue operating as an independent product. Later Stripe / Privy public materials refer to Privy as a Stripe company, and AWS formally listed Coinbase CDP and Stripe (Privy) wallet connectors in its 2026-05-07 AgentCore Payments preview. These primary sources do not disclose the transaction price, 110M wallets, or an estimated valuation, so this entry does not treat those figures as established facts. ^[Sources: https://privy.io/blog/announcing-our-acquisition-by-stripe; https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/.]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|CEX disintermediation through embedded wallets]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment protocol]]
<!-- /wiki-links:managed -->

## Sources

- Privy docs — https://docs.privy.io/
- Privy and Stripe acquisition announcement — https://privy.io/blog/announcing-our-acquisition-by-stripe
- AWS AgentCore Payments preview — https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/

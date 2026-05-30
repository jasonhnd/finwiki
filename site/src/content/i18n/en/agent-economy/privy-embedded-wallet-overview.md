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

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/embedded-wallet-network-effects-moat|埋込ウォレットのネットワーク効果 · ウォレット本体ではなくインテグレーターの堀]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

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

When a user logs in with email/Google, the Privy SDK (code from 30 行) runs MPC sharding key generation in the frontend. **The 1 shard is stored on the user's device** (Passkey / WebAuthn / Secure Enclave based) + **the 1 shard is stored in Privy's TEE** (Trusted Execution Environment · AWS Nitro Enclaves or equivalent). At signing time the 2 shards cooperate to generate a valid signature, but Privy alone cannot sign, and the user alone cannot sign either — realizing the compromise of "self-custodial yet management-free" (for the same model see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]]). With the Multichain balances API, 1 API calls can retrieve multi-chain balances across Ethereum / Solana / Tempo / Polygon and more, eliminating the need for developers to implement multi-chain aggregation individually (the underlying layer depends on [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]]). The whole experience is fully Web2: the user never sees a seed phrase · never installs MetaMask · never has to switch networks — this is the core of why Privy occupies a 110M wallet scale.

## Origin & evolution

2021 New York · founders Stern + Li (formerly at Protocol Labs). 2022-2024 deeply integrated with dapps such as OpenSea / Hyperliquid / Farcaster, accumulating 75M accounts. 2024-Q4 Stripe launched its chained acquisition strategy of stablecoin + Tempo + Bridge, and a wallet layer became necessary (for the full strategic picture see [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]). 2025-06 Stripe completed the Privy acquisition · estimated $300-500M (in contrast with Bridge's $1.1B · Privy's valuation was lower because it was in a high-growth phase). 2025 H2 Privy continued operating under an independent brand while beginning to serve the internal demand of Stripe Connect / Tempo / Bridge. 2026-05-07 AWS Bedrock AgentCore Payments embedded Privy and Coinbase CDP in parallel as default wallet providers — establishing Privy's positioning in AI agent economy infrastructure (in contrast with [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ5本柱]]'s legacy path).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore デフォルトウォレット]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 決済プロトコル]]
<!-- /wiki-links:managed -->

## Sources

- Privy docs — https://docs.privy.io/

---
title: "Crossmint agent SDK · NFT and wallet abstraction for AI agents"
aliases:
  - "crossmint-agent-sdk"
  - "Crossmint"
  - "Crossmint embedded wallet"
  - "Crossmint NFT agent"
domain: "agent-economy"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, wallet, crossmint, embedded-wallet, nft, agent-sdk, privy, dynamic, magic]
status: active
sources:
  - "https://www.crossmint.com/"
  - "https://docs.crossmint.com/"
  - "https://github.com/crossmint"
  - "https://blog.crossmint.com/"
---

# Crossmint agent SDK · NFT and wallet abstraction for AI agents

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]. Read it against [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] and [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] for peer wallet stacks, [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet consolidation]] for market context, and [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet moat]] for value-capture framing.

## Key facts

- **Crossmint** offers an enterprise-leaning embedded-wallet + NFT-minting platform — credit-card-funded purchases, server-side wallet provisioning, and **multi-chain support** (EVM, Solana, Polygon, Cardano, Aptos, Sui)
- Originally NFT-checkout-focused (2021-2022); pivoted to **general embedded wallet + agent SDK** by 2024
- Agent SDK exposes wallet creation, signing, NFT mint / transfer, payment, and on-chain identity primitives consumable by AI agents
- Positions next to [[agent-economy/privy-embedded-wallet-overview|Privy]], [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]], Dynamic, and Magic in the **embedded-wallet for agents** layer

## What Crossmint provides for AI agents

| Capability | Crossmint primitive |
|---|---|
| Wallet provisioning | Server-side wallet API, no end-user device required |
| Fiat onramp | Credit card / Apple Pay / Google Pay → on-chain asset |
| NFT mint / transfer | Multi-chain mint endpoint with metadata + royalty |
| Multi-chain coverage | Single SDK across EVM + non-EVM (Solana / Aptos / Sui / Cardano) |
| Gas abstraction | Sponsored gas / paymaster patterns ([[systems/erc-4337-userop-bundler-flow|ERC-4337 paymaster]]) |
| Custody options | Custodial, MPC, or non-custodial flavors |
| Compliance | KYC / AML modules; institutional KYB path |

## Crossmint vs Privy vs Dynamic vs Magic

| Dimension | Crossmint | Privy | Dynamic | Magic |
|---|---|---|---|---|
| Original focus | NFT checkout / commerce | Embedded wallet for consumer apps | Embedded wallet for DeFi / Web3 | Magic-link auth + wallet |
| Owner | Independent (private) | Stripe subsidiary ([[agent-economy/privy-embedded-wallet-overview|see entry]]) | Independent | Independent (post-Magic-Labs era) |
| Multi-chain breadth | Broad (EVM + Solana + Aptos + Sui + Cardano) | EVM-heavy + Solana | EVM + Solana | EVM + Bitcoin + Solana |
| Fiat onramp built-in | Yes (card / Apple Pay native) | Via partners | Via partners | Via partners |
| NFT primitive | Native | Generic | Generic | Generic |
| Server-side agent wallet | Yes | Yes (via App Wallets) | Yes | Yes |
| Enterprise sales motion | Strong (NFT brands, gaming) | Strong (Stripe channel) | Strong (DeFi) | Mid |

The Crossmint **niche** is enterprise / brand customers who need: NFT mint + fiat purchase + multi-chain — all stitched together. For AI agents, this maps to use cases like:

- An **agent that buys / sells NFTs** across chains for a brand customer
- An **agent that issues loyalty / rewards** as NFTs on the cheapest chain (e.g. Solana for low-cost mass mint) and accepts fiat
- An **agent in gaming context** that mints / transfers in-game assets across player wallets

## Where Crossmint sits in the agent stack

| Layer | Where Crossmint plays |
|---|---|
| Wallet / identity | Yes — server-side wallet + KYC modules |
| Authorization mandate | Pluggable (works with AP2 or proprietary) |
| Settlement rail | Fiat (card) → stablecoin / native asset; broader multi-chain than Privy |
| NFT / asset issuance | Native first-class primitive |
| Discovery / marketplace | Not core (compare [[agent-economy/nevermined-compute-payment-protocol|Nevermined]] for that) |
| Compliance | Integrated KYC / AML / KYB |

Practical pattern: an **AI commerce agent** uses Crossmint to provision wallets for end-users at first interaction (no seed phrase), accept card payment, mint an NFT receipt, and route stablecoin settlement to merchants — all via one SDK that abstracts the underlying chain choice.

## Origin and evolution

Crossmint launched around the 2021-2022 NFT cycle as a "card-to-NFT" checkout — solving the problem that most Web2 buyers couldn't navigate crypto onboarding. As the NFT-only thesis cooled (2023), Crossmint expanded to **general embedded wallet** plus **server-side wallet for AI agents** by 2024. The 2025-2026 positioning targets: enterprise brands, AI commerce, and any builder who wants one SDK across many chains without picking sides in the [[agent-economy/embedded-wallet-landscape-2026-consolidation|consolidation]] race.

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/privy-embedded-wallet-overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation]]
- [[agent-economy/embedded-wallet-network-effects-moat]]
- [[agent-economy/skyfire-closed-loop-agent-issuer]]
- [[agent-economy/nevermined-compute-payment-protocol]]
- [[agent-economy/ap2-overview]]
- [[systems/erc-4337-userop-bundler-flow]]
- [[INDEX|FinWiki index]]

## Sources

- crossmint.com product pages and pricing.
- docs.crossmint.com SDK documentation including agent / server-wallet API.
- blog.crossmint.com on agent SDK and multi-chain support.
- github.com/crossmint reference repos.

---
source: agent-economy/x402-http-payment-overview
source_hash: 2f5dd3bbc4779bba
lang: en
status: machine
fidelity: ok
title: "x402 · AI agent payment protocol reviving HTTP 402 (overview)"
translated_at: 2026-05-30T18:10:53.978Z
---

# x402 · AI agent payment protocol reviving HTTP 402 (overview)

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI agent payment protocols overview · seven-protocol landscape]]. Read it against [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · developer platform · AI agent on-chain wallet infrastructure]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Coinbase announced x402 in 2025-05 as an open-source protocol, reviving HTTP 402 after it had remained unused since its 1996 definition. ^[extracted]
- Default settlement uses USDC on Base, with support for Solana and other L2 networks. ^[extracted]
- The settlement layer is protocol-agnostic; applications can switch among Solana USDC, Tron USDT, or any EVM L2. ^[extracted]
- Facilitator model: the server delegates payment verification to a facilitator such as Coinbase. ^[extracted]
- Supports hot wallets and ERC-4337 smart-contract wallets; agents can use arbitrary wallet implementations. ^[extracted]
- USDC on Base settlement is under 2 seconds; the facilitator model is under 100 ms. ^[extracted]
- Single-call gas cost is under $0.001 on Base L2 with an ERC-4337 paymaster. ^[extracted]
- x402 Bazaar MCP catalogs more than 10,000 endpoints. ^[extracted]

## Mechanism / How it works

The AI agent economy is structurally mismatched with SaaS subscription flows. An agent may call hundreds of APIs on a transient basis, and it cannot complete a separate registration, card entry, subscription, and API-key-management flow for every API. The required primitive is per-call micropayment plus immediate authorization without account registration. **x402 protocol flow**: (1) the client requests an API endpoint; (2) the server returns `HTTP 402 Payment Required` plus an `X-Payment-Required` header containing amount, recipient, and accepted assets; (3) the client constructs a [[fintech/usd-stablecoin-interchange|USDC]] transfer; (4) the client resends the request with an `X-Payment` header containing the transaction hash or proof; (5) the server verifies payment and returns the data. The facilitator model means the server does not need to verify on-chain transactions itself: by delegating to a facilitator such as Coinbase or Cloudflare, it reduces implementation burden and shortens verification to under 100 ms. Agent wallets are typically based on [[systems/erc-4337-overview|ERC-4337]] or [[systems/erc-7702-overview|ERC-7702]], with UserOps processed by a [[systems/erc-4337-userop-bundler-flow|bundler]].

## Origin & evolution

RFC 7231 defined HTTP 402 Payment Required but left it as "reserved for future use," and it remained practically unused for three decades. The missing component was a universal payment rail. USDC and stablecoins address that gap; for the surrounding strategy space, see [[fintech/stablecoin-chain-token-strategy-trilemma|chain × token × strategy trilemma]]. In 2025-05, Coinbase open-sourced x402 as a specification at github.com/coinbase/x402 and bound the default implementation to USDC on Base. Early 2025 H2 adopters included experimental implementations in Vercel AI SDK and Cloudflare Workers. In 2026-Q1, Cloudflare integrated x402 into the Workers production environment, meaning that more than 20% of global HTTP traffic had a default payment rail available. AWS API Gateway followed in 2026-Q2. x402 Bazaar MCP catalogs more than 10,000 endpoints as an agent-discoverable paid API directory.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI agent payment protocols overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto bifurcation]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol (Coinbase) — https://github.com/coinbase/x402

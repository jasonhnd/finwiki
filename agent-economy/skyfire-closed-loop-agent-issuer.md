---
title: "Skyfire · closed-loop card-network agent payment issuer"
aliases:
  - "skyfire-closed-loop-agent-issuer"
  - "Skyfire"
  - "Skyfire AI agent virtual card"
  - "agent payment issuer"
domain: "agent-economy"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, payment, skyfire, visa, stripe, agent-issuer, virtual-card, closed-loop, KYA]
status: active
sources:
  - "https://www.skyfire.xyz/"
  - "https://stripe.com/newsroom"
  - "https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html"
  - "https://www.visa.com/agentic-commerce"
  - "https://docs.skyfire.xyz/"
---

# Skyfire · closed-loop card-network agent payment issuer

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 stablecoin rail]] and [[agent-economy/ap2-overview|AP2 · Google mandate protocol]] for peer / contrast, [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic-commerce pilots]] for card-network framing, and [[payments/INDEX|payments index]] for the broader regulatory boundary.

## Key facts

- Skyfire raised Series A in 2024-2025 to operate as an **agent payment issuer** — a closed-loop platform where AI agents get an identity + funded virtual card
- Partnership with **Visa** for card rails and Visa Trusted Agent Protocol alignment
- Stripe / Visa-issued virtual cards routed through Skyfire's agent-identity layer
- Contrast with [[agent-economy/x402-http-payment-overview|x402]] (HTTP + USDC stablecoin) and [[agent-economy/ap2-overview|AP2]] (mandate VC over multiple rails)
- Closed-loop = Skyfire mints agent identity, issues card, sets spend caps, monitors merchant authorization in one bundle

## Mechanism — what closed-loop means here

Skyfire's architecture compresses three things into one operator:

1. **Agent identity / KYA (Know-Your-Agent)** — Skyfire onboards the agent, verifies controlling principal, stores identity proofs
2. **Virtual card issuance** — Visa-network card with merchant-category whitelist, per-transaction cap, daily / monthly ceiling
3. **Authorization gateway** — when agent calls merchant API, Skyfire authorizes against scoped rules in real time

Compared with the **open-protocol stack**:

| Layer | Open stack (x402 + AP2 + ERC-7715) | Skyfire closed loop |
|---|---|---|
| Agent identity | Issued by wallet / OS (Coinbase CDP, Privy, Solana Mobile) | Issued by Skyfire |
| Authorization mandate | AP2 W3C VC | Skyfire-internal card-control rules |
| Settlement rail | USDC on Base (x402) or Google Pay / cards (AP2) | Visa card rail, fiat |
| Discovery | [[agent-economy/x402-http-payment-overview|x402 Bazaar MCP]] | Skyfire merchant directory |
| Trust anchor | Coinbase / Cloudflare facilitator + chain consensus | Skyfire as single trust hub |

The closed-loop model trades **interoperability** for **fast onboarding + clean liability**: merchants accept Skyfire-routed cards as ordinary card transactions, chargeback / dispute follow standard Visa rails (read [[agent-economy/agent-actorship-debate|agent actorship debate]] for liability framing).

## Where Skyfire sits in the seven-protocol map

- **HTTP transport**: not opinionated (works over any agent runtime)
- **Authorization layer**: proprietary (vs AP2's W3C VC standard)
- **Settlement layer**: Visa card rail (vs x402's USDC, AP2's multi-rail)
- **Identity layer**: Skyfire KYA (vs decentralized agent identity via [[agent-economy/erc-7715-overview|ERC-7715]])

Practical implication: Skyfire is the **fastest path to "agent has a payment instrument that any merchant already accepts"** — but locks the agent inside Skyfire's risk perimeter. Contrast with [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] which provides issuing primitives without the closed-loop opinionation.

## Competitive positioning

| Player | Approach | Trade-off |
|---|---|---|
| **Skyfire** | Closed-loop agent issuer + Visa partner | Fast merchant acceptance, narrow rails |
| **Stripe Agent Toolkit** ([[agent-economy/stripe-agent-toolkit-position|see entry]]) | Issuing-as-a-service for any agent builder | Builder owns the closed loop, more work |
| **Visa Trusted Agent Protocol** | Network-level agent-authentication standard | Standardizes the auth handshake card networks need |
| **AP2** ([[agent-economy/ap2-overview|see entry]]) | W3C VC mandate, rail-agnostic | Open standard, slower acceptance curve |
| **x402** ([[agent-economy/x402-http-payment-overview|see entry]]) | HTTP-native USDC | Stablecoin rail, bypasses card networks |

## Origin and evolution

Skyfire emerged from the 2024 "agents need payment instruments" wave alongside Stripe Agent Toolkit, Visa's Trusted Agent Protocol announcements, and [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] agent SDK. The bet: card networks remain the merchant-acceptance default for years, so wrapping agents in a card-network-native issuance layer is a real business — even if x402 / stablecoin rails grow underneath.

Series A investors / partners (Visa, prior Anthropic ecosystem signaling) point to the **enterprise-issuer-distribution** thesis: enterprises buying AI agents want one bill, audit trail, and policy-controlled card — not a USDC wallet. Skyfire fills that procurement-friendly slot.

## Counterpoints

- **Closed loops historically lose** to open protocols once the open stack matures (AWS S3 vs proprietary storage, x402 / AP2 likely to absorb merchant rails)
- **Skyfire is one underwriter risk** — if Skyfire pulls a category, agents using it lose access
- **Card networks already moving** — Visa Trusted Agent Protocol may make Skyfire's KYA layer commoditized
- **Stablecoin rail UX gap closing fast** — [[agent-economy/x402-http-payment-overview|x402]] facilitator latency now <100ms, comparable to card auth

## Open questions

- Will Skyfire stay closed-loop or open up identity issuance for interop with AP2 / VC standards?
- Does Visa eventually absorb the agent-issuer category by extending Trusted Agent Protocol natively?
- How does Skyfire price agent-issuance risk vs traditional card-issuance (chargebacks, fraud, scope-violation)?
- Will agent-builders prefer Stripe's open issuing toolkit over Skyfire's bundled offering?

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots]]
- [[agent-economy/stripe-agent-toolkit-position]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/agent-actorship-debate]]
- [[payments/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- skyfire.xyz product pages and documentation.
- Visa: agentic-commerce program and Trusted Agent Protocol announcements.
- Stripe newsroom: agent-issuing partner program references.
- Coverage of Series A funding and Visa partnership.

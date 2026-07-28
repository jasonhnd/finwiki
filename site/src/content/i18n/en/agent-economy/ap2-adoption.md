---
source: agent-economy/ap2-adoption
source_hash: 33712c3fdb8e66cb
lang: en
status: machine
fidelity: ok
title: "AP2  adoption landscape · Google closed loop vs the four-protocol war"
translated_at: 2026-07-28T22:03:26.809Z
---

# AP2  adoption landscape · Google closed loop vs the four-protocol war

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- Coinbase serves the role of AP2  USDC settlement adapter ^[extracted]
- Shopify / Square are early merchant integrators (pilots starting 2026-Q2 ) ^[extracted]
- Stripe is taking a wait-and-see stance — Stripe Connect has its own commerce stack ^[extracted]
- Visa Trusted Agent Protocol is negotiating interoperability with AP2  ^[extracted]
- OpenAI / Anthropic do not adopt it directly — each follows the MPP / ACP route ^[extracted]

## Mechanism / How it works

Google's combination of 4 root pillars: **Google Pay (6 億 mobile wallet users)** + **Gemini (hundreds of millions of Android/Chrome/Workspace touchpoints)** + **influence over the W3C VC standard (a core contributor)** + **fraud detection AI (the world's largest ML anti-fraud infrastructure)** — no single one can push the standard through, but combined they form a closed loop for agent payments (contrast with [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]'s vertical distribution dominance).

Positioning relative to contemporaneous protocols:

| Protocol | Public steward / specification | Position in the stack | Payment semantics |
|---|---|---|---|
| **AP2** | Google-led public AP2 repository and reference implementation | User intent, cart authorization and payment evidence for agent commerce | Payment-method agnostic; adapters can connect cards, bank rails or digital assets |
| **A2A** | Public Agent2Agent specification | Agent discovery, task and message interoperability | Does not itself settle payment; AP2 can extend an agent interaction |
| **MCP** | Public Model Context Protocol specification | Model / agent access to tools, resources and prompts | Does not itself define a payment rail; a paid tool can compose with AP2 or x402 |
| **x402 V2** | Public x402 specification and documentation | HTTP-native payment negotiation for a resource | `PAYMENT-*` headers select among advertised schemes, networks and assets |

Sources: ^[https://github.com/google-agentic-commerce/AP2] ^[https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol] ^[https://a2a-protocol.org/latest/] ^[https://modelcontextprotocol.io/] ^[https://docs.x402.org/]


## Origin & evolution

The four-protocol-war configuration is no accident — after the agent economy rose, each major player recognized that **whoever holds the agent-payment standard holds the next-generation commerce gateway**. Google bet on wallet+identity (its own strength), Microsoft on the merchant API, Anthropic on the commerce-platform dialogue, and Cloudflare/Coinbase/AWS on the bottom-most HTTP+stablecoin channel (see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]). The Linux Foundation's A2A is the neutral fallback.

Stripe's wait-and-see posture is the key variable — if Stripe bets on AP2  via Privy (already acquired), the Google camp's advantage expands substantially; if Stripe builds its own ACP-compatible stack, the market may fragment. This [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる中抜き]] front will determine supremacy over the fintech value chain.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ai-company-payment-landscape|AI 企業の決済版図]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
<!-- /wiki-links:managed -->

## Sources

- Visa Trusted Agent Protocol announcements(2025-2026)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

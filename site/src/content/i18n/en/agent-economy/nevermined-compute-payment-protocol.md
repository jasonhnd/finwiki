---
source: agent-economy/nevermined-compute-payment-protocol
source_hash: 7ac4261eca37bc6b
lang: en
status: machine
fidelity: ok
title: "Nevermined · AI compute-payment protocol"
translated_at: 2026-05-30T17:31:02.641Z
---

# Nevermined · AI compute-payment protocol

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP-native micropayment]] for peer / contrast, [[agent-economy/skill-market-monetization|skill market monetization]] for the marketplace framing, and [[payments/INDEX|payments index]] for the broader rail context.

## Key facts

- Nevermined is an **AI compute / data marketplace + payment protocol** — per-inference, per-dataset, per-agent-call micropayments
- Architecture: smart-contract escrow + token-gated access; agents subscribe or pay-per-use for compute / model / data
- Built originally on Polygon / EVM; integrates with [[agent-economy/x402-http-payment-overview|x402]] as one settlement option
- Use case: AI compute provider exposes a model / GPU endpoint; agent consumer pays per inference call, settled in stablecoin
- Targets the "compute-as-commodity" thesis where agents shop across many providers per workflow

## Mechanism — how Nevermined routes compute payments

The protocol fits between **compute / model providers** and **agent consumers**:

```
AI agent ──── intent: "run inference on model X" ─────►
                                                      ▼
                                              Nevermined
                                              gateway / SC
                                                      │
                              ┌───────────────────────┼──────────────────┐
                              ▼                       ▼                  ▼
                     Compute provider A       Model provider B    Dataset provider C
                              │                       │                  │
                              └───── settlement ──────┴──── stablecoin ──┘
                                       (USDC, USDT, native token)
```

Core building blocks:

1. **Asset registration** — provider registers a model / dataset / API endpoint with price, terms of use, and access policy
2. **Subscription / pay-per-use token** — consumer agent buys a subscription NFT or per-call credit
3. **Smart-contract escrow** — payments held until proof-of-delivery; provider claims on completion
4. **Access proof** — gateway validates token before forwarding request to the compute provider
5. **Royalty / split logic** — multi-party splits to model creators, data curators, compute providers

## Compute-marketplace fit

The agent-economy thesis behind Nevermined: an agent workflow may touch **dozens of compute providers in one task** (e.g., a research agent that hits a vision model, a structured-extraction LLM, a vector DB, a domain-specific finetune, and a long-context model — each from a different vendor). Traditional SaaS API-key flow breaks at that fan-out; Nevermined's per-call settlement + unified billing makes it linear.

Compare with the [[agent-economy/x402-http-payment-overview|x402]] architecture: x402 standardizes the **HTTP handshake**, Nevermined standardizes the **marketplace + escrow contracts**. The two can compose — Nevermined uses x402 for the transport-layer payment-required handshake while running its own escrow / royalty layer on top.

## Integration with x402

| Layer | x402 | Nevermined |
|---|---|---|
| HTTP handshake | Defines `402 Payment Required` + `X-Payment` headers | Adopts x402 as one transport option |
| Settlement | USDC on Base default | Multi-stablecoin, escrow-based |
| Marketplace | Bazaar MCP (10k+ endpoints) | Nevermined registry of compute / models / data |
| Royalty / splits | Out of scope | Native support for multi-party splits |
| Subscription model | Per-call only | Subscription NFTs + per-call |

Practical pattern: a compute provider publishes via Nevermined for catalog + escrow, exposes the call endpoint with an x402 facilitator for transport-layer payment, and lets agents settle in [[fintech/usd-stablecoin-interchange|USDC]] on [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum]].

## Where Nevermined sits

| Function | Open-stack peer | Nevermined position |
|---|---|---|
| Discovery | x402 Bazaar | Nevermined registry |
| Settlement | x402 + USDC | Same rails, plus subscription |
| Identity | Privy / Coinbase CDP / [[agent-economy/erc-7715-overview|ERC-7715]] | Reuses external wallet identity |
| Royalty splits | Stripe Connect, ERC-2981 | Built-in via smart-contract escrow |
| Compliance / KYA | Skyfire ([[agent-economy/skyfire-closed-loop-agent-issuer|see entry]]) | Pluggable |

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/skyfire-closed-loop-agent-issuer]]
- [[agent-economy/skill-market-monetization]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[fintech/usd-stablecoin-interchange]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[INDEX|FinWiki index]]

## Sources

- nevermined.io product site and developer documentation.
- github.com/nevermined-io for protocol contracts and gateway code.
- Nevermined registry app and provider listings.

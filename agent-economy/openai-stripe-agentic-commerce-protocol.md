---
title: OpenAI + Stripe Agentic Commerce Protocol · ChatGPT Instant Checkout
aliases:
  - openai-stripe-agentic-commerce-protocol
  - agentic-commerce-protocol
  - acp
  - chatgpt-instant-checkout
  - stripe-shared-payment-token
domain: agent-economy
created: 2026-07-04
last_updated: 2026-07-04
last_tended: 2026-07-04
review_by: 2026-10-02
confidence: likely
tags: [agent-economy, openai, stripe, agentic-commerce, payments, acp, spt, chatgpt, ecommerce]
sources:
  - https://openai.com/index/buy-it-in-chatgpt/
  - https://stripe.com/newsroom/news/stripe-openai-instant-checkout
  - https://github.com/agentic-commerce-protocol/agentic-commerce-protocol
  - https://developers.openai.com/commerce/specs/payment
  - https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens
  - https://stripe.com/blog/supporting-additional-payment-methods-for-agentic-commerce
status: active
---

# OpenAI + Stripe Agentic Commerce Protocol · ChatGPT Instant Checkout

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] as the ChatGPT-native checkout rail. Read it against [[agent-economy/ap2-overview|AP2]], [[agent-economy/x402-http-payment-overview|x402]], [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]], [[agent-economy/ai-company-payment-landscape|AI-company payment landscape]], and [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] for the competing mandate, HTTP-payment, PSP, AI-lab, and card-network layers. For the broader system / regulatory boundary, read [[payments/INDEX|payments index]].

## Key facts

- OpenAI announced Instant Checkout in ChatGPT on 2025-09-29, powered by the Agentic Commerce Protocol built with Stripe. ^[extracted]
- The initial public flow let U.S. ChatGPT users buy directly from U.S. Etsy sellers; OpenAI and Stripe said more than one million Shopify merchants were planned to follow. ^[extracted]
- Stripe described ACP as an open standard co-developed with OpenAI, and the public ACP repository is maintained by OpenAI and Stripe with date-based spec versions. ^[extracted]
- ACP keeps the merchant as merchant of record: the merchant and its PSP handle settlement, refunds, chargebacks, and compliance rather than OpenAI becoming the seller. ^[extracted]
- OpenAI's Delegated Payment Spec passes a constrained, single-use payment token from the buyer flow to the merchant or PSP; Stripe's Shared Payment Token is the first compatible implementation. ^[extracted]
- Stripe's 2026 SPT expansion added support for network-led agentic payment capabilities, including Mastercard Agent Pay and Visa Intelligent Commerce, behind the same seller-facing primitive. ^[extracted]
- ACP is a practical counterweight to [[agent-economy/ap2-overview|AP2]] and [[agent-economy/x402-http-payment-overview|x402]] because it anchors agentic checkout in existing merchant PSP stacks instead of starting from verifiable mandates or HTTP 402 settlement. ^[inferred]

## Mechanism / How it works

ACP turns ChatGPT into an agentic storefront without making OpenAI the merchant of record. A merchant shares product data through ACP product-feed mechanisms, ChatGPT surfaces relevant products inside the conversation, and the user confirms checkout in ChatGPT's UI. The merchant then receives ACP checkout calls, validates availability, computes fulfillment and tax, evaluates risk on its own stack, and accepts or declines the order through its existing commerce backend.

The payment path is the important design choice. OpenAI prepares a one-time delegated payment request with a maximum chargeable amount and expiry. The merchant's trusted PSP or vault receives that payload and returns a scoped payment token. OpenAI forwards the token during checkout completion, and the merchant charges it through its existing PSP setup. In the Stripe implementation this token is a Shared Payment Token (SPT), which represents the buyer's approved payment credentials without exposing raw card details to ChatGPT or to a new merchant-specific card-entry flow.

That architecture differs from [[agent-economy/x402-http-payment-overview|x402]], where the resource server returns HTTP 402 and expects a payment proof before serving the resource. It also differs from [[agent-economy/ap2-overview|AP2]], where the load-bearing object is a verifiable mandate proving that an agent is authorized to spend. ACP's load-bearing object is more operational: the agent checkout session, delegated payment token, merchant checkout endpoint, and PSP rails that merchants already use.

## Origin & evolution

The first public ACP moment was the 2025-09-29 "Buy it in ChatGPT" launch. OpenAI positioned Instant Checkout as the first step toward ChatGPT moving from product discovery to purchase completion, starting with Etsy and planned Shopify coverage. Stripe simultaneously announced the protocol and described the first flow as Stripe-powered checkout in chat, with Stripe issuing SPTs after the buyer approved the payment method.

The spec then moved from launch artifact to broader infrastructure. The public ACP repository uses dated spec snapshots, with visible releases from 2025-09-29 through 2026-04-17 covering checkout, delegated payment, cart, feed, order, authentication, and MCP-related additions. Stripe's 2026 documentation also places ACP next to UCP for sellers and next to machine-payment protocols such as MPP and x402 for agents, which makes ACP part of a wider agent-commerce routing layer rather than only a ChatGPT checkout feature.

Strategically, ACP gives OpenAI a native commerce path that does not require every merchant to become a crypto merchant, accept stablecoins, or wait for AP2-style mandate adoption. For Stripe, it preserves PSP relevance in agentic commerce: the agent can discover and initiate, but the merchant's existing payment processor remains the economic and compliance layer. The 2026 SPT expansion toward Visa Intelligent Commerce and Mastercard Agent Pay reinforces that posture; Stripe can abstract multiple network-token and agent-token systems behind a single SPT interface.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
- [[agent-economy/ai-company-payment-landscape|AI-company payment landscape]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
<!-- /wiki-links:managed -->

## Sources

- OpenAI, "Buy it in ChatGPT: Instant Checkout and the Agentic Commerce Protocol" — https://openai.com/index/buy-it-in-chatgpt/
- Stripe newsroom, "Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol co-developed with OpenAI" — https://stripe.com/newsroom/news/stripe-openai-instant-checkout
- Agentic Commerce Protocol repository — https://github.com/agentic-commerce-protocol/agentic-commerce-protocol
- OpenAI Developers, Delegated Payment Spec — https://developers.openai.com/commerce/specs/payment
- Stripe Docs, Shared Payment Tokens — https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens
- Stripe blog, "Supporting additional payment methods for agentic commerce" — https://stripe.com/blog/supporting-additional-payment-methods-for-agentic-commerce

---
title: Visa Trusted Agent Protocol · signed-agent authentication for commerce
aliases:
  - visa-trusted-agent-protocol
  - visa-tap
  - trusted-agent-protocol
  - tap
  - visa-intelligent-commerce-tap
domain: agent-economy
created: 2026-07-04
last_updated: 2026-07-04
last_tended: 2026-07-04
review_by: 2026-10-02
confidence: likely
tags: [agent-economy, visa, trusted-agent-protocol, tap, agentic-commerce, cloudflare, web-bot-auth, http-signatures]
sources:
  - https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21716.html
  - https://developer.visa.com/capabilities/trusted-agent-protocol/trusted-agent-protocol-specifications
  - https://github.com/visa/trusted-agent-protocol
  - https://blog.cloudflare.com/secure-agentic-commerce/
  - https://www.cloudflare.com/press/press-releases/2025/cloudflare-collaborates-with-leading-payments-companies-to-secure-and-enable-agentic-commerce/
  - https://www.visa.com/en-us/solutions/intelligent-commerce
status: active
---

# Visa Trusted Agent Protocol · signed-agent authentication for commerce

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] as Visa's signed-agent authentication layer for merchant traffic. Read it against [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]], [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity bridge]], and [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]] because TAP is more about identity, intent, and payment-context headers than about being a standalone settlement rail. For the broader payment-system context, read [[payments/INDEX|payments index]].

## Key facts

- Visa announced Trusted Agent Protocol (TAP) on 2025-10-14 as an ecosystem-led framework for safer agent-driven checkout. ^[extracted]
- Visa said TAP was developed in collaboration with Cloudflare and made available through Visa Developer Center and GitHub. ^[extracted]
- Visa framed TAP as part of the broader Visa Intelligent Commerce initiative for AI-led shopping and payments. ^[extracted]
- TAP uses agent-specific cryptographic signatures so merchants can distinguish trusted agents with commerce intent from malicious automation and ordinary bots. ^[extracted]
- The Visa Developer specification recognizes `Signature-Input` tags of `agent-browser-auth` and `agent-payer-auth`, with timestamp, nonce, key identifier, and signature validation checks. ^[extracted]
- Cloudflare describes TAP and Mastercard Agent Pay as leveraging Web Bot Auth, HTTP Message Signatures, public-key cryptography, and registered agent public-key directories; its example uses `alg="Ed25519"`. ^[extracted]
- Visa named 12 early feedback partners: Adyen, Ant International, Checkout.com, Coinbase, CyberSource, Elavon, Fiserv, Microsoft, Nuvei, Shopify, Stripe, and Worldpay. ^[extracted]
- TAP complements rather than replaces [[agent-economy/x402-http-payment-overview|x402]] and card-network tokens: it authenticates the agent interaction and can carry payment context, while settlement still happens through the merchant's selected rail. ^[inferred]

## Mechanism / How it works

TAP signs the agent's HTTP interaction with the merchant. A trusted agent includes HTTP Message Signature fields that bind the request to the target authority, path, timestamps, nonce, key identifier, algorithm, and a tag indicating whether the agent is browsing or paying. A merchant, CDN, or network validator checks that the signature exists, is fresh, has not reused a nonce, can be verified against a trusted public key, and carries an interaction tag such as `agent-browser-auth` or `agent-payer-auth`.

That makes TAP an authentication and intent layer. During browsing, the merchant can decide that the request is a legitimate commerce agent rather than scraper or fraud traffic. During payment, the agent can include an Agentic Payment Container whose signature links payment data to the same interaction context. The Visa specification describes fields for card metadata, credential hashes, encrypted payment payloads, and browsing IOUs for 402-style access patterns. The merchant can therefore receive enough trusted context to decide whether to continue, request payment, or complete checkout.

The Cloudflare connection is operationally important. Cloudflare's Web Bot Auth work gives the web-infrastructure layer a way to validate signatures and agent keys before the request reaches the merchant application. That allows TAP to compose with [[agent-economy/x402-cloudflare-aws-edge-integration|edge-based payment and agent routing]]: a merchant can let infrastructure classify the agent, then use its existing checkout stack, Visa Intelligent Commerce token flows, or other rails to complete payment.

## Origin & evolution

Visa launched TAP in October 2025 against a concrete merchant problem: AI-driven retail traffic was rising quickly, but bot detection systems could not reliably distinguish legitimate shopping agents from malicious automation. Visa's announcement emphasized three merchant needs: avoid mistakenly blocking legitimate agents, support guest and logged-in agent checkout, and preserve visibility into the consumer and payment data behind the agent.

The protocol is also a strategic response to open agent-payment systems. [[agent-economy/ap2-overview|AP2]] focuses on proving user authorization through mandates, and [[agent-economy/x402-http-payment-overview|x402]] focuses on HTTP-native payment challenge / proof. TAP focuses one layer earlier: can the merchant trust that this HTTP request came from a recognized agent, with current authorization and usable payment context? That is why TAP belongs next to [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity]] as much as next to payments.

By 2026, Visa Intelligent Commerce, TAP, and Stripe's SPT expansion were converging into a card-network-friendly agentic commerce stack. An agent can be recognized via TAP, carry payment context or a network token, and have Stripe or another PSP process the transaction without requiring the merchant to rebuild its checkout around a new settlement protocol. The trade-off is that TAP inherits card-network trust and acceptance, while x402-style rails retain stronger internet-native micropayment economics.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|Agent identity bridge]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/openai-stripe-agentic-commerce-protocol|OpenAI + Stripe ACP]]
<!-- /wiki-links:managed -->

## Sources

- Visa press release, "Visa Introduces Trusted Agent Protocol" — https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21716.html
- Visa Developer Center, Trusted Agent Protocol specifications — https://developer.visa.com/capabilities/trusted-agent-protocol/trusted-agent-protocol-specifications
- Visa Trusted Agent Protocol GitHub repository — https://github.com/visa/trusted-agent-protocol
- Cloudflare blog, "Securing agentic commerce: helping AI Agents transact with Visa and Mastercard" — https://blog.cloudflare.com/secure-agentic-commerce/
- Cloudflare press release, payments companies collaboration for agentic commerce — https://www.cloudflare.com/press/press-releases/2025/cloudflare-collaborates-with-leading-payments-companies-to-secure-and-enable-agentic-commerce/
- Visa Intelligent Commerce — https://www.visa.com/en-us/solutions/intelligent-commerce

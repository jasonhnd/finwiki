---
source: agent-economy/x402-cloudflare-aws-edge-integration
source_hash: dce234af6bdf86f2
lang: en
status: machine
fidelity: ok
title: "x402 x Cloudflare / AWS · the default payment component at the edge layer"
translated_at: 2026-05-30T17:31:02.650Z
---

# x402 x Cloudflare / AWS · the default payment component at the edge layer

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2026-Q1 Cloudflare Workers natively integrated x402  ^[extracted]
- 2026-Q2 AWS API Gateway integrated x402 · enabling Bedrock agents to call paid APIs ^[extracted]
- Cloudflare handles 20%+ of global HTTP traffic ^[extracted]
- Developers can commercialize an API with 5 行 of configuration · Cloudflare collects a 1-2% facilitator fee ^[extracted]
- The facilitator model has < 100ms of verification latency (credit-advance · asynchronous on-chain settlement) ^[extracted]
- Backed by Cloudflare + AWS, x402 is no longer a crypto-only toy ^[extracted]
- Compatible with OpenAI / Anthropic agent SDKs (formal integration not yet announced) ^[extracted]

## Mechanism / How it works

The edge layer is the path that HTTP traffic must always pass through, and Cloudflare Workers / AWS API Gateway are the largest 2 社 within it. Integrating x402 into the edge layer means **developers do not need to write payment logic**. They merely declare the endpoint price (e.g., "this API is $0.001 USDC") · and the edge layer automatically: (1) intercepts requests with no payment → returns HTTP 402 ; (2) verifies requests carrying the X-Payment header (asynchronous on-chain settlement); (3) permits routing → the backend processes it. Via the facilitator model the edge layer performs credit-advance: before the on-chain [[fintech/usd-stablecoin-interchange|USDC settlement]] completes, the facilitator has already released the request · compressing single-shot latency to < 100ms. Cloudflare's 1-2% is the facilitator fee · which, compared with traditional Stripe's 2.9% + $0.30 , is extremely advantageous for low-value API calls (for the fee-rate moat, contrast with [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]). The AWS API Gateway + Bedrock path forms a closed loop in which an agent calls paid APIs inside AWS.

## Origin & evolution

2025-05 Coinbase announced the x402 spec. 2025 H2 Cloudflare engineers carried out an experimental integration on Workers · validating that the facilitator model's latency could be compressed to 100ms. 2025-Q4 Cloudflare decided on 2026-Q1 productization. 2026-Q1 the Cloudflare Workers x402 integration was formally released — this became x402 's first enterprise-grade integration. 2026-Q2 AWS API Gateway followed, forming a closed loop with Bedrock AgentCore via x402 (AgentCore's default wallet is Privy/CDP + billing through API Gateway's x402 ). In parallel, the Vercel AI SDK also supports x402 client calls. OpenAI / Anthropic have not yet announced formal integration · but the SDKs are compatible with x402 client calls (it only needs the agent to be able to sign with a wallet · the underlying layer depends on [[systems/erc-4337-overview|ERC-4337]] or [[systems/erc-7702-overview|ERC-7702]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/x402-http-payment-overview|x402 総覧]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|On-chain finance vs crypto 分岐]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol (Coinbase) — https://github.com/coinbase/x402

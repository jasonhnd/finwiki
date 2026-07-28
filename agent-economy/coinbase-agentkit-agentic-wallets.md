---
title: "Coinbase AgentKit & Agentic Wallets · TEE agent wallets on Base"
aliases:
  - coinbase-agentkit-agentic-wallets
  - Coinbase AgentKit
  - Coinbase Agentic Wallets
  - Coinbase AgentKit & Agentic Wallets · MPC agent wallets on Base
  - Agentic Wallet CLI
  - Agentic Wallet MCP
  - Coinbase for Agents
domain: agent-economy
created: 2026-07-03
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: certain
tags: [agent-economy, coinbase, agentkit, agentic-wallets, x402, base, usdc, mcp, wallet]
sources:
  - https://www.coinbase.com/developer-platform/discover/launches/introducing-agentkit
  - https://github.com/coinbase/agentkit
  - https://docs.cdp.coinbase.com/agent-kit/welcome
  - https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets
  - https://www.coinbase.com/developer-platform/products/agentic-wallets
  - https://docs.cdp.coinbase.com/agentic-wallet/welcome
  - https://docs.cdp.coinbase.com/agentic-wallet/mcp/welcome
  - https://www.coinbase.com/developer-platform/discover/launches/cdp-wallets-launch
  - https://docs.cdp.coinbase.com/wallets/security-and-policies/security-overview
  - https://developers.circle.com/wallets
status: active
---

# Coinbase AgentKit & Agentic Wallets · TEE agent wallets on Base

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]] as the Coinbase-specific agent wallet / agent payment implementation note. Read it against [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] for the broader developer-platform substrate, [[agent-economy/x402-http-payment-overview|x402]] for the HTTP payment protocol, [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 account abstraction for agents]] for adjacent wallet-permission design, and [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallets]] for the main embedded-wallet peer.

## Key facts

- Coinbase launched AgentKit on 2024-11-08 as a CDP framework for AI agents that need to perform onchain operations such as transfers, token swaps, and smart-contract interactions. ^[extracted]
- The current `coinbase/agentkit` repository describes AgentKit as CDP's toolkit for giving AI agents a crypto wallet and onchain interactions, with framework-agnostic and wallet-agnostic integration. ^[extracted]
- Coinbase introduced Agentic Wallets on 2026-02-11 as wallet infrastructure built specifically for agents, distinct from the general CDP platform entry and from the open AgentKit framework. ^[extracted]
- As of 2026-07-29, Coinbase's live product and developer-documentation surfaces continue to offer Agentic Wallet CLI and Agentic Wallet MCP, while the public `coinbase/agentkit` repository remains the open framework entry point. ^[extracted]
- Agentic Wallets are exposed through two product surfaces: an Agentic Wallet CLI using `awal` commands and an Agentic Wallet MCP server / companion app for MCP-compatible agents such as Claude, Codex, and Gemini. ^[extracted]
- Coinbase's Agentic Wallet pages position x402 as the core payment standard, state that x402 had processed over 50M transactions, and emphasize machine-to-machine payments, API paywalls, and programmatic resource access. ^[extracted]
- Coinbase's product page says Agentic Wallets support gasless trading for any token on Base; the MCP documentation also lists automatic payments on Base, Polygon, and Solana. ^[extracted]
- The official 2026 CDP Wallets v2 security story is TEE / enclave isolation plus programmable policy controls, not a current MPC key-shard model: Coinbase's CDP Wallets launch states "no MPC, no key shards," while noting that the previous Wallet API v1 was MPC-based. ^[extracted]
- MPC is therefore a historical comparison point for the earlier Wallet API v1, while the verified current Agentic Wallet architecture is CDP Wallets + TEE isolation + session and transaction guardrails. ^[inferred]
- Competitive positioning: Coinbase bundles open AgentKit actions, CDP wallet security, x402 payment discovery, and Base gas abstraction; Privy emphasizes embedded-wallet UX across apps, while Circle Wallets emphasize USDC-native wallet APIs secured by MPC or passkeys depending on product. ^[inferred]

## Mechanism / How it works

AgentKit and Agentic Wallets are adjacent but not interchangeable. **AgentKit** is the open-source agent framework layer: it exposes wallet providers, action providers, and framework adapters so an AI agent can call onchain actions from LangChain, Vercel AI SDK, MCP, or another runtime. The GitHub repository is explicit that the design is both framework-agnostic and wallet-agnostic; in practice that means the same agent action layer can sit on CDP wallets, smart wallets, Privy, viem, or a custom provider.

**Agentic Wallets** are the productized wallet surface Coinbase built for autonomous agents. The CLI path is for developers who want to install wallet skills and call `awal` commands from an agent workflow: authenticate, fund, send, trade, and pay for x402 services. The MCP path is for users of MCP-compatible clients who do not want to wire code: `npx @coinbase/payments-mcp` installs a local MCP server and companion wallet app, then the agent can discover x402 services and pay for API calls from the wallet context.

The security boundary is the wallet layer, not the prompt. Agentic Wallets inherit CDP non-custodial wallet infrastructure: requests are authenticated, policy-checked, and forwarded into a Trusted Execution Environment for private-key operations. The user or operator keeps control over session caps, per-transaction limits, transfers, and onramp flows; the LLM sees tools, not raw key material. This matters because agent wallets fail differently from human wallets: the main risk is not only key theft, but prompt-injection or tool-routing errors that try to spend outside the task boundary.

x402 is the transaction rail that makes the wallet agent-native. Instead of pre-registering for every API, an agent can receive an HTTP 402 payment requirement, authorize a small stablecoin payment, and continue the request. Agentic Wallet MCP wraps this pattern for MCP clients: the agent discovers paid services, pays with USDC on supported networks, and returns the data to the user. On Base, Coinbase adds the gas-abstraction path that keeps the agent from needing native ETH for every operation, which is especially important for low-value API and compute payments.

Coinbase does maintain an open MPC cryptography stack, and older CDP wallet materials reference Wallet API v1 as MPC-based. But the verified Agentic Wallet / CDP Wallets v2 architecture Coinbase documents in 2026 is enclave / TEE based and explicitly contrasts itself with MPC key shards. For factual use, this entry treats MPC as a historical comparison point and uses TEE + policy guardrails as the current product architecture.

## Origin & evolution

The sequence is: **AgentKit first, Agentic Wallets second**. Coinbase launched AgentKit in 2024-11 as a framework for putting onchain actions inside AI agents. That launch solved the developer-tooling problem: how an agent calls transfer, swap, deploy, or smart-contract actions through a normal AI framework.

CDP Wallets then supplied the automation-grade wallet substrate. Coinbase's 2025 CDP Wallets v2 launch reframed wallets for backend systems, bots, and agents: create and sign through scoped APIs, keep sensitive operations inside AWS Nitro Enclaves, and enforce wallet policies before signing. That is distinct from the earlier MPC-based Wallet API v1 path and is the reason an agent wallet can be described as programmable custody rather than a prompt-held hot key.

Agentic Wallets, launched on 2026-02-11, packaged those pieces for autonomous money movement. It adds the agent-facing distribution surfaces -- `awal` CLI and MCP server -- and anchors the payment use case around x402 and Base. In strategic terms, Coinbase is trying to own the "agent has a wallet and can pay now" default for crypto-native agents, not just the generic Web3 developer platform.

Against [[agent-economy/privy-embedded-wallet-overview|Privy]], Coinbase's edge is the Base + x402 + CDP integration loop; Privy's edge is embedded-wallet distribution and Web2-style onboarding across consumer apps. Against Circle Wallets, Coinbase is less a neutral USDC wallet API and more a vertically integrated agent-commerce stack: Base execution, x402 discovery, wallet policies, and CDP telemetry in one bundle. Against [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire]], Coinbase is open stablecoin / onchain-native infrastructure rather than a card-network closed loop.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 account abstraction primer for agents]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded wallet landscape 2026 consolidation]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop agent issuer]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase, "Introducing AgentKit" — https://www.coinbase.com/developer-platform/discover/launches/introducing-agentkit
- Coinbase `agentkit` GitHub repository — https://github.com/coinbase/agentkit
- Coinbase Developer Documentation, AgentKit overview — https://docs.cdp.coinbase.com/agent-kit/welcome
- Coinbase, "Introducing Agentic Wallets: Give Your Agents the Power of Autonomy" — https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets
- Coinbase Developer Platform product page, Agentic Wallets — https://www.coinbase.com/developer-platform/products/agentic-wallets
- Coinbase Developer Documentation, Agentic Wallet overview — https://docs.cdp.coinbase.com/agentic-wallet/welcome
- Coinbase Developer Documentation, Agentic Wallet MCP overview — https://docs.cdp.coinbase.com/agentic-wallet/mcp/welcome
- Coinbase, "Introducing CDP Wallets (now in Beta): Full Control, Zero Key Management" — https://www.coinbase.com/developer-platform/discover/launches/cdp-wallets-launch
- Coinbase Developer Documentation, CDP Wallets security overview — https://docs.cdp.coinbase.com/wallets/security-and-policies/security-overview
- Circle Wallets documentation — https://developers.circle.com/wallets

---
title: "Agent economy domain"
aliases:
  - "agent-economy INDEX"
  - "AI agent payment domain"
  - "AI エージェント経済 domain"
domain: "agent-economy"
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: certain
tags: [agent-economy, index, ai-agents, payments, wallets, x402, ap2, erc-7715, solana, embedded-wallets]
status: active
sources:
  - "https://www.x402.org/"
  - "https://github.com/google-agentic-commerce/AP2"
  - "https://eips.ethereum.org/EIPS/eip-7715"
  - "https://eips.ethereum.org/EIPS/eip-4337"
  - "https://eips.ethereum.org/EIPS/eip-7702"
  - "https://docs.privy.io/"
  - "https://docs.cdp.coinbase.com/"
  - "https://solanamobile.com/"
  - "https://docs.anthropic.com/en/docs/claude-code/overview"
---

# Agent economy domain

## TL;DR

This domain routes the **AI-agent payment + wallet stack**: HTTP-native protocols (x402), commerce mandate protocols (AP2), wallet permission delegation (ERC-7715 on top of 4337/7702), embedded-wallet operators (Privy, Coinbase CDP), and OS-layer alternatives (Solana Saga / Seeker mobile). It also tracks the **monetization layer above the protocols** — agent skill marketplaces, AI-company collection rails, and the agent-actorship debate.

The thesis the domain tracks is that agent payments are **commoditizing fast** at the protocol layer, so durable value moves up to wallet integrators (embedded wallets, AWS / Cloudflare default components) and down to chain rails (stablecoin issuers, L2s). Use this domain when a question is about *AI agents transacting autonomously*, not about human-driven crypto or fintech UX. Adjacent system context lives in [[fintech/INDEX|fintech]] (stablecoins, neobanks) and [[INDEX|FinWiki index]] (top-level navigation).

## Route map

| Lane | Start here | Cluster |
|---|---|---|
| Seven-protocol overview | [[agent-economy/ai-agent-payment-protocols-overview\|AI Agent payment protocols · seven-protocol overview]] | AI-agent payment protocols |
| Commoditization thesis | [[agent-economy/ai-agent-payment-protocols-commoditization\|Agent payment protocols commoditization · Stripe five-layer + Privy double default]] | AI-agent payment protocols |
| HTTP-native rail | [[agent-economy/x402-http-payment-overview\|x402 · HTTP 402 revived AI agent payment protocol]] | AI-agent payment protocols |
| Google's mandate protocol | [[agent-economy/ap2-overview\|AP2 · Google Agent Payments Protocol overview]] | AI-agent payment protocols |
| Wallet permission layer | [[agent-economy/erc-7715-overview\|ERC-7715 · Wallet Permissions and AI agent auto-pay]] | AI-agent payment protocols |
| Embedded wallet default | [[agent-economy/privy-embedded-wallet-overview\|Privy · Stripe subsidiary embedded self-custody wallet]] | Embedded wallet stack |
| Wallet-layer moat | [[agent-economy/embedded-wallet-network-effects-moat\|Embedded wallet network effects · integrator moat]] | Embedded wallet stack |
| Mobile OS thesis | [[agent-economy/solana-saga-seeker-mobile-stack-overview\|Solana Saga / Seeker · mobile-native wallet stack]] | Solana mobile thesis |
| Skill monetization | [[agent-economy/skill-market-monetization\|Skill market monetization]] | Skill / monetization layer |
| Agent legal status | [[agent-economy/agent-actorship-debate\|Agent actorship debate · four camps]] | Skill / monetization layer |

## Start here

Five high-leverage entries for anyone new to the agent economy:

1. [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols · seven-protocol overview]] — the seven-protocol map that everything else slots into.
2. [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent payment seven-protocol layer table · intent / transport / context]] — intent / transport / context layering that separates AP2 from x402 from ERC-7715.
3. [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocols commoditization]] — why the protocol layer collapses in margin and value moves to wallets + chains.
4. [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · default wallet positioning]] — case study of an embedded wallet becoming a hyperscaler default.
5. [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS-layer vs App-layer]] — the strategic fork between mobile-OS and embedded-wallet paths.
6. [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 and agent payment stack · x402 + AP2 + 4337/7702 stack]] — how the protocols compose into one runtime, anchored on EVM account-abstraction primitives (ERC-4337 / ERC-7702).
7. [[agent-economy/2026-04-08_agent-payment-infrastructure-research|2026-04-08 agent payment infrastructure research]] — dated research snapshot for citation traceability.

## AI-agent payment protocols

The protocol layer — what the wire actually carries when an agent pays.

| Slug | Title |
|---|---|
| [[agent-economy/ai-agent-payment-protocols-overview\|ai-agent-payment-protocols-overview]] | AI Agent payment protocols · seven-protocol overview |
| [[agent-economy/ai-agent-payment-protocols-seven-layers\|ai-agent-payment-protocols-seven-layers]] | AI Agent payment seven-protocol layer table · intent / transport / context |
| [[agent-economy/ai-agent-payment-protocols-commoditization\|ai-agent-payment-protocols-commoditization]] | Agent payment protocols commoditization · Stripe five-layer + Privy double default |
| [[agent-economy/x402-http-payment-overview\|x402-http-payment-overview]] | x402 · HTTP 402 revived AI agent payment protocol (overview) |
| [[agent-economy/x402-cloudflare-aws-edge-integration\|x402-cloudflare-aws-edge-integration]] | x402 x Cloudflare / AWS · edge-layer default payment component |
| [[agent-economy/ap2-overview\|ap2-overview]] | AP2 · Google Agent Payments Protocol overview |
| [[agent-economy/ap2-technical-spec\|ap2-technical-spec]] | AP2 technical spec · Mandate · Payment Intent · Settlement Adapter |
| [[agent-economy/ap2-adoption\|ap2-adoption]] | AP2 adoption landscape · Google closed-loop vs protocol four-way fight |
| [[agent-economy/erc-7715-overview\|erc-7715-overview]] | ERC-7715 overview · Wallet Permissions and AI agent auto-pay |
| [[agent-economy/erc-7715-agent-payment-stack\|erc-7715-agent-payment-stack]] | ERC-7715 and agent payment stack · x402 + AP2 + 4337/7702 |
| [[agent-economy/ai-company-payment-landscape\|ai-company-payment-landscape]] | AI companies' collection methods (April 2026 snapshot) |
| [[agent-economy/2026-04-08_agent-payment-infrastructure-research\|2026-04-08_agent-payment-infrastructure-research]] | Agent payment infrastructure research (dated snapshot) |

## Embedded wallet stack

The wallet layer that signs / submits agent transactions, including the integrator-moat thesis.

| Slug | Title |
|---|---|
| [[agent-economy/privy-embedded-wallet-overview\|privy-embedded-wallet-overview]] | Privy · Stripe subsidiary embedded self-custody wallet (overview) |
| [[agent-economy/privy-aws-agentcore-default-wallet\|privy-aws-agentcore-default-wallet]] | Privy x AWS Bedrock AgentCore · AI agent economy default wallet positioning |
| [[agent-economy/coinbase-cdp-developer-platform\|coinbase-cdp-developer-platform]] | Coinbase CDP · developer platform · AI agent on-chain wallet infrastructure |
| [[agent-economy/embedded-wallet-network-effects-moat\|embedded-wallet-network-effects-moat]] | Embedded wallet network effects · integrator moat (not the wallet itself) |

## Solana mobile thesis

Mobile-OS-as-wallet path, as the strategic alternative to embedded wallets.

| Slug | Title |
|---|---|
| [[agent-economy/solana-saga-seeker-mobile-stack-overview\|solana-saga-seeker-mobile-stack-overview]] | Solana Saga / Seeker · mobile-native wallet stack (SMS overview) |
| [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis\|solana-saga-vs-embedded-wallet-os-thesis]] | Solana SMS vs Embedded Wallet · OS-layer vs App-layer paths |

## Skill / monetization layer

The application + governance layer above the protocols — how skills monetize and whether agents have legal standing at all.

| Slug | Title |
|---|---|
| [[agent-economy/claude-code-extension-architecture\|claude-code-extension-architecture]] | Claude Code extension architecture — infrastructure layering for the agent ecosystem |
| [[agent-economy/skill-market-monetization\|skill-market-monetization]] | Skill market monetization |
| [[agent-economy/agent-actorship-debate\|agent-actorship-debate]] | Agent actorship debate · four camps |

## Research control

When expanding this domain:

1. Source protocol-spec claims from the protocol's own repo / EIP / RFC first (x402.org, AP2 GitHub, eips.ethereum.org). Treat blog posts as commentary, not spec.
2. Separate the four layers cleanly: **intent / mandate** (AP2), **transport** (x402), **wallet permission** (ERC-7715), and **execution** (ERC-4337 / ERC-7702). A single page should pick one layer.
3. Wallet-operator claims (Privy, Coinbase CDP) should be sourced from their docs, not from VC press releases.
4. Skill / monetization claims should distinguish *current* pricing from *announced* pricing — the market is moving every quarter.
5. Keep stablecoin and chain-rail claims in [[fintech/INDEX|fintech]], not here.

## Related domains

- [[fintech/INDEX|fintech INDEX]] — stablecoin issuers, neobanks, and crypto-native finance that the agent rails settle into.
- [[INDEX|FinWiki index]] — top-level navigation.
- [[business/INDEX|business INDEX]] — strategic case studies of the people running the agent / crypto buildout (Paolo Ardoino, Matt Huang, Larry Fink, Christine Moy).
- [[security/INDEX|security INDEX]] — bytecode forensics and supply-chain audit framing that applies to agent-callable contracts.

## Backlog

| Priority | Page | Why |
|---|---|---|
| P1 | `agent-economy/erc-4337-account-abstraction-primer.md` | Foundation for ERC-7715, currently linked but not anchored in-domain. |
| P1 | `agent-economy/erc-7702-eoa-delegation-primer.md` | Companion to ERC-7715; needed to explain the EOA-side path. |
| P2 | `agent-economy/stripe-agent-toolkit-position.md` | Stripe's own agent SDK now competes with x402 transport-layer claims. |
| P2 | `agent-economy/visa-mastercard-agentic-commerce-pilots.md` | Card-network agentic commerce pilots as the closed-loop counterweight to AP2 / x402. |

## Sources

- x402.org — protocol homepage and reference.
- github.com/google-agentic-commerce/AP2 — Google Agent Payments Protocol spec.
- eips.ethereum.org/EIPS/eip-7715 — Wallet Permissions EIP.
- eips.ethereum.org/EIPS/eip-4337 — Account abstraction via entry point.
- eips.ethereum.org/EIPS/eip-7702 — EOA delegation primitive.
- docs.privy.io — Privy embedded wallet docs.
- docs.cdp.coinbase.com — Coinbase CDP developer platform docs.
- solanamobile.com — Solana Mobile / Saga / Seeker.
- docs.anthropic.com/en/docs/claude-code — Claude Code extension architecture reference.

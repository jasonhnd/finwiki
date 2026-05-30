---
source: agent-economy/privy-aws-agentcore-default-wallet
source_hash: e378cbc771a5fd8e
lang: en
status: machine
fidelity: ok
title: "Privy x AWS Bedrock AgentCore · Default-wallet positioning in the AI agent economy"
translated_at: 2026-05-30T17:31:02.642Z
---

# Privy x AWS Bedrock AgentCore · Default-wallet positioning in the AI agent economy

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2026-05-07 AWS Bedrock AgentCore Payments released ^[extracted]
- Default wallet providers: Privy (a Stripe subsidiary) + Coinbase CDP in parallel ^[extracted]
- Explicitly not on the default list: Circle / Arc / Anchorage ^[extracted]
- Deployment regions: US East / US West / EU Frankfurt / APAC Sydney ^[extracted]
- Protocols: x402(HTTP 402) + x402 Bazaar MCP (10,000+ endpoints) ^[extracted]
- Coinbase / Stripe = AWS's strategic alliances (Stripe is a major AWS customer) ^[extracted]
- Circle / Coinbase have walked separate paths ever since they dissolved the Centre Consortium in 2023  ^[extracted]

## Mechanism / How it works

AWS Bedrock AgentCore is AWS's AI agent orchestration platform, and the Payments module handles an agent paying external APIs when executing a task. Selecting the default wallet provider is essentially a single platform-side decision that determines the wallet affiliation of millions of agents. As a Stripe subsidiary, Privy can directly connect Stripe Connect's 5M merchant receiving side to agent payments (a key positioning point for [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]). Coinbase CDP is Coinbase's own wallet service, integrated with [[fintech/usd-stablecoin-interchange|USDC settlement]] on Base. The 2  are "parallel" but hold advantages over each other in different regions / different use cases — Privy is strong on Web2 integration, Coinbase CDP is strong on the onchain-native experience. The fundamental reason Circle is not on the default list: since Coinbase and Circle split in 2023 , AWS's Coinbase partnership has made it hard for Circle to coexist on the default list. Anchorage is an issuer, not a wallet provider, so its category position is misaligned.

## Origin & evolution

2024 AWS launched the Bedrock platform, anchored on models from Anthropic + Mistral and others. In 2025 H2 AWS decided to add the Agent Payments module, and wallet-provider selection became a key decision. 2026-Q1 internal negotiations: Stripe (a major AWS customer) + Coinbase (an AWS-region service customer) pushed for Privy / CDP, and Circle, lacking a strategic relationship with AWS, was excluded. 2026-05-07 release: Privy + Coinbase CDP were embedded in parallel. Both USDB (the stablecoin Stripe issues on Base) and USDC are usable on AgentCore, but which stablecoin system the default-wallet choice effectively leans toward will gradually become apparent (for the strategic-space analysis see [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]]). Circle's 2026-Q2 reaction: it announced its own Agent Wallets (Circle Agent Stack), taking an SDK independent-deployment path rather than becoming an AWS default.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy 総覧]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS エッジ統合]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Privy docs — https://docs.privy.io/

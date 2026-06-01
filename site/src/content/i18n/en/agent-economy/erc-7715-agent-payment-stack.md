---
source: agent-economy/erc-7715-agent-payment-stack
source_hash: 9397cf2ee13c7394
lang: en
status: machine
fidelity: ok
title: "ERC-7715  and the agent payment stack · x402  + AP2  + 4337/7702  coordination"
translated_at: 2026-05-30T17:04:08.793Z
---

# ERC-7715  and the agent payment stack · x402  + AP2  + 4337/7702  coordination

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- x402  handles the payment handshake at the HTTP layer (driven by Cloudflare/Coinbase/AWS) ^[extracted]
- AP2 / MPP / ACP handle the negotiation metadata between agents ^[extracted]
- ERC-7715  handles authorization from wallet to agent ^[extracted]
- ERC-4337 / 7702  provide the foundation for programmable wallets ^[extracted]
- Major players: MetaMask Snaps / Coinbase Smart Wallet / Safe / Privy / Pimlico / ZeroDev ^[extracted]

## Mechanism / How it works

**4-layer stack architecture**:

| Layer | Protocol | Role |
|---|---|---|
| **HTTP** | x402 | The API returns 402 + payment instructions · the client retries after completing payment |
| **Agent negotiation** | AP2 / MPP / ACP / A2A | mandate / intent metadata standards |
| **Wallet authorization** | ERC-7715 | Grants scoped permission to the agent · one authorization, multiple uses |
| **Wallet foundation** | ERC-4337 / 7702 | Programmable wallets (see [[systems/erc-4337-overview|ERC-4337]] and [[systems/erc-7702-overview|ERC-7702]]) · supports module / delegation |

**Typical agent auto-payment flow**:
1. The user authorizes the agent "may pay up to $5  per day to the vercel.com API" (7715  scoped permission)
2. The agent calls the Vercel API · Vercel returns HTTP 402  + USDC payment instructions (x402)
3. The agent automatically draws $0.50  USDC from the wallet and settles (within 7715  scope · no user signature needed)
4. Vercel verifies the payment · returns the API response
5. The user confirms in the wallet UI that a cumulative $X.XX has been paid to Vercel that day · the permission can be revoked at any time

**Potential of Stripe Privy integration**: Stripe is already connected to [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] via Privy (already acquired). Once Stripe + Privy + 7715  + AP2  are integrated · **any SaaS can accept auto-payment from an agent** · no credit-card number, no OAuth, no subscription management needed — migrating the SaaS billing layer from Stripe Billing (card-based) to on-chain permission (address + scope-based). For details see [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]].

**Division of labor among major players**:
- **MetaMask Snaps**: implements 7715  in 2025  · EOA + 7702  dual mode
- **Coinbase Smart Wallet**: native support · integrated with the Coinbase Agent SDK
- **Safe{Core}**: implemented in Module form · institutional multi-sig + sub-permissions
- **Privy**: integrates 7715  + AP2  · Stripe agent-payment scenarios
- **Pimlico / ZeroDev**: provide 7715  ↔ 4337  bundler middleware
- **Tempo / Arc**: potential adopters — the agent economy is the core narrative
- **JPM Kinexys**: not participating — a permissioned network · its permission model uses a proprietary standard

## Origin & evolution

The concept of the agent payment stack took shape gradually over 2024-2025  — initially each protocol (x402 / AP2 / 7715) was driven by a separate team, but deliberate coordination began from the second half of 2025 . The "native agent payment" demo that Coinbase Smart Wallet unveiled in 2025  was the decisive proof-of-concept event, demonstrating the end-to-end operation of the 4-layer stack.

Stripe's acquisition of Privy (2024) is the first case of a Web2  payment giant betting explicitly on the on-chain permission model. The first production-grade agent SaaS integration cases are expected to appear over 2026-2027 .

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-overview|ERC-7715 Overview]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Smart Wallet agent payment demo(2025)
- ERC-7715 (Request Permissions from Wallets) — https://eips.ethereum.org/EIPS/eip-7715

---
source: agent-economy/ap2-technical-spec
source_hash: fff23aa6c7bccbbe
lang: en
status: machine
fidelity: ok
title: "AP2  technical specification · Mandate · Payment Intent · Settlement Adapter"
translated_at: 2026-05-30T17:04:08.784Z
---

# AP2  technical specification · Mandate · Payment Intent · Settlement Adapter

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概観]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- The Authorization Mandate uses the W3C Verifiable Credential format ^[extracted]
- Items included in the mandate scope: amount, merchant category, time window (typically 24h), and an optional address restriction ^[extracted]
- Wallet Adapter abstraction layer: the same mandate can route to Google Pay (card) or USDC (via Coinbase Onchain Kit) ^[extracted]
- The Risk Score is computed by Google fraud detection AI, with merchants customizing the threshold ^[extracted]
- The audit trail is written back to the user's Google account, verifiable by multiple parties — user/merchant/regulator ^[extracted]

## Mechanism / How it works

Typical flow (5  steps):

1. The user tells Gemini "book me a flight next Sunday, budget $800"
2. Gemini issues an Authorization Mandate (scope: airline category / limit: $800  / expire: 24h)
3. Gemini calls the airline API and submits a Payment Intent (referencing the mandate)
4. The airline verifies the mandate + settles via the AP2  settlement adapter (Google Pay or USDC)
5. The audit trail is written back to the user's Google account

The Wallet Adapter is AP2 's key abstraction — neither the mandate nor the intent is bound to a concrete settlement rail, and the merchant only needs to integrate 1  AP2  API(s) to simultaneously accept card payments and stablecoin payments (see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]). This differs in route from the x402  protocol (explicitly USDC-first): **AP2  is "rail-neutral"** · x402  is "USDC-native". Cross-chain USDC settlement requires coordination between [[systems/cctp-v2-overview|CCTP V2]] and [[systems/chain-abstraction-pattern-overview|chain abstraction]].

## Origin & evolution

The W3C Verifiable Credentials standard itself has been advanced continuously by the W3C since 2019 , with Google as a core contributor. AP2 's spec design directly borrows the VC model as the mandate container, inventing no new authorization object — this lowers the integration cost with the existing identity/DID ecosystem (Microsoft Entra Verified ID, Decentralized Identity Foundation, etc.).

2025-09  draft → 2026-Q1  v1.0; during this period the main adjustments concentrated on the settlement adapter interface and the risk score schema.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[systems/cctp-v2-overview|CCTP V2(USDC settlement ルーティング)]]
<!-- /wiki-links:managed -->

## Sources

- W3C Verifiable Credentials Data Model
- Google AP2 spec v1.0
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

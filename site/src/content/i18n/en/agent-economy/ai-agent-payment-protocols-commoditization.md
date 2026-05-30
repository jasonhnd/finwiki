---
source: agent-economy/ai-agent-payment-protocols-commoditization
source_hash: 49438a71ac5ef654
lang: en
status: machine
fidelity: ok
title: "Commoditization of Agent payment protocols and the upward migration of value"
translated_at: 2026-05-30T16:40:11.496Z
---

# Commoditization of Agent payment protocols and the upward migration of value

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- Stripe 5 stack = Tempo (L1) + Privy (wallet) + USDB / Bridge (stablecoin) + Stripe Checkout (SDK) + 5M+ merchants (traffic) ^[extracted]
- Privy was acquired by Stripe in 2025 , positioned as the default for embedded wallets ^[extracted]
- Coinbase is the contrasting route: Base (L1) + CDP (wallet) + USDC (currency) + Commerce (SDK) ^[extracted]

## Mechanism / How it works

After protocol commoditization, take rate cannot be extracted from an open-source standard (one cannot levy an HTTP-protocol fee). Value capture is forced to migrate upward to **vertical distribution control points**: whoever controls the [[fintech/embedded-wallet-fintech-disintermediation-overview|wallet 中抜き]] of user login → controls the agent's default payment path → levies the transaction fee.

The logic of Stripe's 5-stack full stack:
1. **L1  chain** (Tempo · Stripe + Paradigm) — payment-optimized chain, 7-10  validators, institutional-grade credentials
2. **L2  / wallet** (Privy · acquired by Stripe) — [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|埋込 wallet デフォルト]], embedded in the checkout of 5M+ Stripe merchants
3. **Stablecoin** (USDB / Bridge · under Stripe) — native settlement currency (see [[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]])
4. **SDK** (Stripe Checkout / Connect) — zero-code embedding on the merchant side
5. **Merchant traffic** (5M+ merchants) — actual control of end-point distribution

With each layer added, the vertical dominance deepens — the larger the protocol as a public good, the stronger Stripe's private-good network effect.

## Origin & evolution

2024 Stripe acquired Bridge (USDB issuer) → entered the stablecoin layer. 2025.04 Stripe + Paradigm jointly established Tempo (payment L1) → occupied the chain layer. 2025.07 Stripe acquired Privy → occupied the wallet layer. 2025.09 At the AP2 launch, Stripe was not on the 60+ partner roster — Stripe's strategy is explicitly to "not participate in the protocol-hegemony contest, and only occupy distribution." After FIDO took over AP2  → became AAIF in mid-2026 年, Stripe's 5-stack full-stack position became essentially unchallengeable.

Analogy: Visa / Mastercard do not write the ISO 8583 protocol spec either, yet they still capture the bulk of payment value — **the protocol is a public good, distribution is a private good** (see [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|プロトコル分層表]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## Sources

- Privy "Privy and Stripe: Bringing crypto to everyone" (Stripe's acquisition of the wallet layer) — https://privy.io/blog/announcing-our-acquisition-by-stripe
- Tempo official website (Stripe + Paradigm's payment L1 · chain layer) — https://tempo.xyz/
- Coinbase Developer Platform (contrasting route Base + CDP + USDC + Commerce) — https://docs.cdp.coinbase.com/
- Coinbase x402(public-good commoditization of the protocol layer) — https://github.com/coinbase/x402
- Google AP2(contrast in protocol hegemony · Stripe does not participate) — https://github.com/google-agentic-commerce/AP2

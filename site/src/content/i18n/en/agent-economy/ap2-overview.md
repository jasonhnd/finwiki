---
source: agent-economy/ap2-overview
source_hash: fbcc222dc6bf2174
lang: en
status: machine
fidelity: ok
title: "AP2  · Google Agent Payments Protocol overview"
translated_at: 2026-05-30T17:04:08.783Z
---

# AP2  · Google Agent Payments Protocol overview

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/ap2-adoption|AP2 採用版図 · Google 閉ループ vs プロトコル四国大戦]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- AP2  v1.0  was released in 2026-Q1  ^[extracted]
- Together with MPP (Microsoft), ACP (Anthropic), x402 (Cloudflare/Coinbase/AWS), and A2A (Linux Foundation), it constitutes the **agent economy's "payment protocol four-kingdoms war"** ^[extracted]
- The core question: **when an AI agent pays on a user's behalf, how does the merchant confirm the agent is genuinely authorized?** ^[extracted]
- The settlement layer is neutral: Google Pay / card networks / USDC (via Coinbase) / bank instant rails are all viable ^[extracted]
- The entire process is based on the W3C Verifiable Credentials standard ^[extracted]

## Mechanism / How it works

AP2  extends the traditional user-merchant two-party payment into a user-agent-merchant three-party structure, introducing 4  core components:

1. **Authorization Mandate** — a verifiable credential issued by the user that defines the scope (amount, merchant category, time window) the agent may spend within
2. **Payment Intent** — the payment intent the agent submits to the merchant, referencing the mandate
3. **Settlement Channel** — can route through any of Google Pay, card networks, stablecoin (USDC via Coinbase · see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]), or bank instant rails
4. **Audit Trail** — the entire process is verifiable, based on the W3C VC standard

3  core tensions: the authorization boundary (how much spending authority does the user grant the agent? is re-confirmation needed each time?), identity trustworthiness (how does the merchant know this agent genuinely represents the user?), and dispute resolution (when the agent acts in error, who bears responsibility?).

## Origin & evolution

In 2025-09  Google first published the AP2  draft, reaching the v1.0  stable release in 2026-Q1 . The background: after the AI agent economy rose, traditional payments assumed a user-merchant two-party structure and could not handle the "agent pays on behalf" scenario. Google, holding both Google Pay (the world's 2 位-largest mobile wallet · 6 億 users) and the Gemini agent (hundreds of millions of touchpoints), became the natural occupant of this gap (contrast with [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]]).

On the timeline, it appeared almost contemporaneously with MPP / ACP / x402  / A2A — the standardization of agent payments is a parallel product under the 2025-2026  industry-consensus pressure.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-technical-spec|AP2 Technical Spec]]
- [[agent-economy/ap2-adoption|AP2 Adoption]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2 spec(2026-Q1 v1.0)
- Google AP2 (Agent Payments Protocol) — https://github.com/google-agentic-commerce/AP2

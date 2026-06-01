---
source: fintech/stripe-usdb-bridge-stablecoin
source_hash: ae5aefe234acc514
lang: en
status: machine
fidelity: ok
title: "Stripe USDB · Bridge Payment company stablecoin after acquisition · Tempo L1 + Agent Payment carrier"
translated_at: 2026-05-31T11:13:44.924Z
---

# Stripe USDB · Bridge Payment company stablecoin after acquisition · Tempo L1 + Agent Payment carrier

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/circle-usdc-stablecoin|Circle USDC]] and [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] for the payment-company-branded stablecoin trio, and with [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Embedded Wallet Fintech Disintermediation Stripe Trojan Horse]] for the L3 position of USDB in Stripe's vertical stack.

> [!info] TL;DR
> Stripe acquired Bridge, the USDB issuer, for approximately **$1.1B** in 2024-10; began integrating USDB into the Stripe Connect / Checkout backend in 2025-Q2; and completed wallet-stack integration with [[agent-economy/privy-embedded-wallet-overview|Privy]] in 2026-Q1 after the separate 2025-06 Privy acquisition. USDB circulation was approximately **$800M+** in 2026-Q2, with Stripe merchant settlement as the primary use case.

## Key facts

- USDB Distribution **$800M+** (2026-Q2) Main chain Ethereum + Base + Schedule Tempo L1 ^[extracted]
- Issuer: Bridge Inc. (wholly owned subsidiary of Stripe, 2024-10 acquisition, ~$1.1B cash + stock) ^[extracted]
- Reserves: 100% short-term government bonds + next day repo · Some are held through [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] and get yield ^[extracted]
- Monthly attestation: BPM LLP (an auditing firm different from USDC)^[extracted]
- Stripe's Strategic Acquisition 2 items 2024-2025: Bridge $1.1B + Privy $1.1B = **$2.2B Strategic Vertical Integration** ^[extracted]
- Tempo L1: Stripe + Paradigm led, 2025-09 public, 2026-Q1 testnet, goal is EVM-compatible + sub-second + USDB native ^[extracted]
- USDB cross-border use case: Stripe merchant storage → USDB automatic position → to target country in 5 seconds (vs SWIFT 3 days + $25 fee)^[extracted]
- Agent Settlement: USDB is a recommended clearing asset in x402 / AP2 , default integrated into Stripe agent toolkit ^[extracted]

## Mechanism / How it works

USDB core differentiation: it does **not** chase open DeFi liquidity, where USDC is strongest, and does **not** pursue a retail consumer brand like PYUSD or RLUSD. It focuses instead on an automatic stablecoin rail inside Stripe's 5M+ merchant backend, where merchants do not need to notice that stablecoins are involved. This connects to [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Embedded Wallet Fintech Disintermediation]].

Fundamental contrast between USDB and [[fintech/circle-usdc-stablecoin|USDC]]: **USDC is an “open white circle”—any wallet, any chain, any issuer can integrate, and Circle provides a neutral bridge for burn-and-mint through CCTP; USDB is a “closed white circle”—it only circulates within the Stripe stack, with Stripe controlling the full stack of issuance + chain + wallet + checkout**. This difference makes USDB a “winner-takes-all” player in the Stripe merchant scene, but almost no penetration in the cross-stack scene (non-Stripe merchants). In the economic model, Stripe takes in the reserve yield of 100% (vs Circle × Coinbase’s 50-50, vs Paxos × PayPal and gives 80-90% to PayPal) —— Stripe does not require distribution incentives because all distribution channels are self-employed ([[fintech/protocol-hedge-strategy-stripe-pattern|Stripe protocol hedge strategy]]).

Agent settlement side: USDB is a settlement asset recommended by [[agent-economy/x402-http-payment-overview|x402]] HTTP-native payment protocol, Stripe agent toolkit (2025-09 published) completes micropayments per call via USDB + Privy by default. This expands USDB from “merchant payments” to “clearing assets for the agent economy” and directly competes with USDC’s native position in the agent scene ([[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]).

## Origin & evolution

Founded 2022 Bridge (Coinbase/Square alumni Sean Yu/Zach Abrams, goal is to "simplify corporate cross-border payments with stablecoins"). 2023 Bridge completes Sequoia lead financing and launches Bridge Orchestration API (cross-chain stablecoin conversion). **2024-10 Stripe acquires Bridge for ~$1.1B cash + stock** = One of the largest M&A in the crypto space at the time, Stripe publicly stated, "we believe stablecoins are the future of payments." 2024-Q4 Bridge USDB circulation $200M → 2025-Q4 $800M (driven by Stripe integration). **2025-06 Stripe acquires Privy for ~$1.1B** → Completed double default of L4 wallet + L3 stablecoin. **2025-09 Tempo L1 Publication** (Stripe + Paradigm, [[systems/bft-validator-economy-overview|BFT validator economy]] based EVM-compatible PoS), 2026-Q1 testnet, 2026-Q3 mainnet planned. 2026-Q1 Stripe agent toolkit adopts USDB + Privy + x402 by default, forming agent payment dual-track competition with [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa/MA agentic commerce]]. **USDB has launched a “Vertical Stack Closed White Circle” model**: in parallel with [[fintech/circle-usdc-stablecoin|USDC]] (Open White Circle) and [[fintech/jpmorgan-jpmd-coin|JPMD]] (Bank TD), representing the third compliance pathway after the GENIUS Act §501 .

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Embedded Wallet Fintech Disintermediation Stripe Trojan Horse]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe protocol hedge strategy]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment protocol]]
- [[agent-economy/ap2-overview|AP2 Agent Payments Protocol]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

- https://stripe.com/newsroom/news/stripe-acquires-bridge — Stripe official acquisition announcement (2024-10)
- https://stripe.com/use-cases/stablecoins — Stripe stablecoin use case page
- https://www.bridge.xyz/ — Bridge (Stripe subsidiary) homepage
- https://tempo.xyz/ — Tempo L1 homepage
- https://www.paradigm.xyz/2025/09/announcing-tempo — Paradigm Tempo public explanation
- https://stripe.com/newsroom/news/usdb — USDB product page (after Stripe integration)

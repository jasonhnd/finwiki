---
source: fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse
source_hash: e66ac48a1c9d0785
lang: en
status: machine
fidelity: ok
title: "Embedded Wallet · Fintech Eating Web3  in Reverse as a Trojan Horse (Stripe Five Layers)"
translated_at: 2026-05-31T06:16:15.694Z
---

# Embedded Wallet · Fintech Eating Web3  in Reverse as a Trojan Horse (Stripe Five Layers)

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Embedded wallets are not Web3  penetrating Fintech — they are the reverse: **Fintech embeds crypto in the backend · turns 5M+ merchants into crypto entry points · users do not need to "become crypto users."** The Stripe five-layer collapse (L5  Checkout → L4  Privy → L3  Bridge USDB → L2  Tempo → L1  AP2/x402) is the sample architecture for this reverse disintermediation · Privy holds the bridgehead at L4 .

## Key facts

- Stripe 5M+ merchants = distribution ceiling for embedded wallets ^[extracted]
- Stripe simultaneously acquired Privy (L4) + Bridge (L3) in 2025.06  = $2.2B strategic spend ^[extracted]
- Tempo (L2) led by Stripe + Paradigm · launched 2025  ^[extracted]
- Cross-border payments USDC + Tempo = 5  seconds + ~0  fee (vs SWIFT 3  days + $25) ^[extracted]

## Mechanism / How it works

**5 -step process of Fintech eating Web3  in reverse**:

| Step | Traditional Fintech | Post embedded-wallet retrofit |
|---|---|---|
| Login | Stripe/PayPal account | Same login · wallet auto-created in the backend |
| Deposit | Fiat currency | Fiat + USDC invisible to user |
| Cross-border | SWIFT 3  days + $25  fee | USDC + Tempo 5  seconds · ~0  fee |
| Agent payment | Not supported | x402  + AP2  per-call USDC |
| Revenue distribution | Monthly settlement | Real-time stablecoin |

→ Users do not need to "become crypto users" · Fintech embeds crypto in the backend · merchants do not need to care about the underlying chain.

**Stripe five-layer collapse architecture**:

- **L5  Application**: Checkout · Connect · 5M+ merchants · Stripe's existing territory
- **L4  Wallet**: [[agent-economy/privy-embedded-wallet-overview|Privy]] · embedded default · transparently gives L5  merchants a crypto entry point
- **L3  Stablecoin**: Bridge · USDB · provides the holding + transfer carrier for L4  wallet layer
- **L2  Chain**: Tempo · delivers speed + compliance for L3  stablecoin
- **L1  Agent protocol**: [[agent-economy/ap2-overview|AP2]] / [[agent-economy/x402-http-payment-overview|x402]] · agents autonomously coordinate the full L2-L5  stack

Privy is the Trojan horse at L4  — L4  is the only layer users directly touch · controlling L4  = controlling user identity + spending patterns + agent permissions = equivalent to Microsoft controlling the Windows OS in the 80 s.

## Origin & evolution

2010-2020  = Stripe establishes L5  payment SaaS benchmark. 2021-2023  = tests the waters with crypto (USDC deposits) · but still dependent on L5  + third-party bridge. 2025.06  = simultaneous acquisition of Privy + Bridge · vertical integration strategy made explicit. 2025-2026  Tempo launches · L2  also brought in-house · five-layer collapse begins. 2026-2027  forecast = 5-10% of 5M+ merchants switch to USDC + Tempo · this is the leading indicator.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|組込み型ウォレット脱仲介化 · 概観]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 加密文化の分離]]
<!-- /wiki-links:managed -->

## Sources

- Stripe Privy / Bridge acquisition announcement (2025.06) · Tempo launch announcement

---
title: Mastercard Agent Pay for Machines · AP4M machine-speed agent settlement
aliases:
  - mastercard-agent-pay-for-machines
  - mastercard-ap4m
  - agent-pay-for-machines
  - ap4m
domain: agent-economy
created: 2026-07-04
last_updated: 2026-07-04
last_tended: 2026-07-04
review_by: 2026-10-02
confidence: likely
tags: [agent-economy, mastercard, agent-pay, ap4m, machine-payments, micropayments, stablecoins, settlement]
sources:
  - https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html
  - https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay/agent-pay-for-machines.html
  - https://www.coindesk.com/business/2026/06/10/mastercard-prepares-for-a-future-where-ai-agents-make-payments-with-latest-introduction
status: active
---

# Mastercard Agent Pay for Machines · AP4M machine-speed agent settlement

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] as Mastercard's machine-to-machine complement to its consumer-facing Agent Pay program. Read it against [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] for the card-network pilot layer, [[agent-economy/ap2-overview|AP2]] for mandate-style authorization, [[agent-economy/x402-http-payment-overview|x402]] for HTTP-native micropayments, and [[agent-economy/stablecoin-routing-agent-transactions|stablecoin routing for agent transactions]] for the multi-rail settlement angle.

## Key facts

- Mastercard announced Agent Pay for Machines (AP4M) on 2026-06-10 as a service for always-on, machine-speed agent and machine payments. ^[extracted]
- Mastercard says AP4M is designed for high-frequency, low-latency, low-value payments, including payments that are only fractions of a cent. ^[extracted]
- The service builds on Mastercard Agent Pay, introduced in 2025, but targets automated micro- and machine-driven transactions that run continuously in the background. ^[extracted]
- AP4M supports credentialing, permissioning, transacting, and guaranteed multi-rail settlement across cards, accounts, and stablecoins. ^[extracted]
- Mastercard named more than 30 initial participants and supporters, including Adyen, Ant International, Checkout.com, Cloudflare, Coinbase, Global Payments, OKX, Polygon, Solana Foundation, Stripe, Tempo, Turnkey, and Utila. ^[extracted]
- Mastercard's product page describes upfront spending limits, on-chain smart-contract authorization, off-chain verifiable vouchers, and provider settlement in fiat or stablecoin. ^[extracted]
- CoinDesk reported that agent permissions and credentials were initially being recorded on Polygon, Solana, and Base blockchains. ^[extracted]
- AP4M is distinct from [[agent-economy/visa-mastercard-agentic-commerce-pilots|Mastercard Agent Pay pilots]] because its center of gravity is agent-to-agent / machine-to-machine economic activity, not only consumer agents buying from merchants. ^[inferred]

## Mechanism / How it works

AP4M treats machine commerce as a settlement and trust problem. A business gives an agent a defined task and funding method, sets permissions and spending limits, and records the authorization. The agent discovers providers, executes the task, and uses verifiable off-chain credentials or vouchers for high-frequency micro- and macro-payments. Service providers aggregate those payments and submit them for settlement, receiving preferred payout in fiat or stablecoin.

The four operating capabilities map to Mastercard's existing network strengths. Credentialing lets counterparties recognize verified agents. Permissioning keeps spending inside pre-set limits. Transacting lets verified participants connect across providers and execute continuous commerce. Settlement wraps the flow with Mastercard-backed payment assurance across cards, bank accounts, and stablecoins. That makes AP4M a card-network answer to [[agent-economy/x402-http-payment-overview|x402]]: both aim at small automated payments, but x402 starts from HTTP 402 and stablecoin proofs while AP4M starts from network credentials, spend controls, and guaranteed settlement.

The on-chain component is not the entire payment rail. Public reporting and Mastercard's own example point to on-chain authorization or credential state, while high-frequency execution can use off-chain cryptographic verification and aggregated settlement. That hybrid design is why AP4M belongs beside [[agent-economy/stablecoin-routing-agent-transactions|stablecoin routing]] rather than inside a single-chain stablecoin protocol.

## Origin & evolution

Mastercard introduced Agent Pay in 2025 for trusted AI agents participating in payments on behalf of consumers. AP4M, announced on 2026-06-10, extends the same agent-trust thesis into background machine commerce: agents paying for compute, content, logistics resources, hosting, imagery, data, and other services without a human clicking checkout for each transaction.

The timing matters. By mid-2026, [[agent-economy/x402-http-payment-overview|x402]] had framed HTTP-level paywalls and per-call API settlement as an agent-native pattern, while [[agent-economy/ap2-overview|AP2]] had framed verifiable mandates as the authorization layer. AP4M is Mastercard's attempt to keep the card-network and bank-account universe relevant in that same machine-speed space. Instead of leaving microtransactions to stablecoins alone, Mastercard wraps stablecoins, accounts, and cards inside a credentialed multi-rail service.

The launch partner list also signals a deliberately mixed ecosystem. Crypto-native participants such as Coinbase, Polygon, Solana Foundation, OKX, MoonPay, Rain, Ripple, and Skyfire sit next to PSPs and acquirers such as Adyen, Checkout.com, Global Payments, Getnet by Santander, and Stripe. That mix supports the inference that AP4M is not a pure card product; it is a network-governed routing layer for agent transactions that may settle through several rails.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/stablecoin-routing-agent-transactions|Stablecoin routing for agent transactions]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
<!-- /wiki-links:managed -->

## Sources

- Mastercard press release, "Mastercard launches Agent Pay for Machines to unlock super-fast, always-on payments" — https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html
- Mastercard product page, "Mastercard Agent Pay for Machines" — https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay/agent-pay-for-machines.html
- CoinDesk, "Mastercard prepares agentic commerce platform for a future where AI agents make payments" — https://www.coindesk.com/business/2026/06/10/mastercard-prepares-for-a-future-where-ai-agents-make-payments-with-latest-introduction

---
title: "[opinion] Stablecoin routing for AI agent transactions · which stablecoin actually settles agent payments"
source_entry: agent-economy/stablecoin-routing-agent-transactions.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Stablecoin routing for AI agent transactions · which stablecoin actually settles agent payments

> 出典エントリー: `agent-economy/stablecoin-routing-agent-transactions.md`

## Counterpoints

- **USDC dominance is policy-fragile.** A US regulatory action against Circle, a failure in the USDC reserve, or a Coinbase-Circle split (Centre Consortium dissolved in 2023) could shift the default. Stripe's parallel USDB rail is structurally hedged for this reason.
- **USDT may dominate informal agent rails for longer than US-centric analysis suggests.** USDT on Tron has the largest stablecoin float globally and dominates emerging-market remittance flows. AI agents serving non-US user bases may route through USDT regardless of the AgentCore default.
- **Multi-chain abstraction can fail under load.** CCTP v2 attestation latency can spike during chain congestion; cross-chain messaging layers have shown attack surface (Wormhole 2022, Multichain 2023). Fully abstracted multi-chain UX still inherits the underlying chain's failure modes.
- **Gasless paymaster economics are subsidized.** Coinbase Base Paymaster effectively subsidizes gas to drive Base adoption. If the subsidy structure changes, agent-payment economics on Base shift.
- **Issuer-aligned vertical stacks could fragment the agent-payment internet.** If Stripe-rail agents only pay in USDB, PayPal-rail agents only pay in PYUSD, and Coinbase-rail agents only pay in USDC, the stablecoin-routing question becomes a stablecoin-interop question — and the [[fintech/usd-stablecoin-interchange|interchange]] market becomes structurally larger than current estimates suggest.
- **Japan and EU regimes can force a different default.** Japan's [[exchanges/jp-cex-deposit-token-stablecoin-integration|EPI / deposit-token integration]] and the EU's MiCA stablecoin regime can force agents in those jurisdictions to use a different default stablecoin than USDC. AgentCore-style defaults are subject to jurisdictional override.

## Open questions

- Does CCTP v3 (or a successor) extend Circle's native USDC routing to additional non-EVM chains during 2026-2027?
- Does the x402 protocol formally support multi-stablecoin price quotation in a single response, or does USDC-default stay structural?
- Does the AP2 mandate-protocol layer encode stablecoin / chain choice as part of the cart-and-payment mandate?
- Does a hyperscaler agent platform formally support USDT as a default-tier settlement asset (and what does that imply for the underlying merchant acceptance question)?
- Does a US regulatory action force a wallet provider to refuse settlement on USDT or non-US stablecoins, splitting the agent-payment internet by stablecoin and jurisdiction?
- Does ERC-7715 wallet permissions evolve to standardize a "stablecoin allowlist" field that users can pre-configure?
- Does a real-world agent-payment outage during a chain-congestion event (CCTP attestation backlog, Base sequencer pause) trigger the first material agent-payment SLA litigation?

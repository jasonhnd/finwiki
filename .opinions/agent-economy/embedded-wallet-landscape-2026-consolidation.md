---
title: "[opinion] Embedded-wallet landscape 2026 · post-consolidation provider map"
source_entry: agent-economy/embedded-wallet-landscape-2026-consolidation.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Embedded-wallet landscape 2026 · post-consolidation provider map

> 出典エントリー: `agent-economy/embedded-wallet-landscape-2026-consolidation.md`

## Counterpoints

- **"Default" is not "exclusive."** AgentCore, Foundry, and Vertex all let developers swap the default-wallet SDK. Real share will be determined by inertia (do developers opt out?), not by the published default. If 30-50% of developers opt out, the duopoly thesis weakens.
- **Acquisition concentration risk cuts both ways.** Stripe owning Privy gives Privy distribution but also makes Privy a single point of regulatory or commercial-strategy failure. A regulator that breaks up Stripe (or a Stripe / Privy data-handling incident) hurts Privy disproportionately versus a neutral SDK.
- **Hyperscaler defaults can be re-bid.** Azure has explicitly bid for Stripe-rail business; GCP has not yet picked a Stripe-aligned default. The default lists are not stable yet.
- **Secondary-tier providers can survive by being non-substitutable.** Crossmint (fiat-funded NFT receipts) and Dynamic (embedded-meets-external bridging) occupy niches that the default-tier duopoly does not serve.
- **A long-tail "wallet of last resort" segment will survive.** MetaMask, Rabby, Frame, and Coinbase Wallet (the consumer wallet, distinct from CDP the SDK) all maintain large standalone user bases. The embedded-wallet category does not eliminate the standalone-wallet category.
- **Geopolitical fragmentation.** China, Japan, and EU agent-platform regimes may default to different wallet providers. Japan's [[exchanges/jp-cex-deposit-token-stablecoin-integration|CEX × deposit-token integration]] tilts wallet choice toward Japan-licensed providers in some regulated flows.

## Open questions

- Does Azure formalize a second default-tier wallet provider in 2026, and if so, which?
- Does GCP Vertex AI Agent Builder formally announce CDP as default, or does it remain ambiguous?
- Does any antitrust authority intervene in Stripe-Privy or the AWS-default selection?
- Does a Stripe competitor (Adyen, Block, PayPal) acquire Magic, thirdweb, or Dynamic to create a third default-tier candidate?
- Do EU MiCA + DMA "default" rules force AgentCore / Foundry / Vertex to expose wallet-provider choice screens?
- Does the [[agent-economy/ai-company-payment-landscape|AI-company payment landscape]] absorb wallet-vendor choice (i.e., does OpenAI / Anthropic ship a first-party agent wallet that bypasses both Privy and CDP)?
- Does a [[agent-economy/skill-market-monetization|skill-marketplace]] operator (Claude Code skills, OpenAI GPTs, etc.) make the wallet-vendor choice for its skill creators?

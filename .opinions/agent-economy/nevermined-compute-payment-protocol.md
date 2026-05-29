---
title: "[opinion] Nevermined · AI compute-payment protocol"
source_entry: agent-economy/nevermined-compute-payment-protocol.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Nevermined · AI compute-payment protocol

> 出典エントリー: `agent-economy/nevermined-compute-payment-protocol.md`

## Counterpoints

- **Marketplace network-effect risk** — provider catalogs cluster around the dominant aggregator; if x402 Bazaar wins, Nevermined registry becomes redundant
- **Smart-contract overhead** — escrow logic adds gas and latency vs pure x402 facilitator handshake; only worth it for multi-party splits
- **Compute-provider supply uncertain** — major cloud providers (AWS, GCP, Azure) unlikely to settle through a third-party escrow; Nevermined more relevant for long-tail providers
- **Royalty enforcement off-chain limits** — once the inference output leaves the gateway, royalty enforcement depends on contract terms, not protocol

## Open questions

- Does Nevermined consolidate with x402 Bazaar or stay as a competing registry?
- Will any major LLM provider (Anthropic, OpenAI, Mistral) accept per-inference micropayment over Nevermined rails?
- Where does institutional demand show up — enterprise procurement teams or individual builder workflows?
- Can Nevermined's royalty-split contracts hold up legally for cross-jurisdictional compute / data deals (see [[finance/multi-jurisdiction-identity-tax-leverage|multi-jurisdiction tax]] context)?

---
title: "[opinion] Lit Protocol PKP · Programmable Key Pairs for AI agents"
source_entry: agent-economy/lit-protocol-pkp-agent-keys.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Lit Protocol PKP · Programmable Key Pairs for AI agents

> 出典エントリー: `agent-economy/lit-protocol-pkp-agent-keys.md`

## Counterpoints

- **Lit node set is the trust root** — Lit Protocol is a 2nd-party network; if it goes down or splits, agent wallets stall
- **TEE attestation chain not yet bulletproof** — Lit relies on Intel SGX / AMD SEV which have had historical side-channel issues
- **Cross-chain UX still complex** — one PKP signs everywhere but the surrounding tooling (gas, RPC, indexing) is still chain-specific
- **Competing standards** — [[systems/erc-4337-overview|ERC-4337]] smart accounts + cross-chain account abstraction (chain-abstraction layer) may obsolete PKP's cross-chain advantage

## Open questions

- Does Lit Protocol get adopted as default for any major embedded-wallet operator (Privy / Magic / Dynamic) for cross-chain support?
- Will Lit Actions become an audit-target for AI agent compliance teams (since the JS in TEE is the actual policy enforcement)?
- How does Lit price PKP usage at agent-scale (millions of signs/day for active agents)?
- Will major chains (Solana / Aptos / Sui) deeper-integrate Lit PKP signing as a native account abstraction option?

---
title: "[opinion] MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions"
source_entry: systems/mev-flashbots-suave-order-flow-auction.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions

> 出典エントリー: `systems/mev-flashbots-suave-order-flow-auction.md`

## Counterpoints

- **Censorship-relay concentration** — OFAC-compliant relays dominate share; censorship-resistance Ethereum-ethos partially compromised
- **Builder centralization** — top 2-3 builders construct most blocks; new entrants face capital + infra moat
- **OFA fragmentation** — every aggregator runs its own OFA; user / agent has to pick or trust meta-aggregators
- **SUAVE adoption uncertainty** — flagship Flashbots project with strategic ambition but unclear timeline / adoption
- **MEV-resistance vs MEV-internalization debate** — should MEV be eliminated (e.g., via threshold encryption) or distributed transparently (current OFA route)?

## Open questions

- Does SUAVE deliver cross-chain MEV unification before fragmentation overwhelms efforts?
- How does threshold-encryption-based MEV elimination (research on encrypted mempools) compete with OFA-based MEV redistribution?
- Will agent / OFA penetration push public-mempool sandwich volume to zero on Ethereum + major L2s?
- How do non-EVM chains ([[systems/sui-aptos-move-l1-ecosystem|Sui / Aptos]], [[systems/solana-firedancer-validator-economics|Solana]]) handle MEV — do they converge with EVM patterns or develop independently?

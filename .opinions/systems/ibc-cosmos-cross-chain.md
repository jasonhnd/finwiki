---
title: "[opinion] IBC · Cosmos Inter-Blockchain Communication protocol"
source_entry: systems/ibc-cosmos-cross-chain.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — IBC · Cosmos Inter-Blockchain Communication protocol

> 出典エントリー: `systems/ibc-cosmos-cross-chain.md`

## Counterpoints

- **Operational complexity** — every new chain pair needs a light-client deployment + relayer; not as plug-and-play as LayerZero
- **Light-client gas cost on Ethereum** — Tendermint signature verification in Solidity is expensive; Eureka uses tricks but remains heavier than LayerZero / CCIP for high-frequency flows
- **Relayer economics** — IBC relayers are unpaid by default; production deployments depend on volunteer / subsidized relayers (analogous to [[systems/erc-4337-userop-bundler-flow|ERC-4337 bundler economics]])
- **Cosmos consensus assumption** — IBC inherits Tendermint BFT trust; chains with weak validator sets propagate that risk to connected counterparties

## Open questions

- Does IBC v2 / Eureka achieve material adoption on Ethereum or stay primarily a Cosmos-Ethereum bridge?
- Will the Cosmos Hub or another chain emerge as a dominant **liquidity hub** (analogous to Ethereum L1 in EVM)?
- How do IBC and [[systems/polkadot-xcm-parachain-messaging|Polkadot XCM]] compare in production for shared-security cross-chain flows?
- Will institutional adoption favor IBC's light-client trust model over [[systems/chainlink-ccip-institutional-messaging|CCIP's DON]] model for cross-chain settlement?

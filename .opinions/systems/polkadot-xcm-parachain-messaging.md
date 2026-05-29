---
title: "[opinion] Polkadot XCM · parachain messaging v3-v4"
source_entry: systems/polkadot-xcm-parachain-messaging.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Polkadot XCM · parachain messaging v3-v4

> 出典エントリー: `systems/polkadot-xcm-parachain-messaging.md`

## Counterpoints

- **Parachain slot economics** — slot auctions historically locked tens of millions in DOT; capital-inefficient vs Cosmos SDK + IBC where any team can spin up a chain
- **Limited DeFi liquidity** vs Ethereum / Solana / Cosmos — network effects on stablecoin / DEX liquidity favor incumbents
- **XCM complexity** — multi-location addressing and reserve-transfer semantics have a steep learning curve vs IBC's simpler ICS-20
- **JAM uncertainty** — long-term roadmap pivot raises questions about parachain investment returns and protocol direction
- **Shared-security boundary** — relay chain validator set is the trust root; if compromised, all parachains affected (vs IBC where compromise stays per-chain)

## Open questions

- Will JAM deliver in time to keep Polkadot relevant against Ethereum L2 + Cosmos mesh growth?
- Does Asset Hub achieve material stablecoin volume vs USDC on [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum]] or [[systems/cctp-v2-overview|CCTP-distributed USDC]]?
- Will institutional tokenization actually settle on Polkadot parachains, or default to [[systems/canton-overview|Canton]] / [[systems/hyperledger-besu-overview|Besu]] private chains?
- How does XCM v4 evolve vs [[systems/ibc-cosmos-cross-chain|IBC v2 / Eureka]] in cross-ecosystem messaging?

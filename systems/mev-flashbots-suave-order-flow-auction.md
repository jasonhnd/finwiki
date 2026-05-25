---
title: "MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions"
aliases:
  - "mev-flashbots-suave-order-flow-auction"
  - "MEV"
  - "Maximal Extractable Value"
  - "Flashbots"
  - "MEV-Boost"
  - "SUAVE"
  - "order flow auction"
domain: "systems"
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [systems, mev, flashbots, mev-boost, suave, pbs, order-flow-auction, agent-transactions, ethereum, l2]
status: active
sources:
  - "https://www.flashbots.net/"
  - "https://writings.flashbots.net/"
  - "https://github.com/flashbots"
  - "https://docs.flashbots.net/"
  - "https://ethresear.ch/"
---

# MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer]] for the broader crypto-economic-coordination context, [[systems/l2-agent-economics-arbitrum-base-op-comparison|L2 agent economics]] for the rollup-level MEV picture, and [[agent-economy/INDEX|agent-economy index]] for the agent-transaction-cost angle.

## Key facts

- **MEV (Maximal / Miner Extractable Value)** = value validators / sequencers can extract by reordering, including, or excluding transactions
- **Flashbots** (2020) introduced a private-transaction relay (MEV-Geth) and later **MEV-Boost** (post-Merge), splitting block-building from block-proposing on Ethereum
- **MEV-Boost adoption** post-Ethereum Merge (2022-09): >90% of Ethereum blocks now constructed via MEV-Boost (a form of out-of-protocol PBS — Proposer-Builder Separation)
- **SUAVE (Single Unifying Auction for Value Expression)** is Flashbots' next-gen architecture for cross-chain MEV / order-flow markets
- **Order-flow auctions (OFAs)** route user transactions to private channels where searchers compete to provide best execution; CoW Swap, UniswapX, 1inch Fusion are production examples
- For AI agents: MEV economics directly affect agent execution cost, slippage, and front-running risk

## MEV taxonomy

| MEV type | Mechanism | Example |
|---|---|---|
| **DEX arbitrage** | Cross-pool price difference | Uniswap ↔ Sushi spread, cross-DEX cyclic arb |
| **Liquidation** | Trigger underwater positions | Aave / Compound liquidation bots |
| **Sandwich** | Front-run + back-run user swap | Pumping then dumping around victim trade |
| **NFT sniping** | Front-run mint / sale | Detecting underpriced listings |
| **Backrunning** | Insert after a target tx without front-running | Less adversarial; often considered "good MEV" |
| **JIT (Just-In-Time) liquidity** | Add liquidity exactly before a large swap | Uniswap V3 / V4 specific |
| **Time-bandit / reorg** | Re-mine blocks to capture missed MEV | Largely mitigated post-Merge on Ethereum |

## Pre-Merge → Post-Merge architecture

```
Pre-Merge (PoW):
User tx ──► mempool ──► miner (chooses ordering) ──► block
                                  │
                          MEV extracted directly
                          by miners or via Flashbots bundles


Post-Merge (PoS) with MEV-Boost:
User tx ──► mempool (public OR private OFA)
             │
             ▼
       Builders compete to construct most profitable block
             │
             ▼
       MEV-Boost relay (e.g., Flashbots, BloXroute, Eden)
             │
             ▼
       Validator selects highest-paying block
             │
             ▼
       Validator proposes; block finalized
```

Key shift: **proposer (validator) is separated from builder**. Validators no longer need MEV-extraction expertise; sophisticated builders compete to construct the most profitable block and bid for inclusion.

## MEV-Boost numbers and dependencies

- **>90% of Ethereum blocks** built via MEV-Boost relays since 2023
- Major builders: **beaverbuild**, **rsync-builder**, **Titan**, **Builder0x69**, others
- Major relays: **Flashbots**, **BloXroute**, **Eden**, **Ultra Sound**, **Aestus**
- **Censorship concern**: some OFAC-compliant relays filter sanctioned addresses; Ethereum community pushed back via censorship-resistant relay diversification

This creates an **economic dependency** on relay operators and builders that resembles the dependency model in [[systems/erc-4337-userop-bundler-flow|ERC-4337 bundlers]] and [[systems/cctp-v2-overview|CCTP attestation]] — a centralization vector inside a nominally decentralized stack.

## SUAVE — what it is trying to be

**SUAVE** (Single Unifying Auction for Value Expression) is Flashbots' design for a **decentralized block-builder network** that:

- Operates as its own chain (SUAVE-chain) coordinating MEV across multiple destination chains
- Lets users / agents express preferences ("execute swap with max 1% slippage, route through best venue across all chains")
- Searchers and builders compete to fulfill preferences off the destination chain, settle on-chain
- Targets cross-chain MEV unification — currently fragmented across Ethereum L1, every L2, Solana, Cosmos, etc.

Status (2025-2026): SUAVE testnet live; production rollout in progress. Strategic bet: as cross-chain volume grows and rollups proliferate, fragmentation creates inefficiency that SUAVE-style unification can capture.

## Order-Flow Auctions (OFAs) for users / agents

OFAs route user transactions to a **private auction** where searchers compete to give the user the best execution:

| OFA | Mechanism | Use case |
|---|---|---|
| **CoW Swap** | Batch auction with coincidence-of-wants matching | Swap with MEV protection |
| **UniswapX** | Permit2 + signed orders, fillers compete | Aggregator + MEV protection |
| **1inch Fusion** | Resolver-based fill of signed orders | Same pattern |
| **MEV Blocker** | Direct mempool replacement | RPC-level protection |

For AI agents executing on-chain trades, OFAs offer **structural MEV protection** — instead of broadcasting to public mempool (sandwich risk), the agent signs an intent and a resolver competes to fill it.

## L2 / rollup MEV implications

On L2 rollups (Arbitrum, Optimism, Base, etc.), the **sequencer is the MEV extractor** by default — a centralized sequencer can extract all MEV that flows through. Decentralizing sequencers is an active research area:

- **Espresso, Astria** — shared-sequencer networks (some atop [[systems/eigenlayer-overview|EigenLayer AVS]])
- **PEPC / based rollups** — alternative architectures where L1 validators sequence
- **L2 OFAs** — per-rollup OFA deployments to channel MEV transparently

For AI-agent volume forecasting on [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum / Optimism]], MEV economics affect agent unit costs directly — sequencer revenue partly funded by MEV extraction is reflected in user fees.

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

## Related

- [[systems/INDEX]]
- [[systems/eigenlayer-overview]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/erc-4337-userop-bundler-flow]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base]]
- [[systems/solana-firedancer-validator-economics]]
- [[systems/sui-aptos-move-l1-ecosystem]]
- [[systems/bft-validator-economy-overview]]
- [[agent-economy/INDEX]]
- [[agent-economy/stablecoin-routing-agent-transactions]]
- [[INDEX|FinWiki index]]

## Sources

- flashbots.net for Flashbots project pages, MEV-Boost stats, and SUAVE documentation.
- writings.flashbots.net for research posts including PBS history.
- github.com/flashbots for MEV-Boost and SUAVE reference implementations.
- ethresear.ch for MEV-related research threads.
- Public MEV-Boost dashboards (e.g., mevboost.org-class trackers).

---
source: systems/mev-flashbots-suave-order-flow-auction
source_hash: e0b5cde8f11a859e
lang: en
status: machine
fidelity: ok
title: "MEV · Flashbots, MEV-Boost, SUAVE, order-flow auctions"
translated_at: 2026-07-28T22:03:26.809Z
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

```text
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
; major builders: **beaverbuild**, **rsync-builder**, **Titan**, **Builder0x69**, others
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

| OFA / channel | Publicly documented mechanism | Agent integration boundary |
|---|---|---|
| **CoW Protocol** | users sign intents; solvers compete in batch auctions and may use coincidence of wants | verify order validity, signing domain, solver result and settlement contract |
| **UniswapX** | Permit2-based signed orders are filled by competing fillers under the order's auction parameters | validate chain, nonce, deadline, reactor and output constraints |
| **1inch Fusion** | signed swap intent is resolved by eligible resolvers through the Fusion auction flow | verify resolver / API terms, auction parameters, allowance and settlement status |
| **MEV Blocker** | an RPC endpoint routes transactions away from the public mempool and uses a searcher / backrun flow | RPC availability and policy are an added dependency; signed transaction limits remain the user's responsibility |

Sources: ^[https://docs.cow.fi/] ^[https://docs.uniswap.org/contracts/uniswapx/overview] ^[https://help.1inch.io/en/articles/6800254-1inch-fusion-mode] ^[https://docs.mevblocker.io/]


For AI agents executing on-chain trades, OFAs offer **structural MEV protection** — instead of broadcasting to public mempool (sandwich risk), the agent signs an intent and a resolver competes to fill it.

## L2 / rollup MEV implications

On L2 rollups (Arbitrum, Optimism, Base, etc.), the **sequencer is the MEV extractor** by default — a centralized sequencer can extract all MEV that flows through. Decentralizing sequencers is an active research area:

- **Espresso, Astria** — shared-sequencer networks (some atop [[systems/eigenlayer-overview|EigenLayer AVS]])
- **PEPC / based rollups** — alternative architectures where L1 validators sequence
- **L2 OFAs** — per-rollup OFA deployments to channel MEV transparently

For AI-agent volume forecasting on [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum / Optimism]], MEV economics affect agent unit costs directly — sequencer revenue partly funded by MEV extraction is reflected in user fees.

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

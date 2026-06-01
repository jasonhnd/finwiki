---
source: systems/chain-abstraction-pattern-value-capture
source_hash: 6cc2bbf9ddefe017
lang: en
status: machine
fidelity: ok
title: "Cross-Chain Bridge Commoditization and the Upward Shift of Value to the Chain-Abstraction Layer"
translated_at: 2026-06-01T04:15:40.179Z
---
# Cross-Chain Bridge Commoditization and the Upward Shift of Value to the Chain-Abstraction Layer

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/chain-abstraction-pattern-overview|Chain-abstraction model overview: next-generation infrastructure where users do not need to notice the underlying chain]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2020-2023  cross-chain bridge profit range, 0.1-0.5% fees ^[extracted]
- 2024+ bridge technology maturity, profit compression, commoditization ^[extracted]

## Mechanism / How it works

**Evolution of the value hierarchy**:

| Layer | 2020-2023  value | 2024-2026  value |
|---|---|---|
| Cross-chain bridge | High (takes 0.1-0.5% fees) | Low (commoditized) |
| Chain abstraction | Nonexistent | High (UX + liquidity routing) |
| Intent layer | Nonexistent | Emerging (solver market) |

**Core mechanism**: Technology commoditization is the unavoidable fate of the infrastructure layer: every "standardized protocol" is implemented by multiple teams over the long term, and price converges to zero (the analogy is the HTTP protocol). But "user touchpoints" and "traffic control" are scarce resources: which wallet the user uses / inside which app the transaction happens / how the solver network chooses the optimal path. These are all touchpoints to which a take rate can attach.

**The intent solver market** is the new frontier: the user expresses "I want to swap USDC into 1 ETH" → multiple solvers bid to complete the route (single-chain / cross-chain / multi-hop) → the user pays a fee to the winning solver. This evolves the "take rate of cross-chain bridges" into "solver-market fees + routing take rate." NEAR Intents / CoW Protocol are early examples.

## Origin & evolution

2017-2019  Early cross-chain methods such as Atomic Swap / WBTC, without standardized protocols. 2020-2021  General-purpose cross-chain bridges such as Wormhole / Multichain / Axelar rose → an era of high fees + high TVL. 2022  Wormhole was attacked and suffered a $325M loss → cross-chain bridge risk became visible. 2023  Next-generation cross-chain architectures such as LayerZero / Hyperlane / Across rose → technical routes diversified, but fees compressed. 2024+ Cross-chain bridge profits compressed, and value shifted upward to the chain-abstraction layer. AggLayer / NEAR Intents / Across pivoted toward "chain abstraction + solver market." 2025-2026  Cross-chain bridge service providers shifted one after another: LayerZero now prefers to call itself "omnichain messaging infrastructure," not a "bridge" (see the latest slices of [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] and [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX cross-chain bridge deposit and withdrawal]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-overview|Chain-abstraction model overview]]
- [[systems/chain-abstraction-pattern-three-solutions|Three major mainstream approaches]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocol commoditization]]
<!-- /wiki-links:managed -->

## Sources

- Wormhole official documentation (general-purpose cross-chain messaging) — https://wormhole.com/docs/
- LayerZero v2  official documentation (shift to omnichain messaging) — https://docs.layerzero.network/v2
- Hyperlane official documentation (permissionless interoperability) — https://docs.hyperlane.xyz/
- Across Protocol smart contracts (intent-based next-generation bridge) — https://github.com/across-protocol/contracts
- NEAR Intents official documentation (intent solver market) — https://docs.near.org/chain-abstraction/what-is
- CoW Protocol smart contracts (early example of a solver bidding market) — https://github.com/cowprotocol/contracts

---
source: systems/chain-abstraction-pattern-overview
source_hash: 656833e295798ba6
lang: en
status: machine
fidelity: ok
title: "Chain Abstraction Model Overview"
translated_at: 2026-06-01T04:15:40.162Z
---

# Chain Abstraction Model Overview

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet 採用状況 · Privy/Coinbase/Alchemy/Safe]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Chain abstraction does not eliminate multichain; it makes multichain transparent to users ^[extracted]
- 3  major mainstream approaches: Polygon AggLayer / NEAR Chain Abstraction / EigenLayer restaking ^[extracted]
- Base + Coinbase Smart Wallet = the most mature current example of an "end-to-end chain abstraction" implementation ^[extracted]
- Regulation has not yet touched chain abstraction, but MiCA / GENIUS assume by default that "the user knows which chain they are on" ^[extracted]

## Mechanism / How it works

The core mechanism of chain abstraction is moving "chain selection" from user decision-making to the protocol layer. **3 -stage paradigm evolution**:
1. **Wallet awareness** (MetaMask era · 2017-2022): users manage mnemonics + select chains + switch chains
2. **embedded wallet** (Privy / Dynamic era · 2023-2024): users use email / social login, but chain selection is still required
3. **chain abstraction** (AggLayer / NEAR era · 2024-2026+): users do not know at all which chain they are on; the protocol routes automatically

**Base + Coinbase Smart Wallet example**: users log in by email and transact directly, without even knowing they are on L2 . This is a canonical end-to-end example of embedded wallet + chain abstraction. **Main tension**: chain abstraction conflicts with the "sovereign chain" narrative — institutional chains (Kinexys / Arc) want to bind users to their own chains and retain control, while users want chain selection abstracted away.

## Origin & evolution

In the 2017-2022  multichain era, users deeply felt the pain of chain switching (wallet switching / gas tokens / bridge risk). 2022-2023  Cross-chain bridges (Wormhole / LayerZero / Axelar) matured, but did not solve the UX problem. 2023 [[agent-economy/privy-embedded-wallet-overview|Privy]] / Dynamic / Magic and other embedded wallets appeared and solved private-key UX, but chain selection remained the user's responsibility (see [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]]). 2024.02 Polygon AggLayer v1  launch → the "shared liquidity + state" route. 2024.04 NEAR Chain Signatures + Intents → the "intent-driven + MPC multichain account" route. 2024.04 EigenLayer mainnet → the "shared security / restaking" route (security-layer abstraction). 2025-2026 3  approaches coexist, and chain abstraction becomes a new frontier for protocol value capture.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式 · AggLayer / NEAR / EigenLayer]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer official documentation (shared liquidity + unified bridge) — https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction official documentation (Chain Signatures + Intents) — https://docs.near.org/chain-abstraction/what-is
- EigenLayer official documentation (restaking / shared security) — https://docs.eigenlayer.xyz/
- Coinbase Developer Platform (Base + Smart Wallet end-to-end example) — https://docs.cdp.coinbase.com/
- LayerZero v2  official documentation (omnichain messaging) — https://docs.layerzero.network/v2

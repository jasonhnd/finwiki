---
source: systems/pectra-upgrade-overview
source_hash: b3c840c28ddb0bf7
lang: en
status: machine
fidelity: ok
title: "Ethereum Pectra Upgrade · 4 EIP Dual-Track Strategy Overview"
translated_at: 2026-06-01T04:15:40.147Z
---
# Ethereum Pectra Upgrade · 4 EIP Dual-Track Strategy Overview

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Mainnet activation in 2025-Q2  · the first case that upgraded the execution layer (EL) and consensus layer (CL) at the same time ^[extracted]
- EIP-7702  introduces SetCode tx · EOA can bind contract code in one step ^[extracted]
- EIP-7251  raises the validator balance cap from 32 to 2048 ETH (64×) · no impact on small holders ^[extracted]
- EIP-7691  blob target 3→6  · max 6→9  · L2  calldata cost -50% ^[extracted]
- EIP-2537  BLS12-381  precompile · AVS BLS verification cost -50% ^[extracted]

## Mechanism / How it works

Pectra modifies the execution layer and consensus layer at the same time. **EIP-7702** lets 9000 万 existing EOAs obtain batch / gasless / session key capabilities without changing addresses —— a different retrofit path from ERC-4337 . **EIP-7251** lets large staking operators (Lido / Coinbase Cloud / Binance) consolidate 1000  validators into 16 , reducing P2P network pressure + operating cost while also speeding up the validator exit queue; however, it also concentrates slashing single-point-of-failure risk. **EIP-7691** doubles the blob capacity introduced by Dencun, directly improving gas costs for Base / Arbitrum / Optimism users. **EIP-2537** adds a precompile for BLS signatures / aggregation, sharply reducing on-chain cost for SNARK verification + BLS aggregate signatures —— directly benefiting ZK rollup + EigenLayer AVS + cross-chain light clients.

## Origin & evolution

The Merge (2022-09) → Shapella (2023-04  withdraw unlock) → Dencun (2024-03  EIP-4844  blob) → Pectra (2025-Q2). In 2023-2024 , EIP-7702 / 7251 / 7691 / 2537  each completed ACD (All Core Devs) discussion on EthMagicians · the Pectra bundle was finalized in 2024-Q4 . After mainnet activation in 2025-Q2  · Base / Arbitrum / Optimism saw gas fall materially within weeks · Lido and Coinbase Cloud began validator consolidation · [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / MetaMask integrated EIP-7702  and provided UX for upgrading existing EOAs. The next major upgrade, Fusaka (planned for 2026-Q4 ), is expected to focus on further scaling through PeerDAS + Verkle Trees.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking 強化]]
- [[systems/pectra-eip-7691-blob-l2-impact|EIP-7691 blob 倍増の L2 影響]]
- [[systems/erc-4337-overview|ERC-4337 AA]]
- [[systems/erc-7702-overview|ERC-7702 EOA→SCW]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec
- EIP-7251 — https://eips.ethereum.org/EIPS/eip-7251
- EIP-7691 — https://eips.ethereum.org/EIPS/eip-7691
- EIP-7702 — https://eips.ethereum.org/EIPS/eip-7702

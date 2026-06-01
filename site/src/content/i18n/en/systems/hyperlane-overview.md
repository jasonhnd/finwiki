---
source: systems/hyperlane-overview
source_hash: db63457eb56f315c
lang: en
status: machine
fidelity: ok
title: "Hyperlane overview · Permissionless Cross-chain Interoperability"
translated_at: 2026-06-01T04:15:40.121Z
---
# Hyperlane overview · Permissionless Cross-chain Interoperability

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Permissionless deployment · anyone can fork + deploy ^[extracted]
- 50+ chains connected ^[extracted]
- Core innovation: Modular ISM (developers choose the verification method themselves) ^[extracted]
- Forms a "gated rollout vs permissionless" route split against LayerZero / CCIP ^[extracted]
- One of the first groups to support EigenLayer restaking ISM ^[extracted]

## Mechanism / How it works

Cross-chain messaging (arbitrary message passing, AMP) is the mainstream abstraction for interchain interoperability in 2024-2026 年. Differences in positioning among the three major players:

| Protocol | Deployment model | Verification method |
|---|---|---|
| **LayerZero** | Gated (team evaluates new chains) | DVN (Decentralized Verifier Network) · selectable on the app side |
| **Chainlink CCIP** | Heavily gated (Chainlink DON deploys) | OCR committee + RMN risk management |
| **Hyperlane** | **Permissionless** (anyone can fork + deploy) | **Modular ISM** · fully open |

**Hyperlane's bet**: long-tail chains, especially app-chains, cannot wait for approval from the LayerZero/CCIP teams and need self-serve connectivity. This aligns with the "one-click chain launch" trend across Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit and similar stacks — bridges also need to become permissionless.

**Main components**:
- **Mailbox**: unified send/receive contract deployed on each chain · standardizes the cross-chain message format
- **Interchain Security Modules (ISM)**: pluggable verification layer · developers choose themselves
- **Relayer**: permissionless · anyone can operate one, including an app's own relayer
- **Validators**: monitor the source chain · sign messages · submit to the destination

**Warp Routes**: Hyperlane's token bridge abstraction · supports 3  wrap modes, Native/Collateral/Synthetic · developers can deploy ERC-20  cross-chain with one click.

## Origin & evolution

Hyperlane was founded in 2021 年 by Asa Oines, Jon Kol, and others, former Celo team members. It was initially named Abacus and was renamed Hyperlane in 2022 年. The core bet is that "long-tail chains need permissionless bridges," forming a route split from LayerZero / CCIP's centralized deployment model.

From 2023-2025 年, it was gradually adopted by long-tail / app-chains such as Celestia / dYdX v4 / Injective / Sei / Berachain, and became the de facto standard for non-EVM (Cosmos / Solana / Move) ecosystems to connect to EVM (see [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]). After adding EigenLayer restaking integration in 2024 年, its cryptoeconomic security was inherited from Ethereum L1 .

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## Sources

- Hyperlane docs(docs.hyperlane.xyz)
- Hyperlane docs — https://docs.hyperlane.xyz/

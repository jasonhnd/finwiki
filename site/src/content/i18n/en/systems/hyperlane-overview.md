---
source: systems/hyperlane-overview
source_hash: 50a7162db02312b7
lang: en
status: machine
fidelity: ok
title: "Hyperlane Overview · Permissionless Cross-chain Interoperability"
translated_at: 2026-06-15T04:09:41.151Z
---

# Hyperlane Overview · Permissionless Cross-chain Interoperability

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Permissionless deployment · anyone can fork + deploy ^[extracted]
- 50+ chains already connected ^[extracted]
- Core innovation: Modular ISM (developers choose their own verification scheme) ^[extracted]
- Forms a "gated rollout vs permissionless" route split versus LayerZero / CCIP ^[extracted]
- One of the first groups to support an EigenLayer restaking ISM ^[extracted]

## Mechanism / How it works

Cross-chain messaging (arbitrary message passing, AMP) is the mainstream abstraction for inter-chain interoperability of 2024-2026 年. Differences in how the major protocols position themselves:

| Protocol | Deployment model | Verification scheme |
|---|---|---|
| **LayerZero** | Gated (the team evaluates new chains) | DVN (Decentralized Verifier Network) · selectable on the app side |
| **Chainlink CCIP** | Heavily gated (deployed by the Chainlink DON) | OCR committee + RMN risk management |
| **Hyperlane** | **Permissionless** (anyone can fork + deploy) | **Modular ISM** · fully open |

**Hyperlane's bet**: long-tail chains (especially app-chains) cannot wait for approval from the LayerZero/CCIP teams · they need a self-serve connectivity solution. This is consistent with the "spin up a chain in one click" trend of Cosmos SDK / Solana SVM / OP Superchain / Arbitrum Orbit, etc. — bridges also need to become permissionless.

**Key components**:
- **Mailbox**: a unified send/receive contract deployed on each chain · standardizes the cross-chain message format
- **Interchain Security Modules (ISM)**: a pluggable verification layer · chosen by the developer
- **Relayer**: permissionless · anyone can operate it (including app-operated relayers)
- **Validators**: monitor the source chain · sign messages · submit to the destination

**Warp Routes**: Hyperlane's token bridge abstraction · supports the 3  wrap modes Native/Collateral/Synthetic · developers can deploy ERC-20  cross-chain in one click.

## Origin & evolution

Hyperlane was founded in 2021 年 by Asa Oines, Jon Kol, and others (former Celo team members) · originally under the name Abacus · renamed to Hyperlane in 2022 年. The core bet is that "long-tail chains need a permissionless bridge," which forms a route split versus the centralized deployment model of LayerZero / CCIP.

From 2023 to 2025 年 it was progressively adopted on long-tail / app-chains such as Celestia / dYdX v4  / Injective / Sei / Berachain · becoming the de facto standard for connecting non-EVM (Cosmos / Solana / Move) to the EVM ecosystem (see [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]). After adding EigenLayer restaking integration in 2024 年 · cryptoeconomic security was inherited from Ethereum L1 .

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-ism-modular-security|ISM Modular Security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-overview|EigenLayer]]
<!-- /wiki-links:managed -->

## Sources

- Hyperlane docs (docs.hyperlane.xyz)
- Hyperlane docs — https://docs.hyperlane.xyz/

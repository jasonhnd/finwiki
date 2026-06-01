---
source: systems/erc-4337-overview
source_hash: 74eaa7d88488e4e3
lang: en
status: machine
fidelity: ok
title: "ERC-4337  Overview · Application-Layer Implementation of Account Abstraction"
translated_at: 2026-06-01T04:15:40.146Z
---
# ERC-4337  Overview · Application-Layer Implementation of Account Abstraction

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Enabled on Ethereum mainnet in 2023-03  ^[extracted]
- No protocol-layer change · implemented purely at the application layer ^[extracted]
- EntryPoint is an on-chain singleton contract (0x0000000071727De22E5E9d8BAf0edAc6f37da032) ^[extracted]
- The v0.7  upgrade (2026) simplified mempool rules · reduced gas overhead by 20-30% ^[extracted]
- Supports custom signatures such as WebAuthn / passkey / BLS / secp256r1 (iOS Secure Enclave) ^[extracted]

## Mechanism / How it works

The core problem solved by ERC-4337 : **the capability gap between EOA and SCW**. A traditional EOA is controlled by a secp256k1  private key · can only send transactions / pay gas / sign · and has no programmable logic. SCW (Safe/Argent) is programmable, but it must be triggered by a tx issued by an EOA —— users still need to hold ETH to pay gas and manage private keys.

ERC-4337  introduces a new **alternative transaction pool**:

- **UserOperation**: an "intent" object signed by the user (not a transaction) · includes calldata / gas limits / paymaster information
- **Bundler**: similar to a block builder · takes items from the UserOp mempool, packages them into standard transaction 1 件, and sends them to EntryPoint
- **EntryPoint**: an on-chain singleton contract · verifies + executes all UserOps
- **Paymaster**: optional contract · pays gas on the user's behalf (or accepts gas payment in ERC-20 )
- **Aggregator**: optional · batch-verifies multiple signatures (BLS / other methods)

**Core innovation: UserOp is not a transaction** · it is a sub-unit packaged into a transaction by a Bundler.

## Origin & evolution

ERC-4337  was proposed in 2021 年 by Vitalik Buterin, Yoav Weiss, Kristof Gazso, and others · the original intent was to avoid the high barrier of "changing the Ethereum protocol layer" (earlier EIP-2938 and EIP-3074  both failed to reach mainnet). After mainnet activation in 2023-03  · progress exceeded expectations —— embedded wallet stacks such as [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / Alchemy integrated rapidly (contrast with [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]]).

In 2026 年, the v0.7  upgrade simplified mempool rules · reduced gas overhead by 20-30% · and optimized the Bundler economic model. Around the same period, ERC-7702 (drafted by Vitalik from 2024-05 ) solved the problem of "upgrading existing EOA to SCW" from the opposite direction —— together they form complementary dual tracks.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702(EOA 一時 SCW)]]
<!-- /wiki-links:managed -->

## Sources

- ERC-4337 "Account Abstraction Using Alt Mempool" — https://eips.ethereum.org/EIPS/eip-4337

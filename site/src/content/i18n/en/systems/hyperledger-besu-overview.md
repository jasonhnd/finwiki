---
source: systems/hyperledger-besu-overview
source_hash: 0e94fb3106b3a431
lang: en
status: machine
fidelity: ok
title: "Hyperledger Besu · EVM-compatible enterprise chain (evolved form of Quorum)"
translated_at: 2026-06-01T04:15:40.138Z
---

# Hyperledger Besu · EVM-compatible enterprise chain (evolved form of Quorum)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton(機関向け DLT の対照)]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

> [!info] TL;DR
> Hyperledger Besu is an EVM-compatible enterprise permissioned chain led by ConsenSys, and its predecessor is Quorum (a Geth fork), which JPMorgan launched in 2015 年. It was sold in 2020-08  and integrated into Hyperledger. JPM keeps its own fork and continues to modify it; in 2024-11  it renamed the internal chain Kinexys Chain, and it remains one of the top 5  contributors by monthly Besu commits.

## Key facts

- Quorum 1.0  was open-sourced in 2017-05 ; JPM sold it to ConsenSys in 2020-08  and it was integrated into Besu ^[extracted]
- The internal Quorum fork was renamed Kinexys Chain (formerly Onyx Chain) in 2024-11  ^[extracted]
- Consensus is IBFT (Istanbul BFT) · JPM internal 9  validators (5  regions + 4  backup) ^[extracted]
- 2 -second block production · instant finality in a single block · customers pay no gas (JPM bears it) ^[extracted]
- Privacy layer Constellation: ZK private transaction pool · only txHash + metadata are on-chain ^[extracted]
- Supports EIP-2612  permit + EIP-3009  transferWithAuthorization · EIP-7708  is not supported ^[extracted]

## Mechanism / How it works

Besu is a **fully EVM-compatible permissioned chain**: Solidity contracts can migrate directly, and toolchains (Hardhat / Foundry / web3.js) require no modification. The consensus layer uses IBFT rather than PoW/PoS, and can activate BFT-style finality when there are 4  or more validators. The privacy layer Constellation is a ZK-based private transaction subsystem; payloads are transferred directly between validators through P2P encryption, and only txHash + timestamp remain on-chain. This realizes "selective private transactions on a permissioned chain." JPM's 9  node configuration on Kinexys Chain covers 5  regions + 4  backup, making it a typical deployment pattern for Besu in G-SIB scenarios.

## Origin & evolution

2015 年 JPM started Quorum · based on a Geth fork. 2017-05  Quorum 1.0  was open-sourced. In 2018-2020 年, JPM tried to commercialize Quorum but failed · in 2020-08  it was sold to ConsenSys and integrated into Hyperledger Besu (Linux Foundation governance). JPM simultaneously kept its own fork and continued modifying it · in 2024-11  it renamed its internal chain from Onyx Chain to Kinexys Chain ([[fintech/jpmorgan-jpmd-coin|JPMD]] is the current currency leg). The Linux Foundation established the "Decentralized Trust" foundation in 2025 年 and took over Hyperledger governance, but JPM remains a core member. When G-SIBs such as Citi / HSBC / BNP build new private chains, Besu remains the default option — this is the network effect of EVM compatibility (in contrast to chain selection in cross-G-SIB multi-CBDC pilots such as [[fintech/bis-project-agora-overview|BIS Agora]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## Sources

- Hyperledger Besu docs — https://besu.hyperledger.org/

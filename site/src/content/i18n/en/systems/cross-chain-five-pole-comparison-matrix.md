---
source: systems/cross-chain-five-pole-comparison-matrix
source_hash: 80bc3f0eb27c3bb0
lang: en
status: machine
fidelity: ok
title: "Cross-chain 5 -pole comparison matrix · The 9 dimensions of CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole"
translated_at: 2026-07-28T22:03:26.809Z
---

# Cross-chain 5 -pole comparison matrix · The 9 dimensions of CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole

## Wiki route

This page is a comparison matrix under [[systems/INDEX|systems index]]; read [[systems/cross-chain-four-poles-overview]] as the parent overview and [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]] as the practical selection axis. The individual protocols connect to [[systems/cctp-v2-overview]], [[systems/chainlink-ccip-institutional-messaging]], [[systems/layerzero-v2-omnichain-messaging]], and [[systems/hyperlane-overview]], and the demand-side context for stablecoin transfer is cross-referenced with [[fintech/usd-stablecoin-interchange]].

## Key facts

- CCTP V2 Fast Transfer 8-20 s finality (V1 is 10-20 min) · USDC only · 12+ chains including Arc / Sonic ^[extracted]
- CCIP Active Risk Management (RMN) two-layer verification · 2024-2025 SWIFT / DTCC / J.P. Morgan Kinexys pilots live · ~25 chains ^[extracted]
- LayerZero v2 introduces a Lightweight Message Library + DVN modular · 100+ chains · cumulative messages 5B+ · 7B+ USD TVL in circulation ^[extracted]
- Hyperlane permissionless ISM (Interchain Security Module) · 2024.07 Eclipse mainnet · any EVM/SVM/Move/Cosmos chain can self-deploy ^[extracted]
- Wormhole 19-of-19 Guardian committee + 2024 ZK Verifier + Native Token Transfers (NTT) + CCTP integration · dominant in the Solana ecosystem · 30+ chains ^[extracted]

## Mechanism / How it works

**Architecture comparison matrix based on public specifications**:

| Dimension | CCTP V2 | CCIP | LayerZero v2 | Hyperlane | Wormhole |
|---|---|---|---|---|---|
| **Messaging model** | USDC burn → attestation → mint | Arbitrary messaging and token transfer | OApp messages / OFT over Endpoint | Mailbox messages / Warp Route | VAA-based messaging / token bridge / NTT |
| **Verification boundary** | Circle attestation | CCIP network and risk-management controls | OApp-configured DVNs | Application-selected ISM | Guardian-signed VAA and integration contract |
| **Destination execution** | Caller or relayer executes mint / hook | Router / off-ramp executes | Permissionless Executor or manual execution | Relayer delivers to Mailbox | Relayer is optional; receiving application consumes VAA |
| **Asset model** | Circle-issued USDC | Depends on pool / token-manager configuration | OFT or application-specific model | Warp Route or application-specific model | Product-specific, such as wrapped bridge / NTT |
| **Application configuration** | Domain, finality, recipient and message version | Lane, pool, receiver and rate limit | Peer, MessageLib, DVN, confirmation and Executor | ISM, hook, validators and gas payment | Emitter, chain, consistency and recipient |
| **Fee checkpoints** | Gas on both chains and selected transfer mode | Network / execution cost included in quote | DVNs, Executor and destination gas | Relay / destination gas and hooks | Source / destination gas and relayer option |
| **Upgrade checkpoints** | Current Circle contracts / attestation-service version | Router, lane and pool owner / release notes | OApp owner / delegate and library migration | Mailbox / ISM / route owner | Governance and emitter for core / token bridge / NTT |
| **Suitable scope** | USDC-native transfer | Managed messaging / token transfer | Configurable omnichain application | Sovereign app-chain / rollup integration | Multi-ecosystem messaging and token integration |
| **Avoid unsupported inferences** | Verify supported chains, duration and fees in live documentation | Verify lanes, tokens and limits in live documentation | Do not treat default DVNs as a safety guarantee | Do not treat permissionless deployment as a safety guarantee | Do not treat Guardian count or incident record as a fixed value |

Sources: ^[https://developers.circle.com/stablecoins/docs/cctp-getting-started] ^[https://docs.chain.link/ccip] ^[https://docs.layerzero.network/v2] ^[https://docs.hyperlane.xyz/] ^[https://docs.wormhole.com/]


**How to read the matrix**: read horizontally for the full-dimension profile of 1 protocols · read vertically for the 5 -pole differences in the same dimension. CCTP V2 is narrow and deep (USDC only but optimized to the extreme) · CCIP is institutional-grade (expensive but compliant) · LayerZero v2 is broad and flexible (maximum coverage but DVN configuration means responsibility) · Hyperlane is self-service permissionless · Wormhole is Solana-centric + Guardian-model legacy.

**Typical combinations** (real dApps use multiple bridges in parallel):
- **Stripe Tempo / Arc**: CCIP (institutional default) + CCTP V2(USDC fast) + LayerZero (long-tail dApp)
- **Coinbase Base**: CCTP V2(native USDC) + LayerZero (Stargate) + CCIP (some institutional customers)
- **Eclipse / Celestia**: Hyperlane (self-deploy) + Wormhole (Solana liquidity)
- **Major Solana DeFi**: Wormhole (default) + CCTP V2(USDC) + LayerZero (EVM connectivity)

## Origin & evolution

The 2021-2022 cross-chain landscape was a disorderly competition among Wormhole / Multichain / Synapse and others · security-model differences were unclear. The 2022 string of bridge hacks (Ronin $625M · Wormhole $325M · BSC $570M · Nomad $190M) pushed security into a core selection dimension. 2023 Chainlink CCIP launch · carving out the institutional layer with the oracle brand. 2024 LayerZero v2 rebuilt the messaging library and introduced modular DVNs · Hyperlane mainnet launch moved to permissionless mode · Wormhole added a ZK Verifier to patch the weaknesses of the Guardian-only model.

2025 CCTP V2 Fast Transfer + Hooks made USDC sourcing an atomic primitive (8-20 s) · stripping general-purpose bridges of their value in USDC scenarios. The 2026-Q1 5 -pole landscape has solidified into a task-specialization matrix · mainstream dApps simultaneously integrate 3-4 bridges and route by scenario. Wormhole's NTT (Native Token Transfers) + CCTP integration is a key measure to rebuild relevance · making Wormhole no longer "just a Solana bridge."

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極アーキテクチャ · 概観]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP Institutional Messaging]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 Omnichain Messaging]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP 路線対照]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton 公開/プライベートチェーン対峙]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 docs · https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Chainlink CCIP docs · https://docs.chain.link/ccip
- LayerZero v2 docs · https://docs.layerzero.network/v2
- Hyperlane docs · https://docs.hyperlane.xyz/
- Wormhole docs · https://docs.wormhole.com/
- DefiLlama bridges analytics · https://defillama.com/bridges
- Token Terminal cross-chain metrics · https://tokenterminal.com/

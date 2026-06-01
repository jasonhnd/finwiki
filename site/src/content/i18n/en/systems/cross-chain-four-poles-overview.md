---
source: systems/cross-chain-four-poles-overview
source_hash: 5386c9f95dbcba3f
lang: en
status: machine
fidelity: ok
title: "Cross-Chain 4 -Pole Architecture · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2"
translated_at: 2026-06-01T04:15:40.145Z
---
# Cross-Chain 4 -Pole Architecture · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- LayerZero 2025  cumulative cross-chain messages 5B+ · covers 100+ chains ^[extracted]
- CCIP DTCC pilot completed in 2024.05  · 2025-2026  production rollout · customers include SWIFT / J.P. Morgan Kinexys ^[extracted]
- Wormhole has the largest TVL · in 2022 , $320M theft · security model upgraded after 2024 ZK Verifier went live ^[extracted]
- Hyperlane 2024.07  mainnet launch · led by Eclipse / Celestia · permissionless ISM modularity ^[extracted]
- CCTP V2  Hooks 2025.03  launch · Fast Transfer 1-2 min (traditional 10-20 min) · first choice for USDC sourcing ^[extracted]

## Mechanism / How it works

**5 -pole differentiated positioning**:

| Dimension | LayerZero | CCIP | Wormhole | Hyperlane | CCTP V2 |
|---|---|---|---|---|---|
| Architecture | DVN multisig verification · user-configurable | RMN + Oracle network | Guardian 19  multisig + ZK | Permissionless ISM modular | Circle off-chain attestation |
| Chain coverage | 100+ | ~20 (high quality) | ~30 (strong in Solana) | Any EVM self-service | 12 chains |
| Security model | Client can change DVN | High institutional grade | Guardian committee + ZK | ISM customer choice | Circle centralized |
| Representative customers | Stargate · Pendle · LiFi | DTCC / SWIFT / Kinexys | Solana · Jito · Pyth | Eclipse · Celestia · long-tail L2 | Coinbase · Circle native USDC |
| Positioning | General purpose default | Institutional / regulated | Solana-centered + throughput | Permissionless / open | USDC only · O(1) burn-mint |

CCIP's two-layer verification (transaction + risk) is key to institutional acceptance · LayerZero DVN is the general default · Wormhole's large TVL comes from concentration in the Solana ecosystem · Hyperlane does not make long-tail chains wait to be listed. See [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]] for the full comparison; contrast with [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] for real distribution on CEX deposit/withdrawal paths.

## Origin & evolution

2021-2022  cross-chain = competition among Wormhole / Multichain / Synapse. A series of bridge hacks in 2022  ($600M Ronin / $325M Wormhole / $570M BSC) made the security model central. 2023-2024  convergence = LayerZero general grade · Chainlink CCIP used the oracle brand to enter institutional markets · Wormhole held its Solana position with a ZK upgrade. 2025  Hyperlane entered the long tail with permissionless design · CCTP V2  made USDC sourcing an "atomic cross-chain primitive" (see [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン 4 極 · 選定意思決定ツリー]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT consensus Rust 実装]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero / Chainlink / Wormhole / Hyperlane / Circle official documentation + customer disclosures (DTCC / SWIFT / Kinexys)
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

---
title: クロスチェーン 4 極アーキテクチャ · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2 第 5 極
aliases: [cross chain four poles overview, cross-chain interoperability poles, LayerZero CCIP Wormhole Hyperlane]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, cross-chain, bridge, layerzero, ccip, wormhole, hyperlane, cctp]
sources:
  - https://docs.layerzero.network/v2
  - https://docs.chain.link/ccip
  - https://docs.hyperlane.xyz/
  - https://developers.circle.com/stablecoins/docs/cctp-getting-started
status: candidate
---

# クロスチェーン 4 極アーキテクチャ · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- LayerZero 2025 累計クロスチェーン messages 5B+ · 100+ chains カバー ^[extracted]
- CCIP DTCC パイロット 2024.05 完了 · 2025-2026 production rollout · 顧客に SWIFT / J.P. Morgan Kinexys を含む ^[extracted]
- Wormhole TVL 最大 · 2022 に $320M 盗難 · 2024 ZK Verifier 稼働後セキュリティモデルアップグレード ^[extracted]
- Hyperlane 2024.07 メインネット launch · Eclipse / Celestia 主推 · permissionless ISM モジュラー ^[extracted]
- CCTP V2 Hooks 2025.03 launch · Fast Transfer 1-2 min(伝統的 10-20 min)· USDC 調達の第一選択 ^[extracted]

## Mechanism / How it works

**5 極差別化ポジショニング**:

| 次元 | LayerZero | CCIP | Wormhole | Hyperlane | CCTP V2 |
|---|---|---|---|---|---|
| アーキテクチャ | DVN マルチシグ検証 · ユーザー設定可能 | RMN + Oracle ネットワーク | Guardian 19 マルチシグ + ZK | Permissionless ISM モジュラー | Circle オフチェーン attestation |
| チェーンカバレッジ | 100+ | ~20(高品質) | ~30(Solana 強い) | 任意 EVM セルフサービス | 12 chains |
| セキュリティモデル | クライアント DVN 変更可能 | 高 institutional grade | Guardian 委員会 + ZK | ISM 顧客選択 | Circle 中央集権化 |
| 代表顧客 | Stargate · Pendle · LiFi | DTCC / SWIFT / Kinexys | Solana · Jito · Pyth | Eclipse · Celestia · long-tail L2 | Coinbase · Circle ネイティブ USDC |
| ポジショニング | General purpose default | Institutional / regulated | Solana 中心 + throughput | Permissionless / open | USDC のみ · O(1) burn-mint |

CCIP 二層検証(transaction + risk)は institutional 受容の鍵 · LayerZero DVN は general default · Wormhole TVL は大きいが Solana エコシステム集中由来 · Hyperlane は long-tail チェーンをリストに載せるのを待たせない。完全な対照は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]] を参照;CEX deposit/withdrawal 経路上の実分布は [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] と対照。

## Origin & evolution

2021-2022 クロスチェーン = Wormhole / Multichain / Synapse 複数競合。2022 一連のブリッジ hack($600M Ronin / $325M Wormhole / $570M BSC)でセキュリティモデルが中核に。2023-2024 収斂 = LayerZero general grade · Chainlink CCIP は oracle ブランドで institutional に切り込み · Wormhole ZK アップグレードで Solana 陣地を保持。2025 Hyperlane permissionless で long-tail に切り込み · CCTP V2 で USDC 調達が「atomic cross-chain primitive」に([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] 参照)。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン 4 極 · 選定意思決定ツリー]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT consensus Rust 実装]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero / Chainlink / Wormhole / Hyperlane / Circle 公式ドキュメント + 顧客開示(DTCC / SWIFT / Kinexys)
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

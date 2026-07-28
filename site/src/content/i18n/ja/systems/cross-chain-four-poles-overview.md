---
source: systems/cross-chain-four-poles-overview
source_hash: c9c55756c2f68043
lang: ja
status: machine
fidelity: ok
title: "クロスチェーン 4 極アーキテクチャ · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2"
translated_at: 2026-07-28T22:03:26.809Z
---
# クロスチェーン 4 極アーキテクチャ · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2



## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置づけられる。類似項目や対比の文脈は [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング]]、より広いシステム上・規制上の境界は [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- LayerZero は 2025  までに累計クロスチェーン messages が 5B+、100+ chains をカバー ^[extracted]
- CCIP は DTCC パイロットを 2024.05  に完了し、2025-2026  に production rollout。顧客には SWIFT / J.P. Morgan Kinexys が含まれる ^[extracted]
- Wormhole は TVL が最大級だが、2022  に $320M の盗難被害を受けた。2024  に ZK Verifier 稼働後、セキュリティモデルをアップグレード ^[extracted]
- Hyperlane は 2024.07  にメインネット launch。Eclipse / Celestia が主要推進先で、permissionless ISM によるモジュラー構成を採る ^[extracted]
- CCTP V2  は Hooks を 2025.03  に launch。Fast Transfer は 1-2 min(伝統的経路は 10-20 min)で、USDC 調達の第一候補 ^[extracted]

## 仕組み

**5 極の差別化ポジショニング**:

| 次元 | LayerZero | CCIP | Wormhole | Hyperlane | CCTP |
|---|---|---|---|---|---|
| 中核アーキテクチャ | Endpoint + MessageLib + DVN + Executor | router / lane + oracle network + risk controls | Guardian-signed VAA + product-specific contracts | Mailbox + app-selected ISM + relayer | USDC burn / mint + Circle attestation |
| 検証設定 | OApp が DVN と confirmation を設定 | protocol lane と token-pool controls | 受信側が chain / emitter / VAA を検証 | アプリが ISM を選択 | Circle の domain と attestation service |
| Destination 実行 | permissionless Executor または手動 | off-ramp / receiver call | relayer 任意、受信 app が実行 | relayer が Mailbox に配達 | caller / relayer が mint を提出 |
| 導入時の主要確認 | peer、library、DVN diversity、owner key | lane、token、rate limit、receiver access | emitter、consistency、upgrade authority | validator、ISM、hook、relayer、owner key | finality、message version、recipient、対応 domain |
| 適用範囲 | general-purpose OApp / token | messaging と managed token transfer | messaging、token bridge、NTT 等 | permissionless interchain app / token route | USDC-native transfer |

Sources: ^[https://docs.layerzero.network/v2] ^[https://docs.chain.link/ccip] ^[https://docs.wormhole.com/] ^[https://docs.hyperlane.xyz/] ^[https://developers.circle.com/stablecoins/docs/cctp-getting-started]


CCIP の二層検証(transaction + risk)は、機関投資家に受け入れられるための要である。LayerZero の DVN は汎用標準として使われやすい。Wormhole の TVL は大きいが、その強さは Solana エコシステムへの集中に由来する。Hyperlane は long-tail チェーンをリスト掲載待ちにしない。完全な対照は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]] を参照。CEX deposit/withdrawal 経路上の実分布は [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] と対照。

## 起源と進化

2021-2022  のクロスチェーン市場は、Wormhole / Multichain / Synapse などが競合する局面だった。2022  の一連のブリッジ hack($600M Ronin / $325M Wormhole / $570M BSC)により、セキュリティモデルが中核論点になった。2023-2024  には収斂が進み、LayerZero は general grade、Chainlink CCIP は oracle ブランドを生かして institutional 領域へ切り込んだ。Wormhole は ZK アップグレードで Solana の陣地を維持した。2025  には Hyperlane が permissionless モデルで long-tail に切り込み、CCTP V2  によって USDC 調達は「atomic cross-chain primitive」になった([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] 参照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン 4 極 · 選定意思決定ツリー]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT consensus Rust 実装]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## 出典

- LayerZero / Chainlink / Wormhole / Hyperlane / Circle 公式ドキュメント + 顧客開示(DTCC / SWIFT / Kinexys)
- LayerZero V2 docs — https://docs.layerzero.network/v2

- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2  — https://developers.circle.com/stablecoins/docs/cctp-getting-started

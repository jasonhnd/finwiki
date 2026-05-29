---
title: "[opinion] クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング"
source_entry: systems/cross-chain-four-poles-selection-decision.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング

> 出典エントリー: `systems/cross-chain-four-poles-selection-decision.md`

## 推論 (from Key facts)

- Tempo が CCIP を選ぶロジック = Visa / SC / Stripe 顧客が規制説明可能性を必要とする → Wormhole 多シグを使えない ^[inferred]
- Base 多極組み合わせ = CCIP(Circle bridge) + LayerZero(long-tail) + CCTP V2(USDC fast path) ^[inferred]
- Hyperlane の類比 = Cloudflare Workers vs AWS Lambda · long-tail ヘッジ選択肢 ^[inferred]
- LayerZero DVN 設定不適切 → セキュリティ降格リスク(ユーザー責任) ^[inferred]

## Counterpoints

「単一ブリッジ論」を主張:多極とはセキュリティモデルが複数の attack surface を意味する · 実際には 1 つの高品質ブリッジ(CCIP)を選ぶほうが安全。LayerZero 反対派は DVN 柔軟性 = ユーザー責任 = 大半のユーザーが不適切設定 = 実際のセキュリティ < Wormhole 19 Guardian 固定マルチシグと主張。一部 institutional 顧客は実際には Chainlink 販売に引き寄せられたものであり · 技術比較の結果ではない。

## Open questions

Base 多極組み合わせの実際の比率(CCIP 何% · LayerZero 何% · CCTP V2 何%)は?Tempo / Arc は CCIP を専用ブリッジで置換するか?Hyperlane permissionless のセキュリティモデルは大規模 stake 後に 51% に耐えるか?CCTP V2 Hooks は「USDC クロスチェーン = 1 プロトコル」を新たな default にするか?([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] と [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] の実シェア観察と対照)

---
title: クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング
aliases: [cross chain four poles selection decision, bridge protocol selection by protagonist, cross-chain decision tree]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, decision-framework, layerzero, ccip, hyperlane, cctp]
sources:
  - https://docs.layerzero.network/v2
  - https://docs.chain.link/ccip
  - https://docs.hyperlane.xyz/
  - https://developers.circle.com/stablecoins/docs/cctp-getting-started
status: candidate
---

# クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Tempo が CCIP を選ぶロジック = Visa / SC / Stripe 顧客が規制説明可能性を必要とする → Wormhole 多シグを使えない ^[inferred]
- Base 多極組み合わせ = CCIP(Circle bridge) + LayerZero(long-tail) + CCTP V2(USDC fast path) ^[inferred]
- Hyperlane の類比 = Cloudflare Workers vs AWS Lambda · long-tail ヘッジ選択肢 ^[inferred]
- CCTP V2 Hooks(2025.03)で宛先チェーンアトミックコールバックが可能 · 伝統的ブリッジを置換 ^[extracted]
- LayerZero DVN 設定不適切 → セキュリティ降格リスク(ユーザー責任) ^[inferred]

## Mechanism / How it works

**選定意思決定ツリー**:

```
あなたの主役は ?
├── ステーブルコイン L1(Tempo)
│   → CCIP (institutional 必須) + LayerZero (general バックアップ)
│
├── EVM L2(Base)
│   → CCIP (Circle bridge) + LayerZero (long-tail) + CCTP V2 (USDC fast)
│
├── Solana / Move エコシステム
│   → Wormhole (TVL + 歴史)
│
├── long-tail L2 / appchain
│   → Hyperlane (permissionless · リスト入りを待たない)
│
└── 純 USDC 調達
    → CCTP V2 (1-2 min · ブリッジリスクなし · burn-mint)
```

**判断ロジック**:
- 顧客に institutional(銀行 / カード組織 / 規制)を含むか → CCIP は必須層
- チェーンが LayerZero / CCIP リストにあるか → なければ Hyperlane が唯一の制御可能選択肢
- 純 USDC か → CCTP V2 は汎用ブリッジより速い(1-2 min)かつロックリスクなし
- 「開発者が 1 クリック接続」を必要とするか → Hyperlane permissionless · クライアント側で ISM 選択

## Origin & evolution

2022-2023 クロスチェーン選定 = 「TVL 最大 = Wormhole を選ぶ」。2024 institutional 参入後 = CCIP が Chainlink oracle ブランド + RMN 二層検証により銀行 / DTCC / SWIFT の実選択に。2025 収斂 = 多極共存 + タスク専門特化 · 主役は同時に 2-3 ブリッジを使用(CCIP institutional · LayerZero general · CCTP V2 USDC)。完全な対照マトリクスは [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]] を参照。

## Counterpoints

「単一ブリッジ論」を主張:多極とはセキュリティモデルが複数の attack surface を意味する · 実際には 1 つの高品質ブリッジ(CCIP)を選ぶほうが安全。LayerZero 反対派は DVN 柔軟性 = ユーザー責任 = 大半のユーザーが不適切設定 = 実際のセキュリティ < Wormhole 19 Guardian 固定マルチシグと主張。一部 institutional 顧客は実際には Chainlink 販売に引き寄せられたものであり · 技術比較の結果ではない。

## Open questions

Base 多極組み合わせの実際の比率(CCIP 何% · LayerZero 何% · CCTP V2 何%)は?Tempo / Arc は CCIP を専用ブリッジで置換するか?Hyperlane permissionless のセキュリティモデルは大規模 stake 後に 51% に耐えるか?CCTP V2 Hooks は「USDC クロスチェーン = 1 プロトコル」を新たな default にするか?([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] と [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]] の実シェア観察と対照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン Token 戦略 3 態]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Smart NAV 公告(2024.05)· SWIFT messaging on Chainlink テスト(2025)
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

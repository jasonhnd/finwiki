---
title: クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング
aliases: [cross chain four poles selection decision, bridge protocol selection by protagonist, cross-chain decision tree]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags: [systems, cross-chain, bridge, decision-framework, layerzero, ccip, hyperlane, cctp]
sources:
  - https://docs.layerzero.network/v2
  - https://docs.chain.link/ccip
  - https://docs.hyperlane.xyz/
  - https://developers.circle.com/stablecoins/docs/cctp-getting-started
status: active
---

# クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- CCTP V2 Hooks(2025.03)で宛先チェーンアトミックコールバックが可能 · 伝統的ブリッジを置換 ^[extracted]

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

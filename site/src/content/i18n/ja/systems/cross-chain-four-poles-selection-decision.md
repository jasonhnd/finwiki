---
source: systems/cross-chain-four-poles-selection-decision
source_hash: 83c3da6853864a8b
lang: ja
status: machine
fidelity: ok
title: "クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング"
translated_at: 2026-06-03T01:06:46.362Z
---
# クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照の文脈では [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] と照らして読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 重要ポイント

- CCTP V2  Hooks(2025.03)により、宛先チェーンでのアトミックコールバックが可能になり、伝統的なブリッジを置き換えられる ^[extracted]

## 仕組み / 動作

**選定意思決定ツリー**:

```
あなたの主役は ?
├── ステーブルコイン L1(Tempo)
│   → CCIP (機関向けでは必須) + LayerZero (汎用バックアップ)
│
├── EVM L2(Base)
│   → CCIP (Circle bridge) + LayerZero (long-tail) + CCTP V2 (USDC fast)
│
├── Solana / Move エコシステム
│   → Wormhole (TVL + 歴史)
│
├── long-tail L2  / appchain
│   → Hyperlane (permissionless · リスト入りを待たない)
│
└── 純 USDC 調達
    → CCTP V2 (1-2 min · ブリッジリスクなし · burn-mint)
```

**判断ロジック**:

- 顧客に機関(銀行 / カード組織 / 規制対応)が含まれるか → CCIP は必須層
- 対象チェーンが LayerZero / CCIP のリストにあるか → なければ Hyperlane が唯一の制御可能な選択肢
- 純 USDC か → CCTP V2 は汎用ブリッジより速く(1-2 min)、ロックリスクもない
- 「開発者が 1 クリック接続」を必要とするか → Hyperlane permissionless · クライアント側で ISM を選択

## 起源と発展

2022-2023 のクロスチェーン選定は「TVL 最大 = Wormhole を選ぶ」だった。2024 以降に機関が参入すると、CCIP は Chainlink oracle ブランドと RMN の二層検証により、銀行 / DTCC / SWIFT で実際に選ばれる選択肢になった。2025 以降は、多極共存とタスク別の専門特化へ収斂している。主役は同時に 2-3  個のブリッジを使う(CCIP は機関向け、LayerZero は汎用、CCTP V2  は USDC)。完全な対照マトリクスは [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]] を参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン Token 戦略 3 態]]
<!-- /wiki-links:managed -->

## 出典

- DTCC Smart NAV 公告(2024.05) · SWIFT messaging on Chainlink テスト(2025)
- LayerZero V2  docs — https://docs.layerzero.network/v2

- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2  — https://developers.circle.com/stablecoins/docs/cctp-getting-started

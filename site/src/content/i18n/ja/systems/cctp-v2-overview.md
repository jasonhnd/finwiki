---
source: systems/cctp-v2-overview
source_hash: a8f29404429d4075
lang: ja
status: machine
fidelity: ok
title: "CCTP V2 概観・Circle USDC クロスチェーン burn-and-mint"
translated_at: 2026-06-03T00:53:08.307Z
---

# CCTP V2 概観・Circle USDC クロスチェーン burn-and-mint

## ウィキ上の位置づけ

このエントリは [[systems/INDEX|systems index]] の下にあります。ピア/コントラストのコンテキストについては [[systems/cctp-v2-technical-spec|CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service]]、より広範なシステム/規制の境界については [[fintech/INDEX|fintech index]] と照らし合わせて読み取ってください。

## 主要事実

- 2024-11 V2 ローンチ(V1 は 2023-01 開始) ^[extracted]
- V2 で高速転送を追加(< 1 レイテンシ vs V1 の ~13 秒) ^[extracted]
- V2  でフックを追加(プログラマブルコールバック、宛先チェーン契約を自動閲覧) ^[extracted]
- 18+ チェーンをサポート:Ethereum + Solana + Base + Arbitrum + Avalanche + Optimism + Noble + Polygon + Arc 等 ^[extracted]
- 2026 内にV1 を完全削除予定(確率 80%) ^[extracted]

## 仕組み / 動作

CCTP は USDC を「1  の USDC、複数チェーン」に変える —— 全公開チェーンに流通する USDC は全てサークルが直接ミントするネイティブアセットであり、ラップ版は存在しない([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] のマルチブリッジトポロジと対照)。3  ステップフロー:

```
ソースチェーン (USDC バーン)
    ↓
サークル認証サービス
  (オフチェーン署名者検証 + 表現)
    ↓
宛先チェーン (USDC 造幣局から受信者へ)
```

V2 vs V1  主要対策:

1. **高速転送**(亜秒級):V1 はソースチェーンのファイナリティを待つ(~13 秒);V2 はサークルのリスクリスクによりレイテンシを < 1 秒に圧縮
2. **フック**:クロスチェーン到着後に宛先チェーン契約書を自動トリガー、1-tx でのクロスチェーンスワップ / クロスチェーンローンをサポート
3. **より多くのチェーンサポート**:V2 ローンチ後 1 年以内に 18+チェーンに拡大

**中央集権化のコスト**:Circle Attestation Service は単一障害信頼 —— Circle は意思を拒否可能(Tornado Cash 関連アドレスで実例あり)。これは GENIUS §501 Denylist がプロトコル層で実行通路([[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ deposit/withdrawal 経路]] 上と同じ Circle ノードと対照)。

## 起源と進化

V1 は 2023-01 ローンチ、初期はEthereum + Avalancheをサポートし、徐々にSolana等へ拡大。2024-11 V2 アップグレードで高速転送とフックをもたらしました。サークルはV2 以降の識別新しいチェーン接続を加速します —— アークチェーン(Circle)自家)は2026 ローンチ時にV2 をネイティブ統合、USDCがアークチェーンのガスに。

de-wrapped 化の歴史の背景:V1  以前、各チェーンの USDC は lock-and-mint ブリッジ(LayerZero / Wormhole / Stargate) 幼少期に生成される派生品で、ブリッジハッキングのリスクがあった(Wormhole $325M、Ronin $625M、Nomad $190M 歴史の教訓)。CCTP V1 はサークルがUSDCのクロスチェーン主権を回復する重要な動きだった。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-technical-spec|CCTP V2 Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/canton-overview|Canton(プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## 出典

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

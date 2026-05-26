---
title: CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint
aliases: [cctp-v2-overview, circle-cctp-v2, usdc-burn-and-mint]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, bridge, stablecoin, usdc, circle, cctp, arc]
sources: []
status: candidate
---

# CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cctp-v2-technical-spec|CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2024-11 V2 ローンチ(V1 は 2023-01 開始) ^[extracted]
- V2 で Fast Transfer を追加(< 1 秒レイテンシ vs V1 の ~13 秒) ^[extracted]
- V2 で Hooks を追加(プログラマブルコールバック、宛先チェーン契約を自動呼び出し) ^[extracted]
- 18+ チェーンをサポート:Ethereum + Solana + Base + Arbitrum + Avalanche + Optimism + Noble + Polygon + Arc 等 ^[extracted]
- 2026 内に V1 を完全置換予定(確率 80%) ^[extracted]

## Mechanism / How it works

CCTP は USDC を「1 つの USDC、複数チェーン」に変える —— 全公開チェーンに流通する USDC は全て Circle が直接 mint する native asset であり、wrapped 版は存在しない([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] のマルチブリッジトポロジと対照)。3 ステップ フロー:

```
ソースチェーン (USDC burn)
    ↓
Circle Attestation Service
  (off-chain signer 検証 + 署名)
    ↓
宛先チェーン (USDC mint to receiver)
```

V2 vs V1 主要差異:

1. **Fast Transfer**(亜秒級):V1 はソースチェーン finality を待つ(~13 秒);V2 は Circle のリスク担保によりレイテンシを < 1 秒に圧縮
2. **Hooks**:クロスチェーン到着後に宛先チェーン契約呼び出しを自動トリガー、1-tx でのクロスチェーンスワップ / クロスチェーンローンをサポート
3. **より多くのチェーンサポート**:V2 ローンチ後 1 年以内に 18+ チェーンに拡大

**中央集権化のコスト**:Circle Attestation Service は単一障害信頼 —— Circle は署名を拒否可能(Tornado Cash 関連アドレスで実例あり)。これは GENIUS §501 Denylist がプロトコル層で執行される通路([[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ deposit/withdrawal 経路]] 上の同じ Circle ノードと対照)。

## Origin & evolution

V1 は 2023-01 ローンチ、初期は Ethereum + Avalanche をサポートし、徐々に Solana 等へ拡大。2024-11 V2 アップグレードで Fast Transfer と Hooks をもたらした。Circle は V2 以降明らかに新チェーン接続を加速 —— Arc チェーン(Circle 自家)は 2026 ローンチ時に V2 をネイティブ統合、USDC が Arc チェーンの gas に。

de-wrapped 化の歴史的背景:V1 以前、各チェーンの USDC は lock-and-mint bridge(LayerZero / Wormhole / Stargate)を通じて生成される派生品で、ブリッジハッキングリスクがあった(Wormhole $325M、Ronin $625M、Nomad $190M の歴史的教訓)。CCTP V1 は Circle が USDC のクロスチェーン主権を取り戻す重要な動きだった。

## Counterpoints

Circle の中央集権的役割は諸刃の剣:**利点**は単一 mint で §501 denylist を執行可能、コンプライアンス物語が強い;**欠点**は Circle が一度攻撃を受けるか法的に署名を強制されれば、USDC クロスチェーンの信頼が崩壊する。V2 Fast Transfer は Circle が自前 treasury($4.34B、IPO 後)で < 1 秒 finality 内のカウンターパーティリスクを担保するもの —— これは商業モデルであり暗号学的保証ではない。

さらに V2 Hooks はクロスチェーンが宛先チェーン契約を自動トリガーする UX を向上させる一方、攻撃面も拡大する —— hook コントラクト自体のセキュリティが新たなリスクポイントとなる。

## Open questions

- V1 退役の正確な時期は?(2026 予想だが具体的な四半期は未公表)
- Fast Transfer のカウンターパーティリスクのプライシングモデルは?Circle はどうヘッジするか?
- DeFi 統合における Hooks の実際のセキュリティ監査実践は?
- LayerZero/Wormhole 等の汎用ブリッジとの長期共存か、それとも置換か?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] 参照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-technical-spec|CCTP V2 Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/canton-overview|Canton(プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## Sources


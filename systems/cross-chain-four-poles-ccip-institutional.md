---
title: CCIP institutional デフォルト · TradFi → DeFi データブリッジの堀
aliases: [cross chain four poles ccip institutional, Chainlink CCIP institutional default, CCIP DTCC SWIFT Kinexys]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, ccip, chainlink, institutional, dtcc, swift, tradfi-defi]
sources: []
status: candidate
---

# CCIP institutional デフォルト · TradFi → DeFi データブリッジの堀


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Chainlink は DeFi oracle のデフォルト(TVS $14B+) · ブランドはクロスチェーンに拡張 ^[extracted]
- CCIP 顧客:DTCC / SWIFT(11000+ 銀行)/ J.P. Morgan Kinexys ^[extracted]
- RMN(Risk Management Network) = transaction layer + risk layer の独立検証 ^[extracted]
- 2024.05 DTCC Smart NAV パイロット完了 · 2025-2026 production rollout ^[extracted]
- 2025 SWIFT が L1 messaging on Chainlink をテスト · 11000+ 銀行の潜在チャネル ^[extracted]

## Mechanism / How it works

**RMN 二層検証**:CCIP はメッセージ処理を 2 つの独立ネットワークに分ける · transaction network が基本メッセージを処理 · risk management network が疑わしい取引(異常金額 / 異常経路 / ブラックリスト)を独立検証。両層を通過して初めて release → institutional 顧客に「リスク管理が説明可能」な体験を提供。

**TradFi → DeFi データブリッジの意義**:SWIFT は 50 年の銀行間メッセージ標準 · DTCC は米国証券清算センター。この 2 社が Chainlink を選んだのは「web3 のテスト」ではなく、TradFi データフローを正式にオンチェーンに接続し、[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Smart NAV / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 等の RWA 製品がチェーン間で流動し、かつ規制対応を維持できるようにすること。詳細は [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]] + クロスチェーン + RWA の 3 ストーリーが交差する箇所を参照。

**Tempo が CCIP を選ぶロジック**:Tempo の顧客 = Visa / Standard Chartered / Stripe = 被規制金融機関 · Wormhole 19 多シグ(Guardian Council は fiduciary ではない)を使えない。CCIP は現時点で唯一の institutional grade クロスチェーン層。

## Origin & evolution

2017 Chainlink が oracle として創立 · 2020 DeFi 夏以降にデフォルト oracle 標準に。2022 CCIP を初公開。2023-2024 institutional 経路に切り替え · Chainlink ブランドで DTCC / SWIFT パイロットに切り込み。2024.05 DTCC Smart NAV 完了 · 2025 SWIFT messaging テスト · TradFi の実採用のマイルストーン。

## Counterpoints

LayerZero / Wormhole は CCIP の「institutional」はマーケティングであり · RMN は依然 Chainlink ノード oracle 集合 · 中央集権化度合いは 19 Guardian より優れているとは限らないと主張。一部 institutional 顧客は実際には Chainlink の販売関係で引き寄せられたものであり · 技術的比較の結果ではない。SWIFT のテストも production と等しくない —— SWIFT は歴史的に複数のブロックチェーンプロジェクトをテストしたが最終的にスケールしなかった。

## Open questions

CCIP は 50+ chains に拡大し risk grade を維持できるか?DTCC Smart NAV 2026 production volume はどれほどか?[[fintech/jpmorgan-jpmd-coin|J.P. Morgan Kinexys / JPMD]] は自前ブリッジ(Onyx ベース)に切り替えるか?SWIFT 11000+ 銀行の実際の Chainlink messaging 接続数は?CCIP は Tempo / Arc 自前ブリッジ(後者は既に institutional 顧客を持つ)に空洞化されるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
- [[fintech/central-banking-function-unbundling|中央銀行機能 5 層解体]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Smart NAV pilot 公告(2024.05)· SWIFT messaging on Chainlink(2025)

---
source: systems/cross-chain-four-poles-ccip-institutional
source_hash: e8551d54c9540659
lang: ja
status: machine
fidelity: ok
title: "CCIP 機関向けデフォルト · TradFi から DeFi へのデータブリッジの堀"
translated_at: 2026-06-03T01:06:46.358Z
---
# CCIP 機関向けデフォルト · TradFi から DeFi へのデータブリッジの堀

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] の下に位置する。ピア比較や対照の文脈では [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)]] と合わせて読み、より広いシステムおよび規制上の境界については [[fintech/INDEX|fintech index]] と合わせて読む。

## 主要事実

- Chainlink は DeFi オラクルのデフォルト(TVS $14B+)であり、ブランドはクロスチェーン領域へ拡張している ^[extracted]
- CCIP の顧客には DTCC / SWIFT(11000+ 銀行) / J.P. Morgan Kinexys が含まれる ^[extracted]
- RMN(Risk Management Network)は、トランザクション層とリスク層による独立検証を担う ^[extracted]
- 2024.05 DTCC Smart NAV パイロット完了、2025-2026 本番展開 ^[extracted]
- 2025 SWIFT が Chainlink 上の L1 メッセージングをテストし、11000+ 銀行の潜在チャネルになっている ^[extracted]

## 仕組み

**RMN 二層検証**: CCIP はメッセージ処理を 2 つの独立ネットワークに分ける。トランザクションネットワークが基本メッセージを処理し、リスク管理ネットワークが疑わしい取引(異常金額 / 異常経路 / ブラックリスト)を独立して検証する。両方の層を通過して初めてリリースされるため、機関顧客に対して「リスク管理が説明可能」な体験を提供できる。

**TradFi から DeFi へのデータブリッジの意義**: SWIFT は 50 年の銀行間メッセージ標準であり、DTCC は米国証券清算センターである。この 2 社が Chainlink を選んだことは「web3 のテスト」ではない。TradFi のデータフローを正式にオンチェーンへ接続し、[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Smart NAV / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] などの RWA 製品がチェーン間で流動しながら、規制対応を維持できるようにする動きである。詳細は [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]]、クロスチェーン、RWA の 3 ストーリーが交差する箇所を参照。

**Tempo が CCIP を選ぶロジック**: Tempo の顧客は Visa / Standard Chartered / Stripe であり、被規制金融機関である。Wormhole 19 多シグ(Guardian Council は受託者責任を負う主体ではない)は使えない。CCIP は現時点で唯一の機関向け水準のクロスチェーン層である。

## 起源と変遷

2017 Chainlink はオラクルとして創立された。2020 DeFi 夏以降、デフォルトのオラクル標準になった。2022 CCIP を初公開。2023-2024 機関向け経路に切り替え、Chainlink ブランドで DTCC / SWIFT パイロットに切り込んだ。2024.05 DTCC Smart NAV 完了、2025 SWIFT メッセージングテストは、TradFi の実採用に向けたマイルストーンである。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
- [[fintech/central-banking-function-unbundling|中央銀行機能 5 層解体]]
<!-- /wiki-links:managed -->

## 出典

- DTCC Smart NAV pilot 公告(2024.05) · SWIFT messaging on Chainlink(2025)
- Chainlink CCIP docs — https://docs.chain.link/ccip

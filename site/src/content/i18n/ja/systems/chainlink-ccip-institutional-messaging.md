---
source: systems/chainlink-ccip-institutional-messaging
source_hash: d1193a4f549d6a04
lang: ja
status: machine
fidelity: ok
title: "Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)"
translated_at: 2026-06-03T01:06:46.345Z
---
# Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。ピア比較・対照の文脈では [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルト · TradFi → DeFi データブリッジの堀]] と合わせて読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 主要事実

- 検証メカニズムは OCR2(oracle コンセンサス) + RMN(独立した二次ネットワークによるクロス検証。疑わしいクロスチェーン処理を停止可能) ^[extracted]
- チェーンカバレッジは 20+。主流 EVM に加え、Solana も 2026 に加入。広く浅くではなく、少数を深く扱う設計 ^[extracted]
- 2024-09 に SWIFT と 7 の大手銀行(BNY / Lloyds / Citi / BNP / SIX / DTCC / Clearstream)がトークン化資産パイロットを完了 ^[extracted]
- 2026-Q1 に ISO 20022  メッセージングのオンチェーン化パイロットを拡張 ^[extracted]
- 2026-Q3 計画: CCIP を SWIFT のオンチェーン・メッセージング拡張として扱い、11,000+ の SWIFT ノードから呼び出し可能にする ^[extracted]
- 統合先には ANZ / Fidelity / BBVA などの機関向け tokenization クロスチェーン経路が含まれる ^[extracted]
- Token Pool モデルは burn-and-mint または lock-and-release で、機関利用に適した設計 ^[extracted]

## 仕組み

CCIP Router は統一インタフェースである。アプリケーションは 1 回呼び出すだけで、任意のサポートチェーンに送信できる。基盤検証では 2 つの独立ネットワークが協調する。**OCR2** は Chainlink oracle ネットワークが主コンセンサスを担う仕組みで、Layer 0  コンセンサスに近い。**RMN** は完全に独立した二次ネットワークとしてクロス検証を担い、reorg、ブリッジ攻撃、偽署名などの異常状態があれば、宛先チェーンでの release を即座に停止できる。

Token Pool は統一抽象として機能する。USDC は burn-and-mint 方式で Circle CCTP と接続し、その他の ERC-20  は lock-and-release を経由する。銀行や DTCC などの機関顧客が重視するのは、Chainlink の統一保険、二層検証、非中央集権 oracle ネットワークである。これは、アプリケーション側の自己責任を重く見る LayerZero とは対照的である。

## 起源と展開

2022 に Chainlink が CCIP コンセプトを発表。2023-Q4 にメインネットが稼働し、初期顧客として Synthetix / Aave が参加した。2024-09 には SWIFT と 7 の大手銀行がトークン化資産パイロットを完了し、CCIP が機関向け主流経路に入るマイルストーンとなった。2025 には ANZ / Fidelity / BBVA などが加入。2026-Q1 には SWIFT が ISO 20022  メッセージングのオンチェーン化パイロットを拡張し、11,000+ の SWIFT ノードの接続経路が開いた。2026-Q3 計画では、CCIP を SWIFT のオンチェーン拡張とする。つまり Chainlink は実質的に SWIFT のブロックチェーン・サブレイヤになる。

同時に Canton Network との統合も交渉されており、Canton MMF が公開チェーンのステーブルコインとアトミック決済できるようにする構想がある。[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] などのトークン化 MMF が Canton 上で実際にデプロイされている状況を参照。これは公開チェーンとプライベートチェーンの間をつなぐ重要なクロスチェーン経路である。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 · DeFi 対照]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極フレーム(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cross-border-sc-via-swift-api|SWIFT API 越境ステーブルコインブリッジ]]
<!-- /wiki-links:managed -->

## 出典

- Chainlink CCIP docs — https://docs.chain.link/ccip

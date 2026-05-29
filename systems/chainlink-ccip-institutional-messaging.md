---
title: Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)
aliases: [chainlink-ccip-institutional-messaging, ccip, chainlink-ccip, ccip-rmn]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, cross-chain, chainlink, ccip, swift, dtcc, institutional]
sources:
  - https://docs.chain.link/ccip
status: candidate
---

# Chainlink CCIP · 機関級クロスチェーンメッセージング(SWIFT/DTCC メイントラック)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルト · TradFi → DeFi データブリッジの堀]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 検証メカニズム OCR2(oracle コンセンサス)+ RMN(独立した二次ネットワークによるクロス検証 · 疑わしいクロスチェーンを停止可能) ^[extracted]
- チェーンカバレッジ 20+(主流 EVM + Solana が 2026 加入)· 少なく深く ^[extracted]
- 2024-09 SWIFT + 7 大銀行(BNY / Lloyds / Citi / BNP / SIX / DTCC / Clearstream)がトークン化資産パイロットを完了 ^[extracted]
- 2026-Q1 ISO 20022 messaging on-chain にパイロットを拡張 ^[extracted]
- 2026-Q3 計画:CCIP を SWIFT on-chain messaging extension として · 11,000+ SWIFT ノードが呼び出し可能に ^[extracted]
- 統合先には ANZ / Fidelity / BBVA 等の機関 tokenization クロスチェーンが含まれる ^[extracted]
- Token Pool モデル:burn-and-mint または lock-and-release で機関フレンドリー ^[extracted]

## Mechanism / How it works

CCIP Router は統一インタフェース:アプリケーションは 1 回呼び出すだけで任意のサポートチェーンに送信可能。基盤検証は 2 つの独立ネットワークが協調する —— **OCR2** は Chainlink oracle ネットワークが主コンセンサスを担う(Layer 0 コンセンサスに類似)、**RMN** は完全に独立した二次ネットワークがクロス検証を担い、異常状態(reorg / ブリッジ攻撃 / 偽署名)があれば RMN は宛先チェーンの release を即座に停止できる。Token Pool は統一抽象:USDC は burn-and-mint(Circle CCTP と接続)、その他 ERC-20 は lock-and-release を経由する。機関顧客(銀行 / DTCC)が重視するのは Chainlink の統一保険 + 二層検証 + 非中央集権 oracle ネットワーク —— LayerZero のアプリケーション自己責任とは対照的。

## Origin & evolution

2022 Chainlink が CCIP コンセプトを発表。2023-Q4 メインネット稼働 · 初期顧客 Synthetix / Aave。2024-09 SWIFT + 7 大銀行がトークン化資産パイロットを完了 · CCIP が機関主流に入るマイルストーン。2025 ANZ / Fidelity / BBVA 等が加入。2026-Q1 SWIFT が ISO 20022 on-chain messaging にパイロットを拡張 · 11,000+ SWIFT ノードの接続経路が開く。2026-Q3 計画 CCIP を SWIFT on-chain extension とする —— つまり Chainlink が実質的に SWIFT のブロックチェーンサブレイヤとなる。同時に Canton Network との統合を交渉 · Canton MMF が公開チェーンステーブルコインとアトミック決済できるようにする([[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 等のトークン化 MMF が Canton 上で実際にデプロイされている状況を参照)· これは公開/プライベートチェーン間クロスチェーンの重要経路。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 · DeFi 対照]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極フレーム(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cross-border-sc-via-swift-api|SWIFT API 越境ステーブルコインブリッジ]]
<!-- /wiki-links:managed -->

## Sources

- Chainlink CCIP docs — https://docs.chain.link/ccip

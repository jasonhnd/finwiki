---
source: systems/bitflyer-blockchain
source_hash: edb4416adfd38a1f
lang: ja
status: machine
fidelity: ok
title: "bitFlyer Blockchain"
translated_at: 2026-06-03T00:53:08.263Z
---
# bitFlyer Blockchain

## ウィキ上の位置づけ

この項目は[[systems/INDEX|systems index]]配下に位置づけられる。ピア／比較対象の文脈は[[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 兼容企业链(Quorum 进化)]]、より広いシステム／規制上の境界は[[fintech/INDEX|fintech index]]とあわせて読む。

## 要約

bitFlyer Blockchainは、bitFlyer独自のプライベートチェーン技術であるMiyabiを軸にした、エンタープライズ向けブロックチェーン部門である。FinWikiでは、CEX事業体ではなく、**システム／エンタープライズDLT**のノードとして扱うべきである。このページは[[payment-firms/bitflyer|bitFlyer]]から接続される。Miyabiが同グループのB2Bブロックチェーン・ストーリーの一部だからである。

## システムプロフィール

- **中核プロダクト**: Miyabi。企業利用向けのプライベートブロックチェーン／ブロックチェーン型データベース。
- **設計上の主張**: bitFlyerはMiyabiについて、ファイナリティ重視かつ高スループットであり、公式な性能値として毎秒2,000 トランザクション、または高性能ハードウェア上で4,000 を処理できるとしている。
- **ユースケースの類型**: 許可型の企業ワークフロー、B2Bブロックチェーン・コンサルティング、パブリックチェーンの開放性よりもフォークリスクと決済ファイナリティが重要なシステム。
- **隣接するネットワーク上の役割**: bitFlyer Blockchainはweb3 調査や、Oasys関連の発表などにみられるバリデーター／エコシステム活動にも登場している。

## 戦略的な読み方

Miyabiは、パブリックなパーミッションレスチェーンとは設計思想の対極に位置する。オープンなバリデーター経済よりも、ファイナリティ、制御可能性、企業システムとの統合を最適化している。そのため、CEXの市場構造よりも、[[systems/canton-overview|Canton]]、[[systems/hyperledger-besu-overview|Besu]]、機関投資家向けDLTに近い。

[[payment-firms/bitflyer|bitFlyer]]にとっての戦略的価値は選択肢の広がりにある。一方に取引所事業、もう一方にエンタープライズチェーン／コンサルティング基盤を持つ構図である。未解決の論点は、Miyabiが技術ショーケースにとどまらず、持続的なプロダクトラインとなるだけの実稼働採用を得ているかどうかである。

## 関連項目

- [[payment-firms/bitflyer]]
- [[exchanges/jp-exchange-bitflyer]]
- [[systems/canton-overview]]
- [[systems/hyperledger-besu-overview]]
- [[systems/formal-spec-implementation-codesign]]

## 出典

- bitFlyer Blockchain official site.
- bitFlyer Miyabi product pages.

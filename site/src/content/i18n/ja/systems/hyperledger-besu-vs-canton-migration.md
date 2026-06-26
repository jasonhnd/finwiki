---
source: systems/hyperledger-besu-vs-canton-migration
source_hash: b618a2b3e20083e7
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Hyperledger Besu vs Canton · JPM 主戦場移行経路"
translated_at: 2026-06-26T08:29:40.695Z
---
# Hyperledger Besu vs Canton · JPM 主戦場移行経路

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置づけられる。類似項目や対比の文脈は [[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)]]、より広いシステム上・規制上の境界は [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- JPM は 2026 年 に Kinexys の主戦場を Canton へ移行開始し、2027 H1  に完了予定 ^[extracted]
- 移行を駆動する 4  つの要因:DAML が金融契約に適していること、multi-party atomic、創設メンバー戦略、application-level 隔離 ^[extracted]
- Kinexys Chain は、移行後も内部テストと EVM 互換バックアップとして保持される ^[extracted]
- 他の G-SIB(Citi / HSBC / BNP)が新規プライベートチェーンを構築する場合は、依然として Besu が標準的な選択肢 ^[extracted]

## 仕組み

Quorum/Besu の優位性は EVM 互換性にある。Solidity ツールチェーンを再利用でき、銀行顧客の受容度も高い。Ethereum の概念にすでに親しんでいるためである。一方で、multi-party atomic 決済 には複雑なコントラクトの組み合わせが必要になる。また、Constellation の off-chain payload 隔離は、規制視点では application-level データ隔離ほどクリーンではない。

Canton はネイティブで DAML(functional + obligation-based language)、マルチパーティアトミック決済、privacy by design を提供する。機関顧客(投資銀行 + 資産運用 + カストディ)は、同一 ledger 上で互いに完全な状態を露出することなく協業できる。JPM が Kinexys 上で行おうとしている 24/7 repo 市場 + collateral mobility では、Canton のプリミティブの適合度が Quorum を顕著に上回る。

## 起源と進化

2015-2020 年 に JPM は Quorum 上で [[fintech/jpmorgan-jpmd-coin|JPMD]] / Onyx Coin をインキュベートし、stablecoin + 内部チェーンの実現可能性を検証した。2021 年 に Daml/Canton が機関コンソーシアムを立ち上げ、DTCC + ゴールドマン・サックス + モルガン・スタンレーが参加した。2024-11  に JPM は Onyx から Kinexys へ改名すると同時に、Canton の評価を開始した。2026 Q2-Q3  に Kinexys は Canton への一部機能切り替えを完了し、repo + collateral を優先した。2027 H1  には、すべての主戦場移行を完了する計画で、Quorum フォークは内部テスト環境へ転換される。

Citi CTS / HSBC TDS / BNP Securities Services は類似の経路をたどるが、起点は異なる。Citi は Canton + Hedera を直接並行運用しており、HSBC は依然として Besu を主軸とし、Canton 計画を公表していない([[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] などのパブリックチェーン RWA が機関チェーンへ逆方向に展開している事例と対照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-overview|Besu 総覧]]
- [[systems/canton-overview|Canton プロトコル総覧]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## 出典

- Hyperledger Besu docs — https://besu.hyperledger.org/
- Canton Network (Digital Asset) — https://www.canton.network/

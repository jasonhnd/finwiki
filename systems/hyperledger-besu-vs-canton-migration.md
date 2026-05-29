---
title: Hyperledger Besu vs Canton · JPM 主戦場移行経路
aliases: [hyperledger-besu-vs-canton-migration, jpm-quorum-canton-migration, besu-vs-canton]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, blockchain, evm, daml, canton, besu, jpmorgan, kinexys]
sources:
  - https://besu.hyperledger.org/
  - https://www.canton.network/
status: candidate
---

# Hyperledger Besu vs Canton · JPM 主戦場移行経路

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM は 2026 年に Kinexys の主戦場を Canton へ移行開始 · 2027 H1 完了予定 ^[extracted]
- 移行を駆動する 4 つの要因:DAML が金融契約に適している · multi-party atomic · 創設メンバー戦略 · application-level 隔離 ^[extracted]
- Kinexys Chain は移行後も内部テスト + EVM 互換バックアップとして保持 ^[extracted]
- 他の G-SIB(Citi / HSBC / BNP)が新規プライベートチェーンを構築する際は依然として Besu がデフォルト ^[extracted]

## Mechanism / How it works

Quorum/Besu の優位性は EVM 互換性であり · Solidity ツールチェーンを再利用でき · 銀行顧客の受容度が高い(Ethereum の概念にすでに親しんでいる)。劣位性は multi-party atomic settlement に複雑なコントラクトの組み合わせが必要であること、また Constellation の off-chain payload 隔離が規制視点では application-level データ隔離ほどクリーンでないことである。Canton はネイティブで DAML(functional + obligation-based language)+ マルチパーティアトミック決済 + privacy by design を提供し、機関顧客(投資銀行 + 資産運用 + カストディ)は同一 ledger 上で互いに完全な状態を露出することなく協業できる。JPM が Kinexys 上で行おうとしている 24/7 repo 市場 + collateral mobility において、Canton のプリミティブの適合度は Quorum を顕著に上回る。

## Origin & evolution

2015-2020 年に JPM は Quorum 上で [[fintech/jpmorgan-jpmd-coin|JPMD]] / Onyx Coin をインキュベートし、stablecoin + 内部チェーンの実現可能性を検証した。2021 年に Daml/Canton が機関コンソーシアムを立ち上げ、DTCC + ゴールドマン・サックス + モルガン・スタンレーが参加。2024-11 に JPM は Onyx → Kinexys に改名すると同時に Canton 評価を開始。2026 Q2-Q3 に Kinexys は Canton への一部機能切り替えを完了(repo + collateral を優先)。2027 H1 にはすべての主戦場移行を完了する計画で、Quorum フォークは内部テスト環境に転換される。Citi CTS / HSBC TDS / BNP Securities Services は類似の経路を辿るが起点は異なる:Citi は Canton + Hedera を直接並行運用し、HSBC は依然として Besu を主軸として Canton 計画を公表していない([[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 等のパブリックチェーン RWA が機関チェーンへ逆方向に展開している事例と対照)。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-overview|Besu 総覧]]
- [[systems/canton-overview|Canton プロトコル総覧]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## Sources

- Hyperledger Besu docs — https://besu.hyperledger.org/
- Canton Network (Digital Asset) — https://www.canton.network/

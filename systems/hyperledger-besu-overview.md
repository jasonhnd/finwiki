---
title: Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)
aliases: [hyperledger-besu-overview, besu, quorum, jpm-quorum-besu]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, blockchain, evm, private-chain, hyperledger, besu, quorum]
sources: []
status: candidate
---

# Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it with [[fintech/INDEX|fintech index]] for adjacent context and [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode forensic — 三層 verify 技術]] for the broader system boundary.

> [!info] TL;DR
> Hyperledger Besu は ConsenSys が主導する EVM 互換エンタープライズ permissioned チェーンであり、前身は JPMorgan が 2015 年に立ち上げた Quorum(Geth フォーク)である。2020-08 に売却され Hyperledger に統合された。JPM は独自フォークを保持して改造を続けており、2024-11 に内部チェーンを Kinexys Chain に改名、依然として Besu の月間 commit でトップ 5 のコントリビューターである。

## Key facts

- Quorum 1.0 は 2017-05 にオープンソース化、2020-08 に JPM が ConsenSys へ売却し Besu に統合 ^[extracted]
- 内部 Quorum フォークは 2024-11 に Kinexys Chain(旧称 Onyx Chain)へ改名 ^[extracted]
- コンセンサスは IBFT(Istanbul BFT)· JPM 内部 9 つの validator(5 リージョン + 4 バックアップ) ^[extracted]
- 2 秒のブロック生成 · 単一ブロックで即時 finality · 顧客は gas 無料(JPM が負担) ^[extracted]
- プライバシー層 Constellation:ZK プライベートトランザクションプール · チェーン上は txHash + メタデータのみ ^[extracted]
- EIP-2612 permit + EIP-3009 transferWithAuthorization をサポート · EIP-7708 は未サポート ^[extracted]
- JPM が独自フォークを保持しているのはコントロール戦略:オープンソース Besu + 内部 Quorum フォークを並行運用 ^[inferred]

## Mechanism / How it works

Besu は **完全 EVM 互換の permissioned チェーン** である:Solidity コントラクトは直接移行可能で、ツールチェーン(Hardhat / Foundry / web3.js)も改修不要。コンセンサス層は PoW/PoS ではなく IBFT を採用し、4 つ以上の validator があれば BFT スタイルの finality を起動できる。プライバシー層 Constellation は ZK ベースのプライベートトランザクションサブシステムで、payload は validator 間で P2P 暗号化により直接転送され、チェーン上には txHash + タイムスタンプのみが残る。これによって「permissioned チェーン上での選択的プライベートトランザクション」を実現している。JPM の Kinexys Chain における 9 ノード構成は 5 リージョン + 4 バックアップをカバーし、これが G-SIB シナリオにおける Besu の典型的な展開形態である。

## Origin & evolution

2015 年 JPM が Quorum を開始 · Geth フォークをベースとした。2017-05 Quorum 1.0 をオープンソース化。2018-2020 年に JPM は Quorum の商業化を試みたが失敗 · 2020-08 に ConsenSys に売却され、Hyperledger Besu(Linux Foundation 治理)に統合された。JPM は同時に独自フォークを保持して改造を続け · 2024-11 に内部チェーンを Onyx Chain から Kinexys Chain に改名([[fintech/jpmorgan-jpmd-coin|JPMD]] が現存の通貨レッグ)。Linux Foundation は 2025 年に「Decentralized Trust」財団を設立し Hyperledger 治理を引き継いだが、JPM は依然としてコアメンバーである。Citi / HSBC / BNP 等の G-SIB が新たにプライベートチェーンを構築する際 · Besu を依然としてデフォルトの選択肢としており —— これは EVM 互換性のネットワーク効果である([[fintech/bis-project-agora-overview|BIS Agora]] 等のクロス G-SIB マルチ CBDC パイロットにおけるチェーン選定と対照)。

## Counterpoints

- IBFT は大規模 validator セット(>20)においてスループットが顕著に低下する · permissioned シナリオでは問題ないが拡張には制約あり
- Constellation の off-chain payload モードは「偽プライバシー、実態は隔離」と批判されている:規制当局は強制的に証拠開示を要求できる
- JPM 自身は主戦場を [[systems/canton-overview|Canton]] への移行を進めている → Besu の将来の成長は他の G-SIB に依存する

## Open questions

- JPM の Canton 移行完了(2027 H1)後、Besu は内部にとってどれほどの戦略的価値を残すか?
- Besu は EIP-7708 等の新規プリミティブを導入し、Canton のマルチパーティアトミック化と競争するか?
- Linux Foundation Decentralized Trust は Citi/HSBC 等の新規銀行をコアコントリビューターとして惹きつけられるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## Sources


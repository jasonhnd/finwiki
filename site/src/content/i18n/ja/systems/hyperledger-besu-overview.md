---
source: systems/hyperledger-besu-overview
source_hash: 0e94fb3106b3a431
lang: ja
status: machine
fidelity: ok
title: "Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)"
translated_at: 2026-06-03T01:06:46.358Z
---
# Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] の下に位置する。ピア比較や対照の文脈では [[systems/canton-overview|Canton(機関向け DLT の対照)]] と合わせて読み、より広いシステムおよび規制上の境界については [[fintech/INDEX|fintech index]] と合わせて読む。

> [!info] 要約
> Hyperledger Besu は ConsenSys が主導する EVM 互換のエンタープライズ向け許可型チェーンであり、前身は JPMorgan が 2015 年に立ち上げた Quorum(Geth フォーク)である。2020-08 に売却され、Hyperledger に統合された。JPM は独自フォークを保持して改造を続けており、2024-11 に内部チェーンを Kinexys Chain に改名した。依然として Besu の月間コミットでトップ 5 のコントリビューターである。

## 主要事実

- Quorum 1.0 は 2017-05 にオープンソース化され、2020-08 に JPM が ConsenSys へ売却し Besu に統合された ^[extracted]
- 内部 Quorum フォークは 2024-11 に Kinexys Chain(旧称 Onyx Chain)へ改名された ^[extracted]
- コンセンサスは IBFT(Istanbul BFT)。JPM 内部 9 つのバリデータ(5 リージョン + 4 バックアップ)で構成される ^[extracted]
- 2 秒のブロック生成、単一ブロックで即時ファイナリティ、顧客は gas 無料(JPM が負担) ^[extracted]
- プライバシー層 Constellation: ZK プライベートトランザクションプール。チェーン上には txHash + メタデータのみが残る ^[extracted]
- EIP-2612 permit + EIP-3009 transferWithAuthorization をサポートし、EIP-7708 は未サポート ^[extracted]

## 仕組み

Besu は **完全 EVM 互換の許可型チェーン** である。Solidity コントラクトは直接移行可能で、ツールチェーン(Hardhat / Foundry / web3.js)も改修不要である。コンセンサス層は PoW / PoS ではなく IBFT を採用し、4 つ以上のバリデータがあれば BFT スタイルのファイナリティを起動できる。プライバシー層 Constellation は ZK ベースのプライベートトランザクションサブシステムであり、ペイロードはバリデータ間で P2P 暗号化により直接転送され、チェーン上には txHash + タイムスタンプのみが残る。これによって「許可型チェーン上での選択的プライベートトランザクション」を実現している。JPM の Kinexys Chain における 9 ノード構成は 5 リージョン + 4 バックアップをカバーしており、G-SIB シナリオにおける Besu の典型的な展開形態である。

## 起源と変遷

2015 年 JPM が Quorum を開始し、Geth フォークをベースにした。2017-05 Quorum 1.0 をオープンソース化。2018-2020 年に JPM は Quorum の商業化を試みたが失敗し、2020-08 に ConsenSys へ売却され、Hyperledger Besu(Linux Foundation 治理)に統合された。JPM は同時に独自フォークを保持して改造を続け、2024-11 に内部チェーンを Onyx Chain から Kinexys Chain に改名した([[fintech/jpmorgan-jpmd-coin|JPMD]] が現存の通貨レッグ)。Linux Foundation は 2025 年に「Decentralized Trust」財団を設立して Hyperledger 治理を引き継いだが、JPM は依然としてコアメンバーである。Citi / HSBC / BNP などの G-SIB が新たにプライベートチェーンを構築する際にも、Besu は依然としてデフォルトの選択肢である。これは EVM 互換性のネットワーク効果である([[fintech/bis-project-agora-overview|BIS Agora]] などのクロス G-SIB マルチ CBDC パイロットにおけるチェーン選定と対照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## 出典

- Hyperledger Besu docs — https://besu.hyperledger.org/

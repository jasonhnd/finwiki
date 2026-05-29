---
title: "[opinion] DA layer 全景対照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA"
source_entry: systems/data-availability-celestia-eigenda-blob-comparison.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — DA layer 全景対照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA

> 出典エントリー: `systems/data-availability-celestia-eigenda-blob-comparison.md`

## Counterpoints

- **alt-DA 価格優位は引き続き縮小**:Pectra 倍増 + Fusaka PeerDAS 10x 後 · alt-DA は 1.5-2x 価格優位のみ残る · 大手 rollup には魅力なし
- **EigenDA の「ETH stake 借用」は cascade risk**:Vitalik は restaking を「アプリケーション層コンセンサス」に過度拡張すべきでないと複数回警告 · EigenDA は大型アプリケーション · incident があれば EigenLayer 全エコシステムに波及する可能性
- **modular thesis は本当に長期価値を創造するか**:コスト以外に · alt-DA は他の differentiated value を提供するか?コスト戦のみなら · 長期 race-to-bottom · 利益率は薄い
- **機関は永遠に alt-DA を受け入れない**:institutional risk committee は L1 DA を厳格に要求 · これは alt-DA の長期 ceiling
- **L1 DA の「sufficiently decentralized」も変化**:Ethereum クライアント集中度(Geth 50%+ · Prysm 30%+ · Lido 30%+ stake)は長期的に信頼可能とは限らない · ただし alt-DA 集中度はさらに高い
- **Celestia の「sovereignty」論調は ETH エコシステム拡大下で周縁化される可能性**:大半の開発者は最終的に ETH エコシステムを選ぶ · sovereign rollup は少数ユースケース

## Open questions

- **Fusaka PeerDAS のスケジュール**:2026-Q4 / 2027-Q1 / さらに遅い?alt-DA 価格優位消滅のスケジュールを直接決定
- **EigenDA は Ethereum blob の monopoly ceiling を越えられるか**:ETH-aligned 市場で 30%+ シェアを取るには institutional が restaking セキュリティを受け入れる必要 · SEC / EU MiCA の restaking 定性次第
- **Celestia / Avail / NEAR DA は新たな differentiation が登場するか**:コスト以外に · sovereign rollup / プライバシー DA / specialized DA の新ユースケースがあるか
- **multi-DA hybrid は主流化するか**:エンジニアリング複雑度 vs セキュリティ + コスト優位が成立するか
- **機関 RWA は新たな institutional-grade DA を駆動するか**:BlackRock / Franklin / Goldman は DA layer に特定の規制 attestation を要求するか
- **AggLayer / Polygon CDK の DA strategy**:Polygon は L1 blob + Celestia + Avail を同時サポート · 長期的にどれに偏るか?
- **DA layer と sequencer decentralization の交互作用**:Espresso / Astria 等の shared sequencer が複数 rollup にサービス · DA 選択とどう結合するか
- **Light client / DAS セキュリティの実戦検証**:DAS は理論的に majority malicious 安全 · しかし実戦では attack scenario が少ない · ブラックスワン事象があるか

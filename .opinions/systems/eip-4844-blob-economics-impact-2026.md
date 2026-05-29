---
title: "[opinion] EIP-4844 blob 経済と 2026 市場影響 · Dencun から Pectra · Fusaka までの全景"
source_entry: systems/eip-4844-blob-economics-impact-2026.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — EIP-4844 blob 経済と 2026 市場影響 · Dencun から Pectra · Fusaka までの全景

> 出典エントリー: `systems/eip-4844-blob-economics-impact-2026.md`

## Counterpoints

- **Blob fee market は極端混雑時に失効の可能性**:理論上 blob fee は 1000+ gwei に達し得るが · 実証ではユーザーは fee spike 時に tx を停止する傾向 · 長期 fee market 設計は大 spike シナリオで完全には検証されていない
- **Pectra 倍増は user 増加で速く食われる可能性**:Base / Arbitrum 等の頭部 L2 ユーザー成長が継続 · 長期 blob target は再び上限に達する · Fusaka は一時的な解決策
- **PeerDAS のエンジニアリング複雑度が高い**:EIP-7594 spec は EIP-4844 より ~3x 複雑 · validator クライアントは重大アップグレードが必要 · 2026-Q4 スケジュールに slip リスク
- **Alt-DA は完全には消滅しない**:Cosmos / Move / sovereign rollup は常に非 ETH-aligned DA を必要とする · Celestia / NEAR DA はこれらのセグメントで依然市場あり
- **機関の DA 選好は価格で変わらない可能性**:institutional risk committee は長期的に L1 DA を好む · blob cost がさらに下がっても · 機関は EigenDA / Celestia を受け入れない
- **Sequencer 経済は依然中央集権化**:Pectra で sequencer margin が上昇 · ただし sequencer 自身は依然中央集権化(ほぼ全 ZK/OP rollup の sequencer は中央集権運営)· これがより大きな非中央集権化負債
- **Blob commitment が KZG で trusted setup に依存**:Powers of Tau ceremony 2023 は完了 · ただし trusted setup の一部が漏洩すれば · 長期的に KZG セキュリティに影響する可能性 · STARK-based 代替(trusted setup なし)が長期経路

## Open questions

- **Fusaka PeerDAS 実際稼働スケジュール**:2026-Q4 / 2027-Q1 / さらに遅い?spec 複雑度 + validator クライアントアップグレードが bottleneck
- **Blob target 長期調整頻度**:毎回のハードフォークで調整?それとも dynamic target(demand に応じて自動調整)導入?
- **Full danksharding スケジュール**:理論 32 MB/block · 2030+ 長期ビジョンか · 2028 達成可能か?
- **L2 sequencer decentralization スケジュール**:Pectra/Fusaka がコストを解決 · ただし sequencer 中央集権化はより大きな問題 · 主流 L2 が shared sequencer 導入するのはいつ
- **Blob 18 日 prune 後の long-term archive**:Blobscan 等の archive node は全歴史 blob を長期保存可能か?archive 経済モデルが不明瞭
- **Alt-DA に新世代 differentiation 登場するか**:コスト以外に · specialized DA(privacy DA · institutional DA 等)新 vertical があるか
- **Blob fee burning 導入されるか**:現在 blob fee は proposer へ · burn(EIP-1559 類似)に変更すれば · ETH supply に影響
- **ZK proof 提出コストもいつ大幅に下落するか**:ZK proof verifier gas は依然 ZK rollup の主コスト · Verkle tree / SNARK aggregation 等の最適化があるか
- **MEV は blob 市場で新形態を生むか**:blob はデータで · transaction のような直接 MEV はない · ただし blob の包装順序は sandwich-like behavior を生む可能性

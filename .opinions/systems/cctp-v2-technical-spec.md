---
title: "[opinion] CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service"
source_entry: systems/cctp-v2-technical-spec.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service

> 出典エントリー: `systems/cctp-v2-technical-spec.md`

## Counterpoints

**単一信頼批判**:Circle Attestation Service は N 個の Circle 自営ノードのマルチシグ —— 本質的に Circle 1 社の管理下にある。Circle が国家により強制接収された場合(Tornado Cash OFAC 案後の USDC 凍結判断に類似)、CCTP V2 の全トラフィックは Circle 単独の判断に従う。これは LayerZero の DVN multi-source モデルと対照的 —— LayerZero は少なくともプロトコル層でマルチシグの非中央集権化設計を行っている。

**Fast Transfer の資本リスク**:Circle treasury $4.34B は十分に見えるが、ソースチェーンで大規模 reorg が発生した場合(ETH メインネットは確率極めて低いが、L2 reorg は既に発生)、Circle は瞬時に数千万の損失を負う可能性がある。

## Open questions

- Circle Attestation Service の具体的なノード数と地理的分布は?
- Hooks の V2 ローンチ後 1 年内の実際の使用率は?
- Circle が担保する reorg 損失が treasury 許容を超えた場合、メカニズムはどう degrade するか?
- CCTP V2 は stake-based challenger を導入して非中央集権化を強めるか?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] の各スキームの信頼前提と対比)

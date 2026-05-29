---
title: "[opinion] Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy"
source_entry: systems/canton-daml-technical-spec.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy

> 出典エントリー: `systems/canton-daml-technical-spec.md`

## Counterpoints

DAML の学習曲線は急峻 —— 大半のブロックチェーン開発者は Solidity/Move/Rust に習熟しており、DAML への転換は新言語の学習に等しい。これは Canton が公開チェーンエコシステムから開発者を引き付けにくい根本的理由。さらに DAML のクローズドソース期(2014-2017)と初期の特許戦略により OSS コミュニティの一部は警戒しており、現在は Apache 2.0 ではあるものの、エコシステム内での認知シェアは依然 EVM を大きく下回る。

## Open questions

- DAML 4.x のロードマップに EVM 互換層は追加されるか?
- Sub-transaction privacy は Global Synchronizer 妥協時の実際の保護強度は?
- DAML 形式検証ツールチェーン(Move Prover、Certora 類似)の発展は?
- [[fintech/bis-project-agora-overview|BIS Agora]] 等のクロス CBDC パイロットで、DAML は契約層の標準となるか?

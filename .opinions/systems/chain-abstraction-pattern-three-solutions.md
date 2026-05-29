---
title: "[opinion] チェーン抽象の 3 大主流方式 · AggLayer / NEAR / EigenLayer"
source_entry: systems/chain-abstraction-pattern-three-solutions.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — チェーン抽象の 3 大主流方式 · AggLayer / NEAR / EigenLayer

> 出典エントリー: `systems/chain-abstraction-pattern-three-solutions.md`

## Counterpoints

- 3 方式が抽象する次元が異なるため、厳密には直接競争ではなく、異なる問題への解決策である
- AggLayer は ZK 証明性能の継続的向上に依存しており、ZK の進捗が鈍化すれば AggLayer の UX 優位は弱まる
- NEAR MPC 経路には鍵カストディリスク(MPC ノード結託の理論的可能性)があり、長期セキュリティは十分検証されていない
- EigenLayer restaking は新たな slashing リスクの重畳を導入、機関が EigenLayer でセキュリティを借用する勇気を本当に持つかは疑問([[fintech/jpmorgan-jpmd-coin|JPMD]] が restaking ではなく Canton を選択した対照を参照)

## Open questions

- 3 方式は融合(AggLayer が NEAR Intents を統合するなど)するのか、それとも分裂(3 経路が独立に成熟)するのか?
- どの抽象層が機関チェーン(Tempo / Arc)の第一選択となるか?
- 規制は MPC クロスチェーン鍵制御(NEAR モデル)にどう対応するか?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] の各方式の信頼前提スペクトラムと対照)

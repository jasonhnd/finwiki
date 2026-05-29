---
title: "[opinion] チェーン抽象モデル概観 · ユーザーが基盤チェーンを意識しない次世代インフラ"
source_entry: systems/chain-abstraction-pattern-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — チェーン抽象モデル概観 · ユーザーが基盤チェーンを意識しない次世代インフラ

> 出典エントリー: `systems/chain-abstraction-pattern-overview.md`

## 推論 (from Key facts)

- embedded wallet + チェーン抽象 = Web2 級 UX、2026+ にリテールがオンチェーン化する鍵 ^[inferred]
- クロスチェーンブリッジは既にコモディティ化し、価値捕捉はチェーン抽象層に上方シフト ^[inferred]

## Counterpoints

- 「ユーザーがチェーンを意識しない」はセキュリティ / パフォーマンス / gas が全て抽象化されたことを前提とする → しかし基盤チェーンが失敗した時(rollup 停止 / L1 混雑)、抽象層は一貫体験をコミットできない
- 規制はチェーン抽象に反対する可能性 —— ユーザーが資産がどのチェーンにあるか知らない場合、問題発生時の管轄帰属が判断困難
- 「主権チェーン vs チェーン抽象」二分は過度な単純化の可能性 —— 機関チェーンは抽象を拒否するとは限らず、「ホワイトリストチェーン抽象」を選択する可能性がある
- 3 方式の技術経路差異は極めて大きく、長期的に分裂したまま収斂しない可能性

## Open questions

- AggLayer / NEAR / EigenLayer のうちどれが事実上の標準となるか?それとも共存か?
- 規制(MiCA / GENIUS)はチェーン抽象に対していつ明確なルールを出すか?
- 機関チェーン(Tempo / Arc / Kinexys)はチェーン抽象を受け入れるか?([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] のマルチチェーン上の実際の抽象層と対照)

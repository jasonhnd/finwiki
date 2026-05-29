---
title: "[opinion] スマートコントラクト bytecode フォレンジック — 三層 verify 技術"
source_entry: security/bytecode-forensic-three-tier-verify.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — スマートコントラクト bytecode フォレンジック — 三層 verify 技術

> 出典エントリー: `security/bytecode-forensic-three-tier-verify.md`

## Counterpoints

> [!question] Open questions
> - Layer 2でselectorヒット後、signatureだけでなくfnの実際の挙動をどうverifyするか
> - bytecode類似度がどの程度であれば「同一チーム」と認定できるか(業界にhard thresholdは存在しない)

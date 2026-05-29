---
title: "[opinion] Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)"
source_entry: systems/hyperledger-besu-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)

> 出典エントリー: `systems/hyperledger-besu-overview.md`

## 推論 (from Key facts)

- JPM が独自フォークを保持しているのはコントロール戦略:オープンソース Besu + 内部 Quorum フォークを並行運用 ^[inferred]

## Counterpoints

- IBFT は大規模 validator セット(>20)においてスループットが顕著に低下する · permissioned シナリオでは問題ないが拡張には制約あり
- Constellation の off-chain payload モードは「偽プライバシー、実態は隔離」と批判されている:規制当局は強制的に証拠開示を要求できる
- JPM 自身は主戦場を [[systems/canton-overview|Canton]] への移行を進めている → Besu の将来の成長は他の G-SIB に依存する

## Open questions

- JPM の Canton 移行完了(2027 H1)後、Besu は内部にとってどれほどの戦略的価値を残すか?
- Besu は EIP-7708 等の新規プリミティブを導入し、Canton のマルチパーティアトミック化と競争するか?
- Linux Foundation Decentralized Trust は Citi/HSBC 等の新規銀行をコアコントリビューターとして惹きつけられるか?

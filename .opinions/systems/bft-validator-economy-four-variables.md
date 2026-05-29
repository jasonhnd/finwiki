---
title: "[opinion] BFT validator 経済の4変数 · yield / slashing / MEV / 集中度"
source_entry: systems/bft-validator-economy-four-variables.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — BFT validator 経済の4変数 · yield / slashing / MEV / 集中度

> 出典エントリー: `systems/bft-validator-economy-four-variables.md`

## Counterpoints

- 「yield 健全レンジ」は経験値であり、チェーン生態系ごとに許容水準は異なる
- Slashing は family validator 時代に過度に厳格な副作用を見せ、2024 以降は多くのチェーンで slashing の厳格度を引き下げた
- 「集中度の多次元」にはガバナンス集中度(DAO 投票占有率)が含まれず、分析として不完全
- MEV の完全排除が最適とは限らない —— 一部の MEV は市場効率のシグナル(アービトラージによる価格均衡)である

## Open questions

- ETH などの大規模チェーンは、プロトコル層で単一 validator 比率を硬性制限すべきか?
- restaking(EigenLayer)は 4 変数フレームワークを再構築するか(「安全レンタル収益」次元を追加するか)?([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)
- ZK / proof market の時代において、validator 経済と prover 経済はどう結合するか?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] における各 DEX の prover マーケットでの役割と対照)

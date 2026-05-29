---
title: "[opinion] EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース"
source_entry: systems/eigenlayer-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース

> 出典エントリー: `systems/eigenlayer-overview.md`

## Counterpoints

**Rehypothecation リスク** —— 一筆の ETH が同時に N 個の AVS を担保し、複数の AVS が同時に攻撃を受ければ、システム的な slash が「暗号経済 bank run」を引き起こす可能性。Vitalik は複数回警告(2024)EigenLayer は「アプリケーション層コンセンサス」に過度拡張すべきでない —— これは Ethereum コミュニティの中核緊張点。

さらに EIGEN の inter-subjective dispute モデルは本質的に「トークン保有者投票」であり —— 金額が十分大きければ資本に操縦される可能性があり、これは「暗号経済セキュリティ」の本来の意図と内在的に矛盾する。

## Open questions

- Slashing 起動後 1 年内の実際の slash 事象数と金額は?
- Rehypothecation 係数(平均 1 筆 ETH が同時に何個の AVS を担保するか)は?
- Vitalik 警告は Ethereum コミュニティが EigenLayer 拡張を制限する具体的行動に進化するか?
- Tempo / Arc 等の新 L1 は本当に EigenLayer 起動期セキュリティを採用するか?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] における各 DEX の基盤チェーンセキュリティ選択と対照)

---
title: "[opinion] EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁"
source_entry: systems/eigenlayer-avs-mechanism.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁

> 出典エントリー: `systems/eigenlayer-avs-mechanism.md`

## Counterpoints

**Slashing 設計の二重困難**:
- 厳格(高 slash %)→ Operator が opt-in を躊躇 · AVS が検証集合を集められない
- 緩い(低 slash %)→ 攻撃コスト不足 · AVS セキュリティが形骸化

実際 1 年内に大半の AVS は保守的な slash 比率(1-5%)を選択し、これが「暗号経済セキュリティ」の実際の威嚇力を弱めた。

EIGEN inter-subjective 仲裁の操縦可能性は重要リスク —— AVS の争議 slash 金額が EIGEN 流通時価総額を大きく上回る場合、資本による投票操縦はほぼ不可避([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] における各社ガバナンス token の操縦コスト曲線と対照)。

## Open questions

- 実際の slash 事象における objective vs inter-subjective の比率は?
- EIGEN token 流通時価総額と単一 slash 上限のセキュリティ境界は?
- Operator のマルチ AVS における実際の平均参加度は?
- LST restaking における Lido 等の LST プロトコルリスク事象での連鎖影響は?([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] における暗号ネイティブ側の感染経路と対照)

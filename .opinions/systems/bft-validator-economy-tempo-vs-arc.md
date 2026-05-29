---
title: "[opinion] Tempo vs Arc · 機関チェーン validator 設計の2経路"
source_entry: systems/bft-validator-economy-tempo-vs-arc.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Tempo vs Arc · 機関チェーン validator 設計の2経路

> 出典エントリー: `systems/bft-validator-economy-tempo-vs-arc.md`

## Counterpoints

- Tempo の 4 validator は BFT 耐障害性の限界に触れている —— いずれかの国家が 1 validator を抑圧すれば liveness が破壊される
- Arc の三段階ロードマップは歴史的に完走した事例がない(EOS 21 BP モデルは停滞)→ 「漸進」は永遠に達成されない可能性
- いずれの経路も規制が KYC チェーンの長期存続を許容することを前提とするが、独占禁止 / 金融インフラ集中防止の要求により validator 拡大が強制される可能性がある
- Tempo 4 validator モデル vs Arc 50 validator モデルは検閲耐性において差が顕著ではない可能性(50 全員 KYC = 全員が規制で名指し可能)

## Open questions

- Tempo の 4 validator は本当に長期にわたって全世界の加盟店に安定的にサービス提供できるか?(地理的分散性)
- Arc フェーズ 3 のガバナンス PoS は 5 年以内に実現可能か?
- 第 3 の経路(EigenLayer restaking + 機関チェーンなど)が登場し、機関チェーンが ETH validator 集合を借用するシナリオはあるか?([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)
- DEX は機関チェーン上で運営する余地があるか?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] における各社の許可チェーンへの態度と対照)

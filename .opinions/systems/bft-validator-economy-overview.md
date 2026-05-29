---
title: "[opinion] BFT validator 経済学概観 · 4変数と機関チェーンの退化"
source_entry: systems/bft-validator-economy-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — BFT validator 経済学概観 · 4変数と機関チェーンの退化

> 出典エントリー: `systems/bft-validator-economy-overview.md`

## 推論 (from Key facts)

- MEV は機関チェーンではほぼゼロ化(注文フローは機関 OTC 中心) ^[inferred]

## Counterpoints

- 「機関チェーンの validator 経済退化」は規制が KYC チェーンの長期存続を許容することを前提としている —— マネーロンダリング対策の圧力により機関チェーンが validator 集合の拡大を強制される可能性がある
- 「MEV が機関チェーンでゼロ化」は 2026 時点のスナップショット;機関チェーンがリテールフロー(小売商品のオンチェーン化)を導入すれば、MEV は再び発現する
- 「漸進的非中央集権化」(Arc 三段階)は法令対応の体裁である可能性があり、真の非中央集権化はガバナンス捕捉の下で永遠に達成されないかもしれない

## Open questions

- 機関チェーンの KYC validator 集合は、どの規模まで拡大すれば「十分に分散」と言えるか?(20?50?100?)
- 規制(OFAC / EU MiCA)は KYC validator を被規制金融インフラとして指定するか?
- チェーン抽象層の台頭後、validator 経済はさらに抽象化(EigenLayer restaking など)するか?([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)
- グローバル DEX 主流 5 社における validator 集中度のパフォーマンスは?([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] 参照)

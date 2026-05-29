---
title: "[opinion] Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧"
source_entry: systems/pectra-upgrade-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Ethereum Pectra アップグレード · 4 EIP デュアルトラック戦略総覧

> 出典エントリー: `systems/pectra-upgrade-overview.md`

## 推論 (from Key facts)

- 「L1 厚化 + L2 拡張」のデュアルトラック · 単なる L2-only ではない ^[inferred]

## Counterpoints

- EIP-7251 により「家庭 staker」が相対的に圧迫され · 中央集権が加速
- EIP-7702 はウォレットの複雑度を増加 · phishing と session key 濫用という新たな攻撃面ももたらす
- 「L1 厚化 + L2 拡張」デュアルトラックは長期的には資本が両端で相互に蝕み合う可能性
- Pectra は EVM 非互換チェーン(Tempo / Arc / Solana / Canton)には影響しない · Ethereum 標準の波及を制限([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] における Solana 等の非 EVM チェーンの並行進化と対照)

## Open questions

- EIP-7702 は 5 年内に基本的に ERC-4337 を AA 主流経路として置き換えるか?([[agent-economy/erc-7715-overview|ERC-7715]] が両経路で組み合わされる形と対照)
- EIP-7251 後の Lido / Coinbase の実際の validator 統合数 · 中央集権が規制懸念をトリガーする閾値はどこか?
- BLS プリコンパイルは新たな light client クロスチェーンプロトコルの爆発を駆動するか?

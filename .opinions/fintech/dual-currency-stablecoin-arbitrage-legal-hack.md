---
title: "[opinion] 二通貨アービトラージ · §501 リーガル hack と規制脆弱性"
source_entry: fintech/dual-currency-stablecoin-arbitrage-legal-hack.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — 二通貨アービトラージ · §501 リーガル hack と規制脆弱性

> 出典エントリー: `fintech/dual-currency-stablecoin-arbitrage-legal-hack.md`

## 推論 (from Key facts)

- DEX プールによるマーケットメイク ≠ OTC FX desk · これが現状の法的境界における重要論点 ^[inferred]

## Counterpoints

規制 critics の主張:「ユーザー自主」論は無効 —— あらゆる facilitator (DEX / aggregator)が routing / pricing アルゴリズムを持てば、実質的にマーケットメイカーであり · FX / commodity 規制を受けるべき。SEC は既に Uniswap に Wells Notice を発出(2024)· 道筋は不透明。日本 FSA も stablecoin swap を FX 類とみなす可能性あり · 為替レート discovery を伴うため。規制の最終的な落とし所は「である vs ない」ではなく · 「scope の広さ + 報告義務の重さ」となる可能性があり、最終的には [[fintech/fx-onchain-as-stablecoin-final-boss|FX オンチェーン化 = ステーブルコインのラスボス]] の実装スピードに影響を与える。

## Open questions

どの規制当局(SEC / OCC / FCA / FSA)が最初に声明を出すか?米国一国が再定義したら · EU / 日本は追随するか?DEX は FX dealer 登録を要求されるか?経路上の aggregator (LiFi / Stargate / Squid)の責任配分は?3 発行体(Circle / JPYC Inc. / SocGen)は能動的に self-regulatory MOU を結ぶか?

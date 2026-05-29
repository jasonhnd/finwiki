---
title: "[opinion] AP2 · Google Agent Payments Protocol 概観"
source_entry: agent-economy/ap2-overview.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — AP2 · Google Agent Payments Protocol 概観

> 出典エントリー: `agent-economy/ap2-overview.md`

## Counterpoints

AP2 が Google エコシステム(Gemini + Google Pay)と強く結合していることは閉ループの優位を形成する一方、**OpenAI / Anthropic / Stripe 等の競合は直接採用しない** ことを意味する — 彼らはそれぞれ MPP / ACP の路線を持つ。マルチプロトコルの並存は merchant 統合コストを押し上げ、かえって agent 経済の着地を遅らせる可能性がある。機関はまだ態度を表明していない — JPM / Goldman / BNY は依然として [[fintech/institutional-stablecoin-deposit-token-thesis|institutional tokenization / deposit token]] に集中しており、agent payment は retail + SMB の戦場である。

## Open questions

- AP2 v1.0 安定版の merchant 採用スピードは?
- Visa Trusted Agent Protocol と AP2 の互換性協議はいつ着地するか?
- ステーブルコイン陣営(Circle/Coinbase USDC settlement adapter)との実際のトラフィック分布は?
- agent 誤操作の法的責任の帰属が新たな保険/保証モデルを生むか?

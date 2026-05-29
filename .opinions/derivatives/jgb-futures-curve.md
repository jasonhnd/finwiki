---
title: "[opinion] JGB futures market and curve"
source_entry: derivatives/jgb-futures-curve.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — JGB futures market and curve

> 出典エントリー: `derivatives/jgb-futures-curve.md`

## Counterpoints

- "JGB futures liquidity is concentrated only at 10Y" — Largely true for the standard contracts; 5Y is meaningfully liquid for asset-swap and curve trades, but 20Y open interest is thin. Mini 10Y serves smaller-size hedgers but is not a separate market.
- "Basis trade is a free lunch" — No. It requires balance sheet, repo lines, and exposes the short-futures leg to CTD switches and squeezes. P&L volatility is non-trivial.
- "BoJ holdings make the futures market dysfunctional" — Partly true at YCC peak; market functioning indicators showed deterioration. But the market never closed; basis trades and curve trades continued, albeit with compressed margins.
- "Mini 10Y is a retail vehicle" — Smaller size but used by professional smaller accounts and for residual hedging; not a pure retail product.
- "Foreign accounts dominate" — Night session yes; daytime is a mix with significant Japanese-dealer market-making.

## Open Questions

- As BoJ JGB holdings decline (or roll down), how quickly will CTD repo specialness normalize and basis-trade economics improve?
- How does the post-LIBOR migration to TONA-OIS for the discount curve (see [[derivatives/ois-tona-curve]]) interact with JGB-futures implied repo rates?
- Will 20Y JGB futures gain liquidity as long-end demand from life insurers and pension funds increases under a normalized rate environment?
- How would a Japan-rate-shock scenario (10Y yield jumping 50 bp+) cascade through cash-futures basis and dealer P&L?
- Does the JSCC clearing model need adjustment for larger and more concentrated open-interest positions?

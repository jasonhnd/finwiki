---
title: "[opinion] FX STP and broker liquidity aggregation"
source_entry: derivatives/fx-stp-broker-aggregation.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — FX STP and broker liquidity aggregation

> 出典エントリー: `derivatives/fx-stp-broker-aggregation.md`

## Counterpoints

- **A-book purity claims**: brokers that advertise "100% STP / A-book" often still internalize a fraction of flow; the marketing claim is rarely audited.
- **Last-look vs no-last-look**: bank liquidity providers reserve a "last look" window to reject trades; this can hurt execution quality. ECNs like LMAX enforce no-last-look; many bank-aggregated feeds permit it. The trade-off affects spread vs fill rate.
- **Spread tightness vs hidden cost**: advertised spread does not capture markup, slippage, or rejection rate. Realized execution cost is the better metric but rarely disclosed.
- **Prime-broker concentration**: post-2015 PB contraction left the system more concentrated. A failure or pull-back at a top PB would cascade through dozens of broker / aggregator clients.
- **Off-shore arbitrage**: Japanese residents are formally prohibited from trading through unlicensed offshore brokers but enforcement is patchy; offshore venue flow distorts published Japan turnover statistics.

## Open questions

- Will JFSA mandate fuller A-book / B-book disclosure as part of best-execution rule modernization?
- How do the proprietary aggregation engines of GMO Click, SBI FX Trade, and DMM FX compare in slippage and reject-rate metrics?
- How is the rise of crypto-FX and 24/7 trading reshaping the Tokyo-session liquidity profile of JPY-pair ECNs?
- What is the realistic substitution between bank single-dealer platforms (e.g., Citi Velocity, JPM eFX) and multi-bank ECNs for Tokyo-session JPY liquidity?
- How does the post-YCC [[derivatives/ois-tona-curve|OIS-TONA curve]] affect overnight financing spreads and therefore retail-FX swap-point revenue at brokers?

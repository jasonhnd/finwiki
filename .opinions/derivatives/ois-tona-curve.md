---
title: "[opinion] OIS TONA curve and JPY discounting"
source_entry: derivatives/ois-tona-curve.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — OIS TONA curve and JPY discounting

> 出典エントリー: `derivatives/ois-tona-curve.md`

## Counterpoints

- "TONA is the same as the BoJ policy rate" — No. TONA is the actual transaction-weighted rate from the call market. BoJ's policy guideline targets a range around the policy rate, and TONA can sit slightly above or below the target on any given day depending on reserve conditions.
- "OIS replaced LIBOR seamlessly" — Mostly true for JPY but with a transition cost: legacy contracts required ISDA fallback amendment, credit-adjustment spreads (CAS), and some valuation methodology changes. The transition was operationally complex even though the rate-mechanic is cleaner.
- "OIS curve is the only discount curve" — For JPY-cash-collateralized trades, yes. For trades collateralized in USD cash (e.g., some cross-border bilateral), USD SOFR-OIS is the discount; for non-collateralized, a funding-adjusted curve applies.
- "TIBOR is dead" — No. TIBOR survives as a term-fixing reference for JPY loans and some structured products. JBATA continues to administer it post-LIBOR transition.
- "OIS forward rates predict BoJ rate paths perfectly" — They embed risk-neutral expectations plus a small term premium. Realized outcomes can diverge, especially during regime shifts (e.g., the March 2024 negative-rate exit was somewhat anticipated by OIS but with significant uncertainty in timing).

## Open Questions

- How does TONA's quality as a benchmark hold up if BoJ ample-reserves policy continues to depress call-market activity?
- What is the optimal collateral-rate curve for cross-border JPY trades with USD or EUR cash collateral?
- How will the OIS-TONA curve evolve through a multi-hike normalization cycle? Has the curve term premium structurally shifted post-2024?
- Will TONA futures liquidity grow to challenge OTC OIS as the primary short-rate hedge instrument, similar to how SOFR futures have grown in the US?
- What is the right way to model OIS-vs-JGB rate convergence (or divergence) for asset-swap and basis trades discussed in [[derivatives/jgb-futures-curve]]?

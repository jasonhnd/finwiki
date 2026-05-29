---
title: "[opinion] Treasury 2025 Stablecoin Policy Framework · PWG Recommendations and Dual-Track Charters"
source_entry: fintech/treasury-stablecoin-policy-2025.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Treasury 2025 Stablecoin Policy Framework · PWG Recommendations and Dual-Track Charters

> 出典エントリー: `fintech/treasury-stablecoin-policy-2025.md`

## Counterpoints

- **Dual-track creates regulatory arbitrage.** State-qualified issuers may seek favorable states (Wyoming, Nebraska, Texas) with thinner consumer protections — repeating the credit-card-state pattern of the 1980s.
- **$10B state ceiling is generous.** A $10B outstanding stablecoin is **systemically meaningful** even if not federally chartered, raising whether the threshold should be lower.
- **T-bill-only reserves create demand pressure.** A large stablecoin sector concentrated in ≤93-day paper could distort the short end of the Treasury curve and amplify the **Treasury-stablecoin co-dependency** that [[fintech/circular-reserve-asset-flywheel-risk-cases|risk cases]] flags.
- **No interest passthrough to holders.** GENIUS prohibits payment-stablecoin issuers from paying interest to retail holders — channeling the carry to the issuer (see the issuer-business-model analysis in [[fintech/tether-business-model-short-treasury-yield|Tether business model]]). This is a **regressive policy choice** in distributional terms.
- **PWG-DAM is EO-created.** A future administration can revoke the EO; the Working Group then dissolves and inter-agency coordination relies on statutory channels only.
- **Treasury is not the supervisor.** Treasury's policy role is real, but supervisory teeth lie with OCC, Federal Reserve, and state regulators — coordination failures (which exist in banking generally) may produce gaps.
- **Run-risk mitigations are MMF-style but stablecoins are 24/7.** MMF redemption windows are once-daily; stablecoin redemption can be triggered at any moment, including during the off-hours when Treasury markets are closed. This **24/7 vs business-hour asymmetry** is the most under-discussed risk surface.
- **Tokenized MMF inclusion would change the game.** If [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] and peers become eligible reserve assets, the structure flips from "stablecoin holds T-bills" to "stablecoin holds tokenized-MMF that holds T-bills" — creating a new layer of intermediation whose risk profile is not yet stress-tested.

## Open questions

- Does Treasury extend the **93-day maturity ceiling** as the curve normalizes, or hold the line?
- Does the **MMF-share exclusion** survive the next regulatory revision, or are tokenized MMFs ([[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]], Apollo ACRED — see [[fintech/apollo-acred-private-credit-tokenization|ACRED]]) added to the permitted list?
- Does the **$10B state ceiling** get tightened in response to the first state-qualified issuer that grows toward it?
- Does an **interest-passthrough** version of GENIUS get debated in subsequent Congresses?
- Does the **MRA with EU MiCA** finalize on a true mutual basis, or only on a one-way US-recognizes-EU basis?
- Does **PWG-DAM persist** beyond the current administration, or does it dissolve with the next EO cycle?
- Does **Federal Reserve master-account access** for PPSI issuers become routine (today only Anchorage and Custodia among non-banks have meaningful access) or stay narrow?
- Does the **24/7 redemption** problem produce a Federal-Reserve discount-window analog for stablecoins, or do issuers self-insure via larger liquidity buffers?

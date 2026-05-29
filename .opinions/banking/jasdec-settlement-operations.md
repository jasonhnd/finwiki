---
title: "[opinion] JASDEC settlement operations"
source_entry: banking/jasdec-settlement-operations.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — JASDEC settlement operations

> 出典エントリー: `banking/jasdec-settlement-operations.md`

## 推論 (from 3. 競合構造)

| Tokenized / DLT-based securities | Pilot / under study | ST platforms ([[JapanFG/progmat|Progmat]] etc.) using parallel ledgers; integration with JASDEC remains an open design question ^[inferred] |

## 推論 (from Pricing principle)

JASDEC fees are set on a cost-recovery basis as a regulated utility, not on profit-maximizing principles. Surplus is typically returned via fee reductions or reinvested in system modernization. ^[inferred]

## 推論 (from Trust-bank participant view)

For a trust bank like MTBJ or CBJ, JASDEC participation cost is one input into the per-bp custody fee charged to upstream asset owners. Aggregate JASDEC + JSCC + BoJ JGB system fees translate to roughly a fraction of one basis point on AUC for high-volume participants — small relative to the trust bank's own gross custody-fee revenue but a meaningful operational-cost line. ^[inferred]

## 推論 (from DVP-X1 / X2 / X3 quality classification)

All three tiers eliminate the principal settlement risk between counterparties. Domestic trust banks (MTBJ, CBJ, megabank trust arms) are full participants in all three. Smaller specialty trust banks and foreign-branch participants typically run partial participation profiles. ^[inferred]

## 推論 (from JSCC CCP layering)

For cash-equity trades on TSE / OSE / ODX, the trade is novated to JSCC as central counterparty. JSCC then issues a single settlement obligation against each participant. Trust banks settle these obligations via JASDEC book-entry on the securities leg and via BoJ-net on the cash leg, producing T+2 settlement under the current regime (and T+1 under the planned 2027 migration). ^[inferred]

## 推論 (from Cross-border / ICSD link)

Both routes are operational realities for any large pension or 投信 mandate; the trust bank is the on-shore anchor, and JASDEC is the on-shore rail. ^[inferred]

## Counterpoints

- "JASDEC = JSCC" — wrong; JASDEC is the depository and book-entry rail, JSCC is the CCP for clearing.
- "JASDEC settles JGBs" — wrong; JGB settlement is on the BoJ JGB book-entry system, not JASDEC.
- "JASDEC is competitive infrastructure" — JASDEC is a single-utility national CSD by regulatory design; there is no competitive alternative for its core asset classes.
- "JASDEC owns the securities" — no; JASDEC is a book-entry infrastructure, not a custodian. Custodian rights and beneficial ownership sit at trust banks and ultimately at asset owners.
- "Shareholder list = JASDEC-recorded nominee" — partly; the recorded holder on the issuer register is usually a custodian's trust account, and JASDEC's role is to maintain the book-entry between participants.
- "Foreign stocks are JASDEC's main job" — no; foreign-stock support is one of multiple lines. Domestic equity / corp bonds / CP / 投信 book-entry is the volumetric core. ^[inferred]

## Open questions

- What is the timing and design of Japan's T+1 cash-equity settlement migration (~2027 target), and what is JASDEC's infrastructure-investment cost?
- How will JASDEC integrate with tokenized-security ST platforms ([[JapanFG/progmat|Progmat]] etc.) under 振替法?
- Will JASDEC and JSCC eventually consolidate operations (single CSD-CCP entity) as some other markets have done?
- How will JASDEC's beneficial-owner-disclosure service evolve as institutional investors push for higher governance-disclosure frequency?
- What is the post-T+1 sub-custody chain design for foreign-investor holdings of JP securities — will it remain trust-bank-anchored or shift toward more direct global-custodian / ICSD links?
- What is JASDEC's plan for stablecoin / tokenized-deposit cash-leg integration (currently the cash leg runs through BoJ-net / 全銀ネット exclusively)?

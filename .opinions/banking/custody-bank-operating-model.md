---
title: "[opinion] Custody Bank of Japan operating model"
source_entry: banking/custody-bank-operating-model.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Custody Bank of Japan operating model

> 出典エントリー: `banking/custody-bank-operating-model.md`

## 推論 (from Shareholder structure (public disclosure))

Like MTBJ, CBJ has no >50% controlling shareholder by design — SMTB at ~46.5% needs Mizuho-side cooperation to drive strategic decisions, which keeps CBJ positioned as a multi-shareholder utility rather than a captive SMTB back office. ^[inferred]

## 推論 (from Why two specialist custodians, not one)

3. FSA preference — regulators generally favor at least two competitive infrastructure operators in critical functions; ^[inferred]

## 推論 (from The 「信託口」 nominee surface — CBJ specific)

Together MTBJ + CBJ as nominee names typically account for a majority of institutional-passive Japan-equity custody. ^[inferred]

## 推論 (from Why CBJ fee economics resemble MTBJ closely)

1. **Asset-manager negotiation** — large 投信 sponsors (Nomura AM, MUFG AM, SMTB AM affiliates, Daiwa AM affiliates) negotiate their 受託会社 fees down to thin per-bp rates. Switching between CBJ and MTBJ as 受託会社 is a credible threat for large funds. ^[inferred]

## 推論 (from Cross-bank fee-economy reading)

| 投信受託 fees trend | Compressing under passive growth ^[inferred] | Compressing under passive growth ^[inferred] |

## 推論 (from GPIF custodian eligibility)

GPIF disclosed 資産管理機関 panels include both MTBJ and CBJ at various times for domestic equity / bond mandates. Exact current panel composition requires reading the latest GPIF business report. ^[inferred]

## 推論 (from Foreign-asset sub-custody chain)

This sub-custody dependency means CBJ's foreign-asset processing economics are largely pass-through from the global-custody chain. The same chain applies to MTBJ on the foreign-asset leg. ^[inferred]

## 推論 (from ST / tokenized securities)

CBJ's role in 信託受益権-based tokenized securities issued via [[JapanFG/progmat|Progmat]] or other ST platforms is still emerging. Its 信託業法 base supports underlying 受託銀行 ops for 信託受益権 structures, but settlement integration with non-JASDEC ledgers remains an open architectural question. ^[inferred]

## Counterpoints

- "CBJ is SMTB-controlled" — SMTB at ~46.5% does not exceed 50%; Mizuho-side and 第一生命-side shareholders retain blocking power. ^[inferred]
- "CBJ is a top shareholder of every TOPIX issuer" — formal accuracy only; nominee surface, not economic ownership. Beneficial owners are the underlying mandates. ^[extracted]
- "CBJ + MTBJ duopoly equals voting concentration" — both execute votes per upstream-manager instruction. The same body of holdings is fragmented across many asset-owner voting policies. ^[inferred]
- "2020 merger immediately delivered synergy" — system integration is multi-year and IR-non-public; quantitative synergy realization is not externally verifiable. ^[ambiguous]
- "AUC ¥600-700tn = Japan's largest investor" — wrong category. Trust assets are off-balance; CBJ is a custodian, not an investor. ^[extracted]
- "Light credit book = light capital requirement" — operational-risk capital, IT-risk capital, and trust-business 受託者責任 risk capital remain non-trivial. ^[inferred]

## Open questions

- What is the SMTB-side vs Mizuho-side vs 第一生命-side mandate-share split inside CBJ's AUC? Public disclosure is too aggregated.
- What was the 2020-07 merger's actual IT cost recovery and headcount synergy outcome?
- Will CBJ and MTBJ eventually merge into a single national custody utility, or will the two-pole structure remain stabilized by shareholder politics?
- What is CBJ's post-2027 T+1 settlement-readiness roadmap?
- How will CBJ's role evolve for tokenized securities under [[JapanFG/progmat|Progmat]] and similar 信託受益権 ST platforms?
- Will Daiwa Securities-affiliated shareholders' stake change with future Daiwa-side trust-business restructuring?
- How does CBJ's per-bp fee economics compare to MTBJ at GPIF scale? Both remain silent.

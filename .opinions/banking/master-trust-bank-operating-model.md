---
title: "[opinion] Master Trust Bank of Japan operating model"
source_entry: banking/master-trust-bank-operating-model.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Master Trust Bank of Japan operating model

> 出典エントリー: `banking/master-trust-bank-operating-model.md`

## 推論 (from Shareholder structure (public disclosure))

The 46.5% MUFG-trust stake is below 50% by design — life-insurer and cooperative-finance shareholders retain a structural block, which keeps MTBJ positioned as a multi-shareholder utility rather than a fully captive MUFG-internal back office. ^[inferred]

## 推論 (from Why a custody-only trust bank exists)

The MTBJ model was built specifically to let pension funds and investment trusts share a single high-volume, low-margin back-office utility rather than each rebuilding the same processing capacity internally. ^[inferred]

## 推論 (from The 「信託口」 nominee surface)

- The bulk of the holding under that name is **passive index** exposure plus pension-mandate equity allocations. ^[inferred]

## 推論 (from Why MTBJ + CBJ became a two-strong utility)

The economics of pension-trust + 投信受託 + securities custody favour scale: NAV calculation, corporate-actions processing, 議決権 systems, JASDEC connectivity, and BoJ JGB book-entry systems all have steep fixed-cost curves. Splitting them across many small trust-bank operating units raised aggregate IT cost without improving the service to asset owners. The 2000-2020 consolidation arc (MTBJ in 2000, CBJ in 2020 via JTSB + TCSB merger) converged on a two-utility structure with one MUFG-led pole and one SMTB / Mizuho-led pole. ^[inferred]

## 推論 (from 4. 手数料・収益構造)

| 投信受託 admin fee | AUC bps, generally a small fraction of the fund's total expense ratio | Disclosed in each fund's 信託約款 + 目論見書 as 「信託報酬 / 受託会社報酬」 — typically 0.01-0.05% / year of NAV ^[inferred] |

## 推論 (from Cross-bank fee-economy reading)

| Overall fee trend | Compressing under passive-fund growth + competitive pricing ^[inferred] | Bundled with other trust-bank fees | Stable in JP yen terms, growing in USD via $AUC growth |

## 推論 (from GPIF-custodian eligibility)

GPIF's custodian / asset-administrator panel for domestic and overseas assets is set by GPIF tender. Public disclosure shows that MTBJ has been used as a 資産管理機関 for domestic equity and bond mandates. Cross-border legs use global custodians as sub-custodians. ^[inferred] Confirming the current panel composition requires reading GPIF's annual report and tender disclosures.

## 推論 (from Why off-balance-sheet treatment matters for fees)

Because trust assets sit off the trustee's balance sheet, the bp-level fee rate × off-balance trust AUC translates into the trust-bank's revenue. A pure custodian's apparent "asset weight" (¥700tn+) does not imply commensurate equity / risk capital — the fee economics decouples from the AUC. This is the structural reason a custody-only specialist can run at a much smaller balance-sheet footprint than a full-service megabank trust arm with comparable AUC. ^[inferred]

## 推論 (from JSCC connection)

Cash-equity settlement obligations of MTBJ are cleared through [[securities/japan-securities-clearing-corp|JSCC]] as central counterparty. The combination of JASDEC book-entry + JSCC CCP + BoJ funds settlement produces DVP-X1 / DVP-X2 / DVP-X3 settlement quality, which is the regulatory baseline for institutional-grade custody. ^[inferred]

## 推論 (from BoJ JGB book-entry)

MTBJ holds a direct account in the BoJ JGB book-entry system, enabling DVP JGB settlement for pension and 投信 mandates. Without this direct account a custodian would have to sub-custody JGB through a megabank — which would add a layer of cost and operational risk. ^[inferred]

## 推論 (from Tokenization / ST settlement)

For tokenized securities issued via [[JapanFG/progmat|Progmat]] or similar 信託受益権 securitization platforms, the trust-bank acts as the underlying 受託銀行 for the 信託受益権. MTBJ's role in this segment is still emerging and the precise integration with JASDEC / non-JASDEC ledgers is an open question. ^[inferred]

## Counterpoints

- "MTBJ is a top shareholder of every TOPIX issuer" — formal accuracy only; nominee surface, not economic ownership. Beneficial owners are the underlying mandates. ^[extracted]
- "MTBJ is MUFG-controlled" — MUFG Trust holds 46.5% but does not exceed 50%; life-insurer and Norinchukin shareholders retain blocking power. ^[inferred]
- "AUC ¥700tn = Japan's largest investor" — wrong category. Trust assets are off-balance; MTBJ is a custodian, not an investor. ^[extracted]
- "MTBJ vs CBJ duopoly = anti-competitive" — the two-strong structure is the rational outcome of fixed-cost infrastructure economics in a market with one set of national settlement rails. ^[inferred]
- "Foreign assets sit at MTBJ" — only the record name does; the actual custody chain runs through global custodians on the foreign-side leg.
- "Custody-only banks pay no regulatory cost" — MTBJ remains a fully supervised trust bank under 銀行法 + 信託業法 with full FSA on-site examinations; operating-risk capital is non-trivial despite the light credit book. ^[inferred]

## Open questions

- What share of MTBJ's ¥700tn+ trust-asset base is GPIF mandate vs corporate-pension mandate vs 投信 受託 vs insurance separate account? Public disclosure is too aggregated to answer.
- How does MTBJ's per-bp fee schedule compare to CBJ's at GPIF scale? Both are silent.
- What is the post-2027 T+1 settlement roadmap and the IT-investment scale required for MTBJ?
- Will MTBJ and CBJ ever merge into a single national custody utility, or will the two-pole structure be politically stabilized by their distinct shareholder camps?
- How will MTBJ's role evolve for 信託受益権-based tokenized securities under [[JapanFG/progmat|Progmat]] and similar platforms?
- What is MTBJ's exposure to non-ICJ electronic-voting routes (foreign-proxy platforms)? The ICJ integration is documented; the broader proxy-platform integration map is not.

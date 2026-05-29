---
title: "[opinion] Pension trust mandate allocation Japan"
source_entry: banking/pension-trust-mandate-allocation-japan.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Pension trust mandate allocation Japan

> 出典エントリー: `banking/pension-trust-mandate-allocation-japan.md`

## 推論 (from GPIF mandate allocation)

| In-house management (limited) | GPIF in-house | Passive JGB and limited equity in-house exposure (per GPIF policy) ^[inferred] |

## 推論 (from GPIF asset-administration concentration)

GPIF's 資産管理機関 panel concentrates on the two custody-only specialists (MTBJ + CBJ) for the bulk of asset-administration volume, with selected use of full-service trust banks for specific mandate types. The exact current panel composition requires reading the latest GPIF annual report and 受託機関 disclosure. ^[inferred]

## 推論 (from Why DC operating-manager is a separate competitive layer)

DC plans have a member-account record-keeping requirement that asset-administration utility does not naturally provide. The 運営管理機関 layer is more retail-tech-driven — member-facing UI, investment-menu UX, fund-switching ops, withdrawal-rule compliance — and the megabank trust banks plus securities firms have built DC operating-manager businesses around this layer. NRK (日本レコード・キーピング・ネットワーク) is a shared utility for record-keeping that several megabanks and securities firms also use as a back-end. ^[inferred]

## 推論 (from 4. 手数料・収益構造)

| GPIF | AUC bps × mandate size, tendered down by GPIF | Very low bps at GPIF scale (sub-1 bp typical) ^[inferred] | N/A |
| Corporate DB | AUC bps × mandate; varies | A few bps for small plans; sub-1 bp for large plans ^[inferred] | N/A |
| Corporate DC | Underlying 投信 expense ratio (運用 + 受託 + 販売) | Bundled into 投信 受託会社報酬 (0.01-0.05% typical) ^[inferred] | Operator-fee per member or per AUM; sometimes covered by plan sponsor |

## 推論 (from Why GPIF tender mechanics matter)

GPIF runs periodic tenders for 運用機関 mandates and 資産管理機関 panel slots. Tender-based pricing pressure is structural — winners commit to per-bp fees that are publicly tendered down. This is one mechanism through which MTBJ and CBJ's per-bp fees compress over time. ^[inferred]

## 推論 (from DC operating-manager margin)

DC 運営管理機関 fees are a distinct revenue line for megabank trust banks and securities firms. Per-member-per-year fees aggregate to material revenue at scale, especially as DC participation grows under DC-reform expansion of contribution limits (2025 onward). ^[inferred]

## 推論 (from GPIF-specific designation rules)

GPIF as an independent administrative agency has a governance framework that explicitly separates 投資判断 from 資産保管. The 運用機関 and 資産管理機関 panels are publicly tendered. This separation produces the externally-visible mandate-allocation pattern: many 運用機関 + small set of 資産管理機関. ^[inferred]

## 推論 (from Why pension mandate flow is the dominant volume driver)

The bulk of MTBJ and CBJ AUC by volume comes from pension-side mandates (GPIF + corporate DB) plus 投信 受託 (which itself is partly driven by DC menu allocations). Pension assets are long-duration, sticky, and produce predictable per-bp custody revenue. This is the structural reason MTBJ and CBJ are characterized as "pension custody utilities" rather than general-purpose trust banks. ^[inferred]

## 推論 (from Foreign-asset leg of pension mandates)

GPIF's foreign-equity and foreign-bond mandates (a large share of GPIF's portfolio under the 2014+ asset-allocation revision) rely heavily on this sub-custody chain. The cost-side allocation is mostly opaque, but it explains why global custodians' Japan units have material JP-revenue tied to GPIF and corporate-pension foreign-asset flows. ^[inferred]

## 推論 (from DC member-side and JASDEC)

DC members' underlying 投信 holdings are recorded at the 投信 受託会社 (MTBJ or CBJ) on the JASDEC 投信振替制度 rail. Member-level balance is held at the 運営管理機関's record-keeping system, which then maps member units to underlying 投信 holdings. This two-tier structure (member ledger at operating manager + asset ledger at trust bank / JASDEC) is the operational reason why DC reform changes (contribution limit expansion, fund-switching frequency rules) ripple back into trust-bank operating cost. ^[inferred]

## Counterpoints

- "MTBJ + CBJ control GPIF's investment decisions" — false; they are 資産管理機関, not 運用機関. Investment decisions sit at the external asset managers GPIF appoints.
- "DC plan sponsor controls voting" — false; voting authority sits at the 投信 運用機関 for the underlying fund, not at the plan sponsor or the 運営管理機関.
- "Pension mandates are purely price-driven" — partial; pricing matters, but operating-track-record, IT integration, and trust-bank capability also drive selection. ^[inferred]
- "iDeCo is too small to matter to trust banks" — short term yes; long-term iDeCo + DC expansion is a structural growth driver, especially with 2024+ NISA + 2025+ DC reforms.
- "Foreign-asset legs always run through BNY" — false; State Street, JPM, and Citi each capture meaningful shares of pension foreign-asset sub-custody.
- "Trust bank can override asset manager's voting instruction" — false; the trust bank is mechanical; the voting opinion belongs to the 運用機関 per its 議決権行使ガイドライン.
- "Custody-only banks have no member-facing role" — true for MTBJ / CBJ but the megabank trust banks run member-facing DC operating-manager arms in addition to their asset-administration role.

## Open questions

- What is the exact current GPIF 資産管理機関 panel composition (MTBJ vs CBJ vs full-service trust banks share)?
- How fast will corporate DC asset growth translate into 投信 受託 AUC growth at MTBJ + CBJ under the 2025 DC reforms?
- Will GPIF further consolidate its 資産管理機関 panel to just MTBJ + CBJ, or maintain selected full-service trust-bank slots?
- How will iDeCo+ expansion (corporate-side iDeCo, looser limits) change the 運営管理機関 competitive map?
- What is the per-mandate price arc for GPIF custody fees as passive allocation grows?
- Will any global custodian seek to become a direct 資産管理機関 for GPIF JP-domestic-asset legs (currently constrained by 信託銀行 license requirements)?
- Will tokenized 信託受益権 pension products emerge as a new mandate slot?

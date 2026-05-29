---
title: "[opinion] Trust bank fee structure comparison"
source_entry: banking/trust-bank-fee-structure-comparison.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Trust bank fee structure comparison

> 出典エントリー: `banking/trust-bank-fee-structure-comparison.md`

## 推論 (from Custody fee mechanics)

| AUC bps (asset-class-weighted) | Per basis-point of held assets, weighted by asset class (equity higher than JGB, foreign higher than domestic) | Domestic equity: ~0.2-1 bp/year for institutional scale; foreign equity: 1-5 bps; JGB: ~0.05-0.5 bp; foreign bonds: 1-5 bps ^[inferred] |
| Per-transaction settlement fee | Per book-entry transfer ticket | A few hundred to a few thousand yen per ticket, scaled by volume tier ^[inferred] |
| Cash-management spread | Spread on short-dated funding placements of settlement-account residuals | Small; dependent on JGB yield curve and short-rate environment ^[inferred] |
| Corporate-actions admin | Per CA event, often bundled into custody fee | Bundled for institutional clients; itemized for some clients ^[inferred] |
| Voting administration | Often bundled into custody fee; ICJ electronic-voting forwarding | Bundled ^[inferred] |
| Securities-lending agent fee | Revenue-share on lending income with beneficial owner | Typically 10-30% of lending revenue retained by agent lender ^[inferred] |

## 推論 (from Pension trust admin fees)

| Trust contract administration fee | AUC bps × pension AUM | Very low for GPIF-scale (sub-1 bp); higher (a few bps) for small corporate DB ^[inferred] |
| Member balance reporting fee (DC) | Per-member, per-year | Hundreds to low thousands of yen per member, per year ^[inferred] |
| Benefit-payment processing | Per payment ticket | Bundled; possibly per-event itemization for some plans ^[inferred] |
| Asset-owner reporting | Often bundled | Bundled ^[inferred] |

## 推論 (from Securities investment trust admin fees)

| 受託会社報酬 (signed in 信託約款) | AUC bps of fund NAV | Stated in each fund's 目論見書 + 信託約款 — often 0.01-0.05% / year ^[inferred] |

## 推論 (from Real-estate trust fees (full-service trust banks only))

| 不動産信託設定報酬 | Often a percentage of property value at trust setup | Substantial — full-service trust banks earn premium margins here ^[inferred] |
| 不動産信託継続報酬 | Annual fee for ongoing trust admin | AUC-bps of property under trust ^[inferred] |
| J-REIT 受託会社報酬 | Per J-REIT fund | Similar to 投信 受託会社 fees but at REIT-specific economics ^[inferred] |

## 推論 (from Fee trends)

| GPIF tender repricing | Recurring pressure on per-bp fees on largest mandates ^[inferred] |
| T+1 settlement migration (~2027) | Short-term IT-cost upside; long-term operating-cost down ^[inferred] |
| Tokenization / ST | Open question — fees unclear; could be premium-priced or rapidly commoditized ^[inferred] |

## 推論 (from Public observable per-fund 投信 受託会社報酬)

| MUFG Asset Management funds | MTBJ (often) | 0.01-0.05% NAV ^[inferred] |
| Nomura Asset Management funds | MTBJ (often) or CBJ | 0.01-0.05% NAV ^[inferred] |
| Daiwa Asset Management funds | CBJ (often) | 0.01-0.05% NAV ^[inferred] |
| SMBC Nikko / SMTB AM funds | CBJ (often) | 0.01-0.05% NAV ^[inferred] |
| Mizuho-side AM funds | CBJ (often) | 0.01-0.05% NAV ^[inferred] |
| SBI Asset Management funds | Mixed (MTBJ / CBJ) | 0.01-0.05% NAV ^[inferred] |

## 推論 (from Fee cost-side from infrastructure participation)

These infrastructure costs sit on the trust bank's operating expense line and form a fraction of one basis point of AUC for high-volume participants — small relative to custody-fee revenue but a meaningful operating cost. ^[inferred] The cost structure means trust-bank custody margins compress with passive-fund growth (volume up, per-bp fee down) but the infrastructure cost per ¥AUC stays roughly flat, producing operating leverage when AUC grows faster than expense base. ^[inferred]

## 推論 (from Why MTBJ / CBJ pricing power is structurally tied to JASDEC)

Because JASDEC is the sole domestic CSD for dematerialized equity / corp bonds / CP / 投信, the trust-bank participants that ride JASDEC are not in competition with non-JASDEC alternatives for that asset class. Domestic custody for these assets must run through a JASDEC participant, and only a 信託銀行 with a 銀行法 + 信託業法 license can hold the trust-account nominee name in the way pension and 投信 contracts require. The two-strong utility (MTBJ + CBJ) on the institutional side and the megabank trust arms on the full-service side carry residual pricing power because the alternative for asset managers is to internalize the infrastructure cost themselves — which is uneconomic at any single-firm scale. ^[inferred]

## Counterpoints

- "Trust-bank fees are public" — false; only 投信 受託会社報酬 is per-fund-public. Pension and custody mandates are not publicly priced.
- "MTBJ + CBJ duopoly = high fees" — opposite; their utility scale produces the lowest per-bp custody / 投信 受託 fees in Japan. The duopoly check is on margin, not on price level. ^[inferred]
- "Global custodians charge less than JP trust banks" — depends on segment; cross-border is global-custodian territory and priced accordingly, but pure JP custody at GPIF scale is cheaper at MTBJ / CBJ.
- "Real-estate trust = small line" — false; for full-service trust banks (MUFG Trust, SMTB, Mizuho Trust), real-estate trust + J-REIT is a meaningful and lumpy revenue line.
- "Custody fees are declining everywhere" — partial; per-bp rates are compressing under passive growth, but absolute revenue can grow with AUC. ^[inferred]
- "AUC = revenue" — wrong; the per-bp fee mix-by-asset-class matters more than headline AUC. A ¥100tn JGB-heavy AUC produces far less revenue than a ¥100tn foreign-equity-heavy AUC.
- "BNY / State Street will price-undercut JP trust banks for domestic custody" — structural impediments (信託銀行 license + JASDEC participant requirement + 信託口 nominee logic) make this unlikely. Cross-border premium for globals is structurally protected.

## Open questions

- What is the actual per-bp custody fee schedule at MTBJ vs CBJ for GPIF-scale mandates? Both remain silent.
- How fast is the per-bp fee compression on 投信 受託会社報酬 across the major fund families? A manual aggregation of 信託約款 over multiple years would answer.
- What is the JP-revenue split for global-custodian Japan units (BNY / State Street / JPM / Citi)? Parent-level disclosure is too aggregated.
- How will T+1 migration (~2027) affect per-ticket settlement-fee structures at JASDEC and downstream trust banks?
- How does real-estate trust fee economics at MUFG Trust / SMTB / Mizuho Trust compare across the property-market cycle?
- Will tokenized-security custody fee structure be premium-priced (like cross-border premium today) or rapidly commoditized?
- How does the SMBC Trust PB / 富裕層 fee model compare to UHNW custody at BNY / State Street?

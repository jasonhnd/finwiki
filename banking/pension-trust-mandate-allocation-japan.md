---
title: "Pension trust mandate allocation Japan"
aliases:
  - "pension-trust-mandate-allocation-japan"
  - "Japan pension mandate allocation"
  - "GPIF mandate allocation"
  - "Japan corporate pension mandate map"
  - "DB DC trust mandate allocation Japan"
domain: banking
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [banking, trust-bank, custody, asset-administration, pension, gpif, dc, db, mandate-allocation]
status: active
sources:
  - "https://www.gpif.go.jp/"
  - "https://www.gpif.go.jp/operation/operationalformat.html"
  - "https://www.gpif.go.jp/en/"
  - "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284.html"
  - "https://www.mastertrust.co.jp/"
  - "https://www.custody.jp/"
  - "https://www.shintaku-kyokai.or.jp/"
  - "https://www.toushikikin.or.jp/"
  - "https://www.kigyounenkin.or.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf"
---

# Pension trust mandate allocation Japan

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and connects the pension-side demand to the trust-bank supply. Read it with the institutional anchors [[JapanFG/master-trust-bank|MTBJ]] and [[JapanFG/custody-bank|CBJ]], the operating models [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and [[banking/custody-bank-operating-model|Custody Bank operating model]], the landscape view [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the fee study [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]. Pair with [[banking/jasdec-settlement-operations|JASDEC settlement operations]] for the rail; with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for regulatory tier; with [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], and [[JapanFG/mizuho-trust-bank|Mizuho Trust]] for the front-office trust-bank side; and with [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] / [[JapanFG/state-street-japan|State Street Japan]] / [[JapanFG/jpmorgan-japan|JP Morgan Japan]] for the foreign-asset-leg sub-custody. For institutional context see [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]].

## TL;DR

Japanese pension-trust mandates split into three layers: GPIF (~¥250tn assets, public pension), corporate DB plans (確定給付企業年金), and DC plans (確定拠出年金, including iDeCo). Each layer separates investment management (運用機関) from asset administration (資産管理機関) — the latter is where MTBJ, CBJ, and the megabank trust-bank arms compete. GPIF's pattern is well documented: a panel of external 運用機関 (asset managers) for active and passive mandates plus a separate 資産管理機関 panel of trust banks (MTBJ + CBJ + selected full-service trust banks) for custody and admin. Corporate DB plans mirror the same separation, often with one or two trust banks per plan. DC plans add a 運営管理機関 layer (record-keeping for member accounts) where megabank trust-bank arms and specialized DC operators compete. Foreign-asset legs across all layers route through global custodians as Japan sub-custodians. The result is a layered mandate-allocation system in which MTBJ and CBJ anchor the asset-administration utility while the megabank trust banks and global custodians compete on the front-office investment-management and DC operating-manager sides.

## 1. 機関位置

### Pension-system three layers

| Layer | Description | Statute | Approximate scale |
|---|---|---|---|
| **GPIF** (年金積立金管理運用独立行政法人) | Public pension reserve fund | 厚生年金保険法 + 国民年金法 + 独立行政法人法 | ~¥250tn AUM |
| **Corporate DB** (確定給付企業年金) | Corporate-sponsored defined-benefit pension trust | 確定給付企業年金法 (2001) | Multi-tens of trillions yen aggregate ^[ambiguous] |
| **Corporate DC + iDeCo** (確定拠出年金) | Corporate-sponsored / individual DC | 確定拠出年金法 (2001) | Multi-tens of trillions yen aggregate; growing fast post-NISA / DC reforms ^[ambiguous] |

### Mandate-allocation role separation

| Role | Function | Examples |
|---|---|---|
| 運用機関 (Investment manager) | Discretionary investment decision; portfolio construction; trade execution | Asset managers — Nomura AM, MUFG AM, Daiwa AM, SBI AM, JP-side external managers, foreign-asset managers (e.g. Vanguard, BlackRock, State Street SSGA, Goldman Sachs AM, PIMCO, etc.) |
| 資産管理機関 (Asset administrator / trust bank) | Trust-account safekeeping, NAV calc, settlement, CA processing, voting admin | MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, Norinchukin Trust |
| 受託金融機関 (Trust-receiving financial institution) | Pension trust setup, fiduciary holder of the trust | Same trust banks as above, in trust-receiver capacity |
| 運営管理機関 (DC operating manager) | Member-account record-keeping; investment-menu provision; member-facing UI | Trust banks, securities firms, dedicated DC operators (NRK 日本レコード・キーピング・ネットワーク) |
| Sub-custodian (foreign assets) | Foreign-asset book-entry, settlement, FX, foreign CA | BNY Mellon, State Street, JP Morgan, Citi (as global custodian) — accessed via the JP trust bank |

## 2. 主要業務

### GPIF mandate allocation

GPIF (~¥250tn AUM) operates the largest single pool of pension assets in Japan and the largest pension fund globally. Its mandate-allocation pattern is publicly documented in GPIF's annual reports.

| GPIF mandate slot | Allocator | Typical participant types |
|---|---|---|
| Domestic equity active | 運用機関 (external) | Nomura AM, MUFG AM, Daiwa AM, Asset Management One, Goldman Sachs AM Japan, JPM AM Japan, others |
| Domestic equity passive | 運用機関 (external) | Asset Management One, MUFG AM, Nomura AM, Daiwa AM, BlackRock JP, State Street GA JP, others |
| Foreign equity active | 運用機関 (external) | International + JP-affiliated AMs running global equity strategies |
| Foreign equity passive | 運用機関 (external) | BlackRock, State Street GA, Vanguard (where relevant), regional AM affiliates |
| Domestic bond active / passive | 運用機関 (external) | Asset Management One, MUFG AM, Nomura AM, others |
| Foreign bond active / passive | 運用機関 (external) | PIMCO, JPM AM, BlackRock, others |
| Alternative (PE / infra / real-estate) | 運用機関 (external) | Specialized PE / infra / RE managers; fund-of-fund structures |
| In-house management (limited) | GPIF in-house | Passive JGB and limited equity in-house exposure (per GPIF policy) ^[inferred] |
| Asset administration (custody, NAV, CA, voting) | 資産管理機関 (external) | MTBJ + CBJ (anchor) + selected full-service trust banks |
| Foreign-asset sub-custody | Sub-custodian chain | Via MTBJ / CBJ → global custodian (BNY / State Street / JPM / Citi) |

### GPIF asset-administration concentration

GPIF's 資産管理機関 panel concentrates on the two custody-only specialists (MTBJ + CBJ) for the bulk of asset-administration volume, with selected use of full-service trust banks for specific mandate types. The exact current panel composition requires reading the latest GPIF annual report and 受託機関 disclosure. ^[inferred]

### Corporate DB plan mandate-allocation pattern

| Slot | Allocator | Typical participant |
|---|---|---|
| Plan trustee (受託金融機関) | Trust bank | MUFG Trust, SMTB, Mizuho Trust, regional trust-bank alternatives |
| Investment management mandates | 運用機関 (external + plan-side direction) | Asset managers — typically several per plan, sometimes including foreign AMs |
| Asset administration | 資産管理機関 | Plan-trustee's own custody arm OR external (MTBJ / CBJ) — depending on plan structure |
| Actuarial / advisory | 信託銀行 PB / 年金コンサル | MUFG Trust, SMTB, Mizuho Trust, specialty pension consultants |
| Benefit-payment ops | Plan trustee | Trust bank-internal |

### DC plan mandate-allocation pattern

| Slot | Allocator | Typical participant |
|---|---|---|
| 運営管理機関 (record-keeping, member admin) | Sponsor / Plan rules | Trust banks (MUFG Trust, SMTB, Mizuho Trust DC arms), securities firms (Nomura, Daiwa, SMBC Nikko), specialized operator NRK |
| Investment-menu provision | 運営管理機関 | Selected 投信 lineup |
| Trust-side custody (asset administration) | 資産管理機関 | MTBJ / CBJ via the 運営管理機関's selected 投信 受託会社 |
| 投信受託会社 for each fund in menu | Trust bank as 投信受託 | MTBJ / CBJ / megabank trust arms |
| Foreign-asset legs | Sub-custodian chain | Via the trust bank → global custodian |

### Why role separation matters

| Reading | Implication |
|---|---|
| 投資判断 (investment decision) sits at 運用機関 | The asset manager — not the trust bank — picks securities and votes (per 議決権行使ガイドライン) |
| 資産保管 (custody) sits at 資産管理機関 | The trust bank holds in "信託口" name — appears on issuer shareholder lists |
| Fiduciary duty (受託者責任) split | Trust bank holds asset-safety fiduciary; asset manager holds investment-judgment fiduciary |
| Voting authority | Operates per asset manager's 議決権行使ガイドライン, executed mechanically by the trust bank |
| Member-balance (DC) | Held at 運営管理機関 — but the underlying 投信 holdings sit at the trust bank as 受託会社 |

This separation is the structural reason why "MTBJ + CBJ" appearing as a top shareholder of every TOPIX issuer cannot be read as a unified voting bloc.

## 3. 競合構造

### Cross-pension-layer competition map

| Pension layer | Front-office (運用機関) competition | Back-office (資産管理機関) competition | Member-side (運営管理機関) competition |
|---|---|---|---|
| GPIF | Wide panel — JP AMs + foreign AMs compete for mandate slices | MTBJ + CBJ + selected full-service trust banks | N/A (GPIF is public pension, no member-level admin like DC) |
| Corporate DB | Plan-trustee-side AMs + external AMs | Plan-trustee internally + MTBJ / CBJ for separately-mandated admin | N/A (DB has no member-level admin record) |
| Corporate DC | 運営管理機関's selected 投信 lineup → underlying 運用機関 | MTBJ / CBJ via 受託会社 layer | MUFG Trust / SMTB / Mizuho Trust / Nomura / Daiwa / SMBC Nikko / NRK |
| iDeCo | Same as DC | Same as DC | Same DC operators (often retail-facing securities firms / online brokers) |

### Cross-trust-bank pension mandate competition

| Trust bank | GPIF mandate side | Corporate DB side | DC 運営管理 side |
|---|---|---|---|
| MTBJ | Major 資産管理機関 | Major 資産管理機関 | Limited (custody-only specialist) |
| CBJ | Major 資産管理機関 | Major 資産管理機関 | Limited (custody-only specialist) |
| MUFG Trust | Selected 資産管理機関 use | Major plan trustee + admin | Major DC 運営管理機関 (corporate DC) |
| SMTB | Selected 資産管理機関 use | Major plan trustee + admin | Major DC 運営管理機関 |
| Mizuho Trust | Selected 資産管理機関 use | Major plan trustee + admin | Major DC 運営管理機関 |
| Norinchukin Trust | Limited | 農林系 plan trustee + admin | Limited |
| SMBC Trust | Limited (PB context) | Limited | Limited |
| Nomura Trust | Limited (grup-internal) | Limited | Group-tied DC operator support |

### Why MTBJ + CBJ dominate asset-administration

| Driver | Effect |
|---|---|
| Scale economics of NAV calculation + CA processing | Favors single-purpose utility over megabank-internal admin |
| GPIF historical tender preference for specialist custody | Anchored MTBJ + CBJ as default winners |
| Megabank trust banks' preference to run separately on front-office mandate | Leaves asset-administration utility to MTBJ + CBJ |
| Cost-recovery pricing at MTBJ + CBJ | Hard for other entities to undercut |
| 信託銀行 license + JASDEC participation + 信託口 nominee logic | Limits new entrants |

### Why DC operating-manager is a separate competitive layer

DC plans have a member-account record-keeping requirement that asset-administration utility does not naturally provide. The 運営管理機関 layer is more retail-tech-driven — member-facing UI, investment-menu UX, fund-switching ops, withdrawal-rule compliance — and the megabank trust banks plus securities firms have built DC operating-manager businesses around this layer. NRK (日本レコード・キーピング・ネットワーク) is a shared utility for record-keeping that several megabanks and securities firms also use as a back-end. ^[inferred]

## 4. 手数料・収益構造

| Pension layer | Front-office fee model (運用機関) | Back-office fee model (資産管理機関) | Member-side fee model (運営管理機関) |
|---|---|---|---|
| GPIF | AUC bps × mandate size, tendered down by GPIF | Very low bps at GPIF scale (sub-1 bp typical) ^[inferred] | N/A |
| Corporate DB | AUC bps × mandate; varies | A few bps for small plans; sub-1 bp for large plans ^[inferred] | N/A |
| Corporate DC | Underlying 投信 expense ratio (運用 + 受託 + 販売) | Bundled into 投信 受託会社報酬 (0.01-0.05% typical) ^[inferred] | Operator-fee per member or per AUM; sometimes covered by plan sponsor |
| iDeCo | Same as DC | Same as DC | Operator fee per member-year (often few hundred yen / month) |

For the granular per-bank fee analysis see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

### Why GPIF tender mechanics matter

GPIF runs periodic tenders for 運用機関 mandates and 資産管理機関 panel slots. Tender-based pricing pressure is structural — winners commit to per-bp fees that are publicly tendered down. This is one mechanism through which MTBJ and CBJ's per-bp fees compress over time. ^[inferred]

### DC operating-manager margin

DC 運営管理機関 fees are a distinct revenue line for megabank trust banks and securities firms. Per-member-per-year fees aggregate to material revenue at scale, especially as DC participation grows under DC-reform expansion of contribution limits (2025 onward). ^[inferred]

## 5. 規制・会計

### Regulatory framework

| Statute / regulator | Coverage |
|---|---|
| 厚生年金保険法 + 国民年金法 | Public pension, GPIF establishing authority |
| 独立行政法人通則法 + GPIF 個別法 | GPIF governance and operating framework |
| 確定給付企業年金法 | Corporate DB plans |
| 確定拠出年金法 | Corporate DC + iDeCo |
| 信託業法 + 銀行法 | Trust bank licensing for pension-trust 受託 |
| 金商法 (投信受託 / カストディ ops) | 投信 受託会社 / カストディ standards |
| 厚生労働省 監督指針 | Pension plan supervision |
| 金融庁 監督指針 (信託業 + 信託銀行) | Trust-bank supervision |
| GPIF 投資原則 / スチュワードシップ原則 | GPIF-specific governance / stewardship |
| 個人情報保護法 + 金融分野ガイドライン | Member data protection |

### Fiduciary-duty allocation

| Party | Fiduciary duty scope |
|---|---|
| Asset manager (運用機関) | Investment-judgment duty: portfolio construction, security selection, voting opinion |
| Trust bank (資産管理機関 / 受託金融機関) | Asset-safety duty: safekeeping, segregation, accurate recordkeeping, mechanical voting execution |
| DC 運営管理機関 | Member-account fiduciary: accurate record-keeping, fair menu provision, withdrawal compliance |
| Plan sponsor (corporate DB / DC) | Plan-design fiduciary: plan rules, contribution levels, governance |

### GPIF-specific designation rules

GPIF as an independent administrative agency has a governance framework that explicitly separates 投資判断 from 資産保管. The 運用機関 and 資産管理機関 panels are publicly tendered. This separation produces the externally-visible mandate-allocation pattern: many 運用機関 + small set of 資産管理機関. ^[inferred]

### Accounting view

| Item | Where recognized |
|---|---|
| Pension plan trust assets | Off-balance for trust bank; on-balance for the pension plan / GPIF |
| Pension trust admin fees | Revenue at trust bank P&L |
| Pension plan member-balance (DC) | Held at 運営管理機関 record; backed by 投信 receivable + cash |
| Pension plan funding (DB) | At plan / sponsor, not trust bank |

## 6. JASDEC / clearing infrastructure connection

```
┌──────────────────────────────────────────────────────────────────────┐
│ Pension plan layers                                                   │
│ - GPIF (~¥250tn)                                                       │
│ - Corporate DB (多数の plans)                                          │
│ - Corporate DC + iDeCo (多数の plans, member accounts)                 │
└────────────┬────────────────────────────────────────────────────────┬─┘
             │ mandate                                                 │ member admin (DC)
             ▼                                                         ▼
┌────────────────────────────────┐                          ┌─────────────────────────┐
│ 運用機関 (asset managers)        │                          │ DC 運営管理機関 (DC ops)  │
│ — JP-AMs + foreign-AMs           │                          │ — MUFG Trust DC,         │
│ — discretionary investment       │                          │   SMTB DC, Mizuho Trust  │
│   decision + voting opinion      │                          │   DC, Nomura, Daiwa,     │
└────────────┬───────────────────┘                          │   SMBC Nikko, NRK        │
             │ trade instruction                              └─────────────────────────┘
             ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 資産管理機関 / 受託金融機関 (trust banks)                              │
│ — MTBJ + CBJ (custody-only utility)                                   │
│ — MUFG Trust / SMTB / Mizuho Trust (full-service + admin)             │
│ — Norinchukin Trust (cooperative-finance)                             │
└─┬────────────┬────────────┬───────────────┬────────────────────────┬─┘
  │            │            │               │                        │
  ▼            ▼            ▼               ▼                        ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodians    │ │ ICJ / proxy plat│
│ (equities,││ (CCP for    ││ book-entry   ││ (BNY / State Street /│ │ (voting exec.)  │
│ corp bonds││ cash equity)││ (JGB         ││ JPM / Citi for       │ │                 │
│ CP, 投信) ││             ││ settlement)  ││ foreign-asset legs)  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────────┘└─────────────────┘
```

### Why pension mandate flow is the dominant volume driver

The bulk of MTBJ and CBJ AUC by volume comes from pension-side mandates (GPIF + corporate DB) plus 投信 受託 (which itself is partly driven by DC menu allocations). Pension assets are long-duration, sticky, and produce predictable per-bp custody revenue. This is the structural reason MTBJ and CBJ are characterized as "pension custody utilities" rather than general-purpose trust banks. ^[inferred]

### Foreign-asset leg of pension mandates

When pension mandates include foreign equity / bonds / alternatives:

```
Pension plan
  → 運用機関 (asset manager)
    → 資産管理機関 (MTBJ / CBJ / megabank trust bank)
      → Foreign sub-custodian (BNY / State Street / JPM / Citi Japan)
        → Local sub-custodian in foreign market
          → Local CSD or ICSD
```

GPIF's foreign-equity and foreign-bond mandates (a large share of GPIF's portfolio under the 2014+ asset-allocation revision) rely heavily on this sub-custody chain. The cost-side allocation is mostly opaque, but it explains why global custodians' Japan units have material JP-revenue tied to GPIF and corporate-pension foreign-asset flows. ^[inferred]

### DC member-side and JASDEC

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

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/smbc-trust-bank]]
- [[JapanFG/nochu-trust-bank]]
- [[JapanFG/nippon-life]]
- [[JapanFG/dai-ichi-life]]
- [[JapanFG/meiji-yasuda]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- GPIF: official site, operational format page, English summary.
- 厚生労働省: corporate pension policy pages.
- Master Trust Bank of Japan: official site.
- Custody Bank of Japan: official site.
- Trust Companies Association of Japan: trust-bank explanation, trust-assets statistics.
- 企業年金連合会 (Pension Fund Association): corporate-pension data.
- 投資信託協会: investment-trust statistics.
- FSA: trust-business financial institution list.

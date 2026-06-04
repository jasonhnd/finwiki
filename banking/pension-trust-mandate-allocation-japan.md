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
  - "https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf"
  - "https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf"
---

# Pension trust mandate allocation Japan

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and connects the pension-side demand to the trust-bank supply. Read it with the institutional anchors [[trust-banks/master-trust-bank|MTBJ]] and [[trust-banks/custody-bank|CBJ]], the operating models [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and [[banking/custody-bank-operating-model|Custody Bank operating model]], the landscape view [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the fee study [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]. Pair with [[banking/jasdec-settlement-operations|JASDEC settlement operations]] for the rail; with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for regulatory tier; with [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], and [[trust-banks/mizuho-trust-bank|Mizuho Trust]] for the front-office trust-bank side; and with [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] for the foreign-asset-leg sub-custody. For institutional context see [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]].

## TL;DR

Japanese pension-trust mandates split into three layers: GPIF (~¥250tn assets, public pension), corporate DB plans (確定給付企業年金), and DC plans (確定拠出年金, including iDeCo). Each layer separates investment management (運用機関) from asset administration (資産管理機関) — the latter is where MTBJ, CBJ, and the megabank trust-bank arms compete. GPIF's pattern is well documented: a panel of external 運用機関 (asset managers) for active and passive mandates plus a separate 資産管理機関 panel of trust banks (MTBJ + CBJ + selected full-service trust banks) for custody and admin. Corporate DB plans mirror the same separation, often with one or two trust banks per plan. DC plans add a 運営管理機関 layer (record-keeping for member accounts) where megabank trust-bank arms and specialized DC operators compete. Foreign-asset legs across all layers route through global custodians as Japan sub-custodians. The result is a layered mandate-allocation system in which MTBJ and CBJ anchor the asset-administration utility while the megabank trust banks and global custodians compete on the front-office investment-management and DC operating-manager sides.

### Pension-system three layers

| Layer | Description | Statute | Approximate scale |
|---|---|---|---|
| **GPIF** (年金積立金管理運用独立行政法人) | Public pension reserve fund | 厚生年金保険法 + 国民年金法 + 独立行政法人法 | ~¥250tn AUM |
| **Corporate DB** (確定給付企業年金) | Corporate-sponsored defined-benefit pension trust | 確定給付企業年金法 (2001) | ~¥66.0tn entrusted assets (確定給付企業年金, 令和5年3月末; DB+厚生年金基金 combined ~¥80.5tn) |
| **Corporate DC + iDeCo** (確定拠出年金) | Corporate-sponsored / individual DC | 確定拠出年金法 (2001) | ~¥29tn aggregate (企業型DC ¥22.8tn + iDeCo ¥6.2tn, 2024-03末); growing fast post-NISA / DC reforms |

### Mandate-allocation role separation

| Role | Function | Examples |
|---|---|---|
| 運用機関 (Investment manager) | Discretionary investment decision; portfolio construction; trade execution | Asset managers — Nomura AM, MUFG AM, Daiwa AM, SBI AM, JP-side external managers, foreign-asset managers (e.g. Vanguard, BlackRock, State Street SSGA, Goldman Sachs AM, PIMCO, etc.) |
| 資産管理機関 (Asset administrator / trust bank) | Trust-account safekeeping, NAV calc, settlement, CA processing, voting admin | MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, Norinchukin Trust |
| 受託金融機関 (Trust-receiving financial institution) | Pension trust setup, fiduciary holder of the trust | Same trust banks as above, in trust-receiver capacity |
| 運営管理機関 (DC operating manager) | Member-account record-keeping; investment-menu provision; member-facing UI | Trust banks, securities firms, dedicated DC operators (NRK 日本レコード・キーピング・ネットワーク) |
| Sub-custodian (foreign assets) | Foreign-asset book-entry, settlement, FX, foreign CA | BNY Mellon, State Street, JP Morgan, Citi (as global custodian) — accessed via the JP trust bank |

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
| Asset administration (custody, NAV, CA, voting) | 資産管理機関 (external) | MTBJ + CBJ (anchor) + selected full-service trust banks |
| Foreign-asset sub-custody | Sub-custodian chain | Via MTBJ / CBJ → global custodian (BNY / State Street / JPM / Citi) |

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

## 4. 手数料・収益構造

| Pension layer | Front-office fee model (運用機関) | Back-office fee model (資産管理機関) | Member-side fee model (運営管理機関) |
|---|---|---|---|
| iDeCo | Same as DC | Same as DC | Operator fee per member-year (often few hundred yen / month) |

For the granular per-bank fee analysis see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

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
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/dai-ichi-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
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
- 信託協会・生命保険協会・JA共済連「企業年金（確定給付型）の受託概況（令和5年3月末現在）」(DB 資産残高 66兆238億円 / DB+厚生年金基金 合計 80兆5,006億円): https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf
- 運営管理機関連絡協議会「確定拠出年金統計資料（2024年3月末）」(企業型DC 22兆7,880億円 / iDeCo 6兆1,883億円): https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf

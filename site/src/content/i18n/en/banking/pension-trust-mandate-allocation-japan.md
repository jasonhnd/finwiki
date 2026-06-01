---
source: banking/pension-trust-mandate-allocation-japan
source_hash: c63058e18e9a15a9
lang: en
status: machine
fidelity: ok
title: "Pension trust mandate allocation Japan"
translated_at: 2026-05-31T03:19:56.386Z
---

# Pension trust mandate allocation Japan

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and connects the pension-side demand to the trust-bank supply. Read it with the institutional anchors [[JapanFG/master-trust-bank|MTBJ]] and [[JapanFG/custody-bank|CBJ]], the operating models [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and [[banking/custody-bank-operating-model|Custody Bank operating model]], the landscape view [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the fee study [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]. Pair with [[banking/jasdec-settlement-operations|JASDEC settlement operations]] for the rail; with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for regulatory tier; with [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], and [[JapanFG/mizuho-trust-bank|Mizuho Trust]] for the front-office trust-bank side; and with [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] / [[JapanFG/state-street-japan|State Street Japan]] / [[JapanFG/jpmorgan-japan|JP Morgan Japan]] for the foreign-asset-leg sub-custody. For institutional context see [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]].

## TL;DR

Japanese pension-trust mandates split into three layers: GPIF (~¥250tn assets, public pension), corporate DB plans, and DC plans, including iDeCo. Each layer separates investment management from asset administration; the latter is where MTBJ, CBJ, and the megabank trust-bank arms compete. GPIF's pattern is well documented: a panel of external asset managers for active and passive mandates plus a separate asset-administrator panel of trust banks (MTBJ + CBJ + selected full-service trust banks) for custody and administration. Corporate DB plans mirror the same separation, often with one or two trust banks per plan. DC plans add a DC operating-manager layer for member-account record-keeping, where megabank trust-bank arms and specialized DC operators compete. Foreign-asset legs across all layers route through global custodians as Japan sub-custodians. The result is a layered mandate-allocation system in which MTBJ and CBJ anchor the asset-administration utility while the megabank trust banks and global custodians compete on the front-office investment-management and DC operating-manager sides.

### Pension-system three layers

| Layer | Description | Statute | Approximate scale |
|---|---|---|---|
| **GPIF** (Government Pension Investment Fund) | Public pension reserve fund | Employees' Pension Insurance Act + National Pension Act + Act on General Rules for Incorporated Administrative Agencies | ~¥250tn AUM |
| **Corporate DB** | Corporate-sponsored defined-benefit pension trust | Defined Benefit Corporate Pension Act (2001) | ~¥66.0tn entrusted assets (corporate DB, end-2023-03; DB + Employees' Pension Fund combined ~¥80.5tn) |
| **Corporate DC + iDeCo** | Corporate-sponsored / individual DC | Defined Contribution Pension Act (2001) | ~¥29tn aggregate (corporate DC ¥22.8tn + iDeCo ¥6.2tn, end-2024-03); growing fast post-NISA / DC reforms |

### Mandate-allocation role separation

| Role | Function | Examples |
|---|---|---|
| Investment manager | Discretionary investment decision; portfolio construction; trade execution | Asset managers — Nomura AM, MUFG AM, Daiwa AM, SBI AM, JP-side external managers, foreign-asset managers (e.g. Vanguard, BlackRock, State Street SSGA, Goldman Sachs AM, PIMCO, etc.) |
| Asset administrator / trust bank | Trust-account safekeeping, NAV calc, settlement, CA processing, voting admin | MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, Norinchukin Trust |
| Trust-receiving financial institution | Pension trust setup, fiduciary holder of the trust | Same trust banks as above, in trust-receiver capacity |
| DC operating manager | Member-account record-keeping; investment-menu provision; member-facing UI | Trust banks, securities firms, dedicated DC operators (NRK Japan Record Keeping Network) |
| Sub-custodian (foreign assets) | Foreign-asset book-entry, settlement, FX, foreign CA | BNY Mellon, State Street, JP Morgan, Citi (as global custodian) — accessed via the JP trust bank |

### GPIF mandate allocation

GPIF (~¥250tn AUM) operates the largest single pool of pension assets in Japan and the largest pension fund globally. Its mandate-allocation pattern is publicly documented in GPIF's annual reports.

| GPIF mandate slot | Allocator | Typical participant types |
|---|---|---|
| Domestic equity active | Investment managers (external) | Nomura AM, MUFG AM, Daiwa AM, Asset Management One, Goldman Sachs AM Japan, JPM AM Japan, others |
| Domestic equity passive | Investment managers (external) | Asset Management One, MUFG AM, Nomura AM, Daiwa AM, BlackRock JP, State Street GA JP, others |
| Foreign equity active | Investment managers (external) | International + JP-affiliated AMs running global equity strategies |
| Foreign equity passive | Investment managers (external) | BlackRock, State Street GA, Vanguard (where relevant), regional AM affiliates |
| Domestic bond active / passive | Investment managers (external) | Asset Management One, MUFG AM, Nomura AM, others |
| Foreign bond active / passive | Investment managers (external) | PIMCO, JPM AM, BlackRock, others |
| Alternative (PE / infra / real-estate) | Investment managers (external) | Specialized PE / infra / RE managers; fund-of-fund structures |
| Asset administration (custody, NAV, CA, voting) | Asset administrators (external) | MTBJ + CBJ (anchor) + selected full-service trust banks |
| Foreign-asset sub-custody | Sub-custodian chain | Via MTBJ / CBJ → global custodian (BNY / State Street / JPM / Citi) |

### Corporate DB plan mandate-allocation pattern

| Slot | Allocator | Typical participant |
|---|---|---|
| Plan trustee | Trust bank | MUFG Trust, SMTB, Mizuho Trust, regional trust-bank alternatives |
| Investment management mandates | Investment managers (external + plan-side direction) | Asset managers — typically several per plan, sometimes including foreign AMs |
| Asset administration | Asset administrator | Plan-trustee's own custody arm OR external (MTBJ / CBJ) — depending on plan structure |
| Actuarial / advisory | Trust-bank private banking / pension consulting | MUFG Trust, SMTB, Mizuho Trust, specialty pension consultants |
| Benefit-payment ops | Plan trustee | Trust bank-internal |

### DC plan mandate-allocation pattern

| Slot | Allocator | Typical participant |
|---|---|---|
| DC operating manager (record-keeping, member administration) | Sponsor / Plan rules | Trust banks (MUFG Trust, SMTB, Mizuho Trust DC arms), securities firms (Nomura, Daiwa, SMBC Nikko), specialized operator NRK |
| Investment-menu provision | DC operating manager | Selected investment-trust lineup |
| Trust-side custody (asset administration) | Asset administrator | MTBJ / CBJ via the investment-trust trustee company selected by the DC operating manager |
| Investment-trust trustee company for each fund in menu | Trust bank as investment-trust trustee | MTBJ / CBJ / megabank trust arms |
| Foreign-asset legs | Sub-custodian chain | Via the trust bank → global custodian |

### Why role separation matters

| Reading | Implication |
|---|---|
| Investment decision sits at investment manager | The asset manager — not the trust bank — picks securities and votes under voting-rights exercise guidelines |
| Asset custody sits at asset administrator | The trust bank holds assets in trust-account nominee name and therefore appears on issuer shareholder lists |
| Fiduciary duty split | Trust bank holds asset-safety fiduciary duty; asset manager holds investment-judgment fiduciary duty |
| Voting authority | Operates per asset manager voting-rights exercise guidelines, executed mechanically by the trust bank |
| Member balance (DC) | Held in DC operating-manager records, while the underlying investment-trust holdings sit at the trust bank as trustee company |

This separation is the structural reason why "MTBJ + CBJ" appearing as a top shareholder of every TOPIX issuer cannot be read as a unified voting bloc.

### Cross-pension-layer competition map

| Pension layer | Front-office investment-manager competition | Back-office asset-administrator competition | Member-side DC operating-manager competition |
|---|---|---|---|
| GPIF | Wide panel — JP AMs + foreign AMs compete for mandate slices | MTBJ + CBJ + selected full-service trust banks | N/A (GPIF is public pension, no member-level admin like DC) |
| Corporate DB | Plan-trustee-side AMs + external AMs | Plan-trustee internally + MTBJ / CBJ for separately-mandated admin | N/A (DB has no member-level admin record) |
| Corporate DC | DC operating manager's selected investment-trust lineup → underlying investment managers | MTBJ / CBJ via trustee-company layer | MUFG Trust / SMTB / Mizuho Trust / Nomura / Daiwa / SMBC Nikko / NRK |
| iDeCo | Same as DC | Same as DC | Same DC operators (often retail-facing securities firms / online brokers) |

### Cross-trust-bank pension mandate competition

| Trust bank | GPIF mandate side | Corporate DB side | DC operating-manager side |
|---|---|---|---|
| MTBJ | Major asset administrator | Major asset administrator | Limited (custody-only specialist) |
| CBJ | Major asset administrator | Major asset administrator | Limited (custody-only specialist) |
| MUFG Trust | Selected asset-administrator use | Major plan trustee + administration | Major DC operating manager (corporate DC) |
| SMTB | Selected asset-administrator use | Major plan trustee + administration | Major DC operating manager |
| Mizuho Trust | Selected asset-administrator use | Major plan trustee + administration | Major DC operating manager |
| Norinchukin Trust | Limited | Agriculture-and-forestry cooperative-finance plan trustee + administration | Limited |
| SMBC Trust | Limited (PB context) | Limited | Limited |
| Nomura Trust | Limited (grup-internal) | Limited | Group-tied DC operator support |

### Why MTBJ + CBJ dominate asset-administration

| Driver | Effect |
|---|---|
| Scale economics of NAV calculation + CA processing | Favors single-purpose utility over megabank-internal admin |
| GPIF historical tender preference for specialist custody | Anchored MTBJ + CBJ as default winners |
| Megabank trust banks' preference to run separately on front-office mandate | Leaves asset-administration utility to MTBJ + CBJ |
| Cost-recovery pricing at MTBJ + CBJ | Hard for other entities to undercut |
| Trust-bank license + JASDEC participation + trust-account nominee logic | Limits new entrants |

## 4. Fee and Revenue Structure

| Pension layer | Front-office fee model (investment manager) | Back-office fee model (asset administrator) | Member-side fee model (DC operating manager) |
|---|---|---|---|
| iDeCo | Same as DC | Same as DC | Operator fee per member-year (often few hundred yen / month) |

For the granular per-bank fee analysis see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

### Regulatory framework

| Statute / regulator | Coverage |
|---|---|
| Employees' Pension Insurance Act + National Pension Act | Public pension, GPIF establishing authority |
| Act on General Rules for Incorporated Administrative Agencies + GPIF-specific statute | GPIF governance and operating framework |
| Defined Benefit Corporate Pension Act | Corporate DB plans |
| Defined Contribution Pension Act | Corporate DC + iDeCo |
| Trust Business Act + Banking Act | Trust-bank licensing for pension-trust trusteeship |
| Financial Instruments and Exchange Act (investment-trust trusteeship / custody operations) | Investment-trust trustee-company / custody standards |
| Ministry of Health, Labour and Welfare supervisory guidelines | Pension plan supervision |
| Financial Services Agency supervisory guidelines (trust business + trust banks) | Trust-bank supervision |
| GPIF investment principles / stewardship principles | GPIF-specific governance / stewardship |
| Act on the Protection of Personal Information + financial-sector guidelines | Member data protection |

### Fiduciary-duty allocation

| Party | Fiduciary duty scope |
|---|---|
| Asset manager | Investment-judgment duty: portfolio construction, security selection, voting opinion |
| Trust bank (asset administrator / trust-receiving financial institution) | Asset-safety duty: safekeeping, segregation, accurate recordkeeping, mechanical voting execution |
| DC operating manager | Member-account fiduciary: accurate record-keeping, fair menu provision, withdrawal compliance |
| Plan sponsor (corporate DB / DC) | Plan-design fiduciary: plan rules, contribution levels, governance |

### Accounting view

| Item | Where recognized |
|---|---|
| Pension plan trust assets | Off-balance for trust bank; on-balance for the pension plan / GPIF |
| Pension trust admin fees | Revenue at trust bank P&L |
| Pension plan member-balance (DC) | Held in DC operating-manager records; backed by investment-trust receivables + cash |
| Pension plan funding (DB) | At plan / sponsor, not trust bank |

## 6. JASDEC / clearing infrastructure connection

```
┌──────────────────────────────────────────────────────────────────────┐
│ Pension plan layers                                                   │
│ - GPIF (~¥250tn)                                                       │
│ - Corporate DB (many plans)                                            │
│ - Corporate DC + iDeCo (many plans, member accounts)                   │
└────────────┬────────────────────────────────────────────────────────┬─┘
             │ mandate                                                 │ member admin (DC)
             ▼                                                         ▼
┌────────────────────────────────┐                          ┌─────────────────────────┐
│ Asset managers                   │                          │ DC operating managers     │
│ — JP-AMs + foreign-AMs           │                          │ — MUFG Trust DC,         │
│ — discretionary investment       │                          │   SMTB DC, Mizuho Trust  │
│   decision + voting opinion      │                          │   DC, Nomura, Daiwa,     │
└────────────┬───────────────────┘                          │   SMBC Nikko, NRK        │
             │ trade instruction                              └─────────────────────────┘
             ▼
┌──────────────────────────────────────────────────────────────────────┐
│ Asset administrators / trust-receiving financial institutions          │
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
│ CP, funds)││             ││ settlement)  ││ foreign-asset legs)  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────────┘└─────────────────┘
```

### Foreign-asset leg of pension mandates

When pension mandates include foreign equity / bonds / alternatives:

```
Pension plan
  → Asset manager
    → Asset administrator (MTBJ / CBJ / megabank trust bank)
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
- Ministry of Health, Labour and Welfare: corporate pension policy pages.
- Master Trust Bank of Japan: official site.
- Custody Bank of Japan: official site.
- Trust Companies Association of Japan: trust-bank explanation, trust-assets statistics.
- Pension Fund Association: corporate-pension data.
- Investment Trusts Association, Japan: investment-trust statistics.
- FSA: trust-business financial institution list.
- Trust Companies Association of Japan, Life Insurance Association of Japan, and JA Kyosairen, "Entrustment Status of Corporate Defined-benefit Pension Plans (as of end-2023-03)" (DB asset balance ¥66.0238tn / DB + Employees' Pension Fund total ¥80.5006tn): https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf
- Liaison Council of DC Operating Managers, "Defined Contribution Pension Statistical Materials (end-2024-03)" (corporate DC ¥22.7880tn / iDeCo ¥6.1883tn): https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf

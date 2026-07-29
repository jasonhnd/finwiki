---
source: banking/pension-trust-mandate-allocation-japan
source_hash: b61c115c2f58d054
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "Pension trust mandate allocation Japan"
translated_at: 2026-07-29T03:30:48.117Z
---

# Pension trust mandate allocation Japan

## Wiki route

This entry sits under [[banking/INDEX|banking index]] and connects the pension-side demand to the trust-bank supply. Read it with the institutional anchors [[trust-banks/master-trust-bank|MTBJ]] and [[trust-banks/custody-bank|CBJ]], the operating models [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and [[banking/custody-bank-operating-model|Custody Bank operating model]], the landscape view [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the fee study [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]. Pair with [[banking/jasdec-settlement-operations|JASDEC settlement operations]] for the rail; with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for regulatory tier; with [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], and [[trust-banks/mizuho-trust-bank|Mizuho Trust]] for the front-office trust-bank side; and with [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] for the foreign-asset-leg sub-custody. For institutional context see [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]].

## TL;DR

Japanese public and private pensions use several legally distinct arrangements. GPIF publishes its operating framework and manager / custodian information; corporate DB and DC arrangements depend on plan rules, contracts, and statutory disclosures. This page maps roles and evidence routes. It does not infer undisclosed customer mandates, name “default winners”, or rank trust-bank pricing.

### Pension-system three layers

| Layer | Description | Statute | Approximate scale |
|---|---|---|---|
| **GPIF** (年金積立金管理運用独立行政法人) | Public pension reserve fund | 厚生年金保険法 + 国民年金法 + 独立行政法人法 | ~¥250tn AUM |
| **Corporate DB** (確定給付企業年金) | Corporate-sponsored defined-benefit pension trust | 確定給付企業年金法 (2001) | ~¥66.0tn entrusted assets (確定給付企業年金, 令和5年3月末; DB+厚生年金基金 combined ~¥80.5tn) |
| **Corporate DC + iDeCo** (確定拠出年金) | Corporate-sponsored / individual DC | 確定拠出年金法 (2001) | ~¥29tn aggregate (企業型DC ¥22.8tn + iDeCo ¥6.2tn, 2024-03末); growing fast post-NISA / DC reforms |

Sources: ^[GPIF official site and operating framework, https://www.gpif.go.jp/, https://www.gpif.go.jp/operation/operationalformat.html; MHLW pension statistics, https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284.html; iDeCo statistics, https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf. Figures are dated snapshots.]

### Mandate-allocation role separation

| Role | Function | Examples |
|---|---|---|
| 運用機関 (Investment manager) | Discretionary investment decision; portfolio construction; trade execution | Institution named in the mandate / appointment disclosure |
| 資産管理機関 (Asset administrator / trust bank) | Trust-account safekeeping, settlement, recordkeeping, and related administration | Institution named in the appointment disclosure |
| 受託金融機関 (Trust-receiving financial institution) | Pension trust setup and fiduciary holding under the arrangement | Institution named in plan / trust documents |
| 運営管理機関 (DC operating manager) | Member-account recordkeeping, plan administration, and product information within its statutory role | Current plan / operator disclosure |
| Sub-custodian (foreign assets) | Foreign-market safekeeping and settlement functions | Institution named in the specific custody chain |

Sources: ^[GPIF operating framework, MHLW pension materials, FSA trust-business list, and official service descriptions of the appointed entities.]

### GPIF mandate allocation

GPIF publishes its operating framework and dated appointment / reporting materials. Use those publications rather than a static manager list.

| GPIF public surface | What it establishes | Publication rule |
|---|---|---|
| Operational format | Role separation and operating structure described by GPIF | Use GPIF terminology and effective date |
| Investment-manager disclosure | Managers / strategies named by GPIF for the disclosed period | Do not carry a historical appointment forward |
| Asset-administration disclosure | Institutions named by GPIF for the disclosed role and period | Do not infer all sub-custody chains |
| Annual report / stewardship report | Dated assets, performance, governance, and stewardship information | Preserve period, units, and GPIF definitions |
| Procurement / selection notice | Scope and status of the specific selection process | Distinguish application, selection, appointment, and termination |

Sources: ^[GPIF operational format and current disclosures, https://www.gpif.go.jp/operation/operationalformat.html, https://www.gpif.go.jp/.]

### Corporate DB plan mandate-allocation pattern

| DB role | Evidence required for a named plan / provider claim |
|---|---|
| Plan sponsor and rules | Plan or sponsor official disclosure |
| Trustee / receiving financial institution | Plan documents or appointment announcement |
| Investment manager | Plan / sponsor or manager announcement naming the mandate |
| Asset administrator / custodian | Plan, trustee, or appointed institution disclosure |
| Actuarial, advisory, and benefit-payment service | Plan contract disclosure or named official announcement |

Sources: ^[MHLW defined-benefit pension materials, https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284.html; plan- and provider-specific primary disclosures.]

### DC plan mandate-allocation pattern

| Slot | Allocator | Typical participant |
|---|---|---|
| 運営管理機関 (record-keeping, member admin) | Sponsor / Plan rules | Trust banks (MUFG Trust, SMTB, Mizuho Trust DC arms), securities firms (Nomura, Daiwa, SMBC Nikko), specialized operator NRK |
| Investment-menu provision | 運営管理機関 | Selected 投信 lineup |
| Trust-side custody (asset administration) | 資産管理機関 | MTBJ / CBJ via the 運営管理機関's selected 投信 受託会社 |
| 投信受託会社 for each fund in menu | Trust bank as 投信受託 | MTBJ / CBJ / megabank trust arms |
| Foreign-asset legs | Sub-custodian chain | Via the trust bank → global custodian |

Sources: ^[MHLW defined-contribution pension materials; iDeCo official statistics; each plan, operator, fund, and trustee's statutory disclosures.]

### Why role separation matters

| Reading | Implication |
|---|---|
| 投資判断 (investment decision) sits at 運用機関 | The asset manager — not the trust bank — picks securities and votes (per 議決権行使ガイドライン) |
| 資産保管 (custody) sits at 資産管理機関 | The trust bank holds in "信託口" name — appears on issuer shareholder lists |
| Fiduciary duty (受託者責任) split | Trust bank holds asset-safety fiduciary; asset manager holds investment-judgment fiduciary |
| Voting authority | Operates per asset manager's 議決権行使ガイドライン, executed mechanically by the trust bank |
| Member-balance (DC) | Held at 運営管理機関 — but the underlying 投信 holdings sit at the trust bank as 受託会社 |

Sources: ^[GPIF operating materials for GPIF roles; MHLW DB / DC materials and fund statutory documents for private-plan roles. A nominee row alone does not identify the underlying mandate.]

This separation is the structural reason why "MTBJ + CBJ" appearing as a top shareholder of every TOPIX issuer cannot be read as a unified voting bloc.

### Cross-pension-layer competition map

| Pension layer | Authoritative role source | Named-provider evidence |
|---|---|---|
| GPIF | GPIF operational format and current appointment disclosures | GPIF publication naming the institution and role |
| Corporate DB | Statute, plan rules, sponsor / plan disclosure | Plan, sponsor, trustee, or provider announcement |
| Corporate DC | Statute, plan rules, operator and product documents | Sponsor / operator / fund statutory disclosure |
| iDeCo | Official iDeCo / MHLW rules and operator materials | Current operator and product disclosure |

Sources: ^[GPIF, MHLW, and iDeCo official materials listed in the frontmatter.]

### Cross-trust-bank pension mandate competition

| Institution claim | Minimum public evidence |
|---|---|
| GPIF appointment | Current GPIF disclosure naming the institution and role |
| Corporate DB appointment | Named plan / sponsor / trustee primary source |
| DC operating-manager role | Current MHLW / operator registration or official plan material |
| Fund trustee role | Current prospectus / trust deed for the specific fund |
| Relative scale or “major / limited” label | Same-perimeter, same-period public data covering the compared population |

Sources: ^[GPIF, MHLW, FSA, plan, and fund primary documents. Group affiliation does not establish a pension mandate.]

### Why MTBJ + CBJ dominate asset-administration

| Potential explanation | Evidence needed before publication |
|---|---|
| Scale economics | Comparable cost, volume, and service-scope disclosure |
| Selection history | Dated GPIF or plan procurement / appointment records |
| Outsourcing structure | Named trustee / administrator agreement or announcement |
| Fee advantage | Published tariff or contract evidence |
| Regulatory / infrastructure barrier | Current FSA licence and infrastructure participation requirements |

Sources: ^[GPIF procurement / appointment disclosures; FSA and infrastructure rules. The public record does not support “default winner” or pricing-power claims without additional evidence.]

## 4. 手数料・収益構造

| Fee field | Public evidence route | Publication rule |
|---|---|---|
| Investment-management fee | Mandate disclosure or fund statutory document | Do not infer an entity-wide rate |
| Asset-administration fee | Mandate / procurement disclosure where public | Treat undisclosed contract terms as undisclosed |
| DC / iDeCo participant fee | Current operator and official product fee page | Record retrieval date and conditions |

Sources: ^[GPIF procurement disclosures, fund statutory documents, and official DC / iDeCo operator fee pages.]

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

Sources: ^[GPIF, MHLW, FSA trust-business list, and the statutes / official guidance identified in the table.]

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

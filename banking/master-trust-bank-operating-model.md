---
title: "Master Trust Bank of Japan operating model"
aliases:
  - "master-trust-bank-operating-model"
  - "日本マスタートラスト信託銀行 operating model"
  - "MTBJ operating model"
  - "Master Trust Bank operating depth"
domain: banking
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: likely
tags: [banking, trust-bank, custody, asset-administration, pension, settlement-infrastructure, master-trust]
status: active
sources:
  - "https://www.mastertrust.co.jp/"
  - "https://www.mastertrust.co.jp/about/overview.html"
  - "https://www.mastertrust.co.jp/business/asset-management.html"
  - "https://www.mastertrust.co.jp/company/information.html"
  - "https://www.shintaku-kyokai.or.jp/en/pdf/trusts_under_management.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx"
  - "https://www.jasdec.com/en/system/"
  - "https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html"
  - "https://www.gpif.go.jp/"
---

# Master Trust Bank of Japan operating model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with the entity anchor [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]], the operating peer [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]], the landscape summary [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]. Pair it with the settlement-rail entries [[securities/japan-securities-depository-center|JASDEC]] and [[securities/japan-securities-clearing-corp|JSCC]] for the infrastructure side, with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for the regulatory boundary, with the shareholder-side trust-bank pages [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] and [[trust-banks/nochu-trust-bank|農中信託銀行]], and with [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] for the institutional context.

## TL;DR

The Master Trust Bank of Japan (MTBJ — 日本マスタートラスト信託銀行) is an asset-administration specialist trust bank. Its official profile and financial disclosure support its shareholder structure, business scope, and disclosed assets under administration. A 「信託口」 shareholder-register row is a nominee record and does not identify the underlying beneficiary, manager, mandate, or voting instruction by itself. This page therefore avoids attributing named customer flows or pricing power without a mandate-level primary source.

## 1. 機関位置

| Field | MTBJ |
|---|---|
| Legal name (JA) | 株式会社日本マスタートラスト信託銀行 |
| Legal name (EN) | The Master Trust Bank of Japan, Ltd. |
| Established | 2000-05 |
| HQ | 東京都港区浜松町 |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (4-way consortium JV) |
| Primary regulator | 金融庁 (FSA) — bank supervision + trust-business supervision |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no deposits, no PB, no real-estate trust) |
| Public AUC anchor | ¥823 trillion trust assets under custody (MTBJ official "私たちの仕事" page summary, of Japan's ¥2,351 trillion financial assets) |
| Peer | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] |

Sources: ^[MTBJ company overview, https://www.mastertrust.co.jp/about/overview.html; MTBJ FY2024 results, https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf; FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### Shareholder structure (public disclosure)

| Shareholder | Stake | Reading |
|---|---|---|
| [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] (MUFG group) | 46.5% | Shareholder listed by MTBJ |
| [[life-insurers/nippon-life|日本生命]] | 33.5% | Shareholder listed by MTBJ |
| [[life-insurers/meiji-yasuda|明治安田生命]] | 10.0% | Shareholder listed by MTBJ |
| [[trust-banks/nochu-trust-bank|農中信託銀行]] (Norinchukin group) | 10.0% | Shareholder listed by MTBJ |

Sources: ^[MTBJ company overview, https://www.mastertrust.co.jp/about/overview.html. Shareholding does not by itself establish the source or allocation of customer mandates.]

### Why a custody-only trust bank exists

A custody-only trust bank under the 銀行法 + 信託業法 dual route can:

1. participate **directly** in JASDEC book-entry transfer, JSCC central-counterparty clearing, and BoJ JGB book-entry settlement — none of which is open to a pure 信託会社 under 信託業法 alone;
2. issue trust-account ("信託口") nominee names that satisfy the Japanese securities-law and tax-treatment expectations for institutional separate-account holdings;
3. avoid the capital and supervisory load of a full commercial bank because it carries no loan book and only minimal deposit-funded exposure (custody fees, settlement-account residuals, and 預金保険機構 participation).

### Business-line map

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **年金信託 (Pension trust administration)** | Recordkeeping, reporting, benefit-payment, and related administration under the trust arrangement | Pension plans and their appointed service providers | Not the investment manager |
| **投資信託受託 (Securities-investment-trust admin)** | Fund accounting, NAV calculation, holdings records, distribution processing, and audit support | Asset managers that appoint MTBJ as trustee | Not the fund sponsor, distributor, or manager |
| **有価証券カストディ (Securities custody)** | Safekeeping of equities, JGB, corporate bonds, foreign securities; book-entry registration; corporate-actions processing; dividend / interest receipt; tax reclaim ops | Pension plans, asset managers, life insurers, foreign global custodians needing a Japan sub-custodian | Not a proprietary investor; the 「信託口」 nominee label is a recordkeeping construct |
| **議決権行使指図 (Voting administration)** | Mechanical voting execution per asset-owner / manager instruction; ICJ electronic-voting platform connection; proxy-advisor (ISS / Glass Lewis) materials handling | Asset managers, pension plans, foreign investors using MTBJ as sub-custodian | Not a discretionary voter — MTBJ does not form its own voting opinion |
| **特定金外信託 (Specified-money-trust ops)** | Special-purpose investment trust structures (特金) for corporate treasury and financial-institution assets | Corporates, regional banks, insurers using 特金 as an investment vehicle | Not a discretionary asset manager |

Sources: ^[MTBJ official business overview, https://www.mastertrust.co.jp/business/asset-management.html. The reviewed page does not publish a comprehensive named-client mandate list.]

### Operating-function breakdown

| Function | Description |
|---|---|
| Safekeeping & book-entry admin | Direct connection to [[securities/japan-securities-depository-center|JASDEC]] book-entry transfer; BoJ JGB direct-account holder; recordkeeping for 投信受託; cash-settlement-account operation |
| Settlement (cash equity) | DVP-X1 / DVP-X2 / DVP-X3 connection via JASDEC for retail and institutional equity settlement |
| Settlement (JGB) | Direct participation in the BoJ JGB book-entry system, providing JGB custody for pension and 投信 mandates |
| Settlement (corporate bond / CP) | Book-entry transfer via JASDEC for 社債 and CP |
| Fund accounting / NAV calculation | Daily NAV calculation for 投信 mandates; valuation rules per 投信協会 guidance; audit-support workpapers |
| Corporate actions | Dividend / interest receipt, splits, rights offerings, conversions, mandatory / voluntary events, withholding-tax processing; foreign-asset CA via global custodian sub-network |
| Voting operations | Receipt of meeting materials, ICJ electronic-voting forwarding, mechanical execution of asset-owner / manager instructions |
| Sub-custody for foreign assets | Re-routing through global custodians ([[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]]) for non-JP assets in mandate portfolios |
| Securities-lending support | Lending program administration when client opts in; collateral posting; recall management |
| Member / participant ops | Pension member balance reporting (DB / DC), benefit payment ops, fund-of-funds look-through |

### The 「信託口」 nominee surface

Approximately every TOPIX-100 issuer disclosure shows 「日本マスタートラスト信託銀行（信託口）」 as a top-3 shareholder. The economic reading is:

- The legal record name is MTBJ.
- The beneficial owners are GPIF, corporate pensions, 投信ファンド, insurance separate accounts, and foreign-investor sub-custody clients of MTBJ.
- Voting instruction comes from the upstream asset manager or asset owner — not MTBJ.

This is why MTBJ's apparent "concentration" in the public shareholder register cannot be read as a single voting bloc. The same body of holdings is fragmented across hundreds of underlying mandates with different voting policies.

### Three competitive layers

| Layer | Competitor | Overlap with MTBJ | Differentiation |
|---|---|---|---|
| Domestic asset-administration specialist | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] | Official materials describe overlapping asset-administration services | Compare published business scope, AUC definition, and shareholder structure |
| Full-service trust banks | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | Their official materials include broader trust services | Do not infer outsourcing or client allocation without a specific disclosure |
| Global custodians | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | Parent groups publish global securities-services networks | Japan-specific mandates and economics are often not separately disclosed |

Sources: ^[MTBJ and CBJ official business pages; Trust Companies Association of Japan, https://www.shintaku-kyokai.or.jp/trust/trustbanks/; official global-custodian securities-services pages.]

### Cross-camp comparison table

| Dimension | MTBJ | CBJ | Megabank trust-bank arm | Global custodian (JP) |
|---|---|---|---|---|
| Published business focus | Asset administration | Asset administration | Broader trust services | Global securities services |
| Entity AUC disclosure | Published by MTBJ | Published by CBJ | Definitions and perimeter vary | Often parent-level rather than Japan-only |
| Named customer mandate | Not comprehensively disclosed | Not comprehensively disclosed | Not comprehensively disclosed | Not comprehensively disclosed for Japan |
| General mandate tariff | Not published | Not published | Not published | Not published for the Japan unit |
| Infrastructure connectivity | Verify in current participant disclosures | Verify in current participant disclosures | Verify by legal entity | Verify by legal entity |

Sources: ^[Official entity, FSA, JASDEC, JSCC, and investor-relations publications listed in the frontmatter. Categories do not establish pricing or a customer relationship.]

## 4. 手数料・収益構造

MTBJ does not publicly disclose granular fee schedules. The public-domain reading is:

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Pension trust administration | Contract-specific; no entity-wide rate established | Not disclosed at line-item level |
| Securities custody | Contract-specific | No general public tariff identified |
| Voting / corporate-action administration | Contract treatment not established by the reviewed public material | Not separately disclosed |
| Securities-lending administration | Contract treatment not established by the reviewed public material | Not separately disclosed |
| Own-account interest income | Reported through the bank's financial statements | No mandate-level attribution |

Sources: ^[MTBJ financial disclosures, https://www.mastertrust.co.jp/company/information.html; individual fund prospectuses and trust deeds for fund-specific trustee remuneration.]

### Why fees are hard to read from outside

1. MTBJ is non-listed and publishes only minimum statutory disclosures; granular fee disclosure is at the shareholder consolidated level.
2. 投信受託 fees are observable per fund but vary by fund-family, asset class, and contract date; cross-fund aggregation requires manual scraping of each 信託約款.
3. Pension-trust contracts are individually negotiated, including for GPIF; no per-mandate fee is published, so only summary aggregate AUC × average bps inferences are possible from public data.
4. Securities-custody fees for institutional clients are mandate-specific and not on standard public tariffs.

### Cross-bank fee-economy reading

| Aspect | MTBJ / CBJ (domestic specialists) | Megabank trust-bank arm | Global custodian (Japan) |
|---|---|---|---|
| Public mandate tariff | Not disclosed | Not disclosed | Not disclosed for the Japan unit |
| Entity or segment result | MTBJ / CBJ statutory disclosure | Listed-parent segment disclosure | Parent securities-services disclosure |
| Japan-specific customer allocation | Not comprehensively disclosed | Not comprehensively disclosed | Often not separately disclosed |
| Valid public comparison | Business scope and consistently defined reported figures | Business scope and consistently defined reported figures | Business scope and consistently defined reported figures |

Sources: ^[Official entity and parent disclosures. The reviewed public materials do not support a pricing-power ranking.]

For a granular cross-bank fee comparison see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

### Regulatory stack

| Layer | Statute / regulator | MTBJ implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | Capital adequacy, liquidity, governance, IT-risk supervision; MTBJ runs a low-risk balance sheet so capital is light |
| Trust-business supervision | 信託業法 + 金融庁 監督指針 (信託業 section) | Trust account separation, fiduciary-duty rules, conflict-of-interest controls, 受託者責任 standards |
| Securities-law overlay | 金融商品取引法 — 投資信託受託会社 / カストディ ops | NAV calc accountability, custody standards, 投信協会 compliance |
| Pension regulation | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | Pension trust admin ops, fiduciary reporting, member-balance reporting |
| Deposit insurance | 預金保険機構加盟 | Statutory membership though deposits are minor |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | Custody-side AML applied to underlying client mandates |
| Stewardship / corporate-governance | スチュワードシップ・コード (voluntary code) | Voting-admin transparency expectations |
| Recordkeeping / data | 個人情報保護法, 金融分野ガイドライン | Pension member data, NISA-related account data |

Sources: ^[FSA trust-business financial-institution list, https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf; FSA bank supervisory guidance, https://www.fsa.go.jp/common/law/guide/city/.]

### Accounting treatment

| Item | Treatment |
|---|---|
| Trust-account assets ("信託財産") | **Off-balance-sheet** at MTBJ; on-balance-sheet for the beneficial owner |
| Custody fees | Recognized as fee income in P&L |
| 預金 (own-account deposits) | On-balance-sheet — but small relative to trust assets |
| Settlement-account residual balances | Short-duration; included in cash + due-from-banks |
| Capital | Statutory minimum 信託兼営銀行 capital plus internal buffer |

Sources: ^[MTBJ financial disclosures, https://www.mastertrust.co.jp/company/information.html; FSA supervisory materials.]

## 6. JASDEC / clearing infrastructure connection

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / pensions / 投信 / insurers)            │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion, voting opinion)         │
│ — MUFG-AM, Nomura AM, SBI AM, etc.                               │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Master Trust Bank of Japan (trust account / nominee)             │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodian │ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ (foreign sub-    │ │ (electronic     │
│ corp bonds││ cash equity ││ (JGB         ││ custody — BNY,   │ │ proxy voting)   │
│ CP, 投信) ││ + CCP)      ││ settlement)  ││ State Street,    │ │                 │
│           ││             ││              ││ JPM, Citi)       │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### Direct JASDEC connection

MTBJ is a direct participant in [[securities/japan-securities-depository-center|JASDEC]] book-entry transfer for:

- 株式振替制度 (dematerialized listed shares)
- 一般債振替制度 (corporate bonds, including 普通社債, 転換社債)
- 短期社債振替制度 (CP / commercial paper)
- 投資信託振替制度 (publicly offered 投信 unit transfer)

### Sub-custody chain for foreign assets

Foreign-asset legs of MTBJ-administered mandates (e.g. GPIF foreign equity, foreign bond portfolios in 投信) are routed through global custodians as Japan-side sub-custody. The chain is approximately:

```
MTBJ (record-name trust-account) → global custodian (BNY / State Street / JPM / Citi)
  → local sub-custodian in each foreign market → local CSD
```

This sub-custody dependency means MTBJ's foreign-asset processing cost is structurally a pass-through from the global custodian's fee schedule, which limits MTBJ's pricing power on foreign-asset legs but preserves it on domestic-asset legs.

## Related

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/custody-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Master Trust Bank of Japan: official site, company overview, business / asset-management page ("私たちの仕事" — states ¥823 trillion trust assets under custody of Japan's ¥2,351 trillion financial assets: https://www.mastertrust.co.jp/about/overview.html), company-information page (capital ¥10bn; shareholders MUFG Trust 46.5% / Nippon Life 33.5% / Meiji Yasuda 10.0% / 農中信託 10.0%; business commenced 2000-05-09: https://www.mastertrust.co.jp/company/information.html).
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- GPIF: public annual report and asset-administrator panel disclosures.

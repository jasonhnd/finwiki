---
title: "JASDEC settlement operations"
aliases:
  - "jasdec-settlement-operations"
  - "JASDEC operations"
  - "Japan Securities Depository Center settlement operations"
  - "証券保管振替機構 settlement operations"
  - "ほふり settlement operations"
domain: banking
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [banking, custody, settlement-infrastructure, jasdec, dvp, csd, market-infrastructure]
status: active
sources:
  - "https://www.jasdec.com/en/"
  - "https://www.jasdec.com/en/system/"
  - "https://www.jasdec.com/en/about/office/outline/"
  - "https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf"
  - "https://www.boj.or.jp/en/paym/jgb_bes/index.htm"
  - "https://www.shintaku-kyokai.or.jp/"
---

# JASDEC settlement operations

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as a settlement-infrastructure deep dive that is directly load-bearing for the trust-bank custody operating models. Read it alongside [[securities/japan-securities-depository-center|JASDEC entity page]] and [[securities/japan-securities-clearing-corp|JSCC clearing corp]] for the market-infrastructure side; with [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]], [[banking/custody-bank-operating-model|Custody Bank operating model]], [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], and [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] for the trust-bank routing; with [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for the macro plumbing view; and with [[JapanFG/master-trust-bank|MTBJ]] and [[JapanFG/custody-bank|CBJ]] for the institutional connection points. For TSE / OSE / JSCC integration context see [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] and [[securities/osaka-exchange|Osaka Exchange]].

## TL;DR

JASDEC (証券保管振替機構 / ほふり — Japan Securities Depository Center, Inc.) is Japan's central securities depository for all dematerialized securities other than Japanese government bonds. It is FSA + Ministry of Justice-designated under the 振替制度 (book-entry transfer) regime. It runs four major book-entry systems — shares, corporate bonds, CP, and investment trusts — plus DVP settlement, pre-settlement matching, corporate-actions distribution, and foreign-stock custody support via its subsidiary JDCC (JASDEC DVP Clearing Corporation). Trust banks (MTBJ, CBJ, megabank trust arms), securities firms, and global custodians connect directly to JASDEC as participants. The settlement model interlocks with JSCC's CCP function on the equity side and BoJ funds on the cash side, producing the DVP-X1 / DVP-X2 / DVP-X3 quality regime. For Japan custody analysis JASDEC is the rail; trust banks are the on-rail vehicles.

## 1. 機関位置

| Field | JASDEC |
|---|---|
| Legal name (JA) | 株式会社証券保管振替機構 |
| Legal name (EN) | Japan Securities Depository Center, Inc. |
| Common short name | ほふり (hofuri) |
| Founded | 2002-01-04 (株式会社化); JASDEC predecessor existed earlier as a 公的法人 |
| Capital | ~¥4.25 billion |
| Designation | FSA + Ministry of Justice-designated 振替機関 (book-entry transfer institution) |
| Primary subsidiary | **JDCC** (JASDEC DVP Clearing Corporation) for DVP cash-equity clearing |
| Functional position | Central securities depository (CSD) for all dematerialized JP securities other than JGB |
| HQ | Tokyo (株式会社証券保管振替機構) |
| Industry body / counterpart | JSCC (clearing CCP), BoJ (cash leg), TSE / OSE (trading venues) |

### What JASDEC is not

| Common confusion | Correction |
|---|---|
| "JASDEC clears trades" | No — JASDEC operates book-entry transfer and settlement; central counterparty clearing is JSCC. |
| "JASDEC settles JGBs" | No — JGB settlement is via the BoJ JGB book-entry system. |
| "JASDEC is an investor / custodian" | No — JASDEC is infrastructure. The custodians are trust banks and global custodians; JASDEC is the rail they ride. |
| "JASDEC handles all foreign stocks" | Partial — JASDEC supports foreign stock certificate ops; cross-border ICSD connectivity is via Euroclear / Clearstream with sub-custody arrangements. |

### Participant types

| Participant type | Examples |
|---|---|
| 信託銀行 (custody-only) | [[JapanFG/master-trust-bank|MTBJ]], [[JapanFG/custody-bank|CBJ]] |
| 信託銀行 (full-service) | [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], [[JapanFG/mizuho-trust-bank|Mizuho Trust]], [[JapanFG/nochu-trust-bank|Norinchukin Trust]] |
| Securities firms | Nomura, Daiwa, SMBC Nikko, Mizuho Securities, regional brokers |
| Global custodians (Japan unit) | [[JapanFG/bny-mellon-japan|BNY Mellon Japan]], [[JapanFG/state-street-japan|State Street Japan]], [[JapanFG/jpmorgan-japan|JP Morgan Japan]], [[JapanFG/citigroup-japan|Citi Japan]] |
| Banks (general custody / 名義書換) | Megabanks, regional banks (limited custody mandate) |
| ICSD / cross-border infrastructure | [[JapanFG/euroclear-bank-japan|Euroclear Japan]], [[JapanFG/clearstream-banking-japan|Clearstream Japan]] (link routes) |

### Book-entry systems

| System | Asset class | Year started | Key flow |
|---|---|---|---|
| 株式振替制度 | Dematerialized listed equity | 2009-01 (paper-share abolition) | Trade match → JSCC CCP → JASDEC book-entry transfer → custodian account |
| 一般債振替制度 | Corporate bonds (普通社債, 転換社債), 地方債, 政府保証債, 財投機関債 | Phased from 2006 | OTC trade → JASDEC book-entry transfer |
| 短期社債振替制度 (CP) | Commercial paper | 2003-03 | Issuance + secondary transfer via JASDEC |
| 投資信託振替制度 | Publicly offered 投信 units | 2007-01 | Subscription / redemption / transfer of 投信 受益権 |

### DVP and ancillary services

| Service | Function |
|---|---|
| **DVP settlement** | Simultaneous delivery (securities via JASDEC book-entry) + payment (funds via BoJ-net or 全銀ネット) — eliminates settlement-risk asymmetry |
| **Pre-settlement matching** | Trade matching service before DVP settlement; covers institutional cross-trades and broker-custody interfaces |
| **Corporate actions** | Distribution of dividend, interest, redemption proceeds; rights offerings; splits; mergers; tender-offer settlement |
| **Issuer services** | Issuer interface for shareholder identification at record dates; beneficial-owner list provisioning to issuers for AGM / dividend purposes |
| **Foreign stock certificates** | Custody-support services for foreign securities issued in Japan or held by Japanese investors |
| **Tax / withholding ops** | Withholding-tax processing on dividend / interest; foreign-investor tax-treaty reclaim support via custodian chain |
| **JDCC DVP clearing** | JASDEC DVP Clearing Corporation — JDCC handles funds netting on the cash leg for non-JSCC-cleared cash-equity DVP |

### Function-type breakdown

| Function | Who initiates | Who settles | Where the cash leg sits |
|---|---|---|---|
| Listed-equity exchange trade | Investor → broker → TSE/OSE | JSCC CCP → JASDEC book-entry transfer → custodian account | BoJ-net funds via JSCC participants |
| Listed-equity OTC trade | Investor → broker → counterparty broker | JASDEC + JDCC | BoJ-net or 全銀ネット |
| Corporate bond OTC trade | Investor → broker → counterparty broker | JASDEC 一般債振替 | BoJ-net (large lot) or 全銀ネット |
| Commercial paper | Issuer → dealer → investor | JASDEC 短期社債振替 | BoJ-net |
| 投信 unit transfer | Distributor → 投信協会 ops → fund | JASDEC 投信振替 | Cash settlement per distributor channel |
| 投信 receipt / NAV-based settlement | Trust bank / asset manager | JASDEC + trust-bank books | Settlement-account residual |

## 3. 競合構造

JASDEC is a single-CSD national infrastructure — there is no domestic alternative for the asset classes it covers. The "competitive" map is therefore about:

| Comparison axis | JASDEC | Alternative / overlapping |
|---|---|---|
| Equity / corporate bond / CP / 投信 dematerialized settlement | **Only domestic option** | None — JASDEC is the designated 振替機関 under 振替制度 |
| JGB settlement | Not applicable | **BoJ JGB book-entry system** is the alternative (separate infrastructure) |
| CCP clearing for cash equity | Not applicable | **JSCC** as central counterparty layer above JASDEC |
| Cross-border / ICSD settlement | Re-routed via bilateral links + global custodians | **Euroclear** + **Clearstream** as ICSD layer (with Japan sub-custodians) |

### Cross-infrastructure interaction

| Layer | JASDEC role | Counterpart |
|---|---|---|
| Trading venue | Receives matched trade data | TSE, OSE, ODX, PTS |
| Clearing CCP | Receives novation-confirmed obligation data | JSCC |
| Funds settlement | Cash leg via BoJ-net or 全銀ネット | BoJ, 全銀ネット, Zengin EDI |
| Issuer interface | Beneficial-owner list, record-date snapshot | Issuers (上場会社) via 株式事務代行銀行 |
| Foreign-link | Inbound foreign sub-custody chain; outbound JP-securities to ICSD | Global custodians, Euroclear, Clearstream |

## 4. 手数料・収益構造

JASDEC operates as a utility-pricing infrastructure with regulated rates rather than market pricing.

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Participation fee (固定) | Per-participant annual | Disclosed in fee schedule (JASDEC public) |
| Per-transaction settlement fee | Per book-entry transfer | Disclosed in fee schedule |
| Issuer service fee | Per issuer, per CA event, per record-date snapshot | Disclosed in fee schedule |
| DVP service fee | Per DVP transaction | Disclosed in fee schedule |
| 投信 振替 fee | Per 投信 unit transfer / subscription / redemption | Disclosed in fee schedule |
| JDCC clearing fee | Cash-equity DVP funds-netting fee | Disclosed in JDCC fee schedule |

### Regulatory designations

| Designation | Source | Implication |
|---|---|---|
| 振替機関 (book-entry transfer institution) | 社債、株式等の振替に関する法律 (振替法) — designated by FSA + 法務省 | Sole legal authority to operate dematerialized book-entry transfer for listed equity, corp bonds, CP, 投信 |
| FMI (Financial Market Infrastructure) | BIS-IOSCO PFMI standards via FSA / BoJ joint oversight | Must meet PFMI principles (default-risk, operational-risk, settlement-finality standards) |
| FSA supervisory authority | 金商法 + 振替法 + 内閣府令 | On-site exam, governance, IT-risk supervision |
| BoJ oversight | BoJ payment-system oversight framework | Joint oversight given DVP link to BoJ-net |

### Settlement finality

Settlement under the 振替制度 is **legally final** once book-entry transfer completes — there is no clawback under normal operations. This is the structural reason why DVP-X1 / X2 / X3 settlement is treated as institutional-grade.

### DVP-X1 / X2 / X3 quality classification

| Quality tier | Description |
|---|---|
| DVP-X1 | Pre-settlement matching + JSCC-cleared cash equity; full DVP with funds netting |
| DVP-X2 | OTC cash-equity DVP via JDCC funds netting |
| DVP-X3 | Bond / 投信 DVP via JASDEC + 全銀 cash leg |

### Accounting treatment for trust-bank participants

| Item | Treatment |
|---|---|
| Securities held in JASDEC book-entry on behalf of clients | Off-balance-sheet for trust bank; on-balance for beneficial owner |
| Cash settlement-account residuals at custodian | On-balance (small) |
| Settlement-fee expense to JASDEC | Operating expense line in custodian P&L |
| Custody-fee revenue from upstream client | Operating revenue in custodian P&L |

## 6. JASDEC / clearing infrastructure connection

```
        ┌─────────────────────────────┐
        │  Trading venues             │
        │  TSE / OSE / ODX / PTS      │
        └─────────────┬───────────────┘
                      │ matched trade
                      ▼
        ┌─────────────────────────────┐
        │  JSCC                       │
        │  (central counterparty for  │
        │  cash equity + repo + JGB   │
        │  OTC derivatives)           │
        └─────────────┬───────────────┘
                      │ novated obligation
                      ▼
        ┌─────────────────────────────┐
        │  JASDEC                     │
        │  - 株式振替                  │
        │  - 一般債振替                │
        │  - 短期社債振替              │
        │  - 投信振替                  │
        │  - JDCC DVP cash-leg netting │
        └─┬──────────────────────┬────┘
          │ book-entry transfer  │ cash leg
          ▼                      ▼
        ┌────────────────────────────────┐    ┌──────────────────────┐
        │  Trust banks / custodians      │    │  BoJ-net / 全銀ネット │
        │  - MTBJ, CBJ (custody-only)    │    │  funds settlement    │
        │  - MUFG Trust, SMTB, Mizuho    │    └──────────────────────┘
        │    Trust (full-service)        │
        │  - BNY, State Street, JPM,     │
        │    Citi (global custodians)    │
        │  - Securities firms            │
        └────────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │  Beneficial owners          │
        │  GPIF, pensions, 投信,       │
        │  insurers, retail investors │
        └─────────────────────────────┘
```

### Trust-bank participant interaction model

MTBJ and CBJ each maintain direct JASDEC participant accounts. Their book-entry positions on behalf of underlying asset-owner mandates produce the "信託口" nominee patterns visible on issuer shareholder registers. JASDEC's beneficial-owner-disclosure service exists to give issuers a periodic look-through at record date, but the public top-shareholder list still shows the "信託口" name as the recorded holder.

### Cross-border / ICSD link

For cross-border settlement of JP-issued securities held by foreign investors, the chain is:

```
Foreign investor
  → Global custodian (BNY / State Street / JPM / Citi)
    → Japan sub-custodian (trust bank — often MTBJ / CBJ / megabank trust arm)
      → JASDEC book-entry account
```

For JP investor holdings of foreign-issued securities, the inverse chain is used:

```
JP investor
  → JP custodian (trust bank)
    → JP sub-custody via global custodian
      → ICSD (Euroclear / Clearstream) or local CSD
```

### Tokenized securities open question

Tokenized 信託受益権 securities issued via [[JapanFG/progmat|Progmat]] and similar platforms run on parallel DLT ledgers. Their integration with the JASDEC book-entry rail is still being designed:

| Design option | Trade-off |
|---|---|
| ST issued on parallel ledger only | Loses JASDEC settlement-finality protection; relies on ST-platform finality rules |
| ST mirrored to JASDEC book-entry | Doubles infrastructure cost; legal-status of mirror entry is unclear |
| ST anchored to JASDEC by reference | Hybrid; legal status under 振替法 needs clarification |

JASDEC's evolution on this front will materially shape whether trust banks can offer institutional-grade ST custody as easily as conventional securities custody.

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[JapanFG/euroclear-bank-japan]]
- [[JapanFG/clearstream-banking-japan]]
- [[JapanFG/progmat]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- JASDEC: official site (Japanese + English), system pages, company outline.
- JSCC: clearing CCP pages and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- FSA: 振替法 supervisory page and trust-business financial institution list.
- Trust Companies Association of Japan: trust-bank participant information.
- Wikipedia (cross-reference): JASDEC entries and ほふり history.

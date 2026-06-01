---
source: banking/custody-bank-operating-model
source_hash: 667beca79830e97d
lang: en
status: machine
fidelity: ok
title: "Custody Bank of Japan operating model"
translated_at: 2026-05-30T18:10:53.984Z
---

# Custody Bank of Japan operating model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with the entity anchor [[JapanFG/custody-bank|Custody Bank of Japan (CBJ)]], the operating peer [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and entity [[JapanFG/master-trust-bank|MTBJ]], the landscape summary [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], and the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]].

## TL;DR

The Custody Bank of Japan (CBJ) is the other half of Japan's two-strong asset-administration utility, formed by the 2020-07-27 merger of JTSB and TCSB. Its shareholder camp is Sumitomo Mitsui Trust Group, Mizuho FG, Resona Bank, Dai-ichi Life, and other life insurers. Operationally CBJ performs pension trust administration, securities-investment-trust administration, and securities custody under the Banking Act plus Trust Business Act license route, with direct JASDEC and BoJ JGB settlement participation.

## 1. 機関位置

| Field | CBJ |
|---|---|
| Legal name (JA) | Custody Bank of Japan, Ltd. |
| Legal name (EN) | Custody Bank of Japan, Ltd. |
| Established | 2020-07-27 (JTSB + TCSB merger) |
| HQ | Harumi Island Triton Square Office Tower Z, 1-8-12 Harumi, Chuo-ku, Tokyo |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (multi-FG joint venture) |
| Primary regulator | 金融庁 (FSA) |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no PB, no real-estate trust, no inheritance trust) |
| Public AUC anchor | Approximately JPY 696tn total assets under custody, including entrusted trust assets and assets held under standing-proxy contracts; trust assets were approximately JPY 476tn as of 2025-03-31 |
| Peer | [[JapanFG/master-trust-bank|Master Trust Bank of Japan (MTBJ)]] |

### Shareholder structure (public disclosure, as of 2020-07-27)

| Shareholder | Stake | Reading |
|---|---|---|
| [[JapanFG/sumitomo-mitsui-trust|Sumitomo Mitsui Trust Group (SMTH)]] | 33.3% | Lead trust-bank shareholder; provides mandate flow from the SMTB pension / investment-trust client base; legacy JTSB lineage |
| [[JapanFG/mizuho-fg|Mizuho Financial Group (Mizuho FG)]] | 27.0% | Second trust-bank shareholder via Mizuho Trust; legacy TCSB lineage |
| Resona Bank | 16.7% | Third-largest shareholder; legacy Daiwa / Asahi Trust lineage in the TCSB camp |
| [[JapanFG/dai-ichi-life|第一生命保険]] | 8.0% | Life-insurer shareholder; provides separate-account custody and corporate-pension mandate flow |
| 朝日生命保険 | 5.0% | Life-insurer shareholder (legacy TCSB) |
| 明治安田生命保険 | 4.5% | Life-insurer shareholder |
| Japan Post Insurance | 3.5% | Life-insurer shareholder |
| 富国生命保険 | 2.0% | Life-insurer shareholder (legacy TCSB) |

### Why two specialist custodians, not one

The 2020-07 merger consolidated JTSB and TCSB but stopped short of merging with MTBJ. The public reading is:

1. Shareholder politics — the MUFG / 生保 axis vs the SMTB / Mizuho / Resona / 生保 axis would not consolidate easily without ceding control;
2. Risk concentration — Japan's institutional asset-administration cannot rely on a single utility (operational risk + counterparty risk + 議決権 集中);
4. Cost arbitrage — duplicate systems within each camp (JTSB vs TCSB inside the SMTB / Mizuho camp) were redundant, but inter-camp duplication produces a competitive check.

The 2020 merger achieved the **intra-camp** consolidation. Inter-camp consolidation (CBJ + MTBJ) remains an open question.

### Lineage diagram

```
SMTB / 第一生命 lineage
  Japan Trustee Services Bank (JTSB) -- established in 2000
    ├── 旧中央三井信託 → SMTB
    ├── 旧住友信託 → SMTB
    └── 第一生命

Mizuho / Resona / 生保 lineage
  Trust and Custody Services Bank (TCSB) -- established in 2004
    |-- Mizuho Trust
    |-- Resona Bank (former Daiwa / Asahi Trust lineage)
    ├── Asahi Life, Meiji Yasuda, Japan Post Insurance, Fukoku Life
    └── 旧第一勧業富士 / 安田信託 系統

  ↓ 2020-07-27 merger

  Custody Bank of Japan (CBJ) -- shareholders as of 2020-07-27
    |-- Sumitomo Mitsui Trust Group (SMTH) 33.3%
    |-- Mizuho FG 27.0%
    |-- Resona Bank 16.7%
    ├── 第一生命 8.0%
    `-- Asahi Life 5.0% / Meiji Yasuda 4.5% / Japan Post Insurance 3.5% / Fukoku Life 2.0%
```

### Business-line map

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **Trust custody / securities custody** | Safekeeping of equities, JGBs, corporate bonds, foreign securities; book-entry registration; corporate-actions processing; dividend / interest receipt; tax reclaim operations | Pension plans, asset managers, life insurers, foreign investors |
| **年金信託 (Pension trust administration)** | Trust contract for 厚生年金基金, DB, DC plans — recordkeeping, asset-owner reports, benefit-payment ops | GPIF, large corporate DB plans, DC plan administrators | Not the investment manager |
| **投信受託 (Securities-investment-trust admin)** | Trust contract for 公募投信 / 私募投信 — fund accounting, NAV calc, holdings register, distribution processing | Asset managers using CBJ as 受託会社 (notably SMTB AM affiliates, Mizuho AM, Resona AM affiliates) | Not the fund manager or distributor |
| **特定金銭信託 (特金) ops** | 特金 vehicles for institutional / corporate investors | Insurers, corporates, regional banks | Not a discretionary asset manager |
| **Asset-administration services / master custody** | Institutional master custody, multi-mandate consolidation, investment-instruction processing | Large multi-mandate asset owners | Not the sponsor |

### Operating-function breakdown

| Function | Description |
|---|---|
| Safekeeping & book-entry admin | Direct connection to [[securities/japan-securities-depository-center|JASDEC]] book-entry transfer; BoJ JGB direct-account holder; cash-settlement-account operation |
| Settlement (cash equity) | DVP-X1 / DVP-X2 / DVP-X3 settlement via JASDEC + JSCC clearing |
| Settlement (JGB) | Direct participation in BoJ JGB book-entry system |
| Settlement (corporate bond / CP) | Book-entry transfer via JASDEC for 社債 and CP |
| Fund accounting / NAV calculation | Daily NAV calculation for 投信 mandates; 投信協会 standards |
| Corporate actions | Dividend / interest receipt, splits, rights offerings, conversions; foreign-asset CA via global custodian sub-network |
| Voting operations | Mechanical execution of asset-owner / manager instructions; ICJ electronic-voting forwarding |
| Sub-custody for foreign assets | Re-routing via [[JapanFG/bny-mellon-japan|BNY Mellon]] / [[JapanFG/state-street-japan|State Street]] / [[JapanFG/jpmorgan-japan|JP Morgan]] / [[JapanFG/citigroup-japan|Citi]] for non-JP assets |
| Member / participant ops | Pension member balance reporting (DB / DC), benefit-payment ops |
| Securities-lending support | Lending program admin (when client opts in); collateral posting; recall management |

### The 「信託口」 nominee surface — CBJ specific

CBJ's nominee name ?Custody Bank of Japan, Ltd. (Trust Account)? appears in the top-shareholder rows of substantially every TOPIX-100 issuer, often immediately after MTBJ's trust-account nominee.

| Reading | Interpretation |
|---|---|
| Legal record name | CBJ |
| Beneficial owners | SMTB-side asset managers, Mizuho-side asset managers, Resona-side asset managers, 第一生命 separate accounts, Asahi / Meiji Yasuda / Fukoku Life accounts, foreign sub-custody clients of CBJ |
| Voting instruction source | Upstream asset manager or asset owner — not CBJ |
| Underlying exposure type | Largely passive index + active pension mandates + 投信 holdings |

### vs MTBJ — operating-detail comparison

| Field | CBJ | MTBJ |
|---|---|---|
| Established | 2020-07-27 (JTSB+TCSB merger) | 2000-05 (greenfield) |
| Shareholder camp | SMTH 33.3% + Mizuho FG 27.0% + Resona 16.7% + Dai-ichi Life 8.0% + Asahi / Meiji Yasuda / Japan Post / Fukoku life insurers | MUFG Trust + Nippon Life + Meiji Yasuda + Norinchukin |
| Lead shareholder stake | Sumitomo Mitsui Trust Group (SMTH) 33.3% | MUFG Trust 46.5% |
| Public AUC anchor | ~¥696tn (2025-03-31; total assets under custody) | ~¥770tn (2025-03-31; 管理資産残高) |
| HQ location | 東京都中央区晴海 | 東京都港区浜松町 |
| Legal-structure license | 銀行法 + 信託業法 (custody-only) | 銀行法 + 信託業法 (custody-only) |
| Loans / deposits | None / minimal | None / minimal |
| 不動産信託 | No | No |
| Inheritance / 相続 trust | No | No |
| PB / wealth | No | No |
| Real-estate trust | No | No |
| JASDEC direct | Yes (high volume) | Yes (high volume) |
| BoJ JGB direct | Yes | Yes |
| JSCC direct | Yes | Yes |
| ICSD (Euroclear / Clearstream) direct | No (re-routed via globals) | No (re-routed via globals) |
| GPIF custodian use | Yes (one of the resource pool) | Yes (one of the resource pool) |
| Listing | Non-listed | Non-listed |

### vs full-service trust banks

| Dimension | CBJ | Megabank full-service trust banks (MUFG Trust / SMTB / Mizuho Trust) |
|---|---|---|
| Custody / 投信受託 | Core function (utility-scale) | Run internally + often delegate processing to CBJ / MTBJ |
| Real-estate trust | No | Major business line (RE securitization, J-REIT) |
| 相続 / 遺言 / PB | No | Yes — significant wealth-management revenue |
| 不動産信託 + 信託受益権 (J-REIT) | No | Yes — full processing |
| Securities agency (株式事務代行) | No | Yes |
| Pension front-office (運用提案) | No | Yes |
| DC service window | Limited (admin only) | Front office + admin |

CBJ does the **processing** while its trust-bank shareholders do the **client relationship + front-office mandate**. This vertical split is intentional and is the reason the trust-bank shareholders have not absorbed CBJ back into their consolidated operations.

### vs global custodians

| Dimension | CBJ | Global custodians (BNY Mellon / State Street / JPM / Citi Japan) |
|---|---|---|
| Primary asset universe | Domestic Japan assets | Cross-border + foreign-investor JP sub-custody |
| ICSD connectivity | Indirect (via globals) | Direct |
| Voting administration | Yes (mechanical, ICJ-linked) | Yes (via Broadridge etc.) |
| Pricing power on JP custody | High (utility scale) | Medium (sub-custody premium) |
| Pricing power on foreign custody | Low (sub-rolled to globals) | High |
| Regulatory base | FSA only | FSA + home-country regulator (FRB / OCC / ECB / PRA) |
| G-SIB status | No | All four parents are G-SIBs |

## 4. Fee and Revenue Structure

CBJ does not publicly disclose detailed fee schedules. The public-domain reading is:

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Pension trust administration fee | AUC bps (very low at GPIF / large-DB scale) | Not disclosed at line-item level (CBJ publishes no detailed fee schedule) |
| 投信受託 admin fee | AUC bps — 0.01-0.05% / year of NAV typical | Disclosed per fund in 信託約款 |
| Securities custody fee | AUC bps per asset class + per-ticket settlement fees | Not publicly disclosed |
| Voting / CA admin | Typically bundled into custody fee | Not separately disclosed |
| Securities-lending agent fee | Revenue share with beneficial owner | Not separately disclosed |
| Cash-balance interest income | Low | Not separately disclosed |

### Why CBJ fee economics resemble MTBJ closely

Both run the same product set against similar mandate scales. Their fee pricing is anchored by:

2. **GPIF tender pressure** — GPIF runs periodic 資産管理機関 panels where CBJ and MTBJ both compete; both incumbent-priced and challenger-priced.
3. **Passive-fund AUM growth** — passive index funds have driven up CBJ-administered AUC while pushing down per-bp fees, producing volume-up / margin-down dynamics.

### Cross-bank fee-economy reading

For granular MTBJ + CBJ + megabank trust-arm + global-custodian fee comparison see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

| Aspect | CBJ | MTBJ |
|---|---|---|
| Pricing power vs asset managers | High (utility scale) | High (utility scale) |
| Pension trust admin fees trend | Stable to slightly compressing on large mandates | Same |
| Foreign-asset custody | Pass-through cost from globals | Pass-through cost from globals |
| Cost-side scale | High fixed-IT cost; per-mandate marginal cost very low | Same — both run utility economics |

### Regulatory stack

| Layer | Statute / regulator | CBJ implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | Capital adequacy + governance + IT-risk; CBJ runs a light credit book and consequently a light capital ratio relative to AUC |
| Trust-business supervision | 信託業法 + 金融庁 監督指針 (信託業 section) | Trust account separation, fiduciary duty, conflict-of-interest controls |
| Securities-law overlay | Financial Instruments and Exchange Act -- investment-trust trustee and custody operations | NAV calculation, custody standards, Investment Trusts Association compliance |
| Pension regulation | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | DB / DC administration, fiduciary reporting |
| Deposit insurance | 預金保険機構加盟 | Statutory membership; minor relevance given small deposit base |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | Custody-side AML applied at underlying client level |
| Stewardship / governance | Stewardship Code (voluntary) | Voting-admin transparency; CBJ executes per client instruction |
| Data / personal info | Act on the Protection of Personal Information and financial-sector guidelines | Pension member data, NISA data |

### Accounting treatment

| Item | Treatment |
|---|---|
| Trust assets (信託財産) | Off-balance-sheet at CBJ; on-balance at beneficial owner |
| Custody / admin fees | Recognized as fee income in P&L |
| Own-account deposits | On-balance-sheet — small |
| Settlement-account residuals | Short-duration; cash + due-from-banks |
| Goodwill / merger accounting (2020) | Recognized on JTSB + TCSB merger; specifics in shareholder consolidated disclosure |

### Merger-accounting note

The 2020-07-27 JTSB + TCSB merger involved system integration over multiple years; integration costs flowed through CBJ P&L and were absorbed by shareholder parents in their consolidated trust-bank operating segments. The granular cost recovery and IT-write-down profile is not publicly disclosed (CBJ is non-listed and reports only summary figures; merger goodwill specifics sit in shareholder-parent consolidated disclosure).

## 6. JASDEC / clearing infrastructure connection

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / corporate pensions / 投信 / insurers)  │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion + voting opinion)        │
│ — SMTB AM affiliates, Mizuho AM, Resona AM, etc.                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Custody Bank of Japan (trust account / nominee)                  │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodians│ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ for foreign sub- │ │ (electronic     │
│ 社債, CP, ││ cash equity)││ (JGB         ││ custody          │ │ proxy voting)   │
│ 投信)     ││             ││ settlement)  ││                  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### Direct JASDEC participation

CBJ is a direct participant in:

- 株式振替制度 (dematerialized listed shares)
- 一般債振替制度 (corporate bonds: 普通社債, 転換社債)
- 短期社債振替制度 (CP)
- 投資信託振替制度 (publicly offered 投信 units)

### JSCC + DVP

CBJ's cash-equity settlement runs through [[securities/japan-securities-clearing-corp|JSCC]] as the central counterparty, producing DVP-X1 / X2 / X3 quality settlement. JSCC also runs CCP services for repos and OTC derivatives — CBJ's exposure to these layers depends on individual client mandate scope.

### BoJ JGB book-entry

CBJ holds a direct account in the BoJ JGB book-entry system, supporting DVP JGB settlement for pension and 投信 mandates without intermediate sub-custody.

### Foreign-asset sub-custody chain

For non-JP assets in CBJ-administered mandates:

```
CBJ (record-name trust-account)
  → Global custodian (BNY / State Street / JPM / Citi)
    → Local sub-custodian in foreign market
      → Local CSD
```

## Related

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[JapanFG/custody-bank]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/dai-ichi-life]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Custody Bank of Japan: official site, about us, business explanation, corporate information page, English corporate page.
- Sumitomo Mitsui Trust Bank asset-management business page, ?Pursuit of Scale Merits? (CBJ AUC: total assets under custody approximately JPY 696tn / trust assets JPY 476tn, 2025-03-31) -- https://www.smtb.jp/business/instrument/management/scale
- Master Trust Bank of Japan FY2024 financial results (MTBJ assets under administration approximately JPY 770tn, 2025-03-31) -- https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- Wikipedia cross-reference: Custody Bank of Japan, JTSB, and TCSB historical entries; CBJ shareholder composition as of 2020-07-27: Sumitomo Mitsui Trust Group 33.3%, Mizuho FG 27.0%, Resona Bank 16.7%, Dai-ichi Life 8.0%, Asahi Life 5.0%, Meiji Yasuda Life 4.5%, Japan Post Insurance 3.5%, and Fukoku Life 2.0%. https://ja.wikipedia.org/wiki/?????????

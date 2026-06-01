---
source: banking/master-trust-bank-operating-model
source_hash: 166e15cd7499119f
lang: en
status: machine
fidelity: ok
title: "Master Trust Bank of Japan operating model"
translated_at: 2026-05-30T18:52:47.785Z
---

# Master Trust Bank of Japan operating model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with the entity anchor [[JapanFG/master-trust-bank|日本MasterTrust信託銀行 (MTBJ)]], the operating peer [[JapanFG/custody-bank|日本Custody銀行 (CBJ)]], the landscape summary [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]. Pair it with the settlement-rail entries [[securities/japan-securities-depository-center|JASDEC]] and [[securities/japan-securities-clearing-corp|JSCC]] for the infrastructure side, with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for the regulatory boundary, with the shareholder-side trust-bank pages [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] and [[JapanFG/nochu-trust-bank|Norinchukin Trust銀行]], and with [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] for the institutional context.

## TL;DR

The Master Trust Bank of Japan (MTBJ — 日本MasterTrust信託銀行) is a custody-only specialist trust bank licensed under the dual 銀行法 + 信託業法 route, owned by a four-way consortium of MUFG Trust (46.5%), Nippon Life (33.5%), Meiji Yasuda Life (10%), and a Norinchukin-affiliated trust bank (10%). Its operating model bundles three core functions — pension trust administration, securities-investment-trust administration, and securities custody — on top of a JASDEC + BoJ JGB direct-settlement core. MTBJ does not write loans, take deposits, or run a retail or PB business; it is an institutional back office. Its name appears at the top of nearly every listed-company shareholder register as 「日本MasterTrust信託銀行（信託口）」, but this is a nominee surface — the beneficial owners are the GPIF, corporate pensions, and large asset managers whose mandates it administers. With CBJ, MTBJ forms the two-anchor domestic custody infrastructure of Japan.

## 1. 機関位置

| Field | MTBJ |
|---|---|
| Legal name (JA) | Co., Ltd.日本MasterTrust信託銀行 |
| Legal name (EN) | The Master Trust Bank of Japan, Ltd. |
| Established | 2000-05 |
| HQ | 東京都港区浜松町 |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (4-way consortium JV) |
| Primary regulator | 金融庁 (FSA) — bank supervision + trust-business supervision |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no deposits, no PB, no real-estate trust) |
| Public AUC anchor | ¥823 trillion trust assets under custody (MTBJ official "Our Work" page summary, of Japan's ¥2,351 trillion financial assets) |
| Peer | [[JapanFG/custody-bank|Custody Bank of Japan (CBJ)]] |

### Shareholder structure (public disclosure)

| Shareholder | Stake | Reading |
|---|---|---|
| [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] (MUFG group) | 46.5% | Lead industrial shareholder; provides Mitsubishi-side mandate flow and trust-bank operating know-how |
| [[JapanFG/nippon-life|日本生命]] | 33.5% | Largest life-insurer shareholder; provides life-insurance separate-account custody plus corporate-pension mandate flow |
| [[JapanFG/meiji-yasuda|明治安田生命]] | 10.0% | Second life-insurer shareholder; rounds out the life-insurer-side mandate base |
| [[JapanFG/nochu-trust-bank|Norinchukin Trust銀行]] (Norinchukin group) | 10.0% | Cooperative-finance shareholder; provides JA Bank / 農林系 mandate flow |

### Why a custody-only trust bank exists

A custody-only trust bank under the 銀行法 + 信託業法 dual route can:

1. participate **directly** in JASDEC book-entry transfer, JSCC central-counterparty clearing, and BoJ JGB book-entry settlement — none of which is open to a pure 信託会社 under 信託業法 alone;
2. issue trust-account ("信託口") nominee names that satisfy the Japanese securities-law and tax-treatment expectations for institutional separate-account holdings;
3. avoid the capital and supervisory load of a full commercial bank because it carries no loan book and only minimal deposit-funded exposure (custody fees, settlement-account residuals, and 預金保険機構 participation).

### Business-line map

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **年金信託 (Pension trust administration)** | Trust contract for 厚生年金基金, 確定給付企業年金 (DB), and 確定拠出年金 (DC) — record-keeping, asset-owner reports, benefit-payment ops, member balances | GPIF, large corporate DB plans, DC plans (often through DC sponsor-side admins), 厚生年金基金 | Not the investment manager — investment discretion sits with [[JapanFG/mitsubishi-ufj-asset-management|asset managers]] and the asset owner's trustees |
| **投資信託受託 (Securities-investment-trust admin)** | Trust contract for 公募投信 and 私募投信 — fund accounting, NAV calculation, holdings register, distribution processing, audit support | [[JapanFG/mitsubishi-ufj-asset-management|MUFG asset management arm]], [[JapanFG/nomura-asset-management|Nomura AM]], [[JapanFG/sbi-asset-management|SBI AM]], other asset managers using MTBJ as 受託銀行 | Not the fund sponsor or the distributor; not the fund manager |
| **有価SecuritiesCustody (Securities custody)** | Safekeeping of equities, JGB, corporate bonds, foreign securities; book-entry registration; corporate-actions processing; dividend / interest receipt; tax reclaim ops | Pension plans, asset managers, life insurers, foreign global custodians needing a Japan sub-custodian | Not a proprietary investor; the 「信託口」 nominee label is a recordkeeping construct |
| **議決権行使指図 (Voting administration)** | Mechanical voting execution per asset-owner / manager instruction; ICJ electronic-voting platform connection; proxy-advisor (ISS / Glass Lewis) materials handling | Asset managers, pension plans, foreign investors using MTBJ as sub-custodian | Not a discretionary voter — MTBJ does not form its own voting opinion |
| **特定金外信託 (Specified-money-trust ops)** | Special-purpose investment trust structures (特金) for corporate treasury and financial-institution assets | Corporates, regional banks, insurers using 特金 as an investment vehicle | Not a discretionary asset manager |

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
| Sub-custody for foreign assets | Re-routing through global custodians ([[JapanFG/bny-mellon-japan|BNY Mellon]] / [[JapanFG/state-street-japan|State Street]] / [[JapanFG/jpmorgan-japan|JP Morgan]]) for non-JP assets in mandate portfolios |
| Securities-lending support | Lending program administration when client opts in; collateral posting; recall management |
| Member / participant ops | Pension member balance reporting (DB / DC), benefit payment ops, fund-of-funds look-through |

### The 「信託口」 nominee surface

Approximately every TOPIX-100 issuer disclosure shows 「日本MasterTrust信託銀行（信託口）」 as a top-3 shareholder. The economic reading is:

- The legal record name is MTBJ.
- The beneficial owners are GPIF, corporate pensions, investment-trust funds, insurance separate accounts, and foreign-investor sub-custody clients of MTBJ.
- Voting instruction comes from the upstream asset manager or asset owner — not MTBJ.

This is why MTBJ's apparent "concentration" in the public shareholder register cannot be read as a single voting bloc. The same body of holdings is fragmented across hundreds of underlying mandates with different voting policies.

### Three competitive layers

| Layer | Competitor | Overlap with MTBJ | Differentiation |
|---|---|---|---|
| Domestic custody-only specialists | [[JapanFG/custody-bank|Custody Bank of Japan (CBJ)]] | Near-identical product set — pension trust, 投信受託, securities custody | Different shareholder camp (SMTB + Mizuho + 第一生命) and different mandate base; both anchor the two-strong domestic infrastructure |
| Full-service trust-bank arms of megabanks | [[JapanFG/mitsubishi-ufj-trust-bank|MUFG Trust]], [[JapanFG/sumitomo-mitsui-trust|SMTB]], [[JapanFG/mizuho-trust-bank|Mizuho Trust]] | Full-service trust banks also run custody and pension trust internally — but typically offload back-office processing to MTBJ / CBJ for the asset-administration leg | Full-service trust banks add 不動産信託, 相続, PB, securities agency, 議決権電子化 service; they win the *front office* mandate while MTBJ / CBJ run the *processing* |
| Global custodians (foreign sub-custody chain) | [[JapanFG/bny-mellon-japan|BNY Mellon Japan]], [[JapanFG/state-street-japan|State Street Japan]], [[JapanFG/jpmorgan-japan|JP Morgan Japan]] | Cross-border custody, foreign-investor Japan sub-custody, foreign-asset processing for Japan mandates | Globals dominate cross-border; MTBJ dominates domestic-Japanese assets; the chains interconnect for GPIF and 投信 海外資産 |

### Cross-camp comparison table

| Dimension | MTBJ | CBJ | Megabank trust-bank arm | Global custodian (JP) |
|---|---|---|---|---|
| Loans / deposits | None | None | Yes (full-service) | Yes (branch + Japan trust sub) |
| Real-estate trust | No | No | Yes (large) | No |
| Inheritance / PB | No | No | Yes | Partial (UHNW only) |
| Pension trust admin | Yes (core) | Yes (core) | Yes (front-office mandate) | Partial (foreign-asset side) |
| 投信 受託 | Yes (core) | Yes (core) | Limited (often outsourced to MTBJ / CBJ) | Limited |
| Securities-only custody | Yes (core) | Yes (core) | Yes | Yes (Japan sub-custody for foreign) |
| ICSD (Euroclear / Clearstream) direct | Re-routed via globals | Re-routed via globals | Re-routed via globals | Direct |
| Public shareholder-register nominee | 「日本MasterTrust信託銀行（信託口）」 | 「日本Custody銀行（信託口）」 | Less prominent — full-service brand | Foreign-shareholder name in 外国法人 row |

## 4. Fee and Revenue Structure

MTBJ does not publicly disclose granular fee schedules. The public-domain reading is:

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Pension trust administration fee | AUC bps (typically very low for large GPIF-scale mandates) | Not disclosed at line-item level; MTBJ being non-listed, aggregate fee revenue is only inferable from group / shareholder consolidated disclosure |
| Securities custody fee | AUC bps per asset class; settlement fees per ticket; cash-management spread | Not disclosed publicly |
| Voting administration / corporate-action ops | Typically bundled into custody fee | Not separately disclosed |
| Securities-lending admin / agent-lender fee | Revenue share of lending income with beneficial owner | Not separately disclosed |
| Cash-balance interest income | Low — short-dated funding placements | Not separately disclosed |

### Why fees are hard to read from outside

1. MTBJ is non-listed and publishes only minimum statutory disclosures; granular fee disclosure is at the shareholder consolidated level.
2. 投信受託 fees are observable per fund but vary by fund-family, asset class, and contract date; cross-fund aggregation requires manual scraping of each 信託約款.
3. Pension-trust contracts are individually negotiated, including for GPIF; no per-mandate fee is published, so only summary aggregate AUC × average bps inferences are possible from public data.
4. Securities-custody fees for institutional clients are mandate-specific and not on standard public tariffs.

### Cross-bank fee-economy reading

| Aspect | MTBJ / CBJ (domestic specialists) | Megabank trust-bank arm | Global custodian (Japan) |
|---|---|---|---|
| Pricing power on JP equity custody | High (scale utility) | Medium (uses MTBJ / CBJ as back-end) | Medium (foreign-investor sub-custody premium) |
| Pricing power on JP-投信 受託 | High (utility scale, low per-bp fees) | Low (rarely a 受託会社 directly for major funds) | Low (rarely a JP 投信 受託会社) |
| Pricing power on foreign-asset custody | Low (re-routes through globals) | Low | High (global ICSD + sub-custody network) |
| Pricing power on pension trust admin | High (esp. GPIF-scale mandates) | Medium-high (full-service competing) | Medium (foreign-pension-side mandates) |

For a granular cross-bank fee comparison see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

### Regulatory stack

| Layer | Statute / regulator | MTBJ implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | Capital adequacy, liquidity, governance, IT-risk supervision; MTBJ runs a low-risk balance sheet so capital is light |
| Trust-business supervision | 信託業法 + 金融庁 監督指針 (信託業 section) | Trust account separation, fiduciary-duty rules, conflict-of-interest controls, 受託者責任 standards |
| Securities-law overlay | 金融商品取引法 — 投資信託受託会社 / Custody ops | NAV calc accountability, custody standards, 投信協会 compliance |
| Pension regulation | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | Pension trust admin ops, fiduciary reporting, member-balance reporting |
| Deposit insurance | 預金保険機構加盟 | Statutory membership though deposits are minor |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | Custody-side AML applied to underlying client mandates |
| Stewardship / corporate-governance | Stewardship Code (voluntary code) | Voting-admin transparency expectations |
| Recordkeeping / data | Personal Information Protection Act and financial-sector guidelines | Pension member data, NISA-related account data |

### Accounting treatment

| Item | Treatment |
|---|---|
| Trust-account assets ("信託財産") | **Off-balance-sheet** at MTBJ; on-balance-sheet for the beneficial owner |
| Custody fees | Recognized as fee income in P&L |
| 預金 (own-account deposits) | On-balance-sheet — but small relative to trust assets |
| Settlement-account residual balances | Short-duration; included in cash + due-from-banks |
| Capital | Statutory minimum 信託兼営銀行 capital plus internal buffer |

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
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/nochu-trust-bank]]
- [[JapanFG/nippon-life]]
- [[JapanFG/meiji-yasuda]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Master Trust Bank of Japan: official site, company overview, business / asset-management page ("Our Work" — states ¥823 trillion trust assets under custody of Japan's ¥2,351 trillion financial assets: https://www.mastertrust.co.jp/about/overview.html), company-information page (capital ¥10bn; shareholders MUFG Trust 46.5% / Nippon Life 33.5% / Meiji Yasuda 10.0% / Norinchukin Trust 10.0%; business commenced 2000-05-09: https://www.mastertrust.co.jp/company/information.html).
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- GPIF: public annual report and asset-administrator panel disclosures.

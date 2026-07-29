---
source: banking/custody-bank-operating-model
source_hash: bf77bc32d6e2c0db
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "Custody Bank of Japan operating model"
translated_at: 2026-07-29T03:30:48.098Z
---

# Custody Bank of Japan operating model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with the entity anchor [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]], the operating peer [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and entity [[trust-banks/master-trust-bank|MTBJ]], the landscape summary [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], and the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]. Pair it with [[securities/japan-securities-depository-center|JASDEC]] and [[securities/japan-securities-clearing-corp|JSCC]] for the settlement-infrastructure side, with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for the regulatory tier, with the shareholder-side trust-bank pages [[trust-banks/sumitomo-mitsui-trust|SMTB]] and [[trust-banks/mizuho-trust-bank|Mizuho Trust]], and with [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] for the institutional context.

## TL;DR

Custody Bank of Japan (CBJ — 日本カストディ銀行) is an asset-administration bank created in July 2020 through the merger of JTC Holdings, Japan Trustee Services Bank, and Trust & Custody Services Bank. CBJ's current company profile lists Sumitomo Mitsui Trust Group (33.3%), Mizuho FG (27.0%), Resona Bank (16.7%), Dai-ichi Life (8.0%), and four other life insurers as shareholders; its recruiting disclosure describes more than JPY 710tn of assets under custody as of 2025-09. The FSA bank workbook lists CBJ in the trust-bank category, while CBJ's own business pages describe custody, settlement, accounting, reporting, securities lending, and institutional outsourcing. These sources support CBJ's scale and role, but do not by themselves establish that CBJ plus MTBJ hold a quantified majority of all Japanese institutional-custody volume, so this page does not present that comparison as a measured fact. ^[Sources: https://www.custody.jp/corporate/information/index.html; https://www.custody.jp/recruit/aboutus/about.html; https://www.custody.jp/recruit/aboutus/business.html; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

## 1. 機関位置

| Field | CBJ |
|---|---|
| Legal name (JA) | 株式会社日本カストディ銀行 |
| Legal name (EN) | Custody Bank of Japan, Ltd. |
| Established | 2020-07-27 (JTSB + TCSB merger) |
| HQ | 東京都中央区晴海 1-8-12 晴海アイランドトリトンスクエア オフィスタワー Z |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (multi-FG joint venture) |
| Primary regulator | 金融庁 (FSA) |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no PB, no real-estate trust, no inheritance trust) |
| Public AUC anchor | Approximately ¥696 trillion total assets under custody (受託信託財産 + 常任代理契約等に基づく預り資産; of which 信託財産 ¥476tn) as of 2025-03-31 |
| Peer | [[trust-banks/master-trust-bank|Master Trust Bank of Japan (MTBJ)]] |

Sources: ^[CBJ company information, https://www.custody.jp/corporate/information/index.html; CBJ 2025 disclosure, https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf; FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### Shareholder structure (public disclosure, as of 2020-07-27)

| Shareholder | Stake | Reading |
|---|---|---|
| [[trust-banks/sumitomo-mitsui-trust|三井住友トラストグループ (SMTH)]] | 33.3% | Shareholder listed by CBJ |
| [[megabanks/mizuho-fg|みずほフィナンシャルグループ (Mizuho FG)]] | 27.0% | Shareholder listed by CBJ |
| りそな銀行 (Resona Bank) | 16.7% | Shareholder listed by CBJ |
| [[life-insurers/dai-ichi-life|第一生命保険]] | 8.0% | Shareholder listed by CBJ |
| 朝日生命保険 | 5.0% | Shareholder listed by CBJ |
| 明治安田生命保険 | 4.5% | Life-insurer shareholder |
| かんぽ生命保険 | 3.5% | Life-insurer shareholder |
| 富国生命保険 | 2.0% | Life-insurer shareholder |

Sources: ^[CBJ company information, https://www.custody.jp/corporate/information/index.html. Shareholding does not by itself prove the source or allocation of customer mandates.]

### Why two specialist custodians, not one

The official merger materials establish the 2020 combination that created CBJ. The reviewed public sources do not state why CBJ and MTBJ remain separate, so shareholder politics, risk concentration, and future consolidation should not be presented as company-confirmed explanations.

### Lineage diagram

```
SMTB / 第一生命 lineage
  日本トラスティ・サービス信託銀行 (JTSB) — 2000 設立
    ├── 旧中央三井信託 → SMTB
    ├── 旧住友信託 → SMTB
    └── 第一生命

Mizuho / Resona / 生保 lineage
  資産管理サービス信託銀行 (TCSB) — 2004 設立
    ├── みずほ信託 (Mizuho Trust)
    ├── りそな銀行 (旧 大和 / あさひ信託 系統)
    ├── Asahi Life, Meiji Yasuda, Japan Post Insurance, Fukoku Life
    └── 旧第一勧業富士 / 安田信託 系統

  ↓ 2020-07-27 merger

  日本カストディ銀行 (CBJ) — 株主 (2020-07-27 現在)
    ├── 三井住友トラストグループ (SMTH) 33.3%
    ├── みずほ FG (Mizuho FG) 27.0%
    ├── りそな銀行 (Resona) 16.7%
    ├── 第一生命 8.0%
    └── 朝日生命 5.0% / 明治安田 4.5% / かんぽ生命 3.5% / 富国生命 2.0%
```

### Business-line map

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **信託カストディ (Securities custody)** | Safekeeping of equities, JGB, corporate bonds, foreign securities; book-entry registration; corporate-actions processing; dividend / interest receipt; tax reclaim ops | Pension plans, asset managers, life insurers, foreign global custodians needing a Japan sub-custodian | Not a proprietary investor; 「信託口」 nominee label is a recordkeeping construct |
| **年金信託 (Pension trust administration)** | Trust contract administration, recordkeeping, reporting, and benefit-payment operations | Pension plans and their appointed service providers | Not the investment manager |
| **投信受託 (Securities-investment-trust admin)** | Fund accounting, NAV calculation, holdings records, and distribution processing under the trust contract | Asset managers that appoint CBJ as trustee | Not the fund manager or distributor |
| **特定金銭信託 (特金) ops** | 特金 vehicles for institutional / corporate investors | Insurers, corporates, regional banks | Not a discretionary asset manager |
| **資産管理サービス (Master custody)** | Institutional master-custody, multi-mandate consolidation, investment-instruction processing | Large multi-mandate asset owners | Not the sponsor |

Sources: ^[CBJ business overview, https://www.custody.jp/recruit/aboutus/business.html. The page describes service categories; it does not publish a customer-by-customer mandate list.]

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
| Sub-custody for foreign assets | Re-routing via [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]] / [[foreign-financial-institutions/citigroup-japan|Citi]] for non-JP assets |
| Member / participant ops | Pension member balance reporting (DB / DC), benefit-payment ops |
| Securities-lending support | Lending program admin (when client opts in); collateral posting; recall management |

### The 「信託口」 nominee surface — CBJ specific

CBJ's nominee name 「日本カストディ銀行（信託口）」 appears in the top-shareholder rows of substantially every TOPIX-100 issuer, often as 2nd or 3rd after MTBJ's 「信託口」. The pattern is:

| Reading | Interpretation |
|---|---|
| Legal record name | CBJ |
| Beneficial owners | Not identifiable from the nominee row alone; the holding is administered for underlying trust beneficiaries or customers |
| Voting instruction source | Determined by the applicable trust / investment-management arrangement; the shareholder register alone does not identify it |
| Underlying exposure type | Not identifiable from the nominee row alone |

Sources: ^[CBJ business overview, https://www.custody.jp/recruit/aboutus/business.html; issuer shareholder registers identify the nominee but generally do not disclose the underlying mandate.]

### vs MTBJ — operating-detail comparison

| Field | CBJ | MTBJ |
|---|---|---|
| Established | 2020-07-27 (JTSB+TCSB merger) | 2000-05 (greenfield) |
| Shareholder camp | SMTH 33.3% + Mizuho FG 27.0% + Resona 16.7% + 第一生命 8.0% + 朝日 / 明治安田 / かんぽ / 富国 生保 | MUFG Trust + Nippon Life + Meiji Yasuda + Norinchukin |
| Lead shareholder stake | 三井住友トラストグループ (SMTH) 33.3% | MUFG Trust 46.5% |
| Public AUC anchor | ~¥696tn (2025-03-31; total assets under custody) | ~¥770tn (2025-03-31; 管理資産残高) |
| HQ location | 東京都中央区晴海 | 東京都港区浜松町 |
| Legal-structure license | 銀行法 + 信託業法 (custody-only) | 銀行法 + 信託業法 (custody-only) |
| Published business focus | Asset administration and custody | Asset administration and custody |
| Retail / PB / real-estate services | Not presented as a business line on the reviewed official overview | Not presented as a business line on the reviewed official overview |
| Infrastructure participation | Verify in the current participant lists of JASDEC, JSCC, and BoJ | Verify in the current participant lists of JASDEC, JSCC, and BoJ |
| Named customer mandates | Not comprehensively disclosed | Not comprehensively disclosed |
| Listing | Non-listed | Non-listed |

Sources: ^[CBJ company information and disclosure, https://www.custody.jp/corporate/information/index.html; MTBJ company information and FY2024 results, https://www.mastertrust.co.jp/about/overview.html, https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf.]

### vs full-service trust banks

| Dimension | CBJ | Megabank full-service trust banks (MUFG Trust / SMTB / Mizuho Trust) |
|---|---|---|
| Custody / 投信受託 | Officially described core service | Full-service banks publish their own trust and custody services; delegation must be evidenced mandate by mandate |
| Real-estate trust | No | Major business line (RE securitization, J-REIT) |
| 相続 / 遺言 / PB | No | Yes — significant wealth-management revenue |
| 不動産信託 + 信託受益権 (J-REIT) | No | Yes — full processing |
| Securities agency (株式事務代行) | No | Yes |
| Pension front-office (運用提案) | No | Yes |
| DC service window | Confirm from CBJ's current service description | Confirm from each bank's current service description |

Sources: ^[CBJ business overview, https://www.custody.jp/recruit/aboutus/business.html; Trust Companies Association of Japan member and service information, https://www.shintaku-kyokai.or.jp/trust/trustbanks/.]

CBJ's public materials describe asset-administration processing. They do not establish a universal front-office / back-office allocation for every shareholder customer or explain the shareholders' consolidation decisions.

### vs global custodians

| Dimension | CBJ | Global custodians (BNY Mellon / State Street / JPM / Citi Japan) |
|---|---|---|
| Public business description | Japan-based asset administration and custody | Parent groups publish global securities-services networks |
| Japan-specific AUC / revenue | Entity disclosure where published | Often not separately disclosed from parent totals |
| ICSD / market connectivity | Verify through current entity and infrastructure disclosures | Verify through current entity and infrastructure disclosures |
| Mandate pricing | Not published as a general tariff | Not published as a Japan-unit general tariff |
| Regulatory base | Japanese entity is subject to applicable Japanese supervision | Japanese entity plus applicable home-country group supervision |

Sources: ^[CBJ company and business pages; FSA registers; official BNY, State Street, JPMorgan, and Citi securities-services disclosures listed in this entry.]

## 4. 手数料・収益構造

CBJ does not publicly disclose detailed fee schedules. The public-domain reading is:

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Pension trust administration | Contract-specific; no entity-wide public rate established | Not disclosed at line-item level |
| 投信受託 administration | Fund-specific remuneration can be checked in each fund's statutory documents | Observable fund by fund, not as a CBJ-wide rate |
| Securities custody | Contract-specific | No general public tariff identified |
| Voting / corporate actions | Contract treatment not established by the reviewed public material | Not separately disclosed |
| Securities lending | Contract treatment not established by the reviewed public material | Not separately disclosed |
| Own-account interest income | Reported only through the bank's financial statements | No mandate-level attribution |

Sources: ^[CBJ disclosure publications, https://www.custody.jp/data/; individual fund prospectuses and trust deeds for fund-specific trustee remuneration.]

### Why CBJ fee economics resemble MTBJ closely

Both run the same product set against similar mandate scales. Their fee pricing is anchored by:

2. **GPIF tender pressure** — GPIF runs periodic 資産管理機関 panels where CBJ and MTBJ both compete; both incumbent-priced and challenger-priced.
3. **Passive-fund AUM growth** — passive index funds have driven up CBJ-administered AUC while pushing down per-bp fees, producing volume-up / margin-down dynamics.

### Cross-bank fee-economy reading

For granular MTBJ + CBJ + megabank trust-arm + global-custodian fee comparison see [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]].

| Aspect | CBJ | MTBJ |
|---|---|---|
| Public mandate tariff | Not disclosed | Not disclosed |
| Fund-specific trustee remuneration | Check each fund's statutory documents | Check each fund's statutory documents |
| Entity financial result | CBJ statutory disclosure | MTBJ statutory disclosure |
| Valid public comparison | Business scope, disclosed AUC definition, and reporting perimeter | Business scope, disclosed AUC definition, and reporting perimeter |

Sources: ^[CBJ and MTBJ official financial disclosures. Public materials do not support an entity-level pricing-power ranking.]

### Regulatory stack

| Layer | Statute / regulator | CBJ implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | Capital adequacy + governance + IT-risk; CBJ runs a light credit book and consequently a light capital ratio relative to AUC |
| Trust-business supervision | 信託業法 + 金融庁 監督指針 (信託業 section) | Trust account separation, fiduciary duty, conflict-of-interest controls |
| Securities-law overlay | 金融商品取引法 — 投信受託会社 / カストディ ops | NAV calc, custody standards, 投信協会 compliance |
| Pension regulation | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | DB / DC administration, fiduciary reporting |
| Deposit insurance | 預金保険機構加盟 | Statutory membership; minor relevance given small deposit base |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | Custody-side AML applied at underlying client level |
| Stewardship / governance | スチュワードシップ・コード (voluntary) | Voting-admin transparency; CBJ executes per client instruction |
| Data / personal info | 個人情報保護法, 金融分野ガイドライン | Pension member data, NISA data |

Sources: ^[FSA trust-business financial-institution list, https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf; FSA bank supervisory guidance, https://www.fsa.go.jp/common/law/guide/city/.]

### Accounting treatment

| Item | Treatment |
|---|---|
| Trust assets (信託財産) | Off-balance-sheet at CBJ; on-balance at beneficial owner |
| Custody / admin fees | Recognized as fee income in P&L |
| Own-account deposits | On-balance-sheet — small |
| Settlement-account residuals | Short-duration; cash + due-from-banks |
| Goodwill / merger accounting (2020) | Recognized on JTSB + TCSB merger; specifics in shareholder consolidated disclosure |

Sources: ^[CBJ 2020 and 2021 disclosure publications, https://www.custody.jp/data/disclosure/pdf/_disclosure2020.pdf, https://www.custody.jp/data/disclosure/pdf/_disclosure202101.pdf.]

### Merger-accounting note

CBJ's 2020 annual and interim disclosures confirm the three-company merger and publish aggregate balance-sheet and income information after launch. The reviewed public CBJ disclosures do not provide a standalone schedule attributing multi-year system-integration costs, IT write-downs, or goodwill recovery to individual shareholder-parent segments. Those allocations should therefore be treated as undisclosed rather than inferred from the merger itself. ^[Sources: https://www.custody.jp/data/disclosure/pdf/_disclosure2020.pdf; https://www.custody.jp/data/disclosure/pdf/_disclosure202101.pdf.]

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
- [[trust-banks/custody-bank]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[life-insurers/dai-ichi-life]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Custody Bank of Japan: official site, about us, business explanation, corporate information page, English corporate page.
- 三井住友信託銀行「スケールメリットの追求」資産管理業務ページ（CBJ AUC: 総預かり資産 約696兆円 / 信託財産 476兆円、2025-03-31）— https://www.smtb.jp/business/instrument/management/scale
- 日本マスタートラスト信託銀行 2024 年度決算（MTBJ 管理資産残高 約770兆円、2025-03-31）— https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.

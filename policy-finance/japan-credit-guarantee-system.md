---
title: "Japan credit guarantee system"
aliases:
  - "Japan credit guarantee system"
  - "Credit Guarantee Corporation system"
  - "信用保証協会制度"
  - "信用保証制度"
  - "信用補完制度"
  - "信保制度"
domain: "policy-finance"
created: 2026-05-21
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [policy-finance, credit-guarantee, sme-finance, public-credit, jfc, zerozero-loan, japan]
status: active
sources:
  - "https://www.zenshinhoren.or.jp/guarantee-system/"
  - "https://www.zenshinhoren.or.jp/guarantee-system/hokan/"
  - "https://www.zenshinhoren.or.jp/guarantee-system/riyojoken/"
  - "https://www.chusho.meti.go.jp/kinyu/shikinguri/index.html"
  - "https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_1gou.html"
  - "https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_2gou.html"
  - "https://www.jfc.go.jp/n/finance/sme/index.html"
---

# Japan credit guarantee system

## Wiki route

This entry sits under [[policy-finance/INDEX|policy-finance index]] as the SME-finance mechanism page. Read it against [[policy-finance/national-federation-credit-guarantee-corporations|Japan Federation of Credit Guarantee Corporations (JFG)]] for the coordinating-body view, [[policy-finance/japan-policy-finance-system|Japan policy finance system]] for the broader perimeter, and the sector-specific counterparts [[policy-finance/agriculture-credit-guarantee-system|agriculture]] / [[policy-finance/fisheries-credit-guarantee-system|fisheries]]. Local examples include [[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]], [[policy-finance/tokyo-credit-guarantee-corp|Tokyo CGC]], [[policy-finance/osaka-credit-guarantee-corp|Osaka CGC]], [[policy-finance/aichi-credit-guarantee-corp|Aichi CGC]], and [[policy-finance/hyogo-credit-guarantee-corp|Hyogo CGC]].

## TL;DR

Japan's credit guarantee system (信用保証制度) is the public-credit infrastructure that supports SME and small-business funding in Japan. It is a layered system: (1) 51 prefectural / city-level **信用保証協会** (Credit Guarantee Corporations, CGCs) guarantee eligible SME borrowing from financial institutions; (2) the **全国信用保証協会連合会** (JFG) coordinates the 51 CGCs and pools the responsibility-sharing burdens; (3) the **信用保険** (credit insurance) layer is operated by [[financial-regulators/jfc|Japan Finance Corporation (JFC)]], which reinsures CGC guarantees so that final residual loss falls on the public-credit infrastructure rather than collapsing the CGC layer. Together this is the **信用補完制度** (credit-supplementation system). It is not a single lender; it is a public-credit architecture. The 2020–2022 ZeroZero loan (実質無利子・無担保融資) special program ran through this system and continues to unwind into 2024–2026 in subrogation cycles.

## 1. System architecture (the 信用補完制度 stack)

| Layer | Role | FinWiki route |
|---|---|---|
| SME / small-business borrower | Applies for business funding through a financial institution and guarantee route. | System route here |
| Financial institution (lender) | Extends the loan and shares responsibility under the applicable scheme. | [[banking/regional-bank-consolidation-pattern]] / shinkin / credit-cooperative pages as relevant |
| Local credit guarantee corporation (51) | Guarantees eligible SME obligations; handles subrogation / recovery. | This system + local CGC pages where strategic (e.g., [[policy-finance/hokkaido-credit-guarantee-corp]]) |
| 全国信用保証協会連合会 (JFG) | Coordinates the 51 CGCs; administers responsibility-sharing system financial flows. | [[policy-finance/national-federation-credit-guarantee-corporations]] |
| 信用保険 (credit insurance) — JFC | Reinsures CGC guarantees; absorbs residual loss after CGC subrogation. | [[financial-regulators/jfc]] |
| METI / SME Agency (中小企業庁) | Policy supervisor; sets program design, eligibility, crisis-mode authorization. | [[policy-finance/INDEX]] |
| 都道府県 / 市町村 | Local government — co-funds local programs, designates local-emergency events, provides subsidies. | Local government routes |

The system is therefore a **vertical public-credit pipeline**: borrower → lender → local CGC (first loss) → JFG coordination → JFC credit insurance (reinsurance) → METI policy backstop.

## 2. 機関概要 — local Credit Guarantee Corporations

| 項目 | 内容 |
|---|---|
| 法令 | 信用保証協会法 (1953) |
| 法的形態 | 特別法上の認可法人 (special-law authorized entities; public-credit institution) |
| 数 | 51 (47都道府県 + 4市 — 横浜市・川崎市・名古屋市・岐阜市) |
| 所管 | 経済産業省 (METI) / 中小企業庁 (SME Agency) / 都道府県 |
| 共通 ANCHOR | 全国信用保証協会連合会 (JFG) |
| 再保険 | JFC 信用保険業務 |

## 3. 主要保証商品 (system-level menu)

- **一般保証** — standard SME bank-loan guarantee under the **責任共有制度** (responsibility-sharing system; typically 80% guarantee / 20% lender retention for ordinary programs).
- **マル経保証** — small-business management improvement loan guarantee (商工会・商工会議所推薦案件).
- **創業関連保証** — startup / new-business guarantee.
- **事業承継特別保証** — business-succession guarantee.
- **経営革新等支援保証** — management-innovation / business-transformation guarantee.
- **借換保証** — refinancing / consolidation guarantee.
- **流動資産担保融資保証 (ABL)** — accounts-receivable / inventory-collateralized guarantee.
- **セーフティネット保証 (1号〜8号)** — industry-distress designated-event guarantees with enhanced terms. (See §5.)
- **危機関連保証** — national-emergency framework; up to 100% guarantee in declared crisis.
- **災害関係保証** — disaster-recovery guarantee.
- **新型コロナウイルス感染症対応 ZeroZero 融資** — COVID-era 実質無利子・無担保 special guarantee (2020-05 ramp; closed to new origination 2021-03; servicing / unwind ongoing through 2026+). (See §6.)

## 4. Guarantee ratio mechanics (責任共有制度)

The **責任共有制度** (responsibility-sharing system) — introduced 2007-10 — leaves a defined share of risk with the lending financial institution rather than 100% guarantee:

- **Standard (一般保証, 通常)**: CGC guarantees **80%** of the loan; lender retains **20%** residual risk (or pari-passu loss-sharing variant). This is the post-2007 default.
- **Full guarantee (100%) exceptions**: certain policy programs (セーフティネット 1号・2号・3号, 危機関連保証, 創業 with conditions, マル経 with conditions, ZeroZero in crisis design) retain 100% guarantee with no lender retention.
- **Pari-passu loss-sharing variant**: under the responsibility-sharing system, lenders can choose either (a) 80% guarantee structure or (b) loss-sharing structure where CGC and lender share losses pari-passu under a defined formula.

The 2007 introduction of 責任共有 was a deliberate policy shift to restore lender screening discipline after concerns about moral hazard in the pre-2007 100%-guarantee regime.

## 5. Safety-Net Guarantee programs (セーフティネット保証)

The **セーフティネット保証** framework has 8 numbered designations, each covering a different distress scenario, and provides enhanced terms (often 100% guarantee + separate quota outside the borrower's normal guarantee cap):

- **1号** — large-enterprise restructuring impact (deemed event from METI based on a large-firm collapse / restructuring affecting downstream SMEs).
- **2号** — large-enterprise operational shock (e.g., factory closure with supply-chain impact).
- **3号** — bank failure / financial-institution liquidation impact on borrower SMEs.
- **4号** — natural disaster / wide-area emergency (frequently activated for typhoons, earthquakes, floods).
- **5号** — industry-wide structural distress; specific industries designated quarterly by METI based on macro / financial conditions. (Heavily used in inflation / pandemic / energy-shock periods.)
- **6号** — failure of a financial institution (specific scope from 3号).
- **7号** — large-enterprise restructuring with cooperative-finance impact.
- **8号** — RCC (Resolution and Collection Corporation) demand impact.

Note **危機関連保証** (separate from セーフティネット) is the broader national-emergency framework with 100% guarantee, activated only on rare nationwide-crisis designation (COVID-19, 2008 GFC equivalent thresholds, etc.).

## 6. ZeroZero loan unwind status (2020 → 2026)

The **ZeroZero loan** (実質無利子・無担保融資) program was the central crisis-finance response to COVID-19:

| Phase | Period | Status |
|---|---|---|
| Origination ramp | 2020-03 → 2020-07 | METI launches private-sector ZeroZero via the credit guarantee system in 2020-05; rapid uptake reaching trillions of yen in months. JFC operates a parallel ZeroZero program directly. |
| Sustained origination | 2020-08 → 2021-03 | Continued large-scale guarantee origination via 51 CGCs nationwide. |
| Origination close | 2021-03 → 2022 | Private-sector ZeroZero closed to new applications (with limited extensions for narrow categories). JFC ZeroZero closed similarly through 2022. |
| Grace period | 2020 origination + 3y grace | Borrowers typically had a principal-grace period (commonly up to 5 years for principal, with interest subsidy during initial period). The bulk of 2020-vintage loans entered repayment-start through 2023–2024. |
| Subrogation wave | 2023–2026 | As repayment-start triggers, subrogation (代位弁済) by CGCs ramps. Multiple business-trade-press reports show a clear uptick in 代位弁済 volume nationwide from late-2023 onward. |
| Post-COVID exit framework | 2022–2025 | METI / SME Agency coordinated with JFG for unified guidance on workout / refinancing of ZeroZero borrowers (借換保証 / 経営改善 product offers; "事業者ごとの粘り強い支援" framing). |
| Continued tail | 2026+ | Subrogation tail extends as remaining 2020-vintage loans complete repayment; bankruptcy statistics show ZeroZero-related bankruptcies as a tracked sub-category through 2024–2026. |

The ZeroZero unwind is the **defining recent stress event** for the credit guarantee system and is visible in CGC subrogation statistics nationwide. Local-level coverage of the unwind appears in [[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]] and other local pages where strategic.

## 7. Funding source

Each local CGC is capitalized through a mix of:

- **National (国) contribution** — METI / SME Agency capital and subsidy.
- **Prefectural / city (都道府県・市) contribution** — local government capital; reflects local SME-policy priority.
- **Lender contribution (金融機関拠出)** — partner banks / shinkin / credit cooperatives contribute capital to their local CGC.
- **Guarantee fee income (保証料)** — annual rate on guaranteed principal, typically in low single-digit-percent range (with policy-program subsidies).
- **Federation pooled fund** — JFG-administered reserves backing system-level coordination.
- **JFC credit insurance** — reinsurance reimbursement on subrogation events through the [[financial-regulators/jfc|JFC 信用保険業務]] account.

The **public-credit risk-bearing waterfall** is: borrower recovery → CGC reserves → JFC reinsurance → national fiscal backstop.

## 8. Default / subrogation flow

1. Borrower defaults on guaranteed loan.
2. Lender claims under the guarantee; CGC pays **代位弁済 (subrogation)** to the lender for the guaranteed portion (typically 80% under 責任共有; 100% under crisis schemes).
3. CGC pursues **求償 (recovery)** against the borrower / collateral / personal guarantor.
4. CGC files insurance claim with JFC under the credit-insurance contract; JFC pays insurance proceeds to the CGC.
5. Residual loss (after recovery + JFC insurance) is absorbed by CGC reserves; if reserve depletion threatens, federation / national capital injection backstops.

Recovery rates vary by region, sector, and collateral type — urban CGCs (Tokyo, Osaka) typically have higher recovery rates than rural CGCs (Hokkaido, Tōhoku, Kyūshū rural) because of thicker secondary markets for commercial real estate and equipment.

## 9. Year evolution

| Year | Event |
|---|---|
| 1937 | 東京信用保証協会 — first credit guarantee corporation established. |
| 1953 | 信用保証協会法 enacted; nationwide CGC framework. |
| 1958 | 中小企業信用保険公庫 established (later integrated into JFC). |
| 2007-10 | 責任共有制度 introduced — moved from 100% guarantee to 80% / 20% lender retention as default. |
| 2008–2009 | GFC emergency response — セーフティネット 5号 widely activated; 緊急保証 program (近未来 100% framework). |
| 2011 | Tōhoku earthquake — 災害関係保証 + 4号 widely activated. |
| 2020-05 | ZeroZero (実質無利子・無担保) private-sector program launched through CGC system. |
| 2021-03 | ZeroZero private-sector origination closed (with limited extensions). |
| 2023+ | ZeroZero subrogation wave ramps as 2020-vintage grace periods end. |
| 2024–2025 | Workout / 借換 product mix expansion; "粘り強い支援" framing. |
| 2025 | Continued unwind; bankruptcy statistics show ZeroZero-related sub-category tail. |

## 10. Boundary cases

- **System vs federation** — this page explains the mechanism; [[policy-finance/national-federation-credit-guarantee-corporations]] explains the national coordinating body.
- **Guarantee vs loan** — the CGC guarantees credit; the loan is made by a financial institution. The CGC is not the lender.
- **System vs single CGC** — this page covers the system; local CGC pages cover specific prefectural / city corporations.
- **SME vs agriculture / fisheries** — agriculture uses [[policy-finance/agriculture-credit-guarantee-system]]; fisheries uses [[policy-finance/fisheries-credit-guarantee-system]].
- **CGC vs JFC direct lending** — JFC also lends directly to SMEs; the CGC system is a guarantee-on-private-lending mechanism rather than a direct-lending program.

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/national-federation-credit-guarantee-corporations]]
- [[policy-finance/agriculture-credit-guarantee-system]]
- [[policy-finance/fisheries-credit-guarantee-system]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/hokkaido-credit-guarantee-corp]]
- [[policy-finance/tokyo-credit-guarantee-corp]]
- [[policy-finance/osaka-credit-guarantee-corp]]
- [[policy-finance/aichi-credit-guarantee-corp]]
- [[policy-finance/hyogo-credit-guarantee-corp]]
- [[financial-regulators/jfc]]
- [[financial-regulators/shoko-chukin]]
- [[banking/shinkin-bank-registry-japan]]
- [[banking/credit-cooperative-registry-japan]]
- [[banking/regional-bank-consolidation-pattern]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Federation of Credit Guarantee Corporations, "信用保証協会と信用保証制度" (https://www.zenshinhoren.or.jp/guarantee-system/).
- Japan Federation of Credit Guarantee Corporations, "信用保証制度を支えるしくみ" (https://www.zenshinhoren.or.jp/guarantee-system/hokan/).
- Japan Federation of Credit Guarantee Corporations, "ご利用条件" (https://www.zenshinhoren.or.jp/guarantee-system/riyojoken/).
- 中小企業庁, "中小企業の資金繰り支援" (https://www.chusho.meti.go.jp/kinyu/shikinguri/index.html).
- 中小企業庁, セーフティネット保証 1号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_1gou.html).
- 中小企業庁, セーフティネット保証 2号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_2gou.html).
- JFC, SME finance pages (https://www.jfc.go.jp/n/finance/sme/index.html).

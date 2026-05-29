---
title: "Point liability accounting boundary (JP loyalty programs)"
aliases:
  - "loyalty/point-liability-accounting-boundary"
  - "point-liability-accounting-boundary"
  - "ポイント引当金 会計境界"
  - "JP loyalty point accounting"
  - "ポイント負債 会計処理"
domain: "loyalty"
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [loyalty, accounting, ifrs-15, asbj, prepaid, breakage, japan, finance]
status: active
sources:
  - "https://www.asb.or.jp/jp/wp-content/uploads/asbj_29.pdf"
  - "https://www.fsa.go.jp/menkyo/menkyoj/03kohyou.pdf"
  - "https://corp.rakuten.co.jp/investors/financial/"
  - "https://www.aeonfinancial.co.jp/ir/"
  - "https://www.docomo.ne.jp/corporate/ir/"
  - "https://paymentsjapan.or.jp/"
  - "https://vpoint.jp/"
---

# Point liability accounting boundary (JP loyalty programs)

## TL;DR

"Points" in Japan are not one accounting concept. The same word covers (1) **marketing-promotional grants** that are pure expense, (2) **loyalty liabilities** that are deferred revenue under IFRS 15 / ASBJ Statement No.29, (3) **breakage assumptions** that drive when revenue is finally recognised, (4) **purchased prepaid value** that crosses the [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] and triggers FSA registration, and (5) **cross-program exchange points** that introduce a settlement leg between operators. Mixing these together is the most common error when reading a Japanese loyalty operator's filings.

For program-by-program coverage, see [[loyalty/japan-points-landscape]] in the loyalty domain, and [[loyalty/INDEX|loyalty index]] for the broader [[fintech/INDEX|fintech]] and [[payments/INDEX|payments]] context.

## Five accounting buckets

| Bucket | Trigger | Accounting treatment | Regulatory layer |
|---|---|---|---|
| Marketing-promotional cost | Operator hands out a bonus point with no future redemption obligation tied to a past sale | Expensed when granted (promotion / advertising cost) | Generally outside Payment Services Act |
| Loyalty liability (contract liability) | Points earned from a customer purchase that the operator must honour later | Deferred revenue under IFRS 15 (material right) or accrued liability under JGAAP (ASBJ Statement No.29 framing) | Disclosure under JGAAP / IFRS; Payments Japan disclosure norms apply if used in code payment |
| Breakage | Expected unused balance | Pattern-based revenue recognition over expected redemption period | No standalone registry; estimation must be auditable |
| Purchased / charged value | Customer pays cash for a stored balance | Prepaid liability; can become a regulated prepaid payment instrument | [[JapanFG/legal-financial-licenses/payment-license-stack|FSA prepaid issuer registry]] / Payment Services Act |
| Cross-program exchange | One operator's points are converted into another's | Settlement leg + liability transfer between operators | Bilateral contracts, sometimes settlement bank involvement |

## 1. Marketing-promotional cost (no contract liability)

When a JP operator drops a "1,000 ポイント贈呈" coupon as part of a campaign that is **not** tied to a past customer purchase, there is no enforceable future obligation conditional on past consideration. The economic substance is closer to advertising:

- Expensed when granted (or when probability-of-redemption is reasonably estimable).
- No deferred revenue allocation — there is no prior performance obligation to allocate against.
- Treated as part of customer-acquisition cost in segment reporting.

The most visible example is the recurring PayPay / d払い / 楽天ペイ "100% 還元" or "5% 還元" campaigns. The campaign grant itself is promotional cost, while the *underlying* purchase-earned points sit in the loyalty-liability bucket below. Reading a PayPay or Rakuten campaign disclosure without separating these two layers leads to overstating their effective discount rate.

## 2. Loyalty liability under IFRS 15 / ASBJ Statement No.29

When a customer earns points by spending — the classic "100円につき1ポイント" — Japan's treatment splits depending on whether the issuer reports under JGAAP or IFRS:

- **IFRS 15**: Points are a **material right** (customer option) and a separate performance obligation. The transaction price is allocated between the goods sold and the points granted using relative standalone selling prices. Revenue allocated to points is **deferred** as a contract liability and recognised when points are redeemed (or expected to expire). Rakuten Group (IFRS reporter) discloses point-related deferred revenue under contract liabilities in segment notes.
- **JGAAP / ASBJ Statement No.29**: Historically Japan recognised an **estimated liability for point redemption** ("ポイント引当金") with the offsetting entry to SG&A. ASBJ Statement No.29 ("Accounting Standard for Revenue Recognition", 収益認識に関する会計基準) effective from FY2021 substantially aligned JGAAP with IFRS 15 for listed companies, shifting accounting from a provision model toward a deferred-revenue model that mirrors the IFRS treatment. Many large operators (AEON Financial Service, NTT docomo, JCB) re-presented their disclosures around the FY2021 transition.

The most useful test when reading a JP issuer's filing is to check whether "ポイント引当金" is still a line item, or whether it has migrated into "契約負債" (contract liability). The migration tells you whether the company has fully adopted the revenue-recognition model.

## 3. Breakage assumption (when deferred revenue is recognised)

Breakage — expected unused balance — drives the *timing* of revenue recognition for points that never get redeemed:

- Under both IFRS 15 and ASBJ Statement No.29, breakage is recognised in proportion to the pattern of redemption (not all at once on expiry).
- The expected breakage rate must be a **reliable estimate** based on historical data; otherwise revenue is recognised only when the probability of further redemption becomes remote.
- Operators with longer expiry windows or transferable points must hold the liability longer; this directly suppresses near-term revenue.

The Payments Japan code-payment disclosure expectations (industry self-regulatory framework for code-payment issuers) push operators to disclose **redemption rate, average expiry, and outstanding balance** in a comparable way so that breakage is not used as a release valve for revenue smoothing.

## 4. Purchased / charged value (prepaid boundary)

When a customer pays cash to load a balance — nanaco, WAON, Suica, or a gift card / prepaid card — the operator crosses into the **prepaid payment instrument** layer of the Payment Services Act:

- Funds received are a prepaid liability, not a loyalty liability.
- The operator must register with the FSA as a prepaid issuer (前払式支払手段発行者) — see [[JapanFG/legal-financial-licenses/payment-license-stack|payment-license stack]] for the registry boundary.
- Half-yearly **保全 (asset-preservation)** requirement under the Payment Services Act applies when unused balance exceeds 10 million yen.
- If the prepaid value becomes refundable in cash or freely transferable between unrelated users, the operator may cross further into the **funds-transfer business** licence — see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for that step.

This is the line where "points" stop being a loyalty marketing topic and become a payments-regulatory topic. Operators like AEON (WAON), Seven & i (nanaco), and JR East (Suica) sit on this side. Most of the bonus-point overlay sitting on top of those balances is still loyalty accounting, but the underlying charged balance is prepaid.

## 5. Cross-program exchange points (settlement leg + accounting timing)

When points convert between programs — Rakuten Point ↔ ANA mileage, dポイント ↔ JAL mileage, V Point ↔ partner programs — two accounting events happen at once:

1. **Liability transfer**: the originating operator extinguishes its liability (in the conversion ratio), and the receiving operator creates a new liability on its own balance sheet.
2. **Settlement leg**: cash or near-cash flows from the originating operator to the receiving operator at a contractually agreed rate, often less than the consumer-facing exchange ratio. The spread is the receiving operator's acquisition revenue, and the originating operator's release cost.

This matters because it makes "outstanding point liability" non-additive across operators. The same yen of consumer purchasing power can sit in two different liability lines at two different moments during a conversion window. Anti-abuse controls (rate limits, identity-binding, throttling of unusual conversion patterns) sit on top of this flow.

## Operator examples

| Operator | Liability shape | Disclosure clue |
|---|---|---|
| Rakuten Group | IFRS contract liability for Rakuten Points; sizeable on the consolidated balance sheet | Segment notes break out "contract liabilities" with point-related portion |
| AEON Financial Service | WAON POINT loyalty liability + WAON prepaid liability sit on separate lines | AFS IR distinguishes loyalty programmes from prepaid balances; group-level AEON Retail consolidates the WAON POINT side |
| NTT docomo / dポイント | dポイント liability with telco-customer cohort; bundled with telecom revenue allocation under IFRS 15 | NTT annual report discloses redemption assumptions and deferred revenue allocation |
| PayPay | PayPay points include a heavy promotional component; the campaign overhang is expense, while purchase-earned points are liability | PayPay and SoftBank / LY filings separate "campaign cost" from "point liability"; the campaign cost line tends to dominate |
| T Point → V Point (post-2024 unification, see [[loyalty/v-point-smbc-ccc-case]]) | Liability sits with the issuing operator (SMBC Card / CCCMK) on each side of the unification; legacy T balances were migrated under defined conversion rules | SMCC / SMFG IR commentary discusses the migration mechanics |

## Why this boundary matters for JapanFG analysis

- A high "point balance" number on a Japanese operator's IR slide does not equal a high *liability*. The split between promotional grant, loyalty liability, prepaid balance, and exchange-bound transfer balance determines economic intensity.
- A bank or telco group acquiring a loyalty operator (SMBC + V Point, NTT + dポイント consolidation) inherits **liability accounting and prepaid-license obligations** at the same time. The deal is more than a marketing asset transfer.
- Code-payment operators with heavy campaign spend look loss-making partly because promotional grants hit P&L immediately, while the loyalty-liability layer underneath is comparatively small.
- Cross-program exchange creates a non-additive system. Aggregate "Japan point economy" numbers should not be read as a sum of operator-reported balances.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape]]
- [[loyalty/v-point-smbc-ccc-case]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[JapanFG/legal-financial-licenses/payment-license-stack|payment-license stack]]
- [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[fintech/INDEX|fintech]]
- [[payments/INDEX|payments]]
- [[JapanFG/rakuten-fg|Rakuten FG]]
- [[JapanFG/aeon-bank|Aeon Bank / AFS]]
- [[JapanFG/paypay-fg|PayPay FG]]
- [[JapanFG/ndfg|NDFG]]
- [[INDEX|FinWiki index]]

## Sources

- ASBJ Statement No.29, "Accounting Standard for Revenue Recognition" (収益認識に関する会計基準), Accounting Standards Board of Japan.
- FSA prepaid payment instrument issuer registry (前払式支払手段発行者登録一覧).
- Payments Japan Association code-payment disclosure norms.
- Rakuten Group IR — contract liability segment notes.
- AEON Financial Service IR — WAON POINT and WAON prepaid disclosures.
- NTT docomo annual report — dポイント accounting and redemption disclosure.
- Vポイント公式 (Vpoint.jp) — for context on the SMBC / CCCMK common-point operator referenced.

---
source: loyalty/point-liability-accounting-boundary
source_hash: d8ab80a7f3b1bd31
lang: en
status: machine
fidelity: ok
title: "Point liability accounting boundary (JP loyalty programs)"
translated_at: 2026-07-29T08:08:10.000Z
---

# Point liability accounting boundary (JP loyalty programs)

## TL;DR

"Points" in Japan are not one accounting concept. Classification depends on the **contract, funder, customer promise, redemption obligor, and principal-agent role**. A grant may be marketing expense, a provision, a contract liability, consideration payable to a customer, or another item. Purchased stored value is a separate regulatory question under the Payment Services Act. Cross-program conversion may create inter-operator accounting or settlement, but consumer terms alone do not reveal those commercial mechanics.

For program-by-program coverage, see [[loyalty/japan-points-landscape]] in the loyalty domain, and [[loyalty/INDEX|loyalty index]] for the broader [[fintech/INDEX|fintech]] and [[payments/INDEX|payments]] context.

## Five accounting buckets

| Bucket | Trigger | Accounting treatment | Regulatory layer |
|---|---|---|---|
| Campaign / promotional grant | An incentive is offered; identify who funds it and who owes redemption | Could be marketing expense, a liability / provision, consideration payable to a customer, or part of a customer contract | Analyse the underlying payment feature separately |
| Customer option / loyalty promise | A purchase grants an option that may provide a material right | If the revenue standard applies and a material right exists, allocate transaction price and recognise the related contract liability | Financial-statement disclosure under the applicable standard |
| Breakage | A recognised customer obligation may not be exercised | Apply breakage guidance only when the relevant criteria and estimate are met | No standalone licence; estimation and disclosure follow the accounting framework |
| Purchased / charged value | Customer pays cash for stored value | Usually a financial / prepaid liability rather than a loyalty contract liability | Payment Services Act; registration / notification depends on issuer type and thresholds |
| Cross-program exchange | A customer converts value between programmes | Entries depend on the contracts, obligor change, principal-agent role, and consideration; no universal “liability transfer” entry | Consumer terms plus undisclosed commercial contracts |

Sources: [IFRS 15](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/), [ASBJ Statement No.29](https://www.asb.or.jp/jp/wp-content/uploads/asbj_29.pdf), the [Payment Services Act](https://elaws.e-gov.go.jp/document?lawid=421AC0000000059), and the FSA's [registry index](https://www.fsa.go.jp/menkyo/menkyo.html). The table is an issue map, not entity-specific accounting advice.

## 1. Marketing-promotional cost (no contract liability)

A campaign label does not determine the accounting. Review:

- who funds the award and which entity promises redemption;
- whether the award is connected to a customer contract or paid to / on behalf of a customer;
- whether the reporting entity is principal or agent;
- whether an enforceable redemption obligation exists at grant;
- when recognition and measurement criteria for any expense, provision, payable, or contract liability are met.

Only after that analysis can a grant be classified as marketing expense. It is not universally expensed at grant.

## 2. Loyalty liability under IFRS 15 / ASBJ Statement No.29

When a customer earns points by spending, first determine whether the option provides a **material right** that the customer would not receive without entering the contract:

- **IFRS 15**: If the option provides a material right, it is a separate performance obligation. Allocate transaction price using relative standalone selling prices and recognise the allocated amount when that obligation is satisfied, subject to the standard's breakage guidance.
- **JGAAP / ASBJ Statement No.29**: Apply the Japanese revenue-recognition standard to the actual contract and performance obligations. Separate provisions or payables may still arise for fact patterns outside the customer-contract allocation model.

The line label alone is not a sufficient test. A continuing “ポイント引当金” does not prove non-adoption, and a “契約負債” line does not prove that every point grant is deferred revenue. Read the accounting-policy note, scope, and reconciliation.

## 3. Breakage assumption (when deferred revenue is recognised)

Breakage — expected unused balance — drives the *timing* of revenue recognition for points that never get redeemed:

- If the entity expects to be entitled to a breakage amount for a recognised contract liability, recognise it in proportion to the pattern of rights exercised, subject to the applicable standard.
- If the entity does not expect to be entitled to breakage, recognise the remaining amount only when exercise becomes remote.
- Estimate quality, expiry, transferability, and changing redemption patterns require entity-specific evidence.

## 4. Purchased / charged value (prepaid boundary)

When a customer pays cash to load a balance — nanaco, WAON, Suica, or a gift card / prepaid card — the operator crosses into the **prepaid payment instrument** layer of the Payment Services Act:

- Funds received are a prepaid liability, not a loyalty liability.
- **Third-party** prepaid issuers generally require registration; **self-issued** instruments follow a notification regime once the statutory threshold is crossed. Confirm the legal entity and current registry / filing status.
- Issuance-deposit / preservation duties and thresholds follow the current statute and implementing rules; check them for the relevant record date.
- If the prepaid value becomes refundable in cash or freely transferable between unrelated users, the operator may cross further into the **funds-transfer business** licence — see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for that step.

This is the line where "points" stop being a loyalty marketing topic and become a payments-regulatory topic. Operators like AEON (WAON), Seven & i (nanaco), and JR East (Suica) sit on this side. Most of the bonus-point overlay sitting on top of those balances is still loyalty accounting, but the underlying charged balance is prepaid.

## 5. Cross-program exchange points (settlement leg + accounting timing)

When a customer converts between programmes, several outcomes are possible depending on the contracts. The originating obligation may be extinguished, modified, or fulfilled through an agent; the receiving programme may recognise a new obligation; and consideration may or may not move between operators at conversion. Consumer pages usually disclose only direction, rate, unit, eligibility, and expiry. They do not establish settlement timing, wholesale rate, insolvency allocation, operator margin, or journal entries.

## Operator examples

| Public evidence | What it can establish | What it cannot establish alone |
|---|---|---|
| Consumer programme terms | Customer right, conversion direction, rate, expiry, and eligibility | Reporting entity, funding source, wholesale settlement, or accounting classification |
| FSA registry | Whether a named legal entity appears in a current public registration list | Whether every feature of a branded service uses that registration |
| SMFG FY2025 interim disclosure | SMFG reports a provision for expected future use of SMBC-group common V Points, estimated from unused points | CCCMK / partner liability migration or bilateral settlement mechanics |

Sources: the FSA's [registry index](https://www.fsa.go.jp/menkyo/menkyo.html), SMFG's [FY2025 interim disclosure](https://www.smfg.co.jp/investor/financial/disclosure/fy2025_inter_pdf/fy2025_inter_00.pdf), [IFRS 15](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/), and [ASBJ Statement No.29](https://www.asb.or.jp/jp/wp-content/uploads/asbj_29.pdf).

## Why this boundary matters for JapanFG analysis

- A high "point balance" number on a Japanese operator's IR slide does not equal a high *liability*. The split between promotional grant, loyalty liability, prepaid balance, and exchange-bound transfer balance determines economic intensity.
- A bank or telco group acquiring a loyalty operator (SMBC + V Point, NTT + dポイント consolidation) inherits **liability accounting and prepaid-license obligations** at the same time. The deal is more than a marketing asset transfer.
- Campaign intensity cannot be translated into P&L timing without the contract and funder analysis.
- Cross-program totals should not be added without checking whether balances, obligations, or flows overlap.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape]]
- [[loyalty/v-point-smbc-ccc-case]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[financial-licenses/payment-license-stack|payment-license stack]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[fintech/INDEX|fintech]]
- [[payments/INDEX|payments]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[card-issuers/aeon-bank|Aeon Bank / AFS]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[megabanks/ndfg|NDFG]]
- [[INDEX|FinWiki index]]

## Sources

- ASBJ Statement No.29, "Accounting Standard for Revenue Recognition" (収益認識に関する会計基準), Accounting Standards Board of Japan.
- IFRS 15, Revenue from Contracts with Customers: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/
- Payment Services Act: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059
- FSA licence / registration index: https://www.fsa.go.jp/menkyo/menkyo.html
- SMFG FY2025 interim disclosure: https://www.smfg.co.jp/investor/financial/disclosure/fy2025_inter_pdf/fy2025_inter_00.pdf

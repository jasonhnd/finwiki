---
title: "JHF MBS mechanics (Japan Housing Finance Agency)"
aliases:
  - "JHF MBS"
  - "JHF月次MBS"
  - "Japan Housing Finance Agency MBS"
  - "Flat 35 MBS"
  - "住宅金融支援機構MBS"
  - "JHF MBS Trust"
  - "JHF monthly MBS"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [structured-finance, mbs, jhf, securitization, japan, public-credit, flat-35]
status: active
sources:
  - "https://www.jhf.go.jp/english/mbs_faq.html"
  - "https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf"
  - "https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf"
  - "https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html"
---

# JHF MBS mechanics (Japan Housing Finance Agency)

## TL;DR

The Japan Housing Finance Agency (JHF) buys eligible Flat 35 fixed-rate residential mortgages from participating financial institutions and issues asset-backed agency bonds. Ordinary monthly JHF MBS are not a 90–99% senior tranche paired with a 1–10% subordinated tranche, and JHF does not merely guarantee a separate senior class. Before a beneficiary-interest event, JHF itself is responsible for timely principal and interest payment; after such an event, the notes are redeemed and replaced with beneficiary certificates backed by the trust pool. Ordinary monthly MBS use overcollateralization for that post-trigger pool risk, while Green MBS are expressly structured without overcollateralization. Use dated JHF issuance records—not a timeless spread range—for pricing.

## Wiki route

| You want | Go to |
|---|---|
| JHF agency page | [[policy-finance/japan-housing-finance-agency]] |
| JHF vs private spread | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| Private RMBS comparison | [[structured-finance/japan-rmbs-issuance-structure]] |
| SPV vehicle context | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| Trust vehicle context | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| Domain index | [[structured-finance/INDEX]] |

## 1. Flat 35 origination

[JHF's official MBS FAQ](https://www.jhf.go.jp/english/mbs_faq.html) describes the purchase, servicing and trust arrangement summarized in the following table.

| Element | Description |
|---|---|
| Loan product | Flat 35 — long-tenor fixed-rate residential mortgage (up to 35 years) |
| Origination | Participating financial institutions originate loans that meet JHF purchase criteria. |
| Buyer | JHF purchases eligible loans under its securitization-support business. |
| Servicing | The originating institution generally continues collecting borrower payments under an entrustment arrangement. |
| Funding link | JHF uses MBS proceeds to fund purchases and passes mortgage-pool cash flows through to MBS investors under the bond terms. |

The table records JHF's disclosed purchase-and-funding route; it does not establish the market share of Flat 35 or private mortgage rate types.

## 2. Monthly MBS issuance cadence

[JHF's dated issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) supports the following program-record controls.

| Cadence field | Evidence-based reading |
|---|---|
| Frequency | Verify from the dated sequence of ordinary monthly series |
| Each issuance | Use the named series result and corresponding pool information |
| Series naming | Preserve the official series number |
| Forward schedule | Use the current issuance plan; do not infer market-making or future supply |

Do not infer investor composition, liquidity or pricing from issuance frequency alone.

## 3. MBS Trust structure

[JHF's 2026 investor material](https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf) and [official FAQ](https://www.jhf.go.jp/english/mbs_faq.html) distinguish the bond obligation before a beneficiary-interest event from the trust-backed claim after one.

| Component | Role |
|---|---|
| Issuer and obligor | JHF issues the MBS and is responsible for timely principal and interest payment before a beneficiary-interest event. |
| Third-party beneficiary trust | JHF entrusts purchased mortgages for the benefit of the MBS-holder group and pledges the trusted loans as collateral. |
| Before the event | Investors hold JHF's bond; credit quality mainly reflects JHF's ability to make timely payment. |
| After the event | The outstanding notes are redeemed and replaced with beneficiary certificates backed by the trust pool. |
| Credit enhancement | Ordinary monthly MBS use overcollateralization to support payments on the post-event certificates. |
| Green MBS exception | JHF states that Green MBS do not use overcollateralization. |

This is an asset-backed agency-bond structure with a contingent trust-beneficiary mechanism, not a conventional issued senior/subordinated capital stack.

## 4. Credit risk before and after a beneficiary-interest event

[JHF's official FAQ](https://www.jhf.go.jp/english/mbs_faq.html) and [2026 investor material](https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf) support the following event boundary.

- Before an event, JHF has the contractual timely-payment obligation; describing that obligation as a "JHF guarantee" of a separate senior tranche is incorrect.
- On an event defined in the bond documents, the bond is redeemed and the holder receives a beneficiary certificate backed by the applicable trust pool.
- JHF publishes the event definitions and pool information in its product descriptions; the exact bond documents govern each series.
- Ratings must be read from the dated issuance record. JHF's FY2026 investor material reports AAA ratings from S&P and R&I for ordinary monthly MBS, while Green MBS have different ratings.

## 5. Ordinary monthly MBS and Green MBS credit enhancement

[JHF's FY2026 product comparison](https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf) supplies the product boundary in this table.

| Aspect | Ordinary monthly MBS | Green MBS |
|---|---|---|
| Collateral | Purchased Flat 35 mortgages | Purchased Flat 35 mortgages meeting the green framework's eligibility criteria |
| Overcollateralization | Used to support the trust certificates after a beneficiary-interest event | Not used |
| Payment form | Monthly pass-through | Product terms must be read from the applicable Green MBS documents |
| Rating basis | Dated issue rating; ordinary monthly MBS were S&P AAA(sf) / R&I AAA in the FY2026 comparison | Dated issue rating; not interchangeable with ordinary monthly MBS |

## 6. Prepayment behavior

[JHF publishes monthly factors and pool data](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html); the table therefore separates disclosed mechanics from behavior that must be measured from series data.

| Item | Evidence-based reading |
|---|---|
| Monthly factor | JHF discloses the current balance as a proportion of the original balance for each covered series. |
| Scheduled and unscheduled principal | Both affect the monthly pass-through redemption amount under the applicable documents. |
| Expected life | Is not the same as legal maturity and depends on observed pool repayment. |
| Modeling | Must use dated factor and pool-attribute data; this page does not assume an unsupported "bonus-period spike" or US comparison. |

Prepayment claims should be reproduced from JHF's series-level data or a cited model, rather than inferred from borrower stereotypes.

## 7. Investor base

[JHF's dated issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) identifies issues, not investor allocations; the following table states the evidence required.

| Investor claim | Required evidence |
|---|---|
| Investor category | Public allocation or holder disclosure for the named series |
| Amount / share | Dated amount, denominator and reporting population |
| ALM or policy motive | Investor's own public statement |
| Foreign participation | Dated allocation or holdings disclosure |
| Comparison with JGB demand | Matched public investor data and period |

No investor hierarchy or motive is asserted without those sources.

## 8. Comparison summary

[JHF's FAQ](https://www.jhf.go.jp/english/mbs_faq.html) supports the JHF column; any private RMBS column must be checked against that transaction's own documents.

| Dimension | JHF MBS | Private RMBS |
|---|---|---|
| Issuer obligation | JHF owes timely principal and interest before a beneficiary-interest event | Defined by the issuing trust or SPV documents |
| Asset transfer | Purchased mortgages are placed in a third-party beneficiary trust and pledged as collateral | Deal-specific true-sale, trust or SPV arrangement |
| Credit enhancement | Ordinary monthly MBS use OC for the post-event trust certificates; Green MBS are an express exception | Deal-specific; may include subordination, OC, reserves or other support |
| Public data | JHF publishes issue results, factors and pool attributes | Availability varies by public or private placement |
| Pricing | Read the dated JHF issuance result | Read the dated transaction disclosure; no generic private-RMBS band is asserted here |

Compare with [[structured-finance/japan-rmbs-issuance-structure]] and [[structured-finance/jhf-mbs-vs-private-rmbs-spread]].

## 9. Why it matters

- JHF MBS connects private Flat 35 origination with capital-market funding through JHF's securitization-support business.
- The program supplies recurring, series-level public data for Japanese mortgage-backed bonds.
- Its contingent trust-beneficiary structure must not be collapsed into a generic senior/subordinated RMBS diagram.

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[financial-regulators/jfc]]
- [[real-estate-finance/INDEX]]

## Sources

- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, FY2026 investor material](https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf).
- [JHF, MBS structure and beneficiary-interest explanation](https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf).
- [JHF, factors and other monthly pool data](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html).
- [JHF, dated MBS issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf).

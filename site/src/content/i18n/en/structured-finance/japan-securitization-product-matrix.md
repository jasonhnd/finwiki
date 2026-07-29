---
source: structured-finance/japan-securitization-product-matrix
source_hash: 30a81c9df8350389
lang: en
status: machine
fidelity: ok
title: "Japan securitization product matrix"
translated_at: 2026-07-29T10:06:23.508Z
---

# Japan securitization product matrix

## TL;DR

This is an evidence map, not a table of “typical” issuers, vehicles, ratings, tranche counts, annual volumes, investors or distributors. With two narrow exceptions—JHF's disclosed MBS program and SMBC's disclosed contractual covered-bond program—each row requires a named transaction. The page makes no MUFG covered-bond claim, no cross-product pricing or volume hierarchy, and no domestic-versus-global agency or dealer dominance claim.

## Wiki route

For mechanics, use [[structured-finance/jhf-mbs-mechanics]], [[structured-finance/japan-rmbs-issuance-structure]], [[structured-finance/japan-cmbs-issuance-structure]], [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]], [[structured-finance/japan-consumer-loan-abs-structure]], [[structured-finance/japan-credit-card-receivable-abs]], and [[structured-finance/japan-equipment-lease-abs]]. For legal vehicles, use [[structured-finance/spv-tk-gk-vehicle-japan-tax]], [[structured-finance/tmk-special-purpose-company-mechanics]], and [[structured-finance/japan-trust-beneficial-interest-vs-spv]].

## 1. Product evidence map

[JHF's FAQ](https://www.jhf.go.jp/english/mbs_faq.html), [SMBC's covered-bond program](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html), [JSDA's survey](https://www.jsda.or.jp/en/statistics/securitization-market/), and named transaction documents define the following boundaries.

| Product / exposure | Public primary evidence | Verified boundary | Do not infer |
|---|---|---|---|
| JHF MBS | JHF FAQ and dated investor material | JHF owes timely payment before a beneficiary-interest event; certificates replace bonds after the event; ordinary monthly MBS use OC and Green MBS do not | Senior/subordinated stack or separate JHF guarantee |
| Private RMBS | JSDA survey plus named transaction | Mortgage-backed transaction exists within the cited definition | Vehicle, rating, enhancement or spread |
| CMBS | Named offering / trustee / rating documents | Transaction-specific collateral and payment terms | Standard waterfall or current market trend |
| Auto-loan ABS | Named transaction and criteria | Pool and structure for that series | Issuer rank, annual volume or enhancement range |
| Consumer-loan ABS | Named transaction and applicable law | Pool terms and legal rate boundary | Default, trigger or retention range |
| Card-receivable ABS | Named transaction and criteria | Revolving / trust mechanics only if documented | Master-trust cadence, balance or default range |
| Lease-receivable ABS | Named transaction and criteria | Lease and residual-value exposure only if documented | Pool mix, residual values or fee range |
| CLO held by a Japanese institution | Named bank disclosure and foreign deal documents | Investor exposure | Japanese domestic issuance |
| NPL / project / synthetic transaction | Named issuer, legal and rating documents | Transaction-specific risk transfer | Standard vehicle, rating or trend |
| Aircraft / ship finance | Named lease / JOL/JOLCO / ABS documents | Product actually documented | Treating distinct products as one domestic ABS class |
| SMBC contractual covered bond | SMBC program and issue list | SMBC acts as trustee; contractual dual recourse; eligible Japanese RMBS cover pool; 25% minimum OC | Legislative status, direct mortgage pool, MUFG program or UCITS eligibility |
| Repackaging note | Named asset, note and hedge documents | Contractual payoff for that note | Standard investor motive or risk transformation |

## 2. Vehicle evidence

[The Asset Securitization Act](https://laws.e-gov.go.jp/law/410AC0000000105), [Trust Act](https://laws.e-gov.go.jp/law/418AC0000000108), and [FSA's FIEA classification guide](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html) support the following legal-form table.

| Form / arrangement | What the source establishes | Additional named-deal evidence |
|---|---|---|
| TMK | Statutory specified-purpose company, required notifications and asset-liquidation plan | Offer, listing, tax, accounting and collateral |
| GK plus TK | Corporation plus contractual / paragraph-2 interest | Tax, private-placement, transfer and consolidation analysis |
| Trust beneficial interest | Trust relationship and generally paragraph-2 security | Trust type, transfer, tax and offer terms |
| Foreign SPV | Nothing under Japanese vehicle law alone | Formation law, transaction documents and Japan selling rules |
| JHF MBS arrangement | Bond plus contingent third-party-beneficiary trust mechanism | Dated series terms and rating |
| SMBC contractual covered bond | Specified money trust and contractual dual recourse | Dated series terms, rating and investor eligibility |

Vehicle labels do not establish public offering, listing, tax deduction, derecognition or bankruptcy remoteness.

## 3. Rating evidence

[FSA's register](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf) and [JCR's public rating list](https://jcr.co.jp/en/ratinglist/sf_sf/) support the following controls.

| Question | Evidence | Safe conclusion |
|---|---|---|
| Is an agency registered in Japan? | Current FSA register | Registration for the named legal entity and review date |
| Did it rate a transaction? | Dated agency action | Named class, symbol and date only |
| What criteria applied? | Criteria version cited by the action | Transaction-specific methodology |
| Do agencies differ? | Same class and same date | Record actual symbols; do not infer a fixed notch gap |
| Does a rating determine eligibility? | Investor / regulator rule | Never infer from agency branding alone |

## 4. Volume and holdings

[JHF's dated issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) and [JSDA's survey](https://www.jsda.or.jp/en/statistics/securitization-market/) support the following measurement rules.

| Measure | Source | Rule |
|---|---|---|
| JHF issuance | Dated JHF series history | Sum a stated period and product definition |
| Japan securitization issuance | JSDA survey table | Preserve category, period and revisions |
| Bank structured-credit exposure | Named bank disclosure | Report as holdings, not issuance |
| Private / cross-border transaction | Named issuer or offering disclosure | Defer missing data; no annual estimate |

Cross-product ranks are omitted because issuance, holdings, public offers and private placements are not comparable measures.

## 5. Pricing comparison

[JHF's dated issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf) and [SMBC's issue list](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html) illustrate the following required fields.

| Field | Required evidence |
|---|---|
| Instrument | Named series and class |
| Time | Pricing / issue date and primary or secondary observation |
| Currency / benchmark | Same currency, curve and spread convention |
| Life | Legal maturity, expected life, amortization and calls |
| Credit | Actual obligor, collateral, enhancement and dated rating |
| Result | Disclosed coupon / spread; no asset-class-wide band |

## 6. Reproducibility checklist

[JCR's methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/) is one control surface in the following table; it is not evidence of a specific deal.

| Claim | Minimum public evidence |
|---|---|
| Product exists | Named issuer / offering / rating record |
| Vehicle | Legal and transaction documents |
| Rating | Dated named-class action and criteria version |
| Volume | Defined official statistic or named issue amount |
| Pricing | Dated named transaction and benchmark |
| Investor / distributor | Public allocation or transaction disclosure |
| Tax / accounting | Current statute plus fact-specific analysis |
| Market share / trend | Defined population, period and calculation |

When a required document is not public, record a specific defer reason rather than substituting a generic homepage.

## Wiki route

Read this entry within [[structured-finance/INDEX|structured finance]] and use [[finance/INDEX|finance]] for cross-domain capital-markets context.

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure]]
- [[structured-finance/japan-credit-card-receivable-abs]]
- [[structured-finance/japan-equipment-lease-abs]]
- [[structured-finance/japan-covered-bond-mufg-smbc]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/tmk-special-purpose-company-mechanics]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]

## Sources

- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, FY2026 investor material](https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf).
- [JSDA, securitization market](https://www.jsda.or.jp/en/statistics/securitization-market/).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).
- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
- [FSA, examples of FIEA paragraph-1 and paragraph-2 securities](https://www.fsa.go.jp/policy/marketentry/guidebook/reference1.html).
- [Asset Securitization Act](https://laws.e-gov.go.jp/law/410AC0000000105).
- [Trust Act](https://laws.e-gov.go.jp/law/418AC0000000108).
- [SMBC, covered-bond program and issue list](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html).

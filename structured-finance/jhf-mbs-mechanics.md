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
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, mbs, jhf, securitization, japan, public-credit, flat-35]
status: active
sources:
  - "https://www.jhf.go.jp/about/index.html"
  - "https://www.jhf.go.jp/about/organization/outline/index.html"
  - "https://www.jcr.co.jp/en/"
  - "https://www.r-i.co.jp/en/"
---

# JHF MBS mechanics (Japan Housing Finance Agency)

## TL;DR

The Japan Housing Finance Agency (JHF) runs a monthly MBS issuance program backed by Flat 35 fixed-rate residential mortgages originated by private financial institutions. JHF buys the loans via its securitization-support program, packages them into an "MBS Trust" structure, and issues MBS where the senior portion (typically the bulk of issuance) carries JHF's government-supported credit. Spread vs JGB is tight — typically 10-30bp at the senior class — reflecting effective sovereign-linked credit. This is the largest yen-denominated structured-paper engine in Japan. Use this page for JHF MBS mechanics; pair with [[policy-finance/japan-housing-finance-agency]] for the agency itself and [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] for spread economics.

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

| Element | Description |
|---|---|
| Loan product | Flat 35 — long-tenor fixed-rate residential mortgage (up to 35 years) |
| Origination | Private financial institutions (megabanks, regional banks, mortgage banks) originate to JHF's eligibility criteria |
| Buyer | JHF buys the loan from the originator after origination (securitization-support program) |
| Risk transfer | Credit risk passes to JHF (or to the MBS Trust); originator retains servicing |
| Borrower experience | Borrower's relationship is with the originator; loan terms are fixed for tenor |

Flat 35 fills a gap in private mortgage finance: most private mortgages in Japan are variable-rate or short-tenor fixed-rate. Flat 35 provides long-tenor fixed-rate optionality, supported by JHF's securitization engine.

## 2. Monthly MBS issuance cadence

| Cadence aspect | Setting |
|---|---|
| Frequency | Monthly |
| Each issuance | A new MBS series backed by mortgages purchased in the preceding period |
| Series naming | Sequential (e.g., "Series XXX") |
| Schedule | Predictable; published in advance; supports market-making |

The monthly cadence makes JHF MBS the most regular issuance program in yen structured paper, providing reliable supply to lifers, regional banks, and asset managers. This regularity supports tight pricing — investors do not have to chase episodic supply.

## 3. MBS Trust structure

| Component | Role |
|---|---|
| Trust | The MBS Trust holds the mortgage pool. |
| Trust beneficiaries | The MBS investors hold beneficiary interest. |
| Senior class | Typically 90-99% of issuance; supported by JHF guarantee. |
| Subordinated class | JHF or other party retains; absorbs first losses. |
| Servicer | Originator retains servicing role; passes collections to trust. |
| Trustee | Trust bank acts as trustee. |

The "MBS Trust" terminology is JHF-specific but the structure is equivalent to a senior-subordinated MBS structure with the senior class wrapped by JHF's government-supported credit.

## 4. Government-supported senior class

- The senior class of JHF MBS is supported by JHF's guarantee or by the MBS structure being effectively backstopped by JHF's role as the issuing entity.
- JHF itself is an incorporated administrative agency under MLIT supervision — see [[policy-finance/japan-housing-finance-agency]].
- Government implicit support: while JHF is not a direct sovereign guarantor, market participants price JHF MBS as effectively sovereign-linked credit.
- Rating: senior class typically receives the highest rating tier from JCR / R&I, reflecting the JHF / sovereign linkage.

## 5. Subordinated portion

| Aspect | Setting |
|---|---|
| Size | Typically 1-10% of issuance |
| Holder | JHF retains (first-loss skin in the game) |
| Function | Absorbs credit losses before senior class touched |
| Effect | Senior class effectively insulated from typical default volatility |

JHF holds first-loss subordinated interest in its own MBS — a form of "skin in the game" that gives investors confidence senior bonds are insulated from typical credit volatility.

## 6. Prepayment behavior

| Driver | Effect |
|---|---|
| Refinancing waves | Flat 35 borrowers may refinance to a lower-rate Flat 35 or to private variable-rate mortgages. |
| Move / sale | Standard prepayment. |
| Bonus prepayment | Japan-specific: salaried borrowers often make annual bonus-time partial prepayments. |
| Interest-rate sensitivity | Long-tenor fixed-rate borrowers refinance when rates drop materially. |

Japan prepayment models are calibrated to historical Flat 35 behavior — typically slower than US conventional MBS but with annual bonus-period prepayment spikes. JHF publishes prepayment data that rating agencies and investors use in modeling.

## 7. Investor base

| Investor class | Why |
|---|---|
| Lifers | Long-duration, sovereign-linked credit fits ALM. |
| Regional banks | JGB-plus yield with effective sovereign credit. |
| Asset managers | Bond-fund constituent. |
| Public-credit investors | Direct allocation to housing-policy theme. |
| Foreign investors | Selective, especially when JGB curve is flat. |

The investor base is similar to JGB investors with a slight yield-pickup tilt — JHF MBS is treated as a sovereign-linked instrument with modest spread.

## 8. Comparison summary

| Dimension | JHF MBS | Private RMBS |
|---|---|---|
| Underlying loan | Flat 35 (long-tenor fixed) | Variable-rate or mixed jumbo |
| Originator | Private banks → JHF buys | Private banks (megabanks) |
| Credit support | JHF / government-supported senior | Subordination + OC + reserves |
| Issuance cadence | Monthly | Intermittent |
| Senior rating | Top tier (sovereign-linked) | AAA-AA via structuring |
| Spread vs JGB | ~10-30bp | ~50-100bp |

Compare with [[structured-finance/japan-rmbs-issuance-structure]] and [[structured-finance/jhf-mbs-vs-private-rmbs-spread]].

## 9. Why it matters

- JHF MBS is the largest yen structured-paper engine and effectively sets the benchmark for yen RMBS pricing.
- It is the public-credit anchor for [[structured-finance/INDEX]] — a structural bridge between private mortgage origination and capital-market funding.
- It is what makes long-tenor fixed-rate mortgages feasible in Japan; without JHF securitization support, private banks could not hold large fixed-rate mortgage books matched to long-duration funding.
- It is a core ALM asset for Japanese lifers and a JGB-substitute for many institutional accounts.

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

- Japan Housing Finance Agency, "私たちについて".
- Japan Housing Finance Agency, "組織の概要".
- JCR (Japan Credit Rating Agency), MBS criteria.
- R&I (Rating and Investment Information), MBS methodology.
- MLIT, JHF supervision page.

---
title: "Japan CMBS and RMBS securitization market"
aliases:
  - "japan-cmbs-rmbs-securitization"
  - "Japan CMBS market"
  - "Japan RMBS market"
  - "日本 CMBS RMBS 市場"
  - "Japan commercial mortgage-backed securities"
  - "Japan residential mortgage-backed securities"
  - "Japan property securitization"
  - "Japan real-estate securitization market"
domain: real-estate-finance
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [real-estate-finance, securitization, cmbs, rmbs, structured-finance, rating-agency, japan]
status: active
sources:
  - "https://www.ares.or.jp/action/jreit/"
  - "https://www.jpx.co.jp/english/markets/products/securitized/"
  - "https://www.jhf.go.jp/about/index.html"
  - "https://www.jcr.co.jp/en/rrinfo/meth_sf/"
  - "https://www.r-i.co.jp/en/rating/about/credit-rating/"
  - "https://www.spglobal.com/ratings/en/"
  - "https://www.moodys.com/"
  - "https://www.boj.or.jp/en/statistics/index.htm"
  - "https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html"
  - "https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html"
  - "https://www.jhf.go.jp/english/mbs_faq.html"
---

# Japan CMBS and RMBS securitization market

## TL;DR

Japan's mortgage-backed securitization market includes JHF MBS, private RMBS, and CMBS. Scale, issuer mix, structures, ratings, and distribution must be measured for a stated period from current JHF, JSDA, and transaction disclosures. This page explains the JHF payment mechanism and supplies deal-specific verification checklists; it does not claim current market shares or a dominant private franchise.

## Wiki route

This entry sits under [[real-estate-finance/INDEX|real-estate-finance index]] and routes to securitization-related contexts. Use [[real-estate-finance/j-reit-market-overview|J-REIT market overview]], [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]], and [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] only as adjacent vehicle references. For an appraisal or LTV, read the named transaction and [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] rather than assuming a value definition. [[policy-finance/japan-housing-finance-agency|JHF]] is the primary route for JHF MBS. [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]], [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], and [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] provide context only; they do not prove the trustee, investor base, or economics of a named deal.

### Two strands at very different scales

Build a dated market snapshot from JSDA's securitization survey files, current JHF disclosures, and deal documents. Do not combine annual issuance, cumulative issuance, and outstanding stock or roll an old bracket forward.

Table source note: This is a reconstruction map, not a market-size estimate. Cite the exact JSDA/JHF file, period, unit, and stock/flow definition used for every populated value. ^[Sources: https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html and https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html.]

| Strand | Annual issuance field | Outstanding-stock field | Structure check |
|---|---|---|---|
| **RMBS** | Extract the stated period and separate JHF MBS from private RMBS where the source permits | Use the source's as-of date and perimeter | Separate JHF MBS from private structures; do not infer a share without matched data |
| **CMBS** | Extract the stated period and source classification | Use the source's as-of date and perimeter | Classify single-borrower, conduit, or other structure only from transaction evidence |

If RMBS and CMBS differ in a selected period, report the measured difference and then test candidate explanations. JHF's published programme documents can establish its own issuance mechanism; they do not establish why private CMBS volume differs or what alternative financing “absorbed.”

### Historical arc

- For legal history, cite the exact statute, effective date, and transition relevant to the selected structure.
- For issuance or loss history, use a defined JSDA series and named rating/deal reports; do not infer causation or investor withdrawal from a crisis label.

### JHF Monthly Pass-Through MBS

JHF's FAQ is the controlling public explanation for the following payment and collateral mechanism.

Table source note: The table follows JHF FAQ Q1, Q4, Q5, Q8, and Q10. Product terms and balances must still be checked in the current offering and investor documents. Nothing here is a Japanese-government or implicit guarantee. ^[Source: https://www.jhf.go.jp/english/mbs_faq.html.]

| Feature | JHF MBS reading |
|---|---|
| Issuer | [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] |
| Collateral | Flat 35 fixed-rate housing loans, originated by private financial institutions and purchased by JHF |
| Payment obligation before a beneficiary-interest trigger | JHF itself is obliged to make timely principal and interest payments; JHF states that credit quality mainly depends on JHF's ability to pay |
| After a beneficiary-interest trigger | Beneficiary interests in the entrusted mortgage-loan pool become operative under the defined mechanism; JHF describes overcollateralization after the trigger |
| Guarantee boundary | Do not describe JHF MBS as government-guaranteed or implicitly guaranteed; read JHF's own issuer-status and payment-risk explanation |
| Settlement | Book-entry via [[securities/japan-securities-depository-center|JASDEC]] |

### Private RMBS

Private RMBS structures cannot be generalized from the JHF programme. For each deal, identify the issuer, originator, assets, transfer, servicing, waterfall, retention, ratings, and distribution from its documents.

- Verify the actual classes, subordination, retention, and priority of payments.
- Verify whether the pool is static, revolving, seasoned, fixed-rate, floating-rate, or mixed.
- Cite the actual reports of [[financial-regulators/jcr|JCR]], [[financial-regulators/rating-and-investment|R&I]], [[JapanFG/sp-global-ratings-japan|S&P]], or [[JapanFG/moodys-japan|Moody's]] only if engaged on the named deal.
- Reconcile the reported pool factor with scheduled principal, prepayment, defaults, recoveries, repurchases, and substitutions as applicable.

### Rating-agency criteria for RMBS

Table source note: This is a criteria checklist synthesized from public rating-methodology surfaces, not a rating conclusion for any tranche. The applicable agency, methodology version, pool data, and stresses must be read from the deal's rating report. ^[Sources: https://www.jcr.co.jp/en/rrinfo/meth_sf/ and https://www.r-i.co.jp/en/rating/about/credit-rating/.]

| Element | Criteria emphasis |
|---|---|
| Pool seasoning | Identify the agency's definition, stratification, observed performance, and stress treatment |
| LTV at origination | Confirm value date/definition, current balance, data quality, and the agency's loss-severity treatment |
| DTI | Confirm numerator, denominator, verification date, missing-data treatment, and stress |
| Geographic concentration | Measure the named pool and apply the engaged agency's stated concentration treatment |
| Originator quality | Use the named originator/servicer review; do not rank by institution category |
| Loan product | Classify the named loans and apply the methodology actually cited in the rating report |
| Servicing | Verify master-, primary-, and back-up-servicer roles and replacement provisions |
| Macro overlay | Record the engaged agency's dated unemployment, income, housing-price, and other scenarios |

### Single-borrower CMBS post-2010

For a claimed single-borrower CMBS, verify every structural field from the named offering, trust, loan, and rating documents; do not infer prevalence from an example.

Table source note: The table is a historical structure template, not proof that this structure currently dominates. Maturity, tranching, rating, property scope, and trustee are deal-specific; 5-7 years is only an illustrative case. ^[Sources: https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html and https://www.jcr.co.jp/en/rrinfo/meth_sf/.]

| Feature | Single-borrower CMBS reading |
|---|---|
| Borrower | Confirm the borrower, legal form, asset perimeter, and whether it is a [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]], TMK, or another form |
| Loan | Confirm recourse, collateral, guarantees, covenants, cash controls, and enforcement rights |
| Securitization | Trace the actual sale, trust, beneficial interest, issuer, and note cashflows |
| Tranches | Record the actual classes, subordination, allocation rules, and value definitions used for any LTV |
| Maturity | State the contractual dates, extension conditions, amortization, and refinancing exposure; 5–7 years is illustrative only |
| Rating | Cite only the agencies and reports engaged for the named classes; a cross-border target does not itself require a particular agency |
| Property types | Identify the actual collateral and development/lease risk rather than applying a market-wide property list |
| Trustee | Identify the named trustee and its duties from the transaction documents |

### Conduit CMBS — activity-status test

To determine whether conduit CMBS is active or dormant for a period, define “conduit,” count qualifying deals in JSDA and transaction data, and cite the as-of date. Possible explanations require separate evidence:

1. Compare same-date all-in pricing and terms for bank balance-sheet loans and securitized loans; a curve label alone does not establish substitution.
2. Test any [[real-estate-finance/j-reit-market-overview|J-REIT]] substitution claim with matched financing and transaction data rather than inferring absorption.

### Rating-agency criteria for CMBS

| Element | Criteria emphasis |
|---|---|
| Appraisal | Identify the named appraisal, appraiser, date, value definition, applicable MLIT framework, and reliance language; there is no “JREI-compliant appraisal” rule |
| Cap rate | Record the appraisal and rating report's actual cap-rate evidence and stresses; a JREI survey is not automatically an input |
| DSCR | Recompute the defined debt-service coverage ratio under the engaged agency's stated scenarios |
| Tenant concentration | Measure the actual rent, lease expiry, tenant credit, rollover, and replacement assumptions |
| Property type | Apply the engaged agency's current methodology to the named collateral rather than importing generic loss assumptions |
| Geographic concentration | Measure the actual pool and the methodology's concentration treatment |
| Sponsor quality | Identify only the support, equity, rights, track record, and refinancing assumptions actually considered in the report |
| Refinancing risk | Reproduce the contractual maturity and the agency's dated value, cap-rate, interest-rate, and sale/refinancing stresses |

### RMBS originator landscape

Table source note: The rows are role categories, not current market shares or proof that every institution in a category performs every role. JHF's current MBS documents and the JSDA survey control any period-specific claim. ^[Sources: https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html and https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html.]

| Originator | RMBS role |
|---|---|
| [[policy-finance/japan-housing-finance-agency|JHF]] | Verify JHF issuance and purchased-loan mechanism in current JHF documents |
| Megabanks | Check the named institution's role as originator, seller, servicer, issuer, arranger, or investor for the selected period |
| Regional banks | Check the named institution and transaction; do not infer issuance from institution type |
| Trust banks | Distinguish originator, trustee, servicer, custodian, and arranger roles in the named transaction |
| Non-bank housing-loan originators | Measure named originators and volumes from the selected data; do not assume relative scale |

### CMBS originator landscape

| Originator | CMBS role |
|---|---|
| Megabank corporate-real-estate-finance desks | Verify lender/originator/seller roles from the named deal |
| Trust-bank real-estate-finance arms | Verify whether lending, trust, arrangement, or another role was performed and by which legal entity |
| Foreign-bank Japan-branch real-estate-finance desks | Verify the named branch, period, transaction, and distribution; do not infer a retreat cycle |
| Megabank securities subsidiaries | Verify arranger, underwriter, placement, or dealer roles from the offering documents |

### Arranger / dealer franchise

The following linked firms are research routes, not a league table or evidence of concentration.

| Dealer | Franchise reading |
|---|---|
| [[securities-firms/mufg-morgan-stanley-securities|Mitsubishi UFJ Morgan Stanley Securities]] | Cite a named offering before assigning a role; group affiliation with [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] does not prove transaction linkage |
| [[securities-firms/smbc-nikko-securities|SMBC Nikko Securities]] | Cite a named offering before assigning a role; do not infer a role from a link to [[trust-banks/sumitomo-mitsui-trust|SMTB]] |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | Cite a named offering before assigning a role; group affiliation with [[trust-banks/mizuho-trust-bank|Mizuho Trust]] does not prove transaction linkage |

### Trust-bank trusteeship economics

Do not infer a trust structure, asset transfer, fee pool, or institution ranking from the labels CMBS/RMBS. Trace legal title, entrusted assets, beneficial interests, issuer, trustee duties, cash accounts, fees, and transfer mechanics in the named documents. [[trust-banks/master-trust-bank|MTBJ]], [[trust-banks/custody-bank|CBJ]], and [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] are contextual routes, not evidence about a transaction.

## 5. Rating-agency landscape

| Rating agency | JP CMBS / RMBS role |
|---|---|
| [[JapanFG/sp-global-ratings-japan|S&P Global Ratings Japan]] | Verify engagement, scale, criteria version, class, and rating date from a named report; cross-border targeting does not make this agency mandatory |
| [[JapanFG/moodys-japan|Moody's Japan]] | Verify engagement, scale, criteria version, class, and rating date from a named report |
| Fitch Japan | Verify any engagement from a named public report; absence from this page's source set is not evidence of minor coverage |

### Domestic-scale vs global-scale

| Aspect | Domestic-scale rating | Global-scale rating |
|---|---|---|
| Reference universe | JP issuer / instrument universe | Global issuer / instrument universe |
| Sovereign relationship | Read the agency's current scale definitions and sovereign/rating constraints | Read the agency's current global-scale definitions and sovereign criteria |
| Use | Verify the investor mandate, regulation, policy, and instrument; do not infer use from rating scale | Verify the investor mandate, regulation, policy, and instrument |
| Coverage on JP CMBS / RMBS | Count named ratings for a defined period before describing coverage | Count named ratings for the same period and perimeter |

### RMBS investor base

| Investor type | Demand reading |
|---|---|
| Life insurers | Establish holdings or allocations from named, dated disclosures; [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] is context only |
| Megabanks (own-account) | Establish holdings, mandate, and regulatory treatment from named disclosures |
| Regional banks | Establish holdings and purpose from named disclosures |
| Asset managers | Establish the fund, mandate, holdings date, and instrument from named disclosures |

### CMBS investor base

| Investor type | Demand reading |
|---|---|
| Life insurers | Establish participation, class, amount, and date from named disclosures |
| Regional banks | Establish participation, class, amount, and date from named disclosures |
| Asset managers | Establish the fund, mandate, class, amount, and date from named disclosures |
| Foreign investors | Establish jurisdiction, class, distribution route, and date; do not infer participation from a global-scale rating |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[JapanFG/sp-global-ratings-japan]]
- [[JapanFG/moodys-japan]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- ARES (Association for Real Estate Securitization): Japan real-estate securitization market summary statistics.
- JPX: securitized-product disclosure surface.
- JSDA (日本証券業協会) 証券化市場の動向調査: per-year securitization issuance by underlying asset type — https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html
- Japan Housing Finance Agency: institutional and Monthly Pass-Through MBS disclosures — https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html; English MBS FAQ (Q1/Q4/Q5/Q8/Q10) — https://www.jhf.go.jp/english/mbs_faq.html.
- JCR (Japan Credit Rating Agency): structured-finance rating criteria and rating actions.
- R&I (Rating and Investment Information): structured-finance rating criteria.
- S&P Global Ratings: cross-border structured-finance criteria.
- Moody's: cross-border structured-finance criteria.
- BoJ: aggregate financial-flow statistics relevant to securitization stock.

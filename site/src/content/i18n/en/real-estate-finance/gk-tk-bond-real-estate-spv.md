---
source: real-estate-finance/gk-tk-bond-real-estate-spv
source_hash: 2dbeb40217e242cd
lang: en
status: machine
fidelity: ok
title: "GK-TK bond real-estate SPV"
translated_at: 2026-07-29T00:00:00.000Z
---

# GK-TK bond real-estate SPV

## TL;DR

GK-TK (合同会社 + 匿名組合) is a private-SPV arrangement used in Japanese real-estate transactions. A 合同会社 (GK) is the legal-entity layer, while a 商法-based 匿名組合 (TK) is a contract under which an investor contributes to the operator's business and receives the contractually allocated result without becoming a GK member merely by holding the TK interest. A bond-type variant may add GK-issued 社債; priority, security, transferability, and insolvency outcomes depend on the actual bond, security, intercreditor, and governance documents. Corporate-tax allocation under a TK, foreign-investor withholding/PE/treaty treatment, and bankruptcy remoteness are fact-specific and must not be inferred from the vehicle label. This page is a legal/tax routing aid, not advice.

## Wiki route

This entry sits under [[real-estate-finance/INDEX|real-estate-finance index]] and routes to possible Japanese real-estate SPV structures without ranking their prevalence. [[real-estate-finance/j-reit-market-overview|J-REIT market overview]], [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]], [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]], [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]], and [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] are adjacent routes, not evidence that a bridge uses GK-TK, CMBS uses TMK, or an appraisal input applies. Likewise, [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]], [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]], [[banking/master-trust-bank-operating-model|master trust bank operating model]], [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]], [[policy-finance/japan-housing-finance-agency|JHF]], [[policy-finance/INDEX|policy-finance index]], and [[finance/INDEX|finance index]] are contextual only; verify the actual trustee, investor, and vehicle chain from the transaction documents.

### Two layers, one vehicle

| Layer | Form | Function |
|---|---|---|
| GK (合同会社) | Japanese LLC under 会社法 | Legal entity that holds the asset; bears the contracts; has the bank account; can issue 社債 (bonds) |
| TK (匿名組合) | Silent partnership under 商法 | Contractual capital-provision structure; TK investor provides capital to GK and receives profit-distribution rights, without becoming a GK member |

Table source note: The GK row is grounded in the Companies Act and the TK row in Commercial Code Articles 535 onward. The table states legal forms only; it does not establish tax, regulatory, or insolvency outcomes for a deal. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086 and https://elaws.e-gov.go.jp/document?lawid=132AC0000000048.]

The GK-TK combination produces a vehicle that:

1. has a legal entity (the GK) capable of holding 信託受益権, owning bank accounts, signing contracts, and issuing 社債;
2. has investors (TK investors) who are not legally members of the GK and are not on the public register;
3. allocates TK profit or loss under the contract, with the operator's and investor's tax calculations governed by applicable law and NTA guidance; and
4. can include separateness, limited-purpose, security, and governance covenants, but “bankruptcy remote” is a structuring objective rather than an automatic consequence of using a GK or TK.

### Why GK and not KK or LLP

Table source note: This is a legal-form comparison, not a universal cost or suitability ranking. Verify the Companies Act and the separate LLP/LPS statutes before selecting a vehicle. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=417AC0000000040, and https://elaws.e-gov.go.jp/document?lawid=410AC0000000090.]

| Form | Why not for this use case |
|---|---|
| 株式会社 (KK) | Has a different statutory governance and equity framework; suitability and cost are transaction-specific, and a shareholder register is not by itself a general public beneficial-owner register |
| 合資会社 / 合名会社 | At least one member bears unlimited liability under the applicable company form, which may not match a limited-purpose SPV design |
| 有限責任事業組合 (LLP) / 投資事業有限責任組合 (LPS) | Separate statutory partnership regimes with different formation, business, governance, and investor rules; neither is interchangeable with a GK merely because all can be used in investment structures |
| 合同会社 (GK) | Companies Act company form with limited-liability members and flexible internal governance; whether it suits an SPV depends on the full legal, tax, regulatory, and financing design |

### The 信託受益権 layer

A transaction may place real estate in trust and have the GK hold the beneficial interest, or may use another permitted holding route. The following diagram is illustrative only:

```
Investors (TK + senior bondholders + mezzanine if any)
              │
              │  capital
              ▼
       GK (合同会社) ────── issues 社債 ──── senior bondholders
              │
              │  beneficiary of trust
              ▼
       Trust bank (信託受託者)
              │
              │  legal title
              ▼
       Underlying real estate
```

Reasons for the 信託受益権 layer:

1. **Transfer mechanics** — a beneficial interest follows the trust documents and applicable perfection/notification rules rather than direct-title conveyancing; requirements remain transaction-specific.
2. **Tax and cost analysis** — registration, acquisition, stamp, and other taxes/costs differ by asset and transfer form and require current specialist calculation.
3. **Asset segregation objective** — legal title at the trustee and the trust terms can support segregation, but do not justify an automatic insolvency conclusion.
4. **Operating allocation** — trust documents can allocate collection, payment, and reporting roles; the actual service scope is deal-specific.

The appointed trustee must be verified from the transaction documents. The linked trust-bank pages describe possible market participants and operating roles; this page does not infer appointment, exclusion, or market rank from a bank category.

### Structure

The bond-type GK-TK (社債型 GK-TK) adds a senior 社債 layer issued by the GK itself. Capital stack:

Table source note: This is an illustrative capital-stack ordering, not a legal conclusion for every GK-TK. Actual ranking, security, transfer restrictions, enforcement, and loss allocation come from the bond/loan/TK/security/intercreditor documents; all claims remain against or through the same transaction structure. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086 and https://elaws.e-gov.go.jp/document?lawid=132AC0000000048.]

| Layer | Form | Position |
|---|---|---|
| Senior bond | 社債 issued by GK | Intended senior position; secured only if security is validly granted and perfected under the documents |
| Mezzanine | 社債 (subordinated) or subordinated loan | Illustrative contractual ordering below senior and above TK; actual priority follows the documents |
| TK equity | 匿名組合出資 | Illustrative contractual first-loss position; actual allocation follows the TK and transaction documents |

The senior/mezzanine/TK labels describe an intended economic waterfall only. They do not make a bond claim “bankruptcy remote” from the issuer or establish priority without the operative documents.

### Why the bond layer

1. **Documented claim form** — a bond can specify principal, coupon, maturity, covenants, and transfer terms.
2. **Investor analysis** — regulatory capital, accounting, mandate eligibility, and internal credit treatment are investor- and instrument-specific.
3. **Settlement** — book-entry settlement is available only where the instrument and participants meet the applicable statutory and JASDEC requirements.
4. **Ratings** — a bond may be rated if an issuer obtains a rating; neither a rating nor multiple ratings is inherent in the structure.

### How it differs from CMBS

| Aspect | GK-TK 社債型 | Single-borrower CMBS |
|---|---|---|
| Issuing vehicle | Confirm the GK and its authority in the named documents | Confirm the issuer, trust, or SPV in the named documents |
| Format | Confirm the actual 社債 terms and any other claims | Confirm the actual note, certificate, beneficial interest, or other format |
| Tranching | Record only the actual bond, loan, and TK ranking | Record only the actual classes and waterfall |
| Public rating | Deal-specific; not inherent | Deal-specific; not inherent |
| Distribution | Confirm public/private route, investors, transfer restrictions, and FIEA treatment | Confirm public/private route, investors, transfer restrictions, and FIEA treatment |
| Use case | Describe the actual asset, financing, and claims | Describe the actual loan/asset securitization and claims |

This table is an analytical comparison, not a claim that either route is universally preferred. Selection depends on the asset, claim being financed, disclosure route, investors, tax analysis, and transaction documents; layered structures are possible but require deal-specific review.

### TK distribution as deductible expense

For a corporate operator, NTA Corporate Tax Basic Circular 14-1-3 addresses the operator's and a corporate TK investor's allocation of contractual profit or loss. That guidance is not a checklist guaranteeing “pass-through” treatment for every payment, investor, or transaction. Classification, timing, withholding, anti-avoidance, and cross-border consequences require fact-specific analysis. ^[Source: https://www.nta.go.jp/law/tsutatsu/kihon/hojin/14/14_01_01.htm.]

Table source note: The rows translate the Commercial Code contract and NTA allocation guidance into diligence questions; they are not statutory safe-harbour conditions. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=132AC0000000048 and https://www.nta.go.jp/law/tsutatsu/kihon/hojin/14/14_01_01.htm.]

| Condition (headline) | Reading |
|---|---|
| Commercial Code contract | Confirm that the arrangement is a TK under Commercial Code Article 535 onward |
| Contractual allocation | Confirm the profit/loss amount and timing under the operative TK contract and applicable tax guidance |
| Investor/operator status | Analyse the operator and investor separately, including whether an investor participates in important business decisions |
| Payment character and cross-border rules | Distinguish profit allocation, return of contribution, fixed-return financing, withholding, PE, treaty, and anti-avoidance questions |

The table is a diligence route, not a safe harbour. NTA guidance for individuals, for example, generally classifies TK profit distributions as miscellaneous income but changes the analysis where the investor is jointly operating the business; a fixed return may instead be lending income. Investor taxation can arise in Japan and elsewhere. ^[Source: https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/05/16.htm.]

### Foreign-LP treatment

For a foreign-LP TK investor, the public-source position is:

| Aspect | Reading |
|---|---|
| Japan-source income | Determine the character and Japan-source status of the actual payment or income under domestic law; do not assume a TK distribution automatically retains the character of the underlying real estate |
| Treaty access | Test entity transparency or classification, residence, beneficial ownership, limitation-on-benefits or other entitlement conditions, the applicable income article and rate, and required procedure under the exact treaty/MLI and Japanese law |
| Offshore-feeder structure | A foreign investor may use a feeder, but entity classification, beneficial ownership, treaty eligibility, and Japanese filing/withholding consequences vary |
| Permanent establishment | PE status cannot be inferred from TK or feeder form alone; personnel, agency, decision-making, management activity, domestic law, and the applicable treaty must be analysed |

Table source note: The rows are issue-spotting questions, not conclusions that a foreign LP is treaty-eligible or lacks a Japan PE. Use the current treaty text and NTA procedure, and obtain structure-specific advice. ^[Sources: https://www.mof.go.jp/english/policy/tax_policy/tax_conventions/tax_convetion_list_en.html and https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2888.htm.]

Foreign investors may use GK-TK and feeder arrangements, but prevalence, tax residence, beneficial ownership, PE, and after-tax outcomes cannot be generalized.

### Domestic-LP treatment

For an individual TK investor, NTA guidance generally treats a profit distribution as miscellaneous income, subject to exceptions and recharacterisation based on facts such as joint operation or a fixed return. Corporate investors follow the applicable corporate-tax allocation rules. Do not infer that underlying real-estate income automatically retains its character at the investor level. ^[Sources: https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/05/16.htm and https://www.nta.go.jp/law/tsutatsu/kihon/hojin/14/14_01_01.htm.]

## 4. GK-TK vs TMK

GK-TK and TMK (特定目的会社 under 資産流動化法) are two possible routes among other company, trust, investment-corporation, and contractual structures; this page does not rank them as the two main alternatives.

Table source note: This is a statutory-route comparison, not a cost, speed, tax, or “friendliness” ranking. Consult the Companies Act, Commercial Code, Asset Liquidation Act, FIEA, and current tax rules for the actual transaction. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=132AC0000000048, https://elaws.e-gov.go.jp/document?lawid=410AC0000000105, and https://elaws.e-gov.go.jp/document?lawid=323AC0000000025.]

| Aspect | GK-TK | TMK |
|---|---|---|
| Statute | 会社法 (GK) + 商法 (TK) | 資産流動化法 (TMK) |
| Formation / procedure | Companies Act incorporation plus transaction contracts and any required regulatory filings | Asset Liquidation Act entity and asset-liquidation-plan procedures; required notices/registrations depend on the transaction |
| Disclosure | Company-register and any applicable FIEA/contractual disclosure; TK status alone does not eliminate other duties | Statutory plan and transaction disclosures under the Asset Liquidation Act/FIEA as applicable |
| Tax | Operator/investor allocation and deductions depend on the contract, taxpayer, and tax rules | Distribution deduction depends on satisfying all applicable conduit requirements |
| Insolvency design | Separateness, security, covenants, and governance are contractual/structural; no automatic immunity | Statutory restrictions and the asset plan supplement transaction protections but do not guarantee an insolvency outcome |
| Bond issuance | GK can issue 社債 | TMK can issue 特定社債 (specified bonds) |
| Equity layer | TK contributions under the operative contract | Distinguish 特定出資 from 優先出資 and any other permitted financing under the Asset Liquidation Act and plan; do not collapse them into “preferred / common” |
| Illustrative use | Private asset-holding and financing structures | Asset-liquidation/securitisation structures using the statutory TMK regime |
| Cross-border suitability | Fact-specific: investor status, regulation, PE, withholding, treaty, and documents | Fact-specific under the same categories plus TMK statutory requirements |
| Listing capability | Cannot be a J-REIT vehicle | TMK is not the J-REIT vehicle either; J-REIT uses 投資法人 under 投信法 |

### Cross-vehicle map

Table source note: The rows are an illustrative routing map, not exclusive or “typical” legal conclusions. The investment-corporation, GK/TK, and TMK routes arise under different statutes, and a transaction may use more than one entity or trust layer. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=326AC0000000198, https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=132AC0000000048, and https://elaws.e-gov.go.jp/document?lawid=410AC0000000105.]

| Use case | Possible vehicle route |
|---|---|
| [[real-estate-finance/j-reit-market-overview|Listed J-REIT]] | 投資法人 (under 投信法), not GK-TK or TMK |
| Private REIT | 投資法人 (under 投信法) — open-end / private-placement variant |
| Bridge fund / warehouse | GK-TK is one possible private-SPV route; actual vehicle is deal-specific |
| Single-asset acquisition vehicle | GK-TK, TMK, direct company, or trust layers may be considered |
| CMBS issuance | TMK or trust/SPV routes may be considered; asset and issuance structure control |
| Cross-border private investment | GK-TK with or without a feeder is one possible route; tax/regulatory suitability is investor-specific |

### Disclosure footprint

Table source note: The table distinguishes Companies Act registration, Commercial Code TK status, FIEA securities disclosure, and tax filing. None should be substituted for a transaction-level beneficial-ownership or disclosure review. ^[Sources: https://elaws.e-gov.go.jp/document?lawid=417AC0000000086, https://elaws.e-gov.go.jp/document?lawid=132AC0000000048, and https://elaws.e-gov.go.jp/document?lawid=323AC0000000025.]

| Disclosure surface | GK-TK presence |
|---|---|
| Public register of the GK | Companies Act registration items apply, including prescribed executive/representative-member information as applicable; consult the current registry rather than inferring beneficial ownership |
| TK investor names | TK status alone does not make the investor a GK member or a corporate-register item; other laws, filings, contracts, or disclosure duties may still apply |
| 社債 (if 社債型) | Issuance documents apply; FIEA public-offering disclosure and book-entry/JASDEC treatment depend on the actual offering and instrument |
| Real-estate ownership | If a trust is used, verify the named trustee, trust notation, beneficiary, and registry; otherwise trace the actual title route |
| Tenant lease arrangements | Verify the actual landlord, tenant, master lease, property manager, disclosure duties, and privacy limits; do not assume the trustee contracts directly |
| Financial statements | A GK prepares Companies Act financial statements and separately files applicable tax returns; tax returns are not public merely because filed, while securities disclosure depends on the offering/issuer facts |

Public visibility must be assessed from the actual registry, trust notation, GK register, securities disclosure, large-holding/beneficial-owner rules, contracts, and other applicable filings. A trust title plus TK status does not support a market-wide conclusion.

### Accounting treatment

For a TK investor, classify and account for the interest under the reporting entity's applicable standard, facts, rights, and policy.

Table source note: The table is an accounting-verification route, not a universal classification, income label, or impairment model. Apply the current ASBJ/IFRS requirements to the contract and reporting entity. ^[Sources: https://www.asb-j.jp/en/ and https://www.ifrs.org/issued-standards/list-of-standards/.]

| Aspect | Reading |
|---|---|
| TK investment classification | Determine the asset, instrument, partnership/contract, consolidation, and measurement classification from rights and applicable standards |
| Income recognition | Determine recognition, presentation, allocation, and timing from the contract and applicable accounting policy; a cash distribution does not settle the label |
| Impairment | Identify the applicable impairment or loss-recognition model only after classification and measurement are established |

For any entity alleged to sponsor, establish, manage, or control the GK:

Table source note: This is a control-assessment route, not a conclusion that every GK is or is not consolidated. Under IFRS, use IFRS 10 and the reporting entity's facts; for Japan GAAP, use the current ASBJ standards and implementation guidance. ^[Source: https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/.]

| Aspect | Reading |
|---|---|
| GK as subsidiary | No conclusion from legal form alone; apply the reporting entity's current consolidation standard to rights, power, and economics |
| Structured-entity / control analysis | Under IFRS 10, assess power, exposure or rights to variable returns, and ability to use power to affect returns; Japan-GAAP analysis must use the applicable ASBJ requirements |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[policy-finance/INDEX]]
- [[policy-finance/japan-housing-finance-agency]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/master-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- e-Gov: Companies Act, Commercial Code, Asset Liquidation Act, FIEA, and the separate LLP/LPS statutes.
- National Tax Agency: Corporate Tax Basic Circular 14-1-3, individual-income guidance for TK distributions, and TK-interest valuation guidance.
- Ministry of Finance: current treaty list and treaty texts.
- IFRS Foundation: IFRS 10 control model.

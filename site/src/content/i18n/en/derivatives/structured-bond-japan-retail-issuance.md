---
source: derivatives/structured-bond-japan-retail-issuance
source_hash: e04905f223a735d1
lang: en
status: machine
fidelity: ok
title: "Structured bond Japan retail issuance"
translated_at: 2026-07-29T10:01:40.046Z
---

# Structured bond Japan retail issuance

## TL;DR

“Complex structured bond” (複雑な仕組債) is a JSDA regulatory term for a bond whose interest or redemption uses an OTC derivative or an equivalent economic structure. JSDA identifies EB bonds, equity-index-linked bonds and conditional dual-currency bonds as examples that may fall within the category. FSA monitoring in fiscal 2022 examined sales and management frameworks for structured bonds as part of customer-oriented business conduct. Those public monitoring materials do not, by themselves, establish firm-specific administrative orders, a complete distributor ranking or a universal sales ban.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as the retail-structured-product distribution page, paired with [[derivatives/structured-product-eb-knockin-japan-retail|EB knock-in structured product mechanics]] for the deepest single-name EB analysis. Read it together with [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the credit-derivative ingredient (some structured bonds embed credit-linked tranches), [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the credit-spread building block, [[derivatives/japan-irs-market|Japan IRS market]] for the rates underlay, and [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve interaction with FX-linked products.

Cross-reference [[finance/INDEX|finance index]] for the broader capital-markets context, [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for the institutional equity-linked counterpart, [[banking/INDEX|banking index]] for the megabank distribution context, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the institutional foreign-currency / structured-asset use, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer-side hedging plumbing.

### Core structured-bond categories

The following table is limited to examples named in JSDA's definition or linked investor guidance. It is not an exhaustive market taxonomy, and each issue's prospectus controls its exact payoff. ^[Sources: https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html; https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html; https://www.jsda.or.jp/about/hatten/risk/eb/index.html; https://www.jsda.or.jp/about/hatten/risk/prdc/index.html.]

| Product form | Japanese term | Issue-specific field to verify |
|---|---|---|
| EB | EB債 / 他社株転換可能債券 | Conditions for cash or share redemption, including any knock-in clause. |
| Equity-index-linked bond | 株価指数連動債 | How the stated index affects coupon, early redemption and final redemption. |
| Conditional dual-currency bond | 条件付デュアルカレンシー債 | Purchase, coupon and redemption currencies and the contractual conversion condition. |
| Power reverse dual-currency bond | パワー・リバース・デュアルカレンシー債 | FX-linked coupon formula, redemption amount and any issuer call or trigger clause. |

Labels such as autocallable, reverse convertible, credit-linked, range-accrual and digital describe possible features or market conventions, but the cited pages do not establish them as an exhaustive JSDA category list. The cited sources also do not provide a complete product-level issuance ranking for 2018-2022, so no dominant-volume claim is made here.

### Structure variations

The following table lists fields to read in the prospectus. Former “typical” barrier, tenor and basket ranges have been removed because they vary by issue and were not supported by an issuance dataset. ^[Source: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html.]

| Feature | Issue-specific question |
|---|---|
| Underlying | Single security, index, currency, rate, credit or basket as defined in the prospectus. |
| Basket rule | Determine whether the payoff uses worst-of, average or another aggregation rule. |
| Autocall | Read the observation dates, threshold and redemption amount. |
| Knock-in | Read the barrier level, observation convention and resulting redemption formula. |
| Coupon | Determine whether fixed, conditional, digital or range-linked. |
| Maturity | Read contractual maturity and any early-redemption provisions. |
| Currency | Identify issue, coupon and redemption currencies and any conversion option. |
| Callability | Identify who holds the call and on which dates it may be exercised. |

### Issuer set

The JSDA investor page distinguishes issuer, arranger, distributor and swap-house functions. The following table is a role map, not a league table or claim about which institutions “dominate” origination. ^[Source: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html.]

| Participant | Evidence-bounded role |
|---|---|
| Issuer | Owes the bond payments; its credit risk and the precise legal entity must be checked in the prospectus. |
| Arranger | Coordinates the terms with the issuer and other parties; JSDA notes that the arranger may also distribute the bond. |
| Distributor | Offers or sells the security under the applicable licence and conduct rules. |
| Swap house / hedge counterparty | May enter a cover transaction with the issuer; exposure depends on the documented structure. |

### Distribution channel

The following table gives public verification routes rather than unsupported firm-level sales rankings. ^[Sources: https://disclosure2.edinet-fsa.go.jp/; https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.pdf; https://www.jsda.or.jp/kyoukaiin/kyoukaiin/kaiin/index.html.]

| Evidence source | What to verify |
|---|---|
| Prospectus / securities registration statement | Issuer, offer terms, selling firms, payoff and risk factors for the specific issue. |
| FSA registry | Current regulated entity and licence category. |
| JSDA member information | Membership and relevant self-regulatory framework. |
| Distributor's current product page and pre-contract document | Whether the product is presently offered and to which customer category. |

### Arranger fees

Fees, commissions and the gap between issue price and model value are issue-specific. They should be taken from the prospectus, key information and distributor disclosure; this page does not apply an unsupported 3-10% range.

## Hedging mechanics

The following table describes possible risk-transfer stages in the generic structure shown by JSDA. A specific issuer's hedge is not public unless disclosed, and back-to-back hedging must not be assumed. ^[Source: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html.]

| Position | Evidence-bounded treatment |
|---|---|
| Issuer | JSDA's generic diagram says the issuer conducts a cover transaction with a swap house for hedging purposes. |
| Swap house | Acts as the derivative counterparty in the generic structure; the cited guidance does not reveal its actual trading book. |
| Transaction-specific hedge | Do not infer a back-to-back hedge, hedge ratio or instrument set unless the issuer or counterparty discloses it. |

### Conditional dual-currency bond mechanics

The JSDA definition identifies conditional dual-currency bonds as instruments that may be complex structured bonds. The following table is therefore a document-reading checklist, not a standard payoff template. ^[Sources: https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html; https://disclosure2.edinet-fsa.go.jp/.]

| Feature | Document field to verify |
|---|---|
| Purchase and issue currency | Currency in which the investor pays and the bond is denominated. |
| Coupon | Rate, payment currency and every condition affecting payment. |
| Redemption | Amount, currency and conversion rate or formula. |
| Conversion condition | Market observation, election holder and timing stated in the prospectus. |
| Derivative equivalence | Map the documented cash flows before describing an embedded option. |

Reference and redemption currencies are issue-specific and must be read from the prospectus. A dual-currency deposit is a different legal wrapper and is not classified as a bond merely because its cash flows may look similar.

### Risk

If the contract requires redemption in a currency that has depreciated against the investor's purchase currency, the converted value may fall below the amount invested. The actual loss formula, issuer-credit exposure and liquidity risk depend on the issue terms.

### Distribution

The distribution channel, selling firms and legal wrapper must be verified for the specific issue through its prospectus and current seller documents.

### EB / reverse-convertible payoff comparison

Market labels can overlap. JSDA's EB guidance supports the general possibility of cash or share redemption; it does not establish one universal reverse-convertible template. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/eb/index.html; https://disclosure2.edinet-fsa.go.jp/.]

| Feature | Issue-specific question |
|---|---|
| Legal label | How does the prospectus name and classify the instrument? |
| Coupon | What rate and payment conditions apply? |
| Redemption | What conditions lead to cash payment, share delivery or another formula? |
| Reference | Which security, index or basket and which observation source apply? |
| Option equivalence | Does a cash-flow decomposition support describing the investor as writing a put? |

Do not infer a universal distinction between an EB and a “reverse convertible” from the marketing label alone.

### Background

Under its **Customer First** (顧客本位の業務運営) framework, the FSA monitored sales and management frameworks for risk products, including structured bonds, in fiscal 2022 and published cross-firm themes.

### 2022 FSA findings

The following table summarizes review themes for structured-product governance; it should be read with the full FSA monitoring report and JSDA rules rather than as a finding about every customer or seller. ^[Sources: https://www.fsa.go.jp/news/r4/kokyakuhoni/fdreport/fd_202306.html; https://www.fsa.go.jp/policy/customer_first/index.html; https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html.]

| Monitoring theme | What the report says to examine |
|---|---|
| Product and target-customer review | Many focus firms had expanded sales to low-risk-tolerance asset-building customers without sufficiently testing the target segment, product features or true customer needs. |
| Structuring-cost disclosure | Many focus firms had not disclosed structuring costs even though their customer-oriented policies said all customer-borne costs would be disclosed. |
| Risk-return validation | Firms should test whether product returns are commensurate with risk and review the product after launch. |
| Package and alternative comparison | Customers should be able to compare risk, return and cost with other products and, where applicable, with buying package components separately. |
| Bank-to-securities referral | At some focus firms, low-risk-tolerance bank customers were referred to group securities companies and sold structured bonds, resulting in numerous complaints. |

### Administrative-action boundary

The FSA monitoring report is thematic supervision evidence, not a firm-specific administrative order. The prior table attributing structured-bond business-improvement orders to Nomura Securities, SMBC Nikko and Daiwa Securities has therefore been removed. Any firm-level action must be verified in the FSA administrative-action database and tied to the exact legal entity, date and stated conduct.

### JSDA self-regulation

The following table lists control topics associated with JSDA's complex-product definition and investment-solicitation rules. The exact current rule text, effective date and member obligations must be checked in the JSDA rulebook. ^[Sources: https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html; https://www.jsda.or.jp/shijyo/seido/jishukisei/web-handbook/106_saiken/index.html.]

| Area | Verification question |
|---|---|
| Solicitation-start criteria | Does the product fall within the defined complex-product scope, and what customer criteria apply? |
| Suitability assessment | What knowledge, experience, objectives and financial-capacity checks are required? |
| Disclosure | What payoff, loss, issuer-credit, liquidity and fee information must be provided? |
| Internal records | What evidence of explanation, approval and review must the member retain? |
| Senior-customer controls | What current member rule or internal procedure applies to the customer's circumstances? |

### Volume impact

FSA materials discuss changes in risk-product sales and management frameworks. A precise 2022-to-2023 structured-bond volume change or product substitution claim requires a defined dataset and is not quantified here.

## Cross-jurisdiction comparison boundary

Cross-jurisdiction comparisons require matched product definitions and current primary rules. This page does not rank Japan against the EU, UK, Hong Kong or US, and does not infer sales-volume effects from disclosure regimes alone.

## Institutional structured-bond market

The public sources cited on this page do not establish a current institutional market size, investor hierarchy or “limited regulatory friction” conclusion. Any institutional-market claim should be tied to named offering documents, the transaction's actual investor and offering classifications under current law, and a dated issuance or holdings dataset.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- FSA customer-oriented business conduct: https://www.fsa.go.jp/policy/customer_first/index.html
- FSA fiscal-2022 risk-product sales monitoring: https://www.fsa.go.jp/news/r4/kokyakuhoni/fdreport/fd_202306.html
- JSDA complex structured-bond definition: https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html
- JSDA structured-bond investor guidance: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html
- JSDA EB investor guidance: https://www.jsda.or.jp/about/hatten/risk/eb/index.html
- JSDA PRDC investor guidance: https://www.jsda.or.jp/about/hatten/risk/prdc/index.html
- FSA EDINET filing search: https://disclosure2.edinet-fsa.go.jp/

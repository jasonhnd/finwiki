---
source: derivatives/structured-product-eb-knockin-japan-retail
source_hash: 98ec96169fc04d41
lang: en
status: machine
fidelity: ok
title: "EB knock-in structured product Japan retail"
translated_at: 2026-07-29T10:04:01.722Z
---

# EB knock-in structured product Japan retail

## TL;DR

An EB (他社株転換可能債券) is a complex bond whose redemption may be made in shares of another company rather than cash, depending on the referenced share price and contractual terms. A knock-in clause can make the redemption outcome depend on whether a stated barrier is reached during the specified observation period. Economically, some designs resemble a bond combined with a written contingent put, but the exact coupon, barrier, observation rule, early-redemption feature and loss outcome are issue-specific. JSDA urges investors to review those terms, issuer credit risk and numerical payoff illustrations before purchase; FSA monitoring addresses the seller's customer-oriented product and sales governance.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] as a product-mechanics page for Japan retail structured products. Read it together with [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] for the broader distribution landscape, [[derivatives/japan-cds-market-overview|Japan CDS market overview]] for the credit-derivative context, [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]] for the issuer credit dimension, [[derivatives/japan-irs-market|Japan IRS market]] for the rates underlay used in EB pricing, and [[derivatives/yen-basis-swap-market|yen basis swap market]] for the funding-curve context.

Cross-reference [[finance/INDEX|finance index]] for the wider capital-markets framing, [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] for an issuer-share-linked comparator, [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] for the related single-stock liquidity dynamics, [[banking/INDEX|banking index]] for the megabank distribution context, [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] for the contrast with institutional structured allocations, and [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] for the dealer hedging side.

### Headline mechanics

The following table is a prospectus-reading checklist based on JSDA's EB guidance. It deliberately omits unsupported “typical” coupon, barrier, maturity and basket ranges. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/eb/index.html; https://disclosure2.edinet-fsa.go.jp/.]

| Component | Issue-specific field to verify |
|---|---|
| Legal form and issuer | Issuer, governing law, issue vehicle and issuer-credit risk. |
| Currency | Issue, coupon and redemption currency. |
| Maturity / early redemption | Contractual maturity and every early-redemption observation and condition. |
| Underlying | Referenced share, index or basket and the precise price source. |
| Initial reference price | Definition and fixing date for S₀. |
| Knock-in | Barrier level, observation period, observation convention and consequence. |
| Coupon | Rate and every condition for payment. |
| Redemption | Cash or share-delivery formula, rounding and valuation date. |

### Multi-reference and worst-of variants

The following table is a document-reading checklist. Daiwa's public return-distribution page confirms that its historical knock-in EB population includes both single- and multiple-reference classifications, but the aggregation formula for any issue must come from that issue's documents. ^[Sources: https://www.daiwa.jp/products/bond/st/sheet/; https://disclosure2.edinet-fsa.go.jp/.]

| Feature | Issue-specific question |
|---|---|
| Number of underlyings | Read the prospectus; no generic range is assumed. |
| Aggregation rule | Does the payoff use the worst performer, an average or another stated formula? |
| Dependence | What dependence assumptions, if any, are used in valuation or scenario analysis? |
| Scenario analysis | Calculate the payoff from the stated formula; do not infer ordinary portfolio diversification from the number of references. |

Where an issue uses a worst-of rule, evaluate the weakest-reference path specified by the contract. No claim is made here about how investors generally perceived the feature.

### Autocallable feature

The following table is a hypothetical three-date schedule, not a market convention. The actual observation dates, threshold path, coupon and redemption amount must come from the prospectus. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html; https://disclosure2.edinet-fsa.go.jp/.]

| Illustrative observation | If the contractual condition is met |
|---|---|
| First observation | Apply the stated early-redemption formula. |
| Later observation | Apply any step-down / step-up threshold and stated coupon treatment. |
| Maturity | Apply the final cash or share-delivery formula if not previously redeemed. |

Early redemption terminates the investor's exposure under the contractual formula. Its value to each party depends on the realised path and pricing; it should not be described as a universal benefit.

### Investor position equivalence

```
Long EB knock-in note ≈ Long bond + Short down-and-in put option on underlying
```

The short put option is the source of:

- the enhanced coupon (option premium received);
- the tail-risk exposure (binary loss profile below barrier).

### At-maturity payoff scenarios

The following table is arithmetic for a hypothetical single-name EB with S₀ = 1,000, knock-in barrier = 600, strike = 1,000 and principal = JPY 1,000,000. It illustrates JSDA's warning that share delivery may be worth less than principal; it is not an observed customer trade. Coupon treatment is omitted because it is issue-specific. ^[Source: https://www.jsda.or.jp/about/hatten/risk/eb/index.html.]

| Scenario | Final stock | Outcome |
|---|---|---|
| No contractual share-delivery condition | 850 | Apply the issue's cash-redemption formula. |
| Barrier reached; final price 800 | 800 | If the hypothetical terms require delivery of 1,000 shares, their value is JPY 800,000. |
| Barrier reached; final price 500 | 500 | Under the same hypothetical delivery formula, share value is JPY 500,000. |
| Barrier reached; final price 200 | 200 | Under the same hypothetical delivery formula, share value is JPY 200,000. |

### Knock-in observation wording matters

JSDA explains that a knock-in clause can be triggered when the reference reaches the stated knock-in price during a specified period. The prospectus must define which observations count. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/eb/index.html; https://disclosure2.edinet-fsa.go.jp/.]

| Prospectus wording | Review question |
|---|---|
| Observation period | What start and end times and market calendars apply? |
| Intraday or “at any time” test | Which price source and qualifying observations can trigger? |
| Closing-price test | Which market close and adjustment provisions apply? |
| Specified-date test | Which dates and disruption fallback rules apply? |

Monitoring frequency changes the set of paths that can trigger the clause. Its price and risk effect must be calculated under the issue's full terms.

## Pricing components for the dealer

The following table is a model-review checklist, not a universal price-impact table. A public Daiwa issue document identifies reference levels, expected volatility and yen rates as factors affecting an example structured bond's secondary-market price; all other inputs must be justified from the issue and valuation model. ^[Sources: https://www.daiwa.jp/content/dam/daiwasecurities/products/pdf/bond/200124_2.pdf; https://disclosure2.edinet-fsa.go.jp/.]

| Input | Valuation question |
|---|---|
| Underlying implied volatility | Which surface, date and model are used? |
| Correlation (basket) | How is dependence among references calibrated? |
| Dividend yield and corporate actions | How are dividends, splits and adjustments treated? |
| Borrow cost and liquidity | What hedge assumptions enter the model? |
| Issuer credit spread | How is the issuer's unsecured credit risk reflected? |
| Yield curve | Which discount and funding curves are used? |
| Barrier and observation rule | How do path dependence and monitoring affect value? |
| Autocall threshold | How does early redemption alter expected cash flows? |
| Maturity | How does tenor affect both bond and embedded-option values? |

### Dealer fee load

Price, model value, arranger economics and distributor compensation are issue-specific. The cited sources do not support a universal 3-10% fee range, so it has been removed; use the issue and distributor documents.

### Hedging

The following table separates what public sources support from what still requires transaction evidence. JSDA's generic structure shows an issuer cover transaction; SMBC Nikko's public investigation report describes reference-share trading used to hedge price risk from EB embedded puts. Neither source establishes another dealer's actual positions or a universal back-to-back arrangement. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html; https://www.smbcnikko.co.jp/news/release/2022/pdf/220624_02.pdf.]

| Risk or stage | Evidence boundary |
|---|---|
| Issuer cover transaction | JSDA's generic diagram supports the existence of a cover transaction with a swap house. |
| Reference-share hedge | The cited SMBC Nikko report supports reference-share trading as one EB put-risk hedge example, including activity near knock-in or exercise levels. |
| Other option, correlation, rate or credit hedges | Require transaction, mandate or risk disclosure; no instrument set or hedge ratio is inferred here. |
| Residual risk | Require public position or risk evidence before asserting that risk was offset or retained. |

No stock-specific hedge-flow conclusion is drawn without named issuance and position evidence.

## Historical review windows

The following table defines windows that could be studied with issue-level prospectuses, reference prices and complaint or monitoring data. It does not assert widespread knock-ins, customer loss totals or causation, none of which is established by the cited aggregate sources. ^[Sources: https://www.fsa.go.jp/news/r4/kokyakuhoni/fdreport/fd_202306.html; https://www.jsda.or.jp/about/hatten/risk/eb/index.html.]

| Review window | Required evidence |
|---|---|
| 2018-2019 equity volatility | Identify specific outstanding issues, barriers, observation rules and price paths. |
| March 2020 market shock | Match each issue to dated underlying prices before classifying a knock-in. |
| 2020-2021 issuer-specific moves | Avoid extrapolating from a share-price move to note-holder outcomes. |
| 2022 equity sell-off | Quantify only from a defined issuance sample and its contractual terms. |

### Monitoring and administrative-action boundary

Under its customer-oriented business-conduct framework, the FSA monitored structured-bond product and sales governance during fiscal 2022 and published cross-firm themes. That thematic report is not a firm-specific administrative order. The prior table attributing EB-related business-improvement orders to Nomura Securities, SMBC Nikko and Daiwa Securities has been removed. Any action must be verified against the FSA / SESC record for the exact entity, date, conduct and legal basis.

### Distributor-response boundary

Firm responses must be verified from dated firm disclosures. The aggregate sources used here do not establish a complete list of suspensions, customer thresholds, exits or product-mix shifts.

### Volume impact

No 80% firm-level or industry-wide contraction figure is asserted without a defined issuance dataset.

### Suitability assessment

The following table is a review checklist derived from customer-oriented conduct and complex-product risk themes, not a verbatim universal rule or a fixed age / percentage threshold. ^[Sources: https://www.fsa.go.jp/policy/customer_first/index.html; https://www.fsa.go.jp/news/r4/kokyakuhoni/fdreport/fd_202306.html; https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html.]

| Review area | Evidence to retain |
|---|---|
| Knowledge / experience | Assessment of whether the customer understands the actual payoff and loss mechanics. |
| Risk and objective match | Link the product's loss, liquidity and issuer-credit risks to the customer's objectives and capacity. |
| Customer circumstances | Apply current law, JSDA rules and the firm's documented procedures; no generic age threshold is stated here. |
| Concentration | Review aggregate exposure under the firm's current policy; no universal percentage is inferred. |
| Repeat purchase | Review cumulative exposure, product turnover and the customer's stated purpose. |

### Disclosure requirements

The following table identifies information to verify against the current rule and issue documents; it does not assert a universal cooling-off right or fee template. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/eb/index.html; https://www.jsda.or.jp/shijyo/seido/jishukisei/web-handbook/106_saiken/index.html.]

| Item | Verification focus |
|---|---|
| Costs and compensation | Identify the disclosures required for the issue and sales channel. |
| Loss scenarios | Show how stated terms operate under relevant adverse scenarios. |
| Knock-in mechanics | Explain barrier, observation type and delivery mechanism. |
| Basket rule | Explain how the weakest reference affects the payoff. |
| Alternatives | Document any comparison required by the applicable conduct framework. |
| Cancellation | Check the actual legal and contractual cancellation rights; none is assumed here. |

### Sales process

The following table is a control checklist, not a statement that every sale legally requires recording or written confirmation. ^[Sources: https://www.fsa.go.jp/policy/customer_first/index.html; https://www.jsda.or.jp/shijyo/seido/jishukisei/web-handbook/106_saiken/index.html.]

| Step | Evidence question |
|---|---|
| Communication record | What record is required by current rules and firm policy? |
| Customer confirmation | What acknowledgement, if any, is required for this product and channel? |
| Review | What escalation or second-line review applies? |
| Documentation | What suitability and explanation evidence must be retained? |

## Comparison with convertible bonds

The comparison table is a high-level payoff map, not a buyer, suitability or disclosure classification. JSDA's EB guidance supports the EB redemption-risk side; Daiwa's CB page confirms that a convertible holder may choose whether to convert under the issue terms. Exact terms come from the respective prospectuses. ^[Sources: https://www.jsda.or.jp/about/hatten/risk/eb/index.html; https://www.daiwa.jp/products/bond/cb/; https://disclosure2.edinet-fsa.go.jp/.]

| Dimension | Knock-in EB example | Convertible-bond example |
|---|---|---|
| Distribution example | May be offered through a retail brokerage, subject to suitability and product rules | May be offered through institutional or public securities channels, depending on the issue |
| Conduct framework | Depends on customer and offering classification | Depends on customer and offering classification |
| Embedded derivative shorthand | Some designs can be decomposed as a bond plus a written contingent put | Conversion right can be analysed as an equity option held by the investor |
| Direction of equity exposure | Contractual downside through the stated cash/share redemption formula | Potential upside through the stated conversion right |
| Tail risk | Share-delivery value can fall materially below principal, plus issuer credit risk | Bond value can fall and issuer default can impair recovery; conversion terms add equity sensitivity |
| Disclosure source | Prospectus, pre-contract document and current conduct rules | Prospectus / offering document and current securities rules |

As a payoff shorthand, some knock-in EB designs exchange coupon for contingent equity downside, while a convertible can give its holder an equity-linked conversion right. The prospectus controls both instruments, and neither shorthand removes issuer-credit, liquidity or valuation risk.

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
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

- JSDA EB investor guidance: https://www.jsda.or.jp/about/hatten/risk/eb/index.html
- JSDA structured-bond investor guidance: https://www.jsda.or.jp/about/hatten/risk/shikumisai/index.html
- JSDA complex structured-bond definition: https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0248.html
- FSA customer-oriented business conduct: https://www.fsa.go.jp/policy/customer_first/index.html
- FSA fiscal-2022 risk-product sales monitoring: https://www.fsa.go.jp/news/r4/kokyakuhoni/fdreport/fd_202306.html
- FSA EDINET filing search: https://disclosure2.edinet-fsa.go.jp/
- Daiwa historical structured-bond return classifications: https://www.daiwa.jp/products/bond/st/sheet/
- Daiwa convertible-bond product explanation: https://www.daiwa.jp/products/bond/cb/
- SMBC Nikko public investigation report (EB hedge description): https://www.smbcnikko.co.jp/news/release/2022/pdf/220624_02.pdf

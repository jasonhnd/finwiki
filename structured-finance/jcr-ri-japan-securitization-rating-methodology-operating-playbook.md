---
title: "JCR / R&I Japan securitization rating methodology operating playbook"
aliases:
  - "JCR R&I securitization methodology playbook"
  - "JCR rating playbook"
  - "R&I rating playbook"
  - "JCR R&I SDR calculation"
  - "JCR R&I cash-flow modeling"
  - "JCR R&I surveillance frequency"
  - "JCR R&I downgrade triggers"
  - "structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [structured-finance, rating-agency, jcr, ri, methodology, cash-flow-model, surveillance, japan]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf"
  - "https://www.jcr.co.jp/en/rrinfo/meth_sf/"
  - "https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf"
  - "https://jcr.co.jp/en/ratinglist/sf_sf/"
---

# JCR / R&I Japan securitization rating methodology operating playbook

## TL;DR

There is no public basis for a single JCR/R&I “operating playbook” with fixed base-default ranges, 4–6× stress multipliers, 1–2-notch downgrade rules, staff counts, action counts or universal monthly / quarterly surveillance cycles. Treat each agency separately. For a named transaction, record the registered legal entity, the criteria version cited by the rating action, pool and legal assumptions, the actual waterfall, and the dated rating / surveillance report. When a public R&I document is unavailable, defer the R&I conclusion rather than copying JCR assumptions across agencies.

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as an evidence-control page. Pair it with [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] and [[structured-finance/fitch-moody-sp-japan-criteria|global-agency comparison]]. Asset-class pages must cite their own named methodology and transaction evidence.

## 1. Agency identity

[FSA's current register](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf) supports the following identity controls.

| Control | JCR | R&I |
|---|---|---|
| Legal entity | Use the legal name and registration entry shown by FSA | Use the legal name and registration entry shown by FSA |
| Registration status | Verify at the review date | Verify at the review date |
| Ownership | Require a current shareholder disclosure | Require a current shareholder disclosure |
| Staffing and annual actions | Do not estimate | Do not estimate |
| Methodology | Use JCR's applicable published document | Use the applicable public R&I document; otherwise defer |

Registration does not establish market dominance, foreign recognition or methodological equivalence.

## 2. Criteria selection

[JCR's structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/) is the control surface for the following criteria-selection table.

| Step | Required evidence |
|---|---|
| Identify asset class | Named transaction and collateral definition |
| Select criteria | Exact methodology title and revision / effective date |
| Confirm hierarchy | General methodology plus every asset-class or legal supplement cited |
| Confirm transition | Agency notice showing whether old or new criteria govern the rating |
| Preserve exclusions | Scope limitations and transaction-specific departures stated in the report |

An asset-class label alone does not prove which criteria version was applied.

## 3. Assumption record

[JCR's general structured-finance methodology](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf) supports a qualitative review framework, not the uncited numerical ranges previously shown.

| Assumption category | Record from the named report |
|---|---|
| Pool performance | Definition, observation period, exclusions and base case |
| Defaults / losses | Frequency, severity, timing and rating stress, if disclosed |
| Recoveries | Rate, timing, costs and collateral segmentation, if disclosed |
| Prepayment | Scenario and source data, if disclosed |
| Counterparties | Dependency, replacement trigger and remedial mechanics |
| Legal risk | Transfer, perfection, commingling, set-off and segregation analysis |

Do not back-solve an agency stress multiplier or enhancement target from an invented “typical” deal.

## 4. Cash-flow modeling

[JCR's general methodology](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf) supports the following transaction-model evidence checklist.

| Modeling input | Required transaction evidence |
|---|---|
| Collections | Contractual principal / interest schedule and servicing assumptions |
| Default and recovery | Timing curves and loss assumptions disclosed by the agency |
| Prepayment | Named scenarios, not an asset-class stereotype |
| Interest and currency | Actual asset / liability terms and hedge documents |
| Fees and accounts | Contractual priority and amounts |
| Triggers | Exact definitions and resulting waterfall changes |
| Tranche payment | Legal payment priority for the named class |

Model outcomes and rating tolerances must come from the agency report; this page does not state a universal “zero shortfall” rule.

## 5. Surveillance

[JCR's public structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/) is the starting point for dated rating actions.

| Surveillance claim | Evidence required |
|---|---|
| Review frequency | Agency policy or named transaction report |
| Servicer reporting | Transaction servicing agreement / report |
| Performance status | Dated trustee, servicer or agency surveillance disclosure |
| Watch / outlook | Dated agency action |
| Rating change | Dated action and published rationale |

Do not assume monthly reports, quarterly committees, annual reruns or fixed event-review timing across transactions.

## 6. Rating-action analysis

[JCR's rating list](https://jcr.co.jp/en/ratinglist/sf_sf/) supports the following action-comparison controls.

| Question | Safe treatment |
|---|---|
| What changed? | Cite the dated agency rationale |
| Was a trigger breached? | Cite the contractual definition and reported value |
| How many notches? | Record the actual action; do not predict a fixed magnitude |
| Was the action automatic? | Check the criteria and report; never infer from one metric |
| Did another agency differ? | Compare the same tranche and date under its own criteria |

## 7. Reproducible analyst packet

For each transaction, retain:

1. legal issuer, series and class;
2. rating agency legal entity and registration check;
3. rating symbol, date, outlook / watch and action type;
4. cited criteria title and version;
5. collateral cut and performance period;
6. enhancement, waterfall, trigger and hedge terms;
7. public surveillance evidence;
8. explicit gaps where documents are not public.

## 8. Claims removed by this review

- fixed asset-class default ranges and stress multipliers;
- fixed recovery timing, downgrade magnitudes and rating timelines;
- staff and annual-action estimates;
- ownership / affiliation claims without shareholder evidence;
- a blanket Japan-vs-global sovereign ceiling or notch gap;
- universal agency coverage, investor recognition or surveillance cadence.

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[structured-finance/fitch-moody-sp-japan-criteria]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure]]
- [[structured-finance/japan-credit-card-receivable-abs]]
- [[structured-finance/japan-equipment-lease-abs]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]

## Sources

- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, General Methodology for Structured Finance Rating](https://www.jcr.co.jp/en/pdf/dm28/General_Methodology20210802.pdf).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).

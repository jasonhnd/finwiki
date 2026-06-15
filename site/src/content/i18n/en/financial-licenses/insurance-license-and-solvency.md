---
source: financial-licenses/insurance-license-and-solvency
source_hash: 7723f65c094783cb
lang: en
status: machine
fidelity: ok
title: "Japan insurance license and solvency route"
translated_at: 2026-06-15T03:48:21.816Z
---

# Japan insurance license and solvency route

## Overview

Japan insurance regulation separates **risk-bearing insurers** from **distribution intermediaries**. Life insurers, non-life insurers, insurance holding companies, small-amount short-term insurers, insurance agents, and insurance brokers are separate public-regulatory categories. The underwriting entity carries insurance liabilities and solvency supervision; the agent / broker route governs solicitation, mediation, customer explanation, and conduct.

Use this page as the legal-control layer for [[insurance/INDEX|insurance domain]] pages. Read it with [[insurance/economic-value-based-solvency|economic value-based solvency regulation]], [[insurance/esr-economic-value-solvency|ESR]], [[insurance/insurance-agency-and-brokerage-japan|insurance agency and brokerage Japan]], [[insurance/japan-life-insurance-big-four|Japan life insurance big four]], [[insurance/japan-nonlife-big-three|Japan non-life big three]], and insurer entity pages such as [[life-insurers/nippon-life|Nippon Life]], [[life-insurers/dai-ichi-life|Dai-ichi Life]], [[non-life-insurers/tokio-marine|Tokio Marine]], [[non-life-insurers/msad|MS&AD]], and [[non-life-insurers/sompo|Sompo]].

Source hierarchy: FSA license lists identify legal categories; the Insurance Business Act and FSA supervision guideline provide regime language; insurer disclosures provide company-level capital / ESR facts.

## Regime Map

| Layer | Public source of truth | What it answers | Typical page linkage |
|---|---|---|---|
| Life insurer | FSA licensed operator list for life insurance companies | Which legal entity is licensed to underwrite life insurance | [[life-insurers/nippon-life]], [[life-insurers/dai-ichi-life]], [[life-insurers/meiji-yasuda]], [[life-insurers/sumitomo-life]] |
| Non-life insurer | FSA licensed operator list for non-life insurance companies | Which legal entity is licensed to underwrite property / casualty insurance | [[non-life-insurers/tokio-marine-nichido-fire]], [[non-life-insurers/mitsui-sumitomo-insurance]], [[non-life-insurers/aioi-nissay-dowa-insurance]], [[non-life-insurers/sompo-japan-insurance]] |
| Insurance holding company | FSA insurance holding-company list | Which group is regulated at the holding-company layer | [[life-insurers/dai-ichi-life]], [[non-life-insurers/tokio-marine]], [[non-life-insurers/msad]], [[non-life-insurers/sompo]] |
| Small-amount short-term insurer | FSA registered operator list | Narrower underwriting route for small-ticket, short-term products | Specialty / embedded-insurance adjacency |
| Insurance agent / solicitor | Insurance Business Act / FSA guideline / company disclosures | Who solicits or explains insurance for an insurer | [[insurance/life-insurance-channel-mix]], bank / retailer / direct channels |
| Insurance broker | FSA insurance broker list and FSA guideline | Who mediates insurance contracts as a broker rather than acting as insurer-side agency | [[insurance/insurance-agency-and-brokerage-japan]] |
| Solvency / ESR | FSA economic-value solvency hub plus company disclosure | How insurer capital adequacy is measured and disclosed | [[insurance/economic-value-based-solvency]], [[insurance/esr-economic-value-solvency]] |

## Underwriting And Distribution

In Japan, a bank counter, online broker, retailer, telecom group, payment app, or travel platform may distribute insurance while the insurance risk remains on a licensed insurer's balance sheet.

The risk-bearing insurer has policyholder liabilities, underwriting risk, asset-liability management, claims payment, reserves, solvency-margin / ESR supervision, and product-approval / actuarial controls. A distributor may own the customer touchpoint and brand experience, but the legal contract and capital risk can still sit with another entity.

The same balance-sheet / distribution split also appears in [[banking/japan-baas-operating-models|BaaS operating models]] and in the [[financial-licenses/payment-license-stack|Japan payment license stack]], where the instruction / distribution layer is separated from the regulated balance-sheet holder. Embedded finance and embedded insurance can place the customer interface at a platform while the regulated balance sheet belongs to a bank or insurer. Public product mapping records the contracting entity, premium recipient, claims-bearing entity, license category, and solicitation entity where disclosed.

## Solvency Route

Japan's insurer capital framework now needs two readings:

| Topic | Reading rule |
|---|---|
| Solvency margin | Legacy / statutory capital adequacy vocabulary that still appears in disclosures and regulatory materials. |
| Economic value-based solvency | FSA framework built around economic valuation, policyholder protection, risk management, and disclosure. |
| ESR | Company-level economic solvency ratio disclosed by insurers under their own reporting dates and definitions. |
| Pillar structure | FSA frames the economic-value regime around solvency regulation, internal management / supervisory review, and disclosure. |
| Source date | FSA notices, field-test materials, company disclosures, and implementation materials are date-specific. |

Company-level capital statements are tied to a named metric and source date. Listed groups such as [[life-insurers/dai-ichi-life|Dai-ichi Life]] and [[non-life-insurers/tokio-marine|Tokio Marine]] publish integrated report / earnings disclosure materials. Mutual insurers such as [[life-insurers/nippon-life|Nippon Life]], [[life-insurers/meiji-yasuda|Meiji Yasuda]], and [[life-insurers/sumitomo-life|Sumitomo Life]] publish solvency, governance-form, and surplus-return information through their own disclosure routes.

## Entity Crosswalk

| Question | Do not answer with | Better route |
|---|---|---|
| "Is this an insurer?" | Brand name alone | Check FSA life / non-life / small-amount short-term lists and entity disclosure. |
| "Is this an insurance group?" | Product website alone | Check whether the group has an insurance holding-company layer or only insurer subsidiaries. |
| "Can this platform sell insurance?" | App UI alone | Check agency / broker / financial-service intermediary / partner insurer structure. |
| "Is ESR high or low?" | A single ratio copied without date | Compare source date, product mix, market sensitivity, and disclosed target range. |
| "Is this a broker?" | Colloquial English "broker" wording | Check Japanese legal status: agent / solicitor / insurance broker / intermediary. |

## JapanFG Relevance

This page keeps the license surface connected to company pages:

- Big life insurers: [[life-insurers/nippon-life]], [[life-insurers/dai-ichi-life]], [[life-insurers/meiji-yasuda]], [[life-insurers/sumitomo-life]], and [[life-insurers/kampo-life]].
- Major non-life groups: [[non-life-insurers/tokio-marine]], [[non-life-insurers/msad]], and [[non-life-insurers/sompo]].
- Operating non-life insurers: [[non-life-insurers/tokio-marine-nichido-fire]], [[non-life-insurers/mitsui-sumitomo-insurance]], [[non-life-insurers/aioi-nissay-dowa-insurance]], and [[non-life-insurers/sompo-japan-insurance]].
- Direct / platform insurers: [[non-life-insurers/sony-insurance]], [[non-life-insurers/sbi-insurance]], [[non-life-insurers/au-insurance]], [[life-insurers/lifenet]], and [[non-life-insurers/rakuten-general-insurance]].
- Reinsurance / public-private catastrophe scheme: [[non-life-insurers/toa-reinsurance]], [[non-life-insurers/japan-earthquake-reinsurance]], and [[insurance/earthquake-insurance-public-private-scheme]].

## Source Fields

1. Identify the exact legal entity and Japanese registered name.
2. FSA licensed / registered operator list.
3. Decide whether the page is about underwriting, holding-company control, agency distribution, brokerage mediation, or capital adequacy.
4. FSA economic-value solvency materials and company disclosure date for solvency facts.
5. [[insurance/life-insurance-channel-mix|Life-insurance channel mix]] or [[insurance/insurance-agency-and-brokerage-japan|insurance agency and brokerage Japan]] for channel facts.
6. [[insurance/earthquake-insurance-public-private-scheme|Earthquake insurance public-private scheme]] and [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]] for public-private catastrophe facts.
7. "Not found in checked public list as of date" wording where a registry check is negative but no regulator statement is cited.

## Related

- [[financial-licenses/INDEX]]
- [[insurance/INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[INDEX|FinWiki index]]

## Sources

- FSA: licensed / registered operator lists.
- FSA: economic value-based solvency regulation hub.
- FSA: comprehensive supervision guideline for insurance companies.
- e-Gov: Insurance Business Act.
- FSA: insurance broker supervision-guideline section.

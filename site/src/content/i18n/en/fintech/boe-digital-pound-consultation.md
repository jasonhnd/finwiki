---
source: fintech/boe-digital-pound-consultation
source_hash: 926a0c4f663dfcd8
lang: en
status: machine
fidelity: ok
title: "Bank of England digital pound consultation — 2023-2026 design phase, private-sector wallets, comparison with ECB"
translated_at: 2026-07-29T18:18:56.000Z
---

# Bank of England digital pound consultation — 2023-2026 design phase, private-sector wallets, comparison with ECB

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and tracks the **Bank of England (BoE) and HM Treasury (HMT) digital pound** as a conditional UK retail-CBDC programme. Read it alongside [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]] for the euro-area comparator and [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]] for architectural context.

> [!info] TL;DR
> The BoE and HMT published their digital-pound consultation on **2023-02-07**, closed it on **2023-06-30**, and published the response on **2024-01-25**. The latest scoped status cited here, a BoE notice dated **2026-06-25**, still says that **no decision has been taken** on whether to proceed. The design phase ends in **2026**. The authorities said they would publish the assessment, blueprint, and decision on next steps later in 2026. A decision on next steps is not itself a launch decision: launch would remain conditional on further public consultation and Parliament passing primary legislation. The **£10,000-£20,000** individual holding-limit range was a consultation proposal and later analytical scenario, not an adopted limit.

## Status at a glance

| Item | Evidence-bounded status |
|---|---|
| Product scope | A potential form of retail central-bank money for everyday payments by households and businesses ^[BoE 2023 consultation] |
| Lead authorities | Bank of England and HM Treasury ^[BoE 2023 consultation] |
| Consultation | Published 2023-02-07; closed 2023-06-30 ^[BoE 2023 consultation] |
| Consultation response | Published 2024-01-25 ^[BoE 2024 response] |
| Current programme state | Design phase; no decision to introduce a digital pound ^[BoE 2026-06-25 status] |
| End of design phase | 2026 ^[BoE 2026-03-04 update] |
| Later-2026 outputs | Assessment, blueprint, and the authorities' decision on next steps ^[BoE 2026-03-04 update] |
| Launch conditions | Further public consultation before primary legislation; primary legislation passed by Parliament before any launch ^[BoE 2024 response] |
| Holding limit | No final individual limit; £10,000-£20,000 remains a proposal and scenario range ^[BoE 2023 consultation; BoE FSP53] |
| Scope boundary | The digital pound is a retail programme; separate wholesale settlement work does not establish a launch sequence or relative maturity ^[BoE 2026-03-04 update] |

The wording matters. The **2026 decision on next steps** could be to proceed with further work or to put more emphasis on other payment-modernisation initiatives. It should not be described as a scheduled issuance decision or launch date.

## What the design phase covers

The BoE's **2026-03-04 progress update** describes four connected workstreams:

1. **Assessment** — examining the opportunities, feasibility, risks, public-policy effects, commercial viability, and operational practicality of proceeding.
2. **Blueprint** — consolidating the proposed product features, regulatory approach, technology choices, infrastructure, and operating model.
3. **Experiments and proofs of concept** — testing design choices and technical feasibility in controlled settings.
4. **Engagement** — collecting input from industry, academia, and civil society.

These activities build an evidence base. They are not evidence that a live digital pound exists, that a launch has been approved, or that a final architecture has been adopted.

## Proposed platform model

The **2024 consultation response** retained the platform model as the basis for further exploration, while stating that it could evolve during the design phase and that more detail would be confirmed in the blueprint.

```
                 Bank of England
        proposed core digital-pound infrastructure
                           │
                           ▼
       PIPs (Payment Interface Providers)
     proposed user-facing access and payment services
                           │
                           ▼
             Households and businesses

       ESIPs (External Service Interface Providers)
       proposed additional services around the platform
```

Under the proposal:

- the BoE would issue the digital pound and operate core infrastructure;
- private-sector PIPs would provide user-facing services and perform the legally required customer-facing functions;
- ESIPs could provide additional services;
- the detailed allocation of functions, regulation, technology, and commercial responsibilities remains subject to the blueprint and any later decisions.

There is no live BoE digital-pound wallet and no approved production platform. PIP and ESIP descriptions on this page therefore refer to the proposed model, not an operating service.

## Commitments recorded in the 2024 response

The consultation response records four important safeguards, all of which remain conditional on a digital pound proceeding:

- **Parliament and further consultation** — the Government committed to further public consultation before introducing primary legislation, and any launch would require both Houses of Parliament to pass that legislation.
- **Privacy and data protection** — the Bank and Government said they would not access users' personal data through the BoE core infrastructure, and legislation would guarantee privacy. The proposal is not anonymous: regulated intermediaries would still perform functions required by law.
- **No central-bank or government programmability** — the Bank and Government said they would not program users' money. A PIP could offer automated or rule-based payments only with user consent and under a regulatory framework.
- **Cash remains available** — a digital pound, if introduced, would complement rather than replace cash.

These are programme commitments and proposed legal safeguards. They should not be converted into claims that the final system already provides those protections.

## Holding limits: proposal, analysis, and unresolved policy

| Document | What it establishes | What it does not establish |
|---|---|---|
| 2023 consultation and 2024 response | The authorities proposed an introductory individual limit in the £10,000-£20,000 range and also sought views on a lower figure such as £5,000 | A final or adopted limit ^[BoE 2023 consultation; BoE 2024 response] |
| Financial Stability Paper No. 53, 2025-11-10 | The BoE analysed how holding limits could mitigate deposit-outflow and financial-stability risks, including scenarios using £10,000 and £20,000 | A decision to launch, a launch date, or an adopted digital-pound limit ^[BoE FSP53] |
| 2026 progress update | Assessment and blueprint work remained in progress | Confirmation that the consultation range will be retained ^[BoE 2026-03-04 update] |

The 2025 paper says that choosing a limit would require policy judgments extending beyond financial-stability analysis. It also repeats that the decision on whether to launch a digital pound, and its timing, would be taken in due course. The range must therefore remain labelled **proposed**, **illustrative**, or **scenario-based**.

## Bounded comparison with the digital euro

The UK and euro-area projects can be compared at the level of stated design work and legal conditions. The cited official pages do not support a categorical ranking of privacy, caution, utility, or programme maturity.

| Dimension | UK digital pound | Digital euro |
|---|---|---|
| Programme status | Design phase ends in 2026; assessment, blueprint, and decision on next steps due later in 2026; no introduction decision in the cited UK status | The preparation phase ended in October 2025; technical preparation, market engagement, and support for the legislative process continue ^[BoE 2026-03-04 update; ECB progress] |
| Issuance condition | Further public consultation and UK primary legislation would precede any launch | The ECB says an issuance decision would be considered only after the EU legislative framework is adopted ^[BoE 2024 response; ECB FAQ] |
| Intermediaries | Proposed platform model uses private-sector PIPs and ESIPs; details remain subject to the blueprint | Proposed access is through payment-service providers or public intermediaries; details remain subject to legislation and project work ^[BoE 2024 response; ECB FAQ] |
| Privacy | Proposed safeguards would keep users' personal data from the BoE core infrastructure; intermediaries would meet legal obligations | The ECB says Eurosystem data would be pseudonymised and intermediaries would access data needed to comply with EU law ^[BoE 2024 response; ECB privacy] |
| Holding limits | £10,000-£20,000 was a proposed and analysed range; no final limit | A limit is envisaged, but calibration remains conditional; the ECB FAQ describes tests of hypothetical values up to €3,000, not an adopted cap ^[BoE FSP53; ECB FAQ] |
| Timing | No launch year is committed | The ECB aims to be ready for a potential first issuance during 2029 if the necessary EU regulation is adopted during 2026; issuance still requires a later decision ^[BoE 2026-03-04 update; ECB FAQ] |

Similarities in intermediated access, privacy objectives, or holding-limit work do not prove that one programme copied the other. Differences between provisional figures also do not, by themselves, establish greater utility or stronger protection.

## Retail and wholesale scope boundary

This page does not rank the BoE's retail and wholesale work. The **2026-03-04 BoE update** discusses the upgraded RTGS platform, synchronisation testing, and experimentation with tokenised central-bank money in a separate wholesale context. Those statements do not establish a relative maturity ranking or delivery sequence between the wholesale work and the retail programme.

## Evidence-bounded timeline

| Date | Directly supported event |
|---|---|
| 2023-02-07 | BoE and HMT published the consultation paper ^[BoE 2023 consultation] |
| 2023-06-30 | The consultation closed ^[BoE 2023 consultation] |
| 2024-01-25 | BoE and HMT published the consultation response; the design phase was preparatory, not a launch decision ^[BoE 2024 response] |
| 2025-11-10 | BoE published Financial Stability Paper No. 53 on holding-limit analysis ^[BoE FSP53] |
| 2026-03-04 | BoE said the design phase ends in 2026 and that the assessment, blueprint, and decision on next steps would be published later in the year ^[BoE 2026-03-04 update] |
| 2026-06-25 | A BoE notice said no decision had been taken and that conclusions would be published later in 2026 ^[BoE 2026-06-25 status] |

No official source cited here sets a live-issuance year for the digital pound.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture trade-offs]]
- [[fintech/central-banking-function-unbundling|central-banking function unbundling]]

## Sources

- [Bank of England and HM Treasury — The digital pound consultation paper (2023-02-07)](https://www.bankofengland.co.uk/paper/2023/the-digital-pound-consultation-paper)
- [Bank of England and HM Treasury — Response to the digital pound consultation (2024-01-25, PDF)](https://www.bankofengland.co.uk/-/media/boe/files/paper/2024/responses-to-the-digital-pound-consultation-paper.pdf)
- [Bank of England — Financial Stability Paper No. 53: holding limits for systemic stablecoins and a potential digital pound (2025-11-10)](https://www.bankofengland.co.uk/financial-stability-paper/2025/holding-limits-for-sterling-denominated-systemic-stablecoins-and-a-digital-pound)
- [Bank of England — Progress update: Digital Pound Design Phase (2026-03-04)](https://www.bankofengland.co.uk/the-digital-pound/progress-update-digital-pound-design-phase)
- [Bank of England — RPIB consultation notice, including digital-pound status note (2026-06-25)](https://www.bankofengland.co.uk/news/2026/june/rpib-launches-consultation-on-next-generation-uk-payments-infrastructure)
- [European Central Bank — Progress on the digital euro](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html)
- [European Central Bank — FAQs on the digital euro](https://www.ecb.europa.eu/euro/digital_euro/faqs/html/ecb.faq_digital_euro.en.html)
- [European Central Bank — Digital euro and privacy](https://www.ecb.europa.eu/euro/digital_euro/features/privacy/html/index.en.html)

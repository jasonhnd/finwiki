---
source: fintech/e-euro-retail-rollout
source_hash: 48d48eac94c02d6b
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Digital euro retail project — current phase, 2027 beta pilot, conditional 2029 readiness"
translated_at: 2026-07-29T17:58:52.645Z
---
# Digital euro retail project — current phase, 2027 beta pilot, conditional 2029 readiness

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction deep dive on the ECB digital euro for the 2026-07 current-phase snapshot. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]] for architecture context, and with [[fintech/cbdc-multi-tier-architecture-three-paradigms|three active CBDC paradigms]] for the three-paradigm classification. For per-jurisdiction peers see [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] and [[fintech/erupee-india-pilot-status|eRupee India pilot status]]; for wholesale-CBDC context relevant to the EU side (the BoF / BdF, BdI, and Bundesbank participate) see [[fintech/bis-project-agora-overview|BIS Project Agorá]]. For the broader EU stablecoin regulatory context see [[fintech/mica-overview|MiCA overview]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]].

> [!info] TL;DR
> As of 2026-07, the digital euro is in the **current project phase that began in 2025-11** after the Preparation Phase ended. The ECB selected **36 PSPs** for a controlled beta pilot, with operations planned for the second half of **2027**; that pilot is not issuance of a digital euro. The ECB aims to be technically ready for potential first issuance during **2029**, conditional on adoption of the proposed EU legislation in 2026 and a later ECB Governing Council decision. There is **no issuance decision**, **no issued retail wallet**, and **no live digital-euro merchant network**. The design work includes intermediated distribution through supervised PSPs, holding-limit calibration, waterfall / reverse-waterfall functions, non-remuneration, and online / offline modes; no final holding-limit amount has been adopted.

## Programme architecture

```
                ECB Digital Euro Programme
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                      ▼
   Investigation Phase                  Preparation Phase
   (2021-10 → 2023-10)                  (2023-11 → 2025-10)
       │                                      │
   Design exploration                   Rulebook drafting
   (offline / online                    Technology vendor
   modes, holding cap,                  selection
   intermediated model)                 Manual + provider
                                        testing
       │                                      │
   Concluded with                       Completed; current phase
   "go to Preparation"                  began in 2025-11
   recommendation                       │
                                            │
                                            ▼
                                  Controlled beta pilot
                                  (planned for 2027 H2)
                                            │
                                            ▼
                                  2029 readiness target
                                  (conditional; not issuance)
```

## Matrix A · Statute, regulator, phase status

The table reflects the ECB's [current project page](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html), [progress record](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html), and [pilot FAQ](https://www.ecb.europa.eu/euro/digital_euro/pilot/html/ecb.faq-digital-euro-pilot.ga.html), reviewed 2026-07-30.

| Item | Detail |
|---|---|
| Lead authority | European Central Bank (ECB) Governing Council + ECB Executive Board |
| Legislative basis | European Commission proposal of June 2023; issuance still depends on adoption of the EU Regulation and a later ECB Governing Council decision |
| Investigation Phase | 2021-10 → 2023-10 (concluded) |
| Preparation Phase | 2023-11 → 2025-10 (completed) |
| Current phase | Began 2025-11; focuses on technical readiness, market engagement, and legislative support |
| Beta pilot | Preparation began in 2026; operational phase is planned for the second half of 2027 and is not issuance of a digital euro |
| Potential issuance | ECB aims to be ready during 2029 if legislation is adopted in 2026; no issuance decision has been made |

The ECB explicitly distinguishes project progression from a decision to issue. Issuance requires (i) the EU co-legislative regulation to be adopted, and (ii) a separate Governing Council decision to launch. As of the 2026-07-30 review, no issuance decision had been made.

## Matrix B · Design choices and stated functions

| Design choice | Detail | Public description |
|---|---|---|
| **Two-tier intermediated** | ECB → supervised PSPs (banks, EMIs, payment institutions) → users; ECB does not directly distribute | PSPs provide user-facing services under the proposed scheme; compare [[fintech/cbdc-multi-tier-architecture-three-paradigms\|three-paradigms]] |
| **Per-person holding limit** | Calibration methodology remains under development; no final euro amount has been adopted | Intended to limit deposit outflows if issuance occurs |
| **Reverse waterfall** | If a payment exceeds the recipient's holding cap, the surplus auto-transfers to the recipient's linked commercial-bank account | Removes the holding cap as a UX blocker for individual payments above the cap |
| **Zero interest** | The retail digital euro pays no interest | Intended to reduce incentives to shift deposits into digital-euro balances or use the digital euro as a savings substitute |
| **Online + offline modes** | Online mode for general use; offline mode for low-value cash-like P2P | Offline mode replicates cash-like privacy and resilience; online mode supports merchant payments |
| **Privacy tiers** | Offline mode = cash-like privacy (no central record of small-value P2P); online mode = supervised PSP visibility with ECB-data-minimisation | Balance privacy expectations vs AML/CFT obligations |
| **Distribution by supervised PSPs only** | Wallet provided by banks + supervised PSPs; ECB does not run consumer-facing apps | User-facing distribution remains an intermediary function under the proposed design |
| **No interest + no programmable money for retail** | The ECB distinguishes programmable payments from programmable money | The reviewed ECB material does not describe the digital euro itself as programmable money |
| **Wholesale separate track** | Wholesale-CBDC use cases handled via separate Eurosystem exploratory work, not via the retail digital euro | Two distinct tracks; retail is the legislative focus |

The three core anti-disintermediation parameters — **holding limit + waterfall / reverse-waterfall funding + non-remuneration** — remain subject to legislation and design calibration. Public debate ranges should not be presented as an ECB decision.

## Matrix C · Preparation-Phase work-streams

The following table is updated from the [ECB progress page](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html) and [digital euro pilot page](https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.en.html), reviewed 2026-07-30.

| Work-stream | Status (2026-07) |
|---|---|
| Rulebook | Draft version 0.91 published in July 2026; not a final operating rulebook |
| Platform providers | Framework providers selected; work is activated step-by-step as project and legislation progress |
| Pilot PSP selection | 36 PSPs selected after the 2026 expression-of-interest process |
| Pilot development | Planned from 2026-Q3; integration, certification, and user onboarding preparation |
| Pilot operations | Planned for the second half of 2027 for 12 months using a beta digital euro in a controlled setting |
| Legislative dialogue | Ongoing; the ECB has not made an issuance decision |

The completed Preparation Phase was **not** a public pilot. The separate controlled beta pilot is planned to enter operations in the second half of 2027 and does not constitute issuance.

## Matrix D · Adoption metrics (most recent public)

The table distinguishes an issued CBDC from the controlled beta pilot described in the [ECB pilot FAQ](https://www.ecb.europa.eu/euro/digital_euro/pilot/html/ecb.faq-digital-euro-pilot.ga.html), reviewed 2026-07-30.

| Metric | Most-recent public status |
|---|---|
| Issued digital-euro users | None; no issuance decision |
| Issued digital-euro merchants | None |
| Issued digital-euro transaction volume | None |
| Production wallet apps | None |
| Cross-border digital-euro settlement | None |
| Beta-pilot PSPs | 36 selected; operational pilot planned from the second half of 2027 |
| Potential first issuance | Readiness target during 2029, conditional on 2026 legislation and a later Governing Council decision |

The evidence-backed status is narrower: there is no issued digital euro or live retail activity, while a controlled beta pilot is planned for the second half of 2027. This page does not infer programme ranking, policy motive, or technical capability from that status.

## Matrix E · Holding limit and disintermediation defence (deep dive)

```
Per-person holding-limit calibration (not finalised)
       │
       ▼
   No final euro amount adopted
       │
       ├── Below cap: digital euro balance held in PSP-provided wallet
       │
       └── Above cap: reverse waterfall to linked commercial-bank account
                       (so payment never blocked from UX perspective)
```

Three protective layers:

1. **Hard cap per person** — total digital-euro holding balance limited regardless of how many wallets a person opens (cap is per-person, not per-wallet, requiring an alias / identity look-up).
2. **Reverse waterfall** — payment that would exceed the cap auto-routes the surplus to the linked commercial-bank account. The user can still send / receive any amount; only the balance held in digital euros is capped.
3. **Zero interest** — the ECB presents non-remuneration as a design feature intended to reduce incentives to shift bank deposits into digital-euro balances or use the digital euro as a savings substitute. It does not establish that every non-transactional motive is eliminated.

The ECB continues to develop the holding-limit methodology. Public discussion ranges and scenario analysis are not a final ECB decision, and the adopted legislation plus later Governing Council decisions will determine the operative design if issuance proceeds.

## Matrix F · Distribution model

| Layer | Role in distribution |
|---|---|
| ECB | Issuer (central-bank money); operates the underlying scheme + technical infrastructure |
| Supervised PSPs (banks, EMIs, payment institutions) | Wallet provision; user onboarding; KYC; user-facing app |
| Merchants | Accept digital euro payments via payment-scheme integration |
| Consumers | Hold digital euro in PSP-provided wallet; pay merchants; P2P |

The proposed distribution model assigns user-facing onboarding, wallet, and payment services to supervised PSPs. The ECB would issue central-bank money and operate the scheme and core infrastructure if issuance is approved. This description does not establish a cross-country ranking or motive.

## Reference point · Sweden e-krona

The Swedish e-krona project is a separate central-bank research and policy process. The comparison below is limited to facts on the Riksbank's public e-krona page and the ECB's project pages; it does not treat one programme as a forecast for the other.

- The Riksbank has published e-krona reports and technical-pilot results.
- The reviewed public page does not report a decision to issue an e-krona.
- The reviewed public page does not describe a live retail e-krona product.
- Any future decision depends on Sweden's public-policy and legislative process.

These facts do not establish that the digital euro and e-krona follow the same trajectory, nor do they identify whether policy, legal, market, or technical factors are decisive.

The EU column below is based on the [ECB digital euro project / pilot pages](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html), and the Sweden column on the [Riksbank e-krona page](https://www.riksbank.se/en-gb/payments--cash/e-krona/); the comparison is current as of 2026-07-30.

| Item | EU digital euro | Sweden e-krona |
|---|---|---|
| Authority | ECB Governing Council | Sveriges Riksbank |
| Legislative basis | EU co-decision regulation pending | Swedish parliamentary decision required |
| Architecture | Two-tier intermediated via supervised PSPs | Two-tier intermediated model (under design) |
| Holding cap | Methodology under development; no final amount | Not finalised |
| Live retail | None | None |
| Status (2026-07) | Current technical-readiness phase; beta pilot planned for 2027; no issuance decision | No issuance decision |
| Public-source basis | [ECB project and pilot pages](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html) | [Riksbank e-krona page](https://www.riksbank.se/en-gb/payments--cash/e-krona/) |
| Decision dependency | EU legislation plus ECB Governing Council decision | Swedish public-policy and legislative process |

The comparison establishes different legal and institutional decision routes. It does not support a claim that observed pace differences are purely political or purely technical.

## Competitive context — MiCA EMT and wholesale Eurosystem

The digital euro's competitive runway is shaped by two parallel EU developments:

1. **MiCA EMT regime** — entered into force 2024-06-30 (SC parts) and 2024-12-30 (full); regulated euro-denominated e-money tokens (EMTs) from EU credit institutions and EMIs already in market. EMTs deliver part of the "digital euro" use case (programmable euro payments) through private intermediaries. See [[fintech/mica-overview|MiCA overview]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]].
2. **Eurosystem wholesale exploratory work** — separate from retail digital euro; runs trials on wholesale settlement in central-bank money (including DLT-based settlement). Some euro-area central banks (BdF, Banca d'Italia, Bundesbank) participate in [[fintech/bis-project-agora-overview|BIS Project Agorá]] and have their own DLT pilots.

These are separate legal and technical tracks. Their existence does not determine whether or when a retail digital euro will be issued, and this page does not use them to rank jurisdictions or infer technical capability.

## Origin and evolution

```
2017-2019    ECB internal work on CBDC; Working Paper series
2020-10      ECB publishes "Report on a digital euro"; consultation launched
2021-10      Investigation Phase begins (2-year)
2023-06      European Commission proposes Regulation establishing the digital euro
2023-10      Investigation Phase concludes; ECB recommends entering Preparation Phase
2023-11      Preparation Phase begins (originally 2-year, to 2025-10)
2024-2025    Vendor framework agreements; rulebook drafting; technical pilots
2025         Preparation Phase progress reports published quarterly / periodically
2025-10      Preparation Phase completed
2025-11      Current phase begins: technical readiness, market engagement, legislative support
2026         36 PSPs selected; controlled beta-pilot preparation begins
2027 H2      Controlled beta-pilot operations planned for 12 months
2029         Conditional readiness target if legislation is adopted; no issuance decision
```

The current public sequence establishes project milestones, not an issuance forecast. Adoption of EU legislation and a later ECB Governing Council decision remain separate conditions.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|three active CBDC paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|4 core CBDC architecture trade-offs]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC settlement bridge]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / DeCurret DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-layer stablecoin framework]]
- [[fintech/central-banking-function-unbundling|five layers of central-bank function unbundling]]

## Sources

- European Central Bank — Digital euro project page: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — Digital euro Preparation Phase progress reports: https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- European Commission — Digital euro proposal and policy page: https://commission.europa.eu/business-economy-euro/euro-area/digital-euro_en
- European Commission — Proposal for a Regulation on the establishment of the digital euro (June 2023)
- Council of the EU — Digital euro policy page: https://www.consilium.europa.eu/en/policies/digital-euro/
- ECB — Report on a digital euro (October 2020)
- ECB — Working Paper Series on CBDC design and analysis
- Sveriges Riksbank — e-krona project page and PoC reports: https://www.riksbank.se/en-gb/payments--cash/e-krona/
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá public materials (Eurosystem central-bank participation): https://www.bis.org/about/bisih/topics/fmis/agora.htm

---
title: Digital euro retail rollout — Preparation Phase 2023-2026, anti-disintermediation design, e-krona pause comparison
aliases:
  - e-euro-retail-rollout
  - digital euro retail rollout
  - ECB digital euro 2026 status
  - 数字欧元 零售 推出
  - digital euro preparation phase
  - ECB CBDC pilot status
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, digital-euro, ecb, eu, retail-cbdc, e-krona, riksbank, anti-disintermediation]
status: active
sources:
  - https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
  - https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
  - https://commission.europa.eu/business-economy-euro/euro-area/digital-euro_en
  - https://www.riksbank.se/en-gb/payments--cash/e-krona/
  - https://www.bis.org/about/bisih/topics/cbdc.htm
  - https://www.consilium.europa.eu/en/policies/digital-euro/
---

# Digital euro retail rollout — Preparation Phase 2023-2026, anti-disintermediation design, e-krona pause comparison

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction deep dive on the ECB digital euro for the 2026 Preparation-Phase snapshot. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] for architecture context, and with [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]] for the three-paradigm classification. For per-jurisdiction peers see [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] and [[fintech/erupee-india-pilot-status|eRupee India pilot status]]; for wholesale-CBDC context relevant to the EU side (the BoF / BdF, BdI, and Bundesbank participate) see [[fintech/bis-project-agora-overview|BIS Project Agorá]]. For the broader EU stablecoin regulatory context that shapes the digital euro's competitive runway see [[fintech/mica-overview|MiCA overview]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]].

> [!info] TL;DR
> By mid-2026 the digital euro is still in **Preparation Phase**, originally bounded as a 2023-11 to 2025-10 two-year period and now extended into 2026-Q4+ to wait for EU co-legislative outcome. There is **no live issuance**, **no retail wallet**, **no live merchant**. The defining design choices — **two-tier intermediated distribution** via supervised PSPs, a **per-person holding limit currently proposed at €3,000-€4,000** with a reverse-waterfall to a linked bank account, and **zero interest** on retail balances — are the explicit anti-disintermediation defence. The closest cautionary tale is the Swedish e-krona project, which the Riksbank effectively paused in 2024-2025 with no decision on issuance and no live retail product, demonstrating that "preparation can extend indefinitely." The digital euro's pace is **not a technology limitation; it is a policy choice** to protect the €18T+ commercial-bank deposit base while waiting for political consensus.

## Programme architecture

```
                ECB Digital Euro Programme
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                      ▼
   Investigation Phase                  Preparation Phase
   (2021-10 → 2023-10)                  (2023-11 → 2026-Q4+)
       │                                      │
   Design exploration                   Rulebook drafting
   (offline / online                    Technology vendor
   modes, holding cap,                  selection
   intermediated model)                 Manual + provider
                                        testing
       │                                      │
   Concluded with                       (NOT YET) Issuance
   "go to Preparation"                  decision pending
   recommendation                       legislative outcome
                                            │
                                            ▼
                                  Issuance Decision Phase
                                  (pending; not yet entered)
                                            │
                                            ▼
                                  Live issuance (TBD)
```

## Matrix A · Statute, regulator, phase status

| Item | Detail |
|---|---|
| Lead authority | European Central Bank (ECB) Governing Council + ECB Executive Board |
| Legislative basis | Regulation establishing the digital euro — European Commission proposal June 2023; in EU Council + European Parliament co-decision (trilogue) |
| Investigation Phase | 2021-10 → 2023-10 (concluded) |
| Preparation Phase | 2023-11 → originally October 2025; **extended into 2026-Q4+** awaiting legislative outcome |
| Issuance Decision Phase | NOT yet entered as of 2026-05; requires Governing Council decision + legislative basis |
| Issuance start | TBD; depends on Issuance Decision Phase outcome; earliest realistic 2027-2028 |
| Reporting cadence | ECB publishes quarterly / periodic progress reports on the digital euro project page |

The ECB explicitly clarifies in every progress report that **entering the Preparation Phase is not a decision to issue**. Issuance requires (i) the EU co-legislative regulation to be adopted, and (ii) a separate Governing Council decision to launch. As of 2026-05 neither has happened.

## Matrix B · Design choices — codified anti-disintermediation

| Design choice | Detail | Why |
|---|---|---|
| **Two-tier intermediated** | ECB → supervised PSPs (banks, EMIs, payment institutions) → users; ECB does not directly distribute | Preserve commercial-bank role; consistent with [[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] dual-tier; avoid central-bank-direct-to-consumer disintermediation |
| **Per-person holding limit** | Proposed €3,000-€4,000 per person (subject to legislative decision; not finalised) | Hard cap on aggregate digital-euro balance per person; prevents large-scale conversion of bank deposits into central-bank money |
| **Reverse waterfall** | If a payment exceeds the recipient's holding cap, the surplus auto-transfers to the recipient's linked commercial-bank account | Removes the holding cap as a UX blocker for individual payments above the cap |
| **Zero interest** | The retail digital euro pays no interest | Removes the savings-substitution incentive vs commercial-bank deposits |
| **Online + offline modes** | Online mode for general use; offline mode for low-value cash-like P2P | Offline mode replicates cash-like privacy and resilience; online mode supports merchant payments |
| **Privacy tiers** | Offline mode = cash-like privacy (no central record of small-value P2P); online mode = supervised PSP visibility with ECB-data-minimisation | Balance privacy expectations vs AML/CFT obligations |
| **Distribution by supervised PSPs only** | Wallet provided by banks + supervised PSPs; ECB does not run consumer-facing apps | Forces channel ownership to remain with commercial-bank ecosystem |
| **No interest + no programmability for retail** | Explicit rejection of programmable money for retail digital euro | Preserve flexibility; avoid conditional-payment misuse and welfare-state automation framing |
| **Wholesale separate track** | Wholesale-CBDC use cases handled via separate Eurosystem exploratory work, not via the retail digital euro | Two distinct tracks; retail is the legislative focus |

The three core anti-disintermediation parameters — **holding cap + reverse waterfall + zero interest** — are the most-debated public-policy items. Commercial banks have lobbied for a low cap (€1,000-€2,500 range) and emphasised the systemic-risk implication of a high cap. The ECB has signalled comfort with €3,000-€4,000 but has not finalised. The legislative outcome will be politically negotiated.

## Matrix C · Preparation-Phase work-streams

| Work-stream | Status (2026-05) |
|---|---|
| Rulebook drafting | Active; ECB-coordinated working groups with PSP, merchant, and consumer representatives |
| Technology-vendor selection (framework agreements) | Selected vendors announced; competitive procurement for components (e.g. risk management, fraud prevention, offline payments, app SDK, alias lookup) |
| Manual + technical testing | Pilot-scale technical testing in closed environments; no public-facing pilot |
| User-research / consumer focus groups | Active across euro-area Member States |
| Merchant outreach / acceptance design | Active; payment scheme integration design in flight |
| Cross-border interoperability design | Discussion of euro-area-wide design; limited engagement with external CBDCs |
| Legislative dialogue | Active engagement with EU Council and European Parliament; technical advice provided by ECB |

The Preparation Phase is **not** a public pilot. It is internal design and technical-vendor work. The closest comparable is a major financial-infrastructure programme in design phase, not a consumer-facing trial.

## Matrix D · Adoption metrics (most recent public)

| Metric | Most-recent public figure |
|---|---|
| Live retail users | **0** (no issuance) |
| Live merchants | **0** (no acceptance) |
| Cumulative tx volume | **0** |
| Cities / coverage | **0** |
| Wallet apps live | **0** |
| Cross-border CBDC settlement | **0** |
| Public pilot participants | **0** (Preparation Phase work is internal / vendor-side, not consumer-side) |
| Vendor framework agreements signed | Multiple component-level (risk management, app SDK, alias lookup, offline payment); selected vendor names announced over 2024-2025 |

This is the single defining fact: **the digital euro is the only of the four reference CBDC programmes with zero live retail activity** as of 2026-05. The "behind China" framing is technically accurate but materially misleading — the ECB has been explicit that this is **a policy choice**, not a technology gap.

## Matrix E · Holding limit and disintermediation defence (deep dive)

```
Per-person holding cap proposal (illustrative; not finalised)
       │
       ▼
   €3,000-€4,000  ← Latest publicly-discussed range
       │
       ├── Below cap: digital euro balance held in PSP-provided wallet
       │
       └── Above cap: reverse waterfall to linked commercial-bank account
                       (so payment never blocked from UX perspective)
```

Three protective layers:

1. **Hard cap per person** — total digital-euro holding balance limited regardless of how many wallets a person opens (cap is per-person, not per-wallet, requiring an alias / identity look-up).
2. **Reverse waterfall** — payment that would exceed the cap auto-routes the surplus to the linked commercial-bank account. The user can still send / receive any amount; only the balance held in digital euros is capped.
3. **Zero interest** — removes the savings-substitution incentive entirely; the only economic reason to hold digital euro is transactional, not savings.

The ECB has run technical analysis showing that even at the higher end of the proposed cap, the aggregate digital-euro holding in the euro area would amount to a small percentage of total commercial-bank deposits (€18T+), and the reverse waterfall would handle the surge dynamics. The commercial-bank lobby disputes this. The legislative outcome will determine which view prevails.

For comparison, none of the other three reference CBDC programmes codify holding limits in the same way:
- **China e-CNY** uses operator-tier limits (low-tier ¥10K tx cap, ¥50K balance; high-tier KYC higher).
- **India eRupee** uses daily-transaction app-config limits; no published hard balance cap.
- **Japan DCJPY** is not a CBDC — it is a tokenised bank deposit, covered by the ¥10M per-bank deposit-insurance limit by construction.

## Matrix F · Distribution model

| Layer | Role in distribution |
|---|---|
| ECB | Issuer (central-bank money); operates the underlying scheme + technical infrastructure |
| Supervised PSPs (banks, EMIs, payment institutions) | Wallet provision; user onboarding; KYC; user-facing app |
| Merchants | Accept digital euro payments via payment-scheme integration |
| Consumers | Hold digital euro in PSP-provided wallet; pay merchants; P2P |

The distribution model is **explicitly designed to keep commercial banks at the centre of the consumer relationship**. This is the largest single design difference from China's two-tier (which gives the 10 designated operators distribution authority but the PBoC defines the operators) and from India's two-tier (which uses the 17 participating banks). The EU design is the most protective of the existing commercial-bank distribution channel.

## Comparison to Sweden e-krona pause

The Swedish e-krona project, run by Sveriges Riksbank since 2017, is the cautionary tale that informs the digital euro debate. The Riksbank's public position evolved from active pilot (2017-2022) to a deliberately undecided position (2023-2024) to an effective pause (2024-2025). Key public-source signals:

- The Riksbank has published e-krona PoC reports across multiple phases since 2017.
- By 2023-2024 public Riksbank communications increasingly emphasised that issuance is a **political-mandate question** that requires parliamentary decision, not solely a central-bank one.
- The Riksbank shifted emphasis toward improving the existing payment infrastructure (RIX-INST instant-payments rail) rather than launching e-krona.
- The e-krona discussion has effectively been deprioritised relative to other Riksbank work-streams.

The lesson for the digital euro: **"preparation" can extend indefinitely if political conditions do not converge**. Sweden's experience demonstrates that the technical capability to issue is well-established, but the political-economic decision to issue is the binding constraint. The digital euro is on the same trajectory — the technology is being built, but the issuance decision is not the ECB's alone.

| Item | EU digital euro | Sweden e-krona |
|---|---|---|
| Authority | ECB Governing Council | Sveriges Riksbank |
| Legislative basis | EU co-decision regulation pending | Swedish parliamentary decision required |
| Architecture | Two-tier intermediated via supervised PSPs | Two-tier intermediated model (under design) |
| Holding cap | Proposed €3,000-€4,000 | Not finalised; concept design referenced caps |
| Live retail | None | None |
| Status (2026-05) | Preparation Phase (extended) | Effectively paused; no issuance decision |
| Political momentum | Medium-low; commercial banks resist | Low; Riksbank deprioritised |
| Reason | Anti-disintermediation policy + co-legislative pace | Effective lack of consumer / political pull |

The contrast with China and India is structural: in China the political mandate is unquestioned and the PBoC has direct authority to ship; in India the RBI has institutional authority and a clear technical mandate; in the EU the ECB needs legislative consent; in Sweden the Riksbank needs parliamentary mandate that has not materialised. The pace difference is **political**, not technical.

## Competitive context — MiCA EMT and wholesale Eurosystem

The digital euro's competitive runway is shaped by two parallel EU developments:

1. **MiCA EMT regime** — entered into force 2024-06-30 (SC parts) and 2024-12-30 (full); regulated euro-denominated e-money tokens (EMTs) from EU credit institutions and EMIs already in market. EMTs deliver part of the "digital euro" use case (programmable euro payments) through private intermediaries. See [[fintech/mica-overview|MiCA overview]] and [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]].
2. **Eurosystem wholesale exploratory work** — separate from retail digital euro; runs trials on wholesale settlement in central-bank money (including DLT-based settlement). Some euro-area central banks (BdF, Banca d'Italia, Bundesbank) participate in [[fintech/bis-project-agora-overview|BIS Project Agorá]] and have their own DLT pilots.

These two complementary tracks mean **the EU is not "behind" on digital-money infrastructure overall** — it has live MiCA-licensed EMTs and live wholesale-CBDC technical work. It is specifically the **retail-CBDC issuance** that is held up. This is the structural pattern that distinguishes the EU's pace from a true technology-gap story.

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
2025-2026    Preparation Phase extended into 2026-Q4+ awaiting legislative outcome
2026         EU Council + European Parliament continue trilogue on Regulation
2026-05      No issuance decision; Preparation continues
2026-2027    (Anticipated) Issuance Decision Phase entry conditional on legislative outcome
2027-2028    (Earliest realistic) Live retail issuance, conditional on Issuance Decision
```

**Pattern**: each major step depends on multi-institutional consent. The ECB has institutional authority for the project but not for the legal basis or the binding political mandate. The Riksbank's e-krona experience suggests this dependency can stretch the timeline indefinitely.

## Counterpoints

- "**The digital euro is behind**" is **technically true but materially misleading** — it is a deliberate policy choice to wait for legislative consent and protect bank deposit funding, not a technology limitation.
- The **€3,000-€4,000 holding cap is not finalised**; the final legislative number could be materially different (banks lobby for lower; some policymakers argue higher for utility).
- The **reverse-waterfall design** depends on a fully functional commercial-bank integration; if the linked bank account is dysfunctional or the user has no bank account, the UX degrades.
- The **MiCA EMT regime is already delivering** part of the digital-euro use case in private-sector form; this reduces the marginal benefit of the digital euro for consumers / merchants who already use EMTs.
- The **e-krona pause** demonstrates that politics can override technology readiness indefinitely.
- The ECB's **commitment to issuance** is institutionally strong but not unconditional; if legislative consent does not materialise, the digital euro could remain in indefinite Preparation.
- The **wholesale Eurosystem exploratory work** is progressing in parallel and may meaningfully deliver tokenised central-bank money for institutional use cases before the retail digital euro launches.
- **Commercial-bank lobbying** is the largest single non-technical risk factor; the bank lobby has consistent incentives to delay or constrain digital-euro issuance.
- The **zero-interest design** removes much of the consumer pull; for consumers who care about interest, commercial-bank deposits or MMFs dominate.

## Open questions

- Does the EU Council + Parliament adopt the digital-euro Regulation by 2026-Q4, and at what final holding cap?
- Does the ECB Governing Council enter the Issuance Decision Phase in 2027, and if so on what timeline?
- Does live retail issuance occur before 2028, or does the Preparation Phase extend further?
- Does the digital euro and the MiCA EMT regime end up sharing rails (e.g. EMT issuers serving as digital-euro PSPs)?
- Does any EU Member State separately experiment with wholesale CBDC at scale outside the digital-euro Regulation framework?
- Does the e-krona effectively serve as the European pause-case template, and does Sweden eventually join the digital euro if it stays out of the eurozone?
- Does the digital-euro design get programmability bolted on for specific use cases (e.g. EU welfare disbursement) over time?
- Does the digital euro design eventually allow direct ECB-issued wallets for the unbanked, or does the supervised-PSP-only distribution stay firm?
- Does the [[fintech/central-banking-function-unbundling|central-banking-function-unbundling]] pattern (Unit of Account stays sovereign, the other four functions get unbundled) get reflected in the digital euro design (with the ECB owning #1 + #5 and PSPs owning #2 + #3 + #4)?

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

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
- BIS Project Agorá public materials (Eurosystem central-bank participation): https://www.bis.org/about/bisih/topics/cbdc/agora.htm

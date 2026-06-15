---
source: fintech/boe-digital-pound-consultation
source_hash: 1e1dc5dbeebe0932
lang: en
status: machine
fidelity: ok
title: "Bank of England digital pound consultation — 2023-2026 design phase, private-sector wallets, comparison with ECB"
translated_at: 2026-06-15T03:48:21.817Z
---

# Bank of England digital pound consultation — 2023-2026 design phase, private-sector wallets, comparison with ECB

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction deep dive on the **Bank of England (BoE) and HM Treasury (HMT) digital pound** consultation and design phase — the UK retail-CBDC track. Read it against [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]] (the parallel EU programme with similar design choices), [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for cross-jurisdiction positioning, [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]] / [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]] / [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] for live small-economy retail CBDC peer cases, and [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]] for the three-paradigm classification. For private-rail UK competitive context see [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]] (peer regime) and [[fintech/mica-overview|MiCA overview]] (EU regulatory adjacency).

> [!info] TL;DR
> The BoE and HMT issued a joint consultation paper on the **digital pound** on **2023-02-07**, ran the public consultation through **2023-06**, and published the **consultation response on 2024-01-25**. The conclusion: **"It is too early to decide whether to introduce a digital pound. We are therefore going to undertake a design phase."** The design phase has run through 2024-2026 and is now in **Phase 2** of multi-year preparatory work. As of 2026-05 **no decision has been made to launch**; the BoE has explicitly framed the design phase as preparatory and **not** a commitment to issuance. The design choices preferred by the BoE / HMT mirror the ECB digital euro very closely: **two-tier intermediated**, **private-sector wallets** (with explicit BoE non-distribution to consumers), a **per-person holding limit between £10,000-£20,000** (proposed; not finalised), **zero interest**, and **strong privacy protections** that go beyond the digital euro on the privacy axis. The structural comparison with the ECB is the clearest peer-comparison case: same architectural family, materially higher proposed holding cap, and a more openly cautious political posture in the UK case.

## Programme architecture

```
                BoE + HMT Digital Pound Programme
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   Consultation Phase                          Design Phase
   (2023-02-07 → 2023-06)                      (2024-01 → 2026+)
       │                                              │
   Public consultation                         Detailed design,
   paper + 50,000+                             vendor selection
   responses received                          (private-sector wallet
                                                providers), POC work,
                                                stakeholder engagement
       │                                              │
   Response published                          (NOT YET) Decision Phase
   2024-01-25 with                             Decision on whether
   conclusion "design phase                    to introduce conditional
   not commitment to issue"                    on legislation + political
                                                consensus
                                                       │
                                                       ▼
                                                 Live issuance (not yet specified;
                                                 earliest realistic
                                                 late 2020s)
```

## Matrix A · Statute, regulator, phase status

| Item | Detail |
|---|---|
| Lead authorities | **Bank of England (BoE)** + **HM Treasury (HMT)** — joint programme |
| Legal basis | Existing BoE Acts; new primary legislation **would be required** before issuance — explicitly stated in 2024 consultation response |
| Consultation paper | "The digital pound: a new form of money for households and businesses?" (2023-02-07) |
| Consultation period | 2023-02-07 → 2023-06-30 |
| Consultation response | 2024-01-25 — joint BoE / HMT response |
| **Decision status** | **No decision to launch**; design phase ongoing |
| Design Phase 1 | 2024-01 onward |
| Design Phase 2 | 2025-2026+ (ongoing) |
| Earliest realistic issuance | Late 2020s (2027-2028 floor; later more probable) |
| Wholesale CBDC | Separately handled — BoE participates in DLT-based wholesale settlement experiments; not part of digital pound retail track |
| Cross-border CBDC | None planned at retail level; UK participates in [[fintech/bis-project-agora-overview|BIS Project Agorá]] on the wholesale side |

The BoE / HMT explicitly clarify in the 2024 response that **entering the design phase is not a decision to launch**. Issuance would require (i) new primary legislation, (ii) a separate BoE / HMT decision to launch, and (iii) materially higher political and policy consensus than currently exists. The 2024 response is structurally similar in cautiousness to the ECB digital euro Preparation Phase framing.

## Matrix B · Design choices — explicitly mirror the EU digital euro architecture

| Design choice | UK digital pound (proposed) | EU digital euro (proposed) | Notes |
|---|---|---|---|
| **Tiering model** | Two-tier intermediated via private-sector PSPs | Two-tier intermediated via supervised PSPs | Identical architectural family |
| **BoE / ECB direct distribution** | **No** — BoE explicitly will not distribute to consumers | **No** — ECB explicitly will not distribute | Same anti-disintermediation posture |
| **Wallet providers** | **Private-sector PIPs (Payment Interface Providers)** + ESIPs (External Service Interface Providers) | Supervised PSPs (banks, EMIs, payment institutions) | UK uses bespoke PIP/ESIP terminology; functionally equivalent |
| **Per-person holding limit** | **£10,000-£20,000 proposed range** (consultation paper; not finalised) | **€3,000-€4,000 proposed range** | UK proposed cap is **materially higher** than EU |
| **Interest paid** | Zero | Zero | Same |
| **Programmability** | Limited; BoE explicit caution against state-imposed programmability | Limited; ECB similar caution | Same |
| **Privacy posture** | **Strong** — BoE explicit that it would not see or hold individual transaction data; pseudonymous to the BoE; PIPs hold KYC | Strong (online mode supervised; offline mode cash-like) | UK proposes a stricter BoE-blindness model |
| **Online + offline modes** | Both contemplated; online primary in consultation | Both | Same |
| **Legal-tender status** | Contemplated; would require primary legislation | Contemplated under proposed Regulation | Same |
| **Reverse waterfall** | Not explicitly the EU mechanism; UK approach is "linked bank account" routing for over-cap | Reverse waterfall to linked commercial-bank account | Functionally similar |
| **Conditional payments / programmable money** | BoE explicit caution; would not be a feature in initial design | Same caution | Same |

The mirroring is intentional. The BoE and ECB have coordinated extensively at the technical level (via BIS and central-bank-to-central-bank dialogue) and the UK programme draws explicitly on EU design choices. The key difference is the **proposed holding cap range** — £10K-£20K is materially higher than €3K-€4K, partly reflecting different commercial-bank-deposit-base concerns and different consumer-utility assumptions.

## Matrix C · The 2024 consultation response — substantive findings

The 2024-01-25 joint BoE / HMT response is the single most important public document on the digital pound. Key findings from the 50,000+ responses received:

1. **Public concern over privacy** dominated the response set. The most-cited individual concern was **state visibility into personal transactions**.
2. **Concern over programmability** — many respondents feared "programmable money" being used for state-imposed expiry dates, restrictions on spending, or social-credit-style controls.
3. **Concern over disintermediation of commercial banks** — UK Finance and other banking-industry respondents emphasised systemic-risk implications of a high holding cap.
4. **Concern over cash availability** — many respondents valued physical cash and feared the digital pound would accelerate cash decline.
5. **Limited consumer pull** — most consumer respondents could not identify a use case that existing payment rails (Faster Payments, contactless cards, mobile wallets, account-to-account) did not already serve.

The BoE / HMT response committed to:

- **Strong privacy protections** — the BoE will not see or hold individual transaction data; identity is held by the regulated PIP; the BoE has only pseudonymous wallet identifiers.
- **No state-imposed programmability** — programmable features only at user / PIP initiation, not central bank.
- **Cash will remain** — explicit commitment that the digital pound will coexist with physical cash; not a replacement.
- **Higher holding cap than the ECB** — proposed £10K-£20K reflects bank-funding analysis specific to UK conditions and higher consumer-utility framing.
- **Primary legislation required before launch** — formally embedding the cautiousness.

This is the most-thoroughly-documented public response among comparable retail CBDC consultations. The 2024 response document is now widely cited in BIS / IMF / academic literature.

## Matrix D · Private-sector wallet model (PIP + ESIP)

The UK model uses two distinct private-sector roles:

```
   Bank of England (issuer of digital pound)
              │
              ▼
   PIP (Payment Interface Provider) — regulated wallet operator
              │
              ▼
   Consumer + merchant interaction via PIP wallet
              │
              ▼
   Optional ESIP (External Service Interface Provider) — value-add services
   (e.g., expense management, business accounting, integration with other apps)
```

- **PIP (Payment Interface Provider)** — primary wallet provider; consumer-facing; holds KYC; integrates with the BoE central ledger.
- **ESIP (External Service Interface Provider)** — secondary service layer; integrates with PIP-managed wallets; optional.

Why this matters:

- **Private-sector wallets exclusively** — BoE will not run a consumer app. This is more restrictive than the EU digital euro design (which similarly relies on PSPs but contemplates ECB-supervised distribution channels).
- **Commercial-bank role preserved** — UK banks would be eligible PIPs but so would non-bank fintech firms; the design avoids monopolising distribution by commercial banks.
- **Innovation surface for ESIPs** — explicit policy goal of allowing third-party innovation on top of the digital pound rail.
- **Privacy by design** — the BoE sees pseudonymous wallet IDs; the PIP holds identity; the ESIP sees only what the user authorises.

The PIP/ESIP terminology and structure is a UK innovation in the public CBDC vocabulary. Functionally it is similar to the ECB's "supervised PSP" model but cleaner in separating consumer-facing layer (PIP) from value-add services (ESIP).

## Matrix E · Holding limit debate — £10,000-£20,000 vs €3,000-€4,000

The proposed UK holding cap range is **materially higher** than the EU's. Why:

| Argument | Detail |
|---|---|
| **Higher utility ceiling** | A £10K-£20K wallet meaningfully replaces card spending for a UK consumer; €3K-€4K is closer to weekly grocery spend |
| **Higher GDP-per-capita-adjusted cap** | UK income/spending baseline supports higher cap |
| **More-banked population** | Higher banked share means more confidence that consumers will keep mainstream deposit balances with commercial banks |
| **Disintermediation analysis specific to UK** | BoE / HMT analysis suggests UK bank-funding implications at £10K-£20K cap are manageable |
| **Cap could move down before launch** | Banking-industry respondents argue for lower; final cap will be politically negotiated |
| **Cap could be variable** | Some responses suggested an initial-launch lower cap with gradual escalation |

The cap is the single most-debated design parameter, and the final number will materially affect the digital pound's competitive position vs commercial-bank deposits and private-sector stablecoins.

## Matrix F · Comparison to peer programmes

| Item | UK digital pound | [[fintech/e-euro-retail-rollout\|EU digital euro]] | Sweden e-krona | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | China e-CNY |
|---|---|---|---|---|---|
| Lead authority | BoE + HMT | ECB | Riksbank | Bank of Jamaica | PBoC |
| Phase (2026-05) | Design Phase (post-consultation) | Preparation Phase (extended) | Effectively paused | Live since 2022 | Live mass-rollout |
| Live retail | No | No | No | Yes | Yes |
| Legislation status | Primary legislation required; not yet introduced | EU co-decision Regulation pending | Parliamentary mandate not yet sought | BoJ Act amendment 2022 passed | PBoC Law 2020 amendment |
| Proposed holding cap | £10K-£20K | €3K-€4K | n/a (paused) | n/a (small-economy) | Operator-tier limits |
| Privacy posture | Strongest (BoE-blind via PIP) | Strong (online vs offline modes) | n/a | KYC-tier model | Controllable-anonymity |
| Earliest issuance | Late 2020s | 2027-2028 earliest | n/a | Already live | Already live |
| Status framing | Design Phase explicitly not commitment | Preparation Phase explicitly not commitment | Effectively paused | Operational | Active mass rollout |

The UK and EU programmes are clearly in the **same family** — same architectural choices, same cautiousness, same dependency on legislation, same multi-year horizon to launch. The structural difference is that the UK has more freedom to choose its own legislative timeline (post-Brexit, no EU co-decision constraint), but is using that freedom for **more cautious** sequencing rather than faster launch.

## Origin and evolution

```
2014-2020    BoE early CBDC research; multiple Discussion Papers / Working Papers
2020-03      BoE Discussion Paper "Central Bank Digital Currency — Opportunities, Challenges and Design"
2021-04      Chancellor of the Exchequer announces joint BoE / HMT Taskforce on a UK retail CBDC ("Britcoin" media tag)
2022         CBDC Engagement Forum + CBDC Technology Forum convened
2023-02-07   BoE + HMT consultation paper "The digital pound: a new form of money for households and businesses?" published
2023-06-30   Consultation period closes; 50,000+ responses received
2024-01-25   BoE + HMT response published — design phase confirmed; no decision to launch
2024         Design Phase 1 begins; private-sector PIP / ESIP framework articulation
2025         BoE Governor public statements emphasise design-not-launch framing; political caution mounts
2025-2026    Design Phase 2 ongoing; vendor / technology assessment in flight
2026-05      No issuance decision; design phase continues; primary legislation not yet introduced
2026-2027    (Anticipated) Decision Phase conditional on legislative timetable and political consensus
Late 2020s   (Earliest realistic) Live retail issuance, conditional on multiple gating decisions
```

**Pattern**: the UK is moving methodically through preparation without committing to launch. The political and policy posture is **more cautious** than the ECB's, in part because UK consumer-payment rails (Faster Payments, contactless, Open Banking) are already among the most efficient globally — the marginal benefit of a retail CBDC is harder to establish.

## Comparison to UK private-rail context

The competitive landscape the digital pound would enter:

- **Faster Payments Service (FPS)** — UK instant-payments rail, live since 2008, ubiquitous, near-zero fees for retail.
- **Contactless cards + Apple Pay / Google Pay** — saturated adoption.
- **Open Banking (PSD2-derived)** — UK is the global leader in Open Banking implementation; account-to-account payment rails live.
- **GBP private stablecoins** — limited; FCA regime more restrictive than EU MiCA on EMTs.
- **CHAPS / RTGS** — wholesale settlement; BoE's existing high-value rail being modernised in parallel (RTGS Renewal Programme).

The implication: UK consumers have **fewer payment-pain-points than EU consumers** that a retail CBDC would naturally solve. This makes the consumer-pull case weaker than in jurisdictions with less-developed payment rails (Brazil pre-Pix, India pre-UPI, Africa generally). The BoE's cautious posture is partly a reflection of this — there is no obvious problem the digital pound must solve.

The wholesale side is different. The BoE is actively engaged on:

- **[[fintech/bis-project-agora-overview|BIS Project Agorá]]** — UK participates with the BoE and is one of the seven G10 central banks involved.
- **RTGS Renewal Programme** — modernising the BoE's RTGS infrastructure to enable future synchronised settlement and DLT integration.
- **Wholesale settlement experiments** — explicit BoE work on whether tokenised central-bank money should be available for wholesale use cases.

The wholesale digital-pound track is **further advanced** than the retail track and may deliver value before the retail digital pound launches (if it ever does).

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|Four core trade-offs in CBDC architecture selection]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/central-banking-function-unbundling|central-banking function unbundling]]

## Sources

- Bank of England — digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- BoE + HMT — "The digital pound: a new form of money for households and businesses?" consultation paper (2023-02-07): https://www.bankofengland.co.uk/-/media/boe/files/paper/2023/the-digital-pound-consultation-paper.pdf
- HM Treasury — digital pound consultation page: https://www.gov.uk/government/consultations/the-digital-pound
- BoE + HMT — Response to the consultation (2024-01-25): https://www.bankofengland.co.uk/news/2024/january/response-to-the-digital-pound-consultation-paper
- BoE Discussion Paper "Central Bank Digital Currency — Opportunities, Challenges and Design" (2020-03)
- European Central Bank — Digital euro project page (peer comparator): https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- BIS Innovation Hub — Project Agorá public materials (UK / BoE participation)
- BoE RTGS Renewal Programme public materials (parallel wholesale-side modernisation)

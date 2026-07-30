---
title: eRupee India pilot status 2026 — retail + wholesale dual track, UPI interoperability, programmable-money use cases
aliases:
  - erupee-india-pilot-status
  - eRupee 2026 status
  - India digital rupee pilot
  - RBI CBDC pilot status
  - 数字卢比 试点
  - e-rupee retail wholesale dual track
domain: fintech
created: 2026-05-25
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, erupee, india, rbi, upi, retail-cbdc, wholesale-cbdc, programmable-money]
status: active
sources:
  - https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
  - https://www.rbi.org.in/SCRIPTs/BS_PressReleaseDisplay.aspx?prid=54616
  - https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54773
  - https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169
  - https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436
  - https://www.npci.org.in/what-we-do/upi/product-statistics
  - https://www.bis.org/about/bisih/topics/cbdc.htm
  - https://www.bis.org/publ/work1116.htm
---

# eRupee India pilot status 2026 — retail + wholesale dual track, UPI interoperability, programmable-money use cases

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on India's eRupee (Digital Rupee, e₹) for the 2026 pilot expansion phase. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] for the broader Indian digital-payment-stack geopolitics, and with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] for architecture context. For architecture peers see [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]; for cross-border wholesale context see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]].

> [!info] TL;DR
> As of the 2026-07 review, the eRupee remains on **two RBI pilot tracks**: **e₹-W**, launched in 2022-11, and **e₹-R**, launched in 2022-12. The RBI FAQ updated 2026-04-29 lists **16 wholesale bank and non-bank participants** and **19 retail banks**, plus participating non-bank wallet providers. It identifies **three ongoing wholesale use cases**: funds settlement for secondary-market government-securities transactions, inter-bank lending and borrowing settlement in the call-money market, and tokenised issuance and settlement of certificates of deposit. It also confirms that e₹ wallets can scan UPI merchant QRs; those payments follow UPI settlement timelines. The RBI FAQ and 2024-25 Annual Report describe programmable retail pilots, telecom-assisted and NFC offline exploration, and cross-border roadmap discussions, but they do not provide a current national active-user count, aggregate transaction volume, nationwide offline launch, or live cross-border CBDC corridor.

## Programme architecture

```
                       RBI Digital Rupee Programme
                                  │
              ┌───────────────────┴────────────────────┐
              ▼                                        ▼
         e₹-Wholesale                              e₹-Retail
        (CBDC-W, 2022-11)                       (CBDC-R, 2022-12)
              │                                        │
   Participating: 16 banks /              Participating: 19 banks
                  non-banks               + non-bank wallets
   Use: 3 ongoing cases:                  Use: P2P, P2M, gov transfer
        G-sec, call money,                      (pilot)
        tokenised CD issuance /
        settlement
              │                                        │
   Settlement: T+0 atomic                  Wallet: bank app
   on RBI ledger                          Tokens: ₹0.50, ₹1, ₹2, ₹5,
                                          ₹10, ₹20, ₹50, ₹100, ₹200,
                                          ₹500, ₹2000 denominations
              │                                        │
   Cross-border: exploratory               UPI QR scan supported
   in cited RBI sources                    (UPI settlement timeline)
```

The two tracks launched in 2022-11 and 2022-12. The current RBI FAQ describes three ongoing e₹-W use cases: funds settlement for secondary-market government-securities transactions, inter-bank lending and borrowing settlement in the call-money market, and tokenised issuance and settlement of certificates of deposit. RBI public materials also describe P2P / P2M payments plus selected programmable use cases for e₹-R. The two-tier route (RBI → participating institutions → users) can be compared with other intermediated CBDC designs through [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]], without inferring launch motive, technical stability, or relative adoption depth.

## Matrix A · Track-by-track status (most recent public)

The table uses the RBI's [Digital Rupee FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169), updated 2026-04-29, and [2024-25 Annual Report](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436), reviewed 2026-07-30. Counts are those stated in the current FAQ rather than inferred from older launch cohorts.

| Track | Programme name | Launch | Public status | Participants / scope |
|---|---|---|---|---|
| Wholesale | e₹-W (CBDC-W) | 2022-11 | Three ongoing use cases: secondary-market government-securities settlement, inter-bank call-money settlement, and tokenised issuance / settlement of certificates of deposit | 16 bank and non-bank participants in the RBI FAQ updated 2026-04-29 |
| Retail | e₹-R (CBDC-R) | 2022-12 | Pilot P2P and P2M payments through bank and non-bank wallets | 19 banks listed in the RBI FAQ updated 2026-04-29, plus participating non-bank wallet providers |
| Programmable | Conditional use through e₹-R wallets | Pilot expansion | RBI reports DBT, farmer-credit, carbon-credit and employee-allowance use cases | Selected sponsors, banks and beneficiaries |
| Offline | Connectivity-limited payment solutions | Experimental | Telecom-assisted and NFC approaches are being explored; not a nationwide offline launch | RBI and pilot participants |
| Cross-border | Bilateral / multilateral exploration | No live retail corridor disclosed | RBI reports roadmap and technical discussions with select countries | Exploratory |

The evidence-backed comparison is limited to the two pilot tracks and their published use cases. RBI materials do not establish a unique global ranking or state that one track was launched to validate the other. For separate jurisdiction records, see [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] and [[fintech/e-euro-retail-rollout|digital euro retail project]].

## Matrix B · Adoption metrics (most recent public)

The table reports only figures available in the cited RBI sources; it does not combine bank marketing disclosures into an unofficial national total. Sources: [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) and [RBI Annual Report 2024-25](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436).

| Metric | Most-recent public figure | Source |
|---|---|---|
| e₹-R current users | No current national active-user total in the cited RBI FAQ / Annual Report | RBI FAQ; RBI Annual Report 2024-25 |
| e₹-R cumulative transaction value | No current national aggregate in the cited sources | RBI FAQ; RBI Annual Report 2024-25 |
| Participating banks (retail) | 19 | RBI FAQ, updated 2026-04-29 |
| Wholesale participants | 16 banks and non-banks | RBI FAQ, updated 2026-04-29 |
| Ongoing wholesale use cases | 3: secondary-market government-securities settlement; call-money settlement; tokenised issuance / settlement of certificates of deposit | RBI FAQ, updated 2026-04-29 |
| UPI QR interoperability | An e₹ wallet can scan a UPI QR; those payments follow UPI settlement timelines | RBI FAQ |
| Programmability | Multiple pilots; Odisha's Subhadra Yojana used e₹ for around 88,000 beneficiaries at the report date | RBI Annual Report 2024-25 |
| Offline tests | Telecom-assisted and NFC solutions under exploration | RBI FAQ |

The cited RBI FAQ and Annual Report do not provide a current national active-user or aggregate transaction-volume series for e₹-R. Older wallet-registration figures and bank marketing disclosures should not be substituted for those measures. The published record supports multiple pilot use cases, but it does not by itself establish adoption slowdown, a strategic pivot, or a causal comparison with UPI. For the separately sourced DPI context, see [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]].

## Matrix C · Architecture and design choices

The design table is sourced to the [RBI CBDC Concept Note](https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218) and [Digital Rupee FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169). Product-app limits may vary and should not be treated as statutory caps.

| Design choice | What it is | Published boundary / function |
|---|---|---|
| Two-tier | RBI → participating institutions → users | RBI issues the CBDC; intermediaries provide wallets and user-facing services |
| Token-based (digital tokens in denominations) | e₹-R issued in conventional currency denominations (₹0.50 to ₹2000) | Described by RBI as a digital form of currency |
| UPI interoperability via QR bridge | eRupee wallets can scan UPI merchant QRs; the RBI FAQ states these payments use UPI settlement timelines | Leverage the existing acceptance network |
| Programmable money pilots | Conditional use for selected DBT, farmer-credit, carbon-credit and employee-allowance cases | Pilot scope only; not a general programmable-money rollout |
| Offline CBDC tests | Telecom-assisted and NFC approaches under exploration | Experimental; not a nationwide offline launch |
| No interest on retail wallets | Zero interest on e₹-R balance | The cited materials do not turn an app setting into a statutory rule |
| No published hard holding cap | Product-app limits may vary | App limits should not be treated as statutory caps |
| Wholesale RBI ledger | Three ongoing use cases: secondary-market G-sec settlement, call-money settlement, and tokenised issuance / settlement of certificates of deposit | Pilot scope stated in the RBI FAQ updated 2026-04-29 |

The RBI FAQ confirms **UPI interoperability via QR scan**: an e₹ wallet can scan a UPI merchant QR, and the resulting payment follows UPI settlement timelines. This establishes a payment path, not a cross-country ranking, adoption effect, or reason for users to choose one rail over another.

## Matrix D · Use cases and pilot tranches

下表の use-case status は [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) と [RBI Annual Report 2024-25](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436) に基づく（2026-07-30 確認）。

| Use case | Public status | Notes |
|---|---|---|
| P2P / P2M retail payments | Pilot live | Bank and non-bank e₹ wallets; CBDC and UPI merchant QR support |
| Programmable DBT / allowances | Multiple pilots | Includes farmer-related pilots, employee allowances and Odisha's Subhadra Yojana |
| Inter-bank G-sec settlement | Wholesale pilot live since 2022-11 | One of three ongoing wholesale use cases named in the FAQ |
| Call-money settlement | Wholesale pilot | Second ongoing wholesale use case named in the FAQ |
| Tokenised certificates of deposit | Wholesale pilot | Third ongoing use case: tokenised issuance and settlement of certificates of deposit |
| Cross-border CBDC settlement | Under exploration | RBI reports work on bilateral roadmaps and multilateral initiatives; no live corridor in the cited sources |
| Offline payment | Experimental | Telecom-assisted and NFC approaches are being explored |

The cited sources establish the listed pilot use cases only. They do not document a cross-track interoperability timetable, a unified-stack timetable, or a strategic shift away from retail volume.

## Comparison to UPI dominance

The UPI column uses [NPCI's May 2026 product statistics](https://www.npci.org.in/product/upi/product-statistics); the e₹ column uses RBI sources and leaves unpublished aggregates blank rather than estimating them.

| Metric | UPI (May 2026) | eRupee retail |
|---|---|---|
| Monthly transactions | 23.20193 billion | No current national monthly aggregate in cited RBI sources |
| Monthly value | ₹29.9042421 trillion | No current national monthly aggregate in cited RBI sources |
| Domestic scope | Nationwide UPI network | Retail pilot |
| Wallet / user base | Not compared here; NPCI transaction statistics are not an active-user count | No current national active-user count in cited RBI sources |
| Merchant acceptance | UPI QR network | CBDC QR plus ability for e₹ wallets to scan UPI merchant QRs |
| Cross-border | Separate UPI-linkage programmes | CBDC cross-border work remains exploratory in the cited RBI sources |
| Underlying money | Commercial-bank money via VPA | Central-bank money |
| Programmability | None native | Programmable in pilots |

The table supports a scale comparison only for the published NPCI UPI transaction series. Because the cited RBI sources omit a current e₹ active-user and national aggregate-volume series, they do not support a quantified adoption gap, a causal explanation for adoption, or a forecast that programmability, offline capability, or cross-border work will drive usage.

For the broader Indian digital-stack story (UPI + MOSIP + ARC + JioCoin) see [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]. The eRupee fits into the same broader stack but is the central-bank-money rail rather than a rail-substitute.

## Cross-border and international engagement

The following table separates RBI's published CBDC exploration from live UPI links. Sources: [RBI Annual Report 2024-25](https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436) and [BIS Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm).

| Channel | Status | Notes |
|---|---|---|
| Bilateral CBDC work with select countries | Roadmap, technical aspects and use cases under exploration | RBI Annual Report does not identify a live corridor |
| Multilateral CBDC initiatives | Participation is being considered | Do not infer membership in a specific project without its participant list |
| BIS Project Agorá | RBI is not listed among the participating central banks on the cited BIS page | Project participation differs from general BIS membership |
| Existing UPI cross-border links | Live payment-rail links are separate from CBDC | Do not label UPI settlement as cross-border e₹ |

The cited sources support only exploratory bilateral / multilateral CBDC work and separate live UPI links. They do not establish a live e₹ corridor, a chosen bloc strategy, or UPI as the designated extension channel for CBDC.

## Origin and evolution

```
2017-2020     RBI internal study + IDRBT working group on CBDC
2021-01       RBI Governor public commitment to CBDC pilot
2022          Finance Act 2022 amends RBI Act to enable CBDC issuance
2022-10       RBI Concept Note on CBDC published
2022-11       e₹-W (wholesale) pilot launches (9 banks, secondary G-sec settlement)
2022-12       e₹-R (retail) pilot launches (4 cities first, 4 banks)
2023          Retail pilot expansion + UPI QR interoperability bridge live
2023-2024     Programmable-money pilots begin (agricultural subsidy, welfare)
2024          Offline-CBDC tech tests
2024-2025     RBI reports programmable retail and offline-solution pilots
2025-01       RBI FAQ lists 15 retail banks and 14 wholesale participants
2024-2025     RBI reports G-sec and call-money wholesale use cases
2024-2025     Cross-border roadmaps and technical aspects remain exploratory
2026-04       Current RBI FAQ lists 19 retail banks, 16 wholesale participants,
              and 3 ongoing wholesale use cases, adding tokenised CD issuance / settlement
```

The timeline records disclosed milestones and pilot boundaries. It does not establish current active-user scale, aggregate volume, adoption momentum, comparative success, or the cause of programme pacing.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## Sources

- Reserve Bank of India — Concept Note on Central Bank Digital Currency (October 2022): https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218
- RBI — Wholesale CBDC pilot launch (2022-11-01): https://www.rbi.org.in/SCRIPTs/BS_PressReleaseDisplay.aspx?prid=54616
- RBI — Retail CBDC pilot launch (2022-12-01): https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54773
- RBI Annual Report 2024-25 — Payment and Settlement Systems chapter: https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436
- RBI — Digital Rupee FAQ (updated 2026-04-29): https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169
- NPCI — UPI Product Statistics: https://www.npci.org.in/what-we-do/upi/product-statistics
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint"
- BIS Project mBridge MVP report and public materials
- BIS Project Agorá public materials: https://www.bis.org/about/bisih/topics/fmis/agora.htm

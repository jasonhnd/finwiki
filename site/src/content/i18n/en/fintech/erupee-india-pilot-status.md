---
source: fintech/erupee-india-pilot-status
source_hash: cc40eabaa2d26659
lang: en
status: machine
fidelity: ok
title: "eRupee India pilot status 2026 — retail + wholesale dual track, UPI interoperability, programmable-money use cases"
translated_at: 2026-05-31T06:16:15.715Z
---

# eRupee India pilot status 2026 — retail + wholesale dual track, UPI interoperability, programmable-money use cases

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on India's eRupee (Digital Rupee, e₹) for the 2026 pilot expansion phase. It pairs with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] for the broader Indian digital-payment-stack geopolitics, and with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] for architecture context. For architecture peers see [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]; for cross-border wholesale context see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] and [[fintech/bis-project-agora-overview|BIS Project Agorá]].

> [!info] TL;DR
> By mid-2026 the eRupee runs on **two parallel pilot tracks** under RBI supervision: **wholesale CBDC (live since 2022-11)** used by primary dealers for secondary-market G-sec settlement, and **retail CBDC (live since 2022-12)** used by 5M+ end-users across 20+ cities via 17 participating banks. Three structural features distinguish India: (a) UPI interoperability via QR bridge since 2023, (b) programmable-money pilots for agricultural and welfare disbursement, (c) offline-CBDC technical tests for low-connectivity geographies. The dominant constraint is **not** technology — it is **UPI's own scale** (22B+ monthly transactions per NPCI) which leaves consumers with no felt benefit from switching wallets to the eRupee.

## Programme architecture

```
                       RBI Digital Rupee Programme
                                  │
              ┌───────────────────┴────────────────────┐
              ▼                                        ▼
         e₹-Wholesale                              e₹-Retail
        (CBDC-W, 2022-11)                       (CBDC-R, 2022-12)
              │                                        │
   Participating: ~9 banks                Participating: 17 banks
   Use: secondary G-sec                   Use: P2P, P2M, gov transfer
        settlement (live)                       (pilot)
              │                                        │
   Settlement: T+0 atomic                  Wallet: bank app
   on RBI ledger                          Tokens: ₹0.50, ₹1, ₹2, ₹5,
                                          ₹10, ₹20, ₹50, ₹100, ₹200,
                                          ₹500, ₹2000 denominations
              │                                        │
   Interop bridges: none yet              UPI QR interop: live from 2023
   (cross-border MoUs                     (any UPI QR → eRupee payment)
   under discussion)
```

The two tracks were launched five weeks apart on purpose: the wholesale leg validated the central-bank ledger plumbing in a low-population-high-value environment (~9 primary-dealer banks settling G-sec); the retail leg then extended into a population-scale low-value environment using the same architecture. By 2026 both tracks are technically stable but at very different adoption depths. The two-tier choice (RBI → participating banks → users) puts eRupee in the same architecture paradigm as China's e-CNY and the EU's intermediated digital euro — see [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]] for the cross-paradigm trade-offs.

## Matrix A · Track-by-track status (most recent public)

| Track | Programme name | Launch | Coverage (2026-05) | Active participants |
|---|---|---|---|---|
| Wholesale | e₹-W (CBDC-W) | 2022-11 | All-India for participating primary dealers; secondary G-sec settlement live, expanded use cases (call money / repo) in pilot since 2023-2024 | ~9 banks: SBI, BoB, ICICI, IDFC First, HDFC, Yes, Kotak, IndusInd, HSBC India |
| Retail | e₹-R (CBDC-R) | 2022-12 | 20+ cities across 4 retail-pilot phases; nation-wide bank coverage on the participating-bank side | 17 banks including SBI, ICICI, HDFC, IDFC First, Yes, Kotak, Canara, Union Bank, BoB, BoI, IndusInd, Federal, HSBC, Bandhan, Karnataka Bank, IDBI, plus payments-app integration |
| Programmable | Earmarked / conditional payments via e₹-R wallet | 2023+ | Pilot scope: agricultural subsidy, welfare-cash transfer, government-services-fee | Subset of e₹-R participants on selected schemes |
| Offline | Offline-CBDC NFC / proximity tech tests | 2024+ | Pilot-only; not a separately launched public product | RBI-led with bank partners |
| Cross-border | MoU-stage with select counterparties (UAE, Singapore mentioned in public discussions) | None live as of 2026-05 | None | None operational |

The eRupee is the **only major-economy CBDC programme to launch wholesale and retail simultaneously**. RBI chose this design because India's payment-rail context is unusual — UPI already handles retail volume at population scale via NPCI, so the e₹-R must demonstrate a marginal benefit (offline, programmability, central-bank-money status) rather than simply replicating UPI's function. This positions India differently from peers: see [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]] for the China retail-volume-led posture and [[fintech/e-euro-retail-rollout|digital euro retail rollout]] for the EU anti-disintermediation-first posture.

## Matrix B · Adoption metrics (most recent public)

| Metric | Most-recent public figure | Source |
|---|---|---|
| e₹-R retail users (cumulative) | **5M+ as of 2024 reporting** (RBI annual disclosures + bank reporting) | RBI Annual Report 2023-24; 2024-25 disclosures |
| e₹-R cumulative retail tx volume | **INR 10B+ cumulative** order-of-magnitude (sum across participating banks; not officially aggregated by RBI in monthly form) | Bank disclosures + RBI press materials |
| e₹-W daily tx | Inter-bank G-sec settlement leg active daily; granular per-day volume not published | RBI press releases on wholesale CBDC pilot |
| Cities covered (retail) | 20+ across the four retail-pilot phases (Mumbai, Delhi, Bengaluru, Bhubaneswar, etc.) | RBI press releases (2022-12 launch + phase expansions) |
| Participating banks (retail) | 17 | RBI press releases |
| Participating banks (wholesale) | ~9 primary dealers | RBI press releases |
| UPI QR interop | Live from 2023 | RBI + NPCI joint announcements |
| Offline-CBDC tests | Multiple pilots (2024-2025); no scaled rollout | RBI press materials |

The "5M+" retail-user figure is the most-cited number but it is a **cumulative wallet count**, not an active monthly user count. UPI itself, by contrast, processed **22B+ monthly transactions** at 2025-2026 NPCI run-rate — a four-order-of-magnitude gap. This gap explains why RBI's retail eRupee pace has visibly slowed during 2025 and the programme's strategic emphasis has shifted toward **wholesale + programmable** use cases where eRupee has a clearer differentiated value. The same value-prop dynamic shapes the broader DPI export story — see [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] for how UPI, MOSIP, and ARC together constitute the visible Indian payment-stack abroad while eRupee remains the quietly-built central-bank-money complement.

## Matrix C · Architecture and design choices

| Design choice | What it is | RBI rationale |
|---|---|---|
| Two-tier | RBI → participating banks → users | Preserve commercial-bank role, deposit base, and existing distribution channels |
| Token-based (digital tokens in denominations) | e₹-R issued in conventional currency denominations (₹0.50 to ₹2000) | Replicate the "currency-like" feel; consistent with cash mental model |
| UPI interoperability via QR bridge | eRupee wallets can pay any UPI QR; UPI users can receive into eRupee via the same QR | Leverage UPI distribution; avoid creating a parallel acceptance network from scratch |
| Programmable money pilots | Smart-contract-style earmarking for selected use cases (agricultural input subsidy, welfare transfer) | Differentiate from UPI; tie to government cash-transfer policy |
| Offline CBDC tests | NFC / proximity payment without active internet | Address last-mile connectivity in rural India |
| No interest on retail wallets | Zero interest on e₹-R balance | Prevent deposit displacement; consistent with global CBDC consensus |
| No published hard holding cap | Daily transaction limits via app configuration | Flexibility for use-case calibration; explicit caps not codified |
| Wholesale RBI ledger | T+0 atomic settlement for G-sec | Operational efficiency in secondary market |

The most distinctive architecture decision is **UPI interoperability via QR bridge from 2023**. No other major-economy CBDC programme has the same level of integration with an existing fast-payment rail. The trade-off is that interop also reduces the perceived need to use the eRupee at all — UPI works, so why switch?

## Matrix D · Use cases and pilot tranches

| Use case | Status (2026-05) | Notes |
|---|---|---|
| P2P retail payments | Live; available in 20+ cities via 17 participating banks | Most common pilot use case |
| P2M retail (merchant) | Live; many small-merchant pilots; UPI QR interop helps acceptance | Merchant adoption uneven |
| Government cash transfer (welfare / subsidy) | Pilot; programmable money rails | Strategic priority for differentiation from UPI |
| Agricultural subsidy (e.g. fertiliser input subsidy) | Pilot; programmable earmarking | Targeted to specific commodity-input use |
| Inter-bank G-sec settlement (wholesale) | Live since 2022-11; routine | Anchor wholesale use case |
| Call money / repo settlement | Pilot expansion in 2023-2024 | Wholesale use case extension |
| Cross-border CBDC settlement | None live; MoU discussions only | Future-state |
| Offline payment (low-connectivity) | Pilot-only tests | Not scaled |
| Inter-CBDC (e.g. bridge with another country's CBDC) | None live; observer to mBridge discussions | Future-state |
| Cross-border with non-CBDC counterpart | Live in policy discussions only (UAE, Singapore, etc.) | Not yet operational |

The strategic emphasis has visibly shifted between 2024 and 2026 from **"retail eRupee will be a third major payment rail next to UPI and cash"** toward **"eRupee is a complement to UPI, focused on use cases where central-bank money and programmability matter."** The 2026-Q1 RBI interoperability tests between wholesale and retail are technical groundwork for a unified CBDC stack rather than a retail-volume push.

## Comparison to UPI dominance

| Metric | UPI (2025-2026) | eRupee retail (2024-2026) |
|---|---|---|
| Monthly transactions | **22B+** (NPCI run-rate) | Pilot volume; not aggregated publicly at scale |
| Monthly value | **₹29.5 trillion+** per NPCI | INR 10B+ cumulative across all of 2022-2026 |
| Cities / coverage | All-India (with international expansion to UAE / Singapore / France etc.) | 20+ pilot cities |
| Wallet base | 350M+ active users | 5M+ cumulative wallets |
| Merchant acceptance | Universal (60M+ QRs) | Pilot merchant cohorts |
| Cross-border | Live: UAE, Singapore, Bhutan, Nepal, Maldives, Mauritius, France, Sri Lanka | None live |
| Underlying money | Commercial-bank money via VPA | Central-bank money |
| Programmability | None native | Programmable in pilots |

UPI's dominance is the single largest reason eRupee retail adoption is slow. From a consumer perspective the eRupee delivers central-bank-money status and programmability — neither of which a typical user values in a P2P or P2M transaction. UPI delivers ubiquity and zero-friction acceptance which the user values intensely. The strategic question for RBI: **can programmable-money welfare delivery + offline-CBDC + future cross-border use create a meaningful adoption pull**, or does the eRupee remain a strategically important but volume-marginal complement?

For the broader Indian digital-stack story (UPI + MOSIP + ARC + JioCoin) see [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]. The eRupee fits into the same broader stack but is the central-bank-money rail rather than a rail-substitute.

## Cross-border and international engagement

| Channel | Status | Notes |
|---|---|---|
| RBI ↔ central-bank-of-UAE MoU (discussions) | Discussion stage; no live CBDC settlement | UPI ↔ AANI live separately |
| RBI ↔ MAS Singapore (discussions) | Discussion stage | UPI ↔ PayNow live separately |
| RBI ↔ mBridge observer | Discussion stage | No formal joining as of 2026-05 |
| RBI ↔ BIS Project Agorá | India is **not** a Project Agorá participant (Agorá is the 7 G10 central banks); RBI is involved in BIS broader CBDC working groups | See [[fintech/bis-project-agora-overview|BIS Project Agorá]] |
| RBI ↔ Bhutan / Nepal cross-border | Live UPI integration; no CBDC-specific channel | UPI handles |
| RBI ↔ BIS CBDC working groups | Active participation | RBI is BIS member; CBDC is on BIS agenda |

India's cross-border CBDC posture is **not** to lead a new multilateral bloc (unlike China's mBridge-anchor role) but to engage bilaterally on a case-by-case basis. The UPI cross-border footprint is the natural extension channel; CBDC-specific cross-border arrangements lag.

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
2024-2025     Retail user base reaches 5M+ cumulative; volume growth slows
2025          Wholesale CBDC use case extension to call money / repo
2026-Q1       RBI wholesale ↔ retail interoperability tests
2026-Q2+      Cross-border MoU discussions (UAE, Singapore) continue
```

**Pattern**: India's eRupee programme moves on a steady, measured pace under RBI institutional control. There is no large-scale push from the Finance Ministry to accelerate retail, and the public narrative is shaped by the contrast with UPI's runaway success. The wholesale leg is the clearer success story — it is operationally routine and serves a real settlement need without competing with UPI.

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
- RBI Press Releases on wholesale CBDC pilot launch (2022-11-01) and retail CBDC pilot launch (2022-12-01): https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
- RBI Annual Report 2023-24 and 2024-25 — Payment and Settlement Systems chapter
- RBI Bulletin articles on Digital Rupee progress (2023-2025)
- NPCI — UPI Product Statistics: https://www.npci.org.in/what-we-do/upi/product-statistics
- BIS Innovation Hub — CBDC topic page: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint"
- BIS Project mBridge MVP report and public materials
- BIS Project Agorá public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

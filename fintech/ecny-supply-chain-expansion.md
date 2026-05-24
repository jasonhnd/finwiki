---
title: e-CNY supply-chain and cross-border expansion 2025-2026 — mBridge bridges, Belt-and-Road pilots, HK stablecoin competitive context
aliases:
  - ecny-supply-chain-expansion
  - e-CNY 2026 expansion
  - e-CNY cross-border bridges
  - 数字人民币 跨境扩展
  - e-CNY supply chain settlement
  - e-CNY mBridge expansion
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, e-cny, china, mbridge, hong-kong, belt-and-road, cross-border, supply-chain]
status: active
sources:
  - https://www.pbc.gov.cn/en/3688110/3688172/index.html
  - https://www.hkma.gov.hk/eng/news-and-media/press-releases/
  - https://www.bis.org/publ/othp59.htm
  - https://www.bis.org/about/bisih/topics/cbdc.htm
  - https://www.bot.or.th/en/news-and-media/news/
  - https://www.centralbank.ae/en/news/
---

# e-CNY supply-chain and cross-border expansion 2025-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on China's e-CNY for the 2025-2026 cross-border expansion phase. It is paired with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]] for the wholesale-bridge architecture, and with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]] for the competing private-stablecoin rail in the same regional market. For the broader CBDC architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]].

> [!info] TL;DR
> By mid-2026 the e-CNY is no longer a domestic-only retail experiment — it has become the **first major-economy retail-CBDC anchor of a multi-country wholesale settlement ring**. Three layers of expansion are now live: (i) the Hong Kong / Greater Bay Area cross-boundary retail link, (ii) the [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] wholesale bridge with HKMA / BoT / CBUAE / SAMA / (Brazil DREX from 2026 H2), and (iii) the Belt-and-Road project-pilot integration where Chinese SOE counterparties settle commodity and infrastructure invoices in e-CNY. The single largest 2026 competitive variable is **HKMA stablecoin licensing** ([[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing]]), which is creating a parallel HKD- and USD-denominated rail directly across the same channel.

## Three expansion layers

```
                  e-CNY 2025-2026 expansion (three layers)
                                  │
        ┌─────────────────────────┼─────────────────────────────────┐
        ▼                         ▼                                 ▼
  L1 Hong Kong link        L2 mBridge wholesale            L3 Belt-and-Road project pilots
   (retail / SME)           (central-bank RTGS)             (SOE commodity / infra)
        │                         │                                 │
   GBA residents          HKMA + BoT + CBUAE              CDB / China Exim / SOE
   e-CNY wallet           + SAMA + Brazil DREX            commodity invoice flow
   for cross-boundary     PvP atomic settlement           on chain
   payments               < 10 sec finality               (pilot scope)
        │                         │                                 │
        └─────────────────────────┴─────────────────────────────────┘
                                  │
              Competitive context: HKMA stablecoin licensing
              (HSBC HKD/USD + Anchorpoint HKD/USD — first batch 2026-05-21)
```

## Layer 1 — Hong Kong / GBA cross-boundary retail link

| Item | Detail |
|---|---|
| Programme | PBoC-HKMA technical interoperability for e-CNY use by HK residents in Mainland (Greater Bay Area first) and vice versa |
| Launch | Phased from 2020 PoC → 2023 expanded HK resident pilot → 2025 routine use in 11 GBA cities |
| Wallet model | HK residents open e-CNY wallets without Mainland bank account (low-tier KYC via HK ID + phone number); top-up via FPS (Faster Payment System) from HKD bank account |
| Coverage | All 11 GBA cities (Shenzhen, Guangzhou, Zhuhai, Foshan, Huizhou, Dongguan, Zhongshan, Jiangmen, Zhaoqing, plus HK + Macau) |
| Daily flow profile | Tourism + cross-boundary commuting + SME B2B in light goods |

The HK link is the **only major-economy retail CBDC currently usable by non-residents at scale**. It is the live model for what a "retail CBDC + cross-border" experience looks like. The PBoC chose Hong Kong as the test bed because (i) RMB internationalisation policy already designates Hong Kong as the offshore CNH hub, (ii) HKMA has the technical depth and political alignment to wire it up, and (iii) GBA integration is an explicit central-government policy priority. The architecture for the HK leg uses the same two-tier design as Mainland (PBoC → 10 operators → user) with the operators routing HK-side traffic through the HKMA-supervised infrastructure.

The HK link interacts directly with the [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] which entered into force 2025-08 and issued first licenses 2026-05-21 (HSBC + Standard Chartered Anchorpoint). The HSBC and Anchorpoint stablecoins will be HKD- or USD-pegged, sitting **next to but not inside** the e-CNY rail. The competitive question is whether HK SMEs prefer the e-CNY for Mainland-facing invoices (PBoC supervised) or HKMA-licensed HKD stablecoins for global flows (HKMA supervised).

## Layer 2 — mBridge wholesale ring

| Item | Detail |
|---|---|
| Programme | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] — multi-CBDC wholesale settlement platform |
| Founding central banks | PBoC + HKMA + Bank of Thailand + Central Bank of UAE (2021); Saudi Central Bank (SAMA) joined 2024-06 |
| BIS role | BIS Innovation Hub Hong Kong Centre incubated the project from 2021 → BIS exited operational role 2024-10 / 2025-10; technology handed to PBoC + HKMA + BoT + CBUAE as core operators |
| Architecture | DLT permissioned ledger; HotStuff BFT consensus; each central bank operates a validator node and its own CBDC ledger; shared mBridge ledger for cross-currency settlement |
| Settlement mode | PvP (Payment-versus-Payment) atomic settlement; sub-10-second finality in test |
| Status (2026-05) | Commercial operation phase since 2025-09 (post-MVP); integration testing with Brazil BCB DREX scheduled 2026 H2 |
| Coverage | Member-state GDP ≈ USD 23.3T; with observers (India / Russia / South Africa / Iran being discussed) potential influence range ≈ USD 35T per [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]] |

The e-CNY is one of five sovereign CBDCs (CN / HK / TH / AE / SA) that settle on the mBridge platform. Brazil DREX integration in 2026 H2 would be the first cross-continent connection, materially extending the influence range to a third of global GDP. The structural significance is not that mBridge processes huge volume today (it doesn't; volumes are small relative to SWIFT) but that **the multilateral political coalition exists and now operates under PBoC and HKMA leadership** rather than BIS-neutral governance — see [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]] and [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]].

The asymmetry with [[fintech/bis-project-agora-overview|BIS Project Agorá]] is the clearest 2025-2026 development. Agorá is the BIS-led 7-G10 wholesale-CBDC + tokenised-deposit experiment (US FRBNY + UK BoE + France BdF + BoJ + BoK + Banxico + SNB + 40+ commercial banks). mBridge is the non-G7 ring. There is no formal agreement between the two; technical interoperability is an open question. For the strategic contrast see [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]].

## Layer 3 — Belt-and-Road project-pilot integration

| Item | Detail |
|---|---|
| Channel | Chinese SOEs (CNPC, Sinopec, COSCO, etc.) + Chinese policy banks (China Development Bank, China Exim) using e-CNY for invoice settlement on cross-border infrastructure and commodity flows |
| Pilot announcements | Commodity-trade pilots (oil, soybean, rare-earth) with select counterparties; details often non-public; PBoC public communications cite "pilot expansion" without granular numbers |
| Settlement model | Wholesale e-CNY denomination + mBridge rails when both legs are mBridge-connected (e.g. PBoC-side ↔ CBUAE side) |
| Strategic frame | Tied into the broader Renminbi internationalisation programme and BRICS+ payment-coordination discussions |
| Volume | Small in absolute terms; the political and demonstration value is the binding constraint, not transaction throughput |

The Belt-and-Road integration is the most opaque layer. PBoC publications cite pilot expansion but rarely publish per-corridor volume. Public-source signals indicate active integration with (a) Saudi Aramco oil-export invoicing via the SAMA leg of mBridge (see [[fintech/sovereign-capital-pool-aramco-anchor|Aramco sovereign capital pool anchor]] for the related capital-pool context), (b) China-Brazil soybean-trade settlement (a recurring item in Brazilian press from 2024-2025), and (c) UAE-China gold-trade settlement via Dubai Multi Commodities Centre members.

The strategic posture from China is **not** "replace SWIFT" but **build a parallel rail for trade-counterparties who prefer not to clear in USD**. This is the same logic that underlies the [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]] thesis: monetary plumbing follows political alignment.

## Adoption metrics most-recent public

| Layer | Metric | Most-recent public figure | Source |
|---|---|---|---|
| Domestic e-CNY | Cumulative transaction value | **CNY 1 trillion+** (PBoC public communications 2024-2025) | PBoC press conferences and working-paper updates |
| Domestic e-CNY | Wallets registered | **180M+** personal wallets (working-paper estimate) | PBoC working paper |
| HK link | GBA cities covered | **11** of 11 GBA cities + Macau | HKMA / PBoC joint announcements |
| mBridge | Founding + new members | **6** central banks (CN / HK / TH / AE / SA; Brazil 2026 H2) | BIS Innovation Hub announcements 2024-2025 |
| mBridge | Settlement latency | **< 10 seconds** finality in test | BIS Project mBridge progress reports |
| Belt-and-Road | Live commodity corridors | Pilots cited but per-corridor volume not published | Mixed: PBoC + commercial counterparty press |

The cumulative-value figure is the single most-quoted statistic but it bundles **2020-2025 cumulative** across all retail, B2B, and government-cash-transfer use, and includes large headline transactions like state-mediated salary disbursements. Independent observers note that active-wallet activity is materially lower than the registered-wallet number; the gap is the standard cumulative-vs-active CBDC reporting issue (see counterpoints).

## Architecture and design choices in the expansion phase

| Design choice | What it is | Why China chose it |
|---|---|---|
| Two-tier (PBoC → 10 operators → user) | Same two-tier model from domestic e-CNY extended to HK / mBridge | Preserve commercial-bank role; consistent with [[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] dual-tier; political stability for the 4 state commercial banks |
| Controllable anonymity | Low-tier wallets anonymous below thresholds; high-tier KYC tracks identity | Compliance with AML expectations; preserves Mainland regulatory authority |
| Programmability (limited) | Smart-contract pilots since 2023 (e.g. earmarked-spend subsidy, ag subsidy) | Enable government-cash-transfer use cases without going full DeFi |
| No interest on retail e-CNY | Retail wallets pay zero | Prevent deposit displacement from commercial banks |
| Wholesale-only cross-border | mBridge handles cross-border with central-bank intermediation only; retail HK link is the exception | Capital-account control; FX policy preservation |
| PvP atomic settlement on mBridge | Eliminates Herstatt risk on cross-currency CBDC swap | Reduces correspondent-banking friction; faster trade-finance settlement |

The structural choice that defines the 2025-2026 phase is **wholesale ring first, retail cross-border second**. China is willing to make e-CNY easy to use across GBA borders but not (yet) globally. The mBridge ring is the safe-and-controlled extension because it is central-bank-to-central-bank, not retail-to-retail.

## HK stablecoin licensing as competitive context

The single most important 2026 development for the e-CNY expansion is **not** an e-CNY development — it is the [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]] which entered into force 2025-08 and issued first licenses 2026-05-21. The first batch:

| Licensee | Pegged currency | Notes |
|---|---|---|
| HSBC | HKD and USD | Global bank; lowest political-risk applicant |
| Standard Chartered Anchorpoint (joint vehicle with Animoca + HKT) | HKD and USD | Bank-plus-tech consortium; positioned for cross-border trade flows |

Mainland-backed applicants (Ant International, JD-HKD, Bank of China Hong Kong) and Tether were not in the first batch — see [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]. The competitive consequence is that **HK SMEs and global counterparties now have a licensed alternative to e-CNY for cross-border HKD- or USD-denominated invoicing**. The strategic question: does the HKMA stablecoin rail draw flow away from the e-CNY HK link, or do they co-exist because they serve different customer segments (e-CNY for Mainland-facing payments, HKD stablecoins for global trade)?

Public signals from HKMA suggest the framework is intended to **complement** not replace e-CNY. Both rails are HKMA-supervised on the HK side, both can in theory settle through HK banks, and both can in theory bridge into [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]] tokenised-deposit infrastructure. The practical question is whether SMEs prefer the lower-friction PBoC-licensed e-CNY or the higher-trust HKMA-licensed stablecoins for their specific cross-border use case.

## Origin and evolution

```
2014        PBoC e-CNY research begins
2017        BIS / IMF / ECB papers on CBDC architecture
2020-04     PBoC e-CNY domestic retail pilot launches (4 cities)
2021        BIS Innovation Hub Hong Kong Centre launches mBridge with PBoC + HKMA + BoT + CBUAE
2022-04     Domestic e-CNY pilot expands to 23 cities
2023        Cross-boundary HK resident pilots; smart-contract pilots begin
2024-03     HKMA Project Ensemble launches (tokenised-deposit sandbox in HK)
2024-04     BIS Project Agorá launches (7 G10 central banks + 40+ banks)
2024-06     Saudi SAMA joins mBridge (5th central bank)
2024-10     BIS announces exit from mBridge operational role
2024-10     BoJ + others convene at BIS technical workshops
2025-08     HKMA Stablecoin Ordinance enters into force
2025-09     mBridge enters commercial operation phase
2025        GBA 11-city e-CNY routine use; HK FPS top-up generalised
2026-Q1     India RBI wholesale ↔ retail interoperability tests (separate programme)
2026-Q2     mBridge ↔ Brazil DREX integration testing begins
2026-05-21  HKMA issues first stablecoin licenses (HSBC + Anchorpoint)
2026-H2     Brazil DREX expected formal mBridge integration
```

**Pattern of the expansion**: each layer was added when the prior layer reached threshold readiness — domestic stable → HK pilot → mBridge MVP → mBridge commercial → cross-continent integration. The political precondition for each step was bilateral or multilateral consent from the counterparty central bank, which is materially easier to obtain in a Belt-and-Road / BRICS+ alignment than from G7 monetary authorities.

## Counterpoints

- The "**CNY 1 trillion+ cumulative**" headline must be read alongside the **single-digit-million daily-active estimate** widely cited by independent observers. The PBoC has not published daily-active wallet counts. Cumulative-value framing is favourable; active-stock framing is less favourable.
- The **HK GBA link works for routine cross-boundary payments** but volume is small relative to existing FPS-CNAPS cross-boundary infrastructure. The e-CNY HK link is one option among many for GBA flow.
- mBridge volume **remains a small fraction of SWIFT cross-border** even after Brazil joins. The "$35T influence" framing ([[fintech/mbridge-non-usd-settlement-ring-scale|mBridge ring scale]]) is GDP coverage, not realised settlement volume.
- The Belt-and-Road pilot integration is **politically signalled but operationally opaque**. Per-corridor volume is rarely public, so the "China is settling commodity trade in e-CNY" framing rests on selected case studies and not a systematic settlement-share statistic.
- The HKMA stablecoin licensing regime is **a deliberate hedge against** sole reliance on e-CNY for HK cross-border digital payments. HSBC + Anchorpoint as the first licensees signals HKMA's preference for global-bank-led licensed stablecoins over Mainland-backed alternatives.
- BIS's 2024-2025 exit from mBridge operational governance was **public-statement-only**; the technology and personnel transition is gradual and the absence of BIS multilateral validation may slow Western central-bank willingness to engage with mBridge for technical interoperability.
- **Capital-account control** limits cross-border retail e-CNY adoption beyond GBA; even where the technology can work globally, FX policy will continue to restrict use.

## Open questions

- Does the e-CNY active-wallet count become a published statistic in 2026-2027, and at what active-rate level?
- Does Brazil DREX integration into mBridge in 2026 H2 yield a published commodity-trade volume figure?
- Do HK SMEs prefer e-CNY (PBoC-licensed) or HKMA-licensed HKD stablecoins for cross-border invoicing, and is the answer use-case-dependent?
- Do Mainland-backed applicants (Ant International, JD-HKD, BoCHK) receive HKMA stablecoin licenses in the second batch in 2026-Q4, and does that change the competitive balance with e-CNY?
- Does the e-CNY add token-based / smart-contract programmability at scale in 2026-2027, or does the design remain primarily account-tier-based?
- Does any G7 central bank formally engage with mBridge for technical interoperability with Project Agorá?
- Does India eRupee join the mBridge wholesale ring (currently in observer-only discussion), and at what point?
- Does the e-CNY rail interoperate with HKMA Project Ensemble tokenised deposits, creating a 3-asset (e-CNY + HKD tokenised deposit + HKMA-licensed HKD stablecoin) HK retail clearing surface?

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]
- [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]
- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## Sources

- People's Bank of China — e-CNY R&D progress and working papers: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- HKMA — Project Ensemble, e-HKD, and Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- BIS Innovation Hub — Project mBridge progress materials: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 "The next-generation monetary system — a blueprint" and the Innovation Hub mBridge MVP report
- BIS public statement on mBridge governance transition (2024-10 / 2025-10)
- Bank of Thailand — BoT press releases on cross-border CBDC: https://www.bot.or.th/en/news-and-media/news/
- Central Bank of the UAE — public communications: https://www.centralbank.ae/en/news/
- HKMA + PBoC joint announcements on cross-boundary e-CNY use in the Greater Bay Area
- HKMA Stablecoin Ordinance press releases (2025-08 entry into force; 2026-05-21 first license issuance)
- BIS Innovation Hub Project Agorá public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

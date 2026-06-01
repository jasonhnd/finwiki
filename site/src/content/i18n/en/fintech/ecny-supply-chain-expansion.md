---
source: fintech/ecny-supply-chain-expansion
source_hash: f95ba8067757ce33
lang: en
status: machine
fidelity: ok
title: "e-CNY supply-chain and cross-border expansion 2025-2026"
translated_at: 2026-05-31T06:16:15.662Z
---

# e-CNY supply-chain and cross-border expansion 2025-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on China's e-CNY for the 2025-2026 cross-border expansion phase. It is paired with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC cross-border settlement bridge]] for the wholesale-bridge architecture, and with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]] for the competing private-stablecoin rail in the same regional market. For the broader CBDC architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]].

> [!info] TL;DR
> By mid-2026 the e-CNY is no longer a domestic-only retail experiment. It has become the **first major-economy retail-CBDC anchor of a multi-country wholesale settlement ring**. Three layers of expansion are now live: (i) the Hong Kong / Greater Bay Area cross-boundary retail link, (ii) the [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] wholesale bridge with HKMA / BoT / CBUAE / SAMA / (Brazil DREX from 2026 H2), and (iii) the Belt-and-Road project-pilot integration where Chinese SOE counterparties settle commodity and infrastructure invoices in e-CNY. The single largest 2026 competitive variable is **HKMA stablecoin licensing** ([[fintech/hkma-stablecoin-licensing-overview|HKMA SC licensing]]), which is creating a parallel HKD- and USD-denominated rail directly across the same channel.

## Three expansion layers

```text
                  e-CNY 2025-2026 expansion (three layers)
                                  |
        --------------------------+---------------------------------
        |                         |                                 |
        v                         v                                 v
  L1 Hong Kong link        L2 mBridge wholesale            L3 Belt-and-Road project pilots
   (retail / SME)           (central-bank RTGS)             (SOE commodity / infra)
        |                         |                                 |
   GBA residents          HKMA + BoT + CBUAE              CDB / China Exim / SOE
   e-CNY wallet           + SAMA + Brazil DREX            commodity invoice flow
   for cross-boundary     PvP atomic settlement           on chain
   payments               < 10 sec finality               (pilot scope)
        |                         |                                 |
        --------------------------+---------------------------------
                                  |
              Competitive context: HKMA stablecoin licensing
              (HSBC HKD/USD + Anchorpoint HKD/USD - first batch 2026-05-21)
```

## Layer 1 - Hong Kong / GBA cross-boundary retail link

| Item | Detail |
|---|---|
| Programme | PBoC-HKMA technical interoperability for e-CNY use by HK residents in Mainland (Greater Bay Area first) and vice versa |
| Launch | Phased from 2020 PoC -> 2023 expanded HK resident pilot -> 2025 routine use in 11 GBA cities |
| Wallet model | HK residents open e-CNY wallets without a Mainland bank account (low-tier KYC via HK ID + phone number); top-up via FPS (Faster Payment System) from an HKD bank account |
| Coverage | All 11 GBA cities (Shenzhen, Guangzhou, Zhuhai, Foshan, Huizhou, Dongguan, Zhongshan, Jiangmen, Zhaoqing, plus HK + Macau) |
| Daily flow profile | Tourism + cross-boundary commuting + SME B2B in light goods |

The HK link is the **only major-economy retail CBDC currently usable by non-residents at scale**. It is the live model for what a "retail CBDC + cross-border" experience looks like. The PBoC chose Hong Kong as the test bed because (i) RMB internationalisation policy already designates Hong Kong as the offshore CNH hub, (ii) HKMA has the technical depth and political alignment to wire it up, and (iii) GBA integration is an explicit central-government policy priority. The HK leg uses the same two-tier design as Mainland e-CNY (PBoC -> 10 operators -> user), with operators routing HK-side traffic through HKMA-supervised infrastructure.

The HK link interacts directly with the [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]], which entered into force in 2025-08 and issued first licences on 2026-05-21 (HSBC + Standard Chartered Anchorpoint). The HSBC and Anchorpoint stablecoins are HKD- or USD-pegged and sit **next to, not inside,** the e-CNY rail. The competitive question is whether HK SMEs prefer e-CNY for Mainland-facing invoices under PBoC supervision or HKMA-licensed HKD stablecoins for global flows under HKMA supervision.

## Layer 2 - mBridge wholesale ring

| Item | Detail |
|---|---|
| Programme | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] - multi-CBDC wholesale settlement platform |
| Founding central banks | PBoC + HKMA + Bank of Thailand + Central Bank of the UAE (2021); Saudi Central Bank (SAMA) joined 2024-06 |
| BIS role | BIS Innovation Hub Hong Kong Centre incubated the project from 2021 -> BIS exited the operational role in 2024-10 / 2025-10; technology was handed to PBoC + HKMA + BoT + CBUAE as core operators |
| Architecture | DLT permissioned ledger; HotStuff BFT consensus; each central bank operates a validator node and its own CBDC ledger; a shared mBridge ledger handles cross-currency settlement |
| Settlement mode | PvP (payment-versus-payment) atomic settlement; sub-10-second finality in tests |
| Status (2026-05) | Commercial operation phase since 2025-09 (post-MVP); integration testing with Brazil BCB DREX scheduled for 2026 H2 |
| Coverage | Member-state GDP about USD 23.3T; with observers (India / Russia / South Africa / Iran under discussion), potential influence range is about USD 35T per [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]] |

The e-CNY is one of five sovereign CBDCs (CN / HK / TH / AE / SA) that settle on the mBridge platform. Brazil DREX integration in 2026 H2 would be the first cross-continent connection, materially extending the influence range to roughly one-third of global GDP. The structural significance is not that mBridge processes huge volume today; it does not, relative to SWIFT. The significance is that **the multilateral political coalition exists and now operates under PBoC and HKMA leadership** rather than BIS-neutral governance. See [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora]] and [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]].

The asymmetry with [[fintech/bis-project-agora-overview|BIS Project Agora]] is the clearest 2025-2026 development. Agora is the BIS-led 7-G10 wholesale-CBDC plus tokenised-deposit experiment (US FRBNY + UK BoE + France BdF + BoJ + BoK + Banxico + SNB + 40+ commercial banks). mBridge is the non-G7 ring. There is no formal agreement between the two, and technical interoperability remains an open question. For the strategic contrast, see [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge strategic comparison]].

## Layer 3 - Belt-and-Road project-pilot integration

| Item | Detail |
|---|---|
| Channel | Chinese SOEs (CNPC, Sinopec, COSCO, etc.) + Chinese policy banks (China Development Bank, China Exim) using e-CNY for invoice settlement on cross-border infrastructure and commodity flows |
| Pilot announcements | Commodity-trade pilots (oil, soybean, rare earth) with select counterparties; details are often non-public; PBoC public communications cite "pilot expansion" without granular numbers |
| Settlement model | Wholesale e-CNY denomination + mBridge rails when both legs are mBridge-connected (for example, PBoC-side <-> CBUAE-side) |
| Strategic frame | Tied to the broader renminbi internationalisation programme and BRICS+ payment-coordination discussions |
| Volume | Small in absolute terms; the binding constraint is political and demonstration value, not transaction throughput |

The Belt-and-Road layer is the most opaque. PBoC publications cite pilot expansion but rarely publish corridor-level volume. Public-source signals point to integration with (a) Saudi Aramco oil-export invoicing via the SAMA leg of mBridge, (b) China-Brazil soybean-trade settlement, and (c) UAE-China gold-trade settlement via Dubai Multi Commodities Centre members.

China's strategic posture is **not** "replace SWIFT" but **build a parallel rail for trade counterparties that prefer not to clear in USD**. This follows the same logic as [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]]: monetary plumbing follows political alignment.

## Most recent public adoption metrics

| Layer | Metric | Most recent public figure | Source |
|---|---|---|---|
| Domestic e-CNY | Cumulative transaction value | **CNY 1 trillion+** (PBoC public communications 2024-2025) | PBoC press conferences and working-paper updates |
| Domestic e-CNY | Registered wallets | **180M+** personal wallets (working-paper estimate) | PBoC working paper |
| HK link | GBA cities covered | **11** of 11 GBA cities + Macau | HKMA / PBoC joint announcements |
| mBridge | Founding + new members | **6** central banks (CN / HK / TH / AE / SA; Brazil 2026 H2) | BIS Innovation Hub announcements 2024-2025 |
| mBridge | Settlement latency | **< 10 seconds** finality in test | BIS Project mBridge progress reports |
| Belt-and-Road | Live commodity corridors | Pilots cited, but corridor-level volume not published | Mixed: PBoC + commercial counterparty press |

The cumulative-value figure is the most quoted statistic, but it bundles **2020-2025 cumulative** use across retail, B2B, and government cash-transfer cases, including large state-mediated salary disbursements. Independent observers note that active-wallet usage is materially lower than the registered-wallet number, which is the standard cumulative-vs-active CBDC reporting gap.

## Architecture and design choices in the expansion phase

| Design choice | What it is | Why China chose it |
|---|---|---|
| Two-tier (PBoC -> 10 operators -> user) | The domestic e-CNY two-tier model extended to HK / mBridge | Preserves the commercial-bank role; consistent with the dual-tier paradigm; politically stabilising for the 4 state commercial banks |
| Controllable anonymity | Low-tier wallets are anonymous below thresholds; high-tier KYC tracks identity | Aligns with AML expectations while preserving Mainland regulatory authority |
| Programmability (limited) | Smart-contract pilots since 2023 (for example, earmarked-spend subsidy and agriculture subsidy) | Enables government cash-transfer use cases without moving into full DeFi |
| No interest on retail e-CNY | Retail wallets pay zero interest | Prevents deposit displacement from commercial banks |
| Wholesale-only cross-border | mBridge handles cross-border activity only through central-bank intermediation; the HK retail link is the exception | Preserves capital-account control and FX policy |
| PvP atomic settlement on mBridge | Eliminates Herstatt risk on cross-currency CBDC swaps | Reduces correspondent-banking friction and speeds trade-finance settlement |

The defining structural choice in 2025-2026 is **wholesale ring first, retail cross-border second**. China is willing to make e-CNY easy to use across GBA borders, but not yet globally. The mBridge ring is the safe, controlled extension because it is central-bank-to-central-bank rather than retail-to-retail.

## HK stablecoin licensing as competitive context

The single most important 2026 development for e-CNY expansion is **not** an e-CNY development. It is the [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Ordinance]], which entered into force in 2025-08 and issued first licences on 2026-05-21. The first batch was:

| Licensee | Pegged currency | Notes |
|---|---|---|
| HSBC | HKD and USD | Global bank; lowest political-risk applicant |
| Standard Chartered Anchorpoint (joint vehicle with Animoca + HKT) | HKD and USD | Bank-plus-tech consortium positioned for cross-border trade flows |

Mainland-backed applicants (Ant International, JD-HKD, Bank of China Hong Kong) and Tether were not in the first batch. See [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]. The competitive consequence is that **HK SMEs and global counterparties now have a licensed alternative to e-CNY for cross-border invoicing denominated in HKD or USD**. The strategic question is whether the HKMA stablecoin rail will draw volume away from the e-CNY HK link, or whether both rails will coexist because they serve different customer segments.

Public signals from HKMA suggest the framework is intended to **complement**, not replace, e-CNY. Both rails are HKMA-supervised on the Hong Kong side, both can in principle settle through HK banks, and both can in principle connect into [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]] tokenised-deposit infrastructure. The practical question is whether SMEs prefer lower-friction PBoC-licensed e-CNY or higher-trust HKMA-licensed stablecoins for a given cross-border use case.

## Origin and evolution

```text
2014        PBoC e-CNY research begins
2017        BIS / IMF / ECB papers on CBDC architecture
2020-04     PBoC e-CNY domestic retail pilot launches (4 cities)
2021        BIS Innovation Hub Hong Kong Centre launches mBridge with PBoC + HKMA + BoT + CBUAE
2022-04     Domestic e-CNY pilot expands to 23 cities
2023        Cross-boundary HK resident pilots; smart-contract pilots begin
2024-03     HKMA Project Ensemble launches (tokenised-deposit sandbox in HK)
2024-04     BIS Project Agora launches (7 G10 central banks + 40+ banks)
2024-06     Saudi SAMA joins mBridge (5th central bank)
2024-10     BIS announces exit from mBridge operational role
2024-10     BoJ + others convene at BIS technical workshops
2025-08     HKMA Stablecoin Ordinance enters into force
2025-09     mBridge enters commercial operation phase
2025        GBA 11-city e-CNY routine use; HK FPS top-up generalised
2026-Q1     India RBI wholesale <-> retail interoperability tests (separate programme)
2026-Q2     mBridge <-> Brazil DREX integration testing begins
2026-05-21  HKMA issues first stablecoin licences (HSBC + Anchorpoint)
2026-H2     Brazil DREX expected formal mBridge integration
```

**Pattern of expansion**: each layer was added only after the previous layer reached threshold readiness - domestic stability -> HK pilot -> mBridge MVP -> mBridge commercial operation -> cross-continent integration. The political precondition for each step was bilateral or multilateral consent from the counterparty central bank, which is materially easier to obtain within a Belt-and-Road / BRICS+ alignment than from G7 monetary authorities.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three live paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC architecture choice: 4 core tradeoffs]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC cross-border settlement bridge]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora]]
- [[fintech/mbridge-six-central-banks-roster|mBridge six central banks roster]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge non-USD settlement ring scale]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoin Licensing Overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]
- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction-list monetary protectionism]]
- [[fintech/central-banking-function-unbundling|five-layer unbundling of central-banking functions]]

## Sources

- People's Bank of China - e-CNY R&D progress and working papers: https://www.pbc.gov.cn/en/3688110/3688172/index.html
- HKMA - Project Ensemble, e-HKD, and Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- BIS Innovation Hub - Project mBridge progress materials: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 "The next-generation monetary system - a blueprint" and the Innovation Hub mBridge MVP report
- BIS public statement on mBridge governance transition (2024-10 / 2025-10)
- Bank of Thailand - BoT press releases on cross-border CBDC: https://www.bot.or.th/en/news-and-media/news/
- Central Bank of the UAE - public communications: https://www.centralbank.ae/en/news/
- HKMA + PBoC joint announcements on cross-boundary e-CNY use in the Greater Bay Area
- HKMA Stablecoin Ordinance press releases (2025-08 entry into force; 2026-05-21 first licence issuance)
- BIS Innovation Hub Project Agora public materials: https://www.bis.org/about/bisih/topics/cbdc/agora.htm

---
title: Wholesale settlement network comparison matrix — Fnality fnPS / Partior / JPM Kinexys / mBridge / Project Agorá / Project Mariana
aliases:
  - wholesale-settlement-network-matrix
  - wholesale settlement six-way matrix
  - Fnality vs Partior vs Kinexys
  - mBridge vs Agora vs Mariana
  - central-bank-reserve vs commercial-deposit settlement matrix
  - wholesale CBDC vs deposit-token matrix
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, wholesale-settlement, cbdc, deposit-token, matrix, comparison, fnality, partior, jpmorgan, kinexys, mbridge, agora, mariana, central-bank-money, commercial-bank-money]
status: active
sources:
  - https://www.fnality.org/
  - https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality
  - https://www.partior.com/
  - https://www.mas.gov.sg/news/media-releases/2021/partior-launch
  - https://www.jpmorgan.com/kinexys
  - https://www.jpmorgan.com/onyx
  - https://www.bis.org/about/bisih/topics/cbdc.htm
  - https://www.bis.org/about/bisih/topics/cbdc/agora.htm
  - https://www.bis.org/publ/work1116.htm
---

# Wholesale settlement network comparison matrix — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the six-way side-by-side comparison matrix for the most-cited wholesale settlement networks. It complements the per-network deep dives at [[fintech/fnality-wholesale-settlement|Fnality fnPS]], [[fintech/partior-jpm-dbs-temasek-consortium|Partior]], [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]], [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]], and [[fintech/bis-project-agora-overview|BIS Project Agorá]]. For the governance pattern see [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]; for the central-banking-unbundling context see [[fintech/central-banking-function-unbundling|央行职能解体]]; for the interoperability story with stablecoins see [[fintech/circle-usdc-stablecoin|Circle USDC]] and [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]].

> [!info] TL;DR
> Six wholesale-settlement networks anchor the 2026-05 public dataset: **Fnality fnPS** (BoE-licensed central-bank-reserve token, GBP live 2024-Q2, 20+ shareholder banks), **Partior** (4-bank Singapore-MAS-licensed consortium, USD/SGD/EUR/GBP/JPY live, $1.5T cumulative), **JPM Kinexys** (single-bank-owned $5B/day, $1.5T cumulative, JPM Coin + Liink + Onyx Digital Assets), **mBridge** (BIS multi-CBDC bridge — PBoC/HKMA/BoT/CBUAE/SAMA after BIS exit 2025-10), **Project Agorá** (7 G10 central banks + 40 commercial banks, design-phase since 2024-04), and **Project Mariana** (BIS multi-CBDC FX swap PoC with BdF/MAS/SNB, completed 2023). Read across the matrix the structural pattern: **settlement asset (central-bank reserve vs commercial-bank deposit vs synthetic) is the binding regulatory variable**, **consortium membership shape (single-bank vs multi-bank vs central-bank-only) dictates governance speed**, and **only Fnality has 100% central-bank-reserve backing with full BoE approval as a systemic payment system**.

## Why a six-way comparison

Single-network narratives ("Fnality is the consortium model," "Kinexys is the single-bank model") capture different parts of the story but obscure the binding structural variable: **what settlement asset backs each token**. By placing all six networks side-by-side on **settlement asset / consortium membership / currencies live / daily volume / regulatory status / central-bank backing / interoperability with stablecoins**, the regulatory-arbitrage and competitive-positioning patterns become visible. The matrix also clarifies why **Fnality is the only currently live system with full RTGS-equivalent finality** (central-bank reserves), why **Kinexys leads in volume despite single-bank constraint** (decision speed without multi-shareholder coordination), and why **mBridge survived the BIS withdrawal** (the operational machinery was already running and the political coordination problem the BIS posed was already solved). For the broader institutional-stablecoin-deposit-token contrast see [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]].

## Matrix A · Settlement asset and finality

| Network | Settlement asset | Finality type | Equivalent to |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality fnPS]]** | **Central-bank reserves** (omnibus account at BoE / Fed / ECB / BoJ; 1:1 reserve-backed tokens) | **RTGS final settlement** (legally final) | Tokenised central-bank reserves |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | **Commercial-bank deposits** (4 main shareholder bank balance sheets interlocking) | Near-RTGS (atomic PvP on commercial-deposit basis) | Multi-bank commercial-deposit network |
| **[[fintech/jpm-onyx-wholesale-network\|JPM Coin (Kinexys)]]** | **JPM commercial-bank deposits** (single bank balance sheet) | Internal RTGS within JPM customer base | Single-bank tokenised deposit |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | **Wholesale CBDCs** of 5+ participating central banks (PBoC / HKMA / BoT / CBUAE / SAMA) | **RTGS final settlement** (atomic PvP) | Multi-currency wholesale CBDC bridge |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | **Mixed**: wholesale CBDCs (M0 central-bank money) + tokenised commercial bank deposits (M1) on shared platform | Design phase; finality model not yet fully specified | Hybrid M0 + M1 interoperability layer |
| **Project Mariana** | Synthetic — wholesale CBDC + automated market maker for cross-currency swap | PoC completed 2023; not in production | FX swap experiment using wCBDC + AMM |

**The central distinction is M0 vs M1 vs synthetic**: Fnality and mBridge use **M0 central-bank money** (tokenised reserves / wholesale CBDC); Partior and Kinexys use **M1 commercial-bank deposits**; Agorá explicitly experiments with **both layers simultaneously**; Mariana uses **synthetic wCBDC + AMM** as a research design. This is the single most consequential dimension because it determines (a) legal finality, (b) regulatory status, (c) whether the system can serve as final settlement vs intermediate settlement, and (d) whether the system competes with or complements existing RTGS rails.

## Matrix B · Consortium membership

| Network | Membership shape | Member count | Governance model |
|---|---|---|---|
| Fnality fnPS | **Multi-bank consortium + infrastructure** | **20+ shareholders**: Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, Sumitomo Mitsui, State Street, Nasdaq Ventures, DTCC, Euroclear | Multi-shareholder governance; slow decision speed (£ fnPS took 9 years from USC concept to launch) |
| Partior | **4 main shareholders + 30+ network members** | **JPMorgan + DBS + Temasek + Standard Chartered (2024)** | Singapore-anchored; faster than Fnality but slower than Kinexys |
| JPM Kinexys | **Single bank** | **JPM only** | Fastest decision speed; 180+ institutional clients via Liink |
| mBridge | **Central-bank consortium** | **5 active central banks** post-BIS exit: PBoC + HKMA + BoT + CBUAE + SAMA | Multi-central-bank with PBoC operational lead post-2025-10 BIS exit |
| Project Agorá | **G10 central banks + global commercial banks** | **7 G10 central banks** (FRBNY, BoE, BdF, BoJ, BoK, Banxico, SNB) + **40+ commercial banks** | BIS-coordinated; design phase |
| Project Mariana | **3 central banks** (PoC) | BdF + MAS + SNB | Time-limited research PoC (2022-2023) |

**Decision-speed scaling**: **Kinexys (1 bank) > Partior (4 banks) > mBridge (5 central banks) > Fnality (20+ banks) > Agorá (47+ institutions)**. The Fnality 9-year-to-launch vs Kinexys' 4-year-to-$1.5T comparison is the canonical case for "multi-shareholder governance is slow." But Fnality has central-bank-reserve backing that Kinexys structurally cannot match (a commercial bank cannot tokenise other banks' reserves), making the comparison about **scope of legitimacy** rather than pure speed.

## Matrix C · Currencies live (2026-05)

| Network | Currencies live | Currencies in pipeline |
|---|---|---|
| Fnality fnPS | **GBP** (£ fnPS live 2024-Q2; first commercial tx Lloyds × Santander × UBS) | **USD / EUR / JPY** in regulator negotiation (Fed / ECB / BoJ); 2026-2027 expected |
| Partior | **USD / SGD / EUR / GBP / JPY** (5 live) | **INR / IDR** planned 2026-Q1 |
| JPM Kinexys | **USD / EUR / GBP** (3 live); **SGD** planned 2026-Q2 | SGD via partnership; long-term JPY |
| mBridge | **CNY / HKD / THB / AED / SAR** (5 currencies tied to participating central banks) | Brazil DREX (BCB) Q2 2026 H2 interoperability test |
| Project Agorá | Test currencies for design phase; no production currencies live | n/a (Phase 2 design ongoing) |
| Project Mariana | EUR / SGD / CHF (PoC) | n/a (PoC completed 2023) |

**Currency coverage scoreboard**: Partior has the most production-live currencies (5), Fnality has the highest **regulatory weight** per currency (only one live, but it is BoE-approved central-bank-reserve-backed), mBridge has the largest **non-USD coverage**, Kinexys has the deepest single-currency penetration (USD). Agorá and Mariana are research/design programmes without production currency coverage.

## Matrix D · Daily volume and cumulative scale

| Network | Daily volume (2026-Q1) | Cumulative throughput | Equivalent to |
|---|---|---|---|
| Fnality fnPS | Growing post-launch; not yet at meaningful steady state | <£10B cumulative | Early-stage; first commercial year |
| Partior | Variable; sources suggest single-digit-billion per day | **~$1.5T cumulative** (since 2021-08 launch) | Comparable to Kinexys cumulative |
| JPM Kinexys | **$5B+ per day** average (~30-40% of USDC daily) | **$1.5T+ cumulative** (since 2024-11 rebrand) | Largest single-network volume |
| mBridge | Small but growing; specific 2026 daily volume not publicly disclosed | Estimated <$100B cumulative | Limited but politically important |
| Project Agorá | n/a (design phase) | n/a | n/a |
| Project Mariana | n/a (PoC completed) | n/a | n/a |

**Kinexys leads in volume** despite single-bank constraint — because JPM can deploy without coordinating with competitor banks. Partior is comparable on cumulative but represents 4-bank shared activity. Fnality is early-stage with central-bank-reserve backing as its long-term moat. mBridge has lower volume but **structurally different reach**: it covers non-USD cross-border commodity / oil settlement that no other network has access to.

## Matrix E · Regulatory status and central-bank backing

| Network | Lead regulator | Central-bank approval status | Regulatory category |
|---|---|---|---|
| Fnality fnPS | **Bank of England** | **BoE 2023-11 statement** confirms £ fnPS as systemically important payment system | **Licensed systemic payment system** (first globally) |
| Partior | **MAS Singapore** | MAS-licensed wholesale payment network operator | Singapore-anchored licensed PSP |
| JPM Kinexys | **OCC + Fed** (via JPM bank charter) | JPM Coin = on-balance-sheet commercial deposit; legally part of JPM banking license | Tokenised commercial deposit within G-SIB charter |
| mBridge | **PBoC + HKMA + participating central banks** post-BIS exit | Central-bank-operated platform; no separate regulatory category | Multi-central-bank inter-CB platform |
| Project Agorá | **BIS coordination + 7 G10 central banks** | Research and design phase; no licensing yet | BIS Innovation Hub design phase |
| Project Mariana | BdF + MAS + SNB | Completed PoC | Research-only |

The regulatory category split is binary: **Fnality is the only system that is both production-live AND holds a dedicated systemic-payment-system license**. Kinexys is technically a feature of JPM's banking license rather than a separate licensed system. Partior is licensed as a PSP. mBridge operates as a multi-central-bank inter-CB platform without commercial regulatory framework. Agorá and Mariana are explicitly research / design.

## Matrix F · Technology stack

| Network | DLT platform | Consensus | Cross-chain interop |
|---|---|---|---|
| Fnality fnPS | Enterprise Ethereum (Quorum → migrated to **Hyperledger Besu**) | Permissioned BFT | SWIFT bridging (2024-Q4 partnership) |
| Partior | **Hyperledger Fabric** derivative | Permissioned BFT | Bilateral bridges with member banks' internal systems |
| JPM Kinexys | **Quorum** (JPM-developed Ethereum fork; donated to ConsenSys) | Permissioned BFT | JPMD extension to public chains: Base (2025-11) → **Canton** (2026-01) |
| mBridge | Custom permissioned DLT | **HotStuff BFT** | None planned beyond participating CB networks |
| Project Agorá | Not finalised; design phase exploring multiple platforms | TBD | Designed to be platform-agnostic |
| Project Mariana | Distributed ledger with AMM module | PoC ledger | n/a (research) |

The technology stack pattern: **all production systems use permissioned BFT consensus** (no public-chain consensus); **Quorum / Besu / Fabric** dominate; **Canton emerges in 2026** as JPM's chosen privacy-and-composability target for JPMD; **HotStuff BFT** is unique to mBridge. The platform-agnosticism of Agorá is a deliberate design choice — BIS coordination across 7 G10 central banks cannot mandate a single stack.

## Matrix G · Cross-border PvP / DvP capability

| Network | PvP across currencies | DvP for securities | Atomic FX swap |
|---|---|---|---|
| Fnality fnPS | **Cross-currency PvP via fnPS GBP × fnPS USD** (planned 2026-2027 when $ fnPS live) | DvP modules in development | Designed as Herstatt-risk-killer |
| Partior | **24×7 atomic FX swap** (live 2024-Q3) | DvP for tokenised securities | **Direct competitor to Fnality cross-currency PvP** |
| JPM Kinexys | Cross-currency within Kinexys via Onyx Digital Assets | DvP for intraday repo + tokenised treasuries ($700B+ cumulative) | Within JPM customer base |
| mBridge | **PvP atomic settlement** between participating CBDCs | Securities DvP not primary scope | Across mBridge participants |
| Project Agorá | **Cross-border PvP + DvP** are explicit design goals for Phase 2 | DvP design phase | Cross-currency atomic swap is design goal |
| Project Mariana | **Cross-currency wCBDC swap via AMM** (PoC result) | n/a | Mariana's central PoC finding |

**Herstatt risk elimination** is the explicit goal of all six networks — but only **Partior (live), Fnality (regulator-approved, $-fnPS pending), and mBridge (live PvP across 5 central banks)** can claim production capability. Kinexys's cross-currency capability is internal-only; Agorá and Mariana are design / research. Project Mariana's 2023 PoC validated that wCBDC + AMM could clear cross-currency FX atomically — a foundational result that influenced both Agorá design and mBridge architecture.

## Matrix H · Interoperability with stablecoins / tokenized assets

| Network | Stablecoin interop | Tokenised MMF / RWA interop |
|---|---|---|
| Fnality fnPS | Not direct; fnPS is final settlement asset and SC could redeem into fnPS via member bank | **BUIDL as IM collateral** in CME/DTCC derivative scenarios (2026-Q1 test) |
| Partior | Stablecoin-bridge concept (USDC) discussed but not live | Tokenised asset DvP design |
| JPM Kinexys / JPMD | **JPMD is JPM's commercial deposit tokenised onto Base + Canton public chains** — direct SC-adjacent | **[[fintech/blackrock-buidl-tokenized-mmf-overview\|BUIDL]] IM collateral** + Onyx Digital Assets repo |
| mBridge | Not in scope; mBridge is wCBDC-only | Not in scope |
| Project Agorá | **Explicit goal**: stablecoin → bank deposit → wCBDC three-layer pass-through | Tokenised securities + RWA interop is design goal |
| Project Mariana | n/a | n/a |

This is the dimension where **Agorá's strategic positioning becomes clearest**: it explicitly aims to be the **interoperability layer between stablecoins (private), tokenised deposits (commercial-bank M1), and wholesale CBDC (central-bank M0)**. If the three-circle MRA framework crystallises (US GENIUS + EU MiCA + HK / SG / JP cross-recognition), Agorá would become the natural settlement anchor where compliant stablecoins ultimately redeem. Fnality and Kinexys both have stablecoin-adjacent strategies but are not architected as multi-layer interoperability fabrics.

## Matrix I · Strategic position relative to SWIFT

| Network | Replaces SWIFT messaging? | Replaces SWIFT correspondent banking? | Coexists with SWIFT? |
|---|---|---|---|
| Fnality fnPS | No (uses SWIFT messaging via 2024-Q4 partnership) | Partial — settlement leg moves on Fnality | **Yes — SWIFT × Fnality public collaboration** |
| Partior | Partial (replaces correspondent-banking 2-3-day settlement) | **Yes** for member-bank corridors | Coexists for non-member corridors |
| JPM Kinexys / Liink | **Liink replaces SWIFT MT messaging** (1100+ banks) | Partial for JPM customer base | Direct competitor to SWIFT in some segments |
| mBridge | **Yes — explicitly designed to bypass SWIFT** for non-USD cross-border CBDC | **Yes** | Politically intended to coexist outside SWIFT |
| Project Agorá | Designed to interoperate with SWIFT messaging | Replaces correspondent-banking leg | **Coexists — SWIFT is participant** |
| Project Mariana | n/a | n/a | n/a |

The SWIFT-relationship pattern: **Fnality + Agorá explicitly coexist with SWIFT** (Agorá includes SWIFT as participant; Fnality has a public collaboration); **Partior + Kinexys partially replace** SWIFT in specific corridors; **mBridge explicitly bypasses** SWIFT for non-USD CBDC corridors. The 2024-Q4 SWIFT × Fnality collaboration is the clearest signal that incumbent message-rail and tokenised-settlement-asset are not zero-sum — SWIFT provides cross-border messaging, Fnality provides on-ledger settlement, and the two layers connect.

## Why these dimensions

The nine matrix axes (settlement asset, consortium membership, currencies live, daily volume, regulatory status, central-bank backing, interoperability with stablecoins, technology stack, SWIFT relationship) were chosen because they map to the **gating variables in wholesale settlement adoption**:

1. **Settlement asset** — determines legal finality and regulatory classification (M0 vs M1 vs synthetic).
2. **Consortium membership** — determines decision speed and governance complexity (single-bank vs multi-bank vs central-bank-only).
3. **Currencies live** — measures realised scope (5 currencies vs 1).
4. **Daily volume** — measures realised adoption (the only metric that matters post-launch).
5. **Regulatory status** — determines whether the system can serve as final settlement (Fnality's BoE license is unique).
6. **Central-bank backing** — determines legitimacy ceiling.
7. **Stablecoin interoperability** — determines whether the system fits into the post-GENIUS three-circle MRA framework.
8. **Technology stack** — determines operational risk and cross-chain reach.
9. **SWIFT relationship** — determines competitive positioning vs the incumbent.

These nine dimensions together explain why **Fnality is the only system that can claim "tokenised central-bank money"** as a product category, why **Kinexys leads in raw throughput** despite single-bank constraint, why **Partior occupies the Asian-corridor commercial-deposit middle ground**, why **mBridge survived BIS withdrawal** (operational machinery already running), and why **Agorá is positioned as the future interoperability layer** rather than a competitor to any of the live systems. The matrix view exposes these structural patterns side-by-side.

## Reading the matrix

- **Fnality is "tokenised central-bank money"; Kinexys is "tokenised commercial-bank deposit"; mBridge is "wholesale CBDC bridge"; Partior is "multi-bank deposit consortium"**. These are four structurally different products that get casually grouped as "wholesale settlement" but have completely different regulatory classifications and finality properties.
- **Fnality's 9-year-to-launch reflects multi-shareholder governance friction**. Kinexys's 4-year-to-$1.5T reflects single-bank decision speed. The architectural choice (consortium vs single-bank) drives the speed differential — but Fnality has central-bank-reserve backing that Kinexys structurally cannot match.
- **BIS withdrawal from mBridge (2025-10) was a political decision, not a technical one**. The operational platform continued under PBoC operational lead; if anything, BIS withdrawal **clarified the political alignment** rather than disrupting operations. Agorá launch (2024-04) was BIS's pivot toward a Western-led parallel.
- **Project Mariana's 2023 PoC** validated that wCBDC + AMM could clear cross-currency FX atomically — a foundational result that influenced both Agorá design and mBridge architecture. Many of Agorá's Phase 2 design goals trace back to Mariana findings.
- **Stablecoin interoperability is the next-decade boundary condition**. The three-circle MRA framework (GENIUS / MiCA / EPI) plus Agorá's M0-M1-stablecoin three-layer model implies an architecture where compliant stablecoins ultimately redeem into wholesale CBDC via tokenised bank deposits. Fnality and Kinexys are positioned for this architecture; mBridge is not (wCBDC-only by design).
- **SWIFT × Fnality is the canonical "incumbent + tokenised" partnership** (2024-Q4). It suggests SWIFT's strategic positioning is to **provide cross-border messaging on top of tokenised settlement assets** rather than to replace its own correspondent-banking model directly.
- **The "consortium of 20" vs "single bank" vs "five central banks" governance comparison** is the canonical case for the [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]] tradeoff: speed vs scope of legitimacy.

## Counterpoints

- **Daily volume figures are approximations**: Kinexys's "$5B per day" includes Liink messaging (not pure settlement value) and Onyx Digital Assets repo; Partior's $1.5T cumulative includes large notional cross-border PvP that may not be fully equivalent to Kinexys's customer-facing flow. Apples-to-apples volume comparison is difficult.
- **Fnality's "9 years from USC to launch" is partly attributable to BoE's deliberate-process approach** — Fnality could have launched faster with less regulatory rigor; the 9-year timeline includes legitimate central-bank diligence.
- **mBridge's 5-central-bank coverage** is concentrated in non-aligned-with-G7 jurisdictions, which is the political feature, not a bug; comparing mBridge to Agorá by "central-bank count" misses the political-alignment dimension.
- **Project Agorá's "design phase ongoing 2 years post-launch"** is concerning — Phase 2 was originally targeted for 2025; 2026-05 remains design phase. The 7-central-bank coordination problem may take longer than initially scoped.
- **Partior's "multi-bank consortium"** is structurally smaller (4 main shareholders) than Fnality's (20+). Calling both "consortium" is a categorical simplification.
- **Kinexys's "single-bank" advantage** is also a ceiling — Kinexys cannot extend network effects beyond JPM customer base, capping its TAM at JPM's deposits (~$2.4T) regardless of execution quality.
- **Project Mariana ended in 2023** — including it in a "current matrix" is partial, but its design influence on Agorá and mBridge justifies inclusion.
- **The "central-bank money vs commercial-bank money"** distinction matters legally but is **commercially less binding** than the matrix suggests — a corporate treasurer transferring $100M between subsidiaries does not care deeply whether the underlying settlement asset is M0 or M1, as long as finality is achieved in seconds.
- **The Canton Network emergence** (JPM JPMD on Canton from 2026-01, Goldman + DTCC + BlackRock collaboration) is a parallel infrastructure layer not captured in this six-way matrix; it functions more as a privacy-enabled execution platform than a settlement network in the Fnality / Partior sense.

## Open questions

- Will **$ fnPS** receive Fed approval by 2027, or will the GENIUS Act's stablecoin focus push Fed to defer indefinitely (protecting USDC/USDT supremacy in tokenised-USD settlement)?
- Will **Project Agorá Phase 2** launch in 2026 H2 or extend into 2027? The longer it remains design-phase, the more market share will accrue to live systems (Fnality, Partior, Kinexys, mBridge).
- Will **mBridge join with Brazil DREX** (Q2 2026 H2 interoperability) to establish a cross-continental non-USD settlement corridor, and would this trigger US / Fed counter-positioning of Agorá?
- Will **Partior absorb central-bank reserve settlement** (upgrade from commercial-deposit to central-bank-reserve backing per Fnality model) once Standard Chartered's input on the Singapore-anchored governance matures?
- Will **JPM Coin / JPMD on Canton + Base** become the de facto institutional tokenised-USD anchor, displacing the USDC-led wholesale segment that GENIUS §501 enables?
- Will the **Bank of England's RTGS Renewal Programme** integrate fnPS as a native settlement asset, completing the BoE's domestic wholesale-tokenisation stack?
- Will **mBridge's 35% GDP-coverage** translate into >$100B annual settlement by 2028, or remain at small-percentage-of-SWIFT levels given commodity-trade conversion frictions?
- Will the **next wave of wholesale-settlement networks** emerge from BRICS+ (India RBI Project Nexus, Russia post-sanctions infrastructure) or be subsumed by mBridge's expansion?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/fnality-wholesale-settlement|Fnality fnPS]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior JPM / DBS / StanChart / Temasek consortium]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累计量级]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
<!-- /wiki-links:managed -->

## Sources

- Fnality International public materials: https://www.fnality.org/
- Bank of England — statement on Fnality (2023-11): https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality
- Partior public materials: https://www.partior.com/
- MAS — Partior launch announcement (2021): https://www.mas.gov.sg/news/media-releases/2021/partior-launch
- JPMorgan Kinexys public site: https://www.jpmorgan.com/kinexys
- JPMorgan Onyx legacy page: https://www.jpmorgan.com/onyx
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá page: https://www.bis.org/about/bisih/topics/cbdc/agora.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024): https://www.bis.org/publ/work1116.htm
- BIS Project Mariana — published research report (2023)
- SWIFT × Fnality collaboration announcement (2024-Q4): https://www.swift.com/news-events/news/swift-fnality-collaboration

---
source: fintech/wholesale-settlement-network-matrix
source_hash: b41f34036af7abde
lang: ja
model: canonical-ja-source-sync
status: machine
fidelity: ok
title: "Wholesale settlement network comparison matrix — Fnality fnPS / Partior / JPM Kinexys / mBridge / Project Agorá / Project Mariana"
translated_at: 2026-07-28T19:25:32.800Z
---

# Wholesale settlement network comparison matrix — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the six-way side-by-side comparison matrix for the most-cited wholesale settlement networks. It complements the per-network deep dives at [[fintech/fnality-wholesale-settlement|Fnality fnPS]], [[fintech/partior-jpm-dbs-temasek-consortium|Partior]], [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]], [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]], and [[fintech/bis-project-agora-overview|BIS Project Agorá]]. For the governance pattern see [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]; for the central-banking-unbundling context see [[fintech/central-banking-function-unbundling|央行职能解体]]; for the interoperability story with stablecoins see [[fintech/circle-usdc-stablecoin|Circle USDC]] and [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]].

> [!info] TL;DR
> The six initiatives do not share one maturity or legal category. **Fnality £FnPS** made pilot payments in December 2023 and began operating under Bank of England limits in December 2024. **Partior** is a private, permissioned commercial clearing-and-settlement network whose public materials identify USD, EUR and SGD commercial flows. **Kinexys by J.P. Morgan** reported more than $1.5T processed since inception and more than $2B in average daily volume in November 2024. **mBridge** reached MVP in mid-2024, after which the BIS handed the project to its central-bank partners in October 2024. **Project Agorá** delivered a prototype—not a finished product—in May 2026 with eight central banks and more than 40 financial institutions. **Project Mariana** was a research proof of concept completed in 2023. Comparisons should therefore separate settlement asset, operator, production status and disclosed volume rather than rank all six as equivalent live networks. ^[Fnality: https://www.bankofengland.co.uk/report/2024/rtgs-and-chaps-annual-report-2023-24 and https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; Partior: https://partior.com/about-us/our-story; Kinexys: https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys; mBridge: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; Agorá: https://www.bis.org/about/bisih/topics/fmis/agora.htm; Mariana: https://www.bis.org/about/bisih/topics/cbdc/mariana.htm]

## Why a six-way comparison

Single-network narratives ("Fnality is the consortium model," "Kinexys is the single-bank model") capture different parts of the story but obscure the central structural variable: **what settlement asset or claim is being transferred**. Placing the initiatives side-by-side on settlement asset, operator, maturity, disclosed currencies and volume helps distinguish regulated infrastructure from bank products and research prototypes. The public evidence does not support treating every row as a production network or inferring a single speed ranking from consortium size. For the broader institutional-stablecoin-deposit-token contrast see [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]. ^[Status sources: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## Matrix A · Settlement asset and finality

| Network | Settlement asset | Finality type | Equivalent to |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality £FnPS]]** | Funds held through the Bank of England RTGS Omnibus Account | DLT-based sterling settlement under operating limits | Central-bank-money-backed settlement representation |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | **Commercial-bank deposits** (4 main shareholder bank balance sheets interlocking) | Near-RTGS (atomic PvP on commercial-deposit basis) | Multi-bank commercial-deposit network |
| **[[fintech/jpm-onyx-wholesale-network\|JPM Coin (Kinexys)]]** | **JPM commercial-bank deposits** (single bank balance sheet) | Internal RTGS within JPM customer base | Single-bank tokenised deposit |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | Wholesale CBDCs of participating central banks | MVP enabled for real-value transactions subject to jurisdictional readiness | Multi-currency wholesale-CBDC platform |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | Tokenised central-bank reserves + tokenised commercial-bank deposits | Prototype demonstrated atomic multi-currency settlement | Research prototype combining central- and commercial-bank money |
| **Project Mariana** | Synthetic — wholesale CBDC + automated market maker for cross-currency swap | PoC completed 2023; not in production | FX swap experiment using wCBDC + AMM |

**The central distinction is the legal claim represented by the settlement asset**: Fnality uses funds held through a central-bank omnibus account; mBridge experiments with wholesale CBDCs; Partior and Kinexys operate through commercial-bank-money arrangements; Agorá combines tokenised central-bank reserves and commercial-bank deposits in a prototype; and Mariana tested wCBDC/AMM mechanics. The legal and operational consequences must be assessed from each system's rules and jurisdiction rather than inferred from a simple M0/M1 label.

## Matrix B · Consortium membership

| Network | Membership shape | Member count | Governance model |
|---|---|---|---|
| Fnality fnPS | **Multi-bank consortium + infrastructure** | **20+ shareholders**: Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, Sumitomo Mitsui, State Street, Nasdaq Ventures, DTCC, Euroclear | Multi-shareholder governance; slow decision speed (£ fnPS took 9 years from USC concept to launch) |
| Partior | **4 main shareholders + 30+ network members** | **JPMorgan + DBS + Temasek + Standard Chartered (2024)** | Singapore-anchored; faster than Fnality but slower than Kinexys |
| JPM Kinexys | **Single bank** | **JPM only** | Fastest decision speed; 180+ institutional clients via Liink |
| mBridge | **Central-bank consortium** | Five participating central banks after SAMA joined in 2024 | BIS handed the project to the partners in October 2024 |
| Project Agorá | **Central banks + regulated financial institutions** | **8 central banks + 40+ financial institutions** | BIS/IIF-coordinated prototype; further testing planned |
| Project Mariana | **3 central banks** (PoC) | BdF + MAS + SNB | Time-limited research PoC (2022-2023) |

Membership counts describe governance breadth, but they do not by themselves prove a decision-speed ordering. Kinexys is operated within one banking group, Partior has multiple shareholders and participating banks, Fnality has a multi-bank shareholder base, and mBridge / Agorá coordinate public authorities. Their timelines also reflect different legal, settlement-asset and project-scope requirements.

## Matrix C · Currencies live (2026-05)

| Network | Currencies live | Currencies in pipeline |
|---|---|---|
| Fnality £FnPS | **GBP**; pilot payments in Dec. 2023 and operation under limits from Dec. 2024 | Future currency systems are not treated here as dated commitments |
| Partior | **USD / EUR / SGD** commercial flows disclosed | Additional currencies, including JPY, are expansion / study items rather than confirmed live currencies |
| JPM Kinexys | Public materials describe multi-currency digital payments, but this review does not assert a complete live-currency list | FX functionality and additional use cases continue to evolve |
| mBridge | **CNY / HKD / THB / AED / SAR** (5 currencies tied to participating central banks) | Brazil DREX (BCB) Q2 2026 H2 interoperability test |
| Project Agorá | Test currencies for design phase; no production currencies live | n/a (Phase 2 design ongoing) |
| Project Mariana | EUR / SGD / CHF (PoC) | n/a (PoC completed 2023) |

The disclosed currency sets are not directly comparable: Partior identifies USD, EUR and SGD commercial flows; Fnality currently operates a sterling system under limits; mBridge's currencies follow participating central banks; and Agorá / Mariana are prototype or research programmes rather than production currency networks. ^[Partior: https://partior.com/about-us/our-story and https://partior.com/news-and-insights/nh-nonghyup-bank-pilots-blockchain-based-cross-border-payments-with-partior; Fnality: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26]

## Matrix D · Daily volume and cumulative scale

| Network | Daily volume (2026-Q1) | Cumulative throughput | Equivalent to |
|---|---|---|---|
| Fnality £FnPS | Not disclosed in the reviewed BoE sources | Not disclosed | Operation under limits |
| Partior | Not disclosed in the reviewed official sources | Not disclosed | Commercial network; no unsupported estimate inserted |
| JPM Kinexys | **More than $2B average per day** (Nov. 2024 disclosure) | **More than $1.5T since inception** | Bank-operated production platform |
| mBridge | Not disclosed | Not disclosed | MVP; real-value use subject to jurisdictional readiness |
| Project Agorá | n/a (design phase) | n/a | n/a |
| Project Mariana | n/a (PoC completed) | n/a | n/a |

Kinexys is the only row in this comparison for which the reviewed official source publishes both a daily average and a since-inception value. The absence of comparable official values for the other rows means this table cannot support a cross-network volume ranking. ^[https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys]

## Matrix E · Regulatory status and central-bank backing

| Network | Lead regulator | Central-bank approval status | Regulatory category |
|---|---|---|---|
| Fnality £FnPS | **Bank of England** | Recognised and supervised; operation remains subject to BoE limits and expectations | DLT-based sterling payment system using an RTGS omnibus account |
| Partior | Participating institutions and applicable jurisdictions | Reviewed public sources describe a private institutional network; they do not support the prior blanket “MAS-licensed PSP” claim | Commercial clearing-and-settlement infrastructure |
| JPM Kinexys | **OCC + Fed** (via JPM bank charter) | JPM Coin = on-balance-sheet commercial deposit; legally part of JPM banking license | Tokenised commercial deposit within G-SIB charter |
| mBridge | Participating central banks after the BIS handover in Oct. 2024 | MVP enabled for real-value transactions subject to jurisdictional readiness | Multi-central-bank experimental platform |
| Project Agorá | **BIS / IIF + 8 central banks** | Prototype delivered; further testing planned | Public-private research prototype |
| Project Mariana | BdF + MAS + SNB | Completed PoC | Research-only |

The regulatory categories are not binary. Fnality is a recognised and supervised payment system operating under limits; Kinexys sits within J.P. Morgan's banking perimeter; Partior is commercial infrastructure used by regulated financial institutions; mBridge is a central-bank MVP; and Agorá / Mariana are research prototypes. A platform's technology label does not establish its legal finality or licensing status. ^[Fnality status: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; project status: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm and https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## Matrix F · Technology stack

| Network | DLT platform | Consensus | Cross-chain interop |
|---|---|---|---|
| Fnality fnPS | Enterprise Ethereum (Quorum → migrated to **Hyperledger Besu**) | Permissioned BFT | SWIFT bridging (2024-Q4 partnership) |
| Partior | **Hyperledger Fabric** derivative | Permissioned BFT | Bilateral bridges with member banks' internal systems |
| JPM Kinexys | **Quorum** (JPM-developed Ethereum fork; donated to ConsenSys) | Permissioned BFT | JPMD extension to public chains: Base (2025-11) → **Canton** (2026-01) |
| mBridge | Custom permissioned DLT | **HotStuff BFT** | None planned beyond participating CB networks |
| Project Agorá | Not finalised; design phase exploring multiple platforms | Not publicly specified in the cited design materials | Designed to be platform-agnostic |
| Project Mariana | Distributed ledger with AMM module | PoC ledger | n/a (research) |

The reviewed systems use controlled-access infrastructure, but their published materials do not expose a uniform level of technical detail. Agorá is a prototype involving eight central banks and more than 40 financial institutions; its official result should not be read as a commitment to one production stack. Technology comparisons must therefore distinguish verified implementation disclosures from roadmap or inference.

## Matrix G · Cross-border PvP / DvP capability

| Network | PvP across currencies | DvP for securities | Atomic FX swap |
|---|---|---|---|
| Fnality fnPS | **Cross-currency PvP via fnPS GBP × fnPS USD** (planned 2026-2027 when $ fnPS live) | DvP modules in development | Designed as Herstatt-risk-killer |
| Partior | **24×7 atomic FX swap** (live 2024-Q3) | DvP for tokenised securities | **Direct competitor to Fnality cross-currency PvP** |
| JPM Kinexys | Cross-currency within Kinexys via Onyx Digital Assets | DvP for intraday repo + tokenised treasuries ($700B+ cumulative) | Within JPM customer base |
| mBridge | **PvP atomic settlement** between participating CBDCs | Securities DvP not primary scope | Across mBridge participants |
| Project Agorá | **Cross-border PvP + DvP** are explicit design goals for Phase 2 | DvP design phase | Cross-currency atomic swap is design goal |
| Project Mariana | **Cross-currency wCBDC swap via AMM** (PoC result) | n/a | Mariana's central PoC finding |

PvP and atomic settlement are common design goals, but production status differs. Partior discloses commercial flows, Fnality operates its sterling system under limits, mBridge is an MVP whose real-value use depends on jurisdictional readiness, Agorá delivered a prototype, and Mariana completed a PoC. The reviewed sources do not establish that Mariana directly determined the architectures of Agorá or mBridge.

## Matrix H · Interoperability with stablecoins / tokenized assets

| Network | Stablecoin interop | Tokenised MMF / RWA interop |
|---|---|---|
| Fnality fnPS | Not direct; fnPS is final settlement asset and SC could redeem into fnPS via member bank | **BUIDL as IM collateral** in CME/DTCC derivative scenarios (2026-Q1 test) |
| Partior | Stablecoin-bridge concept (USDC) discussed but not live | Tokenised asset DvP design |
| JPM Kinexys / JPMD | **JPMD is JPM's commercial deposit tokenised onto Base + Canton public chains** — direct SC-adjacent | **[[fintech/blackrock-buidl-tokenized-mmf-overview\|BUIDL]] IM collateral** + Onyx Digital Assets repo |
| mBridge | Not in scope; mBridge is wCBDC-only | Not in scope |
| Project Agorá | The official prototype scope combines tokenised commercial-bank deposits and central-bank reserves; it does not establish a live stablecoin pass-through | Further use cases remain subject to future testing |
| Project Mariana | n/a | n/a |

Agorá's official prototype scope is narrower than the prior claim: it tests tokenised commercial-bank deposits and central-bank reserves on a shared programmable arrangement. Any future role as a stablecoin interoperability layer is an analytical possibility, not a delivered capability or stated MRA-dependent roadmap. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

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
7. **Interoperability** — determines how the system can connect to other payment, token and asset networks.
8. **Technology stack** — determines operational risk and cross-chain reach.
9. **SWIFT relationship** — determines competitive positioning vs the incumbent.

These nine dimensions show why the six rows are not substitutes: Fnality is supervised sterling infrastructure backed through a central-bank omnibus account; Kinexys is a bank-operated platform with disclosed production volume; Partior is a multi-bank commercial network; mBridge is a central-bank MVP; and Agorá / Mariana are prototypes. The matrix is a classification aid, not evidence for a universal ranking.

## Reading the matrix

- **Fnality is "tokenised central-bank money"; Kinexys is "tokenised commercial-bank deposit"; mBridge is "wholesale CBDC bridge"; Partior is "multi-bank deposit consortium"**. These are four structurally different products that get casually grouped as "wholesale settlement" but have completely different regulatory classifications and finality properties.
- **Different timelines do not isolate one cause**. Fnality and Kinexys differ in operator, legal perimeter, settlement asset and scope, so their elapsed time and volume cannot be attributed solely to shareholder count.
- **The BIS handover of mBridge occurred in October 2024, not October 2025**. The BIS stated that the project had reached a stage where the partners could carry it forward and explicitly rejected failure or political considerations as the reason. The official material does not identify a PBoC-only operational lead. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/speeches/sp241031.htm]
- **Project Mariana's 2023 PoC** validated that wCBDC + AMM could clear cross-currency FX atomically — a foundational result that influenced both Agorá design and mBridge architecture. Many of Agorá's Phase 2 design goals trace back to Mariana findings.
- **Stablecoin interoperability remains a scenario, not an Agorá result**. The official Agorá prototype combines tokenised commercial-bank deposits and central-bank reserves; extending that design to stablecoins would require additional legal, governance and technical work.
- **SWIFT × Fnality is the canonical "incumbent + tokenised" partnership** (2024-Q4). It suggests SWIFT's strategic positioning is to **provide cross-border messaging on top of tokenised settlement assets** rather than to replace its own correspondent-banking model directly.
- **The "consortium of 20" vs "single bank" vs "five central banks" governance comparison** is the canonical case for the [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]] tradeoff: speed vs scope of legitimacy.

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
- Bank of England — first pilot payments (Dec. 2023): https://www.bankofengland.co.uk/report/2024/rtgs-and-chaps-annual-report-2023-24
- Bank of England — £FnPS operation under limits from Dec. 2024: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26
- Partior public materials: https://www.partior.com/
- MAS — Partior launch announcement (2021): https://www.mas.gov.sg/news/media-releases/2021/partior-launch
- JPMorgan — Introducing Kinexys, including disclosed volume: https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys
- BIS — Project mBridge MVP and October 2024 handover: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
- BIS — Project Agorá prototype (May 2026): https://www.bis.org/about/bisih/topics/fmis/agora.htm
- BIS — Project Mariana: https://www.bis.org/about/bisih/topics/cbdc/mariana.htm
- SWIFT × Fnality collaboration announcement (2024-Q4): https://www.swift.com/news-events/news/swift-fnality-collaboration

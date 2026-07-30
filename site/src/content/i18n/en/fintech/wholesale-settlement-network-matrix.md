---
source: fintech/wholesale-settlement-network-matrix
source_hash: e6b1b4edd96bb3e9
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Wholesale settlement network comparison matrix — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana"
translated_at: 2026-07-29T17:58:52.645Z
---
# Wholesale settlement network comparison matrix — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the six-way side-by-side comparison matrix for the most-cited wholesale settlement networks. It complements the per-network deep dives at [[fintech/fnality-wholesale-settlement|Fnality fnPS]], [[fintech/partior-jpm-dbs-temasek-consortium|Partior]], [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]], [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]], and [[fintech/bis-project-agora-overview|BIS Project Agorá]]. For the governance pattern see [[fintech/multi-megabank-consortium-governance|multi-bank federation governance]]; for the central-banking-unbundling context see [[fintech/central-banking-function-unbundling|central-banking function unbundling]]; for the interoperability story with stablecoins see [[fintech/circle-usdc-stablecoin|Circle USDC]] and [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]].

> [!info] TL;DR
> The six initiatives do not share one maturity or legal category. **Fnality £FnPS** made pilot payments in December 2023 and began operating under Bank of England limits in December 2024. **Partior** is a private, permissioned commercial clearing-and-settlement network whose public materials identify USD, EUR and SGD commercial flows. **Kinexys by J.P. Morgan** reported more than $1.5T processed since inception and more than $2B in average daily volume in November 2024. **mBridge** reached MVP in mid-2024, after which the BIS handed the project to its central-bank partners in October 2024. **Project Agorá** delivered a prototype—not a finished product—in May 2026 with eight central banks and more than 40 financial institutions. **Project Mariana** was a research proof of concept completed in 2023. Comparisons should therefore separate settlement asset, operator, production status and disclosed volume rather than rank all six as equivalent live networks. ^[Fnality: https://www.bankofengland.co.uk/report/2024/rtgs-and-chaps-annual-report-2023-24 and https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; Partior: https://partior.com/about-us/our-story; Kinexys: https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys; mBridge: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; Agorá: https://www.bis.org/about/bisih/topics/fmis/agora.htm; Mariana: https://www.bis.org/about/bisih/topics/cbdc/mariana.htm]

## Why a six-way comparison

Single-network narratives ("Fnality is the consortium model," "Kinexys is the single-bank model") capture different parts of the story but obscure the central structural variable: **what settlement asset or claim is being transferred**. Placing the initiatives side-by-side on settlement asset, operator, maturity, disclosed currencies and volume helps distinguish regulated infrastructure from bank products and research prototypes. The public evidence does not support treating every row as a production network or inferring a single speed ranking from consortium size. For the broader institutional-stablecoin-deposit-token contrast see [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin vs tokenised-deposit thesis]]. ^[Status sources: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## Matrix A · Settlement asset and finality

Table evidence: Bank of England on £FnPS (https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26), Partior's official history (https://partior.com/about-us/our-story), J.P. Morgan's Kinexys overview (https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys), and the BIS project pages for mBridge, Agorá and Mariana (https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm).

| Network | Settlement asset | Finality type | Equivalent to |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality £FnPS]]** | Funds held through the Bank of England RTGS Omnibus Account | DLT-based sterling settlement under operating limits | Central-bank-money-backed settlement representation |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | Tokenised commercial-bank deposits on a unified ledger | Partior describes atomic finality across tokenised instruments | Multi-bank commercial settlement network |
| **[[fintech/jpm-onyx-wholesale-network\|Kinexys Digital Payments]]** | Commercial-bank deposit claims within J.P. Morgan's platform | Bank-operated digital-payment settlement | Single-bank institutional platform |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | Wholesale CBDCs of participating central banks | MVP enabled for real-value transactions subject to jurisdictional readiness | Multi-currency wholesale-CBDC platform |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | Tokenised central-bank reserves + tokenised commercial-bank deposits | Prototype demonstrated atomic multi-currency settlement | Research prototype combining central- and commercial-bank money |
| **Project Mariana** | Hypothetical wholesale CBDCs used with an automated market maker | PoC completed in 2023; not in production | Experimental spot-FX settlement using wCBDC + AMM |

**The central distinction is the legal claim represented by the settlement asset**: Fnality uses funds held through a central-bank omnibus account; mBridge experiments with wholesale CBDCs; Partior and Kinexys operate through commercial-bank-money arrangements; Agorá combines tokenised central-bank reserves and commercial-bank deposits in a prototype; and Mariana tested wCBDC/AMM mechanics. The legal and operational consequences must be assessed from each system's rules and jurisdiction rather than inferred from a simple M0/M1 label.

## Matrix B · Consortium membership

Table evidence: Partior identifies four founding shareholders (https://partior.com/about-us/our-story); BIS identifies the five mBridge central-bank participants and the Agorá / Mariana participant shapes (https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm). Exact client or network-member totals not published in these sources are not used.

| Network | Membership shape | Member count | Governance model |
|---|---|---|---|
| Fnality fnPS | Multi-shareholder infrastructure operator | Exact current shareholder count not used in this comparison | Private operator of a Bank of England-supervised sterling payment system |
| Partior | Independent company founded by four shareholders | DBS, J.P. Morgan, Standard Chartered and Temasek | Multi-shareholder institutional network |
| JPM Kinexys | Single banking group operator | J.P. Morgan-operated; no Liink client count used as a proxy | Bank-operated platform |
| mBridge | **Central-bank consortium** | Five participating central banks after SAMA joined in 2024 | BIS handed the project to the partners in October 2024 |
| Project Agorá | **Central banks + regulated financial institutions** | **8 central banks + 40+ financial institutions** | BIS/IIF-coordinated prototype; further testing planned |
| Project Mariana | **3 central banks** (PoC) | BdF + MAS + SNB | Time-limited research PoC (2022-2023) |

Membership counts describe governance breadth, but they do not prove a decision-speed ordering. Kinexys is operated within one banking group, Partior has four founding shareholders, Fnality has a multi-shareholder base, and mBridge / Agorá coordinate public authorities. Their timelines also reflect different legal, settlement-asset and project-scope requirements.

## Matrix C · Disclosed currency scope

Table evidence: Partior's official history identifies USD, EUR and SGD commercial flows (https://partior.com/about-us/our-story); the Bank of England identifies the sterling £FnPS (https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26); BIS identifies the mBridge participants and Mariana's hypothetical currencies (https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm). Agorá is a prototype, not a production currency list (https://www.bis.org/about/bisih/topics/fmis/agora.htm).

| Network | Disclosed currency scope | Additional scope boundary |
|---|---|---|
| Fnality £FnPS | **GBP**; pilot payments in Dec. 2023 and operation under limits from Dec. 2024 | Future currency systems are not treated here as dated commitments |
| Partior | **USD / EUR / SGD** commercial flows disclosed | Additional currencies, including JPY, are expansion / study items rather than confirmed live currencies |
| JPM Kinexys | Public materials describe multi-currency digital payments, but this review does not assert a complete live-currency list | FX functionality and additional use cases continue to evolve |
| mBridge | CNY / HKD / THB / AED / SAR correspond to the five participating authorities | No dated Brazil-Drex interoperability commitment is asserted here |
| Project Agorá | Multi-currency prototype; no production currencies live | Further real-value testing is planned, without a production-currency claim here |
| Project Mariana | Hypothetical EUR / SGD / CHF in the PoC | n/a (PoC completed in 2023) |

The disclosed currency sets are not directly comparable: Partior identifies USD, EUR and SGD commercial flows; Fnality currently operates a sterling system under limits; mBridge's currencies follow participating central banks; and Agorá / Mariana are prototype or research programmes rather than production currency networks. ^[Partior: https://partior.com/about-us/our-story and https://partior.com/news-and-insights/nh-nonghyup-bank-pilots-blockchain-based-cross-border-payments-with-partior; Fnality: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26]

## Matrix D · Publicly disclosed volume and cumulative scale

Table evidence: J.P. Morgan's November 2024 Kinexys announcement is the only reviewed source here that gives both an average daily value and a since-inception value (https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys). The Bank of England and BIS status pages do not provide comparable volume series (https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm).

| Network | Public daily-volume disclosure | Cumulative throughput | Evidence boundary |
|---|---|---|---|
| Fnality £FnPS | Not disclosed in the reviewed BoE sources | Not disclosed | Operation under limits |
| Partior | Not disclosed in the reviewed official sources | Not disclosed | Commercial network; no unsupported estimate inserted |
| JPM Kinexys | **More than $2B average per day** (Nov. 2024 disclosure) | **More than $1.5T since inception** | Bank-operated production platform |
| mBridge | Not disclosed | Not disclosed | MVP; real-value use subject to jurisdictional readiness |
| Project Agorá | n/a (prototype) | n/a | Prototype; not a production volume series |
| Project Mariana | n/a (PoC completed) | n/a | n/a |

Kinexys is the only row in this comparison for which the reviewed official source publishes both a daily average and a since-inception value. The absence of comparable official values for the other rows means this table cannot support a cross-network volume ranking. ^[https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys]

## Matrix E · Regulatory status and central-bank backing

Table evidence: Bank of England lists £FnPS as a supervised recognised payment system operating under limits (https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26); Partior describes an independent institutional network (https://partior.com/about-us/our-story); J.P. Morgan describes Kinexys as its own platform (https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys); BIS describes the status of mBridge, Agorá and Mariana (https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm).

| Network | Public-status evidence | Central-bank relationship | Category used here |
|---|---|---|---|
| Fnality £FnPS | Recognised and supervised by the Bank of England | Uses the Bank's RTGS Omnibus Account; operates under limits and expectations | DLT-based sterling payment system |
| Partior | Private independent entity and institutional network | Originated from MAS-led Project Ubin; no blanket “MAS-licensed PSP” claim is made | Commercial clearing-and-settlement infrastructure |
| JPM Kinexys | J.P. Morgan-operated platform | Inside a regulated banking group; the cited page does not establish a separate FMI licence | Bank-operated institutional platform |
| mBridge | Partner-led after the October 2024 BIS handover | Five participating central banks; real-value use subject to jurisdictional preparedness | Multi-central-bank MVP |
| Project Agorá | BIS/IIF-coordinated public-private project | Eight central banks; prototype delivered and further testing planned | Research prototype |
| Project Mariana | Completed BIS / BdF / MAS / SNB PoC | Hypothetical wCBDCs; no issuance intent implied | Experimental PoC |

The regulatory categories are not binary. Fnality is a recognised and supervised payment system operating under limits; Kinexys sits within J.P. Morgan's banking perimeter; Partior is commercial infrastructure used by regulated financial institutions; mBridge is a central-bank MVP; and Agorá / Mariana are research prototypes. A platform's technology label does not establish its legal finality or licensing status. ^[Fnality status: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; project status: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm and https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## Matrix F · Technology stack

| Network | Verified technology description | Production boundary | Interoperability evidence |
|---|---|---|---|
| Fnality fnPS | Bank of England describes a DLT-based sterling system | Operation under limits | SWIFT collaboration is public, but no blanket cross-chain claim is made |
| Partior | Blockchain-based unified ledger | Commercial flows are live | Official history describes atomic finality across tokenised instruments; no specific Fabric-derived stack is asserted here |
| JPM Kinexys | J.P. Morgan blockchain-based institutional platform | Production platform with disclosed payment volume | No unsupported Base/Canton roadmap dates are asserted here |
| mBridge | Purpose-built mBridge Ledger, compatible with the Ethereum Virtual Machine | MVP; real-value use subject to jurisdictional preparedness | BIS describes it as a testbed for add-ons and interoperability |
| Project Agorá | Shared programmable platform prototype | Not a finished product | Production stack remains future work |
| Project Mariana | Public-blockchain PoC using a common token standard, bridges and an AMM | Experimental only | Cross-network wCBDC exchange was tested with hypothetical currencies |

The reviewed systems use controlled-access infrastructure, but their published materials do not expose a uniform level of technical detail. Agorá is a prototype involving eight central banks and more than 40 financial institutions; its official result should not be read as a commitment to one production stack. Technology comparisons must therefore distinguish verified implementation disclosures from roadmap or inference.

## Matrix G · Cross-border PvP / DvP capability

Table evidence: Partior states that its unified ledger offers atomic finality across tokenised instruments (https://partior.com/about-us/our-story); BIS describes mBridge's cross-border payment / FX scope, Agorá's atomic multi-currency prototype, and Mariana's hypothetical wCBDC spot-FX PoC (https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm). The reviewed Bank of England source confirms £FnPS status but not a dated U.S.-dollar PvP launch (https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26).

| Network | Cross-currency / PvP evidence | Securities DvP evidence | Status boundary |
|---|---|---|---|
| Fnality fnPS | No production cross-currency claim is made from the cited BoE report | Not established in the cited BoE report | Current evidence is a sterling system operating under limits |
| Partior | Commercial multi-currency flows and atomic finality are disclosed | The cited history does not establish a specific live securities-DvP product | No “24×7 FX swap live in 2024-Q3” claim is retained |
| JPM Kinexys | J.P. Morgan describes multi-currency digital payments | Specific securities-DvP volume is not used in this comparison | The earlier unsupported $700B figure is removed |
| mBridge | Built for real-time cross-border payments and FX transactions | Securities DvP is not the stated primary scope | MVP; real-value use depends on jurisdictional preparedness |
| Project Agorá | Prototype enables atomic multi-currency wholesale-payment settlement | The BIS page discusses payments, not a live securities-DvP service | Prototype only; real-value testing is future work |
| Project Mariana | AMM-based spot-FX trading and immediate settlement were tested | n/a | Hypothetical-currency PoC completed in 2023 |

PvP and atomic settlement are common design goals, but production status differs. Partior discloses commercial flows, Fnality operates its sterling system under limits, mBridge is an MVP whose real-value use depends on jurisdictional readiness, Agorá delivered a prototype, and Mariana completed a PoC. The reviewed sources do not establish that Mariana directly determined the architectures of Agorá or mBridge.

## Matrix H · Interoperability with stablecoins / tokenized assets

| Network | Stablecoin interop | Tokenised MMF / RWA interop |
|---|---|---|
| Fnality fnPS | Not established in the cited Bank of England report | No BUIDL collateral test is asserted from the reviewed source |
| Partior | No live stablecoin bridge is asserted from the official history | The unified ledger supports tokenised instruments, but a specific live RWA-DvP product is not claimed here |
| JPM Kinexys / JPMD | No public-chain roadmap is inferred in this matrix | Product-specific collateral and repo claims require their own primary sources |
| mBridge | BIS describes an EVM-compatible testbed, not a live stablecoin bridge | No live tokenised-fund integration is asserted |
| Project Agorá | The official prototype scope combines tokenised commercial-bank deposits and central-bank reserves; it does not establish a live stablecoin pass-through | Further use cases remain subject to future testing |
| Project Mariana | n/a | n/a |

Agorá's official prototype scope is narrower than the prior claim: it tests tokenised commercial-bank deposits and central-bank reserves on a shared programmable arrangement. Any future role as a stablecoin interoperability layer is an analytical possibility, not a delivered capability or stated MRA-dependent roadmap. ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## Matrix I · Strategic position relative to SWIFT

Table evidence: SWIFT and Fnality published a collaboration (https://www.swift.com/news-events/news/swift-fnality-collaboration); Partior describes its own unified-ledger model (https://partior.com/about-us/our-story); BIS describes mBridge, Agorá and Mariana without characterising them as projects created to bypass SWIFT (https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm).

| Network | Messaging relationship supported here | Correspondent-banking implication | Evidence boundary |
|---|---|---|---|
| Fnality fnPS | Public SWIFT collaboration supports coexistence | Fnality supplies a settlement layer | Collaboration does not prove universal SWIFT replacement |
| Partior | Its official history says the unified ledger removes fragmented messaging and intermediaries | May streamline participating-bank flows | No blanket “replaces correspondent banking” claim is made |
| JPM Kinexys / Liink | Not classified from the Kinexys source used here | Bank-operated network can change selected customer flows | Liink client counts are not used as proof of SWIFT replacement |
| mBridge | BIS describes a new multi-CBDC platform | Targets cross-border cost, speed and complexity | BIS does not say the project was explicitly designed to bypass SWIFT |
| Project Agorá | Shared programmable-platform prototype | Tests a different wholesale-payment arrangement | No production SWIFT-replacement claim is made |
| Project Mariana | n/a | Experimental spot-FX PoC | No strategic SWIFT claim |

The evidence supports only a limited conclusion: new settlement platforms may change how messaging, correspondent relationships and settlement interact, while SWIFT and Fnality have also demonstrated that incumbent messaging and tokenised settlement can be complementary. The reviewed sources do not support a universal replacement ranking or a political “bypass SWIFT” purpose for mBridge.

## Why these dimensions

The nine matrix axes (settlement asset, consortium membership, disclosed currency scope, public volume, regulatory status, central-bank relationship, interoperability with stablecoins, technology stack, SWIFT relationship) were chosen because they expose **different evidence dimensions in wholesale settlement adoption**:

1. **Settlement asset** — identifies the legal claim being transferred and the finality questions that still require system- and jurisdiction-specific analysis.
2. **Consortium membership** — describes operator and governance breadth without establishing a decision-speed ranking.
3. **Disclosed currency scope** — records the currencies supported or tested in the reviewed public materials.
4. **Public volume** — provides one adoption indicator where comparable official data exist.
5. **Regulatory status** — records the disclosed legal and supervisory perimeter without treating every category as equivalent.
6. **Central-bank relationship** — distinguishes use of central-bank accounts, central-bank participation and research sponsorship.
7. **Interoperability** — records verified connections or tests with other payment, token and asset networks.
8. **Technology stack** — records disclosed implementation choices and avoids filling gaps with inference.
9. **SWIFT relationship** — distinguishes documented collaboration from unsupported replacement claims.

These nine dimensions show why the six rows are not substitutes: Fnality is supervised sterling infrastructure backed through a central-bank omnibus account; Kinexys is a bank-operated platform with disclosed production volume; Partior is a multi-bank commercial network; mBridge is a central-bank MVP; and Agorá / Mariana are prototypes. The matrix is a classification aid, not evidence for a universal ranking.

## Reading the matrix

- **Fnality, Kinexys, mBridge and Partior represent different settlement arrangements**. They are often grouped under “wholesale settlement”, but their settlement claims, operators, legal perimeters and maturity differ and should be assessed separately.
- **Different timelines do not isolate one cause**. Fnality and Kinexys differ in operator, legal perimeter, settlement asset and scope, so their elapsed time and volume cannot be attributed solely to shareholder count.
- **The BIS handover of mBridge occurred in October 2024, not October 2025**. The BIS stated that the project had reached a stage where the partners could carry it forward and explicitly rejected failure or political considerations as the reason. The official material does not identify a PBoC-only operational lead. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/speeches/sp241031.htm]
- **Project Mariana's 2023 PoC** demonstrated cross-border trading and immediate settlement of hypothetical wCBDCs through an AMM. The reviewed BIS pages do not establish that Mariana determined the architectures of Agorá or mBridge.
- **Stablecoin interoperability remains a scenario, not an Agorá result**. The official Agorá prototype combines tokenised commercial-bank deposits and central-bank reserves; extending that design to stablecoins would require additional legal, governance and technical work.
- **SWIFT × Fnality is evidence that incumbent messaging and tokenised settlement can connect**. It does not establish one universal industry strategy.
- **Operator shape is one governance variable, not a speed score**. Multi-shareholder, single-bank and central-bank projects also differ in legal perimeter, settlement asset and mandate.

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
- [[fintech/multi-megabank-consortium-governance|Multi-bank federation governance]]
- [[fintech/central-banking-function-unbundling|5 layers of central-banking function unbundling]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional stablecoin vs tokenised-deposit thesis]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|Tokenised-deposit cumulative volume]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
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

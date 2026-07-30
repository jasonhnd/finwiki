---
source: fintech/ecny-supply-chain-expansion
source_hash: fc09202bd1d2a137
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "e-CNY supply-chain and cross-border expansion 2025-2026"
translated_at: 2026-07-29T17:52:19.232Z
---

# e-CNY supply-chain and cross-border expansion 2025-2026

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-country deep dive on China's e-CNY for the 2025-2026 cross-border expansion phase. It is paired with [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for the four-country comparative view, with [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]] for the wholesale-bridge architecture, and with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]] for the competing private-stablecoin rail in the same regional market. For the broader CBDC architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]].

> [!info] TL;DR
> Public sources support two distinct cross-border surfaces: Hong Kong residents have been able since May 2024 to open e-CNY wallets with a Hong Kong mobile number and top them up through FPS for use in Mainland pilot areas, while mBridge reached wholesale multi-CBDC MVP stage in mid-2024 and was handed by BIS to its partners in October 2024. The cited official sources do not establish a 2025 commercial mBridge launch, Brazil DREX membership, or quantified Belt-and-Road commodity corridors. The live HKMA register and direct issuer releases identify two licensed Hong Kong stablecoin issuers as of 2026-07-30. Those licences create a separate regulated rail rather than evidence of direct substitution for e-CNY. ^[https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/]

## Three expansion layers

```
                  e-CNY 2025-2026 expansion (three layers)
                                  │
        ┌─────────────────────────┼─────────────────────────────────┐
        ▼                         ▼                                 ▼
  L1 Hong Kong link        L2 mBridge wholesale            L3 Belt-and-Road project pilots
   (retail / SME)           (central-bank RTGS)             (SOE commodity / infra)
        │                         │                                 │
   HK residents           HKMA + BoT + CBUAE              Public evidence boundary:
   e-CNY wallet           + SAMA                          no corridor-level series
   for cross-boundary     PvP atomic settlement           on chain
   Mainland pilot areas   MVP / real-value enabled        in cited official sources
        │                         │                                 │
        └─────────────────────────┴─────────────────────────────────┘
                                  │
              Competitive context: HKMA stablecoin licensing
              (HSBC + Anchorpoint — first licences 2026-04-10)
```

## Layer 1 — Hong Kong / GBA cross-boundary retail link

The table is limited to the HKMA's May 2024 launch announcement and user guide. It does not infer “routine use” or adoption across every GBA city from technical availability. ^[https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/; https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2024/20240517e3a2.pdf]

| Item | Detail |
|---|---|
| Programme | HKMA-PBoC expansion of the cross-boundary e-CNY pilot for Hong Kong residents |
| Launch | Service expansion announced 17 May 2024 |
| Wallet model | Registration with a Hong Kong mobile number; no Mainland bank account required for the supported wallet tier |
| Top-up | FPS top-up from participating Hong Kong banks; some support HKD conversion to RMB |
| Published limits | User guide lists RMB 10,000 balance, RMB 2,000 per transaction, RMB 5,000 daily and RMB 50,000 annual limits for the described wallet tier |
| Use boundary | Intended for cross-boundary retail payments in Mainland e-CNY pilot areas; the announcement does not publish active-user or GBA-wide transaction totals |

The HK link is a concrete cross-boundary retail-CBDC access arrangement. “At scale”, active use, and comparative first-place claims require current transaction and user data, which the cited launch materials do not provide.

The [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoins Ordinance]] entered into force in August 2025. The live HKMA register should be used for licence status, while product and launch claims require a direct issuer release. As of 2026-07-30, the register and direct releases support two licensed issuers; the licences do not by themselves demonstrate diversion of e-CNY activity. ^[https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/]

## Layer 2 — mBridge wholesale ring

The table uses the BIS project page as of the October 2024 handover. “Enabled for real-value transactions subject to jurisdictional preparedness” is not the same as general commercial operation. ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| Item | Detail |
|---|---|
| Programme | [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] — multi-CBDC wholesale settlement platform |
| Founding central banks | PBoC + HKMA + Bank of Thailand + Central Bank of UAE (2021); Saudi Central Bank (SAMA) joined 2024-06 |
| BIS role | BIS Innovation Hub worked on the project from 2021 and handed it to the partners in October 2024 |
| Architecture | mBridge Ledger, a DLT platform supporting peer-to-peer cross-border payments and FX; the four founders deployed validator nodes |
| Settlement mode | Real-time cross-border payments and foreign-exchange transactions; 2022 pilot included real-value transactions |
| Stage | MVP reached in mid-2024 and enabled for real-value transactions subject to jurisdictional preparedness |
| Membership boundary | SAMA is the fifth member named by BIS; BCB and Bank Indonesia were observers, not members, on the handover-era list |

The BIS source supports an MVP involving the four founders and SAMA. It does not support the stated Brazil integration timetable, a third-of-global-GDP reach, or a claim that PBoC and HKMA alone control post-handover governance.

[[fintech/bis-project-agora-overview|BIS Project Agorá]] is a separate experiment combining tokenised central-bank reserves and commercial-bank deposits. BIS reported eight central banks and more than 40 regulated institutions in May 2026. There is no formal interoperability agreement between Agorá and mBridge in the cited project materials. For a bounded comparison see [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]].

## Layer 3 — Belt-and-Road project-pilot integration

Official PBoC and partner sources reviewed for this update did not provide a reproducible corridor-level dataset connecting named SOEs, commodities, transaction volumes and e-CNY settlement. The table therefore records the evidence boundary rather than converting press speculation into completed transactions. ^[https://www.pbc.gov.cn/en/3688110/3688172/index.html; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| Claim area | What is publicly supportable | What remains unverified |
|---|---|---|
| Cross-boundary retail | Hong Kong pilot and FPS top-up are documented by HKMA | Active users and transaction value by corridor |
| Wholesale multi-CBDC | mBridge MVP and 2022 real-value pilot are documented by BIS | Post-handover production volume and corridor mix |
| Belt-and-Road invoices | RMB internationalisation is a stated policy context | Named oil, soybean, rare-earth or infrastructure invoices settled specifically in e-CNY |
| SOE / policy-bank participation | Must be supported by a transaction-specific issuer or official statement | CNPC, Sinopec, COSCO, CDB or China Exim participation is not established here |
| Volume | No official per-corridor e-CNY series found in the cited material | Aggregate claims should not be allocated to a corridor without methodology |

The Belt-and-Road layer should be treated as a research question until transaction-specific public records identify the parties, asset, currency, date and settlement rail.

The cited materials establish separate retail, wholesale and licensing rails. They do not establish a single geopolitical purpose, a coordinated plan to replace SWIFT, or counterparties' motives for choosing USD or non-USD settlement. [[fintech/jurisdiction-list-monetary-protectionism|Jurisdiction-list monetary protectionism]] remains an analytical thesis rather than a finding of these project sources.

## Adoption metrics most-recent public

Figures below retain their original date and reporting scope. The PBoC's 2024-2025 financial-inclusion report gives national pilot-area transaction totals but does not provide a comparable active-wallet count. ^[https://www.pbc.gov.cn/xindaishichangsi/5443861/5443865/5443892/5957f8d15a824e9e88d01710873482d3/2025110711361912922.pdf; https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| Layer | Metric | Most-recent public figure | Source |
|---|---|---|---|
| Domestic e-CNY | Cumulative pilot-area transaction value | **CNY 9.4 trillion** at end-2024 | PBoC financial-inclusion indicators report |
| Domestic e-CNY | Cumulative pilot-area transactions | **2.56 billion** at end-2024 | PBoC financial-inclusion indicators report |
| HK link | Wallet access | HK mobile-number registration and FPS top-up launched May 2024 | HKMA announcement and user guide |
| mBridge | Named member authorities | **5**: four founders plus SAMA | BIS handover-era project page |
| mBridge | Platform status | MVP in mid-2024; real-value enabled subject to jurisdictional preparedness | BIS handover-era project page |
| Belt-and-Road | Commodity-corridor metrics | No reproducible official series identified | Do not substitute aggregate e-CNY or RMB data |

The two figures are cumulative pilot-area transactions and value through the stated reporting date. They are not an active-wallet series, and the cited report does not provide a comparable active-user or active-wallet denominator. The figures therefore cannot establish an activity rate or a use-case mix beyond the report's stated scope.

## Architecture and design choices in the expansion phase

The domestic design rows use the PBoC white paper; the mBridge row uses the BIS project page. The third column records a stated purpose or an evidence boundary, not a performance measurement or an inferred motive. ^[https://www.pbc.gov.cn/en/3688110/3688172/4157443/4293696/2021071614584691871.pdf; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| Design choice | What it is | Evidence or stated rationale |
|---|---|---|
| Two-tier (PBoC → authorised operators → user) | PBoC issues e-CNY and authorised operators provide exchange and circulation services in the domestic design and supported Hong Kong wallet link | The PBoC white paper states that the two-tier design uses existing resources and preserves the role of commercial institutions; see [[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]] |
| Controllable anonymity | Lower-tier wallets can use less identifying information while higher-tier services require stronger identification | The PBoC describes “anonymity for small value and traceability for high value” together with AML/CFT controls |
| Programmability (limited) | Official materials describe smart-contract programmability and bounded pilot uses | The cited sources do not establish unrestricted or general-purpose DeFi functionality |
| No interest on retail e-CNY | Retail e-CNY is non-interest-bearing | The PBoC presents e-CNY as an M0 instrument; broader deposit effects are not measured here |
| Separate wholesale and retail cross-border surfaces | mBridge is a wholesale multi-CBDC platform; the Hong Kong wallet link is a separate retail arrangement | The sources document two different services, not a universal cross-border policy |
| PvP atomic settlement on mBridge | PvP is intended to reduce settlement risk in cross-currency transactions | BIS describes the settlement objective; this page does not supply a comparative performance measure |

The documented stage boundary is narrower: the Hong Kong link provides retail cross-boundary access, while mBridge reached wholesale multi-CBDC MVP stage and was handed to its partners. The cited sources do not establish global retail availability, a preferred future sequence, or a comparative claim that one extension is safer or more controllable.

## HK stablecoin licensing as competitive context

The [[fintech/hkma-stablecoin-licensing-overview|HKMA Stablecoins Ordinance]] entered into force on 1 August 2025. The live HKMA register, the HKMA's May 2026 Legislative Council briefing and direct issuer releases identify The Hongkong and Shanghai Banking Corporation Limited and Anchorpoint Financial Limited as the first two licensees, with grants dated 10 April 2026. The table separates licence status from announced product plans; a licence does not itself establish that a token is live. ^[https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/; https://www.hkma.gov.hk/media/eng/doc/about-the-hkma/legislative-council-issues/20260504e2.pdf; https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence; https://www.sc.com/en/press-release/standard-chartered-backed-anchorpoint-granted-stablecoin-issuer-licence-by-the-hong-kong-monetary-authority/]

| Licensee | Publicly stated product scope | Evidence boundary |
|---|---|---|
| The Hongkong and Shanghai Banking Corporation Limited | HSBC plans an HKD-denominated stablecoin launch in the second half of 2026, initially integrated with PayMe and the HSBC HK App for specified payment and tokenised-investment use cases | This is a dated plan in HSBC's 2026-04-10 release; it is not evidence that the token was live on 2026-07-30, and tokenised-investment use remains subject to relevant approvals |
| Anchorpoint Financial (Standard Chartered / HKT / Animoca joint venture) | HKDAP, an HKD-backed stablecoin, planned for phased issuance | Licence granted 10 April 2026; planned issuance is not the same as a live product |

Other applicants' status should be checked against the live HKMA register rather than inferred from press shortlists; see [[fintech/hkma-stablecoin-licensing-implications|HKMA licensing implications]]. The two licences establish potential HKD-referenced alternatives, but product launch, customer access and actual cross-border use require separate evidence. ^[https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/]

The HKMA materials establish a stablecoin-issuer licensing regime and a separate e-CNY / FPS pilot. They do not establish substitution or complementarity between the rails, customer preference, settlement integration through Hong Kong banks, or interoperability with [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]. Any product-level or corridor-level connection requires separate evidence.

## Origin and evolution

```
2014        PBoC e-CNY research begins
2017        BIS / IMF / ECB papers on CBDC architecture
2020-04     PBoC e-CNY domestic retail pilot launches (4 cities)
2021        BIS Innovation Hub Hong Kong Centre launches mBridge with PBoC + HKMA + BoT + CBUAE
2022-04     Domestic e-CNY pilot expands to 23 cities
2023        Cross-boundary HK resident pilots; smart-contract pilots begin
2024-03     HKMA Project Ensemble launches (tokenised-deposit sandbox in HK)
2024-04     BIS Project Agorá launches with seven central banks
2024-05     HK mobile-number wallet registration and FPS top-up launch
2024-06     Saudi SAMA joins mBridge (5th central bank)
2024-10     BIS hands mBridge to its partners after the project reaches MVP
2025-08     HKMA Stablecoin Ordinance enters into force
2026-04-10  First two Hong Kong stablecoin issuer licences granted
2026-05     Agorá reports a prototype with eight central banks and more than 40 regulated institutions
2026-07-30  No cited official confirmation of Brazil joining mBridge
```

**Non-causal chronology**: the public record shows a domestic pilot, the Hong Kong retail link, mBridge reaching MVP and being handed to its partners, and a separate Hong Kong stablecoin-issuer regime. It does not prove that each layer waited for a prior readiness threshold, that mBridge entered general commercial operation, that cross-continent integration followed, or that consent is easier to obtain in one geopolitical bloc than another.

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

- [HKMA — Expansion of cross-boundary e-CNY pilot in Hong Kong (2024-05-17)](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/05/20240517-4/)
- [HKMA — e-CNY wallet user guide](https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2024/20240517e3a2.pdf)
- [BIS — Project mBridge handover-era project record](https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm)
- [PBoC — e-CNY white paper](https://www.pbc.gov.cn/en/3688110/3688172/4157443/4293696/2021071614584691871.pdf)
- [PBoC — 2024–2025 financial-inclusion indicators](https://www.pbc.gov.cn/xindaishichangsi/5443861/5443865/5443892/5957f8d15a824e9e88d01710873482d3/2025110711361912922.pdf)
- [HKMA — Legislative Council briefing on financial infrastructure (2026-05-04)](https://www.hkma.gov.hk/media/eng/doc/about-the-hkma/legislative-council-issues/20260504e2.pdf)
- [HKMA — Register of Licensed Stablecoin Issuers](https://www.hkma.gov.hk/eng/regulatory-resources/registers/register-of-licensed-stablecoin-issuers/)
- [HSBC — Stablecoin issuer licence and planned HKD product (2026-04-10)](https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence)
- [Standard Chartered — Anchorpoint licence and planned HKDAP product (2026-04-10)](https://www.sc.com/en/press-release/standard-chartered-backed-anchorpoint-granted-stablecoin-issuer-licence-by-the-hong-kong-monetary-authority/)
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm)

---
source: fintech/cross-border-sc-via-swift-api
source_hash: 66bf01bac654620e
lang: en
status: machine
fidelity: ok
title: "Cross-border SC via Swift API — Verified Project Pax Configuration"
translated_at: 2026-07-30T02:03:00+09:00
---

# Cross-border SC via SWIFT API


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Project Pax was announced on 2024-09-05 as a plan for Progmat and Datachain to test a prototype cross-border stablecoin-remittance infrastructure adapted to a Swift API mock / simulation environment. The published material describes an API surface for assumed bank instructions and a cross-chain surface using IBC, LCP, a jointly developed stablecoin contract, and a TOKI liquidity pool. That material alone does not verify commercial operation, a production connection to a named bank, deployment to a named chain, or final posting at a receiving bank. ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

## Basic pattern

```
Assumed bank instruction
       ↓
Adapted to a Swift API mock / simulation environment
       ↓
Stablecoin contract jointly developed by Progmat / Datachain
       ↓
Cross-chain functionality using IBC + LCP
       ↓
Liquidity pool provided by TOKI
```

This diagram shows only the test configuration described in Datachain's 2024-09-05 announcement. Do not add a messaging standard, participating bank, deployment chain, legal issuance type, or final account posting. ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

## Why put the Swift API first

The table is limited to the objectives and test scope stated in the joint Progmat / Datachain announcement. Do not infer regulatory approval or AML/CFT compliance from API connectivity alone. ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

| Reason | Content |
|---|---|
| **Continuity with existing operations** | A plan for banks to instruct Progmat through the existing Swift API framework they use |
| **Separate instruction and value transfer** | Test the API mock / simulation surface separately from the blockchain remittance surface |
| **Aim to limit duplicated operations** | Project Pax says it seeks to limit duplication with banks' fiat-remittance operations and reduce additional investment |
| **Verifiable staged introduction** | Use API mocks / simulation and a PoC to test connectivity, regulatory, wallet-use and related issues before moving to a next stage |

## Comparison boundary with other arrangements

The Project Pax announcement does not establish that the arrangement has the “same function” as a bank-deposit ledger or another company's payment network, or that they compete. Arrangements with different legal forms of money, operators, participation terms and operating stages must be assessed from their own direct records.

## Technical composition of Project Pax

The components are based on the September 2024 joint announcement by Progmat and Datachain. The announcement describes a design and demonstration goals, not production availability of every chain, liquidity pool, or compliance feature. ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

| Layer | Component | Provider |
|---|---|---|
| Bank instruction | Swift API mock / simulation environment | Tested by Progmat / Datachain |
| Remittance infrastructure | Progmat Coin integration and cross-border remittance functions | Progmat + Datachain |
| Cross-chain | IBC + LCP middleware | Datachain |
| Liquidity | Pool for cross-chain conversion and transfer | TOKI |
| Stablecoin contract | Jointly developed Progmat / Datachain contract | Progmat + Datachain |
| Financial-institution review | Review of operational, regulatory, and process issues | Financial-institution review described in the joint announcement |

## Comparison with the BIS Project Agorá

This comparison is based on official announcements from both projects. Agorá has more than 40 private-sector participants, including Swift, but was not designed as a network above Project Pax. ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/innovation_hub/projects/agora_list_participants.pdf]

| Item | Project Pax | BIS Project Agorá |
|---|---|---|
| Led by | Progmat + Datachain | BIS + IIF + 8 central banks + more than 40 regulated financial institutions |
| Purpose | Connect instructions through a Swift API with stablecoin remittance | Wholesale cross-border payments using tokenized deposits and central bank reserves |
| Settlement asset | Connected private stablecoins | Tokenized commercial-bank deposits + tokenized central-bank reserves |
| Technology | API mock, IBC, LCP, stablecoin contract, and TOKI pool | A unifying layer for deposits and jurisdiction-specific central-bank reserve ledgers |
| Status as of 2026-07-30 | Japan-Korea Phase 2 demonstration | Prototype completed, with plans to move toward limited real-value testing |
| Relationship | Independent private-sector demonstration | Independent public-private research project |

The projects differ in purpose, participants, settlement assets and test stage. The cited records do not show that Agorá is the foundation for Project Pax, that Project Pax is an endpoint function of Agorá, or that either implementation depends on the other.

## Limits / risks

- **Commercial status unverified**: completion of Phase 2, pricing, SLA, and transaction volume require confirmation in official announcements
- **Separate regulatory requirements**: Swift API connectivity does not replace authorization for issuance, remittance, distribution, or AML/CFT
- **Participation scope**: financial-institution names and target jurisdictions must be checked in a direct announcement for each stage
- **Technical scope**: do not infer messaging standards, deployment chains, or final account posting from the 2024-09-05 announcement

## Applications

- A case study for examining integration of “blockchain + an existing bank workflow”
- A design reference for separating the API instruction surface from the blockchain value-transfer surface
- A cross-chain technology comparison alongside [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/stablecoin-crossborder-b2b-growth|Stablecoin Cross-border B2B 成长]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation status]]
<!-- /wiki-links:managed -->

## Sources

- [Datachain — Progmat and Datachain Launch Project Pax (2024-09-05)](https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax)
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm)

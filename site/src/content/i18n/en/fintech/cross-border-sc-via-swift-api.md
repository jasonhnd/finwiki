---
source: fintech/cross-border-sc-via-swift-api
source_hash: cf5b9261a5c5fe23
lang: en
status: machine
fidelity: ok
title: "Cross-Border SC via SWIFT API"
translated_at: 2026-05-31T06:16:15.714Z
---

# Cross-Border SC via SWIFT API


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The single greatest barrier to cross-border SC adoption is "incompatibility with bank workflows / AML/CFT." The modern pattern for solving this is a **hybrid architecture that places a SWIFT API at the front end and executes blockchain settlement at the back end**. Project Pax (Progmat + Datachain · 2024–09) and BIS Project Agorá are the canonical implementations of this structure. **TD (Tokenized Deposits) lead in SWIFT API compatibility**, while **SC connection patterns diverge depending on the §501(d) interoperability licence**.

## Basic Pattern

```
Bank ([[JapanFG/mufg|MUFG]] / [[JapanFG/smfg|SMFG/SMBC]] / Mizuho, etc.)
       ↓ SWIFT MT103 / ISO 20022  message
SWIFT API mock layer (Datachain)
       ↓ parse → settlement instruction
[[JapanFG/progmat|Progmat Coin]] contract (trust-type SC)
       ↓ on-chain transaction
IBC + LCP (cross-chain bridge)
       ↓
Ethereum / Polygon / Avalanche / Cosmos
       ↓ TOKI liquidity pool cross-chain swap
Receiving bank → funds arrive in receiving currency
```

## Why Place SWIFT API at the Front End

| Reason | Detail |
|---|---|
| **Protect existing workflows** | Bank internal systems / corporate ERPs have operated on SWIFT for 50  years |
| **AML/CFT compatibility** | OFAC / FATF Travel Rule operational know-how has accumulated on SWIFT |
| **Regulatory comfort** | FSA / the Financial Services Agency is more likely to treat SWIFT-routed transactions as already reviewed |
| **Phased migration feasible** | Full on-chain is still far off · SWIFT draws banks in gradually while increasing the on-chain ratio over time |

## TD vs SC Cross-Border Path Divergence

| Item | TD (JPM Kinexys / KDP) | Trust-type SC (Progmat / Project Pax) |
|---|---|---|
| Legal nature | Bank deposit type | 第 3 号 EPI trust type |
| SWIFT API | **Direct use of existing SWIFT** | Via SWIFT API mock layer |
| Cross-border commercialisation | **Already $1.5T / month** (KDP) | 2026–H2  target (delayed) |
| §501(d) required? | **No** (TD is outside SC regulation) | Yes (pending future licence) |
| Interop partners | Existing US banking partners | Asian partners not yet confirmed |
| Interest | Deposit interest accrues to bank | Trust management fee |

**Implication**: Kinexys has reached commercialisation via the TD path while **bypassing §501  regulation**. Progmat on the SC path faces a structural disadvantage against Kinexys for large cross-border volumes unless it obtains a §501(d) tier licence.

## Project Pax Technical Stack

| Layer | Components | Provider |
|---|---|---|
| Application | SWIFT API mock + corporate wallet | Datachain |
| Settlement instruction | Progmat Coin contract | Progmat + Datachain |
| Cross-chain | IBC + LCP middleware | Datachain (Hyperledger Lab) |
| Liquidity | TOKI cross-chain pool | TOKI (Datachain subsidiary) |
| Chains | Ethereum / Polygon / Avalanche / Cosmos | Each chain |
| Compliance | OFAC / Travel Rule / KYC API | Progmat shared |

## Comparison with BIS Project Agorá

| Item | Project Pax | BIS Project Agorá |
|---|---|---|
| Led by | Progmat (private sector · Japan) | BIS (international · 7  central banks) |
| Purpose | Connect Japan SC to SWIFT | Wholesale CBDC + commercial bank money integration |
| Settlement asset | Trust-type SC | Wholesale CBDC + TD |
| Technology | Avalanche L1  + IBC | Unified Ledger (BIS design) |
| Commercial timeline | 2026–H2  | 2027+ (proof-of-concept stage) |
| Relationship with §501(d) | Individual SC interoperability | Sovereign network infrastructure |

**The two are complementary**: Agorá builds the **inter-sovereign backbone**, while Pax solves the **last 1 miles of individual SC ↔ SWIFT connectivity**.

## Limitations / Risks

- **§501(d) channel not yet established**: direct swap with US-compliant SCs such as USDC is not currently possible
- **Delay history**: Pax failed to meet its original end-2025  target → technical risks exposed
- **Insufficient Asian partners**: confirmation of HK / SG / Korea counterparties is behind schedule
- **SWIFT dependency**: if SWIFT itself migrates to ISO 20022  + on-chain native in the future, the mock layer will become obsolete
- **Competition from JPM Kinexys**: the same functionality has already been commercialised via the TD path

## Applications

- Applicable to any "blockchain + existing banking workflow" integration discussion
- Interpreting the relationship between SWIFT reform (ISO 20022  / GPI / GPI for Corporates) and SC
- Asia-originated cross-border SC design discussions (Korea KRW1  · Thailand Project Inthanon · Singapore Project Ubin)
- Multi-chain SC transfer design in combination with [[cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/stablecoin-crossborder-b2b-growth|Stablecoin Cross-border B2B 成长]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->

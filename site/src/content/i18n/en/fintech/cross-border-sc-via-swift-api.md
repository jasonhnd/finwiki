---
source: fintech/cross-border-sc-via-swift-api
source_hash: a23088cf7d6f53ae
lang: en
status: machine
fidelity: ok
title: "Cross-border SC via SWIFT API"
translated_at: 2026-06-18T23:59:13.082Z
---

# Cross-border SC via SWIFT API


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The biggest obstacle to cross-border SC adoption is "incompatibility with bank workflows / AML/CFT." The modern pattern that solves this is a **hybrid structure that places a SWIFT API at the front-end and executes blockchain settlement at the back-end**. Project Pax (Progmat + Datachain · 2024-09) and the BIS Project Agorá are representative implementations of this structure. **TD (Tokenized Deposit) leads on SWIFT API compatibility**, while **SC connection patterns diverge depending on a §501(d) interoperability license**.

## Basic pattern

```
Bank([[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG/SMBC]] / Mizuho, etc.)
       ↓ SWIFT MT103 / ISO 20022 message
SWIFT API mock layer(Datachain)
       ↓ parse → settlement instruction
[[payment-firms/progmat|Progmat Coin]] contract(trust-type SC)
       ↓ on-chain transaction
IBC + LCP(cross-chain bridge)
       ↓
Ethereum / Polygon / Avalanche / Cosmos
       ↓ cross-chain swap in the TOKI liquidity pool
receiving-side bank → credited in the receiving-side currency
```

## Why place the SWIFT API at the front

| Reason | Content |
|---|---|
| **Protecting existing workflows** | Banks' internal systems / corporate ERPs have operated on a SWIFT premise for 50  years |
| **AML/CFT compatibility** | OFAC / FATF Travel Rule have accumulated operational know-how on SWIFT |
| **Reassurance for supervisors** | The FSA / Financial Services Agency find it easier to regard transactions as already reviewed if they go through SWIFT |
| **Phased migration possible** | Full on-chain is the distant future · involve banks via SWIFT and gradually raise the on-chain ratio |

## TD vs SC cross-border path divergence

| Item | TD(JPM Kinexys / KDP)| Trust-type SC(Progmat / Project Pax)|
|---|---|---|
| Legal nature | Bank-deposit type | 第 3 号 EPI trust type |
| SWIFT API | **Direct use of existing SWIFT** | Via the SWIFT API mock layer |
| Cross-border commercialization | **Already $1.5T/month**(KDP)| 2026-H2  target(delayed)|
| §501(d) required? | **Not required**(TD is outside SC regulation)| Required(awaiting future acquisition)|
| Interoperability partner | US banking partners already in place | Asian partners not sufficiently fixed |
| Interest | Deposit interest belongs to the bank | Trust trustee fee |

**Implication**: Kinexys has reached commercialization via the TD path while **avoiding §501  regulation**. On the SC path, unless Progmat obtains a §501(d) tier, it is at a structural disadvantage to Kinexys in large-ticket cross-border business.

## Technical composition of Project Pax

| Layer | Component | Provider |
|---|---|---|
| Application | SWIFT API mock + corporate wallet | Datachain |
| Settlement instruction | Progmat Coin contract | Progmat + Datachain |
| Cross-chain | IBC + LCP middleware | Datachain(Hyperledger Lab)|
| Liquidity | TOKI cross-chain pool | TOKI(a Datachain subsidiary)|
| Chains | Ethereum / Polygon / Avalanche / Cosmos | each chain |
| Compliance | OFAC / Travel Rule / KYC API | Progmat common |

## Comparison with the BIS Project Agorá

| Item | Project Pax | BIS Project Agorá |
|---|---|---|
| Led by | Progmat(private · Japan)| BIS(international · 7  central banks)|
| Purpose | Put Japan-originated SC onto SWIFT | Integrate wholesale CBDC + commercial bank money |
| Settlement asset | Trust-type SC | wholesale CBDC + TD |
| Technology | Avalanche L1 + IBC | Unified Ledger(BIS-designed)|
| Commercial timeline | 2026-H2 | 2027+(proof-of-concept stage)|
| Relationship to §501(d) | Individual SC interoperability | Sovereign-network foundation |

**The two are complementary**: Agorá builds the **inter-state skeleton**, and Pax solves the **last 1 mile of individual SC ↔ SWIFT**.

## Limits / risks

- **The §501(d) channel is not established**: a direct swap with US-compliant SC such as USDC is currently not possible
- **Delay history**: Pax failed to meet its original target at the end of 2025  → technical risk exposed
- **Insufficient Asian partners**: delay in fixing HK / SG / Korea counter-parties
- **SWIFT dependence**: if SWIFT itself migrates to ISO 20022 + onchain native in the future, the mock layer becomes obsolete
- **Competition with JPM Kinexys**: it has already commercialized the same kind of function on the TD path

## Applications

- Can be referenced in any "blockchain + existing banking workflow" integration discussion
- Reading the relationship between SWIFT reform (ISO 20022 / GPI / GPI for Corporates) and SC
- Asia-originated cross-border SC design discussions (Korea KRW1 · Thailand Project Inthanon · Singapore Project Ubin)
- Combining with [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]] for multi-chain SC transfer design

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

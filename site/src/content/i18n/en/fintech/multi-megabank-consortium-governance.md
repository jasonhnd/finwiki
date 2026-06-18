---
source: fintech/multi-megabank-consortium-governance
source_hash: c84c96ff0fe92057
lang: en
status: machine
fidelity: ok
title: "Multi-Megabank Consortium Governance"
translated_at: 2026-06-18T23:59:13.053Z
---

# Multi-Megabank Consortium Governance

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Comparing fintech infrastructure across **3  governance models** — "single bank," "multi-bank JV," and "independent company + bank minority stakes" — the **Progmat type (an independent-company + non-controlling-stake design) has the highest scalability**. JPMorgan Kinexys is the single-bank type, BIS Project Agorá is the central-bank-consortium type, and Progmat is the independent-company type — each requires a different trade-off between regulatory environment and decision-making speed.

## The 3  governance models

| Model | Representative case | Ownership structure | Decision speed | Regulatory requirements | Scalability |
|---|---|---|---|---|---|
| **Single-bank ownership** | JPM Kinexys / GS DAP | bank 100% subsidiary | fast | within bank regulation | low (tied to bank brand) |
| **Multi-bank JV** | DTCC / the old SWIFT structure | equal capital among banks | slow (unanimity of all) | inter-bank coordinated regulation | medium |
| **Independent company + non-controlling** | **Progmat / NTT Data joint** | independent legal entity · bank minority stakes | medium | independent fintech regulation | **high** |

## The detailed design of the Progmat structure

**The core intent of the MUTB 49% stake design**:

```
MUTB ([[megabanks/mufg|三菱 UFJ 信託銀行]])              49.0%   ← the single largest shareholder, but a majority is NG
SMBC Group ([[megabanks/smfg|SMFG]])        ~15%   ← an important partner
Mizuho Trust Bank        ~15%   ← an important partner
NTT Data                 ~10%   ← a technology partner
JPX                      ~5%    ← an exchange partner
Datachain                ~3%   ← a technology partner
Others                   ~3%
```

**Design principles**:
- **The 49% is intentional** (FSA guidance): a **non-MUFG-controlled** design in which MUFG does not become dominant
- **The three major banks are on equal footing** (substantively equal apart from MUTB 49%) → securing neutrality
- **NTT Data / JPX participate from the technology / exchange side** → legitimacy beyond banks

**This means**:
- SMBC / Mizuho cannot use it if it is a MUFG subsidiary, but they can use it if it is an independent legal entity
- The FSA does not regard it as a MUFG-only project, but approves it as industry-common infrastructure
- Even when creating a common SC (JPYW), it would be difficult as a MUFG-only proposal, but it is possible via Progmat

## Conditions for establishing multi-megabank-type governance

| Condition | Content | Progmat's degree of achievement |
|---|---|---|
| **Neutral chairperson / CEO** | a person not biased toward any bank | Tatsuya Saito (from Mitsubishi UFJ but concurrently an independent CEO) |
| **Exceeding the majority threshold is NG** | no single bank holds a majority | achieved with MUTB 49% |
| **Blessing of the government / regulatory side** | the central bank / supervisory authority certifies it as industry-common | FSA PIP–led |
| **Neutrality of technology partners** | non-bank technology partners are neutral | NTT Data + Datachain |
| **Competing banks gain** | the three major banks benefit simultaneously | common access for a customer base of 30 万 companies |
| **Exit option** | each bank can also run its own line in parallel | SMBC with SBI / Mizuho with Solana in parallel |

## Contrast with BIS Project Agorá

| Axis | Progmat | BIS Project Agorá |
|---|---|---|
| Leadership | private sector (trust-bank coordination) | international (BIS + 7  central banks) |
| Regulation | FSA supervision + trust law | BIS coordination + each country's central-bank law |
| Settlement asset | trust-type SC | wholesale CBDC + TD |
| Decision speed | shareholder-agreement-based (medium) | 7  central-bank consensus (slow) |
| Geographic scope | centered on domestic Japan → expansion under consideration | globally designed but in pilot |
| Exit option | sellable as a shareholder | the state's commitment cannot be released |

**Implication**: [[fintech/bis-project-agora-overview|Agorá]] has **strong public commitment and regulatory integration** but is **slow**. [[payment-firms/progmat|Progmat]] has **high speed and flexibility** but its **international legitimacy is weaker than Agorá's**. The two are complementary: a structure in which Agorá builds the international framework and Progmat handles the country-by-country implementation may be established over the long term.

## Common risks

| Risk | Content |
|---|---|
| **Strategic misalignment** | the possibility that member banks defect onto their own lines (such as SMBC × SBI) |
| **Decision-making delay** | the unanimity requirement causes important decisions to miss their timing |
| **Hegemony struggle** | the possibility that MUTB 49% → effectively controls and hollows out the other banks |
| **Reduced bargaining power of new member banks** | later-joining banks cannot change the existing 49% design |
| **Legitimacy of overseas linkage** | each bank's overseas subsidiaries individually partner with Kinexys, etc. → consistency breaks down |

## Applications

- Structural analysis of any "common fintech infrastructure across multiple megabanks" discussion
- A reference for SC consortium designs in South Korea / Taiwan / other Asian countries
- A governance comparison for the interconnection of mBridge / Project Nexus / IPS-RTGS
- As an evolution of existing "industry-common infrastructure" such as DTCC / Visa / Mastercard
- A 2 -tier structural design of a central-bank consortium + a private-sector SC consortium

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->

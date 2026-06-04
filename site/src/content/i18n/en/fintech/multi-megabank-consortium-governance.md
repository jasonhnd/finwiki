---
source: fintech/multi-megabank-consortium-governance
source_hash: 7082c4f387c11adc
lang: en
status: machine
fidelity: ok
title: "Multi-megabank consortium governance"
translated_at: 2026-05-31T11:13:44.848Z
---

# Multi-megabank consortium governance


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan financial regulation for tokens, crypto assets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] for the broader system boundary.

> [!info] TL;DR
> Comparing fintech infrastructure across **single-bank ownership**, **multi-bank joint ventures**, and **independent companies with non-controlling bank stakes**, the Progmat-style structure appears the most scalable. JPMorgan Kinexys is a single-bank model, BIS Project Agorá is a central-bank consortium model, and Progmat is an independent-company model. Each makes a different trade-off between regulatory acceptance and decision speed.

## Three governance models

| Model | Representative examples | Ownership structure | Decision speed | Regulatory requirements | Scalability |
|---|---|---|---|---|---|
| **Single-bank ownership** | JPM Kinexys / GS DAP | 100% bank subsidiary | Fast | Inside bank regulation | Low; constrained by the bank brand |
| **Multi-bank JV** | DTCC / legacy SWIFT-style structures | Equalized interbank ownership | Slow; consensus-heavy | Bank-coordination regulation | Medium |
| **Independent company + non-controlling stakes** | **Progmat / NTT Data collaboration** | Independent company with minority bank stakes | Medium | Independent fintech regulation | **High** |

## Progmat structure

**Core intent of the 49% MUTB stake design**:

```
MUTB ([[megabanks/mufg|Mitsubishi UFJ Trust and Banking]]) 49.0%   <- largest single shareholder, but below majority control
SMBC group ([[megabanks/smfg|SMFG]])                       ~15%    <- important partner
Mizuho Trust Bank                                         ~15%    <- important partner
NTT Data                                                  ~10%    <- technology partner
JPX                                                       ~5%     <- exchange partner
Datachain                                                 ~3%     <- technology partner
Other shareholders                                       ~3%
```

**Design principles**:
- **49% is intentional** under regulatory guidance: the company is designed as non-MUFG-controlled rather than a de facto MUFG subsidiary.
- **The three megabanks remain near-peers** once MUTB's large but non-controlling stake is accounted for, supporting neutrality.
- **NTT Data and JPX add technology and exchange-side legitimacy**, reducing the appearance of a bank-only initiative.

**Effects**:
- SMBC and Mizuho could not credibly use an MUFG subsidiary, but can participate in an independent company.
- The FSA can treat the project as common industry infrastructure rather than as a single-MUFG initiative.
- A shared stablecoin such as JPYW would be difficult as an MUFG-only proposal, but more plausible through Progmat.

## Conditions for multi-megabank governance

| Condition | Content | Progmat status |
|---|---|---|
| **Neutral chairperson / CEO** | Leadership not captured by any single bank | Tatsuya Saito has Mitsubishi UFJ origins but operates as independent CEO |
| **No single-bank majority** | No bank holds more than 50% | Achieved through MUTB's 49% stake |
| **Government / regulatory blessing** | Central bank or supervisory authority recognizes common-industry value | FSA-led PIP context |
| **Neutral technology partners** | Non-bank technology partners provide neutral infrastructure legitimacy | NTT Data + Datachain |
| **Competing banks gain** | All three megabanks benefit simultaneously | Shared access to a broad corporate customer base |
| **Exit options** | Each bank can keep parallel proprietary strategies | SMBC can pursue SBI routes; Mizuho can pursue Solana routes |

## Contrast with BIS Project Agorá

| Axis | Progmat | BIS Project Agorá |
|---|---|---|
| Sponsor | Private sector, trust-bank coordination | International, BIS + seven central banks |
| Regulation | FSA supervision + trust-law architecture | BIS coordination + domestic central-bank law |
| Settlement asset | Trust-type stablecoin | Wholesale CBDC + tokenized deposits |
| Decision speed | Medium, based on shareholder agreements | Slow, requiring agreement among seven central banks |
| Geographic scope | Japan-centered, with expansion under discussion | Global design, still in pilot |
| Exit option | Shareholder stake can be sold | Sovereign commitment is difficult to unwind |

**Implication**: [[fintech/bis-project-agora-overview|Agorá]] has strong public-sector commitment and regulatory integration but moves slowly. [[payment-firms/progmat|Progmat]] has greater speed and flexibility, but weaker international public-sector legitimacy than Agorá. The two may become complementary: Agorá supplies the international architecture, while Progmat supplies country-level implementation.

## Common risks

| Risk | Content |
|---|---|
| **Strategic divergence** | Member banks may peel away through proprietary routes, such as SMBC x SBI. |
| **Decision delay** | Consensus requirements can cause important decisions to miss market timing. |
| **Control contest** | MUTB's 49% stake could be read as de facto control, weakening other banks' incentives. |
| **Lower bargaining power for later entrants** | Banks joining later cannot easily renegotiate the existing 49% design. |
| **International alignment risk** | Overseas subsidiaries may separately partner with Kinexys or similar platforms, weakening consistency. |

## Applications

- Structural analysis of any shared fintech infrastructure proposal involving multiple megabanks.
- Reference design for stablecoin consortia in Korea, Taiwan, and other Asian markets.
- Governance comparison for mBridge, Project Nexus, and IPS-RTGS interconnection.
- Evolution path for existing industry utilities such as DTCC, Visa, and Mastercard.
- Two-layer design combining a central-bank consortium with a private-sector stablecoin consortium.

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|Japan trust-type stablecoin architecture]]
- [[fintech/cross-border-sc-via-swift-api|Cross-border stablecoin via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory three-layer structure]]
- [[fintech/central-banking-function-unbundling|Five-layer unbundling of central-bank functions]]
<!-- /wiki-links:managed -->

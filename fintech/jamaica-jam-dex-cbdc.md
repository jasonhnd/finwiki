---
title: Jamaica JAM-DEX — Bank of Jamaica retail CBDC, Lynk wallet adoption, eCurrency Mint vendor
aliases:
  - jamaica-jam-dex-cbdc
  - JAM-DEX
  - Jam-Dex
  - Jamaica Digital Exchange
  - BoJ Jamaica CBDC
  - Lynk wallet
  - Bank of Jamaica CBDC
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, retail-cbdc, jamaica, jam-dex, bank-of-jamaica, caribbean, lynk, ecurrency-mint, financial-inclusion]
status: active
sources:
  - https://boj.org.jm/
  - https://boj.org.jm/core-functions/currency/cbdc/
  - https://boj.org.jm/jam-dex/
  - https://lynk.us/
  - https://www.bis.org/publ/work1116.htm
  - https://www.bis.org/about/bisih/topics/cbdc.htm
---

# Jamaica JAM-DEX — Bank of Jamaica retail CBDC, Lynk wallet adoption, eCurrency Mint vendor

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction case study on **JAM-DEX (Jamaica Digital Exchange)**, the Bank of Jamaica's retail CBDC launched in 2022 — the third major small-economy retail CBDC after the Bahamas Sand Dollar (2020) and Nigeria eNaira (2021), and the most cleanly adopted of the three at the percentage-of-population level. Read it against [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]] (longest-running peer; AFI distribution model), [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] (adoption-failure case; Bitt vendor), and [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for cross-jurisdiction positioning. For architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]].

> [!info] TL;DR
> The Bank of Jamaica (BoJ) issued **JAM-DEX (Jamaica Digital Exchange)** as legal-tender retail CBDC on **2022-07** following an 8-month pilot in 2021. JAM-DEX is **legal tender by amendment to the Bank of Jamaica Act (passed 2022)** — making Jamaica one of the first jurisdictions to enact CBDC-specific legislation alongside launch (more legally explicit than the Bahamas and Nigeria, both of which used pre-existing currency-issuance authority). The defining distribution feature is **Lynk**, the wallet operated by NCB Financial Group subsidiary TFOB Limited, which reached **~200K-300K registered users** by 2024 — a higher penetration of adult population than either Sand Dollar or eNaira. Technology partner is **eCurrency Mint** (not Bitt — distinctly different vendor from Sand Dollar / eNaira / DCash). Government **incentive payments (J$2,500 sign-up bonus and merchant-acceptance subsidies)** funded the initial wallet enrolment surge. The programme is still substantially smaller than e-CNY or eRupee but is the **cleanest small-economy CBDC adoption case** of the four-plus comparable peer programmes.

## Programme architecture

```
                         Bank of Jamaica
                                │
                                ▼
                       JAM-DEX (J$ retail CBDC)
                                │
       ┌────────────────────────┴────────────────────────┐
       ▼                                                  ▼
   Issuer (BoJ; legal-tender central-bank liability)   Technology partner
                                                       (eCurrency Mint, USA;
                                                        DSC2 platform)
       │                                                  │
       ▼                                                  ▼
   Two-tier intermediated distribution               Wallet apps
   (BoJ → Authorised payment-service                  - Lynk (NCB / TFOB) — dominant
    providers (PSPs) + DTIs (deposit-taking            - JAM-DEX-enabled bank apps
    institutions) → consumer wallets)
       │
       ▼
   Tiered KYC
   - Standard (BoJ-aligned J$ KYC tiers)
   - Merchant tier
```

## Matrix A · Statute, regulator, phase status

| Item | Detail |
|---|---|
| Lead authority | **Bank of Jamaica (BoJ)** |
| Legal basis | Bank of Jamaica (Amendment) Act 2022 — explicit CBDC legal-tender authorisation |
| Pilot phase | 2021-08 to 2022-04 (8-month pilot, primarily Kingston / urban) |
| **Live launch** | **2022-07** — third major small-economy retail CBDC |
| Technology partner | **eCurrency Mint** (US-headquartered; deployed via DSC2 platform) |
| Underlying tech | Cryptographically secured digital symbols / hierarchical digital signatures (eCurrency Mint architecture; distinct from Hyperledger Fabric used by Bitt deployments) |
| Wholesale CBDC | None — retail only |
| Cross-border CBDC | None as of 2026-05; no [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] / [[fintech/bis-project-agora-overview|Agorá]] integration |
| Legal-tender status | Yes — explicit in 2022 BoJ Act amendment |

The **legal-tender amendment** is the cleanest legal structure of any small-economy retail CBDC. Nigeria issued eNaira under pre-existing currency authority; Bahamas Sand Dollar relied on a 2020 amendment of the CBOB Act; Jamaica went the furthest by passing a dedicated 2022 amendment specifically naming the digital Jamaican dollar as legal tender.

## Matrix B · Design choices — wallet-first, incentive-driven, banked-population focus

| Design choice | Detail | Why |
|---|---|---|
| **Two-tier intermediated via PSPs and DTIs** | BoJ issues; consumers transact via Authorised Payment Service Providers (PSPs) and Deposit-Taking Institutions (DTIs) | Preserves the role of regulated intermediaries |
| **Lynk as flagship wallet** | NCB Financial Group subsidiary TFOB Limited operates the Lynk wallet — by far the most-used JAM-DEX wallet | Concentrates wallet UX in a single high-quality consumer-facing app |
| **Sign-up incentive — J$2,500 (~US$16) bonus** | Government / BoJ-funded one-time incentive for the first 100K consumer wallet enrolees (announced 2022-03) | Drove early wallet enrolment surge in the first weeks post-launch |
| **Merchant subsidies** | Government-funded subsidies to incentivise small-merchant acceptance | Targets two-sided-market chicken-and-egg problem |
| **Zero interest** | No yield on JAM-DEX balances | Same anti-disintermediation logic as peers |
| **No transaction fees on consumer-to-merchant** | BoJ does not charge per-transaction fees | Encourages adoption |
| **Account-based ledger** | Balances tied to identified wallets via PSP / DTI onboarding | AML/CFT-compatible |
| **eCurrency Mint vendor (not Bitt)** | Architectural alternative to Bitt's permissioned-DLT model | Distinct technology lineage from Sand Dollar / eNaira / DCash |
| **Direct central-bank liability** | JAM-DEX is BoJ liability | Differs from Japan DCJPY (deposit token, not CBDC) |

The incentive-driven launch is the most controversial design choice. Government / BoJ funded the J$2,500 enrolment bonus and merchant subsidies to overcome the cold-start adoption problem. Critics argue this purchased headline-enrolment numbers without securing durable use; defenders point out that **active-use metrics by 2023-2024 grew beyond the initial incentive cohort**, suggesting some real demand was created by the introduction.

## Matrix C · Adoption metrics (most recent public)

| Metric | Most-recent public figure |
|---|---|
| Live status | **Live since 2022-07** (~3.5+ years) |
| Registered wallets (cumulative) | ~200K-300K (Lynk-led, multiple public statements through 2024) |
| **Active wallets** | Materially smaller than registered; public BoJ statements have not disclosed precise daily-active counts |
| **Penetration vs adult population** | Several percent of adult population (~2M total adults) — **higher than Sand Dollar or eNaira on a population-percentage basis** |
| Cumulative tx value | Modest in absolute terms; J$ billions cumulative over multi-year window |
| Coverage | Nation-wide; Kingston / urban concentration |
| Merchant acceptance | Several thousand merchants reported; concentrated in fast-food / retail / informal-sector pilots |
| Cross-border CBDC | None |

The **Lynk wallet** dominates the JAM-DEX wallet ecosystem. NCB Financial Group's strategic decision to embed the JAM-DEX rail inside an already-marketed consumer payment app (Lynk) is the cleanest distribution-channel-ownership case among small-economy CBDCs — NCB is the largest commercial banking group in Jamaica, with strong existing consumer reach. This is structurally closer to the e-CNY model (where the PBoC leveraged the six state-owned commercial banks and the four big payment / telecom operators) than to the Bahamian AFI-interoperable pattern.

## Matrix D · Lynk wallet — the distribution-channel-ownership advantage

```
   Bank of Jamaica (BoJ)
        │
        ▼
   NCB Financial Group (largest commercial banking group in Jamaica)
        │
        ▼
   TFOB Limited (NCB subsidiary; consumer-fintech vehicle)
        │
        ▼
   Lynk wallet (JAM-DEX-enabled consumer wallet + adjacent payment features)
        │
        ▼
   ~200K-300K registered users + ~thousand+ merchants
```

**Why this matters:** Lynk's penetration is the single largest determinant of JAM-DEX adoption. NCB Financial Group is the dominant Jamaican commercial bank by deposits and consumer reach; its strategic willingness to push JAM-DEX through Lynk solved the distribution-incentive problem that crippled eNaira (where DMBs / MMOs had limited incentive to push the CBDC over their own products). Lynk gave the BoJ a single anchor wallet with real consumer-marketing capability.

The contrast with eNaira is structural:

- **eNaira**: many DMBs + MMOs, none particularly incentivised to push.
- **Sand Dollar**: multiple AFIs, interoperable but small absolute base.
- **JAM-DEX / Lynk**: one anchor wallet operated by the dominant commercial-banking group; aligned distribution incentive.

The **distribution-channel-ownership lesson** is the single most-cited finding from the four-pole small-economy CBDC comparison.

## Matrix E · Government incentive design

The Jamaican government / BoJ used three concrete subsidy levers to push initial adoption:

| Subsidy | Detail | Effect |
|---|---|---|
| **Consumer enrolment bonus** | J$2,500 one-time payment to first ~100K wallet enrolees (announced 2022-03) | Drove the early registration surge; criticised as buying-headline-numbers |
| **Merchant acceptance subsidies** | Subsidies to small-merchant acceptance enrolment | Built initial merchant footprint |
| **Public-employee disbursement experiments** | Some public-sector pilot disbursements paid in JAM-DEX | Tested government-to-person (G2P) use case |

These subsidies are **policy-tools widely available to peer CBDC programmes but not all deployed**. The Sand Dollar did not use comparable consumer enrolment bonuses; the eNaira did not use enrolment bonuses (and arguably should have, given the adoption gap). The Jamaican approach is the **most aggressive incentive-design** among small-economy retail CBDCs and is now studied as a possible template.

## Matrix F · Comparison to peer CBDCs

| Item | Jamaica JAM-DEX | [[fintech/bahamas-sand-dollar-cbdc\|Bahamas Sand Dollar]] | [[fintech/nigeria-enaira-retail-cbdc\|Nigeria eNaira]] | China e-CNY |
|---|---|---|---|---|
| Live launch | 2022-07 | 2020-10-20 | 2021-10-25 | 2020-04 (pilots) |
| Issuer | Bank of Jamaica | Central Bank of The Bahamas | Central Bank of Nigeria | PBoC |
| Legal-tender amendment | Yes (BoJ Act amendment 2022) | Yes (CBOB Act 2020) | No (under existing currency authority) | Yes (PBoC Law 2020) |
| Distribution model | PSPs + DTIs; Lynk dominant | AFIs (interoperable) | DMBs + MMOs | 10 designated operators |
| Technology vendor | **eCurrency Mint** (US) | Bitt Inc. (Barbados) | Bitt Inc. (Barbados) | Proprietary PBoC |
| Enrolment incentive | **J$2,500 sign-up bonus** + merchant subsidies | None | None | None (state-led adoption push) |
| Anchor wallet | **Lynk** (NCB / TFOB) | Multiple AFI wallets interop | eNaira Speed Wallet + DMB apps | AliPay / WeChat Pay integration + bank apps |
| Active penetration | Several % of adult pop | Single-digit % of pop | <0.5% of adult pop | Single-digit-million daily-active out of 180M+ registered |
| Status (2026-05) | Live; modest growth | Live (5+ years); slow growth | Live but de-emphasised | Live; mass-rollout phase |

The **eCurrency Mint vs Bitt** vendor split is a quietly significant data point. The Bitt-vendor cluster (Sand Dollar, eNaira, ECCU DCash) has mixed-to-poor outcomes; the eCurrency Mint deployment (JAM-DEX) is the cleanest small-economy adoption case. This is not necessarily a vendor-capability story — distribution design dominates technology choice — but the pattern is worth noting in the CBDC-vendor-selection literature.

## Origin and evolution

```
2020-2021    BoJ internal work on retail CBDC; eCurrency Mint selected as technology partner
2021-08      Pilot phase begins (8 months, primarily Kingston-area)
2022-03      Pilot concludes; government announces J$2,500 enrolment-bonus programme
2022-05      Bank of Jamaica (Amendment) Act 2022 passed — legal tender for JAM-DEX
2022-07      JAM-DEX launched nation-wide; Lynk wallet goes live
2022-08      First ~100K wallet enrolments; J$2,500 bonus disbursed
2023         Merchant acceptance scales; Lynk dominates wallet share
2023-2024    Continued growth; public BoJ statements emphasise gradual scaling
2024-2025    JAM-DEX continues; wallet count grows past 200K Lynk users
2025-2026    Live; modest organic growth post-incentive
```

**Pattern**: launch was sequenced cleanly — pilot → legislation → incentive → wallet rollout. The Jamaican CBDC story is the **best-sequenced small-economy retail CBDC launch** in the public record. The structural lesson is that the cleanest sequence (legislative authority + anchor wallet + incentive) outperforms the fastest sequence (eNaira) or the longest-running sequence (Sand Dollar) on adoption-percentage terms.

## Comparison to private-rail alternatives in Jamaica

Jamaica's private-rail digital-payment landscape:

- **Commercial-bank apps** — NCB, Scotiabank Jamaica, BNS, JN Bank.
- **Lynk** — TFOB / NCB, dual-purposes as JAM-DEX wallet and as a standalone payment app.
- **Existing card / ATM rails** — Visa, Mastercard.
- **Remittance** — large diaspora-flow component; MoneyGram, Western Union, JNMS Remit; USD-linked Lynk features and stablecoin alternatives (USDT-based remittance apps) are emerging.
- **Crypto / USDT P2P** — modest in Jamaica relative to Nigeria; emerging.

JAM-DEX's competitive runway is **less crowded** than Nigeria's (where Opay / PalmPay / Moniepoint already serve hundreds of millions of users) and **less mature** than Sand Dollar's (where the Bahamian banking system is highly developed). The combination — anchor wallet (Lynk) + dominant commercial-bank group (NCB) + legal-tender legislation + government incentive — is the **cleanest small-economy CBDC adoption stack** in the public record so far.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## Sources

- Bank of Jamaica — institutional landing: https://boj.org.jm/
- BoJ — CBDC / JAM-DEX project page: https://boj.org.jm/core-functions/currency/cbdc/
- BoJ — JAM-DEX consumer / merchant pages: https://boj.org.jm/jam-dex/
- Lynk wallet operator (TFOB / NCB Financial Group): https://lynk.us/
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- Bank of Jamaica (Amendment) Act 2022 — public-domain legislative text
- BoJ public press releases on JAM-DEX launch and J$2,500 enrolment-bonus programme (2022)

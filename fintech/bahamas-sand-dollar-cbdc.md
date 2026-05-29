---
title: Bahamas Sand Dollar — longest-running live retail CBDC, AFI distribution, small-economy lessons
aliases:
  - bahamas-sand-dollar-cbdc
  - Sand Dollar
  - Sand Dollar CBDC
  - Central Bank of The Bahamas CBDC
  - BSD CBDC
  - longest-running retail CBDC
  - Bahamas digital currency
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, retail-cbdc, bahamas, sand-dollar, central-bank-bahamas, small-economy, afi, caribbean, financial-inclusion]
status: active
sources:
  - https://www.centralbankbahamas.com/
  - https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
  - https://www.sanddollar.bs/
  - https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
  - https://www.bis.org/publ/work1116.htm
  - https://www.bis.org/about/bisih/topics/cbdc.htm
---

# Bahamas Sand Dollar — longest-running live retail CBDC, AFI distribution, small-economy lessons

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction case study on the **Sand Dollar**, the **first nation-wide live retail CBDC** issued by any central bank globally (Bahamas, 2020-10-20). Read it against [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]] (live 2021-10, same Bitt-vendor technology lineage), [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]] (live 2022, third Caribbean-Atlantic peer), and [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for cross-jurisdiction positioning. For architecture context see [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]. For the broader emerging-market behavioral baseline see [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]].

> [!info] TL;DR
> The Central Bank of The Bahamas launched the **Sand Dollar on 2020-10-20**, making it the **first nation-wide live retail CBDC** anywhere — six months ahead of any other live retail CBDC, and pre-dating eNaira by one year and JAM-DEX by nearly two. The design is a **two-tier intermediated retail CBDC** with **Authorized Financial Institutions (AFIs)** providing the consumer-facing wallets, **tiered KYC** (Tier 1 phone-only up to B$500/B$1,500; Tier 2 ID-verified up to B$8,000/B$10,000), and **legal-tender status** as a direct liability of the central bank. Adoption is **low in absolute terms** (single-digit percentage of population in active use) but the programme has now run live for **over five years** — far longer than any other live retail CBDC — and is the foundational policy-laboratory case for small-economy CBDC design. Key design lessons cited globally: **financial-inclusion targeting** (~700-island geography, banking gaps), **legal-tender parity from launch**, **interoperable AFI wallet model**, and the **deliberate choice not to pay interest** to preserve commercial bank deposit funding.

## Programme architecture

```
                  Central Bank of The Bahamas
                              │
                              ▼
                  Sand Dollar (B$ retail CBDC)
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   Issuer (CBOB; central-bank liability)        Technology partner
                                                (Bitt Inc., Barbados;
                                                permissioned DLT)
       │                                              │
       ▼                                              ▼
   Two-tier intermediated distribution         AFI wallet apps
   (CBOB → Authorized Financial Institutions   (interoperable across AFIs;
    (AFIs) → consumer / merchant wallets)      consumer chooses provider)
       │
       ▼
   Tiered KYC structure
   - Tier 1 (phone + low-friction): B$500 wallet / B$1,500 monthly tx
   - Tier 2 (gov-ID verified):       B$8,000 wallet / B$10,000 monthly tx
   - Business wallets: separate cap structure
```

## Matrix A · Statute, regulator, phase status

| Item | Detail |
|---|---|
| Lead authority | **Central Bank of The Bahamas (CBOB)** |
| Legal basis | Central Bank of The Bahamas Act 2020 (revised provisions explicitly enabling digital currency issuance); Sand Dollar Regulations under the Act |
| Pilot phase | **Exuma pilot** launched 2019-12; **Abaco** added 2020 mid-year |
| **Live launch (nation-wide)** | **2020-10-20** — globally the first nation-wide live retail CBDC |
| Technology partner | **Bitt Inc.** (Barbados-headquartered; same vendor as Nigeria eNaira) |
| Underlying tech | Permissioned DLT (Bitt platform) |
| Wholesale CBDC | None — Sand Dollar is retail / mid-market only |
| Cross-border CBDC | None as of 2026-05; no participation in [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] or [[fintech/bis-project-agora-overview|BIS Project Agorá]] |
| Legal-tender status | Yes — Sand Dollar is direct CBOB liability, denominated 1:1 in Bahamian dollars (B$), itself pegged 1:1 to USD |

The legal-tender-from-launch posture distinguishes Sand Dollar from the EU digital euro plan (where legal-tender status is contemplated in the proposed Regulation but not yet in force) and from JAM-DEX (which similarly entered as legal tender but two years later).

## Matrix B · Design choices — financial inclusion-first, low-friction onboarding

| Design choice | Detail | Why |
|---|---|---|
| **Two-tier intermediated via AFIs** | CBOB issues; consumers transact via Authorized Financial Institutions (commercial banks + MMOs + payment-service providers) | Preserves commercial-bank role; spreads onboarding load |
| **Interoperable wallets** | A consumer's Sand Dollars are usable across any AFI wallet | Avoids walled-garden effect; users can switch AFI without losing balance |
| **Tiered KYC** | Tier 1 phone-only (B$500 wallet / B$1,500 monthly tx); Tier 2 ID-verified (B$8,000 wallet / B$10,000 monthly tx); business wallets separate | Designed for unbanked populations on outer islands |
| **Zero interest** | No yield on Sand Dollar balances | Same anti-disintermediation logic as the EU digital euro (see [[fintech/e-euro-retail-rollout|digital euro retail rollout]]) |
| **No transaction fees** | CBOB does not charge per-transaction fees; AFIs may charge per service tier | Pricing inclusion-friendly |
| **Account-based ledger** | Balances tied to identified wallets via AFI onboarding | Compatible with AML/CFT; not a bearer token |
| **Offline-capable design** | Limited offline transaction capability for outer-island connectivity gaps | Aligns with ~700-island geography |
| **B$ 1:1 USD peg inherited** | Sand Dollar is B$ — pegged 1:1 to USD via Bahamas's fixed-exchange-rate regime | Inherits the peg; not an independent currency |
| **Direct central-bank liability** | Sand Dollar is CBOB liability, not commercial-bank deposit | Differs from Japan DCJPY (tokenised deposit, not CBDC) — see [[fintech/jp-stablecoin-dcjpy|DCJPY]] |

The design is unusually disciplined for an early CBDC — most of the later mainstream CBDC literature (BIS, IMF, ECB) effectively codified principles that Sand Dollar prototyped in production.

## Matrix C · Adoption metrics (most recent public)

| Metric | Most-recent public figure |
|---|---|
| Live status | **Live since 2020-10-20** (over five years; longest-running live retail CBDC) |
| Wallets enrolled | ~30-50K personal + merchant wallets (CBOB cited Q-on-Q figures; absolute small-economy base) |
| **Active wallets** | Single-digit percentage of total wallets transacting in a given month |
| **Penetration vs population** | Single-digit-% of adult Bahamian population (~300K total adults; small absolute base) |
| Cumulative tx value | Modest in absolute terms; below 1% of broad-money equivalent |
| Coverage | Nation-wide (~700-island archipelago); inclusion focus on Family Islands |
| Merchant acceptance | Growing in tourism-adjacent and food-retail; nation-wide rollout below saturation |
| Cross-border CBDC | None |

The IMF Working Paper "The Bahamas's Sand Dollar: CBDC and Lessons Learned" (Kosse, Mattei, et al., 2022) is the most-cited public diagnostic. It frames Sand Dollar as a **policy success in launch sequencing and operational stability** but a **slow-adoption case** measured by active-wallet penetration. The Bahamian small-economy baseline (~400K population total, dispersed across ~700 islands) means absolute adoption numbers are necessarily small even at high penetration; the policy-relevant metric is **penetration percentage**, not absolute headcount.

## Matrix D · AFI distribution model — the canonical two-tier retail CBDC

```
   Central Bank of The Bahamas (issuer of Sand Dollar)
                  │
   ┌──────────────┼──────────────────────────────────┐
   ▼              ▼                                   ▼
  Bank AFIs    Money Transmission AFIs        Payment-service AFIs
  (CIBC, FCIB, (KANOO, MoneyMaxx, etc.)       (Island Pay, etc.)
   RBC, etc.)
   │              │                                   │
   ▼              ▼                                   ▼
  Consumer + merchant wallet apps (interoperable across all AFIs)
   │
   ▼
  End users — consumers + merchants on the four-plus-island archipelago
```

**AFI (Authorized Financial Institution)** is the defining institutional construct. AFIs are CBOB-authorised entities — commercial banks, money transmitters, payment-service providers — that can issue / hold / transact Sand Dollar wallets for the end user. Critically the **wallets are interoperable across AFIs**: a consumer's Sand Dollar balance held via Island Pay can be received from a counterparty using a different AFI's wallet, and the consumer can switch AFI without losing balance.

The interoperability requirement avoids the walled-garden pattern that emerged in some peer programmes (e.g., e-CNY operator-level interop is more complex). It is structurally similar to the EU digital euro design where supervised PSPs provide wallets but the underlying balance is ECB-issued and portable.

| AFI category | Function | Example |
|---|---|---|
| **Bank AFIs** | Wallet issuance for bank customers | Commercial Bahamian banks (CIBC, FCIB, RBC, BoB, etc.) |
| **Money Transmission AFIs** | Wallet issuance for unbanked / underbanked | KANOO, MoneyMaxx |
| **Payment-service AFIs** | Wallet issuance via fintech apps | Island Pay |

The AFI model is now widely cited as the **canonical small-economy CBDC distribution pattern**. It avoids the CBOB needing to run a consumer-facing app directly, preserves the role of regulated intermediaries, and supports financial-inclusion targeting through MMO and payment-service AFIs that reach unbanked outer-island populations.

## Matrix E · Tiered KYC — the inclusion-vs-AML balance

| Tier | KYC requirement | Wallet cap | Monthly tx cap | Target user |
|---|---|---|---|---|
| **Tier 1 (personal)** | Phone number + low-friction onboarding | B$500 | B$1,500 | Unbanked / underbanked; outer islands; tourists |
| **Tier 2 (personal)** | Gov-issued ID verification (NIB number / passport) | B$8,000 | B$10,000 | Mainstream consumers |
| **Business wallet** | KYB (Know Your Business) verification | Higher caps; tiered by business type | Higher caps | Merchants, small businesses |

The tiered design is structurally similar to the e-CNY operator-tier model and the eNaira tier-0/1/2/3 model. The Sand Dollar tier-1 cap is materially lower than the eNaira tier-0 cap (B$500 vs ₦300K), reflecting different fiscal-base economics — but the design philosophy (low-friction tier for the unbanked, higher tier for verified users) is shared.

The IMF working paper notes that **most Sand Dollar users are tier-2** (ID-verified), not tier-1 — meaning the inclusion-targeting design did not fully succeed in reaching the unbanked at scale. The same observation applies to eNaira (tier-2 dominates) and JAM-DEX.

## Matrix F · Comparison to peer small-economy / emerging-market CBDCs

| Item | Bahamas Sand Dollar | [[fintech/nigeria-enaira-retail-cbdc\|Nigeria eNaira]] | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | Eastern Caribbean DCash |
|---|---|---|---|---|
| Live launch | 2020-10-20 (first ever) | 2021-10-25 | 2022-07 (formal launch) | 2021-03 (pilot); discontinued 2024 |
| Issuer | CBOB | CBN | Bank of Jamaica | Eastern Caribbean Central Bank |
| Distribution | AFIs (interoperable) | DMBs + MMOs | Authorised wallet providers | Pilot via banks |
| Technology partner | Bitt Inc. | Bitt Inc. | eCurrency Mint | Bitt Inc. |
| Tier-1 KYC cap | B$500 / B$1,500 mo | ₦120K daily / ₦300K max | J$100K / J$50K (varies by tier) | n/a (discontinued) |
| Active penetration | Single-digit-% of pop | <0.5% of adult pop | Few % of pop (Lynk-driven) | n/a (discontinued) |
| Status (2026-05) | Live (5+ years) | Live but de-emphasised | Live | Discontinued 2024 |

Sand Dollar and JAM-DEX are now the **two stable live small-economy retail CBDCs**; eNaira is live but de-emphasised; DCash was discontinued. The pattern across Caribbean / African-Atlantic small-economy CBDCs is clear: **launch is achievable, sustained adoption is the structural challenge**.

## Origin and evolution

```
2018-2019    CBOB internal work on retail CBDC; Bitt Inc. selected as technology partner
2019-12      Exuma pilot launched (first Family-Island pilot)
2020-06      Abaco added to pilot
2020-10-20   Nation-wide Sand Dollar launch — first nation-wide retail CBDC globally
2021         AFI roster expansion; merchant acceptance pilots
2021-03      Eastern Caribbean DCash launched (peer reference programme)
2021-10      Nigeria eNaira live (second large-EM retail CBDC after Sand Dollar)
2022-06      IMF Working Paper "The Bahamas's Sand Dollar: CBDC and Lessons Learned"
2022-07      Jamaica JAM-DEX live
2023-2024    Sand Dollar continued operational; wallet count and tx growth modest
2024         Eastern Caribbean DCash discontinued after extended outage and limited adoption
2024-2025    Sand Dollar surpasses four-year continuous-operation mark — longest-running live retail CBDC
2025-2026    Continued live; ongoing AFI / merchant rollout; no major design change
```

**Pattern**: Sand Dollar's longevity is the data point most often cited. It is the only continuous-operation case spanning a full BIS / IMF / academic-research cycle, and almost every subsequent CBDC design borrows pieces of its model (two-tier intermediated, tiered KYC, interoperable wallets, no interest, AFI-style distribution).

## Comparison to private-rail alternatives in the Bahamas

The Bahamas already has a **functioning private digital-payment landscape**, which is one reason Sand Dollar adoption is gradual rather than explosive:

- **Commercial-bank online banking and cards** (CIBC, FCIB, RBC, BoB, etc.).
- **Island Pay** (a payment-service AFI in the Sand Dollar stack, but also a standalone wallet operator).
- **MoneyMaxx, KANOO** — money-transmitter services.
- **Tourist-economy USD acceptance** — given the USD-peg, USD circulates physically alongside B$ in the tourism sector.

The Bahamian retail CBDC competes with an **already-banked majority population in the main island clusters** (Nassau / Paradise Island / Freeport), where the marginal benefit of switching from existing payment rails is small. The structural inclusion target is the **outer Family Islands** and the **unbanked / underbanked** — where infrastructure (smartphone penetration, connectivity, agent-network density) is the binding constraint, not the wallet design.

This explains why Sand Dollar's design optimised for offline capability, low-friction tier-1 onboarding, and AFI interoperability. The design is structurally correct; the binding constraint is **physical inclusion infrastructure** rather than digital-money design.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## Sources

- Central Bank of The Bahamas — institutional landing: https://www.centralbankbahamas.com/
- CBOB — Sand Dollar FAQ and project page: https://www.centralbankbahamas.com/payments-system/the-sand-dollar/sand-dollar-faqs
- Sand Dollar official site: https://www.sanddollar.bs/
- IMF Working Paper — "The Bahamas's Sand Dollar: CBDC and Lessons Learned" (Kosse, Mattei, Glowka, 2022): https://www.imf.org/en/Publications/WP/Issues/2022/06/10/The-Bahamas-Sand-Dollar-CBDC-and-Lessons-Learned-518864
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- Central Bank of The Bahamas Act 2020 — public-domain legislative text
- CBOB Sand Dollar Regulations — public publication under the Act

---
title: Jamaica JAM-DEX — 2025 official adoption snapshot, wallet providers, incentives
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
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, retail-cbdc, jamaica, jam-dex, bank-of-jamaica, caribbean, lynk, ecurrency-mint, financial-inclusion]
status: active
sources:
  - https://boj.org.jm/
  - https://boj.org.jm/core-functions/currency/cbdc/
  - https://boj.org.jm/wp-content/uploads/2026/03/2025-BOJ-Annual-Report-final.pdf
  - https://boj.org.jm/wp-content/uploads/2025/04/2024-BOJ-Annual-Report-final.pdf
  - https://boj.org.jm/bojs-cbdc-pilot-project-a-success/
  - https://boj.org.jm/bank-of-jamaicas-cbdc-solution/
  - https://boj.org.jm/jam-dex-phased-rollout-progresses/
  - https://jis.gov.jm/2500-incentive-for-jamaicans-to-get-digital-wallet/
  - https://lynk.us/
  - https://www.bis.org/about/bisih/topics/cbdc.htm
---

# Jamaica JAM-DEX — 2025 official adoption snapshot

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as the per-jurisdiction case study on **JAM-DEX (Jamaica Digital Exchange)**, Bank of Jamaica's retail CBDC. Read it against [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]], [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]], and [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]], but do not rank adoption without harmonised active-user and transaction datasets. Architecture context: [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]], [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大現役范式]], and [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架構選択 4 核心权衡]].

> [!info] TL;DR
> Bank of Jamaica completed an eCurrency Mint-backed pilot from May through December 2021 and moved to phased national rollout in 2022; the 14 June 2022 amendment made CBDC legal tender and confirmed BoJ as sole issuer. The latest annual report currently published reports **305,026 registered wallet users at end-2025**, up 8.1% year on year, **J$260.1 million in circulation**, and two public wallet providers: Lynk and JN Pay. BoJ also states that usage and spending increased in 2025, but the report does not publish active-wallet, transaction-count, merchant-count, or cross-country-comparable penetration metrics. Therefore this page does not call JAM-DEX the best-adopted peer or infer active use from cumulative registrations.^[source:Bank of Jamaica Annual Report 2025, pp. 66-67; BoJ pilot and phased-rollout releases]

## Programme architecture

```
          Bank of Jamaica
                 │ issues / redeems JAM-DEX
                 ▼
      approved wallet-provider channel
          ┌──────┴──────┐
          ▼             ▼
   NCB + TFOB/Lynk   JN Bank/JN Pay
          │             │
          └──── consumers / merchants ────┘
```

The diagram reflects providers reported as public at end-2025. It does not imply that every PSP / DTI is a JAM-DEX wallet provider or that Lynk remains the only channel.

## Matrix A · Statute, regulator, phase status ^[source:BoJ pilot completion; BoJ CBDC solution; BoJ 2022 phased-rollout release; BoJ Annual Report 2025]

| Item | Detail |
|---|---|
| Lead authority | **Bank of Jamaica (BoJ)** |
| Legal basis | Bank of Jamaica (Amendment) Act, Act 5 of 2022; amendments passed on 14 June 2022 expanded currency references to CBDC, made it legal tender, and confirmed BoJ as sole issuer |
| Pilot | May–31 December 2021; NCB participated as the ready wallet provider |
| National rollout | Phased rollout in 2022; BoJ does not identify a single official `2022-07 launch` date in the cited releases |
| Technology partner | eCurrency Mint Inc. selected for the pilot and national rollout |
| Source-layer technology | BoJ described the chosen issuance / mint / redeem solution as non-blockchain; wallet providers may use other technologies in their own networks |
| Product scope | Retail Jamaican-dollar CBDC distributed through wallet providers |
| Current official status | BoJ Annual Report 2025 reports year four of a five-year National Roll-Out plan |

The amendment is clear evidence of Jamaica's legal basis, but the page no longer ranks it as “cleaner” or “further” than Bahamas / Nigeria without a section-by-section legal comparison.

## Matrix B · Documented design and distribution ^[source:BoJ CBDC pages and FAQ; BoJ Annual Reports 2023-2025; JIS incentive notice]

| Design element | Documented detail | Evidence boundary |
|---|---|---|
| Issuance | BoJ issues JAM-DEX and supplies approved wallet providers | The report does not say every PSP / DTI distributes JAM-DEX |
| Public wallets at end-2025 | NCB with TFOB through Lynk; JN Bank launched JN Pay in May 2025 | Provider count is a year-end snapshot, not wallet market share |
| Consumer incentive | GOJ offered J$2,500 to the first 100,000 people opening JAM-DEX wallets after 1 April 2022; the threshold was reached by end-June | Registration incentive does not prove subsequent active use |
| 2023 merchant incentive | J$25,000 for the first 10,000 qualifying small merchants plus a 2% consumer cashback programme under stated limits | BoJ Annual Report 2025 does not publish a causal effect estimate |
| Monetary characteristics | JAM-DEX exchanges 1:1 with Jamaican notes / coins and does not pay interest | Wallet-provider terms and user eligibility remain implementation-specific |
| Technology | eCurrency Mint supports the central issuance solution; BoJ says blockchain is not used at the source | Vendor choice alone does not determine adoption |

The incentive programme can explain part of the cumulative registration jump, but no official active-wallet series is available here. Statements that incentives either “bought headline numbers” or generated durable demand are hypotheses requiring transaction-level retention data.

## Matrix C · Adoption and circulation (end-2025) ^[source:Bank of Jamaica Annual Report 2025, Payment System section]

| Metric | Most-recent public figure |
|---|---|
| Registered wallet users | **305,026**, +8.1% from end-2024 |
| Total minted | **J$276.0 million** |
| In circulation | **J$260.1 million** |
| Held by public | **J$144.4 million** (55.5% of circulation) |
| Held in wallet-provider digital vaults | **J$115.7 million** (44.5%) |
| Public wallet providers | **2** — Lynk and JN Pay |
| Usage direction | BoJ says overall usage and spending increased versus 2024 |
| Active wallets / transaction count | Not disclosed in the cited annual report |
| Merchant count | No end-2025 total disclosed; end-2023 report recorded more than 3,900 registered Lynk merchants |
| Government use | TAJ pilot ran 9 April–22 May 2025 for selected services; online JAM-DEX payment remained available |

The official data supports growth in registrations and circulation, but not a claim that JAM-DEX has higher active penetration than Sand Dollar or eNaira. Cross-country comparison requires the same date, active-user definition, merchant definition, transaction window, and population denominator.

## Matrix D · Wallet-provider evolution

```
2022        Lynk is the first public JAM-DEX wallet
2023-2024   Lynk remains the only provider offering JAM-DEX to the public
May 2025    JN Bank launches JN Pay
end-2025    two public providers; two additional banks targeted for later launch
```

The sequence shows that Lynk was the only public distribution channel through end-2024 and that provider diversity improved in 2025. It does not establish Lynk's current user share, that NCB is the “dominant” bank under a defined metric, or that distribution ownership caused better outcomes than eNaira / Sand Dollar. Those comparisons require provider-level active-use data.

## Matrix E · Government incentive design ^[source:JIS 2022 wallet incentive; Jamaica 2023 budget presentation; BoJ Annual Report 2023]

The incentives below are documented programme terms; the `Observed evidence` column avoids claiming causality beyond the public record. ^[source:JIS 2022 wallet incentive; Jamaica 2023 budget presentation; BoJ Annual Reports 2023 and 2025]

| Programme | Terms | Observed evidence |
|---|---|---|
| 2022 consumer wallet incentive | J$2,500 to first 100,000 eligible wallets opened after 1 April 2022 | Government reported 100% take-up by end-June 2022 |
| 2023 small-merchant incentive | J$25,000 to first 10,000 qualifying merchants meeting onboarding / transaction conditions | Programme announced; no causal merchant-retention estimate in cited reports |
| 2023-24 consumer loyalty | 2% cashback on JAM-DEX purchases up to the programme's monthly spending limit | Programme term disclosed; active-use effect not separately reported |
| 2025 TAJ pilot | Selected property-tax, fitness-fee, and traffic-ticket payments; pilot 9 April–22 May | BoJ says online payment option remained available |

The old comparison that Sand Dollar / eNaira used “none” and Jamaica was the most aggressive peer programme lacked a harmonised policy inventory and is removed.

## Matrix F · Peer-comparison evidence gate ^[method:compare primary central-bank datasets at a common snapshot]

| Metric | Required common definition | JAM-DEX evidence available here |
|---|---|---|
| Launch / status | pilot, phased rollout, national availability, and production status separated | pilot May–Dec 2021; phased national rollout from 2022; still in five-year rollout during 2025 |
| Registration | cumulative unique persons vs wallets/accounts | 305,026 registered wallet users at end-2025 |
| Active use | daily / monthly active, observation window, duplicate handling | not published in cited report |
| Transaction activity | count and value over same annual / monthly period | directional increase stated; exact 2025 count/value not published here |
| Merchant acceptance | registered vs active merchants | no end-2025 total; more than 3,900 Lynk merchants at end-2023 |
| Circulation | public holdings vs provider vaults vs minted total | J$144.4m public; J$115.7m provider vaults; J$276.0m minted |
| Incentives | eligibility, amount, window, take-up, retention | programme terms and initial take-up available; retention effect absent |

Until equivalent fields are sourced for [[fintech/bahamas-sand-dollar-cbdc|Sand Dollar]], [[fintech/nigeria-enaira-retail-cbdc|eNaira]], and e-CNY, the former peer-ranking table is not reproducible. Vendor association also does not establish a causal `eCurrency Mint > Bitt` outcome.

## Origin and evolution

```
2021-03       eCurrency Mint selected
2021-05—12    eight-month pilot; completed 31 December
2022-03       GOJ announces J$2,500 / first-100,000-wallet incentive
2022-06-14    Act 5 of 2022 amendments pass; CBDC becomes legal tender
2022           phased national rollout
2023           second incentive package; end-year registrations 263,341
2024           end-year registrations 282,274; Lynk remains sole public provider
2025-05        JN Pay launches as second public provider
2025           end-year registrations 305,026; TAJ use case and POS work advance
```

**Pattern**: pilot, legal amendment, incentive, and provider rollout are documented. Whether that sequence outperformed faster or longer-running peers cannot be concluded without the common metrics listed above.

## Comparison to private-rail alternatives in Jamaica

JAM-DEX coexists with bank deposits, card / ATM rails, mobile wallets, cash, and remittance services. A competitive analysis should compare payment acceptance, fee, uptime, cash-in/out, identity requirements, merchant economics, and user activity. The former claims that Jamaica was less crowded than Nigeria, less mature than Bahamas, or had the cleanest adoption stack were not supported by a common market dataset and are removed.

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

- [Bank of Jamaica Annual Report 2025](https://boj.org.jm/wp-content/uploads/2026/03/2025-BOJ-Annual-Report-final.pdf) — end-2025 wallet providers, registrations, minted / circulation balances, TAJ pilot, POS work。
- [Bank of Jamaica Annual Report 2024](https://boj.org.jm/wp-content/uploads/2025/04/2024-BOJ-Annual-Report-final.pdf) / [Annual Report 2023](https://boj.org.jm/wp-content/uploads/2024/03/2023-BOJ-Annual-Report.pdf) — prior-year comparable figures and incentive programme details。
- [BoJ — CBDC pilot completed（2021-12-31）](https://boj.org.jm/bojs-cbdc-pilot-project-a-success/) — pilot dates, participants, mint / issuance milestones。
- [BoJ — CBDC solution](https://boj.org.jm/bank-of-jamaicas-cbdc-solution/) / [provider selection](https://boj.org.jm/boj-announces-cbdc-provider/) — eCurrency procurement and non-blockchain source-layer description。
- [BoJ — JAM-DEX phased rollout progresses](https://boj.org.jm/jam-dex-phased-rollout-progresses/) / [legislation page](https://boj.org.jm/about-boj/legislation/) — 14 June 2022 amendment and legal-tender / sole-issuer status。
- [Jamaica Information Service — J$2,500 wallet incentive](https://jis.gov.jm/2500-incentive-for-jamaicans-to-get-digital-wallet/) / [take-up update](https://jis.gov.jm/jamaicans-take-up-2500-incentive-to-sign-up-for-jam-dex/) — eligibility and first-100,000 threshold。
- [BoJ — JAM-DEX CBDC landing](https://boj.org.jm/core-functions/currency/cbdc/) / [BIS Innovation Hub CBDC topic](https://www.bis.org/about/bisih/topics/cbdc.htm) — current official navigation and broader CBDC context。

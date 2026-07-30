---
source: fintech/bahamas-sand-dollar-cbdc
source_hash: 45f9f516326beb64
lang: en
model: local-same-language-sync
status: machine
fidelity: ok
title: "Bahamas Sand Dollar — nationwide retail CBDC release on 2020-10-20, AFI distribution, and end-2024 evidence"
translated_at: 2026-07-30T03:06:00+09:00
---

# Bahamas Sand Dollar — nationwide retail CBDC release on 2020-10-20, AFI distribution, and end-2024 evidence

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as a dated jurisdiction case study of the **Sand Dollar**. It records the nationwide release that began on **2020-10-20**, the regulated wallet-provider model, and the end-2024 adoption snapshot. The title is date-bounded: it does not claim that Sand Dollar is currently the “longest-running” retail CBDC. Read the separate entries on [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]], [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]], and [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] for other jurisdictions; this page does not infer a shared design lineage or adoption ranking from those comparisons. [CBOB's national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020) supplies the release date.

> [!info] TL;DR
> The Central Bank of The Bahamas announced that the national release of Sand Dollar, outside the Exuma and Abaco pilot regions and through authorised financial institutions (AFIs), would begin on **2020-10-20**. The 2021 Regulations define the digital currency as fully backed and a direct claim against the Central Bank, while the official individual-wallet page describes it as the digital version of legal tender. The dated end-2024 snapshot reported by the IMF was about **0.4% of currency in circulation**, **133,481 consumer wallets**, and **2,034 merchant wallets**. Those wallet totals are registrations, not an active-use measure. [National-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020); [2021 Regulations](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf); [official individual-wallet page](https://www.sanddollar.bs/individual); [IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf). ^[source: CBOB national-release notice; 2021 Regulations; official individual-wallet page; IMF Country Report No. 26/31]

## Programme architecture

```
                  Central Bank of The Bahamas
                  issues Bahamian Dollar Digital Currency
                              │
                              ▼
               fully backed direct central-bank claim
                              │
                              ▼
       registered wallet providers / authorised financial institutions
       banks · credit unions · money transmitters · payment institutions
                              │
                              ▼
                individual and non-individual wallets
                  Tier I · Tier II · other tiers
```

The diagram is limited to roles stated in the [2021 Regulations](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf) and the [national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020). It does not assert that one provider's wallet balance can be moved to another provider without a redemption, transfer, or re-enrolment step.

## Matrix A · Legal form, authority, and dated release

| Item | Directly supported detail |
|---|---|
| Lead authority | The **Central Bank of The Bahamas (CBOB)** issues the Bahamian Dollar Digital Currency |
| Legal form | The 2021 Regulations define it as an electronic version of the Bahamian dollar, fully backed by Central Bank reserves and representing a direct claim against the Central Bank |
| Legal-tender description | The official individual-wallet page describes Sand Dollar as the digital version of legal tender issued by CBOB |
| Nationwide release | CBOB said release outside Exuma and Abaco would begin through AFIs on **2020-10-20** |
| Historical-first wording | BIS Papers No. 114 described the **2020-10-20** launch as the arrival of a live general-purpose CBDC; this page makes no current duration ranking |
| Domestic-use boundary | The official design page says the CBDC is for domestic use and prohibits acceptance by non-domestic payees |

Source note: the [2021 Regulations](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf), [official individual-wallet page](https://www.sanddollar.bs/individual), [national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020), [BIS Papers No. 114](https://www.bis.org/publ/bispap114.pdf), and [official design page](https://www.sanddollar.bs/about) directly support the bounded statements above.

## Matrix B · Documented design features and evidence limits

| Feature | What the direct source states | Evidence boundary |
|---|---|---|
| **Central-bank claim** | BDDC is fully backed by reserves and is a direct claim against CBOB | This establishes legal form, not adoption or safety outcomes |
| **Intermediated distribution** | Registered wallet providers include commercial banks, credit unions, money-transmission providers or agents, and payment institutions | The cited sources do not quantify the effect of this allocation on onboarding or competition |
| **Interoperability standards** | Providers must support sending and receiving through a provider-independent user alias, standard account number, and QR code | This supports cross-provider payment addressing, not a claim of lossless provider switching |
| **Risk-based tiers** | The national-release notice describes low-value personal, regular personal, and business or enterprise tiers with different due-diligence requirements and limits | Actual inclusion outcomes require usage data |
| **Non-anonymous transactions** | The national-release notice says cash anonymity is not replicated and transactions connect to AML/CFT controls | The cited sources do not establish user perceptions of privacy |
| **Offline specification** | The official design page describes preset-value payments during communication outages and later network updating | This is a documented specification, not evidence of field availability, coverage, or performance |
| **Individual fees** | The official individual-wallet page states zero transaction fees for individuals | This does not establish all provider fees or merchant pricing |
| **Domestic use** | The official design page restricts the CBDC to domestic use | No cross-border capability is inferred |

Source note: [2021 Regulations](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf), [national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020), [official design page](https://www.sanddollar.bs/about), and [official individual-wallet page](https://www.sanddollar.bs/individual).

The direct sources document these features. They do not establish that Sand Dollar avoided a “walled garden,” that e-CNY or a proposed digital euro copied the model, or that the model is “canonical” or superior.

## Matrix C · End-2024 adoption snapshot reported by the IMF

| Metric | Dated figure |
|---|---|
| Share of total currency in circulation | About **0.4% at end-2024** |
| Consumer wallets | **133,481 by December 2024**, up **12.2%** year on year |
| Merchant wallets | **2,034 by December 2024**, up **3.2%** year on year |
| Population comparison | The IMF described the consumer-wallet total as about one third of the country's population |
| Active-wallet or transaction rate | Not supplied in the cited IMF passage; no active-use percentage is inferred |

Source note: footnote 11 to paragraph 24 of [IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf) reports the end-2024 figures.

The wallet counts are an enrolment snapshot. They do not show how many distinct people held multiple wallets, how many wallets were active, or how intensively Sand Dollar was used.

## Matrix D · AFI and wallet-provider roles

```
                 Central Bank issuer
                         │
                         ▼
             registered wallet providers
                         │
        ┌────────────────┼─────────────────┐
        ▼                ▼                 ▼
 banks / credit     money-transmission   payment
 unions             providers / agents  institutions
        └────────────────┼─────────────────┘
                         ▼
              consumer and merchant wallets
```

| Provider category | Role documented by the direct sources |
|---|---|
| Commercial banks and credit unions | Eligible financial intermediaries; the 2020 notice says they were expected to support customer due diligence and links between deposit accounts and wallets |
| Money-transmission businesses and payment-service providers | Eligible intermediaries; the 2020 notice says onboarded firms could offer services through approved custom apps or the generic Sand Dollar app |
| Registered wallet providers generally | Subject to CBOB registration and interoperability standards for provider-independent aliases, account numbers, and QR-code payments |

Source note: [CBOB's national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020) describes the intermediary categories and 2020 rollout roles; regulations 4–9 of the [2021 Regulations](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf) govern wallet providers and interoperability standards.

The official individual page tells users to choose an enabled AFI and download that AFI's proprietary wallet. It does not say that a user can switch AFIs while preserving the same wallet or balance without an operational transfer step. [Official individual-wallet page](https://www.sanddollar.bs/individual).

## Matrix E · Official Tier I and Tier II individual-wallet limits

| Individual tier | Identity and bank-link rules on the official individual page | Holding limit | Transaction limit on the official individual page | Limit in the 2022 Gazette notice |
|---|---|---|---|---|
| **Tier I** | Government-issued ID is not required; cannot link a bank account | **B$500** | **B$1,500 per month** | **B$1,500 per month** |
| **Tier II** | Government-issued ID is required; can link a bank account | **B$8,000** | **B$10,000 per month** | **B$100,000 annually** |

Source note: the [official individual-wallet page](https://www.sanddollar.bs/individual) lists the identity, bank-link, holding, and monthly limits; the [Bahamian Dollar Digital Currency (Holding and Transactional Limits) Notice, 2022](https://www.centralbankbahamas.com/viewPDF/documents/2022-08-02-16-38-17-Bahamian-Dollar-Digital-Currency-Holding-and-Transactional-Limits-Notice-2022.pdf) lists the gazetted holding and transaction periods. The monthly and annual Tier II figures are reported separately rather than converted or treated as identical.

These official limits do not establish which tier most users hold, whether the inclusion objective succeeded or failed, or whether the tier design has the same cause or effect as eNaira, JAM-DEX, or e-CNY.

## Origin and dated evolution

| Date | Directly documented event |
|---|---|
| **2019-12-24** | CBOB's project update said the Exuma pilot would start in December 2019 and planned an extension to Abaco in the first half of 2020 |
| **2020-09-25** | CBOB announced that gradual national release through AFIs would begin on **2020-10-20** |
| **2020-10-20** | The announced nationwide-release start date |
| **2021-08-23** | The Bahamian Dollar Digital Currency Regulations, 2021 were gazetted |
| **2022-05-25** | The holding and transactional limits notice was made; the Gazette publication is dated **2022-05-30** |
| **2024-12** | The IMF's later country report records the end-2024 circulation share and wallet totals |

Source note: [2019 project update](https://www.sanddollar.bs/publicupdates/a-bahamian-payments-system-modernization-initiative), [2020 national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020), [2021 Regulations](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf), [2022 limits notice](https://www.centralbankbahamas.com/viewPDF/documents/2022-08-02-16-38-17-Bahamian-Dollar-Digital-Currency-Holding-and-Transactional-Limits-Notice-2022.pdf), and [IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf).

The timeline stops at the latest dated fact used in this entry. It does not assert modest transaction growth, unchanged design in 2025–2026, uninterrupted operation, a “longest-running” rank, or that later CBDC designs borrowed from Sand Dollar.

## Evidence boundary for adoption interpretation

The official materials describe financial inclusion and access across The Bahamas as programme objectives, and the IMF's 2026 report says Sand Dollar was slowly expanding access in underserved communities, including some small islands. [CBOB national-release notice](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020); [IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf).

The cited evidence does **not** establish that private payment rails caused gradual adoption, that a banked demographic majority had little reason to switch, that smartphone access or agent density was the binding constraint, or that the wallet design was structurally optimal. It also does not supply a current market panorama of named private providers. Those earlier causal and demographic claims are therefore omitted rather than presented as findings.

## Related

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]

## Sources

- CBOB — [A Bahamian Payments System Modernization Initiative, 2019-12-24](https://www.sanddollar.bs/publicupdates/a-bahamian-payments-system-modernization-initiative)
- CBOB — [Gradual National Release to The Bahamas in October 2020, 2020-09-25](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)
- CBOB — [Sand Dollar official design description](https://www.sanddollar.bs/about)
- CBOB — [Sand Dollar individual-wallet page](https://www.sanddollar.bs/individual)
- Government of The Bahamas / CBOB — [Bahamian Dollar Digital Currency Regulations, 2021](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)
- Government of The Bahamas / CBOB — [Bahamian Dollar Digital Currency (Holding and Transactional Limits) Notice, 2022](https://www.centralbankbahamas.com/viewPDF/documents/2022-08-02-16-38-17-Bahamian-Dollar-Digital-Currency-Holding-and-Transactional-Limits-Notice-2022.pdf)
- BIS — [Ready, steady, go? Results of the third BIS survey on central bank digital currency, BIS Papers No. 114](https://www.bis.org/publ/bispap114.pdf)
- IMF — [The Bahamas: 2025 Article IV Consultation, IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf)

---
title: グローバル・ステーブルコイン規制 五極比較マトリクス（US / EU / 日本 / HK / SG）
aliases:
  - global-stablecoin-regulatory-five-pole-matrix
  - five-pole stablecoin matrix
  - stablecoin global comparison
  - GENIUS vs MiCA vs EPI vs HKMA vs MAS
domain: fintech
created: 2026-05-24
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-10-30
confidence: confirmed
tags: [fintech, stablecoin, regulation, comparison, GENIUS, MiCA, EPI, HKMA, MAS, matrix]
status: active
sources:
  - "https://www.govinfo.gov/app/details/PLAW-119publ27"
  - "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114"
  - "https://www.fsa.go.jp/policy/virtual_currency02/index.html"
  - "https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/"
  - "https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf"
  - "https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework"
---

# グローバル・ステーブルコイン規制 五極比較マトリクス

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and compares five major public regulatory frameworks at a common level of abstraction. It complements [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]], but it does **not** assume that any bilateral recognition arrangement exists unless an official source is cited. For per-regime context, see [[fintech/mica-overview|MiCA]], [[fintech/japan-stablecoin-regulatory-landscape|Japan]], [[fintech/hkma-stablecoin-licensing-overview|Hong Kong]], and [[fintech/singapore-mas-payment-services-act-overview|Singapore]].

> [!info] TL;DR
> The five frameworks share a policy direction—identifiable issuers, reserve and redemption safeguards, governance, and AML/CFT controls—but they are not five interchangeable passports. Their legal status and scope differ: US GENIUS implementation remains tied to its statutory effective-date and rulemaking triggers; EU MiCA's ART and EMT titles have applied since June 30, 2024; Japan's electronic-payment-instrument regime began June 1, 2023; Hong Kong's Stablecoins Ordinance took effect August 1, 2025 and the first two licences were announced in April 2026; Singapore's 2023 SCS framework defines the conditions for the “MAS-regulated stablecoin” label. ^[https://www.govinfo.gov/app/details/PLAW-119publ27] ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114] ^[https://www.fsa.go.jp/policy/virtual_currency02/index.html] ^[https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf] ^[https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework]

## How to read the matrix

This is a dated legal map as of July 30, 2026, not legal advice. “Framework” does not always mean that an identical standalone licence category is live in every jurisdiction. A token's treatment depends on issuer, denomination, place of issuance, marketing, distribution, and the services performed around it.

## Matrix A · Legal basis, regulator, and status

Because the dates and transition rules come from different legal instruments, each row carries its own official marker.

| Pole | Legal basis and lead authority | Confirmed status as of 2026-07-30 | Source |
|---|---|---|---|
| 🇺🇸 US | GENIUS Act, Public Law 119-27; federal and qualifying state regulators | Enacted 2025-07-18. Effective on the earlier of 18 months after enactment or 120 days after qualifying final regulations | ^[https://www.govinfo.gov/app/details/PLAW-119publ27] |
| 🇪🇺 EU | Regulation (EU) 2023/1114; national competent authorities, EBA and ESMA within assigned roles | ART and EMT titles apply from 2024-06-30; most remaining MiCA provisions from 2024-12-30 | ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114] |
| 🇯🇵 Japan | Payment Services Act and Banking Act framework; FSA and relevant registration authorities | Electronic payment instrument intermediary / handling regime began 2023-06-01; a 2026 amendment package took effect 2026-06-01 | ^[https://www.fsa.go.jp/policy/virtual_currency02/index.html] |
| 🇭🇰 Hong Kong | Stablecoins Ordinance (Cap. 656); HKMA | Regime effective 2025-08-01; first batch of two licensed issuers announced in 2026-04 | ^[https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf] |
| 🇸🇬 Singapore | Payment Services Act context and MAS SCS regulatory framework; MAS | MAS finalised the SCS framework in 2023-08; compliant issuers may use the “MAS-regulated stablecoin” label | ^[https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework] |

The prior version's blanket “18-month grandfathering ended July 2026” statement confused MiCA's CASP transition in Article 143 with ART/EMT treatment. It also reported Hong Kong's first licences one month late and treated the US statute as operational from signature. Those claims are corrected above.

## Matrix B · Regulated object and issuer path

The table is based on the enacted US law, MiCA's ART/EMT titles, Japan FSA's electronic-payment-instrument page, HKMA's issuer regime, and MAS's SCS announcement. ^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf] ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114] ^[https://www.fsa.go.jp/policy/virtual_currency02/index.html] ^[https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/] ^[https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework]

| Pole | Regulated object | Issuer / authorization path at a high level |
|---|---|---|
| US | Payment stablecoin as defined in Public Law 119-27 | Permitted issuer may be an approved subsidiary of an insured depository institution, a federal qualified nonbank issuer, or a state qualified issuer |
| EU | Asset-referenced token (ART) or e-money token (EMT) | EMT issuance is limited to credit institutions or electronic-money institutions; ART authorization follows Title III, with a credit-institution route |
| Japan | Electronic payment instrument tied to fiat value; issuance and intermediary functions are legally distinct | Issuance can arise through bank, funds-transfer, or trust structures; intermediaries need the applicable registration |
| Hong Kong | Fiat-referenced stablecoin within the Ordinance's territorial and marketing scope | Issuance subject to an HKMA stablecoin-issuer licence; an existing financial licence does not by itself answer Stablecoins Ordinance compliance |
| Singapore | Single-currency stablecoin issued in Singapore and pegged to SGD or a G10 currency within the MAS framework | Issuer must meet the SCS framework to use the MAS-regulated label; other tokens remain subject to the otherwise applicable regime |

“Algorithmic stablecoin ban” is not used as a universal matrix field here. The five frameworks define covered products and impose reserve or redemption conditions in different ways. A design may fall outside a regulated stablecoin category without every jurisdiction using the same statutory prohibition.

## Matrix C · Reserve, redemption, and disclosure

These rows deliberately avoid invented universal capital floors or attestation cadences. The source instruments support the following high-level comparison. ^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf] ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114] ^[https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/] ^[https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework]

| Pole | Reserve / safeguarding direction | Redemption and disclosure direction |
|---|---|---|
| US | At least 1:1 identifiable reserves limited to statutory asset classes; segregation and risk-management rules | Timely redemption under disclosed policy; monthly reserve reporting examined by a registered public accounting firm |
| EU | ART reserve-of-assets requirements; EMTs are treated as electronic money and subject to the relevant MiCA and e-money rules | Redemption rights and issuer disclosures depend on ART versus EMT classification |
| Japan | Safeguarding follows the legal form of the issuer or trust and the electronic-payment-instrument rules | Do not infer a single reserve asset list or transaction ceiling across all three issuer forms |
| Hong Kong | Full backing with reserve-asset management, segregation, and risk controls under the Ordinance and supervisory guideline | Par redemption and public disclosure are core licensing requirements; exact operational controls are assessed in licensing and supervision |
| Singapore | Low-risk, highly liquid reserve assets in the peg currency, held in segregated custody | Par redemption within the framework's stated period, disclosure, audit, and capital / liquid-asset safeguards |

The previous table's OCC “$50M floor,” Japan “¥100M trust minimum,” Hong Kong “2% ongoing capital,” and claims of daily public attestation were not supported by the cited sources and have been removed.

## Matrix D · Cross-border access

The table records confirmed legal entry points without asserting any unsigned mutual-recognition agreement. ^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf] ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114] ^[https://www.fsa.go.jp/policy/virtual_currency02/index.html] ^[https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/] ^[https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework]

| Pole | Confirmed cross-border boundary |
|---|---|
| US | Section 18 provides a process for Treasury determinations and arrangements involving comparable foreign regimes; a specific bilateral arrangement must be verified from its official publication |
| EU | Third-country issuance or service provision does not acquire an automatic MiCA passport; entity, offer, admission-to-trading, and service facts matter |
| Japan | Foreign-issued instruments may require a registered domestic intermediary and product-specific review; distributor status is distinct from issuer status |
| Hong Kong | The Ordinance covers issuance in Hong Kong, issuance outside Hong Kong of an HKD-referenced stablecoin, and active marketing of issuance business to the Hong Kong public |
| Singapore | The SCS label framework is for qualifying SGD or G10-pegged SCS issued in Singapore; overseas issuance is not automatically MAS-regulated |

The earlier assertions that a US–Japan MRA was signed in February 2026 and an EU agreement was expected in 2026-Q3 had no cited official instrument and are withdrawn.

## Matrix E · AML/CFT and supervision

The table is sourced to each regime's primary framework; it describes direction rather than pretending that reporting forms and resolution processes are identical. ^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf] ^[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114] ^[https://www.fsa.go.jp/policy/virtual_currency02/index.html] ^[https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/] ^[https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework]

| Pole | Confirmed supervisory direction |
|---|---|
| US | Permitted issuers are treated as financial institutions for BSA and sanctions purposes; primary regulator depends on issuer path |
| EU | MiCA authorization and ongoing supervision operate alongside EU AML/CFT and transfer-of-funds requirements |
| Japan | Issuer and intermediary roles map to different statutes, registration, safeguarding, and AML/CFT obligations |
| Hong Kong | HKMA licensing, prudential supervision, reserve management, redemption, governance, and a dedicated AML/CFT guideline |
| Singapore | MAS framework covers value stability, capital, redemption, disclosure, and business restrictions; other PSA obligations continue to depend on activities |

There is no sound basis for the previous claims that every framework mandates monthly third-party attestation, that MAS requires daily public disclosure, or that bank-resolution statutes apply to all issuers in the same way.

## Practical routing questions

Instead of selecting a jurisdiction from a single capital number, counsel and treasury teams should ask:

1. Who legally issues the token, and where?
2. What currency or asset does it reference?
3. Who offers, markets, distributes, exchanges, or safeguards it in each market?
4. Which rules are already effective, and which remain proposed or transitional?
5. Does an asserted passport, equivalence decision, or bilateral arrangement have an official instrument and effective date?
6. Do reserve, redemption, governance, and AML controls cover every issuance network and distributor?

The answers may require separate issuer and distributor entities. That is a compliance architecture decision, not evidence of a time-limited “regulatory arbitrage window.”

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/mica-overview|MiCA 概览]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA 牌照概览]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS 概览]]
- [[exchanges/INDEX|Exchanges]]
<!-- /wiki-links:managed -->

## Sources

- US · Public Law 119-27: https://www.govinfo.gov/app/details/PLAW-119publ27
- EU · Regulation (EU) 2023/1114: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114
- Japan FSA · crypto-assets and electronic payment instruments: https://www.fsa.go.jp/policy/virtual_currency02/index.html
- Hong Kong HKMA · stablecoin issuers: https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/
- Hong Kong HKMA · 2025 annual report, International Financial Centre: https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf
- Singapore MAS · final SCS regulatory framework: https://www.mas.gov.sg/news/media-releases/2023/mas-finalises-stablecoin-regulatory-framework

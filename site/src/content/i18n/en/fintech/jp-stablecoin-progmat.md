---
source: fintech/jp-stablecoin-progmat
source_hash: ceee19dc7622ed14
lang: en
status: machine
fidelity: ok
title: "Progmat, Inc. — Digital-asset platform overview"
translated_at: 2026-07-30T02:03:00+09:00
---

# Progmat, Inc. — Digital-asset platform overview


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> The company officially provides digital-asset issuance and management platforms. Progmat, Inc. did not appear on the FSA registers of crypto-asset exchange service providers or electronic payment instruments service providers, or on the JVCEA member roster, checked on 2026-07-30. Absence from those lists alone must not be used to conclude the company's entire business scope, the issuer of a particular product, or whether trading or custody is permitted.

## 1. Corporate entity / shareholders

- **Trade name**: 株式会社Progmat (English: Progmat, Inc.)
- **Date of establishment**: 2023年10月2日
- **Head office location**: 〒100-0005 Marunouchi 1-6-5 , Chiyoda-ku, Tokyo, Marunouchi Kitaguchi Building 9F (inside WeWork)
- **Representative Director, Founder and CEO**: Tatsuya Saito (齊藤 達哉)

**Boundary of shareholder information:**

The official 2023-10-02 incorporation release identifies the participating companies, but the current cap table supporting the ownership percentages previously shown on this page does not appear on the official About page. The estimates “MUTB 49%, SMBC 15%, Mizuho 15%” and the speculation that 49% resulted from FSA guidance have therefore been withdrawn. The table shows only company facts verifiable on official pages. ^[https://progmat.co.jp/about/] ^[https://progmat.co.jp/press/pdf/press231002_01.pdf]

| Item | Official listing |
|---|---|
| Company name | 株式会社Progmat (Progmat, Inc.) |
| Established | 2023-10-02 |
| Founder and CEO | 齊藤 達哉 |
| Address | Marunouchi Kitaguchi Building 9F, 1-6-5 Marunouchi, Chiyoda-ku, Tokyo |

Because the current team can change, check [[payment-firms/progmat|the company anchor]] and the official About page each time.

---

## 2. Distinguishing registrations, memberships, and issuers

The registration and membership columns below are based on the official lists checked on 2026-07-30. The individual-stablecoin row is an evidence boundary that prevents a product-specific legal status from being inferred from absence on those lists. ^[https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf] ^[https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.pdf] ^[https://jvcea.or.jp/member/]

| Verification surface | Status checked on 2026-07-30 | What it means |
|---|---|---|
| FSA register of crypto-asset exchange service providers | Progmat, Inc. not listed | Indicates that Progmat itself is not a crypto-asset exchange service provider on this register; do not extrapolate to another entity or legal qualification |
| FSA register of electronic payment instruments service providers | Progmat, Inc. not listed | Indicates that Progmat itself is not an electronic payment instruments service provider on this register; issuer qualification is a separate question |
| JVCEA member roster | Progmat, Inc. not listed | A snapshot of association membership, not a statutory registration |
| Individual stablecoin | Undetermined product by product | Verify the legal type, settlor, trustee, issuer, and intermediary against token-specific releases and registration records |

FSA registration is a statutory service-provider qualification, JVCEA listing is self-regulatory association membership, and a stablecoin issuer is the entity in the individual scheme; they are not the same. Progmat's direct materials describe it as a platform provider and joint developer, but not every Progmat-related token necessarily has the same legal type or issuer. ^[https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf] ^[https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.pdf] ^[https://jvcea.or.jp/member/] ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

---

## 3. Currencies handled (types of digital assets whose issuance is supported)

Progmat's direct materials describe its platform and issuance-support roles for ST, UT, and SC. The issuer and legal type must be verified for each token or product:

### ST (security tokens / digital securities)

Progmat handles digital securities such as real-estate and corporate-bond instruments. Its official release dated 2026-07-13 says that digital securities on Progmat covered by the migration to Avalanche integration exceeded **JPY 452 billion**. The figure is limited to the scope and date of that release and is not extrapolated to the number of domestic deals or market share. ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

### SC (stablecoin / Progmat Coin)

- 2024-09-05: announced the Project Pax pilot with Datachain.
- 2025-02-17: announced an MOU toward a Japan-Korea PoC.
- 2025-03-21: announced a study of a Hong Kong-Japan trade-remittance PoC.
- 2026-05-08: announced a tokenized JGB / on-chain repo joint study.

These are announcements of a platform, pilot, PoC, or study. They do not establish that a specific XJPY or XUSD token has been issued or prove a three-bank joint issuer, reserve, or auditor structure. ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax] ^[https://progmat.co.jp/wp-content/uploads/2025/02/20250217_PR_02.pdf] ^[https://progmat.co.jp/wp-content/uploads/2025/10/20250321_press-release_Progmat-IDA-and-Datachain-Join-Forces-to-Explore-Stablecoin-Based-Remittances-for-Hong-Kong-Japan-Trade-Efficiency.pdf] ^[https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf]

### UT (utility tokens / digital rights certificates)

Progmat describes UT as a product family for digital rights and utility use cases. Any cumulative count should cite the current snapshot and retrieval date from the official Concept page. ^[https://progmat.co.jp/concept/]

---

## 4. Scope of business

### Role established by Progmat's direct materials — platform / support (verify the issuer per product)

The following is an illustrative diagram of platform provision and implementation support. It does not establish one issuer, contract, or legal type for every Progmat-related token.

```
[Issuer identified for the specific product]
    │ product-specific contract and allocation of roles
    ▼
[Progmat] ← platform / implementation support established by public materials
    │ token technology
    ▼
[Blockchain infrastructure]
    │ issuance
    ▼
[Investors / settlement participants]
```

**Main services (the "Progmat SaaS" announced 2024-11 )**:
- SaaS provision of a token-issuance / management infrastructure (for financial institutions)
- Implementation-support services (service design / regulatory response / technical implementation)
- Secretariat operation of the DCC (Digital Asset Co-Creation Consortium). Confirm the participant count displayed on the official Consortium page with a snapshot date. ^[https://progmat.co.jp/consortium/]

The direct release dated 2024-11-01 records the launch of Progmat SaaS and implementation-support services. Do not infer from absence on the FSA registers or JVCEA roster that “all trading, exchange, and custody are out of scope.” Verify the acting entity and required qualification for each activity. ^[https://progmat.co.jp/wp-content/uploads/2024/11/press241101_01.pdf]

**Project Pax (cross-border)** — for details on the Swift-API-compatible route, see [[fintech/cross-border-sc-via-swift-api|cross-border SC via SWIFT API]]:
- 2024-09-05: Progmat / Datachain announced a pilot cross-border stablecoin-transfer platform.
- 2025-02-17: announced an MOU toward a Japan-Korea PoC.
- 2025-03-21: IDA, Progmat, Datachain, and TOKI announced a study of a Hong Kong-Japan trade-remittance PoC.

**Latest developments (2026):**
- 2026-05-08: launched a joint study of on-chain repo transactions using tokenized government bonds
- 2026-07-13: announced completion of Avalanche integration for digital securities on Progmat

^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax] ^[https://progmat.co.jp/wp-content/uploads/2025/02/20250217_PR_02.pdf] ^[https://progmat.co.jp/wp-content/uploads/2025/10/20250321_press-release_Progmat-IDA-and-Datachain-Join-Forces-to-Explore-Stablecoin-Based-Remittances-for-Hong-Kong-Japan-Trade-Efficiency.pdf] ^[https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf] ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

---

## 5. Reading the track record

The official release dated 2026-07-13 says that digital securities on Progmat covered by the Avalanche-integration migration exceeded JPY 452 billion. Because it does not provide a same-date, same-definition denominator for the entire domestic market, the figure should not be converted into a 52% or 68% market share or a ranking as the “de facto market standard.” ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

**SC (stablecoin) market**:
- The official archive continues to announce pilots, development work, and joint studies.
- Verifying the name, issuer, supply, and reserves of an issued stablecoin requires a token-specific release.
- No competitive ranking or “unique” position is assigned without comparable market data.

Do not infer a “main customer segment” or a retail / institutional ratio unless a direct release identifies the participants or intended users.

---

## 6. History / major events

The table is limited to major items whose dates can be verified on the official About page and in dated direct releases. ^[https://progmat.co.jp/about/] ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax]

| Year/Month | Event |
|---|---|
| **2023-10-02** | **Spun off into an independent corporation as Progmat, Inc.** |
| 2024-09-05 | Announced the Project Pax pilot (Datachain-linked cross-border SC remittance infrastructure) |
| 2024-11-01 | Announced the launch of Progmat SaaS and implementation-support services |
| 2025-02-17 | Announced an MOU toward a Japan-Korea Project Pax PoC |
| 2025-03-21 | Announced a study of a Hong Kong-Japan trade-remittance PoC |
| 2026-05-08 | Started a joint study of on-chain repo transactions using tokenized JGBs |
| 2026-07-13 | Completed Avalanche integration for digital securities on Progmat |

The company's news archive alone cannot establish “no administrative action,” which would require a comprehensive regulator search.

---

## 7. Strategic trends

Direct releases establish the following directions: (1) an ST / UT / SC platform, (2) Progmat SaaS and implementation support, (3) staged Project Pax PoCs, (4) public-chain integration, and (5) a joint study of tokenized JGB / repo. An IPO, tokenized-stock launch, or policy status for the DCC should not be presented as a confirmed roadmap without corresponding primary sources. ^[https://progmat.co.jp/wp-content/uploads/2024/11/press241101_01.pdf] ^[https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax] ^[https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf] ^[https://progmat.co.jp/en/news/2026-07-13-press_en/]

---

## 8. Related people

Refer to the current team listing on the official About page. The snapshot date is 2026-07-30 because personnel can change. ^[https://progmat.co.jp/about/]

| Name | Officially listed role |
|---|---|
| 齊藤 達哉 | Representative Director, Founder and CEO |
| 石山 進 | Director, CFO and CRO |
| 田中 利宏 | Representative Director (part-time) |
| 戸辺 勝俊 | CTO |
| 川端 明 | Vice President, Japan Business Development |

The official About page is authoritative for the complete current roster, including directors and auditors.

---

## Related

- [[payment-firms/progmat|株式会社Progmat]] — JapanFG company anchor
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — regulated trust-bank boundary
- [[fintech/jp-trust-type-sc-architecture|Generic trust-type / Type-3 EPI architecture]] — verify applicability to each Progmat-related token or product
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — consortium governance analysis
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — comparison of the institutional positioning of JPYC, DCJPY, and Progmat Coin
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — a comparison target with the GMO Aozora Net Bank-issued, bank type (第1号EPI)
- [[exchanges/jp-exchange-jpyc|JPYC]] — a comparison target with the funds-transfer-operator type (Type 2)

---

## Sources

- [Progmat company overview (About Us)](https://progmat.co.jp/about/) (retrieved 2026-07-30)
- [Progmat Concept](https://progmat.co.jp/concept/) (retrieved 2026-07-30)
- [Progmat Consortium (DCC)](https://progmat.co.jp/consortium/) (retrieved 2026-07-30)
- [Progmat incorporation release](https://progmat.co.jp/press/pdf/press231002_01.pdf)
- [FSA register of crypto-asset exchange service providers](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf) (retrieved 2026-07-30)
- [FSA register of electronic payment instruments service providers](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.pdf) (retrieved 2026-07-30)
- [JVCEA member roster](https://jvcea.or.jp/member/) (retrieved 2026-07-30)
- [Datachain / Progmat — Project Pax (2024-09-05)](https://www.datachain.jp/news/progmat-and-datachain-launch-project-pax)
- [Progmat SaaS / implementation-support services (2024-11-01)](https://progmat.co.jp/wp-content/uploads/2024/11/press241101_01.pdf)
- [Project Pax Japan-Korea PoC MOU (2025-02-17)](https://progmat.co.jp/wp-content/uploads/2025/02/20250217_PR_02.pdf)
- [Hong Kong-Japan trade-remittance PoC study (2025-03-21)](https://progmat.co.jp/wp-content/uploads/2025/10/20250321_press-release_Progmat-IDA-and-Datachain-Join-Forces-to-Explore-Stablecoin-Based-Remittances-for-Hong-Kong-Japan-Trade-Efficiency.pdf)
- [Tokenized JGB / on-chain repo joint study (2026-05-08)](https://progmat.co.jp/wp-content/uploads/2026/05/20260508_PR_%E3%80%8CLaunch-of-Joint-Study-on-On-Chain-Repo-Transactions-of-Tokenized-JGBs%E3%80%8D.pdf)
- [Avalanche integration completed (2026-07-13)](https://progmat.co.jp/en/news/2026-07-13-press_en/)

---

**Last refresh** (2026-07-30): removed unsupported ownership percentages, market-share estimates, future launches, and personnel-role inferences; synchronized dated official sources.

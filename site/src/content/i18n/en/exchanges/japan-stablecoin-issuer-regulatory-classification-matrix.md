---
source: exchanges/japan-stablecoin-issuer-regulatory-classification-matrix
source_hash: 0e045fd90b4b2084
lang: en
status: machine
fidelity: ok
title: "Japan stablecoin issuer regulatory classification matrix — Electronic Payment Instruments business / trust type / bank-issued type / funds-transfer-operator type / prepaid-payment-instrument boundary"
translated_at: 2026-07-29T12:18:13.000Z
---

# Japan stablecoin issuer regulatory classification matrix — Electronic Payment Instruments business / trust type / bank-issued type / funds-transfer-operator type / prepaid-payment-instrument boundary

## TL;DR

Japan's yen- and USD-denominated stablecoins should be checked by issuer, legal entity, and provided function across the boundaries among the funds-transfer-operator type, trust type, tokenised bank deposits, intermediation by Electronic Payment Instrument Exchange Service Providers, and prepaid payment instruments. This matrix uses public information on [[exchanges/jp-exchange-jpyc|JPYC]], [[fintech/jp-stablecoin-progmat|Progmat]]-related projects, [[fintech/jp-stablecoin-dcjpy|DCJPY]], Minna Bank, and [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] as verification entry points and does not infer unpublished entrants or issuance commitments.

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **issuer-axis (発行体軸)** counterpart to the [[fintech/INDEX|fintech index]] policy entries [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]] / [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]] / [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] / [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构]] / [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]. Read alongside [[fintech/japan-ecisb-license|日本 ECISB 牌照]] for the intermediary (仲介業者) boundary and [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the legacy prepaid-payment-instrument (前払式支払手段) boundary. Operator anchors live in [[payment-firms/jpyc|JapanFG jpyc]] / [[payment-firms/progmat|JapanFG progmat]] and [[financial-licenses/payment-license-stack|payment license stack]].

## Why this matrix matters

- Use the amended Payment Services Act that took effect in 2023-06 and related regulatory materials as the system baseline, and verify the issuance and commercial status of each product against the parties' current official announcements.
- **The difference in issuer category is not a technology choice; it legally binds the scope of business, the circulation cap, the counterparty, and the segregation-management method.** For example, the funds-transfer-operator type has a statutory per-transaction cap of 1 times 100 万円, while the trust type has no such constraint but instead triggers the trust-business-act obligations of the trust-receiving bank.
- For domestic handling of overseas electronic payment instruments, verify the FSA list of Electronic Payment Instrument Exchange Service Providers, the handled product, contracting entity, and segregation conditions. Do not describe any route as the "only legitimate route."
- Insolvency treatment differs by product structure, legal entity, trust agreement, performance guarantee, and deposit-insurance eligibility. Verify the applicable contract and law without generalising a fixed recovery rate or complete protection.

## Per-issuer / per-classification sections

### A. Funds-transfer-operator type (EPI Type 2 ) — JPYC

- **Issuer**: [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] (established 2019-11 , Kanto Local Finance Bureau 第00099号 funds-transfer operator)
- **Obtained license**: **funds-transfer operator** (Payment Services Act Article 37 ) + prepaid payment instrument (third-party type) 第00773号 (for JPYC v1 legacy use; v2 is now mainstream)
- **JVCEA classification**: Type 1 member #1042 — registration category "funds-transfer business (Funds transfer)" only. No JVCEA classification for crypto-asset exchange business, derivatives, or Electronic Payment Instruments business is granted
- **Target token**: JPYC (1 JPYC = peg to 1 円, multi-chain such as Ethereum / Polygon / Avalanche / Gnosis Chain)
- **1:1 redeemability**: peg to 1 円 + 1 -time 100 万円redemption cap (revised 2026-05 )
- **Backing assets**: verify the performance-guarantee method and required amount against the Payment Services Act, regulatory materials, and the issuer's current disclosure
- **Settlement finality**: verify each chain's confirmation conditions and the completion conditions within JPYC EX against the current specification
- **FSA/JVCEA supervision**: FSA Kanto Local Finance Bureau + JVCEA (funds-transfer-business category)
- **Secondary market**: JPYC EX (official) + DEXs such as Uniswap + Metaplanet / Sumitomo-Life-affiliated retail bases
- **Cross-border**: domestic-use premise, no overseas solicitation
- **Circulation track record** (2025-12): cumulative accounts 1 万 · cumulative issuance amount 5 億円
- **Strategic partners**: Asteria (3853 TSE Growth) Series B lead, Metaplanet (3350) · Sumitomo Life

### B. Trust type (specified-trust-beneficial-interest / EPI Type 3 ) — the three major trust banks + DMM issuing on Progmat

- **Platform provider**: [[fintech/jp-stablecoin-progmat|株式会社 Progmat]] (incorporated as an independent entity 2023-10-02, CEO Tatsuya Saito, Marunouchi headquarters)
- **Issuers (trust-receiving trust banks)**:
  - **Mitsubishi UFJ Trust and Banking** (MUTB) — Progmat's sole trust-receiving institution (49% shareholder)
  - **Sumitomo Mitsui Trust Bank** (SMTB) — co-trustor (Progmat about 15% investment)
  - **Mizuho Trust** (Mizuho Trust) — co-trustor (about 15% investment)
  - **DMM Group license project** (announced 2024-08 ) — trust-receiving bank undetermined
- **Obtained license**: Trust Business Act + amended Payment Services Act 第 3 号 EPI (specified trust beneficial interest)
- **JVCEA classification**: Progmat itself is **not a JVCEA member**. Because the trust-receiving trust banks are not crypto-asset exchange operators either, they have no JVCEA classification
- **Target token**: Progmat Coin (series such as XJPY / XUSD, representing trust beneficial interests on the blockchain)
- **1:1 redeemability**: verify redemption at face value, circulation conditions, and any limits against the trust agreement, current law, and the trustee's current disclosure
- **Backing assets**: a segregated-management account within the trust bank (Trust Business Act · outside deposit insurance)
- **Settlement finality**: consortium L1 / public chain (Ava Labs connection via Datachain linkage 2026-02)
- **FSA/JVCEA supervision**: FSA + Trust Business Act (trust-business supervision) + amended Payment Services Act (EPI regulation)
- **Secondary market**: centered on institution-to-institution B2B, retail circulation not yet live
- **Cross-border**: Project Pax (Japan-Korea SC transfer pilot via Datachain · TOKI linkage, started 2024-09 ), but [[fintech/cross-border-sc-via-swift-api|SWIFT API 互換ルート]] is the main axis
- **Circulation track record**: verify SC issuance status and ST-related indicators against dated official announcements from Progmat and the trustee; do not preserve zero, ranking, or fixed-amount claims

### C. Bank-issued type (deposit token / adjacent to EPI Type 1 ) — DCJPY + Minna Bank SC

- **Platform provider**: [[fintech/jp-stablecoin-dcjpy|DeCurret DCP-related business]]. After the announced reorganisation effective 2026-07-01, verify the current legal entity and contracting party against registry and official announcements
- **Issuers (participating banks)**:
  - **GMO Aozora Net Bank** — DCJPY commercial issuance 第 1 号 (live in the 2024-08 IIJ non-fossil-certificate transaction)
  - **Japan Post Bank** — expressed a DCJPY issuance plan for FY2026 年 (2025-09 reporting)
  - **SBI Shinsei Bank** — DCJPY adoption under consideration (2025-09 reporting)
  - **Mitsubishi UFJ Bank** — DCP director dispatch · forum participation (issuance commitment undetermined)
  - **Bank of Yokohama** — proof-of-concept participation
  - **Minna Bank** (Fukuoka FG affiliate) — developing a Solana-based bank-type SC on its own course
- **Obtained license**: Banking Act (tokenization of deposits within the bank account). Under the amended Payment Services Act it is close to the "bank-issued type" among the three SC types, but is operated purely as bank deposits
- **DCP itself**: Electronic Payment Service Provider (Director-General of the Kanto Local Finance Bureau (Denda) 92 号, 2021-11), **not** a JVCEA member
- **Target token**: DCJPY (1 円 = 1 DCJPY, individually issued by participating banks), Minna Bank SC (Solana chain)
- **1:1 redeemability**: verify the legal relation to bank deposits, redemption conditions, and any balance limits against each issuing bank's current terms and disclosures
- **Backing assets**: deposits within the bank account (covered by deposit insurance, up to 1,000 万円)
- **Settlement finality**: DCJPY network (Amic Sign two-layer structure, financial zone × business zone); Minna Bank is Solana
- **FSA supervision**: FSA banking-business supervision + Electronic Payment Service Provider supervision
- **Secondary market**: B2B commercial-transaction DX (Gamba Osaka · JACDS · First Accounting 4 社 PoC) + ST DVP (2026-04 SBI Securities · IIJ completed Japan's first actual-issuance verification)
- **Cross-border**: Project Pax (common infrastructure with the trust type) + inter-bank RTGS concept (2026-04 adopted by the FSA FinTech Hub)
- **Circulation track record**: verify commercial use and circulation against dated official announcements from DCJPY and participating banks

### D. USD-denominated SC intermediation via Electronic Payment Instruments Service Providers (ECISP) — SBI VC Trade + USDC

- **Obtaining operator**: [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — Director-General of the Kanto Local Finance Bureau 第00001号 (registration completed 2025-03-04, domestic ECISP 第 1 号)
- **Obtained license**: Electronic Payment Instruments business (amended Payment Services Act Article 62 -3) + crypto-asset exchange business (Director-General of the Kanto Local Finance Bureau 第00011号) + Type 1 financial instruments business (3247 号)
- **Target token**: **USDC**. Verify additional products against FSA registration materials and SBI VC Trade's current product page; do not list products merely under consideration
- **Issuer**: Circle Internet Financial. Verify the relationship with SBI Circle Holdings and the scope of circulation in Japan against the parties' current disclosures
- **1:1 redeemability**: verify the USDC redemption route, domestic trading methods, and contracting entity for bank transfers against current disclosures from Circle / SBI VC Trade / SBI Circle Holdings
- **Backing assets**: Circle's reserves (US short-term treasuries + bank deposits, monthly attestation)
- **Settlement finality**: verify supported chains and confirmation conditions against the current Circle and SBI VC Trade specifications
- **FSA/JVCEA supervision**: FSA + JVCEA (the ECISP category is independent, separate from the crypto-asset-exchange-business category)
- **Secondary market**: verify current trading and lending products at SBI VC Trade; do not use rankings such as "Japan's first" without contemporaneous primary evidence
- **Cross-border**: verify the contracting entity, covered jurisdictions, transfer route, and required registrations; do not use dominance or ranking language
- **Circulation track record**: verify the handling start date and circulation against dated official disclosures from SBI VC Trade

### E. Prepaid payment instrument (legacy boundary) — JPYC v1 archive + Suica/PASMO domain

- **Issuer category**: JPYC v1before the entry into force of the amended Payment Services Act (2023-06), and existing transit-system / distribution-system IC money such as Suica / nanaco / WAON / PASMO
- **Obtained license**: prepaid-payment-instrument issuer (third-party type or self type, Payment Services Act Article 31 )
- **Boundary line**: after the entry into force of the amended act, tokens that are "value-transfer-capable + on-chain" are in principle obligated to migrate to the EPI category. ICs such as Suica remain prepaid payment instruments due to **transferability restrictions + closed loop** (see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]])
- **Archive case**: JPYC v1 (2021-2025) was issued as a prepaid payment instrument 第00773号, and migrated to v2 (funds-transfer-operator type) in 2025-Q3 
- **Regulatory differences**:
  - **Redeemability**: prepaid is in principle non-redeemable, the funds-transfer-operator type is redeemable
  - **Transferability**: prepaid is payment-only, the funds-transfer-operator type allows P2P transfers
  - **Upon issuer insolvency**: verify the protection method and amount for prepaid instruments and the funds-transfer-operator type against current law and contract terms
- **Boundary monitoring**: for the three-way boundary of BNPL × prepaid × funds-transfer business, see ([[payments/japan-bnpl-credit-purchase-boundary|BNPL 信用購入境界]])

### F. Update boundary

Add a future issuance, application, partnership or market entry only after both a formal announcement by the party and relevant FSA registration or licensing material are available. Do not infer an "issuance-commitment candidate" from technical capability, participation in a proof of concept, investment or media reporting alone.

## Big comparison matrix table

Source: the [FSA system and registry entry](https://www.fsa.go.jp/policy/virtual_currency02/) and [Electronic Payment Instrument Exchange Service Provider list](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx). Read each product together with the party's official announcement.

| Classification | Legal and operational item to verify | Public verification entry |
|---|---|---|
| **Funds-transfer-operator type** | funds-transfer registration, redemption and performance guarantee | FSA registry / [JPYC official](https://jpyc.co.jp/about) |
| **Trust type** | beneficial interest in a trust, trustee and trust assets | FSA system materials / [Progmat official](https://progmat.co.jp/news/) |
| **Tokenised bank deposit** | legal relation to deposits, depositor protection and operator | bank and operator announcements / [DeCurret DCP official](https://www.decurret-dcp.com/pressrelease/) |
| **Intermediation of an overseas electronic payment instrument** | ECISP registration, handled instrument and segregation | FSA provider list / [SBI VC Trade USDC](https://www.sbivc.co.jp/usdc) |
| **Prepaid payment instrument** | redemption and transferability boundary with electronic payment instruments | FSA system materials |

This table shows classifications and verification steps. Do not state circulation, future issuers, planned partnerships, fixed limits, insolvency recovery rates or superiority rankings without dated primary evidence.

## Boundary cases

### B1. The boundary of the JPYC v1 → v2 migration (prepaid → funds-transfer-operator type)

- The JPYC v1 of 2021-2025 was issued as a prepaid payment instrument 第00773号. After the entry into force of the 2023-06 amended Payment Services Act, JPYC migrated its legal positioning from prepaid to the funds-transfer-operator-type EPI.
- **Boundary determination**: verify the difference between prepaid instruments and the funds-transfer-operator type through transfer and redemption functions, registration, and regulatory materials. Record the legal history of JPYC v1 → v2 from the party's and FSA's publications.
- **Archive**: the 2026-04-28 FSA official material explicitly designated JPYC as "funds-transfer business" for the first time.

### B2. The bank-issued-type vs Solana-based third-type mixed nature of Minna Bank SC

- Verify Minna Bank's Solana-related concept against the party's announcement of a formal product, issuer, registration, and service launch.
- **Boundary determination**: do not infer the classification between a tokenised bank deposit and EPI Type 1; verify the legal structure disclosed by the FSA and the party.
- **Verification boundary**: update this section when the FSA's formal classification and the party's legal explanation are published; do not fill unpublished gaps from an individual's remarks or technology choice alone.

### B3. The dual-license boundary of SBI VC Trade's USDC handling

- SBI VC Trade dually holds **crypto-asset exchange business (No. 00011) + ECISP (No. 00001)**. USDC is handled under the ECISP category and BTC/ETH under the crypto-asset-exchange-business category, so two legal layers coexist within the same platform.
- **Boundary determination**: because USDC legally falls under "electronic payment instruments," it is a separate layer from crypto-asset trading. The segregation-management rules and segregation-management method for customer assets also differ.
- **JVCEA classification**: verify the relationship between the crypto-asset-exchange-business category (1011) and the ECISP category against current JVCEA membership information and the party's disclosures.

### B4. The boundary of DCJPY deposit token and EPI 第 1 号

- DCJPY is legally "tokenization of deposits issued by a bank" = purely within the framework of the Banking Act. There is also an interpretation that it does not fall under EPI 第 1 号 (bank-issued-type SC) under the amended Payment Services Act.
- **Boundary determination**: the bank-issued-type EPI also exists as a separate framework under the amended Payment Services Act, but because DCJPY is designed to **tokenize the bank deposit itself**, it is operated within the framework of deposit insurance and banking-business supervision. EPI 第 1 号is designed as "a bank issuing it as an SC," and its legal boundary differs from DCJPY.
- **Verification boundary**: this matrix does not settle the classification where formal FSA materials and the party's legal explanation are unavailable.

### B5. The cross-border-linkage boundary of ECISP (第 00001 号) + funds-transfer-operator type (JPYC)

- When checking collaboration among SBI Circle Holdings, SBI VC Trade, and JPYC, verify the **USDC ↔ JPYC exchange and settlement route** separately from the two regulatory categories:
  - USDC = handled under ECISP 第 00001 号(SBI VC Trade)
  - JPYC = issued under the funds-transfer-operator type 第 00099 号(JPYC Co., Ltd.)
- **Boundary determination**: verify direct-exchange availability, required registrations, contracting entities, and each party's role against FSA registration materials and the parties' current service disclosures.
- **Verification perspective**: do not infer a unified dominance structure from two registration categories; verify the public basis for each project in [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]].

### B6. The issuer-absence problem of trust-type Progmat Coin

- Progmat is **a platform provider, not an issuer**. Verify the actual issuer and issuance status against dated official announcements from Mitsubishi UFJ Trust and Banking / SMBC Trust / Mizuho Trust and Progmat.
- **Boundary determination**: verify the issuer, trustee, legal status as a specified trust beneficial interest, and Progmat's role for each "SC issued on Progmat" against project-specific contracts and disclosures.
- **Competition**: even among trust-type SCs, the trust-receiving bank for the 2024-08 -announced project with the DMM Group has not been disclosed (whether it is via Progmat is unconfirmed).

### B7. The use-case demarcation of JPYC v2 and Progmat XJPY

- JPYC = funds-transfer-operator type, 1 -time 100 万円cap + public-chain on-chain + retail
- Progmat XJPY = trust type. Verify circulation conditions, chains used, and target customers against the official conditions for each issuance project
- Even among "yen-pegged SCs," compare target customers, transfer limits, chains, and securities-settlement linkage by product.
- **Demarcation-confirming event**: update the use cases for JPYC and Progmat-related products from dated product terms and real-use examples; do not infer monopoly or rivalry.

### B8. The boundary of the bank-issued type (DCJPY) and bank deposits under the Banking Act

- DCJPY is **"a deposit token issued by a bank"** = a tokenization of the "deposit" under Banking Act Article 2 . It is legally the deposit itself, and although technically connectable to the "bank-issued-type EPI" among the three SC types under the amended Payment Services Act, strictly it is a separate layer.
- **Covered by deposit insurance**: verify the scope and limit of deposit-insurance coverage for DCJPY balances against the issuing bank's terms and regulatory materials. Check the performance-guarantee and trust terms for JPYC and Progmat XJPY separately.
- **Insolvency priority**: do not fix recovery priority or insolvency isolation across the bank-issued, trust, and funds-transfer-operator types; they differ by legal entity, contract, trust property, and guarantee method.

### B9. Updating ECISP operators and handled products

- Check additional registrations beyond SBI VC Trade against the FSA's current ECISP list and do not infer unpublished preparation or consideration:
  - **bitFlyer** = add when registration and a published product are verified
  - **Coincheck** = add when registration and a published product are verified
  - **GMO Coin** = add when registration and a published product are verified
- Do not forecast operator counts or future circulation of USD-denominated SCs; update from the registry and each operator's product page.
- **Competition**: do not infer exclusivity, share, or continuation of a contract; verify the parties' current contractual disclosures.

### B10. The verification boundary with the CBDC (Japanese yen)

- Check the Bank of Japan's consideration of a CBDC (central-bank-issued digital currency) against dated official BoJ materials.
- **Future boundary**: do not predict competition or coexistence between a CBDC and each stablecoin; compare the BoJ / FSA's formal design with the parties' products.
- Reflect implementation decisions, launch timing, and system design when the official materials are updated.

## Strategic implications

### Implication 1: Comparison of the major models

Use the classification in [[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] as a verification entry point; do not assert fixed roles or rankings:
- **SBI Circle Holdings / USDC** = domestic-handling model for overseas electronic payment instruments
- **JPYC** = domestic retail (individual + corporate settlement 100 万円or less)
- **Progmat** = B2B large-lot (trust type + ST linkage)
- **DCJPY / Minna Bank SC** = bank-issued type (commercial-transaction DX + ST DVP)

### Implication 2: Continued verification of ECISP registrations and products

Check ECISP registrations from No. 00002 onward and handled products against the FSA's current list; do not forecast operator counts or market growth.

### Implication 3: Verification of bank-affiliated SC service conditions

Verify the provider, legal structure, service launch, and deposit-insurance conditions for each bank-issued product against formal announcements by each bank and regulator. Do not predict launch timing or retail positioning.

### Implication 4: Verification of trust-type linkage with ST digital securities

Verify Progmat's SC issuance, ST-related indicators, and DVP use against dated official announcements; do not preserve zero, "Japan's largest," or "comes into its own" assessments.

### Implication 5: Verification of the boundary between prepaid instruments and SCs

Verify the boundary between prepaid payment instruments such as Suica / nanaco / WAON / PASMO and funds-transfer-operator-type SCs through transferability, redeemability, scope of use, and registration category. Record the JPYC v1 → v2 migration from the party's and FSA's publications.

### Implication 6: The choice of regulatory category determines the issuer's business model

- **Funds-transfer-operator type** = in exchange for accepting the 1 -time 100 万円cap, can operate its own issuance / redemption platform (the JPYC model)
- **Trust type** = verify the roles of issuer, trustee, and platform provider for each project (the Progmat model)
- **Bank-issued type** = verify the banking license, deposit-insurance conditions, and inter-bank linkage for each product (the DCJPY model)
- **ECISP** = can handle overseas SCs domestically, but is an intermediary rather than an issuer (the SBI VC Trade model)
- **Prepaid** = verify the boundary with EPI through transferability, redeemability, and scope of use

## Continued verification points

- **FSA / JPYC**: current transfer and redemption limits and system materials
- **Progmat**: SC issuance status and official updates on the DMM Group-related project
- **DCJPY**: current status of the inter-bank RTGS concept and disclosed participants
- **SBI Circle Holdings**: official updates on contracting entities, registration, and handled products
- **Minna Bank Solana SC**: official announcements of the product, issuer, registration, and service launch
- **ECISP operators**: the current registry and SC instruments handled by each registered operator
- **CBDC**: official BoJ updates on a Japanese-yen central-bank-issued digital currency

## Related

- [[exchanges/INDEX|exchanges index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]]
- [[fintech/jp-stablecoin-progmat|Progmat 詳細]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit token / stablecoin 統合]]
- [[payment-firms/jpyc|JapanFG jpyc]]
- [[payment-firms/progmat|JapanFG progmat]]
- [[exchanges/jp-exchange-jpyc|JPYC 株式会社]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[financial-licenses/payment-license-stack|payment license stack]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバル stablecoin 5 極比較]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル比較マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## Sources

- FSA "List of registered Electronic Payment Instruments operators": https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA "Crypto assets · Electronic payment instruments related": https://www.fsa.go.jp/policy/virtual_currency02/
- JVCEA member list: https://jvcea.or.jp/member/
- JPYC official: https://jpyc.co.jp/about
- Progmat official: https://progmat.co.jp/news/
- DeCurret DCP official: https://www.decurret-dcp.com/pressrelease/
- SBI VC Trade USDC: https://www.sbivc.co.jp/usdc

---
source: exchanges/japan-stablecoin-issuer-regulatory-classification-matrix
source_hash: a5fd5a4a814f2073
lang: en
status: machine
fidelity: ok
title: "Japan stablecoin issuer regulatory classification matrix — Electronic Payment Instruments business / trust type / bank-issued type / funds-transfer-operator type / prepaid-payment-instrument boundary"
translated_at: 2026-06-18T23:33:48.335Z
---

# Japan stablecoin issuer regulatory classification matrix — Electronic Payment Instruments business / trust type / bank-issued type / funds-transfer-operator type / prepaid-payment-instrument boundary

## TL;DR

Japan's yen-denominated and USD-denominated stablecoins (explicitly defined as "electronic payment instruments" under the 2023-06 amended Payment Services Act) divide into 5 regulatory categories by **issuer business type × legal basis**: (1) **funds-transfer-operator type (EPI Type 2 )** = [[exchanges/jp-exchange-jpyc|JPYC]] only, (2) **trust type (specified-trust-beneficial-interest · EPI Type 3 )** = issued by MUFG Trust, SMBC Trust, and Mizuho Trust on the [[fintech/jp-stablecoin-progmat|Progmat]] platform, (3) **bank-issued type (deposit token, adjacent to EPI Type 1 )** = [[fintech/jp-stablecoin-dcjpy|DCJPY]] and Minna Bank SC, (4) **overseas-SC intermediation via Electronic Payment Instruments Service Providers (ECISP)** = [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]'s (第00001号) handling of USDC, (5) **prepaid payment instrument (legacy)** = the pre-2023 年-amendment archive boundary that JPYC v1 followed. In addition to the issuers, potential entrants such as KDDI / NTT Docomo / LINE Finance / Japan Post Bank have the possibility of committing to the bank-issued type or the funds-transfer-operator type. For each category, this matrix compares side by side the **issuer · obtained license · 1:1 redeemability · backing assets · settlement finality · FSA/JVCEA supervision · secondary-market access · cross-border** along 8 axes.

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **issuer-axis (発行体軸)** counterpart to the [[fintech/INDEX|fintech index]] policy entries [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]] / [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]] / [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] / [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构]] / [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]. Read alongside [[fintech/japan-ecisb-license|日本 ECISB 牌照]] for the intermediary (仲介業者) boundary and [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the legacy prepaid-payment-instrument (前払式支払手段) boundary. Operator anchors live in [[payment-firms/jpyc|JapanFG jpyc]] / [[payment-firms/progmat|JapanFG progmat]] and [[financial-licenses/payment-license-stack|payment license stack]].

## Why this matrix matters

- Japan **explicitly codified the legal status of SCs for the first time in the world with the entry into force of the 2023-06 amended Payment Services Act**, getting a head start of about 2 years over the GENIUS Act. The framework itself is early, but the **implementation tempo of each category differs greatly**: the funds-transfer-operator type went commercially live with JPYC in 2025-Q3 , the trust-type Progmat Coin had zero official issuance as of 2026-05 , and the bank-issued-type DCJPY went commercially live for the first time in the 2024-08 IIJ non-fossil-certificate transaction.
- **The difference in issuer category is not a technology choice; it legally binds the scope of business, the circulation cap, the counterparty, and the segregation-management method.** For example, the funds-transfer-operator type has a statutory per-transaction cap of 1 times 100 万円, while the trust type has no such constraint but instead triggers the trust-business-act obligations of the trust-receiving bank.
- **Domestic circulation of USD-denominated SCs is possible only via operators that have obtained an ECISP (Electronic Payment Instruments business) license.** With SBI VC Trade starting to handle USDC 2025-03 at 第00001号, "the only legitimate route by which USD-denominated SCs can be handled within Japan" was established.
- Differences in regulatory category also directly connect to **proof-of-reserves disclosure frequency · bail-in priority · treatment of customer assets in the event of insolvency**. Upon issuer insolvency, the trust type is preserved 100% through the trust-bank insolvency isolation, the funds-transfer-operator type is preserved via the performance-guarantee-deposit system, and the bank type is covered by deposit insurance.

## Per-issuer / per-classification sections

### A. Funds-transfer-operator type (EPI Type 2 ) — JPYC

- **Issuer**: [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] (established 2019-11 , Kanto Local Finance Bureau 第00099号 funds-transfer operator)
- **Obtained license**: **funds-transfer operator** (Payment Services Act Article 37 ) + prepaid payment instrument (third-party type) 第00773号 (for JPYC v1 legacy use; v2 is now mainstream)
- **JVCEA classification**: Type 1 member #1042 — registration category "funds-transfer business (Funds transfer)" only. No JVCEA classification for crypto-asset exchange business, derivatives, or Electronic Payment Instruments business is granted
- **Target token**: JPYC (1 JPYC = peg to 1 円, multi-chain such as Ethereum / Polygon / Avalanche / Gnosis Chain)
- **1:1 redeemability**: peg to 1 円 + 1 -time 100 万円redemption cap (revised 2026-05 )
- **Backing assets**: performance-guarantee deposit (deposit or trust or guarantee contract of the funds-transfer operator) — customer assets are subject to a deposit obligation of 50% or more
- **Settlement finality**: on-chain settlement on public chains (Ethereum 12 confirmations, etc.), instant within JPYC EX
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
- **1:1 redeemability**: the face value of the trust beneficial interest and 1:1 — no statutory circulation cap (only the trust bank's BS soundness)
- **Backing assets**: a segregated-management account within the trust bank (Trust Business Act · outside deposit insurance)
- **Settlement finality**: consortium L1 / public chain (Ava Labs connection via Datachain linkage 2026-02)
- **FSA/JVCEA supervision**: FSA + Trust Business Act (trust-business supervision) + amended Payment Services Act (EPI regulation)
- **Secondary market**: centered on institution-to-institution B2B, retail circulation not yet live
- **Cross-border**: Project Pax (Japan-Korea SC transfer pilot via Datachain · TOKI linkage, started 2024-09 ), but [[fintech/cross-border-sc-via-swift-api|SWIFT API 互換ルート]] is the main axis
- **Circulation track record** (2026-05): zero official SC issuance (ST digital securities are the largest in Japan via Progmat, over 4,522 億円)

### C. Bank-issued type (deposit token / adjacent to EPI Type 1 ) — DCJPY + Minna Bank SC

- **Platform provider**: [[fintech/jp-stablecoin-dcjpy|株式会社ディーカレット DCP]] (to be absorption-merged into parent company DeCurret HD 2026-07-01)
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
- **1:1 redeemability**: 1 円 as a bank deposit 1:1 — no circulation cap (only bank BS soundness)
- **Backing assets**: deposits within the bank account (covered by deposit insurance, up to 1,000 万円)
- **Settlement finality**: DCJPY network (Amic Sign two-layer structure, financial zone × business zone); Minna Bank is Solana
- **FSA supervision**: FSA banking-business supervision + Electronic Payment Service Provider supervision
- **Secondary market**: B2B commercial-transaction DX (Gamba Osaka · JACDS · First Accounting 4 社 PoC) + ST DVP (2026-04 SBI Securities · IIJ completed Japan's first actual-issuance verification)
- **Cross-border**: Project Pax (common infrastructure with the trust type) + inter-bank RTGS concept (2026-04 adopted by the FSA FinTech Hub)
- **Circulation track record** (2026-05): commercially live, face value undisclosed

### D. USD-denominated SC intermediation via Electronic Payment Instruments Service Providers (ECISP) — SBI VC Trade + USDC

- **Obtaining operator**: [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — Director-General of the Kanto Local Finance Bureau 第00001号 (registration completed 2025-03-04, domestic ECISP 第 1 号)
- **Obtained license**: Electronic Payment Instruments business (amended Payment Services Act Article 62 -3) + crypto-asset exchange business (Director-General of the Kanto Local Finance Bureau 第00011号) + Type 1 financial instruments business (3247 号)
- **Target token**: **USDC** (issued by Circle) + under consideration: PYUSD (PayPal) / EURC (Circle EUR)
- **Issuer**: Circle Internet Financial (issues USDC; SBI Circle Holdings established 2025-08 , a 50/50 JV for exclusive distribution in Japan)
- **1:1 redeemability**: via Circle's USDC redemption route (within Japan, only SBI VC Trade's spot trading; bank wires are via SBI Circle Holdings)
- **Backing assets**: Circle's reserves (US short-term treasuries + bank deposits, monthly attestation)
- **Settlement finality**: multi-chain such as Ethereum / Solana / Polygon / Arbitrum
- **FSA/JVCEA supervision**: FSA + JVCEA (the ECISP category is independent, separate from the crypto-asset-exchange-business category)
- **Secondary market**: SBI VC Trade spot trading + USDC lending (started 2026-03 , domestic-first)
- **Cross-border**: from a §501(d) perspective, SBI Circle Holdings holds **the position of cross-border-compliance overlord** ([[fintech/japan-epi-four-camps-comparison|EPI 四阵营 v2 評価で #1]])
- **Circulation track record**: face value undisclosed since handling began 2025-03 

### E. Prepaid payment instrument (legacy boundary) — JPYC v1 archive + Suica/PASMO domain

- **Issuer category**: JPYC v1before the entry into force of the amended Payment Services Act (2023-06), and existing transit-system / distribution-system IC money such as Suica / nanaco / WAON / PASMO
- **Obtained license**: prepaid-payment-instrument issuer (third-party type or self type, Payment Services Act Article 31 )
- **Boundary line**: after the entry into force of the amended act, tokens that are "value-transfer-capable + on-chain" are in principle obligated to migrate to the EPI category. ICs such as Suica remain prepaid payment instruments due to **transferability restrictions + closed loop** (see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]])
- **Archive case**: JPYC v1 (2021-2025) was issued as a prepaid payment instrument 第00773号, and migrated to v2 (funds-transfer-operator type) in 2025-Q3 
- **Regulatory differences**:
  - **Redeemability**: prepaid is in principle non-redeemable, the funds-transfer-operator type is redeemable
  - **Transferability**: prepaid is payment-only, the funds-transfer-operator type allows P2P transfers
  - **Upon issuer insolvency**: prepaid is a 50% deposit of the unused balance as of the reference date, the funds-transfer-operator type is preserved via a performance-guarantee deposit
- **Boundary monitoring**: for the three-way boundary of BNPL × prepaid × funds-transfer business, see ([[payments/japan-bnpl-credit-purchase-boundary|BNPL 信用購入境界]])

### F. Potential entrants (2026-2027 issuance-commitment candidates)

- **KDDI** — considering a bank-issued-type SC via au Jibun Bank affiliate + au PAY (prepaid payment instrument). Has a director dispatched to DeCurret DCP (Nobuaki Monoe)
- **NTT Docomo** — possibility of entering a funds-transfer-operator-type SC or trust-type SC by leveraging d Barai + Mitsubishi UFJ Bank / OLIVE bank-account linkage
- **LINE Finance / LINE Pay** (LINE Yahoo 4689 subsidiary) — LINE Xenesis ([[exchanges/jp-exchange-line-xenesis]]) ended its service 2026-06 ; possibility of expansion into the stablecoin domain
- **Japan Post Bank** — issuance commitment to the DCJPY bank-issued type for FY2026 年 (2025-09 reporting)
- **PayPay / PayPay Bank** (Z Holdings affiliate) — both prepaid / bank-issued type are possible with PayPay balance (prepaid) and PayPay Bank (banking business)
- **Mercari Mercoin** ([[exchanges/jp-exchange-mercoin]]) — possibility of issuing a funds-transfer-operator-type SC via Merpay (funds-transfer business + prepaid)
- **Metaplanet (3350)** — a foothold for BTC × SC linkage via the JPYC Series B investment (an ecosystem investor, not an issuer)

## Big comparison matrix table

| Axis | A. Funds-transfer-operator type JPYC | B. Trust type Progmat | C. Bank-issued type DCJPY | D. ECISP USDC (SBI) | E. Prepaid payment instrument legacy |
|---|---|---|---|---|---|
| **Issuer category** | Funds-transfer operator | Trust bank | Bank | Overseas-SC intermediation handling operator | Prepaid-payment-instrument issuer |
| **Representative issuer** | [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] | MUFG Trust · SMBC Trust · Mizuho Trust (issuing on Progmat) | GMO Aozora Net Bank / Japan Post Bank / SBI Shinsei Bank | Circle (overseas-issued, SBI VC Trade handles domestically) | JPYC v1 (legacy), Suica, nanaco, WAON, PASMO |
| **Legal basis** | Payment Services Act Article 37  | Trust Business Act + 第 3 号 EPI | Banking Act + 第 1 号 EPI adjacent | Amended Payment Services Act Article 62 -3 (ECISP) | Payment Services Act Article 31  |
| **Registration-number example** | Kanto Local Finance Bureau 第00099号 | (N/A, operated as trust business) | Banking license + Denda 92 号 (DCP) | Kanto Local Finance Bureau 第00001号 (ECISP) | Kanto Local Finance Bureau 第00773号 (JPYC v1) |
| **JVCEA classification** | Type 1 (funds-transfer business) | Non-member | Non-member | Type 1 (ECISP) | Non-member |
| **1:1 redeemability** | 1 円 = 1 JPYC, 1 -time 100 万円cap | 1 円 = 1 XJPY, no cap | 1 円 = 1 DCJPY, no cap | 1 USD = 1 USDC (via Circle) | In principle non-redeemable |
| **Circulation cap** | 1 -time 100 万円 (revised 2026-05 ) | None statutory | None statutory (only BS soundness) | Spot-trading limit | No cumulative-balance cap, within member merchants only |
| **Backing assets** | Performance-guarantee deposit (deposit / trust / guarantee 50%+) | Trust account (insolvency isolation 100%) | Bank deposit (deposit insurance 1,000 万円) | Circle reserves (short-term US treasuries + banks) | Unused balance as of reference date 50% deposit |
| **Settlement finality** | Public chain (ETH / Polygon / AVAX, etc.) | Consortium L1 + Ava Labs connection | DCJPY network (Amic Sign) | ETH / Solana / Polygon / Arbitrum | Closed-loop DB (NFC) |
| **Direct FSA supervision** | ○ Kanto Local Finance Bureau | ○ FSA + Trust Business Act | ○ FSA banking-business supervision | ○ Kanto Local Finance Bureau (ECISP) | ○ Kanto Local Finance Bureau (prepaid) |
| **Secondary market on-chain** | ○ DEX (Uniswap, etc.) | △ Institution-to-institution only | △ Centered on commercial-transaction DX | ○ Via DEX | ✕ Closed loop |
| **Cross-border** | ✕ Domestic-use premise | △ Project Pax (Japan-Korea · Japan-Hong Kong) | △ Inter-bank RTGS concept (proof-of-concept stage) | ◎ Global connection via Circle reserves | ✕ Domestic |
| **Preservation upon issuer insolvency** | Preserved by performance-guarantee deposit | Complete insolvency isolation by trust | Covered by deposit insurance | Affected if Circle goes insolvent | Preserved up to 50% deposit |
| **Proof-of-reserves frequency** | Disclosure on a supervisory-report basis | Trust-accounting-audit basis | Bank-financial-results basis | Circle monthly attestation | Supervisory report |
| **Assumed customer base** | Individual retail + inter-company settlement | Institution-to-institution B2B (securities · large-lot) | Inter-company settlement + ST DVP + supply chain | Retail + DeFi users | Member-merchant retail |
| **Competitive relationship** | DCJPY (overlap in B2B domain) + ECISP USDC (alternative means) | DCJPY (overlap in large-lot settlement) + JPYC (overlap in corporate settlement) | Progmat (overlap in large-lot settlement) | JPYC (alternative candidate for USD compatibility) | Segment taken by the funds-transfer-operator type |
| **Representative circulation amount** (2026-05) | Cumulative issuance over 5 億円 | Zero official issuance (ST is 4,522 億円) | Commercially live (face value undisclosed) | Since handling began 2025-03 (undisclosed) | On the scale of tens of billions of yen (several trillion yen circulating annually via Suica) |
| **Future entrants** | KDDI / Docomo / Merpay / PayPay Bank | DMM (announced 2024-08 ) + other trust banks | Japan Post / SBI Shinsei / Mitsubishi UFJ / Bank of Yokohama / Minna Bank (Solana separate route) | Other ECISP-obtaining operators (going forward, 5-10 社expected) | Existing IC money continues, no new entrants |
| **Strategic partners** | Asteria / Metaplanet / Sumitomo Life | NTT Data + JPX + Datachain + Ava Labs | IIJ + SBI HD + KDDI + NTT + Mitsubishi UFJ + Japan Post + KDDI | Circle (SBI Circle Holdings 50/50 JV) | (each IC issuer) |
| **Positioning from the §501(d) perspective** | Domestic-retail compliance #2 ★★★★ | Domestic B2B large-lot #3 ★★★ (no cross-border compliance) | Pure-domestic retail #4 ★★ | **Cross-border-compliance overlord #1 ★★★★★** | (outside regulation) |

## Boundary cases

### B1. The boundary of the JPYC v1 → v2 migration (prepaid → funds-transfer-operator type)

- The JPYC v1 of 2021-2025 was issued as a prepaid payment instrument 第00773号. After the entry into force of the 2023-06 amended Payment Services Act, JPYC migrated its legal positioning from prepaid to the funds-transfer-operator-type EPI.
- **Boundary determination**: prepaid is "value-transfer-incapable · payment-only," the funds-transfer-operator type is "P2P-transfer-capable + redeemable." Because JPYC v1 was on-chain-transfer-capable on multiple chains, it fell under the post-amendment EPI definition → forced migration to v2 .
- **Archive**: the 2026-04-28 FSA official material explicitly designated JPYC as "funds-transfer business" for the first time.

### B2. The bank-issued-type vs Solana-based third-type mixed nature of Minna Bank SC

- Minna Bank (Fukuoka FG affiliate) takes an unprecedented implementation route of **implementing a bank-issued SC on the Solana chain**.
- **Boundary determination**: the distinction between a deposit token within the bank account and EPI 第 1 号is ambiguous. Among the three SC-type classifications under the amended Payment Services Act (trust type / bank-issued type / funds-transfer-operator type), it is highly likely to fall under the bank-issued type (第 1 号 EPI), but the design of on-chain circulation on the Solana public chain differs from other banks' DCJPY (consortium L1).
- **As of 2026-05 **: the FSA's formal classification has not been published. Kenichi Nagayoshi (Minna Bank) continues on its own course.

### B3. The dual-license boundary of SBI VC Trade's USDC handling

- SBI VC Trade dually holds **crypto-asset exchange business (第00011号) + ECISP (第00001号)**. USDC is handled under the ECISP category, BTC/ETH under the crypto-asset-exchange-business category. The first example in which two legal layers coexist within the same platform.
- **Boundary determination**: because USDC legally falls under "electronic payment instruments," it is a separate layer from crypto-asset trading. The segregation-management rules and segregation-management method for customer assets also differ.
- **JVCEA classification**: the crypto-asset-exchange-business category (1011) and the ECISP category run in parallel under the same member (the first parallel holding within JVCEA).

### B4. The boundary of DCJPY deposit token and EPI 第 1 号

- DCJPY is legally "tokenization of deposits issued by a bank" = purely within the framework of the Banking Act. There is also an interpretation that it does not fall under EPI 第 1 号 (bank-issued-type SC) under the amended Payment Services Act.
- **Boundary determination**: the bank-issued-type EPI also exists as a separate framework under the amended Payment Services Act, but because DCJPY is designed to **tokenize the bank deposit itself**, it is operated within the framework of deposit insurance and banking-business supervision. EPI 第 1 号is designed as "a bank issuing it as an SC," and its legal boundary differs from DCJPY.
- **As of 2026-05 **: the FSA's formal view is unpublished. Both interpretations coexist.

### B5. The cross-border-linkage boundary of ECISP (第 00001 号) + funds-transfer-operator type (JPYC)

- SBI Circle Holdings (established 2025-08 ) is building a **bidirectional settlement channel of USDC ↔ JPYC**, but the two regulatory categories differ:
  - USDC = handled under ECISP 第 00001 号(SBI VC Trade)
  - JPYC = issued under the funds-transfer-operator type 第 00099 号(JPYC Co., Ltd.)
- **Boundary determination**: to directly exchange USDC for JPYC, both an ECISP-operator license and a funds-transfer-operator license are required. A division-of-labor structure in which SBI VC Trade handles the USDC side and JPYC Co., Ltd. handles the JPY side.
- **§501(d) perspective**: this dual-license architecture is the core of "the USD-JPY SC cross-border-compliance overlord in Japan" ([[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]).

### B6. The issuer-absence problem of trust-type Progmat Coin

- Progmat is **a platform provider, not an issuer**. Actual issuance is envisioned to be done individually by Mitsubishi UFJ Trust and Banking / SMBC Trust / Mizuho Trust, but as of 2026-05 official issuance is zero.
- **Boundary determination**: an "SC issued on Progmat" is legally the specified trust beneficial interest of each trust bank, and Progmat itself is outside regulation (it plays the role of compiling 331 社as the secretariat of the Digital Asset Co-Creation Consortium DCC).
- **Competition**: even among trust-type SCs, the trust-receiving bank for the 2024-08 -announced project with the DMM Group has not been disclosed (whether it is via Progmat is unconfirmed).

### B7. The use-case demarcation of JPYC v2 and Progmat XJPY

- JPYC = funds-transfer-operator type, 1 -time 100 万円cap + public-chain on-chain + retail
- Progmat XJPY = trust type, no cap + consortium L1 + B2B large-lot
- Even for the same "yen-pegged SC," the use-case demarcation is structurally determined. JPYC targets individual P2P + member-merchant settlement + corporate settlement (100 万円or less), while Progmat XJPY targets institution-to-institution securities settlement + large-lot B2B settlement.
- **Demarcation-confirming event**: 2026-04 JPYC revised its 1 -time cap to 100 万円 → a strategic move to expand the corporate B2B settlement range. Counters the structure in which the Progmat side monopolizes B2B large-lot.

### B8. The boundary of the bank-issued type (DCJPY) and bank deposits under the Banking Act

- DCJPY is **"a deposit token issued by a bank"** = a tokenization of the "deposit" under Banking Act Article 2 . It is legally the deposit itself, and although technically connectable to the "bank-issued-type EPI" among the three SC types under the amended Payment Services Act, strictly it is a separate layer.
- **Covered by deposit insurance**: the DCJPY balance is covered by deposit insurance (up to 1,000 万円). In contrast, JPYC · Progmat XJPY are outside deposit insurance and are preserved by a performance-guarantee deposit (JPYC) / trust (Progmat).
- **Bail-in priority**: for the bank-issued type, the dividend priority is fixed in a bank insolvency after deposit insurance; the trust type is in complete insolvency isolation; the funds-transfer-operator type is preserved by a performance-guarantee deposit.

### B9. The ECISP operators planning to additionally obtain and the expansion of the USD-denominated SC market

- After SBI VC Trade started handling USDC 2025-03 under ECISP 第00001号, other VASPs are also preparing to additionally obtain ECISP:
  - **bitFlyer** = considering ECISP acquisition (expressed internally 2025 )
  - **Coincheck** = considering ECISP acquisition + linkage with derivatives within the Monex Group
  - **GMO Coin** = considering ECISP acquisition + USDC handling
- In 2026-2027 , **ECISP acquisition by 5-10 社** is expected, and domestic circulation of USD-denominated SCs (USDC / PYUSD / EURC) will get into full swing.
- **Competitively**: with the increase in domestic ECISP-obtaining operators, SBI VC Trade's exclusive domestic position in USDC dilutes. However, the exclusive-distribution contract with Circle via the SBI Circle Holdings 50/50 JV is likely to be maintained.

### B10. The future boundary with the CBDC (Japanese yen)

- The Bank of Japan (BoJ) started CBDC (central-bank-issued digital currency) pilot verification 2023-04 , moving into a "use-case demonstration" phase in the latter half of FY2026 年.
- **Future boundary**: if a Japanese-yen CBDC is implemented, there is a high possibility of competition with the bank-issued-type SC (DCJPY). On the other hand, the trust-type SC (Progmat) and the funds-transfer-operator-type SC (JPYC) are on different infrastructure layers, so they are likely to coexist with the CBDC.
- As of 2026-05 the implementation of a Japanese-yen CBDC has not been decided, but the policy debate is getting into full swing.

## Strategic implications

### Implication 1: Fixation of the role division of the 4 camps

[[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] is fixed in 2025-2026 :
- **SBI Circle Holdings / USDC** = cross-border-compliance overlord (v2 evaluation #1after entering the §501(d) list)
- **JPYC** = domestic retail (individual + corporate settlement 100 万円or less)
- **Progmat** = B2B large-lot (trust type + ST linkage)
- **DCJPY / Minna Bank SC** = bank-issued type (commercial-transaction DX + ST DVP)

### Implication 2: With the diversification of ECISP operators, the USD-denominated SC market gets into full swing

After SBI VC Trade 第00001号, with ECISP acquisition by 5-10 社 (2026-2027), **domestic circulation of USD-denominated SCs (USDC / PYUSD / EURC)** expands. A legitimate route for Japan residents to hold and transfer USD-denominated SCs is established.

### Implication 3: Full-scale operation of bank-affiliated SCs (Japan Post + SBI Shinsei + Mitsubishi UFJ)

If the key planned issuers of the DCJPY bank-issued type (Japan Post FY2026 年issuance plan, SBI Shinsei under consideration, Mitsubishi UFJ director dispatch) go live, the bank-issued-type SC gets into full swing in 2027-2028 . The high level of preservation that is coverage by deposit insurance is a selling point for individual retail.

### Implication 4: The trust type comes into its own through linkage with ST digital securities

Progmat has zero official SC issuance as of 2026-05 , but ST digital securities are the largest platform in Japan at over 4,522 億円. The trust-type SC comes into its own through **ST + SC DVP settlement** (2026-04 completed Japan's first actual-issuance verification).

### Implication 5: The prepaid payment instrument is fixed limited to the IC-money domain

Prepaid payment instruments such as Suica / nanaco / WAON / PASMO are fixed in a domain separate from the funds-transfer-operator-type SC due to **transferability restrictions + closed loop**. There are no new-entry prepaid SCs, and prepaid-type SCs like JPYC v1 were forcibly migrated to the funds-transfer-operator type by the 2023-06 amended-act entry into force.

### Implication 6: The choice of regulatory category determines the issuer's business model

- **Funds-transfer-operator type** = in exchange for accepting the 1 -time 100 万円cap, can operate its own issuance / redemption platform (the JPYC model)
- **Trust type** = the company itself cannot become an issuer, but as a platform provider can oversee the 331 社DCC consortium (the Progmat model)
- **Bank-issued type** = a banking license is required, but offers the highest level of preservation that is coverage by deposit insurance + an inter-bank RTGS concept (the DCJPY model)
- **ECISP** = can handle overseas SCs domestically, but is an intermediary rather than an issuer (the SBI VC Trade model)
- **Prepaid** = fixed in the legacy domain, no suitability as a new SC business

## Monitoring points (2026-2027)

- Whether the **FSA** will make permanent the 1 -time cap 100 万円revision for JPYC, or consider a further increase
- Whether **Progmat** can achieve official issuance within 2026  (progress of the 2024-08 -announced project with the DMM Group)
- Full-scale operation of the **DCJPY** inter-bank RTGS concept (2026-04 adopted by the FSA FinTech Hub, participating banks to be announced)
- The trends of **SBI Circle Holdings** after entering the §501(d) list (at the point of USA-JP MRA conclusion)
- The ripple effect of the **Minna Bank Solana SC** on other regional banks
- **Additional acquisition by ECISP operators**: operators obtaining after 第 00002 号 and the SC tokens handled
- The progress of the debate on the **CBDC** Japanese-yen central-bank-issued digital currency

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

---
source: exchanges/japan-stablecoin-issuer-regulatory-classification-matrix
source_hash: e15510fbafd4044d
lang: en
status: machine
fidelity: ok
title: "Japan stablecoin issuer regulatory-classification matrix — Electronic Payment Instrument exchange business / trust type / bank-issued type / funds-transfer-operator type / prepaid-payment-instrument boundary"
translated_at: 2026-05-31T03:19:56.382Z
---

# Japan stablecoin issuer regulatory-classification matrix — Electronic Payment Instrument exchange business / trust type / bank-issued type / funds-transfer-operator type / prepaid-payment-instrument boundary

## TL;DR

Japan's yen-denominated and USD-denominated stablecoins (expressly defined as "electronic payment instruments" under the 2023-06  revised Payment Services Act) split into 5  regulatory categories by **issuer business type × legal basis**: (1) **funds-transfer-operator type (EPI Type 2 )** = [[exchanges/jp-exchange-jpyc|JPYC]] only; (2) **trust type (specified trust beneficial interest · EPI Type 3 )** = issued on the [[fintech/jp-stablecoin-progmat|Progmat]] platform by MUFG Trust, SMBC Trust, and Mizuho Trust; (3) **bank-issued type (deposit token, adjacent to EPI Type 1 )** = [[fintech/jp-stablecoin-dcjpy|DCJPY]] and Minna Bank SC; (4) **overseas-SC intermediation via an Electronic Payment Instrument exchange business (ECISP)** = the USDC handling of [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] (第00001号); and (5) **prepaid payment instrument (legacy)** = the pre-2023 年-revision archival boundary that JPYC v1  traversed. In addition to issuers, as potential entrants, KDDI / NTT Docomo / LINE Finance / Japan Post Bank hold the possibility of committing to bank-issued / funds-transfer-operator types. Beyond issuers, each category is compared side by side along the 8  axes of **issuer · acquired license · 1:1  redeemability · backing assets · settlement finality · FSA/JVCEA supervision · secondary-market access · cross-border**.

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **発行体軸 (issuer-axis)** counterpart to [[fintech/INDEX|fintech index]] policy entries [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]] / [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]] / [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] / [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构]] / [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]. Read alongside [[fintech/japan-ecisb-license|日本 ECISB 牌照]] for the 仲介業者 boundary and [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the legacy 前払式支払手段 境界. Operator anchors live in [[JapanFG/jpyc|JapanFG jpyc]] / [[JapanFG/progmat|JapanFG progmat]] and [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]].

## Why this matrix matters

- Japan **expressly established the legal status of SCs for the first time in the world with the 2023-06  enforcement of the revised Payment Services Act**, roughly 2  years ahead of the GENIUS Act. The framework itself is early, but the **implementation tempo of each category differs greatly**: the funds-transfer-operator type went commercial with JPYC in 2025-Q3 ; the trust-type Progmat Coin had zero official issuance as of 2026-05 ; the bank-issued type DCJPY first went commercial in the 2024-08  IIJ non-fossil-certificate transaction.
- **The difference in issuer category is not a technical choice; it legally binds the scope of business, the circulation cap, counterparties, and the segregated-management method.** For example, the funds-transfer-operator type has a statutory 1 -per 100 万円 cap, while the trust type has no such constraint but, in exchange, triggers the Trust Business Act obligations of the entrusted trust bank.
- **The only legal route for domestic circulation of USD-denominated SCs is via an operator that has acquired an ECISP (Electronic Payment Instrument exchange business) license.** With SBI VC Trade beginning to handle USDC in 第00001号 (2025-03 ), "the only legitimate route capable of handling USD-denominated SCs domestically in Japan" was established.
- The difference in regulatory category also connects directly to **proof-of-reserves disclosure frequency · bail-in priority · treatment of customer assets in bankruptcy**. Upon issuer failure, the trust type is preserved 100% via the trust bank's bankruptcy remoteness, the funds-transfer-operator type is preserved via the performance-guarantee-deposit framework, while the bank type is covered by deposit insurance.

## Per-issuer / per-classification sections

### A. Funds-transfer-operator type (EPI Type 2 ) — JPYC

- **Issuer**: [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] (established 2019-11 , Kanto Local Finance Bureau 第00099号 funds-transfer operator)
- **Acquired license**: **funds-transfer operator** (Payment Services Act Article 37 ) + prepaid payment instrument (third-party type) 第00773号 (for JPYC v1  legacy; v2  is now mainstream)
- **JVCEA classification**: Type I member #1042  — registration category "funds transfer" only. No JVCEA classification is granted for crypto-asset exchange / derivatives / Electronic Payment Instrument exchange business
- **Target token**: JPYC (1  JPYC = 1 円 peg; multi-chain across Ethereum / Polygon / Avalanche / Gnosis Chain, etc.)
- **1:1  redeemability**: 1 円 peg + 1 -per 100 万円 redemption cap (2026-05  revision)
- **Backing assets**: performance-guarantee deposit (deposit, trust, or guarantee contract by the funds-transfer operator) — a deposit obligation of 50% or more of customer assets
- **Settlement finality**: on-chain settlement on public chains (Ethereum 12  confirmations, etc.); instant within JPYC EX
- **FSA/JVCEA supervision**: FSA Kanto Local Finance Bureau + JVCEA (funds-transfer category)
- **Secondary market**: JPYC EX (official) + DEXs such as Uniswap + retail outlets of Metaplanet / the Sumitomo Life affiliated network
- **Cross-border**: premised on domestic use; no overseas solicitation
- **Circulation track record** (2025-12): cumulative accounts 1 万 · cumulative issuance 5 億円
- **Strategic partners**: Asteria (3853  TSE Growth) Series B lead; Metaplanet (3350) · Sumitomo Life

### B. Trust type (specified trust beneficial interest / EPI Type 3 ) — the three major trust banks + DMM issuing on Progmat

- **Platform provision**: [[fintech/jp-stablecoin-progmat|株式会社 Progmat]] (spun off as an independent entity 2023-10-02; CEO Tatsuya Saito; Marunouchi head office)
- **Issuers (entrusted trust banks)**:
  - **Mitsubishi UFJ Trust and Banking** (MUTB) — Progmat's sole trustee institution (49% shareholder)
  - **Sumitomo Mitsui Trust Bank** (SMTB) — co-settlor (approx. 15% stake in Progmat)
  - **Mizuho Trust & Banking** (Mizuho Trust) — co-settlor (approx. 15% stake)
  - **DMM Group license project** (announced 2024-08 ) — entrusted bank undetermined
- **Acquired license**: Trust Business Act + revised Payment Services Act 第 3 号 EPI (specified trust beneficial interest)
- **JVCEA classification**: Progmat itself is **not a JVCEA member**. The entrusted trust banks are not crypto-asset exchange operators either, so they have no JVCEA classification
- **Target token**: Progmat Coin (series such as XJPY / XUSD, representing trust beneficial interests on a blockchain)
- **1:1  redeemability**: at the face value of the trust beneficial interest, 1:1  — no statutory circulation cap (only the BS soundness of the trust bank)
- **Backing assets**: a segregated-management account within the trust bank (Trust Business Act · not covered by deposit insurance)
- **Settlement finality**: consortium L1  / public chain (Ava Labs connectivity via Datachain integration 2026-02)
- **FSA/JVCEA supervision**: FSA + Trust Business Act (trust-business supervision) + revised Payment Services Act (EPI regulation)
- **Secondary market**: centered on institution-to-institution B2B; retail circulation not yet operational
- **Cross-border**: Project Pax (a Japan–Korea SC-transfer pilot via Datachain · TOKI integration, started 2024-09 ), though [[fintech/cross-border-sc-via-swift-api|SWIFT API 互換ルート]] is the main axis
- **Circulation track record** (2026-05): zero official SC issuance (ST digital securities are the largest domestically, over 4,522 億円 via Progmat)

### C. Bank-issued type (deposit token / adjacent to EPI Type 1 ) — DCJPY + Minna Bank SC

- **Platform provision**: [[fintech/jp-stablecoin-dcjpy|株式会社ディーカレット DCP]] (scheduled to be absorbed and merged into its parent DeCurret HD 2026-07-01)
- **Issuers (participating banks)**:
  - **GMO Aozora Net Bank** — DCJPY commercial issuance 第 1 号 (operating in the 2024-08  IIJ non-fossil-certificate transaction)
  - **Japan Post Bank** — announced a DCJPY issuance plan for FY2026 年 (2025-09  reporting)
  - **SBI Shinsei Bank** — considering DCJPY adoption (2025-09  reporting)
  - **MUFG Bank** — DCP director dispatch · forum participation (issuance commitment undetermined)
  - **Bank of Yokohama** — proof-of-concept participation
  - **Minna Bank** (Fukuoka FG affiliate) — independently developing a Solana-based bank-type SC
- **Acquired license**: Banking Act (tokenization of deposits within a bank account). Under the revised Payment Services Act it is adjacent to the "bank-issued type" among the three SC types, but it operates purely as a bank deposit
- **DCP itself**: electronic payment intermediary operator (Director-General of the Kanto Local Finance Bureau (electronic intermediary) 92 号, 2021-11); **not** a JVCEA member
- **Target token**: DCJPY (1 円 = 1  DCJPY, individually issued by participating banks), Minna Bank SC (Solana chain)
- **1:1  redeemability**: as a bank deposit, 1 円 1:1  — circulation cap is only the bank's BS soundness
- **Backing assets**: deposits within the bank account (covered by deposit insurance, up to 1,000 万円)
- **Settlement finality**: DCJPY network (the two-layer Amic Sign structure, financial zone × business zone); Minna Bank is Solana
- **FSA supervision**: FSA banking-business supervision + electronic-payment-intermediary-business supervision
- **Secondary market**: B2B commercial-transaction DX (Gamba Osaka · JACDS · First Accounting 4 社 PoC) + ST DVP (2026-04  SBI Securities · IIJ completed Japan's first actual-issuance verification)
- **Cross-border**: Project Pax (common infrastructure with the trust type) + an inter-bank RTGS concept (adopted by the 2026-04  FSA FinTech hub)
- **Circulation track record** (2026-05): commercially operating, face value undisclosed

### D. USD-denominated SC intermediation via an Electronic Payment Instrument exchange business (ECISP) — SBI VC Trade + USDC

- **Acquiring operator**: [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — Director-General of the Kanto Local Finance Bureau 第00001号 (registration completed 2025-03-04; domestic ECISP 第 1 号)
- **Acquired license**: Electronic Payment Instrument exchange business (revised Payment Services Act Article 62 -3) + crypto-asset exchange business (Director-General of the Kanto Local Finance Bureau 第00011号) + Type I Financial Instruments Business (3247 号)
- **Target token**: **USDC** (issued by Circle) + under consideration: PYUSD (PayPal) / EURC (Circle EUR)
- **Issuer**: Circle Internet Financial (USDC issuance; SBI Circle Holdings, a 50/50  JV established 2025-08 , distributes exclusively in Japan)
- **1:1  redeemability**: via USDC's Circle redemption route (domestically, only SBI VC Trade spot trading; bank wires go via SBI Circle Holdings)
- **Backing assets**: Circle's reserves (US short-term Treasuries + bank deposits; monthly attestation)
- **Settlement finality**: multi-chain across Ethereum / Solana / Polygon / Arbitrum, etc.
- **FSA/JVCEA supervision**: FSA + JVCEA (the ECISP classification is separate and distinct from the crypto-asset exchange classification)
- **Secondary market**: SBI VC Trade spot trading + USDC lending (started 2026-03 , Japan's first)
- **Cross-border**: from the §501(d) perspective, SBI Circle Holdings holds the position of **cross-border-compliance hegemon** ([[fintech/japan-epi-four-camps-comparison|EPI 四阵营 v2 評価で #1]])
- **Circulation track record**: face value undisclosed since handling began 2025-03 

### E. Prepaid payment instrument (legacy boundary) — JPYC v1  archive + the Suica/PASMO domain

- **Issuer category**: JPYC v1 before the enforcement of the revised Payment Services Act (2023-06), and existing transit / distribution IC money such as Suica / nanaco / WAON / PASMO
- **Acquired license**: prepaid-payment-instrument issuer (third-party type or in-house type, Payment Services Act Article 31 )
- **Boundary line**: after the revised act's enforcement, tokens that are "value-transferable + on-chain" are, in principle, obligated to migrate to the EPI classification. IC such as Suica remain prepaid payment instruments due to **transferability restrictions + closed loop** (see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]])
- **Archival case**: JPYC v1  (2021-2025) was issued as a prepaid payment instrument 第00773号 and migrated to v2  (funds-transfer-operator type) in 2025-Q3 
- **Regulatory differences**:
  - **Redeemability**: prepaid is in principle non-redeemable; the funds-transfer-operator type is redeemable
  - **Transferability of money**: prepaid is payment-only; the funds-transfer-operator type allows P2P remittance
  - **Upon issuer failure**: prepaid requires a 50% deposit of the unused balance as of the base date; the funds-transfer-operator type is preserved via the performance-guarantee deposit
- **Boundary-line monitoring**: see ([[payments/japan-bnpl-credit-purchase-boundary|BNPL 信用購入境界]]) for the three-way boundary of BNPL × prepaid × funds transfer

### F. Potential entrants (2026-2027  issuance-commitment candidates)

- **KDDI** — considering a bank-issued SC via the au Jibun Bank affiliate + au PAY (prepaid payment instrument). It has dispatched a director to DeCurret DCP (Nobuaki Monoe)
- **NTT Docomo** — possibility of entering a funds-transfer-operator-type SC or trust-type SC by leveraging d-payment + MUFG Bank / OLIVE bank-account integration
- **LINE Finance / LINE Pay** (a subsidiary of LY Corp 4689 ) — with LINE Xenesis ([[exchanges/jp-exchange-line-xenesis]]) ending its service 2026-06 , a possibility of expanding into the stablecoin domain
- **Japan Post Bank** — an FY2026 年 issuance commitment to the DCJPY bank-issued type (2025-09  reporting)
- **PayPay / PayPay Bank** (Z Holdings affiliate) — capable of either prepaid / bank-issued type via the PayPay balance (prepaid) and PayPay Bank (banking business)
- **Mercari Mercoin** ([[exchanges/jp-exchange-mercoin]]) — possibility of issuing a funds-transfer-operator-type SC via Merpay (funds transfer + prepaid)
- **Metaplanet (3350)** — a stepping stone toward BTC × SC linkage with its JPYC Series B investment (an ecosystem investor, not an issuer)

## Big comparison matrix table

| Axis | A. Funds-transfer-operator type JPYC | B. Trust type Progmat | C. Bank-issued type DCJPY | D. ECISP USDC (SBI) | E. Prepaid payment instrument legacy |
|---|---|---|---|---|---|
| **Issuer category** | funds-transfer operator | trust bank | bank | overseas-SC intermediation operator | prepaid-payment-instrument issuer |
| **Representative issuer** | [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] | MUFG Trust · SMBC Trust · Mizuho Trust (issuing on Progmat) | GMO Aozora Net Bank / Japan Post Bank / SBI Shinsei Bank | Circle (overseas issuance; SBI VC Trade handles it domestically) | JPYC v1  (legacy), Suica, nanaco, WAON, PASMO |
| **Legal basis** | Payment Services Act Article 37  | Trust Business Act + 第 3 号 EPI | Banking Act + 第 1 号 EPI-adjacent | revised Payment Services Act Article 62 -3  (ECISP) | Payment Services Act Article 31  |
| **Example registration number** | Kanto Local Finance Bureau 第00099号 | (not applicable; operated as trust business) | banking license + electronic intermediary 92 号 (DCP) | Kanto Local Finance Bureau 第00001号 (ECISP) | Kanto Local Finance Bureau 第00773号 (JPYC v1) |
| **JVCEA classification** | Type I (funds transfer) | non-member | non-member | Type I (ECISP) | non-member |
| **1:1  redeemability** | 1 円 = 1  JPYC, 1 -per 100 万円 cap | 1 円 = 1  XJPY, no cap | 1 円 = 1  DCJPY, no cap | 1  USD = 1  USDC (via Circle) | non-redeemable in principle |
| **Circulation cap** | 1 -per 100 万円 (2026-05  revision) | none statutory | none statutory (BS soundness only) | spot-trading limit | no cumulative-balance cap, only within member merchants |
| **Backing assets** | performance-guarantee deposit (deposit / trust / guarantee 50%+) | trust account (bankruptcy remote 100%) | bank deposit (deposit insurance 1,000 万円) | Circle reserves (short-term US Treasuries + banks) | base-date unused-balance 50% deposit |
| **Settlement finality** | public chain (ETH / Polygon / AVAX, etc.) | consortium L1  + Ava Labs connectivity | DCJPY network (Amic Sign) | ETH / Solana / Polygon / Arbitrum | closed-loop DB (NFC) |
| **Direct FSA supervision** | ○ Kanto Local Finance Bureau | ○ FSA + Trust Business Act | ○ FSA banking-business supervision | ○ Kanto Local Finance Bureau (ECISP) | ○ Kanto Local Finance Bureau (prepaid) |
| **On-chain secondary market** | ○ DEX (Uniswap, etc.) | △ institution-to-institution only | △ centered on commercial-transaction DX | ○ via DEX | ✕ closed loop |
| **Cross-border** | ✕ premised on domestic use | △ Project Pax (Japan–Korea · Japan–Hong Kong) | △ inter-bank RTGS concept (proof-of-concept stage) | ◎ global connectivity via Circle reserves | ✕ domestic |
| **Preservation upon issuer failure** | preserved via performance-guarantee deposit | fully bankruptcy-remote via trust | covered by deposit insurance | affected if Circle fails | preserved up to the 50% deposit |
| **proof-of-reserves frequency** | disclosure on a supervisory-reporting basis | trust-accounting-audit basis | bank-settlement basis | Circle monthly attestation | supervisory reporting |
| **Assumed customer base** | individual retail + inter-corporate settlement | institution-to-institution B2B (securities · large lots) | inter-corporate settlement + ST DVP + supply chain | retail + DeFi users | member-merchant retail |
| **Competitive relationship** | DCJPY (overlap in the B2B domain) + ECISP USDC (alternative means) | DCJPY (overlap in large-lot settlement) + JPYC (overlap in corporate settlement) | Progmat (overlap in large-lot settlement) | JPYC (alternative candidate for USD compatibility) | segment taken by the funds-transfer-operator type |
| **Representative circulation amount** (2026-05) | cumulative issuance over 5 億円 | zero official issuance (ST is 4,522 億円) | commercially operating (face value undisclosed) | since handling began 2025-03  (undisclosed) | tens of billions of yen scale (Suica circulates trillions of yen annually) |
| **Future entrants** | KDDI / Docomo / Merpay / PayPay Bank | DMM (announced 2024-08 ) + other trust banks | Japan Post / SBI Shinsei / MUFG / Bank of Yokohama / Minna Bank (separate Solana route) | other ECISP acquirers (5-10 社 expected going forward) | existing IC money continues; no new entry |
| **Strategic partners** | Asteria / Metaplanet / Sumitomo Life | NTT Data + JPX + Datachain + Ava Labs | IIJ + SBI HD + KDDI + NTT + MUFG + Japan Post + KDDI | Circle (SBI Circle Holdings 50/50  JV) | (each IC issuer) |
| **Positioning from the §501(d) perspective** | domestic retail compliance #2  ★★★★ | domestic B2B large-lot #3  ★★★ (no cross-border compliance) | pure domestic retail #4  ★★ | **cross-border-compliance hegemon #1  ★★★★★** | (outside regulatory scope) |

## Boundary cases

### B1. The boundary of the JPYC v1  → v2  migration (prepaid → funds-transfer-operator type)

- The 2021-2025  JPYC v1  was issued as a prepaid payment instrument 第00773号. After the 2023-06  enforcement of the revised Payment Services Act, JPYC migrated its legal positioning from prepaid to the funds-transfer-operator-type EPI.
- **Boundary determination**: prepaid is "value non-transferable · payment-only"; the funds-transfer-operator type is "P2P-remittable + redeemable". JPYC v1  was multi-chain on-chain-remittable, so it fell under the post-revision EPI definition → forced migration to v2 .
- **Archive**: the 2026-04-28 FSA official materials first expressly designated JPYC as "funds transfer".

### B2. The bank-issued-type vs Solana-based third-type hybridity of Minna Bank SC

- Minna Bank (Fukuoka FG affiliate) takes the unprecedented implementation route of **implementing a bank-issued SC on the Solana chain**.
- **Boundary determination**: the distinction between a bank-account deposit token and EPI 第 1 号 is ambiguous. Among the three SC types under the revised Payment Services Act (trust type / bank-issued type / funds-transfer-operator type), it likely falls under the bank-issued type (第 1 号 EPI), but the design of on-chain circulation on the Solana public chain differs from other banks' DCJPY (consortium L1).
- **As of 2026-05 **: no official FSA classification has been published. Kenichi Nagayoshi (Minna Bank) continues the independent route.

### B3. The dual-license boundary of SBI VC Trade's USDC handling

- SBI VC Trade holds **both a crypto-asset exchange business (第00011号) + ECISP (第00001号)**. USDC is handled under the ECISP classification, and BTC/ETH under the crypto-asset exchange classification. The first case in which two legal layers coexist within a single platform.
- **Boundary determination**: because USDC legally falls under "electronic payment instruments", it is a separate layer from crypto-asset trading. The segregated-management rules and segregated-management method for customer assets also differ.
- **JVCEA classification**: the crypto-asset exchange classification (1011) and the ECISP classification run in parallel within the same member (the first parallel holding within JVCEA).

### B4. The boundary between the DCJPY deposit token and EPI 第 1 号

- DCJPY is legally "tokenization of deposits issued by a bank" = purely within the Banking Act framework. There is also an interpretation that it does not fall under EPI 第 1 号 (bank-issued-type SC) of the revised Payment Services Act.
- **Boundary determination**: the bank-issued-type EPI exists as a separate framework even in the revised Payment Services Act, but because DCJPY is a design that **tokenizes the bank deposit itself**, it operates within the framework of deposit insurance · banking-business supervision. EPI 第 1 号 is a design where "a bank issues it as an SC", with a different legal boundary from DCJPY.
- **As of 2026-05 **: the FSA's official view is unpublished. Both interpretations coexist.

### B5. The cross-border-linkage boundary of ECISP (第 00001 号) + funds-transfer-operator type (JPYC)

- SBI Circle Holdings (established 2025-08 ) is building a **bidirectional settlement channel of USDC ↔ JPYC**, but the two regulatory categories differ:
  - USDC = handled under ECISP 第 00001 号 (SBI VC Trade)
  - JPYC = issued under the funds-transfer-operator type 第 00099 号 (JPYC Corporation)
- **Boundary determination**: to directly exchange USDC for JPYC, both an ECISP operator + a funds-transfer-operator license are required. A division-of-labor structure in which SBI VC Trade handles the USDC side and JPYC Corporation handles the JPY side.
- **§501(d) perspective**: this dual-license architecture is the core of "the USD-JPY SC cross-border-compliance hegemon in Japan" ([[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]).

### B6. The issuer-absence problem of trust-type Progmat Coin

- Progmat is **a platform provider, not an issuer**. Actual issuance is assumed to be done individually by Mitsubishi UFJ Trust and Banking / SMBC Trust Bank / Mizuho Trust & Banking, but as of 2026-05 , official issuance is zero.
- **Boundary determination**: an "SC issued on Progmat" is legally the specified trust beneficial interest of each trust bank, and Progmat itself is outside regulatory scope (serving as the secretariat of the Digital Asset Co-Creation Consortium (DCC), playing the role of coordinating 331 社).
- **Competition**: even for the same trust-type SC, the entrusted bank for the 2024-08 -announced project with DMM Group has not been disclosed (whether via Progmat is unconfirmed).

### B7. The use-case division of labor between JPYC v2  and Progmat XJPY

- JPYC = funds-transfer-operator type, 1 -per 100 万円 cap + public-chain on-chain + retail
- Progmat XJPY = trust type, no cap + consortium L1  + B2B large-lot
- Even for the same "yen-pegged SC", the use-case division of labor is structurally determined. JPYC targets individual P2P + member-merchant settlement + corporate clearing (100 万円 or below); Progmat XJPY targets institution-to-institution securities settlement + large-lot B2B clearing.
- **Event confirming the division of labor**: the 2026-04  JPYC revision of the 1 -per cap to 100 万円 → a strategic move to expand the corporate B2B clearing range. A counter to the structure in which the Progmat side monopolizes B2B large lots.

### B8. The boundary between the bank-issued type (DCJPY) and a bank deposit under the Banking Act

- DCJPY is a **"deposit token issued by a bank"** = a tokenization of the "deposit" under Banking Act Article 2 . Legally it is the deposit itself, and although it is technically connectable to the "bank-issued-type EPI" among the three SC types of the revised Payment Services Act, strictly speaking it is a separate layer.
- **Deposit-insurance coverage**: the DCJPY balance is covered by deposit insurance (up to 1,000 万円). By contrast, JPYC · Progmat XJPY are not covered by deposit insurance and are preserved via a performance-guarantee deposit (JPYC) / trust (Progmat).
- **Bail-in priority**: the bank-issued type has its distribution priority fixed in a bank failure after deposit insurance; the trust type is fully bankruptcy-remote; the funds-transfer-operator type is preserved via the performance-guarantee deposit.

### B9. The additional ECISP acquirers expected and the expansion of the USD-denominated SC market

- After SBI VC Trade began handling USDC 2025-03  under ECISP 第00001号, other VASPs are also preparing additional ECISP acquisition:
  - **bitFlyer** = considering ECISP acquisition (internally indicated 2025 )
  - **Coincheck** = considering ECISP acquisition + derivatives linkage within the Monex group
  - **GMO Coin** = considering ECISP acquisition + USDC handling
- **5-10 社 ECISP acquisitions** are expected in 2026-2027 , and the domestic circulation of USD-denominated SCs (USDC / PYUSD / EURC) will go full-scale.
- **Competitive aspect**: as the number of domestic ECISP acquirers increases, SBI VC Trade's domestic USDC monopoly position dilutes. However, the exclusive-distribution contract with Circle via the SBI Circle Holdings 50/50  JV is likely to be maintained.

### B10. The future boundary with the CBDC (Japanese yen)

- The Bank of Japan (BoJ) began pilot verification of a CBDC (central-bank-issued digital currency) in 2023-04 , moving into a "use-case proof" phase in the latter half of FY2026 年.
- **Future boundary**: if a yen CBDC is implemented, there is a high possibility of competition with the bank-issued-type SC (DCJPY). On the other hand, the trust-type SC (Progmat) and the funds-transfer-operator-type SC (JPYC), being on a different infrastructure layer, are likely to coexist with the CBDC.
- As of 2026-05 , implementation of a yen CBDC has not been decided, but policy discussion is going full-scale.

## Strategic implications

### Implication 1: Fixation of the 4 -camp division of roles

[[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] became fixed in 2025-2026 :
- **SBI Circle Holdings / USDC** = cross-border-compliance hegemon (v2  rating #1 after listing from the §501(d) perspective)
- **JPYC** = domestic retail (individual + corporate clearing 100 万円 or below)
- **Progmat** = B2B large-lot (trust type + ST linkage)
- **DCJPY / Minna Bank SC** = bank-issued type (commercial-transaction DX + ST DVP)

### Implication 2: The USD-denominated SC market goes full-scale with ECISP-operator diversification

After SBI VC Trade 第00001号, with the 5-10 社 additional ECISP acquisitions (2026-2027), the **domestic circulation of USD-denominated SCs (USDC / PYUSD / EURC)** expands. A legitimate route for Japan residents to hold and remit USD-denominated SCs will be established.

### Implication 3: Full-scale operation of bank-affiliated SCs (Japan Post + SBI Shinsei + MUFG)

If the key planned issuers of the DCJPY bank-issued type (Japan Post's FY2026 年 issuance plan, SBI Shinsei under consideration, MUFG director dispatch) become operational, the bank-issued-type SC will go full-scale in 2027-2028 . The high preservation level of deposit-insurance coverage is an appeal point for individual retail.

### Implication 4: The trust type comes into its own through linkage with ST digital securities

Progmat has zero official SC issuance as of 2026-05 , but ST digital securities exceed 4,522 億円, the largest domestic platform. **Through the DVP settlement of ST + SC**, the trust-type SC comes into its own (2026-04  Japan's first actual-issuance verification completed).

### Implication 5: The prepaid payment instrument is fixed in the IC-money domain in a limited way

Prepaid payment instruments such as Suica / nanaco / WAON / PASMO are fixed, by **transferability restrictions + closed loop**, in a domain separate from the funds-transfer-operator-type SC. There is no new entry of prepaid SCs, and prepaid-type SCs such as JPYC v1  were forcibly migrated to the funds-transfer-operator type by the 2023-06  enforcement of the revised act.

### Implication 6: The choice of regulatory category determines the issuer's business model

- **Funds-transfer-operator type** = in exchange for accepting the 1 -per 100 万円 cap, it can operate its own issuance / redemption platform (the JPYC model)
- **Trust type** = it cannot itself become an issuer, but as a platform provider it can oversee the DCC consortium of 331 社 (the Progmat model)
- **Bank-issued type** = a banking license is required, but the highest preservation level of deposit-insurance coverage + an inter-bank RTGS concept (the DCJPY model)
- **ECISP** = it can handle overseas SCs domestically, but it is an intermediary, not an issuer (the SBI VC Trade model)
- **Prepaid** = fixed in the legacy domain; no suitability as a new SC business

## Watch points (2026-2027)

- Whether the **FSA** makes the JPYC 1 -per-cap 100 万円 revision permanent, or considers a further raise
- Whether **Progmat** can achieve official issuance within 2026  (the progress of the 2024-08 -announced project with DMM Group)
- Full-scale operation of the **DCJPY** inter-bank RTGS concept (adopted by the 2026-04  FSA FinTech hub; participating banks to be announced)
- Developments of **SBI Circle Holdings** after listing from the §501(d) perspective (at the time of a USA-JP MRA conclusion)
- The ripple effect of the **Minna Bank Solana SC** on other regional banks
- **Additional ECISP-operator acquisitions**: acquirers from 第 00002 号 onward and the SC names they handle
- The progress of discussion on the **CBDC** Japanese-yen central-bank-issued digital currency

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
- [[JapanFG/jpyc|JapanFG jpyc]]
- [[JapanFG/progmat|JapanFG progmat]]
- [[exchanges/jp-exchange-jpyc|JPYC 株式会社]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバル stablecoin 5 極比較]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル比較マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## Sources

- FSA "電子決済手段等取引業者登録一覧": https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA "暗号資産・電子決済手段関係": https://www.fsa.go.jp/policy/virtual_currency02/
- JVCEA member list: https://jvcea.or.jp/member/
- JPYC official: https://jpyc.co.jp/about
- Progmat official: https://progmat.co.jp/news/
- DeCurret DCP official: https://www.decurret-dcp.com/pressrelease/
- SBI VC Trade USDC: https://www.sbivc.co.jp/usdc

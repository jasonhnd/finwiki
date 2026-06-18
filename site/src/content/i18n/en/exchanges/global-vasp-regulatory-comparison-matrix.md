---
source: exchanges/global-vasp-regulatory-comparison-matrix
source_hash: 20430bae936c0172
lang: en
status: machine
fidelity: ok
title: "Global VASP regulatory 8 -pole comparison matrix — JP / KR / HK / SG / EU / US / UAE / UK"
translated_at: 2026-06-18T23:33:48.313Z
---

# Global VASP regulatory 8 -pole comparison matrix — JP / KR / HK / SG / EU / US / UAE / UK

## TL;DR

The world's major VASP (Virtual Asset Service Provider) regulations have converged into a **8 -pole structure**: Japan (FSA + JVCEA two-layer) / Korea (FSC + FIU single) / Hong Kong (SFC VATP) / Singapore (MAS DPT) / EU (MiCA CASP) / US (federal + 50 -state fragmentation) / UAE (VARA alone) / UK (FCA-AML-centered + phased full implementation). This entry compares them side by side along 13  axes: **legal source, license tiers, required capital, segregation (cold storage %), AML/Travel Rule, stablecoin regulation, cross-border, marketing, representative enforcement cases, disclosure, and carve-outs**. For details on each pole, start from [[exchanges/jp-vasp-regulatory-timeline]] / [[exchanges/eu-mica-casp-regime-overview]] / [[exchanges/us-crypto-licensing-multi-layer-system]] / [[exchanges/hk-sfc-vasp-licensing-overview]] / [[exchanges/sg-mas-dpt-licensing-overview]].

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **cross-cut (横串)** counterpart to the per-pole files above and reads against [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin regulatory five-pole matrix]] for the parallel stablecoin axis, and [[financial-licenses/INDEX|legal/financial licenses]] for the system / regulatory boundary on the Japan side.

## Key facts

- **Convergence of the 8 -pole structure**: 2017  (Japan FSA registration system) → 2020  (Singapore PSA) → 2021  (Korea Act on Reporting and Use of Specific Financial Transaction Information) → 2023  (Hong Kong VATP / UK FCA promotion strengthening) → 2024  (EU MiCA CASP full implementation) → 2024-2025  (UAE VARA full operation), with the world's major 8  poles completing the build-out of their VASP legal systems within 8  years ^[extracted]
- **The world's strictest cold-storage ratio is Hong Kong (98%)**, followed by Japan's JVCEA self-regulation (95%) ^[extracted]

### A. Legal source / regulator / implementation timing

| Pole | Legal source (statute) | Primary regulator | VASP regime implementation |
|---|---|---|---|
| **Japan** | Revised Payment Services Act (enacted 2016  / enforced 2017 ) + revised FIEA (2020  derivatives) | **FSA** (Financial Services Agency) + self-regulation **JVCEA** | 2017-04  ([[exchanges/jp-vasp-regulatory-timeline]]) |
| **Korea** | Act on Reporting and Use of Specific Financial Transaction Information (특정금융정보법) + Virtual Asset User Protection Act (enforced 2024-07 ) | **FSC** (금융위원회) + **FIU** (금융정보분석원) | 2021-03-25 |
| **Hong Kong** | Revised AMLO (Anti-Money Laundering Ordinance) + SFO (Securities and Futures Ordinance) | **SFC** (Securities and Futures Commission) | 2023-06-01 ([[exchanges/hk-sfc-vasp-licensing-overview]]) |
| **Singapore** | Payment Services Act 2019  (enforced 2020-01 ) | **MAS** (Monetary Authority of Singapore) | 2020-01 |
| **EU** | MiCA = Regulation (EU) 2023/1114 | **ESMA** (coordination) + national NCAs (BaFin/AMF/AFM, etc.) | 2024-12-30 CASP full implementation |
| **US** | Bank Secrecy Act + state Money Transmitter Acts + NY DFS Reg 200  (BitLicense) + Securities Act / CEA | **FinCEN** (federal) / **NYDFS** (state) / **SEC** / **CFTC** / **OCC** | federal 1970  + NY BitLicense 2015-06  + OCC Trust 2021 |
| **UAE** | Dubai Law No. 4  of 2022  + VARA Rulebooks (effective 2023-02 ) | **VARA** (Dubai) / **ADGM-FSRA** (Abu Dhabi) | 2022-03  established / 2023-02  rulebooks effective |
| **UK** | Money Laundering Regulations 2017  + FSMA 2023  extension | **FCA** (Financial Conduct Authority) | 2020-01  (MLR revision / AML registration) |

### B. License categories / tiers

| Pole | Category name | Count | Tier structure |
|---|---|---|---|
| **Japan** | Crypto-asset exchange registration / crypto-asset derivatives business (FIEA 1  type) | 2  (spot + derivatives) | Single registration (Local Finance Bureau Director No. NNNNN) |
| **Korea** | Virtual asset service provider (VASP / 가상자산사업자) | Subdivided within 1  categories into exchange/custody/brokerage/transfer | FIU registration + KISA ISMS certification (two-stage) |
| **Hong Kong** | VATP license (Type 1  + Type 7  SFC) | 1  (retail + institutional under the same license) | Single |
| **Singapore** | DPT services = MPI / SPI / Money-Changing | 3  categories | Scale-based tiers |
| **EU** | CASP = MiCA Article 60  services, 10  types | 10  (custody / trading / exchange / order execution, etc.) | Authorization by service, obtainable in combination |
| **US** | (a) FinCEN MSB / (b) state MTL ×~50  / (c) NY BitLicense / (d) OCC Trust / (e) SEC ATS or broker-dealer / (f) CFTC DCM/SEF | 4-6 -fold | Federal + state matrix |
| **UAE** | 7  categories by VASP activity (Advisory / Broker-Dealer / Custody / Exchange / Lending / Management / Transfer) | 7 | Combined by activity |
| **UK** | MLR crypto-asset business registration (current) → regulated activities (2026-2027  phased) | 1  → expanding | AML single-layer → two-stage (planned) |

### C. Activity coverage (spot / derivatives / custody / staking / lending / NFT marketplace)

| Pole | Spot | Deriv | Custody | Staking | Lending | NFT mkt |
|---|---|---|---|---|---|---|
| **Japan** | ○ | ○ (FIEA 1  type, separate license) | ○ | △ under JVCEA self-regulation ([[exchanges/jp-cex-staking-lending-regulation]]) | △ same as above | △ separately under review |
| **Korea** | ○ | ✕ (retail prohibited under the User Protection Act) | ○ | △ guidance undetermined | △ same as above | △ |
| **Hong Kong** | ○ | ○ (institutional only, retail prohibited) | ○ | ✕ (2024-04  guidance pending) | ✕ | △ under review |
| **Singapore** | ○ | △ (institutional, individual MAS approval) | ○ | △ guidance-restricted | △ same as above | ✕ cautious |
| **EU** | ○ | △ (existing MiFID II framework) | ○ | △ no MiCA staking provision | △ separately | △ application being sorted out |
| **US** | ○ (by state) | ○ (CFTC DCM / SEF) | ○ (Trust Charter) | △ frequent SEC enforcement warnings | △ cautious after Genesis et al. failures | △ |
| **UAE** | ○ | ○ (VARA full permission) | ○ | ○ | ○ | ○ |
| **UK** | ○ (AML registration only) | △ FCA separately | △ FCA separately | △ under discussion | △ | △ |

### D. Capital requirements / segregation

| Pole | Minimum capital | Customer-asset segregation | Cold-storage ratio |
|---|---|---|---|
| **Japan** | Capital of 1,000 万円 + positive net assets | Cash in trust banks, crypto-assets segregated | **Cold 95% or more / hot 5% or less** (JVCEA self-regulation, [[exchanges/jp-vasp-cold-storage-segregation-rules]]) |
| **Korea** | By business type (target around 10 億〜30 億 won) | Customer deposits separately managed at banks (실명확인 입출금) | **70% cold in principle** (FSC 2024  strengthening guidance) |
| **Hong Kong** | **HK$5M (approx. 1 億円)** | Trust custody via a trustee | **98% or more** (world's strictest) |
| **Singapore** | MPI: SG$250K base | Trust account required (2024-) | No ratio provision (intent indicated by MAS notice) |
| **EU** | Order transmission €50K / exchange & execution €125K / exchange & custody **€150K** | Trust or segregation obligation | No ratio provision (NCA discretion) |
| **US** | By state (NY BitLicense effectively a high surety bond + capital) | NY: customer assets backed in the same kind 100% | By state; NY DFS effectively requires cold dominant |
| **UAE** | By VASP category (Exchange from AED 1.5M〜) | Trust or segregated wallet | Risk-based provisions in the VARA Rulebook |
| **UK** | No provision (as it is currently MLR-based) | Not obligatory under the MLR; to be introduced with the FSMA 2026+ extension | No provision |

### E. Fit-and-proper / source of capital

- **Japan**: Background screening of major shareholders / directors (anti-social forces, international sanctions, PEPs), proof of source of additional capital
- **Korea**: Real-name-account banks conduct capital verification linked to KYC/CDD (bank 1:1  rule)
- **Hong Kong**: SFC fit-and-proper test (the long-standing deeper test of character, background, financial condition, capability)
- **Singapore**: MAS Notice on Fit and Proper Criteria (FSG-N16) applies
- **EU**: MiCA Article 81  requires good repute of the management body + notification of large shareholders (qualifying holding)
- **US**: NY BitLicense individually screens the Cybersecurity coordinator / Compliance Officer + background check
- **UAE**: VARA requires senior management approval, with criminal-record / bankruptcy-record checks
- **UK**: FCA Threshold Conditions + expanded application of the Senior Managers and Certification Regime (SMCR)

### F. AML / Travel Rule implementation

| Pole | Threshold | Travel Rule | Domestic transmission infrastructure |
|---|---|---|---|
| **Japan** | Over 10 万円 (remittance 10 万円 / receipt 30 万円 basis) | Obligatory 2022-04  → strengthened 2026  | TRC-20  or Sumsub linkage, JVCEA common infrastructure ([[exchanges/jp-vasp-aml-travel-rule-implementation]]) |
| **Korea** | Over 100 万 won (approx. 10 万円) | Obligatory 2022-03  | Industry-common such as VerifyVASP |
| **Hong Kong** | Over HK$8,000  | Obligatory under the AMLO (2023-06-) | Industry protocol, optional choice |
| **Singapore** | Over SG$1,500  | Obligatory under PSA Notice PSN02  | Industry protocol, optional |
| **EU** | **Over €1,000 ** (TFR = Regulation 2023/1113) | Fully implemented (CASP obligation) | Sumsub / Notabene, etc. |
| **US** | Over $3,000  (FinCEN Travel Rule, crypto-assets linked to OFAC) | FinCEN proposed rule pending | TRP (Travel Rule Protocol) |
| **UAE** | Over AED 3,500  | Obligatory under the VARA Rulebook | VARA approved protocols |
| **UK** | Over £1,000  (Cryptoasset Travel Rule enforced 2023-09 ) | Fully implemented | Notabene, etc. |

### G. Stablecoin issuance rules (cross-link [[fintech/global-stablecoin-regulatory-five-pole-matrix]])

- **Japan**: Revised Payment Services Act enforced 2023-06  → only the 3  types of banks / trust banks / funds-transfer operators may issue (JPYC commenced operations 2025-)
- **Korea**: Virtual Asset User Protection Act enforced 2024-07 ; stablecoin regulation to be separately legislated in 2026 
- **Hong Kong**: HKMA Stablecoin Ordinance enforced 2025-08-01 → fiat-pegged stablecoins require HKMA authorization
- **Singapore**: MAS Stablecoin Framework announced 2023-08 ; SCS (Single-Currency Stablecoin) authorization system
- **EU**: MiCA Title III (ART = Asset-Referenced Token) + Title IV (EMT = E-Money Token) implemented ahead from 2024-06-30
- **US**: GENIUS Act federal stablecoin law enacted 2025-07  → a federal + state two-layer structure, with an OCC Trust Charter route as well
- **UAE**: Stablecoins shared between the Central Bank Stored Value Facilities Reg + VARA
- **UK**: FCA + Bank of England jointly regulate systemic stablecoins, 2026  legislation in progress

### H. Cross-border solicitation / passporting

- **Japan**: Solicitation toward domestic residents requires registration → FSA warnings to unregistered overseas operators ([[exchanges/fsa-foreign-exchange-warning-system]])
- **Korea**: VASP registration required for solicitation toward domestic residents; foreign capital effectively excluded by the bank-account requirement
- **Hong Kong**: SFC VATP required for Hong Kong residents; solicitation from outside is restricted
- **Singapore**: Solicitation toward Singapore residents is subject to the PSA; foreign capital needs to obtain an MPI
- **EU**: **MiCA passporting: authorization in 1  countries → access to 27  countries** (a decisive difference from the US 50  states)
- **US**: State-by-state solicitation regulation, with foreign-capital fundraising routes such as Reg D / Reg S
- **UAE**: VARA authorization covers all of the UAE (excluding DIFC); separate from ADGM; solicitation from outside is restricted
- **UK**: Financial promotion toward UK residents must go through an FCA-authorized operator (strengthened 2023-10 )

### I. Marketing / promotion rules

- **Japan**: JVCEA advertising guidelines (risk warnings required, exaggerated expressions prohibited, restrictions on the use of celebrities)
- **Korea**: Exaggerated advertising prohibited under the User Protection Act; risk-explanation obligation at the listing of new tokens
- **Hong Kong**: SFC Code of Conduct applies; for retail, only large-liquidity tokens may be advertised
- **Singapore**: **2022-01  MAS guidelines effectively ban retail advertising of DPT services entirely** (a symbol of the institution-oriented hub)
- **EU**: MiCA Article 7  (white paper) / Article 29  (marketing communications) require fair / clear / not misleading obligations
- **US**: By state + SEC Reg BI / FINRA rule apply; influential persons require disclosure
- **UAE**: VARA Marketing Regulations 2023-12  set detailed rules, with constraints even on the use of overseas influencers
- **UK**: **Financial Promotion Order + a cooling-off period of 24  hours** (new customers must wait 24h after application), with risk-warning + appropriateness-assessment obligations

### J. Representative enforcement cases (1-2 件 / pole)

- **Japan**: Coincheck NEM 580 億円 outflow (2018-01) → business improvement order (details [[exchanges/coincheck-nem-hack-detailed-analysis]]) ; DMM Bitcoin Lazarus hack (2024-05) → voluntary closure ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]])
- **Korea**: Terra-Luna collapse (2022-05) → Do Kwon indicted by Korean prosecutors / arrested in Montenegro ; Korean prosecutor investigation expanded over FTX customer losses
- **Hong Kong**: JPEX fraud (2023-09) → 11 名 arrests by Hong Kong police, losses over HK$15 億, a catalyst for improving the Hong Kong SFC warning list
- **Singapore**: Three Arrows Capital failure (2022-06) → MAS banned 3AC from business for 9  years; Su Zhu/Kyle Davies in judicial cooperation with the US
- **EU**: Binance France AMF warning (2023) → re-authorized in the 2024 SAS Société form ; BaFin's individual approval of Coinbase Germany 2021-06
- **US**: SEC v. Coinbase (filed 2023-06  → dismissed in part 2024-03 ) ; SEC v. Binance.US (2023-06) ; FTX failure → SBF 25 -year prison sentence (2024-03)
- **UAE**: Bybit (UAE-headquartered) / withdrawal from the Japanese market (2026-03) ; OKX US settlement over FIU violations 2025
- **UK**: Binance UK FCA warning → withdrawal 2024  ; Copper.co accelerating expansion after authorization

### K. Disclosure / financial reporting / proof-of-reserves

- **Japan**: Monthly submission of customer-asset-segregation status to JVCEA + annual financial-results disclosure (submitted to the FSA)
- **Korea**: Monthly STR reporting to the FIU + annual KISA ISMS renewal audit
- **Hong Kong**: Monthly returns to the SFC + annual IFRS audited financials + monthly client asset attestation
- **Singapore**: Annual financial statement + assurance report to MAS (monthly customer asset report for large MPIs)
- **EU**: MiCA Article 67  strengthens annual report + key information disclosure + monitoring
- **US**: NY BitLicense requires **quarterly financial reports** + **annual audited financials** + **recommended monthly proof-of-reserves**
- **UAE**: VARA Rulebook mandates a **monthly proof-of-reserves attestation obligation** (one of the world's strictest frequencies)
- **UK**: Disclosure is limited under the MLR → to become full-scale with the FSMA extension

### L. Notable carve-outs / exceptions

- **Japan**: NFTs are in principle outside the VASP scope (judged individually by function) ; banks / trust banks fall under a separate framework for stablecoin issuance
- **Korea**: The User Protection Act fully bans retail derivatives → even CME-affiliated overseas underwriting including institutional is restricted
- **Hong Kong**: HKMA stablecoin runs parallel to the SFC VATP, dual supervision
- **Singapore**: DBS Digital Exchange is by **individual MAS approval** (separate from the PSA), institution-only
- **EU**: Existing NCA-authorized operators get a 18 -month transitional period (2024-12-30 → 2026-07-01) to migrate to MiCA
- **US**: The **OCC Federal Trust Charter** fully exempts 50 -state MTL (Anchorage Digital was the first to obtain it 2021-01 , Circle obtained it 2025 )
- **UAE**: DIFC is outside VARA's jurisdiction (DFSA alone), ADGM is FSRA-independent (with 3  systems coexisting within the UAE)
- **UK**: MLR registration is an AML obligation only; market-conduct regulation depends on the FSMA (a two-stage structure)

### Integrated type (single-passport regime)

- **EU MiCA**: 1  license → passporting to 27  countries (the world's widest)
- **Japan**: FSA single registration, but two-layer with JVCEA self-regulation
- **Korea**: FSC + FIU single, further concentrated by the bank 1:1  rule
- **Singapore / Hong Kong**: Single supervision within the city-state / SAR

### Fragmented type (multi-layer regime)

- **US**: Federal (FinCEN/SEC/CFTC/OCC) + state (50 -state MTL + NY BitLicense), the world's most complex
- **UAE**: VARA + DFSA + ADGM-FSRA + federal SCA + Central Bank, with 5  systems coexisting

### Phased build-out type (phased regime)

- **UK**: MLR 2017  (AML-centered, current) → FSMA 2023  extension (2026-2027  phased) to shift to full-scale regulation
- **Korea**: Specific-Financial-Transaction-Information Act (2021) → User Protection Act (2024) → stablecoin regulation (planned 2026 ), added in phases

## 3. Implications for global CEX strategy

- **MiCA passporting** intensified the competition to acquire EU bases from 2024-2025  → confirming the configuration of Coinbase EU (Luxembourg) / Kraken EU (Ireland) / Crypto.com EU (Malta) / Binance France
- **US state-by-state MTL costs** reach the tens of millions of dollars for nationwide deployment, resulting in ecosystem concentration among a handful of major players
- **UAE VARA's** low corporate tax + full-stack license + retail unbanning provides a "floor of global trust" → the headquarters-relocation trend of Bybit / OKX / Crypto.com
- **APAC three-city division of labor**: the role-sharing of Singapore (institution-oriented) / Hong Kong (retail unbanned, limited to large names) / Japan (retail-permitted, strict whitelist) has become entrenched
- **US GENIUS Act 2025** + the **OCC Trust route** push the US back up to the world's largest stablecoin-issuance hub (Circle / Paxos / USD bank via OCC)

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-vasp-regulatory-timeline]] — Japan timeline (the JP anchor of this matrix)
- [[exchanges/fsa-vasp-registration-system]] — Japan registration-system details
- [[exchanges/jvcea-self-regulatory-overview]] — Japan self-regulation
- [[exchanges/eu-mica-casp-regime-overview]] — EU details
- [[exchanges/us-crypto-licensing-multi-layer-system]] — US details
- [[exchanges/hk-sfc-vasp-licensing-overview]] — Hong Kong details
- [[exchanges/sg-mas-dpt-licensing-overview]] — Singapore details
- [[exchanges/uae-vara-licensing-overview]] — UAE details
- [[exchanges/uk-fca-crypto-registration-overview]] — UK details
- [[exchanges/korea-cex-five-pillars-comparison]] — Korea 5  major CEX comparison
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule Japan implementation
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — cold-storage details
- [[exchanges/global-cex-top10-comparison]] — global CEX 10  leaders positioning
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — stablecoin version of the 5 -pole matrix (being created in parallel; link to be resolved after both are published)
- [[financial-licenses/INDEX|legal/financial licenses]] — the regulatory boundary on the Japan side

## Sources

- FSA: https://www.fsa.go.jp/en/policy/virtual_currency/
- Korea FSC: https://www.fsc.go.kr/eng/
- HK SFC: https://www.sfc.hk/en/Rules-and-standards/Suitability-requirements/Virtual-asset-related-products-and-services
- MAS: https://www.mas.gov.sg/regulation/payments
- ESMA MiCA: https://www.esma.europa.eu/policy-activities/crypto-assets
- NYDFS BitLicense: https://www.dfs.ny.gov/virtual_currency_businesses
- UAE VARA: https://www.vara.ae/
- UK FCA: https://www.fca.org.uk/firms/cryptoassets

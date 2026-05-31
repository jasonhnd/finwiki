---
source: exchanges/global-vasp-regulatory-comparison-matrix
source_hash: 370cd647df37bb14
lang: en
status: machine
fidelity: ok
title: "Global VASP regulation 8 -pole comparison matrix — JP / KR / HK / SG / EU / US / UAE / UK"
translated_at: 2026-05-31T03:19:56.444Z
---

# Global VASP regulation 8 -pole comparison matrix — JP / KR / HK / SG / EU / US / UAE / UK

## TL;DR

The world's major VASP (Virtual Asset Service Provider) regulations have converged into a **8 -pole structure**: Japan (FSA + JVCEA two-layer) / Korea (FSC + FIU single) / Hong Kong (SFC VATP) / Singapore (MAS DPT) / EU (MiCA CASP) / US (federal + 50 -state fragmentation) / UAE (VARA standalone) / UK (FCA AML-centric + phased full implementation). This entry compares them side by side across 13  axes: **legal source, license hierarchy, required capital, segregated management (cold storage %), AML/Travel Rule, stablecoin regulation, cross-border, marketing, representative enforcement cases, disclosure, and carve-outs**. For the details of each pole, start from [[exchanges/jp-vasp-regulatory-timeline]] / [[exchanges/eu-mica-casp-regime-overview]] / [[exchanges/us-crypto-licensing-multi-layer-system]] / [[exchanges/hk-sfc-vasp-licensing-overview]] / [[exchanges/sg-mas-dpt-licensing-overview]].

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **横串 (cross-cut)** counterpart to the per-pole files above and reads against [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin regulatory five-pole matrix]] for the parallel stablecoin axis, and [[JapanFG/legal-financial-licenses/INDEX|legal/financial licenses]] for the system / regulatory boundary on the Japan side.

## Key facts

- **Convergence of the 8 -pole structure**: 2017  (Japan FSA registration regime) → 2020  (Singapore PSA) → 2021  (Korea Specified Financial Information Act) → 2023  (Hong Kong VATP / UK FCA promotion strengthening) → 2024  (EU MiCA CASP full implementation) → 2024-2025  (UAE VARA full operation); the world's 8  major poles completed building out their VASP legal frameworks over 8  years ^[extracted]
- **The strictest cold-storage ratio in the world is Hong Kong (98%)**, followed by Japan's JVCEA self-regulation (95%) ^[extracted]

### A. Legal source / regulator / timing of enforcement

| Pole | Legal source (statute) | Primary regulator | VASP regime in force |
|---|---|---|---|
| **Japan** | Revised Payment Services Act (enacted 2016  / in force 2017 ) + revised FIEA (2020 derivatives) | **FSA** (Financial Services Agency) + self-regulation **JVCEA** | 2017-04  ([[exchanges/jp-vasp-regulatory-timeline]]) |
| **Korea** | Specified Financial Information Act (특정금융정보법) + Virtual Asset User Protection Act (in force 2024-07 ) | **FSC** (금융위원회) + **FIU** (금융정보분석원) | 2021-03-25 |
| **Hong Kong** | Revised AMLO (Anti-Money Laundering Ordinance) + SFO (Securities and Futures Ordinance) | **SFC** (Securities and Futures Commission) | 2023-06-01 ([[exchanges/hk-sfc-vasp-licensing-overview]]) |
| **Singapore** | Payment Services Act 2019  (in force 2020-01 ) | **MAS** (Monetary Authority of Singapore) | 2020-01 |
| **EU** | MiCA = Regulation (EU) 2023/1114 | **ESMA** (coordination) + each national NCA (BaFin/AMF/AFM, etc.) | 2024-12-30 CASP full implementation |
| **US** | Bank Secrecy Act + each state's Money Transmitter Acts + NY DFS Reg 200  (BitLicense) + Securities Act / CEA | **FinCEN** (federal) / **NYDFS** (state) / **SEC** / **CFTC** / **OCC** | federal 1970 + NY BitLicense 2015-06 + OCC Trust 2021 |
| **UAE** | Dubai Law No. 4 of 2022 + VARA Rulebooks (effective 2023-02 ) | **VARA** (Dubai) / **ADGM-FSRA** (Abu Dhabi) | 2022-03  establishment / 2023-02  rulebooks effective |
| **UK** | Money Laundering Regulations 2017 + FSMA 2023  expansion | **FCA** (Financial Conduct Authority) | 2020-01  (MLR amendment / AML registration) |

### B. License categories / hierarchy

| Pole | Category name | Count | Hierarchy structure |
|---|---|---|---|
| **Japan** | Crypto-asset exchange business registration / crypto-asset derivatives business (FIEA 1 -type) | 2  (spot + derivatives) | Single registration (Director-General of Finance Bureau, No. NNNNN) |
| **Korea** | Virtual Asset Service Provider (VASP / 가상자산사업자) | subdivided within 1  categories into exchange/custody/brokerage/transfer | FIU registration + KISA ISMS certification (two-stage) |
| **Hong Kong** | VATP license (Type 1 + Type 7 SFC) | 1  (retail + institutional under the same license) | Single |
| **Singapore** | DPT service = MPI / SPI / Money-Changing | 3  categories | Scale-based hierarchy |
| **EU** | CASP = 10  types of MiCA Article 60  services | 10  (custody / trading / exchange / order execution, etc.) | Authorization by service, acquired in combination |
| **US** | (a) FinCEN MSB / (b) state MTL ×~50 / (c) NY BitLicense / (d) OCC Trust / (e) SEC ATS or broker-dealer / (f) CFTC DCM/SEF | 4-6  layers | Federal + state matrix |
| **UAE** | 7  categories by VASP activity (Advisory / Broker-Dealer / Custody / Exchange / Lending / Management / Transfer) | 7 | Combination by activity |
| **UK** | MLR crypto-asset business registration (current) → regulated activities (2026-2027  phased) | 1  → expanding | AML single layer → two-stage (planned) |

### C. Activity coverage (spot / derivatives / custody / staking / lending / NFT marketplace)

| Pole | Spot | Deriv | Custody | Staking | Lending | NFT mkt |
|---|---|---|---|---|---|---|
| **Japan** | ○ | ○ (FIEA 1 -type, separate license) | ○ | △ under JVCEA self-regulation ([[exchanges/jp-cex-staking-lending-regulation]]) | △ ditto | △ separately under review |
| **Korea** | ○ | ✕ (retail prohibited by User Protection Act) | ○ | △ guideline undetermined | △ ditto | △ |
| **Hong Kong** | ○ | ○ (institutional only, retail prohibited) | ○ | ✕ (2024-04  guidance pending) | ✕ | △ under review |
| **Singapore** | ○ | △ (institutional, case-by-case MAS approval) | ○ | △ guidance-restricted | △ ditto | ✕ cautious |
| **EU** | ○ | △ (existing MiFID II framework) | ○ | △ no explicit MiCA staking provision | △ separate | △ application being clarified |
| **US** | ○ (by state) | ○ (CFTC DCM / SEF) | ○ (Trust Charter) | △ frequent SEC enforcement warnings | △ cautious after Genesis, etc. failures | △ |
| **UAE** | ○ | ○ (full VARA permission) | ○ | ○ | ○ | ○ |
| **UK** | ○ (AML registration only) | △ FCA separate | △ FCA separate | △ under discussion | △ | △ |

### D. Capital requirements / segregated management

| Pole | Minimum capital | Customer-asset segregation | Cold-storage ratio |
|---|---|---|---|
| **Japan** | Capital 1,000 万円 + positive net assets | Cash at a trust bank; crypto assets segregated | **Cold 95% or more / hot 5% or less** (JVCEA self-regulation, [[exchanges/jp-vasp-cold-storage-segregation-rules]]) |
| **Korea** | By business type (guideline of 10 億〜30 億 won) | Customer deposits at a separate management bank (실명확인 입출금) | **70% cold in principle** (FSC 2024  strengthening guideline) |
| **Hong Kong** | **HK$5M (approx. 1 億円)** | Trust custody via a trustee | **98% or more** (strictest in the world) |
| **Singapore** | MPI: SG$250K base | Trust account required (2024-) | No ratio provision (intent directed in MAS notice) |
| **EU** | Order transmission €50K / exchange-execution €125K / exchange-custody **€150K** | Trust or segregation obligation | No ratio provision (NCA discretion) |
| **US** | By state (NY BitLicense effectively a high surety bond + capital) | NY: customer assets backed in the same kind 100% | By state; NY DFS effectively requires cold-dominant |
| **UAE** | By VASP category (Exchange from AED 1.5M〜) | Trust or segregated wallet | Risk-based provision in the VARA Rulebook |
| **UK** | No provision (as it is currently MLR-based) | Not mandated under MLR; introduction planned under FSMA 2026+ expansion | No provision |

### E. Fit-and-proper / source of contributed funds

- **Japan**: background screening of major shareholders / directors (anti-social forces, international sanctions, PEP), proof of source of additional contributions
- **Korea**: the real-name account bank performs funding verification linked to KYC/CDD (bank 1:1  rule)
- **Hong Kong**: SFC fit-and-proper test (its long-standing deeper test of character, experience, financial status, competence)
- **Singapore**: MAS Notice on Fit and Proper Criteria (FSG-N16) applies
- **EU**: good-repute obligation for the management body under MiCA Article 81  + notification of large shareholders (qualifying holding)
- **US**: under NY BitLicense, individual review of Cybersecurity coordinator / Compliance Officer + background check
- **UAE**: VARA requires senior management approval, with criminal-record / bankruptcy-record checks
- **UK**: FCA Threshold Conditions + expanded application of the Senior Managers and Certification Regime (SMCR)

### F. AML / Travel Rule implementation

| Pole | Threshold | Travel Rule | Domestic transmission infrastructure |
|---|---|---|---|
| **Japan** | Over 10 万円 (criteria of 10 万円 for sending / 30 万円 for receiving) | Mandated 2022-04  → strengthened 2026  | TRC-20  or Sumsub linkage, JVCEA common infrastructure ([[exchanges/jp-vasp-aml-travel-rule-implementation]]) |
| **Korea** | Over 100 万 won (approx. 10 万円) | Mandated 2022-03  | VerifyVASP, etc. industry-common |
| **Hong Kong** | Over HK$8,000  | Mandated under AMLO (2023-06-) | Industry protocol, optionally chosen |
| **Singapore** | Over SG$1,500  | Mandated under PSA Notice PSN02  | Industry protocol optional |
| **EU** | **Over €1,000 ** (TFR = Regulation 2023/1113) | Fully implemented (CASP obligation) | Sumsub / Notabene, etc. |
| **US** | Over $3,000  (FinCEN Travel Rule; crypto assets linked to OFAC) | FinCEN proposed rule pending | TRP (Travel Rule Protocol) |
| **UAE** | Over AED 3,500  | Mandated in the VARA Rulebook | VARA approved protocols |
| **UK** | Over £1,000  (Cryptoasset Travel Rule in force 2023-09 ) | Fully implemented | Notabene, etc. |

### G. Stablecoin issuance rules (cross-link [[fintech/global-stablecoin-regulatory-five-pole-matrix]])

- **Japan**: revised Payment Services Act in force 2023-06  → only the 3  types of banks / trust banks / funds-transfer operators may issue (JPYC began operation 2025-)
- **Korea**: Virtual Asset User Protection Act in force 2024-07 ; stablecoin regulation planned for separate legislation at 2026 
- **Hong Kong**: HKMA Stablecoin Ordinance in force 2025-08-01 → fiat-pegged stablecoins require HKMA authorization
- **Singapore**: MAS Stablecoin Framework announced 2023-08 ; an authorization regime for SCS (Single-Currency Stablecoin)
- **EU**: MiCA Title III (ART = Asset-Referenced Token) + Title IV (EMT = E-Money Token) implemented in advance from 2024-06-30
- **US**: GENIUS Act 2025-07  federal stablecoin law enacted → federal + state two-layer structure, with an OCC Trust Charter route also available
- **UAE**: Central Bank Stored Value Facilities Reg + VARA share responsibility for stablecoins
- **UK**: FCA + Bank of England jointly regulate systemic stablecoins; 2026  legislation being prepared

### H. Cross-border solicitation / passporting

- **Japan**: solicitation toward domestic residents requires registration → FSA warnings to unregistered overseas operators ([[exchanges/fsa-foreign-exchange-warning-system]])
- **Korea**: solicitation toward domestic residents requires VASP registration; foreign firms are effectively excluded by the bank-account requirement
- **Hong Kong**: solicitation toward Hong Kong residents requires SFC VATP; solicitation from outside is restricted
- **Singapore**: solicitation toward Singapore residents is subject to the PSA; foreign firms must obtain an MPI
- **EU**: **authorization in 1  countries → access to 27  countries via MiCA passporting** (a decisive difference from the US 50  states)
- **US**: state-by-state solicitation regulation; foreign-funding routes exist via Reg D / Reg S, etc.
- **UAE**: VARA authorization covers all of the UAE (excluding DIFC), separate from ADGM; solicitation from outside is restricted
- **UK**: financial promotion toward UK residents must go via FCA-authorized operators (2023-10  strengthening)

### I. Marketing / promotion rules

- **Japan**: JVCEA advertising guidelines (risk warnings required, exaggerated expressions prohibited, restrictions on celebrity use)
- **Korea**: exaggerated advertising prohibited under the User Protection Act; risk-explanation obligation when listing new tokens
- **Hong Kong**: SFC Code of Conduct applies; for retail, only large, liquid tokens may be advertised
- **Singapore**: **MAS guidelines 2022-01  effectively ban retail advertising of DPT services entirely** (a symbol of an institution-oriented hub)
- **EU**: fair / clear / not misleading obligations under MiCA Article 7  (white paper) / Article 29  (marketing communications)
- **US**: state-by-state + SEC Reg BI / FINRA rule apply; disclosure required for influential figures
- **UAE**: detailed rules in VARA Marketing Regulations 2023-12 , with constraints even on the use of overseas influencers
- **UK**: **Financial Promotion Order + a 24 -hour cooling-off period** (new customers must wait 24h after applying), with risk-warning + appropriateness-assessment obligations

### J. Representative enforcement cases (1-2 件 / pole)

- **Japan**: Coincheck NEM 580 億円 outflow (2018-01) → business-improvement order (details [[exchanges/coincheck-nem-hack-detailed-analysis]]); DMM Bitcoin Lazarus hack (2024-05) → voluntary wind-down ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]])
- **Korea**: Terra-Luna collapse (2022-05) → Do Kwon indicted by Korean prosecutors, apprehended in Montenegro; Korean prosecutorial investigation expanded over FTX customer losses
- **Hong Kong**: JPEX fraud (2023-09) → 11 名 arrests by Hong Kong police, losses over HK$15 億, the catalyst for improving the Hong Kong SFC warning list
- **Singapore**: Three Arrows Capital bankruptcy (2022-06) → MAS banned 3AC from business for 9  years; Su Zhu/Kyle Davies cooperating with US justice
- **EU**: Binance France AMF warning (2023) → re-authorized in the form of 2024 SAS Société; BaFin's case-by-case approval of Coinbase Germany 2021-06
- **US**: SEC v. Coinbase (filed 2023-06  → 2024-03  dismissed in part); SEC v. Binance.US (2023-06); FTX bankruptcy → SBF 25 -year prison sentence (2024-03)
- **UAE**: Bybit (UAE-headquartered) / withdrawal from the Japan market (2026-03); OKX settled with the US over FIU violations 2025
- **UK**: Binance UK FCA warning → 2024  withdrawal; Copper.co accelerating expansion after authorization

### K. Disclosure / financial reporting / proof-of-reserves

- **Japan**: monthly submission of customer-asset segregation status to JVCEA + annual financial-statement publication (submitted to FSA)
- **Korea**: monthly STR reporting to the FIU + annual renewal audit of KISA ISMS
- **Hong Kong**: monthly returns to the SFC + annual submission of IFRS audited financials + monthly client-asset attestation
- **Singapore**: annual financial statement + assurance report to MAS (monthly customer-asset report for large MPIs)
- **EU**: annual report + key information disclosure + strengthened monitoring under MiCA Article 67 
- **US**: NY BitLicense requires **quarterly financial reports** + **annual audited financials** + **monthly proof-of-reserves recommended**
- **UAE**: **monthly proof-of-reserves attestation obligation** in the VARA Rulebook (one of the strictest frequencies in the world)
- **UK**: disclosure is limited under the MLR → to be formalized with the FSMA expansion

### L. Notable carve-outs / exceptions

- **Japan**: NFTs are in principle outside the VASP scope (judged case-by-case by function); stablecoin issuance by banks / trust banks is a separate framework
- **Korea**: the User Protection Act bans retail derivatives entirely → even institutional CME-type overseas underwriting is restricted
- **Hong Kong**: HKMA stablecoins run in parallel with SFC VATP, dual supervision
- **Singapore**: DBS Digital Exchange is **case-by-case MAS-approved** (separate from the PSA), institution-only
- **EU**: existing NCA-authorized operators have a 18 -month transitional period (2024-12-30 → 2026-07-01) to transition to MiCA
- **US**: an **OCC Federal Trust Charter** fully exempts 50  state MTLs (Anchorage Digital first obtained it 2021-01 , Circle obtained it 2025 )
- **UAE**: DIFC is outside VARA jurisdiction (DFSA alone); ADGM is FSRA-independent (3  systems coexisting within the UAE)
- **UK**: MLR registration is an AML obligation only; market-conduct regulation depends on the FSMA (a two-stage structure)

### Integrated type (single-passport regime)

- **EU MiCA**: 1  license → passporting to 27  countries (the widest in the world)
- **Japan**: FSA single registration, but two-layer with JVCEA self-regulation
- **Korea**: FSC + FIU single, further concentrated by the bank 1:1  rule
- **Singapore / Hong Kong**: single supervision within the city-state / SAR

### Fragmented type (multi-layer regime)

- **US**: federal (FinCEN/SEC/CFTC/OCC) + state (50 -state MTL + NY BitLicense), the most complex in the world
- **UAE**: VARA + DFSA + ADGM-FSRA + federal SCA + Central Bank, with 5  systems coexisting

### Phased build-out type (phased regime)

- **UK**: MLR 2017  (AML-centric, current) → FSMA 2023  expansion (2026-2027  phased) transitioning to full-fledged regulation
- **Korea**: Specified Financial Information Act (2021) → User Protection Act (2024) → stablecoin regulation (planned 2026 ), added in stages

## 3. Implications for global CEX strategy

- **MiCA passporting** intensified the competition to obtain an EU base in 2024-2025  → the configuration of Coinbase EU (Luxembourg) / Kraken EU (Ireland) / Crypto.com EU (Malta) / Binance France is now set
- **US state-by-state MTL costs** reach the tens-of-millions-of-dollars scale for nationwide rollout, resulting in ecosystem concentration in a few major firms
- **UAE VARA**'s low corporate tax + full-stack license + retail liberalization provides a "floor of global trust" → the head-office-relocation trend of Bybit / OKX / Crypto.com
- **APAC three-city division of labor**: the role division of Singapore (institution-oriented) / Hong Kong (retail liberalized, limited to large names) / Japan (retail permitted, strict whitelist) has become fixed
- **US GENIUS Act 2025** + the **OCC Trust route** re-elevate the US to the world's largest stablecoin-issuance hub (Circle / Paxos / USD banks via OCC)

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-vasp-regulatory-timeline]] — Japan timeline (the JP anchor of this matrix)
- [[exchanges/fsa-vasp-registration-system]] — Japan registration regime details
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
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — stablecoin version of the 5 -pole matrix (being prepared in parallel; link to be resolved after both are published)
- [[JapanFG/legal-financial-licenses/INDEX|legal/financial licenses]] — the regulatory boundary on the Japan side

## Sources

- FSA: https://www.fsa.go.jp/en/policy/virtual_currency/
- Korea FSC: https://www.fsc.go.kr/eng/
- HK SFC: https://www.sfc.hk/en/Rules-and-standards/Suitability-requirements/Virtual-asset-related-products-and-services
- MAS: https://www.mas.gov.sg/regulation/payments
- ESMA MiCA: https://www.esma.europa.eu/policy-activities/crypto-assets
- NYDFS BitLicense: https://www.dfs.ny.gov/virtual_currency_businesses
- UAE VARA: https://www.vara.ae/
- UK FCA: https://www.fca.org.uk/firms/cryptoassets

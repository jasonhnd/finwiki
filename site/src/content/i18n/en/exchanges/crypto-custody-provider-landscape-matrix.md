---
source: exchanges/crypto-custody-provider-landscape-matrix
source_hash: 06bf81f11adad1c7
lang: en
status: machine
fidelity: ok
title: "Crypto-asset custody provider landscape matrix — Japan + Global institutional custody 10 社 technology / regulation / customer comparison"
translated_at: 2026-07-29T11:02:23.000Z
---

# Crypto-asset custody provider landscape matrix — Japan + Global institutional custody 10 社 technology / regulation / customer comparison

## TL;DR

The institutional crypto-asset custody market is differentiated along three axes: **(1) technology model (cold storage / MPC / hybrid) × (2) license tier (Trust Charter / VASP / vendor only) × (3) customer segment (CEX / hedge fund / ETF issuer / SWF / pension)**. This matrix compares Ginco / Komainu / Fireblocks Japan, the US-linked Coinbase Custody / Fidelity Digital / Anchorage / BitGo, the Big-Bank-linked BNY Mellon Digital Asset / State Street, and Standard Custody / Custodiem by **technology / regulation / SLA / insurance / Japan license / asset coverage / billing model**. For details, start from [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] / [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]].

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **vendor-axis** counterpart, a synthesis of [[exchanges/jp-institutional-custody-three-pillars|JP 国内 3 強]] and [[exchanges/global-institutional-custody-five-pillars|グローバル 5 本柱]]. For technology deep-dives, see [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] and [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理]]. For the regulatory boundary, see [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]] / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 8 極比較]]. On the Big Bank side, [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] are the anchors.

## Why this matrix matters

- Crypto-asset custody is operated in a **three-layer structure of "VASP self-custody," "B2B vendor infrastructure," and "Qualified Custodian."** VASP self-custody (bitFlyer / Coincheck / bitbank, etc.) is implemented through JVCEA self-regulation + in-house build; B2B vendors (Ginco / Fireblocks / Komainu Connect) provide infrastructure for VASPs / banks; Qualified Custodians (Coinbase Custody / Anchorage / BitGo / Komainu / Fidelity Digital) are entrusted by ETFs / pensions / SWFs.
- **US ETF custody**: verify each US spot BTC ETF's custodian in the current ETF filing and custody agreement. For Japan's regulatory status, see [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]].
- **Checks after the DMM Bitcoin incident**: verify domestic VASP cold / hot-storage requirements in current JVCEA rules and operator disclosures; do not infer B2B-vendor adoption or technology-demand trends from the incident alone.
- **Entry of Big-Bank-linked providers**: verify BNY Mellon and State Street digital-asset services by current service region, target client, regulated entity and contracting entity.

## Per-custodian sections

### A. Japan B2B vendor top 3  (domestic VASP infrastructure supply)

#### A1. Ginco (domestic independent)
- **Head office**: 〒104-0032  27-ban 4号, Hatchobori 3-chome, Chuo-ku, Tokyo (established 2017-12-21, capital 1 億円)
- **Representative**: Ryo Sakane (from 2026-04 , succeeding founder Muuto Morikawa)
- **Shareholders**: Global Brain / DBJ Capital / Miyako Capital / Mitsubishi UFJ Capital (an unlisted independent)
- **Technology**: Ginco Enterprise Wallet combines HSM and MPC. Do not fix adoption or market rank; verify current official Ginco case studies.
- **Customers**: domestic FSA-registered VASPs + securities firms (Mizuho Securities / Daiwa Securities) + trust banks (Mitsubishi UFJ Trust + Sumitomo Mitsui Trust + Trust Base, etc.)
- **Supported assets**: supported assets, onboarding steps and delivery time vary by engagement and date; confirm them in current product materials.
- **Regulation**: B2B infrastructure and regulatory registration are separate questions. Verify provider, registration status and certifications in current FSA / JVCEA and Ginco materials.
- **Billing**: license contract + per-tx billing
- **Strategy**: diversifying with domestically produced HW wallet (AndGo) integration + ST infrastructure + Babylon Labs BTCFi (2025-12) + Canton Network validator (2025-12) + an India development base (2024-05)

#### A2. Komainu (Jersey corporation, Nomura HD-affiliated)
- **Head office**: Jersey, Channel Islands (established 2018 )
- **Shareholders**: a three-party joint venture of Nomura HD + CoinShares + Ledger (2018) → Blockstream led a Series B 2025-01  ($75M, equivalent to 116 億円 in BTC)
- **Technology**: Cold storage + offline signing + MPC + HSM = a cold-custody specialist for institutions / sovereign nations
- **Customers**: UAE government / UK police (seized-crypto-asset safekeeping 2021-01) / Swiss Stock Exchange Bitcoin ETP (2021-01) / OKX (Komainu Connect 2023-06)
- **Supported assets**: BTC-centered + ETH + major PoS-type (custodial staking 2021-)
- **Regulation**: verify the scope of each Jersey JFSC, UK FCA, UAE VARA and Italy OAM authorization in the authority registry. Also verify the Japan provider and registration status in current FSA / JVCEA lists.
- **Billing**: pricing varies by contract, assets and service scope; confirm it in the current official proposal.
- **Strategy**: expanding in Asia with Komainu Connect (exchange-collateral linkage 2023-) + Komainu CORE (Collateral-as-a-Service 2026-04) + Propine acquisition (2024-10  Singapore)
- **Board overlap**: dual anchor of Laser Digital ([[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]) executives + Blockstream

#### A3. Fireblocks Japan (US headquarters, Tokyo base)
- **Head office**: New York City. Verify the current Japan office, legal entity and staffing model in Fireblocks' official company information.
- **Shareholders**: verify funding and investor information in dated Fireblocks announcements; do not treat a past valuation as current enterprise value.
- **Technology**: MPC + Policy Engine + Treasury Management (Fireblocks Network). Do not fix customer or cumulative-volume counts; verify current official metrics.
- **Customers**: centered on global financial institutions + Western Union (USDPT) + the European bank consortium Qivalis of 12 行 (EUR SC) + Mitsui & Co. MDC (Zipangcoin) + SMBC × Ava Labs × TIS SC (2025-04) + Minna Bank + CoinTrade
- **Supported assets**: supported chains and asset classes change regularly; confirm them in the current product list.
- **Regulation**: verify Fireblocks Trust Company, European coverage, the Japan provider / registration status and certifications in current authority and Fireblocks materials.
- **Billing**: Subscription
- **Strategy**: update Japan expansion and capital-market plans only when supported by a dated Fireblocks announcement.

### B. US-affiliated top 4  (Trust Charter Qualified Custodian)

#### B1. Coinbase Custody Trust
- **Established**: 2018, NY DFS Trust Charter
- **Parent**: Coinbase Global (NASDAQ:COIN)
- **AUM**: do not use a fixed estimate; verify current Coinbase disclosure.
- **Technology**: Multi-sig + HSM (in-house hybrid)
- **Customers**: numerous US spot BTC ETFs such as BlackRock IBIT entrusted, hedge funds, institutions
- **Regulation**: NY DFS Trust Charter (2018) + SOC 1/2  Type II + Lloyd's of London insurance
- **Japan**: verify the Japan provider, registration status and custody-service scope in the FSA registry and current Coinbase materials.
- **Billing**: AUM-based + per-tx

#### B2. Fidelity Digital Assets
- **Established**: 2018, MA Trust Charter + NY DFS
- **Parent**: Fidelity Investments
- **AUM**: do not use fixed or undisclosed estimates; verify current Fidelity disclosure.
- **Technology**: Cold storage + offline signing (conservative approach)
- **Customers**: FBTC (Fidelity Wise Origin Bitcoin ETF) entrusted in-house, strong in pensions / foundations
- **Regulation**: MA Trust + NY DFS + SOC 1/2  Type II
- **Japan**: verify the Japan provider and service scope in current Fidelity materials.
- **Billing**: AUM-based

#### B3. Anchorage Digital
- **Established**: the first **Federal Trust Chartered Crypto Bank** in the US in 2021-01  (OCC-approved)
- **AUM**: do not use fixed or undisclosed estimates; verify current Anchorage disclosure.
- **Technology**: publicly described MPC + HSM architecture. Verify the regulatory position in current OCC materials.
- **Customers**: institutions for which federal-regulation compliance is essential (US institutional pensions / foundations / federally supervised financial institutions)
- **Regulation**: **OCC Federal Trust Bank** (a special status fully exempt from 50 -state MTL)
- **Japan**: verify the Japan provider and service scope in current Anchorage materials.
- **Strategy**: verify the legal scope of the OCC charter and peer comparisons in current OCC registries and approval materials.

#### B4. BitGo
- **Established**: 2013  (the industry's oldest)
- **Head office**: Palo Alto, CA
- **Technology**: Multi-sig + MPC hybrid (BitGo Wallet)
- **Customers**: entrusted with the self-custody of many CEXs, ETF custody, institutions
- **Regulation**: SD State Trust Charter + multi-state expansion + BitGo Trust HK (Custodian Trust)
- **Japan**: including the announced Mitsui & Co. MDC partnership, verify the Japan provider and service scope in current official materials.
- **Strategy**: update funding, valuation and listing plans only when supported by a dated BitGo announcement.

### C. Big-Bank-affiliated (G-SIB digital-asset entry)

#### C1. BNY Mellon Digital Asset Custody
- **Parent**: The Bank of New York Mellon Corporation (NYSE: BK). Verify AUC/A and market rank in BNY's latest results.
- **Digital-asset custody**: launched the 2022-10  Crypto Custody Platform, for US institutions
- **Japan base**: [[foreign-financial-institutions/bny-mellon-japan|BNY メロン信託銀行]] + The Bank of New York Mellon Tokyo Branch + BNY Mellon Asset Management Japan
- **Japan digital-asset business**: verify the Japan provider, target assets and client scope in current BNY materials and relevant registries.
- **Customers**: US pensions / foundations / SWFs + joint investment with Fireblocks (2021-03)
- **Strategy**: a pure-wholesale foreign player + the global division of labor of overseas-asset custody for GPIF / major pensions

#### C2. State Street Digital Asset Custody
- **Parent**: State Street Corporation (NYSE: STT). Verify AUC/A and market rank in State Street's latest results.
- **Digital-asset custody**: established the 2021-06  State Street Digital division, for institutions
- **Japan base**: [[foreign-financial-institutions/state-street-japan|State Street Japan]] = State Street Trust Bank + Tokyo Branch + SSGA (the manager of SPDR ETFs) + Charles River Development
- **Japan digital-asset business**: verify the Japan provider, target assets and client scope in current State Street materials and relevant registries.
- **Customers**: GPIF / major pensions / SPDR-type ETFs entrusted
- **Strategy**: a pure-wholesale foreign player + whereas the master trust ([[trust-banks/master-trust-bank|master-trust-bank]]) specializes in domestic trust, State Street does overseas-asset custody for GPIF / major pensions

### D. Other Qualified Custodians + domestic special custody

#### D1. Standard Custody & Trust Company
- **Parent**: PolySign / Standard Chartered linkage
- **Regulation**: NY DFS Trust Charter (2022)
- **Technology**: MPC + HSM
- **Customers**: institutions + hedge funds
- **Japan**: verify the Japan provider and service scope in current Standard Custody materials.

#### D2. Custodiem (former FTX Japan, bitFlyer-affiliated)
- **Parent**: [[exchanges/jp-exchange-bitflyer|bitFlyer]] (acquired 2024 )
- **Regulation**: FSA crypto-asset exchange business (inheriting the former FTX Japan license)
- **Technology**: the former FTX Japan custody infrastructure + bitFlyer integration
- **Customers**: former FTX Japan customers + within the bitFlyer group
- **Strategy**: drew attention as a case of 100% compensation of customer assets after the FTX collapse (see [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]])

## Big comparison matrix table

Source: each provider's official product or company page (URLs below). Supported assets, SLAs, insurance, pricing, AUM, licences and Japan availability can change, so this table records public verification entry points and business scope rather than fixed or undisclosed values.

| Provider | Official public information | Scope recorded here |
|---|---|---|
| **Ginco** | https://www.ginco.co.jp/company/outline | company profile and enterprise-wallet business |
| **Komainu** | https://komainu.com/about/ | institutional custody business |
| **Fireblocks** | https://www.fireblocks.com/about/ | digital-asset infrastructure business |
| **Coinbase Custody** | https://www.coinbase.com/custody | institutional custody product |
| **Fidelity Digital Assets** | https://www.fidelitydigitalassets.com/ | institutional digital-asset services |
| **Anchorage Digital** | https://www.anchorage.com/ | digital-asset platform |
| **BitGo** | https://www.bitgo.com/ | wallet and custody business |
| **BNY** | https://www.bny.com/corporate/jp/ja.html | BNY public business information |
| **State Street** | https://www.statestreet.com/jp | State Street public business information |
| **Standard Custody** | https://www.standardcustody.com/ | custody product and company information |
| **Custodiem** | https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx | current status in Japan's registry |

## Market structure seen through the three-layer structure

### Layer 1: B2B Infrastructure Vendor (customers are VASPs / banks / institutions)

- **Ginco** = domestic independent, domestically produced infrastructure for domestic VASPs / trust banks
- **Fireblocks** = overseas-originated institutional digital-asset infrastructure SaaS; verify current customer metrics in official materials.
- **Komainu** = Nomura-affiliated, for overseas institutions + sovereign nations

Characteristics: the company itself is not a direct custodian (customers bear the custody operations themselves). Subscription + license billing. Functions as the security infrastructure of VASPs / banks.

### Layer 2: Qualified Custodian (customers are ETFs / pensions / institutions)

- **Coinbase Custody** + **Fidelity Digital** + **Anchorage** + **BitGo** + **Komainu** + **Standard Custody**

Characteristics: where a provider performs direct custody, verify the legal entity and charter scope. Confirm pricing and US spot BTC ETF custody roles in current official disclosures and ETF filings.

### Layer 3: Big-Bank-affiliated digital-asset custody (G-SIB-class entry)

- **BNY Mellon Digital Asset Custody** + **State Street Digital**

Characteristics: traditional custody banks of the AUC/A $50T class × digital assets. Provide a trust floor for pensions / SWFs / foundations. In Japan, domestic digital-asset business is not operational, but they function as the receiver when institutions allocate overseas crypto assets.

## Boundary cases

### B1. Komainu's "B2B vendor vs Qualified Custodian" boundary

- As a cold-custody specialist, Komainu does both **direct institutional custody** (operating with Jersey JFSC + UAE VARA without a Trust Charter) and **infrastructure provision** (providing to OKX, etc. via Komainu Connect).
- Whereas a general Qualified Custodian (Coinbase Custody / Anchorage / BitGo) requires an NY DFS Trust, Komainu provides similar functions via the Jersey route → **regulatory arbitrage**

### B2. Fireblocks' "infrastructure vs Custodian" boundary

- Fireblocks was originally B2B SaaS, but in 2024  it acquired Fireblocks Trust Company (a US trust company) → it changed into a structure where direct custody business is also possible.
- **2026  strategy**: it also supports B2C connection with Embedded Wallets (Dynamic 2025-10  acquisition $90M), and expands toward payment-specialized players such as Western Union with Network for Payments

### B3. The **non-operational problem** of Big-Bank-affiliated players' Japan digital-asset business

- BNY Mellon has operated a Crypto Custody Platform from 2022-10  in the US, and State Street also established a Digital Asset division from 2021-06 . However, **in Japan, domestic digital-asset business is not operational** (as of 2026-05 ).
- Required registration and supervision in Japan differ by function and legal entity. Do not infer Big-Bank entry timing or conditions from future GPIF / pension actions.

### B4. Anchorage's Federal Trust Bank position

- Verify Anchorage Digital's OCC charter and authorized activities in current OCC materials. Do not use "only" without a same-date, same-licence-class registry comparison.
- State and federal charters differ in supervisor and authorized scope. Do not infer client eligibility or service scope from the licence label alone.
- **2025  Circle's OCC Trust acquisition** follows this Anchorage precedent → putting in place the precondition for expanded SC use by federally supervised financial institutions.

### B5. Custodiem's "VASP self-custody vs vendor infrastructure" boundary

- Custodiem (former FTX Japan, acquired by bitFlyer in 2024 ) **holds an FSA crypto-asset exchange business license**, positioned to reinforce the bitFlyer group's own custody function.
- Unlike a pure B2B vendor (Ginco / Fireblocks) or an independent Qualified Custodian (Komainu), it is operated as a custody function within a specific VASP group.
- The former FTX Japan customer-return case is a case study of the procedures, asset classification and published outcome at that time; it does not prove compliance across all Japan VASPs.

### B6. Domestic VASP self-custody vs B2B vendor choice

- The majority of domestic VASPs (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank, etc.) operate **self-custody** (in-house build + concurrent use of domestic HSM / Ginco infrastructure).
- For institutions (Crypto Garage / Digital Asset Markets / Laser Digital Japan), partnerships with external vendors (Fireblocks / Ginco / Komainu) are central.
- The combination of self-custody and external vendors differs by operator; verify it in each operator's current security and custody disclosures.

### B7. Mitsui & Co. MDC × BitGo / Fireblocks dual partnership

- In its Zipangcoin (gold-collateralized RWA) issuance, Mitsui & Co. has a dual partnership of **Fireblocks (a multi-chain deployment infrastructure)** + **BitGo (custody connection)**.
- This is a case of "avoiding single-vendor-dependence risk" + "parallel operation of different technology stacks" in a large-enterprise RWA project.

### B8. The trigger for Big-Bank-affiliated players' Japan digital-asset entry

- The triggers for BNY Mellon / State Street to begin Japan digital-asset custody in earnest are:
  1. **GPIF policy** — verify its current published portfolio and any formal policy change
  2. **Approval of a Japan spot BTC ETF** (not approved as of 2026-05 )
  3. **The start of crypto-asset allocation by major life insurers / banks** (as of 2026 , signs of approach such as Dai-ichi Life / Sumitomo Life investing in the JPYC Series B)
- Do not treat these as deterministic entry triggers; update when a Big-Bank Japan entity publishes a formal product, registration and contracting entity.

### B9. The relationship between Coinbase Custody vs Coinbase Japan

- Coinbase Custody Trust (NY DFS Trust) is a subsidiary of Coinbase Global. The entrusted custodian of US spot BTC ETFs (BlackRock IBIT, etc.).
- Separate Coinbase Japan's historical service change from its current registration status by checking the FSA registry and Coinbase announcements.
- **Custody-only entry into Japan**: do not infer undisclosed re-entry intent or economic incentives; update only when provider, registration and product publication are confirmed.

### B10. Regulatory comparison of Komainu's Jersey route

- Compare Komainu's Jersey JFSC registration with a US NY DFS Trust through each authority's current acquisition and maintenance requirements, authorised activities, target clients, and service jurisdictions.
- Verify service availability for US institutions through client requirements, contracting entity, registration, and product disclosures; do not infer it from the licence location alone.
- Verify the purpose of the **2025-01 Blockstream Series B** and any BTC-native asset / Lightning-related services against dated official announcements from both companies.

### B11. The lessons of the domestic VASP DMM Bitcoin closure

- Verify the loss, cause, custody controls, and recurrence-prevention measures for the 2024-05 DMM Bitcoin incident against primary materials from regulators, investigators, and the party.
- Verify domestic VASP adoption of MPC + HSM against dated official implementation cases from each operator and vendor.
- Do not infer adoption growth from the incident; verify it in dated B2B-vendor and Ginco implementation announcements.

## Strategic implications

### Implication 1: comparison of the three-layer structure

- Layer 1 (B2B vendor) = comparison set of Ginco / Fireblocks / Komainu
- Layer 2  (Qualified Custodian) = Coinbase / Fidelity / Anchorage / BitGo + Komainu
- Layer 3  (Big Bank) = BNY Mellon / State Street
- Compare providers, target clients, products, and registration status for each layer in Japan using dated official materials.

### Implication 2: continued verification of cold-storage requirements

- Verify domestic VASP cold-storage requirements in current JVCEA rules and operator disclosures.
- Verify MPC + HSM adoption and demand trends in dated vendor implementation cases.

### Implication 3: connection with institutional RWA + ST digital securities

- Verify custody use in Mitsui & Co. MDC / Progmat ST issuance / Crypto Garage institutional OTC and similar projects against dated official announcements for each project.
- Record linkage between trust banks (Mitsubishi UFJ Trust / SMBC Trust / Mizuho Trust) and custody vendor Ginco only within the scope of disclosed contracts and implementation cases.

### Implication 4: verification conditions for Big-Bank Japan digital-asset entry

- Verify BNY Mellon / State Street Japan digital-asset business through a formal provider, target clients, product and regulatory registration.
- Verify GPIF policy in current official disclosures; do not infer an unpublished crypto allocation or discussion schedule.

### Implication 5: comparison of Anchorage / Circle's OCC Trust federal route

- Compare Anchorage Digital and Circle OCC-related approvals by approval date, legal entity and authorized scope in current OCC materials.
- Update federally supervised institutions' crypto / stablecoin use and any Japan impact only when supported by regulatory and product disclosures.

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]]
- [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]]
- [[exchanges/jp-custody-ginco|Ginco 詳細]]
- [[exchanges/jp-custody-komainu|Komainu 詳細]]
- [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan 詳細]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理ルール]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]]
- [[foreign-financial-institutions/state-street-japan|State Street Japan]]
- [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]] (Komainu Board shared)
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]] (Nomura-affiliated)
- [[exchanges/jp-exchange-bitflyer|bitFlyer]] (Custodiem parent)
- [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]]
- [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus ハック]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|日本 stablecoin 発行体 規制分類マトリクス]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル競合マトリクス]]

## Sources

- Ginco company overview: https://www.ginco.co.jp/company/outline
- Komainu About: https://komainu.com/about/
- Fireblocks About: https://www.fireblocks.com/about/
- BitGo: https://www.bitgo.com/
- Anchorage Digital: https://www.anchorage.com/
- Coinbase Custody: https://www.coinbase.com/custody
- BNY Mellon Japan: https://www.bny.com/corporate/jp/ja.html
- State Street Japan: https://www.statestreet.com/jp
- FSA crypto-asset exchange operator registration list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA member list: https://jvcea.or.jp/member/

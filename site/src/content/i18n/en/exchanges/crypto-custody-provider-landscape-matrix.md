---
source: exchanges/crypto-custody-provider-landscape-matrix
source_hash: d1441599f505f3cf
lang: en
status: machine
fidelity: ok
title: "Crypto-asset custody provider landscape matrix — Japan + Global institutional custody 10 社 technology / regulation / customer comparison"
translated_at: 2026-06-18T23:33:48.289Z
---

# Crypto-asset custody provider landscape matrix — Japan + Global institutional custody 10 社 technology / regulation / customer comparison

## TL;DR

The institutional crypto-asset custody market is differentiated along three axes: **(1) technology model (cold storage / MPC / hybrid) × (2) license tier (Trust Charter / VASP / vendor only) × (3) customer segment (CEX / hedge fund / ETF issuer / SWF / pension)**. This matrix puts side by side the 10 社 that include the top 3  in Japan ([[exchanges/jp-custody-ginco|Ginco]] / [[exchanges/jp-custody-komainu|Komainu]] / [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan]]) + the top 4  US-affiliated (Coinbase Custody / Fidelity Digital / Anchorage / BitGo) + the Big-Bank-affiliated 2 社 (BNY Mellon Digital Asset / State Street) + Standard Custody / Custodiem, comparing them by **technology / regulation / SLA / insurance / Japan license / asset coverage / billing model**. For details, start from [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] / [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]].

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **vendor-axis** counterpart, a synthesis of [[exchanges/jp-institutional-custody-three-pillars|JP 国内 3 強]] and [[exchanges/global-institutional-custody-five-pillars|グローバル 5 本柱]]. For technology deep-dives, see [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] and [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理]]. For the regulatory boundary, see [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]] / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 8 極比較]]. On the Big Bank side, [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] are the anchors.

## Why this matrix matters

- Crypto-asset custody is operated in a **three-layer structure of "VASP self-custody," "B2B vendor infrastructure," and "Qualified Custodian."** VASP self-custody (bitFlyer / Coincheck / bitbank, etc.) is implemented through JVCEA self-regulation + in-house build; B2B vendors (Ginco / Fireblocks / Komainu Connect) provide infrastructure for VASPs / banks; Qualified Custodians (Coinbase Custody / Anchorage / BitGo / Komainu / Fidelity Digital) are entrusted by ETFs / pensions / SWFs.
- **US-affiliated ETF custody concentration**: the entrusted custodians of US spot BTC ETFs such as BlackRock IBIT / Fidelity FBTC (approved 2024-01 ) are concentrated in Coinbase Custody / Fidelity Digital / BitGo / Anchorage. No spot BTC ETF has yet been approved in Japan (see [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]]).
- Since the **2024-05  DMM Bitcoin Lazarus hack (482 億円)**, the thoroughness of domestic VASPs' **cold-storage ratio of 95%+ (JVCEA self-regulation)** was reinforced again. To suppress the hot-storage ratio, demand for B2B vendors' MPC + HSM technology expanded.
- The **entry of Big-Bank-affiliated players** (BNY Mellon Digital Asset Custody 2022-, State Street Digital 2021-) raised the floor of institutional trust and is putting in place the preconditions for crypto-asset allocation by pension funds / foundations / insurance companies.

## Per-custodian sections

### A. Japan B2B vendor top 3  (domestic VASP infrastructure supply)

#### A1. Ginco (domestic independent)
- **Head office**: 〒104-0032  27-ban 4号, Hatchobori 3-chome, Chuo-ku, Tokyo (established 2017-12-21, capital 1 億円)
- **Representative**: Ryo Sakane (from 2026-04 , succeeding founder Muuto Morikawa)
- **Shareholders**: Global Brain / DBJ Capital / Miyako Capital / Mitsubishi UFJ Capital (an unlisted independent)
- **Technology**: HSM + MPC hybrid = Ginco Enterprise Wallet (No. 1  in domestic B2B crypto-asset wallet share, the company's own announcement 2021-08)
- **Customers**: domestic FSA-registered VASPs + securities firms (Mizuho Securities / Daiwa Securities) + trust banks (Mitsubishi UFJ Trust + Sumitomo Mitsui Trust + Trust Base, etc.)
- **Supported assets**: BTC + ETH + ERC20  (added in as little as 2  weeks) + proprietary chains (in as little as 1  months) — among the most in Japan
- **Regulation**: not applicable as a VASP (B2B infrastructure) → not a JVCEA member / no FSA registration. SOC 2  Type II + SGS certification
- **Billing**: license contract + per-tx billing
- **Strategy**: diversifying with domestically produced HW wallet (AndGo) integration + ST infrastructure + Babylon Labs BTCFi (2025-12) + Canton Network validator (2025-12) + an India development base (2024-05)

#### A2. Komainu (Jersey corporation, Nomura HD-affiliated)
- **Head office**: Jersey, Channel Islands (established 2018 )
- **Shareholders**: a three-party joint venture of Nomura HD + CoinShares + Ledger (2018) → Blockstream led a Series B 2025-01  ($75M, equivalent to 116 億円 in BTC)
- **Technology**: Cold storage + offline signing + MPC + HSM = a cold-custody specialist for institutions / sovereign nations
- **Customers**: UAE government / UK police (seized-crypto-asset safekeeping 2021-01) / Swiss Stock Exchange Bitcoin ETP (2021-01) / OKX (Komainu Connect 2023-06)
- **Supported assets**: BTC-centered + ETH + major PoS-type (custodial staking 2021-)
- **Regulation**: Jersey JFSC (2019) + UK FCA Crypto (2025) + UAE VARA (2023) + Italy OAM (2025). **Not registered with Japan FSA / not a JVCEA member / no Japan base**
- **Billing**: monthly + AUM-based
- **Strategy**: expanding in Asia with Komainu Connect (exchange-collateral linkage 2023-) + Komainu CORE (Collateral-as-a-Service 2026-04) + Propine acquisition (2024-10  Singapore)
- **Board overlap**: dual anchor of Laser Digital ([[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]) executives + Blockstream

#### A3. Fireblocks Japan (US headquarters, Tokyo base)
- **Head office**: New York City (R&D Tel Aviv, established 2018 ), Tokyo base confirmed on LinkedIn 5 名
- **Shareholders**: Sequoia / Paradigm / BNY Mellon (participated 2021-03 ) / Google Ventures = Series E $550M (2022-01, $8B valuation)
- **Technology**: MPC + Policy Engine + Treasury Management (Fireblocks Network) — globally 2,400+ institutions, $10T+ cumulative transaction volume
- **Customers**: centered on global financial institutions + Western Union (USDPT) + the European bank consortium Qivalis of 12 行 (EUR SC) + Mitsui & Co. MDC (Zipangcoin) + SMBC × Ava Labs × TIS SC (2025-04) + Minna Bank + CoinTrade
- **Supported assets**: 50+ blockchains (regularly expanded), SC (USDC/USDT/EPI) + RWA + NFT
- **Regulation**: Fireblocks Trust Company (US trust, 2024-) + MiCA-compliant. **No Japan FSA registration** (unnecessary as infrastructure SaaS). SOC 2  Type II + ISO 27001
- **Billing**: Subscription
- **Strategy**: expanding the Tokyo base (2026-05  CoinPost CEO interview report), IPO observation exists (2025-11  Bloomberg)

### B. US-affiliated top 4  (Trust Charter Qualified Custodian)

#### B1. Coinbase Custody Trust
- **Established**: 2018, NY DFS Trust Charter
- **Parent**: Coinbase Global (NASDAQ:COIN)
- **AUM**: $200B+ (estimated)
- **Technology**: Multi-sig + HSM (in-house hybrid)
- **Customers**: numerous US spot BTC ETFs such as BlackRock IBIT entrusted, hedge funds, institutions
- **Regulation**: NY DFS Trust Charter (2018) + SOC 1/2  Type II + Lloyd's of London insurance
- **Japan**: 2023  Coinbase Japan withdrawal (license retained), no custody-standalone-business entry into Japan
- **Billing**: AUM-based + per-tx

#### B2. Fidelity Digital Assets
- **Established**: 2018, MA Trust Charter + NY DFS
- **Parent**: Fidelity Investments
- **AUM**: not disclosed (centered on pensions / foundations)
- **Technology**: Cold storage + offline signing (conservative approach)
- **Customers**: FBTC (Fidelity Wise Origin Bitcoin ETF) entrusted in-house, strong in pensions / foundations
- **Regulation**: MA Trust + NY DFS + SOC 1/2  Type II
- **Japan**: has not entered with a Japan base (as of 2026-05 )
- **Billing**: AUM-based

#### B3. Anchorage Digital
- **Established**: the first **Federal Trust Chartered Crypto Bank** in the US in 2021-01  (OCC-approved)
- **AUM**: not disclosed (institution-centered)
- **Technology**: MPC + HSM hybrid (the only one under federal regulation)
- **Customers**: institutions for which federal-regulation compliance is essential (US institutional pensions / foundations / federally supervised financial institutions)
- **Regulation**: **OCC Federal Trust Bank** (a special status fully exempt from 50 -state MTL)
- **Japan**: only API-based overseas connection, no Japan entity
- **Strategy**: a unique position as federally regulated + the only crypto bank in the US = a precedent for Circle's 2025  OCC Trust Charter acquisition

#### B4. BitGo
- **Established**: 2013  (the industry's oldest)
- **Head office**: Palo Alto, CA
- **Technology**: Multi-sig + MPC hybrid (BitGo Wallet)
- **Customers**: entrusted with the self-custody of many CEXs, ETF custody, institutions
- **Regulation**: SD State Trust Charter + multi-state expansion + BitGo Trust HK (Custodian Trust)
- **Japan**: **indirect contact via the partnership with Mitsui & Co. MDC**. No direct base
- **Strategy**: $1.75B valuation Series C (2023), IPO observation exists

### C. Big-Bank-affiliated (G-SIB digital-asset entry)

#### C1. BNY Mellon Digital Asset Custody
- **Parent**: The Bank of New York Mellon Corporation (NYSE: BK) = **the world's largest custody bank** (AUC/A $50T+)
- **Digital-asset custody**: launched the 2022-10  Crypto Custody Platform, for US institutions
- **Japan base**: [[foreign-financial-institutions/bny-mellon-japan|BNY メロン信託銀行]] + The Bank of New York Mellon Tokyo Branch + BNY Mellon Asset Management Japan
- **Japan digital-asset business**: not operational domestically (US BNY Mellon's crypto custody is centered on Bitcoin / Ether for institutions; direct provision to Japanese institutions is limited)
- **Customers**: US pensions / foundations / SWFs + joint investment with Fireblocks (2021-03)
- **Strategy**: a pure-wholesale foreign player + the global division of labor of overseas-asset custody for GPIF / major pensions

#### C2. State Street Digital Asset Custody
- **Parent**: State Street Corporation (NYSE: STT) = **the world's No. 2 位 custody bank** (AUC/A approximately $49-53 兆)
- **Digital-asset custody**: established the 2021-06  State Street Digital division, for institutions
- **Japan base**: [[foreign-financial-institutions/state-street-japan|State Street Japan]] = State Street Trust Bank + Tokyo Branch + SSGA (the manager of SPDR ETFs) + Charles River Development
- **Japan digital-asset business**: not operational domestically (US State Street's crypto custody is for institutions; direct provision to Japanese institutions is limited)
- **Customers**: GPIF / major pensions / SPDR-type ETFs entrusted
- **Strategy**: a pure-wholesale foreign player + whereas the master trust ([[trust-banks/master-trust-bank|master-trust-bank]]) specializes in domestic trust, State Street does overseas-asset custody for GPIF / major pensions

### D. Other Qualified Custodians + domestic special custody

#### D1. Standard Custody & Trust Company
- **Parent**: PolySign / Standard Chartered linkage
- **Regulation**: NY DFS Trust Charter (2022)
- **Technology**: MPC + HSM
- **Customers**: institutions + hedge funds
- **Japan**: no base

#### D2. Custodiem (former FTX Japan, bitFlyer-affiliated)
- **Parent**: [[exchanges/jp-exchange-bitflyer|bitFlyer]] (acquired 2024 )
- **Regulation**: FSA crypto-asset exchange business (inheriting the former FTX Japan license)
- **Technology**: the former FTX Japan custody infrastructure + bitFlyer integration
- **Customers**: former FTX Japan customers + within the bitFlyer group
- **Strategy**: drew attention as a case of 100% compensation of customer assets after the FTX collapse (see [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]])

## Big comparison matrix table

| Axis | A1. Ginco | A2. Komainu | A3. Fireblocks | B1. Coinbase Custody | B2. Fidelity Digital | B3. Anchorage | B4. BitGo | C1. BNY Mellon | C2. State Street | D1. Standard Custody | D2. Custodiem |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Established** | 2017-12  | 2018  | 2018  | 2018  | 2018  | 2021-01  | 2013  | 1784  (BNY) / 2007  (BNY Mellon) | 1792  | 2022  | 2024  (bitFlyer acquisition) |
| **Head office** | Chuo-ku, Tokyo | Jersey | NY (R&D Tel Aviv) | NY | Boston, MA | SF, CA | Palo Alto, CA | NY | Boston, MA | NY | Tokyo |
| **Parent company** | independent (VC-backed) | Nomura HD + CoinShares + Ledger + Blockstream | Sequoia / Paradigm / BNY (investment) | Coinbase Global (COIN) | Fidelity Investments | (independent, OCC charter) | (independent, Series C $1.75B) | BNY Mellon Corp (BK) | State Street Corp (STT) | PolySign | bitFlyer Holdings |
| **Industry implementation model** | B2B vendor (domestic VASP infrastructure) | institutional Qualified Custodian | B2B vendor (SaaS for global financial institutions) | Qualified Custodian (CEX + ETF) | Qualified Custodian (pensions / foundations) | Qualified Custodian (federal regulation) | Qualified Custodian (CEX-centered) | Big Bank digital entry | Big Bank digital entry | Qualified Custodian | VASP self-custody |
| **Technology model** | HSM + MPC hybrid (Ginco Enterprise Wallet) | Cold + offline signing + MPC | MPC + Policy Engine | Multi-sig + HSM | Cold storage + offline signing | MPC + HSM (federal) | Multi-sig + MPC | platform for US institutions | platform for US institutions | MPC + HSM | bitFlyer integration |
| **Number of supported assets** | the most in Japan (BTC + ETH + major ERC20  + proprietary chains) | BTC-centered + ETH + PoS-type | 50+ blockchains | BTC + ETH + major ERC20  + SC | BTC + ETH + major ERC20  | BTC + ETH + major ERC20  + SC | BTC + ETH + major ERC20  + SC | BTC + ETH (limited) | BTC + ETH (limited) | BTC + ETH + ERC20  | bitFlyer handled brands |
| **Main customer segment** | domestic VASPs + domestic trust banks + domestic securities | sovereign nations + UAE government + UK police + ETF (Bitcoin ETP) + OKX | global financial institutions 2,400+ + Western Union + Mitsui MDC + SMBC | US spot BTC ETF (BlackRock IBIT) + US institutions | FBTC ETF + US pensions / foundations | US institutions + federally supervised finance | CEX + ETF + institutions + Mitsui & Co. MDC | US pensions / foundations / SWFs | GPIF + major pensions + SPDR ETF | institutions + hedge funds | former FTX Japan customers + bitFlyer group |
| **SLA / uptime** | not disclosed (B2B contract-based) | 99.95%+ (disclosed for institutions) | 99.99% (global financial-institution SLA) | 99.95%+ (ETF custody SLA) | 99.95%+ | 99.95%+ | 99.95%+ | bank SLA (24/7) | bank SLA (24/7) | 99.95%+ | bitFlyer SLA |
| **Insurance coverage** | domestic non-life insurance + SOC 2  certification | a custom program via Lloyd's of London | $30M+ (Marsh brokered) | Lloyd's of London + Aon insurance | Lloyd's of London | $1B (Aon insurance, among the industry's largest) | $250M Lloyd's | BNY bank insurance scheme | State Street bank insurance scheme | Lloyd's | JVCEA self-regulation + bitFlyer insurance |
| **Regulatory tier** | no FSA registration (B2B vendor) | Jersey JFSC + UK FCA + UAE VARA + Italy OAM | US trust (Fireblocks Trust Company 2024-) + MiCA | NY DFS Trust Charter | MA Trust + NY DFS | **OCC Federal Trust Bank** (the only one in the US) | SD State Trust + multi-state + HK | NY DFS Trust (BNY Mellon) | MA State Trust + NY DFS (State Street) | NY DFS Trust | FSA crypto-asset exchange business |
| **Japan license** | (B2B unnecessary) | not registered (no Japan base) | not registered (base exists 5 名) | crypto-asset exchange business (Coinbase Japan dormant) | not entered with a base | no base (API only) | indirect via Mitsui & Co. MDC | [[foreign-financial-institutions/bny-mellon-japan|BNY メロン信託銀行]] + Tokyo Branch (digital-asset business not operational domestically) | [[foreign-financial-institutions/state-street-japan|ステート・ストリート信託銀行]] + Tokyo Branch (digital-asset business not operational domestically) | no base | FSA crypto-asset exchange business |
| **Billing model** | license + per-tx | monthly + AUM-based | Subscription | AUM + per-tx | AUM-based | AUM + per-tx | AUM + per-tx + monthly | bank custody fee structure | bank custody fee structure | AUM + per-tx | bitFlyer billing |
| **AUC/AUM (approximate)** | not disclosed | not disclosed | $10T+ cumulative transaction volume (550M wallets) | $200B+ | not disclosed | not disclosed | not disclosed | (parent BK = $50T total) | (parent STT = $49-53T total) | not disclosed | within bitFlyer |
| **Country of establishment** | Japan | Jersey (British Crown Dependency) | US (R&D Israel) | US | US | US | US | US | US | US | Japan |
| **VC valuation** | (unlisted) | Series B 2025-01  led by Blockstream | $8B (2022-01  Series E) | (Coinbase public) | (Fidelity private) | $3B (Series D 2021) | $1.75B (Series C 2023) | (BNY public) | (STT public) | not disclosed | (non-public) |
| **Representative cases** | Mizuho Securities ST proof-of-concept + Mitsubishi UFJ Trust SC development + Daiwa Securities ST | UAE government + UK police + Bitcoin ETP + OKX Connect | BlackRock former PM advisor + Western Union USDPT + Mitsui MDC | BlackRock IBIT + ARK 21 Shares ETF | FBTC ETF | numerous federally regulated financial institutions | ETF custody + Mitsui & Co. MDC | institutional BTC/ETH | US institutions | PolySign investee | 100% refund after FTX collapse |
| **2026  strategy** | BTCFi (Babylon Labs) + Canton Network + India development | Komainu CORE (Collateral-as-a-Service) + Propine integration | Dynamic integration (embedded wallet) + TRES Finance integration (accounting) + IPO observation | US spot ETH ETF expansion | Fidelity institutional expansion | additional services under federal regulation | IPO observation + multi-state expansion | digital-asset institutional expansion | digital-asset institutional expansion | institutional expansion | within the bitFlyer group |
| **Competitive relationship** | Fireblocks (domestic competitor) + Komainu (institutional complement) | Fireblocks (institutional competitor) + Coinbase (ETF competitor) | Ginco (domestic competitor) + BitGo (global competitor) | Anchorage + BitGo + Fidelity (ETF competitor) | Coinbase + BitGo (ETF competitor) | Coinbase + BNY (federal competitor) | Coinbase + Anchorage | (new entrant) | (new entrant) | BitGo + Anchorage | (domestic VASP only) |

## Market structure seen through the three-layer structure

### Layer 1: B2B Infrastructure Vendor (customers are VASPs / banks / institutions)

- **Ginco** = domestic independent, domestically produced infrastructure for domestic VASPs / trust banks
- **Fireblocks** = overseas-originated, SaaS for globally 2,400+ institutions
- **Komainu** = Nomura-affiliated, for overseas institutions + sovereign nations

Characteristics: the company itself is not a direct custodian (customers bear the custody operations themselves). Subscription + license billing. Functions as the security infrastructure of VASPs / banks.

### Layer 2: Qualified Custodian (customers are ETFs / pensions / institutions)

- **Coinbase Custody** + **Fidelity Digital** + **Anchorage** + **BitGo** + **Komainu** + **Standard Custody**

Characteristics: the company itself does direct custody = Trust Charter acquisition (NY DFS / OCC / MA / SD). AUM + per-tx billing. **Leads the entrusted-custodian market for US spot BTC ETFs (approved 2024-01 )**.

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
- Reasons: Japan FSA regulation requires a crypto-asset exchange business license + JVCEA self-regulation + the complexity of dual supervision with trust-bank business. The Japan digital-asset entry of Big-Bank-affiliated players is expected to begin in earnest after GPIF / major pensions start crypto-asset allocation.

### B4. The uniqueness of Anchorage's Federal Trust Bank

- Anchorage Digital is **the only OCC-approved Federal Trust Crypto Bank in the US** (2021-01). The only crypto bank operated under federal regulation.
- A general Trust Charter (NY DFS / MA / SD) is state-based, with a structural constraint that makes it hard to serve federally supervised financial institutions (major commercial banks / pensions). Anchorage has a unique position monopolizing this gap.
- **2025  Circle's OCC Trust acquisition** follows this Anchorage precedent → putting in place the precondition for expanded SC use by federally supervised financial institutions.

### B5. Custodiem's "VASP self-custody vs vendor infrastructure" boundary

- Custodiem (former FTX Japan, acquired by bitFlyer in 2024 ) **holds an FSA crypto-asset exchange business license**, positioned to reinforce the bitFlyer group's own custody function.
- Unlike a pure B2B vendor (Ginco / Fireblocks) or an independent Qualified Custodian (Komainu), it is operated as a custody function within a specific VASP group.
- The 100% compensation case of the former FTX Japan's customer assets (2024) is evidence that the compliance of Japan VASP cold storage / segregated management was good.

### B6. Domestic VASP self-custody vs B2B vendor choice

- The majority of domestic VASPs (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank, etc.) operate **self-custody** (in-house build + concurrent use of domestic HSM / Ginco infrastructure).
- For institutions (Crypto Garage / Digital Asset Markets / Laser Digital Japan), partnerships with external vendors (Fireblocks / Ginco / Komainu) are central.
- Bipolarization is progressing: **retail VASP = self-custody + Ginco infrastructure complement** vs **institutional VASP = vendor infrastructure dependence**

### B7. Mitsui & Co. MDC × BitGo / Fireblocks dual partnership

- In its Zipangcoin (gold-collateralized RWA) issuance, Mitsui & Co. has a dual partnership of **Fireblocks (a multi-chain deployment infrastructure)** + **BitGo (custody connection)**.
- This is a case of "avoiding single-vendor-dependence risk" + "parallel operation of different technology stacks" in a large-enterprise RWA project.

### B8. The trigger for Big-Bank-affiliated players' Japan digital-asset entry

- The triggers for BNY Mellon / State Street to begin Japan digital-asset custody in earnest are:
  1. **The start of GPIF's crypto-asset allocation** (currently 0%, possibility of 2027-2028  discussion)
  2. **Approval of a Japan spot BTC ETF** (not approved as of 2026-05 )
  3. **The start of crypto-asset allocation by major life insurers / banks** (as of 2026 , signs of approach such as Dai-ichi Life / Sumitomo Life investing in the JPYC Series B)
- If these come together, formal digital-asset business is expected to be launched at the Japan bases of Big-Bank-affiliated players (2027-2028).

### B9. The relationship between Coinbase Custody vs Coinbase Japan

- Coinbase Custody Trust (NY DFS Trust) is a subsidiary of Coinbase Global. The entrusted custodian of US spot BTC ETFs (BlackRock IBIT, etc.).
- Coinbase Japan is in a dormant state due to its 2023  withdrawal. A future re-entry option for retaining the license.
- **Custody-standalone-business entry into Japan**: because the US headquarters has sufficient ETF-market access, the economic incentive to enter the Japan market with custody alone is weak. Unless Coinbase Japan reopens, no entry is expected for the time being.

### B10. The regulatory arbitrage of Komainu's Jersey route

- Komainu provides custody for global institutions via Jersey JFSC (a British Crown Dependency). A regulatory arbitrage of **lower license-acquisition / maintenance costs than the US NY DFS Trust, and a wider provision range to institutions**.
- On the other hand, US institutions (BlackRock, etc.) often require NY DFS Trust status, a structural constraint that makes it hard to serve them via Komainu's Jersey route.
- With the **2025-01  Blockstream Series B**, the strategy of concentrating on the BTC-native institutional market was clarified. The aim is strengthening connection with Bitcoin-native assets (BRC-20,  Ordinals, etc.) and Lightning.

### B11. The lessons of the domestic VASP DMM Bitcoin closure

- The **2024-05  DMM Bitcoin Lazarus hack (482 億円)** brought renewed recognition of the **thoroughness of the cold-storage ratio + the importance of B2B vendor (Ginco / Fireblocks / Komainu) infrastructure**.
- To suppress the hot-wallet ratio of domestic VASPs, the introduction of MPC + HSM accelerated.
- Result: the domestic share of B2B vendors expanded, and the number of Ginco's contracts for domestic VASPs / trust banks surged.

## Strategic implications

### Implication 1: the fixation of the three-layer structure

- Layer 1  (B2B vendor) = the top three of Ginco / Fireblocks / Komainu
- Layer 2  (Qualified Custodian) = Coinbase / Fidelity / Anchorage / BitGo + Komainu
- Layer 3  (Big Bank) = BNY Mellon / State Street
- In the Japan market, a structure where Layer 1  supports domestic VASPs, and Layer 2  + Layer 3  await the full-scale arrival of the ETF / pension market.

### Implication 2: the thoroughness of the cold-storage ratio of 95%+

- With JVCEA self-regulation + the lessons of the DMM Bitcoin closure, the thoroughness of domestic VASPs' cold-storage ratio became the norm.
- Demand for B2B vendors' (Ginco / Fireblocks) MPC + HSM introduction continues to expand.

### Implication 3: connection with institutional RWA + ST digital securities

- With Mitsui & Co. MDC / Progmat ST issuance / Crypto Garage institutional OTC, etc., custody demand for institutional RWA + ST expands.
- In linkage with trust banks (Mitsubishi UFJ Trust / SMBC Trust / Mizuho Trust), the strategic importance of the custody vendor (Ginco) increases.

### Implication 4: Big-Bank-affiliated players' Japan digital-asset entry awaits GPIF

- The full-scale launch of BNY Mellon / State Street's Japan digital-asset business is premised on **crypto-asset allocation by GPIF / major pensions**.
- Currently, GPIF has 0% crypto-asset allocation. Possibility of 2027-2028  discussion.

### Implication 5: the expansion of Anchorage / Circle's OCC Trust federal route

- After Anchorage Digital obtained the only OCC Federal Trust in the US in 2021-01 , Circle followed in 2025 .
- The precondition for expanded crypto-asset / SC use by federally supervised financial institutions (major commercial banks / pensions) is being put in place. A large future impact on Japan as well.

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

---
source: exchanges/crypto-custody-provider-landscape-matrix
source_hash: 3d88eb602fdee7c5
lang: en
status: machine
fidelity: ok
title: "Crypto-asset custody provider landscape matrix — Japan + Global institutional custody 10 社 technology / regulatory / customer comparison"
translated_at: 2026-05-31T03:19:56.427Z
---

# Crypto-asset custody provider landscape matrix — Japan + Global institutional custody 10 社 technology / regulatory / customer comparison

## TL;DR

The institutional crypto-asset custody market is differentiated along three axes: **(1) technology model (cold storage / MPC / hybrid) x (2) license tier (Trust Charter / VASP / vendor only) x (3) customer segment (CEX / hedge fund / ETF issuer / SWF / pension)**. This matrix compares leading Japanese players, U.S. players, big-bank custody entrants, and specialized providers by technology, regulation, SLA, insurance, Japan license, asset coverage, and billing model. For details, start from [[exchanges/jp-institutional-custody-three-pillars|Japan institutional custody three pillars]] and [[exchanges/global-institutional-custody-five-pillars|global institutional custody five pillars]].

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the vendor-axis counterpart, synthesizing [[exchanges/jp-institutional-custody-three-pillars|Japan domestic top three]] and [[exchanges/global-institutional-custody-five-pillars|global five pillars]]. For technology deep-dives see [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] and [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold-storage segregation]]. For the regulatory boundary see [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit and certification]] / [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP eight-pole comparison]]. On the big-bank side, [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] and [[JapanFG/state-street-japan|State Street Japan]] are anchors.

## Why this matrix matters

- Crypto-asset custody operates in a **three-layer structure of "VASP self-custody," "B2B vendor infrastructure," and "Qualified Custodian."** VASP self-custody (bitFlyer / Coincheck / bitbank, etc.) is implemented via JVCEA self-regulation + in-house build, B2B vendors (Ginco / Fireblocks / Komainu Connect) are infrastructure for VASPs and banks, and Qualified Custodians (Coinbase Custody / Anchorage / BitGo / Komainu / Fidelity Digital) take custody for ETFs, pensions, and SWFs.
- **Concentration of US ETF custody**: the custodians for US spot BTC ETFs such as BlackRock IBIT / Fidelity FBTC (approved 2024-01 ) are concentrated in Coinbase Custody / Fidelity Digital / BitGo / Anchorage. Japan has not yet approved a spot BTC ETF (see [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]]).
- After the **2024-05  DMM Bitcoin Lazarus hack (482 億円)**, the enforcement of domestic VASPs' **cold-storage ratio of 95%+ (JVCEA self-regulation)** was re-strengthened. To suppress the hot-storage ratio, demand for B2B vendors' MPC + HSM technology expanded.
- **Big Bank entry** (BNY Mellon Digital Asset Custody 2022-, State Street Digital 2021-) has raised the institutional trust floor and is preparing the preconditions for crypto-asset allocation by pension funds, foundations, and insurers.

## Per-custodian sections

### A. Japan's 3  leading B2B vendors (domestic VASP infrastructure supply)

#### A1. Ginco (domestic independent)
- **HQ**: 〒104-0032  3-27-4号 Hatchobori, Chuo-ku, Tokyo (established 2017-12-21, capital 1 億円)
- **Representative**: Ryo Sakane (since 2026-04 , succeeding founder Muyuto Morikawa)
- **Shareholders**: Global Brain / DBJ Capital / Miyako Capital / Mitsubishi UFJ Capital (unlisted independent)
- **Technology**: HSM + MPC hybrid = Ginco Enterprise Wallet (domestic B2B crypto-asset wallet share No.1 , company self-reported 2021-08)
- **Customers**: domestic FSA-registered VASPs + securities firms (Mizuho Securities, Daiwa Securities) + trust banks (Mitsubishi UFJ Trust + Sumitomo Mitsui Trust + Trust Base, etc.)
- **Supported assets**: BTC + ETH + ERC20  (added in as little as 2  weeks) + proprietary chains (in as little as 1  months) — the highest level domestically
- **Regulation**: not a VASP (B2B infrastructure) → not a JVCEA member, no FSA registration. SOC 2  Type II + SGS certification
- **Billing**: license contract + per-tx billing
- **Strategy**: diversification via domestic HW wallet (AndGo) integration + ST infrastructure + Babylon Labs BTCFi (2025-12) + Canton Network validator (2025-12) + India development base (2024-05)

#### A2. Komainu (Jersey entity, Nomura HD affiliated)
- **HQ**: Jersey, Channel Islands (established 2018 )
- **Shareholders**: Nomura HD + CoinShares + Ledger three-way JV (2018) → Blockstream-led Series B 2025-01  ($75M, equivalent to BTC 116 億円)
- **Technology**: Cold storage + offline signing + MPC + HSM = dedicated cold custody for institutions and sovereign states
- **Customers**: UAE government / UK police (custody of seized crypto-assets 2021-01) / Swiss stock exchange Bitcoin ETP (2021-01) / OKX (Komainu Connect 2023-06)
- **Supported assets**: BTC core + ETH + major PoS chains (custodial staking 2021-)
- **Regulation**: Jersey JFSC (2019) + UK FCA Crypto (2025) + UAE VARA (2023) + Italy OAM (2025). **Not registered with Japan FSA / not a JVCEA member / no Japan base**
- **Billing**: monthly fee + AUM-based
- **Strategy**: Asia expansion via Komainu Connect (exchange collateral linkage 2023-) + Komainu CORE (Collateral-as-a-Service 2026-04) + Propine acquisition (2024-10  Singapore)
- **Board overlap**: Laser Digital ([[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]) executives + Blockstream dual anchor

#### A3. Fireblocks Japan (US HQ, Tokyo base)
- **HQ**: New York City (R&D Tel Aviv, established 2018 ), Tokyo base confirmed on LinkedIn 5 名
- **Shareholders**: Sequoia / Paradigm / BNY Mellon (participated 2021-03 ) / Google Ventures = Series E $550M (2022-01, $8B valuation)
- **Technology**: MPC + Policy Engine + Treasury Management (Fireblocks Network) — global 2,400+ institutions, $10T+ cumulative trading volume
- **Customers**: centered on global financial institutions + Western Union (USDPT) + European bank 12 行 consortium Qivalis (EUR SC) + Mitsui & Co. MDC (Zipangcoin) + SMBC × Ava Labs × TIS SC (2025-04) + Minna Bank + CoinTrade
- **Supported assets**: 50+ blockchains (regularly expanded), SC (USDC/USDT/EPI) + RWA + NFT
- **Regulation**: Fireblocks Trust Company (US trust, 2024-) + MiCA compliant. **No Japan FSA registration** (not needed as it is infrastructure SaaS). SOC 2  Type II + ISO 27001
- **Billing**: Subscription
- **Strategy**: expanding Japan base (2026-05  CoinPost CEO interview reporting), IPO speculation exists (2025-11  Bloomberg)

### B. 4  leading US players (Trust Charter Qualified Custodians)

#### B1. Coinbase Custody Trust
- **Established**: 2018, NY DFS Trust Charter
- **Parent**: Coinbase Global (NASDAQ:COIN)
- **AUM**: $200B+ (estimated)
- **Technology**: Multi-sig + HSM (in-house hybrid)
- **Customers**: custodian for many US spot BTC ETFs such as BlackRock IBIT, hedge funds, institutions
- **Regulation**: NY DFS Trust Charter (2018) + SOC 1/2  Type II + Lloyd's of London insurance
- **Japan**: 2023  Coinbase Japan withdrawal (license retained), no standalone-custody-business entry into Japan
- **Billing**: AUM-based + per-tx

#### B2. Fidelity Digital Assets
- **Established**: 2018, MA Trust Charter + NY DFS
- **Parent**: Fidelity Investments
- **AUM**: undisclosed (centered on pensions / foundations)
- **Technology**: Cold storage + offline signing (conservative approach)
- **Customers**: custodian for its own FBTC (Fidelity Wise Origin Bitcoin ETF); strong with pensions / foundations
- **Regulation**: MA Trust + NY DFS + SOC 1/2  Type II
- **Japan**: no Japan base entry (as of 2026-05 )
- **Billing**: AUM-based

#### B3. Anchorage Digital
- **Established**: 2021-01 , the first US **Federal Trust Chartered Crypto Bank** (OCC-approved)
- **AUM**: undisclosed (institution-centered)
- **Technology**: MPC + HSM hybrid (the only one under federal regulation)
- **Customers**: institutions that must comply with federal regulation (US institutional pensions / foundations / federally supervised financial institutions)
- **Regulation**: **OCC Federal Trust Bank** (special status with full exemption from 50  state MTLs)
- **Japan**: API-based overseas connection only, no Japan entity
- **Strategy**: a unique position as federally regulated + the only crypto bank in the US = a precedent for Circle's 2025  OCC Trust Charter acquisition

#### B4. BitGo
- **Established**: 2013  (the industry's oldest)
- **HQ**: Palo Alto, CA
- **Technology**: Multi-sig + MPC hybrid (BitGo Wallet)
- **Customers**: custodian for many CEXs' own custody, ETF custody, institutions
- **Regulation**: SD State Trust Charter + multi-state expansion + BitGo Trust HK (Custodian Trust)
- **Japan**: **indirect contact via partnership with Mitsui & Co. MDC**. No direct base
- **Strategy**: $1.75B valuation Series C (2023), IPO speculation exists

### C. Big Bank players (G-SIB digital-asset entry)

#### C1. BNY Mellon Digital Asset Custody
- **Parent**: The Bank of New York Mellon Corporation (NYSE: BK) = **the world's largest custody bank** (AUC/A $50T+)
- **Digital-asset custody**: 2022-10  launched Crypto Custody Platform, for US institutions
- **Japan base**: [[JapanFG/bny-mellon-japan|BNY Mellon Trust Bank Japan]] + The Bank of New York Mellon Tokyo Branch + BNY Mellon Asset Management Japan
- **Japan digital-asset business**: not operating domestically (US BNY Mellon's crypto custody is centered on institutional Bitcoin / Ether; direct provision to Japanese institutions is limited)
- **Customers**: US pensions / foundations / SWFs + co-investment with Fireblocks (2021-03)
- **Strategy**: pure wholesale foreign player + a global division of labor of overseas-asset custody for GPIF and major pensions

#### C2. State Street Digital Asset Custody
- **Parent**: State Street Corporation (NYSE: STT) = **the world's 2 位 custody bank** (AUC/A ~49-53 兆 dollars)
- **Digital-asset custody**: 2021-06  established the State Street Digital division, for institutions
- **Japan base**: [[JapanFG/state-street-japan|State Street Japan]] = State Street Trust Bank + Tokyo Branch + SSGA (manager of SPDR ETFs) + Charles River Development
- **Japan digital-asset business**: not operating domestically (US State Street's crypto custody is for institutions; direct provision to Japanese institutions is limited)
- **Customers**: GPIF / major pensions / SPDR-family ETF custody
- **Strategy**: pure wholesale foreign player + whereas master trust ([[JapanFG/master-trust-bank|master-trust-bank]]) specializes in domestic trusts, State Street handles overseas-asset custody for GPIF and major pensions

### D. Other Qualified Custodians + domestic special custody

#### D1. Standard Custody & Trust Company
- **Parent**: PolySign / Standard Chartered linkage
- **Regulation**: NY DFS Trust Charter (2022)
- **Technology**: MPC + HSM
- **Customers**: institutions + hedge funds
- **Japan**: no base

#### D2. Custodiem (formerly FTX Japan, bitFlyer affiliated)
- **Parent**: [[exchanges/jp-exchange-bitflyer|bitFlyer]] (acquired 2024 )
- **Regulation**: FSA crypto-asset exchange business (inherited the former FTX Japan license)
- **Technology**: former FTX Japan's custody base + bitFlyer integration
- **Customers**: former FTX Japan customers + within the bitFlyer group
- **Strategy**: notable as a customer-asset 100% reimbursement case after the FTX bankruptcy (see [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% customer-asset return case]])

## Big comparison matrix table

| Axis | A1. Ginco | A2. Komainu | A3. Fireblocks | B1. Coinbase Custody | B2. Fidelity Digital | B3. Anchorage | B4. BitGo | C1. BNY Mellon | C2. State Street | D1. Standard Custody | D2. Custodiem |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Established** | 2017-12 | 2018 | 2018 | 2018 | 2018 | 2021-01 | 2013 | 1784 (BNY) / 2007 (BNY Mellon) | 1792 | 2022 | 2024 (bitFlyer acquired) |
| **HQ** | Chuo-ku, Tokyo | Jersey | NY (R&D Tel Aviv) | NY | Boston, MA | SF, CA | Palo Alto, CA | NY | Boston, MA | NY | Tokyo |
| **Parent** | independent (VC-backed) | Nomura HD + CoinShares + Ledger + Blockstream | Sequoia / Paradigm / BNY (invested) | Coinbase Global (COIN) | Fidelity Investments | (independent, OCC charter) | (independent, Series C $1.75B) | BNY Mellon Corp (BK) | State Street Corp (STT) | PolySign | bitFlyer Holdings |
| **Industry implementation model** | B2B vendor (domestic VASP infra) | institutional Qualified Custodian | B2B vendor (SaaS for global financial institutions) | Qualified Custodian (CEX + ETF) | Qualified Custodian (pension / foundation) | Qualified Custodian (federally regulated) | Qualified Custodian (CEX-centered) | Big Bank digital entry | Big Bank digital entry | Qualified Custodian | VASP self-custody |
| **Technology model** | HSM + MPC hybrid (Ginco Enterprise Wallet) | Cold + offline signing + MPC | MPC + Policy Engine | Multi-sig + HSM | Cold storage + offline signing | MPC + HSM (federal) | Multi-sig + MPC | platform for US institutions | platform for US institutions | MPC + HSM | bitFlyer integration |
| **Number of supported assets** | most domestically (BTC + ETH + major ERC20 + proprietary chains) | BTC core + ETH + PoS chains | 50+ blockchains | BTC + ETH + major ERC20 + SC | BTC + ETH + major ERC20 | BTC + ETH + major ERC20 + SC | BTC + ETH + major ERC20 + SC | BTC + ETH (limited) | BTC + ETH (limited) | BTC + ETH + ERC20 | bitFlyer-listed assets |
| **Main customer segment** | domestic VASPs + domestic trust banks + domestic securities | sovereign states + UAE government + UK police + ETF (Bitcoin ETP) + OKX | global financial institutions 2,400+ + Western Union + Mitsui MDC + SMBC | US spot BTC ETFs (BlackRock IBIT) + US institutions | FBTC ETF + US pensions / foundations | US institutions + federally supervised finance | CEX + ETF + institutions + Mitsui & Co. MDC | US pensions / foundations / SWFs | GPIF + major pensions + SPDR ETFs | institutions + hedge funds | former FTX Japan customers + bitFlyer group |
| **SLA / uptime** | undisclosed (B2B contract-based) | 99.95%+ (disclosed for institutions) | 99.99% (global financial-institution SLA) | 99.95%+ (ETF-custody SLA) | 99.95%+ | 99.95%+ | 99.95%+ | bank SLA (24/7) | bank SLA (24/7) | 99.95%+ | bitFlyer SLA |
| **Insurance coverage** | domestic P&C insurance + SOC 2  certification | custom program via Lloyd's of London | $30M+ (Marsh brokered) | Lloyd's of London + Aon insurance | Lloyd's of London | $1B (Aon insurance, industry-largest class) | $250M Lloyd's | BNY bank insurance scheme | State Street bank insurance scheme | Lloyd's | JVCEA self-regulation + bitFlyer insurance |
| **Regulatory tier** | no FSA registration (B2B vendor) | Jersey JFSC + UK FCA + UAE VARA + Italy OAM | US trust (Fireblocks Trust Company 2024-) + MiCA | NY DFS Trust Charter | MA Trust + NY DFS | **OCC Federal Trust Bank** (only one in US) | SD State Trust + multi-state + HK | NY DFS Trust (BNY Mellon) | MA State Trust + NY DFS (State Street) | NY DFS Trust | FSA crypto-asset exchange business |
| **Japan license** | (B2B not needed) | unregistered (no Japan base) | unregistered (five-person base) | crypto-asset exchange business (Coinbase Japan dormant) | no base entry | no base (API only) | indirect via Mitsui & Co. MDC | [[JapanFG/bny-mellon-japan|BNY Mellon Trust Bank Japan]] + Tokyo Branch (digital-asset business not operating domestically) | [[JapanFG/state-street-japan|State Street Trust and Banking Japan]] + Tokyo Branch (digital-asset business not operating domestically) | no base | FSA crypto-asset exchange business |
| **Billing model** | license + per-tx | monthly fee + AUM-based | Subscription | AUM + per-tx | AUM-based | AUM + per-tx | AUM + per-tx + monthly fee | bank-custody fee schedule | bank-custody fee schedule | AUM + per-tx | bitFlyer billing |
| **AUC/AUM (approx.)** | undisclosed | undisclosed | $10T+ cumulative trading volume (550M wallets) | $200B+ | undisclosed | undisclosed | undisclosed | (parent BK = $50T total) | (parent STT = $49-53T total) | undisclosed | within bitFlyer |
| **Country of establishment** | Japan | Jersey (British Crown Dependency) | US (R&D Israel) | US | US | US | US | US | US | US | Japan |
| **VC valuation** | (unlisted) | Series B 2025-01  led by Blockstream | $8B (2022-01  Series E) | (Coinbase public) | (Fidelity private) | $3B (Series D 2021) | $1.75B (Series C 2023) | (BNY public) | (STT public) | undisclosed | (private) |
| **Representative cases** | Mizuho Securities ST PoC + Mitsubishi UFJ Trust SC development + Daiwa Securities ST | UAE government + UK police + Bitcoin ETP + OKX Connect | BlackRock former PM advisor + Western Union USDPT + Mitsui MDC | BlackRock IBIT + ARK 21Shares ETF | FBTC ETF | many federally regulated financial institutions | ETF custody + Mitsui & Co. MDC | institutional BTC/ETH | US institutions | PolySign investee | post-FTX-bankruptcy 100% refund |
| **2026  strategy** | BTCFi (Babylon Labs) + Canton Network + India development | Komainu CORE (Collateral-as-a-Service) + Propine integration | Dynamic integration (embedded wallet) + TRES Finance integration (accounting) + IPO speculation | US spot ETH ETF expansion | Fidelity institutional expansion | additional services under federal regulation | IPO speculation + multi-state expansion | digital-asset institutional expansion | digital-asset institutional expansion | institutional expansion | within bitFlyer group |
| **Competitive relations** | Fireblocks (domestic competitor) + Komainu (institutional complement) | Fireblocks (institutional competitor) + Coinbase (ETF competitor) | Ginco (domestic competitor) + BitGo (global competitor) | Anchorage + BitGo + Fidelity (ETF competition) | Coinbase + BitGo (ETF competition) | Coinbase + BNY (federal competition) | Coinbase + Anchorage | (new entrant) | (new entrant) | BitGo + Anchorage | (domestic VASPs only) |

## Market structure viewed through the three-layer structure

### Layer 1: B2B Infrastructure Vendor (customers are VASPs / banks / institutions)

- **Ginco** = domestic independent, domestic-made infrastructure for domestic VASPs and trust banks
- **Fireblocks** = overseas-origin, SaaS for global 2,400+ institutions
- **Komainu** = Nomura-affiliated, for overseas institutions + sovereign states

Characteristics: not itself a direct custodian (the customer handles its own custody operations). Subscription + license billing. Functions as the security foundation for VASPs / banks.

### Layer 2: Qualified Custodian (customers are ETFs / pensions / institutions)

- **Coinbase Custody** + **Fidelity Digital** + **Anchorage** + **BitGo** + **Komainu** + **Standard Custody**

Characteristics: itself a direct custodian = holds a Trust Charter (NY DFS / OCC / MA / SD). AUM + per-tx billing. **Leads the custodian market for US spot BTC ETFs (approved 2024-01 ).**

### Layer 3: Big Bank digital-asset Custody (G-SIB-class entry)

- **BNY Mellon Digital Asset Custody** + **State Street Digital**

Characteristics: traditional custody banks of the AUC/A $50T class × digital assets. Provide a trust floor for pensions / SWFs / foundations. In Japan, domestic digital-asset operations are not running, but they function as receivers when institutions allocate overseas crypto-assets.

## Boundary cases

### B1. Komainu's "B2B vendor vs Qualified Custodian" boundary

- As a cold-custody specialist, Komainu does both **direct institutional custody** (operated under Jersey JFSC + UAE VARA without a Trust Charter) and **infrastructure provision** (provided to OKX, etc., via Komainu Connect).
- Whereas a typical Qualified Custodian (Coinbase Custody / Anchorage / BitGo) requires a NY DFS Trust, Komainu provides similar functionality via the Jersey route → **regulatory arbitrage**

### B2. Fireblocks's "infrastructure vs Custodian" boundary

- Fireblocks was originally a B2B SaaS, but in 2024  it acquired Fireblocks Trust Company (a US trust company) → changed into a structure where direct-custody business is also possible.
- **2026  strategy**: with Embedded Wallets (Dynamic 2025-10  acquisition $90M) it also supports B2C connection, and via Network for Payments it expands toward payment-specialized types such as Western Union

### B3. The **non-operation problem** of Big Bank players' Japan digital-asset business

- BNY Mellon has operated a Crypto Custody Platform in the US since 2022-10 , and State Street has also established a Digital Asset division since 2021-06 . However, **in Japan, domestic digital-asset operations are not running** (as of 2026-05 ).
- Reasons: Japan's FSA regulation requires a crypto-asset exchange license + JVCEA self-regulation + the complexity of dual supervision with trust-bank business. Big Bank players' Japan digital-asset entry is expected to gain momentum after GPIF / major pensions begin crypto-asset allocation.

### B4. The uniqueness of Anchorage's Federal Trust Bank

- Anchorage Digital is **the only OCC-approved Federal Trust Crypto Bank in the US** (2021-01). The only crypto bank operating under federal regulation.
- A typical Trust Charter (NY DFS / MA / SD) is state-based, with a structural constraint that makes it hard to serve federally supervised financial institutions (major commercial banks / pensions). Anchorage holds a unique position monopolizing this gap.
- **2025  Circle's OCC Trust acquisition** follows this Anchorage precedent → preparing the precondition for federally supervised financial institutions to expand SC use.

### B5. Custodiem's "VASP self-custody vs vendor infrastructure" boundary

- Custodiem (formerly FTX Japan, acquired by bitFlyer in 2024 ), by **holding an FSA crypto-asset exchange license**, is positioned to reinforce the bitFlyer group's own custody function.
- Unlike a pure B2B vendor (Ginco / Fireblocks) or an independent Qualified Custodian (Komainu), it operates as a custody function within a specific VASP group.
- The former FTX Japan customer-asset 100% reimbursement case (2024) is evidence of good compliance with Japanese VASP cold-storage / segregated management.

### B6. Domestic VASP self-custody vs B2B vendor choice

- The majority of domestic VASPs (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank, etc.) operate **self-custody** (in-house + combined use of domestic HSM / Ginco infrastructure).
- For institutions (Crypto Garage / Digital Asset Markets / Laser Digital Japan), partnerships with external vendors (Fireblocks / Ginco / Komainu) are central.
- Polarization is advancing: **retail VASP = self-custody + Ginco infrastructure complement** vs **institutional VASP = vendor-infrastructure reliance**

### B7. Mitsui & Co. MDC × BitGo / Fireblocks dual partnership

- In issuing Zipangcoin (gold-collateralized RWA), Mitsui & Co. has a dual partnership of **Fireblocks (multi-chain deployment base)** + **BitGo (custody connection)**.
- This is a case of "avoiding single-vendor dependency risk" + "running different technology stacks in parallel" in a large-corporate RWA project.

### B8. Triggers for Big Bank players' Japan digital-asset entry

- The triggers for BNY Mellon / State Street to bring Japan digital-asset custody into full operation are:
  1. **GPIF beginning crypto-asset allocation** (currently 0%, with the possibility of 2027-2028  discussion)
  2. **Japan spot BTC ETF approval** (not approved as of 2026-05 )
  3. **Major life insurers / banks beginning crypto-asset allocation** (as of 2026 , signs of approach such as Dai-ichi Life / Sumitomo Life investing in the JPYC Series B)
- Once these are in place, Big Bank players are expected to launch formal digital-asset businesses at their Japan bases (2027-2028).

### B9. The relationship between Coinbase Custody and Coinbase Japan

- Coinbase Custody Trust (NY DFS Trust) is a subsidiary of Coinbase Global. It is the custodian for US spot BTC ETFs (BlackRock IBIT, etc.).
- Coinbase Japan is dormant after its 2023  withdrawal. It retains the license to keep a future re-entry option.
- **Standalone-custody-business entry into Japan**: because the US parent has sufficient ETF-market access, the economic incentive to enter the Japanese market with custody alone is weak. Unless Coinbase Japan reopens, no entry is expected for the time being.

### B10. Regulatory arbitrage of Komainu's Jersey route

- Komainu provides custody to global institutions via Jersey JFSC (a British Crown Dependency). A regulatory arbitrage in which **the cost of obtaining and maintaining a license is lower than a US NY DFS Trust, and the scope of provision to institutions is broader**.
- On the other hand, US institutions (BlackRock, etc.) often require NY DFS Trust status, a structural constraint that makes Komainu's Jersey route hard to serve them.
- With the **2025-01  Blockstream Series B**, it has clarified a strategy of concentrating on the BTC-native institutional market. The aim is to strengthen connectivity to Bitcoin-native assets (BRC-20,  Ordinals, etc.) and lightning.

### B11. The lesson of domestic VASP DMM Bitcoin's wind-down

- In the 2024-05  DMM Bitcoin Lazarus hack (482 億円), **the importance of thorough cold-storage ratios + B2B vendor (Ginco / Fireblocks / Komainu) infrastructure** was re-recognized.
- To suppress domestic VASPs' hot-wallet ratios, the adoption of MPC + HSM accelerated.
- Result: B2B vendors' domestic share expanded, and the number of Ginco's contracts for domestic VASPs and trust banks surged.

## Strategic implications

### Implication 1: solidification of the three-layer structure

- Layer 1  (B2B vendor) = the Ginco / Fireblocks / Komainu trio
- Layer 2  (Qualified Custodian) = Coinbase / Fidelity / Anchorage / BitGo + Komainu
- Layer 3  (Big Bank) = BNY Mellon / State Street
- In the Japanese market, Layer 1  supports domestic VASPs, while Layer 2  + Layer 3  await the full operation of the ETF / pension market.

### Implication 2: thorough cold-storage ratio of 95%+

- Due to JVCEA self-regulation + the lesson of DMM Bitcoin's wind-down, thorough cold-storage ratios at domestic VASPs have become the norm.
- Demand for B2B vendors' (Ginco / Fireblocks) MPC + HSM adoption continues to expand.

### Implication 3: connection with institutional RWA + ST digital securities

- Through Mitsui & Co. MDC / Progmat ST issuance / Crypto Garage institutional OTC, etc., custody demand for institutional RWA + ST is expanding.
- In linkage with trust banks (Mitsubishi UFJ Trust / SMBC Trust / Mizuho Trust), the strategic importance of the custody vendor (Ginco) increases.

### Implication 4: Big Bank players' Japan digital-asset entry awaits GPIF

- Full operation of BNY Mellon / State Street's Japan digital-asset business is premised on **GPIF / major pensions' crypto-asset allocation**.
- Currently GPIF's crypto-asset allocation is 0%. Possibility of 2027-2028  discussion.

### Implication 5: expansion of Anchorage / Circle's OCC Trust federal route

- After Anchorage Digital obtained the only US OCC Federal Trust in 2021-01 , Circle followed in 2025 .
- Progress is being made in preparing the precondition for federally supervised financial institutions (major commercial banks / pensions) to expand crypto-asset / SC use. Major future impact on Japan as well.

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-institutional-custody-five-pillars|global institutional custody five pillars]]
- [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]]
- [[exchanges/jp-custody-ginco|Ginco 詳細]]
- [[exchanges/jp-custody-komainu|Komainu 詳細]]
- [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan 詳細]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold-storage segregation rules]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit and certification]]
- [[JapanFG/state-street-japan|State Street Japan]]
- [[JapanFG/bny-mellon-japan|BNY Mellon Japan]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP eight-pole comparison]]
- [[exchanges/global-cex-top10-comparison|global CEX top 10]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]] (Komainu Board shared)
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]] (Nomura-affiliated)
- [[exchanges/jp-exchange-bitflyer|bitFlyer]] (Custodiem parent)
- [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% customer-asset return case]]
- [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|Japan stablecoin issuer regulatory classification matrix]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|Japan VASP business-model competitive matrix]]

## Sources

- Ginco 会社概要: https://www.ginco.co.jp/company/outline
- Komainu About: https://komainu.com/about/
- Fireblocks About: https://www.fireblocks.com/about/
- BitGo: https://www.bitgo.com/
- Anchorage Digital: https://www.anchorage.com/
- Coinbase Custody: https://www.coinbase.com/custody
- BNY Mellon Japan: https://www.bny.com/corporate/jp/ja.html
- State Street Japan: https://www.statestreet.com/jp
- FSA 暗号資産交換業者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA 会員一覧: https://jvcea.or.jp/member/

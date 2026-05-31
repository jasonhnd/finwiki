---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: f0cb0e25ad6120f7
lang: en
status: machine
fidelity: ok
title: "Brazil DREX × Mexico Banxico CoDi × Latin America CBDC and Stablecoin Parallel Architecture 2026"
translated_at: 2026-05-31T06:16:15.703Z
---

# Brazil DREX × Mexico Banxico CoDi × Latin America CBDC and Stablecoin Parallel Architecture 2026

## TL;DR

Brazil and Mexico entered the three-track parallel phase of "CBDC + private stablecoin + USD stablecoin grey-zone expansion" simultaneously in 2026 年. **Brazil DREX** expanded its 2 nd round pilot to 16  institutions in 2025-12 , covering a wholesale + retail dual-layer architecture (consistent with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]); **Mercado Bitcoin** issues a **BRL-anchored stablecoin** on Polygon / Ethereum to complement the market version of DREX, forming a "public-private dual track" with DREX. **Mexico Banxico** does not issue a retail CBDC, but deepens **CoDi instant payments** and tacitly permits **MXNB** (Mexican peso stablecoin jointly issued by Bitso × Mercado Bitcoin × M0 , see [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]), presenting a "defensive home-currency SC" alternative to USDC/USDT dollarization. This structure positions Latin America as a **second pathway** outside [[fintech/em-market-crypto-dollarization-pattern|EM ドル化パターン]]: rather than abandoning the home currency, it suppresses dollar stablecoin penetration by running home-currency stablecoins and CBDCs in parallel.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]] for the dollar pressure backdrop and [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]] for the cross-CBDC payments context. [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]] provides a cross-comparison of Latin America vs India as two home-currency defense routes — 2  parallel paths.

## Key facts (2026-05  snapshot)

- **DREX 2 nd round pilot** launched 2025-12 , 16 社 participating institutions (including Itaú / Bradesco / Santander Brasil / Banco do Brasil / Caixa / BTG Pactual / Mercado Bitcoin / Visa Brasil etc.) ^[bcb-press]
- **DREX TVL (pilot stage)** ~R$3.5B (~$700M) in simulated financial assets circulating ^[bcb-press]
- **Mercado Bitcoin BRL stablecoin (MBR$)** circulating supply ~R$280M (~$56M, 2026-05); deployed on Polygon + Ethereum + Avalanche ^[issuer-press]
- **Banxico CoDi monthly transaction volume** ~7,200 万 transactions (2026-03), +120% YoY (driven by SPEI limit reduction) ^[banxico]
- **MXNB stablecoin (M0 + Bitso)** circulating supply ~MXN 450M (~$25M); 1 st phase limited to Bitso internal + DeFi testing ^[bitso-press]
- **USDC/USDT in Brazil** monthly on-chain inflow ~$4.5B (2026-Q1), primarily via Bitso BR / Mercado Bitcoin / Foxbit ^[chainalysis-report]
- **USDC/USDT in Mexico** monthly on-chain inflow ~$2.8B (2026-Q1), Bitso holds 60%+ share on the exchange side ^[chainalysis-report]
- **Brazil CVM (Securities Commission) 2026-04  notice** incorporates BRL-anchored stablecoins into the e-money / payment instrument regulatory framework, excluding securities characterization ^[cvm-press]
- **Mexico CNBV / Banxico 2026-Q1  joint statement** suggests an "observe + non-obstruct" stance toward home-currency stablecoins, contrasted with "clearly not recommended" stance toward dollar stablecoins ^[banxico-press]

## DREX (Brazil) Details

**Official project name**: Digital Real (DREX) — led by the Banco Central do Brasil (BCB), research launched 2020 年, 1 st round pilot completed 2023 年, 2 nd round pilot expanded 2025-12 .

**Architecture**: dual-tier — wholesale CBDC (interbank DLT layer, Hyperledger Besu private chain) + tokenized commercial bank deposits (CBDC-backed deposit tokens) covering retail. Consistent with the "indirect issuance + tokenized commercial bank deposit" paradigm in [[fintech/cbdc-multi-tier-architecture-three-paradigms|多層 CBDC アーキテクチャ三パラダイム]].

**Key changes in 2 nd round pilot (launched 2025-12 )**:

1. **Expanded asset scope**: 1 st round tested only government bonds + real estate tokenization; 2 nd round adds corporate bonds / receivables / agricultural warehouse receipts / secondary market settlement / FX exchange
2. **Institution count**: expanded from 9 社 in 2023 年 to 16 社
3. **Crypto-native player entry**: Mercado Bitcoin became the first crypto exchange to qualify for DREX pilot, marking a milestone in "private-chain CBDC + public-chain SC" interoperability trials
4. **Cross-border connectivity**: BCB is exploring compatibility paths with the mBridge model with BIS Innovation Hub (see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge マルチ CBDC 概要]]), but Brazil is **not** a member of the 6 -country mBridge

**DREX and Pix relationship**: Pix (BCB instant payment system, launched 2020 ) is already a national-level payment channel in Brazil, with monthly transaction volume exceeding 60 億. DREX does not replace Pix but adds a programmability + atomic settlement layer on top of Pix for financial institutions. **Pix national-level + DREX institutional-level + Mercado Bitcoin BRL SC crypto-native-level** = Brazil's three-track payment layer architecture.

## Mercado Bitcoin BRL Stablecoin

**Issuer**: Mercado Bitcoin (Brazil's largest domestic crypto exchange, founded 2013 , valued at $2.1B in 2021 年 SoftBank Group-led round)

**Mechanism**: BRL 1:1  peg, reserves held in Brazilian short-term government bonds (LFT) + central bank deposits + commercial bank deposits. Monthly reserve disclosure audited by KPMG Brazil.

**Positioning**: Does not replace DREX, but **fills the market gap before DREX's full launch (planned 2027-2028 )** and provides a bridgehead for "private BRL token and CBDC interoperability" in the DREX era.

**Chain selection**: Polygon as primary (driven by Polygon's collaboration with multiple Latin American central banks in [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ]]) + Ethereum (cross-border liquidity) + Avalanche (DeFi compatibility).

**Use cases**: (1) replacing fiat deposit delays for BRL pairs on crypto exchanges; (2) cross-border payments (BRL settlement to exporters in Argentina / Uruguay / Paraguay); (3) BRL collateral / liquidity mining in DeFi protocols; (4) BRL token wallets embedded in Mercado Pago and other fintechs.

## Banxico CoDi × MXNB Pilot (Mexico)

**Banxico (Bank of Mexico) stance**: Issues neither retail nor wholesale CBDC, but deepens **CoDi** (instant payment QR code protocol, launched 2019 ) + SPEI (interbank instant transfer, launched 2004 ). Banxico Governor Victoria Rodríguez has repeatedly stated publicly: "The fundamental problem with a digital peso is not technology, but the efficiency of the existing payment system." This is **the opposite direction** from China's e-CNY / Brazil DREX strong CBDC approach.

**CoDi 2026  status**:

- Monthly transaction volume ~7,200 万 transactions (2026-03), +120% YoY
- Key driver: SPEI limit reduced from MXN 8,000  to 0 , enabling small-amount CoDi and SPEI to provide continuous coverage
- Merchant connections ~3.5M (2026-05)
- Still 2  orders of magnitude smaller than Pix (Brazil, 60 億/month) but growth rate is high

**MXNB (M0 + Bitso pilot)**:

- Issuer: arranged by Bitso, with Mercado Bitcoin (Brazil side) as co-issuer; base infrastructure is M0 (see [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]])
- Chains: Base / Ethereum / Polygon
- Reserves: Mexican short-term government bonds (CETES) + commercial bank MXN deposits
- Circulating supply MXN 450M (~$25M, 2026-05), still at pilot stage
- Strategic intent: While Banxico does not issue a CBDC, use **private home-currency SC + M0  neutral infrastructure** to build a home-currency defense layer against USDC/USDT grey-zone expansion

**Bitso's role**: Bitso is Mexico's largest crypto exchange + Latam cross-border payment channel (long-term partnership with Stellar for US-Mexico remittances). 2024  valuation $2.2B. Bitso simultaneously serves as:

1. Mexico's largest USDC / USDT distributor (unable to suppress dollar stablecoin penetration)
2. MXNB co-issuer (actively providing a home-currency alternative)
3. One of 1  merchant connection gateways for Banxico CoDi

This "triangular positioning" makes Bitso the most important market node in Mexico's payment layer.

## Dual-Track (CBDC + Home-Currency SC) vs Single-Track (Dollarization)

| Dimension | Brazil (DREX + BRL SC) | Mexico (CoDi + MXNB) | Argentina (No CBDC + Grey USDT) | Venezuela (Petro failed + USDT) |
|---|---|---|---|---|
| CBDC track | DREX actively promoted | None (Banxico refusal) | None (political instability) | Petro failed |
| Home-currency SC | Mercado Bitcoin BRL ~$56M | MXNB ~$25M | Negligible | Negligible |
| USD SC monthly inflow | ~$4.5B | ~$2.8B | ~$2.5B (highest vs GDP) | ~$1.2B |
| Instant payment channel | Pix 60 億/month | CoDi 7,200 万/month | Weak | Extremely weak |
| Regulatory stance | Active (BCB + CVM explicit framework) | Tolerate + observe | Contradictory (strict central bank, lenient treasury) | Nominally strict, practically permissive |
| Anti-USD SC effectiveness | Medium (Pix + DREX provide home-currency alternatives) | Weak (CoDi still small) | Failed | Failed |

**Core insight**: Brazil has fully established home-currency convenience, programmability, and crypto interoperability through the three layers of **Pix + DREX + BRL SC**, the most complete "de-dollarization tech stack" among emerging market nations today. Mexico follows (CoDi + MXNB still scaling up). Argentina / Venezuela represent the counterexample of "abandoning home currency → USDT adoption," consistent with the "sovereign currency collapse nations" list in [[fintech/jurisdiction-list-monetary-protectionism|規制管轄リスト · 通貨保護主義]].

## Distance from mBridge / Project Agora

Brazil and Mexico are **both not among the 6 -country mBridge members** (see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]). BIS 2025-09  working paper (BIS WP No. 1156) suggests that Latin America's multi-CBDC bridging is more likely to move toward **IADB (Inter-American Development Bank)-led regional pilots** rather than joining mBridge.

Technical compatibility between DREX and mBridge (both using Hyperledger Besu permissioned chains) makes "future connectivity" technically possible, but politically Brazil + Mexico maintain distance from the China-led mBridge coalition. This is consistent with Latin America's "non-aligned + pragmatism" stance in [[fintech/jurisdiction-list-monetary-protectionism|規制管轄]].

## Deep Coupling with M0  MXNB Pilot

The MXNB pilot is the first **non-dollar partner SC** for M0 (see [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]), and also Latin America's first **home-currency SC running on fully neutral SC infrastructure**. This contrasts with Mercado Bitcoin BRL (self-built infrastructure):

| Dimension | MXNB (M0  infrastructure) | Mercado Bitcoin BRL (self-built) |
|---|---|---|
| Compliance template | M0  standardized + Bitso local connection | Mercado Bitcoin proprietary compliance stack |
| Smart contract | M0  shared (OpenZeppelin + Trail of Bits + Certora audited) | Self-developed + self-audited |
| Reserve connection | M0  backend (CETES + commercial bank deposits) | Proprietary custody (LFT + central bank deposits + commercial bank deposits) |
| Cross-chain | M Bridge canonical | LayerZero + general bridge |
| Governance | $M DAO + Bitso/Mercado Bitcoin effective control | Mercado Bitcoin 100% control |
| Regulatory burden | Shared via M0  template reducing single burden | Bears Mexico/Brazil regulatory burden independently |

**Implication**: In 2027-2028 , a divergence between "self-built vs shared infrastructure" may emerge in Latin America — large local players choose self-built (Mercado Bitcoin BRL model), smaller players choose shared (M0  MXNB model). This is the Latam version of [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]].

## Regulatory Coordination and Conflict

- **Brazil CVM 2026-04  notice**: Explicitly classifies BRL-anchored SC as e-money (NOT securities), excludes Howey Test application, providing clear compliance pathway for private home-currency stablecoins
- **Brazil BCB Resolução 2026-006 (draft)**: Proposes incorporating "BRL-anchored SC circulation volume" into payment system oversight dashboard, similar to EU MiCA's large EMT restriction provisions (see [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]])
- **Mexico CNBV 2026-Q1  statement**: "Observe + non-obstruct toward private home-currency SC, not recommended toward foreign currency SC"
- **Latin America regional IADB 2026-Q2  report**: Recommends member countries adopt "unified home-currency SC regulatory framework" + "KYC/AML information sharing mechanism"
- **Compatibility with [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]**: Brazil + Mexico are both FATF / GAFILAT members; cross-border circulation of BRL/MXN SC must comply with Travel Rule

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]]
- [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ三パラダイム]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]]
- [[fintech/jurisdiction-list-monetary-protectionism|管轄リスト · 通貨保護主義]]
- [[fintech/gray-market-dollar-network-formalization|グレーマーケット・ドル・ネットワークの正式化]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非ドル決済リング規模]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]

## Sources

- Banco Central do Brasil — DREX official page https://www.bcb.gov.br/en/financialstability/drex_en
- Banxico — CoDi (Cobro Digital) https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- IADB — "Digital currencies and stablecoins in Latin America: 2026 outlook" https://www.iadb.org/en/news/digital-currencies-latam-2026
- Bitso blog — MXNB pilot announcement https://bitso.com/blog/mxnb-stablecoin-pilot
- Mercado Bitcoin blog — BRL stablecoin (MBR$) launch https://www.mercadobitcoin.com.br/blog/brl-stablecoin
- BIS Working Paper No. 1156 — "Multi-CBDC arrangements in Latin America" (2025) https://www.bis.org/publ/work1156.htm
- Reuters — "Brazil's DREX enters second phase with 16 institutions" (2025-12) https://www.reuters.com/business/finance/brazil-drex-second-phase-2026
- CVM Comunicado 2026-04 — BRL stablecoin classification (public release)
- Chainalysis Geography of Crypto 2026 — LatAm chapter (referenced via aggregate stat)

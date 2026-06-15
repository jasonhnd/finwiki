---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: 09d1303d82049bb2
lang: en
status: machine
fidelity: ok
title: "Brazil DREX × Mexico Banxico CoDi × Latin America CBDC and stablecoin parallel architecture 2026"
translated_at: 2026-06-15T03:48:21.830Z
---

# Brazil DREX × Mexico Banxico CoDi × Latin America CBDC and stablecoin parallel architecture 2026

## TL;DR

Brazil and Mexico enter, in 2026 年 around the same time, a three-track parallel stage of "CBDC + private stablecoin + USD SC graying." **Brazil's DREX** expands its 2 th-round pilot to 16  institutions in 2025-12 , covering a wholesale + retail dual-layer (consistent with [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]); **Mercado Bitcoin** issues a **BRL-anchored stablecoin** on Polygon / Ethereum to complement the market version of DREX, forming a "public-private dual track" with DREX. **Mexico's Banxico** does not issue a retail CBDC but deepens **CoDi instant settlement** and, by tacitly allowing **MXNB jointly issued by Bitso × Mercado Bitcoin × M0 ** (a Mexican peso stablecoin, see [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]), presents a "defensive home-currency SC" alternative against USDC/USDT gray dollarization. This configuration positions Latin America as a **second route** outside [[fintech/em-market-crypto-dollarization-pattern|EM ドル化パターン]]: rather than abandoning the home currency, it runs home-currency SC + CBDC in parallel to suppress the penetration of USD SC.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]] for the dollar pressure backdrop and [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]] for the cross-CBDC payments context. With [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]] it is a cross-comparison of the 2  home-currency defense routes of Latin America vs India.

## Key facts (2026-05  snapshot)

- **DREX 2 th-round pilot** launched 2025-12 , participating institutions 16 社 (including Itaú / Bradesco / Santander Brasil / Banco do Brasil / Caixa / BTG Pactual / Mercado Bitcoin / Visa Brasil, etc.) ^[bcb-press]
- **DREX TVL (pilot stage)** ~R$3.5B (~$700M) of simulated financial assets in circulation ^[bcb-press]
- **Mercado Bitcoin BRL stablecoin (MBR$)** circulation ~R$280M (~$56M, 2026-05); deployment chains are Polygon + Ethereum + Avalanche ^[issuer-press]
- **Banxico CoDi monthly transaction volume** ~7,200 万 transactions (2026-03), +120% year-on-year (driven by the SPEI limit reduction) ^[banxico]
- **MXNB stablecoin (M0  + Bitso)** circulation ~MXN 450M (~$25M); the 1 th phase is limited to Bitso-internal + DeFi testing ^[bitso-press]
- **USDC/USDT in Brazil** monthly on-chain inflow ~$4.5B (2026-Q1), mainly via Bitso BR / Mercado Bitcoin / Foxbit ^[chainalysis-report]
- **USDC/USDT in Mexico** monthly on-chain inflow ~$2.8B (2026-Q1), Bitso occupies the 60%+ share on the exchange side ^[chainalysis-report]
- **Brazil CVM (Securities Commission) 2026-04  communiqué** incorporates BRL-anchored SC into the e-money / payment instrument regulatory framework, excluding securities attributes ^[cvm-press]
- **Mexico CNBV / Banxico 2026-Q1  joint statement** hints at an "observe + non-obstruction" stance toward home-currency SC, in contrast to a "clearly not recommended" stance toward USD SC ^[banxico-press]

## DREX (Brazil) details

**Project official name**: Digital Real (DREX) — led by the Central Bank of Brazil (Banco Central do Brasil, BCB), began research in 2020 年, conducted the 1 th-round pilot in 2023 年, and expanded the 2 th-round pilot in 2025-12 .

**Architecture**: dual-tier — wholesale CBDC (interbank DLT layer, Hyperledger Besu private chain) + tokenized commercial-bank deposits (CBDC-backed deposit tokens) to address retail. This is consistent with the "indirect issuance + commercial-bank tokenized deposits" paradigm in [[fintech/cbdc-multi-tier-architecture-three-paradigms|多層 CBDC アーキテクチャ三パラダイム]].

**Key changes in the 2 th-round pilot (launched 2025-12 )**:

1. **Expansion of the asset scope**: the 1 th round tested only government bonds + real-estate tokenization; the 2 th round adds corporate bonds / receivables / agricultural-product warehouse receipts / secondary-market settlement / FX exchange
2. **Number of institutions**: expanded from 9 社 in 2023 年 to 16 社
3. **Entry of crypto-asset-native operators**: Mercado Bitcoin becomes the first crypto exchange to obtain DREX pilot eligibility, a milestone for the interoperability trial of "private-chain CBDC + public-chain SC"
4. **Cross-border connection**: BCB is studying a compatibility path with the BIS Innovation Hub and the mBridge model (see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge マルチ CBDC 概要]]), but Brazil is **not** an mBridge 6 -country member

**Relationship between DREX and Pix**: Pix (BCB instant settlement system, launched 2020 ) has already become a national-level payment channel in Brazil, with monthly transaction volume over 60 億. DREX does not replace Pix but adds, on top of Pix, a layer of programmability + atomic settlement for financial institutions. **Pix national-level + DREX institutional-level + Mercado Bitcoin BRL SC crypto-native-level** = the three-track architecture of Brazil's payment layer.

## Mercado Bitcoin BRL stablecoin

**Issuer**: Mercado Bitcoin (Brazil's largest domestic crypto exchange, established 2013 , with SoftBank Group leading at a $2.1B valuation in 2021 年)

**Mechanism**: BRL 1:1  anchor, with reserves of Brazilian short-term government bonds (LFT) + central-bank deposits + commercial-bank deposits. Monthly disclosure of reserves is audited by KPMG Brazil.

**Positioning**: rather than replacing DREX, it **fills the market gap before DREX's full launch (scheduled 2027-2028 )** and provides a bridgehead for "interoperability of private BRL tokens and CBDC" in the DREX era.

**Chain selection**: Polygon as the main axis (driven by the background of Polygon's collaboration with multiple Latin American central banks in [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ]]) + Ethereum (cross-border liquidity) + Avalanche (DeFi compatibility).

**Use cases**: (1) substituting for fiat-deposit delays via BRL pairs within crypto exchanges; (2) cross-border settlement (BRL settlement to exporters bound for Argentina / Uruguay / Paraguay); (3) BRL collateral / liquidity mining in DeFi protocols; (4) BRL token wallets embedded in Mercado Pago and other fintechs.

## Banxico CoDi × MXNB pilot (Mexico)

**Banxico's (Mexican central bank's) stance**: it issues neither a retail CBDC nor a wholesale CBDC but deepens **CoDi** (instant settlement QR-code protocol, launched 2019 ) + SPEI (interbank instant transfer, launched 2004 ). Banxico Governor Victoria Rodríguez has repeatedly stated publicly: "The essential problem of the digital peso is not technology but the efficiency of the existing payment system." This is in the **opposite direction** from the strong-CBDC route of China's e-CNY / Brazil's DREX.

**CoDi 2026  status**:

- monthly transaction volume ~7,200 万 (2026-03), +120% year-on-year
- main driver: the SPEI cap was lowered from MXN 8,000  to 0 , so small-value CoDi and SPEI cover continuously
- number of merchant connections ~3.5M (2026-05)
- compared with Pix (Brazil, 60 億/month) it is still 2  orders of magnitude smaller, but the growth rate is high

**MXNB (M0  + Bitso pilot)**:

- issuer: arranged by Bitso, with Mercado Bitcoin (Brazil side) as sub-issuer, and the base infrastructure is M0 (see [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]])
- chains: Base / Ethereum / Polygon
- reserves: Mexican short-term government bonds (CETES) + commercial-bank MXN deposits
- circulation MXN 450M (~$25M, 2026-05), still at the pilot stage
- strategic intent: in the period when Banxico does not issue a CBDC, leverage **private home-currency SC + M0  neutral infrastructure** to build a home-currency defense layer against the graying of USDC/USDT

**Bitso's role**: Bitso is Mexico's largest crypto exchange + a Latam cross-border settlement channel (long-term collaboration with Stellar to provide US-Mexico remittance). 2024  valuation $2.2B. Bitso is simultaneously:

1. the largest distributor of USDC / USDT in Mexico (unable to suppress USD SC penetration)
2. a co-issuer of MXNB (actively providing a home-currency-alternative option)
3. one of the 1  merchant-connection gateways for Banxico CoDi

This "triangular positioning" makes Bitso the most important market node in Mexico's payment layer.

## Dual track (CBDC + home-currency SC) vs single track (gray dollarization)

| Dimension | Brazil (DREX + BRL SC) | Mexico (CoDi + MXNB) | Argentina (no CBDC + gray USDT) | Venezuela (Petro failure + USDT) |
|---|---|---|---|---|
| CBDC route | DREX actively promoted | None (Banxico declines) | None (political instability) | Petro failure |
| Home-currency SC | Mercado Bitcoin BRL ~$56M | MXNB ~$25M | almost none | almost none |
| USD SC monthly inflow | ~$4.5B | ~$2.8B | ~$2.5B (largest relative to GDP) | ~$1.2B |
| Instant settlement channel | Pix 60 億/month | CoDi 7,200 万/month | weak | extremely weak |
| Regulatory stance | active (explicit framework of BCB + CVM) | tacit acceptance + observation | contradictory (central bank strict, finance ministry lenient) | nominally strict, effectively laissez-faire |
| Anti-USD-SC effect | medium (provides home-currency alternative via Pix + DREX) | weak (CoDi scale is small) | failure | failure |

**Core insight**: Brazil has, with the three layers of **Pix + DREX + BRL SC**, assembled the convenience, programmability, and crypto interoperability of the home currency in full, which is the most complete "anti-dollarization tech stack" among current EM countries. Mexico is next (CoDi + MXNB are still scaling up). Argentina / Venezuela are counterexamples of "abandoning the home currency → USDT-ization," consistent with the "sovereign-currency-collapse country" list in [[fintech/jurisdiction-list-monetary-protectionism|規制管轄リスト · 通貨保護主義]].

## Distance from mBridge / Project Agora

Brazil and Mexico are **both not mBridge 6 -country members** (see [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]). The BIS 2025-09  working paper (BIS WP No. 1156) suggests that Latin America's multi-CBDC bridging is more likely to head toward an **IADB (Inter-American Development Bank)-led regional pilot** rather than joining mBridge.

From the technical compatibility of DREX and mBridge (both being Hyperledger Besu permissioned chains), a "future connection" is possible, but politically Brazil + Mexico keep their distance from the China-led mBridge coalition. This is consistent with Latin America's "non-alignment + pragmatism" stance in [[fintech/jurisdiction-list-monetary-protectionism|規制管轄]].

## In-depth coupling with the M0  MXNB pilot

The MXNB pilot is the first **non-dollar partner SC** for M0 (see [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]), and also the first **home-currency SC in Latin America that runs entirely on neutral SC infrastructure**. This contrasts with Mercado Bitcoin BRL (self-built infrastructure):

| Dimension | MXNB (M0  infrastructure) | Mercado Bitcoin BRL (self-built) |
|---|---|---|
| Compliance template | M0  standardization + Bitso local connection | Mercado Bitcoin's own compliance stack |
| Smart contracts | M0  shared (OpenZeppelin + Trail of Bits + Certora audits) | self-developed + self-audited |
| Reserve connection | M0  backend (CETES + commercial-bank deposits) | self-custody (LFT + central-bank deposits + commercial-bank deposits) |
| Cross-chain | M Bridge canonical | LayerZero + generic bridge |
| Governance | $M DAO + de facto control by Bitso/Mercado Bitcoin | Mercado Bitcoin 100% control |
| Regulatory burden | reduces the single burden by sharing the M0  template | bears the Mexico/Brazil regulatory burden alone |

**Implication**: in Latin America, a "self-built vs infrastructure-sharing" divergence may appear in 2027-2028  — large local players self-build (the Mercado Bitcoin BRL model), small and mid-sized players share (the M0  MXNB model). This is the Latam version of [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]].

## Regulatory coordination and conflict

- **Brazil CVM 2026-04  communiqué**: makes explicit that BRL-anchored SC = e-money (NOT a security), excludes the application of the Howey Test, and provides a clear compliance path for private home-currency SC
- **Brazil BCB Resolução 2026-006 (draft)**: proposes incorporating "BRL-anchored SC circulation" into the payment-system supervision dashboard, similar to the EU MiCA large-EMT restriction clauses (see [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]])
- **Mexico CNBV 2026-Q1  statement**: "an observe + non-obstruction stance toward private home-currency SC, not recommended for foreign-currency SC"
- **Latin America regional IADB 2026-Q2  report**: recommends member states adopt a "unified home-currency SC regulatory framework" + a "KYC/AML information-sharing mechanism"
- **Compatibility with [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]**: Brazil + Mexico are both FATF / GAFILAT members, and cross-border circulation of BRL/MXN SC must comply with the Travel Rule

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

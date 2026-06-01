---
source: systems/institutional-dlt-adoption-comparison-2026
source_hash: 5844b8aa6372e860
lang: en
status: machine
fidelity: ok
title: "Institutional DLT Platform Adoption Comparison 2026  · Canton vs Fabric vs Corda vs Public Chains vs Avalanche vs Polygon"
translated_at: 2026-06-01T04:15:40.164Z
---

# Institutional DLT Platform Adoption Comparison 2026  · Canton vs Fabric vs Corda vs Public Chains vs Avalanche vs Polygon

## TL;DR

Institutional DLT selection in 2026 年 has moved out of the "pilot phase" and into a mature differentiated structure of **"Canton + public-chain Ethereum as the two major centers + Corda as the long tail + Fabric in decline"**: Canton (after the Digital Asset / R3  merger) has captured the main battlefield of G-SIB tokenization (JPM Kinexys + Goldman DAP + DTCC + BNY), public-chain Ethereum L1  occupies one pole of "publicly tradable tokenized funds" through RWA such as BlackRock BUIDL + Franklin BENJI + Ondo, Corda retains a sticky long tail among the UK / Singapore / some EM central banks + central securities depositories (CSDs), and Hyperledger Fabric (promoted by IBM) is clearly declining outside trade finance / supply chain. Avalanche Subnets has captured part of the RWA + asset-management long tail (Apollo / KKR / Hamilton Lane), while Polygon Enterprise has largely withdrawn. Institutional selection is not a single-chain decision; many G-SIBs operate 2-3  platforms at the same time.

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton 総覧]] and [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]] to understand the technical counterpoint among the 2  core institutional chains, and compare with [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]] to check the actual migration decisions of specific G-SIBs. For the public-chain pole, see [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]].

### 1. Canton (Digital Asset + R3  merged camp)

- **Technology**: DAML (functional + obligation-based language) + application-level privacy + Global Synchronizer
- **2025  important event**: Digital Asset Holdings and R3  completed a strategic merger in 2025 年 (in concrete form, R3  integrated its Corda Enterprise business into Digital Asset, and Canton became the core DLT product of the merged entity)
- **Typical customers**: JPM Kinexys (2026-2027 H1  migration completed) + Goldman DAP + DTCC Project Ion + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank
- **Typical use cases**: cross-participant atomic settlement of tokenized MMF + collateral mobility + 24/7 repo + tokenized deposit
- **Self-reported TVL**: in 2026-Q1 , $6T+ in tokenized assets / 600+ institutions (Canton consortium self-disclosure, lacking third-party audit)
- **Ecosystem position**: first choice for G-SIB tokenization; see [[systems/canton-daml-technical-spec|Canton DAML 技術仕様]] for technical details

### 2. Public Ethereum L1 (led by BlackRock + Franklin + Ondo)

- **Typical customers**: [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] (launched in 2024-03 , ~$2-3B AUM in 2026-Q1) + Franklin Templeton BENJI (~$700M) + Ondo USDY + WisdomTree, etc.
- **Typical use cases**: tokenized money market fund (MMF) + tokenized Treasury, freely transferable to KYC-completed institutional buyers on public chains
- **Rationale**: can be held by any KYC-completed institutional wallet globally + institutional clients do not need to connect to a private consortium chain + native interoperability with stablecoins (USDC / PYUSD)
- **Technical dependencies**: transfer agent platforms such as [[fintech/blackrock-buidl-tokenized-mmf-overview|Securitize]] + cross-chain systems such as Wormhole / [[systems/cctp-v2-overview|CCTP V2]] + ERC-3643  (T-REX) regulated token standard
- **L2  rollout**: BUIDL expanded from 2024-Q4  to multiple chains such as Aptos / Avalanche / Arbitrum / Optimism / Polygon PoS; ~70% of AUM is still on Ethereum L1

- **Constraints**: clearing and settlement in G-SIB proprietary markets still lean toward private chains such as Canton; public-chain RWA mainly serves "public issuance + secondary liquidity" scenarios

### 3. Corda (R3, after 2025  integration)

- **Technology**: JVM-based + UTXO style + notary cluster + application-layer privacy (similar to Canton, but with a different implementation)
- **Post-integration positioning**: after R3  merged with Digital Asset in 2025 年, Corda mainly inherits **central securities depository (CSD) + some central-bank wholesale CBDC pilots + long-tail customers in the UK / Singapore / Middle East**. New customer acquisition has effectively shifted to Canton
- **Typical customers**: SIX Digital Exchange (SDX, Switzerland) + HQLAᵡ (European institutional collateral platform) + ASX (Australian exchange, after CHESS replacement cancellation) + some central-bank wholesale CBDC pilots (BoE / MAS / some Middle Eastern central banks)
- **TVL and activity**: historically processed more than $20T in cumulative notional assets on the Corda network (2024 R3  disclosure, mainly trade finance + CSD clearing/settlement notional), but active mainnet TVL is far smaller
- **Future**: Corda 4.x will continue to be maintained, but Canton becomes R3 's strategic core instead of Corda

### 4. Hyperledger Fabric (IBM-led)

- **Typical customers**: IBM Food Trust + TradeLens (closed in 2022 ) + we.trade (dissolved in 2022 ) + Marco Polo Network (failed in 2022 ) + Walmart supply chain
- **Current state**: in 2022-2023 年, IBM-led trade-finance / supply-chain consortia closed or reorganized one after another, and Fabric has effectively declined as a main battlefield for financial institutions
- **Survival scenarios**: supply-chain tracking (food / pharmaceuticals / auto parts) + some central-bank internal ledgers (components of China's digital renminbi historically used Fabric derivatives) + some enterprise consortia
- **Technical issues**: permissioned, but endorsement policy is complex; performance bottlenecks; IBM's sales model mismatches modern SaaS / DLT-as-service
- **Center of gravity in Hyperledger projects**: in 2025 年, the Linux Foundation integrated Hyperledger into the "Decentralized Trust" foundation; Besu became the de facto standard for EVM-compatible institutional chains, and Fabric's strategic position declined

### 5. Hyperledger Besu (EVM-compatible institutional chain)

- **Typical customers**: JPM Kinexys Chain (some functionality migrated to Canton by 2027 H1 , with the Besu fork retained internally) + Citi CTS + HSBC Tokenized Deposit Service + BNP Securities Services + multiple [[fintech/bis-project-agora-overview|BIS Project Agora]] nodes
- **Advantages**: EVM compatibility, reuse of the Solidity toolchain, transparency of Linux Foundation governance, and a simple permissioned validator set
- **Constraints**: application-level privacy is weaker than Canton + multi-party atomic settlement requires hack-y contract combinations
- **Detailed analysis**: see [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]] and [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]

### 6. Avalanche Subnets (institutional RWA long tail)

- **Typical customers**: Apollo Diversified Credit Securitize Fund (some ACRED versions) + KKR (2022  pilot) + Hamilton Lane (Securitize multichain) + Wisdomtree + some Onyx projects + Republic
- **Mechanism**: Subnets allow a single institution / asset manager to build an independent EVM-compatible chain and share Avalanche validator security
- **2026  current state**: Subnets were renamed "L1" (at the end of 2024 , the Avalanche 9000  upgrade), further lowering the deployment hurdle
- **Advantages**: EVM compatibility + customizable validator set + liquidity and connectivity with the public Avalanche C-Chain
- **Self-reported TVL**: Avalanche RWA TVL 2026-Q1 ~$200-400M (rwa.xyz basis), far smaller than Ethereum L1  RWA

### 7. Polygon Enterprise (basically withdrawn)

- The Polygon Supernets / Polygon Enterprise direction presented in 2022-2023 年 has basically stopped being promoted since 2024 年
- Polygon's strategic center of gravity shifted to the [[systems/polygon-agglayer-architecture-rollout|AggLayer + CDK]] public-chain stack
- It did not enter the main battlefield of G-SIB tokenization, and institutional customer share is negligible

## Institutional DLT Selection Matrix

| Customer type | First choice | Next choice | Rationale |
|---|---|---|---|
| G-SIB investment bank + asset management + custody | Canton | Besu / Corda | multi-party atomic settlement + application-level privacy |
| Publicly issuable token MMF / Treasury issuance by asset managers | Public Ethereum L1 | Avalanche / Aptos / Stellar | KYC-completed secondary liquidity on public chains + stablecoin interoperability |
| Central-bank wholesale CBDC pilot | Corda / Besu / Canton (parallel pilots) | — | Multiple platforms run in parallel at the pilot stage |
| Internal ledger of major custody banks | Besu / Canton | — | EVM compatibility vs DAML multi-party atomicity |
| Private credit / private equity asset management | Avalanche subnet / Securitize multichain rollout | Public Ethereum L1 | tokenization-as-service + multichain distribution |
| Trade finance / supply chain | Fabric / other enterprise platforms | — | Historical inertia + non-financial institution customers |
| Cross-G-SIB CBDC pilot (BIS Agora-like) | Besu / Hedera / Canton (multiple platforms in parallel) | — | Multiple chains run in parallel at the pilot stage; no unified answer |

## Actual Deployment Examples Across Multiple G-SIBs

- **JPM**: Kinexys Chain (Besu fork) + Canton (2026-2027  main-battlefield migration) → 2  platforms in parallel
- **Goldman Sachs**: Canton (DAP is a core application on Canton) + public-chain Ethereum (GS Treasury bill tokenization component) → 2  platforms
- **Citi**: Canton + Hedera (Citi Token Services) → 2  platforms
- **HSBC**: Besu (Tokenized Deposit Service) + Canton under evaluation → 1-2  platforms
- **BNY Mellon**: Canton (founding member) + Public Ethereum L1 (BUIDL custody) → 2  platforms
- **DTCC**: Canton (Project Ion) + Corda (some historical projects) → 2  platforms
- **BlackRock**: Public Ethereum L1 (BUIDL 70% AUM) + multiple L2s (Aptos / Avalanche / Arbitrum / Polygon)
- **Franklin Templeton**: Stellar (BENJI native) + Aptos + Polygon + multiple L2 s → multichain distribution

Institutional clients **do not bet on a single chain**. The practice in 2026 年 is "Canton for internal G-SIB use + public-chain Ethereum for external MMF / Treasury + Corda / Besu as the long tail for specific regions or use cases," which contrasts with the extension of [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] into the institutional layer.

## RWA on chain · TVL view

Based on public rwa.xyz / DefiLlama methodologies, the approximate distribution of tokenized RWA (excluding stablecoins) on-chain TVL in 2026-Q1  is:

- Ethereum L1: ~70%+ (BUIDL + Ondo + Franklin BENJI cross-chain portion + Securitize family)
- Stellar: ~5-10% (Franklin BENJI native + part of WisdomTree)
- Avalanche: ~3-5% (parts of KKR / Apollo / Hamilton Lane Securitize)
- Aptos / Arbitrum / Polygon PoS / Optimism / Base: each 1-3%
- Canton (private chain, not included in public rwa.xyz methodology): self-reported $6T+, but the methodology is not directly comparable with public-chain TVL

Important difference: **public-chain RWA tracking is independently auditable by third parties** (rwa.xyz / DefiLlama, etc.), while **private-chain RWA tracking depends on consortium self-disclosure**; the two cannot be simply added together.

## Use-case Axis · Who Chooses Which Platform

| Use case | Platform choice | Rationale |
|---|---|---|
| Major-bank internal 24/7 repo + collateral mobility | Canton (JPM / GS / DTCC) | multi-party atomicity + application privacy + DAML expressiveness |
| External issuance of tokenized MMF / Treasury (secondary tradability) | Public Ethereum L1 | KYC-completed institutional wallets + stablecoin interoperability + third-party audit |
| Tokenized private credit / private equity | Avalanche subnet / Polygon PoS / Public ETH multichain | tokenization-as-service + Securitize route |
| Central-bank wholesale CBDC pilot | Corda / Besu / Canton in parallel | Multiple platforms piloted in parallel |
| Trade finance / supply-chain tracking | Fabric / proprietary enterprise platform | Historical inertia + non-financial customers |
| Tokenized deposit (inside a single bank) | Besu (HSBC TDS / Citi CTS) / Canton | EVM compatibility vs DAML atomicization |
| Cross-G-SIB CBDC pilot ([[fintech/bis-project-agora-overview\|BIS Project Agora]]) | Besu / Hedera / Canton multi-platform | No unified answer at the pilot stage |
| Secondary trading of tokenized equities | Public Ethereum L1 / Solana / some L2 s | Closest to stablecoin liquidity |
| Stablecoin payment (retail) | Public L2 (Base / Tron / Polygon PoS) | Low gas + user-wallet density |
| Tokenized record management for custody banks | Canton (BNY) / Corda (SDX / HQLAᵡ) | application-layer privacy |

## R3 / Digital Asset Integration Timeline (Public Disclosure Basis)

- **2014-2017**: R3  consortium founded, Corda born, 40+ banks piloted
- **2017-2020**: Digital Asset and R3  developed in parallel; Corda rolled out among European banks + some CSDs; Canton was used for ASX CHESS replacement (later cancelled)
- **2020-2023**: Canton Network concept gradually matured; Digital Asset received investment from Microsoft / DTCC / GS / multiple G-SIBs; Corda was maintained but new customer acquisition slowed
- **2024**: DTCC Project Ion selected Canton, Goldman DAP migrated to Canton, JPM began evaluating Canton, Canton consortium expanded
- **2025**: R3  and Digital Asset completed strategic integration (public disclosure on the specific form is limited, but the teams / governance / customer development of Corda and Canton effectively merged)
- **2026**: Canton became the post-integration flagship product, while Corda maintained existing customers but declined in strategic position

Note: the specific timing and form of integration follow the official disclosures of both parties. This section is a reasonable inference based on public signals; confidence: likely.

## Regulatory + Compliance Angle Comparison

- **Canton**: application-level privacy + Regulator Node model allows regulators to join as participants; high compatibility with regulatory frameworks such as MiCA (EU) / MAS (Singapore)
- **Public Ethereum L1**: depends on ERC-3643 (T-REX) or "permissioned token in permissionless chain" models through transfer agents such as Securitize; compliance is borne by the token issuer + transfer agent
- **Corda**: notary cluster + UTXO + transaction history visible only to participants; high regulatory acceptance in the UK / Singapore / Middle East
- **Fabric**: permissioned + endorsement policy; historically used in China's regulatory sandbox + some central-bank internal ledgers
- **Besu**: IBFT consensus + Constellation off-chain payload; privacy is weaker than Canton, but EVM compatibility lowers regulatory learning costs
- **Avalanche subnet**: configurable KYC validator set + interoperability with Avalanche C-Chain liquidity; one of the core reasons asset managers such as Apollo / KKR / Hamilton Lane choose Avalanche

## Tokenized Stablecoin × DLT Platform Matrix

| Platform | tokenized USD (stablecoin / deposit) |
|---|---|
| Canton | JPMD (JPM tokenized deposit) + some GS / DTCC stablecoin pilots |
| Public Ethereum L1 | USDC / USDT / PYUSD / RLUSD / Ondo USDY |
| Stellar | USDC (Circle native) + WisdomTree WTSY |
| Avalanche | USDC / Tether on Avalanche C-Chain |
| Besu (Kinexys Chain) | JPMD (migrating to Canton in 2026 年) |
| Corda | Some central-bank wholesale CBDC pilots + HQLAᵡ collateral |
| Solana / Base | USDC native (main choice for retail payment) |

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/canton-overview|Canton 総覧]]
- [[systems/canton-daml-technical-spec|Canton DAML 技術仕様]]
- [[systems/canton-mmf-coalition|Canton MMF コンソーシアム]]
- [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[systems/cctp-v2-overview|CCTP V2 総覧]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 総覧]]
<!-- /wiki-links:managed -->

## Sources

- Canton Network official site & documentation
- R3 Corda official site & 2025  integration announcement
- Hyperledger Foundation site — Fabric, Besu projects
- BlackRock BUIDL fund prospectus
- Franklin Templeton BENJI fund documentation
- Avalanche Subnets / L1s documentation
- rwa.xyz — tokenized RWA on-chain tracking
- DefiLlama — chain TVL & RWA tracking
- DTCC Project Ion press releases
- BIS reports — wholesale CBDC & DLT pilots

---
source: exchanges/jp-custody-fireblocks-japan
source_hash: 01cf73e2747511b3
lang: en
status: machine
fidelity: ok
title: "Fireblocks — global MPC custody infrastructure provider (Japan rollout)"
translated_at: 2026-06-18T23:33:48.374Z
---

# Fireblocks — global MPC custody infrastructure provider (Japan rollout)

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> No FSA crypto-asset exchange registration · Not a JVCEA member · A B2B infrastructure vendor · US headquarters (New York) · Has a Tokyo base (around 5 名 employees · confirmed via LinkedIn)

## 1. Corporate / shareholders

- **Trade name (global)**: Fireblocks Inc.
- **English name**: Fireblocks
- **Japan base**: Formal incorporation not confirmed (as of 2026-05 ). On LinkedIn, around 5 名 Tokyo-based employees are confirmed to be on staff
- **Global headquarters**: New York City, USA (on registration). R&D / founding was in Tel Aviv, Israel
- **Established**: 2018 年 (Israeli-originated, then moved to a US HQ)
- **Form**: An unlisted private company
- **Principal shareholders**: Sequoia Capital (Series D co-lead), Paradigm (Series B lead), BNY Mellon (investment participation 2021-03), Google Ventures, and several other VCs
- **Latest valuation**: $8  billion (as of the 2022-01  Series E)

## 2. License / registration status

- **Japan FSA crypto-asset exchange business**: No registration (provides B2B to Japanese VASPs as an infrastructure SaaS vendor)
- **JVCEA membership**: Not a member
- **US licenses**: Holds the Fireblocks Trust Company (a US trust company) (since 2024 年)
- **EU**: Expanding its provision to European banks / institutions as MiCA-compliant infrastructure
- **Positioning under Japanese regulation**: A foreign-capital software vendor that provides systems / infrastructure to VASPs, banks, and trust banks within Japan. Because it is not itself an operator that custodies or handles crypto assets, the structure is one where Japanese crypto-asset exchange registration is unnecessary

## 3. Supported assets

- BTC, ETH, EVM-line altcoins in general, Solana, Sui, and other major L1/L2
; stablecoins (USDC, USDT, electronic payment instruments issued by various banks)
- Tokenized RWA (real estate, commodities, securities)
- NFT management (at the B2B infrastructure level)
- Publicly stated number of supported chains: 50+ blockchains (regularly expanding)

## 4. Scope of operations / main products

- **MPC Custody (Multi-Party Computation)**: Distributed custody of private keys. A combination of hardware isolation + MPC. Provides industry-standard-level security for global financial institutions
- **Policy Engine**: A governance layer where transfer rules, approval flows, and compliance gates can be configured
- **Treasury Management**: The Fireblocks Network, which executes the sending and receiving of digital assets with exchanges / counterparties without private-key exposure
- **Wallet-as-a-Service (WaaS)**: API provision of non-custodial / custodial MPC wallets for enterprises
- **Embedded Wallets**: White-label wallets for consumers (strengthened by the acquisition of Dynamic)
- **Tokenization Engine**: Minting, transfer, and smart-contract management of RWA
- **Fireblocks Network for Payments**: A network specialized in stablecoin settlement (provision began 2025-09 )
- **DeFi Access**: DeFi-protocol connection linked with the policy engine
- **COR Compliance**: A MiCA / AML/CFT-compliant compliance package

## 5. Market position / competitive comparison

### The global institutional custody market

| Vendor | Characteristics | Position |
|---|---|---|
| **Fireblocks** | MPC + policy engine, SaaS, 2,400+ institutions | Among the largest global-share institution-oriented MPC infrastructure |
| BitGo | Combined trust + MPC, US-regulation-compliant | A long-established institution-oriented player. Also direct custody |
| Anchorage Digital | Holds a federal-bank charter (the only one in the US) | Regulation-compliant, US-centered |
| Ledger Enterprise | HSM + Vault, French-originated | HW-focused for large banks |
| Komainu | Of the Nomura + Ledger + CoinShares line | Institution-oriented, Asia rollout (see [[exchanges/jp-custody-komainu]] for details) |

### Domestic Japanese competition / division of turf

**vs. [[exchanges/jp-custody-ginco|Ginco]] (a domestic independent)**:
- Ginco touts itself as the "No. 1 -share-in-Japan wallet for crypto-asset business" and has captured the MPC-wallet demand of domestic VASPs / financial institutions. Its strengths are Japanese-language support, FSA-regulation-compliance know-how, and linkage with domestic HSMs (see [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] for the industry layout)
- Fireblocks competes in the same area but differentiates itself with its global network (Fireblocks Network), abundant DeFi integrations, and the completeness of its policy engine. It is building up a track record of selection by major megabanks / foreign-capital institutions
- In fact, STIR (a domestic Web 3  consultancy) handled support for building a staking system for CoinTrade using Fireblocks (2024-02), and adoption via domestic vendors is also advancing

**vs. Komainu (the Nomura line)**:
- Komainu provides direct custody (a Jersey TCSP license / a Dubai VARA license) as an institution-oriented, regulation-compliant custodian. It itself becomes the custodian
- Fireblocks, as "infrastructure SaaS," provides the tools for financial institutions to carry out custody operations themselves. The business model is different — it is less a competition than a division of turf
- However, in deals to strengthen trust banks' / VASPs' in-house custody, a Fireblocks vs. Komainu consideration can run in parallel

## 6. History / Japan rollout

| Year/month | Event |
|---|---|
| 2017  | While investigating the $200M theft from a Korean exchange by the Lazarus Group, Michael Shaulov and others from Check Point felt a sense of urgency |
| 2018  | Fireblocks Inc. established (Israel) |
| 2019-06  | Formally announced, out of stealth, with $16M raised |
| 2020-11  | Series B $30M (Paradigm lead) |
| 2021-03  | Series C $133M / BNY Mellon investment participation |
| 2021-07  | Series D $310M (Sequoia co-lead), valuation $2.2B |
| 2022-01  | Series E $550M, valuation $8B |
| 2022  | Acquired First Digital (Israeli stablecoin settlement) for $100M. Institution-oriented joint rollout with FIS |
| 2023  | Acquired BlockFold (Australia, smart contracts) |
| 2024-02  | Japan: STIR supported the building of a CoinTrade staking system utilizing Fireblocks MPC |
| 2025-04  | Japan: a 5 社 of Sumitomo Mitsui Financial Group / Sumitomo Mitsui Banking Corporation / TIS / Ava Labs / Fireblocks jointly studied the commercialization of stablecoins (announced 2025-04-07) |
| 2025-09  | Fireblocks Network for Payments launched (a network dedicated to stablecoin settlement) |
| 2025-10  | Acquired Dynamic (US, wallet technology) for $90M |
| 2026-01  | Acquired TRES Finance (crypto-asset accounting) for $130M |
| 2026-05  | Japan: completed an integration proof-of-concept with AndGo Wallet (a domestic HW wallet) (jointly with Intertrade and others) |

**Early involvement in Japan**:
- A joint study of stablecoin + Web 3  wallet commercialization with Minna Bank / TIS / Solana Japan (timing not yet determined, around 2024-2025 )
- Mitsui & Co. Digital Commodities (MDC): an RWA token company established by Mitsui & Co. Adopted Fireblocks as a multi-chain rollout platform. Issues Zipangcoin (gold-collateralized), platinum, and silver-collateralized tokens. MDC disclosed an issuance ceiling of JPY 39 億円 (operating since 2022-02 )

## 7. Recent developments (2025-2026)

- As of 2026-05 , **2,400  institutions globally** use Fireblocks ($10T+ in transactions, 550M+ wallets)
- Won "Best Blockchain Technology Platform (Digital Assets)" at the **Asian Banker Business Achievement Awards 2026** (Kuala Lumpur, 2026)
- A 12 行-bank European consortium, "Qivalis," adopted it as a EUR-stablecoin issuance platform (2026)
- Western Union adopted it as the settlement infrastructure for the $USDPT stablecoin (a Philippines / Bolivia leading rollout)
- **Japan**: In 2026-05  there was a CoinPost CEO-interview report, "Fireblocks CEO talks Japan-market strategy" (the detailed content should be checked against the published article)
- There are IPO observations: Bloomberg reported in 2025-11 that "Fireblocks is considering a fundraising for the buyback of employee equity stakes"

## 8. Management / Japan base

**Global founders 3 名**:
- **Michael Shaulov** — CEO / co-founder (Israeli-born, a former Check Point employee)
- **Pavel Berengoltz** — CTO / co-founder
- **Idan Ofrat** — CPO / co-founder

**Japan base**:
- Around 5 名 Tokyo-based employees confirmed on LinkedIn (as of 2026-05 )
- The name of the Japan-base representative / Country Manager could not be confirmed as disclosed (not disclosed)
- The corporate-registration form of the base (branch / godo kaisha / liaison office, etc.) is not confirmed

## Related

- [[exchanges/jp-custody-komainu]] — A Nomura-line institution-oriented custody competitor
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade (a Fireblocks customer candidate)
- [[agent-economy/embedded-wallet-network-effects-moat]] — The embedded-wallet competition discussion
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge]] — Wallet × KYC design
- [[fintech/japan-stablecoin-regulatory-landscape]] — Japanese stablecoin regulation
- [[fintech/jp-trust-type-sc-architecture]] — The trust-type SC architecture
- [[exchanges/jp-institutional-custody-three-pillars]] — The three pillars of JP institutional custody
- [[exchanges/global-institutional-custody-five-pillars]] — The 5  pillars of global institutional custody
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — JP VASP cold-storage segregation rules

## Sources

- [Fireblocks About](https://www.fireblocks.com/about/) (retrieved 2026-05-19)
- [Fireblocks Mitsui Customer Story](https://www.fireblocks.com/customers/mitsui/) (retrieved 2026-05-19)
- [Fireblocks — Wikipedia](https://en.wikipedia.org/wiki/Fireblocks) (retrieved 2026-05-19)
- [Fireblocks LinkedIn](https://www.linkedin.com/company/fireblocks/) (retrieved 2026-05-19)
- [CoinPost Fireblocks search results](https://coinpost.jp/?s=Fireblocks) (retrieved 2026-05-19)
- [Atarashii Keizai, Fireblocks Sumitomo Mitsui](https://www.neweconomy.jp/?s=Fireblocks+%E4%B8%89%E4%BA%95%E4%BD%8F%E5%8F%8B) (retrieved 2026-05-19)
- [CoinPost: Sumitomo Mitsui Banking Corporation / Fireblocks / Ava Labs / TIS stablecoin study](https://coinpost.jp/?s=Fireblocks+SMBC) (retrieved 2026-05-19)
- [Ginco Inc. official](https://www.ginco.co.jp/en) (retrieved 2026-05-19, for competitive comparison)

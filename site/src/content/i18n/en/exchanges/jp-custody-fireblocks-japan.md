---
source: exchanges/jp-custody-fireblocks-japan
source_hash: 96aa07b66a264ace
lang: en
status: machine
fidelity: ok
title: "Fireblocks — global MPC custody infrastructure provider (Japan expansion)"
translated_at: 2026-05-31T03:19:56.489Z
---

# Fireblocks — global MPC custody infrastructure provider (Japan expansion)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> No FSA crypto-asset exchange registration · not a JVCEA member · B2B infrastructure vendor · US headquarters (New York) · has a Tokyo base (around 5 名 employees · LinkedIn-confirmed)

## 1. Entity · shareholders

- **Trade name (global)**: Fireblocks Inc.
- **English name**: Fireblocks
- **Japan base**: formal entity incorporation unconfirmed (as of 2026-05 ). LinkedIn confirms around 5 名 Tokyo-based employees
- **Global headquarters**: New York City, USA (per registration). R&D / founding in Tel Aviv, Israel
- **Founded**: 2018 年 (originated in Israel, then relocated to a US HQ)
- **Form**: unlisted private company
- **Major shareholders**: Sequoia Capital (Series D co-lead), Paradigm (Series B lead), BNY Mellon (investment participation 2021-03), Google Ventures and several other VCs
- **Most recent valuation**: $8 billion (at the time of the 2022-01 Series E)

## 2. License · registration status

- **Japan FSA crypto-asset exchange business**: no registration (provides B2B to Japanese VASPs as an infrastructure SaaS vendor)
- **JVCEA membership**: not a member
- **US-domestic license**: holds Fireblocks Trust Company (a US trust company) (since 2024 年)
- **EU**: expanding provision to European banks / institutions as MiCA-compliant infrastructure
- **Positioning under Japanese regulation**: a foreign software vendor providing systems / infrastructure to Japan-domestic VASPs, banks, and trust banks. Because it does not itself custody or handle crypto assets, structurally it does not require a Japanese crypto-asset exchange registration

## 3. Supported assets

- BTC · ETH · EVM-family altcoins broadly, Solana, Sui and other major L1/L2
- stablecoins (USDC · USDT · electronic payment instruments issued by various banks)
- Tokenized RWA (real estate · commodities · securities)
- NFT management (B2B infrastructure level)
- Number of publicly stated supported chains: 50+ blockchains (regularly expanding)

## 4. Business scope · main products

- **MPC Custody (Multi-Party Computation)**: distributed custody of private keys. A combination of hardware isolation + MPC. Provides industry-standard-level security for global financial institutions
- **Policy Engine**: a governance layer that can configure transfer rules · approval flows · compliance gates
- **Treasury Management**: the Fireblocks Network, which executes sending/receiving of digital assets with exchanges / counterparties without private-key exposure
- **Wallet-as-a-Service (WaaS)**: API provision of non-custodial · custodial MPC wallets for enterprises
- **Embedded Wallets**: white-label wallets for consumers (strengthened via the acquisition of Dynamic)
- **Tokenization Engine**: minting · transfer · smart-contract management of RWA
- **Fireblocks Network for Payments**: a network specialized in stablecoin settlement (provision began 2025-09 )
- **DeFi Access**: DeFi protocol connectivity linked with the policy engine
- **COR Compliance**: a MiCA · AML/CFT-compliant compliance package

## 5. Market position · competitive comparison

### Global institutional custody market

| Vendor | Characteristics | Position |
|---|---|---|
| **Fireblocks** | MPC + policy engine, SaaS, 2,400+ institutions | Among the largest global share of institutional MPC infrastructure |
| BitGo | Combines trust + MPC, US-regulation-compliant | Institutional veteran. Also does direct custody |
| Anchorage Digital | Holds a federal bank charter (the only one in the US) | Compliance-oriented, US-centric |
| Ledger Enterprise | HSM + Vault, originated in France | HW-focused, for large banks |
| Komainu | Nomura + Ledger + CoinShares lineage | Institutional, Asia expansion (for detail see [[jp-custody-komainu]]) |

### Domestic Japan competitors · division of roles

**vs. [[exchanges/jp-custody-ginco|Ginco]] (domestic independent)**:
- Ginco brands itself "Japan's No.1  domestic-share wallet for crypto-asset businesses," capturing MPC-wallet demand from domestic VASPs / financial institutions. Japanese-language support · FSA-regulatory-compliance know-how · domestic HSM integration are its strengths (for industry placement see [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]])
- Fireblocks competes in the same area but differentiates on its global network (Fireblocks Network) · rich DeFi integration · the maturity of its policy engine. It accumulates a track record of selection by major megabanks · foreign-capital institutions
- In practice STIR (a domestic Web3  consultancy) handled construction support for a CoinTrade staking system using Fireblocks (2024-02), and adoption via domestic vendors is also advancing

**vs. Komainu (Nomura lineage)**:
- Komainu provides direct custody as a compliance-oriented institutional custodian (Jersey TCSP license · Dubai VARA license). It becomes the custodian itself
- Fireblocks provides, as "infrastructure SaaS," the tools for financial institutions to undertake custody operations themselves. The business models differ, so it is more a division of roles than competition
- However, in trust-bank / VASP in-house-custody-strengthening deals, Fireblocks vs Komainu are sometimes evaluated side by side

## 6. History · Japan expansion

| Date | Event |
|---|---|
| 2017 | While investigating the Lazarus Group's $200M theft from a Korean exchange, Michael Shaulov and others from Check Point developed a sense of crisis |
| 2018 | Fireblocks Inc. founded (Israel) |
| 2019-06 | Officially announced out of stealth with $16M raised |
| 2020-11 | Series B $30M (Paradigm lead) |
| 2021-03 | Series C $133M · BNY Mellon investment participation |
| 2021-07 | Series D $310M (Sequoia co-lead), valuation $2.2B |
| 2022-01 | Series E $550M, valuation $8B |
| 2022 | Acquired First Digital (Israeli stablecoin settlement) for $100M. Joint institutional rollout with FIS |
| 2023 | Acquired BlockFold (Australia, smart contracts) |
| 2024-02 | Japan: STIR supports construction of a CoinTrade staking system leveraging Fireblocks MPC |
| 2025-04 | Japan: the 5 社 of Sumitomo Mitsui Financial Group · Sumitomo Mitsui Banking Corporation · TIS · Ava Labs · Fireblocks jointly examines stablecoin commercialization (announced 2025-04-07) |
| 2025-09 | Fireblocks Network for Payments launched (stablecoin-settlement-dedicated network) |
| 2025-10 | Acquired Dynamic (US, wallet technology) for $90M |
| 2026-01 | Acquired TRES Finance (crypto-asset accounting) for $130M |
| 2026-05 | Japan: integration proof-of-concept with AndGo Wallet (domestic HW wallet) completed (jointly with Intertrade and others) |

**Early Japan involvement**:
- Joint examination of stablecoin + Web3  wallet commercialization with Minna no Bank · TIS · Solana Japan (timing undetermined, around 2024-2025 )
- Mitsui & Co. Digital Commodities (MDC): an RWA token company established by Mitsui & Co. Adopted Fireblocks as its multi-chain rollout base. Issues Zipangcoin (gold-collateralized) · platinum · silver-collateralized tokens. MDC disclosed an issuance cap of JPY 39 億円 (in operation since 2022-02 )

## 7. Recent developments (2025-2026)

- **As of 2026-05 , 2,400  institutions globally** use Fireblocks ($10T+ in transactions, 550M+ wallets)
- Won "Best Blockchain Technology Platform (Digital Assets)" at the **Asian Banker Business Achievement Awards 2026** (Kuala Lumpur, 2026)
- A consortium of 12 行 European banks, "Qivalis," adopted it as the issuance base for an EUR stablecoin (2026)
- Western Union adopted it as the settlement infrastructure for the $USDPT stablecoin (Philippines · Bolivia leading the rollout)
- **Japan**: in 2026-05  there was reporting of a CoinPost CEO interview, "Fireblocks CEO discusses Japan market strategy" (detailed content to be confirmed from the published article)
- IPO observation exists: Bloomberg reported in 2025-11 that "Fireblocks is examining fundraising for an employee-stake buyback"

## 8. Management · Japan base

**Global founders 3 名**:
- **Michael Shaulov** — CEO · co-founder (Israeli, ex-Check Point employee)
- **Pavel Berengoltz** — CTO · co-founder
- **Idan Ofrat** — CPO · co-founder

**Japan base**:
- LinkedIn confirms around 5 名 Tokyo-based employees (as of 2026-05 )
- The name of the Japan-base representative · Country Manager could not be confirmed publicly (not disclosed)
- The entity-registration form of the base (branch / godo kaisha / liaison office, etc.) is unconfirmed

## Related

- [[jp-custody-komainu]] — Nomura-lineage institutional custody competitor
- [[jp-exchange-sbi-vc-trade]] — SBI VC Trade (a Fireblocks customer candidate)
- [[agent-economy/embedded-wallet-network-effects-moat]] — the embedded-wallet competition debate
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge]] — wallet × KYC design
- [[fintech/japan-stablecoin-regulatory-landscape]] — Japan stablecoin regulation
- [[fintech/jp-trust-type-sc-architecture]] — trust-type SC architecture
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional custody three pillars
- [[exchanges/global-institutional-custody-five-pillars]] — global institutional custody 5  pillars
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — JP VASP cold storage segregated-management rules

## Sources

- [Fireblocks About](https://www.fireblocks.com/about/) (retrieved 2026-05-19)
- [Fireblocks Mitsui Customer Story](https://www.fireblocks.com/customers/mitsui/) (retrieved 2026-05-19)
- [Fireblocks — Wikipedia](https://en.wikipedia.org/wiki/Fireblocks) (retrieved 2026-05-19)
- [Fireblocks LinkedIn](https://www.linkedin.com/company/fireblocks/) (retrieved 2026-05-19)
- [CoinPost Fireblocks search results](https://coinpost.jp/?s=Fireblocks) (retrieved 2026-05-19)
- [Atarashii Keizai Fireblocks Sumitomo Mitsui](https://www.neweconomy.jp/?s=Fireblocks+%E4%B8%89%E4%BA%95%E4%BD%8F%E5%8F%8B) (retrieved 2026-05-19)
- [CoinPost: Sumitomo Mitsui Banking Corporation · Fireblocks · Ava Labs · TIS stablecoin examination](https://coinpost.jp/?s=Fireblocks+SMBC) (retrieved 2026-05-19)
- [Ginco Inc. official](https://www.ginco.co.jp/en) (retrieved 2026-05-19, for competitive comparison)

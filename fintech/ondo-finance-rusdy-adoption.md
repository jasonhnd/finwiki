---
title: Ondo Finance · OUSG / USDY / rUSDY / Ondo Chain · 机构化 RWA 全栈玩家
aliases: [ondo-finance-rusdy-adoption, Ondo Finance, OUSG, USDY, rUSDY, Ondo Chain, ondo-rwa-stack, ondo-buidl-partnership]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, ondo, rwa, tokenization, ousg, usdy, rusdy, ondo-chain, buidl-partnership, 2025-2026]
status: active
sources:
  - https://ondo.finance/
  - https://ondo.foundation/
  - https://defillama.com/protocol/ondo-finance
  - https://www.sec.gov/edgar
  - https://www.blackrock.com/us/individual/products/422581/
  - https://docs.ondo.finance/
---

# Ondo Finance · OUSG / USDY / rUSDY / Ondo Chain · 机构化 RWA 全栈玩家

## TL;DR

Ondo Finance 2021 创立,2023 起从单一 tokenized Treasury 产品 (OUSG) 扩展为 **RWA 全栈** = OUSG (合格投资人代币化国债) + USDY (零售可持有 yieldcoin) + rUSDY (rebasing 合规变体) + Ondo Chain (RWA-optimized L1, 2025 公布)。**OUSG 与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 形成深度共生** — Ondo 把 OUSG 后端储备的相当部分换成 BUIDL,作为 BUIDL 在 DeFi 协议层的最大零售分销端。2026-05 Ondo 系列产品 TVL **~$1.5B+**,客户群以**亚洲 (新加坡 / 香港 / 韩国 / 日本) + 拉美 (阿根廷 / 巴西 / 墨西哥) 合格投资人**为主。Ondo 是 **第一家把"代币化 MMF + 零售 yieldcoin + 合规 L1"三件套全部交付的独立 RWA 玩家**。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] for the upstream MMF partnership that defines OUSG economics, with [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] for the second-tier RWA peer differentiation, and with [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]] for the strategic context that lets Ondo position as "institutional" rather than "DeFi-native".

## Product stack — what each token actually is

| Product | Type | Eligible buyer | Underlying | APY (target) | Chains |
|---|---|---|---|---|---|
| OUSG | Tokenized share of Ondo Short-Term Government Treasuries fund | US qualified purchaser (Reg D) + selected non-US institutions | BlackRock BUIDL + short UST | ~4.8% (SOFR-tracking) | Ethereum, Solana, Polygon, Mantle, Sui, Aptos, XRPL |
| USDY | Tokenized note backed by short UST + bank deposits | Non-US individuals / institutions (not US persons) | Short UST + cash | ~4.7% rebased | Ethereum, Solana, Mantle, Sui, Aptos, Cosmos, Noble, Arbitrum |
| rUSDY | Rebase variant of USDY | Same as USDY; allows yield as supply rebase rather than price-rebase | Same as USDY | ~4.7% via rebase | Ethereum, Solana, Mantle, Sui, Aptos |
| Ondo Chain (公布 2025) | RWA-optimized L1 | All Ondo products + 第三方 RWA issuers | N/A (chain) | N/A | Standalone L1 with bridges |
| Flux Finance (DeFi 协议) | Lending market for OUSG | KYC-passed wallets | OUSG / USDC | Variable | Ethereum |

Source: Ondo Finance docs, 2026-05 snapshot.

**Critical distinction**: USDY / rUSDY are **not stablecoins in the GENIUS sense** — they are SEC-registered securities (notes) that happen to track $1. They cannot be marketed as "stablecoins" in US-licensed payment contexts. This is identical to the BUIDL classification logic and intentionally so. The [[fintech/three-circles-stablecoin-mra-framework|three-circles MRA framework]] treats them as a fourth circle: "tokenized yield instruments distinct from payment stablecoins".

## OUSG ↔ BUIDL partnership — the key structural fact

In **2024-Q2** Ondo announced OUSG would re-route the majority of its reserve into **[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]** instead of holding direct short-UST. This was the moment Ondo became the **largest external BUIDL holder**, by some accounts ~40% of BUIDL's then-AUM in mid-2024. The economic logic:

1. BUIDL gives OUSG **T+0 mint/redeem** via the BlackRock × Circle × Goldman / Anchorage instant-redemption facility (USDC-denominated), removing the T+2 settlement friction that pure UST holdings impose.
2. BlackRock takes ~20bps as fund management fee; Ondo charges ~15bps as OUSG sponsor fee; net APY to OUSG holders is SOFR-25 to SOFR-40 bps depending on tier.
3. Ondo escapes the operational burden of running its own UST trading desk, custody, and money-market portfolio — outsourced to BlackRock.
4. BlackRock gets a **distribution channel into DeFi protocols** (Flux, Pendle, Morpho, Aave RWA listings) that BUIDL itself, as a private fund, cannot directly access.

This is the cleanest **issuer × infrastructure partnership** in the RWA space. The deal also explains why Apollo ACRED is structurally separate — Apollo runs its own private credit reserve and does not need to plug into BUIDL the same way OUSG does.

## USDY / rUSDY — the "yieldcoin for non-US individuals"

USDY (launched 2023-08) is **the only sizable yield-bearing token explicitly built for non-US retail individuals**. Underlying = short UST + bank deposits, monthly attestation by Ankura, custody at Ankura Trust. Holders receive yield via either price-rebase (USDY) or supply-rebase (rUSDY). 2026-05 USDY MCap **~$580M**, with strong concentration in:

- **Latin America** (Argentina ~22%, Brazil ~14%, Mexico ~8%) — USDY is the cleanest dollar-yield instrument available to LatAm retail without a US brokerage account.
- **Asia** (Singapore ~12%, Hong Kong ~9%, Japan ~6%) — wealthy individuals using onchain rails to access UST yield directly.
- **Africa / Middle East** (~10%) — UAE-based wealth, Nigerian / Kenyan dollar-hedging demand.

USDY's growth pattern is the inverse of PYUSD: PYUSD is "branded payment rail with no yield", USDY is "uninflected USD with yield". The two do not compete — they serve different demand functions. The closest substitutes for USDY are **Frax sFRAX**, **Sky sUSDS**, and **Ethena sUSDe**, with the differentiator being **regulatory shape** (USDY is the cleanest Reg S note structure) and **chain reach** (USDY deployed on 7+ chains vs sUSDe Ethereum-only).

## Multi-chain deployment — the "RWA on every chain that matters" thesis

By 2026-05 OUSG is live on **Ethereum, Solana, Polygon, Mantle, Sui, Aptos, XRPL**, and USDY on **Ethereum, Solana, Mantle, Sui, Aptos, Cosmos, Noble, Arbitrum**. The intent is for **any chain with institutional capital** to have an Ondo product, removing the "wrong chain" friction. Ondo uses Axelar + LayerZero + Wormhole + Noble's native USDC issuance for cross-chain movement. The strategy mirrors how USDC went multi-chain (currently 20+ chains via [[fintech/cbbtc-institutional-btc-wrapper|Circle CCTP]] equivalent rails), and Ondo's reach is now ~7-8 chains and growing.

## Ondo Chain — the L1 thesis

Announced **2025-01** at Ondo Summit, **Ondo Chain** is an EVM-compatible L1 targeted specifically at RWA issuance and trading. Distinguishing features (per public docs):

- **Validator set composed of regulated financial institutions** (Franklin Templeton, McKinsey, ICE, Aon, Wellington, Wisdom Tree, ABN AMRO publicly disclosed as design partners).
- **Native KYC layer** — wallet-level identity attached to transfer permissions for restricted tokens.
- **Built-in support for tokenized securities** with on-chain transfer-agent functionality.
- **Bridges to Ethereum, Solana, and major institutional chains** at launch.

Ondo Chain has not launched mainnet as of 2026-05 (testnet phase). The strategic intent is to make Ondo the **default issuance chain for tokenized real-world assets**, capturing both fee revenue and a settlement-layer position. The closest analogue is **Circle Arc** (announced 2025), which targets the same RWA L1 wedge from the issuer side. Both are part of the broader [[fintech/protocol-hedge-strategy-stripe-pattern|protocol hedge strategy]] visible across Stripe Tempo, Coinbase Base, and Ripple XRPL.

## Adoption metrics 2024-2026

| Metric | 2024-Q1 | 2025-Q1 | 2026-Q1 | 2026-05 |
|---|---|---|---|---|
| OUSG TVL | $130M | $400M | $750M | $830M |
| USDY MCap | $50M | $260M | $510M | $580M |
| Combined RWA TVL | $200M | $680M | $1.3B | $1.5B+ |
| Chain coverage (OUSG) | 1 (Ethereum) | 5 | 7 | 7 |
| Institutional partners (disclosed) | 3 | 7 | 18 | ~25 |
| Validator partners (Ondo Chain) | — | 6 (announced) | 12+ | 14 |

Source: Ondo public attestation reports + DefiLlama Ondo protocol page, snapshot 2026-05-15.

## Flux Finance and DeFi composability

Ondo's DeFi composability layer is **Flux Finance**, a Compound v2 fork that allows OUSG as collateral. Flux launched in 2023 to solve a specific problem: institutions holding OUSG wanted access to **USDC liquidity without unwinding their Treasury position**. Flux's mechanics:

1. KYC-passed institutional wallet deposits OUSG into Flux as collateral.
2. Wallet borrows USDC against OUSG at LTV ~85-90%.
3. Borrow rate floats with Compound-style supply/demand curve, typically SOFR + 30-80 bps.
4. Lenders of USDC into Flux receive yield from borrowers + interest payments — generally below OUSG's underlying Treasury yield.

This makes OUSG **operationally similar to a money-market sweep account**: hold the yield-bearing instrument, borrow against it for short-term liquidity, repay when liquid cash arrives. Flux TVL was ~$60M by 2025-Q3, growing to ~$110M by 2026-05. Flux is a niche product but it solves the **"why hold tokenized MMF instead of USDC"** institutional question concretely. For comparison, BUIDL has the BlackRock × Circle T+0 facility as its equivalent liquidity solution — different architecture, same outcome.

## Strategic relationships matrix

| Counterparty | Relationship type | Strategic function |
|---|---|---|
| BlackRock | Sub-fund advisor (BUIDL as OUSG reserve) | Outsourced treasury management; T+0 redemption via BUIDL infrastructure |
| Securitize | Tokenization platform (shared with BUIDL, ACRED) | Issuance and transfer-agent layer |
| Coinbase Asset Management | Distribution + investor | OUSG / USDY US institutional channel |
| Kraken | Distribution (USDY) | Non-US retail with KYC-passed users |
| Mantle Foundation | Chain deployment + DeFi partner | Mantle Treasury holds OUSG; chain composability |
| Sui Foundation | Chain deployment + ecosystem partner | Sui Asia-Pacific reach |
| Aptos Labs | Chain deployment + ecosystem partner | Aptos Asia-Pacific institutional reach |
| Wisdom Tree | Co-disclosed Ondo Chain validator partner | TradFi RWA chain validator |
| Wellington Management | Ondo Chain validator partner | Institutional-grade validator |
| ABN AMRO | Ondo Chain validator partner | European bank participation |
| Franklin Templeton | Ondo Chain validator partner | Sister tokenized-MMF player as validator |
| Pantera Capital | Investor + ecosystem partner | Early-stage RWA infrastructure capital |

This counterparty list is **the strongest in the tokenized-yield-non-BlackRock category**. Apollo ACRED has Coinbase + Kraken but does not have Franklin Templeton or ABN AMRO. The validator list is essentially the BUIDL "design partner" list rebranded, which underscores the BlackRock-aligned positioning.

## Founder and governance context

Ondo Finance was co-founded by **Nathan Allman** (CEO, ex-Goldman digital-asset team) and **Pinku Surana** (CTO). The founding thesis (per 2021 white paper): the largest gap in DeFi is **regulated yield primitives** — DeFi-native users want yield, but the only yield available is from speculation (lending, perps, LP positions). Tokenized US Treasury yields fill this gap.

The 2024 founding of **Ondo Foundation** (DAO governance shell) reflects an intentional split:

1. **Ondo Finance Inc.** — for-profit operating company, fee revenue from OUSG / USDY sponsorship.
2. **Ondo Foundation** — non-profit DAO, future Ondo Chain validator coordination, governance of public-good infrastructure.

This pattern — operating company + foundation — mirrors how Compound, Uniswap, and Solana split for-profit and protocol-governance functions. Whether it materially decentralizes Ondo's strategic direction (vs being a brand split) remains an open question.

## Geographic adoption breakdown

USDY (the most retail-accessible Ondo product) has distinctive geographic concentration that other tokenized-yield instruments do not. By Ondo's public disclosures and DefiLlama on-chain analysis:

| Region | Share of USDY holders | Estimated MCap concentration | Demand driver |
|---|---|---|---|
| Latin America (AR, BR, MX, CL, CO) | ~32% | ~$185M | Dollar-hedging against ARS, BRL devaluation; access to UST yield without US brokerage |
| Asia ex-Japan (SG, HK, KR, TW) | ~27% | ~$155M | High-net-worth onchain yield access; alternative to bank deposits at 0.5-1% |
| Japan | ~6% | ~$35M | Niche; constrained by JFSA stance on yield-bearing foreign instruments |
| Middle East (UAE, KSA, Bahrain) | ~9% | ~$50M | Crypto-native HNW wealth; ADGM / DIFC regulatory comfort |
| Africa (NG, KE, ZA) | ~7% | ~$40M | Dollar-hedging against NGN, KES, ZAR depreciation |
| Europe (Switzerland, UK ex-EU, Eastern Europe) | ~13% | ~$75M | Non-EU positions; Eastern European dollar-hedging |
| North America non-US (CA, MX) | ~3% | ~$18M | CA users using onchain rails |
| Other / unknown | ~3% | ~$20M | Various |

The LatAm + Asia + Middle East concentration is ~68% of USDY holders. This makes USDY one of the few tokenized-yield products explicitly **non-US-retail-dominant**. It also makes USDY sensitive to **localized regulatory crackdowns** — Argentina's capital control reforms in 2025-Q3 actually increased USDY adoption (people moving pesos to onchain dollars + earning yield), while Brazil's Pix-stablecoin rules in 2025-Q4 modestly decreased growth as users had cleaner local-currency rails for daily use.

## Sponsored vs unsponsored DeFi composability

A subtle but strategically important pattern: **Ondo's DeFi composability is sponsor-mediated**, not permissionless. OUSG cannot be added as collateral to Aave, Morpho, Compound, or Spark without **Ondo's explicit support** because the KYC restriction is built into the transfer permissions of the OUSG token contract. This is **opposite** to USDC's permissionless DeFi composability and is closer to BUIDL's model.

Implications:

1. Ondo decides which DeFi protocols get OUSG access. Currently: Flux Finance (Ondo's own fork), Morpho (selected vaults), Pendle (PT-OUSG markets), Mantle's Mantle Treasury, Sui native lending protocols.
2. Permissionless DeFi protocols (Uniswap, Curve, generic Aave markets) **cannot list OUSG** without Ondo whitelisting.
3. USDY has somewhat looser composability — non-US retail wallets can interact with USDY in DeFi venues that support non-US retail, but the wallet must pass Ondo's KYC layer.
4. rUSDY (the rebase variant) was launched specifically because the standard USDY's daily price drift broke some DeFi protocol integrations; rUSDY's supply rebase keeps a constant $1 price for cleaner DeFi composition.

This sponsor-mediated composability is the **standard model for regulated tokenized funds**. It is what allows OUSG / USDY / BENJI to exist in the same multi-chain DeFi environments as USDC without triggering SEC unregistered-distribution concerns.

## Counterpoints

The Ondo / BUIDL deep coupling means a hypothetical BlackRock decision to reduce BUIDL's external distribution (or to launch a direct retail product competing with USDY) would be existential for OUSG economics — Ondo would face a 12-18 month rebuild to in-house all reserve management. The Ondo Chain L1 thesis competes with at least four other RWA-focused chains (Circle Arc, Avalanche subnets, Polygon CDK RWA stacks, and Provenance) and the validator-as-institutional-partner model has not yet been proven at scale; institutional validators have governance overhead that could slow chain evolution. USDY's concentration in LatAm and Asia gray-to-white retail demand makes it sensitive to localized AML / capital control crackdowns; Argentina's 2025 dollarization debate and the Brazil Pix-stablecoin rules both move USDY adoption non-linearly. SEC categorization of USDY as a security (intentional, by Ondo) caps the US distribution lane and forces all US-facing institutional buying through OUSG (the Reg D vehicle), limiting OUSG / USDY interconvertibility for cross-jurisdiction wallets. The 2024-Q2 BUIDL-first reroute also raised concentration risk: if BUIDL ever has a redemption issue (despite the BlackRock × Circle T+0 facility), OUSG would inherit it directly.

## Open questions

When does Ondo Chain mainnet launch and which institutional validators actually run nodes vs name-only support? Does Ondo's USDY MCap cross $2B in 2027 to become the dominant non-US retail yieldcoin? Does BlackRock launch a direct competitor to USDY (rumored "BUIDL Retail") and if so does Ondo pivot away from BUIDL backing? Does Ondo expand into private credit (ACRED-overlap) or stay disciplined on Treasury / cash products? Does the [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]] track bring USDY into Japanese retail under FSA recognition? Will Ondo Foundation governance evolve to a true on-chain DAO or stay sponsor-led?

## Related

- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL stablecoin-issuer adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 neutral infrastructure]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|Three circles SC MRA]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC institutional wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|Onchain finance vs crypto bifurcation]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Issuer-distributor realignment · Arc strategy]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]]
- [[exchanges/INDEX|exchanges index]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock digital-asset template]]

## Sources

- Ondo Finance official page (ondo.finance)
- Ondo Foundation governance page (ondo.foundation)
- Ondo Finance protocol docs (docs.ondo.finance)
- DefiLlama Ondo Finance dashboard (defillama.com/protocol/ondo-finance)
- BlackRock BUIDL fund page (blackrock.com)
- SEC EDGAR public filings related to OUSG and USDY (sec.gov/edgar)
- Public Ondo Summit 2025 announcements (Ondo Chain disclosures)
- Ankura Trust monthly USDY transparency reports (public)

---
source: exchanges/jp-crypto-staking-as-a-service-operators
source_hash: f43328f5505d7180
lang: en
status: machine
fidelity: ok
title: "Domestic-facing Staking-as-a-Service (StaaS) operator layer"
translated_at: 2026-05-31T03:19:56.446Z
---

# Domestic-facing Staking-as-a-Service (StaaS) operator layer

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-institutional-custody-three-pillars|国内機関カストディ三本柱]] for peer / contrast context and [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制]] for the broader system / regulatory boundary.

## Overview

The **Staking-as-a-Service (StaaS)** market, in which validator operation for PoS-based chains (Ethereum / Solana / Cardano / Polkadot / Cosmos / Tezos / Avalanche, etc.) is outsourced to specialist companies, has grown rapidly in the institutional-investor segment since the Ethereum The Merge (2022-09). Domestically, a two-layer structure exists: **retail services from domestic VASPs** and **B2B provision for institutions from overseas StaaS operators**. The FSA's operational interpretation treats "delegated staking by a custodian = within the scope of crypto-asset exchange business," so retail-facing delegated staking is limited to holders of a VASP license.

## Retail staking services from domestic VASPs

Each domestic FSA-registered VASP offers this to its own custody customers:

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]] (formerly SBI VC Trade lineage)** — distributes staking rewards for ETH / SOL / DOT, etc. to customers (see the official "staking" page)
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** — progressively expands the eligible currencies such as DOT / TEZ / XTZ / ATOM
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** — broad coverage including ETH / SOL / DOT / ADA / ATOM
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** — offers both lending and staking
- **[[exchanges/jp-exchange-bitbank|bitbank]]** — offers XTZ / DOT, etc.
- **[[exchanges/jp-exchange-bittrade|BitTrade]] (HUOBI lineage)** — domestic rollout of global HUOBI's staking products

Reward rates run at roughly 1-10% per annum depending on the currency, distributed to customers after deduction of the VASP's fee. Its **legal character is equivalent to a "loan / deposit of crypto assets,"** a scheme in which rewards are later returned in proportion to the quantity deposited.

## Japan-facing B2B provision from overseas StaaS operators

Institutional-facing StaaS is dominated by overseas specialist operators. With no domestic legal entity present, **domestic institutions access it via an overseas contract + KYC + Travel Rule**:

- **Kiln (formerly SkillZ, Paris-based 2018-)** — institutional-grade non-custodial StaaS. **B2B API + dashboard**. Partners with Komainu; 100+ integrations including Crypto.com, Ledger Live, Stakewise
- **Figment (Canada, Toronto 2018-)** — deeply integrated with North American institutional custodians such as Coinbase Custody, Anchorage Digital, and BitGo. **Multi-chain support (40+ chains)**
- **Allnodes / Stakefish / Chorus One / P2P.org / Blockdaemon** — each independent, mixing institutional + retail
- **Coinbase Cloud (formerly Bison Trails)** — global institutional-facing, integrated with Coinbase-lineage products
- **Lido (DAO-based)** — decentralized Liquid Staking protocol. Started the **institutional-facing Lido Institutional (DSL)** stream in 2024 

### Usage patterns of domestic institutions

Typical routes when a domestic institution (life insurer / trust / FoF) takes ETH staking exposure:

1. **[[exchanges/jp-custody-komainu|Komainu]] (Nomura HD + CoinShares + Ledger JV) + Kiln** — direct validator + reporting provided as a package
2. **[[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan]] + overseas validator (Figment / Chorus One)** — non-custodial delegation via a Fireblocks MPC wallet
3. **Domestic VASP institutional OTC + staking combination** — via [[exchanges/jp-crypto-market-maker-otc-layer|国内 MM / OTC 層]]

## Regulatory issues

- **Payment Services Act**: delegated staking = management business of crypto assets → VASP registration required (FSA operational interpretation)
- **Securities status under the FIEA**: the securities status of Lido stETH / liquid staking tokens (LST) is not yet determined
- **Tax**: staking rewards = taxed at market value at the time of receipt (individuals = miscellaneous income, corporations = gross profit) → [[exchanges/jp-crypto-asset-taxation-detailed|暗号資産税制]]
- **Accounting**: JICPA industry-committee practical guidelines (reward-recognition timing, book value) remain under ongoing discussion
- **AML / Travel Rule**: interpretation of the scope of [[exchanges/jp-vasp-aml-travel-rule-implementation|犯収法 + FATF Travel Rule]]
- **JVCEA rules**: [[exchanges/jvcea-self-regulatory-overview|JVCEA]] applies caps on lending transactions including staking under its "rules on the lending of crypto assets"

## Liquid Staking Tokens (LST) and domestic handling

LSTs such as stETH (Lido) / rETH (Rocket Pool) / cbETH (Coinbase) are still only limitedly listed on the domestic JVCEA WhiteList. **Direct ETH + domestic VASP delegated staking** is the mainstream. Whether LSTs can be handled domestically going forward depends on the progress of regulation + the JVCEA WhiteList.

## Coordination with audit + legal

Institutions using StaaS seek parallel advice from **[[exchanges/japan-crypto-audit-firm-landscape|監査法人]]** and **[[exchanges/japan-crypto-law-firm-landscape|法律事務所]]**. Validator slashing, MEV (Maximum Extractable Value) governance, multi-validator dispersion policy, and the like are the points at issue.

## Related

- [[exchanges/jp-institutional-custody-three-pillars]] — institutional custody
- [[exchanges/jp-custody-komainu]] — Komainu
- [[exchanges/jp-custody-fireblocks-japan]] — Fireblocks Japan
- [[exchanges/jp-custody-ginco]] — Ginco
- [[exchanges/jp-crypto-market-maker-otc-layer]] — MM / OTC layer
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA registration regime
- [[fintech/japan-financial-regulation]] — higher-level financial regulation

## Sources

- Kiln official: https://www.kiln.fi/
- Figment official: https://www.figment.io/
- bitFlyer staking: https://www.bitflyer.com/ja-jp/staking
- GMO Coin: https://coin.z.com/jp/
- SBI VC Trade: https://www.sbivc.co.jp/
- JVCEA official (rules): https://jvcea.or.jp/

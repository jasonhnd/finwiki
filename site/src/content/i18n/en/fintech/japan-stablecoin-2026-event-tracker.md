---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: 49ad69ff450cb0cc
lang: en
status: machine
fidelity: ok
title: "Japan Stablecoin 2026 Event Tracker · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI Amendment"
translated_at: 2026-05-31T06:16:15.745Z
---

# Japan Stablecoin 2026 Event Tracker · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI Amendment

## TL;DR

2026 is the inflection year in which Japan's stablecoin industry moves from **"PoC to mainnet."** **JPYC** officially launched on mainnet (Ethereum + Polygon + Astar) in 2025-Q4 and reached circulation of **approximately ￥9.2B (~$60M)** by 2026-05. **Progmat** plans to launch a megabank trust-led **USD-anchored Type 3 EPI** (Progmat USD) in 2026-Q2. **DCJPY (DeCurret)** transitioned in 2026-Q1 to live operation of a closed consortium involving major trading houses, power companies, and distribution firms. **SBI VC Trade USDC** has circulation of **approximately ￥45B (~$295M)** and remains the sole licensed distribution channel for USDC in Japan (see [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC ring]]). At least 2 of KDDI au Wallet, NTT Docomo dpay, LINE Finance, and PayPay are considering EPI service provider applications in 2026-Q3-Q4. **FSA EPI Amendment (Round 2)** is scheduled to begin public comment in 2026-Q2, focusing on clarification of trust-type stablecoin structuring and distribution rules, expansion of overseas stablecoin circulation, and treatment of yield-bearing stablecoins for institutional investors.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] for the regulatory frame, [[fintech/japan-epi-three-types-overview|EPI three-types overview]] for taxonomy, and [[fintech/japan-epi-four-camps-comparison|EPI four-camps comparison]] for the competitive landscape. For key issuers and distributors, see [[payment-firms/jpyc|JPYC Co., Ltd.]], [[payment-firms/progmat|Progmat Inc.]], and [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]].

## 2026 Key event timeline

| Month | Event | Related entities | Implication |
|---|---|---|---|
| 2025-Q4 | JPYC official mainnet launch | JPYC Co., Ltd. | "Type 1 EPI" phase begins under the revised Payment Services Act |
| 2025-12 | DCJPY consortium transitions to live operation | DeCurret + Mitsubishi Corporation + Kansai Electric Power + AEON | B2B payments in trading, power, and distribution go live |
| 2026-01 | SBI VC Trade USDC business expansion (new corporate OTC service) | SBI VC Trade + Circle | Domestic USDC circulation surpasses ￥30B |
| 2026-Q1 | Progmat · MUTB · SMBC · Mizuho Type 3 EPI USD-anchored design completed (announced) | Progmat + three megabank trust banks | Trust-type USD stablecoin design finalised |
| 2026-Q2 | Progmat USD launch (planned) | Progmat | Japan's first trust-type USD stablecoin mainnet |
| 2026-Q2 | FSA EPI Amendment Round 2 public comment begins (planned) | FSA | Clarification of trust-type SC rules + expansion of overseas SC circulation |
| 2026-Q2 | JPYC circulation surpasses ￥10B (forecast) | JPYC Co., Ltd. | Scale benchmark for Type 1 EPI |
| 2026-Q3 | KDDI au Wallet considers EPI service provider application (reported) | KDDI + au PAY | Potential first mover in the carrier sector |
| 2026-Q3 | NTT Docomo dpay reconsiders crypto-asset strategy (reported) | NTT Docomo | Possible second-mover development in the carrier sector |
| 2026-Q4 | LINE Finance · LINE Pay stablecoin strategy clarified (forecast) | LINE Finance + Z Holdings | Possible link to LINE Xenon JPY SC |
| 2026-Q4 | PayPay · SoftBank announce stablecoin involvement policy (forecast) | PayPay | Possible entry by Japan's largest QR payment operator |

## JPYC mainnet expansion

**Current status (2026-05)**:

- Circulation: ￥9.2B (~$60M), representing 7.5x growth in 6 months since the 2025-Q4 mainnet launch
- Deployed chains: Ethereum (primary) + Polygon + Astar + Avalanche (phased)
- User count (wallet holders): approximately 120,000
- Main use cases: DeFi (Aave / Compound JPY pair), cross-border remittance (Philippines / Vietnam), crypto-exchange JPY pairs (Bitbank / BITPoint / some overseas exchanges), and limited-pilot corporate B2B payroll and expense reimbursement
- Regulatory status: FSA funds-transfer registration Type 2 (Kanto Local Finance Bureau Director No. 00099), positioned as "Type 1 EPI" under the revised Payment Services Act (see [[fintech/japan-epi-three-types-overview|EPI three-types overview]])

**2026 H2 plan**:

1. **Phased remittance-limit increase**: current ￥1M/transaction to ￥3M/transaction (application pending)
2. **JPYC v2** release (EIP-3009 / Permit + USDC-style ERC-20Permit + multi-chain canonical bridge standardisation)
3. **Corporate partners to exceed 50**: live expansion of payroll, expenses, and micropayment operations
4. **Official listing on overseas exchanges**: Binance Japan (if listed, within EPI scope), KuCoin, Bybit, and others, although the need for a domestic EPI service provider remains unclear
5. **Stripe / Square-style API offering**: rollout of a JPYC direct-connection SDK
6. **DeFi integration**: deeper Aave, Compound, and Curve JPY liquidity pools plus Uniswap v4 hook-based spot liquidity

JPYC is a typical **funds-transfer-type EPI** under the revised Payment Services Act, so its regulatory path differs from trust-type stablecoins such as Progmat and from ECISB-routed stablecoins. For details, see [[fintech/japan-epi-four-camps-comparison|EPI four-camps comparison]] and [[fintech/japan-ecisb-license|Japan ECISB license]].

## Progmat USD launch (trust-type USD stablecoin)

**Positioning**: Progmat (see [[payment-firms/progmat|Progmat Inc.]]) is a digital-asset platform backed by megabank trust banks (MUTB 49% + SMBC 15% + Mizuho 15%) plus NTT Data and JPX. The issuer is the trust bank; Progmat is the platform provider.

**Progmat USD design concept** (based on 2026-Q1 announcements):

- **Issuer**: Mitsubishi UFJ Trust and Banking (lead) + Mizuho Trust & Banking (co-issuer) + Sumitomo Mitsui Trust Bank (co-issuer) under a joint trust scheme
- **Legal classification**: **Specified trust beneficiary rights (Type 3 EPI)** under the revised Payment Services Act, USD-anchored
- **Backing assets**: US short-term Treasuries + USD deposits (MUFG New York branch / US correspondent banks) + USD cash
- **Third-party audit**: monthly PwC Arata + Deloitte Touche Tohmatsu
- **Chains**: Ethereum + Polygon + Avalanche + JPX-DLT (Hyperledger Besu, domestic-institution private network)
- **Target users**: institutional investors and large enterprises for USD settlement, FX hedging, and cross-border B2B payments
- **Distribution scheme**: distributed through EPI service providers such as SBI VC Trade; no direct overseas-exchange listing for the time being

**Link to Project Pax**: Progmat USD is also positioned as the production version of "Project Pax" (MUFG + SBI joint proof of concept), enabling SWIFT MT 103 to blockchain-based cross-border USD payments. Progmat USD is the combination of **trust-type stablecoin + SWIFT compatibility + institutional-grade USD settlement**.

**Significance**: This is the first **USD-denominated** implementation of [[fintech/jp-trust-type-sc-architecture|trust-type stablecoin architecture]]. Until now, Progmat has mainly focused on JPY security tokens, real-estate security tokens, and corporate-bond security tokens; a USD stablecoin opens the door to international institutional-investor use cases.

## DCJPY (DeCurret) consortium live operation

**DCJPY** is a private stablecoin operated by DeCurret Holdings (formerly DeCurret Co., Ltd.). Its defining characteristic is a **bank-issued model** in which each bank issues JPY-based "digital currency" and interoperable circulation occurs on the DCJPY network, see [[fintech/jp-stablecoin-dcjpy|DCJPY overview]].

**2025-12 to 2026-Q1 transition to live operation** (based on announcements):

- **Participating banks (issuers)**: MUFG Bank / Mizuho Bank / SMBC / Resona Bank / other regional banks (phased)
- **Participating consortium (users)**: Mitsubishi Corporation + Kansai Electric Power + AEON + JR East + NTT East + major trading houses and logistics companies
- **Use cases**: B2B settlement (trading-house to manufacturer parts payments), power wholesale trading settlement, and distribution supply-chain settlement (AEON and wholesalers)
- **Scale (2026-05)**: monthly circulation approximately ￥150B (~$1B equivalent)

**Important distinction**: DCJPY is structurally distinct from JPYC and Progmat. It follows a "bank-issued + consortium-compatible" model. Whether **Type 3 EPI** applies is still contested, because it is not a trust scheme and some interpret it as a separate category. The FSA currently appears to tolerate DCJPY as a form of bank self-managed electronic payment instrument. FSA EPI Amendment Round 2 may clarify this ambiguity.

## SBI VC Trade USDC expansion

**SBI VC Trade** (see [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]) is an **EPI service provider** (Kanto Local Finance Bureau Director No. 00001) and the sole licensed handler of USDC in Japan.

**2026 H1 expansion**:

- Circulation balance: ￥45B (~$295M, 2026-05), up 2.5x from ￥18B in 2025-12
- Corporate OTC service launched in 2026-01, allowing Japanese companies to hold USDC directly
- Limited DeFi linkage: indirect provision of USDC deposit routes to selected compliant protocols via SBI VC Trade
- In-house development of automated KYC and Travel Rule compliance via smart contracts remains underway
- Direct correspondent relationship with Circle Japan expected to be announced in 2026-Q2

**Implications of the SBI × JPYC ring**: SBI and JPYC do not have a capital relationship, but SBI VC Trade handles USDC and SBI Holdings has shown an investment-and-support posture toward the broader domestic EPI industry, including JPYC. For more, see [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC ring]].

## Carrier and QR payment sector entry watch

**Observation targets: 4 entities** (2026 H2 developments):

### KDDI au Wallet / au PAY

- Reported in 2026-04 Nikkei: "KDDI is considering applying for EPI service provider status, with a view to stablecoin-ising au PAY balances"
- Strategy: bring au users (~45M IDs) into a stablecoin ecosystem
- Challenges: legal reconciliation with the existing prepaid payment instrument (au Wallet), and whether KDDI issues its own stablecoin or acts as a distributor like SBI VC Trade

### NTT Docomo dpay / d Payment

- Reported in 2026-03: "Docomo scaled back its crypto-asset division in 2024 but is reconsidering in 2026"
- Strategy: stablecoin-ise d Payment (~50M IDs) together with Docomo Bank (post-Shinsei Bank integration)
- Challenges: sorting out the legacy relationship with the former Coincheck affiliation under Monex Group

### LINE Finance / LINE Pay / LINE Xenon

- LINE Xenon JPY stablecoin was suspended after a PoC phase in 2020-2022
- Z Holdings' post-reorganisation stablecoin strategy remains undecided
- Reported in 2026-05: "Z Holdings is re-examining stablecoin integration strategy internally"
- Strategy: internationalise LINE Pay (~90M IDs, primarily in Asia) through stablecoin-based cross-border channels

### PayPay

- Largest domestic QR payment operator (~60M IDs, monthly payment value ￥3T+)
- Stablecoin direction is complicated by SoftBank capital relationships
- Public disclosures do not yet announce stablecoin involvement, but industry observers expect "PayPay × stablecoin tie-up or native issuance" could emerge by 2027

**Implications**: If even 1 of these 4 entities enters the market as an EPI service provider or trust-type stablecoin issuer, Japan's stablecoin market could quickly scale to tens of millions of users. That would effectively establish a "carrier and QR payment fourth camp" within [[fintech/japan-epi-four-camps-comparison|EPI four-camps comparison]].

## FSA EPI Amendment Round 2 (public comment scheduled for 2026-Q2)

**Issue 1: clarification of trust-type stablecoin structuring and distribution**

- Detailed rules for issuance and circulation of trust-type USD stablecoins such as Progmat USD
- Allocation of responsibilities between trust custodian banks and distributors (EPI service providers)
- Eligibility of overseas trusts such as a BNY Mellon USD trust

**Issue 2: expansion of overseas stablecoin circulation**

- Currently only SBI VC Trade handles USDC; the question is whether other overseas stablecoins such as USDT, EURC, and PYUSD can circulate
- Whitelist approach (only FSA-certified stablecoins permitted) versus blacklist approach (prohibited stablecoins specified)
- Formalisation of handling standards based on issuer regulatory status, transparency, and auditing

**Issue 3: yield-bearing stablecoins for institutional investors**

- Treatment of yield-bearing stablecoins such as USDM (M0), sUSDe (Ethena), and USDY (Ondo)
- Interest payment is currently not allowed under the funds-transfer-type EPI framework, and only partially conceivable under the trust-type EPI framework
- Examination of an institutional-investor regime equivalent to Reg-D 506(c)

**Issue 4: regulation of DeFi linkage**

- Compliance status of JPYC and SBI VC Trade USDC connections to DeFi protocols such as Aave and Compound
- Travel Rule compliance through smart contracts under Japan's interpretation of FATF Recommendation 16
- Whether "DEX trading in DeFi" falls within EPI service provider business

**Implications**: FSA EPI Amendment Round 2 would break the current JPYC-centred status quo and formally institutionalise a **four-camp parallel structure** consisting of Progmat (trust-type), SBI VC Trade (overseas SC), and carriers or other new entrants.

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]
- [[fintech/japan-epi-three-types-overview|EPI three-types overview]]
- [[fintech/japan-epi-four-camps-comparison|EPI four-camps comparison]]
- [[fintech/jp-stablecoin-progmat|Progmat overview]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY overview]]
- [[fintech/jp-trust-type-sc-architecture|trust-type stablecoin architecture]]
- [[fintech/japan-ecisb-license|Japan ECISB license]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC ring]]
- [[payment-firms/jpyc|JPYC Co., Ltd.]]
- [[payment-firms/progmat|Progmat Inc.]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/japan-financial-regulation|Japan financial regulation: banking, securities, payment, and licensing boundary]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA implementation status 2026]]

## Sources

- FSA · Crypto assets and electronic payment instruments policy https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- FSA · Electronic payment instruments service provider registration list https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC Co., Ltd. · News releases https://jpyc.co.jp/news
- Progmat Inc. · News https://progmat.co.jp/news
- DeCurret DCJPY · official site https://www.dcjpy.jp/
- SBI VC Trade · USDC https://www.sbivc.co.jp/usdc
- KDDI · Corporate news release https://www.kddi.com/corporate/newsrelease/
- NTT Docomo · News release https://www.docomo.ne.jp/info/news_release/
- LINE Corporation · Press Release https://linecorp.com/en/pr/
- PayPay · News release https://about.paypay.ne.jp/press/
- Nikkei 2026-04 reporting (KDDI EPI application under consideration, public article)
- Nikkei 2026-03 reporting (Docomo crypto-asset reconsideration, public article)

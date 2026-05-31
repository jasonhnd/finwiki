---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: 49ad69ff450cb0cc
lang: en
status: machine
fidelity: needs_review
title: "Japan Stablecoin 2026  Event Tracker · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI Amendment"
translated_at: 2026-05-31T06:16:15.745Z
---

# Japan Stablecoin 2026  Event Tracker · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI Amendment

## TL;DR

2026 年 is the inflection year for Japan's stablecoin industry moving from **"PoC → mainnet."** **JPYC** officially launched on mainnet (Ethereum + Polygon + Astar) in 2025-Q4  and reached circulation of **approximately ¥9.2B (~$60M)** by 2026-05 ; **Progmat** plans to launch a megabank trust-led **USD-anchored 第3号 EPI** (Progmat USD) in 2026-Q2 ; **DCJPY (DeCurret)** transitioned in 2026-Q1  to live operation of a closed consortium involving major trading houses + power companies + distribution firms; **SBI VC Trade USDC** has circulation of **approximately ¥45B (~$295M)** and is the sole licensed distribution channel for USDC in Japan (→ [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]); at least 2 社 of KDDI au Wallet × NTT Docomo dpay × LINE Finance × PayPay are considering applying for EPI service provider status in 2026-Q3-Q4 . **FSA EPI Amendment (Round 2)** is scheduled to begin public comment in 2026-Q2 , with key issues including clarification of rules for structuring and distributing trust-type stablecoins + expansion of the circulation scope of overseas stablecoins + treatment of yield-bearing stablecoins for institutional investors.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]] for the regulatory frame, [[fintech/japan-epi-three-types-overview|EPI 三類型概要]] for taxonomy, and [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] for competitive landscape. For key issuers and distributors, see [[JapanFG/jpyc|JPYC株式会社]], [[JapanFG/progmat|株式会社Progmat]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]].

## 2026  Key Event Timeline

| Month | Event | Related entities | Implication |
|---|---|---|---|
| 2025-Q4  | JPYC official mainnet launch | JPYC Co., Ltd. | "EPI 第1号" begins (post-revised Payment Services Act) |
| 2025-12  | DCJPY consortium transitions to live operation | DeCurret + Mitsubishi Corporation + Kansai Electric Power + AEON | B2B payments in trading, power, and distribution go live |
| 2026-01  | SBI VC Trade USDC business expansion (new corporate OTC service) | SBI VC Trade + Circle | Domestic USDC circulation surpasses ¥30B |
| 2026-Q1  | Progmat × MUTB × SMBC × Mizuho **第3号 EPI USD-anchored** design completed (announced) | Progmat + three megabank trusts | Trust-type USD stablecoin design finalised |
| 2026-Q2  | Progmat USD launch (planned) | Progmat | Japan's first trust-type USD stablecoin mainnet |
| 2026-Q2  | FSA EPI Amendment Round 2 public comment begins (planned) | FSA | Trust-type SC regulatory clarification + overseas SC circulation expansion |
| 2026-Q2  | JPYC circulation surpasses ¥10B (forecast) | JPYC Co., Ltd. | Scale benchmark for EPI 第1号 |
| 2026-Q3  | KDDI au Wallet considers EPI service provider application (reported) | KDDI + au PAY | Carrier-sector first-mover observation |
| 2026-Q3  | NTT Docomo dpay reconsiders crypto asset strategy (reported) | NTT Docomo | Carrier-sector second-mover developments |
| 2026-Q4  | LINE Finance × LINE Pay stablecoin strategy clarified (forecast) | LINE Finance + Z Holdings | Potential link to LINE Xenon JPY SC |
| 2026-Q4  | PayPay × SoftBank announce stablecoin involvement policy (forecast) | PayPay | Observation of entry by Japan's largest QR payment operator |

## JPYC Mainnet Expansion

**Current status (2026-05)**:

- Circulation ¥9.2B (~$60M); 7.5x growth in 6  months since 2025-Q4  mainnet launch
- Deployed chains: Ethereum (primary) + Polygon + Astar + Avalanche (phased)
- User count (wallet holders) approximately 12 万
- Primary use cases: DeFi (Aave / Compound JPY pair) / cross-border remittance (Philippines / Vietnam) / crypto exchange JPY pairs (Bitbank / BITPoint / some overseas exchanges) / corporate B2B payroll and expense reimbursement (limited pilot)
- Regulatory status: FSA funds-transfer Type 2 registration (Kanto Financial Bureau Director 第00099号); positioned as "EPI 第1号" under the revised Payment Services Act (→ [[fintech/japan-epi-three-types-overview|EPI 三類型概要]])

**2026 H2  Plan**:

1. **Phased increase in remittance limit**: current ¥1M/transaction → ¥3M/transaction (application pending)
2. **JPYC v2** release (EIP-3009 / Permit + USDC-style ERC-20Permit + multi-chain canonical bridge standardisation)
3. **Corporate partners exceeding 50 社**: expansion of live payroll, expense, and micropayment operations
4. **Official listing on overseas exchanges**: Binance Japan (if listed, within EPI scope) / KuCoin / Bybit etc., though whether a domestic EPI service provider must be used remains unclear
5. **Stripe / Square-style API offering**: building out JPYC direct-connection SDK
6. **DeFi integration**: deepening Aave + Compound + Curve JPY liquidity pools + spot liquidity via Uniswap v4 hook

JPYC is a typical **funds-transfer-type EPI** (Revised Payment Services Act Type 2), so its regulatory path differs from trust-type stablecoins (Progmat) and ECISB-routed stablecoins. For details, see [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] and [[fintech/japan-ecisb-license|日本 ECISB 牌照]].

## Progmat USD Launch (Trust-Type USD Stablecoin)

**Positioning**: Progmat (→ [[JapanFG/progmat|株式会社Progmat]]) is a digital asset platform funded by megabank trust banks (MUTB 49% + SMBC 15% + Mizuho 15%) + NTT Data + JPX. The issuer is the trust bank; Progmat is the platform provider.

**Progmat USD design concept** (based on 2026-Q1  announcements):

- **Issuer**: Mitsubishi UFJ Trust and Banking (lead) + Mizuho Trust & Banking (co-issuer) + Sumitomo Mitsui Trust Bank (co-issuer) — joint trust scheme
- **Legal classification**: **Specified trust beneficiary rights (第3号 EPI)** under the revised Payment Services Act, USD-anchored
- **Backing assets**: US short-term Treasuries + USD deposits (MUFG New York branch / US correspondent banks) + USD cash
- **Third-party audit**: Monthly PwC Arata + Deloitte Touche Tohmatsu
- **Chains**: Ethereum + Polygon + Avalanche + JPX-DLT (Hyperledger Besu, domestic institution private network)
- **Target users**: Institutional investors + large enterprises for USD settlement, FX hedging, cross-border B2B payments
- **Distribution scheme**: Distributed through EPI service providers such as SBI VC Trade; no direct listing on overseas exchanges for the time being

**Link to Project Pax**: Progmat USD is also positioned as the production version of "Project Pax" (MUFG + SBI joint proof of concept), enabling SWIFT MT 103  → blockchain-based cross-border USD payments. Progmat USD = the trinity of "trust-type SC + SWIFT compatibility + institutional-grade USD settlement."

**Significance**: This is the first **USD-denominated** implementation of [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]]. Until now Progmat has centred on JPY-type security tokens + real estate and corporate bond security tokens; the USD stablecoin unlocks international institutional investor use cases.

## DCJPY (DeCurret) Consortium Live Operation

**DCJPY** is a private stablecoin operated by DeCurret Holdings (formerly DeCurret Co., Ltd.). **Characteristics**: bank-issued type (each bank issues JPY-based "digital currency" + interoperable circulation on the DCJPY network) → see [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細ページ]].

**2025-12  → 2026-Q1  transition to live operation (based on announcements)**:

- **Participating banks (issuers)**: MUFG Bank / Mizuho Bank / SMBC / Resona Bank / other regional banks (phased)
- **Participating consortium (users)**: Mitsubishi Corporation + Kansai Electric Power + AEON + JR East + NTT East + major trading houses and logistics companies
- **Use cases**: B2B settlement (trading house ↔ manufacturer parts payments) + power wholesale trading settlement + distribution supply chain (AEON × wholesalers)
- **Scale (2026-05)**: Monthly circulation ~¥150B (~$1B equivalent)

**Important distinction**: DCJPY is technically a separate system from JPYC and Progmat ("bank-issued + consortium-compatible" model); whether **第3号 EPI** applies is a contested regulatory question (since it is not a trust scheme, some argue it falls into a separate category). The FSA currently tacitly permits DCJPY as "banks' self-managed electronic payment instruments." The FSA EPI Amendment Round 2 may resolve this ambiguity.

## SBI VC Trade USDC Expansion

**SBI VC Trade** (→ [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade 詳細ページ]]) is an **EPI service provider** (Kanto Financial Bureau Director 第00001号) and the sole licensed handler of USDC in Japan.

**2026 H1  expansion**:

- Circulation balance ¥45B (~$295M, 2026-05); 2.5x growth from ¥18B in 2025-12 
- Corporate OTC service launched (2026-01) → Japanese companies can now directly hold USDC
- DeFi integration (limited): indirect provision of USDC deposit pathways to certain compliant protocols via SBI VC Trade
- In-house development of automated KYC + Travel Rule compliance via smart contracts is ongoing
- Direct correspondent relationship with Circle Japan expected to be announced 2026-Q2 

**Implications of the SBI × JPYC ecosystem**: SBI and JPYC have no capital relationship, but SBI VC Trade handles USDC, and SBI Holdings has shown a stance of investment and support toward the domestic EPI industry as a whole, including JPYC. For details, see [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]].

## Carrier and QR Payment Sector Entry Observations

**Observation targets: 4 社** (2026 H2  developments):

### KDDI au Wallet / au PAY

- Reporting (2026-04  Nikkei): "KDDI is considering applying for EPI service provider status, with a view to stablecoin-ising au PAY balances"
- Strategy: integrating au users (~4,500 万 IDs) into 1  stablecoin ecosystems
- Challenges: legal reconciliation with the existing prepaid payment instrument (au Wallet), and whether KDDI issues its own stablecoin or becomes a distributor like SBI VC Trade

### NTT Docomo dpay / d Payment

- Reporting (2026-03): "Docomo scaled back its crypto asset division in 2024 年 but is reconsidering in 2026 "
- Strategy: stablecoin-ising d Payment (~5,000 万 IDs) + Docomo Bank (post-Shinsei Bank integration)
- Challenges: untangling the relationship with the former Coincheck affiliation (under Monex Group)

### LINE Finance / LINE Pay / LINE Xenon

- LINE Xenon JPY stablecoin was suspended after a PoC phase in 2020-2022
- The stablecoin strategy of Z Holdings (LINE + Yahoo Japan + PayPay parent) post-reorganisation is undecided
- Reporting (2026-05): "Z Holdings is re-examining stablecoin integration strategy internally"
- Strategy: internationalising LINE Pay (~9,000 万 IDs, primarily Asia) via stablecoin cross-border channels

### PayPay

- Largest domestic QR payment operator (~6,000 万 IDs, monthly payment ¥3T+)
- The direction of its stablecoin strategy is complex due to SoftBank's capital relationship
- Based on public disclosures, stablecoin involvement is not yet announced, but industry observers expect "PayPay → stablecoin tie-up OR own stablecoin issuance" may materialise by 2027 

**Implications**: If any 1 社 of these 4 社 entities enter as an EPI service provider or trust-type stablecoin issuer, Japan's stablecoin market would rapidly expand to "tens of millions of users." This would represent the establishment of a "carrier and QR payment 4rd camp" in [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]].

## FSA EPI Amendment Round 2 (Public Comment Scheduled 2026-Q2 )

**Issue 1: Clarification of rules for structuring and distributing trust-type stablecoins**

- Detailed rules for issuance and circulation of trust-type USD stablecoins such as Progmat USD
- Division of responsibilities between trust custodian banks and distributors (EPI service providers)
- Eligibility of overseas trusts (e.g., BNY Mellon USD trust)

**Issue 2: Expansion of overseas stablecoin circulation scope**

- Currently only SBI VC Trade handles USDC → feasibility of circulating other overseas stablecoins such as USDT / EURC / PYUSD
- Whitelist approach (only FSA-certified stablecoins permitted) vs blacklist approach (prohibited stablecoins specified)
- Formalisation of handling standards (issuer regulatory status + transparency + auditing)

**Issue 3: Yield-bearing stablecoins for institutional investors**

- Treatment of yield-bearing stablecoins such as USDM (M0) / sUSDe (Ethena) / USDY (Ondo)
- Currently interest payment is not permitted under the funds-transfer-type EPI framework; partially permitted under the trust-type EPI framework
- Examination of a Reg-D 506(c)-equivalent institutional investor regime

**Issue 4: Regulation of DeFi linkage**

- Compliance of JPYC / SBI VC Trade USDC connections to DeFi (Aave / Compound)
- Travel Rule compliance via smart contracts (Japan-specific interpretation of FATF Recommendation 16 )
- Whether "DEX trading in DeFi" is classified as EPI service provider business

**Implications**: The FSA EPI Amendment Round 2 will break the current JPYC-centred status quo and institutionally formalise the **4 -camp parallel structure** of Progmat (trust-type) + SBI VC Trade (overseas SC) + carriers (new entrants).

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|EPI 三類型概要]]
- [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]]
- [[fintech/jp-stablecoin-progmat|Progmat 詳細]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細]]
- [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]
- [[JapanFG/jpyc|JPYC株式会社]]
- [[JapanFG/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済の法体系]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026]]

## Sources

- FSA — Crypto assets and electronic payment instruments policy https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- FSA — Electronic payment instruments service provider registration list https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC Co., Ltd. — News releases https://jpyc.co.jp/news
- Progmat Inc. — News https://progmat.co.jp/news
- DeCurret DCJPY — official site https://www.dcjpy.jp/
- SBI VC Trade — USDC https://www.sbivc.co.jp/usdc
- KDDI — Corporate news release https://www.kddi.com/corporate/newsrelease/
- NTT Docomo — News release https://www.docomo.ne.jp/info/news_release/
- LINE Corporation — Press Release https://linecorp.com/en/pr/
- PayPay — News release https://about.paypay.ne.jp/press/
- Nikkei 2026-04  reporting (KDDI EPI application under consideration, public article)
- Nikkei 2026-03  reporting (Docomo crypto asset reconsideration, public article)

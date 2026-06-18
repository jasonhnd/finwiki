---
source: fintech/japan-stablecoin-2026-event-tracker
source_hash: e38f809c8d4d18a6
lang: en
status: machine
fidelity: ok
title: "Japan Stablecoin 2026  event tracker · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI amendment"
translated_at: 2026-06-18T23:59:13.093Z
---

# Japan Stablecoin 2026  event tracker · JPYC × Progmat × DCJPY × SBI VC Trade × FSA EPI amendment

## TL;DR

2026 年 is the turning point of Japan's stablecoin industry from **"PoC → mainnet."** **JPYC** launched on the formal mainnet (Ethereum + Polygon + Astar) in 2025-Q4  and reached circulation of **approx. ¥9.2B (~$60M)** in 2026-05 ; **Progmat** plans to launch a **USD-anchored 第3号 EPI** (Progmat USD) led by megabank trusts in 2026-Q2 ; **DCJPY (DeCurret)** moves into the production operation of a closed consortium of major trading companies + power companies + retail/distribution in 2026-Q1 ; **SBI VC Trade USDC** is the sole authorized distribution channel for USDC within Japan with circulation of **approx. ¥45B (~$295M)** (→ [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]]); at least 2 社 of **KDDI au Wallet × NTT Docomo dpay × LINE Finance × PayPay** are considering an EPI service provider application in 2026-Q3-Q4 . The **FSA EPI amendment (second round)** plans to open public comment in 2026-Q2 , with the points being clarification of the formation / distribution rules for trust-type SCs + expansion of the distribution scope of overseas SCs + the treatment of yield-bearing SCs for institutional investors.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]] for the regulatory frame, [[fintech/japan-epi-three-types-overview|EPI 三類型概要]] for taxonomy, and [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] for the competitive landscape. For the main issuers / distributors, see [[payment-firms/jpyc|JPYC株式会社]], [[payment-firms/progmat|株式会社Progmat]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]].

## 2026  Major-event timeline

| Month | Event | Related entities | Implication |
|---|---|---|---|
| 2025-Q4 | JPYC formal mainnet goes live | JPYC株式会社 | "EPI 第1号" kicks off (after the amended Payment Services Act) |
| 2025-12 | DCJPY consortium moves to production operation | DeCurret + Mitsubishi Corp + Kansai Electric Power + AEON | Production B2B settlement for trading companies, power, and distribution |
| 2026-01 | SBI VC Trade USDC handling expands (corporate OTC added) | SBI VC Trade + Circle | Domestic USDC circulation breaks ¥30B |
| 2026-Q1 | Progmat × MUTB × SMBC × Mizuho **第3号 EPI USD-anchored** design completed (announced) | Progmat + the three megabank trusts | Trust-type USD SC design completed |
| 2026-Q2 | Progmat USD launch (planned) | Progmat | Japan's first trust-type USD SC mainnet |
| 2026-Q2 | FSA EPI amendment second round, public comment opens (planned) | FSA | Clarification of trust-type SC regulation + expansion of overseas SC distribution |
| 2026-Q2 | JPYC circulation breaks ¥10B (forecast) | JPYC株式会社 | Scale benchmark for EPI 第1号 |
| 2026-Q3 | KDDI au Wallet considers EPI service provider application (reported) | KDDI + au PAY | Observation of entry of the 1社 carrier-affiliated camp |
| 2026-Q3 | NTT Docomo dpay reconsiders crypto-asset support (reported) | NTT Docomo | Movements of the 2社 carrier-affiliated camp |
| 2026-Q4 | LINE Finance × LINE Pay clarify SC strategy (forecast) | LINE Finance + Z Holdings | Possibility of linkage with the LINE Xenon JPY SC |
| 2026-Q4 | PayPay × SoftBank announce SC-involvement policy (forecast) | PayPay | Observation of entry by the largest domestic QR payment |

## JPYC mainnet expansion

**Current status (2026-05)**:

- Circulation ¥9.2B (~$60M), expanded 7.5x in 6  months since the 2025-Q4  mainnet launch
- Deployed chains: Ethereum (mainstream) + Polygon + Astar + Avalanche (sequentially)
- Number of users (wallet holders) approx. 12 万
- Main use cases: DeFi (Aave / Compound JPY pair) / cross-border remittance (Philippines / Vietnam) / crypto-exchange JPY pair (Bitbank / BITPoint / some overseas exchanges) / corporate B2B payroll & expense settlement (limited pilot)
- Regulatory status: FSA funds-transfer Type II registration (Director-General of the Kanto Local Finance Bureau 第00099号), the "EPI 第1号" positioning after the 2024 年 amended Payment Services Act (→ [[fintech/japan-epi-three-types-overview|EPI 三類型概要]])

**2026 H2  plan**:

1. **Phased increase of the remittance limit**: current ¥1M/transaction → ¥3M/transaction (under application)
2. **JPYC v2** release (EIP-3009 / Permit + USDC-style ERC-20 Permit + Multi-chain canonical bridge standardization)
3. **Surpassing 50 社 corporate partners**: expansion of production operation for payroll, expense settlement, and small-value payments
4. **Formal listing on overseas exchanges**: Binance Japan (within the EPI scope if listed) / KuCoin / Bybit, etc., though the need to go through a domestic EPI service provider is unclear
5. **Provision of a Stripe / Square-style API**: development of a JPYC direct-connection SDK
6. **DeFi integration**: deepening of Aave + Compound + Curve JPY pools + spot liquidity via Uniswap v4  hooks

JPYC is a typical **funds-transfer-type EPI** (amended Payment Services Act Type II), so its regulatory path differs from trust-type SCs (Progmat) or ECISB-routed SCs. For details see [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]] and [[fintech/japan-ecisb-license|日本 ECISB 牌照]].

## Progmat USD launch (trust-type USD SC)

**Positioning**: Progmat (→ [[payment-firms/progmat|株式会社Progmat]]) is a digital-asset platform invested in by megabank trust banks (MUTB 49% + SMBC 15% + Mizuho 15%) + NTT Data + JPX. The issuers are the trust banks; Progmat is the platform provider.

**Design concept of Progmat USD** (based on the 2026-Q1  announcement):

- **Issuers**: a joint trust scheme of Mitsubishi UFJ Trust Bank (lead) + Mizuho Trust Bank (joint) + Sumitomo Mitsui Trust Bank (joint)
- **Legal positioning**: USD-anchored as a **specified trust beneficiary right (第3号 EPI)** under the amended Payment Services Act
- **Backing assets**: US short-term Treasuries + USD deposits (MUFG NY Branch / US correspondent banks) + USD cash
- **Third-party audit**: monthly PwC Aarata + Deloitte Tohmatsu
- **Chains**: Ethereum + Polygon + Avalanche + JPX-DLT (Hyperledger Besu, a private network for domestic institutions)
- **Target**: USD settlement / FX hedging / cross-border B2B settlement for institutional investors + major corporations
- **Distribution scheme**: distribution via EPI service providers such as SBI VC Trade; no direct listing on overseas exchanges for the time being

**Linkage with Project Pax**: Progmat USD is also positioned as the production version of "Project Pax" (a joint MUFG + SBI proof of concept) that enables SWIFT MT 103  → blockchain-based cross-border USD settlement. Progmat USD = a trinity of "trust-type SC + SWIFT compatibility + institutional-grade USD settlement."

**Significance**: This is the first **USD-denominated** implementation of [[fintech/jp-trust-type-sc-architecture|信託型 SC 架構]]. Progmat had so far centered on JPY-based STs + real-estate / corporate-bond STs, but the USD SC unlocks international institutional-investor use cases.

## DCJPY (DeCurret) consortium production

**DCJPY** is a private SC operated by DeCurret Holdings (the former DeCurret Co., Ltd.). **Features**: a bank-issued type (each bank issues a JPY-based "digital currency" + it circulates interoperably on the DCJPY network) → see [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細ページ]].

**2025-12  → 2026-Q1  move to production operation (based on announcements)**:

- **Participating banks (issuers)**: MUFG Bank / Mizuho Bank / Sumitomo Mitsui Banking Corporation / Resona Bank / other regional banks (sequentially)
- **Participating consortium (users)**: Mitsubishi Corp + Kansai Electric Power + AEON + JR East + NTT East + major trading companies & logistics firms
- **Use cases**: B2B settlement (trading company ↔ manufacturer, parts payments) + power-wholesale-transaction settlement + distribution supply chain (AEON × wholesalers, business-to-business)
- **Scale (2026-05)**: monthly circulation ~¥150B (~$1B-equivalent)

**Important distinction**: DCJPY is technically a separate lineage from JPYC or Progmat (a "bank-issued + consortium-interoperable" model), and whether the **第3号 EPI** applies to it is a point of debate from a regulatory standpoint (because it is not a trust scheme, some commentators treat it as a separate category). The FSA currently tacitly permits DCJPY as "banks' self-management of electronic payment instruments." The FSA EPI amendment second round may resolve this ambiguity.

## SBI VC Trade USDC expansion

**SBI VC Trade** (→ [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade 詳細ページ]]) is an **EPI service provider** (Director-General of the Kanto Local Finance Bureau 第00001号), the sole authorized licensee handling USDC within Japan.

**2026 H1  expansion**:

- Circulation balance ¥45B (~$295M, 2026-05), expanded 2.5x from ¥18B in 2025-12 
- Launch of corporate OTC services (2026-01) → unlocks a path for Japanese companies to directly hold USDC
- DeFi linkage (limited): indirectly provides a USDC deposit path to some compliant protocols via SBI VC Trade
- In-house development of automated KYC + Travel Rule support via smart contracts is underway
- Plans to announce a direct correspondent relationship with Circle Japan in 2026-Q2 

**Implication of the SBI x JPYC ring**: SBI and JPYC have no capital relationship, but SBI VC Trade handles USDC, and SBI Holdings shows an investment / support stance toward the entire domestic EPI industry, including JPYC. This is detailed in [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC リング]].

## Observation of entry by carrier / QR-payment forces

**Observed targets 4 社** (2026 H2  movements):

### KDDI au Wallet / au PAY

- Reported (2026-04  Nikkei): "KDDI is considering an EPI service provider application, eyeing the SC-conversion of au PAY balances"
- Strategy: integrate au users (~4,500 万 IDs) into the 1  SC ecosystem
- Issues: legal reconciliation with the existing prepaid payment instrument (au Wallet), and whether KDDI issues an SC alone or becomes a distributor like SBI VC Trade

### NTT Docomo dpay / d-barai

- Reported (2026-03): "Docomo downsized its crypto-asset division in 2024 年 but is reconsidering it in 2026 "
- Strategy: SC-conversion of d-barai (~5,000 万 IDs) + Docomo Bank (after the Shinsei Bank integration)
- Issues: reconciliation of its relationship with the former Coincheck lineage (Monex Group affiliation)

### LINE Finance / LINE Pay / LINE Xenon

- The LINE Xenon JPY SC has been in a halted state since the past (2020-2022) PoC stage
- The SC strategy after the reorganization of Z Holdings (LINE + Yahoo Japan + the parent of PayPay) is undecided
- Reported (2026-05): "Z Holdings is reconsidering an SC-integration strategy internally"
- Strategy: cross-border use of LINE Pay (~9,000 万 IDs, mainly in the Asian region) via an SC

### PayPay

- The largest domestic QR payment (~6,000 万 IDs, monthly settlement ¥3T+)
- The direction of its SC strategy is complex due to the capital relationship with SoftBank
- On a publicly announced basis, SC involvement is not yet stated, but industry observation holds that "PayPay → SC linkage OR in-house SC issuance" may materialize by 2027 

**Implication**: If any 1 社 of 4 社 enters as an EPI service provider or trust-type SC issuer, Japan's SC market will expand at once to a "tens-of-millions-of-users scale." This means the establishment of the "carrier / QR-payment 4 camp" in [[fintech/japan-epi-four-camps-comparison|EPI 四陣営比較]].

## FSA EPI amendment second round (2026-Q2  public comment planned)

**Point 1: clarification of the formation / distribution rules for trust-type SCs**

- Detailed rules on the issuance / distribution of trust-type USD SCs such as Progmat USD
- Division of responsibility between the trustee bank and the distributor (EPI service provider)
- Whether overseas trusts (e.g., BNY Mellon's USD trust) may be used

**Point 2: expansion of the distribution scope of overseas SCs**

- Currently SBI VC Trade handles only USDC → whether other overseas SCs such as USDT / EURC / PYUSD may be distributed
- A whitelist approach (only FSA-recognized SCs permitted) vs a blacklist approach (explicitly prohibited SCs)
- Codification of handling criteria (the issuer's regulatory status + transparency + audit)

**Point 3: yield-bearing SCs for institutional investors**

- The treatment of yield-bearing SCs such as USDM (M0) / sUSDe (Ethena) / USDY (Ondo)
- Currently interest payment is not permitted under the funds-transfer-type EPI framework, and partially permitted under the trust-type EPI framework
- Examination of a Reg-D 506(c)-like system for institutional investors

**Point 4: regulation of DeFi linkage**

- The compliance of DeFi linkage (Aave / Compound) via JPYC / SBI VC Trade USDC
- Travel Rule support via smart contracts (Japan's domestic interpretation of FATF Recommendation 16 )
- Whether "DeFi DEX trading" is regarded as an EPI service provider business

**Implication**: The FSA EPI amendment second round will break the JPYC-centered status quo and institutionally codify the **4 -camp coexistence structure** of Progmat (trust-type) + SBI VC Trade (overseas SCs) + carrier-affiliated (new entrants).

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
- [[payment-firms/jpyc|JPYC株式会社]]
- [[payment-firms/progmat|株式会社Progmat]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済の法体系]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実施状況 2026]]

## Sources

- FSA — crypto-asset / electronic-payment-instrument-related policy https://www.fsa.go.jp/policy/cryptoasset_payment/index.html
- FSA — list of registered electronic payment instrument service providers https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- JPYC株式会社 — news releases https://jpyc.co.jp/news
- 株式会社Progmat — News https://progmat.co.jp/news
- DeCurret DCJPY — official site https://www.dcjpy.jp/
- SBI VC Trade — USDC https://www.sbivc.co.jp/usdc
- KDDI — Corporate news release https://www.kddi.com/corporate/newsrelease/
- NTT Docomo — News release https://www.docomo.ne.jp/info/news_release/
- LINE Corporation — Press Release https://linecorp.com/en/pr/
- PayPay — News release https://about.paypay.ne.jp/press/
- Nikkei 2026-04  report (KDDI EPI application under consideration, public article)
- Nikkei 2026-03  report (Docomo crypto-asset reconsideration, public article)

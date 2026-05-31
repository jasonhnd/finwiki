---
source: exchanges/jp-crypto-tax-software-vendor-layer
source_hash: d1a6172b32416041
lang: en
status: machine
fidelity: ok
title: "Domestic crypto-asset tax-software vendor layer (Cryptact / Gtax / CryptoLinc / Coinly, etc.)"
translated_at: 2026-05-31T03:19:56.461Z
---

# Domestic crypto-asset tax-software vendor layer (Cryptact / Gtax / CryptoLinc / Coinly, etc.)

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産税制詳細]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the broader system / regulatory boundary.

## Overview

Domestic retail investors' crypto-asset gains and losses must be filed as **miscellaneous income (aggregate taxation, top tax rate 55%)**, and in cases mixing multiple VASP accounts + overseas exchanges + DeFi + NFT usage, manual calculation is practically impossible. The **crypto-asset tax SaaS** market that solves this has grown rapidly since 2018 . The National Tax Agency (NTA) has also strengthened, from 2023  onward, the requirement for VASPs to submit payment records of customer transaction information, and the need for tax-processing automation keeps growing. **Cryptact / Gtax (formerly Aerial Partners family) / CryptoLinc (formerly GxC) / Koinly (a major overseas player's Japan support)** form the domestic 4  leaders.

## Major domestic vendors

### **Cryptact (Cryptact, Inc.)**

- **Founded**: 2018 年
- **Headquarters**: Tokyo
- **Main products**: "Cryptact" (tax calculation + portfolio management for individuals), "Cryptact for Business" for institutional investors
- **Strengths**: support for 80+ exchanges; transaction parsing for DeFi (Uniswap / Aave, etc.) + NFT + L2  (Arbitrum / Optimism / Base / Polygon); support for domestic alts such as NEM/Symbol
- **Accounting-firm tie-up**: a B2B plan for accountants and tax accountants
- **Official**: https://www.cryptact.com/

### **Gtax (provided by Aerial Partners, Inc.)**

- **Founded**: 2017 年 (Aerial Partners founding)
- **Headquarters**: Tokyo
- **Main products**: "Gtax" (tax calculation for individuals), "Guardian" (crypto-asset accounting for corporations)
- **Strengths**: operated by the accounting firm Aerial Partners, supervised by tax accountants. Strong in **corporate-oriented accounting integration (freee / Money Forward, etc.)**
- **Features**: supports a choice of moving-average method / total-average method, switching between calendar-year and corporate-fiscal-year-based calculation

### **CryptoLinc (formerly GxC / GxC, Inc.)**

- **Headquarters**: Tokyo
- **Main product**: "CryptoLinc" (for individuals + corporations)
- **Strengths**: practical work for institutional investors and crypto-asset businesses (high-volume transactions + consolidated-accounting support)
- **Features**: strengthened support for JICPA industry-committee practical guideline 第 61 号; tie-up with audit firms ([[exchanges/japan-crypto-audit-firm-landscape|国内クリプト監査法人ランドスケープ]])

### **Koinly (a major overseas player's Japan support)**

- **Base**: United Kingdom
- **Features**: JPY support + domestic-exchange integration + broad DeFi support. Usage is expanding in the individual tier as a **leading domestic 4 -class competitor**
- **Strengths**: comprehensiveness of DeFi / NFT transaction parsing thanks to global expansion (a major player in the US / UK / Australia / Canada, etc.)

### **Others**
- **CRYPTO ZAIMU (Coin Tax, Inc.)** — mid-scale share
- **TaxBit (US) / CoinTracker (US) / TokenTax (US)** — major US players; support for Japanese users is limited

## Main features (common across vendors)

1. **Exchange API / CSV integration**: automatic import from major VASPs such as bitFlyer / GMO Coin / SBI VC Trade / Coincheck / bitbank / BitTrade
2. **DeFi transaction parsing**: enter a wallet address such as MetaMask / OKX Wallet → automatic classification of on-chain transactions
3. **NFT trade parsing**: trade parsing for OpenSea / Magic Eden / Blur, etc.
4. **Moving-average / total-average method switching**: acquisition-cost calculation based on NTA directives
5. **P&L calculation + filing-document output**: PDF for attachment to the final tax return / e-Tax integration
6. **Multi-year comparison**: loss carryforward (corporations) / determination of whether P&L aggregation is allowed
7. **Payment-record reconciliation**: a function to reconcile against payment records issued by VASPs (2023  strengthening)
8. **Corporate year-end fair-value measurement**: support for Corporate Tax Act Article 61  (reflecting the 2024  amendment excluding self-issued / third-party-held tokens)

## Linkage with tax-system reform

The domestic crypto-asset tax system has changed greatly in recent years → [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産税制詳細]]:

- **FY2024 年** — exclusion of year-end fair-value measurement for corporate-held crypto assets (self-issued + third-party-issued) (the joint [[exchanges/jcba-japan-crypto-business-association|JCBA]] + [[exchanges/jvcea-self-regulatory-overview|JVCEA]] request bore fruit)
- **Separate taxation for individuals** — a long-standing industry request, not yet realized (miscellaneous income, top 55%, no P&L aggregation, no 3 -year loss carryforward)
- **NFT taxation** — treatment of secondary circulation; the classification between inventory assets / miscellaneous income is a point of debate

Each vendor updates its logic with every amendment and publishes explanatory articles for users.

## Practical work for institutional investors / corporations

For corporations, **CryptoLinc + Guardian (the corporate version of Gtax)** are the twin pillars. Audit-response data is automatically generated through integration with **[[exchanges/japan-crypto-audit-firm-landscape|Big4 監査法人]]**. A 3 -stage scheme has taken hold: tax advice from **[[exchanges/japan-crypto-law-firm-landscape|大手法律事務所]]** + the vendor's aggregated data + assurance from the audit firm.

## Issues specific to DeFi / Web3  users

- **NFT mint → flip → swap** consecutive transactions, where the timing of P&L recognition is a point of debate
- **Liquidity provision (LP)** P&L at the time of entry / withdrawal, and valuation at the time of airdrop receipt
- **Staking rewards** (→ [[exchanges/jp-crypto-staking-as-a-service-operators|StaaS 事業者層]]) fair value at the time of receipt
- **Cross-chain bridges** ([[exchanges/jp-crypto-on-off-ramp-bridge-layer|on/off ramp 層]] + L2  bridges), wrap / unwrap determination

Each vendor continuously updates these automatic-classification logics.

## Related

- [[exchanges/jp-crypto-asset-taxation-detailed]] — tax-system details
- [[exchanges/japan-crypto-audit-firm-landscape]] — audit firms
- [[exchanges/japan-crypto-law-firm-landscape]] — law firms
- [[exchanges/jp-crypto-staking-as-a-service-operators]] — staking
- [[exchanges/jcba-japan-crypto-business-association]] — JCBA tax proposals
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA registration
- [[fintech/japan-financial-regulation]] — upper-tier financial regulation

## Sources

- Cryptact official: https://www.cryptact.com/
- Gtax (Aerial Partners): https://crypto-city.net/
- CryptoLinc official: https://www.cryptolinc.com/
- Koinly official: https://koinly.io/
- National Tax Agency, crypto-asset-related: https://www.nta.go.jp/

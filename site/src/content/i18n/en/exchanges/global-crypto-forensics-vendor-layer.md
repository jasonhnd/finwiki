---
source: exchanges/global-crypto-forensics-vendor-layer
source_hash: 8fad60588f2bd797
lang: en
status: machine
fidelity: ok
title: "Global crypto-asset forensics-vendor layer — Chainalysis / Elliptic / TRM / Crystal comparison"
translated_at: 2026-05-31T03:19:56.502Z
---

# Global crypto-asset forensics-vendor layer — Chainalysis / Elliptic / TRM / Crystal comparison

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-vasp-aml-travel-rule-implementation|国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

CEXs + banks + law-enforcement agencies depend on specialized forensics vendors for AML/CFT monitoring, sanctions screening, and illicit-fund tracing of crypto-asset transactions. Chainalysis (US) reigns as the industry standard, with Elliptic / TRM Labs / Crystal Intelligence forming the competitive top tier. They are the core infrastructure for OFAC freezes + the Travel Rule + sanctions monitoring + Lazarus/North-Korea tracing, and modern crypto-asset regulation effectively presupposes the existence of these vendors. Domestic VASPs also all hold advisory contracts with overseas vendors.

## Top 4 vendor comparison

- **Chainalysis**（NY · founded 2014 ）— the industry standard. Reactor（investigation tool）+ KYT（real-time transaction monitoring）+ Crypto Crime Report（annual, public; the industry bible）. Customers = US Treasury / FBI / IRS / National Tax Agency / numerous CEXs. Valuation $8.6B（2022  round）
- **Elliptic**（London · founded 2013 ）— founded by Tom Robinson（ex-BAML）. KYC + transaction monitoring + sanction screening. A customer base centered on institutional investors + banks. Gained fame for a freeze within 30  minutes in the Lazarus / Bybit hack
- **TRM Labs**（San Francisco · founded 2018 ）— risk score + crypto-native API-first. Fast iteration + broad support for emerging chains. Issues a Crypto Crime Report（a Chainalysis competitor）
- **Crystal Intelligence**（a Bitfury subsidiary, Estonia → Switzerland）— European + Russian origin（now trending toward contraction due to regulatory issues）. Strength toward law-enforcement agencies

## Major services

- **Transaction monitoring（KYT）**: real-time on-chain analysis. Instant risk-score responses on CEX deposit/withdrawal（tagged with mixer / sanctioned wallet / darknet market）
- **Wallet labeling / clustering**: a clustering DB of known wallets（Lazarus / Tornado Cash / Hydra Market / Garantex / Bitzlato）
- **Sanction screening**: automated OFAC SDN-list checks + integration of EU/UK/UN sanctions lists
- **Investigation tools**: fund-flow tracing UIs for law-enforcement agencies（Reactor / Investigator / Forensics）

## Roles in major incidents

- **2022-02 Wormhole hack（$325M）**: Chainalysis traced and publicly monitored the fund movements
- **2024-05 DMM Bitcoin Lazarus hack（$305M）**: joint attribution announcement by Chainalysis + FBI + DC3 
- **2025-02 Bybit hack（$1.46B）**: Elliptic + ZachXBT coordinated a freeze within 30  minutes — the fastest-scale tracing response in history
- **2022-08 Tornado Cash OFAC sanctions**: all vendors immediately handled the SDN expansion, tagging the contract addresses
- **2023-04 Bitzlato takedown**: data provided by Chainalysis became core evidence for the prosecution

## Relationship with domestic VASPs

All domestic VASPs（bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank / DMM Bitcoin）hold advisory contracts with Chainalysis or Elliptic. JVCEA Travel-Rule implementation also presupposes vendor APIs. TRM Labs is centered on B2C2 Japan / institutions. Crystal is limited. There is no domestic in-house vendor — an overseas-dependence structure（sovereignty risk = US OFAC policy changes directly affect domestic VASP operations）.

## Cross-links

- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/jp-vasp-security-audit-certification]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]
- [[exchanges/jp-crypto-market-maker-otc-layer]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[security/wayback-machine-as-forensic-tool|wayback machine as forensic tool]]

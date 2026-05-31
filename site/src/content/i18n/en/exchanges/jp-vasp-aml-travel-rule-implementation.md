---
source: exchanges/jp-vasp-aml-travel-rule-implementation
source_hash: 6244094904490df3
lang: en
status: machine
fidelity: ok
title: "Domestic VASP Act on Prevention of Transfer of Criminal Proceeds + FATF Travel Rule Domestic Implementation (2023-)"
translated_at: 2026-05-31T06:16:15.665Z
---

# Domestic VASP Act on Prevention of Transfer of Criminal Proceeds + FATF Travel Rule Domestic Implementation (2023-)

## Overview

Domestic VASPs are obligated under the **Act on Prevention of Transfer of Criminal Proceeds (AML Act)** to carry out customer identification, transaction monitoring, and suspicious transaction reporting. **FATF Recommendation 16  (Travel Rule)** was fully implemented by the 2023-06  revised AML Act enforcement, requiring KYC data transmission between sender and receiver for virtual asset transfers **≥ 10 万円 equivalent**. The AML/CFT framework operates under a three-tier structure of FSA supervision + JAFIC (National Police Agency) information aggregation + JVCEA self-regulation.

## 4  Pillars of AML Act Obligations

1. **Customer identification (KYC)**: Verification of customer-specific particulars (name, address, date of birth) + transaction-time confirmation (remittances > 200 万円 / transfers > 10 万円)
2. **Transaction record retention**: 7  years (customer identification + transaction details)
3. **Suspicious transaction reporting**: Filed via JAFIC (National Police Agency Criminal Proceeds Transfer Prevention Office)
4. **AML framework establishment**: Internal controls + staff training + annual risk assessment update

## Travel Rule Domestic Implementation

- **Effective date**: 2023-06-01 (revised AML Act)
- **Scope**: Crypto asset transfers ≥ 10 万円 equivalent
- **Data transmitted**: Sender (name, address, account number) + recipient (name, account number)
- **Technical stack**: Via vendors including TRUST (TRP) / VASPnet / Sumsub / Notabene
- **Domestic VASP compliance**: All 27 社 are connected to **VASPnet** (domestic standard) or **TRUST**

## Interoperability with Foreign Counterparts

- **US → Japan**: Coinbase / Kraken / Gemini etc. connect via Notabene to VASPnet
- **Singapore → Japan**: MAS-regulated VASPs connect in the same manner
- **Unregistered foreign → Japan**: Data transmission not possible → Foreign exchanges not compliant with the Travel Rule have **incoming transfers rejected** (domestic VASP side blocks receipt)

## Risks and Challenges

- **Sunrise issue**: Divergence in implementation timelines across countries (US lagging at federal level; EU with MiCA 2024  full implementation)
- **Non-custodial wallet problem**: Difficulty with KYC for transfers to self-hosted wallets (ongoing debate at MAS / FCA)
- **Privacy concerns**: Risk of inferring sender's financial position from on-chain BTC/ETH transparency combined with KYC data cross-referencing

## Cross-links

- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-regulatory-timeline]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[fintech/fatf-travel-rule-overview]]
- [[fintech/fatf-travel-rule-cross-border-stack]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]

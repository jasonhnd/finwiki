---
source: exchanges/jp-vasp-cold-storage-segregation-rules
source_hash: ed27b3af44e721bf
lang: en
status: machine
fidelity: ok
title: "Domestic VASP Cold Storage 95% + Segregated Management Regime"
translated_at: 2026-05-31T05:31:05.776Z
---

# Domestic VASP Cold Storage 95% + Segregated Management Regime

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## Regime Overview

Under the amended Payment Services Act Enforcement Regulations (in force 2020-05 ), domestic VASPs are subject to **an obligation to hold 95% or more of the crypto-assets entrusted by customers in cold wallets (offline environment)**. Only the remaining 5% or less is permitted for hot operation (as withdrawal funding / liquidity reserve). The direct trigger was the 2018-01 Coincheck NEM 580 億円 outflow incident under [[exchanges/jp-vasp-incident-history]]. Reflecting the lesson that the entire NEM holding was under hot custody at the time of the incident, this was introduced as a regulatory reflex applied across the whole industry. A violation constitutes grounds for a business improvement order (see [[exchanges/fsa-business-improvement-orders-history]]).

## Definition of Cold / Hot and Exceptions

"Cold" refers to a signing environment physically disconnected from the network (air-gapped). As a rule, key generation and signing are performed on offline terminals, and only the signed TX is moved over the network. When a multisig (M-of-N) configuration or an HSM (Hardware Security Module) is used, it may be certified as "cold-equivalent" depending on the operational design (reviewed case-by-case under the JVCEA self-regulatory guidelines). MPC (Multi-Party Computation) type is an emerging technology for which the certification framework is still being developed.

## The 3  Forms of Segregated Management

- **Trust type** (strongest legal segregation): Customer crypto-assets are entrusted to a trust bank, giving the strongest bankruptcy remoteness in legal terms. Sumitomo Mitsui Trust and Mitsubishi UFJ Trust are the principal trustees.
- **Individual management type** (internal segregation): Own assets and customer assets are managed in separate accounts, separate wallets, and separate bookkeeping. This is technical segregation, but its legal bankruptcy remoteness is weaker than the trust type.
- **Hybrid type**: A pragmatic operation of partly trust + partly individual. The majority of major VASPs adopt this form.

## Operational Examples of Major Domestic VASPs

- [[exchanges/jp-exchange-bitflyer]]: trust + partly individual (hybrid type)
- [[exchanges/jp-exchange-gmo-coin]]: centered on individual management type
- [[exchanges/jp-exchange-coincheck]]: fully shifted to trust type after the 2018  incident
- [[exchanges/jp-exchange-sbi-vc-trade]]: makes heavy use of the trust type (leveraging an SBI group trust bank)

## Global Comparison

- US NYDFS BitLicense: trust-bank segregation obligation; the rise of Trust-Charter-type custodians (Coinbase Custody Trust, etc.)
- Hong Kong SFC Type 1 + VASP license: co-mingling with customer assets prohibited; a route through an independent Trust Company is mandatory
- EU MiCA CASP (in force 2024 ): full segregated-custody obligation for customer assets; third-party custodians permitted

See also: [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/jp-vasp-regulatory-timeline]] · [[exchanges/jp-institutional-custody-three-pillars]] · [[exchanges/global-vasp-regulatory-comparison-matrix]] · [[exchanges/coincheck-nem-hack-detailed-analysis]] · [[exchanges/cex-matching-engine-wallet-architecture]]

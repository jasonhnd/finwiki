---
source: exchanges/jp-crypto-merchant-payment-lightning
source_hash: e29390016eda58a0
lang: en
status: machine
fidelity: ok
title: "Domestic crypto-asset merchant payment + Lightning Network"
translated_at: 2026-05-31T03:19:56.415Z
---

# Domestic crypto-asset merchant payment + Lightning Network

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## Overview

Domestic crypto-asset merchant payment was introduced via [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-coincheck|Coincheck]] during the 2017 BTC bubble, but contracted due to the 2018 outflow incident + price volatility. From 2023onward there have been signs of revival with the spread of the Lightning Network, operated mainly by tourist-area and Web3 -native businesses.

## Major domestic operators / services

- **bitFlyer payment service**: a BTC payment platform for merchants, launched 2014 , partially scaled back
- **Coincheck Payment**: BTC/ETH and other payment for merchants, launched 2014 , scaled back after the NEM incident → resumed
- **GMO Coin payment** (GMO Internet G group): GMO Payment Gateway linkage, partially trialed
- **Pay-bitcoin** and other independents: for small and mid-sized stores
- **Domestic BTM (Bitcoin ATM)**: [[exchanges/jp-exchange-gaia|ガイア社]] 2022-08 first domestic operation, 2026-05 temporarily suspended

## Lightning Network domestic adoption

- **Lightning Labs (LND)** / **Blockstream (Core Lightning)** / **ACINQ (Eclair)** — Lightning node implementations
- **BTCPay Server**: open-source merchant gateway, adopted by some domestic operators
- **Strike (Jack Mallers)**: USD/BTC international remittance, no full-scale domestic entry
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]] SETTLENET PRO**: Lightning + Blockstream Liquid sidechain for institutions

## Regulatory position

- **Lightning node operation**: under the amended Payment Services Act, possibly falling under fund-settlement operator (remittance operator); the FSA has not published an explicit view as of the 2024 stage
- **Merchant payment**: for merchants, depends on the payment-agent operator (prepaid payment instrument / funds-transfer business) license — [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- **Taxation**: merchant receipts are business income; individual payments are miscellaneous income

## International comparison

El Salvador (BTC legal-tender adoption 2021) · US Cash App (Strike linkage) · Argentina retail ([[fintech/em-market-crypto-dollarization-pattern]]) · domestically, adoption is delayed by regulatory caution + price volatility. Stablecoin linkage ([[exchanges/jp-cex-deposit-token-stablecoin-integration]]) is a candidate for the next-generation payment layer.

## Related

- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX × deposit token / EPI integration
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC layer

## Sources

- Lightning Network official (lightning.network)
- BTCPay Server docs (btcpayserver.org)
- Each company's official corporate site
- Nikkei / ITmedia reporting

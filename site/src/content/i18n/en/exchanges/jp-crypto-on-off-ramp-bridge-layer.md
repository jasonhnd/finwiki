---
source: exchanges/jp-crypto-on-off-ramp-bridge-layer
source_hash: 089f47440bd39e99
lang: en
status: machine
fidelity: ok
title: "Domestic-facing on/off ramp + fiat↔crypto bridge layer (MoonPay / Transak / Banxa / VASP direct)"
translated_at: 2026-05-31T03:19:56.431Z
---

# Domestic-facing on/off ramp + fiat↔crypto bridge layer (MoonPay / Transak / Banxa / VASP direct)

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-crypto-market-maker-otc-layer|国内暗号資産マーケットメイカー / OTC デスク業界]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the broader system / regulatory boundary.

## Overview

**On-ramp / off-ramp** is the gateway infrastructure for "fiat ↔ crypto-asset." It is the first step when domestic users access Web3  dApps / NFT marketplaces / DeFi, providing a **direct conversion route of JPY → ETH/USDC/USDT**. Because in Japan, under the Payment Services Act, **crypto-asset sales accompanied by JPY deposits = crypto-asset exchange business (VASP registration)** is required, the simple Japan rollout of overseas on-ramp operators is constrained by the license barrier, and a dual structure of **domestic VASP direct routes + cross-border provision by overseas on-ramps (a gray zone)** coexists.

## Domestic VASP direct route (official on/off ramp)

The most legally clear route is the account of an FSA-registered VASP + bank transfer:

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** — JPY instant deposit (Sumishin SBI Net / Sumitomo Mitsui, etc.) → purchase BTC/ETH, etc. → transfer to external wallet
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** — instant deposit + free withdrawal fee
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** — speeds up bank deposits/withdrawals via SBI Shinsei Bank-affiliated linkage
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** — Monex Group-affiliated · bank transfer + convenience-store deposit
- **[[exchanges/jp-exchange-bitbank|bitbank]]** — order-book-trading-centered but also used as an on-ramp
- **[[exchanges/jp-exchange-bittrade|BitTrade]] (HUOBI-affiliated)** — strong in obtaining USDT-family via linkage with overseas HUOBI

This route is under the constraints of **KYC + bank account + JVCEA WhiteList currencies ([[exchanges/jvcea-self-regulatory-overview|JVCEA]] rule)**, and long-tail tokens cannot be obtained.

## Overseas on-ramp operators' provision to Japan (cross-border)

When obtaining dApps / NFT-family tokens not handled by domestic VASPs, there are cases where users directly purchase JPY → USDC, etc., via overseas on-ramp operators' web widgets. **The legal positioning is continuously gray** (the FSA continues to strengthen cross-border VASP regulation):

- **MoonPay (Miami, US 2019-)** — the most widely integrated into Web3  wallets (MetaMask / Phantom, etc.). JPY support (varies by period), credit card + Apple Pay + Google Pay deposits
- **Transak (London, UK 2019-)** — a global on/off ramp. Integrated into MetaMask Portfolio / Trust Wallet / OpenSea, etc. **Whether JP users are supported varies by period**
- **Banxa (Melbourne, Australia 2014-)** — a listed company (Toronto Venture). Holds multi-jurisdiction licenses globally
- **Ramp Network (London, UK 2017-)** — Web3 -centered, integrated into multiple wallets
- **Mercuryo (London, UK 2018-)** — Web3  + a crypto-asset debit card
- **Sardine (San Francisco, US 2020-)** — strong in fraud prevention, institution-oriented
- **Wyre** (service ceased 2021 ), **Simplex** (Nuvei-affiliated) — integrated into major wallets but handling for Japan is limited

These cross-border operators form a configuration that enables transactions via a domestic ID + a JPY credit card, but **the FSA continuously monitors unregistered VASPs' cross-border provision**, with precedents of business-improvement orders / warning-letter issuance against specific operators.

## Combinations of the direct-exchange route and dApps bridges

A typical practical pattern:

1. **Purchase USDC/USDT/ETH at a domestic VASP** → transfer to external wallet → use dApp / NFT
2. **Use a dApp from an external wallet** → after taking profit, **transfer back to a domestic VASP → JPY withdrawal** (off-ramp)
3. When a **non-JVCEA-WhiteList currency** is needed, via an overseas CEX (Binance / Bybit / OKX, etc.) → but services for Japan residents are in principle restricted

## Combinations of credit cards / Pay services

- **bitFlyer Crypto Card (including in preparation)**, **Coincheck Tsumitate Pay linkage**, **Visa / Mastercard-family crypto cards**, etc. — adjacent means of fiat → crypto-asset purchase are expanding
- **PayPay / au PAY / LINE Pay** are not yet supported as crypto-asset on-ramps (except LINE BITMAX linkage)
- On **[[fintech/japan-financial-regulation|日本金融規制]]**, crypto-asset purchase via Pay operators is a boundary issue between funds-transfer business + VASP

## Particularities of stablecoin on-ramps

With the 2023-06  enactment of the amended Payment Services Act, **JPY-denominated stablecoins under a specific trust-beneficiary-right scheme** were institutionalized:

- **[[exchanges/jp-exchange-jpyc|JPYC]]** — the transition from prepaid type → to electronic payment instrument (trust type) is advancing
- **Mitsubishi UFJ Trust Bank-affiliated Progmat Coin** — a trust-type stablecoin platform
- **The trust subsidiaries of MUFG / SMBC / Mizuho** — considering institutional JPY stablecoin issuance

With the spread of these, a two-stage bridge of **JPY ↔ JPY stablecoin ↔ USDC/USDT** is expected to become standardized in the future.

## Regulation + audit + forensics

- **Regulation**: [[exchanges/fsa-vasp-registration-system|FSA 登録制度]] + [[exchanges/jvcea-self-regulatory-overview|JVCEA 規則]]
- **AML / Travel Rule**: [[exchanges/jp-vasp-aml-travel-rule-implementation|犯収法 + FATF Travel Rule]]
- **Forensics**: [[exchanges/global-crypto-forensics-vendor-layer|Chainalysis / Elliptic / TRM]] returns a risk score at VASP deposit/withdrawal
- **Tax**: [[exchanges/jp-crypto-asset-taxation-detailed|暗号資産税制]] applies directly to on/off-ramp profits

## Related

- [[exchanges/jp-crypto-market-maker-otc-layer]] — MM / OTC layer
- [[exchanges/jp-institutional-custody-three-pillars]] — institutional custody
- [[exchanges/jp-exchange-jpyc]] — JPYC
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA registration
- [[exchanges/jp-crypto-merchant-payment-lightning]] — commercial settlement
- [[fintech/japan-financial-regulation]] — upper-level financial regulation

## Sources

- MoonPay 公式: https://www.moonpay.com/
- Transak 公式: https://transak.com/
- Banxa 公式: https://banxa.com/
- FSA 暗号資産関連: https://www.fsa.go.jp/
- JVCEA 公式: https://jvcea.or.jp/

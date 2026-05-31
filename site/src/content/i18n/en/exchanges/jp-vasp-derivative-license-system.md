---
source: exchanges/jp-vasp-derivative-license-system
source_hash: 612c22c2cb1f4409
lang: en
status: machine
fidelity: ok
title: "Japan Domestic Crypto Asset Derivatives Business Regime — FIEA × Payment Services Act Dual Registration"
translated_at: 2026-05-31T06:16:15.677Z
---

# Japan Domestic Crypto Asset Derivatives Business Regime — FIEA × Payment Services Act Dual Registration

## Regime overview

The amended Financial Instruments and Exchange Act (FIEA), which took effect 2020-05 , brought crypto asset derivatives trading within the scope of "financial instruments business." This created a **two-track regulatory structure** in the Japanese crypto asset industry: **spot trading (Payment Services Act = crypto asset exchange business registration)** and **derivatives trading (FIEA = Type I financial instruments business registration)**. Even where the underlying asset is identical, whether physical delivery occurs determines which legislation applies and which registration route must be followed — a feature that stands out in cross-jurisdictional comparisons. See [[fintech/japan-financial-regulation|日本金融規制]] for the full framework.

## Two licence-holding patterns

Domestic operators fall into 3  categories:

- **Dual-holder (spot + derivatives)** — [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-gmo-coin|GMO コイン]] / [[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]], etc. Operators that hold both a Type 1  spot registration under the Payment Services Act and a Type I financial instruments business registration under the FIEA — operating in both capacities simultaneously.
- **Spot-only** — Coincheck / bitbank, etc. Operate solely under the Payment Services Act; do not offer derivatives products.
- **Derivatives-only** — [[exchanges/jp-exchange-monex|Monex 株式会社]] (spot via subsidiary Coincheck) / [[exchanges/jp-exchange-bi-fxtrade|SBI FX トレード (BI FXTRADE)]] / [[exchanges/jp-exchange-traders-securities|トレイダーズ証券]] / [[exchanges/jp-exchange-sbi-securities|SBI 証券]] / [[exchanges/jp-exchange-goldenway-japan|ゴールデンウェイ・ジャパン]] / [[exchanges/jp-exchange-dmm-com-securities|DMM.com 証券]] — 6 社 firms are representative examples. Hold only a FIEA registration; do not handle spot.

## Leverage regulation (from 2020)

Strong protective regulations were introduced simultaneously with the FIEA classification:
- **Retail (individuals)**: leverage cap of 2 ×
- **Corporates**: higher multiples available by category (effectively for institutional investors)
- The eligible instrument line-up is also industry-standard limited, centred on BTC/ETH

This is more conservative than the FX leverage cap of 25 ×, structurally suppressing overall industry trading volume and profitability.

## Registration number system

Type I financial instruments business registration numbers follow the format "**Kanto Local Finance Bureau Director (FIEA) No. NNN**" (delegated by the FSA to each local finance bureau). This is a separate numbering series from the "Kanto Local Finance Bureau Director No. NNNNN" (Payment Services Act) series used for spot registration. Dual-holder operators display **2  registration numbers** side by side.

## Practical impact: natural entry by net FX operators

Of the 6 社 derivatives-only operators, **5 社 are derived from FX as a primary business** (SBI FX Trade / Traders Securities / Golden Way / DMM.com Securities / SBI Securities CFD division). These operators have extended their existing FX infrastructure — margin management, order books, counterparty risk management expertise — naturally into crypto asset CFDs, forming an evolutionary lineage distinct from emerging spot VASPs. For self-regulatory frameworks, see [[exchanges/jvcea-self-regulatory-overview|JVCEA]] and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for spot registration.

---

Sources: public information (FSA registration list published on fsa.go.jp, JVCEA member list on jvcea.or.jp, elaws statutory database, company IR public disclosures)

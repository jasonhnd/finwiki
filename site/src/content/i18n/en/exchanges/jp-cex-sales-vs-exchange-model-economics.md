---
source: exchanges/jp-cex-sales-vs-exchange-model-economics
source_hash: c25878f3236ce3fc
lang: en
status: machine
fidelity: ok
title: "Domestic CEX sales-counter vs exchange business-model economics"
translated_at: 2026-05-31T03:19:56.472Z
---

# Domestic CEX sales-counter vs exchange business-model economics

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-cex-points-economy-integration|国内 CEX × ポイントエコノミー統合モデル]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

Domestic Japanese CEXs have a distinctive structure of running 2  service formats in parallel. The **sales counter (販売所, hanbaijo)** = an OTC-spread model in which the CEX itself trades against the customer on a principal basis vs the **exchange (取引所, torihikijo)** = a maker/taker fee model in which customers' limit orders match against each other on an order book. The two differ greatly in revenue structure, regulatory positioning, and assumed customer base, and it is common for the same CEX to offer both services side by side.

## Sales-counter model (mainstream)

- **Revenue source**: bid/ask spread (typically 2-5% · 7-10% depending on the asset)
- **CEX's position**: market maker · holds inventory risk + hedging obligation
- **Customer UX**: buy in 1  click · directly specify quantity/amount · market price is hard to see
- **Major adopters**: [[exchanges/jp-exchange-coincheck]] (sales-counter mainstay) · [[exchanges/jp-exchange-gmo-coin]] · DMM Bitcoin (former) · [[exchanges/jp-exchange-rakuten-wallet]] · [[exchanges/jp-exchange-mercoin]] · OKJ

## Exchange model (for the experienced)

- **Revenue source**: maker/taker fee (typically 0.01-0.20%) · overwhelmingly thin
- **CEX's position**: only operates the matching engine · holds no inventory position, neutral
- **Customer UX**: order-book information + limit/market orders · pro-oriented UI
- **Major adopters**: [[exchanges/jp-exchange-bitflyer]] Lightning · [[exchanges/jp-exchange-bitbank]] · GMO Coin exchange (coexists with the sales counter)

## Economic implications

- **The sales-counter spread ~3% is higher than the wholesale price ~0.5% of the MM ([[exchanges/jp-crypto-market-maker-otc-layer]] B2C2 , etc.)** — the CEX margin ~2.5% is a markup structure
- The "invisible fee" problem for retail customers — FSA supervisory guidelines continuously demand improved transparency
- **Trading volume is sales counter > exchange**, but **profit rate is sales counter ≫ exchange** — the main lever for domestic CEX profitability
- Overseas CEXs ([[exchanges/global-cex-top10-comparison]] Binance / Coinbase, etc.) are basically maker/taker — Japan's sales-counter model is an internationally unusual structure
- Pressure to shift toward the exchange model continues, driven by the lifting of the crypto-asset ETF ban ([[exchanges/btc-spot-etf-japan-impact|BTC spot ETF 日本 impact]]), tax reform ([[exchanges/jp-crypto-asset-taxation-detailed|JP crypto asset 税制詳細]]), etc. For best execution, see [[securities/japan-best-execution-sor-pts|japan best execution SOR/PTS]].

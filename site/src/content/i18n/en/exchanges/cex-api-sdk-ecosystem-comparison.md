---
source: exchanges/cex-api-sdk-ecosystem-comparison
source_hash: 6a0876a195fd83da
lang: en
status: machine
fidelity: ok
title: "CEX API / SDK ecosystem comparison — developer interfaces of domestic / overseas exchanges"
translated_at: 2026-05-31T03:19:56.499Z
---

# CEX API / SDK ecosystem comparison — developer interfaces of domestic / overseas exchanges

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## Overview

The developer interfaces exposed by CEXs are broadly standardized across 3 tiers: **(a) REST API** (order placement · balance lookup · trade history · KYC settings, etc. — state-changing + snapshot category), **(b) WebSocket** (real-time order-book data · price streams · own-fill push — low-latency push category), **(c) FIX 4.4 / 5.0** (for institutional prime brokers · offered only by some major CEXs). Primary uses are bot trading, institutional connectivity, data acquisition (material for on-chain analytics / market making), and own-wallet connectivity (exchange ⇔ self-custody round trips). Rate limiting + IP allowlist + API-key signature authentication (HMAC-SHA256) are common across the board.

## Major domestic CEX APIs

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]**: REST + WebSocket (Lightning API) · public · API key + signature authentication · rate limit 30 req/sec · the most veteran domestically, with a large developer community
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]**: REST + WebSocket · supports all listed pairs on spot + derivatives · high level of developer-documentation completeness
- **[[exchanges/jp-exchange-bitbank|bitbank]]**: REST + WebSocket · spot-centric · well-regarded order-book data quality
- **[[exchanges/jp-exchange-coincheck|Coincheck]]**: REST · simple spec · weaker on the institutional side (retail-leaning)
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]]**: REST · partial SDK · bank-affiliated, oriented toward institutional connectivity

## Major overseas CEX APIs

- **Binance**: REST + WebSocket + FIX (institutional) · widest global coverage · full product support across spot / futures / options · official Python / Node / Java SDKs
- **Coinbase Advanced (formerly Pro)**: REST + WebSocket + FIX · axis on US institutional connectivity · high regulatory affinity
- **OKX**: REST + WebSocket + FIX · multi-product (spot / perp / options / structured)
- **[[exchanges/jp-foreign-exchange-bybit|Bybit]]**: REST + WebSocket · derivatives-centric · perp liquidity world-top
- **Kraken Pro**: REST + WebSocket + FIX · long-established · oriented toward institutional connectivity

## Third-party libraries + aggregators

- **CCXT**: open source · Python / JS / PHP library integrating 100+ CEXs · de facto standard
- **Hummingbot**: market-making bot framework · CEX + DEX cross
- **Hyperliquid Python SDK**: perp-DEX family · a porting target for institutional algos
- **TabTrader / 3Commas**: retail bot platform · bundles multiple exchanges via API keys

## Institutional connectivity standards

- **FIX 4.4 / 5.0**: bank / brokers standard · offered only by some of Binance / Coinbase / OKX / Kraken
- **Via prime broker**: indirect connectivity via [[exchanges/jp-crypto-market-maker-otc-layer|B2C2 / FalconX / Cumberland]] (FIX-standardized)
- **WebSocket multiplexing**: low-latency connections for high-frequency · co-location services are still immature
- **API rate limits**: differ between spot vs derivatives · institutions use IP multiplexing + sub-account strategies
- Domestic CEXs offer almost no FIX → institutional connectivity depends on major overseas platforms + prime brokers

## Related

- [[exchanges/global-cex-top10-comparison]] · [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/jp-crypto-market-maker-otc-layer]]

Source: compilation of public information (each CEX's official API documentation, GitHub public SDK repositories, OSS integration libraries such as CCXT/Hummingbot)

---
title: 国内暗号資産マーチャント決済 + Lightning Network
aliases:
  - JP crypto merchant payment
  - 国内 Lightning Network 事業者
  - BTC merchant settlement Japan
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: likely
tags:
  - exchanges
  - merchant
  - lightning-network
  - payment
  - btc
sources:
  - https://lightning.network/
  - https://btcpayserver.org/
status: active
---

# 国内暗号資産マーチャント決済 + Lightning Network

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 概要

国内暗号資産マーチャント決済は 2017 BTC バブル期に [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-coincheck|Coincheck]] 経由で導入されたが、2018 流出事件 + 価格ボラティリティで縮小。2023+ 以降 Lightning Network 普及で復活の兆候があり、主に観光地 + Web3 ネイティブ事業者で運用されている。

## 国内主要事業者・サービス

- **bitFlyer 決済サービス**: 加盟店向け BTC 決済プラットフォーム、2014 開始、一部縮小
- **Coincheck Payment**: 加盟店向け BTC/ETH 等決済、2014 開始、NEM 事件後縮小 → 再開
- **GMO コイン決済** (GMO Internet G 系列): GMO ペイメントゲートウェイ連携、一部試験
- **Pay-bitcoin** 等独立系: 中小店舗向け
- **国内 BTM (Bitcoin ATM)**: [[exchanges/jp-exchange-gaia|ガイア社]] 2022-08 国内初稼働、2026-05 一時停止

## Lightning Network 国内導入

- **Lightning Labs (LND)** / **Blockstream (Core Lightning)** / **ACINQ (Eclair)** — Lightning ノード実装
- **BTCPay Server**: オープンソース merchant gateway、国内一部事業者導入
- **Strike (Jack Mallers)**: USD/BTC 国際送金、国内未本格進出
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]] SETTLENET PRO**: 機関向け Lightning + Blockstream Liquid サイドチェーン

## 規制位置

- **Lightning ノード運営**: 改正資金決済法上は資金決済業者 (送金事業者) 該当の可能性、FSA は 2024 段階で明示見解未公表
- **マーチャント決済**: 加盟店向けは決済代行業者 (前払式支払手段 / 資金移動業) ライセンス次第 — [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- **税制**: 加盟店受取は事業所得、個人決済は雑所得

## 国際比較

エルサルバドル (BTC 法定通貨化 2021) · 米 Cash App (Strike 連携) · アルゼンチン retail ([[fintech/em-market-crypto-dollarization-pattern]]) · 国内は規制慎重性 + 価格ボラで普及遅延。ステーブルコイン連携 ([[exchanges/jp-cex-deposit-token-stablecoin-integration]]) が次世代決済レイヤー候補。

## 関連

- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX × 預金トークン / EPI 統合
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC レイヤー

## Sources

- Lightning Network 公式 (lightning.network)
- BTCPay Server docs (btcpayserver.org)
- 各社公式コーポレートサイト
- 日経 / ITmedia 報道

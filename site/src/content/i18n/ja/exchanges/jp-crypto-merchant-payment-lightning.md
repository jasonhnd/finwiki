---
source: exchanges/jp-crypto-merchant-payment-lightning
source_hash: e29390016eda58a0
lang: ja
status: machine
fidelity: ok
title: "国内暗号資産マーチャント決済 + Lightning Network"
translated_at: 2026-06-02T12:19:04.207Z
---
# 国内暗号資産マーチャント決済 + Lightning Network

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。比較・対照の文脈では [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] を、より広いシステムおよび規制境界については [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] をあわせて読む。

## 概要

国内暗号資産マーチャント決済は、2017 の BTC バブル期に [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-coincheck|Coincheck]] 経由で導入されたが、2018 流出事件と価格ボラティリティにより縮小した。2023以降は Lightning Network の普及により復活の兆候があり、主に観光地と Web3 ネイティブ事業者で運用されている。

## 国内主要事業者・サービス

- **bitFlyer 決済サービス**: 加盟店向け BTC 決済プラットフォーム。2014 開始。一部縮小。
- **Coincheck Payment**: 加盟店向け BTC/ETH などの決済。2014 開始。NEM 事件後に縮小し、その後再開。
- **GMO コイン決済** (GMO Internet G 系列): GMO ペイメントゲートウェイ連携。一部で試験導入。
- **Pay-bitcoin** など独立系: 中小店舗向け。
- **国内 BTM (Bitcoin ATM)**: [[exchanges/jp-exchange-gaia|ガイア社]] が 2022-08 に国内初稼働。2026-05 に一時停止。

## Lightning Network 国内導入

- **Lightning Labs (LND)** / **Blockstream (Core Lightning)** / **ACINQ (Eclair)** — Lightning ノード実装
- **BTCPay Server**: オープンソースのマーチャントゲートウェイ。国内の一部事業者が導入。
- **Strike (Jack Mallers)**: USD/BTC 国際送金。国内では未本格進出。
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]] SETTLENET PRO**: 機関向け Lightning + Blockstream Liquid サイドチェーン

## 規制上の位置づけ

- **Lightning ノード運営**: 改正資金決済法上は資金決済業者（送金事業者）に該当する可能性がある。FSA は 2024 段階で明示的な見解を公表していない。
- **マーチャント決済**: 加盟店向けは決済代行業者、前払式支払手段、資金移動業のいずれのライセンスに依拠するかが論点となる — [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- **税制**: 加盟店の受取は事業所得、個人決済は雑所得。

## 国際比較

エルサルバドル（BTC 法定通貨化 2021）・米 Cash App（Strike 連携）・アルゼンチン retail（[[fintech/em-market-crypto-dollarization-pattern]]）と比べ、国内では規制上の慎重姿勢と価格ボラティリティにより普及が遅れている。ステーブルコイン連携（[[exchanges/jp-cex-deposit-token-stablecoin-integration]]）が次世代決済レイヤーの候補である。

## 関連

- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX × 預金トークン / EPI 統合
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC レイヤー

## 出典

- Lightning Network 公式 (lightning.network)
- BTCPay Server docs (btcpayserver.org)
- 各社公式コーポレートサイト
- 日経 / ITmedia 報道

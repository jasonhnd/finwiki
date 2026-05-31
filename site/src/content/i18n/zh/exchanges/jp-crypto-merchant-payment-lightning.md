---
source: exchanges/jp-crypto-merchant-payment-lightning
source_hash: e29390016eda58a0
lang: zh
status: machine
fidelity: ok
title: "国内加密资产商户结算 + Lightning Network"
translated_at: 2026-05-31T03:19:56.414Z
---

# 国内加密资产商户结算 + Lightning Network

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 概要

国内加密资产商户结算在 2017 BTC 泡沫期经由 [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-coincheck|Coincheck]] 引入，但因 2018 流出事件 + 价格波动而萎缩。2023+ 以后随 Lightning Network 普及有复活迹象，主要在旅游地 + Web3 原生事业者中运营。

## 国内主要事业者・服务

- **bitFlyer 结算服务**：面向加盟店的 BTC 结算平台，2014 开始，部分缩减
- **Coincheck Payment**：面向加盟店的 BTC/ETH 等结算，2014 开始，NEM 事件后缩减 → 重启
- **GMO Coin 结算**（GMO Internet G 系列）：GMO 支付网关联动，部分试验
- **Pay-bitcoin** 等独立系：面向中小店铺
- **国内 BTM (Bitcoin ATM)**：[[exchanges/jp-exchange-gaia|ガイア社]] 2022-08 国内首次运行，2026-05 一度暂停

## Lightning Network 国内引入

- **Lightning Labs (LND)** / **Blockstream (Core Lightning)** / **ACINQ (Eclair)** — Lightning 节点实现
- **BTCPay Server**：开源 merchant gateway，国内部分事业者引入
- **Strike (Jack Mallers)**：USD/BTC 国际汇款，国内未正式进军
- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]] SETTLENET PRO**：面向机构的 Lightning + Blockstream Liquid 侧链

## 监管定位

- **Lightning 节点运营**：在修订资金结算法上有属于资金结算业者（汇款事业者）的可能，FSA 在 2024 阶段未公表明确见解
- **商户结算**：面向加盟店者取决于结算代行业者（预付式支付手段 / 资金移动业）牌照 — [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- **税制**：加盟店收取为事业所得，个人结算为杂所得

## 国际比较

萨尔瓦多（BTC 法定货币化 2021）· 美 Cash App（Strike 联动）· 阿根廷 retail（[[fintech/em-market-crypto-dollarization-pattern]]）· 国内因监管慎重性 + 价格波动而普及滞后。稳定币联动（[[exchanges/jp-cex-deposit-token-stablecoin-integration]]）是下一代结算层候选。

## 关联

- [[payments/japan-payment-clearing-and-settlement-infrastructure]] — JP payment clearing & settlement infrastructure
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX × 存款代币 / EPI 整合
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC 层

## Sources

- Lightning Network 官方 (lightning.network)
- BTCPay Server docs (btcpayserver.org)
- 各社官方企业网站
- 日经 / ITmedia 报道

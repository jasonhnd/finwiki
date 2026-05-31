---
source: exchanges/jp-cex-staking-lending-regulation
source_hash: 74af69c1b6588aad
lang: zh
status: machine
fidelity: ok
title: "国内 CEX 质押·借贷服务 + 监管"
translated_at: 2026-05-31T03:19:56.487Z
---

# 国内 CEX 质押·借贷服务 + 监管


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 概要

国内 CEX 向客户提供 **质押(获取 PoS 奖励)** 与 **借贷(获取利息)**。其许可范围由 **JVCEA 自主监管 + FSA 监督指针**作限制性规定,与美国(SEC vs Kraken/Coinbase)相比,日本采取事前指引型。

## 国内主要服务

- **[[exchanges/jp-exchange-bitflyer]] 借贷** — BTC/ETH 等的借贷 · 14〜90 日 · 年利 0.5-3%
- **[[exchanges/jp-exchange-coincheck]] 出借加密资产** — 同上 · 14-365 日
- **[[exchanges/jp-exchange-gmo-coin]] 借贷 + 质押**(Tezos 等)
- **[[exchanges/jp-exchange-sbi-vc-trade]] 质押** — ETH 后发参与
- **[[exchanges/jp-exchange-bitbank]] 质押** — 有限对应

## 监管要点

- **规避类存款性**:收纳于修订版资金结算法的"加密资产交换业"范围内 · 客户返还保证义务
- **禁止本金保证**:本金毁损风险的明示义务(宣传册 / 条款)
- **JVCEA 规则**:质押限于 **100% 以客户资产运用** · 禁止自家 prop 运用
- **税务处理**:利息·奖励为 **杂项所得(累进课税最高 55%)** 个人 / 法人事业所得

详情参见 [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/jp-vasp-regulatory-timeline]]。

## 海外案例

- **美 SEC vs Kraken**(2023-02):将 staking-as-service 认定为"未注册证券销售" · 停止命令 + 和解金 $30M
- **美 SEC vs Coinbase**(2023-):同类诉讼系属中 · 含 staking 的综合性交易所诉讼
- **EU MiCA**(2026 指引):质押服务设想为另需牌照
- **多层比较**:[[exchanges/us-crypto-licensing-multi-layer-system]]

## 风险管理

- **slashing 风险**:validator 被罚没可能导致客户本金毁损
- **validator 选定**:自建 or 委托(Figment / Blockdaemon 等)的透明度披露
- **liquidity 风险**:解质押期间(ETH 14-21 日 等)的流动性锁定
- **token 选定**:国内 CEX 保守地仅提供 PoS 主流(ETH / SOL / ATOM 等)

## 关联

- [[exchanges/liquid-staking-restaking-cex-exposure]] — Liquid staking / restaking × CEX 敞口
- [[exchanges/jp-crypto-asset-taxation-detailed]] — JP crypto asset 税制详情
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — 全球 VASP 监管比较矩阵

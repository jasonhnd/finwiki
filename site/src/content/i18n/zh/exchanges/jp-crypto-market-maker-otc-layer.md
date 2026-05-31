---
source: exchanges/jp-crypto-market-maker-otc-layer
source_hash: 0fb16280599de300
lang: zh
status: machine
fidelity: ok
title: "国内加密资产做市商 / OTC 桌业界 overview"
translated_at: 2026-05-31T03:19:56.398Z
---

# 国内加密资产做市商 / OTC 桌业界 overview

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-prime-brokerage-layer|global cex prime brokerage layer]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

国内 CEX 的表面盘背后，存在着承担机构订单与高额交易的 MM（做市商）/ OTC 桌层。国内 VASP 的表面成交量很大程度上依赖于这些 MM 的 continuous quoting，零售盘的流动性实质上由该层支撑。

## 全球 MM 的国内展开

- **B2C2 Japan** — 关东财务局长 第00012号（2017  登记）。英国总部 B2C2  于 2021-12  被 SBI Holdings 收购并子公司化。国内机构 OTC 的大手玩家。
- **Wintermute** — 无国内法人。对部分国内 VASP 以 KYC 为基础的 API 连接提供流动性。
- **Cumberland（DRW 系）** — 无国内法人。以 OTC 为中心的机构玩家。
- **GSR Markets** — 无国内法人。从海外据点面向国内机构 quoting。

## 国内 OTC 桌独自玩家

- **Crypto Garage (SETTLENET / OTC)** — DG（Digital Garage）× 东京短资 × 野村 HD 系的机构向基础设施。
- **Custodiem OTC** — 旧 FTX Japan，现 bitFlyer HD 系。正从零售向机构 OTC 专营转型。
- **bitbank OTC** — 经由关联子公司 / Mercury（CoinTrade）面向机构提供 OTC。

## 商业模式

bid/ask 价差 + 大额溢价为主要收益源。经办 token 以 BTC / ETH / USDT / USDC 为中心，长尾 alt 的 OTC 有限。国内最低交易额大致以 500 万円〜为参考。

## 监管关系

MM 专营玩家需要 VASP 登记（资金结算法）或金商法上的自我发注业者（DPM）登记之一。KYC + AML 义务与 CEX 同等课加，为 FSA monitoring 对象。

## 关联

- [[exchanges/jp-exchange-crypto-garage]]
- [[exchanges/jp-exchange-custodiem]]
- [[exchanges/jp-exchange-bitbank]]
- [[exchanges/jp-exchange-mercury]]
- [[exchanges/jp-institutional-custody-three-pillars]]
- [[exchanges/jp-vasp-parent-company-map]]
- [[exchanges/global-cex-prime-brokerage-layer]] — 全球 CEX prime brokerage 层
- [[securities/japan-best-execution-sor-pts]] — japan best execution SOR/PTS
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA spot volume 统计分析

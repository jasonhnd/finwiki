---
source: exchanges/jp-vasp-cold-storage-segregation-rules
source_hash: ed27b3af44e721bf
lang: zh
status: machine
fidelity: ok
title: "国内 VASP 冷存储 95% + 分别管理制度"
translated_at: 2026-05-31T05:31:05.776Z
---

# 国内 VASP 冷存储 95% + 分别管理制度

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 制度概要

根据修订后的资金结算法施行规则（2020-05 施行），向国内 VASP 课以**将客户委托的暗号资产中 95% 以上以冷钱包（离线环境）保管的义务**。仅剩余 5% 以下允许热运用（用于出金原资、确保流动性）。直接触发因素是 [[exchanges/jp-vasp-incident-history]] 的 2018-01 Coincheck NEM 580 億円流出事件。鉴于事件发生时 NEM 全量处于热保管之下的教训，作为对整个行业的监管反射而引入。违反将成为业务改善命令的依据（参见 [[exchanges/fsa-business-improvement-orders-history]]）。

## 冷/热的定义与例外

“冷”指与网络物理切断（气隙）的签名环境。原则上密钥生成、签名在离线终端实施，仅将已签名的 TX 进行网络移送。使用多重签名（M-of-N）构成或 HSM（Hardware Security Module）时，视运用设计可认定为“冷等同”（由 JVCEA 自主规制指南个别审查）。MPC（Multi-Party Computation）型作为新兴技术，认定框架正在整备中。

## 分别管理的 3 形态

- **信托型**（法律分别最强）: 将客户暗号资产信托给信托银行，破产隔离在法律上最强。三井住友信托、三菱 UFJ 信托为主要受托人。
- **个别管理型**（内部分别）: 将自有资产与客户资产以不同账户、不同钱包、不同记账管理。属技术性分别，但法律上的破产隔离弱于信托型。
- **混合型**: 一部分信托 + 一部分个别的现实运用。主要 VASP 的大半采用此形态。

## 国内主要 VASP 的运用例

- [[exchanges/jp-exchange-bitflyer]]: 信托 + 一部分个别（混合型）
- [[exchanges/jp-exchange-gmo-coin]]: 以个别管理型为中心
- [[exchanges/jp-exchange-coincheck]]: 2018 事件后全面转向信托型
- [[exchanges/jp-exchange-sbi-vc-trade]]: 多用信托型（活用 SBI 集团信托银行）

## 全球比较

- 美国 NYDFS BitLicense: 信托银行 segregation 义务，取得 Trust Charter 型的托管机构崛起（Coinbase Custody Trust 等）
- 香港 SFC Type 1 + VASP 牌照: 禁止与客户资产混藏（Co-Mingling），必须经由独立 Trust Company
- EU MiCA CASP（2024 施行）: 客户资产完全分别保管义务，允许第三方托管机构

参考: [[exchanges/jvcea-self-regulatory-overview]] · [[exchanges/jp-vasp-regulatory-timeline]] · [[exchanges/jp-institutional-custody-three-pillars]] · [[exchanges/global-vasp-regulatory-comparison-matrix]] · [[exchanges/coincheck-nem-hack-detailed-analysis]] · [[exchanges/cex-matching-engine-wallet-architecture]]

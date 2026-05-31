---
source: exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis
source_hash: 8c69901545d0ab8d
lang: zh
status: machine
fidelity: ok
title: "DMM Bitcoin 流出事件 详细分析（2024-05）—— 归属 Lazarus 的 4,502.9 BTC"
translated_at: 2026-05-31T03:19:56.500Z
---

# DMM Bitcoin 流出事件 详细分析（2024-05）—— 归属 Lazarus 的 4,502.9 BTC


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM 580 億円流出事件 詳細分析 (2018-01)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. 事件概要

2024-05-31 傍晚，从 DMM Bitcoin **非法流出 4,502.9 BTC（约 482 億円相当）**。在当时是仅次于 [[exchanges/jp-exchange-coincheck]] NEM 事件（2018, 580 億円）的境内大规模流出事件。后来由 FBI + 警察厅 + DC3 （美国国防部网络犯罪中心）三方联合，在 2024-12 公布归属于朝鲜 Lazarus 旗下 **TraderTraitor**。

## 2. 技术原因（公开信息范围）

- 推定路径为经由**业务委托方系统**的社会工程学攻击
- 介入了**热钱包密钥管理流程**的运营失误
- 详细侵入路径因侦查持续而未公开
- 客户资产的分别管理正常运作，流出仅为公司资产部分（DMM 主张）

## 3. 紧急应对 + 客户资产保全

- **2024-05-31** 全部加密资产交易停止
- **2024-06-05** DMM Bitcoin 从自身集团筹资，市场调集相当于客户资产部分的 BTC 予以保全
- **2024-09** [[exchanges/fsa-business-improvement-orders-history]] 发出业务改善命令
- **2024-12-01** 服务全面停止 + 宣布停业
- **2025-03-08** 客户资产・账户向 [[exchanges/jp-exchange-sbi-vc-trade]] 移交完成，DMM Bitcoin 法人解散

## 4. 归属确认（Lazarus / TraderTraitor）

- **2024-12-23** FBI + 警察厅 + DC3 三方联合声明正式归属为「由 TraderTraitor（Lazarus 旗下）所为」
- 作为朝鲜国家关联的加密资产盗窃，规模属 2024 年年度最大级别
- 与 Chainalysis 等 forensic 厂商联动，持续追踪资金流向
- 经由混币器（mixer）的离场（off-ramp）阻断为课题

## 5. 制度性意义

- **停业 + 竞品移交模式** 这一第 3 模式（Coincheck 2018 = 子公司化吸收，FTX Japan 2023 = 以分别管理存活 + 100% 返还，DMM 2024 = 停业 + 移交）
- 凸显**业务委托方风险**（与 EU CTPP / DORA 并行的论点）
- 全球 Lazarus 威胁的境内立证
- 监管修订进行中（面向 2026 强化业务委托管理）

## 相关

- [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-exchange-sbi-vc-trade]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/coincheck-nem-hack-detailed-analysis]]（比较）
- [[exchanges/fsa-business-improvement-orders-history]]
- [[exchanges/jp-vasp-ma-consolidation-history]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus ハック詳細分析]]
- [[exchanges/global-crypto-forensics-vendor-layer|グローバル crypto forensics ベンダーレイヤー]]

来源：公开信息整理（DMM Bitcoin/SBI VC Trade IR 披露、FSA 业务改善命令、警察厅/NPA 公布、Chainalysis/Elliptic 公开追踪、Lazarus 集团追踪报告）

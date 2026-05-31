---
source: exchanges/jp-vasp-aml-travel-rule-implementation
source_hash: 6244094904490df3
lang: zh
status: machine
fidelity: ok
title: "国内 VASP 犯罪收益转移防止法 + FATF 旅行规则国内实施（2023-）"
translated_at: 2026-05-31T06:16:15.665Z
---

# 国内 VASP 犯罪收益转移防止法 + FATF 旅行规则国内实施（2023-）

## 概要

国内 VASP 依据**犯罪收益转移防止法（犯收法）**，被强制要求实施身份核实 + 交易监控 + 可疑交易申报。**FATF 建议 16 （旅行规则）**已通过 2023-06 修订版犯收法施行而完全实装，虚拟资产汇款 **≥ 10 万円等值**时须在收发双方之间传递 KYC 数据。AML/CFT 体系以 FSA 监督 + JAFIC（警察厅）信息集约 + JVCEA 自律规制三层架构运营。

## 犯收法义务 4 大支柱

1. **身份核实（KYC）**：核实客户特定事项（姓名·地址·出生日期）+ 交易时确认（200 万円以上汇款 / 10 万円以上转账）
2. **交易记录保存**：7 年间（客户识别 + 交易明细）
3. **可疑交易申报**：经由 JAFIC（警察厅犯罪收益转移防止对策室）报告
4. **AML 体制整备**：内部控制 + 职员培训 + 风险评估书年度更新

## 旅行规则国内实施

- **施行日**：2023-06-01（修订版犯收法）
- **适用范围**：加密资产汇款 ≥ 10 万円等值
- **传递数据**：发送方（姓名·地址·账号）+ 接收方（姓名·账号）
- **对应技术栈**：通过 TRUST（TRP）/ VASPnet / Sumsub / Notabene 等供应商
- **国内 VASP 应对状况**：全 27 社均已接入 **VASPnet**（国内标准）或 **TRUST**

## 与海外的互操作性

- **美国 → 日本**：Coinbase / Kraken / Gemini 等通过 Notabene 与 VASPnet 接入
- **新加坡 → 日本**：MAS 监管下的 VASP 同样接入
- **海外无注册 → 日本**：无法传递数据 → 不符合旅行规则的海外交易所的**接收被拒**（国内 VASP 侧停止到账）

## 风险与课题

- **日出问题（Sunrise issue）**：各国实施进度差异（美国联邦法层面起步较晚·欧盟为 MiCA 2024 完全实施）
- **非托管钱包问题**：向自托管钱包汇款时 KYC 困难（MAS / FCA 仍在讨论中）
- **隐私顾虑**：BTC/ETH 链上透明性 + KYC 数据比对，存在推断汇款人财务状况的风险

## Cross-links

- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-regulatory-timeline]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[fintech/fatf-travel-rule-overview]]
- [[fintech/fatf-travel-rule-cross-border-stack]]
- [[fintech/carf-1099da-end-of-crypto-anonymity]]

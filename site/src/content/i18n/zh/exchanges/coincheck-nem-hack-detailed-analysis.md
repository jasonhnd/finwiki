---
source: exchanges/coincheck-nem-hack-detailed-analysis
source_hash: cb218e049dd30a3c
lang: zh
status: machine
fidelity: ok
title: "Coincheck NEM 580 億円 流出事件 详细分析 (2018-01)"
translated_at: 2026-05-31T03:19:56.394Z
---

# Coincheck NEM 580 億円 流出事件 详细分析 (2018-01)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05) — Lazarus 帰属 4,502.9 BTC]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. 事件概要

2018-01-26 凌晨，从 Coincheck 的 NEM (XEM) 热钱包中 **约 5.2 億 XEM（当时约 580 億円 相当）** 流向外部。这是当时 **史上最大规模的加密资产盗窃** 事件，作为超过 Mt.Gox（2014）的金额而受到国际关注。虽然由 NEM Foundation 开发的 **马赛克标签追踪** 使流出资金的流向可实时追踪，但未能完全阻止经由暗网 DEX 的现金化，据称约 60% 相当被洗钱为其他币种。

## 2. 技术原因

- **热钱包 100% 运营**：流出时点 XEM 的离线（冷）保管比例为 0%。全部资产常时处于在线状态
- **多签未实施**：XEM 当时已支持多签，但 Coincheck 以实施成本为由采取 **单一签名运营**
- **私钥管理的脆弱性**：单一密钥热钱包构成 + 密钥管理流程文档未完善
- **入侵路径**：经由对业务用 PC 的鱼叉式钓鱼邮件而感染恶意软件（后经警察厅调查推定归属 **朝鲜 Lazarus / APT38**）

## 3. 补偿方案

- **2018-01-28（流出 2  天后）**：公式发表对 26 万 名顾客 + 约 580 億円 相当的 **全额 JPY 补偿**
- **2018-03-12**：补偿完成（**1 XEM = 88.549 円** 换算）
- **从 Coincheck 自有资本拨付**（Monex 子公司化前的独立期）
- 在法律弁济义务尚未确定的阶段进行自主补偿在 **全球属罕见** — 未破产而能持续经营的稀有案例

## 4. 监管反射

- **2018-03**：FSA 对国内 VASP 16 社 进行一齐入内检查 + 对 Coincheck 下达 **业务改善命令**
- **2018-04**：**JVCEA 设立**（自律监管法人成立）
- **2018-04**：**Monex Group 将 Coincheck 完全子公司化**（36 億円）
- **2020-05**：修订金商法 + 监督指针将 **热钱包 5% / 冷钱包 95% 的分别管理义务** 制度化

## 5. 国际比较

与其后的 **Mt.Gox**（2014  流出 · 弁济在 12  年经过后的 2026  仍在延续）及 **FTX International**（2022  · 弁济在 3  年经过时点为部分弁济）对比，Coincheck 在 **50  天完成全额 JPY 补偿**。作为制度设计之外的自主应对，结果上成为国内监管（95% 冷钱包义务 + JVCEA）的 **实证案例**。

## Cross-links

- [[exchanges/jp-exchange-coincheck]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[exchanges/fsa-business-improvement-orders-history]]
- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-ma-consolidation-history]] (Monex 子公司化)
- [[exchanges/mtgox-bankruptcy-processing-timeline]]
- [[exchanges/ftx-japan-100pct-return-case-study]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus ハック詳細分析]]

来源: 公開情報整理 (Coincheck/マネックスグループ IR 開示、FSA 業務改善命令・記者会見、警察庁 NEM 流出事案関連発表、Chainalysis/Elliptic 公開トレース、Lazarus グループ追跡レポート)

---
title: Canton Network 概览 · DAML 智能合约的隐私机构链
aliases: [canton-overview, canton-network-overview, digital-asset-canton]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, dlt, privacy, canton, daml, institutional]
sources: []
status: candidate
---

# Canton Network 概览 · DAML 智能合约的隐私机构链

> [!info] TL;DR
> Canton 是 Digital Asset 公司开发的隐私保护型 DLT,用 **DAML(Digital Asset Modeling Language)** 智能合约,核心创新是 **sub-transaction privacy**——每笔交易只对参与方可见,监管者可作为节点观察。2026-Q1 已有 600+ 机构、**$6T+ tokenized assets**(自我披露)、5 家 MMF 入驻 GS DAP。JPM Kinexys 2026-01 宣布主战场从 Base 迁回 Canton。

## Key facts

- 创始成员 23+ 家:Digital Asset + Goldman Sachs + JPMorgan + DTCC + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank 等 ^[extracted]
- Global Synchronizer 2025 上线 · 全 Canton 统一协调层 ^[extracted]
- $6T+ tokenized assets · 600+ 机构(2026-Q1 自我披露) ^[extracted]
- Sub-transaction privacy 是 application 级数据隔离 · 不是 zero-knowledge proofs ^[extracted]
- DAML 合约可跨应用调用——GS DAP 的 MMF 份额可与 Kinexys JPMD 原子结算 ^[extracted]

## Mechanism / How it works

Canton 不是公链、不是单一银行私链,而是 **机构内部清算的 DLT 联盟**:

- **数据模型**:application-level data confidentiality——每个参与方只能看到与自己相关的交易,其他参与方对该交易的存在都不感知
- **Global Synchronizer**:全 Canton 统一协调层,由 Digital Asset 联合运营,负责跨 application 的 transaction ordering
- **Regulator Node 模型**:监管者作为参与方加入,可观察被授权范围内的交易
- **跨应用互操作**:DAML 合约可跨 application 原子调用(GS DAP MMF 份额 ↔ Kinexys JPMD cash leg 原子结算)

与公链根本差异:Canton 默认隔离 · 公链默认公开。这种设计直接对应机构客户的"商业机密 + 监管可见性"双需求。

## Origin & evolution

Digital Asset 公司 2014 年由 Sunil Hirani(ICAP)和 Yuval Rooz 创立,初期专注金融机构的 DLT POC。2017-2019 间为澳交所(ASX)开发 CHESS replacement(后取消),期间 DAML 成型。2019-2023 间 Canton Network 概念逐步成熟,2024-2025 商业化加速,2026-Q1 进入"机构 tokenization 私链路线"代表平台地位。

JPM Kinexys 的迁移路径是 Canton 商业化的关键里程碑:2025-11 至 2026-01 JPMD 在 Base 上 ~$200M 流通 → 2026-01 宣布迁 Canton → 2026-Q2 已迁 $500M+,在迁 $1.5B+,计划 2026-Q4 完成。Base 残余 $50-100M 仅 Coinbase Custody 客户。

## Counterpoints

Canton 的"隐私 + 监管节点"模型本质是 **应用层信任假设的延伸**——不是密码学保证。这意味着 Digital Asset 公司或 Global Synchronizer 一旦被攻破或被法律强制披露,理论上可以暴露全部交易历史。这是与 zero-knowledge proof 路线(如 Aztec、Aleo)的根本差异。另一方面 Canton 作为联盟链,治理是 Digital Asset + 创始成员主导,新成员加入受限,这与公链的"无许可"形成对立。

## Open questions

- $6T tokenized assets 数字的可验证性?(自我披露,缺少第三方审计)
- BlackRock 是否会从 Canton 入驻 GS DAP 升级到深度合作?
- Canton vs Hyperledger Besu vs R3 Corda 在欧盟、亚洲市场的竞争结局?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-daml-technical-spec|Canton DAML Technical Spec]]
- [[systems/canton-mmf-coalition|Canton MMF 联盟]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton(公私链对照)]]
<!-- /wiki-links:managed -->

## Sources

- Digital Asset Canton Network whitepaper

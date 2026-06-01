---
source: systems/canton-overview
source_hash: 36a473e8e6345ea2
lang: zh
status: machine
fidelity: ok
title: "Canton Network 概观 · DAML 智能合约的隐私机构链"
translated_at: 2026-06-01T04:15:40.126Z
---
# Canton Network 概观 · DAML 智能合约的隐私机构链

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/canton-daml-technical-spec|Canton DAML 技術仕様 · 関数型金融契約 + Sub-transaction Privacy]] 阅读，以获得同业 / 对比语境；并对照 [[fintech/INDEX|fintech index]] 阅读，以了解更广泛的系统 / 监管边界。

## 关键事实

- 创始成员 23+ 家：Digital Asset + Goldman Sachs + JPMorgan + DTCC + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank 等 ^[extracted]
- Global Synchronizer 于 2025  运行 · 统合 Canton 全体的协调层 ^[extracted]
- $6T+ tokenized assets · 600+ 机构（2026-Q1  自我披露）^[extracted]
- Sub-transaction privacy 是应用级数据隔离 · 不是 zero-knowledge proofs ^[extracted]
- DAML 合约可跨应用调用 —— GS DAP 的 MMF 份额可与 Kinexys JPMD 进行原子结算 ^[extracted]

## 机制 / 工作方式

Canton 既不是公链，也不是单一银行的私链，而是**用于机构内部清算的 DLT 联合体**：

- **数据模型**：application-level data confidentiality —— 每个参与者只能看到与自己相关的交易，其他参与者甚至无法感知该交易的存在
- **Global Synchronizer**：Canton 全体的综合协调层，由 Digital Asset 共同运营，负责跨应用的 transaction ordering
- **Regulator Node 模型**：将监管者作为参与者纳入，可观察授权范围内的交易
- **应用间互操作**：DAML 合约可跨应用进行原子调用（GS DAP MMF 份额 ↔ Kinexys JPMD cash leg 的原子结算）

与公链的根本差异：Canton 默认隔离 · 公链默认公开。该设计直接回应机构客户对“商业机密 + 监管可见性”的双重要求。

## 起源与演进

Digital Asset 公司由 Sunil Hirani（ICAP）和 Yuval Rooz 于 2014 年 创立，早期专注于金融机构 DLT POC。2017-2019 年 为澳大利亚证券交易所（ASX）开发 CHESS replacement（后被取消），期间 DAML 日渐成熟。2019-2023 年 Canton Network 概念逐步成熟，2024-2025 年 商业化加速，并在 2026-Q1  成为“机构 tokenization 私有链路径”的代表平台。

JPM Kinexys 的迁移路径是 Canton 商业化的重要里程碑：2025-11  至 2026-01  期间，[[fintech/jpmorgan-jpmd-coin|JPMD]] 在 Base 上约有 $200M 流通 → 2026-01  宣布迁移至 Canton → 截至 2026-Q2 ，已有 $500M+ 完成迁移，$1.5B+ 正在迁移中，计划于 2026-Q4  完成。Base 残余 $50-100M 仅面向 Coinbase 托管客户。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-daml-technical-spec|Canton DAML Technical Spec]]
- [[systems/canton-mmf-coalition|Canton MMF 連合]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton(公開/プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## 来源

- Digital Asset Canton Network whitepaper
- Canton Network (Digital Asset) — https://www.canton.network/

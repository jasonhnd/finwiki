---
source: systems/canton-daml-technical-spec
source_hash: b6de27f58e402f69
lang: zh
status: machine
fidelity: ok
title: "Canton DAML 技术规格 · 函数式金融合约 + 子交易隐私"
translated_at: 2026-06-01T04:15:40.107Z
---
# Canton DAML 技术规格 · 函数式金融合约 + 子交易隐私

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/canton-overview|Canton Network 概観 · DAML スマートコントラクトのプライバシー機関チェーン]] 获取同类 / 对比背景，并结合 [[fintech/INDEX|fintech index]] 把握更广泛的系统 / 监管边界。

## 关键事实

- DAML 是 functional + obligation-based 的合约语言，并非命令式语言 ^[extracted]
- Sub-transaction privacy 默认启用，每个参与者只查看与自身相关的部分 ^[extracted]
- 原生支持 multi-party atomic transactions ^[extracted]
- Regulator Node 是协议级的一等公民，不是事后审计 ^[extracted]
- 跨应用调用具有原子性，不需要桥或 wrapped token ^[extracted]

## 机制 / 工作方式

DAML vs Solidity 的维度比较：

| 维度 | Solidity(EVM) | DAML(Canton) |
|---|---|---|
| 编程范式 | 命令式 + state mutation | Functional + 多方权利义务建模 |
| 隐私 | 全公开（链上完全可见） | Sub-transaction privacy（默认隔离） |
| 多方原子性 | 需要复杂的合约组合 | 原生支持 multi-party atomic transactions |
| 监管节点 | 无此概念 | Regulator Node 模型——将监管者作为参与者嵌入 |
| 适用场景 | DeFi + 通用 dApp | 金融合约 + 机构间清算 |

DAML 的“权利义务建模”具体例子：债券合约会明确写出“issuer 承担义务 X、holder 拥有权利 Y、custodian 承担审计义务 Z”——这直接对应传统金融的法律合约语义（可与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 在 DAML 上表达的产品结构对照）。在 Solidity 中，这些角色关系必须由程序员自行编码，容易出错。

Sub-transaction privacy 的实现：每笔 transaction 被分解为 sub-events，每个 sub-event 只向相关参与者加密广播。Global Synchronizer 只负责排序（不解密内容）。

## 起源与演进

DAML 起源于 Digital Asset 在 2014-2017 年 的早期 POC，于 2017 年 开源（GitHub），并在 2019 年 成为 Canton Network 的标准合约语言。2020-2024 年 持续迭代，DAML 3.x 增加了更细粒度的隐私原语和跨应用 choreography 支持。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## 来源

- DAML language reference(digitalasset.com)
- Canton Network (Digital Asset) — https://www.canton.network/

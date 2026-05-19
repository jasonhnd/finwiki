---
title: Canton DAML 技术规范 · 函数式金融合约 + Sub-transaction Privacy
aliases: [canton-daml, daml-spec, canton-technical-spec, daml-vs-solidity]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, dlt, daml, smart-contracts, privacy, canton]
sources: []
status: candidate
---

# Canton DAML 技术规范 · 函数式金融合约 + Sub-transaction Privacy

> [!info] TL;DR
> DAML(Digital Asset Modeling Language)是专为金融合约设计的 **functional + obligation-based** 智能合约语言。与 Solidity 的根本差异:**编程范式 functional vs 命令式 · 隐私默认隔离 vs 全公开 · 多方原子原生支持 vs 需复杂组合 · 监管节点是一等公民**。这是为什么 JPM Kinexys 选择从 Base(Solidity)迁回 Canton(DAML)。

## Key facts

- DAML 是 functional + obligation-based 合约语言 · 不是命令式 ^[extracted]
- Sub-transaction privacy 默认开启 · 每个参与方只看到与自己相关的部分 ^[extracted]
- 原生支持 multi-party atomic transactions ^[extracted]
- Regulator Node 是协议级一等公民 · 不是事后审计 ^[extracted]
- 跨 application 调用是原子的 · 不需要桥或 wrapped token ^[extracted]

## Mechanism / How it works

DAML vs Solidity 维度对比:

| 维度 | Solidity(EVM) | DAML(Canton) |
|---|---|---|
| 编程范式 | 命令式 + state mutation | Functional + 多方权利义务建模 |
| 隐私 | 全公开(链上一切可见) | Sub-transaction privacy(默认隔离) |
| 多方原子 | 需要复杂合约组合 | 原生支持 multi-party atomic transactions |
| 监管节点 | 无概念 | Regulator Node 模型——监管者作为参与方 |
| 适用场景 | DeFi + 通用 dApp | 金融合约 + 机构清算 |

DAML 的"权利义务建模"具体例:一份债券合约会明确写出"issuer 有义务 X · holder 有权利 Y · custodian 有审计义务 Z"——这与传统金融法律合约的语义直接对应。Solidity 则需要程序员自己编码这些角色关系,容易出错。

Sub-transaction privacy 的实现:每笔 transaction 被分解为 sub-events,每个 sub-event 只对涉及的参与方加密广播,Global Synchronizer 只负责排序(不解密内容)。

## Origin & evolution

DAML 起源于 Digital Asset 2014-2017 年的早期 POC,2017 年开源(GitHub),2019 年成为 Canton Network 的标准合约语言。2020-2024 年间持续迭代,DAML 3.x 增加了更细粒度的隐私 primitive 和 cross-application choreography 支持。

## Counterpoints

DAML 的学习曲线陡峭——大多数区块链开发者熟悉 Solidity/Move/Rust,转 DAML 等同于学一门新语言。这是 Canton 难以从公链生态吸引开发者的根本原因。另外 DAML 闭源期(2014-2017)和早期专利策略让部分开源社区警惕,虽然现已 Apache 2.0,但生态心智份额仍远低于 EVM。

## Open questions

- DAML 4.x 的 roadmap 是否会增加 EVM 兼容层?
- Sub-transaction privacy 在面对 Global Synchronizer 妥协时的实际保护强度?
- DAML 形式化验证工具链(类似 Move Prover、Certora)的发展?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-mmf-coalition|Canton MMF Coalition]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## Sources

- DAML language reference(digitalasset.com)

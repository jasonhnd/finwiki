---
title: Hyperledger Besu vs Canton · JPM 主战场迁移路径
aliases: [hyperledger-besu-vs-canton-migration, jpm-quorum-canton-migration, besu-vs-canton]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, blockchain, evm, daml, canton, besu, jpmorgan, kinexys]
sources: []
status: candidate
---

# Hyperledger Besu vs Canton · JPM 主战场迁移路径


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 兼容企业链(Quorum 进化)]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- JPM 2026 启动 Kinexys 主战场迁 Canton · 计划 2027 H1 完成 ^[extracted]
- 迁移驱动 4 条:DAML 适合金融合约 · multi-party atomic · 创始成员战略 · application-level 隔离 ^[extracted]
- Kinexys Chain 迁移后保留作内部测试 + EVM 兼容备用 ^[extracted]
- 其他 G-SIB(Citi / HSBC / BNP)新建私链仍默认 Besu ^[extracted]
- Canton 与 Besu 不是替代关系 · 同一银行可同时运营 ^[inferred]

## Mechanism / How it works

Quorum/Besu 的优势是 EVM 兼容 · 可复用 Solidity 工具链 · 银行客户接受度高(已熟悉 Ethereum 概念)。劣势是 multi-party atomic settlement 需要复杂合约组合,且 Constellation 的 off-chain payload 隔离在监管视角下不如 application-level 数据隔离干净。Canton 原生提供 DAML(functional + obligation-based language)+ 多方原子结算 + privacy by design,机构客户(投行 + 资产管理 + 托管)可在同一 ledger 协作而不互相暴露完整状态。JPM 在 Kinexys 上要做的 24/7 repo 市场 + collateral mobility,Canton 原语贴合度显著高于 Quorum。

## Origin & evolution

2015-2020 JPM 在 Quorum 上孵化 [[fintech/jpmorgan-jpmd-coin|JPMD]] / Onyx Coin · 验证 stablecoin + 内部链可行性。2021 Daml/Canton 完成机构联盟启动 · DTCC + 高盛 + 摩根斯坦利加入。2024-11 JPM 改名 Onyx → Kinexys 同时启动 Canton 评估。2026 Q2-Q3 Kinexys 完成 Canton 部分功能切换(repo + collateral 优先)。2027 H1 计划完成全部主战场迁移,Quorum fork 转为内部测试环境。Citi CTS / HSBC TDS / BNP Securities Services 走类似路径但起点不同:Citi 直接 Canton + Hedera 并行,HSBC 仍以 Besu 为主未公开 Canton 计划(对照 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 等公链 RWA 在机构链上的反向部署)。

## Counterpoints

- DAML 学习曲线陡 · 内部工程师转型成本可能拖延迁移
- 多方原子结算的实际收益依赖参与方足够多 · 早期阶段 Canton 网络效应未必碾压
- "Besu 不会消失" 也可能是 JPM 用来管理 Linux Foundation 关系的政治表态 · 实际投入逐年下降

## Open questions

- 2027 H1 迁移完成后 Citi / HSBC 会跟进 Canton 还是继续 Besu?
- Canton 多方原子结算的实测 TPS / 延迟数据何时公开?
- Besu 社区若失去 JPM 核心贡献是否还能维持月 commit top 5?
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED 等私募信贷代币化]] 选 Canton 还是 Besu?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-overview|Besu 总览]]
- [[systems/canton-overview|Canton 协议总览]]
- [[fintech/multi-megabank-consortium-governance|多巨头银行联盟治理]]
<!-- /wiki-links:managed -->

## Sources


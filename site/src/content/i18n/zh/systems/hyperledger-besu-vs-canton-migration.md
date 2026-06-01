---
source: systems/hyperledger-besu-vs-canton-migration
source_hash: b618a2b3e20083e7
lang: zh
status: machine
fidelity: ok
title: "Hyperledger Besu vs Canton · JPM 主战场迁移路径"
translated_at: 2026-06-01T04:15:40.146Z
---
# Hyperledger Besu vs Canton · JPM 主战场迁移路径

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 互換エンタープライズチェーン(Quorum の進化形)]] 阅读，以获得同业 / 对比语境；也可对照 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- JPM 于 2026 年 开始将 Kinexys 的主战场迁移至 Canton · 计划在 2027 H1  完成 ^[extracted]
- 推动迁移的 4  个因素：DAML 适合金融合约 · multi-party atomic · 创始成员战略 · application-level 隔离 ^[extracted]
- Kinexys Chain 在迁移后仍将作为内部测试 + EVM 兼容备份保留 ^[extracted]
- 其他 G-SIB（Citi / HSBC / BNP）在构建新的私有链时，Besu 仍然是默认选择 ^[extracted]

## 机制 / 工作方式

Quorum/Besu 的优势是 EVM 兼容性，可以复用 Solidity 工具链，银行客户接受度高（已经熟悉 Ethereum 概念）。劣势是 multi-party atomic settlement 需要复杂的合约组合，且 Constellation 的 off-chain payload 隔离从监管视角看不如 application-level 数据隔离清晰。Canton 原生提供 DAML（functional + obligation-based language）+ 多方原子结算 + privacy by design，机构客户（投资银行 + 资产管理 + 托管）可以在同一 ledger 上协作，而无需相互暴露完整状态。在 JPM 试图在 Kinexys 上实现的 24/7  repo 市场 + collateral mobility 中，Canton 的原语适配度显著高于 Quorum。

## 起源与演进

2015-2020 年，JPM 在 Quorum 上孵化 [[fintech/jpmorgan-jpmd-coin|JPMD]] / Onyx Coin，验证 stablecoin + 内部链的可行性。2021 年，Daml/Canton 发起机构财团，DTCC + Goldman Sachs + Morgan Stanley 加入。2024-11 ，JPM 将 Onyx 更名为 Kinexys，同时开始评估 Canton。2026 Q2-Q3 ，Kinexys 完成部分功能切换至 Canton（优先 repo + collateral）。计划在 2027 H1  完成全部主战场迁移，Quorum fork 将转为内部测试环境。Citi CTS / HSBC TDS / BNP Securities Services 走类似路径但起点不同：Citi 直接并行运行 Canton + Hedera，HSBC 仍以 Besu 为主轴，尚未公布 Canton 计划（与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] 等公链 RWA 向机构链反向展开的案例形成对照）。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-overview|Besu 総覧]]
- [[systems/canton-overview|Canton プロトコル総覧]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## 来源

- Hyperledger Besu docs — https://besu.hyperledger.org/
- Canton Network (Digital Asset) — https://www.canton.network/

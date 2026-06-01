---
source: systems/hyperledger-besu-overview
source_hash: 0e94fb3106b3a431
lang: zh
status: machine
fidelity: ok
title: "Hyperledger Besu · EVM 兼容企业链（Quorum 的演进形态）"
translated_at: 2026-06-01T04:15:40.138Z
---

# Hyperledger Besu · EVM 兼容企业链（Quorum 的演进形态）

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/canton-overview|Canton(機関向け DLT の対照)]] 阅读同类 / 对比背景，并结合 [[fintech/INDEX|fintech index]] 理解更广的系统 / 监管边界。

> [!info] TL;DR
> Hyperledger Besu 是由 ConsenSys 主导的 EVM 兼容 enterprise permissioned chain，前身是 JPMorgan 于 2015 年推出的 Quorum（Geth fork）。它在 2020-08 出售并整合进 Hyperledger。JPM 保留自己的 fork 并持续改造，在 2024-11 将内部链改名为 Kinexys Chain，仍然是 Besu 月度 commit 中排名靠前的 5 贡献者之一。

## Key facts

- Quorum 1.0 于 2017-05 开源，2020-08  JPM 将其出售给 ConsenSys 并整合进 Besu ^[extracted]
- 内部 Quorum fork 于 2024-11 改名为 Kinexys Chain（旧称 Onyx Chain）^[extracted]
- 共识为 IBFT（Istanbul BFT）· JPM 内部 9 个 validator（5 个区域 + 4 个备份）^[extracted]
- 2 秒出块 · 单个区块即时 finality · 客户 gas 免费（由 JPM 承担）^[extracted]
- 隐私层 Constellation：ZK 私有交易池 · 链上仅有 txHash + metadata ^[extracted]
- 支持 EIP-2612 permit + EIP-3009 transferWithAuthorization · 不支持 EIP-7708  ^[extracted]

## Mechanism / How it works

Besu 是**完全 EVM 兼容的 permissioned chain**：Solidity 合约可直接迁移，工具链（Hardhat / Foundry / web3.js）无需修改。共识层不采用 PoW/PoS，而是采用 IBFT，只要有 4 个以上 validator 就能启动 BFT 风格的 finality。隐私层 Constellation 是基于 ZK 的私有交易子系统，payload 通过 P2P 加密在 validator 之间直接传输，链上只留下 txHash + timestamp。由此实现“permissioned chain 上的选择性私有交易”。JPM 的 Kinexys Chain 上的 9 节点配置覆盖 5 个区域 + 4 个备份，这是 G-SIB 场景下 Besu 的典型部署形态。

## Origin & evolution

2015 年 JPM 启动 Quorum · 基于 Geth fork。2017-05  Quorum 1.0 开源。2018-2020 年 JPM 尝试将 Quorum 商业化但失败 · 2020-08 出售给 ConsenSys，并整合进 Hyperledger Besu（Linux Foundation 治理）。JPM 同时保留自己的 fork 并持续改造 · 2024-11 将内部链从 Onyx Chain 改名为 Kinexys Chain（[[fintech/jpmorgan-jpmd-coin|JPMD]] 是现存的货币腿）。Linux Foundation 于 2025 年成立“Decentralized Trust”基金会并接管 Hyperledger 治理，但 JPM 仍是核心成员。Citi / HSBC / BNP 等 G-SIB 在新建私有链时，Besu 仍是默认选择 —— 这是 EVM 兼容性的网络效应（与 [[fintech/bis-project-agora-overview|BIS Agora]] 等跨 G-SIB multi-CBDC pilot 中的链选择相对）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
- [[fintech/multi-megabank-consortium-governance|複数メガバンクコンソーシアム治理]]
<!-- /wiki-links:managed -->

## Sources

- Hyperledger Besu docs — https://besu.hyperledger.org/

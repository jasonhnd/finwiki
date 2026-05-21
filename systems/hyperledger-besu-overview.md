---
title: Hyperledger Besu · EVM 兼容企业链(Quorum 进化)
aliases: [hyperledger-besu-overview, besu, quorum, jpm-quorum-besu]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, blockchain, evm, private-chain, hyperledger, besu, quorum]
sources: []
status: candidate
---

# Hyperledger Besu · EVM 兼容企业链(Quorum 进化)


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it with [[fintech/INDEX|fintech index]] for adjacent context and [[security/bytecode-forensic-three-tier-verify|智能合约 bytecode forensic — 三层 verify 技术]] for the broader system boundary.

> [!info] TL;DR
> Hyperledger Besu 是 ConsenSys 主导的 EVM 兼容企业 permissioned 链,前身为 JPMorgan 2015 启动的 Quorum(Geth 分支),2020-08 出售后并入 Hyperledger。JPM 保留自有 fork 持续改造,2024-11 内部链改名 Kinexys Chain,仍是 Besu 月 commit top 5 贡献者。

## Key facts

- Quorum 1.0 于 2017-05 开源,2020-08 由 JPM 出售给 ConsenSys 并入 Besu ^[extracted]
- 内部 Quorum fork 2024-11 更名 Kinexys Chain(前身 Onyx Chain) ^[extracted]
- 共识 IBFT(Istanbul BFT)· 9 个 JPM 内部 validator(5 区域 + 4 backup) ^[extracted]
- 2 秒出块 · 单区块即时 finality · 客户免 gas(JPM 承担) ^[extracted]
- 隐私层 Constellation:ZK 私有交易池 · 链上仅 txHash + 元数据 ^[extracted]
- 支持 EIP-2612 permit + EIP-3009 transferWithAuthorization · 不支持 EIP-7708 ^[extracted]
- JPM 维持自有 fork 是控制策略:开源 Besu + 内部 Quorum fork 并行 ^[inferred]

## Mechanism / How it works

Besu 是 **EVM 完全兼容的 permissioned 链**:Solidity 合约可直接迁移,工具链(Hardhat / Foundry / web3.js)无须改动。共识层用 IBFT 而非 PoW/PoS,4 个以上 validator 即可启动 BFT-style finality。隐私层 Constellation 是基于 ZK 的私有交易子系统:payload 在 validator 之间 P2P 加密直传,链上只留 txHash + 时间戳,做到 "permissioned 链上的可选私有交易"。JPM 在 Kinexys Chain 上的 9 节点拓扑覆盖 5 个区域 + 4 个 backup,是 Besu 在 G-SIB 场景下的典型部署形态。

## Origin & evolution

2015 JPM 启动 Quorum · 基于 Geth fork。2017-05 Quorum 1.0 开源。2018-2020 摩根试图把 Quorum 商业化失败 · 2020-08 出售给 ConsenSys,并入 Hyperledger Besu(Linux Foundation 治理)。JPM 同步保留自有 fork 持续改造 · 2024-11 内部链从 Onyx Chain 改名 Kinexys Chain。Linux Foundation 2025 成立 "Decentralized Trust" 基金会接管 Hyperledger 治理,JPM 仍为核心成员。Citi / HSBC / BNP 等 G-SIB 新建私链时仍把 Besu 作为默认选项 —— 这是 EVM 兼容性的网络效应。

## Counterpoints

- IBFT 在大型 validator 集合(>20)下 throughput 衰减明显 · permissioned 场景下不是问题但限制扩张
- Constellation off-chain payload 模式被批评 "假隐私真隔离":监管可强制取证
- JPM 自身正在向 [[systems/canton-overview|Canton]] 迁移主战场 → Besu 未来增长依赖其他 G-SIB

## Open questions

- JPM Canton 迁移完成(2027 H1)后 Besu 对内部还有多少战略价值?
- Besu 是否会引入 EIP-7708 等新原语以与 Canton 多方原子化竞争?
- Linux Foundation Decentralized Trust 能否吸引 Citi/HSBC 等新银行成为核心贡献者?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 迁移路径]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 机构对照]]
- [[fintech/multi-megabank-consortium-governance|多巨头银行联盟治理]]
<!-- /wiki-links:managed -->

## Sources


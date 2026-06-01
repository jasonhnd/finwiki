---
source: systems/pectra-upgrade-overview
source_hash: b3c840c28ddb0bf7
lang: zh
status: machine
fidelity: ok
title: "Ethereum Pectra 升级 · 4 EIP 双轨战略总览"
translated_at: 2026-06-01T04:15:40.147Z
---
# Ethereum Pectra 升级 · 4 EIP 双轨战略总览

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]] 阅读，以获得同业 / 对比语境；也可对照 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- 2025-Q2  主网启用 · 首个同时升级执行层（EL）+ 共识层（CL）的案例 ^[extracted]
- EIP-7702  引入 SetCode tx · EOA 可一次性绑定 contract code ^[extracted]
- EIP-7251  validator 余额上限 32→2048 ETH（64×）· 对小额无影响 ^[extracted]
- EIP-7691  blob target 3→6 · max 6→9 · L2  calldata 成本 -50% ^[extracted]
- EIP-2537  BLS12-381  预编译 · AVS BLS 验证成本 -50% ^[extracted]

## 机制 / 工作方式

Pectra 同时改造执行层和共识层。**EIP-7702** 使 9000 万 存量 EOA 在不改变地址的情况下获得 batch / gasless / session key —— 这是不同于 ERC-4337  的存量改造路径。**EIP-7251** 使大型 staking 运营商（Lido / Coinbase Cloud / Binance）可以将 1000  个 validator 合并为 16  个，降低 P2P 网络压力 + 运营成本，同时加速 validator 退出队列；但 slashing 单点故障风险也会集中。**EIP-7691** 将 Dencun 引入的 blob 容量倍增，对 Base / Arbitrum / Optimism 用户的 gas 产生直接正面影响。**EIP-2537** 增加 BLS 签名 / 聚合的预编译，大幅降低 SNARK 验证 + BLS 聚合签名的链上成本 —— 对 ZK rollup + EigenLayer AVS + 跨链 light client 产生直接正面影响。

## 起源与演进

The Merge（2022-09）→ Shapella（2023-04  withdraw 解除）→ Dencun（2024-03  EIP-4844  blob）→ Pectra（2025-Q2）。2023-2024  EIP-7702 / 7251 / 7691 / 2537  分别在 EthMagicians 完成 ACD（All Core Devs）讨论 · 2024-Q4  最终确定 Pectra bundle。2025-Q2  主网启用后 · Base / Arbitrum / Optimism 在数周内 gas 显著下降 · Lido 和 Coinbase Cloud 开始 validator 合并 · [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / MetaMask 集成 EIP-7702  并提供存量 EOA 升级 UX。下一次大型升级 Fusaka（2026-Q4  计划）预计将以 PeerDAS + Verkle Trees 为焦点，进一步扩展。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 機関 staking 強化]]
- [[systems/pectra-eip-7691-blob-l2-impact|EIP-7691 blob 倍増の L2 影響]]
- [[systems/erc-4337-overview|ERC-4337 AA]]
- [[systems/erc-7702-overview|ERC-7702 EOA→SCW]]
<!-- /wiki-links:managed -->

## 来源

- Ethereum Foundation Pectra spec
- EIP-7251 — https://eips.ethereum.org/EIPS/eip-7251
- EIP-7691 — https://eips.ethereum.org/EIPS/eip-7691
- EIP-7702 — https://eips.ethereum.org/EIPS/eip-7702

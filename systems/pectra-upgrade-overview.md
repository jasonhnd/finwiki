---
title: Ethereum Pectra 升级 · 四 EIP 双轨战略总览
aliases: [pectra-upgrade-overview, pectra, ethereum-pectra]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, ethereum, upgrade, pectra, eip-7702, eip-7251, eip-7691, eip-2537]
sources: []
status: candidate
---

# Ethereum Pectra 升级 · 四 EIP 双轨战略总览


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-overview|ERC-7702 概览 · EOA 临时获得 SCW 能力的 Pectra 升级]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2025-Q2 主网激活 · 首次同时升级执行层(EL)+ 共识层(CL) ^[extracted]
- EIP-7702 引入 SetCode tx · EOA 一次性绑合约代码 ^[extracted]
- EIP-7251 验证人余额上限 32→2048 ETH(64×)· 不影响小户 ^[extracted]
- EIP-7691 blob target 3→6 · max 6→9 · L2 calldata 成本 -50% ^[extracted]
- EIP-2537 BLS12-381 预编译 · AVS BLS 验证成本 -50% ^[extracted]
- "L1 厚化 + L2 扩容" 双轨 · 不是单纯 L2-only ^[inferred]

## Mechanism / How it works

Pectra 同时改造执行层与共识层。**EIP-7702** 让 9000 万存量 EOA 无需换地址即可获得 batch / gasless / session key —— 是 ERC-4337 之外的存量改造路径。**EIP-7251** 让大型质押方(Lido / Coinbase Cloud / Binance)把 1000 个验证人合并为 16 个,减少 P2P 网络压力 + 运维成本,同时验证人退出排队加快,但 slashing 单点风险也更集中。**EIP-7691** 把 Dencun 引入的 blob 容量翻倍,直接利好 Base / Arbitrum / Optimism 用户 gas。**EIP-2537** 加入 BLS 签名/聚合预编译,大幅降低 SNARK 验证与 BLS 聚合签名的链上成本 —— 直接利好 ZK rollup + EigenLayer AVS + 跨链 light client。

## Origin & evolution

The Merge(2022-09)→ Shapella(2023-04 解锁 withdraw)→ Dencun(2024-03 EIP-4844 blob)→ Pectra(2025-Q2)。2023-2024 EIP-7702 / 7251 / 7691 / 2537 分别在 EthMagicians 完成 ACD(All Core Devs)讨论 · 2024-Q4 最终敲定 Pectra bundle。2025-Q2 主网激活后 Base / Arbitrum / Optimism 在数周内见 gas 显著下降 · Lido 与 Coinbase Cloud 启动 validator 合并 · [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / MetaMask 集成 EIP-7702 提供存量 EOA 升级 UX。下一次大升级 Fusaka(2026-Q4 计划)预计聚焦 PeerDAS + Verkle Trees 进一步扩容。

## Counterpoints

- EIP-7251 让 "家庭 staker" 相对受挤压 · 中心化加剧
- EIP-7702 增加 wallet 复杂度 · 也带来 phishing 与 session key 滥用新攻击面
- "L1 厚化 + L2 扩容" 双轨在长期可能资本两端互相蚕食
- Pectra 不影响 EVM 非兼容链(Tempo / Arc / Solana / Canton)· 限制 Ethereum 标准辐射(对照 [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX 敞口]] 在 Solana 等非 EVM 链的并行演化)

## Open questions

- EIP-7702 在 5 年内是否会基本取代 ERC-4337 成为 AA 主流路径?(对照 [[agent-economy/erc-7715-overview|ERC-7715]] 在两条路径上的拼装)
- EIP-7251 后 Lido / Coinbase 实际合并到多少验证人 · 中心化触发监管担忧的阈值在哪?
- BLS 预编译是否会推动新的 light client 跨链协议爆发?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/pectra-eip-7251-institutional-staking|EIP-7251 机构 staking 强化]]
- [[systems/pectra-eip-7691-blob-l2-impact|EIP-7691 blob 翻倍 L2 影响]]
- [[systems/erc-4337-overview|ERC-4337 AA]]
- [[systems/erc-7702-overview|ERC-7702 EOA→SCW]]
<!-- /wiki-links:managed -->

## Sources

- Ethereum Foundation Pectra spec

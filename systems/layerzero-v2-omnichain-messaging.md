---
title: LayerZero v2 · DVN 可配置的全链消息协议
aliases: [layerzero-v2-omnichain-messaging, layerzero, layerzero-dvn, stargate]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, cross-chain, layerzero, dvn, omnichain, stargate]
sources: []
status: candidate
---

# LayerZero v2 · DVN 可配置的全链消息协议


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 100+ 链覆盖(EVM + Aptos + Solana + Tron + Cosmos 等),数量最广 ^[extracted]
- DVN 模型:应用自选验证者集合 + N-of-M 阈值 · 安全栈可换 ^[extracted]
- Stargate 月均 USDT/USDC 跨链流量 $10B+ ^[extracted]
- 集成名单包括 Tapioca / Radiant / Cake DeFi 等 DeFi 长尾 ^[extracted]
- 治理由 LayerZero Labs 私有 · 不去中心化(与 Chainlink 对照) ^[extracted]
- 不参与机构联盟链场景 ^[inferred]

## Mechanism / How it works

每条链上部署一个 immutable **Endpoint contract** 处理 send / receive。源链消息发出后由应用预先指定的 **DVN 组合** 验证 —— 比如 "Polyhedra(zk) + Google Cloud(主流签名) + Animoca(权益签名)三选二" 形成 N-of-M 多签 quorum。**Executor** 在目标链 deliver 并支付目标链 gas。应用层可自由组合 DVN,因此 LayerZero 既能服务低风险场景(单 DVN 即可),又能服务高价值场景(zk + 多重签名 + 经济激励 quorum)。Stargate 在协议之上加 liquidity pool + token model · 形成 USDC/USDT 跨链 retail 主导地位。

## Origin & evolution

2021 LayerZero v1 上线 · 早期被批评 "默认 oracle + relayer 双签可串通"。2024 v2 推出 DVN 模型 · 把安全决策权交给应用 · 同时引入 Lightweight Verifier Chain。2025-2026 链覆盖突破 100 · 与 Polyhedra / Google Cloud 等 DVN provider 形成生态。Stargate 在 v2 时代仍是 USDT/USDC retail 跨链 dominant pool · 月均 $10B+。LayerZero Labs 仍是私有公司治理 → 与 Chainlink 去中心化网络形成路径分化:LayerZero 抢规模 + 灵活性 · Chainlink 抢机构信任 + 统一保险。

## Counterpoints

- DVN 可配置 = 安全责任转嫁给应用 · 长尾应用容易选错配置导致漏洞
- "100+ 链" 中长尾链流量极低 · 实际有效市场可能 < 20 条
- LayerZero Labs 私有治理是机构客户(银行 / DTCC)拒绝的关键原因
- Wormhole 在 Solana 生态仍有竞争 · 不是单极结构

## Open questions

- DVN 可配置模型在 5 年内是否会被 Chainlink 统一保险模型 outperform(机构市场)?
- Stargate 的 retail dominance 能否抵御 Circle CCTP V2(USDC 专用)的逐步蚕食?
- LayerZero 是否会去中心化治理以拓展机构市场?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 机构对照]]
- [[systems/cross-chain-four-poles-overview|跨链 4 极框架(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 机构对照]]
<!-- /wiki-links:managed -->

## Sources


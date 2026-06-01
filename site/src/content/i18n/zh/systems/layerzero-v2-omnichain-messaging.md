---
source: systems/layerzero-v2-omnichain-messaging
source_hash: 7d7818745cbcaeb5
lang: zh
status: machine
fidelity: ok
title: "LayerZero v2 · DVN 可配置的全链消息传递协议"
translated_at: 2026-06-01T04:15:40.098Z
---
# LayerZero v2 · DVN 可配置的全链消息传递协议

## Wiki 路径

本条目位于 [[systems/INDEX|systems index]] 下。请与 [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] 对照阅读，以获得同类 / 对比背景；更广泛的系统 / 监管边界请参阅 [[fintech/INDEX|fintech index]]。

## 关键事实

- 覆盖 100+ 条链（EVM + Aptos + Solana + Tron + Cosmos 等），覆盖范围最广 ^[extracted]
- DVN 模型：应用自选验证者集合 + N-of-M 阈值 · 可替换安全栈 ^[extracted]
- Stargate 月均 USDT/USDC 跨链流量 $10B+ ^[extracted]
- 集成对象包括 Tapioca / Radiant / Cake DeFi 等 DeFi 长尾 ^[extracted]
- 治理由 LayerZero Labs 私有主导 · 未去中心化（与 Chainlink 形成对照）^[extracted]

## 机制 / 工作方式

在各链上部署 immutable 的 **Endpoint contract**，处理 send / receive。source chain 发出的消息由应用预先指定的 **DVN 组合** 进行验证 —— 例如选择“Polyhedra（zk）+ Google Cloud（主流签名）+ Animoca（权益签名）中的 3 个取 2 个”，形成 N-of-M 多签 quorum。**Executor** 在目标链上进行 deliver，并支付目标链 gas。由于应用层可以自由组合 DVN，LayerZero 既能支持低风险场景（单一 DVN 即可），也能支持高价值场景（zk + 多签 + 经济激励 quorum）。Stargate 在协议之上加入 liquidity pool + token model，形成 USDC/USDT 跨链的 retail 主导地位（与 [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] 中的多桥流量分布形成对照）。

## 起源与演进

2021 年LayerZero v1 上线 · 初期因“默认 oracle + relayer 双签可能串通”而受到批评。2024 年v2 发布 DVN 模型 · 将安全判断交给应用 · 同时引入 Lightweight Verifier Chain。2025-2026 年链覆盖数量突破 100  · 与 Polyhedra / Google Cloud 等 DVN provider 形成生态。Stargate 在 v2 时代仍是 USDT/USDC retail 跨链的 dominant pool · 月均 $10B+。LayerZero Labs 仍是私有企业治理 → 与 Chainlink 的去中心化网络路线分化：LayerZero 以规模 + 灵活性竞争 · Chainlink 以机构信任 + 统一保险竞争。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関対照]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極フレーム(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
<!-- /wiki-links:managed -->

## 来源

- LayerZero V2 docs — https://docs.layerzero.network/v2

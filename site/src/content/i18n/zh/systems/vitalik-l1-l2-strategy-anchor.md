---
source: systems/vitalik-l1-l2-strategy-anchor
source_hash: a187570a0a9bc925
lang: zh
status: machine
fidelity: ok
title: "L1/L2  双轨战略的演进 anchor · Ethereum 路线图与独立 L1  经济激励的攻防"
translated_at: 2026-06-01T04:15:40.148Z
---
# L1/L2  双轨战略的演进 anchor · Ethereum 路线图与独立 L1  经济激励的攻防

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/erc-7702-overview|ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード]] 阅读，以获得同业 / 对比语境；也可对照 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- 2020-10  提出 rollup-centric roadmap = 形成 L2  优先战略 ^[extracted]
- 2024-03  Dencun（EIP-4844  blob）→ L2  成本下降约 100x ^[extracted]
- 2025-05  Pectra（EIP-7702  smart account）→ 可实现不需要 ETH gas 的 stablecoin 转账 ^[extracted]
- 2026  预计 Fusaka（PeerDAS + blob 进一步扩展）→ L2  成本 sub-cent ^[extracted]
- Ethereum + 全部 L2  占全球 stablecoin 流通的约 60%+（$160B 中约 $120B L1  + $40B L2）^[extracted]
- Vitalik 的公开立场 = Ethereum 是“中立 base layer”，对所有 stablecoin 保持中立 ^[extracted]

## 机制 / 工作方式

L1/L2  双轨战略的“反对手”效果：**当 L2  成本达到 sub-cent + UX 接近 Web2  时**（Pectra 后的 stablecoin 转账不需要 ETH gas），独立 L1（Arc / Tempo / Plasma）的经济差异化窗口会被压缩。独立 L1  原本的卖点是“低成本 + 高速 + 可监管控制” —— 但当 L2  成本低于独立 L1  的运营毛利时，独立 L1  必须依赖**非经济性护城河**（监管牌照 / 大客户绑定 / 链上 KYC）才能维持。

应用诊断：每次 Ethereum 升级发布 → 检验独立 L1  的“差异化窗口宽度”。Dencun 后 Optimism / Base / Arbitrum 重新夺回 stablecoin 流通（见 [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]）；Pectra 后 Tempo / Arc 的“独立 L1”经济模型承压；Fusaka 后可能迫使独立 L1  转向“L2 / Validium / appchain”。

## 起源与演进

源流是 2017-2018  Plasma / state channel 等“L2  早期方案”遇到瓶颈后，Vitalik 在 2020 年 重新提出 rollup-centric。2022  The Merge（PoS）解决能源 + 安全模型，2024  Dencun 解决 L2  成本，2025  Pectra 解决 UX（account abstraction），2026  Fusaka 进一步压缩成本。5  年整体演进中内含的逻辑：**Ethereum 不在吞吐量上与独立 L1  直接竞争，而是将 L2  生态作为“独立 L1  killer”**。Vitalik 个人没有 CEO / 经营责任，纯粹以研究 / 治理身份发言 → 其立场可信度高于 Allaire / Paolo / Brian 等 CEO 型发言人。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/l1-progressive-decentralization-three-phase|L1 漸進分散化 3 段階]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 ネイティブ資産と ERC20 イベント互換]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BUIDL]]
<!-- /wiki-links:managed -->

## 来源

- Vitalik Buterin「A rollup-centric ethereum roadmap」（2020-10 · Ethereum Magicians）— https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698
- Vitalik Buterin「An Incomplete Guide to Rollups」— https://vitalik.eth.limo/general/2021/01/05/rollup.html
- EIP-4844: Shard Blob Transactions（Dencun · L2  成本下降约 100x）— https://eips.ethereum.org/EIPS/eip-4844
- EIP-7702: Set Code for EOAs（Pectra · 不需要 ETH gas 的 stablecoin 转账）— https://eips.ethereum.org/EIPS/eip-7702
- Ethereum.org 路线图（rollup-centric / PeerDAS / account abstraction）— https://ethereum.org/en/roadmap/

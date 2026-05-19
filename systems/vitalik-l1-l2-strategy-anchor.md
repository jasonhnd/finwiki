---
title: L1/L2 双轨战略演化 anchor · Ethereum 路线图与独立 L1 经济激励博弈
aliases: [vitalik-l1-l2-strategy, ethereum-l1-l2-evolution, rollup-centric-to-dual-track]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, ethereum, l2, rollup, pectra, fusaka, stablecoin, vitalik]
sources: []
status: candidate
---

# L1/L2 双轨战略演化 anchor · Ethereum 路线图与独立 L1 经济激励博弈

> [!info] TL;DR
> 2020 Vitalik 提出 "rollup-centric roadmap"(L2 优先)→ 2025 双轨修正(L1 增强 + L2 扩容)是 stablecoin / RWA 选链决策的**结构性 anchor**:每一次 Ethereum 升级(Dencun → Pectra → Fusaka)都直接降低 L2 stablecoin 转账成本,削弱"独立 L1"(Arc / Tempo / Plasma)的经济激励。

## Key facts

- 2020-10 rollup-centric roadmap 提出 = L2 优先战略形成 ^[extracted]
- 2024-03 Dencun(EIP-4844 blob)→ L2 成本下降 ~100x ^[extracted]
- 2025-05 Pectra(EIP-7702 smart account)→ stablecoin 无需 ETH gas 转账成为可能 ^[extracted]
- 2026 估 Fusaka(PeerDAS + blob 进一步扩容)→ L2 成本 sub-cent ^[extracted]
- Ethereum + 全 L2 占全球 stablecoin 流通 ~60%+($160B 中 ~$120B L1 + ~$40B L2) ^[extracted]
- Vitalik 公开立场 = Ethereum 是"中立 base layer",对所有 stablecoin 中立 ^[extracted]

## Mechanism / How it works

L1/L2 双轨战略的"反对手"效应:**当 L2 成本降到 sub-cent + UX 接近 Web2**(Pectra 后 stablecoin 转账无需 ETH gas),独立 L1(Arc / Tempo / Plasma)的经济差异化窗口被压缩。独立 L1 的卖点本来是"低成本 + 快速 + 合规可控"——但 L2 成本一旦低于独立 L1 的运营毛利,独立 L1 必须靠**非经济护城河**(监管牌照 / 大客户绑定 / 链上 KYC)才能撑住。

应用诊断:每次 Ethereum 升级 announcement → 核查独立 L1 的"差异化窗口宽度"。Dencun 后 Optimism / Base / Arbitrum 抢回 stablecoin 流通;Pectra 后 Tempo / Arc 的"独立 L1"经济模型受压;Fusaka 后则可能强迫独立 L1 转向"L2 / Validium / 应用链"。

## Origin & evolution

源头是 2017-2018 Plasma / state channel 等"L2 早期方案"碰壁后,Vitalik 2020 重新提出 rollup-centric。2022 The Merge(PoS)解决能耗 + 安全模型,2024 Dencun 解决 L2 成本,2025 Pectra 解决 UX(account abstraction),2026 Fusaka 进一步压缩成本。整条 5 年演化的隐含逻辑:**Ethereum 不直接与独立 L1 竞争 throughput,而是让 L2 生态成为"独立 L1 杀手"**。Vitalik 个人无 CEO / 经营责任,纯研究 / 治理身份 → 立场可信度高于 Allaire / Paolo / Brian 等 CEO 系发言人。

## Counterpoints

- "L2 优先"假设 ZK proof / data availability 长期可扩 — 若 PeerDAS / DA layer 出现根本性技术阻塞,独立 L1 重新获利
- Vitalik 个人影响力 ≠ Ethereum Foundation 全部决策 — 后 Vitalik 时代路线可能漂移
- 独立 L1 可绕过 L1/L2 经济竞争,改打**合规护城河**(Arc 是这条路线的极致版),Vitalik 路线对此无直接影响

## Open questions

- Fusaka 时间表(2026 / 2027 / 更晚)直接决定独立 L1 经济模型博弈节奏
- ZK rollup 成本曲线下降速度是否会让"Validium / appchain"成为新的中间层?
- 后 Vitalik(若 5-10 年后退出研究主导)Ethereum 是否仍能保持 "L2 优先" 路线?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/l1-progressive-decentralization-three-phase|L1 渐进去中心化三阶段]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 原生资产与 ERC20 事件兼容]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BUIDL]]
<!-- /wiki-links:managed -->

## Sources


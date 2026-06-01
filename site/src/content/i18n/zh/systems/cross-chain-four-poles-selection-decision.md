---
source: systems/cross-chain-four-poles-selection-decision
source_hash: 83c3da6853864a8b
lang: zh
status: machine
fidelity: ok
title: "跨链选择决策树 · 按主角维度匹配协议"
translated_at: 2026-06-01T04:15:40.153Z
---
# 跨链选择决策树 · 按主角维度匹配协议

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] 阅读以获得同业 / 对比语境，并结合 [[fintech/INDEX|fintech index]] 阅读以理解更广泛的系统 / 监管边界。

## Key facts

- CCTP V2 Hooks(2025.03)可以实现目标链原子回调，替代传统桥 ^[extracted]

## Mechanism / How it works

**选择决策树**:

```
你的主角是谁？
├── 稳定币 L1(Tempo)
│   → CCIP (institutional 必需) + LayerZero (general 备用)
│
├── EVM L2(Base)
│   → CCIP (Circle bridge) + LayerZero (long-tail) + CCTP V2 (USDC fast)
│
├── Solana / Move 生态系统
│   → Wormhole (TVL + 历史)
│
├── long-tail L2 / appchain
│   → Hyperlane (permissionless · 不等待入列)
│
└── 纯 USDC 筹措
    → CCTP V2 (1-2 min · 无桥风险 · burn-mint)
```

**判断逻辑**:
- 客户是否包含 institutional(银行 / 卡组织 / 监管) → CCIP 是必需层
- 链是否在 LayerZero / CCIP 列表中 → 若不在，Hyperlane 是唯一可控选择
- 是否为纯 USDC → CCTP V2 比通用桥更快(1-2 min)且无锁仓风险
- 是否需要“开发者 1 点击连接” → Hyperlane permissionless，客户端侧选择 ISM

## Origin & evolution

2022-2023  跨链选择 = “TVL 最大 = 选择 Wormhole”。2024  institutional 进入后 = CCIP 借助 Chainlink oracle 品牌 + RMN 双层验证，成为银行 / DTCC / SWIFT 的实际选择。2025  收敛 = 多极共存 + 任务专业化；主角会同时使用 2-3  条桥(CCIP institutional · LayerZero general · CCTP V2 USDC)。完整对照矩阵见 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極 · 概観]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[fintech/ai-payment-two-tracks|AI 支払い 2 トラック]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン Token 戦略 3 態]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Smart NAV 公告(2024.05)· SWIFT messaging on Chainlink 测试(2025)
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

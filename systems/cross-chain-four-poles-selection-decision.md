---
title: 跨链选型决策树 · 按主角维度匹配协议
aliases: [cross chain four poles selection decision, bridge protocol selection by protagonist, cross-chain decision tree]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, decision-framework, layerzero, ccip, hyperlane, cctp]
sources: []
status: candidate
---

# 跨链选型决策树 · 按主角维度匹配协议


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Tempo 选 CCIP 逻辑 = Visa / SC / Stripe 客户需监管可解释 → 不能用 Wormhole 多签 ^[inferred]
- Base 多极组合 = CCIP(Circle bridge) + LayerZero(long-tail) + CCTP V2(USDC fast path) ^[inferred]
- Hyperlane 类比 = Cloudflare Workers vs AWS Lambda · 长尾对冲选项 ^[inferred]
- CCTP V2 Hooks(2025.03)让目标链 atomic callback 成为可能 · 替代传统 bridge ^[extracted]
- LayerZero DVN 配置不当 → 安全降级风险(用户责任) ^[inferred]

## Mechanism / How it works

**选型决策树**:

```
你的主角是 ?
├── 稳定币 L1(Tempo)
│   → CCIP (institutional 必选) + LayerZero (general 兜底)
│
├── EVM L2(Base)
│   → CCIP (Circle bridge) + LayerZero (long-tail) + CCTP V2 (USDC fast)
│
├── Solana / Move 生态
│   → Wormhole (TVL + 历史)
│
├── 长尾 L2 / appchain
│   → Hyperlane (permissionless · 不用等被列入)
│
└── 纯 USDC 调度
    → CCTP V2 (1-2 min · 无桥风险 · burn-mint)
```

**判断逻辑**:
- 客户是否含 institutional(银行 / 卡组织 / 监管)→ CCIP 是必选层
- 链是否在 LayerZero / CCIP 名单 → 否则 Hyperlane 是唯一可控选项
- 是否纯 USDC → CCTP V2 比通用桥都快(1-2 min)且无锁仓风险
- 是否需要"开发者一键接入" → Hyperlane permissionless · 客户端选 ISM

## Origin & evolution

2022-2023 跨链选型 = "选 TVL 最大 = Wormhole"。2024 institutional 入场后 = CCIP 因 Chainlink oracle 品牌 + RMN 双层验证成为银行 / DTCC / SWIFT 实际选择。2025 收敛 = 多极并存 + 任务专精化 · 主角同时用 2-3 个桥(CCIP institutional · LayerZero general · CCTP V2 USDC)。完整对照矩阵见 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极对比矩阵]]。

## Counterpoints

主张"单一桥论":多极意味着安全模型多个 attack surface · 实际上选 1 个高质量桥(CCIP)更安全。LayerZero 反对者主张 DVN 灵活 = 用户责任 = 多数用户配置不当 = 实际安全 < Wormhole 19 Guardian 固定多签。某些 institutional 客户实际是被 Chainlink 销售拉过去 · 不是技术比较结果。

## Open questions

Base 多极组合的实际比例(CCIP 多少 % · LayerZero 多少 % · CCTP V2 多少 %)?Tempo / Arc 是否会自建专用桥替代 CCIP?Hyperlane permissionless 安全模型在大规模 stake 后能否抗 51%?CCTP V2 Hooks 是否让"USDC 跨链 = 1 个协议"成为新默认?(参见 [[fintech/usd-stablecoin-interchange|USD 稳定币跨链互换]] 与 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX 跨链桥]] 的实际份额观察)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|跨链四极 · 概览]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional 默认机制]]
- [[fintech/ai-payment-two-tracks|AI 支付双轨]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币公链 Token 策略三态]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Smart NAV 公告(2024.05)· SWIFT messaging on Chainlink 测试(2025)

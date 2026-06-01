---
source: systems/cctp-v2-overview
source_hash: a8f29404429d4075
lang: zh
status: machine
fidelity: ok
title: "CCTP V2 概览 · Circle USDC 跨链 burn-and-mint"
translated_at: 2026-06-01T04:15:40.135Z
---

# CCTP V2 概览 · Circle USDC 跨链 burn-and-mint

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/cctp-v2-technical-spec|CCTP V2 技術仕様 · Fast Transfer · Hooks · Attestation Service]] 阅读同类 / 对比背景，并结合 [[fintech/INDEX|fintech index]] 理解更广的系统 / 监管边界。

## Key facts

- 2024-11  V2 上线（V1 在 2023-01 开始）^[extracted]
- V2 新增 Fast Transfer（< 1 秒延迟，相比 V1 的约 13 秒）^[extracted]
- V2 新增 Hooks（可编程回调，自动调用目标链合约）^[extracted]
- 支持 18+ 条链：Ethereum + Solana + Base + Arbitrum + Avalanche + Optimism + Noble + Polygon + Arc 等 ^[extracted]
- 计划在 2026 内以 V1 完全替换（概率 80%）^[extracted]

## Mechanism / How it works

CCTP 将 USDC 变成“1 个 USDC，多条链”——在所有公链上流通的 USDC 都是由 Circle 直接 mint 的 native asset，不存在 wrapped 版本（与 [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] 的多桥拓扑相对）。3 步流程：

```
源链 (USDC burn)
    ↓
Circle Attestation Service
  (off-chain signer 验证 + 签名)
    ↓
目标链 (USDC mint to receiver)
```

V2  与 V1 的主要差异：

1. **Fast Transfer**（亚秒级）：V1 等待源链 finality（约 13 秒）；V2 通过 Circle 的风险承保将延迟压缩到 < 1 秒
2. **Hooks**：跨链到达后自动触发目标链合约调用，支持 1-tx 中的跨链 swap / 跨链贷款
3. **更多链支持**：V2 上线后 1 年内扩展到 18+ 条链

**中心化的成本**：Circle Attestation Service 是单点信任故障源 —— Circle 可以拒绝签名（Tornado Cash 相关地址已有实例）。这是 GENIUS §501  Denylist 在协议层执行的通道（与 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ deposit/withdrawal 経路]] 上同一 Circle 节点相对）。

## Origin & evolution

V1 于 2023-01 上线，初期支持 Ethereum + Avalanche，并逐步扩展到 Solana 等。2024-11  的 V2 升级带来了 Fast Transfer 和 Hooks。Circle 自 V2 以来明显加速新增链连接 —— Arc 链（Circle 自有）在 2026 上线时原生集成 V2 ，USDC 成为 Arc 链的 gas。

de-wrapped 化的历史背景：V1 以前，各链上的 USDC 是通过 lock-and-mint bridge（LayerZero / Wormhole / Stargate）生成的衍生品，存在桥被攻击风险（Wormhole $325M、Ronin $625M、Nomad $190M 的历史教训）。CCTP V1 是 Circle 重新收回 USDC 跨链主权的重要动作。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-technical-spec|CCTP V2 Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/canton-overview|Canton(プライベートチェーン対照)]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

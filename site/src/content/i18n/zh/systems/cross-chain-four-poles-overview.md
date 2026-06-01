---
source: systems/cross-chain-four-poles-overview
source_hash: 5386c9f95dbcba3f
lang: zh
status: machine
fidelity: ok
title: "跨链 4  极架构 · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2"
translated_at: 2026-06-01T04:15:40.145Z
---
# 跨链 4  极架构 · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー · 主役次元でプロトコルをマッチング]] 阅读，以获得同业 / 对比语境；也可对照 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- LayerZero 2025  累计跨链 messages 5B+ · 覆盖 100+ chains ^[extracted]
- CCIP DTCC 试点 2024.05  完成 · 2025-2026  production rollout · 客户包括 SWIFT / J.P. Morgan Kinexys ^[extracted]
- Wormhole TVL 最大 · 2022  发生 $320M 盗窃 · 2024 ZK Verifier 上线后安全模型升级 ^[extracted]
- Hyperlane 2024.07  主网 launch · Eclipse / Celestia 主推 · permissionless ISM 模块化 ^[extracted]
- CCTP V2  Hooks 2025.03  launch · Fast Transfer 1-2 min（传统 10-20 min）· USDC 调拨的第一选择 ^[extracted]

## 机制 / 工作方式

**5  极差异化定位**:

| 维度 | LayerZero | CCIP | Wormhole | Hyperlane | CCTP V2 |
|---|---|---|---|---|---|
| 架构 | DVN 多签验证 · 用户可配置 | RMN + Oracle 网络 | Guardian 19  多签 + ZK | Permissionless ISM 模块化 | Circle 链下 attestation |
| 链覆盖 | 100+ | ~20（高质量） | ~30（Solana 强） | 任意 EVM 自助接入 | 12 chains |
| 安全模型 | 客户端可变更 DVN | 高 institutional grade | Guardian 委员会 + ZK | ISM 客户选择 | Circle 中心化 |
| 代表客户 | Stargate · Pendle · LiFi | DTCC / SWIFT / Kinexys | Solana · Jito · Pyth | Eclipse · Celestia · long-tail L2 | Coinbase · Circle 原生 USDC |
| 定位 | General purpose default | Institutional / regulated | Solana 中心 + throughput | Permissionless / open | 仅 USDC · O(1) burn-mint |

CCIP 双层验证（transaction + risk）是 institutional 接受度的关键 · LayerZero DVN 是 general default · Wormhole TVL 大但源于 Solana 生态集中 · Hyperlane 不让 long-tail 链等待上架。完整对照见 [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対比マトリクス]]；CEX deposit/withdrawal 路径上的实际分布可对照 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|CEX クロスチェーンブリッジ]]。

## 起源与演进

2021-2022  跨链 = Wormhole / Multichain / Synapse 多方竞争。2022  一系列 bridge hack（$600M Ronin / $325M Wormhole / $570M BSC）使安全模型成为核心。2023-2024  收敛 = LayerZero general grade · Chainlink CCIP 依托 oracle 品牌切入 institutional · Wormhole 通过 ZK 升级守住 Solana 阵地。2025  Hyperlane 以 permissionless 切入 long-tail · CCTP V2  使 USDC 调拨成为“atomic cross-chain primitive”（见 [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]]）。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン 4 極 · 選定意思決定ツリー]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional デフォルトメカニズム]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT consensus Rust 実装]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## 来源

- LayerZero / Chainlink / Wormhole / Hyperlane / Circle 官方文档 + 客户披露（DTCC / SWIFT / Kinexys）
- LayerZero V2 docs — https://docs.layerzero.network/v2
- Chainlink CCIP docs — https://docs.chain.link/ccip
- Hyperlane docs — https://docs.hyperlane.xyz/
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started

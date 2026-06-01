---
source: systems/polkadot-xcm-parachain-messaging
source_hash: d14dff3d9273d1e1
lang: zh
status: machine
fidelity: ok
title: "Polkadot XCM · parachain messaging v3-v4"
translated_at: 2026-06-01T04:15:40.155Z
---
# Polkadot XCM · parachain messaging v3-v4



## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/ibc-cosmos-cross-chain|IBC · Cosmos]] 阅读以理解共享安全多链互操作中的最接近同类，结合 [[systems/cross-chain-four-poles-overview|cross-chain four poles]] 阅读更广泛的互操作格局，并结合 [[systems/cross-chain-five-pole-comparison-matrix|five-pole comparison matrix]] 进行并列对照。

## Key facts

- **XCM (Cross-Consensus Messaging)** 是 Polkadot 用于 parachain 与 relay chain 通信的消息格式
- **共享安全模型**:Polkadot relay chain 验证所有 parachain 状态转换，不需要每条 parachain 自行共识
- **XCM v3** (2023) 引入 bridge / 跨生态消息；**XCM v4** (2024) 改进 asset / location 寻址和 pallet primitives
- **Asset Hub**(原 Statemine / Statemint)是用于规范资产发行的 system parachain，包括 USDT / USDC
- **JAM (Join-Accumulate Machine)** 于 2024 公布，作为超越 relay-chain-as-validator 模型的长期演进；2025-2026

 期间出现机构 / 清算试点

## Shared-security architecture

```
                  Polkadot relay chain
                  (validator set, finality)
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   Parachain A      Parachain B       Asset Hub
   (custom logic)   (DeFi / NFT)     (system parachain)
        │                 │                 │
        └──── XCM ────────┼──── XCM ────────┘
                          │
                  HRMP / VMP / DMP
                  (transport channels)
```

- **Relay chain** 运行 validator set，并为**所有** parachain 完成区块 finalization
- **Parachains** 运行特定领域逻辑，但继承 relay-chain consensus
- **Asset Hub** 是由 Polkadot 控制的 system parachain，用于规范 native-asset 发行(不需要 slot auction)
- **XCM** 是消息格式；HRMP / VMP / DMP 是传输通道(parachain-to-parachain、parachain-to-relay、relay-to-parachain)

与 [[systems/ibc-cosmos-cross-chain|IBC / Cosmos]] 模型相比:

| 维度 | Polkadot XCM | IBC / Cosmos |
|---|---|---|
| 共识 | 共享(relay chain finalizes parachains) | 主权(each Cosmos chain has its own validator set) |
| 跨链信任 | 继承自 relay chain | 源链 light-client verification |
| 接入 | Parachain slot(租赁 / 拍卖) | 启动 Cosmos SDK + 连接 IBC |
| 主权 | Parachains 共享安全但主权有限 | 每条链完全主权 |
| 资产发行 | 通过 Asset Hub 规范发行 | 通过 Noble 或各链规范发行 |

权衡:Polkadot 提供**更强的统一安全性**，但**主权更少**。Cosmos / IBC 提供**最大主权**，但每条链都为自身安全背书([[systems/eigenlayer-overview|EigenLayer]] 试图在 Ethereum 侧弥合这一差距)。

## XCM v3 → v4 evolution

| 版本 | 年份 | 主要新增内容 |
|---|---|---|
| XCM v1 | 2021 | 初始跨 parachain 转账 |
| XCM v2 | 2022 | 基于 reserve 的资产转账，更稳健的错误处理 |
| XCM v3 | 2023 | 跨生态 bridging(Polkadot ↔ Kusama, Polkadot ↔ Ethereum via Snowbridge)、exchange queries、version negotiation |
| XCM v4 | 2024 | 改进 `MultiLocation` → `Location` typing、资产处理和 pallet 集成 |

## Asset Hub and institutional pilots

Asset Hub 充当 Polkadot 的**规范资产登记簿**:

- **USDT 和 USDC** 在 Asset Hub 上原生发行(通过 Circle / Tether 集成 2023-2024)
- **Stablecoins** 通过 XCM teleport / reserve transfer 传播到其他 parachains
- 费用低于 parachain-issued tokens(无 slot auction 开销)

2024-2026 期间，围绕 Polkadot 清算 / 共享安全模型出现机构试点:

- Tokenization platforms 探索用于 permissioned RWA chains 的 parachain slots
- Centrifuge(RWA-focused parachain)用于 tokenized credit
- Hyperbridge 用于 trust-minimized parachain ↔ EVM bridging

关于并行的 institutional-DLT 路线，请与 [[systems/canton-overview|Canton]] 和 [[systems/hyperledger-besu-overview|Besu]] 比较；宏观对比见 [[systems/institutional-dlt-adoption-comparison-2026|institutional DLT adoption]]。

## JAM and the long-term roadmap

**JAM (Join-Accumulate Machine)**——由 Gavin Wood 于 2024 公布——是 Polkadot 的计划中演进方向:

- 将 relay-chain-as-validator 模型泛化为**分布式计算织网**
- Parachains 成为运行在 JAM 之上的**服务**；slot auction 模型不再那么刚性
- 目标是在长期与 Ethereum + L2 stack 和 Cosmos / IBC mesh 竞争
- 2025-2026 状态:早期实现，尚无生产部署

## Related

- [[systems/INDEX]]
- [[systems/ibc-cosmos-cross-chain]]
- [[systems/cross-chain-four-poles-overview]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/canton-overview]]
- [[systems/hyperledger-besu-overview]]
- [[systems/institutional-dlt-adoption-comparison-2026]]
- [[systems/eigenlayer-overview]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/cctp-v2-overview]]
- [[INDEX|FinWiki index]]

## Sources

- wiki.polkadot.network for XCM, parachains, and shared-security documentation.
- github.com/paritytech/xcm-format for XCM v3 / v4 specification.
- github.com/paritytech/polkadot-sdk for relay chain + parachain reference implementation.
- polkadot.network for ecosystem updates and JAM announcements.

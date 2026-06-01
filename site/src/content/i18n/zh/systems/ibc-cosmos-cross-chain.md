---
source: systems/ibc-cosmos-cross-chain
source_hash: 52c41bac10ccc40a
lang: zh
status: machine
fidelity: ok
title: "IBC · Cosmos Inter-Blockchain Communication protocol"
translated_at: 2026-06-01T04:15:40.155Z
---
# IBC · Cosmos Inter-Blockchain Communication protocol

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] 和 [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]] 阅读以获得同业 / 对比语境，结合 [[systems/cctp-v2-overview|CCTP V2]] 理解另一种 trust-minimized 模型，并结合 [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero / CCIP]] 阅读更广泛的互操作性对比。

## Key facts

- **IBC** 是 Cosmos SDK 原生的跨链消息协议；自 2021
 起在 Cosmos Hub 主网上线
- 信任模型:**每条链上的轻客户端验证**——每条链运行另一条链的轻客户端，并在本地验证 header / proof
- Hub-and-spoke 拓扑:Cosmos Hub 充当连接锚点，但 IBC 是直接的链到链协议(不需要中心化 hub)
- **IBC v1** 聚焦 token transfer(ICS-20)；**IBC v2 (Eureka, 2024-2025)** 通过轻量级 light-client adapter 扩展到 Ethereum + 非 Cosmos 链
- 生产部署覆盖 80+ 条链；到 2025-2026

，累计转账量达到数百亿美元级别

## Trust model — both sides run light clients

IBC 的安全论证是:每条链直接验证**另一条链的共识**，而不是验证第三方中介。流程如下:

```
Chain A (source)                          Chain B (destination)
─────────────────                         ─────────────────────
1. App calls IBC: send packet
2. IBC commits packet to state
3. Header + commitment proof gossiped ──► 4. Chain B light client of A
                                              verifies header (Tendermint sigs)
                                          5. Verifies Merkle proof of packet
                                          6. Delivers packet to receiving app
                                          7. Sends ACK / timeout back ──────►
```

信任假设被缩减为:**源链的共识**(例如 Cosmos Hub 的 BFT validator set)。没有第三方 relayer 能伪造消息——relayer 只移动数据；验证在链上完成。

这与以下模型形成鲜明对比:

- [[systems/layerzero-v2-omnichain-messaging|LayerZero]]: 可配置的 Oracle + Relayer 信任拆分
- [[systems/chainlink-ccip-institutional-messaging|CCIP]]: Chainlink DON 委员会
- [[systems/hyperlane-overview|Hyperlane]]: 可插拔 ISM(Interchain Security Module)
- [[systems/cctp-v2-overview|CCTP]]: Circle attestation service(单一签名者)

## IBC v1 vs IBC v2



| 维度 | IBC v1 | IBC v2 (Eureka) |
|---|---|---|
| 已连接链 | Cosmos SDK + 少量 adapter | Cosmos + Ethereum + EVM L2s + 选定非 Cosmos 链 |
| 轻客户端开销 | Tendermint-light-client 原生 | Solidity light-client + 轻量 header |
| Token 标准 | ICS-20 fungible | 相同，并带有更广泛的 cross-VM adapter 合约 |
| 通用消息传递 | 是(ICS-04 channels) | 是，扩展到 EVM 目标应用 |
| 上线时间 | 2021 | 2024-2025 (mainnet expansion) |

IBC v2 的 Eureka release 带来 Ethereum 侧 light-client 合约(验证 Tendermint 签名)，让 Cosmos 链和 Ethereum 能够在没有外部桥委员会的情况下以端到端验证交换消息。

## Comparison vs other interop protocols

| 协议 | 信任模型 | 拓扑 | 生产使用 |
|---|---|---|---|
| **IBC** | 双方各自运行轻客户端 | Mesh(any-to-any) | 80+ 条链，Cosmos 原生默认 |
| **CCIP** ([[systems/chainlink-ccip-institutional-messaging|see entry]]) | Chainlink DON + risk-mgr | 通过 Chainlink network 的 hub-and-spoke | 机构偏好 |
| **LayerZero** ([[systems/layerzero-v2-omnichain-messaging|see entry]]) | Oracle + Relayer 拆分 | 直接 any-to-any | 广泛 EVM 采用 |
| **Hyperlane** ([[systems/hyperlane-overview|see entry]]) | 可插拔 ISM(含 EigenLayer AVS) | Permissionless mesh | 模块化，可定制 ISM |
| **CCTP** ([[systems/cctp-v2-overview|see entry]]) | Circle attestation | 通过 Circle 的 hub | 仅限 USDC，速度快 |

阅读:并列表见 [[systems/cross-chain-five-pole-comparison-matrix|five-pole comparison matrix]]；风险定价见 [[systems/cross-chain-bridge-security-insurance-matrix-2026|bridge security insurance matrix]]。

## IBC channel and packet lifecycle

1. **Connection handshake** — ConnOpenInit, ConnOpenTry, ConnOpenAck, ConnOpenConfirm
2. **Channel handshake** — ChanOpenInit … ChanOpenConfirm(每个 app pair 一个 channel)
3. **Packet send** — application 调用 IBC；packet 被提交
4. **Relayer transport** — off-chain relayer 读取并传播 header + packet
5. **Packet receive** — destination chain 验证并执行 app callback
6. **Acknowledgement / timeout** — ACK 传回；若在窗口内未收到则 timeout

Channels 是 app-level:ICS-20 (fungible token)、ICS-721 (NFT)、Interchain Accounts(ICS-27)、Interchain Queries(ICQ)，以及用于自定义 app 的任意 ICS-04 channels。

## Origin and evolution

IBC 规范始于 2018  的 Cosmos / Tendermint 社区；主网在 2021 年 3 月随 Cosmos Hub 启用 IBC 而上线。该协议在 2022-2023  期间成熟，广泛采用 token transfer 和 Interchain Accounts。2024-2025  **Eureka** release 标志着战略转向:IBC 不再只是 Cosmos-only；它通过将 light-client adapter 扩展到 Ethereum + EVM L2s，作为**通用互操作标准**竞争。

Cosmos 生态具有值得关注的金融相关性:Noble(Cosmos 的 USDC 发行方)、dYdX(此前在 Ethereum，现在是 Cosmos appchain)和 Celestia 等链都处于 IBC mesh 中。Celestia 角度请与 [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer comparison]] 一并阅读。

## Related

- [[systems/INDEX]]
- [[systems/cross-chain-four-poles-overview]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026]]
- [[systems/cctp-v2-overview]]
- [[systems/layerzero-v2-omnichain-messaging]]
- [[systems/chainlink-ccip-institutional-messaging]]
- [[systems/hyperlane-overview]]
- [[systems/hyperlane-vs-layerzero-ccip]]
- [[systems/polkadot-xcm-parachain-messaging]]
- [[systems/data-availability-celestia-eigenda-blob-comparison]]
- [[INDEX|FinWiki index]]

## Sources

- ibc.cosmos.network protocol specification and tutorials.
- github.com/cosmos/ibc and github.com/cosmos/ibc-go for spec + reference implementation.
- docs.cosmos.network for SDK / chain integration guides.
- Eureka release notes and IBC v2 adapter documentation.

---
source: systems/sui-aptos-move-l1-ecosystem
source_hash: 5698db924026e941
lang: zh
status: machine
fidelity: ok
title: "Sui 和 Aptos · Move L1 生态系统"
translated_at: 2026-06-01T04:15:40.122Z
---
# Sui 和 Aptos · Move L1 生态系统

## Wiki 路线

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs chain-BFT]] 阅读共识框架，结合 [[systems/bft-validator-economy-overview|BFT validator economics]] 阅读代币 / 质押动态，并结合 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT]] 阅读实现语言背景。

## 关键事实

- **Sui** 和 **Aptos** 是后 Diem（前 Libra）L1 链，二者都源自 2019-2022  由 Meta 主导并引入 **Move programming language** 的 Diem / Novi 项目
- **Sui**（Mysten Labs 创始人）于 2023 年 5 月启动主网；强调 **object-centric model** + **Narwhal / Bullshark DAG-BFT consensus**
- **Aptos**（Aptos Labs 创始人）于 2022 年 10 月启动主网；强调 **AptosBFT（HotStuff 派生）chain-BFT** + **BlockSTM parallel execution**
- **Move language** 特性：面向资源（资产是线性类型 —— 不能被复制 / 丢弃）、便于形式化验证、基于 capability 的访问
- **金融用例**：Sui-native USDC（支持 CCTP V2 ）、Aptos-native USDC、RWA 实验、agent-payment 基础设施

## Move language 起源与设计

| 属性 | Move | EVM Solidity 对比 |
|---|---|---|
| 资产模型 | Resources —— 线性类型；资产是一等的不可复制值 | ERC-20 / NFT 余额表 |
| 存储 | 按账户 / 按对象；显式所有权 | 合约存储槽 |
| 形式化验证 | 集成 Move Prover | 无（需要外部工具） |
| 重入 | 很大程度上由资源模型在结构上防止 | 重大历史攻击面 |
| Capability 访问 | 一等 | Modifiers / roles patterns |

Move 源自 Diem / Libra 项目；当 Meta 关闭该联盟（2022）时，两个主要工程团队分离：

- **Mysten Labs** → 构建 Sui
- **Aptos Labs** → 构建 Aptos

二者都继承了 Move，但演化方向不同：**Sui Move** 采用 object-centric storage（以带 ID 的对象作为主要模型），而 **Aptos Move** 更接近原始 Diem Move，采用 account-centric resources。

## Sui vs Aptos 架构分化

| 维度 | Sui | Aptos |
|---|---|---|
| 存储模型 | Object-centric（每个链上实体都是带 owner 的对象） | Account / resource（账户持有类型化资源） |
| 共识 | Narwhal（mempool）+ Bullshark（DAG-BFT） | AptosBFT（HotStuff 变体），chain-BFT |
| 并行执行 | 基于对象图 —— 触及不相交对象的 tx 可直接并行 | BlockSTM —— 乐观并发控制 + abort/retry |
| 延迟 | owned-object tx 亚秒级，shared-object tx 约 3s | 约 1s 区块时间，约 1s 终局性 |
| Sponsored gas | 原生原语 | 原生原语 |
| zkLogin / OAuth onboarding | 是（zkLogin） | 是（Aptos Keyless） |
| TPS（峰值） | 100k+ benchmark | 100k+ benchmark |
| 主要 DeFi | Cetus、NAVI、Scallop、Bluefin | Thala、Aries、Liquidswap、Econia |

解读：[[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs chain-BFT architecture]] 提供系统层面的更深入解析。

## 并行执行 —— 为什么 Move L1s 重要

Sui 和 Aptos 都追求**并行交易执行**，以摆脱 EVM 的顺序瓶颈：

- **Sui 的对象模型**使并行性成为声明式 —— 交易声明其触及哪些对象，调度器并行运行不相交对象的 tx
- **Aptos 的 BlockSTM**是乐观式 —— 并行执行所有 tx，检测冲突，并重新执行冲突交易（类似数据库中的 STM）

Solana 也以并行执行为目标（[[systems/solana-firedancer-validator-economics|Firedancer validator]]），但使用预先声明的账户访问（Sealevel）—— 比 Aptos 的模型更接近 Sui。

对于 AI-agent 工作负载 —— 跨大量钱包的许多并发微交易 —— 并行执行 L1s 在原始吞吐方面相对于顺序 L2 rollups 具有结构性优势（对比 [[systems/l2-agent-economics-arbitrum-base-op-comparison|L2 agent economics]]）。

## 金融 / agent-payment 用例

| 用例 | Sui | Aptos |
|---|---|---|
| Native USDC | 是（Circle 直接发行，支持 CCTP V2 ） | 是（Circle 直接发行，支持 CCTP V2 ） |
| Agent micropayments | 对象模型 + sponsored gas → 契合度高 | BlockSTM 吞吐 + Keyless onboarding |
| RWA / tokenization | Bluefin / Cetus 正在扩展机构功能 | 各类 RWA 试点，包括 USDT-equivalent 尝试 |
| Gaming / SocialFi | 强（Suiplay devices、Mysten ecosystem） | 强（Aptos Connect、social-graph tools） |
| Cross-chain | Wormhole + native bridges；USDC 见 [[systems/cctp-v2-overview|CCTP V2]] | 同样模式：Wormhole + CCTP V2 |
| Stablecoin issuance | Native USDC、USDT（最终） | Native USDC、USDT |

两条链都集成了 [[systems/cctp-v2-overview|CCTP V2]] 用于 canonical USDC mobility，位于 Wormhole / [[systems/layerzero-v2-omnichain-messaging|LayerZero]] mesh 中处理通用 messaging，并提供 **sponsored-gas** + **Web2-friendly login**，能够清晰映射到 AI-agent UX。

## 相关

- [[systems/INDEX]]
- [[systems/dag-bft-vs-chain-bft-architecture]]
- [[systems/bft-validator-economy-overview]]
- [[systems/threshold-bft-consensus-rust-implementations]]
- [[systems/solana-firedancer-validator-economics]]
- [[systems/cctp-v2-overview]]
- [[systems/layerzero-v2-omnichain-messaging]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/canton-overview]]
- [[systems/hyperledger-besu-overview]]
- [[INDEX|FinWiki index]]

## 来源

- sui.io 和 docs.sui.io：Sui 协议与 Move language 文档。
- aptosfoundation.org 和 aptos.dev：Aptos 协议。
- github.com/move-language/move：Move language reference。
- Mysten Labs 和 Aptos Labs 研究论文（Narwhal / Bullshark、BlockSTM）。

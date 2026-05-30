---
source: agent-economy/lit-protocol-pkp-agent-keys
source_hash: 94e428eee24bd115
lang: zh
status: machine
fidelity: ok
title: "Lit Protocol PKP · 面向 AI agent 的可编程密钥对"
translated_at: 2026-05-30T17:31:02.638Z
---

# Lit Protocol PKP · 面向 AI agent 的可编程密钥对

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]。请对照 [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] 和 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] 了解同类钱包栈，对照 [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]] 了解策略 / 范围层，对照 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT]] 了解底层密码学家族。

## Key facts

- **Lit Protocol** 是一个使用门限密码学（BLS / ECDSA 门限签名）实现**分布式密钥管理**的去中心化网络
- **PKP（Programmable Key Pair，可编程密钥对）** = 私钥部分被分割到各个 Lit 节点上的密钥；任何单个节点都看不到完整密钥
- PKP 可以**由代码有条件地控制**（"Lit Actions"）——在 Lit 安全飞地内运行、用于授权签名的 JavaScript
- 用例：AI agent 控制一个钱包，其签名需要运行时策略评估（速率限制、范围检查、多因素），但无需中心化托管方
- 与**单服务器托管**（Privy / Magic）以及 **EOA + ERC-4337 智能账户**（[[agent-economy/erc-4337-account-abstraction-primer-for-agents|see primer]]）形成对比

## Mechanism — PKP 如何为 agent 签名

1. **PKP 被铸造**为 NFT —— NFT 所有者控制谁可以请求签名
2. **私钥分片**通过 DKG（分布式密钥生成）分布到各个 Lit 节点
3. **签名请求**流程：调用方提交消息 + Lit Action（JS 代码）→ Lit 节点在 TEE 中执行该 action → 若 action 返回 `sign: true`，则对消息进行门限签名
4. **输出**是标准的 ECDSA / BLS 签名，可用于 EVM、Bitcoin、Solana、Cosmos 或任何链
5. **任何节点都不会组装**出完整私钥 —— 即便多数节点被攻破也只泄露一个密钥分片

```
AI agent ──► sign(msg)
              │
              ▼
       Lit Action (JS)
       (runs in TEE on each node)
       - check msg semantics
       - check rate limits
       - check policy / oracle
       - return {sign: bool, msg: bytes}
              │
              ▼
  threshold-BLS signature
  reassembled by caller
              │
              ▼
  use on any chain (EVM / BTC / SOL / ...)
```

## PKP 在 agent 栈中的位置

| 能力 | EOA + 4337 智能账户 | PKP + Lit Action |
|---|---|---|
| 密钥托管 | 单一设备或托管方 | Lit 网络上的门限分布 |
| 策略逻辑 | 链上（智能账户代码） | TEE 中的链下 JS |
| 跨链 | 每条链需要单独的智能账户 | 一个 PKP 原生为任何链签名 |
| 延迟 | 智能账户调用成本 + L2 上链 | Lit 网络往返 ~1-3s |
| 可组合性 | EVM 工具链丰富 | 较新的模式；Lit Actions 生态更窄 |
| 审查面 | Bundler / sequencer | Lit 节点集 |

PKP 在以下情况尤为有用：

- agent 必须在**多条链**上签名，而无需每次重新部署智能账户基础设施
- 签名前策略必须在**链下**运行（预言机检查、web2 API 咨询）
- 托管风险应当**分布式**承担，而非集中于像 Privy 这样的单一 SaaS 托管方

## 与嵌入式钱包运营商的对比

| 层 | Privy / Magic / Dynamic | Lit PKP |
|---|---|---|
| 托管架构 | SaaS 服务器托管（通常受 TEE 保护） | Lit 节点上的门限分布 |
| 信任假设 | 信任 SaaS 运营商 | 信任 Lit 节点集（1-of-n 或门限） |
| 多链 | 每链密钥生成 | 所有链共用单个 PKP |
| 可编程策略 | 有限（签名策略 SDK） | Lit Action 中的完整 JS |
| 恢复 | 运营商管理（email、OAuth） | NFT 所有者控制 |

对于 AI agent，PKP 模型可以清晰地映射为：**agent 拥有 PKP NFT，Lit Action 中的策略强制执行范围（最大花费、允许的合约、时间窗口），agent 按每个 action 调用 Lit 网络进行签名**。这在链上侧与 [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]] 互补，在链下授权侧与 [[agent-economy/ap2-overview|AP2 mandate VC]] 互补。

## Origin and evolution

Lit 于 2021-2022 作为一个"去中心化访问控制"项目（代币门控内容）启动。向通用门限签名 + Lit Actions 的转型发生在 2023；PKP 在 2024 获得关注，因为 agent / 钱包构建者需要在没有托管单点故障的情况下进行跨链签名。到了 2025-2026 ，Lit 将自己定位为**"agent 控制钱包"的基础设施** —— 与 [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus]] 系统相邻但有别。

## 面向 AI agent 的用例

- **跨链交易 agent** —— 一个 PKP 在 Ethereum、Solana、Cosmos 上签名各种 swap
- **订阅 agent** —— Lit Action 在签署周期性付款前验证 cron + 链上余额
- **类多签委托** —— PKP NFT 在用户 + agent 间共享；任一方都可触发条件签名
- **预言机门控执行** —— 若价格变动触发交易，Lit Action 在签名前调用 Chainlink / Pyth
- **恢复 / 继承** —— PKP NFT 持于社交恢复方案中；agent 负责日常运作，NFT 可恢复

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/privy-embedded-wallet-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/embedded-wallet-network-effects-moat]]
- [[systems/threshold-bft-consensus-rust-implementations]]
- [[INDEX|FinWiki index]]

## Sources

- litprotocol.com product and developer documentation.
- developer.litprotocol.com on PKP minting, Lit Actions, and access control.
- github.com/LIT-Protocol for node software and reference SDKs.
- Lit Spark blog on threshold-signing patterns for agent wallets.

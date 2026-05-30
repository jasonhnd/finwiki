---
source: agent-economy/nevermined-compute-payment-protocol
source_hash: 7ac4261eca37bc6b
lang: zh
status: machine
fidelity: ok
title: "Nevermined · AI 算力支付协议"
translated_at: 2026-05-30T17:31:02.640Z
---

# Nevermined · AI 算力支付协议

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]]。请对照 [[agent-economy/x402-http-payment-overview|x402 · HTTP-native micropayment]] 了解同类 / 对比，对照 [[agent-economy/skill-market-monetization|skill market monetization]] 了解市场框架，对照 [[payments/INDEX|payments index]] 了解更广泛的轨道背景。

## Key facts

- Nevermined 是一个 **AI 算力 / 数据市场 + 支付协议** —— 按推理、按数据集、按 agent 调用计费的微支付
- 架构：智能合约托管 + 代币门控访问；agent 为算力 / 模型 / 数据进行订阅或按用量付费
- 最初构建于 Polygon / EVM；集成 [[agent-economy/x402-http-payment-overview|x402]] 作为一种结算选项
- 用例：AI 算力提供方暴露一个模型 / GPU 端点；agent 消费方按每次推理调用付费，以 stablecoin 结算
- 瞄准"算力即商品"论题，即 agent 在一个工作流中跨多个提供方采购

## Mechanism — Nevermined 如何路由算力支付

该协议位于**算力 / 模型提供方**与 **agent 消费方**之间：

```
AI agent ──── intent: "run inference on model X" ─────►
                                                      ▼
                                              Nevermined
                                              gateway / SC
                                                      │
                              ┌───────────────────────┼──────────────────┐
                              ▼                       ▼                  ▼
                     Compute provider A       Model provider B    Dataset provider C
                              │                       │                  │
                              └───── settlement ──────┴──── stablecoin ──┘
                                       (USDC, USDT, native token)
```

核心构建块：

1. **资产注册** —— 提供方注册一个模型 / 数据集 / API 端点，附带价格、使用条款和访问策略
2. **订阅 / 按用量付费代币** —— 消费方 agent 购买订阅 NFT 或按次调用额度
3. **智能合约托管** —— 付款托管至交付证明完成；提供方在完成后领取
4. **访问证明** —— 网关在将请求转发给算力提供方之前验证代币
5. **版税 / 分账逻辑** —— 向模型创建者、数据策展人、算力提供方进行多方分账

## 算力市场的契合度

Nevermined 背后的 agent 经济论题：一个 agent 工作流可能在**一个任务中触达数十个算力提供方**（例如，一个研究 agent 调用一个视觉模型、一个结构化抽取 LLM、一个向量数据库、一个领域特定微调模型和一个长上下文模型 —— 每个都来自不同供应商）。传统 SaaS API 密钥流程在这种扇出下会失效；Nevermined 的按次结算 + 统一账单使其变为线性。

与 [[agent-economy/x402-http-payment-overview|x402]] 架构对比：x402 标准化了 **HTTP 握手**，Nevermined 标准化了**市场 + 托管合约**。两者可以组合 —— Nevermined 使用 x402 进行传输层的 payment-required 握手，同时在其之上运行自己的托管 / 版税层。

## Integration with x402

| Layer | x402 | Nevermined |
|---|---|---|
| HTTP 握手 | 定义 `402 Payment Required` + `X-Payment` 头 | 采用 x402 作为一种传输选项 |
| 结算 | 默认 Base 上的 USDC | 多 stablecoin，基于托管 |
| 市场 | Bazaar MCP（10k+ 端点） | Nevermined 的算力 / 模型 / 数据注册表 |
| 版税 / 分账 | 不在范围内 | 原生支持多方分账 |
| 订阅模型 | 仅按次 | 订阅 NFT + 按次 |

实际模式：算力提供方通过 Nevermined 发布以获得目录 + 托管，用 x402 facilitator 暴露调用端点以进行传输层支付，并让 agent 在 [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum]] 上以 [[fintech/usd-stablecoin-interchange|USDC]] 结算。

## Nevermined 所处位置

| 功能 | 开放栈同类 | Nevermined 定位 |
|---|---|---|
| 发现 | x402 Bazaar | Nevermined 注册表 |
| 结算 | x402 + USDC | 同样的轨道，外加订阅 |
| 身份 | Privy / Coinbase CDP / [[agent-economy/erc-7715-overview|ERC-7715]] | 复用外部钱包身份 |
| 版税分账 | Stripe Connect、ERC-2981 | 通过智能合约托管内置 |
| 合规 / KYA | Skyfire（[[agent-economy/skyfire-closed-loop-agent-issuer|see entry]]） | 可插拔 |

## Related

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/skyfire-closed-loop-agent-issuer]]
- [[agent-economy/skill-market-monetization]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[fintech/usd-stablecoin-interchange]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[INDEX|FinWiki index]]

## Sources

- nevermined.io product site and developer documentation.
- github.com/nevermined-io for protocol contracts and gateway code.
- Nevermined registry app and provider listings.

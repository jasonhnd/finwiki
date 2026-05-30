---
source: agent-economy/privy-embedded-wallet-overview
source_hash: 5af0c4f9f23e3dce
lang: zh
status: machine
fidelity: ok
title: "Privy · Stripe 旗下的嵌入式自托管钱包（总览）"
translated_at: 2026-05-30T17:31:02.642Z
---

# Privy · Stripe 旗下的嵌入式自托管钱包（总览）

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]。请对照 [[agent-economy/embedded-wallet-network-effects-moat|埋込ウォレットのネットワーク効果 · ウォレット本体ではなくインテグレーターの堀]] 了解同类 / 对比背景，对照 [[payments/INDEX|payments index]] 了解更广泛的系统 / 监管边界。

## Key facts

- 2021 于纽约创立 · 创始人 Henri Stern + Asta Li ^[extracted]
- 2025-06 被 Stripe 收购（估计 $300-500M） ^[extracted]
- 收购时 75M 账户 · 到 2026-Q1 已达 110M+ 钱包 ^[extracted]
- 1,000+ 名开发者团队被整合 ^[extracted]
- Self-custodial 模型：MPC + TEE 分片 · 私钥不存在于 Privy 任何单一节点 ^[extracted]
- 用户 onboarding ~10 秒 vs MetaMask 5-10 分钟 ^[extracted]
- 收购前的核心客户：OpenSea / Hyperliquid / Farcaster / Friend.tech / Toku / Zora ^[extracted]
- 在 2026 Sessions 上发布 Multichain balances API ^[extracted]

## Mechanism / How it works

用户用 email/Google 登录时，Privy SDK（30 行的代码）在前端执行 MPC 分片密钥生成。**1 分片保存在用户的设备**（基于 Passkey / WebAuthn / Secure Enclave）+ **1 分片保存在 Privy 的 TEE**（Trusted Execution Environment · AWS Nitro Enclaves 或同等物）。签名时 2 分片协同生成有效签名，但 Privy 单独无法签名，用户也无法单独签名 —— 实现了"既是 self-custodial 又无需管理"的折衷（同一模型见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]]）。借助 Multichain balances API，1 次 API 调用即可获取 Ethereum / Solana / Tempo / Polygon 等多链余额，免去开发者逐一实现多链聚合的需要（下层依赖 [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]]）。整个体验完全是 Web2：用户不见 seed phrase · 不安装 MetaMask · 无需切换网络 —— 这正是 Privy 占据 110M 钱包规模的核心。

## Origin & evolution

2021 纽约 · 创始人 Stern + Li（此前在 Protocol Labs）。2022-2024 与 OpenSea / Hyperliquid / Farcaster 等 dapp 深度集成 · 积累 75M 账户。2024-Q4 Stripe 启动 stablecoin + Tempo + Bridge 收购连环战略 · 钱包层成为必需（战略全图见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]）。2025-06 Stripe 完成 Privy 收购 · 估计 $300-500M（与 Bridge 的 $1.1B 相比 · Privy 因处于高速成长期估值偏低）。2025 H2 Privy 继续以独立品牌运营 · 同时开始满足 Stripe Connect / Tempo / Bridge 的内部需求。2026-05-07 AWS Bedrock AgentCore Payments 将 Privy 与 Coinbase CDP 并列嵌入为默认 wallet provider —— 确立了 Privy 在 AI agent 经济基础设施中的定位（与 [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ5本柱]] 的传统路径形成对比）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore デフォルトウォレット]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 決済プロトコル]]
<!-- /wiki-links:managed -->

## Sources

- Privy docs — https://docs.privy.io/

---
title: Privy · Stripe 子公司的嵌入式自托管钱包(总览)
aliases: [privy-embedded-wallet-overview, privy, stripe-privy, henri-stern]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [agent-economy, wallet, embedded-wallet, mpc, privy, stripe, self-custodial]
sources: []
status: candidate
---

# Privy · Stripe 子公司的嵌入式自托管钱包(总览)

> [!info] TL;DR
> Privy 是 2021 由 Henri Stern + Asta Li 创办的 embedded wallet infrastructure,2025-06 被 Stripe 收购(推测 $300-500M)。30 行代码集成 self-custodial 钱包,MPC + TEE 切片私钥(用户 Passkey / WebAuthn + Privy TEE),用户用 email/Google 登录无感 onboarding。截至 2026-Q1 已有 110M+ 钱包。

## Key facts

- 2021 在纽约成立 · 创始人 Henri Stern + Asta Li ^[extracted]
- 2025-06 被 Stripe 收购($300-500M 推测) ^[extracted]
- 收购时 75M 账户 · 2026-Q1 达 110M+ 钱包 ^[extracted]
- 1,000+ developer team 集成 ^[extracted]
- Self-custodial 模式:MPC + TEE 切片 · 私钥不在 Privy 单点 ^[extracted]
- 用户 onboarding ~10 秒 vs MetaMask 5-10 分钟 ^[extracted]
- 收购前核心客户:OpenSea / Hyperliquid / Farcaster / Friend.tech / Toku / Zora ^[extracted]
- 2026 Sessions 发 Multichain balances API ^[extracted]

## Mechanism / How it works

用户用 email/Google 登录后,Privy SDK(30 行代码)在前端执行 MPC 分片密钥生成:**一片在用户设备**(基于 Passkey / WebAuthn / Secure Enclave)+ **一片在 Privy TEE**(Trusted Execution Environment · AWS Nitro Enclaves 或同类)。签名时两片协作产生有效签名,但 Privy 单独无法签名,用户也无法独立签名 —— 实现 "self-custodial 又免管理" 的折衷。Multichain balances API 让一个 API 调用即可拉取用户在 Ethereum / Solana / Tempo / Polygon 等多链的余额,避免开发者各自实现多链聚合。整个体验完全 Web2:用户不见 seed phrase / 不装 MetaMask / 不切换网络 —— 这是 Privy 占据 110M 钱包规模的核心。

## Origin & evolution

2021 纽约 · 创始人 Stern + Li(此前在 Protocol Labs)。2022-2024 与 OpenSea / Hyperliquid / Farcaster 等 dapp 深度集成 · 累积到 75M 账户。2024-Q4 Stripe 启动 stablecoin + Tempo + Bridge 收购的连环战略,需要 wallet 层。2025-06 Stripe 完成 Privy 收购 · 推测 $300-500M(Bridge 是 $1.1B 对照,Privy 估值较低因为还在快速增长期)。2025 H2 Privy 仍以独立品牌运营 · 但开始服务 Stripe Connect / Tempo / Bridge 的内部需求。2026-05-07 AWS Bedrock AgentCore Payments 把 Privy 与 Coinbase CDP 并列为默认 wallet provider —— 是 Privy 在 AI agent 经济基础设施的卡位。

## Counterpoints

- "Self-custodial" 在 MPC + TEE 模型下被部分专家批评 "实质 custodial":Privy TEE 故障 → 用户资产风险
- 与 Coinbase CDP 在 AWS AgentCore 上是 "并列" · 实际未来可能被 CDP 蚕食(Coinbase 有更强机构信任)
- Stripe 收购后能否保持开放生态 · 还是会逐步排他化 dApp 集成(与 OpenSea 等竞争对手)
- 110M 钱包数字含义模糊 · 多少是活跃 wallet?

## Open questions

- Privy 是否会成为 Stripe Connect 5M 商户的默认钱包(自动 provisioning)?
- AWS AgentCore 默认列表中 Privy / Coinbase CDP 的市场份额拆分如何?
- MPC + TEE 模型是否会受 EU/US 的 self-custody 监管新规挑战?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore 默认钱包]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet 对 CEX 的去中介化]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 支付协议]]
<!-- /wiki-links:managed -->

## Sources


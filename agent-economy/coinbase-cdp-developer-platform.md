---
title: Coinbase CDP · 开发者平台 · AI agent on-chain 钱包基础设施
aliases: [coinbase-cdp-developer-platform, Coinbase Developer Platform, CDP, embedded wallet, AgentKit]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [agent-economy, coinbase, cdp, embedded-wallet, agentcore, agentkit, base, usdc]
sources: []
status: candidate
---

# Coinbase CDP · 开发者平台 · AI agent on-chain 钱包基础设施


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 复活的 AI agent 支付协议(总览)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 注册开发者 ~**150K** · 集成 dApp ~**8K** · 月活 embedded 钱包 ~**5M** (2026-Q1) ^[extracted]
- 默认链 Base · 支持 8 链 (Ethereum, Base, Solana, Polygon, Arbitrum, Optimism, Avalanche, BNB) ^[extracted]
- 模块矩阵: CDP Wallets / Onramp / Staking / Paymaster (ERC-4337) / Smart Wallets / **AgentKit** (2025-04) ^[extracted]
- 2025-12 AWS Bedrock AgentCore 集成 CDP + Privy 为默认钱包 provider ^[extracted]
- 与 USDC + Base 默认绑定 · gas-free transfer · onramp 直通 ^[extracted]
- Privy 由 Stripe 2025-Q3 收购 → CDP 主要竞品也是 AgentCore 双 provider 之一 ^[extracted]

## Mechanism / How it works

CDP 把"集成 Web3"从"几个月开发 + 自托管基础设施"压缩到"几分钟 API 集成":开发者拿到一行 SDK 即可在自家产品中嵌入 onchain 钱包(MPC 托管 + email/social 登录 + ERC-4337 智能合约钱包 + 法币 onramp + USDC gas-free transfer 一体化)。AgentKit (2025-04 推出) 把这套能力专门暴露给 AI agent 框架(LangChain/AutoGen 等),让 AI agent 可以**自主创建钱包 → 接收/发送 USDC → 调用 DeFi 合约**。AgentCore 集成后,AWS 上的 Bedrock agent 默认通过 CDP 或 Privy 拿到钱包能力——**AI agent on-chain 支付的 50%+ 流量预计经过 CDP/Privy**。

## Origin & evolution

CDP 前身 = Coinbase Cloud (B2B 基础设施) + Coinbase Wallet API,2023-Q4 重新打包为 CDP。2024-Q3 Smart Wallets 上线 (Coinbase 自研 ERC-4337,与 Base Paymaster 深度集成)。2025-04 **AgentKit** 上线专门服务 AI agent。2025-Q3 Stripe 收购 Privy,确立 CDP 与 Privy 为 embedded wallet 双寡头。**2025-12 AWS Bedrock AgentCore 正式集成 CDP + Privy** 是 CDP 战略最大里程碑——把 AI agent on-chain 经济的入口下沉到 AWS 默认层。2026-Q1 CDP × Base × USDC × Onramp 闭环完成,**实现"零滑点零 gas" 用户体验**。

## Counterpoints

CDP 默认绑定 Base / USDC = Coinbase 控制色彩强 · 与 Privy 的 "多链中立 + 多稳定币" 设计哲学相反,**真正中立的 AI agent 开发者可能更倾向 Privy**。Base 中心化倾向 (Coinbase 单一 sequencer + cbBTC + Aerodrome 大股东) 让 CDP 在受监管 enterprise 客户中存在合规审视风险。Magic / Web3Auth / Reown (前 WalletConnect) 仍占 embedded wallet 长尾市场。AWS AgentCore 默认双 provider 意味着 CDP 必须**持续与 Privy 价格 + DX 竞争**,无法躺收。

## Open questions

CDP 与 Base 的耦合在 2027 Base 完全 decentralize sequencer 后会否解开?AgentKit 在 ERC-7702 (EIP-7702 + ERC-4337 hybrid) 普及后,如何处理 EOA → Smart Account 迁移?CDP 是否会单独 IPO 或被剥离为独立子公司?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总览]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 支付协议七层]]
- [[agent-economy/ap2-overview|AP2 Protocol 总览]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC 包装 BTC]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken 主导方飞轮]]
<!-- /wiki-links:managed -->

## Sources


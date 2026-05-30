---
source: agent-economy/coinbase-cdp-developer-platform
source_hash: e278ca407d0779b5
lang: zh
status: machine
fidelity: ok
title: "Coinbase CDP · 开发者平台 · AI agent on-chain 钱包基础设施"
translated_at: 2026-05-30T17:04:08.785Z
---

# Coinbase CDP · 开发者平台 · AI agent on-chain 钱包基础设施

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 を復活させた AI agent 決済プロトコル(総覧)]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 注册开发者 ~**150K** · 集成 dApp ~**8K** · 月活跃 embedded 钱包 ~**5M**(2026-Q1) ^[extracted]
- 默认链为 Base · 支持 8 条链(Ethereum, Base, Solana, Polygon, Arbitrum, Optimism, Avalanche, BNB) ^[extracted]
- 模块构成:CDP Wallets / Onramp / Staking / Paymaster(ERC-4337)/ Smart Wallets / **AgentKit**(2025-04) ^[extracted]
- 2025-12 AWS Bedrock AgentCore 把 CDP + Privy 集成为默认钱包 provider ^[extracted]
- 默认绑定 USDC + Base · gas-free transfer · onramp 直连 ^[extracted]
- Privy 由 Stripe 于 2025-Q3 收购 → CDP 的主要竞品也是 AgentCore 双 provider 之一 ^[extracted]

## Mechanism / How it works

CDP 把「Web3 集成」从「数月的开发 + 自建基础设施」压缩为「数分钟的 API 集成」。开发者用 SDK 的 1 行便可在自家产品内嵌入 onchain 钱包(集 [[fintech/embedded-wallet-fintech-disintermediation-overview|MPC 埋込ウォレットモデル]] + email/social 登录 + [[systems/erc-4337-overview|ERC-4337]] 智能合约钱包 + 法币 onramp + [[fintech/usd-stablecoin-interchange|USDC]] gas-free transfer 于一体)。AgentKit(2025-04 发布)把这些能力专为 AI agent 框架(LangChain/AutoGen 等)公开,使 AI agent 能够 **自主创建钱包 → 收发 USDC → 调用 DeFi 合约**。AgentCore 集成后,AWS 上的 Bedrock agent 默认经由 CDP 或 Privy 获得钱包能力 — **预计 AI agent on-chain 支付的 50%+ 流量将经过 CDP/Privy**。

## Origin & evolution

CDP 的前身是 Coinbase Cloud(B2B 基础设施) + Coinbase Wallet API · 于 2023-Q4 被重新打包为 CDP。2024-Q3 Smart Wallets 上线(Coinbase 自研的 ERC-4337,与 Base Paymaster 深度集成)。2025-04 发布 **AgentKit** 为 AI agent 提供专属服务。2025-Q3 Stripe 收购 Privy · CDP 与 Privy 确立为 embedded wallet 两强。**2025-12 AWS Bedrock AgentCore 正式集成 CDP + Privy** 是 CDP 战略最大的里程碑 — 把 AI agent on-chain 经济的入口降到了 AWS 的默认层。2026-Q1 CDP × Base × USDC × Onramp 的闭环完成 · **实现了「零滑点・零 gas」的用户体验**。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 決済プロトコル7層]]
- [[agent-economy/ap2-overview|AP2 Protocol 総覧]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC ラップ BTC]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken ホストプロトコルのフライホイール]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Developer Platform (CDP) docs — https://docs.cdp.coinbase.com/

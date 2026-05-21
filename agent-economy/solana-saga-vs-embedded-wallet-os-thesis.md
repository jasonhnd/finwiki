---
title: Solana SMS vs Embedded Wallet · OS 层 vs App 层路径之争
aliases: [solana-saga-vs-embedded-wallet-os-thesis, sms-vs-privy, os-wallet-vs-embedded-wallet, mobile-wallet-os-thesis]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, wallet, mobile, solana, embedded-wallet, privy, coinbase-cdp]
sources: []
status: candidate
---

# Solana SMS vs Embedded Wallet · OS 层 vs App 层路径之争


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI agent 经济默认钱包卡位]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Embedded Wallet 路径代表:Privy + Coinbase CDP · 服务 dapp 内 UX ^[extracted]
- SMS 路径代表:Solana Saga + Seeker · 把 wallet 做成系统服务 ^[extracted]
- 限制 Embedded Wallet 的根因:iOS 沙箱 + Google Play 30% 抽成 + 浏览器 push 受限 ^[extracted]
- SMS 通过 Seed Vault + MWA + dApp Store 绕开三大限制 ^[extracted]
- Coinbase Wallet 已在 Android 端兼容 MWA(混合路径) ^[extracted]
- Stripe Tap to Pay 偏 SMS 范式(NFC 系统层 · merchant 端) ^[extracted]
- 110M Privy 钱包(2026-Q1)vs 15 万 Seeker 预订 · 规模差异巨大 ^[inferred]

## Mechanism / How it works

Embedded Wallet 把私钥藏在 iCloud / Google passkey 同步里 · UX 很顺但绑定 OS 提供商。SMS 让 wallet 成为 OS 内置服务 · 任何 dapp 通过 system intent 调用 · UI 与签名 prompt 都由 OS 控制 —— 防钓鱼能力更强 · 但需要硬件预装。两条路径不互斥:Coinbase Wallet 在 Android 上已经 "双栖" —— 既可作为 embedded wallet 集成 dapp · 也实现 MWA 与 Saga / Seeker 互通。中长期看:**OS 层是更深 moat**(系统厂商决定权)· **App 层是更广 reach**(任何手机都能用)。如果 Samsung / Xiaomi / Google 真集成 Seed Vault 类原生 keystore,embedded wallet 厂商必须支持 MWA 才能在 Android 长尾保持兼容。

## Origin & evolution

2018-2022 早期 wallet 都是 app 内方案(MetaMask / Phantom)。2021-2023 embedded wallet 兴起(Magic Link / Privy / Web3Auth)· 解决 onboarding 痛点但仍是 app 层。2022 Solana 提出 SMS 概念 · 押注 OS 层。2023 Saga 上市 验证基本可行。2024 Seeker 公布 · 标志着 SMS 范式获得社区支持。2025 Stripe 收购 Privy + Bridge · 把 embedded wallet 与 stablecoin merchant 闭环;同期 Solana Mobile 游说 Samsung / Xiaomi 集成 Seed Vault。2026-05 AWS AgentCore 默认选 Privy + Coinbase CDP · 是 embedded 路径在 AI agent 场景的关键胜利 —— 但 SMS 在 consumer-side mobile payment 仍是独立赛道。

## Counterpoints

- "OS 层是更深 moat" 可能被 iOS / Android 自带 Wallet App 取代(Apple Pay + Google Wallet 已是 OS 集成)
- SMS 规模(15 万台)与 embedded wallet(110M+)差距巨大 · 短期不构成实际竞争
- Coinbase Wallet 双栖证明两条路径可融合 · 未必有真正的 "胜负"
- Stripe Tap to Pay 与 SMS 不是同一抽象层 · 类比可能误导

## Open questions

- 2028 Samsung / Xiaomi 是否真集成 Seed Vault · 推动 SMS 标准化?
- Apple 是否会因 antitrust 开放 iOS 上的 alt wallet / app store?
- AI agent 场景下 OS 层 wallet 是否会因 "代理签名 + 系统级授权" 反超 embedded?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana SMS 总览]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet 对 CEX 的去中介化]]
<!-- /wiki-links:managed -->

## Sources


---
source: agent-economy/solana-saga-vs-embedded-wallet-os-thesis
source_hash: 549bc94ac2867356
lang: zh
status: machine
fidelity: ok
title: "Solana SMS vs Embedded Wallet · OS 层 vs App 层的路径之争"
translated_at: 2026-06-15T03:48:21.822Z
---

# Solana SMS vs Embedded Wallet · OS 层 vs App 层的路径之争

## Wiki 路由

本词条归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]。请将其与 [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI agent 経済のデフォルトウォレットポジショニング]] 对照阅读以获取同类 / 对比语境，并参照 [[payments/INDEX|payments index]] 了解更广泛的系统 / 监管边界。

## 关键事实

- Embedded Wallet 路径的代表：Privy + Coinbase CDP · 提供 dapp 内 UX ^[extracted]
- SMS 路径的代表：Solana Saga + Seeker · 将钱包系统服务化 ^[extracted]
- 制约 Embedded Wallet 的根本原因：iOS 沙盒 + Google Play 30% 手续费 + 浏览器 push 的限制 ^[extracted]
- SMS 通过 Seed Vault + MWA + dApp Store 的 3  项绕开上述 3  大制约 ^[extracted]
- Coinbase Wallet 已经在 Android 上兼容 MWA（混合路径） ^[extracted]
- Stripe Tap to Pay 偏向 SMS 范式（将 NFC 置于系统层 · 商户侧） ^[extracted]

## OS 层钱包与 embedded wallet 的竞争结构

Embedded Wallet 把私钥隐藏在 iCloud / Google passkey 同步中以使 UX 顺滑，但会被绑定到 OS 提供商（参见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]]）。SMS 把钱包做成 OS 内置服务 · 任意 dapp 通过 system intent 调用。UI 与签名 prompt 由 OS 控制 —— 抗钓鱼性强，但需要硬件预装。两条路径并非互斥：Coinbase Wallet 在 Android 上已经「双修」—— 一方面作为 embedded wallet 集成进 dapp，另一方面也实现了 MWA 以便与 Saga / Seeker 互操作。中长期来看：**OS 层拥有更深的 moat**（系统厂商的决定权）· **App 层拥有更广的 reach**（在任意手机上都能使用）。如果 Samsung / Xiaomi / Google 真的整合 Seed Vault 系的原生 keystore，embedded wallet 厂商将不得不支持 MWA，以在 Android 的长尾中保持兼容性。

## 起源与演进

2018-2022  早期的钱包全部是 app 内方式（MetaMask / Phantom）。2021-2023  embedded wallet 崛起（Magic Link / Privy / Web3Auth）· 解决了 onboarding 的痛点，但依然处于 app 层。2022  Solana 提出 SMS 概念 · 押注 OS 层。2023  Saga 推出，验证了基本可行性。2024  公布 Seeker · 表明 SMS 范式获得了社区的支持。2025  Stripe 收购 Privy + Bridge，构建 embedded wallet 与 stablecoin 商户的闭环（[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]）；同步地，Solana Mobile 推动 Samsung / Xiaomi 整合 Seed Vault。2026-05  AWS AgentCore 默认选择 Privy + Coinbase CDP —— 这是 embedded 路径在 AI agent 场景中的重要胜利 —— 但 SMS 在消费者侧移动支付中仍是独立的战场（作为通用支付货币的 USDC 参见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]）。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana SMS 総覧]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## 来源

- Solana Mobile 官方文档（Seed Vault / MWA / dApp Store · SMS 路径）— https://docs.solanamobile.com/
- Privy docs（embedded wallet 路径的代表）— https://docs.privy.io/
- Coinbase Developer Platform（CDP Wallet · Android MWA 混合）— https://docs.cdp.coinbase.com/
- Privy「Privy and Stripe: Bringing crypto to everyone」（Stripe 收购 · embedded × stablecoin 闭环）— https://privy.io/blog/announcing-our-acquisition-by-stripe

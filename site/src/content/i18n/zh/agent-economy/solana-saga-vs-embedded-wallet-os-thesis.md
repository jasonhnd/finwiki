---
source: agent-economy/solana-saga-vs-embedded-wallet-os-thesis
source_hash: eb06924b7dbb4e80
lang: zh
status: machine
fidelity: ok
title: "Solana SMS vs Embedded Wallet · OS 层 vs App 层的路径之争"
translated_at: 2026-05-30T17:31:02.645Z
---

# Solana SMS vs Embedded Wallet · OS 层 vs App 层的路径之争

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]。请对照 [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI agent 経済のデフォルトウォレットポジショニング]] 了解同类 / 对比背景，对照 [[payments/INDEX|payments index]] 了解更广泛的系统 / 监管边界。

## Key facts

- Embedded Wallet 路径的代表：Privy + Coinbase CDP · 提供 dapp 内 UX ^[extracted]
- SMS 路径的代表：Solana Saga + Seeker · 将钱包系统服务化 ^[extracted]
- 制约 Embedded Wallet 的根本原因：iOS 沙箱 + Google Play 30% 手续费 + 浏览器 push 的限制 ^[extracted]
- SMS 用 Seed Vault + MWA + dApp Store 这 3 者规避上述 3 大制约 ^[extracted]
- Coinbase Wallet 已在 Android 上 MWA 兼容（混合路径） ^[extracted]
- Stripe Tap to Pay 偏向 SMS 范式（把 NFC 放到系统层 · 商户侧） ^[extracted]

## Mechanism / How it works

Embedded Wallet 把私钥藏进 iCloud / Google passkey 同步以使 UX 顺滑，但被绑定到 OS 提供方（见 [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]]）。SMS 把钱包做成 OS 内置服务 · 任意 dapp 经由 system intent 调用。UI 与签名 prompt 由 OS 控制 —— 抗钓鱼能力强，但需要硬件预装。两条路径并不互斥：Coinbase Wallet 在 Android 上已经"双持" —— 作为 embedded wallet 集成进 dapp 的同时也实现了 MWA，从而能与 Saga / Seeker 互操作。中长期来看：**OS 层是更深的护城河**（系统厂商的决定权）· **App 层有更广的触达**（在任何手机上可用）。若 Samsung / Xiaomi / Google 真的集成 Seed Vault 式的原生 keystore，embedded wallet 厂商将不得不支持 MWA 以在 Android 长尾上保持兼容。

## Origin & evolution

2018-2022 早期钱包全是 app 内方式（MetaMask / Phantom）。2021-2023 embedded wallet 崛起（Magic Link / Privy / Web3Auth）· 解决了 onboarding 痛点但仍处于 app 层。2022 Solana 提出 SMS 概念 · 押注 OS 层。2023 Saga 发布，验证了基本可行性。2024 发布 Seeker · 显示 SMS 范式已获得社区支持。2025 Stripe 收购 Privy + Bridge · 构建 embedded wallet 与 stablecoin 商户的闭环（[[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]）；同步地，Solana Mobile 游说 Samsung / Xiaomi 进行 Seed Vault 集成。2026-05 AWS AgentCore 默认选择 Privy + Coinbase CDP —— 这是 embedded 路径在 AI agent 场景中的重要胜利 —— 不过 SMS 在消费者侧移动决济中仍是独立战场（作为通用决济货币的 USDC 见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana SMS 総覧]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Solana Mobile 官方文档（Seed Vault / MWA / dApp Store · SMS 路径）— https://docs.solanamobile.com/
- Privy docs（embedded wallet 路径的代表）— https://docs.privy.io/
- Coinbase Developer Platform（CDP Wallet · Android MWA 混合）— https://docs.cdp.coinbase.com/
- Privy「Privy and Stripe: Bringing crypto to everyone」（Stripe 收购 · embedded × stablecoin 闭环）— https://privy.io/blog/announcing-our-acquisition-by-stripe

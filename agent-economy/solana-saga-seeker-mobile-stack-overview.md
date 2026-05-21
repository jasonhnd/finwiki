---
title: Solana Saga / Seeker · 移动原生钱包栈(SMS 总览)
aliases: [solana-saga-seeker-mobile-stack-overview, solana-saga, solana-seeker, solana-mobile-stack, SMS]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, wallet, mobile, solana, saga, seeker, seed-vault, mwa]
sources: []
status: candidate
---

# Solana Saga / Seeker · 移动原生钱包栈(SMS 总览)


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]]. Read it against [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 层 vs App 层路径之争]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Saga 2023 上市 · 售价 $1000 · 首代实验性硬件 ^[extracted]
- Seeker 2025 量产 · $450 售价 · 15 万台预订 ^[extracted]
- Seed Vault:Android 系统级 keystore · 基于 TEE · 私钥不出芯片 ^[extracted]
- Mobile Wallet Adapter(MWA):开放协议 · 任何 Android wallet app 可实现 ^[extracted]
- Solana dApp Store:绕开 Google Play 30% in-app purchase 抽成 ^[extracted]
- Seeker 内置 SKR token 经济 · 与 Helius RPC 深度集成 ^[extracted]
- MWA 已被 Solana 生态全部主流 wallet 采用(Phantom / Solflare / Backpack) ^[extracted]

## Mechanism / How it works

主流 embedded wallet(Privy / Coinbase CDP)解决 dapp 内部 wallet UX,但所有 web/PWA wallet 仍受制于 iOS Safari 沙箱 + Google Play / App Store 30% 抽成 + 浏览器 push 受限。Solana 判断 wallet 必须下沉到 OS 层。**Seed Vault** 在 Android 系统服务级别提供基于 TEE 的 keystore · 私钥不出 SoC · 任何 dapp 通过 system intent 请求签名 · UI 由 OS 控制防钓鱼 —— 等同把硬件钱包做进手机。**MWA** 是开放协议 · dapp 用 deep link / QR / Bluetooth 与 wallet 通信 · 无需在浏览器内注入 JS。**dApp Store** 预装在 Saga/Seeker · 开发者直接收 SOL/USDC 无 platform fee。Seeker 进一步以 $450 平民化定价 + Helius RPC 集成 + SKR token 经济提升原生体验。

## Origin & evolution

2022 Solana 宣布 Saga 计划 · 同年 Anatoly Yakovenko 公开 SMS 概念。2023-Q1 Saga 上市 · 早期评价两极(crypto-native 好评 + mainstream 嫌贵)。2024 Saga 销量约 2 万台 · 但 SMS 协议被 Phantom / Backpack / Solflare 全面集成。2024-Q4 宣布 Seeker · $450 + 15 万台预订(从 Saga 的 1/10 销量到 5 倍预订量是关键证明)。2025-Q2 Seeker 量产。2025-2026 Solana Labs 游说 Samsung / Xiaomi 集成 Seed Vault · 推进 SMS 标准化。Stripe + Bridge + Solana Pay 在 merchant 端深度集成 · Saga/Seeker 在 consumer 端形成闭环。

## Counterpoints

- 15 万台 vs Apple 200M iPhone/年 · 实际规模仍极小
- Seed Vault 标准化游说能否成功不确定 · 三星 / 小米可能仍倾向自有 Wallet
- "OS 级 wallet" 在监管视角下可能被分类为系统组件 · 触发新的合规挑战
- 与 Stripe Tap to Pay 不是直接竞争 · 反而互补(Saga 消费端 + Stripe 商户端)

## Open questions

- 三星 / 小米 / 谷歌是否会 2027 前集成 Seed Vault 类原生 keystore?
- iOS 是否会因 antitrust 压力开放类似 dApp Store?
- Seeker 第二代是否会下探到 $200 价位 · 真正进入 mainstream?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|SMS vs Embedded Wallet · OS 层 vs App 层]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet 对 CEX 的去中介化]]
<!-- /wiki-links:managed -->

## Sources

- Solana Mobile docs

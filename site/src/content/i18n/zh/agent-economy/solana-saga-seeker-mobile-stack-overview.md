---
source: agent-economy/solana-saga-seeker-mobile-stack-overview
source_hash: 4ba3424dbb74e0ee
lang: zh
status: machine
fidelity: ok
title: "Solana Saga / Seeker · 移动原生钱包栈（SMS 总览）"
translated_at: 2026-05-30T17:31:02.644Z
---

# Solana Saga / Seeker · 移动原生钱包栈（SMS 总览）

## Wiki route

本条目归属于 [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]。请对照 [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] 了解同类 / 对比背景，对照 [[payments/INDEX|payments index]] 了解更广泛的系统 / 监管边界。

## Key facts

- Saga 于 2023 发布 · $1000 · 第一代实验性硬件 ^[extracted]
- Seeker 于 2025 量产 · $450 · 15 万台预约 ^[extracted]
- Seed Vault：Android 系统级 keystore · 基于 TEE · 私钥不出芯片 ^[extracted]
- Mobile Wallet Adapter（MWA）：开放协议 · 任意 Android 钱包 app 均可实现 ^[extracted]
- Solana dApp Store：规避 Google Play 的 in-app purchase 30% 手续费 ^[extracted]
- Seeker 内置 SKR token 经济 · 与 Helius RPC 深度集成 ^[extracted]
- MWA 已被 Solana 生态的所有主流钱包采用（Phantom / Solflare / Backpack） ^[extracted]

## Mechanism / How it works

主流的 embedded wallet（Privy / Coinbase CDP）解决了 dapp 内部的钱包 UX，但所有 web/PWA 钱包仍受制于 iOS Safari 沙箱 + Google Play / App Store 30% 手续费 + 浏览器 push 的限制。Solana 判断必须把钱包下沉到 OS 层（与 [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]] 形成 OS 层 vs App 层的路径分岔）。**Seed Vault** 在 Android 的系统服务级别提供基于 TEE 的 keystore · 私钥不出 SoC · 任意 dapp 经由 system intent 请求签名 · UI 由 OS 控制以防钓鱼 —— 等同于把硬件钱包嵌入手机。**MWA** 是开放协议 · dapp 通过 deep link / QR / Bluetooth 与钱包通信 · 无需在浏览器内注入 JS。**dApp Store** 预装于 Saga/Seeker · 开发者可直接收取 SOL/USDC 且无 platform fee（USDC settlement 见 [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]）。Seeker 还以 $450  这一大众价格 + Helius RPC 集成 + SKR token 经济进一步强化原生体验。

## Origin & evolution

2022 Solana 宣布 Saga 计划 · 同年 Anatoly Yakovenko 公布 SMS 概念。2023-Q1 Saga 发布 · 初期评价两极分化（crypto-native 好评 + mainstream 抱怨太贵）。2024 Saga 销量仅约 2 万台，但 SMS 协议被 Phantom / Backpack / Solflare 全面采用。2024-Q4 Seeker 发布 · $450  + 15 万台预约（从 Saga 约 1/10  的销量到 5 倍预约数的转换是重要证明点）。2025-Q2 Seeker 量产。2025-2026 Solana Labs 游说 Samsung / Xiaomi 进行 Seed Vault 集成 · 推动 SMS 标准化。Stripe + Bridge + Solana Pay 在商户侧深度集成 · Saga/Seeker 在消费者侧形成闭环。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|SMS vs Embedded Wallet · OS 層 vs App 層]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Solana Mobile docs
- Solana Mobile docs — https://docs.solanamobile.com/

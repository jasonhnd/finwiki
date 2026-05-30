---
source: agent-economy/solana-saga-seeker-mobile-stack-overview
source_hash: 4ba3424dbb74e0ee
lang: en
status: machine
fidelity: ok
title: "Solana Saga / Seeker · mobile-native wallet stack (SMS overview)"
translated_at: 2026-05-30T17:31:02.645Z
---

# Solana Saga / Seeker · mobile-native wallet stack (SMS overview)

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 層 vs App 層の経路争い]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Saga launched in 2023 · $1000 · first-generation experimental hardware ^[extracted]
- Seeker mass-produced in 2025 · $450 · 15 万 units pre-ordered ^[extracted]
- Seed Vault: Android system-level keystore · TEE-based · private key never leaves the chip ^[extracted]
- Mobile Wallet Adapter (MWA): open protocol · any Android wallet app can implement it ^[extracted]
- Solana dApp Store: avoids Google Play's in-app purchase 30% fee ^[extracted]
- Seeker has the SKR token economy built in · deeply integrated with Helius RPC ^[extracted]
- MWA has been adopted by all mainstream wallets in the Solana ecosystem (Phantom / Solflare / Backpack) ^[extracted]

## Mechanism / How it works

Mainstream embedded wallets (Privy / Coinbase CDP) solve the in-dapp wallet UX, but all web/PWA wallets are still bound by the iOS Safari sandbox + Google Play / App Store 30% fee + browser push limitations. Solana judged that the wallet must be brought down to the OS layer (forming a path divergence with [[fintech/embedded-wallet-fintech-disintermediation-overview|埋込ウォレットによる fintech 中抜き]] of OS layer vs App layer). **Seed Vault** provides a TEE-based keystore at the Android system-service level · the private key never leaves the SoC · any dapp can request signing via a system intent · the UI is controlled by the OS to prevent phishing — the same as embedding a hardware wallet into a smartphone. **MWA** is an open protocol · the dapp communicates with the wallet via deep link / QR / Bluetooth · there is no need to inject JS inside the browser. **The dApp Store** is preinstalled on Saga/Seeker · developers can receive SOL/USDC directly with no platform fee (for USDC settlement see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]). Seeker further reinforces the native experience with the mass-market price of $450  + Helius RPC integration + the SKR token economy.

## Origin & evolution

2022 Solana announced the Saga plan · in the same year Anatoly Yakovenko unveiled the SMS concept. 2023-Q1 Saga launched · early reception was polarized (crypto-native praised it + mainstream complained it was too expensive). 2024 Saga sales remained around 2 万 units, but the SMS protocol was fully adopted by Phantom / Backpack / Solflare. 2024-Q4 Seeker announced · $450  + 15 万 units pre-ordered (the conversion from Saga's ~1/10  in sales to 5 x in pre-orders is an important proof point). 2025-Q2 Seeker mass production. 2025-2026 Solana Labs lobbied Samsung / Xiaomi for Seed Vault integration · pushing SMS standardization. Stripe + Bridge + Solana Pay integrated deeply on the merchant side · Saga/Seeker formed a closed loop on the consumer side.

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

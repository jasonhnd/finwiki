---
source: agent-economy/solana-saga-vs-embedded-wallet-os-thesis
source_hash: eb06924b7dbb4e80
lang: en
status: machine
fidelity: ok
title: "Solana SMS vs Embedded Wallet · the OS-layer vs App-layer path contest"
translated_at: 2026-05-30T17:31:02.645Z
---

# Solana SMS vs Embedded Wallet · the OS-layer vs App-layer path contest

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI agent 経済のデフォルトウォレットポジショニング]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Representative of the Embedded Wallet path: Privy + Coinbase CDP · provides in-dapp UX ^[extracted]
- Representative of the SMS path: Solana Saga + Seeker · turns the wallet into a system service ^[extracted]
- Root cause constraining the Embedded Wallet: iOS sandbox + Google Play 30% fee + browser push limitations ^[extracted]
- SMS uses the 3  of Seed Vault + MWA + dApp Store to circumvent the above 3  major constraints ^[extracted]
- Coinbase Wallet is already MWA-compatible on Android (hybrid path) ^[extracted]
- Stripe Tap to Pay leans toward the SMS paradigm (NFC at the system layer · merchant side) ^[extracted]

## Mechanism / How it works

The Embedded Wallet hides the private key in iCloud / Google passkey sync to smooth the UX, but is bound to the OS provider (see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]]). SMS turns the wallet into an OS built-in service · any dapp invokes it via a system intent. The UI and signing prompt are controlled by the OS — phishing resistance is strong, but hardware preinstallation is required. The two paths are not mutually exclusive: Coinbase Wallet already runs "dual-wield" on Android — integrated into dapps as an embedded wallet while also implementing MWA so it can interoperate with Saga / Seeker. In the medium-to-long term: **the OS layer is the deeper moat** (system-vendor decision power) · **the App layer has the wider reach** (usable on any phone). If Samsung / Xiaomi / Google really integrate Seed Vault-style native keystores, embedded-wallet vendors will be forced to support MWA in order to remain compatible across the long tail of Android.

## Origin & evolution

2018-2022 early wallets were all in-app (MetaMask / Phantom). 2021-2023 embedded wallets rose (Magic Link / Privy / Web3Auth) · solving the onboarding pain point but still at the app layer. 2022 Solana proposed the SMS concept · betting on the OS layer. 2023 Saga launched, validating basic feasibility. 2024 Seeker was unveiled · showing the SMS paradigm had gained community support. 2025 Stripe acquired Privy + Bridge · building a closed loop of embedded wallet and stablecoin merchants ([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]); in parallel, Solana Mobile lobbied Samsung / Xiaomi for Seed Vault integration. 2026-05 AWS AgentCore by default chose Privy + Coinbase CDP — this is an important victory for the embedded path in AI agent scenarios — though SMS remains an independent battlefield in consumer-side mobile payments (for USDC as a universal payment currency see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana SMS 総覧]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Solana Mobile official documentation (Seed Vault / MWA / dApp Store · SMS path) — https://docs.solanamobile.com/
- Privy docs (representative of the embedded wallet path) — https://docs.privy.io/
- Coinbase Developer Platform (CDP Wallet · Android MWA hybrid) — https://docs.cdp.coinbase.com/
- Privy "Privy and Stripe: Bringing crypto to everyone" (Stripe acquisition · embedded × stablecoin closed loop) — https://privy.io/blog/announcing-our-acquisition-by-stripe

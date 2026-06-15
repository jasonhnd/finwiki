---
source: agent-economy/solana-saga-vs-embedded-wallet-os-thesis
source_hash: 549bc94ac2867356
lang: en
status: machine
fidelity: ok
title: "Solana SMS vs Embedded Wallet · OS-layer vs App-layer route contest"
translated_at: 2026-06-15T03:48:21.822Z
---

# Solana SMS vs Embedded Wallet · OS-layer vs App-layer route contest

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI agent 経済のデフォルトウォレットポジショニング]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Representative of the Embedded Wallet route: Privy + Coinbase CDP · provides in-dapp UX ^[extracted]
- Representative of the SMS route: Solana Saga + Seeker · turns the wallet into a system service ^[extracted]
- Root causes constraining Embedded Wallet: the iOS sandbox + Google Play 30% fees + browser push restrictions ^[extracted]
- SMS circumvents the above 3  major constraints via the 3  of Seed Vault + MWA + dApp Store ^[extracted]
- Coinbase Wallet is already MWA-compatible on Android (hybrid route) ^[extracted]
- Stripe Tap to Pay leans toward the SMS paradigm (NFC at the system layer · on the merchant side) ^[extracted]

## Competitive structure of OS-layer wallets and embedded wallets

The Embedded Wallet hides the private key in iCloud / Google passkey sync to smooth the UX, but it gets bound to the OS provider (see [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]]). SMS turns the wallet into an OS built-in service · any dapp invokes it via a system intent. The UI and signing prompt are controlled by the OS — phishing resistance is strong, but a hardware pre-install is required. The two routes are not mutually exclusive: Coinbase Wallet already runs a "dual-wielding" approach on Android — integrating into dapps as an embedded wallet while also implementing MWA so it can interoperate with Saga / Seeker. Over the medium-to-long term: **the OS layer has a deeper moat** (the system vendor's decision-making power) · **the App layer has broader reach** (usable on any smartphone). If Samsung / Xiaomi / Google genuinely integrate a Seed Vault–style native keystore, embedded wallet vendors will be forced to support MWA in order to maintain compatibility across the Android long tail.

## Origin & evolution

2018-2022  Early wallets were all in-app (MetaMask / Phantom). 2021-2023  embedded wallets rose (Magic Link / Privy / Web3Auth) · solving the onboarding pain point but still at the app layer. 2022  Solana proposed the SMS concept · betting on the OS layer. 2023  Saga launched, validating basic feasibility. 2024  Seeker was announced · showing that the SMS paradigm had gained community support. 2025  Stripe acquired Privy + Bridge, building a closed loop of embedded wallet and stablecoin merchants ([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]]); in sync, Solana Mobile lobbied Samsung / Xiaomi for Seed Vault integration. 2026-05  AWS AgentCore chose Privy + Coinbase CDP by default — this is a significant win for the embedded route in AI agent scenarios — but SMS remains an independent battleground in consumer-side mobile payments (USDC as a general-purpose payment currency, see [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]]).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana SMS 総覧]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
<!-- /wiki-links:managed -->

## Sources

- Solana Mobile official documentation (Seed Vault / MWA / dApp Store · SMS route) — https://docs.solanamobile.com/
- Privy docs (representative of the embedded wallet route) — https://docs.privy.io/
- Coinbase Developer Platform (CDP Wallet · Android MWA hybrid) — https://docs.cdp.coinbase.com/
- Privy "Privy and Stripe: Bringing crypto to everyone" (Stripe acquisition · embedded × stablecoin closed loop) — https://privy.io/blog/announcing-our-acquisition-by-stripe

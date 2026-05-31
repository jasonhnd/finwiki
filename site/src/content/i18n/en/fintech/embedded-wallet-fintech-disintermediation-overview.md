---
source: fintech/embedded-wallet-fintech-disintermediation-overview
source_hash: df438ae2cf5c9371
lang: en
status: machine
fidelity: ok
title: "Embedded Wallet-Driven Fintech Disintermediation · Four-Player Structure"
translated_at: 2026-05-31T06:16:15.684Z
---

# Embedded Wallet-Driven Fintech Disintermediation · Four-Player Structure

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Embedded wallets are the key carrier of reverse disintermediation in 2025-2026  fintech — the four dominant players **Privy (acquired by Stripe in 2025.06  for ~$1.1B) / Coinbase CDP / Magic / Web3Auth** convert fintech incumbents' existing customer bases into crypto entry points, enabling users to hold, transfer, and sign **without awareness**. The protocol foundation is the ERC-4337/7702/7715  stack.

## Key facts

- Stripe acquired Privy in 2025.06  for ~$1.1B · simultaneously acquired Bridge for $1.1B ^[extracted]
- Coinbase CDP launched 2024  · onchainkit + smart-wallet integrated · reaches Coinbase's 1 億M+ users ^[extracted]
- Magic founded 2018  · started with email magic links · later pivoted to MPC · $99/mo + usage-based pricing ^[extracted]
- Web3Auth (formerly Torus Labs): open-source + enterprise dual track · BNB Labs investment ^[extracted]
- Privy clients: OpenSea · Friend.tech · Hyperliquid + Stripe's 5M+ merchants as potential distribution ^[extracted]

## Mechanism / How it works

**Four-player differentiation comparison**:

| Dimension | Privy (Stripe) | Coinbase CDP | Magic | Web3Auth |
|---|---|---|---|---|
| Owner | Stripe (acquired 2025.06 ) | Coinbase (listed) | Independent (Tiger-backed) | Independent (BNB Labs-backed) |
| TSS | Shamir SSS 2/3  + server | MPC distributed + device | DKLs MPC 2/2  | tKey + OAuth reconstruction |
| API | React SDK 5 行 | CDP SDK · onchainkit | Magic Link SDK | Web3Auth Modal |
| Chains | EVM + Solana | EVM + Base + Solana | EVM multi-chain | EVM/Solana/Aptos |
| Distribution | Stripe 5M+ merchants | Coinbase 1 億M+ users | Independent · neutral | Independent · neutral |

**Five elements of "invisible to user" UX**:
- Onboarding: Google/Apple/Email single tap · TSS keys handled in backend · no seed phrase
- Signing: session key (7702/7715) with 1 -time authorisation · no popups within session
- Gas: Paymaster-sponsored (4337) · USDC payment or full sponsorship
- Recovery: distributed across multiple shares (device + cloud + server)
- Cross-chain: Hyperlane / CCIP coordinate in backend · user sees a single balance

**Protocol foundation**: [[systems/erc-4337-overview|ERC-4337]] (AA SCW) + [[systems/erc-7702-overview|ERC-7702]] (EOA → SCW temporary upgrade) + [[agent-economy/erc-7715-overview|ERC-7715]] (granular permissions) — combining the three yields = invisible UX + seamless upgrade + granular authorisation.

## Origin & evolution

2018-2022  = MetaMask-dominant era · users actively installed wallets · self-custody of seed phrases · crypto-native boundary clearly defined. 2023-2024  = Privy / CDP / Magic pivoted to B2B SaaS · customer base expanded from dApps to fintech. 2025.06  = Stripe simultaneously acquired Privy + Bridge · a symbolic moment of fintech formally embedding crypto as an entry point. 2025.07  = AWS Bedrock AgentCore Payments selected Privy as its default (see [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AgentCore]]) · embedded wallets elevated from a crypto tool to general-purpose payment infrastructure.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|組込み型ウォレット · Stripe 五層 Trojan horse]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
<!-- /wiki-links:managed -->

## Sources

- Stripe Privy / Bridge acquisition announcement (2025.06)

---
source: systems/erc-4337-embedded-wallet-adoption
source_hash: c2bfb19cf354fd53
lang: en
status: machine
fidelity: ok
title: "ERC-4337  embedded wallet adoption map · Privy/Coinbase/Alchemy/Safe"
translated_at: 2026-06-01T04:15:40.137Z
---

# ERC-4337  embedded wallet adoption map · Privy/Coinbase/Alchemy/Safe

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Privy: full-stack 4337  + Pimlico partnership · 6000+ apps · acquired by Stripe ^[extracted]
- Coinbase CDP Wallets: Base-native + smart wallet · millions of users ^[extracted]
- Alchemy Account Kit: Modular Account standard · DeFi + GameFi mainstream ^[extracted]
- ZeroDev / Pimlico: B2B layer for Bundler + Paymaster infrastructure ^[extracted]
- Safe{Core}: 4337  support + Modular Safe · mainstream institutional multi-sig ^[extracted]
- JPM Kinexys does not participate — Canton/DAML route · EVM AA not adopted ^[extracted]

## Mechanism / How it works

Layered structure of embedded wallet players:

| Player | 4337  implementation | Customer scale | Business model |
|---|---|---|---|
| **Privy** | Full-stack 4337  + Pimlico partnership | 6000+ apps | SaaS subscription + usage-based billing |
| **Coinbase CDP Wallets** | Base-native + smart wallet | Millions of users | Embedded into the Coinbase commercial ecosystem |
| **Alchemy Account Kit** | Modular Account standard | DeFi + GameFi mainstream | Infrastructure usage-based billing |
| **ZeroDev / Pimlico** | Bundler + Paymaster infrastructure | B2B infrastructure | Infrastructure fees |
| **Safe{Core}** | 4337  support + Modular Safe | Institutional multi-sig | Open source + integration support |

**Flow of the Stripe via Privy strategy**: In 2024 年, Stripe acquired [[agent-economy/privy-embedded-wallet-overview|Privy]] and integrated 4337  wallet functionality into Stripe Connect — merchants can directly issue self-custodial USDC wallets to their own end users even when those users do not understand blockchain. This becomes an important wedge for Stripe to enter the stablecoin payment domain (in contrast to [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]]).

**Coinbase's contradiction**: Coinbase operates a custody business (its core CEX business) while also promoting self-custodial (CDP / Base / Smart Wallet) — 4337  is exactly a tool for "cutting off the right hand with the left." The commercial logic is that even if some users flow into self-custody, Coinbase can earn revenue from Base gas + traffic fees (and those users do not flow to a competing CEX), preserving profit.

## Origin & evolution

In 2023-03 , after the 4337  mainnet went live, Privy / Coinbase CDP / Alchemy each released integrated products within 6-12  months. From 2024 to 2025 年, embedded wallets entered the "Web2  fintech connection" phase — Stripe / Robinhood / PayPal / Revolut are all exploring it to varying degrees. Stripe's acquisition of Privy in 2024 年 was a symbolic event · it showed that a Web2  payments major recognized 4337  as the foundation for next-generation wallet UX.

With 2026 年's v0.7  upgrade, embedded wallet implementation speed is accelerating further — the customer experience is moving even closer to the Web2  level. Combined with [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]], wallets need to serve both humans and AI agents, and 4337  is becoming a general-purpose infrastructure layer.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-7702-overview|ERC-7702(7702 vs 4337)]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Stripe-Privy acquisition announcement (2024)
- EIP-4337: Account Abstraction Using Alt Mempool — https://eips.ethereum.org/EIPS/eip-4337
- eth-infinitism account-abstraction (EntryPoint / Bundler reference impl) — https://github.com/eth-infinitism/account-abstraction
- Privy docs (full-stack 4337  embedded wallet) — https://docs.privy.io/
- Privy and Stripe: Bringing crypto to everyone (official acquisition announcement) — https://privy.io/blog/announcing-our-acquisition-by-stripe
- Coinbase Developer Platform (CDP Wallets / Smart Wallet) — https://docs.cdp.coinbase.com/
- Alchemy aa-sdk (Account Kit / Modular Account) — https://github.com/alchemyplatform/aa-sdk
- Safe{Core} SDK (4337 + Modular Safe) — https://github.com/safe-global/safe-core-sdk
- Pimlico permissionless.js (Bundler / Paymaster infrastructure) — https://github.com/pimlicolabs/permissionless.js
- Canton Network (JPM Kinexys' non-EVM route) — https://www.canton.network/

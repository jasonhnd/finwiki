---
source: agent-economy/coinbase-cdp-developer-platform
source_hash: e278ca407d0779b5
lang: en
status: machine
fidelity: ok
title: "Coinbase CDP · developer platform · AI agent on-chain wallet infrastructure"
translated_at: 2026-05-30T17:04:08.786Z
---

# Coinbase CDP · developer platform · AI agent on-chain wallet infrastructure

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocol overview · seven-protocol survey]]. Read it against [[agent-economy/x402-http-payment-overview|x402 · AI agent payment protocol that revived HTTP 402]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- Registered developers ~**150K** · integrated dApps ~**8K** · monthly active embedded wallets ~**5M** (2026-Q1) ^[extracted]
- Default chain is Base · supports 8  chains (Ethereum, Base, Solana, Polygon, Arbitrum, Optimism, Avalanche, BNB) ^[extracted]
- Module composition: CDP Wallets / Onramp / Staking / Paymaster (ERC-4337) / Smart Wallets / **AgentKit** (2025-04) ^[extracted]
- 2025-12  AWS Bedrock AgentCore integrates CDP + Privy as default wallet providers ^[extracted]
- Default-bound to USDC + Base · gas-free transfer · direct onramp connection ^[extracted]
- Privy was acquired by Stripe in 2025-Q3  → CDP's main competitor is also one of AgentCore's dual providers ^[extracted]

## Mechanism / How it works

CDP compresses "Web3 integration" from "months of development + self-built infrastructure" into "minutes of API integration". With a single SDK line, developers can embed an onchain wallet inside their own product, combining [[fintech/embedded-wallet-fintech-disintermediation-overview|the MPC embedded-wallet model]] + email/social login + [[systems/erc-4337-overview|ERC-4337]] smart-contract wallets + fiat onramp + [[fintech/usd-stablecoin-interchange|USDC]] gas-free transfer into one stack. AgentKit (released 2025-04) exposes these capabilities specifically for AI agent frameworks (LangChain/AutoGen, etc.), enabling an AI agent to **autonomously create a wallet → send and receive USDC → call DeFi contracts**. After the AgentCore integration, Bedrock agents on AWS obtain wallet functionality by default via CDP or Privy — **an estimated 50%+ of AI agent on-chain payment traffic is expected to pass through CDP/Privy**.

## Origin & evolution

CDP's predecessor was Coinbase Cloud (B2B infrastructure) + Coinbase Wallet API · repackaged as CDP in 2023-Q4 . 2024-Q3  Smart Wallets launched (Coinbase's in-house ERC-4337, deeply integrated with the Base Paymaster). 2025-04  released **AgentKit** to provide dedicated services for AI agents. 2025-Q3  Stripe acquired Privy · CDP and Privy were established as the two embedded-wallet leaders. **2025-12  AWS Bedrock AgentCore officially integrated CDP + Privy** is CDP's biggest strategic milestone — lowering the entrance of the AI agent on-chain economy to AWS's default layer. 2026-Q1  the CDP × Base × USDC × Onramp closed loop was completed · **realizing a "zero-slippage, zero-gas" user experience**.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocol overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven layers of AI Agent payment protocols]]
- [[agent-economy/ap2-overview|AP2 Protocol overview]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC wrapped BTC]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken host-protocol flywheel]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Developer Platform (CDP) docs — https://docs.cdp.coinbase.com/

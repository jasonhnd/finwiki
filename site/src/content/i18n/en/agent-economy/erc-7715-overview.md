---
source: agent-economy/erc-7715-overview
source_hash: ef12fb5689068aa2
lang: en
status: machine
fidelity: ok
title: "ERC-7715  overview · Wallet Permissions and AI Agent auto-payment"
translated_at: 2026-05-30T17:04:08.795Z
---

# ERC-7715  overview · Wallet Permissions and AI Agent auto-payment

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- A 2024  proposal · implemented in 2025  major wallets ^[extracted]
- Core RPC: `wallet_grantPermissions` ^[extracted]
- Permission types are extensible: native-token-recurring-allowance / erc20-token-transfer / contract-call / nft-transfer ^[extracted]
- The signer can be an EOA / passkey / AI agent service key ^[extracted]
- Analogy to OAuth 2.0 : not "handing the app your password" but "handing the app a scope-limited access token" ^[extracted]

## Mechanism / How it works

**Core RPC**: `wallet_grantPermissions`

```json
{
  "chainId": "0x2105",
  "expiry": 1735689600,
  "signer": { "type": "key", "data": { "id": "0xagent..." } },
  "permissions": [
    {
      "type": "native-token-recurring-allowance",
      "data": { "amount": "0x...", "period": 86400 }
    },
    {
      "type": "erc20-token-transfer",
      "data": { "token": "0xUSDC...", "limit": "10000000", "to": "0xmerchant..." }
    }
  ]
}
```

**Permission types (extensible)**:
- `native-token-recurring-allowance` — periodic ETH/SOL limit
- `erc20-token-transfer` — restricted token + limit + recipient
- `contract-call` — restricted contract + selector
- `nft-transfer` — restricted collection + tokenId range
- Any dapp can define a custom permission type

**Coordination with 4337 / 7702 **:
- **[[systems/erc-4337-overview|ERC-4337(SCW)]]**: the permission is stored as a module configuration inside the SCW · validated by [[systems/erc-4337-userop-bundler-flow|EntryPoint / bundler フロー]] at UserOp execution
- **[[systems/erc-7702-overview|ERC-7702(EOA)]]**: the permission is validated by the contract logic that the EOA temporarily bound · EOA users can also use it (for the difference, see [[systems/erc-7702-vs-erc-4337|7702 vs 4337 比較]])
- **EOA without AA**: not usable · this is the primary force by which 7715  pushes "the necessity of AA" into the mainstream

**Signer flexibility**: the signer can be another EOA, a passkey, or an AI agent's service key — any entity capable of signing can be chosen. This means **an AI agent having a "scope-limited child account"** is supported at the protocol level.

## Origin & evolution

The origin of the 7715  draft lies in coordination discussions between the MetaMask Snaps team and the Coinbase Smart Wallet team in 2024 年 — both had independently implemented session keys, but the formats could not interoperate. Referencing the OAuth 2.0  scope model · it was defined as a unified permission-request protocol.

It was implemented successively on MetaMask, Coinbase Smart Wallet, and Safe in 2025 年. Around the same time it combined with ERC-4337 / 7702  to form the complete "AA + Permissions" stack, and alongside AP2 / x402  it is regarded as important infrastructure for the AI agent economy.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[systems/erc-4337-overview|ERC-4337(AA 基礎)]]
- [[systems/erc-7702-overview|ERC-7702(EOA アップグレード)]]
- [[agent-economy/ap2-overview|AP2(agent payment)]]
<!-- /wiki-links:managed -->

## Sources

- ERC-7715「Request Permissions from Wallets」(draft) — https://eips.ethereum.org/EIPS/eip-7715

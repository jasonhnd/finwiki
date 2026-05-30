---
source: agent-economy/erc-7715-overview
source_hash: ef12fb5689068aa2
lang: zh
status: machine
fidelity: ok
title: "ERC-7715 概观 · Wallet Permissions 与 AI Agent 自动支付"
translated_at: 2026-05-30T17:04:08.793Z
---

# ERC-7715 概观 · Wallet Permissions 与 AI Agent 自动支付

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- 2024 提案 · 2025 主要钱包已实现 ^[extracted]
- 核心 RPC:`wallet_grantPermissions` ^[extracted]
- Permission 种类可扩展:native-token-recurring-allowance / erc20-token-transfer / contract-call / nft-transfer ^[extracted]
- Signer 可选 EOA / passkey / AI agent 服务密钥 ^[extracted]
- 与 OAuth 2.0 的类比:不是「把密码交给 app」,而是「把限定 scope 的 access token 交给 app」 ^[extracted]

## Mechanism / How it works

**核心 RPC**:`wallet_grantPermissions`

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

**Permission 种类(可扩展)**:
- `native-token-recurring-allowance` — 周期性的 ETH/SOL 限额
- `erc20-token-transfer` — 限定 token + 限额 + 收款方
- `contract-call` — 限定合约 + selector
- `nft-transfer` — 限定 collection + tokenId range
- 任意 dapp 可定义自定义 permission 种类

**与 4337 / 7702 的协调**:
- **[[systems/erc-4337-overview|ERC-4337(SCW)]]**:permission 作为 SCW 内的 module 配置保存 · UserOp 执行时由 [[systems/erc-4337-userop-bundler-flow|EntryPoint / bundler フロー]] 验证
- **[[systems/erc-7702-overview|ERC-7702(EOA)]]**:permission 由 EOA 临时绑定的合约逻辑验证 · EOA 用户也可使用(差异参见 [[systems/erc-7702-vs-erc-4337|7702 vs 4337 比較]])
- **无 AA 的 EOA**:不可用 · 这正是 7715 把「AA 的必要性」推向主流的主要力量

**Signer 的灵活性**:Signer 可以是另一个 EOA、passkey、AI agent 的服务密钥 — 任何具备签名能力的实体均可选。由此 **AI agent 拥有一个「被限定授权的子账户」** 在协议层得到支持。

## Origin & evolution

7715 草案的起源在于 2024 年的 MetaMask Snaps 团队与 Coinbase Smart Wallet 团队的协调讨论 — 双方各自独立实现了 session key,但格式无法互操作。参考 OAuth 2.0 scope 模型 · 被定义为一个统一的权限申请协议。

于 2025 年在 MetaMask、Coinbase Smart Wallet、Safe 上陆续实现。同期与 ERC-4337 / 7702 组合,形成「AA + Permissions」的完整 stack,并与 AP2 / x402 并列,被视为 AI agent 经济的重要基础设施。

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

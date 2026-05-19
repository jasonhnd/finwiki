---
title: ERC-7715 概览 · Wallet Permissions 与 AI Agent 自动支付
aliases: [erc-7715-overview, wallet-permissions, grant-permissions]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, wallet, permissions, ai-agent, erc-7715]
sources: []
status: candidate
---

# ERC-7715 概览 · Wallet Permissions 与 AI Agent 自动支付

> [!info] TL;DR
> ERC-7715 是 2024 提出、2025 在 MetaMask / Coinbase Smart Wallet / Safe 等主流钱包实装的 **wallet permissions standard**——dapp 可向 wallet 申请 **受限权限**(如"每天最多花 $10 USDC · 只能转给地址 X · 有效期 7 天")· wallet 一次性授权后 · dapp/agent 可在 scope 内自动执行 · 无需每次签名。**AI agent 自主支付的关键基础设施**。

## Key facts

- 2024 提出 · 2025 主流钱包实装 ^[extracted]
- 核心 RPC:`wallet_grantPermissions` ^[extracted]
- Permission 类型可扩展:native-token-recurring-allowance / erc20-token-transfer / contract-call / nft-transfer ^[extracted]
- Signer 可以是 EOA / passkey / AI agent 服务密钥 ^[extracted]
- 类比 OAuth 2.0:不是"把密码给应用" · 而是"给应用有限 scope 的 access token" ^[extracted]

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

**Permission 类型(可扩展)**:
- `native-token-recurring-allowance` — 周期性 ETH/SOL 限额
- `erc20-token-transfer` — 限定 token + 限额 + 收款方
- `contract-call` — 限定合约 + selector
- `nft-transfer` — 限定 collection + tokenId range
- 任意 dapp 可定义自定义 permission type

**与 4337 / 7702 的协同**:
- **ERC-4337(SCW)**:permission 存为 SCW 内的 module 配置 · UserOp 执行时由 EntryPoint 验证
- **ERC-7702(EOA)**:permission 通过 EOA 临时绑定的合约逻辑校验 · EOA 用户也能享有
- **无 AA 的 EOA**:无法使用 · 这是 7715 把"AA 必要性"推到主流的关键力量

**Signer 灵活性**:Signer 可以是另一个 EOA、passkey、AI agent 的服务密钥——任何具有签名能力的实体。这让 **AI agent 拥有"有限授权的子账户"** 成为协议级支持。

## Origin & evolution

7715 草案起源于 2024 年 MetaMask Snaps 团队与 Coinbase Smart Wallet 团队的协调讨论——双方都在各自实现 session key 但格式不互通。借鉴 OAuth 2.0 scope 模型 · 定义统一权限申请协议。

2025 年陆续在 MetaMask、Coinbase Smart Wallet、Safe 实装。同期与 ERC-4337 / 7702 形成"AA + Permissions"完整栈,与 AP2 / x402 一起被视为 AI agent 经济关键基础设施。

## Counterpoints

**Permission 类型枚举尚未完全标准化**——各钱包实现略有差异 · 跨钱包 portability 仍是挑战。撤销机制需要链上交易 · 有 gas 成本(7702 EOA 用户尤其敏感)。

**AI agent 在 scope 内的错误决策**:即使 scope 限制金额和收款方 · agent 仍可能因 prompt injection 在合法 scope 内做出错误支付。scope 设计需谨慎 · 例如"每天 $10 给 vercel.com API"比"每天 $10 给任意 merchant"安全得多。

## Open questions

- 跨钱包 permission portability 标准化时间表?
- 撤销 gas 成本的优化路径(例如基于 SCW module 的 off-chain 撤销)?
- AI agent 错误决策的责任和保险模型?
- 与 AP2 mandate 的语义层映射?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[systems/erc-4337-overview|ERC-4337(AA 基础)]]
- [[systems/erc-7702-overview|ERC-7702(EOA 升级)]]
- [[agent-economy/ap2-overview|AP2(agent payment)]]
<!-- /wiki-links:managed -->

## Sources

- ERC-7715 EIP draft

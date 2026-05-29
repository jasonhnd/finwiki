---
title: ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済
aliases: [erc-7715-overview, wallet-permissions, grant-permissions]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, wallet, permissions, ai-agent, erc-7715]
sources:
  - https://eips.ethereum.org/EIPS/eip-7715
status: candidate
---

# ERC-7715 概観 · Wallet Permissions と AI Agent 自動決済

## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- 2024 提案 · 2025 主要ウォレットで実装 ^[extracted]
- コア RPC:`wallet_grantPermissions` ^[extracted]
- Permission 種別は拡張可能:native-token-recurring-allowance / erc20-token-transfer / contract-call / nft-transfer ^[extracted]
- Signer は EOA / passkey / AI agent サービス鍵を選択可能 ^[extracted]
- OAuth 2.0 との類比:「パスワードをアプリに渡す」のではなく「限定 scope の access token をアプリに渡す」 ^[extracted]

## Mechanism / How it works

**コア RPC**:`wallet_grantPermissions`

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

**Permission 種別(拡張可能)**:
- `native-token-recurring-allowance` — 周期的な ETH/SOL 限度額
- `erc20-token-transfer` — 限定 token + 限度額 + 送付先
- `contract-call` — 限定コントラクト + selector
- `nft-transfer` — 限定 collection + tokenId range
- 任意の dapp がカスタム permission 種別を定義可能

**4337 / 7702 との協調**:
- **[[systems/erc-4337-overview|ERC-4337(SCW)]]**:permission は SCW 内の module 設定として保存 · UserOp 実行時に [[systems/erc-4337-userop-bundler-flow|EntryPoint / bundler フロー]] が検証する
- **[[systems/erc-7702-overview|ERC-7702(EOA)]]**:permission は EOA が一時的にバインドしたコントラクトロジックで検証 · EOA ユーザーも利用可能(差分は [[systems/erc-7702-vs-erc-4337|7702 vs 4337 比較]] 参照)
- **AA なしの EOA**:利用不可 · これが 7715 が「AA の必要性」を主流に押し上げる主たる力である

**Signer の柔軟性**:Signer は別の EOA、passkey、AI agent のサービス鍵 — 署名能力を持つ任意のエンティティを選べる。これにより **AI agent が「限定的に認可された子アカウント」を持つ** ことがプロトコルレベルでサポートされる。

## Origin & evolution

7715 ドラフトの起源は 2024 年の MetaMask Snaps チームと Coinbase Smart Wallet チームの調整議論にある — 双方とも独自に session key を実装していたが、フォーマットが相互運用できなかった。OAuth 2.0 scope モデルを参考に · 統一的な権限申請プロトコルとして定義された。

2025 年に MetaMask、Coinbase Smart Wallet、Safe で順次実装。同時期に ERC-4337 / 7702 と組み合わさり「AA + Permissions」の完全スタックを形成し、AP2 / x402 と並んで AI agent 経済の重要インフラと見なされている。

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

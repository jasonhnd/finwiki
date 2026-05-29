---
title: ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード
aliases: [erc-7702-overview, eoa-to-scw-overview, set-code-tx]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, erc-7702, ethereum, pectra, vitalik]
sources:
  - https://eips.ethereum.org/EIPS/eip-7702
status: candidate
---

# ERC-7702 概観 · EOA が一時的に SCW 機能を獲得する Pectra アップグレード

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Pectra 2025-05 メインネット有効化(7702 + 7251 validator + 2935 blockhash 等を含む) ^[extracted]
- Vitalik は 2024-05 に EIP-3074 を破棄した後、自ら 7702 を起草 ^[extracted]
- SET_CODE_TX(EIP type 0x04)を新設 ^[extracted]
- ETH 保有者の 90% は依然として EOA を使用(MetaMask / Rabby / Trust Wallet)· これが 7702 のターゲット ^[extracted]
- 2026-Q1-Q2:MetaMask / Rabby / Coinbase Wallet がデフォルトでサポート ^[extracted]

## Mechanism / How it works

**コア課題**:ERC-4337 はユーザーに新しいアドレス(SCW アドレス ≠ EOA アドレス)への移行を要求する。オンチェーン履歴、ENS、NFT、DeFi ポジションをすでに持つ EOA ユーザーにとって、移行コストは受け入れ難い。

**Vitalik が 7702 を推進する核心的理由**:
- ETH 保有者の 90% は依然として EOA を使用
- 4337 は 2023-2025 の 2 年間で SCW 浸透率 < 5% —— 「新規 SCW 作成」経路では浸透が遅すぎることを証明
- **EOA を直接アップグレードする経路** が必要 · 全 EOA に一夜にして SCW 機能を獲得させる

**メカニズム**:
- `SET_CODE_TX`(EIP type 0x04)を新設
- ユーザー(EOA)が署名により、当該 tx の期間中に自分のアドレスに付与する contract code を授権
- その tx 完了後 · code は保持(persistent delegation)または削除可能
- 永続化モードでは · EOA の挙動は完全に SCW と等価になるが · アドレスは変わらない

**典型的なアプリケーションフロー**:
1. EOA ユーザーが `delegationDesignator`(SCW 実装契約 · 例えば Safe / Kernel への参照)に署名
2. ユーザー(または Bundler による gas 代行支払い)が `SET_CODE_TX` を発行
3. EOA アドレスは以降 SCW ロジックで実行 —— batch、sponsor、session key 等が可能
4. ユーザーはいつでも署名により delegation を削除し · 純粋な EOA 状態に戻れる

## Origin & evolution

2017-2024 年の間 · Ethereum AA への取り組みは何度も試行された:EIP-86(2017 失敗)→ EIP-2938(2020 失敗)→ EIP-3074(2022 ほぼ実現しかけたが署名 replay 問題あり)→ ERC-4337(2023-03 アプリケーション層で実現)→ EIP-7702(2024-05 Vitalik 起草)。

**ERC-3074 との重要な差異**:
- 3074 は `AUTH/AUTHCALL` opcode を使用 · invoker contract の仲介が必要 · UX が複雑 + 署名 replay リスクが高い
- 7702 は tx 層で直接 set code · **より原生的な SCW 体験に近い** · かつ 4337 と EntryPoint インフラを共有

**タイムライン**:
- 2024-05:Vitalik が 3074 を破棄 · 7702 を起草
- 2025-05:Pectra メインネット有効化(7702 + 7251 + 2935 等)
- 2026-Q1-Q2:MetaMask / Rabby / Coinbase Wallet がデフォルトでサポート
- 2026-H2:Fusaka アップグレードで 7702 経済モデルをさらに最適化

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[agent-economy/erc-7715-overview|ERC-7715(7702 EOA も接続可能)]]
<!-- /wiki-links:managed -->

## Sources

- EIP-7702「Set Code for EOAs」 — https://eips.ethereum.org/EIPS/eip-7702

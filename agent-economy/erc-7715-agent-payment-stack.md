---
title: ERC-7715 と agent payment stack · x402 + AP2 + 4337/7702 協調
aliases: [erc-7715-stack, agent-payment-stack, x402-ap2-7715-4337]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, protocol, agent-payment, erc-7715, x402, ap2]
sources:
  - https://eips.ethereum.org/EIPS/eip-7715
status: candidate
---

# ERC-7715 と agent payment stack · x402 + AP2 + 4337/7702 協調


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- agent payment stack の4層構造 ^[inferred]
- x402 は HTTP 層の決済ハンドシェイクを担う(Cloudflare/Coinbase/AWS が推進) ^[extracted]
- AP2 / MPP / ACP は agent 間の交渉メタデータを担う ^[extracted]
- ERC-7715 は wallet から agent への認可を担う ^[extracted]
- ERC-4337 / 7702 はプログラマブル wallet の基盤を提供する ^[extracted]
- 主要プレイヤー:MetaMask Snaps / Coinbase Smart Wallet / Safe / Privy / Pimlico / ZeroDev ^[extracted]

## Mechanism / How it works

**4層 stack アーキテクチャ**:

| 層 | プロトコル | 役割 |
|---|---|---|
| **HTTP** | x402 | API が 402 + 決済指示を返却 · client が決済完了後リトライ |
| **Agent 交渉** | AP2 / MPP / ACP / A2A | mandate / intent メタデータ標準 |
| **Wallet 認可** | ERC-7715 | agent に scoped permission を付与 · 一度の認可で複数回利用 |
| **Wallet 基盤** | ERC-4337 / 7702 | プログラマブル wallet([[systems/erc-4337-overview|ERC-4337]] と [[systems/erc-7702-overview|ERC-7702]] 参照) · module / delegation をサポート |

**典型的な agent 自動決済フロー**:
1. ユーザーが agent に「毎日 $5 まで vercel.com API に支払ってよい」と認可(7715 scoped permission)
2. agent が Vercel API を呼び出す · Vercel が HTTP 402 + USDC 決済指示を返却(x402)
3. agent が wallet から $0.50 USDC を自動で取り出し決済(7715 scope 内 · ユーザー署名不要)
4. Vercel が決済を検証し · API レスポンスを返却
5. ユーザーは wallet UI で当日累計 $X.XX が Vercel に支払われたことを確認 · permission はいつでも撤回可能

**Stripe Privy 統合のポテンシャル**:Stripe は Privy(買収済み)を通じて既に [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット]] に接続している。Stripe + Privy + 7715 + AP2 が統合されれば · **任意の SaaS が agent からの自動決済を受け取れる** · クレジットカード番号も OAuth も購読管理も不要 — SaaS の課金層を Stripe Billing(カード基盤)からオンチェーン permission(アドレス + scope 基盤)へ移行させる。詳細は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] を参照。

**主要プレイヤーの分業**:
- **MetaMask Snaps**:2025 に 7715 実装 · EOA + 7702 デュアルモード
- **Coinbase Smart Wallet**:ネイティブサポート · Coinbase Agent SDK と統合
- **Safe{Core}**:Module 形式で実装 · 機関 multi-sig + サブ権限
- **Privy**:7715 + AP2 を統合 · Stripe agent 決済シナリオ
- **Pimlico / ZeroDev**:7715 ↔ 4337 bundler ミドルウェアを提供
- **Tempo / Arc**:潜在的採用者 — agent 経済が中核の物語
- **JPM Kinexys**:不参加 — permissioned ネットワーク · 権限モデルは独自標準

## Origin & evolution

agent payment stack の概念は 2024-2025 にかけて徐々に成立した — 初期は各プロトコル(x402 / AP2 / 7715)を別チームが推進していたが、2025 後半から意識的な協調が始まった。Coinbase Smart Wallet が 2025 に披露した「ネイティブ agent 決済」デモは決定的な実証イベントであり、4層 stack のエンドツーエンドでの稼働を示した。

Stripe による Privy 買収(2024)は、Web2 決済巨頭がオンチェーン permission モデルに明示的に賭けた初の事例である。2026-2027 にかけて最初の production 級 agent SaaS 統合事例が登場すると見込まれる。

## Counterpoints

**プロトコル断片化リスク**:x402 / AP2 / MPP / ACP / A2A の5種類の agent 交渉プロトコルが並存し · さらに 7715 / 4337 / 7702 の wallet 層が加わり · マーチャントの統合コストが爆発する。事実上の標準が形成されなければ · agent payment はデモ段階に留まる可能性がある。

**Stripe Billing 代替仮説**:技術的には 7715 + AP2 が Stripe Billing を代替し得るが · Stripe Billing の非技術的価値(クレカ紛争解決 / chargeback / 不正対策 / 財務 SaaS 統合)はオンチェーン permission モデルでまだ完全に再現されていない。短期的に大規模な移行は起きない。

## Open questions

- 5種類の agent 交渉プロトコル(x402/AP2/MPP/ACP/A2A)の事実上の標準はいつ登場するか?
- Stripe + Privy + 7715 の具体的なプロダクト形態は?
- オンチェーン permission は chargeback と同等の保証を提供できるか?
- クロスチェーン 7715 permission(agent が複数チェーン上で支出する)の標準化は?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-overview|ERC-7715 Overview]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- Coinbase Smart Wallet agent payment demo(2025)
- ERC-7715 (Request Permissions from Wallets) — https://eips.ethereum.org/EIPS/eip-7715

---
source: agent-economy/erc-7715-agent-payment-stack
source_hash: 0dfd9671152be585
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ERC-7715 と agent payment stack · x402 + AP2 + 4337/7702 協調"
translated_at: 2026-07-28T22:03:26.809Z
---

# ERC-7715 と agent payment stack · x402 + AP2 + 4337/7702 協調

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下にある。ピア／対照の文脈については [[payments/INDEX|payments index]] と、より広範なシステム／規制境界については [[systems/INDEX|systems index]] と照らし合わせて読むこと。

## 主要な事実

- x402 は HTTP 層の決済ハンドシェイクを担う(Cloudflare/Coinbase/AWS が推進) ^[extracted]
- AP2 / MPP / ACP は agent 間の交渉メタデータを担う ^[extracted]
- ERC-7715 は ウォレット から agent への認可を担う ^[extracted]
- ERC-4337 / 7702 はプログラマブルウォレット の基盤を提供する ^[extracted]
- 主要プレイヤー:MetaMask Snaps / Coinbase Smart ウォレット / Safe / Privy / Pimlico / ZeroDev ^[extracted]

## 仕組み／動作の仕方

**4層 stack アーキテクチャ**:

| 層 | 公開仕様 | 役割 | 実装境界 |
|---|---|---|---|
| **HTTP payment negotiation** | x402 V2 | `402` と `PAYMENT-REQUIRED` / `PAYMENT-SIGNATURE` / `PAYMENT-RESPONSE` で支払条件と結果を交換 | scheme、network、asset、server / facilitator responsibility を選択する |
| **Commerce authorization** | AP2 | Intent / Cart Mandate で user intent と purchase authorization の証拠を連結 | payment adapter と credential trust は別途選択する |
| **Wallet execution permission** | ERC-7715 **Draft** | `wallet_requestExecutionPermissions` で typed permission / rules を要求し、query / revoke する | permission type と enforcement は wallet / delegation implementation 依存 |
| **Account execution** | ERC-4337 / EIP-7702 | smart account の `UserOperation` または EOA code delegation で programmable execution を実現 | EntryPoint / account modules と delegate bytecode は異なる security boundary |
| **Settlement** | 選択した x402 scheme / payment adapter | 実際の asset transfer または batch redemption を行う | ERC-7715 は settlement rail ではなく、資産・chain を固定しない |

Sources: ^[https://docs.x402.org/core-concepts/http-402] ^[https://github.com/google-agentic-commerce/AP2] ^[https://eips.ethereum.org/EIPS/eip-7715] ^[https://eips.ethereum.org/EIPS/eip-4337] ^[https://eips.ethereum.org/EIPS/eip-7702]


**典型的な agent 自動決済フロー**:
1. ユーザーが agent に「毎日 $5 まで vercel.com API に支払ってよい」と認可(7715 scoped permission)
2. agent が Vercel API を呼び出す · Vercel が HTTP 402 + USDC 決済指示を返却(x402)
3. agent が ウォレット から $0.50 USDC を自動で取り出し決済(7715 scope 内 · ユーザー署名不要)
4. Vercel が決済を検証し · API レスポンスを返却
5. ユーザーは ウォレット UI で当日累計 $X.XX が Vercel に支払われたことを確認 · permission はいつでも撤回可能

**Stripe Privy 統合のポテンシャル**:Stripe は Privy(買収済み)を通じて既に [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット]] に接続している。Stripe + Privy + 7715 + AP2 が統合されれば · **任意の SaaS が agent からの自動決済を受け取れる** · クレジットカード番号も OAuth も購読管理も不要 — SaaS の課金層を Stripe Billing(カード基盤)からオンチェーン permission(アドレス + scope 基盤)へ移行させる。詳細は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] を参照。

**主要プレイヤーの分業**:
- **MetaMask Snaps**:2025 に 7715 実装 · EOA + 7702 デュアルモード
- **Coinbase Smart ウォレット**:ネイティブサポート · Coinbase Agent SDK と統合
- **Safe{Core}**:Module 形式で実装 · 機関 multi-sig + サブ権限
- **Privy**:7715 + AP2 を統合 · Stripe agent 決済シナリオ
- **Pimlico / ZeroDev**:7715 ↔ 4337 bundler ミドルウェアを提供
- **Tempo / Arc**:潜在的採用者 — agent 経済が中核の物語
- **JPM Kinexys**:不参加 — permissioned ネットワーク · 権限モデルは独自標準

## 起源と進化

agent payment stack の概念は 2024-2025 にかけて徐々に成立した — 初期は各プロトコル(x402 / AP2 / 7715)を別チームが推進していたが、2025 後半から意識的な協調が始まった。Coinbase Smart ウォレット が 2025 に披露した「ネイティブ agent 決済」デモは決定的な実証イベントであり、4層 stack のエンドツーエンドでの稼働を示した。

Stripe による Privy 買収(2024)は、Web2 決済巨頭がオンチェーン permission モデルに明示的に賭けた初の事例である。2026-2027 にかけて最初の production 級 agent SaaS 統合事例が登場すると見込まれる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/erc-7715-overview|ERC-7715 Overview]]
- [[agent-economy/ap2-overview|AP2 Overview]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## 出典

- Coinbase Smart Wallet agent payment demo(2025)
- ERC-7715 (Request Permissions from Wallets) — https://eips.ethereum.org/EIPS/eip-7715

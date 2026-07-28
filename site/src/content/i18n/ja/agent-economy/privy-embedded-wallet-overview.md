---
source: agent-economy/privy-embedded-wallet-overview
source_hash: 2cc86328a9020b3e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)"
translated_at: 2026-07-28T18:19:40Z
---

# Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)

## ウィキ上の位置づけ

本エントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の配下に位置する。同位・対照の文脈としては [[agent-economy/embedded-wallet-network-effects-moat|埋込ウォレットのネットワーク効果 · ウォレット本体ではなくインテグレーターの堀]] と、より広いシステム・規制境界としては [[payments/INDEX|payments index]] と併せて読むこと。

## 主要事実

- 2025-06-11 の公式発表は Henri Stern と Asta Li の連名で、Privy を「3 年余り前」に始めたと説明 ^[Source: https://privy.io/blog/announcing-our-acquisition-by-stripe.]
- 同日、Stripe による買収を発表。発表時点では通常の完了条件付きで、数週間以内の完了見込みとされた ^[Source: https://privy.io/blog/announcing-our-acquisition-by-stripe.]
- 買収発表時の公式開示は 75M+ accounts / 1,000+ developer teams。取引価格や 110M wallets という数値は同発表では開示されていない ^[Source: https://privy.io/blog/announcing-our-acquisition-by-stripe.]
- Self-custodial モデル:MPC + TEE シャーディング · 秘密鍵は Privy 単一ポイントに存在しない ^[extracted]
- ユーザー onboarding ~10 秒 vs MetaMask 5-10 分 ^[extracted]
- 買収前のコア顧客:OpenSea / Hyperliquid / Farcaster / Friend.tech / Toku / Zora ^[extracted]
- 2026 Sessions で Multichain balances API を発表 ^[extracted]

## 仕組み / 動作原理

ユーザーが email/Google でログインすると、Privy SDK(30 行のコード)がフロントエンドで MPC シャーディング鍵生成を実行する。**1 シャードはユーザーのデバイス**(Passkey / WebAuthn / Secure Enclave ベース)+ **1 シャードは Privy の TEE**(Trusted Execution Environment · AWS Nitro Enclaves あるいは同等)に保管される。署名時には 2 シャードが協調して有効な署名を生成するが、Privy だけでは署名できず、ユーザーも単独では署名できない — 「self-custodial でありながら管理不要」という折衷を実現する(同モデルは [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]] 参照)。Multichain balances API では 1 回の API 呼び出しで Ethereum / Solana / Tempo / Polygon 等のマルチチェーン残高を取得でき · 開発者がマルチチェーン集約を個別実装する必要をなくしている(下層は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] に依存)。体験全体は完全に Web2:ユーザーは seed phrase を見ず · MetaMask をインストールせず · ネットワーク切替も不要。規模については、2025-06-11 の公式開示で確認できる 75M+ accounts を基準とし、一次資料で確認できない 110M wallets という推計は採用しない。

## 起源と進化

Privy の 2025-06-11 公式発表は、Henri Stern と Asta Li が同社を「3 年余り前」に始め、発表時点で 75M+ accounts / 1,000+ developer teams を支えていたと説明した。同発表は Stripe による買収を通常の完了条件付き取引として公表し、Privy が独立した product として運営を続ける方針を示した。その後の Stripe / Privy 公開資料は Privy を Stripe company として扱い、AWS は 2026-05-07 に AgentCore Payments preview で Coinbase CDP と Stripe (Privy) の wallet connector を正式に列挙した。これらの一次資料は取引価格、110M wallets、または推定企業価値を開示していないため、本項ではそれらを確定値として扱わない。^[Sources: https://privy.io/blog/announcing-our-acquisition-by-stripe; https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/.]

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore デフォルトウォレット]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded ウォレット による CEX 中抜き]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 決済プロトコル]]
<!-- /wiki-links:managed -->

## 出典

- Privy docs — https://docs.privy.io/
- Privy and Stripe acquisition announcement — https://privy.io/blog/announcing-our-acquisition-by-stripe
- AWS AgentCore Payments preview — https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/

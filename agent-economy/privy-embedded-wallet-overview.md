---
title: Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)
aliases: [privy-embedded-wallet-overview, privy, stripe-privy, henri-stern]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [agent-economy, wallet, embedded-wallet, mpc, privy, stripe, self-custodial]
sources: []
status: candidate
---

# Privy · Stripe 傘下の埋込型セルフカストディウォレット(総覧)


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[agent-economy/embedded-wallet-network-effects-moat|埋込ウォレットのネットワーク効果 · ウォレット本体ではなくインテグレーターの堀]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 2021 ニューヨーク設立 · 創業者 Henri Stern + Asta Li ^[extracted]
- 2025-06 Stripe に買収される($300-500M と推定) ^[extracted]
- 買収時 75M アカウント · 2026-Q1 には 110M+ ウォレットに到達 ^[extracted]
- 1,000+ developer team が統合 ^[extracted]
- Self-custodial モデル:MPC + TEE シャーディング · 秘密鍵は Privy 単一ポイントに存在しない ^[extracted]
- ユーザー onboarding ~10 秒 vs MetaMask 5-10 分 ^[extracted]
- 買収前のコア顧客:OpenSea / Hyperliquid / Farcaster / Friend.tech / Toku / Zora ^[extracted]
- 2026 Sessions で Multichain balances API を発表 ^[extracted]

## Mechanism / How it works

ユーザーが email/Google でログインすると、Privy SDK(30 行のコード)がフロントエンドで MPC シャーディング鍵生成を実行する。**1 シャードはユーザーのデバイス**(Passkey / WebAuthn / Secure Enclave ベース)+ **1 シャードは Privy の TEE**(Trusted Execution Environment · AWS Nitro Enclaves あるいは同等)に保管される。署名時には 2 シャードが協調して有効な署名を生成するが、Privy だけでは署名できず、ユーザーも単独では署名できない — 「self-custodial でありながら管理不要」という折衷を実現する(同モデルは [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 埋込ウォレット採用]] 参照)。Multichain balances API では 1 回の API 呼び出しで Ethereum / Solana / Tempo / Polygon 等のマルチチェーン残高を取得でき · 開発者がマルチチェーン集約を個別実装する必要をなくしている(下層は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] に依存)。体験全体は完全に Web2:ユーザーは seed phrase を見ず · MetaMask をインストールせず · ネットワーク切替も不要 — これが Privy が 110M ウォレット規模を占有する核心である。

## Origin & evolution

2021 ニューヨーク · 創業者 Stern + Li(以前は Protocol Labs)。2022-2024 OpenSea / Hyperliquid / Farcaster 等の dapp と深く統合し · 75M アカウントを蓄積。2024-Q4 Stripe が stablecoin + Tempo + Bridge 買収の連鎖戦略を始動し · ウォレット層が必要になった(戦略全体図は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5層 Trojan horse]] 参照)。2025-06 Stripe が Privy 買収を完了 · $300-500M と推定(Bridge は $1.1B との対比で · Privy は急成長期だったため評価額は低めだった)。2025 H2 Privy は独立ブランドで運営を続けつつ · Stripe Connect / Tempo / Bridge の内部需要に応え始めた。2026-05-07 AWS Bedrock AgentCore Payments が Privy と Coinbase CDP をデフォルト wallet provider に並列で組み込み — Privy の AI agent 経済インフラにおけるポジショニングが確立された([[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ5本柱]] の従来経路と対比)。

## Counterpoints

- 「Self-custodial」は MPC + TEE モデルでは一部専門家から「実質的に custodial」と批判されている:Privy TEE が故障すれば → ユーザー資産にリスクが波及する
- AWS AgentCore 上で Coinbase CDP と「並列」だが · 将来的に CDP に侵食される可能性がある(Coinbase は機関信頼が強い)
- Stripe 買収後にオープンエコシステムを維持できるか · それとも dApp 統合を徐々に排他化するか(OpenSea 等の競合との関係)
- 110M ウォレットという数字の意味は曖昧 · うちアクティブ wallet はどれほどか?

## Open questions

- Privy は Stripe Connect の 5M マーチャントのデフォルト wallet になるか(自動 provisioning)?
- AWS AgentCore のデフォルトリストにおける Privy / Coinbase CDP の市場シェア配分は?
- MPC + TEE モデルは EU/US の self-custody 規制新ルールに挑戦されるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore デフォルトウォレット]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet による CEX 中抜き]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP 決済プロトコル]]
<!-- /wiki-links:managed -->

## Sources


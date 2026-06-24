---
title: 組込み型ウォレットによる Fintech の脱仲介化 · Privy/CDP/Magic/Web3Auth 四強構図
aliases: [embedded wallet fintech disintermediation overview, embedded wallets Privy CDP Magic Web3Auth, wallet UX disintermediation]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-08-08
confidence: certain
tags: [fintech, embedded-wallet, privy, coinbase-cdp, account-abstraction, disintermediation]
sources:
  - https://www.privy.io/
  - https://www.coinbase.com/developer-platform
  - https://magic.link/
  - https://web3auth.io/
  - https://docs.stripe.com/crypto
status: active
---

# 組込み型ウォレットによる Fintech の脱仲介化 · 四強構図

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 組込み型ウォレット(Embedded wallet)は 2025-2026 fintech における逆方向の脱仲介化を担う重要なキャリアである —— **Privy(Stripe が 2025.06 に ~$1.1B で買収)/ Coinbase CDP / Magic / Web3Auth** の四強が fintech 既存顧客基盤を crypto エントリーポイントに変え、**ユーザーに意識させずに**保有/送金/署名を可能にする。プロトコル基盤は ERC-4337/7702/7715 三点セット。

## Key facts

- Stripe が 2025.06 に Privy を ~$1.1B で買収 · 同時期に Bridge を $1.1B で買収 ^[extracted]
- Coinbase CDP 2024 ローンチ · onchainkit + smart-wallet 一体型 · Coinbase 1 億人超ユーザーへの流通 ^[extracted]
- Magic 2018 創業 · メール magic link から出発 · のち MPC へ転換 · $99/mo + 従量課金 ^[extracted]
- Web3Auth(旧 Torus Labs)はオープンソース + エンタープライズの二軌 · BNB Labs 投資 ^[extracted]
- Privy 顧客:OpenSea · Friend.tech · Hyperliquid + Stripe 5M+ 加盟店という潜在ディストリビューション ^[extracted]

## Mechanism / How it works

**四強の差別化対照**:

| 次元 | Privy(Stripe) | Coinbase CDP | Magic | Web3Auth |
|---|---|---|---|---|
| オーナー | Stripe(2025.06 買収) | Coinbase(上場) | 独立(Tiger 投資) | 独立(BNB Labs 投資) |
| TSS | Shamir SSS 2/3 + server | MPC distributed + device | DKLs MPC 2/2 | tKey + OAuth 再構成 |
| API | React SDK 5 行 | CDP SDK · onchainkit | Magic Link SDK | Web3Auth Modal |
| チェーン | EVM + Solana | EVM + Base + Solana | EVM 多チェーン | EVM/Solana/Aptos |
| ディストリビューション | Stripe 5M+ 加盟店 | Coinbase 1 億人超ユーザー | 独立・中立 | 独立・中立 |

**「ユーザー無感」UX の五要素**:
- Onboarding: Google/Apple/Email ワンタップ · TSS キーはバックエンドで · seed なし
- 署名: session key(7702/7715)で 1 回認可 · session 内ではポップアップなし
- Gas: Paymaster による代理支払(4337)· USDC 支払いまたは完全 sponsor 化
- Recovery: 複数 share(device + cloud + server)で分散
- クロスチェーン: Hyperlane / CCIP がバックエンドで調整 · ユーザーは単一残高として確認

**プロトコル基盤**:[[systems/erc-4337-overview|ERC-4337]](AA SCW)+ [[systems/erc-7702-overview|ERC-7702]](EOA → SCW 一時アップグレード)+ [[agent-economy/erc-7715-overview|ERC-7715]](granular permissions)の三点セットを組み合わせると = ユーザー無感 + シームレスアップグレード + 細粒度認可。

## Origin & evolution

2018-2022 = MetaMask 主導 · ユーザーが能動的にインストール · seed phrase 自己管理 · crypto-native 境界が明確。2023-2024 = Privy / CDP / Magic が b2b SaaS に切り替え · 顧客が dApp から fintech へ拡大。2025.06 = Stripe が同時に Privy + Bridge を買収 · fintech が正式に crypto エントリーポイントに組み込まれる象徴。2025.07 = AWS Bedrock AgentCore Payments が Privy をデフォルトに選定(詳細は [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AgentCore]])· 組込み型ウォレットが crypto ツールから汎用決済インフラへ格上げ。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|組込み型ウォレット · Stripe 五層 Trojan horse]]
- [[agent-economy/embedded-wallet-network-effects-moat|組込み型ウォレット · 統合事業者の堀]]
- [[fintech/ai-payment-two-tracks|AI 決済二軌]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|プロトコル・ヘッジ · Stripe パターン]]
<!-- /wiki-links:managed -->

## Sources

- Stripe Privy / Bridge 買収告知(2025.06)

---
title: ERC-4337 embedded wallet 採用マップ · Privy/Coinbase/Alchemy/Safe
aliases: [erc-4337-adoption, aa-embedded-wallet, privy-coinbase-cdp-alchemy]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, erc-4337, embedded-wallet, privy, coinbase, alchemy]
sources:
  - https://eips.ethereum.org/EIPS/eip-4337
  - https://github.com/eth-infinitism/account-abstraction
  - https://docs.privy.io/
  - https://privy.io/blog/announcing-our-acquisition-by-stripe
  - https://docs.cdp.coinbase.com/
  - https://github.com/alchemyplatform/aa-sdk
  - https://github.com/safe-global/safe-core-sdk
  - https://github.com/pimlicolabs/permissionless.js
  - https://www.canton.network/
status: candidate
---

# ERC-4337 embedded wallet 採用マップ · Privy/Coinbase/Alchemy/Safe

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Privy:フルスタック 4337 + Pimlico 提携 · 6000+ アプリ · Stripe が買収 ^[extracted]
- Coinbase CDP Wallets:Base ネイティブ + smart wallet · 数百万ユーザー ^[extracted]
- Alchemy Account Kit:Modular Account 標準 · DeFi + GameFi 主流 ^[extracted]
- ZeroDev / Pimlico:Bundler + Paymaster インフラの B2B 層 ^[extracted]
- Safe{Core}:4337 対応 + Modular Safe · 機関向け multi-sig 主流 ^[extracted]
- JPM Kinexys は不参加 —— Canton/DAML 路線 · EVM AA は採用せず ^[extracted]

## Mechanism / How it works

embedded wallet プレイヤーの階層構造:

| プレイヤー | 4337 実装 | 顧客規模 | ビジネスモデル |
|---|---|---|---|
| **Privy** | フルスタック 4337 + Pimlico 提携 | 6000+ アプリ | SaaS サブスクリプション + 従量課金 |
| **Coinbase CDP Wallets** | Base ネイティブ + smart wallet | 数百万ユーザー | Coinbase 商業エコシステムへの組込 |
| **Alchemy Account Kit** | Modular Account 標準 | DeFi + GameFi 主流 | インフラ従量課金 |
| **ZeroDev / Pimlico** | Bundler + Paymaster インフラ | B2B インフラ | インフラ手数料 |
| **Safe{Core}** | 4337 対応 + Modular Safe | 機関向け multi-sig | オープンソース + 統合サポート |

**Stripe via Privy 戦略の流れ**:Stripe は 2024 年に [[agent-economy/privy-embedded-wallet-overview|Privy]] を買収し · 4337 wallet 機能を Stripe Connect に組み込んだ —— 加盟店は自社のエンドユーザーに対し、ユーザーがブロックチェーンを理解していなくても self-custodial USDC wallet を直接発行できる。これは Stripe が stablecoin payment 領域に参入するための重要なくさびとなる([[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] と対照)。

**Coinbase の矛盾点**:Coinbase はカストディ事業(CEX 本業)を運営しつつ · self-custodial(CDP / Base / Smart Wallet)も推進している —— 4337 はまさに「左手で右手を切る」ツールである。商業ロジックとしては、一部ユーザーが self-custodial に流れたとしても、Coinbase は Base の gas + トラフィック手数料で収益を得ることができ(かつ競合 CEX に流れることもなく)、利益を確保できる。

## Origin & evolution

2023-03 の 4337 メインネット稼働後 6-12 か月以内に · Privy / Coinbase CDP / Alchemy はいずれも統合プロダクトをリリースした。2024-2025 年にかけて embedded wallet は「Web2 fintech 接続」フェーズに突入 —— Stripe / Robinhood / PayPal / Revolut が程度の差はあるものの探索を進めている。2024 年の Stripe による Privy 買収は象徴的な出来事であり · Web2 決済大手が 4337 を次世代 wallet UX の基盤として認知したことを示している。

2026 年の v0.7 アップグレードに伴い · embedded wallet の実装スピードはさらに加速 —— 顧客体験は Web2 水準にいっそう接近している。さらに [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] と組み合わさり,wallet は人間と AI agent の両方にサービスを提供する必要があり,4337 は汎用基盤層となっている。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-7702-overview|ERC-7702(7702 vs 4337)]]
- [[agent-economy/erc-7715-overview|ERC-7715(wallet permissions)]]
<!-- /wiki-links:managed -->

## Sources

- Stripe-Privy acquisition announcement(2024)
- EIP-4337: Account Abstraction Using Alt Mempool — https://eips.ethereum.org/EIPS/eip-4337
- eth-infinitism account-abstraction(EntryPoint / Bundler reference impl）— https://github.com/eth-infinitism/account-abstraction
- Privy docs（フルスタック 4337 embedded wallet）— https://docs.privy.io/
- Privy and Stripe: Bringing crypto to everyone（買収公式発表）— https://privy.io/blog/announcing-our-acquisition-by-stripe
- Coinbase Developer Platform（CDP Wallets / Smart Wallet）— https://docs.cdp.coinbase.com/
- Alchemy aa-sdk（Account Kit / Modular Account）— https://github.com/alchemyplatform/aa-sdk
- Safe{Core} SDK（4337 + Modular Safe）— https://github.com/safe-global/safe-core-sdk
- Pimlico permissionless.js（Bundler / Paymaster インフラ）— https://github.com/pimlicolabs/permissionless.js
- Canton Network（JPM Kinexys の非 EVM 路線）— https://www.canton.network/

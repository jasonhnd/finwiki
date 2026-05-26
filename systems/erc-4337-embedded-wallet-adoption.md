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
sources: []
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

## Counterpoints

**Safe{Core} と Privy/Coinbase の棲み分け**:Safe は機関向け multi-sig を主軸とし(すでに web3 機関の標準装備)・ Privy/Coinbase はリテール embedded を主軸 —— 両者は表面上は競合しないが · Safe Modular もリテール領域への浸透を進めている。長期的には合流する可能性がある。

**ERC-7702 からの逆風**:7702 によって「既存の EOA をワンクリックで SCW にアップグレード」できるようになり · Privy/Coinbase CDP の UX 差別化障壁を引き下げる。短期(2026-2027)では 4337 陣営のビジネスモデルにとって挑戦となる。

## Open questions

- Stripe + Privy 統合後の加盟店オンボーディング速度は?
- Coinbase CDP vs Privy の Base 上での市場シェアは?
- 7702 ローンチが 4337 embedded wallet を実際にどの程度浸食するか?
- 非 EVM(Solana / Move)における embedded wallet 類似標準はどのように 4337 と相互運用するか?

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

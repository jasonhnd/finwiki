---
source: systems/erc-4337-embedded-wallet-adoption
source_hash: c2bfb19cf354fd53
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ERC-4337 埋め込みウォレット採用マップ · Privy / Coinbase / Alchemy / Safe"
translated_at: 2026-06-26T08:29:01.783Z
---
# ERC-4337 埋め込みウォレット採用マップ · Privy / Coinbase / Alchemy / Safe

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] の下に位置する。ピア比較や対照の文脈では [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] と合わせて読み、より広いシステムおよび規制上の境界については [[fintech/INDEX|fintech index]] と合わせて読む。

## 主要事実

- Privy: フルスタック 4337  + Pimlico 提携、6000+ アプリ、Stripe が買収 ^[extracted]
- Coinbase CDP ウォレット: Base ネイティブ + スマートウォレット、数百万ユーザー ^[extracted]
- Alchemy Account Kit: Modular Account 標準、DeFi + GameFi 主流 ^[extracted]
- ZeroDev / Pimlico: Bundler + Paymaster インフラの B2B 層 ^[extracted]
- Safe{Core}: 4337 対応 + Modular Safe、機関向けマルチシグの主流 ^[extracted]
- JPM Kinexys は不参加。Canton / DAML 路線であり、EVM AA は採用していない ^[extracted]

## 仕組み

埋め込みウォレットプレイヤーの階層構造:

| プレイヤー | 4337 実装 | 顧客規模 | ビジネスモデル |
|---|---|---|---|
| **Privy** | フルスタック 4337  + Pimlico 提携 | 6000+ アプリ | SaaS サブスクリプション + 従量課金 |
| **Coinbase CDP ウォレット** | Base ネイティブ + スマートウォレット | 数百万ユーザー | Coinbase 商業エコシステムへの組み込み |
| **Alchemy Account Kit** | Modular Account 標準 | DeFi + GameFi 主流 | インフラ従量課金 |
| **ZeroDev / Pimlico** | Bundler + Paymaster インフラ | B2B インフラ | インフラ手数料 |
| **Safe{Core}** | 4337 対応 + Modular Safe | 機関向けマルチシグ | オープンソース + 統合サポート |

**Stripe via Privy 戦略の流れ**: Stripe は 2024 年に [[agent-economy/privy-embedded-wallet-overview|Privy]] を買収し、4337 ウォレット機能を Stripe Connect に組み込んだ。加盟店は自社のエンドユーザーに対して、ユーザーがブロックチェーンを理解していなくても自己管理型 USDC ウォレットを直接発行できる。これは Stripe がステーブルコイン決済領域に参入するための重要なくさびである([[agent-economy/embedded-wallet-network-effects-moat|embedded ウォレットネットワーク効果の堀]] と対照)。

**Coinbase の矛盾点**: Coinbase はカストディ事業(CEX 本業)を運営しつつ、自己管理型ウォレット(CDP / Base / Smart ウォレット)も推進している。4337 はまさに「左手で右手を切る」ツールである。商業ロジックとしては、一部ユーザーが自己管理型へ流れたとしても、Coinbase は Base の gas + トラフィック手数料で収益を得ることができ、競合 CEX へ流れることも避けながら利益を確保できる。

## 起源と変遷

2023-03 の 4337 メインネット稼働後 6-12 か月以内に、Privy / Coinbase CDP / Alchemy はいずれも統合プロダクトをリリースした。2024-2025 年にかけて、埋め込みウォレットは「Web2 fintech 接続」フェーズに入った。Stripe / Robinhood / PayPal / Revolut は、程度の差はあるものの探索を進めている。2024 年の Stripe による Privy 買収は象徴的な出来事であり、Web2 決済大手が 4337 を次世代ウォレットUXの基盤として認知したことを示している。

2026 年の v0.7 アップグレードに伴い、埋め込みウォレットの実装スピードはさらに加速している。顧客体験は Web2 水準にいっそう接近している。さらに [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] と組み合わさることで、ウォレットは人間と AI エージェントの両方にサービスを提供する必要があり、4337 は汎用基盤層になっている。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-7702-overview|ERC-7702(7702 vs 4337)]]
- [[agent-economy/erc-7715-overview|ERC-7715(ウォレット permissions)]]
<!-- /wiki-links:managed -->

## 出典

- Stripe-Privy acquisition announcement(2024)
- EIP-4337: Account Abstraction Using Alt Mempool — https://eips.ethereum.org/EIPS/eip-4337
- eth-infinitism account-abstraction(EntryPoint / Bundler reference impl) — https://github.com/eth-infinitism/account-abstraction
- Privy docs(フルスタック 4337 embedded wallet) — https://docs.privy.io/
- Privy and Stripe: Bringing crypto to everyone(買収公式発表) — https://privy.io/blog/announcing-our-acquisition-by-stripe
- Coinbase Developer Platform(CDP Wallets / Smart Wallet) — https://docs.cdp.coinbase.com/
- Alchemy aa-sdk(Account Kit / Modular Account) — https://github.com/alchemyplatform/aa-sdk
- Safe{Core} SDK(4337  + Modular Safe) — https://github.com/safe-global/safe-core-sdk
- Pimlico permissionless.js(Bundler / Paymaster インフラ) — https://github.com/pimlicolabs/permissionless.js
- Canton Network(JPM Kinexys の非 EVM 路線) — https://www.canton.network/

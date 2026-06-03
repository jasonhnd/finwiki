---
source: agent-economy/crossmint-agent-sdk
source_hash: e239366586682fe4
lang: ja
status: machine
fidelity: ok
title: "Crossmint エージェント SDK · AI エージェント向けの NFT とウォレット抽象化"
translated_at: 2026-06-02T11:47:37.314Z
---

# Crossmint エージェント SDK · AI エージェント向けの NFT とウォレット抽象化

## ウィキ上の位置づけ

本項目は [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]] の下に位置する。同類のウォレットスタックについては [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]] および [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] を、市場の文脈については [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet consolidation]] を、価値捕捉のフレーミングについては [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet moat]] を併せて参照のこと。

## 主要事実

- **Crossmint** はエンタープライズ寄りの埋込ウォレット + NFT ミンティングプラットフォームを提供する — クレジットカード資金による購入、サーバーサイドのウォレットプロビジョニング、そして **マルチチェーン対応**(EVM、Solana、Polygon、Cardano、Aptos、Sui)
- 当初は NFT チェックアウトに特化(2021-2022)していたが、2024
までに **汎用の埋込ウォレット + エージェント SDK** へ転換した
- エージェント SDK は、AI エージェントが利用可能なウォレット作成、署名、NFT のミント / 移転、決済、オンチェーン ID のプリミティブを公開する
- **エージェント向け埋込ウォレット** 層において、[[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、Dynamic、Magic と並ぶ位置にある

## Crossmint が AI エージェントに提供するもの

| 機能 | Crossmint のプリミティブ |
|---|---|
| ウォレットプロビジョニング | サーバーサイドのウォレット API、エンドユーザー端末は不要 |
| 法定通貨オンランプ | クレジットカード / Apple Pay / Google Pay → オンチェーン資産 |
| NFT のミント / 移転 | メタデータ + ロイヤルティ付きのマルチチェーンミントエンドポイント |
| マルチチェーンカバレッジ | EVM + 非 EVM(Solana / Aptos / Sui / Cardano)を単一 SDK で横断 |
| ガス抽象化 | スポンサードガス / ペイマスターのパターン([[systems/erc-4337-userop-bundler-flow|ERC-4337 paymaster]]) |
| カストディオプション | カストディアル、MPC、ノンカストディアルの各形態 |
| コンプライアンス | KYC / AML モジュール、機関向け KYB 経路 |

## Crossmint vs Privy vs Dynamic vs Magic

| 観点 | Crossmint | Privy | Dynamic | Magic |
|---|---|---|---|---|
| 当初の焦点 | NFT チェックアウト / コマース | コンシューマーアプリ向け埋込ウォレット | DeFi / Web3 向け埋込ウォレット | Magic-link 認証 + ウォレット |
| 所有者 | 独立(非公開)| Stripe 子会社([[agent-economy/privy-embedded-wallet-overview|see entry]])| 独立 | 独立(Magic-Labs 後の時代)|
| マルチチェーンの幅 | 広い(EVM + Solana + Aptos + Sui + Cardano)| EVM 中心 + Solana | EVM + Solana | EVM + Bitcoin + Solana |
| 法定通貨オンランプ内蔵 | あり(カード / Apple Pay ネイティブ)| パートナー経由 | パートナー経由 | パートナー経由 |
| NFT プリミティブ | ネイティブ | 汎用 | 汎用 | 汎用 |
| サーバーサイドのエージェントウォレット | あり | あり(App Wallets 経由)| あり | あり |
| エンタープライズ営業の動き | 強い(NFT ブランド、ゲーミング)| 強い(Stripe チャネル)| 強い(DeFi)| 中程度 |

Crossmint の **ニッチ** は、NFT ミント + 法定通貨購入 + マルチチェーンのすべてを一体に縫い合わせることを必要とするエンタープライズ / ブランド顧客である。AI エージェントに当てはめると、これは以下のようなユースケースに対応する:

- ブランド顧客のために複数チェーンをまたいで **NFT を売買するエージェント**
- 最も安価なチェーン(例:低コストの大量ミント向けに Solana)でロイヤルティ / リワードを NFT として **発行し、法定通貨を受け付けるエージェント**
- プレイヤー間のウォレットをまたいでゲーム内資産をミント / 移転する **ゲーミング文脈のエージェント**

## エージェントスタックにおける Crossmint の位置

| 層 | Crossmint が担う領域 |
|---|---|
| ウォレット / アイデンティティ | あり — サーバーサイドのウォレット + KYC モジュール |
| 認可マンデート | プラガブル(AP2 または独自方式と連携)|
| 決済レール | 法定通貨(カード)→ ステーブルコイン / ネイティブ資産、Privy より広いマルチチェーン |
| NFT / 資産発行 | ネイティブで一級のプリミティブ |
| 発見 / マーケットプレイス | コアではない(その点は [[agent-economy/nevermined-compute-payment-protocol|Nevermined]] と比較)|
| コンプライアンス | KYC / AML / KYB を統合 |

実務的なパターン:**AI コマースエージェント** は Crossmint を用いて、初回インタラクション時にエンドユーザー向けのウォレットをプロビジョニングし(シードフレーズ不要)、カード決済を受け付け、NFT のレシートをミントし、ステーブルコイン決済をマーチャントへルーティングする — これらすべてを、下層のチェーン選択を抽象化する単一の SDK で行う。

## 起源と進化

Crossmint は 2021-2022 の NFT サイクル前後に「カードから NFT へ」のチェックアウトとしてローンチした — 大半の Web2 の買い手がクリプトのオンボーディングを使いこなせないという問題を解決するものだった。NFT のみのテーゼが冷め込む(2023)につれ、Crossmint は 2024までに **汎用の埋込ウォレット** および **AI エージェント向けのサーバーサイドウォレット** へと拡張した。2025-2026 のポジショニングが狙うのは、エンタープライズブランド、AI コマース、そして [[agent-economy/embedded-wallet-landscape-2026-consolidation|consolidation]] の競争でどちらの側にも付くことなく多数のチェーンを横断する単一 SDK を求めるあらゆるビルダーである。

## 関連項目

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/privy-embedded-wallet-overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation]]
- [[agent-economy/embedded-wallet-network-effects-moat]]
- [[agent-economy/skyfire-closed-loop-agent-issuer]]
- [[agent-economy/nevermined-compute-payment-protocol]]
- [[agent-economy/ap2-overview]]
- [[systems/erc-4337-userop-bundler-flow]]
- [[INDEX|FinWiki index]]

## 出典

- crossmint.com の製品ページおよび価格設定。
- docs.crossmint.com の SDK ドキュメント(エージェント / サーバーウォレット API を含む)。
- blog.crossmint.com のエージェント SDK およびマルチチェーン対応について。
- github.com/crossmint のリファレンスリポジトリ。

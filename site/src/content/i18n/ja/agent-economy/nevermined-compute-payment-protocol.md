---
source: agent-economy/nevermined-compute-payment-protocol
source_hash: 7ac4261eca37bc6b
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Nevermined · AI コンピュート決済プロトコル"
translated_at: 2026-06-26T08:32:15.195Z
---

# Nevermined · AI コンピュート決済プロトコル

## ウィキ上の位置づけ

本項目は [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]] の下に位置する。同類・対照については [[agent-economy/x402-http-payment-overview|x402 · HTTP-native micropayment]] を、マーケットプレイスのフレーミングについては [[agent-economy/skill-market-monetization|skill market monetization]] を、より広いレールの文脈については [[payments/INDEX|payments index]] を併せて参照のこと。

## 主要事実

- Nevermined は **AI コンピュート / データのマーケットプレイス + 決済プロトコル** である — 推論ごと、データセットごと、エージェント呼び出しごとのマイクロペイメント
- アーキテクチャ:スマートコントラクトのエスクロー + トークンゲート型アクセス、エージェントはコンピュート / モデル / データに対してサブスクライブまたは従量課金で支払う
- 当初は Polygon / EVM 上に構築、決済オプションの一つとして [[agent-economy/x402-http-payment-overview|x402]] と統合
- ユースケース:AI コンピュート提供者がモデル / GPU エンドポイントを公開し、エージェント消費者が推論呼び出しごとに支払い、ステーブルコインで決済する
- エージェントがワークフローごとに多数の提供者を渡り歩く「コモディティとしてのコンピュート」テーゼをターゲットとする

## 仕組み — Nevermined がコンピュート決済をどうルーティングするか

このプロトコルは **コンピュート / モデルの提供者** と **エージェント消費者** の間に位置する:

```
AI agent ──── intent: "run inference on model X" ─────►
                                                      ▼
                                              Nevermined
                                              gateway / SC
                                                      │
                              ┌───────────────────────┼──────────────────┐
                              ▼                       ▼                  ▼
                     Compute provider A       Model provider B    Dataset provider C
                              │                       │                  │
                              └───── settlement ──────┴──── stablecoin ──┘
                                       (USDC, USDT, native token)
```

中核となる構成要素:

1. **アセット登録** — 提供者がモデル / データセット / API エンドポイントを、価格、利用規約、アクセスポリシーとともに登録する
2. **サブスクリプション / 従量課金トークン** — 消費者エージェントがサブスクリプション NFT または呼び出しごとのクレジットを購入する
3. **スマートコントラクトのエスクロー** — 配信証明があるまで支払いを保留し、提供者は完了時に請求する
4. **アクセス証明** — ゲートウェイがリクエストをコンピュート提供者へ転送する前にトークンを検証する
5. **ロイヤルティ / 分配ロジック** — モデル制作者、データキュレーター、コンピュート提供者への多者間分配

## コンピュートマーケットプレイスとの適合

Nevermined の背後にあるエージェントエコノミーのテーゼ:エージェントのワークフローは **一つのタスクで数十のコンピュート提供者に触れる** ことがある(例:ビジョンモデル、構造化抽出 LLM、ベクトル DB、ドメイン固有のファインチューン、長コンテキストモデルにアクセスするリサーチエージェント — それぞれ異なるベンダー由来)。従来の SaaS API キーのフローはこのファンアウトで破綻する。Nevermined の呼び出しごとの決済 + 統一請求はこれを線形にする。

[[agent-economy/x402-http-payment-overview|x402]] のアーキテクチャと比較すると:x402 は **HTTP ハンドシェイク** を標準化し、Nevermined は **マーケットプレイス + エスクローコントラクト** を標準化する。この二つは組み合わせ可能で、Nevermined はトランスポート層の payment-required ハンドシェイクに x402 を用いつつ、その上で独自のエスクロー / ロイヤルティ層を稼働させる。

## x402

との統合

| 層 | x402 | Nevermined |
|---|---|---|
| HTTP ハンドシェイク | `402 Payment Required` + `X-Payment` ヘッダを定義 | x402 をトランスポートの一オプションとして採用 |
| 決済 | デフォルトで Base 上の USDC | マルチステーブルコイン、エスクローベース |
| マーケットプレイス | Bazaar MCP(10k+ エンドポイント)| コンピュート / モデル / データの Nevermined レジストリ |
| ロイヤルティ / 分配 | 対象外 | 多者間分配をネイティブにサポート |
| サブスクリプションモデル | 呼び出しごとのみ | サブスクリプション NFT + 呼び出しごと |

実務的なパターン:コンピュート提供者はカタログ + エスクローのために Nevermined 経由で公開し、トランスポート層の決済には x402 ファシリテーターを備えた呼び出しエンドポイントを公開し、エージェントには [[systems/l2-agent-economics-arbitrum-base-op-comparison|Base / Arbitrum]] 上の [[fintech/usd-stablecoin-interchange|USDC]] で決済させる。

## Nevermined の位置

| 機能 | オープンスタックの同類 | Nevermined のポジション |
|---|---|---|
| 発見 | x402 Bazaar | Nevermined レジストリ |
| 決済 | x402 + USDC | 同じレール、加えてサブスクリプション |
| アイデンティティ | Privy / Coinbase CDP / [[agent-economy/erc-7715-overview|ERC-7715]] | 外部ウォレットのアイデンティティを再利用 |
| ロイヤルティ分配 | Stripe Connect、ERC-2981 | スマートコントラクトのエスクローで内蔵 |
| コンプライアンス / KYA | Skyfire([[agent-economy/skyfire-closed-loop-agent-issuer|see entry]])| プラガブル |

## 関連項目

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/x402-http-payment-overview]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/skyfire-closed-loop-agent-issuer]]
- [[agent-economy/skill-market-monetization]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[fintech/usd-stablecoin-interchange]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[INDEX|FinWiki index]]

## 出典

- nevermined.io の製品サイトおよび開発者ドキュメント。
- github.com/nevermined-io のプロトコルコントラクトおよびゲートウェイコード。
- Nevermined レジストリアプリおよび提供者リスト。

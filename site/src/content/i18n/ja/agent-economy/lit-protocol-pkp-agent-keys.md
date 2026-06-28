---
source: agent-economy/lit-protocol-pkp-agent-keys
source_hash: 94e428eee24bd115
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Lit Protocol PKP · AI エージェント向けプログラマブルキーペア"
translated_at: 2026-06-26T08:28:53.949Z
---

# Lit Protocol PKP · AI エージェント向けプログラマブルキーペア

## ウィキ上の位置づけ

この項目は [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols seven-protocol overview]] の下に位置する。同種のウォレットスタックについては [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット]] および [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] と、ポリシー/スコープ層については [[agent-economy/erc-7715-overview|ERC-7715 ウォレット permissions]] と、基盤となる暗号技術系統については [[systems/threshold-bft-consensus-rust-implementations|threshold BFT]] と対照して参照のこと。

## 主要事実

- **Lit Protocol** は、しきい値暗号(BLS / ECDSA しきい値署名)を用いた **分散型鍵管理** のための分散ネットワークである
- **PKP(Programmable Key Pair)** = 秘密鍵の半分が Lit ノード間で分割される鍵であり、いかなる単一ノードも完全な鍵を見ることはない
- PKP は **コードによって条件付きで制御** できる(「Lit Actions」)。これは Lit のセキュアエンクレーブ内で実行され署名を承認する JavaScript である
- ユースケース:AI エージェントが、署名にランタイムでのポリシー評価(レート制限、スコープチェック、多要素)を必要としつつも、中央集権的なカストディアンを介さないウォレットを制御する
- **シングルサーバーカストディ**(Privy / Magic)や **EOA + ERC-4337 スマートアカウント**([[agent-economy/erc-4337-account-abstraction-primer-for-agents|see primer]])とは対照的である

## 仕組み — PKP がエージェントのためにどう署名するか

1. **PKP は NFT として発行** され、NFT の所有者が誰が署名を要求できるかを制御する
2. **秘密鍵シェア** は DKG(分散鍵生成)を通じて Lit ノード間に分散される
3. **署名リクエスト** の流れ:呼び出し元がメッセージ + Lit Action(JS コード)を送信 → Lit ノードが TEE 内でアクションを実行 → アクションが `sign: true` を返した場合、メッセージにしきい値署名する
4. **出力** は標準的な ECDSA / BLS 署名であり、EVM、Bitcoin、Solana、Cosmos、あるいは任意のチェーンで使用可能である
5. **いかなるノードも完全な秘密鍵を組み立てない** ── 過半数が侵害されても、漏洩するのは鍵シェアのみである

```
AI agent ──► sign(msg)
              │
              ▼
       Lit Action (JS)
       (runs in TEE on each node)
       - check msg semantics
       - check rate limits
       - check policy / oracle
       - return {sign: bool, msg: bytes}
              │
              ▼
  threshold-BLS signature
  reassembled by caller
              │
              ▼
  use on any chain (EVM / BTC / SOL / ...)
```

## PKP がエージェントスタックのどこに位置するか

| 機能 | EOA + 4337 スマートアカウント | PKP + Lit Action |
|---|---|---|
| 鍵カストディ | 単一デバイスまたはカストディアン | Lit ネットワーク全体でのしきい値 |
| ポリシーロジック | オンチェーン(スマートアカウントコード) | TEE 内のオフチェーン JS |
| クロスチェーン | チェーンごとに別個のスマートアカウントが必要 | 単一の PKP が任意のチェーンにネイティブに署名 |
| レイテンシ | スマートアカウントの呼び出しコスト + L2 への取り込み | Lit ネットワークの往復約 1〜3秒 |
| コンポーザビリティ | EVM ツール群が充実 | より新しいパターン;Lit Actions のエコシステムは狭い |
| 検閲面 | バンドラー / シーケンサー | Lit ノード集合 |

PKP は次のような場合に特に有用である:

- エージェントが、毎回スマートアカウント基盤を再デプロイすることなく **複数のチェーン** で署名しなければならない場合
- 署名前にポリシーを **オフチェーン** で実行しなければならない場合(オラクルチェック、web2 API への照会)
- カストディリスクが Privy のような単一の SaaS カストディアンに集中するのではなく **分散** されるべき場合

## 組み込みウォレット事業者との比較

| 層 | Privy / Magic / Dynamic | Lit PKP |
|---|---|---|
| カストディアーキテクチャ | SaaS サーバーカストディ(通常 TEE で保護) | Lit ノード全体でのしきい値 |
| 信頼前提 | SaaS 事業者を信頼する | Lit ノード集合を信頼する(n のうち 1、またはしきい値) |
| マルチチェーン | チェーンごとの鍵生成 | 全チェーンに単一の PKP |
| プログラマブルポリシー | 限定的(署名ポリシー SDK) | Lit Action 内の完全な JS |
| リカバリ | 事業者管理(メール、OAuth) | NFT 所有者が制御 |

AI エージェントにとって、PKP モデルは次のように明快に対応する:**エージェントが PKP NFT を所有し、Lit Action 内のポリシーがスコープ(上限支出額、許可されたコントラクト、時間枠)を強制し、エージェントはアクションごとに Lit ネットワークを呼び出して署名する**。これはオンチェーン側について [[agent-economy/erc-7715-overview|ERC-7715 ウォレット permissions]] を、オフチェーンの承認側について [[agent-economy/ap2-overview|AP2 mandate VC]] を補完する。

## 起源と進化

Lit は 2021〜2022 に「分散型アクセス制御」プロジェクト(トークンゲート型コンテンツ)として立ち上がった。汎用のしきい値署名 + Lit Actions への転換は 2023に起こった。PKP は、エージェント/ウォレットのビルダーがカストディ型の単一障害点なしにクロスチェーン署名を必要とするにつれて、2024 に注目を集めた。2025〜2026 までに、Lit は **「エージェント制御型ウォレット」のためのインフラ** として位置付けられた ── [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus]] システムに隣接しつつも、それとは異なるものである。

## AI エージェントのユースケース

- **クロスチェーン取引エージェント** ── 1 つの PKP が Ethereum、Solana、Cosmos でスワップに署名する
- **サブスクリプションエージェント** ── Lit Action が定期支払いに署名する前に cron + オンチェーン残高を検証する
- **マルチシグ的な委任** ── PKP NFT をユーザー + エージェント間で共有し、いずれも条件付き署名をトリガできる
- **オラクルゲート型実行** ── 価格変動が取引をトリガする場合、Lit Action が署名前に Chainlink / Pyth を呼び出す
- **リカバリ / 相続** ── PKP NFT をソーシャルリカバリ方式で保持し、エージェントが日常運用を行い、NFT は回復可能である

## 関連項目

- [[agent-economy/INDEX]]
- [[agent-economy/ai-agent-payment-protocols-overview]]
- [[agent-economy/privy-embedded-wallet-overview]]
- [[agent-economy/coinbase-cdp-developer-platform]]
- [[agent-economy/erc-7715-overview]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents]]
- [[agent-economy/ap2-overview]]
- [[agent-economy/embedded-wallet-network-effects-moat]]
- [[systems/threshold-bft-consensus-rust-implementations]]
- [[INDEX|FinWiki index]]

## 出典

- litprotocol.com の製品および開発者ドキュメント。
- developer.litprotocol.com の PKP 発行、Lit Actions、アクセス制御について。
- github.com/LIT-Protocol のノードソフトウェアおよびリファレンス SDK。
- Lit Spark ブログのエージェントウォレット向けしきい値署名パターンについて。

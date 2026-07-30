---
source: fintech/m0-network-infrastructure-update-2026
source_hash: 81f39a9a60c96335
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "M0 / M Network · 2026 インフラ更新 · モジュール型ステーブルコイン基盤"
translated_at: 2026-07-29T16:58:44.991Z
---
# M0 / M Network · 2026 インフラ更新 · モジュール型ステーブルコイン基盤

## TL;DR

M0 は単一の消費者向けステーブルコインブランドではなく、構築事業者と発行会社が独自ステーブルコインを構築するためのモジュール型基盤である。公式文書は、(1) アプリケーション固有の **Stablecoin Extensions**、(2) 規制対象の発行会社が担う発行 / 準備資産運用、(3) 共有流動性とクロスチェーン移転を扱う **Onchain Orchestration / M0 Portals** を区別する。従来このページにあった `USDM`、`MXNB pilot`、独自 `M Bridge`、特定の準備資産構成、時価総額、提携候補、ガバナンスしきい値などの 2026 数値は、引用されていた M0 一次資料から確認できなかったため削除した。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。[[fintech/m-network-m0-neutral-infrastructure|M0 中立インフラ基礎ページ]]、[[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン・チェーン・トークン戦略のトリレンマ]] とあわせて読む。

## 検証済みアーキテクチャ

[M0 アーキテクチャ概要](https://docs.m0.org/get-started/how-it-works) と [構築事業者向けガイド](https://docs.m0.org/build/overview/) が説明する現在の公開モデルは以下の通りである。

1. **構築事業者 / アプリケーション層** — 構築事業者は、ブランド、移転規則、アクセス制御、報酬分配、コンプライアンスロジックを設定した Stablecoin Extension を構築する。
2. **発行会社層** — 適格な金融機関が準備資産、発行 / 焼却、規制対応を担う。構築事業者は発行会社と提携し、自ら準備資産管理基盤を構築しない選択ができる。
3. **共有流動性層** — M0対応トークンは、プラットフォームの変換 / オーケストレーション機構を通じて流動性を共有できる。
4. **クロスチェーン層** — M0 Portals は Wormhole、Hyperlane、LayerZero のメッセージング / トークン移転フレームワークを利用する。したがって「汎用ブリッジを使わない独自の標準ブリッジ」という旧記述は誤りだった。
5. **M トークン** — プロトコル文書は `$M` をエクステンションの基礎となる ERC-20 トークンと説明し、収益を得る残高 / 得ない残高の二方式を定義する。これはガバナンストークンと同義ではない。

## 商品・役割マトリクス

下表は [M0 概要](https://docs.m0.org/get-started/overview/)、[発行会社向け概要](https://docs.m0.org/issuers/overview)、[クロスチェーン文書](https://docs.m0.org/build/cross-chain) の役割分担を要約する。

| 層 / 主体 | 検証済みの機能 | 意味しないこと |
|---|---|---|
| 構築事業者 | アプリケーション固有のステーブルコインと規則を設計 | 構築事業者が自動的に規制対象の発行会社になるわけではない |
| 発行提携先 | 許容される準備資産を保有し、管轄法域の下で発行 / 焼却を運用 | 一つの免許が世界各地での発行権限を生むわけではない |
| Stablecoin Extension | M0 の基盤に対してラップ / アンラップできる独自トークン契約 | すべてのエクステンションの適格性や報酬が同一とは限らない |
| Onchain Orchestration | 変換と流動性アクセスを調整 | 相手方、スマートコントラクト、規制上のリスクを除去しない |
| M0 Portals | 明記されたメッセージング事業者を使い、対応ネットワーク間でエクステンションを移転 | ブリッジに依存しない独自決済網ではない |
| `$M` | 収益を得る残高 / 得ない残高を持つ、担保に裏付けられたプロトコル構成要素 | 無関係な `$M` ガバナンストークン供給量の証拠ではない |

## エクステンションのテンプレート

公式の構築事業者向けガイドは、二つの中核テンプレートを説明する。

- **Treasury（`MYieldToOne`）** — 発生した報酬は、指定された一つのトレジャリーアドレスへ流れる。
- **Multi-Collateral（`JMI`）** — Treasury の機能を拡張し、USDC や USDT など、許可リストに登録されたステーブルコインを担保とする発行に対応する。

独自の挙動も可能だが、M0 は標準テンプレートを超える変更に独立監査が必要だとしている。収益の獲得も自動ではない。`enableEarning()` を呼び出す前に、エクステンション契約がオンチェーン設定プロセスを通じて収益取得者の承認を得る必要がある。

## ネットワークとブリッジの範囲

M0の対応ネットワーク一覧は変化する。2026-07-30 の確認時点で、構築事業者向けガイドは Ethereum、複数の EVM ネットワーク、Solana を挙げている。現在の権威ある一覧は、このウィキに固定したチェーン数ではなく [公式コントラクトアドレスページ](https://docs.m0.org/resources/addresses) である。

[クロスチェーンページ](https://docs.m0.org/build/cross-chain) は次を記載する。

- Wormhole Native Token Transfer
- Hyperlane general message passing
- LayerZero Omnichain Fungible Token

この構造は、明示的なブリッジ依存を残しながら、構築事業者へ複数ネットワークへの到達手段を提供する。したがってセキュリティ審査は、M0 のコントラクトと選択したクロスチェーン事業者の双方を対象にする必要がある。

## 公開エコシステムのスナップショット

[M0 ダッシュボード](https://dashboard.m0.org/) は、稼働中のステーブルコイン数、供給量、移転量のスナップショットを確認する第一の公式画面である。これらの値は動的であり、利用時は日付を付す必要がある。構築事業者向け文書は M0活用発行会社 / 商品の例を挙げるが、プラットフォームページに名前があるだけでは、特定の通貨、準備資産構成、免許範囲、流通契約を証明しない。

## デューデリジェンスのチェックリスト

M0活用トークンを規制対象の決済用ステーブルコインとして扱う前に、次を確認する。

1. 法的な発行会社と管轄法域
2. 準備資産方針とカストディ契約
3. 償還資格、所要時間、最低額、手数料
4. 残高が報酬を得るか、誰が受け取るか
5. 各ネットワーク上の展開済みコントラクトアドレス
6. ブリッジ / ポータル事業者と障害時の制御
7. 標準および独自コントラクトコード双方の監査報告
8. 収益取得者の承認を含む、現在のオンチェーン設定

## 関連項目

- [[fintech/INDEX|FinWiki フィンテック索引]]
- [[fintech/m-network-m0-neutral-infrastructure|M0 / M Network 中立ステーブルコイン基盤]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD 半コンプライアンス経路]]
- [[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1 政治型ステーブルコイン]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS 分散型ステーブルコイン]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配の経済性]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL トークン化 MMF 概要]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe トロイの木馬経路]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン・チェーン・トークン戦略のトリレンマ]]

## Sources

- M0 — About M0: https://docs.m0.org/get-started/overview/
- M0 — Architecture overview: https://docs.m0.org/get-started/how-it-works
- M0 — Build a stablecoin: https://docs.m0.org/build/overview/
- M0 — Cross-chain: https://docs.m0.org/build/cross-chain
- M0 — M token: https://docs.m0.org/protocol/m-token
- M0 — Contract addresses: https://docs.m0.org/resources/addresses
- M0 — Dashboard: https://dashboard.m0.org/

---
source: banking/minna-bank-baas-model
source_hash: e10f75fa56437b80
lang: ja
status: machine
fidelity: ok
title: "みんなの銀行 BaaS model"
translated_at: 2026-06-02T11:47:37.295Z
---

# みんなの銀行 BaaS model

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] の下に位置する。ピア / 対比の文脈については [[banking/mercari-bank-license-stack|メルカリバンク license stack]] と、より広いシステム / 規制の境界については [[banking/cooperative-banking-japan|Cooperative banking in Japan]] と照らし合わせて読まれたい。

## 要約

みんなの銀行の BaaS は、銀行機能を外部アプリへ埋め込む **API提供モデル** と、パートナー企業のブランドを持つ **パートナー支店モデル** の組み合わせで動く。重要なのは、差分が「銀行ライセンスの有無」ではなく、ユーザー接点・ブランド・API連携の深さにある点。[[banking/mercari-bank|Mercari Bank]] は、メルカリの強い生活導線にこの BaaS を載せた代表例。

## モデルマップ

| モデル | 何が変わるか | ユーザー体験 | 代表的なリンク |
|---|---|---|---|
| API提供モデル | パートナーアプリが API を通じてみんなの銀行の機能に接続する | 銀行口座 / 決済 / 残高の機能が、パートナーサービスの内部に現れる | [[banking/quick-deposit-four-methods|Quick deposit four methods]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]] |
| パートナー支店モデル | みんなの銀行の銀行構造の内部に、パートナーのブランドを持つ支店が作られる | パートナーのユーザーは、メルカリ支店のようなブランド化された銀行のフロントを目にする | [[banking/mercari-bank|Mercari Bank]]、pixiv / DMM / ignica / および ST のケース |
| ハイブリッド | パートナー支店に API 統合を加えたもの | ブランド化された支店 + パートナーアプリ内でのシームレスな資金移動 / 口座情報 | メルカリ / メルペイ × みんなの銀行 |

## 戦略的な読み

みんなの銀行の BaaS は、ネット銀行の「口座獲得」を自社アプリ単独ではなく、非金融サービスの顧客基盤へ外部化する戦略。FFG / みんなの銀行側の資料では、BaaS パートナー経由の口座獲得を増やし、B2C 口座と BaaS 口座の比率を将来的に反転させる方向性が示されている。

このモデルの強みは、銀行が単に API を売るのではなく、パートナー企業の生活接点を銀行接点に変換する点にある。メルカリなら売上金、外為どっとコムなら入金、イグニカなら買い物、pixiv ならクリエイター決済というように、既存の利用文脈に銀行機能を差し込む。

## ライセンス境界

「BaaS partner = 銀行業者」ではない。預金口座・銀行機能の主体はみんなの銀行であり、パートナー側は API 接続、電子決済等代行業、資金移動業、前払式支払手段、銀行代理業など、提供機能に応じた別のライセンス境界を持つ。

そのため、BaaS の設計で見るべき軸は次の 3 つ。

| 軸 | 問い |
|---|---|
| 口座 | 誰が預金契約の主体か |
| 指図 | 誰が資金移動や口座操作の指図を受けるか |
| インタフェース | どのアプリ / ブランドがユーザー接点になるか |

## メルカリのケース

[[banking/mercari-bank|メルカリバンク]] は、みんなの銀行口座をメルカリアプリからメルペイと API 連携して使うサービスとして開始された。売上金を即時かつ手数料無料でみんなの銀行普通預金口座に送れることが中核 UX で、みんなの銀行のパートナー支店「メルカリ支店」を使う。

ここでの要点は、メルペイが銀行になったわけではないこと。メルペイは電子決済等代行業者として、みんなの銀行との API 接続を通じて口座情報の表示や資金移動指図を扱う。

## 関連項目

- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[regional-banks/fukuoka-fg]]
- [[regional-banks/ssnb]]
- [[payment-firms/gmo-aozora-net]]

## 出典

- みんなの銀行: みんなのBaaS official service page.
- みんなの銀行: パートナー支店モデル official page.
- みんなの銀行: 提携サービス / BaaS overview.
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略.
- みんなの銀行 / メルペイ, 2025-12-18: メルカリバンク service launch release.
